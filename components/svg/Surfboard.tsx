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

export default function Surfboard({
  width = 122,
  height = 174,
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
        viewBox="0 0 122 174"
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
          d="M61.819 44.4133L12.9723 131.493C10.1196 136.579 16.2738 141.929 20.913 138.396C28.3975 132.698 39.0735 138.686 38.1121 148.044C37.5161 153.845 45.29 156.307 48.1427 151.222L96.9894 64.1418C99.5669 59.547 100.889 54.3544 100.822 49.0865L100.524 25.4759C100.476 21.6282 96.2812 19.2752 92.9724 21.2396L72.6686 33.2939C68.1385 35.9834 64.3965 39.8185 61.819 44.4133Z"
          fill="#BCE0B0"
        />
        <mask
          id="mask0_730_1275"
          maskUnits="userSpaceOnUse"
          x="23"
          y="7"
          width="86"
          height="143"
        >
          <rect
            x="100.195"
            y="7.69775"
            width="9.30596"
            height="157.092"
            transform="rotate(29.2899 100.195 7.69775)"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_730_1275)">
          <path
            d="M61.8584 44.3361L13.0047 131.429C10.152 136.514 16.3064 141.864 20.9455 138.332C28.43 132.632 39.1065 138.621 38.1446 147.979C37.5484 153.78 45.3224 156.243 48.1751 151.157L97.0288 64.0647C99.606 59.4703 100.928 54.2783 100.862 49.0109L100.565 25.3969C100.517 21.549 96.3216 19.1958 93.0127 21.1605L72.7066 33.2175C68.1771 35.907 64.4356 39.7418 61.8584 44.3361Z"
            fill="#85C170"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
