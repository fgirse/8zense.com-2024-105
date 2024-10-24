"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";



const ShuffleHero = () => {
  return (
    <section className="bg-slate-800 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    randomIndex = Math.floor(Math.random() * currentIndex);
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/assets/images/Puppy_primo.jpeg",
  },
  {
    id: 2,
    src: "/assets/images/Puppy_secundo.jpeg",
  },
  {
    id: 3,
    src: "/assets/images/Puppy_tertio.jpeg",
  },
  {
    id: 4,
    src: "/assets/images/Puppy_quatro.jpeg",
  },
  {
    id: 5,
    src: "/assets/images/impressionen01.jpeg",
  },
  {
    id: 8,
    src: "/assets/images/Kica05.jpeg",
  },
  {
    id: 9,
    src: "/assets/images/impressionen03.jpeg",
  },
  {
    id: 10,
    src: "/assets/images/impressionen04.jpeg",
  },
  {       
    id: 11,
    src: "/assets/images/impressionen05.jpeg",
  },
  {
    id: 12,
    src: "/assets/images/impressionen06.jpeg",
  },
  {
    id: 13,
    src: "/assets/images/impressionen07.jpeg",
  },
  {
    id: 14,
    src: "/assets/images/impressionen08.jpeg",
  },
  {
    id: 15,
    src: "/assets/images/impressionen09.jpeg",
  },
  {
    id: 16,
    src: "/assets/images/impressionen10.jpeg",
  },
  {
    id: 17,
    src: "/assets/images/impressionen11.jpeg",
  },
  {
    id: 18,
    src: "/assets/images/impressionen12.jpeg",
  },{/*}
  {
    id: 19,
    src: "/assets/images/impressionen12.jpeg",
  },{
    id: 18,
    src: "/assets/images/impressionen12.jpeg",
  },*/}
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;