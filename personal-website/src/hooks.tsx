import { createSignal, createEffect } from 'solid-js';
import { isServer } from 'solid-js/web';

const MOBILE_BREAKPOINT = 720;

export function useIsMobile() {
  const [isMobile, setIsMobile] = createSignal(isServer ? false : window.innerWidth <= MOBILE_BREAKPOINT);

  createEffect(() => {
    if (isServer) {
      setIsMobile(false);
      return;
    }

    console.log("[DBG] useIsMobile effect called")
    const respondToChange = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    window.addEventListener('resize', respondToChange);
  });

  return isMobile;
}
