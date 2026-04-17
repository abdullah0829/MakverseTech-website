import { ArrowRight, Menu, X } from 'lucide-react'
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
      <div className="flex items-center w-40 sm:w-52">
        <img
          src={logo}
          alt="logo"
          className={`transition-all duration-500 ${isTop ? 'w-40 sm:w-52' : 'w-32 sm:w-40'}`}
        />
      </div>

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
        <button className="relative text-white flex items-center w-40 gap-4 px-6 py-3 bg-[#005dc6] rounded-full overflow-hidden group">
          <ArrowRight className='w-5 h-5 group-hover:translate-x-22 transition-transform duration-300' />
          <span className="relative z-10 text-white font-semibold group-hover:-translate-x-6 transition-transform duration-300">
            Let's Talk
          </span>
        </button>

      </div>
    </section>
  )
}

export default Navbar