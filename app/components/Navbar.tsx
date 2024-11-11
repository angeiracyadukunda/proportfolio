"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    // Get the current pathname from the window
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-lightBackground dark:bg-darkBackground shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent dark:text-accent">
          LOGO
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-300">
          <motion.li
            className={`text-xl ${
              activeLink === "/"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              onClick={() => setActiveLink("/")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Home
            </Link>

          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/aboutpage"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/aboutpage" // Linking to the About Me page
              onClick={() => setActiveLink("/aboutpage")}
              className="hover:text-accent transition-colors duration-300"
            >
              About Me
            </Link>
          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/projects"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/projects"
              onClick={() => setActiveLink("/projects")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Projects
            </Link>
          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/skills"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/skills"
              onClick={() => setActiveLink("/skills")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Skills
            </Link>
          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/experience"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/experience"
              onClick={() => setActiveLink("/experience")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Experience
            </Link>
          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/blog"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/blog"
              onClick={() => setActiveLink("/blog")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Blog
            </Link>
          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/testimonial"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/testimonial"
              onClick={() => setActiveLink("/testimonial")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Testimonial
            </Link>
          </motion.li>
          <motion.li
            className={`text-xl ${
              activeLink === "/contact"
                ? "text-accent"
                : "text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/contact"
              onClick={() => setActiveLink("/contact")}
              className={`hover:text-accent transition-colors duration-300`}
            >
              Contact Me
            </Link>
          </motion.li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
