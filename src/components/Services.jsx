const services = [
  {
    icon: '🏋️',
    title: '1-on-1 Personal Training',
    desc: 'Fully customized programming built around your goals, schedule, and fitness level. Dymen coaches you through every set at LA Fitness.',
    highlights: ['Custom workout plan', 'Form & technique coaching', 'Progress tracking', 'Flexible scheduling'],
  },
  {
    icon: '👥',
    title: 'Group Sessions',
    desc: 'Train alongside a crew that pushes each other. Group sessions bring the energy and accountability that solo training can\'t match.',
    highlights: ['Up to 6 people', 'Team accountability', 'High energy workouts', 'More affordable per session'],
  },
  {
    icon: '🌳',
    title: 'Outdoor Bootcamp',
    desc: 'Take it outside. GSF weighted vest bootcamps bring the pain (and the fun) to parks and open spaces around the Atlanta area.',
    highlights: ['Weighted vest training', 'Cardio & strength combo', 'Lilburn, GA & surrounding areas', 'All fitness levels welcome'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gsf-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase">Training Programs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-gsf-black rounded-xl p-8 border border-white/5 hover:border-gsf-orange/40 transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="font-heading text-2xl font-semibold uppercase mb-3 group-hover:text-gsf-orange transition-colors">
                {s.title}
              </h3>
              <p className="text-gsf-gray text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gsf-offwhite/80">
                    <span className="text-gsf-orange mt-0.5 flex-shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
