import { useEffect, useRef, useState } from 'react';
import { BRAND, steps, dishes, plans, reasons } from './data.js';
import './App.css';
import { Logo } from './components/Logo.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { Menu } from './components/Menu.jsx';
import { Plans } from './components/Plans.jsx';
import { Reasons } from './components/Reasons.jsx';
import { CallToAction } from './components/CalltoAction.jsx';
import { Footer } from './components/Footer.jsx';



export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (dish) => setCart((c) => [...c, dish]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Menu cart={cart} onAdd={addToCart} />
        <Plans />
        <Reasons />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}