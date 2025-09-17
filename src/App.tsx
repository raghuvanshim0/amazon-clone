import { Toaster } from 'sonner'
import Header from './components/Header'
import Navigation from './components/Navigation'
import HeroBanner from './components/HeroBanner'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <HeroBanner />
        <ProductGrid />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}

export default App