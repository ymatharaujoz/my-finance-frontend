import { motion } from 'framer-motion';
import { integrations } from '../../data/landing-content';
import { fadeUp, staggerContainer, viewportSettings } from '../../lib/motion';
import { GlassCard } from '../ui/GlassCard';
import { IconBadge } from '../ui/IconBadge';
import { SectionHeading } from '../ui/SectionHeading';

export function IntegrationsSection() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-12 lg:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/88 px-6 py-10 shadow-[0_24px_80px_rgba(148,163,184,0.14)] backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-300 to-transparent" />

          <SectionHeading
            eyebrow="Integrações"
            title="Uma área de integrações mais limpa, clara e preparada para crescer."
            description="Em vez de misturar cards e blocos pesados, a seção apresenta os marketplaces de forma organizada e explica o valor da centralização com um fluxo visual simples."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-12 grid gap-5 lg:grid-cols-3"
          >
            {integrations.map((integration) => (
              <motion.div key={integration.name} variants={fadeUp}>
                <GlassCard className="integration-card h-full p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <IconBadge icon={integration.icon} />
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{integration.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          Marketplace
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {integration.status}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{integration.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7 }}
            className="mt-10 grid gap-4 rounded-[1.8rem] border border-slate-200 bg-slate-50/80 p-5 md:grid-cols-3"
          >
            {[
              ['1. Captura', 'Receba dados dos marketplaces e pontos de venda em um único fluxo.'],
              ['2. Consolidação', 'Agrupe lucro, margem e quantidade de vendas sem retrabalho manual.'],
              ['3. Decisão', 'Use o dashboard para agir rápido com base em números centralizados.'],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="rounded-3xl bg-white px-5 py-6 shadow-[0_10px_30px_rgba(148,163,184,0.12)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  {title}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
