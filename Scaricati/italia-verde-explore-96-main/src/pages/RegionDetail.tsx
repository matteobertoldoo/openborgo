import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, UtensilsCrossed, Tent, Bike, Star, ChevronLeft, Landmark, Users, Mountain, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { regions, properties, experiences, villages, events } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import Map from '@/components/Map';

const RegionDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const region = regions.find(r => r.id === id);

  const regionProperties = properties.filter(p => p.regionId === id);
  const regionExperiences = experiences.filter(e => e.regionId === id);
  const regionVillages = villages.filter(v => v.regionId === id);
  const regionEvents = events.filter(e => e.regionId === id);

  if (!region) {
    return <NotFound />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${region.image})` }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <Link to="/regions" className="text-white mb-4 flex items-center hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to all regions
            </Link>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-2">
              {region.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {region.description}
            </p>
          </div>
        </section>

        <section className="sticky top-16 z-30 bg-background border-b shadow-sm">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center">
                <TabsList className="bg-transparent h-16">
                  <TabsTrigger value="map" className="text-sm md:text-base">
                    <MapPin className="h-5 w-5" />
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex-1 overflow-x-auto">
                  <TabsList className="bg-transparent h-16 min-w-max">
                    <TabsTrigger value="overview" className="text-sm md:text-base whitespace-nowrap">Overview</TabsTrigger>
                    <TabsTrigger value="villages" className="text-sm md:text-base whitespace-nowrap">Villages</TabsTrigger>
                    <TabsTrigger value="stays" className="text-sm md:text-base whitespace-nowrap">Stays</TabsTrigger>
                    <TabsTrigger value="experiences" className="text-sm md:text-base whitespace-nowrap">Experiences</TabsTrigger>
                    <TabsTrigger value="events" className="text-sm md:text-base whitespace-nowrap">Events</TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <div className="container mx-auto px-4 py-8">
                <TabsContent value="overview" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground dark:text-white">About {region.name}</h2>
                      <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                        {region.description} Immerse yourself in the authentic rural experience of this beautiful region,
                        where tradition meets natural beauty. Explore charming villages, taste local cuisine, and discover
                        the hidden gems that make this area special.
                      </p>

                      <div className="mt-8">
                        <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground dark:text-white">Featured in {region.name}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {regionVillages.filter(v => v.featured).slice(0, 1).map(village => (
                            <Link key={village.id} to="#villages" onClick={() => setActiveTab('villages')} className="group">
                              <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative h-40">
                                  <img
                                    src={village.image}
                                    alt={village.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                    Featured Village
                                  </div>
                                </div>
                                <div className="p-4">
                                  <h4 className="text-lg font-bold mb-1 text-foreground dark:text-white">{village.name}</h4>
                                  <p className="text-sm text-muted-foreground dark:text-muted-foreground line-clamp-2">{village.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}

                          {regionProperties.filter(p => p.featured).slice(0, 1).map(property => (
                            <Link key={property.id} to={`/stays/${property.id}`} className="group">
                              <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative h-40">
                                  <img
                                    src={property.images[0]}
                                    alt={property.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                    Featured Stay
                                  </div>
                                </div>
                                <div className="p-4">
                                  <h4 className="text-lg font-bold mb-1 text-foreground dark:text-white">{property.name}</h4>
                                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{property.location}</p>
                                  <div className="font-semibold text-foreground dark:text-white">
                                    €{property.price} <span className="text-xs text-muted-foreground dark:text-muted-foreground">/ night</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}

                          {regionExperiences.filter(e => e.featured).slice(0, 1).map(experience => (
                            <Link key={experience.id} to={`/experiences/${experience.id}`} className="group">
                              <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative h-40">
                                  <img
                                    src={experience.images[0]}
                                    alt={experience.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                    Featured Experience
                                  </div>
                                </div>
                                <div className="p-4">
                                  <h4 className="text-lg font-bold mb-1 text-foreground dark:text-white">{experience.name}</h4>
                                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{experience.location}</p>
                                  <div className="font-semibold text-foreground dark:text-white">
                                    €{experience.price} <span className="text-xs text-muted-foreground dark:text-muted-foreground">per person</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-italia-mint/20 dark:bg-italia-mint/10 p-6 rounded-lg shadow-md h-fit">
                      <h3 className="text-xl font-bold mb-4 text-foreground dark:text-white">Explore {region.name}</h3>

                      <div className="space-y-4">
                        <Link to="#villages" onClick={() => setActiveTab('villages')} className="flex items-center p-3 bg-white dark:bg-background rounded-md hover:bg-italia-mint/10 transition-colors">
                          <Landmark className="h-5 w-5 text-italia-sage mr-3" />
                          <span className="text-foreground dark:text-white">{regionVillages.length} Villages to explore</span>
                        </Link>

                        <Link to="#stays" onClick={() => setActiveTab('stays')} className="flex items-center p-3 bg-white dark:bg-background rounded-md hover:bg-italia-mint/10 transition-colors">
                          <Home className="h-5 w-5 text-italia-sage mr-3" />
                          <span className="text-foreground dark:text-white">{regionProperties.length} Places to stay</span>
                        </Link>

                        <Link to="#experiences" onClick={() => setActiveTab('experiences')} className="flex items-center p-3 bg-white dark:bg-background rounded-md hover:bg-italia-mint/10 transition-colors">
                          <UtensilsCrossed className="h-5 w-5 text-italia-sage mr-3" />
                          <span className="text-foreground dark:text-white">{regionExperiences.filter(e => e.type === 'food').length} Food experiences</span>
                        </Link>

                        <Link to="#experiences" onClick={() => setActiveTab('experiences')} className="flex items-center p-3 bg-white dark:bg-background rounded-md hover:bg-italia-mint/10 transition-colors">
                          <Tent className="h-5 w-5 text-italia-sage mr-3" />
                          <span className="text-foreground dark:text-white">{regionExperiences.filter(e => e.type === 'culture').length} Cultural activities</span>
                        </Link>

                        <Link to="#experiences" onClick={() => setActiveTab('experiences')} className="flex items-center p-3 bg-white dark:bg-background rounded-md hover:bg-italia-mint/10 transition-colors">
                          <Bike className="h-5 w-5 text-italia-sage mr-3" />
                          <span className="text-foreground dark:text-white">{regionExperiences.filter(e => e.type === 'outdoor').length} Outdoor adventures</span>
                        </Link>
                      </div>

                      <div className="mt-6">
                        <Button className="w-full bg-italia-sage hover:bg-italia-sage/90 text-white dark:bg-italia-sage dark:hover:bg-italia-sage/90 dark:text-white" onClick={() => setActiveTab('map')}>
                          View on Map
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="villages" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground dark:text-white">Villages in {region.name}</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground">
                      Discover the authentic "borghi" of {region.name}, historic villages with unique charm and character.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionVillages.map(village => (
                      <div key={village.id} className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-52">
                          <img
                            src={village.image}
                            alt={village.name}
                            className="w-full h-full object-cover"
                          />
                          {village.featured && (
                            <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">{village.name}</h3>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <div className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              <span className="text-foreground dark:text-white">{village.population.toLocaleString()} residents</span>
                            </div>
                            <div className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full flex items-center">
                              <Mountain className="h-3 w-3 mr-1" />
                              <span className="text-foreground dark:text-white">{village.elevation}m elevation</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground dark:text-muted-foreground mb-4 line-clamp-3">{village.description}</p>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2 text-sm text-foreground dark:text-white">Highlights:</h4>
                            <div className="flex flex-wrap gap-1">
                              {village.highlights.map((highlight, index) => (
                                <span key={index} className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-3">
                            <Link to={`/villages/${village.id}`}>
                              <Button variant="outline" className="w-full text-foreground dark:text-white border-foreground dark:border-white hover:bg-italia-mint/10">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {regionVillages.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">No villages available</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        There are currently no villages listed for this region.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="stays" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground dark:text-white">Stays in {region.name}</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground">
                      Discover unique accommodations, from traditional villas to charming farmhouses.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionProperties.map((property) => (
                      <Link key={property.id} to={`/stays/${property.id}`} className="group">
                        <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative h-52">
                            <img
                              src={property.images[0]}
                              alt={property.name}
                              className="w-full h-full object-cover"
                            />
                            {property.featured && (
                              <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-bold mb-1 text-foreground dark:text-white">{property.name}</h3>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{property.location}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
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

                  {regionProperties.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">No stays available</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        There are currently no accommodations listed for this region.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="experiences" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground dark:text-white">Experiences in {region.name}</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground">
                      Discover authentic local activities and unforgettable experiences.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionExperiences.map((experience) => (
                      <Link key={experience.id} to={`/experiences/${experience.id}`} className="group">
                        <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative h-52">
                            <img
                              src={experience.images[0]}
                              alt={experience.name}
                              className="w-full h-full object-cover"
                            />
                            {experience.featured && (
                              <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <div className="flex items-center mb-2">
                              <span className="bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                              </span>
                              <span className="text-xs text-muted-foreground dark:text-muted-foreground ml-2">
                                {experience.duration}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-foreground dark:text-white">{experience.name}</h3>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{experience.location}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <span className="text-sm text-italia-sage font-semibold mr-1">
                                  {experience.rating}
                                </span>
                                <span className="text-xs text-muted-foreground dark:text-muted-foreground">
                                  ({experience.reviewCount} reviews)
                                </span>
                              </div>
                              <div className="font-semibold text-foreground dark:text-white">
                                €{experience.price} <span className="text-xs text-muted-foreground dark:text-muted-foreground">per person</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {regionExperiences.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">No experiences available</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        There are currently no experiences listed for this region.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="events" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground dark:text-white">Events in {region.name}</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground">
                      Discover upcoming events and festivals in the region.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regionEvents.map((event) => (
                      <Link key={event.id} to={`/events/${event.id}`} className="group">
                        <div className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative h-52">
                            <img
                              src={event.images[0]}
                              alt={event.name}
                              className="w-full h-full object-cover"
                            />
                            {event.isFree && (
                              <div className="absolute top-3 right-3 bg-italia-mint/20 text-italia-sage text-xs px-2 py-1 rounded-full">
                                Free Event
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-bold mb-1 text-foreground dark:text-white">{event.name}</h3>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{event.location}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(event.date)}</span>
                              <Clock className="h-4 w-4 ml-2" />
                              <span>{event.startTime} - {event.endTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {regionEvents.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">No events available</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        There are currently no events listed for this region.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="map" className="mt-0">
                  <div className="mb-8">
                    <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground dark:text-white">{region.name} Map</h2>
                    <p className="text-muted-foreground dark:text-muted-foreground">
                      Explore villages, accommodations and experiences throughout the region.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-background rounded-lg shadow-lg p-4">
                    <Map 
                      center={[region.coordinates.lng, region.coordinates.lat]}
                      markers={[
                        ...regionVillages.map(village => ({
                          id: village.id,
                          coordinates: [village.coordinates.lng, village.coordinates.lat] as [number, number],
                          color: '#4CAF50' // Green for villages
                        })),
                        ...regionProperties.map(property => ({
                          id: property.id,
                          coordinates: [property.coordinates.lng, property.coordinates.lat] as [number, number],
                          color: '#FF9800' // Orange for properties
                        })),
                        ...regionExperiences.map(experience => ({
                          id: experience.id,
                          coordinates: [experience.coordinates.lng, experience.coordinates.lat] as [number, number],
                          color: '#2196F3' // Blue for experiences
                        }))
                      ]}
                    />
                    
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="flex items-center">
                        <div className="map-marker w-5 h-5 mr-2" style={{ backgroundColor: '#4CAF50' }}>
                          <Landmark className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground dark:text-white">Villages</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="map-marker w-5 h-5 mr-2" style={{ backgroundColor: '#FF9800' }}>
                          <Home className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground dark:text-white">Stays</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="map-marker w-5 h-5 mr-2" style={{ backgroundColor: '#2196F3' }}>
                          <UtensilsCrossed className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground dark:text-white">Food</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="map-marker w-5 h-5 mr-2" style={{ backgroundColor: '#2196F3' }}>
                          <Tent className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground dark:text-white">Culture</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="map-marker w-5 h-5 mr-2" style={{ backgroundColor: '#2196F3' }}>
                          <Bike className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-foreground dark:text-white">Outdoor</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RegionDetail;
