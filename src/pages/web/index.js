import React, { useState } from 'react';

import { Sidebar } from 'components/web/Sidebar';
import { Navbar } from 'components/web/Navbar';
import { HeroSection } from 'components/web/HeroSection';
import { InfoSection } from 'components/web/InfoSection';

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
         <InfoSection />
      </>
   );
};
