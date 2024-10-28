import {Londrina_Sketch, Architects_Daughter, Bowlby_One_SC } from "next/font/google";


export const londsketch_init= Londrina_Sketch({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-londsketch',
  })
  
  export const archidaught_init= Architects_Daughter({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-archidaught',
  })

  export const bowlbySC_init= Bowlby_One_SC({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bowlbySC',
  })

  export const londsketch = londsketch_init.variable;
  export const archidaught = archidaught_init.variable;
  export const bowlbySC = bowlbySC_init.variable;