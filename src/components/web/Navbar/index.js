import React from 'react';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to='/'>Jeral</NavLogo>

               <MobileIcon>
                  <FaBars />
               </MobileIcon>

               <NavMenu>
                  <NavItem>
                     <NavLinks to='/about'>About</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to='/discover'>Discover</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to='/services'>Services</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to='/signup'>Sign Up</NavLinks>
                  </NavItem>
               </NavMenu>

               <NavBtn>
                  <NavBtnLink to='/signin'>Sign In</NavBtnLink>
               </NavBtn>
            </NavbarContainer>
         </Nav>
      </>
   );
};
