import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen bg-ink text-slate-100 font-sans antialiased">
    <Nav />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <LeadForm />
    </main>
    <Footer />
  </div>
);

export default App;