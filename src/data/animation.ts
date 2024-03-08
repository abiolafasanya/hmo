import { AnimationProps, Variants } from "framer-motion";

const hero: Variants = {
  //   open: { opacity: 1, x: 0, },
  //   closed: { opacity: 0, x: "-100%" },
  //   initial: {},
};

const about: (idx: number) => Variants = (idx: number) => {
  return {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: idx, staggerChildren: 0.2 },
    },
  };
};

export const homeAnimation = {
  hero,
  about,
};
