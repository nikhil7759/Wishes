import React from 'react';
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
