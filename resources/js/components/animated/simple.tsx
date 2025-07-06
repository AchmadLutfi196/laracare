import React from 'react';
import { motion } from 'framer-motion';

// Full animated container with all props
export const AnimatedContainer: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  animation?: string;
  delay?: number;
}> = ({ children, className = '', animation, delay = 0 }) => {
  const getAnimationVariants = () => {
    switch (animation) {
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 }
        };
      case 'slideDown':
        return {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 }
        };
      case 'slideRight':
        return {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 }
        };
      case 'slideLeft':
        return {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      animate={variants.animate}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Full animated card with all props
export const AnimatedCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  hoverScale?: number;
  delay?: number;
}> = ({ children, className = '', hoverScale = 1.02, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
};

// Full animated button with all props
export const AnimatedButton: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, className = '', onClick, disabled = false, type = 'button' }) => {
  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

// Simple gradient text
export const GradientText: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-[#0ABAB5] to-[#0D94C6] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

// Simple stagger container
export const StaggerContainer: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Simple stagger item
export const StaggerItem: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = '' }) => {
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

// Placeholder exports for compatibility
export const ParallaxContainer = AnimatedContainer;
export const FloatingElement = AnimatedContainer;
export const ShimmerEffect: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <div className={`animate-pulse bg-gray-200 ${className}`} />;
};
