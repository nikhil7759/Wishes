import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import './App.css'

const ShopPage = lazy(() => import('./pages/ShopPage'))
const BulkOrder = lazy(() => import('./pages/BulkOrder'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const ShippingPage = lazy(() => import('./pages/ShippingPage'))
const CancellationPage = lazy(() => import('./pages/CancellationPage'))
const AccountDeletionPage = lazy(() => import('./pages/AccountDeletionPage'))

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#f8f0e5] flex flex-col">
        <ScrollToTop />
        <Navbar />
        <WhatsAppButton />
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#e5c158] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/bulk-order" element={<BulkOrder />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/cancellation" element={<CancellationPage />} />
              <Route path="/account-deletion" element={<AccountDeletionPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App


