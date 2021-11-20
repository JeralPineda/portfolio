import React, { useState } from 'react';

import { Sidebar } from 'components/web/Sidebar';
import { Navbar } from 'components/web/Navbar';
import { HeroSection } from 'components/web/HeroSection';
import { InfoSection } from 'components/web/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from 'components/web/InfoSection/Data';
import { Services } from 'components/web/Services';

export const Home = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Services />
         <InfoSection {...homeObjThree} />
      </>
   );
};
