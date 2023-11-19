import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


import './globals.css'

export const metadata = {
  title: 'Deloitte Tax',
  description: 'Tax Technology Consulting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-[#121212] '>
        <Navbar />
        <main className=' overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
