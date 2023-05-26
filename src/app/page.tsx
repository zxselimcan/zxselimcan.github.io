import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ServicesSection from '@/components/ServicesSection'

const Page = () => {
  return (
    <div className="min-h-screen" style={{height: "-webkit-fill-available"}} >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}

export default Page
