import styled from 'styled-components';

import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
   background: #0c0c0c;

   /* background: rgb(2, 31, 7);
   background: radial-gradient(circle, rgba(2, 31, 7, 1) 0%, rgba(0, 0, 0, 1) 77%); */

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 3rem;
   height: 68rem;
   position: relative;
   z-index: 1;

   :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
      z-index: 2;
   }
`;

export const HeroBg = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
`;

export const VideoBg = styled.video`
   width: 100%;
   height: 100%;
   --o-object-fit: cover;
   object-fit: cover;
   background: #232a34;
`;

export const HeroContent = styled.div`
   z-index: 3;
   max-width: 120rem;
   position: absolute;
   padding: 0.8rem 2.4rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const HeroH1 = styled.h1`
   color: #fafafa;
   font-size: 4.8rem;
   text-align: center;

   @media screen and (max-width: 768px) {
      font-size: 4rem;
   }

   @media screen and (max-width: 400px) {
      font-size: 3.2rem;
   }
`;

export const HeroP = styled.p`
   margin-top: 2.4rem;
   color: #fafafa;
   font-size: 2.4rem;
   text-align: center;
   max-width: 60rem;

   @media screen and (max-width: 768px) {
      font-size: 4rem;
   }

   @media screen and (max-width: 400px) {
      font-size: 3.2rem;
   }
`;

export const HeroBtnWrapper = styled.div`
   margin-top: 3.2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
   margin-left: 0.8rem;
   font-size: 2rem;
`;

export const ArrowRigth = styled(MdKeyboardArrowRight)`
   margin-left: 0.8rem;
   font-size: 2rem;
`;

export const HeroImg = styled.div`
   margin-bottom: 1rem;
   position: relative;
   width: 22rem;
   height: 25rem;
   border: 2px double #fafafa;
   background: inherit;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   /* border-radius: 50%; */
   border-bottom-left-radius: 33%;
   border-bottom-right-radius: 33%;

   border-top-left-radius: 33%;
   border-top-right-radius: 33%;

   /* &::after {
      content: '';
      width: 300px;
      height: 300px;
      background: inherit;
      position: absolute;
      box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.1);
      filter: blur(15px);
   } */
`;

export const Img = styled.img`
   width: 18rem;
   height: 20rem;
   /* border-radius: 50%; */
   border-bottom-left-radius: 33%;
   border-bottom-right-radius: 33%;

   border-top-left-radius: 33%;
   border-top-right-radius: 33%;
`;
