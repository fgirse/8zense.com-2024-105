import {Annie_Use_Your_Telescope, Caveat, Architects_Daughter, Bowlby_One_SC} from "next/font/google";
import localFont from "next/font/local";

export const annieuseyourTelescope= localFont({
    src: [
      {
        path: "/fonts/annie-Use_Your-Telescope/annieuseyourtelescope-regular-webfont.svg",
        weight: '400',
        style: 'normal',
      },
      {
        path: '/fonts/annie-use-your-telescope/annieuseyourtelescope-regular-webfont.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '/fonts/annie-use-your-telescope/annieuseyourtelescope-regular-webfont.woff',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '/fonts/annie-use-your-telescope/annieuseyourtelescope/annieuseyourtelescope-regular-webfont.ttf',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '/fonts/annie-use-your-telescope/generator_config.txt',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '/fonts/annie-use-your-telescope/annieuseyourtelescope-regular-webfont.woff2',
        weight: '400',
        style: 'normal',
      },
    ],
    display: 'swap',
    variable: '--annieuseyourTelescope',
  })


  export const architectsDaughter= localFont({
    src: [
      {
        path: "/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.svg",
        weight: '400',
        style: 'normal',
      },
      {
        path: '/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '@/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regularwoff',
        weight: '400',
        style: 'normal',
      },
      {
        path: '/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.woff2',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '/fonts/ArchitectsDaughter/generator_config.txt',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '/fonts/ArchitectsDaughter/architects-daughter-v17-latin-regular.eot',
        weight: '400',
        style: 'normal',
      },
    ],
    display: 'swap',
    variable: '--archiDaught',
  })

  export const bowlbySC= Bowlby_One_SC({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--bowlbySC',
  })

  export const caveat = Caveat({
    weight: ['700',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--caveat',
  })
