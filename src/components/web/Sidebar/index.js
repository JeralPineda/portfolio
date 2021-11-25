import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CloseIcon, GlobalStyle, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarSocial, SidebarSocialIcons, SidebarWrapper } from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <GlobalStyle isOpen={isOpen}></GlobalStyle>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>

         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to='about' onClick={toggle}>
                  Sobre mi
               </SidebarLink>

               <SidebarLink to='skills' onClick={toggle}>
                  Habilidades
               </SidebarLink>

               <SidebarLink to='projects' onClick={toggle}>
                  Proyectos
               </SidebarLink>
            </SidebarMenu>

            {/* Social icon */}
            <SidebarSocial>
               <SidebarSocialIcons href='https://github.com/JeralPineda' target='_blank' aria-label='GitHub'>
                  <FaGithub />
               </SidebarSocialIcons>

               <SidebarSocialIcons href='/' target='_blank' aria-label='Linkendin'>
                  <FaLinkedin />
               </SidebarSocialIcons>

               <SidebarSocialIcons href='https://twitter.com/jeral22800823' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
               </SidebarSocialIcons>
            </SidebarSocial>
         </SidebarWrapper>
      </SidebarContainer>
   );
};
