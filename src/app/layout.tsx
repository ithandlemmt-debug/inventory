import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tiles Inventory Management System',
  description: 'Complete inventory management solution for tiles showroom',
  icons: {
    icon: '/mmt_logo.jpeg',
    shortcut: '/mmt_logo.jpeg',
    apple: '/mmt_logo.jpeg',
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