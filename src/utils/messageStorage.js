// Message storage for demo purposes
// In a real application, this would connect to a backend service like EmailJS, Resend, or a custom API

let messages = [];

export const getMessages = () => {
  return messages;
};

export const addMessage = (message) => {
  const newMessage = {
    ...message,
    id: Date.now(),
    timestamp: new Date().toISOString()
  };
  messages.unshift(newMessage);
  
  // Keep only last 10 messages
  if (messages.length > 10) {
    messages = messages.slice(0, 10);
  }
  
  return newMessage;
};

export const clearMessages = () => {
  messages = [];
};