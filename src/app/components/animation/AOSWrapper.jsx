'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,  // Adjust animation duration
      once: true,     // Only animate once per element
    });
  }, []);

  return null;
};

export default AOSWrapper;
