import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '../styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - TaxPal',
   // Tab Titelbeschriftung
    default: 'Homepage',
  },
  description:
    'Musterswebseite',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-stone-950 antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
