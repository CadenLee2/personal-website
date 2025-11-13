import '../App.css'
import PageFrame from '../components/PageFrame';

import { LinkButton } from '../components/Button';

function Resume() {
  return (
    <PageFrame pageName='resume'>
      <div className="section error">
        <h2>Resume</h2>
        Coming soon!
        <br />
        <br />
        <LinkButton variant="blue" href="/">Home</LinkButton>
      </div>
    </PageFrame>
  );
}

export default Resume;
