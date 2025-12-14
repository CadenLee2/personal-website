import '../App.css';
import './Home.css';

import { useRef } from 'react';

import PageFrame from '../components/PageFrame';
import Showcase, { RoadmapTree, ToolsList } from '../components/Showcase';
import Marquee from '../components/Marquee';
import MyTools from '../components/MyTools';

import TypescriptPlain from 'devicons-react/icons/TypescriptPlain';
import JavascriptPlain from 'devicons-react/icons/JavascriptPlain';
import Html5Plain from 'devicons-react/icons/Html5Plain';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import PostgresqlPlain from 'devicons-react/icons/PostgresqlPlain';
import SassOriginal from 'devicons-react/icons/SassOriginal';
import TrpcPlain from 'devicons-react/icons/TrpcPlain';
import NextjsPlain from 'devicons-react/icons/NextjsPlain';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import LinkedinOriginal from 'devicons-react/icons/LinkedinOriginal';
import FirebaseOriginal from 'devicons-react/icons/FirebaseOriginal';
import TensorflowOriginal from 'devicons-react/icons/TensorflowOriginal';
import PythonPlain from 'devicons-react/icons/PythonPlain';
import RustOriginal from 'devicons-react/icons/RustOriginal';
import Css3Plain from 'devicons-react/icons/Css3Plain';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import VitejsPlain from 'devicons-react/icons/VitejsPlain';
import SocketioOriginal from 'devicons-react/icons/SocketioOriginal';
import CplusplusPlain from 'devicons-react/icons/CplusplusPlain';
import OpenglPlain from 'devicons-react/icons/OpenglPlain';

import { MdArrowOutward, MdArrowForward, MdMoreHoriz, MdPlayArrow, MdMusicNote } from 'react-icons/md';

import BombayBoat from '../assets/images/BombayBoat.jpg';
import HermosaPier from '../assets/images/HermosaPier.jpg';
import ICSTrees from '../assets/images/ICSTrees.jpg';
import GinkgoTree from '../assets/images/GinkgoTree.jpg';
import CodeEditor from '../assets/images/CodeEditor.png';
import PPCRoadmapDetail from '../assets/images/projects/PPCRoadmap_Detail.png';
import KKGroup from '../assets/images/projects/KK_Group.jpg';
import KKDemoPhone from '../assets/images/projects/KK_DemoPhone.png';
import SheatfishDetail from '../assets/images/projects/Sheatfish_Detail.png';
import RicalTerminalDetail from '../assets/images/projects/RicalTerminal_Detail.png';
import HomepageOmniDetail from '../assets/images/projects/HomepageOmni_Detail.jpg';
import Landform from '../assets/images/projects/Landform.png';
import PlatSciFi from '../assets/images/projects/Platscifi.png';

import { LinkButton } from '../components/Button';
import { NavLink } from 'react-router-dom';

import { LINKEDIN_URL, GITHUB_PROFESSIONAL_URL } from '../constants';

