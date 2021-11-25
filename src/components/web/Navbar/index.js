import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, NavSocial, NavSocialIcons } from './NavbarElements';

export const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false);

   const changeNav = () => {
      if (window.scrollY >= 80) {
         setScrollNav(true);
      } else {
         setScrollNav(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', changeNav);
   }, []);

   const toggleHome = () => {
      scroll.scrollToTop();
   };

   return (
      <>
         <IconContext.Provider value={{ color: '#fafafa' }}>
            <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>
                     JeralPineda
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                     <FaBars />
                  </MobileIcon>

                  <NavMenu>
                     <NavItem>
                        <NavLinks
                           //
                           to='about'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact={'true'}
                           offset={-80}
                        >
                           Sobre mi
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks
                           //
                           to='skills'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact={'true'}
                           offset={-80}
                        >
                           Habilidades
                        </NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks
                           //
                           to='projects'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact={'true'}
                           offset={-80}
                        >
                           Proyectos
                        </NavLinks>
                     </NavItem>

                     {/* Social icon */}
                     <NavSocial>
                        <NavSocialIcons href='https://github.com/JeralPineda' target='_blank' aria-label='GitHub'>
                           <FaGithub />
                        </NavSocialIcons>
                        <NavSocialIcons href='/' target='_blank' aria-label='Linkendin'>
                           <FaLinkedin />
                        </NavSocialIcons>

                        <NavSocialIcons href='https://twitter.com/jeral22800823' target='_blank' aria-label='Twitter'>
                           <FaTwitter />
                        </NavSocialIcons>
                     </NavSocial>
                  </NavMenu>
               </NavbarContainer>
            </Nav>
         </IconContext.Provider>
      </>
   );
};
