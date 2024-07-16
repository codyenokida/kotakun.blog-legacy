import styles from "./HeroSVG.module.scss";

import Asteroid from "@/components/svg/Asteroid";
import GreenMatter from "@/components/svg/GreenMatter";
import YellowStar from "@/components/svg/YellowStar";
import GreySphere from "@/components/svg/GreySphere";
import PurpleMatter from "@/components/svg/PurpleMatter";
import Surfboard from "@/components/svg/Surfboard";
import Earth from "@/components/svg/Earth";
import PinkMatter from "@/components/svg/PinkMatter";
import StrawHat from "@/components/svg/StrawHat";
import Bike from "@/components/svg/Bike";
import Paddle from "@/components/svg/Paddle";
import Ball from "@/components/svg/Ball";
import SoccerBall from "@/components/svg/SoccerBall";

export default function HeroSVG() {
  const renderGreySphere = () => {
    return (
      <>
        <GreySphere
          initialAnimate={{
            x: 100,
            y: 70,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.75,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 100,
            y: 100,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, 1, 0],
            y: [0, 6, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <GreySphere
          initialAnimate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 468,
            y: 24,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            x: [0, 3, 0],
            y: [0, 6, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <GreySphere
          initialAnimate={{
            x: 750,
            y: 80,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.15,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 750,
            y: 180,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            x: [0, 2, 0],
            y: [0, 8, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderYellowStar = () => {
    return (
      <>
        <YellowStar
          initialAnimate={{
            x: 80,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.15,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 80,
            y: 20,
            scale: 0.9,
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
          initialAnimate={{
            x: 0,
            y: 140,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 0,
            y: 240,
            scale: 0.9,
            opacity: 0,
          }}
          width={44}
          height={44}
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
          width={32}
          height={32}
          initialAnimate={{
            x: 200,
            y: 20,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 220,
            y: 80,
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
        <YellowStar
          width={50}
          height={50}
          initialAnimate={{
            x: 300,
            y: 170,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 300,
            y: 230,
            scale: 1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            transition: {
              duration: 17,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <YellowStar
          width={32}
          height={32}
          initialAnimate={{
            x: 468,
            y: 109,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 480,
            y: 150,
            scale: 1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            // scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            transition: {
              duration: 19,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <YellowStar
          width={48}
          height={48}
          initialAnimate={{
            x: 620,
            y: 90,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 600,
            y: 150,
            scale: 1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.9, 0.6, 0.8, 0.7, 0.9],
            transition: {
              duration: 29,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "backInOut",
            },
          }}
        />
        <YellowStar
          width={32}
          height={32}
          initialAnimate={{
            x: 680,
            y: 20,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.25,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 690,
            y: 40,
            scale: 1,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 360],
            // scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            transition: {
              duration: 25,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "backInOut",
            },
          }}
        />
        <YellowStar
          width={52}
          height={52}
          initialAnimate={{
            x: 840,
            y: 160,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 880,
            y: 190,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 90, 160, 240, 360],
            scale: [0.9, 0.6, 0.5, 0.7, 0.9],
            transition: {
              duration: 22,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "anticipate",
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
            x: 30,
            y: 30,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.35,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 40,
            y: 80,
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
        <GreenMatter
          initialAnimate={{
            x: 225,
            y: 200,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 220,
            y: 270,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 90, 160, 240, 360],
            x: [0, 2, 0],
            y: [0, 6, 0],
            transition: {
              duration: 9,
              repeat: Infinity,
              ease: "backInOut",
            },
          }}
        />
        <GreenMatter
          initialAnimate={{
            x: 620,
            y: 220,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.15,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 600,
            y: 280,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 90, 160, 240, 360],
            x: [0, -2, 0],
            y: [0, 8, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "backInOut",
            },
          }}
        />
        <GreenMatter
          initialAnimate={{
            x: 860,
            y: 5,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.45,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 840,
            y: 60,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 40, 90, 160, 240, 360],
            x: [0, 2, 0],
            y: [0, 6, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <GreenMatter
          width={62}
          height={62}
          initialAnimate={{
            x: 700,
            y: 150,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 710,
            y: 180,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            // rotate: [0, 40, 90, 160, 240, 360],
            scale: [0.8, 0.6, 0.5, 0.7, 0.8],
            x: [0, 2, 0],
            y: [0, 6, 0],
            transition: {
              duration: 9,
              repeat: Infinity,
              ease: "backInOut",
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
            x: -5,
            y: 60,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            },
          }}
          initialPosition={{
            x: 0,
            y: 80,
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
        <Asteroid
          width={80}
          height={98}
          initialAnimate={{
            x: 70,
            y: 180,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.1,
            },
          }}
          initialPosition={{
            x: 70,
            y: 200,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [80, 240, 80],
            x: [0, 0, 0],
            y: [0, 12, 0],
            transition: {
              duration: 19,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <Asteroid
          width={80}
          height={80}
          initialAnimate={{
            x: 460,
            y: 30,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 450,
            y: 60,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 15, 0],
            x: [0, -2, 0],
            y: [0, 8, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <Asteroid
          width={120}
          height={100}
          initialAnimate={{
            x: 740,
            y: 5,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.3,
            },
          }}
          initialPosition={{
            x: 760,
            y: 20,
            scale: 0.1,
            opacity: 0,
          }}
          animate={{
            rotate: [150, 140, 150],
            x: [0, 5, 0],
            y: [0, 14, 0],
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

  const renderPurpleMatter = () => {
    return (
      <>
        <PurpleMatter
          initialAnimate={{
            x: 118,
            y: 35,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 120,
            y: 50,
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
        <PurpleMatter
          width={80}
          height={80}
          initialAnimate={{
            x: 350,
            y: 20,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "backInOut",
              delay: 0.6,
            },
          }}
          initialPosition={{
            x: 370,
            y: 30,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 12, 0],
            scale: [0.9, 0.85, 0.9],
            x: [0, 2, 0],
            y: [0, 12, 0],
            transition: {
              duration: 14,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <PurpleMatter
          width={140}
          height={140}
          initialAnimate={{
            x: 640,
            y: 200,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.2,
            },
          }}
          initialPosition={{
            x: 640,
            y: 220,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 15, 0],
            scale: [0.9, 0.85, 0.9],
            x: [0, -5, 0],
            y: [0, 12, 0],
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: "backInOut",
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
            x: 150,
            y: 180,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 150,
            y: 190,
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
            x: 350,
            y: 95,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 350,
            y: 95,
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
        <PinkMatter
          initialAnimate={{
            x: 520,
            y: 160,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 520,
            y: 170,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, -15, 0],
            x: [0, -6, 0],
            y: [0, 8, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "backInOut",
              repeatDelay: 0.2,
            },
          }}
        />
        <PinkMatter
          initialAnimate={{
            x: 850,
            y: 90,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 850,
            y: 100,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 30, 0],
            x: [0, 2, 0],
            y: [0, 8, 0],
            transition: {
              duration: 16,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
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
          initialAnimate={{
            x: 340,
            y: 110,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.1,
            },
          }}
          initialPosition={{
            x: 340,
            y: 130,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 5, 0],
            x: [0, 2, 0],
            y: [0, 10, 0],
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

  const renderEarth = () => {
    return (
      <>
        <Earth
          initialAnimate={{
            x: 250,
            y: 90,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 260,
            y: 100,
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
            x: 530,
            y: 10,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 530,
            y: 20,
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

  const renderBike = () => {
    return (
      <>
        <Bike
          initialAnimate={{
            x: 450,
            y: 190,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 450,
            y: 200,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, -15, 0],
            x: [0, -4, 0],
            y: [0, 9, 0],
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

  const renderPaddle = () => {
    return (
      <>
        <Paddle
          initialAnimate={{
            x: 300,
            y: 5,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.5,
            },
          }}
          initialPosition={{
            x: 310,
            y: 15,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, -15, 0],
            x: [0, -4, 0],
            y: [0, 9, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              // repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <Ball
          initialAnimate={{
            x: 320,
            y: 15,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.5,
            },
          }}
          initialPosition={{
            x: 310,
            y: 15,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -10, 0],
            transition: {
              duration: 5.8,
              delay: 2,
              repeat: Infinity,
              ease: "backInOut",
            },
          }}
        />
      </>
    );
  };

  const renderSoccerBall = () => {
    return (
      <>
        <SoccerBall
          initialAnimate={{
            x: 600,
            y: 136,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 600,
            y: 140,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 60, 0],
            x: [0, -4, 0],
            y: [0, 9, 0],
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

  const renderMobileGreySphere = () => {
    return (
      <>
        <GreySphere
          initialAnimate={{
            x: 10,
            y: 20,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.75,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 30,
            y: 30,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, 1, 0],
            y: [0, 6, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <GreySphere
          initialAnimate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 0.1,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 210,
            y: 42,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            x: [0, 3, 0],
            y: [0, 6, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </>
    );
  };

  const renderMobileYellowStar = () => {
    return (
      <>
        <YellowStar
          initialAnimate={{
            x: 0,
            y: 120,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.15,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 0,
            y: 130,
            scale: 0.9,
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
            x: 120,
            y: 20,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.45,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 120,
            y: 30,
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
          width={32}
          height={32}
          initialAnimate={{
            x: 300,
            y: 80,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 300,
            y: 90,
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

  const renderMobilePinkMatter = () => {
    return (
      <>
        <PinkMatter
          initialAnimate={{
            x: 50,
            y: 90,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 50,
            y: 100,
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
            x: 190,
            y: 20,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 170,
            y: 30,
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

  const renderMobilePurpleMatter = () => {
    return (
      <>
        <PurpleMatter
          initialAnimate={{
            x: 160,
            y: 55,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "backInOut",
              delay: 0.25,
            },
          }}
          initialPosition={{
            x: 160,
            y: 65,
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

  const renderMobileSoccerBall = () => {
    return (
      <>
        <SoccerBall
          initialAnimate={{
            x: 280,
            y: 128,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 280,
            y: 140,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 60, 0],
            x: [0, -4, 0],
            y: [0, 9, 0],
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

  const renderMobileStrawHat = () => {
    return (
      <>
        <StrawHat
          initialAnimate={{
            x: 230,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 230,
            y: 10,
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

  const renderMobileBike = () => {
    return (
      <>
        <Bike
          initialAnimate={{
            x: 100,
            y: 70,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.4,
            },
          }}
          initialPosition={{
            x: 100,
            y: 80,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [0, -15, 0],
            x: [0, -4, 0],
            y: [0, 9, 0],
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

  const renderMobileSurfBoard = () => {
    return (
      <>
        <Surfboard
          width={80}
          height={160}
          initialAnimate={{
            x: 0,
            y: -40,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backInOut",
              delay: 0.1,
            },
          }}
          initialPosition={{
            x: 0,
            y: -30,
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            rotate: [0, 5, 0],
            x: [0, 2, 0],
            y: [0, 10, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
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
            x: 150,
            y: 150,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 0.35,
              ease: "backInOut",
            },
          }}
          initialPosition={{
            x: 150,
            y: 160,
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

  const renderMobileAsteroid = () => {
    return (
      <>
        <Asteroid
          width={60}
          height={70}
          initialAnimate={{
            x: 70,
            y: 135,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            },
          }}
          initialPosition={{
            x: 70,
            y: 140,
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

  return (
    <div className={styles.hero}>
      <div className={styles.canvas}>
        {renderGreySphere()}
        {renderYellowStar()}
        {renderGreenMatter()}
        {renderAsteroid()}
        {renderPurpleMatter()}
        {renderPinkMatter()}
        {renderSurfBoard()}
        {renderEarth()}
        {renderStrawHat()}
        {renderBike()}
        {renderPaddle()}
        {renderSoccerBall()}
      </div>

      <div className={styles.mobileCanvas}>
        {renderMobileGreySphere()}
        {renderMobileYellowStar()}
        {renderMobilePinkMatter()}
        {renderMobilePurpleMatter()}
        {renderMobileSoccerBall()}
        {renderMobileStrawHat()}
        {renderMobileBike()}
        {renderMobileSurfBoard()}
        {renderMobileGreenMatter()}
        {renderMobileAsteroid()}
      </div>
    </div>
  );
}
