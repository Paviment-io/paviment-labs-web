import './globals.css'
import './styles/styles.css'
import './styles/waves.css'
import './styles/slot-text.css'
import './styles/clientLogos.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paviment Labs',
  description: 'Construindo Sonhos',
  icons: {
    icon: [
      `/favicon.ico`,
    ],
    apple: [
      `/apple-touch-icon.png`
    ],
    shortcut: [
      `/apple-touch-icon.png`
    ]
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
