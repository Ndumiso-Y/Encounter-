import Hero from '../components/Hero.jsx'

export default function Contact() {
  return (
    <div>
      <Hero
        title="Book a Conversation"
        subtitle="Tell us where you are and where you want to go. We'll map the path."
        cta={null} secondCta={null}
      />
      <section className="mx-auto max-w-xl px-4 -mt-10">
        <form className="card-glass p-6 space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full bg-white/10 border-white/20 text-white rounded-md" placeholder="Your full name"/>
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input type="email" className="mt-1 w-full bg-white/10 border-white/20 text-white rounded-md" placeholder="you@example.com"/>
          </div>
          <div>
            <label className="text-sm">What do you want to achieve?</label>
            <textarea rows="4" className="mt-1 w-full bg-white/10 border-white/20 text-white rounded-md" placeholder="Share your goals..."></textarea>
          </div>
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-primary-700 to-primary-600 px-4 py-3 font-semibold shadow-glow">Send</button>
          <p className="text-xs text-white/60">By booking, you agree to our simple terms: we teach, you act, results compound.</p>
        </form>
      </section>
    </div>
  )
}
