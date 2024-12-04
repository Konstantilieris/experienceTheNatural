"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useAnimation,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate background gradient color
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  // Animation controls for the mountain
  const mountainControls = useAnimation();

  // Start mountain animation on render
  useEffect(() => {
    mountainControls.start({
      y: "-0%", // Final position
      opacity: 1, // Fully visible
      transition: {
        duration: 2.5, // Duration of animation
        ease: "easeInOut", // Smooth easing
      },
    });
  }, [mountainControls]);

  const maintext = "Experience The Natural";
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative py-40 h-screen w-full 2xl:py-60 "
    >
      {" "}
      <div className="text-8xl gap-2 flex flex-row inset-0 w-full justify-center text-light-900 max-md:text-3xl max-md:gap-1 ">
        {maintext.split("").map((letter, index) => (
          <motion.span
            className="inline-block"
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 }, // Start slightly below
              visible: { opacity: 1, y: 0 }, // Fade in and move to position
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.4, // Short animation duration per letter
              delay: index * 0.1, // Shorter delay between letters
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 z-0 h-full">
        <Canvas className="min-h-full">
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>

        {/* Animated mountain */}
        <motion.div
          className="absolute inset-0 z-50"
          initial={{ y: "20%", opacity: 0 }} // Start off-screen and hidden
          animate={mountainControls}
          style={{
            backgroundImage: "url('/image-bottom.png')",
            backgroundSize: "stretch",

            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        />
      </div>
    </motion.section>
  );
};
