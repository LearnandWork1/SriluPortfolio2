'use client'

import { useEffect, useRef } from 'react'
import { Building2, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    company: 'ThoughtFocus',
    role: 'Senior Full Stack Developer',
    period: '2019 – Present',
    location: 'Bengaluru, India',
    type: 'Current',
    description:
      'Lead architect and developer for multiple enterprise-grade client platforms across healthcare and retail verticals. Drive technical strategy, mentor junior engineers, and own end-to-end delivery of mission-critical modules.',
    achievements: [
      'Engineered a high-throughput data ingestion pipeline reducing processing latency by 60%, supporting 1M+ daily records',
      'Architected AI-ready microservices layer enabling seamless integration of ML models into existing enterprise workflows',
      'Led migration of monolithic banking application to cloud-native architecture, improving deployment frequency by 4×',
      'Designed reusable React component library adopted across 3 product lines, cutting UI development time by 35%',
      'Established automated testing protocols that reduced production incidents by 45% over 12 months',
    ],
    tech: ['React', 'Java', 'Spring Boot', 'AWS', 'Kubernetes', 'PostgreSQL', 'Redis'],
  },
  {
    company: 'Enterprise Software Firm',
    role: 'Full Stack Developer',
    period: '2016 – 2019',
    location: 'Hyderabad, India',
    type: 'Previous',
    description:
      'Delivered full-stack features for retail and e-commerce platforms, owning both frontend SPAs and backend REST APIs within agile teams.',
    achievements: [
      'Built real-time inventory management dashboard processing 50K+ SKU updates per hour with sub-second UI refresh',
      'Integrated third-party payment gateways and reduced checkout failure rate from 8% to under 1.5%',
      'Implemented CI/CD pipelines with Jenkins and Docker, reducing release cycle from 2 weeks to 3 days',
      'Developed RESTful microservices handling 200K+ daily API calls with 99.9% uptime SLA',
    ],
    tech: ['Angular', 'Node.js', 'MySQL', 'Docker', 'Jenkins', 'MongoDB'],
  },
  {
    company: 'Tech Startup',
    role: 'Junior Software Developer',
    period: '2014 – 2016',
    location: 'Hyderabad, India',
    type: 'Early Career',
    description:
      'Contributed to web application development for healthcare clients, gaining foundational expertise in full-stack engineering and agile delivery.',
    achievements: [
      'Developed patient data management modules for HIPAA-compliant healthcare SaaS platform',
      'Built responsive UI components improving mobile engagement by 40% across patient-facing portals',
      'Participated in backend API design and integration for health records exchange with external providers',
    ],
    tech: ['JavaScript', 'Java', 'Spring MVC', 'MySQL', 'jQuery'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24 hero-mesh">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="reveal section-badge inline-flex">Experience</div>
          <h2 className="reveal text-4xl font-bold text-soft-ink dark:text-white mt-2">
            A decade of <span className="gradient-text">delivering impact</span>
          </h2>
          <p className="reveal mt-3 text-base text-lavender-500/80 dark:text-lavender-400/80 max-w-xl mx-auto font-medium">
            Enterprise applications across healthcare, retail, and banking — where reliability is non-negotiable.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-lavender-400 via-lavender-300 to-lavender-100 dark:from-lavender-700 dark:via-lavender-800 dark:to-lavender-900 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lavender-sm z-10 ${
                    exp.type === 'Current'
                      ? 'bg-gradient-to-br from-lavender-500 to-lavender-700'
                      : 'bg-white dark:bg-lavender-900/50 border-2 border-lavender-300 dark:border-lavender-700'
                  }`}>
                    <Building2 size={16} className={exp.type === 'Current' ? 'text-white' : 'text-lavender-400'} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 shadow-lavender-sm hover:shadow-lavender-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-soft-ink dark:text-white">{exp.role}</h3>
                        {exp.type === 'Current' && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-lavender-500 dark:text-lavender-400">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-lavender-400 dark:text-lavender-500 font-medium">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-lavender-600/80 dark:text-lavender-300/70 leading-relaxed mb-4 font-medium">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-soft-ink dark:text-lavender-200 leading-relaxed">
                        <ChevronRight size={13} className="text-lavender-400 mt-0.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
