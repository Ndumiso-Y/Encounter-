import Hero from '../components/Hero.jsx'

const lessons = [
  {name:"Ants", take:"Micro-actions compound. Save tiny, daily."},
  {name:"Trees", take:"Deep roots = emergency fund. Branches = diversified assets."},
  {name:"Rivers", take:"Design cashflow channels. Avoid leaks and floods."},
  {name:"Bees", take:"Cooperative networks create outsized yield."}
]

export default function NatureLessons() {
  return (
    <div>
      <Hero
        title="Lessons from Nature"
        subtitle="Nature is a masterclass in systems. We borrow patterns that survive storms."
        cta={null} secondCta={null}
      />
      <section className="mx-auto max-w-5xl px-4 -mt-10 grid gap-6 md:grid-cols-2">
        {lessons.map(l => (
          <div key={l.name} className="card-glass p-6">
            <h3 className="text-lg font-semibold">{l.name}</h3>
            <p className="mt-2 text-white/80 text-sm">{l.take}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
