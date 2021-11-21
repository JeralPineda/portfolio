import styled from 'styled-components';
import { Link } from 'react-scroll';

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
