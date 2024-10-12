import React from 'react';
import Image from 'next/image';
import Pets from '@/public/assets/images/g2078.png';

const Banner = () => {
  return (
    <div className="w-full mt-3">
        <Image src={Pets} width="1200"  height="300" alt="Pets in Guppe"/>
    </div>
  )
}
export default Banner