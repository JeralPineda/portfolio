import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';

export const Footer = () => {
   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrapper>
                  <FooterLinkItems>
                     {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
                     <FooterLink
                        //
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={'true'}
                        offset={-80}
                     >
                        Contacto
                     </FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems>
                     {/* <FooterLinkTitle>Videos</FooterLinkTitle> */}
                     <FooterLink
                        //
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={'true'}
                        offset={-80}
                     >
                        Sobre mi
                     </FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>

               <FooterLinksWrapper>
                  <FooterLinkItems>
                     {/* <FooterLinkTitle>Contact Us</FooterLinkTitle> */}
                     <FooterLink //
                        to='skills'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={'true'}
                        offset={-80}
                     >
                        Habilidades
                     </FooterLink>
                  </FooterLinkItems>

                  <FooterLinkItems>
                     {/* <FooterLinkTitle>Social Media</FooterLinkTitle> */}
                     <FooterLink
                        //
                        to='skills'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={'true'}
                        offset={-80}
                     >
                        Proyectos
                     </FooterLink>
                  </FooterLinkItems>
               </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to='home' smooth={true} duration={500} spy={true} exact={'true'} offset={-80}>
                     Jeral Pineda
                  </SocialLogo>

                  <SocialIcons>
                     <SocialIconLink href='https://github.com/JeralPineda' target='_blank' aria-label='GitHub'>
                        <FaGithub />
                     </SocialIconLink>
                     <SocialIconLink href='https://twitter.com/jeral22800823' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                     </SocialIconLink>
                     <SocialIconLink href='https://www.linkedin.com/in/jeral-pineda-426759187/' target='_blank' aria-label='Linkedin'>
                        <FaLinkedin />
                     </SocialIconLink>
                  </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   );
};
