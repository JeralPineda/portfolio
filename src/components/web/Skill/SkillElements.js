import styled from 'styled-components';

export const SkillContainer = styled.div`
   background: #000;
   height: 700px;
   align-items: center;
   position: relative;
   z-index: 1;
   padding: 1rem 3rem;
   overflow: hidden;
   animation: hue 10s infinite alternate;

   .container {
      @media screen and (max-width: 1000px) {
         height: 1000px;
      }
      @media screen and (max-width: 768px) {
         height: 1300px;
      }

      @media screen and (max-width: 480px) {
         height: 1400px;
      }
   }

   .title {
      text-align: center;
      font-size: 2.5rem;
      color: #fafafa;
      margin-top: 15rem;
      margin-bottom: 6.5rem;

      @media screen and (max-width: 480px) {
         font-size: 2rem;
      }
   }

   .slider {
      padding: 2rem;
      opacity: 0.5;

      &:hover {
         opacity: 1;
      }
   }
   .slider-icon {
      display: flex;
      justify-content: center;
   }

   .icon {
      max-width: 100px;
      max-height: 100px;
      margin-bottom: 0.5rem;
   }

   .icon-title {
      font-size: 2rem;
      text-align: center;
      color: #fafafa;
   }

   .slick-slider {
      button {
         display: none !important;
      }
   }

   @media screen and (max-width: 598px) {
      height: 550px;
      .slider {
         padding: 1rem;
      }
      .icon {
         max-width: 50px;
         max-height: 50px;
         /* margin-bottom: 0.5rem; */
      }
      .icon-title {
         font-size: 1rem;
      }
   }
`;
