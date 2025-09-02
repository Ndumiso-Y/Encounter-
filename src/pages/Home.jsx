import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'

const highlights = [
  { title: "Money in Motion", desc: "Practical flows to move your money with intent—from income to investments.", href: "/services" },
  { title: "Lessons from Nature", desc: "Ants, trees, rivers: nature teaches compounding, diversification & resilience.", href: "/nature-lessons" },
  { title: "Wealth Wisdom", desc: "Simple mental models to build, protect, and transfer wealth.", href: "/wealth-wisdom" }
]

export default function Home() {
  return (
    <div>
      <Hero
        title="Encounter: Live Rich. Think Wise."
        subtitle="We blend #FinancialPlanning with #LessonsFromNature to craft #SmartMoneyMoves. Founded by Mahau Makhura."
        cta={<Link to="/contact" className="rounded-xl bg-black/90 px-6 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-black">Book a Session</Link>}
        secondCta={<Link to="/services" className="rounded-xl bg-white/15 px-6 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/20">Explore Services</Link>}
      />

      <section className="mx-auto max-w-7xl px-4 -mt-12 grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <Link to={h.href} key={h.title} className="card-glass p-6 hover:scale-[1.01] transition block">
            <h3 className="text-xl font-semibold gradient-text">{h.title}</h3>
            <p className="mt-2 text-white/80 text-sm">{h.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-16 grid gap-8 md:grid-cols-2">
        <div className="card-glass p-8">
          <h3 className="text-2xl font-semibold">Founder</h3>
          <p className="mt-2 text-white/80 text-sm">Mahau Makhura leads Encounter with a mission: align money with meaning. We teach systems that are calm, simple, and robust.</p>
          <img src={`${import.meta.env.BASE_URL}assets/founder/Raymond.jpg`} alt="Founder Raymond placeholder" className="mt-6 rounded-xl ring-1 ring-white/10"/>
        </div>
        <div className="card-glass p-8">
          <h3 className="text-2xl font-semibold">Our Hashtags</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {["#FinancialPlanning","#WealthWisdom","#MoneyMindset","#FinancialFreedom","#NatureAndFinance","#LessonsFromNature","#FinancialStrategy","#SmartMoneyMoves","#LiveRichThinkWise","#MoneyInMotion"].map(tag => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
