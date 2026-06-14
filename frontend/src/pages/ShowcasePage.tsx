import '../App.css';
import './ShowcasePage.css';

import PageFrame from '../components/PageFrame';
import Showcase, { ToolsList, PeekingContainer } from '../components/Showcase';

import TypescriptPlain from 'devicons-react/icons/TypescriptPlain';
import JavascriptPlain from 'devicons-react/icons/JavascriptPlain';
import Html5Plain from 'devicons-react/icons/Html5Plain';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import RustOriginal from 'devicons-react/icons/RustOriginal';
import Css3Plain from 'devicons-react/icons/Css3Plain';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import VitejsPlain from 'devicons-react/icons/VitejsPlain';
import SocketioOriginal from 'devicons-react/icons/SocketioOriginal';
import CplusplusPlain from 'devicons-react/icons/CplusplusPlain';
import OpenglPlain from 'devicons-react/icons/OpenglPlain';

import { MdPlayArrow, MdMusicNote } from 'react-icons/md';

import CadecraftStrip from '../assets/images/logo_CadecraftStrip_v2.png';
import BombayBoat from '../assets/images/BombayBoat.jpg';
import HermosaPier from '../assets/images/HermosaPier.jpg';
import ICSTrees from '../assets/images/ICSTrees.jpg';
import SheatfishDetail from '../assets/images/projects/Sheatfish_Detail.png';
import RicalTerminalDetail from '../assets/images/projects/RicalTerminal_Detail.png';
import HomepageOmniDetail from '../assets/images/projects/HomepageOmni_Detail.jpg';
import Landform from '../assets/images/projects/Landform.png';
import PlatSciFi from '../assets/images/projects/Platscifi.png';

import { LinkButton } from '../components/Button';
import { NavLink } from 'react-router-dom';

import { YOUTUBE_URL, GITHUB_PERSONAL_URL } from '../constants';

