import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Bed } from 'lucide-react';

const Accommodations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('https://italia-verde-explore-fork.onrender.com/api/accommodations')
      .then(res => res.json())
      .then(data => {
        setAccommodations(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load accommodations');
        setLoading(false);
      });
  }, []);

  const filteredAccommodations = accommodations.filter(accommodation => {
    return (
      accommodation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      accommodation.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Unique Accommodations
            </h1>
            <p className="text-xl max-w-2xl">
              Experience authentic Italian hospitality in our carefully selected properties
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
                    placeholder="Search accommodations..."
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
              <div className="text-center py-10">Loading accommodations...</div>
            ) : error ? (
              <div className="text-center text-red-500 py-10">{error}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAccommodations.map((accommodation) => (
                  <Link key={accommodation.id} to={`/accommodations/${accommodation.id}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                      <div className="relative h-52">
                        <img 
                          src={accommodation.images[0]} 
                          alt={accommodation.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        {accommodation.featured && (
                          <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1 text-foreground">{accommodation.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2 flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-italia-sage" /> {accommodation.location}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-3.5 w-3.5 text-amber-400 mr-1" />
                            <span className="text-sm text-italia-sage font-semibold mr-1">
                              {accommodation.rating}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({accommodation.reviewCount} reviews)
                            </span>
                          </div>
                          <div className="font-semibold text-foreground">
                            €{accommodation.price} <span className="text-xs text-muted-foreground">/ night</span>
                          </div>
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

export default Accommodations;
