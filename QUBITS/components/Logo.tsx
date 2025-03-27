'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
export default function Logo() {
  return (
      <Link href="\">
    <motion.svg
      width="45"
      height="37"
      viewBox="0 0 45 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{
        scale: 1.2,
        rotate: 5,
        fill: "#4F46E5", // Aesthetic blue shade
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <path
        d="M44.3651 30.5447H45V27.7894C45 25.1128 42.7778 22.9085 40.0794 22.9085C37.9365 22.9085 36.0317 21.334 35.7143 19.2872C35.4762 18.0277 35.873 16.7681 36.6667 15.7447C37.4603 14.8 38.7302 14.2489 40 14.2489C42.7778 14.2489 45 12.0447 45 9.28937V6.53405H44.3651C40.1587 6.53405 36.5079 3.85745 35.1587 0H26.8254V9.05319C26.8254 11.1787 25.2381 13.0681 23.1746 13.383C22.8571 13.4617 22.5397 13.4617 22.3016 13.4617C20 13.3043 18.1746 11.4149 18.1746 9.13191V0H9.84127C8.49207 3.85745 4.84127 6.53405 0.634923 6.53405H0V9.28937C0 11.966 2.22222 14.1702 4.92063 14.1702C7.06349 14.1702 8.96825 15.7447 9.28571 17.7915C9.52381 19.0511 9.12698 20.3106 8.33333 21.334C7.53968 22.2787 6.26984 22.8298 5 22.8298C2.22222 22.8298 0 25.034 0 27.7106V30.466H0.634923C4.84127 30.466 8.49207 33.1426 9.84127 37H18.1746V27.9468C18.1746 25.8213 19.7619 23.9319 21.8254 23.617C22.0635 23.5383 22.381 23.5383 22.619 23.5383C25 23.6958 26.8254 25.5851 26.8254 27.8681V37H35.1587C36.4286 33.2213 40.1587 30.5447 44.3651 30.5447Z"
        fill="currentColor"
      />
    </motion.svg>
    </Link>
  );
}
