
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionsList from '@/components/regions/RegionsList';
import RegionMap from '@/components/regions/RegionMap';

const Regions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb)' }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Italian Regions</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Discover the diverse landscapes and cultural treasures of rural Italy
            </p>
            
            <div className="w-full max-w-md mx-auto bg-white/90 dark:bg-background/90 rounded-lg p-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  className="pl-10 bg-transparent"
                  placeholder="Search regions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Visualization */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Italy Map</h2>
            
            <RegionMap hoveredRegion={hoveredRegion} />
            
            {/* Regions Grid */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">All Italian Regions</h2>
              <RegionsList searchQuery={searchQuery} />
            </div>
          </div>
        </section>
        
        {/* Region Highlights */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Regional Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                  alt="Tuscany landscape" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Tuscan Countryside</h3>
                <p className="text-gray-600">Explore rolling hills, vineyards, and medieval villages in the heart of Italy.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582711012124-a56cf82307a0" 
                  alt="Amalfi Coast" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Amalfi Coastline</h3>
                <p className="text-gray-600">Discover picturesque cliffside villages and stunning Mediterranean views.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2" 
                  alt="Umbria landscape" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Umbrian Valley</h3>
                <p className="text-gray-600">Experience the green heart of Italy with its preserved medieval towns and local traditions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Regions;
