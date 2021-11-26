import { pageImages } from 'helpers/heroImages';

export const homeObjOne = {
   id: 'home',
   lightBg: false,
   lightText: true,
   lightTextDesc: true,
   topLine: 'Premium Bank',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Contácteme',
   imgStart: false,
   img: `${pageImages('./jeral.jpg').default}`,
   wallpaper: `${pageImages('./hero.jpg').default}`,
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
   buttonLabel: 'Descargar CV',
   pdf: `${require('assets/pdf/CV_Jeral_Pineda.pdf').default}`,
   imgStart: false,
   img: `${pageImages('./about1.jpg').default}`,
   alt: 'Computo',
   dark: true,
   primary: true,
   darkText: false,
};
