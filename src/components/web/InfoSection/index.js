import React from 'react';

import { Button } from 'components/ButtonElement';
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements';
import { homeObjOne } from './Data';
import { pageImages } from 'helpers/heroImages';

export const InfoSection = () => {
   const { lightBg, lightText, id, imgStart, topLine, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 } = homeObjOne;

   return (
      <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                  <Column1>
                     <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                           <Button
                              //
                              to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact={true}
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}
                           >
                              {buttonLabel}
                           </Button>
                        </BtnWrap>
                     </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrap>
                        <Img
                           //
                           src={pageImages(`./${img}.svg`).default}
                           alt={alt}
                        />
                     </ImgWrap>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </>
   );
};
