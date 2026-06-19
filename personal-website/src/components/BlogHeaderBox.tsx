import './BlogHeaderBox.css';
import blogMetadata from '../blogMetadata';
import { MdFillLink, MdFillArrow_back, MdFillCheck, MdFillRss_feed } from 'solid-icons/md';
import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';

function BlogHeaderBox(props: { postId: string }) {
  const { date, title, descr, imageUrl } = blogMetadata[props.postId];

  const [copiedLink, setCopiedLink] = createSignal(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
  }

  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={descr} />
      <meta name="author" content="Caden Lee" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descr} />
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
    </>
  );
}

export default BlogHeaderBox;
