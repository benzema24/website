import type { Metadata } from 'next'
import '@/styles/index.css'

export const metadata: Metadata = {
  title: 'Korab Demi - Senior Product Designer',
  description: 'Senior Product Designer with 6+ years crafting enterprise SaaS solutions for US-based startups. Specialized in AI-powered platforms and complex integration systems.',
  keywords: ['Product Designer', 'UX Designer', 'UI Designer', 'SaaS', 'AI', 'Enterprise Design'],
  authors: [{ name: 'Korab Demi' }],
  openGraph: {
    title: 'Korab Demi - Senior Product Designer',
    description: 'Senior Product Designer specializing in AI-powered SaaS products',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
