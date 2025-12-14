import './BlogHeaderBox.css';
import blogMetadata from '../blogMetadata';
import { MdLink, MdArrowBack, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function BlogHeaderBox(props: { postId: string }) {
  const { date, title, descr, backgroundImageUrl } = blogMetadata[props.postId];

  const [copiedLink, setCopiedLink] = useState(false);

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
      <div className="blog-header-box" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
        <h2>{title}</h2>
        <span>{date}</span>
        <NavLink className="blog-icon-back" to="/blog">
          <MdArrowBack />
        </NavLink>
        <button onClick={copyLink} title="Copy link" className="blog-icon-share">
          {copiedLink ? <span className="copied-check"><MdCheck /> Copied</span> : <MdLink />}
        </button>
      </div>
    </>
  );
}

export default BlogHeaderBox;
