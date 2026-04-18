export const stats = [
  { value: '+18,4%', label: 'Mais Clareza Sobre a Margem' },
  { value: '24/7', label: 'Acesso aos Indicadores do Negócio' },
  { value: '+10 Painéis', label: 'Para Lucro, Vendas e POS' },
];

export const features = [
  {
    icon: 'spark',
    title: 'Inteligência de Margem',
    description:
      'Acompanhe margem bruta e lucro líquido em uma única visualização para entender o que realmente impulsiona o desempenho.',
  },
  {
    icon: 'pulse',
    title: 'Monitoramento de Vendas',
    description:
      'Veja quantidade de vendas, tendência de pedidos e movimentação de faturamento com visibilidade quase em tempo real.',
  },
  {
    icon: 'shield',
    title: 'Performance de POS',
    description:
      'Compare o desempenho dos pontos de venda, identifique os melhores canais e encontre rapidamente lojas com baixa performance.',
  },
  {
    icon: 'layers',
    title: 'Dashboards Executivos',
    description:
      'Use dashboards visuais e gráficos pensados para empresários que precisam de respostas rápidas, não de mais abas em planilhas.',
  },
  {
    icon: 'orbit',
    title: 'Integrações com Marketplaces',
    description:
      'Centralize seus números com conectores para canais como Mercado Livre, Shopee e Amazon.',
  },
  {
    icon: 'bolt',
    title: 'Alertas para Decisão',
    description:
      'Identifique variações incomuns em lucro, margem ou volume de vendas antes que se tornem problemas operacionais caros.',
  },
];

export const pricingPlans = [
  {
    name: 'Inicial',
    description: 'Para pequenas empresas que precisam de uma visão financeira clara em um único lugar.',
    monthlyPrice: 24,
    yearlyPrice: 19,
    cta: 'Escolher Inicial',
    featured: false,
    features: [
      'Dashboard Financeiro Principal',
      'Métricas de Vendas e Lucro',
      'Gráficos Essenciais',
      'Suporte por Email',
    ],
  },
  {
    name: 'Pro',
    description: 'Para operações em crescimento que precisam de análises mais profundas e decisões mais rápidas.',
    monthlyPrice: 79,
    yearlyPrice: 63,
    cta: 'Escolher Pro',
    featured: true,
    badge: 'Mais Popular',
    features: [
      'Análise Avançada de Margem',
      'Detalhamento de Lucro Líquido',
      'Acompanhamento de POS',
      'Suporte Prioritário',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Para empresas com várias marcas ou unidades que precisam de relatórios personalizados e suporte de implantação.',
    monthlyPrice: null,
    yearlyPrice: null,
    cta: 'Falar com Vendas',
    featured: false,
    features: [
      'Integrações Personalizadas',
      'Onboarding Dedicado',
      'Relatórios Executivos',
      'SLAs Customizados',
    ],
  },
];

export const integrations = [
  {
    name: 'Mercado Livre',
    icon: 'mercado-livre',
    status: 'Planejado',
    description: 'Unifique pedidos, faturamento e margens do maior canal de marketplace da sua operação.',
  },
  {
    name: 'Shopee',
    icon: 'shopee',
    status: 'Planejado',
    description: 'Visualize volume, ticket médio e impacto nos lucros sem depender de planilhas manuais.',
  },
  {
    name: 'Amazon',
    icon: 'amazon',
    status: 'Planejado',
    description: 'Consolide performance multicanal e acompanhe o peso real do marketplace nas suas decisões.',
  },
];
