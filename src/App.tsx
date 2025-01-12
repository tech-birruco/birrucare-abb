import Hero from './components/sections/Hero';
import Problems from './components/sections/Problems';
import Solutions from './components/sections/Solutions';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import CardMasalah from './components/sections/CardMasalah';
import Stop from './components/sections/Stop';
import Benefit from './components/sections/Benefit';
import { Specifications } from './components/sections/Specifications';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <Stop />
      <CardMasalah />
      <Problems />
      <Solutions />
      <Benefit  />
      <Specifications />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <CTASection />
    </div>
  );
}

export default App;