import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import InteractiveMap from '@/components/home/InteractiveMap';
import FeaturedSection from '@/components/home/FeaturedSection';
import MissionSection from '@/components/home/MissionSection';
import SustainabilitySection from '@/components/home/SustainabilitySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { Section } from '@/components/common/Section';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Layout>
      <HeroSection />

      {/* Traveler/Host Selection Title */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mt-12 mb-8">Who are you here for?</h2>

      <Section
        title=""
        className="bg-white text-center py-16 pt-0"
      >
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          <div className="bg-[#FEFDF9] p-8 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/2 transform transition duration-300 hover:scale-105">
            <div className="mb-6">
              <img src="https://st.depositphotos.com/1667027/3278/v/450/depositphotos_32783085-stock-illustration-travelling-couple.jpg" alt="Traveler" className="h-32 w-auto rounded-md" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">I'm a Traveler</h3>
            <Link to="/accommodations" className="w-full">
              <Button variant="primary" className="w-full bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-3 px-6 rounded-md">
                Find Places to Stay
              </Button>
            </Link>
          </div>

          <div className="bg-[#FEFDF9] p-8 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/2 transform transition duration-300 hover:scale-105">
            <div className="mb-6">
              <img src="https://st2.depositphotos.com/47577860/45904/v/450/depositphotos_459049734-stock-illustration-estate-real-rent-icon-filled.jpg" alt="Host or Association" className="h-32 w-auto rounded-md" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">I'm a Host or Association</h3>
            <Link to="/about" className="w-full">
              <Button variant="secondary" className="w-full bg-[#CD853F] hover:bg-[#A0522D] text-white font-bold py-3 px-6 rounded-md">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <InteractiveMap />
      <MissionSection />
      <FeaturedSection />
      <SustainabilitySection />
      <TestimonialsSection />
    </Layout>
  );
}
