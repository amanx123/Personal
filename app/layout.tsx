import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['devanagari'] })

export const metadata = {
  title: 'Aman',
  description: "Aman Agarwal's personal website",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-950`}>{children}</body>
    </html>
  )
}
