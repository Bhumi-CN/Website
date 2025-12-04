export const animationConfig = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.1 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
};

export const getScrollOffsetY = (element: HTMLElement | null): number => {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  return rect.top + window.scrollY;
};

export const calculateParallaxOffset = (
  scrollProgress: number,
  strength: number = 0.5
): number => {
  return scrollProgress * 100 * strength;
};

export const calculateScrollOpacity = (
  scrollProgress: number,
  startPoint: number = 0,
  endPoint: number = 1
): number => {
  if (scrollProgress < startPoint) return 0;
  if (scrollProgress > endPoint) return 1;
  return (scrollProgress - startPoint) / (endPoint - startPoint);
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
