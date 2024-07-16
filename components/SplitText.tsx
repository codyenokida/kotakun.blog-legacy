import { useCallback, useEffect, useState } from "react";
import styles from "./SplitText.module.scss";
import { motion, useAnimate, stagger } from "framer-motion";
// const SplitText = ({ children, delay = 20 }: any) => {
//   return (
//     <span aria-label={children} role="heading" aria-level={2}>
//       {children.split("").map(function (char: string, index: number) {
//         let style = { animationDelay: 0.1 + index / delay + "s" };
//         return (
//           <span
//             aria-hidden="true"
//             key={index}
//             style={style}
//             className={styles.span}
//           >
//             {char}
//           </span>
//         );
//       })}
//     </span>
//   );
// };

const SplitText = ({ children, delay = 20 }: any) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.span style={{ display: "flex" }}>
      {children.split("").map(function (char: string, index: number) {
        let delay = 0.1 + index / 20;
        return (
          <motion.span
            variants={container}
            aria-hidden="true"
            key={index}
            // style={style}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: [10, 0, 0, 0, 10],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: delay,
              times: [0, 0.2, 0.5, 0.8, 1],
              ease: "backInOut",
              // staggerChildren: 2,
              delayChildren: 2 - index / 10,
              // repeat: 0,
              // repeatType: "reverse",
              // repeatDelay: 5,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

const CharacterFadeAnimation = ({
  text,
  hover,
}: {
  text: string;
  hover: boolean;
}) => {
  const characters = Array.from(text);
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false);

  const animateSequence = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Fade up
    await animate(
      "span",
      { opacity: 1, y: 0 },
      {
        duration: 0.1,
        damping: 200,
        stiffness: 10,
        ease: "easeIn",
        delay: stagger(0.1),
      }
    );

    // Wait for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Fade down in reverse order
    await animate(
      "span",
      { opacity: 0, y: 20 },
      {
        duration: 0.1,
        damping: 0.2,
        stiffness: 20,
        ease: "easeIn",
        delay: stagger(0.1, { from: characters.length - 1 }),
      }
    );
    setIsAnimating(false);
  }, [animate, characters.length, isAnimating]);

  useEffect(() => {
    animateSequence();
  }, [animateSequence]);

  const handleHover = () => {
    animateSequence();
  };

  useEffect(() => {
    if (hover) {
      handleHover();
    }
  }, [hover]);

  return (
    <>
      <motion.div
        ref={scope}
        style={{ display: "flex", overflow: "hidden", cursor: "pointer" }}
        // onMouseEnter={handleHover}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export { CharacterFadeAnimation };

export default SplitText;
