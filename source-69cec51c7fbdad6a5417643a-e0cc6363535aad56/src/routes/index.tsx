import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  {
    icon: '🦷',
    title: 'Crowns & Bridges',
    description: 'Precision-milled zirconia, porcelain-fused-to-metal, and full-cast restorations with exceptional fit and aesthetics.',
  },
  {
    icon: '✨',
    title: 'Implant Prosthetics',
    description: 'Custom abutments, screw-retained crowns, and full-arch implant solutions compatible with all major implant systems.',
  },
  {
    icon: '😁',
    title: 'Removable Prosthetics',
    description: 'Full and partial dentures, flexible frameworks, and combination cases crafted for comfort and natural appearance.',
  },
  {
    icon: '🔬',
    title: 'Digital Dentistry',
    description: 'CAD/CAM design, digital impressions, and 3D printing capabilities for fast, accurate turnaround on every case.',
  },
]

const qualityPoints = [
  {
    title: 'Made in the USA',
    description: 'Every restoration is designed and fabricated in our American lab — no overseas outsourcing, ever.',
  },
  {
    title: 'FDA-Compliant Materials',
    description: 'We use only FDA-cleared, biocompatible materials from trusted suppliers with full traceability on every case.',
  },
  {
    title: 'Case-by-Case Inspection',
    description: 'Each restoration undergoes multi-point quality checks before shipping, ensuring margin integrity, shade accuracy, and precise occlusion.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Standard cases completed in 5–7 business days. Rush services available for time-sensitive restorations.',
  },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 to-sky-800 text-white py-28 px-6 text-center">
        <p className="uppercase tracking-widest text-sky-300 text-sm mb-3">Precision. Craftsmanship. Trust.</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your Partner in<br />Beautiful Restorations
        </h1>
        <p className="text-sky-200 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          Sunset Dental Laboratory is a full-service dental lab proudly crafting every restoration in the USA. Led by two owners with decades of combined experience, we deliver consistent quality that dentists and patients can count on.
        </p>
        <a
          href="#services"
          className="inline-block bg-sky-400 text-sky-950 font-semibold px-8 py-3 rounded-full hover:bg-sky-300 transition-colors"
        >
          Explore Our Services
        </a>
      </section>

      {/* About / Owners */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="uppercase tracking-widest text-sky-700 text-xs mb-3 font-semibold">Who We Are</p>
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Owner-Operated. Quality-Driven.</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sunset Dental Laboratory was founded by two passionate dental technicians who believed every practice deserves a lab partner that treats each case like it matters — because it does. With hands-on ownership and a dedicated team of skilled technicians, we maintain the personal attention and accountability that large corporate labs simply can't match.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From single-unit crowns to complex full-mouth rehabilitations, our owners are involved in daily operations, review cases personally, and stand behind every restoration that leaves our lab.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-72 h-64 bg-sky-100 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-inner">
            <div className="flex gap-4 text-6xl">
              <span>👨‍🔬</span>
              <span>👩‍🔬</span>
            </div>
            <span className="text-sky-800 font-semibold text-sm">Proudly Owner-Operated</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sky-700 text-xs mb-3 font-semibold text-center">What We Do</p>
          <h2 className="text-2xl font-bold text-center mb-12 text-slate-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-5">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sky-700 text-xs mb-3 font-semibold text-center">Our Promise</p>
          <h2 className="text-2xl font-bold text-center mb-4 text-slate-900">Quality Assured on Every Case</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            We never cut corners. Every restoration that leaves Sunset Dental Laboratory has been inspected, adjusted, and approved to meet the highest standards in the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPoints.map((point) => (
              <div key={point.title} className="flex gap-4 items-start bg-sky-50 rounded-xl p-6">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USA Badge */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-4">🇺🇸</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">100% Crafted in the USA</h2>
          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            We take pride in keeping all fabrication on American soil. By producing everything in-house, we maintain full control over materials, timelines, and the quality of every single case.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-900 text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Partner With Us?</h2>
        <p className="text-sky-200 mb-6 max-w-lg mx-auto">
          Join the growing number of dental practices that trust Sunset Dental Laboratory for consistent, high-quality restorations.
        </p>
        <a
          href="mailto:info@sunsetdentallab.com"
          className="inline-block bg-sky-400 text-sky-950 font-semibold px-8 py-3 rounded-full hover:bg-sky-300 transition-colors"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  )
}
