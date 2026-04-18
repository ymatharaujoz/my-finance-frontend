import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const menuItems = [
  { id: 'visao-geral', label: 'Visão Geral', badge: 'V' },
  { id: 'financeiro', label: 'Financeiro', badge: 'F' },
  { id: 'produtos', label: 'Produtos', badge: 'P' },
  { id: 'relatorios', label: 'Relatórios', badge: 'R' },
];

const kpis = [
  { label: 'Lucro Líquido', value: 'R$ 284 mil', trend: '+12,4%', tone: 'emerald' },
  { label: 'Margem Média', value: '22,8%', trend: '+1,8 pts', tone: 'sky' },
  { label: 'Ponto de Equilíbrio', value: 'R$ 412 mil', trend: '92% atingido', tone: 'amber' },
  { label: 'ROI Mensal', value: '31,6%', trend: '+4,2 pts', tone: 'violet' },
];

const performanceSeries = [
  { month: 'Jan', receita: 420, lucro: 102 },
  { month: 'Fev', receita: 448, lucro: 112 },
  { month: 'Mar', receita: 476, lucro: 124 },
  { month: 'Abr', receita: 518, lucro: 141 },
  { month: 'Mai', receita: 542, lucro: 155 },
  { month: 'Jun', receita: 586, lucro: 174 },
];

const marginMix = [
  { label: 'Linha Premium', value: 42, color: 'from-sky-500 to-blue-600' },
  { label: 'Linha Core', value: 33, color: 'from-emerald-400 to-emerald-600' },
  { label: 'Acessórios', value: 16, color: 'from-amber-300 to-orange-500' },
  { label: 'Serviços', value: 9, color: 'from-violet-400 to-fuchsia-500' },
];

const products = [
  {
    name: 'Kit Expansao Solar',
    category: 'Energia',
    sales: 128,
    cost: 'R$ 68.400',
    margin: '29,4%',
    roi: '36,2%',
    profit: 'R$ 20.100',
    status: 'Alta Margem',
  },
  {
    name: 'Painel Smart Business',
    category: 'Software',
    sales: 96,
    cost: 'R$ 44.900',
    margin: '34,1%',
    roi: '41,7%',
    profit: 'R$ 23.000',
    status: 'Crescimento',
  },
  {
    name: 'Modulo POS Connect',
    category: 'Operacao',
    sales: 142,
    cost: 'R$ 57.300',
    margin: '18,8%',
    roi: '22,6%',
    profit: 'R$ 13.200',
    status: 'Atenção',
  },
  {
    name: 'Linha Office Prime',
    category: 'Varejo',
    sales: 74,
    cost: 'R$ 31.800',
    margin: '26,3%',
    roi: '29,8%',
    profit: 'R$ 11.700',
    status: 'Estável',
  },
  {
    name: 'Pacote Consultoria 360',
    category: 'Serviços',
    sales: 38,
    cost: 'R$ 18.600',
    margin: '47,2%',
    roi: '54,4%',
    profit: 'R$ 16.900',
    status: 'Alta Margem',
  },
];

