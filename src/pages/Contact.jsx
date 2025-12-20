import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/personalInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    emailjs
      .send(
        "service_ydzxixo",        // 🔁 Service ID
        "template_c1dks6v",       // 🔁 Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "UNm_n9BtArR1YdQUw"         // 🔁 Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to contact me anytime 🚀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Info */}
            <div className="space-y-6">
              <Info icon={<FaEnvelope />} label="Email" value={personalInfo.email} />
              <Info icon={<FaPhone />} label="Phone" value={personalInfo.phone} />
              <Info icon={<FaMapMarkerAlt />} label="Location" value={personalInfo.location} />
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
            >
              {status && (
                <div className="p-3 text-sm rounded bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  {status}
                </div>
              )}

              <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
              <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
              <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} />

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                className="w-full btn-primary flex justify-center items-center"
              >
                {isSubmitting ? "Sending..." : <>Send Message <FaPaperPlane className="ml-2" /></>}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-medium text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      {...props}
      required
      className="w-full px-3 py-2 rounded border bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
    />
  </div>
);

export default Contact;
