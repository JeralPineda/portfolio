import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
   background: ${({ scrollNav }) => (scrollNav ? '#0c0c0caa' : 'transparent')};
   height: 8rem;
   margin-top: -8rem;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
   position: sticky;
   top: 0;
   z-index: 10;

   backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(20px)' : 'transparent')};
   box-shadow: ${({ scrollNav }) => (scrollNav ? 'rgba(255, 255, 255, 0.02) 0px 3px 0px -1px, rgba(255, 255, 255, 0.06) 0px 2px 2px -1px' : 'transparent')};
   transition: 0.6s ease;

   @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
   }
`;

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 8rem;
   z-index: 1;
   width: 100%;
   padding: 0 2.4rem;
   max-width: 110rem;
`;

export const NavLogo = styled(LinkR)`
   color: #fafafa;
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   align-items: center;
   margin-left: 2.4rem;
   font-weight: bold;
   text-decoration: none;
`;

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-200%, 140%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fafafa;
   }
`;

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 780px) {
      display: none;
   }
`;

export const NavItem = styled.li`
   height: 8rem;
`;

export const NavLinks = styled(LinkS)`
   color: #fafafa;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   &.active {
      border-bottom: 0.3rem solid #590271;
   }
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

export const NavBtnLink = styled(LinkR)`
   border-radius: 5rem;
   background: #01bf71;
   white-space: nowrap;
   padding: 1rem 2.2rem;
   color: #010606;
   font-size: 1.8rem;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;

   &:hover {
      transition: all 0.2s ease-in-out;
      background: #fafafa;
      color: #010606;
   }
`;
