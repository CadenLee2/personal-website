import './SharedShowcases.css';

import Showcase, { ToolsList, PeekingContainer } from '../components/Showcase';

import { MdFillPlay_arrow } from 'solid-icons/md';

export function MakingLifeEasierRow() {
  return (
    <div class="showcase-row">
      <Showcase className="rical" href="https://github.com/Cadecraft/rical/">
        <h3>Rical</h3>
        <span>Cross-device calendar app for minimalists</span>
        <img loading="lazy" src="/images/projects/RicalTerminal_Detail.png" />
        <ToolsList deviconIds={["devicon-rust-original"]} />
      </Showcase>
      <Showcase className="sheatfish" href="https://github.com/Cadecraft/sheatfish">
        <h3>Sheatfish</h3>
        <span>Lightweight, efficient terminal spreadsheet editor</span>
        <img loading="lazy" src="/images/projects/Sheatfish_Detail.png" />
        <ToolsList deviconIds={["devicon-rust-original"]} />
      </Showcase>
      <Showcase className="homepage-omni" href="https://github.com/Cadecraft/HomepageOmni">
        <h3>HomepageOmni</h3>
        <span>Configurable homepage for your browser</span>
        <img loading="lazy" src="/images/projects/HomepageOmni_Detail.jpg" />
        <ToolsList deviconIds={["devicon-html5-plain", "devicon-javascript-plain"]} />
      </Showcase>
    </div>
  );
}

export function GamesGrid() {
  return (
    <div class="games-grid">
      <Showcase className="tetrome" href="https://github.com/Cadecraft/tetrome-source">
        <div>
          <div>
            <h3>Tetrome</h3>
            <span>A full-featured stacker game. Add the extension to your browser!</span>
          </div>
          <img loading="lazy" src="/images/projects/TetromeDemo.gif" />
        </div>
        <ToolsList deviconIds={["devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain"]} />
      </Showcase>
      <Showcase className="landform-eclipse" href="https://cadecraft.github.io/landform-eclipse">
        <div>
          <div>
            <h3>Landform: Eclipse</h3>
            <span>A 2d open-world exploration web game with procedural generation</span>
          </div>
          <PeekingContainer>
            <img loading="lazy" src="/images/projects/Landform.png" />
          </PeekingContainer>
        </div>
        <ToolsList deviconIds={["devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain"]} />
      </Showcase>
      <Showcase className="speedstreets" href="https://github.com/Big-Dyl/IrvineHacks2025">
        <div>
          <div>
            <h3>SpeedStreets</h3>
            <span>This multiplayer geography game tests how well you know the streets in your city, built for IrvineHacks 2025</span>
          </div>
          <PeekingContainer>
            <img loading="lazy" src="/images/projects/Speedstreets_Detail.png"  />
          </PeekingContainer>
        </div>
        <ToolsList
          deviconIds={[
            "devicon-typescript-plain",
            "devicon-react-original",
            "devicon-vitejs-plain",
            "devicon-tailwindcss-original",
            "devicon-socketio-original",
          ]}
        />
      </Showcase>
      <Showcase className="regnatural">
        <h3>Re:Gnatural</h3>
        <span>Coming soon: a time/physics-based simulation game inspired by falling sand</span>
        <ToolsList deviconIds={["devicon-cplusplus-plain", "devicon-opengl-plain"]} />
      </Showcase>
      <Showcase className="platscifi" href="https://github.com/tivect/PlatScifi">
        <div>
          <div>
            <h3>PlatSciFi</h3>
            <span>An experimental programmer's platformer game that lets you define levels by writing files in a custom language</span>
          </div>
          <PeekingContainer>
            <img loading="lazy" src="/images/projects/Platscifi.png" />
          </PeekingContainer>
        </div>
        <ToolsList deviconIds={["devicon-cplusplus-plain", "devicon-opengl-plain"]} />
      </Showcase>
    </div>
  );
}

export function AlbumCover() {
  return (
    <div class="album-container">
      <a
        class="showcase album-cover album-cover-top clickable"
        href="https://youtu.be/QRya2g7BbXs?si=Sqa9VzWz5GmYPFXq"
        title="Listen to Skyline by Cadecraft on YouTube"
      >
        <MdFillPlay_arrow />
      </a>
      <div class="showcase album-cover album-cover-bottom" />
    </div>
  );
}
