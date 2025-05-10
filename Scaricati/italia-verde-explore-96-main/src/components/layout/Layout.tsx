import React from 'react';
import Header from './Header';
import Footer from '../Footer';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export default function Layout({ children, transparentHeader = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
