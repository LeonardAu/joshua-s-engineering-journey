import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import textureCream from '@/assets/texture-cream.png';

interface PageLayoutProps {
  children: ReactNode;
  showNavOnScroll?: boolean;
}

const PageLayout = ({ children, showNavOnScroll = false }: PageLayoutProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${textureCream})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar showOnScroll={showNavOnScroll} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
