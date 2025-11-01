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
    <div className="pathclimb-container">
      {details.map(detail => (
        <div className="branch">
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

function Showcase(props: { children: ReactNode, className?: string }) {
  const { children, className } = props;
  return (
    <div className={`showcase ${className ?? ''}`}>
      {children}
    </div>
  );
}

export default Showcase;
