import { Title } from "@solidjs/meta";
// TODO: remove
import Counter from "~/components/Counter";

import PageFrame from '~/components/PageFrame';

export default function Home() {
  return (
    <main>
      <PageFrame pageName="home">
        <Title>Caden Lee: Student & Software Developer</Title>
        <h1>Hello world!</h1>
        <Counter />
        <p>
          Visit{" "}
          <a href="https://start.solidjs.com" target="_blank">
            start.solidjs.com
          </a>{" "}
          to learn how to build SolidStart apps.
        </p>
      </PageFrame>
    </main>
  );
}
