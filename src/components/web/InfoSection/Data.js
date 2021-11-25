import { pageImages } from 'helpers/heroImages';

export const homeObjOne = {
   id: '',
   lightBg: false,
   lightText: true,
   lightTextDesc: true,
   topLine: 'Premium Bank',
   headLine: 'Unlimited Transactions with zero fees',
   description: 'Get access to our exclusive app that allows you to send unlimited trabsactions without getting charged any fees.',
   buttonLabel: 'Contácteme',
   imgStart: false,
   img: `${pageImages('./jeral.jpg').default}`,
   wallpaper: `${pageImages('./test.jpg').default}`,
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
   pdf: `${require('assets/pdf/CV_Sneyder_Barreto_ES.pdf').default}`,
   imgStart: false,
   img: `${pageImages('./deadpool.jpg').default}`,
   alt: 'Computo',
   dark: true,
   primary: true,
   darkText: false,
};
