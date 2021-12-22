// import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import React from 'react';

import { CardButtonLink, CardContainer } from './CardElements';

export const Card = ({ title, subtitle, descriptions, linkGitHub, linkDemo, img }) => {
   const handleClick = (url) => {
      window.open(`${url}`);
   };

   return (
      <CardContainer className='card-list'>
         <div className='container-gradient'>
            <article className='card'>
               <figure className='card-image'>
                  <img src={img} alt='project' />
               </figure>
               <div className='card-header'>
                  <h2>{title}</h2>
                  <div className='container-icon'>
                     <CardButtonLink
                        //
                        to='/'
                        onClick={() => handleClick(linkGitHub)}
                     >
                        Codigo
                     </CardButtonLink>
                     <CardButtonLink
                        //
                        to='/'
                        onClick={() => handleClick(linkDemo)}
                     >
                        Demo
                     </CardButtonLink>
                  </div>
               </div>
               <div className='card-footer'>
                  <div className='card-meta_views'>{descriptions}</div>
                  <div className='card-meta_date'>{subtitle}</div>
               </div>
            </article>
         </div>
      </CardContainer>
   );
};
