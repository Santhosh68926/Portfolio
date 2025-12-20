import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaMobile, FaPalette, FaRocket, FaShieldAlt, FaUsers, FaTimes, FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: FaCode,
      title: "Clean Code",
      shortDescription: "Writing maintainable, scalable, and well-documented code.",
      detailedDescription: "I follow industry best practices and coding standards to create maintainable, scalable, and well-documented code. This includes proper naming conventions, modular architecture, comprehensive comments, and version control. Clean code ensures easier maintenance, better collaboration, and reduced technical debt.",
      benefits: [
        "Improved maintainability and readability",
        "Easier debugging and troubleshooting",
        "Better team collaboration",
        "Reduced technical debt",
        "Faster development cycles"
      ],
      technologies: ["ESLint", "Prettier", "TypeScript", "Git", "JSDoc"]
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      shortDescription: "Creating websites that work seamlessly across all devices.",
      detailedDescription: "I specialize in creating websites that provide optimal viewing experiences across all devices - from mobile phones to tablets to desktop computers. Using modern CSS techniques like Flexbox, Grid, and media queries, I ensure that your website looks and functions perfectly regardless of screen size.",
      benefits: [
        "Consistent experience across all devices",
        "Improved mobile user engagement",
        "Better SEO rankings",
        "Increased conversion rates",
        "Future-proof design"
      ],
      technologies: ["CSS Grid", "Flexbox", "Media Queries", "Viewport Units", "Mobile-First Design"]
    },
    {
      icon: FaPalette,
      title: "Modern UI/UX",
      shortDescription: "Designing beautiful, intuitive interfaces.",
      detailedDescription: "I create beautiful, intuitive interfaces that provide exceptional user experiences. By combining modern design principles with user psychology, I build interfaces that are not just visually appealing but also highly functional and user-friendly.",
      benefits: [
        "Enhanced user satisfaction",
        "Improved brand perception",
        "Higher user retention",
        "Better accessibility",
        "Intuitive navigation"
      ],
      technologies: ["Figma", "Adobe XD", "Material Design", "Human Interface Guidelines", "Color Theory"]
    },
    {
      icon: FaRocket,
      title: "Performance",
      shortDescription: "Optimizing applications for speed and efficiency.",
      detailedDescription: "I optimize applications for maximum speed, efficiency, and smooth user interactions. This includes code splitting, lazy loading, image optimization, caching strategies, and minimizing bundle sizes to ensure lightning-fast load times.",
      benefits: [
        "Faster load times",
        "Better user experience",
        "Improved SEO rankings",
        "Reduced bounce rates",
        "Higher conversion rates"
      ],
      technologies: ["Webpack", "Code Splitting", "Lazy Loading", "Image Optimization", "Caching"]
    },
    {
      icon: FaShieldAlt,
      title: "Security First",
      shortDescription: "Implementing best security practices.",
      detailedDescription: "I implement the best security practices to protect user data and prevent vulnerabilities. This includes input validation, secure authentication, HTTPS implementation, protection against common attacks, and regular security audits.",
      benefits: [
        "Protection of user data",
        "Compliance with regulations",
        "Prevention of common attacks",
        "User trust and confidence",
        "Reduced security risks"
      ],
      technologies: ["JWT", "OAuth 2.0", "HTTPS", "Input Validation", "Security Headers"]
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      shortDescription: "Working effectively with cross-functional teams.",
      detailedDescription: "I excel at working effectively with cross-functional teams to deliver exceptional results. Through clear communication, agile methodologies, and collaborative tools, I ensure smooth project execution and successful outcomes.",
      benefits: [
        "Improved project outcomes",
        "Better communication",
        "Faster problem resolution",
        "Enhanced team productivity",
        "Successful project delivery"
      ],
      technologies: ["Git", "Slack", "Jira", "Agile/Scrum", "Code Reviews"]
    }
  ];

  const openFeatureDetail = (feature) => {
    setSelectedFeature(feature);
  };

  const closeFeatureDetail = () => {
    setSelectedFeature(null);
  };

  return (
    <section
      id="features"
      className="py-12 lg:py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What I bring to every project - technical expertise combined with creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openFeatureDetail(feature)}
                className="bg-gray-50 dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg card-hover text-center cursor-pointer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Icon className="text-white text-xl md:text-2xl" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
                  {feature.shortDescription}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Detail Modal */}
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={closeFeatureDetail}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <selectedFeature.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedFeature.title}
                  </h3>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeFeatureDetail}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedFeature.detailedDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {selectedFeature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFeature.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={closeFeatureDetail}
                className="w-full btn-primary"
              >
                Got it!
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and work with innovative teams.
              Whether you have a specific project in mind or just want to discuss possibilities,
              I'd love to hear from you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;