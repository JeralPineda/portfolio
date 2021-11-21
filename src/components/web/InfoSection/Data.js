import { pageImages } from 'helpers/heroImages';

export const homeObjOne = {
   id: '',
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
   id: 'about',
   lightBg: false,
   lightText: true,
   lightTextDesc: true,
   topLine: 'Sobre mi',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Piggybank',
   imgStart: true,
   img: `${pageImages('./svg-5.svg').default}`,
   alt: 'Computo',
   dark: true,
   primary: true,
   darkText: false,
};

export const homeObjThree = {
   id: 'skills',
   lightBg: true,
   lightText: false,
   lightTextDesc: false,
   topLine: 'Habilidades',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Piggybank',
   imgStart: false,
   img: `${pageImages('./svg-3.svg').default}`,
   alt: 'Computo',
   dark: false,
   primary: false,
   darkText: true,
};
