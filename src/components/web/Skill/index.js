import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { SkillContainer } from './SkillElements';
import { skills } from 'Data/skills';

export const Skill = () => {
   const [width, setWidth] = useState(window.innerWidth);

   const handleWidth = () => {
      setWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener('resize', handleWidth);
      return () => {
         window.removeEventListener('resize', handleWidth);
      };
   }, []);

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: width > 640 ? 4 : 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
   };

   return (
      <SkillContainer className='container' id='skills'>
         <h1 className='title'>Habilidades</h1>

         <Slider {...settings}>
            {skills.map((skill) => (
               <div className='slider' key={skill.id}>
                  <div className='slider-icon'>
                     <img
                        //
                        className='icon'
                        src={skill.icon}
                        alt={skill.title}
                     />
                  </div>
                  <h3 className='icon-title'>{skill.title}</h3>
               </div>
            ))}
         </Slider>
      </SkillContainer>
   );
};
