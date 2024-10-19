import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Star, X } from 'lucide-react';

const destinations = [
  { name: 'Thailand', image: '/Thailand.jpg', description: 'City of Love', rating: 4.8, popular: true, type: 'City' },
  { name: 'Bali', image: '/bali.jpg', description: 'Tropical Paradise', rating: 4.6, popular: true, type: 'Beach' },
  { name: 'New York', image: '/newyork.jpg', description: 'The Big Apple', rating: 4.7, popular: false, type: 'City' },
  { name: 'Tokyo', image: '/tokyo.jpg', description: 'Blend of Tradition and Modernity', rating: 4.9, popular: true, type: 'City' },
  { name: 'Maldives', image: '/mali.jpg', description: 'Island Paradise', rating: 4.9, popular: true, type: 'Beach' },
  { name: 'kashmir', image: '/kashmir.jpg', description: 'Winter Wonderland', rating: 4.8, popular: false, type: 'Mountain' },
  { name: 'Taj Mahal', image: '/Taj Mahal.jpg', description: 'Vibrant Culture', rating: 4.5, popular: true, type: 'City' },
  { name: 'Goa', image: '/goa.jpg', description: 'Picturesque Island', rating: 4.7, popular: true, type: 'Beach' },
];

const DestinationCard = ({ dest, onClick }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="h-60 w-full">
        <img
          srcSet={`${dest.image}?w=600 600w, ${dest.image}?w=1200 1200w`}
          sizes="(max-width: 600px) 600px, 1200px"
          src={dest.image}
          alt={dest.name}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{dest.name}</h3>
        <p className="text-gray-600 mb-4">{dest.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">{dest.name}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{dest.rating}</span>
          </div>
        </div>
      </div>
      {dest.popular && (
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          Popular
        </span>
      )}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={onClick}
          className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300 flex items-center"
        >
          Explore <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
  

const DestinationPopup = ({ dest, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
      <div className="relative h-64">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
        <h2 className="text-3xl font-bold mb-4">{dest.name}</h2>
        <p className="text-gray-600 mb-4">{dest.description}</p>
        <div className="flex items-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-lg font-semibold">{dest.rating}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">About {dest.name}</h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3 className="text-xl font-semibold mb-2">Top Attractions</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Famous Landmark 1</li>
          <li>Popular Museum</li>
          <li>Beautiful Park</li>
          <li>Historic Site</li>
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 flex items-center">
          Book Now <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function FeaturedDestinations() {
  const [selectedDest, setSelectedDest] = useState(null);
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.type === filter);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Destinations</h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our handpicked selection of breathtaking destinations. Your next adventure awaits!
          </p>
        </div>
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex bg-white rounded-full shadow-md p-1">
            {['All', 'City', 'Beach', 'Mountain'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  filter === type ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          ref={containerRef}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          <AnimatePresence>
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.name}
                dest={dest}
                onClick={() => setSelectedDest(dest)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 flex items-center">
            View All Destinations <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {selectedDest && (
          <DestinationPopup
            dest={selectedDest}
            onClose={() => setSelectedDest(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
