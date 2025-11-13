import '../App.css';
import './PageFrame.css';
import type { ReactNode } from 'react';
import { LinkButton } from '../components/Button';
import { NavLink } from 'react-router-dom';

import { MdHome, MdDescription, MdEmail, MdMenuBook } from 'react-icons/md';

type PageName = 'home' | 'resume' | 'contact' | 'blog';

function TopBar(props: { pageName?: PageName }) {
  return (
    <div className="top-bar">
      <h1>Caden Lee</h1>
      <div className="top-buttons">
        <div>
          <LinkButton href="/" disabled={props.pageName === "home"}>
            <MdHome /> Home
          </LinkButton>
          <LinkButton href="/resume" disabled={props.pageName === "resume"}>
            <MdDescription /> Resume
          </LinkButton>
        </div>
        <div>
          <LinkButton href="/contact" disabled={props.pageName === "contact"}>
            <MdEmail /> Contact
          </LinkButton>
          <LinkButton href="/blog" disabled={props.pageName === "blog"}>
            <MdMenuBook /> Blog
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="section">
      <span>© 2025 Caden Lee</span>
      <span className="small-text">
        Image credits: most images taken by me. For specific technology product icons, all their names, logos, and brands are property of their respective owners and are used here for identification purposes only.
      </span>
      <span className="small-text">
        <a href="https://github.com/CadenLee2/personal-website">Website source</a>
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
