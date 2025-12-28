import '../App.css';
import './Blog.css';
import PageFrame from '../components/PageFrame';
import BlogListItem from '../components/BlogListItem';

import { blogIds } from '../blogIndex';

import { MdRssFeed } from 'react-icons/md';

function Blog() {
  return (
    <PageFrame pageName='blog'>
      <meta name="title" content="Caden Lee's blog" />
      <meta name="description" content="A collection of ideas on software, life, and the world" />
      <meta name="author" content="Caden Lee" />
      <meta property="og:title" content="Caden Lee's blog" />
      <meta property="og:description" content="A collection of ideas on software, life, and the world" />
      <div className="section blog">
        <h2>Blog</h2>
        <a className="rss" href="/rss.xml" title="RSS Feed">
          <MdRssFeed />
        </a>
        I started this blog in Summer 2025 to share my ideas on software, life, and the world. All my articles will show up here (once I write them).
        <div className="gapcol">
          {blogIds.map((id) => <BlogListItem key={id} postId={id} />)}
        </div>
      </div>
    </PageFrame>
  );
}

export default Blog;
