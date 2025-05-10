import React from 'react';
import { Home, Search, Briefcase, CalendarCheck, User } from 'lucide-react';

const navItems = [
  {
    label: 'Stays',
    icon: Home,
    href: '/',
  },
  {
    label: 'Search',
    icon: Search,
    href: '/search',
  },
  {
    label: 'Packages',
    icon: Briefcase,
    href: '/packages',
  },
  {
    label: 'Trips',
    icon: CalendarCheck,
    href: '/trips',
  },
  {
    label: 'Account',
    icon: User,
    href: '/account',
  },
];

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white  border-gray-200 sm:hidden safe-area-bottom">
      <div className="flex items-center justify-between px-2 h-[60px]">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => { }} // Add navigation logic here
            className="flex flex-col items-center justify-center flex-1 h-full"
          >
            <item.icon
              className="w-6 h-6 mb-1 text-gray-600"
              strokeWidth={1.5}
            />
            <span className="text-[10px] text-gray-600">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}; 