// Replace with real client quotes — ask Dymen for permission to use client names/words
const testimonials = [
  {
    quote: "There is NO OFF-SEASON during Grind Season Fitness. Dymen pushes you beyond what you think is possible while keeping it fun and safe.",
    name: 'GSF Client',
    detail: 'Training 2x/week · 6 months',
  },
  {
    quote: "I came in thinking I just needed to lose a little weight. Dymen completely changed how I think about fitness. I'm stronger than I've ever been.",
    name: 'GSF Client',
    detail: '1-on-1 Training · 1 year',
  },
  {
    quote: "The outdoor bootcamp sessions are no joke. Weighted vests, running, strength work — all of it. Best investment I've made in my health.",
    name: 'GSF Client',
    detail: 'Bootcamp Group · 3 months',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gsf-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">Client Results</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase">What They Say</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-gsf-gray text-sm">100% Recommend on Facebook</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gsf-black rounded-xl p-8 border border-white/5 relative">
              {/* Quote mark */}
              <div className="font-heading text-6xl text-gsf-orange/20 leading-none mb-4 select-none">"</div>
              <p className="text-gsf-offwhite/85 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-heading text-sm font-semibold uppercase tracking-wider">{t.name}</div>
                <div className="text-gsf-gray text-xs mt-0.5">{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
