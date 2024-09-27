"use client";

import React from "react";
import { useLottie } from "lottie-react";
import lottiCallToActAnimation from "@/public/assets/images/arrow06.svg";
import Lottie from "lottie-react";

const LottiCallToAct = () => (
  <Lottie
    className="bg-neutral-700"
    animationData={lottiCallToActAnimation}
    loop={false}
  />
);

export default LottiCallToAct;
