import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Dave\'s logo.png';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    setMenu(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    menuRef.current.style.right = isMenuOpen ? "-300px" : "0";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuRef.current.style.right = "-300px";
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="Dave's logo" className='logo'/>
      <button onClick={toggleMenu} className='nav-mob-open' aria-label="Open menu">
        <img src={menu_open} alt="" />
      </button>
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={closeMenu} className="nav-mob-close" aria-label="Close menu">
          <img src={menu_close} alt="" />
        </button>
        {[
          { path: "/", text: "Home" },
          { path: "/about", text: "About Me" },
          { path: "/services", text: "Services" },
          { path: "/resume", text: "Resume" },
          { path: "/portfolio", text: "Portfolio" },
          { path: "/contact", text: "Contact" },
        ].map((item) => (
          <li key={item.path}>
            <Link to={item.path} className='anchor-link' onClick={closeMenu}>
              <p>{item.text}</p>
              {menu === item.path && <img src={underline} alt='' />}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <Link to="/contact" className='anchor-link'>Connect With Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;