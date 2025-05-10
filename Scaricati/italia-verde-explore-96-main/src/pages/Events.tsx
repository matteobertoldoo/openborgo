
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Sample events data
const events = [
  {
    id: '1',
    title: 'Tuscan Wine Festival',
    location: 'Montepulciano, Tuscany',
    date: '2025-06-15',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7',
    description: "Annual celebration of Tuscany's finest wines with tastings, food pairings, and live music.",
    featured: true,
    category: 'food & wine'
  },
  {
    id: '2',
    title: 'Medieval Festival',
    location: 'Volterra, Tuscany',
    date: '2025-07-22',
    image: 'https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f',
    description: 'Step back in time with medieval reenactments, traditional crafts, and period costumes.',
    featured: false,
    category: 'culture'
  },
  {
    id: '3',
    title: 'Olive Harvest Festival',
    location: 'Ostuni, Puglia',
    date: '2025-10-18',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0',
    description: 'Join locals in harvesting olives and learn traditional oil-making techniques.',
    featured: true,
    category: 'food & wine'
  },
  {
    id: '4',
    title: 'Umbrian Jazz Festival',
    location: 'Perugia, Umbria',
    date: '2025-08-05',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
    description: 'World-renowned jazz performances in historic squares and venues.',
    featured: false,
    category: 'music'
  },
  {
    id: '5',
    title: 'Truffle Hunting Tour',
    location: 'Alba, Piedmont',
    date: '2025-11-10',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
    description: 'Search for prized white truffles with expert hunters and trained dogs.',
    featured: true,
    category: 'food & wine'
  },
  {
    id: '6',
    title: 'Traditional Pottery Workshop',
    location: 'Deruta, Umbria',
    date: '2025-09-12',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261',
    description: 'Learn ancient pottery techniques from master artisans.',
    featured: false,
    category: 'workshop'
  }
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState('');
  
  // Filter events based on search query, date, and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = category === '' || event.category === category;
    
    let matchesDate = true;
    if (selectedDate) {
      const eventDate = new Date(event.date);
      matchesDate = eventDate.toDateString() === selectedDate.toDateString();
    }
    
    return matchesSearch && matchesCategory && matchesDate;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533777857889-4be7c70b33f7)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Local Italian Events & Festivals
            </h1>
            <p className="text-xl max-w-2xl">
              Experience authentic Italian culture through seasonal festivities and local gatherings
            </p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-background rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    className="pl-10 text-foreground dark:text-white"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, 'PPP') : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                
                <div className="flex gap-4">
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">All categories</option>
                    <option value="food & wine">Food & Wine</option>
                    <option value="culture">Culture</option>
                    <option value="music">Music</option>
                    <option value="workshop">Workshop</option>
                  </select>
                  <Button className="bg-italia-sage hover:bg-italia-sage/90">
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Link key={event.id} to={`/events/${event.id}`} className="group">
                  <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-52">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      {event.featured && (
                        <div className="absolute top-3 right-3 bg-amber-500/80 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-800/90 text-foreground dark:text-white font-medium text-sm px-3 py-1 rounded-full">
                        {format(new Date(event.date), 'MMM dd, yyyy')}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-medium text-italia-sage uppercase tracking-wide mb-1">
                        {event.category}
                      </div>
                      <h3 className="text-lg font-bold mb-1 text-foreground dark:text-white">{event.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3 flex items-center">
                        <MapPin className="h-3.5 w-3.5 mr-1 text-italia-sage" /> {event.location}
                      </p>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {event.description}
                      </p>
                      <Button variant="link" className="mt-2 p-0 h-auto text-italia-sage">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No events found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
