import '../App.css'
import PageFrame from '../components/PageFrame';

import BlogListItem from '../components/BlogListItem';

import { blogIndex } from '../blogIndex';

function Blog() {
  return (
    <PageFrame pageName='blog'>
      <div className="section">
        <h2>Blog</h2>
        I started this blog in Summer 2025 to share my ideas on software, life, and the world. All my articles will show up here (once I write them).
        <div>
          {blogIndex.map((blogItem) => <BlogListItem key={blogItem.meta.href} metadata={blogItem.meta} />)}
        </div>
      </div>
    </PageFrame>
  );
}

export default Blog;
