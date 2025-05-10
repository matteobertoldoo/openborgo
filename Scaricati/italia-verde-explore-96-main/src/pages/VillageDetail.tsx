import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Landmark, 
  Home, 
  UtensilsCrossed, 
  Mountain, 
  Users, 
  History, 
  MapPin,
  Star,
  Calendar,
  Clock,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { villages, experiences, properties, events, regions } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

const VillageDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the village by ID
  const village = villages.find(v => v.id === id);
  
  // If village not found, return 404
  if (!village) {
    return <NotFound />;
  }
  
  // Get the region ID for breadcrumb navigation
  const regionId = village.regionId;
  const region = regions.find(r => r.id === regionId);
  
  // Get experiences and properties in this village
  const villageExperiences = experiences.filter(e => e.location.includes(village.name));
  const villageStays = properties.filter(p => p.location.includes(village.name));
  const villageEvents = events.filter(e => e.villageId === id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${village.image})` }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <Link to={`/regions/${regionId}`} className="text-white mb-4 flex items-center hover:underline dark:text-white">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to {region?.name}
            </Link>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-2 dark:text-white">
              {village.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl dark:text-white/90">
              Experience the authentic charm of this historic Italian village
            </p>
          </div>
        </section>
        
        {/* Tabs Navigation */}
        <section className="sticky top-16 z-30 bg-background border-b shadow-sm">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start bg-transparent h-16">
                <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
                <TabsTrigger value="stays" className="text-base">Stays</TabsTrigger>
                <TabsTrigger value="experiences" className="text-base">Experiences</TabsTrigger>
              </TabsList>
            
              {/* Tab Contents */}
              <div className="container mx-auto px-4 py-8">
                <TabsContent value="overview" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 dark:text-white">About {village.name}</h2>
                      <p className="text-muted-foreground mb-6 dark:text-muted-foreground">
                        {village.description}
                      </p>
                      
                      <div className="bg-italia-beige/30 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center dark:text-white">
                          <Info className="h-5 w-5 mr-2 text-italia-green" />
                          Local Highlights
                        </h3>
                        <p className="text-muted-foreground dark:text-muted-foreground">
                          {village.highlights}
                        </p>
                      </div>
                      
                      {/* Featured Stays */}
                      {villageStays.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Featured Stays</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {villageStays.slice(0, 2).map(property => (
                              <Link key={property.id} to={`/stays/${property.id}`}>
                                <Card className="bg-white hover:shadow-lg transition-shadow">
                                  <div className="relative h-48">
                                    <img 
                                      src={property.images[0]} 
                                      alt={property.name} 
                                      className="w-full h-full object-cover rounded-t-lg"
                                    />
                                    {property.featured && (
                                      <div className="absolute top-3 right-3 bg-italia-terracotta text-white text-xs px-2 py-1 rounded-full">
                                        Featured
                                      </div>
                                    )}
                                  </div>
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">{property.name}</CardTitle>
                                    <CardDescription>{property.location}</CardDescription>
                                  </CardHeader>
                                  <CardFooter className="pt-2">
                                    <div className="flex justify-between items-center w-full">
                                      <div className="flex items-center">
                                        <Star className="h-4 w-4 text-italia-terracotta mr-1" />
                                        <span className="text-sm font-semibold">{property.rating}</span>
                                      </div>
                                      <div className="font-semibold">
                                        €{property.price} <span className="text-xs text-muted-foreground">/ night</span>
                                      </div>
                                    </div>
                                  </CardFooter>
                                </Card>
                              </Link>
                            ))}
                          </div>
                          
                          <div className="mt-4">
                            <Button 
                              variant="outline" 
                              onClick={() => setActiveTab('stays')}
                              className="w-full md:w-auto"
                            >
                              View All Stays
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Featured Experiences */}
                      {villageExperiences.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Featured Experiences</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {villageExperiences.slice(0, 2).map(experience => (
                              <Link key={experience.id} to={`/experiences/${experience.id}`}>
                                <Card className="bg-white hover:shadow-lg transition-shadow">
                                  <div className="relative h-48">
                                    <img 
                                      src={experience.images[0]} 
                                      alt={experience.name} 
                                      className="w-full h-full object-cover rounded-t-lg"
                                    />
                                    {experience.featured && (
                                      <div className="absolute top-3 right-3 bg-italia-terracotta text-white text-xs px-2 py-1 rounded-full">
                                        Featured
                                      </div>
                                    )}
                                  </div>
                                  <CardHeader className="pb-2">
                                    <div className="flex items-center mb-2">
                                      <span className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                        {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                                      </span>
                                    </div>
                                    <CardTitle className="text-lg">{experience.name}</CardTitle>
                                    <CardDescription>{experience.duration}</CardDescription>
                                  </CardHeader>
                                  <CardFooter className="pt-2">
                                    <div className="flex justify-between items-center w-full">
                                      <div className="flex items-center">
                                        <Star className="h-4 w-4 text-italia-terracotta mr-1" />
                                        <span className="text-sm font-semibold">{experience.rating}</span>
                                      </div>
                                      <div className="font-semibold">
                                        €{experience.price} <span className="text-xs text-muted-foreground">per person</span>
                                      </div>
                                    </div>
                                  </CardFooter>
                                </Card>
                              </Link>
                            ))}
                          </div>
                          
                          <div className="mt-4">
                            <Button 
                              variant="outline" 
                              onClick={() => setActiveTab('experiences')}
                              className="w-full md:w-auto"
                            >
                              View All Experiences
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Local Events */}
                      {villageEvents.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {villageEvents.map(event => (
                              <Link key={event.id} to={`/events/${event.id}`}>
                                <Card className="bg-white hover:shadow-lg transition-shadow">
                                  <div className="relative h-48">
                                    <img 
                                      src={event.images[0]} 
                                      alt={event.name} 
                                      className="w-full h-full object-cover rounded-t-lg"
                                    />
                                    {event.isFree && (
                                      <div className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                        Free Event
                                      </div>
                                    )}
                                  </div>
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">{event.name}</CardTitle>
                                    <CardDescription>{event.location}</CardDescription>
                                  </CardHeader>
                                  <CardContent className="pt-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Calendar className="h-4 w-4" />
                                      <span>{formatDate(event.date)}</span>
                                      <Clock className="h-4 w-4 ml-2" />
                                      <span>{event.startTime} - {event.endTime}</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      <Card className="bg-italia-beige shadow-md">
                        <CardHeader>
                          <CardTitle>Village Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-italia-green mr-3" />
                            <span className="text-muted-foreground dark:text-muted-foreground">Region</span>
                            <span className="font-semibold dark:text-white">{region?.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-italia-green mr-3" />
                            <span className="text-muted-foreground dark:text-muted-foreground">Population</span>
                            <span className="font-semibold dark:text-white">{village.population}</span>
                          </div>
                          <div className="flex items-center">
                            <Mountain className="h-5 w-5 text-italia-green mr-3" />
                            <span className="text-muted-foreground dark:text-muted-foreground">Elevation</span>
                            <span className="font-semibold dark:text-white">{village.elevation}m</span>
                          </div>
                        </CardContent>
                      </Card>

                      {villageStays.length > 0 && (
                        <Card className="bg-white">
                          <CardHeader>
                            <CardTitle>Places to Stay</CardTitle>
                            <CardDescription>Accommodations in {village.name}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {villageStays.slice(0, 3).map(property => (
                              <Link 
                                key={property.id} 
                                to={`/stays/${property.id}`}
                                className="flex items-center p-3 bg-white rounded-md hover:bg-italia-mint/10 transition-colors"
                              >
                                <Home className="h-5 w-5 text-italia-green mr-3" />
                                <div className="flex-grow">
                                  <span className="block font-medium">{property.name}</span>
                                  <span className="text-sm text-muted-foreground">From €{property.price}/night</span>
                                </div>
                              </Link>
                            ))}
                            
                            {villageStays.length > 3 && (
                              <Button 
                                variant="outline" 
                                onClick={() => setActiveTab('stays')}
                                className="w-full"
                              >
                                View All Accommodations
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="stays" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4">Stay in {village.name}</h2>
                    <p className="text-muted-foreground">
                      Discover unique accommodations in this charming village.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {villageStays.map((property) => (
                      <Link key={property.id} to={`/stays/${property.id}`} className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative h-52">
                            <img 
                              src={property.images[0]} 
                              alt={property.name} 
                              className="w-full h-full object-cover"
                            />
                            {property.featured && (
                              <div className="absolute top-3 right-3 bg-italia-terracotta text-white text-xs px-2 py-1 rounded-full">
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-bold mb-1">{property.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <span className="text-sm text-italia-green font-semibold mr-1">
                                  {property.rating}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ({property.reviewCount} reviews)
                                </span>
                              </div>
                              <div className="font-semibold">
                                €{property.price} <span className="text-xs text-muted-foreground">/ night</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {villageStays.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No stays available in this village yet.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="experiences" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4">Experiences in {village.name}</h2>
                    <p className="text-muted-foreground">
                      Immerse yourself in authentic Italian culture with these unique experiences.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {villageExperiences.map((experience) => (
                      <Link key={experience.id} to={`/experiences/${experience.id}`} className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative h-52">
                            <img 
                              src={experience.images[0]} 
                              alt={experience.name} 
                              className="w-full h-full object-cover"
                            />
                            {experience.featured && (
                              <div className="absolute top-3 right-3 bg-italia-terracotta text-white text-xs px-2 py-1 rounded-full">
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-center mb-2">
                              <span className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                              </span>
                              <span className="text-xs text-muted-foreground ml-2">
                                {experience.duration}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-1">{experience.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{experience.location}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <span className="text-sm text-italia-green font-semibold mr-1">
                                  {experience.rating}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ({experience.reviewCount} reviews)
                                </span>
                              </div>
                              <div className="font-semibold">
                                €{experience.price} <span className="text-xs text-muted-foreground">per person</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {villageExperiences.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No experiences available in this village yet.</p>
                    </div>
                  )}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Local Events */}
        {villageEvents.length > 0 && (
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">Local Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {villageEvents.map((event) => (
                <Link key={event.id} to={`/events/${event.id}`}>
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold">{event.name}</h3>
                        {event.isFree && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Free Event
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.startTime} - {event.endTime}
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-2">{event.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default VillageDetail;
