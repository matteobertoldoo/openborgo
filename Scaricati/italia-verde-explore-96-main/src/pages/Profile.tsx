import { useState } from 'react';
import { User, Star, Bed, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <User className="h-16 w-16 text-gray-400" />
          <h2 className="text-2xl font-bold">Welcome to Openborgo</h2>
          <p className="text-center text-gray-600">
            Log in to access your profile, manage bookings, and save your favorite experiences.
          </p>
          <Button onClick={() => setIsLoggedIn(true)}>Log In</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="space-y-6">
        {/* User Profile Section */}
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-italia-sage flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
        </Card>

        {/* Experiences Section */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Star className="h-5 w-5 mr-2 text-italia-green" />
            My Experiences
          </h3>
          <div className="grid gap-4">
            <Card className="p-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Star className="h-6 w-6 text-italia-green" />
                </div>
                <div>
                  <h4 className="font-medium">Traditional Pasta Making</h4>
                  <p className="text-sm text-gray-600">Tuscany, Italy</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Star className="h-6 w-6 text-italia-green" />
                </div>
                <div>
                  <h4 className="font-medium">Wine Tasting Tour</h4>
                  <p className="text-sm text-gray-600">Piedmont, Italy</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Stays Section */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bed className="h-5 w-5 mr-2 text-italia-green" />
            My Stays
          </h3>
          <div className="grid gap-4">
            <Card className="p-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Bed className="h-6 w-6 text-italia-green" />
                </div>
                <div>
                  <h4 className="font-medium">Villa Toscana</h4>
                  <p className="text-sm text-gray-600">Tuscany, Italy</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Saved Locations Section */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-italia-green" />
            Saved Locations
          </h3>
          <div className="grid gap-4">
            <Card className="p-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-italia-green" />
                </div>
                <div>
                  <h4 className="font-medium">Cinque Terre</h4>
                  <p className="text-sm text-gray-600">Liguria, Italy</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile; 