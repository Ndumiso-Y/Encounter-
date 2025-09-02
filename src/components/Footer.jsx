import { Link } from 'react-router-dom'

const hashtags = [
  "#FinancialPlanning","#WealthWisdom","#MoneyMindset","#FinancialFreedom",
  "#NatureAndFinance","#LessonsFromNature","#FinancialStrategy",
  "#SmartMoneyMoves","#LiveRichThinkWise","#MoneyInMotion"
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}assets/logo/Logo%20icon%20black.png`} alt="Logo" className="h-8 w-8 rounded"/>
            <span className="font-semibold">Encounter</span>
          </div>
          <p className="mt-3 text-sm text-white/70">We blend wisdom from nature with modern financial strategy—so you live rich and think wise.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-white/80">
            <li><Link to="/about" className="hover:gradient-text">About</Link></li>
            <li><Link to="/services" className="hover:gradient-text">Services</Link></li>
            <li><Link to="/nature-lessons" className="hover:gradient-text">Nature Lessons</Link></li>
            <li><Link to="/wealth-wisdom" className="hover:gradient-text">Wealth Wisdom</Link></li>
            <li><Link to="/blog" className="hover:gradient-text">Blog</Link></li>
            <li><Link to="/contact" className="hover:gradient-text">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Hashtags</h4>
          <div className="flex flex-wrap gap-2">
            {hashtags.map(h => (
              <span key={h} className="rounded-full bg-white/10 px-3 py-1">{h}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} Encounter • Designed by Embark Digitals
      </div>
    </footer>
  )
}
