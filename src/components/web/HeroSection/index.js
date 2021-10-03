import React, { useState } from 'react';
import { ArrowForward, ArrowRigth, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroImg, HeroP, Img, VideoBg } from './HeroElements';
import Video from '../../../videos/video.mp4';
import image from '../../../images/deadpool.jpg';
import { Button } from 'components/ButtonElement';

export const HeroSection = () => {
   const [hover, setHover] = useState(false);

   const onHover = () => {
      setHover(!hover);
   };

   return (
      <HeroContainer>
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
         </HeroBg>

         <HeroContent>
            <HeroImg>
               <Img src={image} />
            </HeroImg>

            <HeroH1>Virtual Backing Made Easy</HeroH1>
            <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>

            <HeroBtnWrapper>
               <Button
                  //
                  to='signup'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
               >
                  Get started {hover ? <ArrowForward /> : <ArrowRigth />}
               </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   );
};
