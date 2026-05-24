'use client'

import { useEffect, useRef, useState } from 'react'
import { Code2, Server, Cloud, Brain, GitBranch, Database } from 'lucide-react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'from-violet-400 to-purple-500',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Angular', level: 88 },
      { name: 'TypeScript / JavaScript', level: 92 },
      { name: 'HTML5 / CSS3', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-lavender-400 to-lavender-600',
    skills: [
      { name: 'Java / Spring Boot', level: 93 },
      { name: 'Node.js', level: 85 },
      { name: 'REST & GraphQL APIs', level: 90 },
      { name: 'Microservices', level: 88 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-fuchsia-400 to-lavender-500',
    skills: [
      { name: 'AWS (EC2, RDS, Lambda)', level: 87 },
      { name: 'Docker / Kubernetes', level: 85 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Terraform', level: 75 },
    ],
  },
  {
    category: 'Data & AI',
    icon: Brain,
    color: 'from-purple-400 to-violet-600',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 90 },
      { name: 'MongoDB / Redis', level: 85 },
      { name: 'Apache Kafka', level: 80 },
      { name: 'AI/ML Integration', level: 78 },
    ],
  },
  {
    category: 'Architecture',
    icon: GitBranch,
    color: 'from-lavender-500 to-purple-600',
    skills: [
      { name: 'System Design', level: 92 },
      { name: 'Domain-Driven Design', level: 85 },
      { name: 'Event-Driven Architecture', level: 83 },
      { name: 'Cloud-Native Patterns', level: 87 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'from-violet-300 to-lavender-500',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Elasticsearch', level: 80 },
      { name: 'MongoDB', level: 84 },
      { name: 'Redis / Caching', level: 85 },
    ],
  },
]

const domainTags = [
  'Healthcare', 'Retail', 'Banking', 'E-Commerce',
  'Enterprise SaaS', 'FinTech', 'Supply Chain', 'Patient Management',
]

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-semibold text-soft-ink dark:text-lavender-200">{name}</span>
        <span className="text-xs font-bold text-lavender-500">{level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            setAnimate(true)
          }
        })
      },
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 hero-mesh">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="reveal section-badge inline-flex">Technical Skills</div>
          <h2 className="reveal text-4xl font-bold text-soft-ink dark:text-white mt-2">
            Full-spectrum <span className="gradient-text">engineering expertise</span>
          </h2>
          <p className="reveal mt-3 text-base text-lavender-500/80 dark:text-lavender-400/80 max-w-xl mx-auto font-medium">
            From pixel-perfect UIs to cloud-native backends — the complete toolkit for enterprise delivery.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 shadow-lavender-sm hover:shadow-lavender-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lavender-sm`}>
                  <group.icon size={16} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-soft-ink dark:text-white">{group.category}</h3>
              </div>

              {/* Bars */}
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Domain expertise tags */}
        <div className="reveal text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-lavender-400 dark:text-lavender-500 mb-4">
            Industry Domains
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {domainTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-semibold rounded-xl bg-white/60 dark:bg-lavender-900/20 text-lavender-700 dark:text-lavender-300 border border-lavender-200/60 dark:border-lavender-700/30 hover:bg-lavender-100/60 dark:hover:bg-lavender-900/40 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
