import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/Dave\'s logo.png';
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("/");
  const menuRef = useRef();

  useEffect(() => {
    setMenu(location.pathname);
  }, [location]);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="Dave's logo" className='logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><Link to="/" className='anchor-link'><p>Home</p></Link>{menu === "/" && <img src={underline} alt=''/>}</li>
        <li><Link to="/about" className='anchor-link'><p>About Me</p></Link>{menu === "/about" && <img src={underline} alt=''/>}</li>
        <li><Link to="/services" className='anchor-link'><p>Services</p></Link>{menu === "/services" && <img src={underline} alt=''/>}</li>
        <li><Link to="/resume" className='anchor-link'><p>Resume</p></Link>{menu === "/resume" && <img src={underline} alt=''/>}</li>
        <li><Link to="/portfolio" className='anchor-link'><p>Portfolio</p></Link>{menu === "/portfolio" && <img src={underline} alt=''/>}</li>
        <li><Link to="/contact" className='anchor-link'><p>Contact</p></Link>{menu === "/contact" && <img src={underline} alt=''/>}</li>
      </ul>
      <div className="nav-connect"><Link to="/contact" className='anchor-link'>Connect With Me</Link></div>
    </div>
  )
}

export default Navbar