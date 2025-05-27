import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Recycle, Users, Globe } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80)' }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl max-w-2xl">
              Preserving Italy's cultural heritage while promoting responsible tourism
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6 text-italia-brown">Our Vision</h2>
                <p className="text-lg mb-4 text-gray-700">
                  At Openborgo, we believe that sustainable tourism is not just a choice, but a responsibility. Our commitment to sustainability goes beyond environmental protection - it encompasses cultural preservation, community support, and economic development.
                </p>
                <p className="text-lg text-gray-700">
                  We work closely with local communities to ensure that tourism benefits everyone while preserving the authentic character of Italy's rural villages.
                </p>
                {/* 3% Village Fund Donation Section */}
                <div className="mt-8 bg-italia-sage/10 border-l-4 border-italia-sage p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-italia-sage mb-2">3% Donated to Village Fund</h3>
                  <p className="text-gray-700">
                    We are committed to giving back: <span className="font-semibold">3% of all our revenues are donated to the Village Fund</span>, a dedicated initiative to support local heritage, nature conservation, and community projects in the villages we work with. By traveling with us, you directly contribute to the preservation of Italy's unique cultural and natural treasures.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29j2ztENg43AqAXpN2YcbOzJ0rXm12yU3rA&s" 
                  alt="Sustainable tourism" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pillars of Sustainability */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Leaf className="h-8 w-8 text-italia-sage" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Environmental Protection</h3>
                <p className="text-gray-600 text-center">
                  Minimizing our ecological footprint through responsible practices and promoting eco-friendly initiatives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Recycle className="h-8 w-8 text-italia-sage" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Resource Management</h3>
                <p className="text-gray-600 text-center">
                  Implementing efficient waste management and energy conservation practices across all operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-italia-sage" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Community Support</h3>
                <p className="text-gray-600 text-center">
                  Empowering local communities through job creation, skill development, and cultural preservation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Globe className="h-8 w-8 text-italia-sage" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Global Impact</h3>
                <p className="text-gray-600 text-center">
                  Contributing to global sustainability goals while maintaining local authenticity and charm.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability;