import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-md' : 'bg-transparent'}`}>
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/videos/your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <img 
                src="/toplogo.png" 
                alt="Toptal Logo" 
                className="h-28 w-auto" 
              />
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Destinations', 'Packages', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white hover:bg-opacity-20'}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button className={isScrolled ? 'bg-primary text-white' : 'text-primary'}>
              Book Now
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-white hover:bg-opacity-20'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Destinations', 'Packages', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



