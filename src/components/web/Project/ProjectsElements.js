import styled from 'styled-components';

export const ProjectsContainer = styled.div`
   height: 800px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: ${({ img }) => (img ? `url(${img}) center/cover` : '#000')};
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

   @media screen and (max-width: 1000px) {
      height: 1000px;
   }
   @media screen and (max-width: 768px) {
      height: 1300px;
   }

   @media screen and (max-width: 480px) {
      height: 1400px;
   }
`;

export const ProjectsWrapper = styled.div`
   max-width: 1000px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   align-items: center;
   grid-gap: 1.6rem;
   padding: 0 50px;

   @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
   }
`;

export const ProjectsCard = styled.div`
   background: #0101;
   border: 1px solid #ccca;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-radius: 1rem;
   max-height: 340px;
   padding: 3rem;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
   transition: all 0.2s ease-in-out;

   &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
   }
`;

export const ProjectsIcon = styled.img`
   height: 160px;
   width: 160px;
   margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
   font-size: 2.5rem;
   color: #fafafa;
   margin-bottom: 64px;

   @media screen and (max-width: 480px) {
      font-size: 2rem;
   }
`;

export const ProjectsH2 = styled.h2`
   color: #fafafa;
   font-size: 1rem;
   margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
   color: #fafafa;
   font-size: 1rem;
   text-align: center;
`;
