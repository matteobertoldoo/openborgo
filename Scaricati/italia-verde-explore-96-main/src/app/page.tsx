import React from 'react';
import { properties, experiences } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { Section } from '../components/common/Section';
import { Grid } from '../components/common/Grid';
import { Button } from '../components/common/Button';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Map from '../components/Map';

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured);
  const featuredExperiences = experiences.filter(e => e.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22)'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Italy's Hidden Gems
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Experience authentic Italian culture in charming villages off the beaten path
          </p>
          <Button variant="primary" size="large">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Traveler/Host Selection Section */}
      <Section
        title="Who are you here for?"
        className="bg-white text-center py-16"
      >
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {/* Traveler Card */}
          <div className="bg-[#FEFDF9] p-8 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/2 transform transition duration-300 hover:scale-105">
            {/* Placeholder for image/icon - Replace with actual image later */}
            <div className="mb-6">
              {/* Simple traveler icon placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
               {/* 
                Replace the SVG above with an image tag like this:
                <img src="/path/to/traveler-image.png" alt="Traveler" className="h-24" />
               */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">I'm a Traveler</h3>
            <Link to="/accommodations" className="w-full">
              <Button variant="primary" className="w-full bg-[#6B8E23] hover:bg-[#556B2F] text-white font-bold py-3 px-6 rounded-md">
                Find Places to Stay
              </Button>
            </Link>
          </div>

          {/* Host/Association Card */}
          <div className="bg-[#FEFDF9] p-8 rounded-lg shadow-lg flex flex-col items-center w-full md:w-1/2 transform transition duration-300 hover:scale-105">
             {/* Placeholder for image/icon - Replace with actual image later */}
            <div className="mb-6">
              {/* Simple host icon placeholder */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m3 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {/* 
                Replace the SVG above with an image tag like this:
                <img src="/path/to/host-image.png" alt="Host or Association" className="h-24" />
               */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">I'm a Host or Association</h3>
            {/* Placeholder link for now */}
             <Link to="/about" className="w-full">
              <Button variant="secondary" className="w-full bg-[#CD853F] hover:bg-[#A0522D] text-white font-bold py-3 px-6 rounded-md">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Interactive Map Section */}
      <Section
        title="Explore Italian Regions"
        subtitle="Discover breathtaking landscapes and authentic villages across Italy"
        className="bg-gray-50"
      >
        <div className="w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Map 
            center={[12.5674, 41.8719]} 
            zoom={4.5} 
            markers={properties.filter(p => p.featured).map(property => ({
              id: property.id,
              coordinates: [property.coordinates.lng, property.coordinates.lat] as [number, number],
              color: '#FF5722'
            }))}
          />
        </div>
        <div className="text-center">
          <Link to="/regions">
            <Button variant="primary">
              View All Regions
            </Button>
          </Link>
        </div>
      </Section>

      {/* Italian Countryside Section */}
      <Section
        title="Authentic Italian Countryside"
        subtitle="Immerse yourself in the peaceful beauty of rural Italy"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
              alt="Italian countryside" 
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Experience Rural Italy</h3>
            <p className="text-gray-600">
              Discover the serene beauty of Italian countryside, with rolling hills, 
              ancient olive groves, and vineyards that stretch as far as the eye can see. 
              Step away from crowded tourist destinations and immerse yourself in the authentic rhythms of rural life.
            </p>
            <Link to="/regions">
              <Button variant="outline">
                Explore Countryside Stays
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Properties */}
      <Section
        title="Featured Places to Stay"
        subtitle="Handpicked accommodations in Italy's most charming villages"
        action={
          <Link to="/accommodations">
            <Button variant="outline">
              View All Properties
            </Button>
          </Link>
        }
      >
        <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="large">
          {featuredProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              onFavorite={() => {}}
            />
          ))}
        </Grid>
      </Section>

      {/* Featured Experiences */}
      <Section
        title="Unique Experiences"
        subtitle="Immerse yourself in local culture with authentic activities"
        action={
          <Link to="/experiences">
            <Button variant="outline">
              View All Experiences
            </Button>
          </Link>
        }
        className="bg-white"
      >
        <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="large">
          {featuredExperiences.map(experience => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onFavorite={() => {}}
            />
          ))}
        </Grid>
      </Section>

      {/* Why Choose Us */}
      <Section
        title="Why Choose Italia Verde"
        subtitle="Experience Italy like a local"
        className="bg-gray-50"
      >
        <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="medium">
          {[
            {
              title: 'Authentic Experiences',
              description: 'Carefully curated activities that showcase the true essence of Italian village life'
            },
            {
              title: 'Local Connections',
              description: 'Direct relationships with local hosts and property owners'
            },
            {
              title: 'Sustainable Tourism',
              description: 'Supporting small communities while preserving their unique character'
            },
            {
              title: 'Personal Touch',
              description: 'Dedicated support throughout your journey from our expert team'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </Grid>
      </Section>
    </Layout>
  );
}
