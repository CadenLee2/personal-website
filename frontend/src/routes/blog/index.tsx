import './index.css';
import PageFrame from '~/components/PageFrame';
import { For } from 'solid-js';

import Showcase from '~/components/Showcase';
import blogMetadata, { blogIdsOrdered } from '~/blogMetadata';

import { MdFillRss_feed } from 'solid-icons/md';

function BlogListItem(props: { postId: string }) {
  const { date, title, descr, imageUrl } = blogMetadata[props.postId];

  return (
    <Showcase backgroundImageUrl={imageUrl} href={`/blog/${props.postId}`}>
      <h3>{date} • {title}</h3>
      {descr}
    </Showcase>
  );
}

export default function Blog() {
  return (
    <main>
      <PageFrame
        pageName="blog"
        metaTitle="Caden Lee's Blog"
        metaDesc="Ideas on software, life, and the world"
      >
        <div class="section blog">
          <h2>Blog</h2>
          <a class="rss" href="/rss.xml" title="RSS Feed">
            <MdFillRss_feed />
          </a>
          I started this blog in Summer 2025 to share my ideas on software, life, and the world. All my articles will show up here (once I write them).
          <div class="gapcol">
            <For each={blogIdsOrdered}>
              {(id) => (
                <BlogListItem postId={id} />
              )}
            </For>
          </div>
        </div>
      </PageFrame>
    </main>
  );
}
