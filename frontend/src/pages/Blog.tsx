import '../App.css'
import PageFrame from '../components/PageFrame';

import BlogListItem from '../components/BlogListItem';
import DigitalNotes from '../assets/images/blog/DigitalNotes.png';

function Blog() {
  return (
    <PageFrame pageName='blog'>
      <div className="section">
        <h2>Blog</h2>
        I started this blog in Summer 2025 to share my ideas on software, life, and the world. All my articles will show up here (once I write them).
        <div>
          <BlogListItem
            date="2025/06/14"
            title="A philosophical defense of digital notetaking"
            descr="and of technology in general (when it's used right)"
            href="https://cadenlee2.github.io/blog/defense_of_digital.html"
            backgroundImageUrl={DigitalNotes}
          />
        </div>
      </div>
    </PageFrame>
  );
}

export default Blog;
