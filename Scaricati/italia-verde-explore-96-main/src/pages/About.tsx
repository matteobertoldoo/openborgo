import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80)' }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              About Openborgo
            </h1>
            <p className="text-xl max-w-2xl">
              Our mission to preserve and revitalize Italy's hidden treasures
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6 text-italia-brown">Our Story</h2>
                <p className="text-lg mb-4 text-gray-700">
                  Openborgo was founded in 2023 with a simple but powerful mission: to breathe new life into Italy's forgotten borghi (historic villages) while preserving their authentic character and supporting local communities.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  What started as a small initiative to connect travelers with authentic rural experiences has grown into a movement that spans across multiple regions of Italy, supporting local artisans, farmers, and entrepreneurs.
                </p>
                <p className="text-lg text-gray-700">
                  We believe in tourism that enriches rather than exploits, that preserves rather than changes, and that connects rather than isolates.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3" 
                  alt="Italian village" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-italia-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center text-italia-brown">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-italia-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Authenticity</h3>
                <p className="text-gray-600 text-center">
                  We showcase the real Italy, away from overcrowded tourist attractions, focusing on genuine local experiences and traditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-italia-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Sustainability</h3>
                <p className="text-gray-600 text-center">
                  We promote responsible tourism that respects the environment, local cultures, and contributes positively to the communities we serve.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-italia-sage/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-italia-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-italia-brown">Community</h3>
                <p className="text-gray-600 text-center">
                  We build bridges between visitors and locals, creating connections that enrich both lives and help preserve Italy's rich cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center text-italia-brown">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Andrea Ballarini */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-italia-sage/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFsoPBoi5JFyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715292853388?e=1752710400&v=beta&t=Xj5VtCGXirHOZZyhnC0as94vO9el23Fh62K59T2h_-c"
                    alt="Ballarini Andrea"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-italia-brown">Ballarini Andrea</h3>
                <p className="text-gray-600">Software Engineer – Fintech Innovations</p>
              </div>

              {/* Kalinina Nataliia */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-italia-sage/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D35AQEmHMfaC1Ea2A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1694691073499?e=1748962800&v=beta&t=i2AggOfucHy9PPqGFL2qlYPK2Y-ycmmiyvpD5ZrryX0"
                    alt="Kalinina Nataliia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-italia-brown">Kalinina Nataliia</h3>
                <p className="text-gray-600">Product Manager</p>
              </div>

              {/* Ezukuse Edith */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-italia-sage/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGooFMWvdbgOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697444543273?e=1752710400&v=beta&t=ZGokLC5YJJTTOjcXcevJ3CDyo-k8PeCFQct1jd2CMqc"
                    alt="Ezukuse Edith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-italia-brown">Ezukuse Edith</h3>
                <p className="text-gray-600">Global Marketing & Brand Manager</p>
              </div>

              {/* Li Lin */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-italia-sage/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="../../public/photo_2025-05-27_16-25-14.jpg"
                    alt="Li Lin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-italia-brown">Li Lin</h3>
                <p className="text-gray-600">BackEnd Developer & AI Specialist</p>
              </div>

              {/* Camarda Alba */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-italia-sage/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D35AQFCxGMO_4bc5Q/profile-framedphoto-shrink_200_200/B4DZYkOxWRHIAY-/0/1744364574370?e=1748962800&v=beta&t=RSQ5ATT6V8krDXc3jqv2aCAiLdGTdHG_oAm3HcgThqY"
                    alt="Camarda Alba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-italia-brown">Camarda Alba</h3>
                <p className="text-gray-600">Local Representative</p>
              </div>

              {/* Bertoldo Matteo */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 rounded-full bg-italia-sage/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHUvqQcilRsDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667072544530?e=1752710400&v=beta&t=a57jzch80mzCSuPTMmUDHFyf75Ije4OucLjDsps2whI"
                    alt="Bertoldo Matteo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-italia-brown">Bertoldo Matteo</h3>
                <p className="text-gray-600">Full-Stack Developer & Cybersecurity Consultant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-italia-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-italia-brown">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-4 text-gray-700">
                Email: <a href="mailto:openborgo@gmail.com" className="text-italia-sage hover:text-italia-sage/80">openborgo@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-italia-brown">Join Our Journey</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Whether you're looking to explore beautiful villages, experience authentic traditions, or contribute to sustainable rural development, we invite you to join our journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-italia-sage hover:bg-italia-sage/90" asChild>
                <Link to="/accommodations">Find a Stay</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/events">Discover Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
