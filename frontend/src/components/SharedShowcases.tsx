import '../App.css';
import './SharedShowcases.css';

import Showcase, { ToolsList, PeekingContainer } from '../components/Showcase';

import TypescriptPlain from 'devicons-react/icons/TypescriptPlain';
import JavascriptPlain from 'devicons-react/icons/JavascriptPlain';
import Html5Plain from 'devicons-react/icons/Html5Plain';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import RustOriginal from 'devicons-react/icons/RustOriginal';
import Css3Plain from 'devicons-react/icons/Css3Plain';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import VitejsPlain from 'devicons-react/icons/VitejsPlain';
import SocketioOriginal from 'devicons-react/icons/SocketioOriginal';
import CplusplusPlain from 'devicons-react/icons/CplusplusPlain';
import OpenglPlain from 'devicons-react/icons/OpenglPlain';

import SheatfishDetail from '../assets/images/projects/Sheatfish_Detail.png';
import RicalTerminalDetail from '../assets/images/projects/RicalTerminal_Detail.png';
import HomepageOmniDetail from '../assets/images/projects/HomepageOmni_Detail.jpg';
import Landform from '../assets/images/projects/Landform.png';
import PlatSciFi from '../assets/images/projects/Platscifi.png';

export function MakingLifeEasierRow() {
  return (
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
  );
}

export function GamesGrid() {
  return (
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
  );
}
