import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const resume = {
  experience: [
    {
      title: "Frontend Developer",
      company: "CodeRigi Technologies",
      date: "April 2025 – Present",
      description:
        "Building responsive web applications using React, TailwindCSS, and integrating REST APIs.",
    },
    {
      title: "Web Developer Intern",
      company: "CodeRigi Technologies",
      date: "Jun 2024 – Apr 2024",
      description:
        "Assisted in developing landing pages and reusable components for various clients.",
    },
  ],
  // education: [
  //   {
  //     degree: "SSCE Certificate holder",
  //     school: "Comprehensive, Sec, Sch, Ndiya.",
  //     date: "2016 – 2022",
  //     description:
  //       "Studies science and graduated as a first class student in my high school, with my west africa examination council result (WEAC).",
  //   },
  // ],
};

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="resume"
      className="py-24 px-6 md:px-12 lg:px-24"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Resume</h2>

      <motion.div className="flex flex-col items-center gap-4 mb-10 text-center">
        <motion.p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
          I completed my frontend development training at CodeRigi Technologies,
          where I passed multiple technical assessments and built real-time
          applications as part of the curriculum.
          <br />
          <br />
          Throughout the program, I developed several practical projects —
          including an e-commerce site, high-converting landing pages, and other
          websites — many of which are live and publicly accessible online.
        </motion.p>
        <motion.a
          href="/Resume.pdf"
          download
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 flex gap-1 items-center rounded-full transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Download Resume <FaArrowCircleDown size={18} />
        </motion.a>
      </motion.div>

      <div className="gap-y-6 space-x-12 flex items-start">
        {resume.experience.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm "
          >
            <h4 className="text-xl font-semibold text-white mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-purple-400">{item.company}</p>
            <p className="text-sm text-gray-400 italic mb-3">{item.date}</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
