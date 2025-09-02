import Hero from '../components/Hero.jsx'

export default function About() {
  return (
    <div>
      <Hero
        title="About Encounter"
        subtitle="We extract financial wisdom from the rhythms of nature—helping you plan, grow, and protect wealth with clarity."
        cta={null} secondCta={null}
      />
      <section className="mx-auto max-w-5xl px-4 -mt-10">
        <div className="card-glass p-8">
          <h3 className="text-xl font-semibold">Why we exist</h3>
          <p className="mt-2 text-white/80">Because money is emotional and ecosystems are logical. We pair both: mindset and models. Expect frameworks, checklists, and calm execution.</p>
          <ul className="mt-4 list-disc pl-5 text-white/80 text-sm space-y-1">
            <li>Ant logic: tiny daily deposits compound into forests.</li>
            <li>River logic: create channels for cashflow and avoid floods.</li>
            <li>Tree logic: deep roots (emergency fund), strong trunk (income), branching assets (diversification).</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
