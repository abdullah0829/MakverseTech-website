import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    {
      name: "Services",
      submenu: [
        "Managed IT Services",
        "Revenue Cycle Management",
        "Enterprise IT",
        "Digital Marketing",
        "Digital Product Development",
        "Healthcare Staff Augmentation",
      ],
    },
    { name: "About", href: "#about" },
    {
      name: "Resources",
      submenu: ["Blogs", "News", "Press release"],
    },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="navbar"
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50"
    >
      {/* Logo */}
      <div className="flex items-center w-40 sm:w-52">
        <img
          src={logo}
          alt="logo"
          className={`transition-all duration-500 ${isTop ? "w-40 sm:w-52" : "w-32 sm:w-40"
            }`}
        />
      </div>

      {/* Nav Links */}
      <div
        className={`
    text-gray-700 sm:text-sm
    ${!sidebarOpen
            ? "max-md:w-0 overflow-hidden"
            : "max-md:w-60 max-md:pl-10"
          }
    max-md:fixed top-0 bottom-0 right-0 max-md:min-h-screen max-md:h-full
    max-md:flex-col max-md:bg-[#005dc6] max-md:text-white max-md:pt-20
    flex md:items-center gap-5 transition-all

    md:overflow-visible
  `}
      >
        {/* Close Icon */}
        <X
          className="w-5 absolute right-4 top-4 md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {navLinks.map((link, index) => {
          const isOpen = openDropdown === index;

          return (
            <div key={index} className="relative group w-full md:w-auto">
              {/* Main Link */}
              <div
                className="flex items-center justify-between md:justify-start gap-1 cursor-pointer md:hover:border-b"
                onClick={() =>
                  link.submenu
                    ? setOpenDropdown(isOpen ? null : index)
                    : setSidebarOpen(false)
                }
              >
                {link.href ? (
                  <a href={link.href}>{link.name}</a>
                ) : (
                  <span>{link.name}</span>
                )}

                {link.submenu && (
                  <ChevronDown
                    className={`w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      } md:group-hover:rotate-180`}
                  />
                )}
              </div>

              {/* Dropdown */}
              {link.submenu && (
                <div
                  className={`md:absolute md:left-0 md:top-full md:pt-2 md:w-64 bg-white text-gray-700 rounded-xl shadow-lg z-50 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible
  `}
                >
                  {link.submenu.map((item, i) => (
                    <p
                      key={i}
                      className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Menu Icon */}
        <Menu
          className="w-8 md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        {/* Button */}
        <button className="hidden lg:flex relative text-white items-center w-40 gap-4 px-6 py-3 bg-[#005dc6] rounded-full overflow-hidden group">
          <ArrowRight className="w-5 h-5 group-hover:translate-x-22 transition-transform duration-300" />
          <span className="relative z-10 font-semibold group-hover:-translate-x-6 transition-transform duration-300">
            Let's Talk
          </span>
        </button>
      </div>
    </section>
  );
};

export default Navbar;