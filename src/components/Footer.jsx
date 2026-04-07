import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png'

const footerlinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "About",
        link: "https://www.MakverseTech.com/about/",
      },
      {
        name: "Contact",
        link: "https://www.MakverseTech.com/contact/",
      },
      {
        name: "Blogs",
        link: "https://www.MakverseTech.com/blogs/",
      },
      {
        name: "Services",
        link: "https://www.MakverseTech.com/services/",
      },
      {
        name: "Privacy Policy",
        link: "https://www.MakverseTech.com/privacy-policy/",
      }
    ],
  },
  {
    title: "Our Services",
    links: [
      {
        name: "Managed IT Services",
        link: "https://www.MakverseTech.com/managed-it-services/",
      },
      {
        name: "Revenue Cycle Management",
        link: "https://www.MakverseTech.com/revenue-cycle-management/",
      },
      {
        name: "Enterprise IT",
        link: "https://www.MakverseTech.com/enterprise-it/",
      },
      {
        name: "Digital Marketing",
        link: "https://www.MakverseTech.com/digital-marketing/",
      },
      {
        name: "Digital Product Development",
        link: "https://www.MakverseTech.com/digital-product-development/",
      },
      {
        name: "Healthcare Staff Augmentation",
        link: "https://www.MakverseTech.com/healthcare-staff-augmentation/",
      }
    ],
  },
];

const Footer = () => {
  return (
    <section id='footer' className={`${StyleSheet.flexCenter} ${StyleSheet.paddingY} px-15 sm:px-6 md:px-10 lg:px-40 flex-col`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-6 sm:gap-4 mb-8 w-full">
        <div className='flex-1 flex flex-col items-start text-left sm:items-center sm:text-center md:items-start md:text-left'>
          <img src={logo} alt="makverse" className='w-[266px] h-[120px] object-contain' />
          <p className={`${StyleSheet.paragraph} mt-4 max-w-[310px]`}>IT Solutions and Managed Services Provider specializing in developing custom solutions.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-center sm:justify-center md:justify-end gap-4 sm:gap-6 md:gap-20 lg:gap-20 xl:gap-40 mt-6 md:mt-0'>
          {footerlinks.map((footerlink) => (
            <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[120px] sm:min-w-[100px] gap-3'>
              <h4>
                {footerlink.title}
              </h4>
              <ul>
                {footerlink.links.map((link, index) => (
                  <li key={link.name}
                    className={`font-normal text-[16px] leading-[24px] hover:text-sky-300 cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 mb-5 border-t-[1px] border-t-gray-400'>

        <p className='font-normal text-center text-[18px] leading-[27px]'>
          © MakverseTech 2026 | All Rights Reserved
        </p>

        <div className='flex flex-row gap-5 md:mt-0 mt-6'>
          <FaInstagram className='w-8 h-8 object-contain cursor-pointer' />
          <FaFacebook className='w-8 h-8 object-contain cursor-pointer' />
          <FaLinkedin className='w-8 h-8 object-contain cursor-pointer' />
        </div>

      </div>
    </section>
  )
}

export default Footer