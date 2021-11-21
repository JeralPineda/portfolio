import React from 'react';
import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from './ProjectsElements';

import Icon1 from 'assets/images/svg-1.svg';
import Icon2 from 'assets/images/svg-4.svg';
import Icon3 from 'assets/images/svg-3.svg';

export const Projects = () => {
   return (
      <ProjectsContainer id='projects'>
         <ProjectsH1>Our Projects</ProjectsH1>

         <ProjectsWrapper>
            <ProjectsCard>
               <ProjectsIcon src={Icon1} />
               <ProjectsH2>Reduce expenses</ProjectsH2>
               <ProjectsP>We help reduce your fess and increase your overall revenue.</ProjectsP>
            </ProjectsCard>

            <ProjectsCard>
               <ProjectsIcon src={Icon2} />
               <ProjectsH2>Virtual Offices</ProjectsH2>
               <ProjectsP>We help reduce your fess and increase your overall revenue.</ProjectsP>
            </ProjectsCard>

            <ProjectsCard>
               <ProjectsIcon src={Icon3} />
               <ProjectsH2>Premium Benefits</ProjectsH2>
               <ProjectsP>We help reduce your fess and increase your overall revenue.</ProjectsP>
            </ProjectsCard>
         </ProjectsWrapper>
      </ProjectsContainer>
   );
};
