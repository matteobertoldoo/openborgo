import { Link } from 'react-router-dom';
import { properties } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState } from 'react';

const Stays = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  
  // Filter properties based on search query and price range
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Rural Italian Stays
            </h1>
            <p className="text-xl max-w-2xl">
              Discover authentic accommodations in Italy's most charming countryside locations
            </p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-background rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    className="pl-10 text-foreground dark:text-white"
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number"
                      placeholder="Min €"
                      className="w-24 text-foreground dark:text-white"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                    <span className="text-foreground dark:text-white">-</span>
                    <Input 
                      type="number"
                      placeholder="Max €"
                      className="w-24 text-foreground dark:text-white"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    />
                  </div>
                  <Button className="bg-italia-sage hover:bg-italia-sage/90">
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Properties Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Link key={property.id} to={`/stays/${property.id}`} className="group">
                  <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-52">
                      <img 
                        src={property.images[0]} 
                        alt={property.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      {property.featured && (
                        <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1 text-foreground dark:text-white">{property.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{property.location}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-italia-sage font-semibold mr-1">
                            {property.rating}
                          </span>
                          <span className="text-xs text-muted-foreground dark:text-muted-foreground">
                            ({property.reviewCount} reviews)
                          </span>
                        </div>
                        <div className="font-semibold text-foreground dark:text-white">
                          €{property.price} <span className="text-xs text-muted-foreground dark:text-muted-foreground">/ night</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stays; 