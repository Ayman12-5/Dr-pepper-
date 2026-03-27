/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import Campaigns from './components/Campaigns';
import Merch from './components/Merch';
import Rewards from './components/Rewards';
import BrandStory from './components/BrandStory';
import StoreLocator from './components/StoreLocator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dp-cream font-sans text-dp-dark selection:bg-dp-red selection:text-dp-cream">
      <Header />
      <main>
        <Hero />
        <Flavors />
        <Campaigns />
        <Merch />
        <Rewards />
        <BrandStory />
        <StoreLocator />
        <FAQ />
      </main>
      <Footer />
      
      {/* Global Bubbles Animation */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="bubble" 
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

