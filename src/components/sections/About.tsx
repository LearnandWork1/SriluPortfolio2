'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2, Linkedin, MapPin, Briefcase } from 'lucide-react'

const highlights = [
  'Architects scalable full-stack systems for enterprise environments',
  'Delivers AI-ready solutions across healthcare, retail & banking',
  'Bridges frontend excellence with robust backend & cloud infrastructure',
  'Passionate advocate for software reliability, performance & clean code',
]

const badges = [
  { icon: MapPin, label: 'Hyderabad, India' },
  { icon: Briefcase, label: 'ThoughtFocus' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 bg-white/40 dark:bg-[#0a0618]/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – Visual */}
          <div className="reveal relative flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl border-2 border-lavender-200/40 dark:border-lavender-700/20 scale-105" />
              <div className="absolute inset-0 rounded-3xl border border-lavender-300/30 dark:border-lavender-600/15 scale-110" />

              {/* Card */}
              <div className="glass-card rounded-3xl p-8 w-full max-w-sm shadow-lavender-lg">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-lavender-400 to-lavender-700 flex items-center justify-center shadow-lavender-md">
                  <span className="text-3xl font-bold text-white">SC</span>
                </div>

                <h3 className="text-center text-xl font-bold text-soft-ink dark:text-white mb-1">
                  Srilakshmi Chiluvuri
                </h3>
                <p className="text-center text-sm text-lavender-400 dark:text-lavender-400 mb-5">
                  Senior Full Stack Engineer
                </p>

                {/* Badges */}
                <div className="flex flex-col gap-2">
                  {badges.map((b) => (
                    <div key={b.label} className="flex items-center gap-2 p-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20">
                      <b.icon size={14} className="text-lavender-500" />
                      <span className="text-sm font-medium text-soft-ink dark:text-lavender-200">{b.label}</span>
                    </div>
                  ))}
                  <a
                    href="https://linkedin.com/in/srilakshmichiluvuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20 hover:bg-lavender-100 dark:hover:bg-lavender-900/40 transition-colors"
                  >
                    <Linkedin size={14} className="text-lavender-500" />
                    <span className="text-sm font-medium text-lavender-600 dark:text-lavender-300">3,677 Followers</span>
                  </a>
                </div>

                {/* Status dot */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
                  <span className="text-xs font-semibold text-emerald-500">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Content */}
          <div>
            <div className="reveal section-badge">About Me</div>
            <h2 className="reveal text-4xl font-bold text-soft-ink dark:text-white mb-5 leading-tight">
              Engineering{' '}
              <span className="gradient-text">reliability</span>{' '}
              at enterprise scale
            </h2>
            <p className="reveal text-base text-lavender-600/90 dark:text-lavender-300/80 leading-relaxed mb-5 font-medium">
              With over a decade of experience designing and delivering enterprise applications,
              I specialize in building full-stack systems that serve millions of users across
              healthcare, retail, and banking sectors — where correctness and uptime aren&apos;t optional.
            </p>
            <p className="reveal text-base text-lavender-600/90 dark:text-lavender-300/80 leading-relaxed mb-8 font-medium">
              My approach combines deep frontend craftsmanship with backend resilience, cloud-native
              thinking, and an ever-growing AI integration practice — enabling teams to ship faster
              without sacrificing quality or security.
            </p>

            <ul className="reveal space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-lavender-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-soft-ink dark:text-lavender-200 leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="reveal flex gap-4">
              <a href="#experience" onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary text-sm">
                See Experience
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-outline text-sm">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
