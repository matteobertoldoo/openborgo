import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, MapPin } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="max-w-2xl">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-openborgo-gold mr-2" />
                <h3 className="font-medium text-lg text-openborgo-brown">Borghi più belli d'Italia</h3>
              </div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
                Preserving Italy's Most Beautiful Villages
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We've partnered with "I Borghi più belli d'Italia" association to promote and protect Italy's most precious hidden gems. These certified villages represent the authentic heart of Italian culture, architecture, and traditions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-openborgo-terracotta mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-lg">Authentic Experience</h4>
                    <p className="text-gray-600">
                      Discover villages that maintain their historical character, traditional architecture, and local cultural practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-openborgo-terracotta mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-lg">Quality Certification</h4>
                    <p className="text-gray-600">
                      Each village meets strict criteria for beauty, heritage preservation, and visitor experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-openborgo-terracotta mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-lg">Beyond Tourism</h4>
                    <p className="text-gray-600">
                      By visiting these villages, you're helping preserve Italian rural heritage for future generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/about">
                    Our Mission
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/regions">
                    Explore Certified Borghi
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-openborgo-terracotta/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-openborgo-sage/10 rounded-full z-0"></div>
              <div className="relative z-10">
                <img 
                  src="https://www.greenme.it/wp-content/uploads/2024/04/Borgo-dei-borghi.jpg" 
                  alt="Borgo dei Borghi 2024"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQae3N--UtcdlqlSrI_el5HcBa69h7_h1cLGg&s" 
                    alt="Borghi più belli d'Italia logo"
                    className="w-10 h-10 mr-2"
                  />
                  <div className="text-sm">
                    <p className="font-medium">Certified Village</p>
                    <p className="text-xs text-gray-500">Borghi più belli d'Italia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}