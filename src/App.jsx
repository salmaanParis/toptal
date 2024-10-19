import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import SearchComponent from '@/components/SearchComponent';
import './index.css';
import ExtraServices from './components/ExtraServices';
import AboutUs from './components/Aboutus';
import BackToTop from './components/BackToTop';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <FeaturedDestinations />
    <Services />
    
    <ExtraServices/>
    <AboutUs/>
    <Testimonials />
    <CallToAction />
    <Footer />
    <WhatsAppChat />
    <BackToTop/>
  </div>
);

export default App;

