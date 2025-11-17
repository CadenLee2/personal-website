import '../App.css'
import PageFrame from '../components/PageFrame';

import { LinkButton } from '../components/Button';

function Blog() {
  return (
    <PageFrame pageName='blog'>
      <div className="section">
        <h2>Blog</h2>
        Coming soon!
        <br />
        <br />
        <LinkButton variant="blue" href="/">Home</LinkButton>
      </div>
    </PageFrame>
  );
}

export default Blog;
