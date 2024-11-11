'use client';
import React from 'react';
import { useAnimation, motion } from 'framer-motion';
// import dynamic from 'next/dynamic';

const Hero: React.FC = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="flex flex-col items-center justify-center h-screen p-4 text-center bg-lightBackground dark:bg-darkBackground transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800 dark:text-white"
      >
        Hi, I'm <span className="text-accent">ANGELIQUE</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl mt-4 text-gray-600 dark:text-gray-400"
      >
        Full-Stack Developer & Designer
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg"
      >
        I build beautiful, responsive websites and applications with a focus on performance and user experience.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-6 flex space-x-4"
      >
        <button className="px-6 py-2 bg-accent text-white rounded-md">View My Work</button>
        <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-700 rounded-md">Get in Touch</button>
      </motion.div>
    </section>
  );
};

export default Hero;
