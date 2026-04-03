import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.currentTarget)
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (response.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-amber-900 text-amber-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-amber-200 max-w-lg mx-auto">
          Questions, custom cake orders, wholesale inquiries — we'd love to hear from you.
        </p>
      </section>

      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-bold text-amber-900 mb-3 text-lg">Visit Us</h2>
              <address className="not-italic text-stone-600 leading-relaxed">
                142 Maple Street<br />
                Maplewood, NJ 07040<br /><br />
                <a href="tel:+19735550192" className="text-amber-700 hover:underline">(973) 555-0192</a><br />
                <a href="mailto:hello@goldencrust.com" className="text-amber-700 hover:underline">hello@goldencrust.com</a>
              </address>
            </div>
            <div>
              <h2 className="font-bold text-amber-900 mb-3 text-lg">Hours</h2>
              <table className="text-stone-600 text-sm w-full">
                <tbody>
                  {[
                    ['Monday – Friday', '7:00 am – 6:00 pm'],
                    ['Saturday', '7:00 am – 4:00 pm'],
                    ['Sunday', '8:00 am – 2:00 pm'],
                  ].map(([day, hours]) => (
                    <tr key={day}>
                      <td className="py-1 pr-6 font-medium text-stone-700">{day}</td>
                      <td>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="font-bold text-amber-900 mb-3 text-lg">Custom Cakes</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                We require a minimum of <strong>5 business days</strong> notice for custom celebration cakes. Please use the form to describe your vision and we'll reach out to discuss details and pricing.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🥐</div>
                <h3 className="font-bold text-amber-900 text-xl mb-2">Message received!</h3>
                <p className="text-stone-600 text-sm">We'll get back to you within 1–2 business days. Thanks for reaching out!</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                  >
                    <option value="">Select a topic…</option>
                    <option value="Custom Cake Order">Custom Cake Order</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="General Question">General Question</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                    placeholder="Tell us how we can help…"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-amber-700 text-white font-semibold py-3 rounded-lg hover:bg-amber-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
