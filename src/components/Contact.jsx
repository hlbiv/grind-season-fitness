export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gsf-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase">Ready to Start?</h2>
          <p className="text-gsf-gray mt-4 max-w-xl mx-auto">
            Reach out directly — Dymen personally responds to every inquiry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Contact info */}
          <div className="space-y-6">
            <a
              href="tel:7573098190"
              className="flex items-center gap-5 bg-gsf-dark rounded-xl p-5 border border-white/5 hover:border-gsf-orange/40 transition-all group"
            >
              <div className="w-12 h-12 bg-gsf-orange/10 rounded-lg flex items-center justify-center group-hover:bg-gsf-orange/20 transition-colors flex-shrink-0">
                <svg className="w-6 h-6 text-gsf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gsf-gray mb-0.5">Call or Text</div>
                <div className="font-heading text-xl text-gsf-offwhite group-hover:text-gsf-orange transition-colors">(757) 309-8190</div>
              </div>
            </a>

            <a
              href="mailto:GrindSeasonFitness@gmail.com"
              className="flex items-center gap-5 bg-gsf-dark rounded-xl p-5 border border-white/5 hover:border-gsf-orange/40 transition-all group"
            >
              <div className="w-12 h-12 bg-gsf-orange/10 rounded-lg flex items-center justify-center group-hover:bg-gsf-orange/20 transition-colors flex-shrink-0">
                <svg className="w-6 h-6 text-gsf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gsf-gray mb-0.5">Email</div>
                <div className="font-heading text-lg text-gsf-offwhite group-hover:text-gsf-orange transition-colors break-all">GrindSeasonFitness@gmail.com</div>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-gsf-dark rounded-xl p-5 border border-white/5">
              <div className="w-12 h-12 bg-gsf-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gsf-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gsf-gray mb-0.5">Location</div>
                <div className="font-heading text-lg text-gsf-offwhite">LA Fitness — Norcross, GA</div>
                <div className="text-gsf-gray text-sm">100 Chase Common Drive</div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/grindseasonfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gsf-dark border border-white/10 hover:border-gsf-orange hover:text-gsf-orange text-gsf-offwhite px-5 py-3 rounded-lg transition-colors font-heading text-sm uppercase tracking-wider"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/GrindSeasonFitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gsf-dark border border-white/10 hover:border-gsf-orange hover:text-gsf-orange text-gsf-offwhite px-5 py-3 rounded-lg transition-colors font-heading text-sm uppercase tracking-wider"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            action="mailto:GrindSeasonFitness@gmail.com"
            method="post"
            encType="text/plain"
            className="bg-gsf-dark rounded-xl p-8 border border-white/5 space-y-5"
          >
            <h3 className="font-heading text-xl uppercase tracking-wider mb-2">Send a Message</h3>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gsf-gray mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                className="w-full bg-gsf-black border border-white/10 focus:border-gsf-orange rounded-lg px-4 py-3 text-gsf-offwhite placeholder-white/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gsf-gray mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                className="w-full bg-gsf-black border border-white/10 focus:border-gsf-orange rounded-lg px-4 py-3 text-gsf-offwhite placeholder-white/20 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gsf-gray mb-2">Interested In</label>
              <select
                name="service"
                className="w-full bg-gsf-black border border-white/10 focus:border-gsf-orange rounded-lg px-4 py-3 text-gsf-offwhite outline-none transition-colors"
              >
                <option value="">Select a program…</option>
                <option>1-on-1 Personal Training</option>
                <option>Group Sessions</option>
                <option>Outdoor Bootcamp</option>
                <option>Custom Package</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gsf-gray mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell Dymen about your goals…"
                className="w-full bg-gsf-black border border-white/10 focus:border-gsf-orange rounded-lg px-4 py-3 text-gsf-offwhite placeholder-white/20 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gsf-orange hover:bg-gsf-orange-light text-white font-heading uppercase tracking-wider text-base py-4 rounded-lg transition-all hover:scale-[1.01]"
            >
              Send Message
            </button>

            <p className="text-center text-gsf-gray text-xs">
              Or text/call directly: <a href="tel:7573098190" className="text-gsf-orange hover:underline">(757) 309-8190</a>
            </p>
          </form>

        </div>
      </div>
    </section>
  )
}
