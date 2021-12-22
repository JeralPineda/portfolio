import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
   border-radius: 1.1rem;
   background: ${({ primary }) => (primary ? '#590271' : '#010606')};
   white-space: nowrap;
   padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
   color: ${({ dark }) => (dark ? '#fafafa' : '#fafafa')};
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-out ease-out;

   background: rgb(0, 0, 0);
   background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(16, 1, 23, 1) 0%, rgba(30, 2, 40, 1) 26%, rgba(89, 2, 113, 1) 100%);
   border: ${({ primary }) => (primary ? '1px solid #ccc' : '1px solid #ccc')};

   &:hover {
      background: ${({ primary }) => (primary ? '#111' : '#111')};
   }
`;

export const ButtonLink = styled(LinkR)`
   background: ${({ primary }) => (primary ? '#000' : '#010606')};
   border-radius: 1.1rem;
   white-space: nowrap;
   padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
   color: ${({ dark }) => (dark ? '#fafafa' : '#fafafa')};
   font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   text-decoration: none;
   position: relative;
   transition: background 0.2s ease-out;

   border: ${({ primary }) => (primary ? '2px solid #ccc' : '1px solid #ccc')};

   &:hover {
      background: linear-gradient(#000, #000) padding-box, linear-gradient(to right, #743ad5, #d53a9d) border-box;
      border: 2px solid transparent;
   }
`;
