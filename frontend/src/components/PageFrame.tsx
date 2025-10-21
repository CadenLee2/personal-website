import '../App.css';
import './PageFrame.css';
import type { ReactNode } from 'react';
import { LinkButton } from '../components/Button';

type PageName = 'home' | 'resume' | 'contact' | 'blog';

function TopBar(props: { pageName?: PageName }) {
  return (
    <div className="top-bar">
      <h1>Caden Lee</h1>
      <div className="top-buttons">
        <LinkButton href="/" disabled={props.pageName === "home"}>
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

export default function PageFrame(props: {
  children: ReactNode,
  pageName?: PageName,
}) {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <TopBar pageName={props.pageName} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
