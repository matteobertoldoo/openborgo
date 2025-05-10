import React from 'react';
import { Leaf, Droplet, Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function SustainabilitySection() {
  return (
    <section className="py-16 bg-openborgo-sage/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
            Our Sustainability Commitment
          </h2>
          <p className="text-lg text-gray-700">
            For every booking you make, 3% goes directly to local village projects.
            Together, we're preserving Italy's heritage and supporting sustainable tourism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://phswastekit.co.uk/uploads/1/Heart%20shaped%20tree%20-%20eco-friendly%20concept.jpg"
              alt="Italian village restoration project"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="bg-openborgo-sage h-10 w-10 rounded-full flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl mb-2">Village Fund</h3>
                  <p className="text-gray-700">
                    3% of every booking is contributed to our Village Fund, supporting local sustainability projects.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="bg-openborgo-terracotta h-10 w-10 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl mb-2">Community Driven</h3>
                  <p className="text-gray-700">
                    Local communities decide which projects to fund, from restoring historic buildings to supporting traditional crafts.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="bg-openborgo-gold h-10 w-10 rounded-full flex items-center justify-center">
                    <Droplet className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl mb-2">Real Impact</h3>
                  <p className="text-gray-700">
                    Track how your contributions are making a difference with transparent project updates and impact reports.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <div className="bg-openborgo-olive h-10 w-10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl mb-2">Economic Revival</h3>
                  <p className="text-gray-700">
                    By visiting these villages, you're contributing to economic revival and preventing depopulation.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button asChild>
                  <Link to="/sustainability">
                    Learn More About Our Impact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Removed Recent Village Projects section */}

      </div>
    </section>
  );
}