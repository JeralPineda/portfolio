import React, { useState } from 'react';

import { Sidebar } from 'components/web/Sidebar';
import { Navbar } from 'components/web/Navbar';
import { HeroSection } from 'components/web/HeroSection';
import { InfoSection } from 'components/web/InfoSection';
import { homeObjOne, homeObjTwo } from 'components/web/InfoSection/Data';
import { Projects } from 'components/web/Project';
import { Footer } from 'components/web/Footer';
import { Skill } from 'components/web/Skill';

export const Home = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Skill />
         <Projects />
         <Footer />
      </>
   );
};
