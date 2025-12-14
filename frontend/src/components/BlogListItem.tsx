import Showcase from './Showcase';

function BlogList(props: {
  date: string,
  title: string,
  descr: string,
  href: string,
  backgroundImageUrl: string,
}) {
  const { date, title, descr, href, backgroundImageUrl } = props;

  return (
    <Showcase backgroundImageUrl={backgroundImageUrl} href={href}>
      <h3>{date} • {title}</h3>
      {descr}
    </Showcase>
  );
}

export default BlogList;
