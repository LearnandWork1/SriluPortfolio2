'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Sparkles, Code2, Cpu, Cloud } from 'lucide-react'

const roles = [
  'Full Stack Engineer',
  'AI-Ready Architect',
  'Enterprise Systems Builder',
  'Cloud Platform Developer',
]

const floatingIcons = [
  { icon: Code2, top: '20%', left: '8%', delay: '0s', size: 20 },
  { icon: Cpu, top: '65%', left: '5%', delay: '1.5s', size: 18 },
  { icon: Cloud, top: '30%', right: '6%', delay: '0.8s', size: 22 },
  { icon: Sparkles, top: '72%', right: '9%', delay: '2s', size: 18 },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
    intervalRef.current = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length)
    }, 2800)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const scrollToAbout = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen hero-mesh flex items-center overflow-hidden">
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Floating tech icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl glass-card animate-float"
          style={{
            top: item.top,
            left: 'left' in item ? item.left : undefined,
            right: 'right' in item ? item.right : undefined,
            animationDelay: item.delay,
            animationDuration: `${6 + i * 1.5}s`,
          }}
        >
          <item.icon size={item.size} className="text-lavender-400 dark:text-lavender-300" />
        </div>
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className={`section-badge mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <Sparkles size={10} />
          Open to Opportunities · Hyderabad &amp; Remote
        </div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-7xl font-bold tracking-tight text-soft-ink dark:text-white mb-4 leading-[1.05] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Srilakshmi
          <br />
          <span className="gradient-text">Chiluvuri</span>
        </h1>

        {/* Animated role */}
        <div
          className={`h-10 flex items-center justify-center mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <span className="text-xl md:text-2xl font-semibold text-lavender-500 dark:text-lavender-300 transition-all duration-500">
            {roles[roleIdx]}
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`max-w-2xl text-base md:text-lg text-lavender-600/80 dark:text-lavender-300/80 leading-relaxed mb-10 font-medium transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          I build enterprise platforms that are <em>reliable by design</em>, <em>scalable by architecture</em>,
          and <em>AI-ready by intent</em> — across healthcare, retail, and banking domains.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            View My Work
            <ArrowDown size={15} />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-outline"
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-3 gap-6 md:gap-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.65s' }}
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Enterprise Modules' },
            { value: '3', label: 'Industry Domains' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="metric">{stat.value}</span>
              <span className="text-xs font-semibold text-lavender-400 dark:text-lavender-500 mt-1 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-lavender-400 dark:text-lavender-500 hover:text-lavender-600 dark:hover:text-lavender-300 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  )
}
