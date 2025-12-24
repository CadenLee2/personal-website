import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 720;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const respondToChange = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    window.addEventListener('resize', respondToChange);

    return (() => {
      window.removeEventListener('resize', respondToChange);
    });
  }, [setIsMobile]);

  return isMobile;
}
