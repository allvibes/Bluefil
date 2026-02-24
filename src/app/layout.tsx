
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: 'Bluefil - Blueberry Blast',
  description: 'An unforgettable drink experience.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full bg-black text-white overflow-x-hidden">
        <div id="__bluefil-wrapper">
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
