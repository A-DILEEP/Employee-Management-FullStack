import React from "react";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <span>
        Made with ❤️ on{" "}
        <a
          href="https://github.com/A-DILEEP"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coding
        </a>
      </span>
    </footer>
  );
};

export default FooterComponent;
