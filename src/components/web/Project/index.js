import React from 'react';

import { CardList } from '../CardElements/CardList';
import { ProjectsContainer, ProjectsH1, ProjectsWrapper } from './ProjectsElements';

import img from 'assets/images/1.jpg';

export const Projects = () => {
   return (
      <ProjectsContainer id='projects' img={img}>
         <ProjectsH1>Proyectos</ProjectsH1>

         <ProjectsWrapper>
            <CardList />
         </ProjectsWrapper>
      </ProjectsContainer>
   );
};
