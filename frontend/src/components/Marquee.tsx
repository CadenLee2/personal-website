import './Marquee.css';
import type { ReactNode } from 'react';

function Marquee(props: { children: ReactNode, duration: number }) {
  const { children, duration } = props;

  return (
    <div className="marquee">
      <span style={{animation: `marquee ${duration}s linear infinite`}}>{children}</span>
    </div>
  );
}

export default Marquee;
