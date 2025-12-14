import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from '@workspace/ui'
import '@workspace/ui/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Client App',
    template: '%s | Client App',
  },
  description:
    'A modern web application built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Next.js App',
    description:
      'A modern web application built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.',
    siteName: 'Next.js App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js App',
    description:
      'A modern web application built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