function Home() {
  // TODO: (team photos for team projects, code for projects, image for photos, music, etc.)

  // TODO: image loading animation/onLoad

  const marqueeTextDemo = ".marquee { width: 200px; background-color: rgb(22, 31, 54); color: rgb(54, 179, 106); font-family: monospace; border-radius: 4px; white-space: nowrap; overflow: hidden; padding: 4px; } .marquee span { display: inline-block; padding-left: 100%; animation: marquee 90s linear infinite; } @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }";

  const anchorTools = useRef<HTMLHeadingElement | null>(null);
  const anchorProjects = useRef<HTMLHeadingElement | null>(null);
  const anchorOtherInterests = useRef<HTMLHeadingElement | null>(null);

  return (
    <PageFrame pageName="home">
      <div className="section-break top-showcase">
        <div>
          <h2>Computer Science @ UCI</h2>
          Avid student & software engineer
          <div className="mini-contacts icon-colorize">
            <NavLink title="GitHub" to={GITHUB_PROFESSIONAL_URL}>
              <GithubOriginal className="gh" size={18} />
            </NavLink>
            <NavLink title="LinkedIn" to={LINKEDIN_URL}>
              <LinkedinOriginal className="linkedin" size={18} />
            </NavLink>
            <NavLink title="More contact info" to="/contact">
              <MdMoreHoriz size={18} />
            </NavLink>
          </div>
        </div>
        <div className="fastlinks">
          <button title="Jump to projects" onClick={() => anchorProjects.current?.scrollIntoView({ behavior: 'smooth' })}>
            <img src={GinkgoTree} />
          </button>
          <button title="Jump to tools" onClick={() => anchorTools.current?.scrollIntoView({ behavior: 'smooth' })}>
            <img src={CodeEditor} />
          </button>
          <button title="Jump to other interests" onClick={() => anchorOtherInterests.current?.scrollIntoView({ behavior: 'smooth' })}>
            <img src={BombayBoat} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2 ref={anchorProjects}>Building Valuable Projects</h2>
        <Showcase className="peterportal">
          <div className="left">
            <h3>PeterPortal</h3>
            <span>
              I'm leading the PeterPortal team at UCI's ICS Student Council.
              We're improving a course planning service used by thousands of students!
            </span>
            <div className="actions">
              <LinkButton href="https://peterportal.org/" variant="blue">
                <MdArrowOutward size={18} /> Visit
              </LinkButton>
              <LinkButton href="https://github.com/icssc/peterportal-client/" variant="action-blue">
                <GithubOriginal className="wicon" size={18} /> <span>Contribute on GitHub</span>
              </LinkButton>
            </div>
            <RoadmapTree details={[
              { status: "Project Co-Lead", date: "2025" },
              { status: "Software Developer", date: "Fall 2024" },
            ]} />
            <ToolsList>
              <TypescriptPlain size={18} />
              <ReactOriginal size={18} />
              <PostgresqlPlain size={18} />
              <SassOriginal size={18} />
              <TrpcPlain size={18} />
              <NextjsPlain size={18} />
            </ToolsList>
          </div>
          <div className="right">
            <img src={PPCRoadmapDetail} title="PeterPortal's 4-year roadmap page" />
            <span>
              Plan quarterly schedules around major/minor requirements,
              transfer your AP credits, check prerequisites, and rate courses!
            </span>
          </div>
        </Showcase>
        <Showcase className="knickknack">
          <div className="left">
            <h3>KnickKnack</h3>
            <span>
              In the 2024-25 Product fellowship, I worked with product designers and managers to engineer a mobile figurine trading app, coming to the app store soon.
            </span>
            <div className="actions">
              <LinkButton href="https://knickknackapp.com/" variant="blue">
                <MdArrowOutward size={18} /> Check it out
              </LinkButton>
              <LinkButton
                href="https://www.linkedin.com/posts/kyleshih_wow-what-an-incredible-12-weeks-it-has-been-activity-7316262735397195779-PMK6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMpkUoBj-OsZZHQm8VZqeqxE49ANrAKP_o"
                variant="action-blue-small"
                title="KnickKnack on LinkedIn"
              >
                <LinkedinOriginal className="wicon-link" size={18} />
              </LinkButton>
            </div>
            <RoadmapTree details={[
              { status: "Launching to Market!", date: "in 2025" },
              { status: "Placed 1st in Demo Day Competition", date: "Spring 2025" },
              { status: "Met in UCI's Product Fellowship", date: "2024" },
            ]} />
            <ToolsList>
              <TypescriptPlain size={18} />
              <ReactOriginal size={18} />
              <FirebaseOriginal size={18} />
              <TensorflowOriginal size={18} />
              <PythonPlain size={18} />
            </ToolsList>
          </div>
          <div className="right">
            <img src={KKGroup} title="The Knick Knack team during our pitch competition" />
            <div className="peeking-container-vert">
              <a href="https://knickknackapp.com/">
                <img src={KKDemoPhone} />
              </a>
            </div>
          </div>
        </Showcase>
      </div>
      <div className="section">
        <h2 ref={anchorTools}>My Tools</h2>
        <MyTools />
        <Marquee duration={50}>
          {marqueeTextDemo}
        </Marquee>
      </div>
      <div className="section">
        <h2>Making Life Easier</h2>
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
        <h2>Games I've Built</h2>
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
              <div className="peeking-container">
                <img src={Landform} />
              </div>
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
              <div className="peeking-container">
                <img src="https://github.com/Big-Dyl/IrvineHacks2025/raw/main/screenshot/Screenshot_Game.png"  />
              </div>
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
              <div className="peeking-container">
                <img src={PlatSciFi} />
              </div>
            </div>
            <ToolsList>
              <CplusplusPlain />
              <OpenglPlain />
            </ToolsList>
          </Showcase>
        </div>
      </div>
      <div className="section">
        <h2 ref={anchorOtherInterests}>Other Interests</h2>
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
            <span>In my free time, I make trance, synthwave, and other electronic music. I also enjoy photography, science fiction books, and cooking.</span>
            <br />
            <div className="yt-link">
              <LinkButton variant="gray-mid" href="https://www.youtube.com/playlist?list=PLbN2H2xs0W6tlWWImF9bK6xp-U0PCpN7a&si=za9rSy9WBiHHEivw">
                <MdMusicNote />
                Listen on YouTube
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="photography">
          <img title="UCI's Engineering Tower" src={ICSTrees} />
          <img title="The Hermosa Beach pier" src={HermosaPier} />
          <img title="Bombay Beach by the Salton Sea" src={BombayBoat} />
        </div>
      </div>
      <div className="section get-in-touch">
        <h2>Get in touch!</h2>
        <LinkButton href="/contact" variant="blue">
          <MdArrowForward size={18} /> Contact
        </LinkButton>
        <LinkButton href="/resume" variant="blue">
          <MdArrowForward size={18} /> Resume
        </LinkButton>
      </div>
    </PageFrame>
  );
}

export default Home;
