import { Title } from "@solidjs/meta";

import PageFrame from '~/components/PageFrame';

export default function Blog() {
  return (
    <main>
      <PageFrame pageName="blog">
        <Title>Caden Lee - Blog</Title>
        <h2>(Blog)</h2>
      </PageFrame>
    </main>
  );
}
