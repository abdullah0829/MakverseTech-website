import React from 'react'
import { ArrowRight } from 'lucide-react'

import blogImg1 from '../assets/blog1.webp'
import blogImg2 from '../assets/blog2.webp'
import blogImg3 from '../assets/blog3.webp'

const blogsCard = [
  {
    time: "December, 2025",
    title: "Best Software Development Companies in New York",
    desc: "New York's tech ecosystem is growing fast, thanks to the million-dollar Empire AI investment that began in 2024.",
    image: blogImg1
  },
  {
    time: "November, 2025",
    title: "Guide to Medical Software Development",
    desc: "Medical software development creates secure, compliant healthcare solutions that improve patient care, automate workflows, and support clinical decisions.",
    image: blogImg2
  },
  {
    time: "November, 2025",
    title: "Top Software Development Companies in Texas",
    desc: "Explore the top software development companies in Texas, featuring innovation-driven leaders like TechMatter, Softeq, ScienceSoft, and more.",
    image: blogImg3
  }
]

const Blogs = () => {
  return (
    <section
      id='blogs'
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 mb-20'
    >

      {/* Heading */}
      <h1 className='text-2xl font-semibold bg-blue-300 rounded-full px-4 py-1'>
        Our Blogs
      </h1>

      {/* Cards Container */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>

        {blogsCard.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group'
          >

            {/* Image */}
            <div className='overflow-hidden'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
              />
            </div>

            {/* Content */}
            <div className='p-5 flex flex-col gap-3'>

              {/* Time */}
              <span className='text-sm text-gray-500'>
                {item.time}
              </span>

              {/* Title */}
              <h2 className='text-lg font-bold text-gray-700'>
                {item.title}
              </h2>

              {/* Description */}
              <p className='text-sm text-slate-600 leading-relaxed'>
                {item.desc}
              </p>

              {/* Button */}
              <button className='mt-3 flex items-center gap-2 text-[#005dc6] font-medium group-hover:gap-3 transition-all duration-300'>
                Read More
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
              </button>

            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Blogs