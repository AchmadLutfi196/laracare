import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce';
  duration?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade',
  duration = 0.6
}) => {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.3 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[animation]}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className = '',
  speed = 0.5
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      whileInView={{ y: -10 * speed }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <span className={`bg-gradient-to-r from-[#0ABAB5] via-[#0D94C6] to-[#0ABAB5] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export const ShimmerEffect: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export const StaggerContainer: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
