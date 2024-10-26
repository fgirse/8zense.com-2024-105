import {Londrina_Sketch, Architects_Daughter, Londrina_Outline } from "next/font/google";


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

  export const londsketch = londsketch_init.variable;
  export const archidaught = archidaught_init.variable;