import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

// type props = {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// };

export default function Slide({ children, delay, className }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.1,
        damping: 10,
        delay: delay,
        stiffness: 72,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
Slide.propTypes = {
  // children: PropTypes.string,
  delay: PropTypes.string,
  className: PropTypes.string,
};
