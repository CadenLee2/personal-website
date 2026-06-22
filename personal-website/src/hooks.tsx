import { createSignal, createEffect } from 'solid-js';

const MOBILE_BREAKPOINT = 720;

export function useIsMobile() {
  const [isMobile, setIsMobile] = createSignal(false);

  createEffect(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    const respondToChange = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    window.addEventListener('resize', respondToChange);
  });

  return isMobile;
}
