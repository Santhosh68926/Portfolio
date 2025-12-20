import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import { getMessages } from '../utils/messageStorage';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMessages(getMessages());
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      {/* Message Notification Bell */}
      <motion.button
        onClick={toggleVisibility}
        className="relative p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaEnvelope className="text-lg" />
        {messages.length > 0 && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Messages Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Messages ({messages.length})
            </h3>
            <motion.button
              onClick={toggleVisibility}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={20} />
            </motion.button>
          </div>
          
          <div className="max-h-96 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {message.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {message.email}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(message.timestamp).toLocaleString()}
                  </span>
                </div>
                
                {message.subject && (
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject: {message.subject}
                  </p>
                )}
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {message.message}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MessageDisplay;

// template_c1dks6v
// service -12345
// public-key : UNm_n9BtArR1YdQUw