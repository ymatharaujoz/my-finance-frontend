const iconMap = {
  spark: (
    <path
      d="M12 3l1.9 4.8L19 9.7l-4 3.3 1.2 5-4.2-2.6L7.8 18l1.2-5-4-3.3 5.1-1.9L12 3z"
      fill="currentColor"
    />
  ),
  pulse: (
    <path
      d="M3 12h4l2-5 4 10 2-5h6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="M12 3l7 3v5c0 4.4-2.9 8.4-7 9-4.1-.6-7-4.6-7-9V6l7-3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  layers: (
    <path
      d="M12 4l8 4-8 4-8-4 8-4zm8 8l-8 4-8-4m16 4l-8 4-8-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  orbit: (
    <>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path
        d="M4 12c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5-3.6 6.5-8 6.5-8-2.9-8-6.5zm8-8c2.5 1.8 4 4.8 4 8s-1.5 6.2-4 8m0-16c-2.5 1.8-4 4.8-4 8s1.5 6.2 4 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </>
  ),
  bolt: (
    <path
      d="M13 2L5 13h5l-1 9 8-11h-5l1-9z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'mercado-livre': (
    <>
      <rect x="3" y="5" width="18" height="14" rx="7" fill="currentColor" opacity="0.18" />
      <path
        d="M7.8 12c1.1-1 2.2-1.5 3.2-1.5 1.2 0 2 .7 2.6 1.3.6.6 1 1 1.7 1 .9 0 1.9-.5 3-1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.6 14.8l1.3-2m5.5 2l-1.3-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </>
  ),
  shopee: (
    <>
      <path
        d="M7 9.5h10l-.7 8.2a2 2 0 0 1-2 1.8H9.7a2 2 0 0 1-2-1.8L7 9.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 10V8.8A2.8 2.8 0 0 1 12 6a2.8 2.8 0 0 1 2.8 2.8V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10.2 14.2c.6.6 1.3.9 2 .9 1 0 1.7-.5 1.7-1.2 0-1.9-3.6-.7-3.6-2.9 0-.8.8-1.4 1.8-1.4.7 0 1.3.2 1.8.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </>
  ),
  amazon: (
    <>
      <path
        d="M8.8 15.2c1.6 1 3.6 1.5 5.6 1.5 1.2 0 2.4-.2 3.5-.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9.5 12.7c0-2.1 1.1-3.3 2.8-3.3 1.7 0 2.8 1.2 2.8 3.3v2.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 17.2c3 .6 5.6.4 8.1-.7m0 0l-.6 1.5m.6-1.5l-1.7-.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function IconBadge({ icon }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 shadow-[0_10px_40px_rgba(6,182,212,0.18)]">
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        {iconMap[icon]}
      </svg>
    </span>
  );
}
