import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'TTC Services | Tax Technology',
  description: 'Digital tax solutions to transform your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0f1e]">
        <Navbar />
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
