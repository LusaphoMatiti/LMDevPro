import { pageLinks, socialLinks } from "../data";
import "../styling/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;

            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { id, icon, href } = link;

            return (
              <li key={id}>
                <a href={href} target="_blank" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; LMDevPro
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};
export default Footer;
