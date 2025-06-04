import React, { useEffect, useState } from "react";

const BackgroundEffects = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.8 + 0.2,
      size: Math.random() * 6 + 1,
      duration: Math.random() * 5 + 3,
    });

    const interval = setInterval(() => {
      setBubbles((prev) => [...prev.slice(-300), createBubble()]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-white rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            opacity: bubble.opacity,
            animation: `floatUp ${bubble.duration}s ease-in forwards`,
          }}
        />
      ))}

      {/* Float animation */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-40px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundEffects;
