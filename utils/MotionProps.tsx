const easing = [0.175, 0.85, 0.42, 0.96];
const easingTransition = (duration: number = 0.3) => { return { duration: duration, ease: easing } };
const easingInOutTransition = (duration: number = 0.4, delay: number = 0.2) => { return { type: "spring", damping: 20, stiffness: 100 } };

const pageVariants = {
  easing: {
    initial: { opacity: 0, transition: easingTransition() },
    exit: { opacity: 0, transition: easingTransition(0.4) },
    enter: { opacity: 1, transition: easingTransition() }
  },
  cookiesEasing: {
    initial: { position: "fixed", left: 0, bottom: 0, x: -5000, transition: easingInOutTransition() },
    exit: { position: "fixed", left: 0, bottom: 0, x: 5000, transition: easingInOutTransition() },
    enter: { position: "fixed", left: 0, bottom: 0, x: 0, transition: easingInOutTransition() }
  },
  scalingY: {
    initial: { y: -200 },
    exit: { y: -200 },
    enter: { y: 0 }
  }
};

const textVariants = {
  easing: {
    initial: { opacity: 0, transition: { duration: 0.5, ease: easing } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: { opacity: 1, transition: { delay: 0.1, duration: 0.5, ease: easing } }
  }
};

export const motionProps = { pageVariants, textVariants };
export const motionTransitions = { easingTransition, easingInOutTransition };
