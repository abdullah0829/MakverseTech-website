import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceCard from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import FAQs from './components/FAQs'
import AboutUs from './components/AboutUs'

const App = () => {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
  position.current.x = mouse.current.x;
  position.current.y = mouse.current.y;

  if (dotRef.current && outlineRef.current) {
    outlineRef.current.style.transform =
      `translate3d(${position.current.x - 12}px, ${position.current.y - 12}px, 0)`;

    dotRef.current.style.transform =
      `translate3d(${position.current.x - 4}px, ${position.current.y - 4}px, 0)`;
  }

  requestAnimationFrame(animate);
};

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Blogs />
      <FAQs />
      <Footer />


      {/* Custom Cursor Ring */}
<div
  ref={outlineRef}
  className="fixed top-0 left-0 h-6 w-6 rounded-full border border-[#005dc6] pointer-events-none z-[9999]"
></div>

{/* Custom Cursor Dot */}
<div
  ref={dotRef}
  className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#005dc6] pointer-events-none z-[9999]"
></div>

    </div>
  )
}

export default App
