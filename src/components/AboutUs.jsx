import { ArrowRight } from 'lucide-react'
import img from '../assets/about.jpg'
import bg from '../assets/bg1.png'

const AboutUs = () => {
  return (
    <section id='aboutus' className='py-20 relative overflow-hidden'>

      {/* Background */}
      <img
        src={bg}
        alt="background"
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Container */}
      <div className='flex flex-col lg:flex-row items-center gap-12 md:mx-16 mx-5 relative z-10'>

        {/* IMAGE */}
        <div className='w-full lg:flex-1 flex justify-center items-center'>

          <div className='w-full sm:w-full md:w-full lg:max-w-[550px]'>
            <img
              src={img}
              alt="About Us"
              className='w-full rounded-2xl object-cover'
            />
          </div>

        </div>

        {/* CONTENT */}
        <div className='w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-4 md:px-6'>

          <h1 className="text-sm sm:text-lg font-semibold text-gray-700 bg-blue-300 rounded-full py-1 px-6 inline-block mb-4">
            About our Company
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-6">
            About
            <span className="bg-gradient-to-r from-[#003f97] to-[#11c8fb] bg-clip-text text-transparent">
              {' '}Us
            </span>
          </h1>

          <p className='text-sm sm:text-base md:text-lg text-gray-700 mb-8 max-w-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo soluta eligendi, laboriosam commodi explicabo velit fugit odit rem error eius nobis veritatis perspiciatis libero dolorum eos id a ab excepturi.
          </p>

          <button className="relative text-white flex items-center w-40 gap-2 px-4 py-3 bg-[#005dc6] rounded-full overflow-hidden group">
          <ArrowRight className='w-5 h-5 group-hover:translate-x-25 transition-transform duration-300' />
          <span className="relative z-10 text-white font-semibold group-hover:-translate-x-6 transition-transform duration-300">
            Learn More
          </span>
        </button>

        </div>

      </div>
    </section>
  )
}

export default AboutUs