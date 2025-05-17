import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, MapPin, Calendar, Users, Clock, UtensilsCrossed, Bike, Tent, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/mockData';
import Footer from "@/components/Footer";
import NotFound from './NotFound';
import { Experience } from '../data/mockData';

interface ExperienceDetailProps {
  type?: 'food' | 'outdoor' | 'culture' | 'wellness';
}

const ExperienceDetail = ({ type }: ExperienceDetailProps) => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(2);
  const [coupon, setCoupon] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'valid' | 'invalid' | 'loading'>('idle');
  const [couponData, setCouponData] = useState<{ percentage?: number; price?: number } | null>(null);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the experience by ID and type if provided
  const experience = experiences.find(e => {
    if (type) {
      return e.id === id && e.type === type;
    }
    return e.id === id;
  });
  
  // If experience not found, return 404
  if (!experience) {
    return <NotFound />;
  }

  // Type-specific icon
  const TypeIcon = () => {
    switch (experience.type) {
      case 'food':
        return <UtensilsCrossed className="h-5 w-5" />;
      case 'outdoor':
        return <Bike className="h-5 w-5" />;
      case 'culture':
        return <Tent className="h-5 w-5" />;
      case 'wellness':
        return <Leaf className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const handleReserve = () => {
    // Handle reservation logic
    alert('Reservation functionality will be implemented!');
  };

  const handleValidateCoupon = async () => {
    setCouponStatus('loading');
    setCouponData(null);
    try {
      const res = await fetch(`https://italia-verde-explore-fork.onrender.com/api/coupons/?code=${encodeURIComponent(coupon)}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data && (data.percentage || data.price)) {
        setCouponData({ percentage: data.percentage, price: data.price });
        setCouponStatus('valid');
      } else {
        setCouponStatus('invalid');
      }
    } catch {
      setCouponStatus('invalid');
    }
  };

  // Calcolo prezzo scontato
  const baseTotal = experience.price * participants;
  let discount = 0;
  if (couponData?.percentage) {
    discount = Math.round(baseTotal * (couponData.percentage / 100));
  } else if (couponData?.price) {
    discount = Math.min(baseTotal, couponData.price);
  }
  const discountedTotal = baseTotal - discount;
  const serviceFee = Math.round(discountedTotal * 0.09);
  const villageFund = Math.round(discountedTotal * 0.03);
  const finalTotal = discountedTotal + serviceFee + villageFund;

  const availableDates = [
    'April 20, 2025 - 10:00 AM',
    'April 21, 2025 - 10:00 AM',
    'April 22, 2025 - 2:00 PM',
    'April 23, 2025 - 10:00 AM',
    'April 24, 2025 - 2:00 PM',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Experience Images */}
        <section className="bg-italia-cream">
          <div className="container mx-auto px-4 py-4">
            <Link to="/experiences" className="inline-flex items-center text-italia-sage hover:underline mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to all experiences
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={experience.images[selectedImage]} 
                  alt={experience.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {experience.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg overflow-hidden h-[190px] cursor-pointer ${selectedImage === index ? 'ring-4 ring-italia-sage' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${experience.name} - image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Badge variant="outline" className="bg-italia-mint/20 text-italia-sage hover:bg-italia-mint/30 mb-2">
                  <TypeIcon />
                  <span className="ml-1">
                    {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                  </span>
                </Badge>
                
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-playfair font-bold mb-2 text-italia-brown">{experience.name}</h1>
                    <div className="flex items-center text-sm text-italia-brown/70 mb-4">
                      <MapPin className="h-4 w-4 mr-1" /> {experience.location}
                      <Clock className="h-4 w-4 ml-3 mr-1" /> {experience.duration}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-italia-copper mr-1" />
                    <span className="font-semibold text-italia-brown">{experience.rating}</span>
                    <span className="text-sm text-italia-brown/70 ml-1">
                      ({experience.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown">About this experience</h2>
                    <p className="text-italia-brown/70">
                      {experience.description}
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown">What you'll do</h2>
                    <p className="text-italia-brown/70">
                      This is a unique opportunity to immerse yourself in authentic Italian culture and learn from local experts.
                      The experience is suitable for all skill levels and ages. All materials and equipment will be provided.
                      You'll take home not just memories, but also practical skills and knowledge that will stay with you long after your trip.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown">Meet your host</h2>
                    <div className="flex">
                      <div className="w-16 h-16 bg-italia-sand/20 rounded-full mr-4 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                          alt="Host" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-italia-brown">Local Expert</p>
                        <p className="text-sm text-italia-brown/70">
                          Hosting experiences since 2018<br />
                          Languages: English, Italian
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-italia-brown">Location</h2>
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
                    <div className="text-2xl font-bold mb-1 text-italia-brown">
                      €{experience.price} <span className="text-sm font-normal text-italia-brown/70">per person</span>
                    </div>
                    
                    <div className="flex items-center mt-2 mb-6">
                      <Star className="h-5 w-5 text-italia-copper mr-1" />
                      <span className="font-semibold text-italia-brown">{experience.rating}</span>
                      <span className="text-sm text-italia-brown/70 ml-1">
                        ({experience.reviewCount} reviews)
                      </span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {/* Coupon field */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="font-semibold text-italia-brown">Coupon</span>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={coupon}
                            onChange={e => { setCoupon(e.target.value); setCouponStatus('idle'); }}
                            placeholder="Enter coupon code"
                            className="border rounded px-3 py-2 flex-1 text-sm"
                          />
                          <Button
                            variant="outline"
                            onClick={handleValidateCoupon}
                            disabled={couponStatus === 'loading' || !coupon}
                          >
                            {couponStatus === 'loading' ? 'Validating...' : 'Apply'}
                          </Button>
                        </div>
                        {couponStatus === 'valid' && couponData && (
                          <div className="mt-3 flex flex-col gap-1">
                            <div className="flex items-center gap-2 p-3 bg-green-100 border border-green-400 rounded-md text-green-900 text-base font-bold">
                              <svg className="w-5 h-5 text-green-700 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                              Coupon:
                              <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded ml-1">
                                {couponData.percentage ? `-${couponData.percentage}%` : couponData.price ? `-€${couponData.price}` : ''}
                              </span>
                            </div>
                            <div className="text-green-800 font-semibold text-base ml-2 flex items-center gap-2">
                              <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded font-bold">You save:</span>
                              {couponData.percentage ? `-€${Math.round((experience.price * participants + Math.round(experience.price * participants * 0.12)) * (couponData.percentage / 100))}` : couponData.price ? `-€${couponData.price}` : ''}
                            </div>
                          </div>
                        )}
                        {couponStatus === 'invalid' && (
                          <div className="text-red-600 text-sm mt-2">
                            Invalid coupon code
                          </div>
                        )}
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-italia-sage mr-2" />
                          <span className="font-semibold text-italia-brown">Select a date & time</span>
                        </div>
                        <div className="space-y-2">
                          {availableDates.map((date, index) => (
                            <div 
                              key={index}
                              className={`border rounded p-2 text-sm cursor-pointer hover:bg-italia-mint/5 ${selectedDate === date ? 'bg-italia-mint/10 border-italia-sage text-italia-brown' : 'text-italia-brown/70'}`}
                              onClick={() => setSelectedDate(date)}
                            >
                              {date}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 text-italia-sage mr-2" />
                          <span className="font-semibold text-italia-brown">Participants</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button 
                            variant="outline" 
                            size="icon"
                            disabled={participants <= 1}
                            onClick={() => setParticipants(p => Math.max(1, p - 1))}
                            className="text-italia-brown"
                          >
                            -
                          </Button>
                          <span className="text-lg text-italia-brown">{participants}</span>
                          <Button 
                            variant="outline" 
                            size="icon"
                            disabled={participants >= 10}
                            onClick={() => setParticipants(p => Math.min(10, p + 1))}
                            className="text-italia-brown"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price breakdown */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-italia-brown dark:text-white">
                        <span>€{experience.price} x {participants} people</span>
                        <span>€{baseTotal}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-700">
                          <span>Coupon discount</span>
                          <span>-€{discount}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-italia-brown dark:text-white cursor-pointer group" onClick={() => alert('Service fee helps cover our operational costs and ensures a smooth booking experience.')}>
                        <span className="flex items-center">
                          Service fee (9%)
                          <span className="ml-2 text-xs text-italia-brown/50 group-hover:text-italia-brown">ⓘ</span>
                        </span>
                        <span>€{serviceFee}</span>
                      </div>
                      <div className="flex justify-between items-center bg-italia-mint/10 p-3 rounded-lg border border-italia-mint/20">
                        <span className="flex items-center text-italia-sage font-medium">
                          <Leaf className="h-5 w-5 mr-2 text-italia-sage" />
                          Village Fund
                          <span className="ml-2 text-xs bg-italia-sage/10 text-italia-sage px-2 py-0.5 rounded-full">3%</span>
                        </span>
                        <span className="text-italia-sage font-medium">€{villageFund}</span>
                      </div>
                      <div className="text-xs text-muted-foreground dark:text-muted-foreground text-center italic">
                        Supporting local heritage preservation and sustainable tourism
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t mt-2 text-italia-brown dark:text-white">
                        <span>Total</span>
                        <span>€{finalTotal}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-italia-sage hover:bg-italia-sage/90 text-white"
                      disabled={!selectedDate}
                      onClick={handleReserve}
                    >
                      Reserve
                    </Button>
                    
                    <p className="text-xs text-center text-italia-brown/70 mt-4">
                      You won't be charged yet
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Experiences */}
        <section className="py-8 bg-italia-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-playfair font-bold mb-6 text-italia-brown">Similar experiences you might like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences
                .filter(e => e.id !== experience.id && e.regionId === experience.regionId)
                .slice(0, 3)
                .map(similarExperience => (
                  <Link key={similarExperience.id} to={`/experiences/${similarExperience.id}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={similarExperience.images[0]} 
                          alt={similarExperience.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                            {similarExperience.type.charAt(0).toUpperCase() + similarExperience.type.slice(1)}
                          </span>
                          <span className="text-xs text-italia-brown/70 ml-2">
                            {similarExperience.duration}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-1 text-italia-brown">{similarExperience.name}</h3>
                        <p className="text-sm text-italia-brown/70 mb-2">{similarExperience.location}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-italia-copper mr-1" />
                            <span className="text-sm text-italia-brown">{similarExperience.rating}</span>
                          </div>
                          <div className="font-semibold text-italia-brown">
                            €{similarExperience.price} <span className="text-xs text-italia-brown/70">per person</span>
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

export default ExperienceDetail;
