import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
   color: #fafafa;
   background: ${({ wallpaper }) => (wallpaper ? `url(${wallpaper}) center/cover` : '#000')};
   position: relative;
   z-index: 1;
   overflow: hidden;
   animation: hue 10s infinite alternate;

   &::after {
      content: '';
      width: 100%;
      height: 100%;
      background: inherit;
      position: absolute;
      top: 0;
      left: 0;
      filter: blur(2rem);
      z-index: -1;
      transform: scale(1.15);
   }

   @media screen and (max-width: 768px) {
      padding: 10rem 0;
   }

   @keyframes hue {
      from {
         filter: hue-rotate(15deg);
      }
      /* to {
         filter: hue-rotate(360deg);
      } */
   }
`;

export const HeroWrapper = styled.div`
   display: grid;
   z-index: 1;
   height: 860px;
   width: 100%;
   max-width: 1100px;
   margin-left: auto;
   margin-right: auto;
   padding: 0 2.4rem;
   justify-content: center;
`;

export const HeroRow = styled.div`
   display: grid;
   grid-template-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

   @media screen and (max-width: 768px) {
      grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
   }
`;

export const Column1 = styled.div`
   margin-bottom: 1.5rem;
   padding: 0 1.5rem;
   grid-area: col1;
`;

export const Column2 = styled.div`
   margin-bottom: 1.5rem;
   padding: 0 1.5rem;
   grid-area: col2;
`;

export const TextWrapper = styled.div`
   max-width: 54rem;
   padding-top: 0;
   padding-bottom: 6rem;
`;

export const TopLine = styled.p`
   color: #ccca;
   font-size: 1.6rem;
   line-height: 1.6rem;
   font-weight: 700;
   letter-spacing: 0.14rem;
   text-transform: uppercase;
   margin-bottom: 1.6rem;
`;

/* efecto maquina de escribir */
const typing = keyframes`
    from {
         width: 0;
      }
`;

const blink = keyframes`
    50% {
         border-color: transparent;
      }
`;

export const Heading = styled.h1`
   margin-bottom: 2.4rem;
   font-size: 4.8rem;
   line-height: 1.1;
   font-weight: 600;
   color: #fafafa;

   /* efecto maquina de escribir */
   border-right: 4px solid;
   display: block;
   white-space: nowrap;
   width: 9ch;
   animation: ${typing} 2s steps(14), ${blink} 0.5s infinite step-end alternate;
   overflow: hidden;

   @media screen and (max-width: 480px) {
      font-size: 3.2rem;
   }
`;

export const Subtitle = styled.p`
   max-width: 44rem;
   margin-bottom: 3.5rem;

   font-size: 1.8rem;
   line-height: 2.4rem;
   color: ${({ darkText }) => (darkText ? '#010606' : '#fafafa')};
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`;

export const ImgWrap = styled.div`
   width: 40rem;
   height: 40rem;
   border: 2px double #fafafa;
   background: inherit;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;

   border-radius: 50%;

   @media screen and (max-width: 480px) {
      width: 30rem;
      height: 30rem;
   }

   @media screen and (max-width: 400px) {
      width: 25rem;
      height: 25rem;
   }
   @media screen and (max-width: 310px) {
      width: 21rem;
      height: 21rem;
   }
`;

export const Img = styled.img`
   width: 100%;
   border-radius: 50%;
   padding: 1rem;
   /* filter: brightness(70%); */
`;
