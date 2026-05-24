'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Layers, Cpu, Activity, ShoppingBag, Database, Shield } from 'lucide-react'

const featured = [
  {
    title: 'AI-Ready Enterprise Integration Platform',
    category: 'Architecture · AI · Cloud',
    icon: Cpu,
    color: 'from-violet-500 to-purple-700',
    description:
      'Designed and built a modular integration platform connecting 12+ enterprise systems with AI inference endpoints. Enabled plug-and-play ML model deployment without disrupting existing workflows.',
    impact: [
      'Reduced integration cycle from 6 weeks → 4 days',
      'Served 2M+ API calls/month at 99.95% uptime',
      'Adopted by 4 enterprise clients within 6 months',
    ],
    tech: ['Spring Boot', 'Kafka', 'AWS Lambda', 'React', 'Redis', 'GraphQL'],
    featured: true,
  },
  {
    title: 'Healthcare Records & Compliance Platform',
    category: 'Healthcare · Full Stack · Security',
    icon: Activity,
    color: 'from-lavender-400 to-purple-500',
    description:
      'End-to-end HIPAA-compliant patient record management system serving 200+ hospitals. Built with real-time data sync, audit trails, and role-based access control across care teams.',
    impact: [
      'Processed 500K+ patient records with zero data breaches',
      'Reduced administrative overhead by 38% for care teams',
      'Achieved SOC 2 Type II compliance certification',
    ],
    tech: ['React', 'Java', 'PostgreSQL', 'AWS RDS', 'Spring Security', 'Docker'],
    featured: true,
  },
  {
    title: 'Omnichannel Retail Commerce Engine',
    category: 'Retail · E-commerce · Scalability',
    icon: ShoppingBag,
    color: 'from-fuchsia-400 to-lavender-600',
    description:
      'High-performance retail platform unifying online, mobile, and in-store commerce. Real-time inventory sync, personalized recommendation engine, and distributed checkout processing.',
    impact: [
      'Handled 15K concurrent users during peak sales events',
      'Reduced cart abandonment rate by 22% via UX optimization',
      'Inventory accuracy improved from 91% → 99.2%',
    ],
    tech: ['Angular', 'Node.js', 'MongoDB', 'Elasticsearch', 'Redis', 'Kubernetes'],
    featured: true,
  },
]

const others = [
  {
    title: 'Banking Transaction Analytics Dashboard',
    icon: Database,
    description: 'Real-time fraud detection and transaction monitoring dashboard processing 50M+ events/day for a tier-1 banking client.',
    tech: ['React', 'Python', 'Apache Spark', 'AWS'],
  },
  {
    title: 'CI/CD DevOps Automation Framework',
    icon: Layers,
    description: 'Internal tooling framework standardizing CI/CD across 15 teams, reducing deployment time from days to minutes.',
    tech: ['Jenkins', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    title: 'Multi-Tenant SaaS Auth System',
    icon: Shield,
    description: 'OAuth 2.0 / OIDC-compliant authentication platform supporting SSO for enterprise clients with 100K+ users.',
    tech: ['Spring Security', 'Keycloak', 'React', 'PostgreSQL'],
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-24 bg-white/40 dark:bg-[#0a0618]/60">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="reveal section-badge inline-flex">Featured Work</div>
          <h2 className="reveal text-4xl font-bold text-soft-ink dark:text-white mt-2">
            Systems built to <span className="gradient-text">last & scale</span>
          </h2>
          <p className="reveal mt-3 text-base text-lavender-500/80 dark:text-lavender-400/80 max-w-xl mx-auto font-medium">
            Real-world enterprise challenges, solved with thoughtful architecture and measurable outcomes.
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-2xl overflow-hidden shadow-lavender-sm hover:shadow-lavender-lg transition-all duration-400 hover:-translate-y-2 group flex flex-col"
            >
              {/* Header gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex-1 flex flex-col">
                {/* Icon + category */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lavender-sm`}>
                    <project.icon size={20} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-lavender-400 dark:text-lavender-500 mt-1">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-soft-ink dark:text-white mb-2 leading-snug group-hover:text-lavender-600 dark:group-hover:text-lavender-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-lavender-600/80 dark:text-lavender-300/70 leading-relaxed mb-4 font-medium flex-1">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 rounded-xl bg-lavender-50/60 dark:bg-lavender-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-lavender-500 dark:text-lavender-400 mb-2">Impact</p>
                  <ul className="space-y-1">
                    {project.impact.map((imp, j) => (
                      <li key={j} className="text-xs font-medium text-soft-ink dark:text-lavender-200 flex items-start gap-1.5">
                        <span className="text-lavender-400 mt-0.5">▸</span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag text-[10px] py-0.5 px-2">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <h3 className="reveal text-lg font-bold text-soft-ink dark:text-lavender-200 mb-5 text-center">
            More Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {others.map((p, i) => (
              <div
                key={i}
                className="reveal glass-card rounded-xl p-5 shadow-lavender-sm hover:shadow-lavender-md transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-lavender-100/60 dark:bg-lavender-900/30 flex items-center justify-center">
                    <p.icon size={16} className="text-lavender-500" />
                  </div>
                  <h4 className="text-sm font-bold text-soft-ink dark:text-white leading-tight">{p.title}</h4>
                </div>
                <p className="text-xs text-lavender-500/80 dark:text-lavender-400/70 leading-relaxed mb-3 font-medium">{p.description}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag text-[10px] py-0.5 px-2">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
