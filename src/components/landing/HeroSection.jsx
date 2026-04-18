import { motion } from 'framer-motion';
import { stats } from '../../data/landing-content';
import { fadeUp, staggerContainer, viewportSettings } from '../../lib/motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientButton } from '../ui/GradientButton';

export function HeroSection({ onAccessPlatform }) {
  return (
    <section className="relative overflow-hidden px-6 pt-8 pb-20 sm:px-8 lg:px-12 lg:pt-10 lg:pb-28">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-sky-400 text-lg font-bold text-white">
              N
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.24em] text-sky-700 uppercase">
                MarginFlow
              </div>
              <div className="text-sm text-slate-500">
                Análise para empresários que precisam de visibilidade real sobre o lucro
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <nav className="flex items-center gap-8">
              <a href="#features" className="transition hover:text-slate-900">
                Recursos
              </a>
              <a href="#pricing" className="transition hover:text-slate-900">
                Planos
              </a>
            </nav>
            <GradientButton className="px-5 py-2.5 text-xs tracking-[0.18em] uppercase" onClick={onAccessPlatform}>
              Acessar Plataforma
            </GradientButton>
          </div>
        </header>

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportSettings}
            className="relative z-10"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full border border-sky-100 bg-sky-50/90 px-4 py-2 text-sm text-sky-700 backdrop-blur-xl"
            >
              Feito para margem, lucro liquido, ponto de equilibrio e performance de vendas
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              Veja os números que realmente movem o seu negócio.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              O MarginFlow entrega uma plataforma premium para acompanhar margem, lucro líquido,
              resultados de POS, quantidade de vendas e desempenho por canal em um dashboard
              moderno e intuitivo.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton variant="secondary">Agendar Demonstração</GradientButton>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="px-5 py-4">
                  <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <GlassCard className="relative overflow-hidden p-5 sm:p-6">
              <div className="dashboard-glow" />
              <div className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-sky-300/90 to-transparent" />
              <div className="rounded-[1.6rem] border border-slate-200 bg-white/92 p-5 shadow-[0_24px_60px_rgba(148,163,184,0.18)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Visão Geral do Desempenho</p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900">
                      Dashboard do Negócio em Abril
                    </h3>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Atualizado ao Vivo
                  </span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>Métricas Principais</span>
                        <span>Atualizado há 2 min</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          ['Lucro Líquido', '84'],
                          ['Margem', '76'],
                          ['Quantidade de vendas', '91'],
                        ].map(([label, width]) => (
                          <div key={label}>
                            <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                              <span>{label}</span>
                              <span>{width}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-slate-200">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${width}%` }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="h-2 rounded-full bg-linear-to-r from-blue-600 to-sky-400"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-500">Roadmap de Integrações</p>
                          <p className="mt-1 text-sm text-slate-700">
                            Mercado Livre, Shopee e Amazon estão no plano de integrações para
                            centralizar os dados dos canais em um único lugar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-sky-100 bg-linear-to-br from-sky-50 via-white to-blue-50 p-4">
                      <p className="text-sm text-slate-500">Lucro Líquido</p>
                      <div className="mt-3 text-4xl font-semibold text-slate-900">R$ 48,2 mil</div>
                      <p className="mt-2 text-sm text-sky-700">Alta de 12,6% vs Mês Anterior</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-4">
                      <p className="text-sm text-slate-500">Margem Operacional</p>
                      <div className="mt-3 flex items-end gap-3">
                        <div className="text-3xl font-semibold text-slate-900">18,7%</div>
                        <span className="mb-1 text-sm text-emerald-700">+2,1 pts</span>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                      {[
                        ['Vendas na Semana', '1.284 Pedidos'],
                      ].map(([title, caption]) => (
                        <div
                          key={title}
                          className="rounded-3xl border border-slate-200 bg-white p-4"
                        >
                          <p className="text-sm text-slate-500">{title}</p>
                          <p className="mt-2 text-sm font-medium text-slate-900">{caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
