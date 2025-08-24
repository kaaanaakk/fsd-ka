import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollPosition = window.scrollY + windowHeight;
      const scrollThreshold = documentHeight - 200;
      
      setIsVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? 'fade-in' : ''}`}>
      <div className="footer-section footer-left clickable">SRMIST</div>
      <div className="footer-section footer-center clickable">FSD PROJECT</div>
      <div className="footer-section footer-right clickable">CT2</div>
    </div>
  );
};

export default Footer;