import React, {useState,useEffect} from 'react';
import {Link, animateScroll} from 'react-scroll';
import './Navbar.css';
import {Button} from './Button'

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const [name,setName] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const scrollToBottom = () => {
        animateScroll.scrollToBottom();
    };

    const closeMobileMenuAndScrollTop = () => {
        closeMobileMenu()
        scrollToTop()
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
            setName(false);
        } else{
            setButton(true);
            setName(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);



    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  {name ?
                      <Link to="/" className="navbar-logo" onClick={scrollToTop}>
                          Thomas Stansel
                      </Link>
                  :
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenuAndScrollTop}>
                         T.S
                    </Link>
                  }
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='home' className='nav-links' onClick={closeMobileMenuAndScrollTop} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
                              Home
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='experience' className='nav-links' onClick={closeMobileMenu} activeClass="active" spy={true} smooth={true} offset={-110} duration={700}>
                              Where I've Worked
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='projects' className='nav-links' onClick={closeMobileMenu} activeClass="active" spy={true} smooth={true} offset={-110} duration={700}>
                              Projects
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='mountains' className='nav-links' onClick={closeMobileMenu} activeClass="active" spy={true} smooth={true} offset={-110} duration={700}>
                              National Parks
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='footer' className='nav-links-mobile' onClick={closeMobileMenu} activeClass="active" spy={true} smooth={true} offset={-110} duration={700}>
                              Contact
                          </Link>
                      </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline' onClick={scrollToBottom}>Contact</Button>}
              </div>
          </nav>
        </>
    )
}

export default Navbar
