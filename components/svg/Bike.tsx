"use client";

import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";

type FramerAnimateProps =
  | boolean
  | VariantLabels
  | AnimationControls
  | TargetAndTransition
  | undefined;

type FramerInitialProps = boolean | VariantLabels | undefined;

type SVGProps = {
  width?: number;
  height?: number;
  initialPosition: any;
  initialAnimate: FramerAnimateProps;
  animate?: FramerAnimateProps;
};

export default function Bike({
  width = 87,
  height = 73,
  initialPosition,
  initialAnimate,
  animate,
}: SVGProps) {
  return (
    <motion.div
      initial={initialPosition}
      animate={initialAnimate}
      style={{ position: "absolute" }}
    >
      <motion.svg
        viewBox="0 0 87 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        animate={animate}
        drag
        dragSnapToOrigin
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileDrag={{ scale: 1.2 }}
      >
        <circle
          cx="17.2778"
          cy="41.734"
          r="12.6343"
          transform="rotate(10.5256 17.2778 41.734)"
          fill="#64C6FF"
        />
        <circle
          cx="70.7387"
          cy="53.5949"
          r="12.6343"
          transform="rotate(10.5256 70.7387 53.5949)"
          fill="#64C6FF"
        />
        <path
          d="M17.7895 41.8719L32.6429 21.7713M32.3491 4.49559L31.6117 8.46422C31.3807 9.70779 31.7514 10.9874 32.6115 11.9148L34.4661 13.9148C35.79 15.3423 35.8937 17.5157 34.7119 19.0628L32.6429 21.7713M32.6429 21.7713L61.8593 35.0722M32.6429 21.7713L49.9999 50.3358M61.8593 35.0722L71.2242 54.2793L49.9999 50.3358M61.8593 35.0722L49.9999 50.3358M61.8593 35.0722L69.5742 25.927M69.5742 25.927L63.7593 24.8466M69.5742 25.927L73.9353 26.7373"
          stroke="#F0B488"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
