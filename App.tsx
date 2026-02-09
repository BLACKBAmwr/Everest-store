
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Team from './components/Team';
import PriceCalculator from './components/PriceCalculator';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Process />
        <PriceCalculator />
        <Team />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
