import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Srilakshmi Chiluvuri — Senior Full Stack Engineer',
  description: 'Building enterprise-grade platforms at the intersection of reliability, AI, and scale. Full Stack Engineer with expertise in Frontend, Backend, Cloud & AI-Ready Architectures.',
  keywords: ['Full Stack Developer', 'Enterprise Applications', 'AI Architecture', 'React', 'Java', 'Cloud'],
  authors: [{ name: 'Srilakshmi Chiluvuri' }],
  openGraph: {
    title: 'Srilakshmi Chiluvuri — Senior Full Stack Engineer',
    description: 'Building enterprise-grade platforms at the intersection of reliability, AI, and scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-quicksand antialiased">
        {children}
      </body>
    </html>
  )
}
