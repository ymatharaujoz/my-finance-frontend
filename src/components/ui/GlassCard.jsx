export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200/80 bg-white/82 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
