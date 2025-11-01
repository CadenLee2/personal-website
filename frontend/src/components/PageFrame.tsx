import '../App.css';
import './PageFrame.css';
import type { ReactNode } from 'react';
import { LinkButton } from '../components/Button';
import { NavLink } from 'react-router-dom';

type PageName = 'home' | 'resume' | 'contact' | 'blog';

function TopBar(props: { pageName?: PageName }) {
  return (
    <div className="top-bar">
      <h1>Caden Lee</h1>
      <div className="top-buttons">
        <LinkButton href="/" disabled={props.pageName === "home"}>
          Home
        </LinkButton>
        <LinkButton href="/resume">
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
  // TODO: link to repo to view the source code
  return (
    <div className="section">
      <span>© 2025 Caden Lee</span>
      <span className="small-text">
        Image credits: most images taken by me. For specific technology product icons, all their names, logos, and brands are property of their respective owners and are used here for identification purposes only.
      </span>
      <span>
        <a href="https://github.com/CadenLee2">Website source</a>
        {" "}•{" "}
        <NavLink to="/contact">Contact</NavLink>
      </span>
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
