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

export default function Paddle({
  width = 67,
  height = 65,
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
        viewBox="0 0 67 65"
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
        <rect
          x="11.2168"
          y="57.2363"
          width="22.8025"
          height="9.93955"
          transform="rotate(-55.995 11.2168 57.2363)"
          fill="#DFA786"
        />
        <circle
          cx="36.1998"
          cy="28.841"
          r="23.6795"
          transform="rotate(-14.4537 36.1998 28.841)"
          fill="#FF6954"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.2329 50.7324C55.9931 46.3082 62.1158 34.5152 59.1297 22.9301C55.8655 10.2662 42.9532 2.64621 30.2893 5.9104C19.7197 8.63476 12.6638 18.0799 12.5167 28.492L45.2329 50.7324ZM31.7499 52.1038C25.3853 50.8819 19.716 47.0716 16.2028 41.535L31.7499 52.1038Z"
          fill="#C63C22"
        />
      </motion.svg>
    </motion.div>
  );
}
