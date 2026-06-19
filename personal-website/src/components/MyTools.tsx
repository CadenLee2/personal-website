import './MyTools.css';

import { JSX, createSignal, For } from 'solid-js';
import Devicon from '~/components/Devicon';

type ToolInfo = {
  title: string,
  descr: JSX.Element,
  icon: string,
}

const tools: ToolInfo[] = [
  {
    title: "Rust",
    descr: (
      <span>
        I'm using Rust to build{" "}
        <a target="_blank" href="https://github.com/Cadecraft/sheatfish">a spreadsheet editor</a>,{" "}
        <a target="_blank" href="https://github.com/Cadecraft/rical">a calendar app</a>,{" "}
        and other tools where I care about speed and simplicity.
      </span>
    ),
    icon: "devicon-rust-original"
  },
  {
    title: "C++",
    descr: (
      <span>
        As one of my first languages, C++ got me into game development. I built an open-world exploration game and <a target="_blank" href="https://github.com/Cadecraft/Supertris">other graphics programs</a> with OpenGL (SFML).
      </span>
    ),
    icon: "devicon-cplusplus-plain"
  },
  {
    title: "JavaScript",
    descr: (
      <span>
        I make browser extensions and other web projects using JavaScript, including{" "}
        a <a target="_blank" href="https://github.com/Cadecraft/HomepageOmni">homepage</a>{" "}
        that I use as my daily driver.
      </span>
    ),
    icon: "devicon-javascript-plain"
  },
  {
    title: "TypeScript",
    descr: (
      <span>
        I use TypeScript for my larger-scale projects, including KnickKnack and AntAlmanac Planner (above), where a clean and organized codebase is essential for collaboration. I also used it for this website!
      </span>
    ),
    icon: "devicon-typescript-plain"
  },
  {
    title: "Python",
    descr: (
      <span>
        Python is approachable and fast to write, making it great for writing scripts and working in teams alongside newer programmers.
      </span>
    ),
    icon: "devicon-python-plain"
  },
  {
    title: "HTML",
    descr: (
      <span>
        I built the first iteration of my personal website, and browser extensions like <a target="_blank" href="https://github.com/Cadecraft/tetrome-source">Tetrome</a> and <a target="_blank" href="https://github.com/Cadecraft/HomepageOmni">HomepageOmni</a>, in vanilla HTML.
      </span>
    ),
    icon: "devicon-html5-plain"
  },
  {
    title: "CSS",
    descr: (
      <span>
        I've used CSS in all of my web projects. Check out my styling across this website or anything else I've built! I also have experience with SCSS from AntAlmanac Planner (above).
      </span>
    ),
    icon: "devicon-css3-plain"
  },
  {
    title: "NodeJS",
    descr: (
      <span>
        I've worked on various backends, mostly using Express.
      </span>
    ),
    icon: "devicon-nodejs-plain"
  },
  {
    title: "Socket.IO",
    descr: (
      <span>
        I like using Socket.IO to build live multi-user experiences during hackathons. My team and I relied on it for networking in <a target="_blank" href="https://github.com/hodaknak/webjam2024">Crushed Ice</a> and <a target="_blank" href="https://github.com/Big-Dyl/IrvineHacks2025">SpeedStreets</a>.
      </span>
    ),
    icon: "devicon-socketio-original"
  },
  {
    title: "React / React Native",
    descr: (
      <span>
        I use React daily for various web projects; I also made KnickKnack (above) in React Native for cross-platform support. This website, though, is made in Solid.js!
      </span>
    ),
    icon: "devicon-react-original"
  },
  {
    title: "PostgreSQL",
    descr: (
      <span>
        I became more confident with PostgreSQL after creating an <a target="_blank" href="https://github.com/icssc/peterportal-client/pull/666/files">ETL pipeline</a> to categorize thousands of rows of user data for AntAlmanac Planner. I also use it to store data for my calendar app <a target="_blank" href="https://github.com/Cadecraft/rical">Rical</a>.
      </span>
    ),
    icon: "devicon-postgresql-plain"
  },
  {
    title: "Git & GitHub",
    descr: (
      <span>
        I've managed collaborative codebases in GitHub and BitBucket, including as a lead for AntAlmanac Planner (a team of 14 active developers). Our favorite PRs include{' '}
        <a href="https://github.com/icssc/peterportal-client/pull/653">#653</a>{' '}
        and <a href="https://github.com/icssc/peterportal-client/pull/879">#879</a>
      </span>
    ),
    icon: "devicon-git-plain"
  },
  {
    title: "Neovim/Vim",
    descr: (
      <span>
        Neovim is by far my favorite text editor, and I blame it for my programming addiction.{" "}
        <br />Are you also a fan? Check out my{" "}
        <a target="_blank" href="https://github.com/Cadecraft/dotfiles">dotfiles</a>!
      </span>
    ),
    icon: "devicon-neovim-plain"
  },
  {
    title: "Bash/Zsh",
    descr: (
      <span>
        Though I keep most of my projects cross-platform (and I frequently use Windows), I've made bash scripts, and am familiar with Linux in general.
      </span>
    ),
    icon: "devicon-bash-plain"
  },
]

function ToolIcon(props: { toolInfo: ToolInfo, onHover: () => void, onClick: () => void, selected: boolean }) {
  const { toolInfo, onHover, onClick, selected } = props;

  return (
    <button
      class={`tool-icon-button ${selected ? 'selected' : ''}`}
      onMouseOver={onHover}
      onClick={onClick}
      title={toolInfo.title}
    >
      <Devicon deviconId={toolInfo.icon} size="30px" />
    </button>
  );
}

function MyTools() {
  const topRowTools = tools.slice(0, tools.length / 2);
  const bottomRowTools = tools.slice(tools.length / 2, tools.length);

  const [hoveredTitle, setHoveredTitle] = createSignal<string | null>(null);
  const [clickedTitle, setClickedTitle] = createSignal<string | null>(null);

  const handleClickTitle = (newTitle: string) => {
    if (clickedTitle() == newTitle) setClickedTitle(null);
    else setClickedTitle(newTitle);
  }

  const selectedTitle = clickedTitle() ?? hoveredTitle();

  return (
    <>
      <div class="my-tools">
        <div>
          <For each={topRowTools}>
            {(t) => (
              <ToolIcon
                onHover={() => setHoveredTitle(t.title)}
                onClick={() => handleClickTitle(t.title)}
                toolInfo={t}
                selected={t.title === clickedTitle()}
              />
            )}
          </For>
        </div>
        <div>
          <For each={bottomRowTools}>
            {(t) => (
              <ToolIcon
                onHover={() => setHoveredTitle(t.title)}
                onClick={() => handleClickTitle(t.title)}
                toolInfo={t}
                selected={t.title === clickedTitle()}
              />
            )}
          </For>
        </div>
      </div>
      <div class="selected-item">
        <h3>{selectedTitle ?? <>&nbsp;</>}</h3>
        <div class="descr">
          <For each={tools}>
            {(t) => (
              <span style={{ visibility: t.title === selectedTitle ? 'visible' : 'hidden' }}>
                {t.descr}
              </span>
            )}
          </For>
          {!selectedTitle && <span class="hover-prompt">Hover or click a tool to see how I use it!</span>}
        </div>
      </div>
    </>
  );
}

export default MyTools;
