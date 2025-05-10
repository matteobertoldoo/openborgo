import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, MapPin, Users, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { events, villages } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  
  if (!event) {
    return <NotFound />;
  }

  const village = villages.find(v => v.id === event.villageId);
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
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${event.images[0]})` }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <Link to={`/villages/${event.villageId}`} className="text-white mb-4 flex items-center hover:underline dark:text-white">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to {village?.name}
            </Link>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-2 dark:text-white">
              {event.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl dark:text-white/90">
              {event.description}
            </p>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">About the Event</h2>
                  <p className="text-muted-foreground mb-6 dark:text-muted-foreground">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg dark:text-white">Date & Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-italia-green" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Clock className="h-5 w-5 text-italia-green" />
                          <span>{event.startTime} - {event.endTime}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg dark:text-white">Location</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-italia-green" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Users className="h-5 w-5 text-italia-green" />
                          <span>{event.capacity} spots available</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {event.organizer && (
                    <div className="bg-italia-beige/30 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 flex items-center dark:text-white">
                        <Info className="h-5 w-5 mr-2 text-italia-green" />
                        Organized by
                      </h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        {event.organizer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Additional Images */}
                {event.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {event.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${event.name} - Image ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Event Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground dark:text-muted-foreground">Price</span>
                        <span className="font-semibold dark:text-white">
                          {event.isFree ? 'Free' : `€${event.price}`}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground dark:text-muted-foreground">Capacity</span>
                        <span className="font-semibold dark:text-white">{event.capacity} spots</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground dark:text-muted-foreground">Location</span>
                        <span className="font-semibold dark:text-white">{event.location}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6">
                      {event.isFree ? 'Register for Free' : 'Book Now'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail; 