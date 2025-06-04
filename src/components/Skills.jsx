import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Tailwind", level: 85 },
  { name: "Git", level: 70 },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="skills" className="py-20 px-6 md:px-24 " data-aos="fade-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Skills</h2>
        <p className="text-sm text-gray-400 mb-4 md:max-w-2xl mx-auto">
          Here are the technologies I work with. I use them to build fast,
          accessible, and user-friendly web applications across different
          platforms.
        </p>

        <a
          href="https://github.com/EmmyCode112" // replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white text-sm px-6 py-2 rounded-full shadow-md transition-all duration-300 "
        >
          View My GitHub Repositories
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative w-[140px] h-[140px] flex items-center justify-center transition-transform hover:scale-105 duration-300"
          >
            <CircularProgressbar
              value={skill.level}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "#a855f7", // purple
                trailColor: "#1f2937", // dark gray background
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-sm font-semibold">
              <span className="mb-1 text-purple-400">{skill.name}</span>
              <CountUp
                end={skill.level}
                duration={2}
                suffix="%"
                enableScrollSpy
                redraw
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
