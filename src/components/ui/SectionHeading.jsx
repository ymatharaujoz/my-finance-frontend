import { motion } from 'framer-motion';
import { fadeUp, viewportSettings } from '../../lib/motion';

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}
    >
      <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </motion.div>
  );
}
