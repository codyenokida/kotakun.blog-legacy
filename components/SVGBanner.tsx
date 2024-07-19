import styles from "./SVGBanner.module.scss";

import Asteroid from "@/components/svg/Asteroid";
import GreenMatter from "@/components/svg/GreenMatter";
import YellowStar from "@/components/svg/YellowStar";
import PurpleMatter from "@/components/svg/PurpleMatter";
import Surfboard from "@/components/svg/Surfboard";
import Earth from "@/components/svg/Earth";
import PinkMatter from "@/components/svg/PinkMatter";
import StrawHat from "@/components/svg/StrawHat";

export default function SVGBanner() {
  /** MOBILE RENDERS */
  const renderMobileYellowStar = () => {
    return (
      <>
        <YellowStar
          initialAnimate={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 0,
            y: 10,
            scale: 0.1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 80, 150, 220, 360],
            scale: [0.9, 1.1, 0.9, 1.1, 0.9],
            transition: {
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              repeatDelay: 1,
            },
          }}
        />
      </>
    );
  };

  const renderMobileEarth = () => {
    return (
      <>
        <Earth
          width={48}
          height={48}
          initialAnimate={{
            x: 72,
            y: -10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.2,
            },
          }}
          initialPosition={{
            x: 72,
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            x: [0, 2, 0],
            y: [0, 10, 0],
            transition: {
              duration: 24,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderMobileGreenMatter = () => {
    return (
      <>
        <GreenMatter
          initialAnimate={{
            x: 142,
            y: 6,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 142,
            y: 10,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 90, 160, 240, 360],
            // scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            x: [0, 2, 0],
            y: [0, 6, 0],
            transition: {
              duration: 9,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "anticipate",
            },
          }}
        />
      </>
    );
  };

  const renderMobileStrawHat = () => {
    return (
      <>
        <StrawHat
          initialAnimate={{
            x: 190,
            y: -10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.6,
            },
          }}
          initialPosition={{
            x: 190,
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 5, 0],
            x: [0, 2, 0],
            y: [0, 5, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderMobilePinkMatter = () => {
    return (
      <>
        <PinkMatter
          initialAnimate={{
            x: 300,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.8,
            },
          }}
          initialPosition={{
            x: 260,
            y: 0,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, -30, 0],
            scale: [0.9, 0.85, 0.9],
            x: [0, 2, 0],
            y: [0, 12, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  /** DESKTOP RENDERS */

  const renderYellowStar = () => {
    return (
      <>
        <YellowStar
          initialAnimate={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 0,
            y: 10,
            scale: 0.1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 80, 150, 220, 360],
            scale: [0.9, 1.1, 0.9, 1.1, 0.9],
            transition: {
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              repeatDelay: 1,
            },
          }}
        />
        <YellowStar
          width={32}
          height={32}
          initialAnimate={{
            x: 460,
            y: 10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 460,
            y: 15,
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 14,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              repeatDelay: 2,
            },
          }}
        />
        <YellowStar
          width={38}
          height={38}
          initialAnimate={{
            x: 800,
            y: 10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 800,
            y: 10,
            scale: 1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.9, 1.1, 0.8, 1.1, 0.9],
            transition: {
              duration: 14,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderEarth = () => {
    return (
      <>
        <Earth
          width={48}
          height={48}
          initialAnimate={{
            x: 72,
            y: -10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.2,
            },
          }}
          initialPosition={{
            x: 72,
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            x: [0, 2, 0],
            y: [0, 10, 0],
            transition: {
              duration: 24,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderStrawHat = () => {
    return (
      <>
        <StrawHat
          initialAnimate={{
            x: 190,
            y: -10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.6,
            },
          }}
          initialPosition={{
            x: 190,
            y: 0,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 5, 0],
            x: [0, 2, 0],
            y: [0, 5, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderGreenMatter = () => {
    return (
      <>
        <GreenMatter
          initialAnimate={{
            x: 142,
            y: 6,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 142,
            y: 10,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 90, 160, 240, 360],
            // scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            x: [0, 2, 0],
            y: [0, 6, 0],
            transition: {
              duration: 9,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "anticipate",
            },
          }}
        />
      </>
    );
  };

  const renderAsteroid = () => {
    return (
      <>
        <Asteroid
          width={70}
          height={63}
          initialAnimate={{
            x: 360,
            y: -8,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.9,
            },
          }}
          initialPosition={{
            x: 360,
            y: 0,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 30, 0],
            // scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            x: [0, 0, 0],
            y: [0, 10, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderPurpleMatter = () => {
    return (
      <>
        <PurpleMatter
          width={64}
          height={64}
          initialAnimate={{
            x: 520,
            y: -6,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.6,
            },
          }}
          initialPosition={{
            x: 520,
            y: 0,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 30, 0],
            x: [0, 2, 0],
            y: [0, 12, 0],
            transition: {
              duration: 28,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderPinkMatter = () => {
    return (
      <>
        <PinkMatter
          initialAnimate={{
            x: 306,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.8,
            },
          }}
          initialPosition={{
            x: 306,
            y: 10,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, -30, 0],
            scale: [0.9, 0.85, 0.9],
            x: [0, 2, 0],
            y: [0, 12, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <PinkMatter
          initialAnimate={{
            x: 700,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.2,
            },
          }}
          initialPosition={{
            x: 700,
            y: 10,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 12, 0],
            scale: [0.9, 0.8, 0.9],
            x: [0, 2, 0],
            y: [0, 8, 0],
            transition: {
              duration: 14,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "backInOut",
            },
          }}
        />
      </>
    );
  };

  const renderSurfBoard = () => {
    return (
      <>
        <Surfboard
          width={60}
          height={80}
          initialAnimate={{
            x: 600,
            y: -10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 600,
            y: 0,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 5, 0],
            x: [0, -2, 0],
            y: [0, 5, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.banner}>
      <div className={styles.canvas}>
        {renderYellowStar()}
        {renderGreenMatter()}
        {renderPinkMatter()}
        {renderEarth()}
        {renderStrawHat()}
        {renderAsteroid()}
        {renderPurpleMatter()}
        {renderSurfBoard()}
      </div>

      <div className={styles.mobileCanvas}>
        {renderMobileYellowStar()}
        {renderMobileGreenMatter()}
        {renderMobilePinkMatter()}
        {renderMobileEarth()}
        {renderMobileStrawHat()}
      </div>
    </div>
  );
}
