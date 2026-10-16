import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ContactProvider } from '@/components/ContactModal'
import './globals.css'

export const metadata = {
  title: 'TTC Services | Tax Technology',
  description: 'Digital tax solutions to transform your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ContactProvider>
          <Navbar />
          {/* clip (not hidden) so decorative glows don't cause horizontal scroll and sticky children still work */}
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </ContactProvider>
      </body>
    </html>
  )
}
