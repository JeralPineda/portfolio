import React from 'react';

import { ButtonLink } from 'components/ButtonElement';
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements';

export const InfoSection = ({ lightBg, lightText, id, imgStart, topLine, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, pdf }) => {
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
                           <ButtonLink
                              //
                              to={pdf}
                              target='_blank'
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
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </>
   );
};
