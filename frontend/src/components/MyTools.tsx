import '../App.css';
import './MyTools.css';

import { ReactNode, useState } from 'react';

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
import PowershellPlain from 'devicons-react/icons/PowershellPlain';
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
        <a href="https://github.com/Cadecraft/sheatfish">a spreadsheet editor</a>,{" "}
        <a href="https://github.com/Cadecraft/rical">a calendar app</a>,{" "}
        and other tools where I care about speed and simplicity.
      </span>
    ),
    icon: <RustOriginal size={30} />
  },
  {
    title: "C++",
    descr: (
      <span>
        As one of my first languages, C++ got me into game development and computer graphics. I built an open-world exploration game and others with OpenGL (SFML).
      </span>
    ),
    icon: <CplusplusPlain size={30} />
  },
  {
    title: "JavaScript",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <JavascriptPlain size={30} />
  },
  {
    title: "TypeScript",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <TypescriptPlain size={30} />
  },
  {
    title: "Python",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <PythonPlain size={30} />
  },
  {
    title: "HTML",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <Html5Plain size={30} />
  },
  {
    title: "CSS",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <Css3Plain size={30} />
  },
  {
    title: "React / React Native",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <ReactOriginal size={30} />
  },
  {
    title: "NodeJS",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <NodejsPlain size={30} />
  },
  {
    title: "Socket.IO",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <SocketioOriginal size={30} />
  },
  {
    title: "React",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <ReactOriginal size={30} />
  },
  {
    title: "PostgreSQL",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <PostgresqlPlain size={30} />
  },
  {
    title: "Git",
    descr: (
      <span>
        Description coming soon?
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
        <a href="https://github.com/Cadecraft/dotfiles">dotfiles</a>!
      </span>
    ),
    icon: <NeovimPlain size={30} />
  },
  {
    title: "Powershell",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <PowershellPlain size={30} />
  },
  {
    title: "Bash/Zsh",
    descr: (
      <span>
        Description coming soon?
      </span>
    ),
    icon: <BashPlain size={30} />
  },
]

function ToolIcon(props: { toolInfo: ToolInfo, onHover: () => void }) {
  const { toolInfo, onHover } = props;

  // TODO: mouse out and different click behavior
  // TODO: more descriptions

  return (
    <button
      className="tool-icon-button"
      onMouseOver={onHover}
      onClick={onHover}
      title={toolInfo.title}
    >
      {toolInfo.icon}
    </button>
  );
}

function MyTools() {
  const topRowTools = tools.slice(0, tools.length / 2 - 1);
  const bottomRowTools = tools.slice(tools.length / 2, tools.length - 1);

  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <>
      <div className="my-tools">
        <div>
          {topRowTools.map(t => <ToolIcon onHover={() => setSelectedTitle(t.title)} key={t.title} toolInfo={t} />)}
        </div>
        <div>
          {bottomRowTools.map(t => <ToolIcon onHover={() => setSelectedTitle(t.title)} key={t.title} toolInfo={t} />)}
        </div>
      </div>
      <div className="selected-item">
        <h3>{selectedTitle}</h3>
        <span>
          {tools.find(t => t.title == selectedTitle)?.descr}
        </span>
      </div>
    </>
  );
}

export default MyTools;
