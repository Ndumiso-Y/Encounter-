import Hero from '../components/Hero.jsx'

const models = [
  {title:"Buckets, Not Budgets", text:"Income flows into buckets: Essentials, Growth, Giving, Optional. Automate the splits."},
  {title:"Floor & Ceiling", text:"Minimum savings (floor) every month, plus upside rules (ceiling) for bonuses or windfalls."},
  {title:"Barbell Risk", text:"Keep core ultra-safe; take small, asymmetric bets at the edge."},
  {title:"Quarterly Cadence", text:"Review and rebalance once per quarter—calm beats constant tinkering."},
]

export default function WealthWisdom() {
  return (
    <div>
      <Hero
        title="Wealth Wisdom"
        subtitle="Simple mental models to guide every money move."
        cta={null} secondCta={null}
      />
      <section className="mx-auto max-w-5xl px-4 -mt-10 space-y-4">
        {models.map(m => (
          <div key={m.title} className="card-glass p-6">
            <h3 className="text-lg font-bold text-white">{m.title}</h3>
            <p className="mt-2 text-white/80 text-sm">{m.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
