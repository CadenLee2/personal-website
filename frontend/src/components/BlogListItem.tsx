import Showcase from './Showcase';

import blogMetadata from '../blogMetadata';
import blogImages from '../blogImages';

function BlogList(props: { postId: string }) {
  const { date, title, descr } = blogMetadata[props.postId];
  const backgroundImageURL = blogImages[props.postId];

  return (
    <Showcase backgroundImageUrl={backgroundImageURL} href={`/blog/${props.postId}`}>
      <h3>{date} • {title}</h3>
      {descr}
    </Showcase>
  );
}

export default BlogList;
