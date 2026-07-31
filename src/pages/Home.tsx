import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PremiumCollection from '../components/PremiumCollection';
import FullScreenCarousel from '../components/FullScreenCarousel';
import CustomEvents from '../components/CustomEvents';
import FloralServices from '../components/FloralServices';
import TopSellingSlider from '../components/TopSellingSlider';
import BuildYourBox from '../components/BuildYourBox';
import ArtisanalCollection from '../components/ArtisanalCollection';
import BoutiqueSection from '../components/BoutiqueSection';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Wishes by Om Sweets | Luxury Gifting, Artisanal Sweets & Floral Couture"
        description="Experience the magic of Wishes by Om Sweets. Hand-crafted luxury chocolates, artisanal confections, custom floral services, and bespoke luxury gift boxes."
      />
      <Hero />
      <PremiumCollection />
      <FullScreenCarousel />
      <CustomEvents />
      <FloralServices />
      <TopSellingSlider />
      <BuildYourBox />
      <ArtisanalCollection />
      <BoutiqueSection />
    </>
  );
};

export default Home;

