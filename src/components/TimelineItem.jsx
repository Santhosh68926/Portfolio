import { motion } from 'framer-motion';

const TimelineItem = ({ item, type }) => {
  const isEducation = type === 'education';

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l-2 border-blue-300 dark:border-blue-600 last:border-l-0"
    >
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2" />
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {isEducation ? item.degree : item.position}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
            {item.period}
          </span>
        </div>
        
        <div className="mb-3">
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {isEducation ? item.institution : item.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.location}
          </p>
        </div>

        {isEducation ? (
          <>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              GPA: {item.gpa}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              {item.achievements.map((achievement, index) => (
                <li key={index} className="text-sm">
                  {achievement}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            {item.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm">
                {responsibility}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;