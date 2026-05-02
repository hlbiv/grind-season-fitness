// CALENDLY_URL: replace with Dymen's actual Calendly link once created at calendly.com
const CALENDLY_URL = 'https://calendly.com/grindseasonfitness'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <p className="font-heading text-gsf-orange text-sm sm:text-base uppercase tracking-[0.3em] mb-4">
          Norcross, GA · Currently Accepting New Clients
        </p>

        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold uppercase text-white text-shadow leading-none mb-4">
          Grind Season<br />
          <span className="text-gsf-orange">Fitness</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          The RICHEST Person Knows TRUE WEALTH is rooted in their HEALTH &amp; FITNESS
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gsf-orange hover:bg-gsf-orange-light text-white font-heading uppercase tracking-wider text-lg px-8 py-4 rounded transition-all hover:scale-105"
          >
            Start Training
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:border-gsf-orange hover:text-gsf-orange text-white font-heading uppercase tracking-wider text-lg px-8 py-4 rounded transition-all hover:scale-105"
          >
            Book a Session
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-8 mt-14 text-white/70">
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-gsf-orange">5K+</div>
            <div className="text-xs uppercase tracking-widest mt-1">IG Followers</div>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-gsf-orange">8K+</div>
            <div className="text-xs uppercase tracking-widest mt-1">FB Followers</div>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-gsf-orange">100%</div>
            <div className="text-xs uppercase tracking-widest mt-1">Recommend</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
