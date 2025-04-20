import { otherPageLinks, socialLinks } from "../data";
import "../styling/Footer.css";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-white font-bebas">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="/" aria-label="Go to Home">
            <img
              className="w-20 sm:w-19  object-contain lg:ml-5"
              src="./LM.jpg"
              alt="LMDevPro Logo - Full-Stack Developer Portfolio"
            />
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {otherPageLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mx-4 text-base md:text-lg lg:text-xl text-[#111111] transition-colors duration-300 hover:text-[#878686]  dark:hover:text-[#878686]"
                aria-label={link.text}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-base text-[#111111] ">
            © LMDevPro {new Date().getFullYear()}. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mx-2 text-[#111111] transition-colors duration-300  hover:text-[#878686]  dark:hover:text-[#878686] focus:outline-none focus:ring-2 focus:ring-[#878686]"
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
