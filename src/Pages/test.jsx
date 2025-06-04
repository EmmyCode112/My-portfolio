// import { useParams } from "react-router-dom";
// import { projects } from "../data/projects.js";
// import { motion } from "framer-motion";
// import React, { useState } from "react";

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === id);
//   const [activeImage, setActiveImage] = useState(project?.images?.[0]);

//   if (!project) return <p>Project not found</p>;

//   useEffect(()=> {
//     const scrollFunc = ()=> {
//       setScroll(window.scrollY > 0)
//     }
//     window.addEventListener("scroll", scrollFunc)
//     return ()=> window.removeEventListener("scroll", scrollFunc)
//   },[])
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="max-w-5xl mx-auto px-4 py-8 pt-28"
//     >
//       <h1 className="text-4xl font-bold mb-4 text-purple-500">
//         {project.title}
//       </h1>

//       {/* Image Preview */}
//       <div className="my-8">
//         <img
//           src={activeImage}
//           alt="Project preview"
//           className="w-full h-[400px] object-cover rounded-xl shadow-lg border border-purple-800"
//         />

//         {/* Thumbnails */}
//         <div className="flex gap-4 mt-4 ">
//           {project.images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setActiveImage(img)}
//               className={`h-20 w-32 object-cover rounded-md cursor-pointer transition border-2 ${
//                 activeImage === img
//                   ? "border-purple-600 scale-105"
//                   : "border-transparent opacity-70 hover:opacity-100"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>

//       <div className="my-6">
//         <h4 className="font-semibold text-white mb-2">Tech used:</h4>
//         <ul className="list-disc list-inside text-gray-300">
//           {project.tech.map((tech) => (
//             <li key={tech}>{tech}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Live Link */}
//       {project.live && !project.adminOnly && (
//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md mt-4 transition"
//         >
//           Visit Live
//         </a>
//       )}
//     </motion.div>
//   );
// };

// export default ProjectDetail;
