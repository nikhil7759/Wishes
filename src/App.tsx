import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PremiumCollection from './components/PremiumCollection'
import FloralServices from './components/FloralServices'
import TopSellingSlider from './components/TopSellingSlider'
import BuildYourBox from './components/BuildYourBox'
import ArtisanalCollection from './components/ArtisanalCollection'
import BoutiqueSection from './components/BoutiqueSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section className="bg-[#fbf0f0] py-4 px-6 text-center font-jost text-sm tracking-wide border-b border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-black">
          {/* <span className="font-semibold uppercase tracking-wider text-[13px] md:text-[14px]">
            Join the Wishes Taste Club
          </span> */}
          <span className="text-gray-700 font-light text-[12px] md:text-[13px]">
            Access our latest luxury sweets and curated hampers before the world does.
          </span>
        </section>
        <PremiumCollection />
        <FloralServices />
        <TopSellingSlider />
        <BuildYourBox />
        <ArtisanalCollection />
        <BoutiqueSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
