import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-banner ${scrollPosition > 10 ? 'fade-out' : ''}`}>
      <div className="banner-container">
        <div className="banner-section banner-left">
          <div className="banner-text name">MALIKHA ARJUNAN</div>
          <div className="banner-text id">RA2211027010254</div>
        </div>
        
        <div className="banner-section banner-center">
          <div className="banner-text name">KANAK SRIVASTA</div>
          <div className="banner-text id">RA2211027010230</div>
        </div>
        
        <Link to="/members" style={{ textDecoration: 'none', width: '33.33%' }}>
          <div className="banner-section banner-right">
            <div className="banner-text view-text">VIEW</div>
            <div className="banner-text view-text">MEMBERS</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;