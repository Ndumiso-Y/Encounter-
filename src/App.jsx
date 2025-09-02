import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import NatureLessons from './pages/NatureLessons.jsx'
import WealthWisdom from './pages/WealthWisdom.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-dvh bg-glass-pattern">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nature-lessons" element={<NatureLessons />} />
          <Route path="/wealth-wisdom" element={<WealthWisdom />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
