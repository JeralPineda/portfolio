import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrapp } from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>

         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to='about' onClick={toggle}>
                  About
               </SidebarLink>
               <SidebarLink to='discover' onClick={toggle}>
                  Discover
               </SidebarLink>
               <SidebarLink to='services' onClick={toggle}>
                  Services
               </SidebarLink>
               <SidebarLink to='signup' onClick={toggle}>
                  Sign Up
               </SidebarLink>
            </SidebarMenu>

            <SideBtnWrapp>
               <SidebarRoute to='signin'>Sign In</SidebarRoute>
            </SideBtnWrapp>
         </SidebarWrapper>
      </SidebarContainer>
   );
};