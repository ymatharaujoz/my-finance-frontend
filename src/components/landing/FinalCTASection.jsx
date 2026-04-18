import { motion } from 'framer-motion';
import { viewportSettings } from '../../lib/motion';
import { GlassCard } from '../ui/GlassCard';
import { GradientButton } from '../ui/GradientButton';

export function FinalCTASection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7 }}
        >
          <GlassCard className="relative overflow-hidden px-8 py-12 sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-linear-to-r from-sky-100/90 via-white to-amber-50/80" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Pronto para elevar sua visibilidade?
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  De ao seu negócio uma visão mais clara sobre lucro, margem e performance de vendas.
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <GradientButton variant="secondary">Agendar Demonstração </GradientButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
