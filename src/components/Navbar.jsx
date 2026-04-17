import { Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id='navbar'
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50'
    >

      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className={`transition-all duration-500 ${isTop ? 'w-40 sm:w-52' : 'w-32 sm:w-40'}`}
      />

      {/* Nav Links */}
      <div className={`
        text-gray-700 sm:text-sm
        ${!sidebarOpen ? 'max-md:w-0 overflow-hidden' : 'max-md:w-60 max-md:pl-10'}
        max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full
        max-md:flex-col max-md:bg-[#005dc6] max-md:text-white max-md:pt-20
        flex md:items-center gap-5 transition-all
      `}>

        {/* Close Icon */}
        <X
          className='w-5 absolute right-4 top-4 md:hidden cursor-pointer'
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#home" className='md:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#servies" className='md:hover:border-b'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className='md:hover:border-b'>About</a>
        <a onClick={() => setSidebarOpen(false)} href="#resources" className='md:hover:border-b'>Resources</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact" className='md:hover:border-b'>Contact</a>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-2 sm:gap-4'>

        {/* Menu Icon (ONLY Mobile) */}
        <Menu
          className='w-8 md:hidden cursor-pointer'
          onClick={() => setSidebarOpen(true)}
        />

        {/* Button (ONLY Desktop) */}
        <button className="hidden md:flex relative flex items-center gap-4 pl-10 pr-5 py-3 border-2 border-[#005dc6] rounded-full overflow-hidden group">
  
          {/* Expanding black circle */}
          <span className="absolute left-0 top-0 h-full w-full bg-[#005dc6] rounded-full transition-all duration-500 ease-[cubic-bezier(1,0,0.8,1)] group-hover:w-12"></span>

          {/* Arrow container (CENTERED in circle) */}
          <span className="pl-3 absolute left-0 top-0 h-full w-12 flex items-center justify-center z-10">
            
            {/* Arrow head */}
            <span className="relative w-3 h-3 border-t-3 border-r-3 border-white rotate-45 transition-all duration-500 group-hover:-translate-x-2">
              
              {/* Line (appears on hover) */}
              <span className="absolute w-4 h-0.5 bg-white -rotate-45 -left-1 top-1 opacity-100 transition-all duration-500 group-hover:opacity-0"></span>
            
            </span>
          </span>

          {/* Text */}
          <span className="pl-3 relative z-10 text-white font-semibold tracking-wide transition-all duration-500 group-hover:text-[#005dc6]">
            Let's Talk
          </span>
        </button>

      </div>
    </section>
  )
}

export default Navbar