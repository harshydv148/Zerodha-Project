import React, { useEffect } from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../footer';

function HomePage() {

  useEffect(() => {
  const wakeServers = async () => {
    try {
      await Promise.all([
        fetch(process.env.REACT_APP_BACKEND_URL),   // only wake
        fetch(process.env.REACT_APP_DASHBOARD_URL)
      ]);

      console.log("Servers awakened 🚀");
    } catch (err) {
      console.log("wake failed", err);
    }
  };

  wakeServers();
}, []);

  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
