"use client";

import {
  motion,
  AnimationControls,
  VariantLabels,
  TargetAndTransition,
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

export default function GreenMatter({
  width = 32,
  height = 32,
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
        viewBox="0 0 26 26"
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
        <path
          d="M17.6198 4.18438C18.3428 5.80956 19.6302 7.11776 21.2435 7.86681C25.415 9.80357 25.3672 15.7506 21.1651 17.62C19.5399 18.343 18.2317 19.6303 17.4826 21.2436C15.5459 25.4151 9.59889 25.3673 7.72947 21.1652C7.00646 19.54 5.71914 18.2318 4.1058 17.4828C-0.0656931 15.546 -0.0178673 9.59904 4.18423 7.72962C5.80941 7.00661 7.11761 5.71928 7.86666 4.10594C9.80342 -0.0655461 15.7504 -0.0177211 17.6198 4.18438Z"
          fill="#9BE579"
        />
      </motion.svg>
    </motion.div>
  );
}
