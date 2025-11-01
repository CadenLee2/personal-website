import '../App.css';
import './Home.css';
import PageFrame from '../components/PageFrame';

import BombayBoat from '../assets/images/BombayBoat.jpg';

function Home() {
  // TODO: make fastlinks section have relevant pictures & contents
  // TODO: (team photos for team projects, code for projects, image for photos, music, etc.)
  // TODO: (title should be "Jump to [section]")
  return (
    <PageFrame pageName="home">
      <div className="section-break top-showcase">
        <div>
          <h2>Computer Science @ UCI</h2>
          Avid student and software engineer
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
      </div>
    </PageFrame>
  );
}

export default Home;
