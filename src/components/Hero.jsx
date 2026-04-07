import { Sparkles } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700'>
      <div className="absolute top-48 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-violet-300 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-violet-300 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full transition-all animate-in slide-in-from-bottom duration-700'>
        <Sparkles className="w-4 h-4" />
        <span className="text-xs sm:text-sm ">
          Welcome to MakverseTech!
        </span>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl transition-all animate-in slide-in-from-bottom duration-700 delay-100'>
        Powering Healthcare & <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent' >Digital</span> Innovation</h1>
    
      <p className='text-sm sm:text-lg font-medium text-gray-500 max-w-4/5 sm:max-w-lg pb-3 transition-all animate-in slide-in-from-bottom duration-700 delay-200'>From building scalable digital products to managing mission-critical IT infrastructure, we deliver solutions that drive performance and long-term success.</p>
      <div className='relative'>
        <img src="./src/assets/bg-img.jpeg" alt="" className=' w-4xl max-w-6xl rounded-4xl transition-all animate-in slide-in-from-bottomrmdir /s /q .git
         duration-700 delay-100'/>
      </div>
    </section>
  )
}

export default Hero
