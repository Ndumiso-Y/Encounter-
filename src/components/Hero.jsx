export default function Hero({title, subtitle, cta, secondCta}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="r" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#r)"/>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-28 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {cta}
          {secondCta}
        </div>
      </div>
    </section>
  )
}
