import { otherPageLinks, socialLinks } from "../data";
import "../styling/Footer.css";
import "../index.css";
import logo from "../images/LM.svg";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-sky-950">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="/" aria-label="Go to Home">
            <img
              className="w-auto h-8"
              src={logo}
              alt="LMDevPro Logo - Full-Stack Developer Portfolio"
            />
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {otherPageLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mx-4 text-base text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label={link.text}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-base text-gray-500 dark:text-gray-300">
            © LMDevPro {new Date().getFullYear()}. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${link.icon} text-2xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
