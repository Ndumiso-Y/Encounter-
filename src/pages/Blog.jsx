import Hero from '../components/Hero.jsx'

const posts = [
  {title: "Start Small, Stay Steady", date: "2025-09-02", excerpt: "How to launch a savings habit that sticks."},
  {title: "The River Model of Cashflow", date: "2025-09-02", excerpt: "Design channels that guide money calmly."},
  {title: "Barbell Risk in Real Life", date: "2025-09-02", excerpt: "Safety first—with tiny experiments at the edge."},
]

export default function Blog() {
  return (
    <div>
      <Hero
        title="Insights & Updates"
        subtitle="Short reads that keep your money in motion."
        cta={null} secondCta={null}
      />
      <section className="mx-auto max-w-5xl px-4 -mt-10 grid gap-6 md:grid-cols-3">
        {posts.map(p => (
          <article key={p.title} className="card-glass p-6">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-xs text-white/60">{new Date(p.date).toDateString()}</p>
            <p className="mt-2 text-sm text-white/80">{p.excerpt}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
