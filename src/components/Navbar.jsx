import { ArrowRight, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <section id='navbar' className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50'>


      <img
        src={logo} 
        alt="logo"
        className='w-32 sm:w40'
      />
      <div className={`text-gray-700 sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-sky-500 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <X className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSidebarOpen(false)} />

        <a onClick={() => setSidebarOpen(false)} href="#home" className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#servies" className='sm:hover:border-b'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#about" className='sm:hover:border-b'>About</a>
        <a onClick={() => setSidebarOpen(false)} href="#resources" className='sm:hover:border-b'>Resources</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact" className='sm:hover:border-b'>Contact</a>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <Menu className='w-8 sm:hidden'
          onClick={() => setSidebarOpen(true)} />
        <a href="#lets-talk" className='text-md max-sm:hidden flex items-center gap-2 bg-[#005dc6] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
          Let's Talk
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}

export default Navbar
