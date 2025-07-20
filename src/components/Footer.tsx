import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-50 text-gray-600 py-6 border-t border-sky-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Tứ Phạm. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-lg">
          <a
            href="mailto:atu3012@gmail.com"
            aria-label="Email"
            className="hover:text-blue-600 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Altas463"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pham-van-a-tu-ba7308322/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
