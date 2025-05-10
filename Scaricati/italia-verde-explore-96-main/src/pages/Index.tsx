
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import InteractiveMap from '@/components/home/InteractiveMap';
import FeaturedSection from '@/components/home/FeaturedSection';
import MissionSection from '@/components/home/MissionSection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <InteractiveMap />
      <MissionSection />
      <FeaturedSection />
      <SustainabilitySection />
      <TestimonialsSection />
    </Layout>
  );
}
