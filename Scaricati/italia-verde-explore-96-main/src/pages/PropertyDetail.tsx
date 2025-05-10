import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, MapPin, Calendar as CalendarIcon, Users, Check, Wifi, Car, Home, Utensils, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { properties } from '@/data/mockData';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';

const PropertyDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [nights, setNights] = useState(7); // Default to 7 nights
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  
  // Find the property by ID
  const property = properties.find(p => p.id === id);
  
  // If property not found, return 404
  if (!property) {
    return <NotFound />;
  }

  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    if (range?.from && range?.to) {
      const diffTime = Math.abs(range.to.getTime() - range.from.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    }
  };

  const handleBookNow = () => {
    // Handle booking logic
    alert('Booking functionality will be implemented!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Property Images */}
        <section className="bg-italia-cream">
          <div className="container mx-auto px-4 py-4">
            <Link to="/stays" className="inline-flex items-center text-italia-sage hover:underline mb-4 dark:text-italia-sage">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to all stays
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={property.images[selectedImage]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {property.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg overflow-hidden h-[190px] cursor-pointer ${selectedImage === index ? 'ring-4 ring-italia-sage' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.name} - image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Property Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-playfair font-bold mb-2 text-italia-brown dark:text-white">{property.name}</h1>
                    <div className="flex items-center text-sm text-italia-brown/70 mb-4 dark:text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" /> {property.location}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-italia-copper mr-1" />
                    <span className="font-semibold text-italia-brown dark:text-white">{property.rating}</span>
                    <span className="text-sm text-italia-brown/70 ml-1 dark:text-muted-foreground">
                      ({property.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown dark:text-white">About this place</h2>
                    <p className="text-italia-brown/70 dark:text-muted-foreground">
                      {property.description}
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown dark:text-white">Amenities</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-italia-sage mr-2" />
                          <span className="text-italia-brown dark:text-white">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown dark:text-white">Location</h2>
                    <div className="bg-italia-sand/20 h-64 rounded-lg relative">
                      {/* Placeholder for map */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-italia-brown/70 text-center">
                          Interactive map would be displayed here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold mb-1 text-italia-brown dark:text-white">
                      €{property.price} <span className="text-sm font-normal text-italia-brown/70 dark:text-muted-foreground">/ night</span>
                    </div>
                    
                    <div className="flex items-center mt-2 mb-6">
                      <Star className="h-5 w-5 text-italia-copper mr-1" />
                      <span className="font-semibold text-italia-brown dark:text-white">{property.rating}</span>
                      <span className="text-sm text-italia-brown/70 ml-1 dark:text-muted-foreground">
                        ({property.reviewCount} reviews)
                      </span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-italia-sage mr-2" />
                          <span className="font-semibold text-italia-brown dark:text-white">Check-in / Check-out</span>
                        </div>
                        <div className="relative">
                          <Calendar
                            mode="range"
                            selected={date}
                            onSelect={handleDateSelect}
                            className="rounded-md border"
                            numberOfMonths={2}
                            fromDate={new Date()}
                          />
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 text-italia-sage mr-2" />
                          <span className="font-semibold text-italia-brown dark:text-white">Guests</span>
                        </div>
                        <div className="border rounded p-2 text-sm text-italia-brown">
                          2 adults, 0 children
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-italia-brown dark:text-white">
                        <span>€{property.price} x {nights} nights</span>
                        <span>€{property.price * nights}</span>
                      </div>
                      <div className="flex justify-between text-italia-brown dark:text-white">
                        <span>Service fee (9%)</span>
                        <span>€{Math.round(property.price * nights * 0.09)}</span>
                      </div>
                      <div className="flex justify-between items-center bg-italia-mint/10 p-3 rounded-lg border border-italia-mint/20">
                        <span className="flex items-center text-italia-sage font-medium">
                          <Leaf className="h-5 w-5 mr-2 text-italia-sage" />
                          Village Fund
                          <span className="ml-2 text-xs bg-italia-sage/10 text-italia-sage px-2 py-0.5 rounded-full">3%</span>
                        </span>
                        <span className="text-italia-sage font-medium">€{Math.round(property.price * nights * 0.03)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground dark:text-muted-foreground text-center">
                        Supporting local heritage and nature
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t mt-2 text-italia-brown dark:text-white">
                        <span>Total</span>
                        <span>€{property.price * nights + Math.round(property.price * nights * 0.12)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-italia-sage hover:bg-italia-sage/90 text-white"
                      onClick={handleBookNow}
                    >
                      Book now
                    </Button>
                    
                    <p className="text-xs text-center text-italia-brown/70 mt-4 dark:text-muted-foreground">
                      You won't be charged yet
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Properties */}
        <section className="py-8 bg-italia-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-playfair font-bold mb-6 text-italia-brown dark:text-white">Similar properties you might like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties
                .filter(p => p.id !== property.id && p.regionId === property.regionId)
                .slice(0, 3)
                .map(similarProperty => (
                  <Link key={similarProperty.id} to={`/stays/${similarProperty.id}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={similarProperty.images[0]} 
                          alt={similarProperty.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1 text-italia-brown dark:text-white">{similarProperty.name}</h3>
                        <p className="text-sm text-italia-brown/70 mb-2 dark:text-muted-foreground">{similarProperty.location}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-italia-copper mr-1" />
                            <span className="text-sm text-italia-brown dark:text-white">{similarProperty.rating}</span>
                          </div>
                          <div className="font-semibold text-italia-brown dark:text-white">
                            €{similarProperty.price} <span className="text-xs text-italia-brown/70 dark:text-muted-foreground">/ night</span>
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

export default PropertyDetail;
