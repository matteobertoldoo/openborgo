
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Calendar, Clock } from 'lucide-react';

// Sample data for featured items
const featuredAccommodations = [
  {
    id: 'trulli-dream',
    name: 'Trulli Dream House',
    location: 'Alberobello, Puglia',
    image: 'https://trulli-dream-fasano.hotelmix.it/data/Photos/Big/10927/1092796/1092796218/Trulli-Dream-Villa-Fasano-Exterior.JPEG',
    price: 120,
    rating: 4.9,
    reviews: 28,
    type: 'Trulli',
    fewLeft: true
  },
  {
    id: 'casa-verde',
    name: 'Casa Verde Retreat',
    location: 'Montepulciano, Tuscany',
    image: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    price: 150,
    rating: 4.8,
    reviews: 42,
    type: 'Farmhouse',
    fewLeft: false
  },
  {
    id: 'villa-oliveto',
    name: 'Villa Oliveto',
    location: 'Spello, Umbria',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/653465745.jpg?k=712e51013e43f4ebd060e2a4bf61c93beee13470a17490cad8c3ed974050677d&o=&hp=1',
    price: 195,
    rating: 4.9,
    reviews: 35,
    type: 'Villa',
    fewLeft: true
  }
];

const featuredExperiences = [
  {
    id: 'pasta-making',
    name: 'Traditional Pasta Making',
    location: 'Montepulciano, Tuscany',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    price: 65,
    rating: 4.9,
    reviews: 52,
    duration: '3 hours',
    type: 'Culinary'
  },
  {
    id: 'truffle-hunting',
    name: 'Truffle Hunting Adventure',
    location: 'San Miniato, Tuscany',
    image: 'https://meetpiemonte.com/wp-content/uploads/2022/03/private-alba-truffle-hunting-scaled.jpg',
    price: 85,
    rating: 5.0,
    reviews: 24,
    duration: '4 hours',
    type: 'Outdoor'
  },
  {
    id: 'olive-harvest',
    name: 'Olive Harvest Experience',
    location: 'Ostuni, Puglia',
    image: 'https://www.travel.gr/wp-content/uploads/2024/10/olive-grove-new-2048x1543.jpg',
    price: 55,
    rating: 4.8,
    reviews: 38,
    duration: '3 hours',
    type: 'Agricultural'
  }
];

const featuredEvents = [
  {
    id: 'wine-festival',
    name: 'Wine & Jazz Festival',
    location: 'Montalcino, Tuscany',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    date: 'Oct 15-17, 2023',
    type: 'Festival'
  },
  {
    id: 'medieval-festival',
    name: 'Medieval Festival',
    location: 'Gubbio, Umbria',
    image: 'https://eventi.visit-livorno.it/wp-content/uploads/2025/03/IMG_3991.jpg',
    date: 'Sep 5-7, 2023',
    type: 'Cultural'
  },
  {
    id: 'olive-celebration',
    name: 'Olive Oil Festival',
    location: 'Vieste, Puglia',
    image: 'https://www.gardatrentino.it/website_images/events/image-thumb__42646__ds-maxwidth1920/2025_Events_Festival_dell%27olio_1.webp',
    date: 'Nov 10-12, 2023',
    type: 'Culinary'
  }
];

export default function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Featured Accommodations */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl mb-2">
                Places to Stay
              </h2>
              <p className="text-gray-600">
                Unique accommodations in Italy's most charming villages
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
              asChild
            >
              <Link to="/accommodations">View All Stays</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAccommodations.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="sage">{item.type}</Badge>
                  </div>
                  {item.fewLeft && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="terracotta">Only 2 left</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 fill-openborgo-gold text-openborgo-gold" />
                    <span className="ml-1 font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({item.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="sustainability-badge flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Village Fund
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lg">€{item.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/ night</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={`/accommodations/${item.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Featured Experiences */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl mb-2">
                Authentic Experiences
              </h2>
              <p className="text-gray-600">
                Immerse yourself in local traditions and culture
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
              asChild
            >
              <Link to="/experiences">View All Experiences</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExperiences.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="terracotta">{item.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    <Clock className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">{item.duration}</span>
                    <span className="mx-2">•</span>
                    <Star className="h-4 w-4 fill-openborgo-gold text-openborgo-gold" />
                    <span className="ml-1 font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="sustainability-badge flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Village Fund
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lg">€{item.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/ person</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={`/experiences/${item.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Featured Events */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="font-playfair font-bold text-3xl mb-2">
                Upcoming Events
              </h2>
              <p className="text-gray-600">
                Discover festivals, markets, and celebrations
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
              asChild
            >
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge>{item.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-4 w-4 text-openborgo-terracotta mr-1" />
                    <span className="text-sm font-medium text-openborgo-terracotta">{item.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={`/events/${item.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
