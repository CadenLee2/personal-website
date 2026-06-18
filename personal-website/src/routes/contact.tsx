import './contact.css';
import PageFrame from '~/components/PageFrame';
import { A } from '@solidjs/router';

import Devicon from '~/components/Devicon';
import { MdFillEmail } from 'solid-icons/md';
import { EMAIL, LINKEDIN_URL, GITHUB_PROFESSIONAL_URL, GITHUB_PERSONAL_URL } from '~/constants';

export default function Contact() {
  return (
    <main>
      <PageFrame
        pageName="contact"
        metaTitle="Caden Lee - Contact"
        metaDesc="I'm a CS student at UC Irvine with a passion for programming."
      >
        <div class="section">
          <h2>Contact</h2>
          Feel free to reach out to me with ideas, questions, or opportunities!
          <br />I will respond to emails within 24 hours.
          <div class="contact-list icon-colorize">
            <div>
              <MdFillEmail size={22} />
              <div>
                <span>Email <i>(preferred)</i></span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <div>
              <Devicon deviconId="devicon-linkedin-plain" size="22px" />
              <div>
                <span>LinkedIn</span>
                <a href={LINKEDIN_URL}>/in/cadenlee2</a>
              </div>
            </div>
            <div>
              <Devicon deviconId="devicon-github-original" size="22px" />
              <div>
                <span>Professional GitHub <i>(for my teams)</i></span>
                <a href={GITHUB_PROFESSIONAL_URL}>@CadenLee2</a>
              </div>
            </div>
            <div>
              <Devicon deviconId="devicon-github-original" size="22px" />
              <div>
                <span>Personal GitHub <i>(for my projects)</i></span>
                <a href={GITHUB_PERSONAL_URL}>@Cadecraft</a>
              </div>
            </div>
          </div>
          <p>
            Curious about my experience? Check out my <A href="/resume">resume</A>.
          </p>
        </div>
      </PageFrame>
    </main>
  );
}
