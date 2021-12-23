import styled from 'styled-components';

export const InfoContainer = styled.div`
   color: #fafafa;
   background: ${({ lightBg }) => (lightBg ? '#fafafa' : '#000')};

   @media screen and (max-width: 768px) {
      padding: 10rem 0;
   }
`;

export const InfoWrapper = styled.div`
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

export const InfoRow = styled.div`
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

export const Heading = styled.h1`
   margin-bottom: 2.4rem;
   font-size: 4.8rem;
   line-height: 1.1;
   font-weight: 600;
   color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

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
   max-width: 40rem;
   height: 100%;
   position: relative;
   background: linear-gradient(to right, #020323, #151a77);

   padding: 2px 2px 1px 2px;
   border-radius: 30px;
`;

export const Img = styled.img`
   width: 100%;
   border-radius: 30px;

   box-shadow: 2px -1px 209px 8px #262756;
   -webkit-box-shadow: 2px -1px 209px 8px #262756;
   -moz-box-shadow: 2px -1px 209px 8px #262756;
`;
