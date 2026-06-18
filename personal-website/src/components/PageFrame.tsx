import '../App.css';
import './PageFrame.css';
import { LinkButton } from '~/components/Button';
import { A } from '@solidjs/router';
import { children, Show, JSX } from 'solid-js';

import { MdFillHome, MdFillEmail, MdFillMenu_book } from 'solid-icons/md';

type PageName = 'home' | 'resume' | 'contact' | 'blog';

function TopBar(props: { pageName?: PageName }) {
  return (
    <div class="top-bar">
      <h1>Caden Lee</h1>
      <div class="top-buttons">
        <div>
          <LinkButton href="/" disabled={props.pageName === "home"}>
            <MdFillHome /> Home
          </LinkButton>
          <LinkButton href="/contact" disabled={props.pageName === "contact"}>
            <MdFillEmail /> Contact
          </LinkButton>
          <LinkButton href="/blog" disabled={props.pageName === "blog"}>
            <MdFillMenu_book /> Blog
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
        <A href="/contact">Contact</A>
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
