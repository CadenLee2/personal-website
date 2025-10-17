import './PageFrame.css';
import type { ReactNode } from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      TOP BAR
    </div>
  );
}

function Footer() {
  return (
    <div className="top-bar">
      FOOTER
    </div>
  );
}

export default function PageFrame(props: { children: ReactNode }) {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <TopBar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
