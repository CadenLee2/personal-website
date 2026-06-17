import '../App.css';
import './PageFrame.css';
import { LinkButton } from '../components/Button';
import { NavLink } from 'react-router-dom';
import { children, Show, JSX } from 'solid-js';

import { MdHome, MdEmail, MdMenuBook } from 'react-icons/md';

type PageName = 'home' | 'resume' | 'contact' | 'blog';

function TopBar(props: { pageName?: PageName }) {
  return (
    <div class="top-bar">
      <h1>Caden Lee</h1>
      <div class="top-buttons">
        <div>
          <LinkButton href="/" disabled={props.pageName === "home"}>
            <MdHome /> Home
          </LinkButton>
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
    <div class="section">
      <span>© 2025-26 Caden Lee</span>
      <span class="small-text">
        Image credits: most images taken by me. For specific technology product icons, all their names, logos, and brands are property of their respective owners and are used here for identification purposes only.
      </span>
      <span class="small-text">
        <a href="https://github.com/CadenLee2/personal-website">Website source</a>
        {" "}•{" "}
        <NavLink to="/contact">Contact</NavLink>
      </span>
    </div>
  );
}

export default function PageFrame(props: { children: JSX.Element, pageName?: PageName, hideTopBar?: true }) {
  const resolved = children(() => props.children);

  return (
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <Show when={!props.hideTopBar}>
          <TopBar pageName={props.pageName} />
        </Show>
        {resolved()}
        <Footer />
      </div>
    </div>
  );
}
