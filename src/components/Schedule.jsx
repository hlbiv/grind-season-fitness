// TODO: Replace CALENDLY_URL with Dymen's actual Calendly link
const CALENDLY_URL = 'https://calendly.com/grindseasonfitness'

const schedule = [
  { day: 'Monday', time: '6:00 AM – 10:00 AM · 4:00 PM – 9:00 PM', available: true },
  { day: 'Tuesday', time: '6:00 AM – 10:00 AM · 4:00 PM – 9:00 PM', available: true },
  { day: 'Wednesday', time: '6:00 AM – 10:00 AM · 4:00 PM – 9:00 PM', available: true },
  { day: 'Thursday', time: '6:00 AM – 10:00 AM · 4:00 PM – 9:00 PM', available: true },
  { day: 'Friday', time: '6:00 AM – 10:00 AM · 4:00 PM – 9:00 PM', available: true },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM', available: true },
  { day: 'Sunday', time: '8:00 AM – 4:00 PM', available: true },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-28 bg-gsf-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">Availability</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase">Weekly Schedule</h2>
          <p className="text-gsf-gray mt-4">Training at LA Fitness · 100 Chase Common Drive, Norcross, GA</p>
        </div>

        {/* Schedule table */}
        <div className="bg-gsf-black rounded-xl overflow-hidden border border-white/5 mb-10">
          {schedule.map((s, i) => (
            <div
              key={s.day}
              className={`flex items-center justify-between px-6 py-4 ${
                i !== schedule.length - 1 ? 'border-b border-white/5' : ''
              } ${!s.available ? 'opacity-40' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.available ? 'bg-gsf-orange' : 'bg-gsf-gray'}`} />
                <span className="font-heading text-lg uppercase tracking-wider">{s.day}</span>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${s.available ? 'text-gsf-offwhite' : 'text-gsf-gray'}`}>
                  {s.time}
                </span>
                {s.available && (
                  <span className="ml-3 text-xs uppercase tracking-wider text-gsf-orange/80 font-semibold">
                    Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gsf-gray text-sm mb-8">
          Schedule varies — book a session below to confirm availability and lock in your spot.
        </p>

        {/* Calendly CTA */}
        <div className="text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gsf-orange hover:bg-gsf-orange-light text-white font-heading uppercase tracking-wider text-lg px-10 py-4 rounded transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}
