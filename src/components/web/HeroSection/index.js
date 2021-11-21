import React from 'react';

import { BtnWrap, Column1, Column2, Heading, HeroContainer, HeroRow, HeroWrapper, Img, ImgWrap, Subtitle, TextWrapper, TopLine } from './HeroElements';
import { Button } from 'components/ButtonElement';

import image from 'assets/images/jeral.jpg';
import wallpaper from 'assets/images/px.jpg';

export const HeroSection = ({ primary, dark, dark2 }) => {
   return (
      <HeroContainer wallpaper={wallpaper}>
         <HeroWrapper>
            <HeroRow>
               <Column1>
                  <TextWrapper>
                     <TopLine>Ultimated Access</TopLine>
                     <Heading>Unlimited Transactions with zero fees</Heading>
                     <Subtitle>Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.</Subtitle>
                     <BtnWrap>
                        <Button
                           //
                           to='home'
                           primary={primary ? 1 : 0}
                           dark={dark ? 1 : 0}
                           dark2={dark2 ? 1 : 0}
                        >
                           Contactame
                        </Button>
                     </BtnWrap>
                  </TextWrapper>
               </Column1>
               <Column2>
                  <ImgWrap>
                     <Img
                        //
                        src={image}
                        alt='imagen'
                     />
                  </ImgWrap>
               </Column2>
            </HeroRow>
         </HeroWrapper>
      </HeroContainer>
   );
};
