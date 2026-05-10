import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maheshari Marble',
  description: 'Complete inventory management solution for Maheshari Marble',
  icons: {
    icon: '/mmt_logo_transparent.png',
    shortcut: '/mmt_logo_transparent.png',
    apple: '/mmt_logo_transparent.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}