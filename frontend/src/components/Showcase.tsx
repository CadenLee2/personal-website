import '../App.css';
import './Showcase.css';
import type { ReactNode } from 'react';

function Showcase(props: { children: ReactNode, className?: string }) {
  const { children, className } = props;
  return (
    <div className={`showcase ${className ?? ''}`}>
      {children}
    </div>
  );
}

export default Showcase;
