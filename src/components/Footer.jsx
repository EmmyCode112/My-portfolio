import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-gray-200 md:border-t-[2px] md:border-t-white/20 py-6 px-4 md:mx-[120px] flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <a href="/" className="cursor-pointer text-xl font-bold text-white">
        {/* Replace with actual logo if needed */}
        EmmyCode
      </a>

      {/* Social Media Icons */}
      <div className="flex gap-6 text-xl">
        <a
          href="https://web.facebook.com/emmanuel.obot.7406/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/emmaoboteh/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        &copy; {year} MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
