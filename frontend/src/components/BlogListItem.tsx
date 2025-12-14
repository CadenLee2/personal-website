import Showcase from './Showcase';

import type { BlogMetadata } from '../blogIndex';

function BlogList(props: { metadata: BlogMetadata }) {
  const { date, title, descr, href, backgroundImageUrl } = props.metadata;

  return (
    <Showcase backgroundImageUrl={backgroundImageUrl} href={`/blog/${href}`}>
      <h3>{date} • {title}</h3>
      {descr}
    </Showcase>
  );
}

export default BlogList;
