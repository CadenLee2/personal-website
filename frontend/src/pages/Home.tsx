import '../App.css';
import './Home.css';
import PageFrame from '../components/PageFrame';
import Showcase, { RoadmapTree } from '../components/Showcase';

import BombayBoat from '../assets/images/BombayBoat.jpg';

function Home() {
  // TODO: make fastlinks section have relevant pictures & contents
  // TODO: (team photos for team projects, code for projects, image for photos, music, etc.)
  // TODO: (title should be "Jump to [section]")

  // TODO: make linkedin and github icons work

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
            <RoadmapTree details={[
              { status: "Project Co-Lead", date: "2025" },
              { status: "Software Developer", date: "Fall 2024" },
            ]} />
          </div>
          <div className="right">
            <img src={BombayBoat} />
            ^ TODO FIX
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
    </PageFrame>
  );
}

export default Home;
