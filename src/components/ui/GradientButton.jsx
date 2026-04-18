import { motion } from 'framer-motion';

export function GradientButton({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300/80 focus:ring-offset-2 focus:ring-offset-white';

  const variants = {
    primary:
      'bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-[0_12px_40px_rgba(59,130,246,0.28)] hover:shadow-[0_18px_46px_rgba(59,130,246,0.34)]',
    secondary:
      'border border-slate-200 bg-white/80 text-slate-700 backdrop-blur-xl hover:border-sky-300 hover:bg-white',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
