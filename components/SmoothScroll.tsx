'use client'

import { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
      const smoothScroll = (targetId: string, duration: number) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const start = window.scrollY;
          const targetPosition = targetElement.getBoundingClientRect().top;
          let startTime: number = 0;
  
          const animateScroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo({
              top: start + targetPosition * progress,
              behavior: 'smooth',
            });
  
            if (timeElapsed < duration) {
              requestAnimationFrame(animateScroll);
            }
          };
  
          requestAnimationFrame(animateScroll);
        }
      };
  
      const handleOnClickScroll = (event: any) => {
        const targetLink: HTMLElement = (event.target).closest('.smooth-scroll-link');

        if (targetLink) {
         event.preventDefault();
          const targetId: string = (targetLink as HTMLElement).dataset.target || '';
          smoothScroll(targetId, 10);
        }
      };
  
      document.addEventListener('click', handleOnClickScroll);
  
      return () => {
        document.removeEventListener('click', handleOnClickScroll);
      };
    }, []);
  
    return null;
  };
  
  export default SmoothScroll;