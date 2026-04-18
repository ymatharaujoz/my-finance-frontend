import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../../data/landing-content';
import { fadeUp, staggerContainer, viewportSettings } from '../../lib/motion';
import { GradientButton } from '../ui/GradientButton';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = useMemo(
    () =>
      pricingPlans.map((plan) => ({
        ...plan,
        displayPrice:
          plan.monthlyPrice === null
            ? 'Personalizado'
            : `$${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}`,
      })),
    [billingCycle],
  );

  return (
    <section id="pricing" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Planos flexíveis"
          title="Escolha o plano ideal para o momento da sua empresa."
          description="Comece com visibilidade essencial, avance para análises mais profundas e evolua para relatórios personalizados conforme o negócio cresce."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm">
            {['monthly', 'yearly'].map((cycle) => (
              <button
                key={cycle}
                type="button"
                onClick={() => setBillingCycle(cycle)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition ${
                  billingCycle === cycle
                    ? 'bg-linear-to-r from-blue-600 to-sky-400 text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {cycle === 'monthly' ? 'mensal' : 'anual'}
              </button>
            ))}
          </div>
        </motion.div>

        <p className="mt-4 text-center text-sm text-sky-700">
          Economize 20% no plano anual e ganhe onboarding prioritário.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-14 grid gap-6 xl:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <GlassCard
                className={`relative h-full p-8 ${
                  plan.featured
                    ? 'border-sky-200 bg-linear-to-b from-sky-50 via-white to-blue-50 shadow-[0_24px_70px_rgba(96,165,250,0.18)]'
                    : ''
                }`}
              >
                {plan.badge ? (
                  <div className="absolute top-6 right-6 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {plan.badge}
                  </div>
                ) : null}

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                  {plan.name}
                </p>
                <h3 className="mt-4 text-4xl font-semibold text-slate-900">
                  {plan.displayPrice}
                  {plan.monthlyPrice !== null ? (
                    <span className="ml-2 text-base font-normal text-slate-500">/ usuário</span>
                  ) : null}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{plan.description}</p>

                <div className="mt-8">
                  <GradientButton
                    variant={plan.featured ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.cta}
                  </GradientButton>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
