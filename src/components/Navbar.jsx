import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Skills", "Resume", "Projects", "Contact"];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to track visible section
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-[120px] py-4 transition-all duration-300 ${
        scrolled
          ? "lg:bg-white/10 lg:backdrop-blur-md lg:border-b lg:border-white/10 bg-[#0f0f10]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          EmmyCode
        </a>

        {/* Hamburger */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
          </svg>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`relative text-white font-medium transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-500"
                    : "hover:text-purple-500"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] bg-black backdrop-blur-lg z-40 border-l border-white/10 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close icon */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col space-y-6 mt-12">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`block text-white text-lg font-semibold px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.toLowerCase()
                    ? "bg-purple-600/20 text-purple-400"
                    : "hover:bg-white/10"
                }`}
                onClick={handleNavLinkClick}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
