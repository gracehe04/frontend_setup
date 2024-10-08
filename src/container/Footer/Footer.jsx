import React, { useEffect, useRef } from 'react';
import './Footer.scss';
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const handleScroll = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerTop < windowHeight) {
        footer.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-content">
        <p>@ Grace He, 2024</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/gracehe04/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/gracehe04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
