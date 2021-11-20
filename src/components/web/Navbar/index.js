import React from 'react';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

export const Navbar = ({ toggle }) => {
   return (
      <>
         <Nav>
            <NavbarContainer>
               <NavLogo to='/'>Jeral</NavLogo>

               <MobileIcon onClick={toggle}>
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
            </NavbarContainer>
         </Nav>
      </>
   );
};
