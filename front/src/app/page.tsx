"use client";
import Button from "@/components/StartButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const Home = () => {
  const [hovered, setHovered] = useState(false);

  
  const playSound = () => {
    const audio = new Audio("/throw.wav");
    audio.play();
  };

  
  const [showKirby, setShowKirby] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowKirby(true), 2000); 
    const hideTimeout = setTimeout(() => setShowKirby(false), 7000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-white text-5xl relative z-10 p-16 mt-14 text-center font-mono"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Welcome! I am 
          <span className="text-purple-500">
            {hovered ? " Candela Villaverde.exe loading..." : " Candela Villaverde"} 👾
          </span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold drop-shadow-lg"
        >
          I am a web developer
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }}
        className="text-center -mt-20 shadow-lg text-3xl"
      >
        <Link href={"/about"}>
          <Button onClick={playSound} />
        </Link>
      </motion.div>

      {showKirby && (
        <motion.img 
          src="/kirby.gif" 
          alt="Kirby caminando"
          className="absolute bottom-10 left-0 w-20"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: [0, 300, 600], opacity: [0, 1, 1, 0] }} 
          transition={{ duration: 5, ease: "linear" }}
        />
      )}
    </>
  );
};

export default Home;
