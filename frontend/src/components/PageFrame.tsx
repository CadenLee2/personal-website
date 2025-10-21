import '../App.css';
import './PageFrame.css';
import type { ReactNode } from 'react';
import { LinkButton } from '../components/Button';

function TopBar() {
  return (
    <div className="top-bar">
      <h1>Caden Lee</h1>
      <div className="top-buttons">
        <LinkButton href="/">
          Home
        </LinkButton>
        <LinkButton href="/projects">
          Resume
        </LinkButton>
        <LinkButton href="/contact">
          Contact
        </LinkButton>
        <LinkButton href="/blog">
          Blog
        </LinkButton>
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
