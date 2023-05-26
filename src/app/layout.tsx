import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', "latin-ext"] })

export const metadata = {
  title: 'Selim Can Özdemir',
  description: "Unleashing audacious innovation in software development, I'm the strategic maverick who codes at the intersection of daring, strategy, and inventiveness.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className + " bg-gray-950"}>
        <div
          className="background-image">
        </div>
        <div className='text-neutral-100'>
          {children}
        </div>
      </body>
    </html>
  )
}