function ShowcasePage() {
  return (
    <div className="showcase-page">
      <PageFrame hideTopBar>
        <title>Cadecraft</title>
        <div className="section-break top-showcase-cadecraft">
          <div>
            <h2>Cadecraft</h2>
            <img src={CadecraftStrip} />
            <span className="cadecraft-subtitle">
              <span className="mini-contacts icon-colorize">
                <NavLink title="GitHub" to={GITHUB_PERSONAL_URL}>
                  <GithubOriginal className="gh" size={18} />
                </NavLink>
                <NavLink title="YouTube" to={YOUTUBE_URL}>
                  <MdPlayArrow size={18} />
                </NavLink>
              </span>
              <span>I make games, software, and music</span>
            </span>
          </div>
        </div>
        <div className="section">
          <div className="highlight">
            <h2>Making Life Easier</h2>
          </div>
          Here are some open-source tools I've made to improve the experience of using a computer.
          <div className="showcase-row">
            <Showcase className="rical" href="https://github.com/Cadecraft/rical/">
              <h3>Rical</h3>
              <span>Cross-device calendar app for minimalists</span>
              <img src={RicalTerminalDetail} />
              <ToolsList>
                <RustOriginal />
              </ToolsList>
            </Showcase>
            <Showcase className="sheatfish" href="https://github.com/Cadecraft/sheatfish">
              <h3>Sheatfish</h3>
              <span>Lightweight, efficient terminal spreadsheet editor</span>
              <img src={SheatfishDetail} />
              <ToolsList>
                <RustOriginal />
              </ToolsList>
            </Showcase>
            <Showcase className="homepage-omni" href="https://github.com/Cadecraft/HomepageOmni">
              <h3>HomepageOmni</h3>
              <span>Configurable homepage for your browser</span>
              <img src={HomepageOmniDetail} />
              <ToolsList>
                <Html5Plain />
                <JavascriptPlain />
              </ToolsList>
            </Showcase>
          </div>
        </div>
        <div className="section">
          <div className="highlight">
            <h2>Music</h2>
          </div>
          <div className="interests-section">
            <div className="album-container">
              <a
                className="showcase album-cover album-cover-top clickable"
                href="https://youtu.be/QRya2g7BbXs?si=Sqa9VzWz5GmYPFXq"
                title="Listen to Skyline by Cadecraft on YouTube"
              >
                <MdPlayArrow />
              </a>
              <div
                className="showcase album-cover album-cover-bottom"
              >
              </div>
            </div>
            <div className="music-descr">
              <span>I also make trance, synthwave, and other electronic music.</span>
              <br />
              <div className="interests-links">
                <LinkButton variant="blue" href="https://www.youtube.com/playlist?list=PLbN2H2xs0W6tlWWImF9bK6xp-U0PCpN7a&si=za9rSy9WBiHHEivw">
                  <MdMusicNote />
                  Listen on YouTube
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="highlight">
            <h2>Games I've Built</h2>
          </div>
          <div className="games-grid">
            <Showcase className="tetrome" href="https://github.com/Cadecraft/tetrome-source">
              <div>
                <div>
                  <h3>Tetrome</h3>
                  <span>A full-featured stacker game. Add the extension to your browser!</span>
                </div>
                <img src="https://github.com/Cadecraft/tetrome-source/raw/master/repo_images/TetromeDemo.gif" />
              </div>
              <ToolsList>
                <JavascriptPlain />
                <Html5Plain />
                <Css3Plain />
              </ToolsList>
            </Showcase>
            <Showcase className="landform-eclipse" href="https://github.com/Cadecraft/Cadecraft.github.io/tree/main/static/landform-eclipse">
              <div>
                <div>
                  <h3>Landform: Eclipse</h3>
                  <span>A 2d open-world exploration web game with procedural generation</span>
                </div>
                <PeekingContainer>
                  <img src={Landform} />
                </PeekingContainer>
              </div>
              <ToolsList>
                <JavascriptPlain />
                <Html5Plain />
                <Css3Plain />
              </ToolsList>
            </Showcase>
            <Showcase className="speedstreets" href="https://github.com/Big-Dyl/IrvineHacks2025">
              <div>
                <div>
                  <h3>SpeedStreets</h3>
                  <span>This multiplayer geography game tests how well you know the streets in your city, built for IrvineHacks 2025</span>
                </div>
                <PeekingContainer>
                  <img src="https://github.com/Big-Dyl/IrvineHacks2025/raw/main/screenshot/Screenshot_Game.png"  />
                </PeekingContainer>
              </div>
              <ToolsList>
                <TypescriptPlain />
                <ReactOriginal />
                <VitejsPlain />
                <TailwindcssOriginal />
                <SocketioOriginal />
              </ToolsList>
            </Showcase>
            <Showcase className="regnatural">
              <h3>Re:Gnatural</h3>
              <span>Coming soon: a time/physics-based simulation game inspired by falling sand</span>
              <ToolsList>
                <CplusplusPlain />
                <OpenglPlain />
              </ToolsList>
            </Showcase>
            <Showcase className="platscifi" href="https://github.com/tivect/PlatScifi">
              <div>
                <div>
                  <h3>PlatSciFi</h3>
                  <span>An experimental programmer's platformer game that lets you define levels by writing files in a custom language</span>
                </div>
                <PeekingContainer>
                  <img src={PlatSciFi} />
                </PeekingContainer>
              </div>
              <ToolsList>
                <CplusplusPlain />
                <OpenglPlain />
              </ToolsList>
            </Showcase>
          </div>
        </div>
        <div className="section get-in-touch">
          <h2>That's not all!</h2>
          <span>
            If you're curious about my professional side, feel free to check out my <a href="/">main website</a> too.
          </span>
          <span>
            (Watch out for light mode!)
          </span>
        </div>
      </PageFrame>
    </div>
  );
}

export default ShowcasePage;
