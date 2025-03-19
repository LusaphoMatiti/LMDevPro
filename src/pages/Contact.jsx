import React from "react";
import { motion } from "framer-motion";
import "../styling/Contact.css";
import Title from "../components/Title";
import "../index.css";
import { Helmet } from "react-helmet-async";

// Define fade-up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <>
      {/* Meta Tags and Schema.org Markup */}
      <Helmet>
        <title> Lusapho Matiti - Full-Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design. Available for freelance projects, collaborations, and more."
        />
        <meta
          property="og:title"
          content=" Lusapho Matiti - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Get in touch with Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design. Available for freelance projects, collaborations, and more."
        />
        <meta property="og:image" content="https://lmdevpro.co.za/Ludz.webp" />
        <meta property="og:url" content="https://lmdevpro.co.za/contact" />
        <link rel="canonical" href="https://lmdevpro.co.za/contact" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lusapho Matiti",
              "email": "mailto:Lusaphonatiti07@gmail.com",
              "telephone": "+27635202097",
              "url": "https://lmdevpro.co.za/contact",
              "sameAs": [
                "https://github.com/LusaphoMatiti",
                "https://www.instagram.com/_lusapho_"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Main Section */}
      <section
        className="section contact py-12 px-4 md:px-8 lg:px-16 bg-gray-800 text-white"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <Title
            className="text-2xl font-semibold capitalize lg:text-3xl text-center"
            title="contact"
            subTitle="me"
          />
          <div className="title-underline mx-auto mb-8"></div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
            className="max-w-xl mx-auto text-center mb-12"
          >
            Feel free to reach out through the contact information below or
            follow me on social media.
          </motion.h2>

          <div className="flex flex-col gap-8 items-center">
            {/* Social Media Links */}
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
                  {/* GitHub Link */}
                  <a
                    className="text-white transition-colors duration-300 transform hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    href="https://github.com/LusaphoMatiti"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                  >
                    <i className="fa-brands fa-github text-3xl"></i>{" "}
                    {/* Increased size */}
                  </a>

                  {/* Instagram Link */}
                  <a
                    className="text-white transition-colors duration-300 transform hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    href="https://www.instagram.com/_lusapho_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Instagram profile"
                  >
                    <i className="fab fa-instagram text-3xl"></i>{" "}
                    {/* Increased size */}
                  </a>

                  {/* Email Link */}
                  <a
                    className="text-white transition-colors duration-300 transform hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    href="mailto:lusaphomatiti07@gmail.com"
                    aria-label="Send me an email"
                  >
                    <i className="fas fa-envelope text-3xl"></i>{" "}
                    {/* Increased size */}
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
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
            <h5 className="text-gray-400 mb-4">
              I’m available for freelance projects, collaborations, and more.
              Feel free to drop a message!
            </h5>
            <div className="space-y-3">
              {/* Email Section */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Email icon"
                >
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 8L12 13L20 8V6L12 11L4 6V8Z" />
                </svg>
                <span className="ml-2">Lusaphonatiti07@gmail.com</span>
              </div>

              {/* Phone Section */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Phone icon"
                >
                  <path d="M17 3H7C5.89 3 5 3.89 5 5V19C5 20.11 5.89 21 7 21H17C18.11 21 19 20.11 19 19V5C19 3.89 18.11 3 17 3ZM17 19H7V5H17V19ZM14.31 7.57L13.07 9.03C12.91 9.22 12.65 9.25 12.47 9.09C12.3 8.94 12.26 8.69 12.41 8.51L13.65 7.05C13.79 6.86 14.06 6.83 14.23 6.98C14.4 7.13 14.44 7.38 14.31 7.57Z" />
                </svg>
                <span className="ml-2">079 268 5757</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
