import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Benefits from '@/components/sections/Benefits';
import Demo from '@/components/sections/Demo';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Thêm padding-top để tránh bị che bởi fixed navbar */}
      <div className="pt-5">
        <main className="main-content">
          <Hero />
          <Features />
          <Benefits />
          <Demo />
          <Pricing />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
