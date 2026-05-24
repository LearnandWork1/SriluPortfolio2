'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, MapPin, Send, MessageSquare, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'srilakshmi.chiluvuri@email.com',
    href: 'mailto:srilakshmi.chiluvuri@email.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/srilakshmichiluvuri',
    href: 'https://linkedin.com/in/srilakshmichiluvuri',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India · Open to Remote',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real deployment, hook this up to a form service like Resend, EmailJS, etc.
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-white/40 dark:bg-[#0a0618]/60">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="reveal section-badge inline-flex">Contact</div>
          <h2 className="reveal text-4xl font-bold text-soft-ink dark:text-white mt-2">
            Let&apos;s build something <span className="gradient-text">remarkable</span>
          </h2>
          <p className="reveal mt-3 text-base text-lavender-500/80 dark:text-lavender-400/80 max-w-lg mx-auto font-medium">
            Available for senior engineering roles, technical leadership, and consulting engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left – Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="reveal glass-card rounded-2xl p-5 flex items-start gap-4 shadow-lavender-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center shadow-lavender-sm flex-shrink-0">
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-soft-ink dark:text-lavender-200 hover:text-lavender-600 dark:hover:text-lavender-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-soft-ink dark:text-lavender-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="reveal glass-card rounded-2xl p-5 flex items-start gap-4 shadow-lavender-sm">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lavender-sm flex-shrink-0">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-0.5">Availability</p>
                <p className="text-sm font-semibold text-soft-ink dark:text-lavender-200">Open to opportunities</p>
                <p className="text-xs text-lavender-400 dark:text-lavender-500 mt-0.5">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3 reveal">
            <div className="glass-card rounded-2xl p-8 shadow-lavender-md">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center mb-4 shadow-lavender-md">
                    <MessageSquare size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-soft-ink dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-lavender-500 dark:text-lavender-400 font-medium">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }) }}
                    className="btn-outline mt-6 text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20 border border-lavender-200/60 dark:border-lavender-700/30 text-soft-ink dark:text-lavender-100 placeholder-lavender-300 dark:placeholder-lavender-600 text-sm font-medium focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20 border border-lavender-200/60 dark:border-lavender-700/30 text-soft-ink dark:text-lavender-100 placeholder-lavender-300 dark:placeholder-lavender-600 text-sm font-medium focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20 border border-lavender-200/60 dark:border-lavender-700/30 text-soft-ink dark:text-lavender-100 placeholder-lavender-300 dark:placeholder-lavender-600 text-sm font-medium focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20 border border-lavender-200/60 dark:border-lavender-700/30 text-soft-ink dark:text-lavender-100 placeholder-lavender-300 dark:placeholder-lavender-600 text-sm font-medium focus:outline-none focus:border-lavender-400 dark:focus:border-lavender-500 transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
