import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/logo.png'

const footerlinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About", link: "https://www.MakverseGlobal.com/about/" },
      { name: "Contact", link: "https://www.MakverseGlobal.com/contact/" },
      { name: "Blogs", link: "https://www.MakverseGlobal.com/blogs/" },
      { name: "Services", link: "https://www.MakverseGlobal.com/services/" },
      { name: "Privacy Policy", link: "https://www.MakverseGlobal.com/privacy-policy/" }
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Managed IT Services", link: "https://www.MakverseGlobal.com/managed-it-services/" },
      { name: "Revenue Cycle Management", link: "https://www.MakverseGlobal.com/revenue-cycle-management/" },
      { name: "Enterprise IT Solution", link: "https://www.MakverseGlobal.com/enterprise-it/" },
      { name: "Digital Marketing", link: "https://www.MakverseGlobal.com/digital-marketing/" },
      { name: "Digital Product Development", link: "https://www.MakverseGlobal.com/digital-product-development/" },
      { name: "Healthcare Staff Augmentation", link: "https://www.MakverseGlobal.com/healthcare-staff-augmentation/" }
    ],
  },
]

const Footer = () => {
  return (
    <section
      id="footer"
      className="px-6 sm:px-10 lg:px-40 py-10 flex flex-col"
    >

      {/* TOP SECTION */}
      <div className="
        flex flex-col
        min-[650px]:flex-row
        justify-between
        gap-10
        w-full
      ">

        {/* LOGO + TEXT */}
        <div className="
          flex flex-col
          items-center text-center
          min-[650px]:items-start
          min-[650px]:text-left
          flex-1
        ">
          <img
            src={logo}
            alt="makverse"
            className="w-[200px] h-[90px] object-contain"
          />

          <p className="
            text-gray-700 mt-4
            max-w-[260px]
            leading-relaxed
          ">
            IT Solutions and Managed Services Provider specializing in developing custom solutions.
          </p>
        </div>

        {/* LINKS */}
        <div className="
          flex-[2] w-full

          grid grid-cols-2 gap-6

          md:gap-12
          lg:gap-18

          min-[654px]:flex
          min-[654px]:flex-wrap
          min-[654px]:justify-end
        ">
          {footerlinks.map((footerlink, index) => (
            <div
              key={index}
              className="
                flex flex-col
                text-left
                min-w-[140px]
              "
            >
              <h4 className="font-bold mb-3">
                {footerlink.title}
              </h4>

              <ul className="flex flex-col gap-2">
                {footerlink.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      className="
                        block
                        text-gray-700
                        hover:text-[#005dc6]
                        transition-all duration-300
                        text-[14px] sm:text-[15px]
                        leading-snug
                        break-words
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="
        w-full
        flex flex-col md:flex-row
        justify-between
        items-center
        border-t border-gray-300
        pt-6 mt-10
      ">

        <p className="text-gray-700 text-center">
          © MakverseGlobal 2026 | All Rights Reserved
        </p>

        <div className="flex gap-5 mt-5 md:mt-0">
          <FaInstagram className="text-gray-700 w-6 h-6 cursor-pointer hover:text-[#005dc6] transition" />
          <FaFacebook className="text-gray-700 w-6 h-6 cursor-pointer hover:text-[#005dc6] transition" />
          <FaLinkedin className="text-gray-700 w-6 h-6 cursor-pointer hover:text-[#005dc6] transition" />
        </div>

      </div>
    </section>
  )
}

export default Footer