import { pageImages } from 'helpers/heroImages';

export const homeObjOne = {
   id: 'home',
   lightBg: false,
   lightText: true,
   lightTextDesc: true,
   topLine: 'Hola, Soy',
   headLine: 'Jeral Cristoher Pineda Mejia',
   description: 'Desarrollador web FullStack, enfocado en desarrollar aplicaciones funcionales, atractivas e intuitivas.',
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
   headLine: 'Desarrollador FullStack',
   description: `Actualmente soy pasante de la carrera Informática Administrativa en la UNAH. Me gusta mucho el desarrollo web, aprender nuevas tecnologías y me gustaria aprender más sobre FrontEnd.
   `,
   buttonLabel: 'Descargar CV',
   pdf: `${require('assets/pdf/CV_Jeral_Pineda.pdf').default}`,
   imgStart: false,
   img: `${pageImages('./about1.jpg').default}`,
   alt: 'Computo',
   dark: true,
   primary: true,
   darkText: false,
};
