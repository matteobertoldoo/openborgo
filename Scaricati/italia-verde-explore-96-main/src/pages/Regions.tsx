import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star } from 'lucide-react';

const Regions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('https://italia-verde-explore-fork.onrender.com/api/regions')
      .then(res => res.json())
      .then(data => {
        setRegions(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load regions');
        setLoading(false);
      });
  }, []);

  const filteredRegions = regions.filter(region => {
    return (
      region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516483638261-f4dbaf036963)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Italian Regions
            </h1>
            <p className="text-xl max-w-2xl">
              Discover the unique charm and culture of Italy's diverse regions
            </p>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                    className="pl-10 text-foreground"
                  placeholder="Search regions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                </div>
                <Button className="bg-italia-sage hover:bg-italia-sage/90">
                  Filter
                </Button>
              </div>
            </div>
            {loading ? (
              <div className="text-center py-10">Loading regions...</div>
            ) : error ? (
              <div className="text-center text-red-500 py-10">{error}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRegions.map((region) => (
                  <Link key={region.id} to={`/regions/${region.id}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                      <div className="relative h-52">
                        <img 
                          src={region.image} 
                          alt={region.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        {region.featured && (
                          <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1 text-foreground">{region.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2 flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-italia-sage" /> {region.location}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {region.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <Star className="h-3.5 w-3.5 text-amber-400 mr-1" />
                            <span className="text-sm text-italia-sage font-semibold">
                              {region.rating}
                            </span>
          </div>
                          <Button variant="link" className="text-italia-sage">
                            Explore Region
                          </Button>
            </div>
          </div>
              </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Regions;
