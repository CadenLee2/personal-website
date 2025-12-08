import '../App.css';
import './MyTools.css';

import { type ReactNode, useState } from 'react';

import TypescriptPlain from 'devicons-react/icons/TypescriptPlain';
import JavascriptPlain from 'devicons-react/icons/JavascriptPlain';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import PostgresqlPlain from 'devicons-react/icons/PostgresqlPlain';
import PythonPlain from 'devicons-react/icons/PythonPlain';
import RustOriginal from 'devicons-react/icons/RustOriginal';
import CplusplusPlain from 'devicons-react/icons/CplusplusPlain';
import Html5Plain from 'devicons-react/icons/Html5Plain';
import Css3Plain from 'devicons-react/icons/Css3Plain';
import NodejsPlain from 'devicons-react/icons/NodejsPlain';
import SocketioOriginal from 'devicons-react/icons/SocketioOriginal';
import GitPlain from 'devicons-react/icons/GitPlain';
import NeovimPlain from 'devicons-react/icons/NeovimPlain';
import BashPlain from 'devicons-react/icons/BashPlain';

type ToolInfo = {
  title: string,
  descr: ReactNode,
  icon: ReactNode,
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
    icon: <RustOriginal size={30} />
  },
  {
    title: "C++",
    descr: (
      <span>
        As one of my first languages, C++ got me into game development. I built an open-world exploration game and <a target="_blank" href="https://github.com/Cadecraft/Supertris">other graphics programs</a> with OpenGL (SFML).
      </span>
    ),
    icon: <CplusplusPlain size={30} />
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
    icon: <JavascriptPlain size={30} />
  },
  {
    title: "TypeScript",
    descr: (
      <span>
        I use TypeScript for my larger-scale projects, including KnickKnack and PeterPortal (above), where a clean and organized codebase is essential for collaboration. I also used it for this website!
      </span>
    ),
    icon: <TypescriptPlain size={30} />
  },
  {
    title: "Python",
    descr: (
      <span>
        Python is approachable and fast to write, making it great for writing scripts and working in teams alongside newer programmers.
      </span>
    ),
    icon: <PythonPlain size={30} />
  },
  {
    title: "HTML",
    descr: (
      <span>
        I built the first iteration of my personal website, and browser extensions like <a target="_blank" href="https://github.com/Cadecraft/tetrome-source">Tetrome</a> and <a target="_blank" href="https://github.com/Cadecraft/HomepageOmni">HomepageOmni</a>, in vanilla HTML.
      </span>
    ),
    icon: <Html5Plain size={30} />
  },
  {
    title: "CSS",
    descr: (
      <span>
        I've used CSS in all of my web projects. Check out my styling across this website or anything else I've built! I also have experience with SCSS from PeterPortal (above).
      </span>
    ),
    icon: <Css3Plain size={30} />
  },
  {
    title: "NodeJS",
    descr: (
      <span>
        I've worked on various backends, mostly using Express.
      </span>
    ),
    icon: <NodejsPlain size={30} />
  },
  {
    title: "Socket.IO",
    descr: (
      <span>
        I like using Socket.IO to build live multi-user experiences during hackathons. My team and I relied on it for networking in <a target="_blank" href="https://github.com/hodaknak/webjam2024">Crushed Ice</a> and <a target="_blank" href="https://github.com/Big-Dyl/IrvineHacks2025">SpeedStreets</a>.
      </span>
    ),
    icon: <SocketioOriginal size={30} />
  },
  {
    title: "React / React Native",
    descr: (
      <span>
        I use React daily for various web projects, including this website! I also made KnickKnack (above) in React Native for cross-platform support.
      </span>
    ),
    icon: <ReactOriginal size={30} />
  },
  {
    title: "PostgreSQL",
    descr: (
      <span>
        I became more confident with PostgreSQL after creating an <a target="_blank" href="https://github.com/icssc/peterportal-client/pull/666/files">ETL pipeline</a> to categorize thousands of rows of user data for PeterPortal. I also use it to store data for my calendar app <a target="_blank" href="https://github.com/Cadecraft/rical">Rical</a>. 
      </span>
    ),
    icon: <PostgresqlPlain size={30} />
  },
  {
    title: "Git & GitHub",
    descr: (
      <span>
        I've managed collaborative codebases in GitHub and BitBucket, including as a lead for PeterPortal (whose team at one point had 14 active developers).
      </span>
    ),
    icon: <GitPlain size={30} />
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
    icon: <NeovimPlain size={30} />
  },
  {
    title: "Bash/Zsh",
    descr: (
      <span>
        Though I keep most of my projects cross-platform (and I frequently use Windows), I've made bash scripts, and am familiar with Linux in general.
      </span>
    ),
    icon: <BashPlain size={30} />
  },
]

function ToolIcon(props: { toolInfo: ToolInfo, onHover: () => void, onClick: () => void, selected: boolean }) {
  const { toolInfo, onHover, onClick, selected } = props;

  return (
    <button
      className={`tool-icon-button ${selected ? 'selected' : ''}`}
      onMouseOver={onHover}
      onClick={onClick}
      title={toolInfo.title}
    >
      {toolInfo.icon}
    </button>
  );
}

function MyTools() {
  const topRowTools = tools.slice(0, tools.length / 2);
  const bottomRowTools = tools.slice(tools.length / 2, tools.length);

  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [clickedTitle, setClickedTitle] = useState<string | null>(null);

  const selectedTitle = clickedTitle ?? hoveredTitle;

  return (
    <>
      <div className="my-tools">
        <div>
          {topRowTools.map(t => (
            <ToolIcon
              onHover={() => setHoveredTitle(t.title)}
              onClick={() => setClickedTitle(t.title)}
              key={t.title}
              toolInfo={t}
              selected={t.title === clickedTitle} />
          ))}
        </div>
        <div>
          {bottomRowTools.map(t => (
            <ToolIcon
              onHover={() => setHoveredTitle(t.title)}
              onClick={() => setClickedTitle(t.title)}
              key={t.title}
              toolInfo={t}
              selected={t.title === clickedTitle} />
          ))}
        </div>
      </div>
      <div className="selected-item">
        <h3>{selectedTitle ?? <>&nbsp;</>}</h3>
        <div className="descr">
          {tools.map(t => (
            <span key={`descr-${t.title}`} style={{ visibility: t.title === selectedTitle ? 'visible' : 'hidden' }}>
              {t.descr}
            </span>
          ))}
          {!selectedTitle && <span className="hover-prompt">Hover or click a tool to see how I use it!</span>}
        </div>
      </div>
    </>
  );
}

export default MyTools;
