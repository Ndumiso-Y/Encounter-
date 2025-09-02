import { Link, NavLink } from 'react-router-dom'

const nav = [
  {to: '/', label: 'Home'},
  {to: '/about', label: 'About'},
  {to: '/services', label: 'Services'},
  {to: '/nature-lessons', label: 'Nature Lessons'},
  {to: '/wealth-wisdom', label: 'Wealth Wisdom'},
  {to: '/blog', label: 'Blog'},
  {to: '/contact', label: 'Contact'},
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}assets/logo/Logo%20icon%20black.png`} alt="Encounter Logo" className="h-9 w-9 rounded-lg ring-1 ring-white/10"/>
            <span className="text-lg font-semibold tracking-wide">Encounter</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {nav.map(item => (
              <NavLink key={item.to} to={item.to}
                className={({isActive}) =>
                  `text-sm ${isActive ? 'gradient-text' : 'text-white/80 hover:text-white'} transition`
                }>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-primary-700 to-primary-600 px-4 py-2 text-sm font-medium shadow-glow hover:scale-[1.02] transition">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
