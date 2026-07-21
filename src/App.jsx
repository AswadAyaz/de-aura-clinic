import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MeetDentist from './components/MeetDentist'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import TreatmentProcess from './components/TreatmentProcess'
import Statistics from './components/Statistics'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import AppointmentForm from './components/AppointmentForm'
import GoogleMap from './components/GoogleMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CallButton from './components/CallButton'
import AIAssistant from './components/AIAssistant'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MeetDentist />
        <Services />
        <WhyChooseUs />
        <TreatmentProcess />
        <Statistics />
        <Gallery />
        <Testimonials />
        <FAQ />
        <AppointmentForm />
        <GoogleMap />
        <Contact />
      </main>
      <Footer />

      <CallButton />
      <WhatsAppButton />
      <AIAssistant />
      <ScrollToTop />
    </>
  )
}
