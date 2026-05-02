// NOTE: Confirm exact session counts and prices with Dymen before going live
const plans = [
  {
    name: 'Starter',
    price: '$200',
    period: '/month',
    sessions: '2x per week',
    desc: 'Perfect for getting started or maintaining consistency with twice-weekly sessions.',
    features: [
      '8 sessions/month',
      'Custom workout plan',
      'Form coaching & corrections',
      'Progress check-ins',
      'WhatsApp support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$250',
    period: '/month',
    sessions: '3x per week',
    desc: 'The most popular plan. Three sessions per week is where real transformation happens.',
    features: [
      '12 sessions/month',
      'Custom workout plan',
      'Form coaching & corrections',
      'Nutrition guidance',
      'Progress photos',
      'WhatsApp support',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Custom',
    price: 'Contact',
    period: '',
    sessions: 'Flexible',
    desc: 'Couples training, small groups, or specialty programming. Let\'s build something that fits you.',
    features: [
      'Couples & partner training',
      'Small group (up to 6)',
      'Outdoor bootcamp packages',
      'Specialty programming',
      'Flexible scheduling',
    ],
    cta: 'Contact Dymen',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gsf-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">Invest in Yourself</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase">Simple Pricing</h2>
          <p className="text-gsf-gray mt-4 max-w-xl mx-auto">
            No hidden fees. No contracts. Just show up and put in the work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map(p => (
            <div
              key={p.name}
              className={`rounded-xl p-8 border transition-all ${
                p.highlight
                  ? 'bg-gsf-orange border-gsf-orange relative'
                  : 'bg-gsf-dark border-white/5 hover:border-white/20'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-gsf-orange font-heading text-xs uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-xl uppercase tracking-wider mb-1">{p.name}</h3>
                <div className="flex items-end gap-1 my-3">
                  <span className="font-heading text-5xl font-bold">{p.price}</span>
                  {p.period && <span className="text-lg mb-1 opacity-70">{p.period}</span>}
                </div>
                <div className={`text-sm font-semibold uppercase tracking-wider ${p.highlight ? 'text-white/80' : 'text-gsf-orange'}`}>
                  {p.sessions}
                </div>
                <p className={`text-sm mt-3 leading-relaxed ${p.highlight ? 'text-white/80' : 'text-gsf-gray'}`}>
                  {p.desc}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? 'text-white/90' : 'text-gsf-offwhite/80'}`}>
                    <span className={`mt-0.5 flex-shrink-0 ${p.highlight ? 'text-white' : 'text-gsf-orange'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-heading uppercase tracking-wider text-sm py-3.5 rounded transition-all ${
                  p.highlight
                    ? 'bg-white text-gsf-orange hover:bg-gsf-offwhite'
                    : 'border border-gsf-orange text-gsf-orange hover:bg-gsf-orange hover:text-white'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
