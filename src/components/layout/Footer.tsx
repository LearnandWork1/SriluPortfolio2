'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-white/50 dark:bg-[#080415]/80 border-t border-lavender-100 dark:border-lavender-900/30 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lavender-500 to-lavender-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">SC</span>
            </div>
            <span className="text-sm font-semibold text-soft-ink dark:text-lavender-200">
              Srilakshmi Chiluvuri
            </span>
          </div>

          <p className="text-xs text-lavender-400 dark:text-lavender-500 text-center">
            © {new Date().getFullYear()} · Crafted with precision &amp; purpose
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/srilakshmichiluvuri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-lavender-100/60 dark:bg-lavender-900/30 hover:bg-lavender-200 dark:hover:bg-lavender-800/40 text-lavender-600 dark:text-lavender-300 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:srilakshmi@example.com"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-lavender-100/60 dark:bg-lavender-900/30 hover:bg-lavender-200 dark:hover:bg-lavender-800/40 text-lavender-600 dark:text-lavender-300 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-lavender-500 to-lavender-700 text-white shadow-lavender-sm hover:shadow-lavender-md transition-all hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
