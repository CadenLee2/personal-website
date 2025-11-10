import '../App.css';
import './Home.css';
import PageFrame from '../components/PageFrame';
import Showcase, { RoadmapTree, ToolsList } from '../components/Showcase';

import TypescriptPlain from 'devicons-react/icons/TypescriptPlain';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import PostgresqlPlain from 'devicons-react/icons/PostgresqlPlain';
import SassOriginal from 'devicons-react/icons/SassOriginal';
import TrpcPlain from 'devicons-react/icons/TrpcPlain';
import NextjsPlain from 'devicons-react/icons/NextjsPlain';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import Marquee from '../components/Marquee';

import { MdArrowOutward } from 'react-icons/md';

import BombayBoat from '../assets/images/BombayBoat.jpg';
import PPCRoadmapDetail from '../assets/images/projects/PPCRoadmap_Detail.png';

import { LinkButton } from '../components/Button';

function Home() {
  // TODO: make fastlinks section have relevant pictures & contents
  // TODO: (team photos for team projects, code for projects, image for photos, music, etc.)
  // TODO: (title should be "Jump to [section]")

  // TODO: make linkedin and github icons work

  const marqueeTextDemo = ".marquee { width: 200px; background-color: rgb(22, 31, 54); color: rgb(54, 179, 106); font-family: monospace; border-radius: 4px; white-space: nowrap; overflow: hidden; padding: 4px; } .marquee span { display: inline-block; padding-left: 100%; animation: marquee 90s linear infinite; } @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }";

  return (
    <PageFrame pageName="home">
      <div className="section-break top-showcase">
        <div>
          <h2>Computer Science @ UCI</h2>
          Avid student and software engineer
          <div>
            [LN] [GH] [... (links to "Contact")]
          </div>
        </div>
        <div className="fastlinks">
          <img src={BombayBoat} />
          <img src={BombayBoat} />
          <img src={BombayBoat} />
          <img src={BombayBoat} />
        </div>
      </div>
      <div className="section">
        <h2>Building Valuable Projects</h2>
        <Showcase className="peterportal">
          <div className="left">
            <h3>PeterPortal</h3>
            <span>
              I'm leading the PeterPortal team at UCI's ICS Student Council.
              We're improving a course planning service used by thousands of students!
            </span>
            <LinkButton href="https://peterportal.org/" variant="action-blue">
              <MdArrowOutward size={18} /> Visit PeterPortal
            </LinkButton>
            <LinkButton href="https://peterportal.org/" variant="action-blue">
              <GithubOriginal className="wicon" size={18} /> <span>Contribute on GitHub</span>
            </LinkButton>
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
            <img src={PPCRoadmapDetail} />
            <span>
              Plan quarterly schedules around major/minor requirements,
              transfer your AP credits, check prerequisites, and rate courses!
            </span>
          </div>
        </Showcase>
        <Showcase className="knickknack">
          KnickKnack
            <RoadmapTree details={[
              { status: "Launching to Market!", date: "in 2025" },
              { status: "Placed 1st in Demo Day Competition", date: "Spring 2025" },
              { status: "Met in UCI's Product Fellowship", date: "2024" },
            ]} />
        </Showcase>
      </div>
      <div className="section">
        <Marquee duration={50}>
          {marqueeTextDemo}
        </Marquee>
      </div>
    </PageFrame>
  );
}

export default Home;
