import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects.js";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-[120px] "
      data-aos="fade-up"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">My Projects</h1>
        <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
          Explore a collection of real-world projects that demonstrate my skills
          in design, development, and problem-solving. Each project highlights a
          unique challenge and the tech used to solve it.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-6 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[46%] md:w-[300px]  border border-white/10 rounded-lg overflow-hidden shadow-md "
          >
            <div className="relative group h-[200px] overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full  group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-purple-800/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="bg-purple-900 px-5 py-2.5 rounded-lg shadow-lg text-white font-medium flex items-center gap-2 hover:bg-purple-700 transition"
                >
                  View Detail
                  <FaArrowCircleRight size={18} className="rotate-[-45deg]" />
                </button>
              </div>
            </div>
            <div className="text-center p-4">
              <h2 className="text-xl font-semibold text-white mb-1">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
