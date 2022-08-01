import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Dropdown from '../Dropdown/Dropdown';
import Dropdown2 from '../Dropdown/Dropdown2';
import Logo from '../../assets/images/logo.svg';
import menuOpen from '../../assets/images/icon-menu.svg';
import menuClose from '../../assets/images/icon-close-menu.svg';
import arrowDown from '../../assets/images/icon-arrow-down.svg';
import arrowUp from '../../assets/images/icon-arrow-up.svg';

function Navbar() {
  const [arrow, setArrow] = useState(arrowDown);
  const [arrow2, setArrow2] = useState(arrowDown);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  
  const onClick = () => {
    setDropdown(true);
    setArrow(arrowUp);
  }
  const onClick2 = () => {
    setDropdown2(true);
    setArrow2(arrowUp)
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 1024) {
      setDropdown(false);
      setArrow(arrowDown);
    } else {
      setDropdown(true);
      setArrow(arrowUp);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1024) {
      setDropdown(false);
      setArrow(arrowDown);
    } else {
      setDropdown(false);
      setArrow(arrowDown);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 1024) {
      setDropdown2(false);
      setArrow2(arrowDown);
    } else {
      setDropdown2(true);
      setArrow2(arrowUp);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 1024) {
      setDropdown2(false);
      setArrow2(arrowDown);
    } else {
      setDropdown2(false);
      setArrow2(arrowDown);
    }
  };

  return (
    <>
      <header className='header'>
        <Link to='/' className='header-logo' onClick={click}>
          <img src={Logo} alt='Snap Logo' className='logo'/>
        </Link>

        <nav className='navbar'>
          <div className='menu-icon' onClick={handleClick}>
            <img src={click ? menuClose : menuOpen} alt='Menu icon' />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
              <div className='nav-links'>Features <img src={arrow} alt='baixo' /></div> 
              {dropdown && <Dropdown />}
            </li>
            <li className={dropdown ? 'nav-item space' : 'nav-item'} onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} onClick={onClick2}>
              <div className='nav-links'>Company <img src={arrow2} alt='baixo' /></div>
              {dropdown2 && <Dropdown2 />}
            </li>
            <li className={dropdown2 ? 'nav-item space2' : 'nav-item'}>
              <Link to='/careers' className='nav-links' onClick={click}>
                Careers
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={click}>
                About
              </Link>
            </li>
          </ul>
          <ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>
            <li className={dropdown ? 'nav-item space3' : 'nav-item' && dropdown2 ? 'nav-item  space4' : 'nav-item'}>
              <Link to='/login' className='nav-links' onClick={click}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='sign-up' className='nav-button'>
                <button className='button'>Register</button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='fundo'></div>
      </header>
    </>
  );
}

export default Navbar;