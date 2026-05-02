const credentials = [
  { label: 'AAAI Certified', sub: 'Personal Trainer' },
  { label: 'FAMU Graduate', sub: 'Florida A&M University' },
  { label: '10+ Years', sub: 'Training Experience' },
  { label: 'Norcross, GA', sub: 'LA Fitness & Outdoors' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gsf-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gsf-dark">
              <img
                src="/images/dymen-bw.jpg"
                alt="Dymen Raimer — Grind Season Fitness"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                }}
              />
            </div>
            {/* Orange accent bar */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-1.5 bg-gsf-orange rounded" />
            <div className="absolute -bottom-8 -right-4 w-1/3 h-1.5 bg-gsf-orange/40 rounded" />
          </div>

          {/* Text */}
          <div>
            <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">
              Meet Your Trainer
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-6">
              Dymen Raimer
            </h2>
            <p className="text-gsf-gray text-lg leading-relaxed mb-4">
              There is <strong className="text-white">NO OFF-SEASON</strong> during Grind Season Fitness. Dymen Raimer is an AAAI Certified Personal Trainer and FAMU Graduate based in the Atlanta area, training clients at LA Fitness in Norcross, GA.
            </p>
            <p className="text-gsf-gray text-lg leading-relaxed mb-8">
              Whether your goal is weight loss, strength building, or just showing up consistently — Dymen meets you where you are and pushes you beyond where you thought you could go. No excuses. No shortcuts. Just results.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map(c => (
                <div key={c.label} className="bg-gsf-dark rounded-lg p-4 border border-white/5">
                  <div className="font-heading text-gsf-orange font-semibold text-lg">{c.label}</div>
                  <div className="text-gsf-gray text-sm mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
