import './index.css';
import PageFrame from '~/components/PageFrame';
import { A } from '@solidjs/router';

import Showcase, { PeekingContainerVert, ToolsList, RoadmapTree } from '~/components/Showcase';
import Devicon from '~/components/Devicon';
import { LinkButton } from '~/components/Button';

import MyTools from '~/components/MyTools';
import Marquee from '~/components/Marquee';
import { MakingLifeEasierRow, GamesGrid } from '~/components/SharedShowcases';

import { MdFillMore_horiz, MdFillArrow_outward } from 'solid-icons/md';

import { LINKEDIN_URL, GITHUB_PROFESSIONAL_URL } from '~/constants';

// TODO: clickable anchors
// TODO: fix color of mini contacts
// TODO: image layout shifts
// TODO: fix icon colors in my tools

export default function Home() {
  // Don't worry, this isn't actual code
  const marqueeTextDemo = ".marquee { width: 200px; background-color: rgb(22, 31, 54); color: rgb(54, 179, 106); font-family: monospace; border-radius: 4px; white-space: nowrap; overflow: hidden; padding: 4px; } .marquee span { display: inline-block; padding-left: 100%; animation: marquee 90s linear infinite; } @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }";

  let anchorProjects!: HTMLHeadingElement;
  let anchorTools!: HTMLHeadingElement;
  //let anchorOtherInterests;

  return (
    <main>
      <PageFrame
        pageName="home"
        metaTitle="Caden Lee: Student & Software Developer"
        metaDesc="I'm a CS student at UC Irvine with a passion for programming."
      >
        <div class="section-break top-showcase">
          <div>
            <h2>Computer Science @ UCI</h2>
            Avid student & software engineer
            <div class="mini-contacts icon-colorize">
              <A title="GitHub" href={GITHUB_PROFESSIONAL_URL}>
                <Devicon deviconId="devicon-github-original" size="18" />
              </A>
              <A title="LinkedIn" href={LINKEDIN_URL}>
                <Devicon deviconId="devicon-linkedin-plain" size="18" />
              </A>
              <A title="More contact info" href="/contact">
                <MdFillMore_horiz size={18} />
              </A>
            </div>
          </div>
          <div class="fastlinks">
            <button title="Jump to projects" onClick={() => anchorProjects.scrollIntoView({ behavior: 'smooth' })}>
              <img src="/images/GinkgoTree.jpg" />
            </button>
            <button title="Jump to tools" onClick={() => anchorTools.scrollIntoView({ behavior: 'smooth' })}>
              <img src="/images/CodeEditor.png" />
            </button>
            <button title="Jump to other interests" onClick={() => /*anchorOtherInterests.current?.scrollIntoView({ behavior: 'smooth' })*/{}}>
              <img src="/images/BombayBoat.jpg" />
            </button>
          </div>
        </div>
        <div class="section">
          <h2 ref={anchorProjects}>Building Valuable Projects</h2>
          <Showcase className="aa-planner">
            <div class="left">
              <h3>AntAlmanac Planner</h3>
              <span>
                I'm leading the AA Planner team at UCI's ICS Student Council.
                We're improving a course planning service used by thousands of students!
              </span>
              <div class="actions">
                <LinkButton newTabLink href="https://antalmanac.com/planner" variant="blue">
                  <MdFillArrow_outward size={18} /> Visit
                </LinkButton>
                <LinkButton newTabLink href="https://github.com/icssc/peterportal-client/" variant="action-blue">
                  <Devicon deviconId="devicon-github-original" size="18" />
                  <span>Contribute on GitHub</span>
                </LinkButton>
              </div>
              <RoadmapTree details={[
                { status: "Project Lead", date: "2025-26" },
                { status: "Software Developer", date: "Fall 2024" },
              ]} />
              <ToolsList
                size="18px"
                deviconIds={[
                  "devicon-typescript-plain",
                  "devicon-react-original",
                  "devicon-postgresql-plain",
                  "devicon-sass-original",
                  "devicon-trpc-plain",
                  "devicon-nextjs-plain",
                ]}
              />
            </div>
            <div class="right">
              <img src="/images/projects/AAP_Detail.png" title="AntAlmanac Planner's 4-year roadmap page" />
              <span>
                Plan quarterly schedules around major/minor requirements,
                transfer your AP credits, check prerequisites, and rate courses!
              </span>
            </div>
          </Showcase>
          <Showcase className="knickknack">
            <div class="left">
              <h3>KnickKnack</h3>
              <span>
                In the 2024-25 Product fellowship, I worked with product designers and managers to engineer a mobile figurine trading app, coming to the app store soon.
              </span>
              <div class="actions">
                <LinkButton newTabLink href="https://knickknackapp.com/" variant="blue">
                  <MdFillArrow_outward size={18} /> Check it out
                </LinkButton>
                <LinkButton
                  newTabLink
                  href="https://www.linkedin.com/posts/kyleshih_wow-what-an-incredible-12-weeks-it-has-been-activity-7316262735397195779-PMK6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMpkUoBj-OsZZHQm8VZqeqxE49ANrAKP_o"
                  variant="action-blue-small"
                  title="KnickKnack on LinkedIn"
                >
                  <Devicon deviconId="devicon-linkedin-plain wicon-link" size="18" />
                </LinkButton>
              </div>
              <RoadmapTree details={[
                { status: "Launching to Market!", date: "in 2026" },
                { status: "Placed 1st in Demo Day Competition", date: "Spring 2025" },
                { status: "Met in UCI's Product Fellowship", date: "2024" },
              ]} />
              <ToolsList
                size="18px"
                deviconIds={[
                  "devicon-typescript-plain",
                  "devicon-react-original",
                  "devicon-firebase-plain",
                  "devicon-tensorflow-original",
                  "devicon-python-plain",
                ]}
              />
            </div>
            <div class="right">
              <img src="/images/projects/KK_Group.jpg" title="The Knick Knack team during our pitch competition" />
              <PeekingContainerVert>
                <a href="https://knickknackapp.com/">
                  <img src="/images/projects/KK_DemoPhone.png" />
                </a>
              </PeekingContainerVert>
            </div>
          </Showcase>
        </div>
        <div class="section">
          <h2 ref={anchorTools}>My Tools</h2>
          <MyTools />
          <Marquee duration={50}>
            {marqueeTextDemo}
          </Marquee>
        </div>
        <div class="section">
          <h2>Making Life Easier</h2>
          Here are some open-source tools I've made to improve the experience of using a computer.
          <MakingLifeEasierRow />
        </div>
        <div class="section">
          <h2>Games I've Built</h2>
          <GamesGrid />
        </div>
      </PageFrame>
    </main>
  );
}
