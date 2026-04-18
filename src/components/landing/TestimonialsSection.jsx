import { motion } from 'framer-motion';
import { testimonials } from '../../data/landing-content';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';
import { viewportSettings } from '../../lib/motion';

const carouselItems = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Prova social"
          title="Confiado por lideres que querem numeros mais claros e decisoes mais rapidas."
          description="Times de varejo, e-commerce e operacoes multicanal usam o MarginFlow para entender o que vende, de onde vem o lucro e onde agir."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div className="testimonial-marquee-mask">
            <motion.div
              className="testimonial-marquee-track"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
            >
              {carouselItems.map((testimonial, index) => (
                <GlassCard
                  key={`${testimonial.name}-${index}`}
                  className="testimonial-carousel-card h-full min-w-[19rem] p-7 sm:min-w-[22rem] lg:min-w-[24rem]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 flex items-center gap-2 text-sky-500">
        <span className="text-lg">★★★★★</span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Cliente ativo
        </span>
      </div>
      <p className="text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>
      <div className="mt-auto pt-8">
        <div className="border-t border-slate-200 pt-6">
          <div className="text-base font-semibold text-slate-900">{testimonial.name}</div>
          <div className="mt-1 text-sm text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
