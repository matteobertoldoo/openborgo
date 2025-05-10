
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

const Accommodations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  
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
              Rural Italian Accommodations
            </h1>
            <p className="text-xl max-w-2xl">
              Discover authentic stays in Italy's most charming countryside locations
            </p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-background rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    className="pl-10 text-foreground dark:text-white"
                    placeholder="Search accommodations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Calendar className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                            </>
                          ) : (
                            format(date.from, "MMM d, yyyy")
                          )
                        ) : (
                          <span>Select dates</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 flex-1">
                    <Input 
                      type="number"
                      placeholder="Min €"
                      className="w-full text-foreground dark:text-white"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                    <span className="text-foreground dark:text-white">-</span>
                    <Input 
                      type="number"
                      placeholder="Max €"
                      className="w-full text-foreground dark:text-white"
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
                <Link key={property.id} to={`/accommodations/${property.id}`} className="group">
                  <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
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
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2 flex items-center">
                        <MapPin className="h-3.5 w-3.5 mr-1 text-italia-sage" /> {property.location}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 text-amber-400 mr-1" />
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

export default Accommodations;
