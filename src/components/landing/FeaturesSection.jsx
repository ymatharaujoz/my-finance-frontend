import { motion } from 'framer-motion';
import { features } from '../../data/landing-content';
import { cardHover, fadeUp, staggerContainer, viewportSettings } from '../../lib/motion';
import { GlassCard } from '../ui/GlassCard';
import { IconBadge } from '../ui/IconBadge';
import { SectionHeading } from '../ui/SectionHeading';

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Feito para clareza do negócio"
          title="Tudo o que o empresário precisa para entender lucro, vendas e desempenho por canal."
          description="De métricas ao vivo a gráficos executivos, cada bloco foi desenhado para ajudar você a tomar decisões comerciais com mais rapidez."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp} initial="rest" whileHover="hover">
              <motion.div variants={cardHover}>
                <GlassCard className="h-full p-7">
                  <IconBadge icon={feature.icon} />
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
