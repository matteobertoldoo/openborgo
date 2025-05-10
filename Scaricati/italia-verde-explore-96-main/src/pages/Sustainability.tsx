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
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3" 
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

        {/* Call to Action */}
        <section className="py-16 bg-italia-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-italia-brown">Join Our Sustainable Journey</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Together, we can make a difference in preserving Italy's cultural heritage while promoting responsible tourism.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="inline-block px-6 py-3 bg-italia-sage text-white rounded-lg hover:bg-italia-sage/90">
                Get Involved
              </a>
              <a href="/about" className="inline-block px-6 py-3 border border-italia-sage text-italia-sage rounded-lg hover:bg-italia-sage/10">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability; 