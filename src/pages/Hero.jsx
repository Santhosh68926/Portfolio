import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { downloadCV } from '../utils/downloadCV';
import SmallThemeToggle from '../components/SmallThemeToggle';
import img from '../assets/me.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-6 py-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <h2 className="text-3xl text-gray-700 dark:text-gray-300 mb-6">
              <strong>{personalInfo.title}</strong>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full h-11 btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>View My Work</span>
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="w-full h-11 btn-cv flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-85 h-95">
              {/* Glow animation */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-gray-600 rounded-3xl blur-xl opacity-70 animate-pulse" /> */}

              {/* Border gradient */}
              {/* <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-700 rounded-3xl" /> */}

              {/* Image container */}
              <div className="relative inset-0 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <img
                  src={Image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col justify-between min-h-[calc(100vh-5rem)]">
          {/* Top Image/Circle */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center pt-3 pb-2 lg:pt-6 lg:pb-4"
          >
            <div className="relative w-60 h-72">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-70 animate-pulse" /> */}
              {/* <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-700 rounded-2xl" /> */}
              <div className="absolute inset-2 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                <img
                  src={Image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pb-2 lg:pb-4"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
              <strong>{personalInfo.title}</strong>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full h-11 btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>View My Work</span>
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="w-full h-11 btn-cv flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Only show on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;