import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';

export const Footer = () => {
   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>About Us</FooterLinkTitle>
                     <FooterLink to='/'>About us</FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems>
                     <FooterLinkTitle>Videos</FooterLinkTitle>
                     <FooterLink to='/'>Submit Video</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>

               <FooterLinksWrapper>
                  <FooterLinkItems>
                     <FooterLinkTitle>Contact Us</FooterLinkTitle>
                     <FooterLink to='/'>Contact</FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems>
                     <FooterLinkTitle>Social Media</FooterLinkTitle>
                     <FooterLink to='/'>Instagram</FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to='/'>Jeral Pineda</SocialLogo>

                  <SocialIcons>
                     <SocialIconLink to='https://github.com/JeralPineda' target='_blank' aria-label='GitHub'>
                        <FaGithub />
                     </SocialIconLink>
                     <SocialIconLink to='https://twitter.com/jeral22800823' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                     </SocialIconLink>
                     <SocialIconLink to='https://es.linkedin.com/' target='_blank' aria-label='Linkedin'>
                        <FaLinkedinIn />
                     </SocialIconLink>
                  </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   );
};
