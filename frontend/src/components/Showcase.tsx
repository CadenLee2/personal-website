import '../App.css';
import './Showcase.css';
import type { ReactNode } from 'react';

type RoadmapTreeItem = {
  status: string,
  date: string
};

export function RoadmapTree(props: { details: RoadmapTreeItem[] } ) {
  const { details } = props;
  return (
    <div className="roadmap-tree">
      {details.map(detail => (
        <div key={detail.status + '-' + detail.date} className="branch">
          <img className="branchimg" />
          <div className="contents">
            <span className="head">
              {detail.status}
              <span className="subhead">{detail.date}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ToolsList(props: { children: ReactNode | ReactNode[] }) {
  const { children } = props;
  return (
    <div className="toolslist">
      {children}
    </div>
  );
}

function Showcase(props: {
  children: ReactNode,
  className?: string,
  href?: string,
  backgroundImageUrl?: string
}) {
  const { children, className, href, backgroundImageUrl } = props;

  const classNames = `showcase ${className ?? ''}`;
  const style = backgroundImageUrl ? { backgroundImage: `url('${backgroundImageUrl}')` } : {};

  if (href) {
    return (
      <a className="outer-a" href={href}>
        <div className={classNames} style={style}>
          {children}
        </div>
      </a>
    );
  } else {
    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    );
  }
}

export default Showcase;
