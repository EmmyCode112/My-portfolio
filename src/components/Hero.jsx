import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import myPic from "/myProfile.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        "Hi I'm EmmyCode",
        "a passionate frontend dev",
        "I build interactive and responsive web applications",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-md:px-6 py-20 text-white relative overflow-hidden"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2  text-center md:text-left">
        <motion.p
          className="bg-purple-900 px-4 py-1 inline-block rounded-[5px] text-sm mb-4 border border-white/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to my Portfolio
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-purple-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span ref={typedElement}></span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-sm sm:text-base mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          I specialize in crafting beautiful and functional web interfaces,
          blending aesthetics with performance. Let’s bring your ideas to life.
        </motion.p>

        <motion.button
          onClick={scrollToContact}
          className="bg-transparent border border-white/20 hover:bg-purple-800 px-6 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Let’s Connect <FaArrowCircleRight size={20} />
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full border-4 border-purple-700 p-2 overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <img
          src={myPic}
          alt="emmyCode"
          className="w-full h-full object-cover rounded-full hover:scale-[1.06] transition-transform duration-1000"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
