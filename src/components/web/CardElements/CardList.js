import React from 'react';

import { projects } from 'Data/projects';
import { Card } from '../CardElements';

export const CardList = () => {
   return (
      <>
         {projects.map((project) => (
            <Card
               //
               key={project.id}
               subtitle={project.subtitle}
               title={project.title}
               descriptions={project.descriptions}
               linkGitHub={project.linkGitHub}
               linkDemo={project.linkDemo}
               img={project.img}
            />
         ))}
      </>
   );
};
