import '../App.css';
import './PageFrame.css';
import type { ReactNode } from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <span>Caden Lee</span>
      <div className="top-buttons">
        <a href="/">
          Home
        </a>
        <a href="/projects">
          Resume
        </a>
        <a href="/contact">
          Contact
        </a>
        <a href="/blog">
          Blog
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="section">
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
