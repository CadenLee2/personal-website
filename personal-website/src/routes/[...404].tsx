import { HttpStatusCode } from "@solidjs/start";

import '../App.css'
import PageFrame from '../components/PageFrame';

import { LinkButton } from '../components/Button';

function Error() {
  return (
    <PageFrame metaTitle="Not Found">
      <HttpStatusCode code={404} />
      <div class="section error">
        <h2>Page not found</h2>
        This page does not exist!
        <br />
        <br />
        <LinkButton variant="blue" href="/">Home</LinkButton>
      </div>
    </PageFrame>
  );
}

export default Error;
