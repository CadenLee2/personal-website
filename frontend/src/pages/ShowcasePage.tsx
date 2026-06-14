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
import SheatfishDetail from '../assets/images/projects/Sheatfish_Detail.png';
import RicalTerminalDetail from '../assets/images/projects/RicalTerminal_Detail.png';
import HomepageOmniDetail from '../assets/images/projects/HomepageOmni_Detail.jpg';
import Landform from '../assets/images/projects/Landform.png';
import PlatSciFi from '../assets/images/projects/Platscifi.png';

import { LinkButton } from '../components/Button';
import { NavLink } from 'react-router-dom';

import { YOUTUBE_URL, GITHUB_PERSONAL_URL } from '../constants';

function ShowcasePage() {
  // TODO: nicer music section
  // TODO: nicer header

  return (
    <div className="showcase-page">
      <PageFrame hideTopBar>
        <title>Cadecraft</title>
        <div className="section-break top-showcase-cadecraft">
          <div>
            <h2>Cadecraft</h2>
            <img src={CadecraftStrip} alt="Cadecraft logo" />
            <span className="cadecraft-subtitle">
              <span className="mini-contacts icon-colorize">
                <NavLink title="GitHub" to={GITHUB_PERSONAL_URL}>
                  <GithubOriginal className="gh" size={18} />
                </NavLink>
                <NavLink title="YouTube" to={YOUTUBE_URL}>
                  <MdPlayArrow size={18} />
                </NavLink>
              </span>
              <i>I make games, software, and music</i>
            </span>
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
              <span>I produce trance, synthwave, and other electronic music.</span>
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
        <div className="section">
          <div className="highlight">
            <h2>Misc. Projects</h2>
          </div>
          <h3>Tivect</h3>
          <p>
            I've been part of the team over at <a className="textlink" href="https://tivect.com/">Tivect</a>, a web game and 3D rendering project, since late 2022.
          </p>
          <ul>
            <li>
              Assisted with the frontend and composed the <a className="textlink" href="https://www.youtube.com/watch?v=QqytikZy7bA">soundtrack</a>.
            </li>
            <li>
              Made an extensibility and accessibility-focused fork of the original 2D game, <a className="textlink" href="https://github.com/Twovect/OpenTiv2d">OpenTiv2d</a>.
            </li>
            <li>
              Wrote three volumes of lore for the game (TIVECT Volume 1: Global Rescale, TIVECT Volume 2: Of Wanderers and Moonlight, and TIVECT Volume 3: Reason and Coelacanth)
            </li>
          </ul>
          <h3>Music collaborations</h3>
          <ul>
            <li>
              I've also contributed to the <a className="textlink" href="https://www.youtube.com/watch?v=q8bJ4NCZEWA">Shendaria soundtrack</a>.
            </li>
          </ul>
          <h3>Browser extensions</h3>
          <ul>
            <li>
              Voltaire Browser (<a className="textlink" href="https://drive.google.com/file/d/1PDoVUb2DBpiq_ZXa-PNAWKPZm7z0xBpf/view">available for download</a> and also <a className="textlink" href="https://github.com/Cadecraft/voltaire-browser-source">on GitHub</a>) is a customizable Chromebook browser with bookmarks, tabs, backgrounds, and privacy features.
            </li>
            <li>
              <a className="textlink" href="https://github.com/Cadecraft/ccpiano">CcPiano</a>
            </li>
            <li>
              <a className="textlink" href="https://github.com/Cadecraft/CcTimeSave">CcTimeSave</a>
            </li>
          </ul>
          <h3>Other games</h3>
          <ul>
            <li>
              Can you outscore your friends on <a className="textlink" href="https://fish.cadenlee.dev/">fish.cadenlee.dev</a>?
            </li>
            <li>
              FishWars 5, a first-person shooter, is one of the largest games I've worked on. I never quite finished it, but the latest version has a <a className="textlink" href="https://drive.google.com/file/d/10ttPtt-LfIiyehn2aJ_mPuLfU0oPCtgu/view">Windows download</a> and you can <a className="textlink" href="https://www.youtube.com/watch?v=J5L_j33ur5A">watch the trailer on YouTube</a>.
            </li>
          </ul>
        </div>
        <div className="section">
          <div className="highlight">
            <h2>About Me</h2>
          </div>
          <p>
            I'm a developer and hobbyist music producer. I started out with Scratch games and <a className="textlink" href="https://jummb.us">JummBox</a> songs, then moved on to Unreal Engine games and <a className="textlink" href="https://www.audiotool.com/user/cadecraft">Audiotool</a> before settling into mainly making web games, web tools, and music. I've also experimented to varying degrees with writing, 3d modeling, and pixel art.
          </p>
          <p>
            I enjoy reading science fiction, using open-source software, and playing a few games (you can <a className="textlink" href="https://ch.tetr.io/u/cadecraft">find me on Tetr.io</a>).
          </p>
          <p>
            I'm now an undergraduate and have been involved in several teams at my university, so I've been quite busy recently. If you'd like to see more about my professional side, feel free to check out my <NavLink className="textlink" to="/">main website</NavLink> (watch out for light mode!)

          </p>
        </div>
      </PageFrame>
    </div>
  );
}

export default ShowcasePage;
