import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Lusapho Matiti | Full-Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design."
        />
        <meta
          property="og:title"
          content="About Lusapho Matiti | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Learn more about Lusapho Matiti, a skilled Full-Stack Developer specializing in ReactJS and UI/UX design."
        />
        <meta property="og:image" content="https://lmdevpro.co.za/Ludz.webp" />
        <meta property="og:url" content="https://lmdevpro.co.za/about" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lusapho Matiti",
              "url": "https://lmdevpro.co.za/about",
              "image": "https://lmdevpro.co.za/Ludz.webp",
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "LMDevPro"
              },
              "sameAs": [
                "https://github.com/LusaphoMatiti",
                "https://www.instagram.com/_lusapho_"
              ],
              "knowsAbout": [
                "ReactJS",
                "UI/UX Design",
                "Web Development",
                "JavaScript",
                "Frontend Development",
                "Backend Development"
              ]
            }
          `}
        </script>
      </Helmet>

      <section
        className="bg-[#FAFAFA] min-h-screen relative dark:bg-gray-900 p-5"
        id="about"
      >
        <div className="relative flex flex-col justify-center w-full h-full px-4 sm:px-6 md:px-10 py-10 pb-20 mx-auto max-w-7xl">
          {/* Image and Heading */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-20">
            {/* Image Container */}
            <div className="flex justify-center items-center relative w-fit h-fit mt-8 lg:ml-16">
              {/* Decorative Border */}
              <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 border-8 border-[#111111] rounded-lg bg-gray-200 shadow-lg -translate-x-5 -translate-y-5"></div>

              {/* Actual Image */}
              <img
                className="relative object-cover object-center w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 border-8 border-[#111111] rounded-lg bg-gray-200"
                src="/Ludz.webp"
                alt="Lusapho Matiti"
              />
            </div>

            {/* Heading */}
            <h1 className="mt-8 lg:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas  text-[#111111] dark:text-white text-center lg:text-left">
              ABOUT LUSAPHO
            </h1>
          </div>

          {/* About Text Section */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="px-4 sm:px-6 md:px-12 lg:px-10 sm:mt-6 text-center lg:text-left">
              <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-gray-500 dark:text-gray-400 mt-6">
                I specialize in creating responsive frontends with{" "}
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>{" "}
                and designing scalable backends with{" "}
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node.js
                </a>{" "}
                and{" "}
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS
                </a>{" "}
                to build efficient, user-friendly web applications. My approach
                focuses on writing clean, maintainable code, optimizing
                performance, and ensuring seamless user experiences.
              </p>

              <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-gray-500 dark:text-gray-400 mt-6">
                I’ve worked on real-world projects, including a{" "}
                <a href="#projects" className="hover:underline">
                  serverless to-do app
                </a>{" "}
                and an eCommerce platform, handling everything from development
                to deployment. These experiences have strengthened my
                problem-solving skills and deepened my understanding of
                full-stack development.
              </p>

              <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-gray-500 dark:text-gray-400 mt-6">
                Outside of coding, I enjoy exploring the outdoors, working out,
                playing football, and listening to music. I believe in
                continuous learning, taking on new challenges, and creating web
                solutions that make a real impact.
              </p>

              <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-gray-500 dark:text-gray-400 mt-6">
                So, welcome to my corner of the web. Whether you’re a small
                business owner looking to bring your ideas to life or someone
                curious about web development, I’m happy you’re here. Let’s
                create something awesome together!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center justify-center">
              <a
                href="https://github.com/LusaphoMatiti"
                className="bg-[#111111] hover:bg-[#474646] ease-in text-white px-8 sm:px-10 py-3 rounded-md flex items-center font-bebas"
              >
                <img
                  className="w-5 h-5 mr-2"
                  src="github.png"
                  alt="Github logo"
                />
                GitHub
              </a>

              <a
                href="/contact"
                className="bg-[#111111] hover:bg-[#474646] ease-in text-white px-8 sm:px-10 py-3 rounded-md flex items-center font-bebas"
              >
                <img
                  className="w-5 h-5 mr-2"
                  src="telephone.png"
                  alt="Telephone logo"
                />
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
