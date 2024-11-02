import {Londrina_Sketch, Architects_Daughter, Bowlby_One_SC } from "next/font/google";


export const londsketch= Londrina_Sketch({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--londsketch',
  })
  
  export const archidaught= Architects_Daughter({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
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