export function AdminPortal({ session, onLogout }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('visao-geral');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [search, setSearch] = useState('');

  const categories = ['Todos', ...new Set(products.map((product) => product.category))];
  const statuses = ['Todos', ...new Set(products.map((product) => product.status))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'Todos' || product.category === selectedCategory;
      const statusMatch = selectedStatus === 'Todos' || product.status === selectedStatus;
      const searchMatch =
        !search.trim() ||
        product.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        product.category.toLowerCase().includes(search.trim().toLowerCase());

      return categoryMatch && statusMatch && searchMatch;
    });
  }, [search, selectedCategory, selectedStatus]);

  const maxRevenue = Math.max(...performanceSeries.map((item) => item.receita));
  const maxProfit = Math.max(...performanceSeries.map((item) => item.lucro));

  return (
    <main className="portal-shell min-h-screen text-slate-900">
      <div className="portal-backdrop" />
      <div className="relative flex min-h-screen flex-col lg:flex-row">
        <aside
          className={`portal-sidebar ${sidebarCollapsed ? 'portal-sidebar-collapsed' : ''}`}
        >
          <div className={`portal-brand ${sidebarCollapsed ? 'portal-brand-collapsed' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-sky-400 text-lg font-bold text-white">
                N
              </div>
              {!sidebarCollapsed ? (
                <div>
                  <div className="text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
                    MarginFlow
                  </div>
                  <div className="text-xs text-slate-500">Portal Administrativo</div>
                </div>
              ) : null}
            </div>
            <button
              type="button"
              className="portal-icon-button"
              onClick={() => setSidebarCollapsed((current) => !current)}
              aria-label="Minimizar menu"
            >
              {sidebarCollapsed ? '<' : '>'}
            </button>
          </div>

          <div className="portal-menu-frame">
            <div className="mb-4 flex items-center justify-between">
              {!sidebarCollapsed ? (
                <div>
                </div>
              ) : (
                <div className="mx-auto text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Menu
                </div>
              )}
            </div>

            <nav className="space-y-3">
              {menuItems.map((item) => {
                const active = activeMenu === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveMenu(item.id)}
                    className={`portal-nav-item ${active ? 'portal-nav-item-active' : ''} ${
                      sidebarCollapsed ? 'portal-nav-item-collapsed' : ''
                    }`}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    <span className="portal-nav-badge">{item.badge}</span>
                    {!sidebarCollapsed ? (
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-slate-900">
                          {item.label}
                        </span>
                        <span className="block truncate text-xs text-slate-500">
                          {item.caption}
                        </span>
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <section className="flex-1 px-5 py-5 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <header className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/72 px-6 py-5 shadow-[0_24px_60px_rgba(148,163,184,0.16)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Visão executiva
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Finanças da Empresa em Tempo Real
              </h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Atualizado hoje às 17:20
              </div>
              <button
                type="button"
                onClick={onLogout}
                className="rounded-full bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(59,130,246,0.28)]"
              >
                Sair
              </button>
            </div>
          </header>

          <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            <section className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {kpis.map((item) => (
                  <GlassCard key={item.label} className="portal-kpi-card p-5">
                    <div className="portal-kpi-content">
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <div className="mt-3 text-3xl font-semibold leading-none text-slate-900">
                        {item.value}
                      </div>
                      <span className={`portal-kpi-pill portal-kpi-pill-${item.tone}`}>
                        {item.trend}
                      </span>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <GlassCard className="overflow-hidden p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                      Dashboard principal
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      Receita x Lucro Líquido
                    </h2>
                  </div>
                  <p className="text-sm text-slate-500">
                    Evolução Semestral da Performance Financeira
                  </p>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50/80 p-5">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      <span>Receita</span>
                      <span>Lucro Líquido</span>
                    </div>
                    <div className="mt-6 flex h-72 items-end gap-4">
                      {performanceSeries.map((item) => (
                        <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                          <div className="flex h-56 items-end gap-2">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${(item.receita / maxRevenue) * 100}%` }}
                              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              className="w-5 rounded-full bg-linear-to-t from-blue-600 to-sky-400 shadow-[0_10px_24px_rgba(56,189,248,0.24)]"
                            />
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${(item.lucro / maxProfit) * 100}%` }}
                              transition={{
                                delay: 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="w-5 rounded-full bg-linear-to-t from-emerald-500 to-emerald-300 shadow-[0_10px_24px_rgba(16,185,129,0.22)]"
                            />
                          </div>
                          <div className="text-sm font-medium text-slate-500">{item.month}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-slate-200 bg-white p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                      Composição da Margem
                    </p>
                    <div className="mt-5 space-y-4">
                      {marginMix.map((item) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                            <span>{item.label}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="h-3 rounded-full bg-slate-100">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                              className={`h-3 rounded-full bg-linear-to-r ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </section>

            <section className="space-y-5">
              <GlassCard className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Radar de indicadores
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    ['Ticket Médio', 'R$ 2.480'],
                    ['CAC', 'R$ 312'],
                    ['Conversão', '4,8%'],
                    ['Payback', '5,2 meses'],
                    ['Markup', '2,3x'],
                    ['Meta Mensal', '87%'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50/75 px-4 py-5"
                    >
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </section>
          </div>

          <GlassCard className="mt-5 overflow-hidden p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Produtos e rentabilidade
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <label className="portal-filter-field">
                  <span>Buscar</span>
                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Nome ou Categoria"
                  />
                </label>
                <label className="portal-filter-field">
                  <span>Categoria</span>
                  <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="portal-filter-field">
                  <span>Status</span>
                  <select
                    value={selectedStatus}
                    onChange={(event) => setSelectedStatus(event.target.value)}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-left text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    <th className="px-4">Produto</th>
                    <th className="px-4">Categoria</th>
                    <th className="px-4">Vendas</th>
                    <th className="px-4">Custo</th>
                    <th className="px-4">Margem</th>
                    <th className="px-4">ROI</th>
                    <th className="px-4">Lucro</th>
                    <th className="px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.name} className="portal-table-row">
                      <td className="rounded-l-[1.4rem] px-4 py-4 font-semibold text-slate-900">
                        {product.name}
                      </td>
                      <td className="px-4 py-4 text-slate-600">{product.category}</td>
                      <td className="px-4 py-4 text-slate-600">{product.sales}</td>
                      <td className="px-4 py-4 text-slate-600">{product.cost}</td>
                      <td className="px-4 py-4 text-slate-600">{product.margin}</td>
                      <td className="px-4 py-4 text-slate-600">{product.roi}</td>
                      <td className="px-4 py-4 font-semibold text-slate-900">{product.profit}</td>
                      <td className="rounded-r-[1.4rem] px-4 py-4">
                        <span className="portal-status-pill">{product.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}
