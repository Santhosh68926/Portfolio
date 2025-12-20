import { motion } from 'framer-motion';
import { education, experience } from '../data/education';
import TimelineItem from '../components/TimelineItem';
import { personalInfo } from '../data/personalInfo';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-12 lg:pt-20"
    >
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hi, I’m <strong>C.Santhosh Kumar</strong>, a recent <strong>Electronics and Communication Engineering</strong> graduate from Trichy Engineering College with a CGPA of 8.0.
              I’m passionate about front-end web development, combining creativity and precision to build modern, responsive, and user-friendly websites.
              I am proficient in React.js, JavaScript, HTML, and CSS, and I continuously explore new technologies to enhance web experiences.
              I’m a self-motivated and detail-oriented individual, eager to contribute to innovative projects. My short-term goal is to begin
              my career as a Front-End Developer in a reputed company, and my long-term goal is to grow into a Senior Developer leading impactful web solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Education
              </h2>
              <div className="space-y-4 lg:space-y-6">
                {education.map((item) => (
                  <TimelineItem key={item.id} item={item} type="education" />
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Experience
              </h2>
              <div className="space-y-4 lg:space-y-6">
                {experience.map((item) => (
                  <TimelineItem key={item.id} item={item} type="experience" />
                ))}
              </div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg items-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Connect With Me
                </h3>

                <div className="flex flex-col items-center space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    Let's connect and build something amazing together!
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    {personalInfo.socialLinks.map((social, index) => {
                      const getIcon = (iconName) => {
                        const icons = {
                          FaGithub: FaGithub,
                          FaLinkedin: FaLinkedin,
                          FaTwitter: FaTwitter,
                          FaInstagram: FaInstagram
                        };
                        return icons[iconName];
                      };

                      const Icon = getIcon(social.icon);

                      return (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={social.name}
                        >
                          <Icon size={20} />
                        </motion.a>
                      );
                    })}
                  </div>

                  <div className="mt-6 text-center items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-primary"
                    >
                      <FaEnvelope className="mr-2" />
                      Send Me a Message
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;