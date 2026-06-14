import '../App.css';
import './ShowcasePage.css';

import PageFrame from '../components/PageFrame';
import { GamesGrid, MakingLifeEasierRow } from '../components/SharedShowcases';

import GithubOriginal from 'devicons-react/icons/GithubOriginal';

import { MdPlayArrow, MdMusicNote } from 'react-icons/md';

import CadecraftStrip from '../assets/images/logo_CadecraftStrip_v2.png';

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
          <MakingLifeEasierRow />
        </div>
        <div className="section">
          <div className="highlight">
            <h2>Games I've Built</h2>
          </div>
          <GamesGrid />
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
            I'm a developer and hobbyist music producer. I started out in 2017 with Scratch games and <a className="textlink" href="https://jummb.us">JummBox</a> songs, then moved on to Unreal Engine games and <a className="textlink" href="https://www.audiotool.com/user/cadecraft">Audiotool</a> before settling into mainly making web games, web tools, and music. I've also experimented to varying degrees with writing, 3d modeling, and pixel art.
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
