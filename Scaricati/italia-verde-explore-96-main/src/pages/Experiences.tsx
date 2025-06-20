import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, MapPin, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import CouponInput from '@/components/CouponInput';
import { experiences as mockExperiences } from '@/data/mockData';

const Experiences = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [type, setType] = useState('');
  const [discount, setDiscount] = useState<{ type: 'percentage' | 'price', value: number } | null>(null);
  // Usa solo i mock, nessun fetch
  const [experiences] = useState<any[]>(mockExperiences);
  const [loading] = useState(false);

  const calculateDiscountedPrice = (originalPrice: number) => {
    if (!discount) return originalPrice;
    if (discount.type === 'percentage') {
      return originalPrice * (1 - discount.value / 100);
    } else {
      return Math.max(0, originalPrice - discount.value);
    }
  };

  const handleCouponApplied = (newDiscount: { type: 'percentage' | 'price', value: number }) => {
    setDiscount(newDiscount);
  };

  // Filtro base (se vuoi filtrare per location/type/date, aggiungi qui)
  const filteredExperiences = experiences.filter(exp => {
    let match = true;
    if (location && !exp.location?.toLowerCase().includes(location.toLowerCase())) match = false;
    if (type && exp.type !== type) match = false;
    // Puoi aggiungere filtro per date se necessario
    return match;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544949500-dc57971f0d41?ixlib=rb-4.0.3)' }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Discover Authentic Experiences
            </h1>
            <p className="text-xl max-w-2xl">
              Immerse yourself in Italy's rich cultural heritage through our curated experiences
            </p>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <MapPin className="h-5 w-5 text-openborgo-terracotta" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-openborgo-terracotta"
                  />
                </div>
                
                <div className="relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-openborgo-terracotta text-left relative">
                        <Calendar className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-openborgo-terracotta" />
                        {date?.from ? (
                          date.to ? (
                            <span>
                              {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                            </span>
                          ) : (
                            format(date.from, "MMM d, yyyy")
                          )
                        ) : (
                          <span className="text-gray-500">When?</span>
                        )}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
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
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Tag className="h-5 w-5 text-openborgo-terracotta" />
                  </div>
                  <select 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-openborgo-terracotta appearance-none"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="">Experience type</option>
                    <option value="cooking">Cooking</option>
                    <option value="wine">Wine Tasting</option>
                    <option value="cultural">Cultural</option>
                    <option value="outdoor">Outdoor</option>
                  </select>
                </div>
                
                <div className="relative flex items-center justify-center h-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-black" />
                  </div>
                <button
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-openborgo-terracotta bg-openborgo-terracotta hover:bg-openborgo-terracotta/90 text-white flex items-center justify-center text-base font-semibold"
                  >
                    Search
                </button>
            </div>
          </div>
              <div className="mt-4 flex justify-end">
                <CouponInput onCouponApplied={handleCouponApplied} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Experiences Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExperiences.map((experience) => {
                const discountedPrice = calculateDiscountedPrice(experience.price);
                // Usa experience.image o il primo delle images
                const imageSrc = experience.image || (experience.images && experience.images[0]) || '';
                return (
                  <div key={experience.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={imageSrc}
                        alt={experience.title || experience.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-sm font-semibold">
                        {discount ? (
                          <div className="flex flex-col items-end">
                            <span className="line-through text-gray-500">€{experience.price}</span>
                            <span className="text-green-600">€{discountedPrice.toFixed(2)}</span>
                          </div>
                        ) : (
                          `€${experience.price}`
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-italia-brown">{experience.title || experience.name}</h3>
                      <p className="text-gray-600 mb-4">{experience.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                        <div>{experience.duration}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="font-semibold">{experience.rating}</span>
                          <span className="text-gray-500 ml-1">({experience.reviewCount || experience.reviews} reviews)</span>
                        </div>
                        <Button
                          style={{ backgroundColor: '#22c55e' }} // tailwind green-500
                          className="hover:bg-green-600 text-black font-bold"
                          asChild
                        >
                          <Link to={`/experiences/${experience.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experiences;