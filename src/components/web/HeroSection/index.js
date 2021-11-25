import React from 'react';

import { BtnWrap, Column1, Column2, Heading, HeroContainer, HeroRow, HeroWrapper, Img, ImgWrap, Subtitle, TextWrapper, TopLine } from './HeroElements';
import { ButtonLink } from 'components/ButtonElement';

export const HeroSection = ({ lightText, imgStart, topLine, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, wallpaper }) => {
   const handleClick = () => {
      window.open('mailto:jeral.cris@gmail.com');
   };

   return (
      <HeroContainer wallpaper={wallpaper}>
         <HeroWrapper>
            <HeroRow imgStart={imgStart}>
               <Column1>
                  <TextWrapper>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{headLine}</Heading>
                     <Subtitle darkText={darkText}>{description}</Subtitle>
                     <BtnWrap>
                        <ButtonLink
                           //
                           to='/'
                           target='_blank'
                           onClick={handleClick}
                           primary={primary ? 1 : 0}
                           dark={dark ? 1 : 0}
                           dark2={dark2 ? 1 : 0}
                        >
                           {buttonLabel}
                        </ButtonLink>
                     </BtnWrap>
                  </TextWrapper>
               </Column1>
               <Column2>
                  <ImgWrap>
                     <Img
                        //
                        src={img}
                        alt={alt}
                     />
                  </ImgWrap>
               </Column2>
            </HeroRow>
         </HeroWrapper>
      </HeroContainer>
   );
};
