import React from "react";
import { motion } from "framer-motion";
import "../styling/Contact.css";
import Title from "../components/Title";
import "../index.css";

// Define fade-up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      className="section contact py-12 px-4 md:px-8 lg:px-16 bg-gray-800 text-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Added container for responsive max-width */}
        <Title
          className="text-2xl font-semibold capitalize lg:text-3xl text-center"
          title="contact"
          subTitle="me"
        />
        <div className="title-underline mx-auto mb-8"></div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
          className="max-w-xl mx-auto text-center mb-12"
        >
          Feel free to reach out through the contact information below or follow
          me on social media.
        </motion.p>

        <div className="flex flex-col gap-8 items-center">
          {/* Social Media Links */}
          <div className="w-full max-w-md text-center">
            <motion.div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={fadeUp}
                className="text-gray-300 text-xl font-semibold mb-4"
              >
                Follow Me
              </motion.h3>
              <div className="flex justify-center gap-6 mt-4 mb-5">
                <a
                  className="text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="mailto:your-email@example.com"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 8L12 13L20 8V6L12 11L4 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27444 8.16103 5.69215 7.10804C5.9742 6.40463 6.51331 5.86554 7.21307 5.58794C8.26272 5.17458 10.7655 5.26729 11.9294 5.26729C13.0932 5.26729 15.5924 5.17458 16.6456 5.58794C17.349 5.86554 17.8881 6.40463 18.1665 7.10804C18.5842 8.16103 18.4778 10.6611 18.1665 11.825C18.1665 12.9888 18.5842 15.488 18.1665 16.5412Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9058 11.1061 11.8059 10.2059C12.706 9.30576 13.9269 8.80005 15.2 8.80005ZM7.2 9.60005H4V19.2H7.2V9.60005ZM5.6 8.00005C6.24265 8.00005 6.8 7.4427 6.8 6.80005C6.8 6.15739 6.24265 5.60005 5.6 5.60005C4.95735 5.60005 4.4 6.15739 4.4 6.80005C4.4 7.4427 4.95735 8.00005 5.6 8.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="contact-card bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center mb-10"
        >
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-4">
            I'm available for freelance projects, collaborations, and more. Feel
            free to drop a message.
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500 mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 8L12 13L20 8V6L12 11L4 6V8Z" />
              </svg>
              <span className="ml-2">Lusaphomatiti07@gmail.com</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500 mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 3H7C5.89 3 5 3.89 5 5V19C5 20.11 5.89 21 7 21H17C18.11 21 19 20.11 19 19V5C19 3.89 18.11 3 17 3ZM17 19H7V5H17V19ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM14.31 7.57L13.07 9.03C12.91 9.22 12.65 9.25 12.47 9.09C12.3 8.94 12.26 8.69 12.41 8.51L13.65 7.05C13.79 6.86 14.06 6.83 14.23 6.98C14.4 7.13 14.44 7.38 14.31 7.57Z" />
              </svg>
              <span className="ml-2">063 520 2097</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
