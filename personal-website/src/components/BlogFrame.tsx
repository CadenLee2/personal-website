import './BlogFrame.css';
import blogMetadata from '../blogMetadata';
import PageFrame from '~/components/PageFrame';
import { MdFillLink, MdFillArrow_back, MdFillCheck, MdFillRss_feed } from 'solid-icons/md';
import { A } from '@solidjs/router';
import { JSX, children, createSignal } from 'solid-js';

function BlogFrame(props: { postId: string, children: JSX.Element }) {
  const { date, title, descr, imageUrl } = blogMetadata[props.postId];

  const [copiedLink, setCopiedLink] = createSignal(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
  }

  const resolved = children(() => props.children);

  return (
    <PageFrame pageName="blog" metaTitle={title} metaDesc={descr}>
      <div class="blog-header-box" style={{ 'background-image': `url('${imageUrl}')` }}>
        <h2>{title}</h2>
        <span>{date}</span>
        <A class="blog-icon-back" href="/blog">
          <MdFillArrow_back />
        </A>
        <button
          class="blog-icon-share"
          onClick={copyLink}
          title={copiedLink() ? "Link copied" : "Copy link"}
        >
          {copiedLink() ? <MdFillCheck /> : <MdFillLink />}
        </button>
        <a class="blog-icon-rss" href="/rss.xml" title="RSS Feed">
          <MdFillRss_feed />
        </a>
      </div>
      {resolved()}
    </PageFrame>
  );
}

export default BlogFrame;
