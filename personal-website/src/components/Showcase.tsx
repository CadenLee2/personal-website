import './Showcase.css';
import { children, JSX, For } from 'solid-js';
import Devicon from '~/components/Devicon';
import { A } from '@solidjs/router';

type RoadmapTreeItem = {
  status: string,
  date: string
};

export function RoadmapTree(props: { details: RoadmapTreeItem[] } ) {
  const { details } = props;
  return (
    <div class="roadmap-tree">
      <For each={details}>
        {(detail) => (
          <div class="branch">
            <img class="branchimg" />
            <div class="contents">
              <span class="head">
                {detail.status}
                <span class="subhead">{detail.date}</span>
              </span>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}

export function ToolsList(props: { deviconIds: string[], size?: string }) {
  return <div class="toolslist">
    <For each={props.deviconIds}>
      {(id) => (
        <Devicon deviconId={id} size={props.size} />
      )}
    </For>
  </div>;
}

export function PeekingContainer(props: { children: JSX.Element }) {
  const resolved = children(() => props.children);
  return <div class="peeking-container">{resolved()}</div>;
}

export function PeekingContainerVert(props: { children: JSX.Element }) {
  const resolved = children(() => props.children);
  return <div class="peeking-container-vert">{resolved()}</div>;
}

function Showcase(props: {
  children: JSX.Element,
  className?: string,
  href?: string,
  backgroundImageUrl?: string
}) {
  const { className, href, backgroundImageUrl } = props;

  const resolved = children(() => props.children);

  const classNames = `showcase ${className ?? ''}`;
  const style = backgroundImageUrl ? { backgroundImage: `url('${backgroundImageUrl}')` } : {};

  if (href) {
    return (
      <A class="outer-a" href={href}>
        <div class={classNames} style={style}>
          {resolved()}
        </div>
      </A>
    );
  } else {
    return (
      <div class={classNames} style={style}>
        {resolved()}
      </div>
    );
  }
}

export default Showcase;
