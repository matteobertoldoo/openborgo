import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [type, setType] = useState('');

  return (
    <section className="relative h-screen bg-cover bg-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://compass-media.vogue.it/photos/65dfb0f4ece7b3d07c3ad4a1/master/w_1600%2Cc_limit/GettyImages-1258118165.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6">
          Discover Italy's <span className="text-openborgo-gold">Hidden Villages</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Authentic experiences, sustainable tourism, and unforgettable memories in Italy's most enchanting borghi.
        </p>
        
        {/* Search component */}
        <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-2xl overflow-hidden">
          <div className="p-5 md:p-8">
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
                      mode="range"
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                      initialFocus
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
                  <option value="">Activity type</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="experience">Experience</option>
                  <option value="event">Event</option>
                </select>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-openborgo-terracotta" />
                </div>
                <button 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-openborgo-sage bg-openborgo-sage hover:bg-openborgo-sage/90 text-white"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce bg-white/30 p-2 w-10 h-10 ring-1 ring-white/20 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}