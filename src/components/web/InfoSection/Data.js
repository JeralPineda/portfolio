import { pageImages } from 'helpers/heroImages';

// export const projects = [
//    {
//       id: 1,
//       linkGitHub: '',
//       linkDemo: '',
//       title: '',
//       descriptions: '',
//       image: '',
//    },
// ];

// export const skills = [
//    {
//       id: 1,
//       icon: '',
//       color: '',
//    },
// ];

export const homeObjOne = {
   id: 'about',
   lightBg: false,
   lightText: true,
   lightTextDesc: true,
   topLine: 'Premium Bank',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Get Started',
   imgStart: false,
   img: `${pageImages('./svg-5.svg').default}`,
   alt: 'Computo',
   dark: true,
   primary: true,
   darkText: false,
};

export const homeObjTwo = {
   id: 'discover',
   lightBg: true,
   lightText: false,
   lightTextDesc: false,
   topLine: 'Ultimated Access',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Piggybank',
   imgStart: true,
   img: `${pageImages('./svg-6.svg').default}`,
   alt: 'Computo',
   dark: false,
   primary: false,
   darkText: true,
};
export const homeObjThree = {
   id: 'signup',
   lightBg: true,
   lightText: false,
   lightTextDesc: false,
   topLine: 'Ultimated Access',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Piggybank',
   imgStart: true,
   img: `${pageImages('./svg-3.svg').default}`,
   alt: 'Computo',
   dark: false,
   primary: false,
   darkText: true,
};
