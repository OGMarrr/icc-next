import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
 <div>
      
      <Hero />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
 </>
  )
}
