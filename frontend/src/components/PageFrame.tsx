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
  hideDefaultMeta?: true
}) {
  return (
    <div className="outer-wrapper">
      {!props.hideDefaultMeta && (
        <>
          <meta name="title" content="Caden Lee: Student & Software Developer" />
          <meta name="description" content="I'm a CS student at UC Irvine with a passion for programming." />
          <meta name="author" content="Caden Lee" />
          <meta property="og:title" content="Caden Lee: Student & Software Developer" />
          <meta property="og:description" content="I'm a CS student at UC Irvine with a passion for programming." />
        </>
      )}
      <div className="inner-wrapper">
        <TopBar pageName={props.pageName} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}
