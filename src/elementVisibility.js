// elementVisibility.js
import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

function useElementVisibility() {
  const elementRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          controls.start({ opacity: 1 });
        } else {
          controls.start({ opacity: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return { elementRef, controls };
}

export default useElementVisibility;
