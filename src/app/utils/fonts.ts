import {Londrina_Sketch, Architects_Daughter, Bowlby_One_SC } from "next/font/google";
import localFont from "next/font/local";


export const londsketch= Londrina_Sketch({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--londsketch',
  })
  
  export const archidaught= localFont({
    src: [
      {
        path: '/assets/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.eof',
        weight: '400',
        style: 'normal',
      },
      {
        path: '/assets/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '/assets/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.woff',
        weight: '700',
        style: 'normal',
      },
      {
        path: '/assets/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.ttf',
        weight: '700',
        style: 'italic',
      },
      {
        path: '/assets/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.svg',
        weight: '400',
        style: 'normal',
      },
    ],
    display: 'swap',
    variable: '--archidaught',
  })

  export const bowlbySC= Bowlby_One_SC({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--bowlbySC',
  })

  export const londsketch_init = londsketch.variable;
  export const archidaught_init = archidaught.variable;
  export const bowlbySC_init = bowlbySC.variable;