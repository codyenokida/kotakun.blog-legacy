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

export default function StrawHat({
  width = 112,
  height = 63,
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
        viewBox="0 0 112 63"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.4412 36.8442C84.4684 36.7377 84.4941 36.6306 84.5184 36.5229C86.8243 26.3184 75.4044 15.0431 59.0114 11.3389C42.6184 7.63473 27.46 12.9043 25.1542 23.1088C25.1081 23.3129 25.0674 23.5174 25.0322 23.7223C12.1213 22.9329 3.33183 24.3415 2.50964 27.9801C1.12424 34.1112 22.8846 44.2523 51.1128 50.6308C79.341 57.0093 103.347 57.2098 104.733 51.0787C105.595 47.2626 97.4908 41.8931 84.4412 36.8442Z"
          fill="#F5BC4E"
        />
        <path
          d="M81.198 37.8752C67.7866 32.2363 69.5267 32.6612 53.8077 29.1093C38.0888 25.5574 44.3077 27.7782 26.1365 26.4702C34.9948 18.5597 39.0981 21.0905 54.8171 24.6424C67.2676 27.4557 74.5324 28.2055 78.9902 33.2031C80.1605 34.5151 80.1956 35.8047 81.198 37.8752Z"
          fill="#AC2E3C"
        />
        <ellipse
          cx="53.609"
          cy="39.5717"
          rx="52.4002"
          ry="11.3369"
          transform="rotate(12.7328 53.609 39.5717)"
          fill="#ECBF69"
        />
        <ellipse
          cx="51.8173"
          cy="38.9075"
          rx="22.3793"
          ry="4.12923"
          transform="rotate(12.7328 51.8173 38.9075)"
          fill="black"
        />
        <path
          d="M68.9512 23.8872L71.76 30.7262"
          stroke="#473617"
          strokeLinecap="round"
        />
        <path
          d="M66.8574 26.5464L74.027 24.7412"
          stroke="#473617"
          strokeLinecap="round"
        />
        <path
          d="M68.8848 29.1582L76.0543 27.353"
          stroke="#473617"
          strokeLinecap="round"
        />
        <path
          d="M71.8516 23.3105L74.6603 30.1496"
          stroke="#473617"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}
