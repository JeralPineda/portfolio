import styled, { createGlobalStyle } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

export const GlobalStyle = createGlobalStyle`
    body{
        overflow: ${({ isOpen }) => (isOpen ? 'hidden' : '')}
    }
`;

export const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background: #000;
   display: grid;
   align-items: center;
   top: 0;
   left: 0;
   transition: 0.3s ease-in-out;

   /* backdrop-filter: blur(200px); */
   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
   top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
   color: #fafafa;
`;

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`;

export const SidebarWrapper = styled.div`
   color: #fafafa;
`;

export const SidebarMenu = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 8rem);
   text-align: center;

   @media screen and (max-width: 400px) {
      grid-template-rows: repeat(6, 6rem);
   }
`;

export const SidebarLink = styled(LinkS)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.8rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   text-decoration: none;
   color: #fafafa;
   cursor: pointer;
   transition: color 0.3s ease;

   &:hover {
      color: #444bdc;
   }
`;

export const SideBtnWrapp = styled.div`
   display: flex;
   justify-content: center;
`;

export const SidebarSocial = styled.nav`
   display: flex;
   justify-content: center;
`;

export const SidebarSocialIcons = styled.a`
   padding: 1rem 2.2rem;
   font-size: 2.8rem;

   path {
      color: #ccca;
      transition: all 0.2s ease-in-out;

      &:hover {
         color: #fafafa;
      }
   }
`;
