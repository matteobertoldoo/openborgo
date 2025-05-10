import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout; 