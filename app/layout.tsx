import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'], display: 'swap', variable: '--font-poppins', })

export const metadata = {
  title: 'Aman Agarwal',
  description: "Aman Agarwal's personal website",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-[#111010] mx-auto max-w-[900px] px-10`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
