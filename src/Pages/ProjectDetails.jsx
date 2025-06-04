import { useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(project?.images?.[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return <p className="text-center text-gray-400 mt-32">Project not found</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 py-12 pt-28"
    >
      <h1 className="text-5xl font-bold text-purple-500 mb-8 text-center">
        {project.title}
      </h1>

      {/* Main Image */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-purple-800 mb-6">
        <img
          src={activeImage}
          alt="Main preview"
          className="w-full h-[250px] sm:h-[450px] sm:object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 mb-10">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setActiveImage(img)}
            className={`h-[100px] w-[150px]  sm:object-cover rounded-md cursor-pointer transition-all duration-300 border-2 ${
              activeImage === img
                ? "border-purple-600 scale-105"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          />
        ))}
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-purple-500 mb-3">
          Description
        </h2>
        <p className="text-md text-gray-300 leading-relaxed md:max-w-[70%]">
          {project.fullDescription}
        </p>
      </div>

      {/* Tech Used */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-purple-500 mb-3">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside space-y-1 ">
          {project.tech.map((tech) => (
            <li className="text-gray-400 text-sm" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Live Link */}
      {project.live && !project.adminOnly && (
        <div className="text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-lg transition"
          >
            Visit Live
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;
