import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, MapPin, Calendar as CalendarIcon, Users, Check, Wifi, Car, Home, Utensils, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { properties as mockProperties } from '@/data/mockData';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

const PropertyDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [nights, setNights] = useState(7); // Default to 7 nights
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  // --- API + MockData logic ---
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid'>('idle');
  const [couponData, setCouponData] = useState<{ percentage?: number; price?: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prefer API, fallback to mockData if API fails
  useEffect(() => {
    setLoading(true);
    fetch(`https://italia-verde-explore-fork.onrender.com/api/accommodations/${id}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch(() => {
        // fallback to mock data
        const fallback = mockProperties.find((p) => String(p.id) === String(id));
        setProperty(fallback || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  if (!property) {
    return <NotFound />;
  }

  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    if (range?.from && range?.to) {
      const diffTime = Math.abs(range.to.getTime() - range.from.getTime());
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays === 0) diffDays = 1;
      setNights(diffDays);
      setPopoverOpen(false);
    }
  };

  const handleBookNow = () => {
    // Handle booking logic
    alert('Booking functionality will be implemented!');
  };

  const handleValidateCoupon = async () => {
    if (!couponInput) return;
    setCouponStatus('loading');
    setCouponData(null);
    try {
      const res = await fetch(`https://italia-verde-explore-fork.onrender.com/api/coupons/?code=${encodeURIComponent(couponInput)}`);
      const data = await res.json();
      if (res.ok && data.length > 0 && (data[0].percentage || data[0].price)) {
        // Support both price as number and as object with value
        let priceValue = null;
        if (typeof data[0].price === 'object' && data[0].price !== null && typeof data[0].price.value === 'number') {
          priceValue = data[0].price.value;
        } else if (typeof data[0].price === 'number') {
          priceValue = data[0].price;
        }
        setCouponData({ percentage: data[0].percentage, price: priceValue });
        setCouponStatus('valid');
      } else {
        setCouponStatus('invalid');
      }
    } catch {
      setCouponStatus('invalid');
    }
  };

  const calculateTotalPrice = () => {
    const baseTotal = property.price * nights + Math.round(property.price * nights * 0.12);
    let discount = 0;
    if (couponData && typeof couponData.percentage === 'number' && couponData.percentage > 0) {
      discount = Math.round(baseTotal * (couponData.percentage / 100));
    } else if (couponData && typeof couponData.price === 'number' && couponData.price > 0) {
      discount = Math.min(baseTotal, couponData.price);
    }
    return Math.max(0, baseTotal - discount);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Property Images */}
        <section className="bg-italia-cream">
          <div className="container mx-auto px-4 py-4">
            <Link to="/accommodations" className="inline-flex items-center text-italia-sage hover:underline mb-4 dark:text-italia-sage">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to all accommodations
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
                          <CalendarIcon className="h-5 w-5 text-italia-sage mr-2" />
                          <span className="font-semibold text-italia-brown dark:text-white">Check-in / Check-out</span>
                        </div>
                        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                          <PopoverTrigger asChild>
                            <Button 
                              variant="outline" 
                              className="w-full justify-start text-left font-normal"
                              onClick={() => setPopoverOpen(true)}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-italia-sage" />
                              {date?.from && date?.to ? (
                                <span>
                                  {format(date.from, 'dd MMM yyyy')} - {format(date.to, 'dd MMM yyyy')}
                                </span>
                              ) : (
                                <span className="text-muted-foreground">Select dates</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent style={{zIndex: 9999}} className="w-auto p-0" align="start">
                          <Calendar
                            mode="range"
                            selected={date}
                            onSelect={handleDateSelect}
                            numberOfMonths={2}
                            fromDate={new Date()}
                              className={cn('p-3 pointer-events-auto')}
                          />
                          </PopoverContent>
                        </Popover>
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
                      {/* Mantieni i mock breakdown, puoi togliere o commentare queste righe se vuoi nascondere le commissioni */}
                      <div className="flex justify-between text-xs text-muted-foreground/80 dark:text-muted-foreground/80" style={{opacity:0.7}}>
                        <span>Service fee (9%)</span>
                        <span>€{Math.round(property.price * nights * 0.09)}</span>
                      </div>
                      <div className="flex justify-between items-center bg-gradient-to-r from-green-300 via-green-400 to-green-500 p-3 rounded-lg border border-green-600/40 shadow-md animate-pulse">
                        <span className="flex items-center text-green-900 font-bold text-lg">
                          <Leaf className="h-6 w-6 mr-2 text-green-800 animate-bounce" />
                          Village Fund
                          <span className="ml-2 text-xs bg-green-700 text-white px-2 py-0.5 rounded-full font-bold shadow">3%</span>
                        </span>
                        <span className="text-green-900 font-bold text-lg">€{Math.round(property.price * nights * 0.03)}</span>
                      </div>
                      <div className="text-xs text-muted-foreground dark:text-muted-foreground text-center">
                        Supporting local heritage and nature
                      </div>
                      <div className="my-4 border-2 border-dashed border-italia-sage/30 rounded-lg p-4 bg-italia-sage/5">
                        <label className="block text-lg font-semibold mb-3 text-italia-brown flex items-center gap-2">
                          Do you have a coupon?
                        </label>
                        <div className="flex gap-2">
                          <Input
                            type="text"
                            placeholder="Enter the coupon code"
                            value={couponInput}
                            onChange={e => {
                              setCouponInput(e.target.value.toUpperCase());
                              setCouponStatus('idle');
                            }}
                            className="w-full"
                          />
                          <Button
                            type="button"
                            variant="default"
                            className="bg-italia-sage hover:bg-italia-sage/90 text-black font-bold border border-italia-sage dark:bg-italia-sage dark:hover:bg-italia-sage/90 dark:text-white dark:border-italia-sage"
                            onClick={handleValidateCoupon}
                            disabled={!couponInput || couponStatus === 'loading'}
                          >
                            {couponStatus === 'loading' ? 'Verify...' : 'Verify'}
                          </Button>
                        </div>
                        {couponStatus === 'valid' && couponData && (
                          <div className="mt-3 flex flex-col gap-2 shadow-lg rounded-lg bg-green-50 border border-green-400 p-4">
                            <div className="flex items-center gap-3">
                              <svg className="w-7 h-7 text-green-700 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                              <span className="text-green-900 font-bold text-lg">Coupon:</span>
                              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded text-lg font-bold ml-1">
                                {(typeof couponData.percentage === 'number' && couponData.percentage > 0)
                                  ? `-${couponData.percentage}%`
                                  : (typeof couponData.price === 'number' && couponData.price > 0)
                                  ? `-€${couponData.price}`
                                  : <span className="text-gray-400">N/A</span>}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded font-bold text-lg">You save:</span>
                              <span className="text-green-800 font-bold text-lg">
                                {(typeof couponData.percentage === 'number' && couponData.percentage > 0)
                                  ? `-€${Math.round((property.price * nights + Math.round(property.price * nights * 0.12)) * (couponData.percentage / 100))}`
                                  : (typeof couponData.price === 'number' && couponData.price > 0)
                                  ? `-€${couponData.price}`
                                  : <span className="text-gray-400">0</span>}
                              </span>
                            </div>
                          </div>
                        )}
                        {couponStatus === 'invalid' && (
                          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm font-medium">
                            Coupon non valido
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t mt-2 text-italia-brown dark:text-white">
                        <span>Total</span>
                        <span>€{!isNaN(calculateTotalPrice()) ? calculateTotalPrice() : 0}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-italia-sage hover:bg-italia-sage/90 text-black font-bold text-lg shadow-lg border border-italia-sage dark:bg-italia-sage dark:hover:bg-italia-sage/90 dark:text-white dark:border-italia-sage"
                      onClick={handleBookNow}
                    >
                      Book & Pay
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Properties */}
        {/* <section className="py-8 bg-italia-cream">
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
        </section> */}

        {/* After the search section, add the phrase and button */}
        <div className="mt-8 flex flex-col items-center">
          <p className="text-lg text-italia-brown mb-2 font-semibold">Not sure where to go? Explore all villages</p>
          <Link to="/accommodations">
            <Button className="bg-italia-sage hover:bg-italia-sage/90 text-white font-bold px-6 py-2 rounded-lg shadow">
              Places to Stay
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
