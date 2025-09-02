import Hero from '../components/Hero.jsx'

const items = [
  {
    title: "Financial Planning Sprint",
    desc: "90-minute session to map goals, cashflow, debt, and first investments.",
    bullets: ["Clarity worksheet", "Priority ladder", "Action plan for 30 days"]
  },
  {
    title: "Money Mindset Reset",
    desc: "Replace fear with systems. Build habits that automate progress.",
    bullets: ["Triggers & safeguards", "Savings automation", "Spending rules"]
  },
  {
    title: "Wealth Strategy Blueprint",
    desc: "A simple, resilient, nature-inspired plan to build & protect wealth.",
    bullets: ["Asset allocation", "Risk buffers", "Quarterly review cadence"]
  }
]

export default function Services() {
  return (
    <div>
      <Hero
        title="Services"
        subtitle="Strategy first. Tools second. We build sturdy plans with elegant execution."
        cta={null} secondCta={null}
      />
      <section className="mx-auto max-w-7xl px-4 -mt-10 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card-glass p-6">
            <h3 className="text-xl font-semibold gradient-text">{it.title}</h3>
            <p className="mt-2 text-white/80 text-sm">{it.desc}</p>
            <ul className="mt-4 text-white/80 text-sm list-disc pl-5 space-y-1">
              {it.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
