import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({ nome }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => localStorage.clear()

  const styles = {
    navbar: {
      backgroundColor: '#17A5B8',
      height: "55",
      display: 'flex',
      alignItems: 'center',
    },
    headerApp: {
      fontFamily: "'Lato', sans-serif",
      color: 'white',
    },
    menuBars: {
      marginLeft: '2rem',
      fontSize: '2rem',
      background: 'none',
      marginTop: '1px'
    },
    navMenu: {
      zIndex: 1,
      backgroundColor: '#17A2B8',
      width: 250,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: '-100%',
      transition: '850ms',
    },
    navMenuActive: {
      left: 0,
      transition: '350ms',
    },
    navMenuItems: {
      width: '100%',
    },
    navbarToggle: {
      backgroundColor: '#17A2B8',
      width: '100%',
      height: 80,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    '&:hover': {
      backgroundColor: '#1493a7',
    },

  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div style={styles.navbar} className='navbar'>
          <Link to='#' style={styles.menuBars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h3 style={styles.headerApp}>Olá {nome}, este é seu gerenciador finaceiro</h3>
          <Link to='#' style={styles.menuBars}>
            <FaIcons.FaSignInAlt onClick={logout} />
          </Link>
        </div>
        {
          //style={sidebar ? styles.navMenuActive : styles.navMenu}
        }
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul style={styles.navMenuItems} onClick={showSidebar}>
            <li style={styles.navbarToggle}>
              <Link to='#' style={styles.menuBars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;
