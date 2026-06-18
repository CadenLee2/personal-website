import { Title } from "@solidjs/meta";

import PageFrame from '~/components/PageFrame';

export default function Home() {
  return (
    <main>
      <PageFrame pageName="home">
        <Title>Caden Lee: Student & Software Developer</Title>
        <h2>(Homepage)</h2>
      </PageFrame>
    </main>
  );
}
