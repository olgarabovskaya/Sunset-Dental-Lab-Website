import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Sunset Dental Laboratory — Quality Restorations Crafted in the USA' },
      { name: 'description', content: 'Full-service dental laboratory offering crowns, bridges, implants, and removable prosthetics. 100% crafted in the USA with quality assured on every case.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <header className="bg-sky-900 text-white shadow-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-xl leading-tight">Sunset Dental Lab</div>
                <div className="text-xs text-sky-300 tracking-wide uppercase">Quality Restorations</div>
              </div>
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link
                to="/"
                className="hover:text-sky-300 transition-colors [&.active]:text-sky-300 [&.active]:border-b [&.active]:border-sky-300 pb-0.5"
              >
                Home
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="bg-slate-900 text-slate-400 text-sm">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-white mb-2">Sunset Dental Laboratory</div>
              <p className="leading-relaxed">Precision dental restorations crafted in the USA. Owner-operated with quality assured on every case.</p>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Lab Hours</div>
              <ul className="space-y-1">
                <li>Monday – Friday: 8am – 5pm</li>
                <li>Saturday – Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Contact</div>
              <address className="not-italic leading-relaxed">
                <a href="mailto:info@sunsetdentallab.com" className="hover:text-white transition-colors">info@sunsetdentallab.com</a>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-700 text-center py-4 text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Sunset Dental Laboratory. All rights reserved.
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
