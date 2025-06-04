import reactIcon from "/public/react-pics.png";
import listen from "/public/listen.png";
import football from "/public/football.png"; // Update your path if needed
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-[120px] text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold text-center mb-4 ">About Me</h2>

      <p
        className="text-sm text-gray-300 text-center md:max-w-[65%] mx-auto mb-10"
        data-aos="zoom-out"
      >
        I'm <span className="text-purple-300 font-semibold">EmmyCode</span>, a
        frontend developer passionate about creating clean, responsive, and
        engaging web experiences. I specialize in building with React, Tailwind
        CSS, and modern animation libraries to deliver user-friendly interfaces.
        <br />
        <br />
        When I’m not coding, I’m either vibing to music or enjoying a football
        match. I believe in blending creativity and logic — both on and off the
        screen.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* Card 1 */}
        <div
          className="rounded-[30px] border border-purple-800 bg-gradient-to-br from-purple-600 to-purple-800 p-6 w-[320px] hover:scale-[1.04] transition-all duration-300 shadow-lg"
          data-aos="fade-right"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={reactIcon}
              alt="react"
              className="w-12 h-12 rounded-full ring-2 ring-white"
            />
            <h1 className="text-lg font-semibold">Frontend Developer</h1>
          </div>
          <p className="text-sm text-gray-200">
            I build smooth and responsive UIs using React and Tailwind CSS —
            turning ideas into clean digital experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-[30px] border border-purple-800 bg-gradient-to-br from-purple-600 to-purple-800 p-6 w-[320px] hover:scale-[1.04] transition-all duration-300 shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={listen}
              alt="music"
              className="w-12 h-12 rounded-full ring-2 ring-white"
            />
            <h1 className="text-lg font-semibold">Music Lover</h1>
          </div>
          <p className="text-sm text-gray-200">
            Whether I'm coding or relaxing, music is always in the mix. It keeps
            the energy flowing and the creativity alive.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-[30px] border border-purple-800 bg-gradient-to-br from-purple-600 to-purple-800 p-6 w-[320px] hover:scale-[1.04] transition-all duration-300 shadow-lg"
          data-aos="fade-left"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={football}
              alt="football"
              className="w-12 h-12 rounded-full ring-2 ring-white"
            />
            <h1 className="text-lg font-semibold">Football Enthusiast</h1>
          </div>
          <p className="text-sm text-gray-200">
            On the field or in the code, I stay sharp. Football teaches teamwork
            and discipline — skills I bring into development.
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleScrollToContact}
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Let’s Connect
        </button>
      </div>
    </section>
  );
};

export default About;
