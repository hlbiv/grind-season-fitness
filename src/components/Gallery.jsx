// Horizontal scroll gallery — hero-bg and dymen-bw excluded (used in Hero/About)
const photos = [
  { src: '/images/outdoor-group.jpg',      alt: 'GSF outdoor bootcamp group' },
  { src: '/images/dymen-clients.jpg',      alt: 'Dymen training clients at LA Fitness' },
  { src: '/images/dymen-stairmaster.jpg',  alt: 'Dymen on the StairMaster at LA Fitness' },
  { src: '/images/dymen-gsf-tank.jpg',     alt: 'Dymen Raimer in GSF gear' },
  { src: '/images/training-1.jpg',         alt: 'Client Smith machine session' },
  { src: '/images/training-2.jpg',         alt: 'Client barbell deadlift at LA Fitness' },
  { src: '/images/training-3.jpg',         alt: 'Clients dumbbell squat group' },
  { src: '/images/clients-stairmaster.jpg',alt: 'Clients on StairMaster at LA Fitness' },
  { src: '/images/client-cable.jpg',       alt: 'Client cable row exercise' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-gsf-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <div className="text-center">
          <p className="font-heading text-gsf-orange text-sm uppercase tracking-[0.3em] mb-3">The Work</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase">In the Gym</h2>
        </div>
      </div>

      {/* Horizontal scroll strip — full bleed */}
      <div
        className="flex gap-3 overflow-x-auto px-4 sm:px-6 pb-4"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {photos.map((p, i) => (
          <div
            key={i}
            className="relative flex-none overflow-hidden rounded-lg bg-gsf-dark group"
            style={{ width: 280, height: 360, scrollSnapAlign: 'start' }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={e => {
                e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                e.target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gsf-orange/0 group-hover:bg-gsf-orange/10 transition-all duration-300" />
          </div>
        ))}
      </div>

      <div className="text-center mt-10 px-4">
        <a
          href="https://www.instagram.com/grindseasonfitness/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/20 hover:border-gsf-orange hover:text-gsf-orange text-gsf-offwhite font-heading uppercase tracking-wider text-sm px-6 py-3 rounded transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Follow on Instagram
        </a>
      </div>
    </section>
  )
}
