import { type Variants } from "framer-motion"
import { ANIMATION_DURATION } from "./constants"

type AnimationState = {
  opacity?: number;
  y?: number;
  x?: number;
  scale?: number;
  transition?: {
    duration?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
    staggerChildren?: number;
    delayChildren?: number;
  };
}

type AnimationVariants = {
  hidden: AnimationState;
  visible: AnimationState;
}

export const fadeInUp: AnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
}

export const fadeInDown: AnimationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
}

export const fadeInLeft: AnimationVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
}

export const fadeInRight: AnimationVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
}

export const scaleIn: AnimationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: ANIMATION_DURATION.normal }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const slideInFromBottom: AnimationVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

type PageTransitionVariants = {
  initial: AnimationState;
  animate: AnimationState;
  exit: AnimationState;
}

export const pageTransition: PageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: ANIMATION_DURATION.normal }
  }
}

// Animation presets that don't need variants
export const hoverScale = {
  scale: 1.05,
  transition: { duration: ANIMATION_DURATION.fast },
}

export const tapScale = {
  scale: 0.95,
  transition: { duration: ANIMATION_DURATION.fast },
}
