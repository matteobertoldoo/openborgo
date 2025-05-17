import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Star, Calendar, Users } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import CouponInput from '@/components/CouponInput';

const AccommodationDetail = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState(1);
  const [couponInput, setCouponInput] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid'>('idle');
  const [couponData, setCouponData] = useState<{ percentage?: number; price?: number } | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://italia-verde-explore-fork.onrender.com/api/accommodations/${id}`)
      .then(res => res.json())
      .then(data => {
        setAccommodation(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load accommodation details');
        setLoading(false);
      });
  }, [id]);

  const handleValidateCoupon = async () => {
    if (!couponInput) return;
    
    setCouponStatus('loading');
    setCouponData(null);
    try {
      const res = await fetch(`https://italia-verde-explore-fork.onrender.com/api/coupons/?code=${encodeURIComponent(couponInput)}`);
      const data = await res.json();
      if (res.ok && data.length > 0 && (data[0].percentage || data[0].price)) {
        setCouponData({ percentage: data[0].percentage, price: data[0].price });
        setCouponStatus('valid');
      } else {
        setCouponStatus('invalid');
      }
    } catch {
      setCouponStatus('invalid');
    }
  };

  const calculateTotalNights = () => {
    if (!date?.from || !date?.to) return 0;
    const diffTime = Math.abs(date.to.getTime() - date.from.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotalPrice = () => {
    if (!accommodation || !date?.from || !date?.to) return 0;
    const nights = calculateTotalNights();
    const baseTotal = accommodation.price * nights;
    let discount = 0;
    if (couponData?.percentage) {
      discount = Math.round(baseTotal * (couponData.percentage / 100));
    } else if (couponData?.price) {
      discount = Math.min(baseTotal, couponData.price);
    }
    return baseTotal - discount;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!accommodation) return <div>Accommodation not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Accommodation Details */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                <img 
                  src={accommodation.images[0]} 
                  alt={accommodation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold mb-4">{accommodation.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-italia-sage mr-2" />
                  <span>{accommodation.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400 mr-2" />
                  <span>{accommodation.rating}</span>
                  <span className="text-gray-500 ml-1">({accommodation.reviewCount} reviews)</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{accommodation.description}</p>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Dates</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Guests</label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                    >
                      -
                    </Button>
                    <span className="mx-4">{guests}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(guests + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <span>€{accommodation.price} × {calculateTotalNights()} nights</span>
                    <span>€{accommodation.price * calculateTotalNights()}</span>
                  </div>
                  {couponData && (couponData.percentage || couponData.price) && (
                    <div className="flex justify-between mb-2 text-green-600">
                      <span>Discount</span>
                      <span>
                        {couponData.percentage
                          ? `-${couponData.percentage}%`
                          : `-€${couponData.price}`}
                      </span>
                    </div>
                  )}
                  {/* Coupon Section - ora qui sopra il totale */}
                  <div className="my-4 border-2 border-dashed border-italia-sage/30 rounded-lg p-4 bg-italia-sage/5">
                    <label className="block text-lg font-semibold mb-3 text-italia-brown flex items-center gap-2">
                      <span className="bg-italia-sage text-white p-1 rounded-md text-xs border border-italia-sage dark:bg-italia-sage dark:text-white dark:border-italia-sage">SAVE</span>
                      Hai un coupon?
                    </label>
                    <Input
                      type="text"
                      placeholder="Inserisci il codice coupon"
                      value={couponInput}
                      onChange={e => {
                        setCouponInput(e.target.value.toUpperCase());
                        setCouponStatus('idle');
                      }}
                      onBlur={handleValidateCoupon}
                      className="w-full"
                    />
                    {couponStatus === 'valid' && couponData && (
                      <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm font-medium">
                        Coupon applicato: {couponData.percentage
                          ? `-${couponData.percentage}%`
                          : couponData.price
                          ? `-€${couponData.price}`
                          : ''}
                      </div>
                    )}
                    {couponStatus === 'invalid' && (
                      <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm font-medium">
                        Coupon non valido
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                    <span>Total</span>
                    <span>€{calculateTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                {/* Book & Pay Button */}
                <Button 
                  className="w-full mt-2 bg-italia-sage hover:bg-italia-sage/90 text-white font-bold text-lg shadow-lg border border-italia-sage dark:bg-italia-sage dark:hover:bg-italia-sage/90 dark:text-white dark:border-italia-sage"
                  disabled={!date?.from || !date?.to}
                  onClick={() => alert('Booking and payment functionality will be implemented!')}
                >
                  Book & Pay
                </Button>
                <p className="text-xs text-center text-italia-brown/70 mt-4 dark:text-muted-foreground">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationDetail;