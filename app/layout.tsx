import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrialDocFlow - Onchain Regulatory Document Management',
  description: 'Streamline drug trial document management with real-time compliance and immutable audit trails',
  openGraph: {
    title: 'TrialDocFlow',
    description: 'Onchain regulatory document management for drug trials',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
