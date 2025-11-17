import '../App.css'
import './Contact.css'
import PageFrame from '../components/PageFrame';

import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import LinkedinOriginal from 'devicons-react/icons/LinkedinOriginal';
import { MdEmail } from 'react-icons/md';

import { EMAIL, LINKEDIN_URL, GITHUB_PERSONAL_URL, GITHUB_PROFESSIONAL_URL } from '../constants';

function Contact() {
  return (
    <PageFrame pageName='contact'>
      <div className="section error">
        <h2>Contact</h2>
        Feel free to reach out to me with ideas, questions, or opportunities!
        <br />I will respond to emails within 24 hours.
        <div className="contact-list icon-colorize">
          <div>
            <MdEmail size={22} />
            <div>
              <span>Email <i>(preferred)</i></span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <div>
            <LinkedinOriginal className="linkedin" size={22} />
            <div>
              <span>LinkedIn</span>
              <a href={LINKEDIN_URL}>@CadenLee2</a>
            </div>
          </div>
          <div>
            <GithubOriginal className="gh" size={22} />
            <div>
              <span>Professional GitHub <i>(for my teams)</i></span>
              <a href={GITHUB_PROFESSIONAL_URL}>@CadenLee2</a>
            </div>
          </div>
          <div>
            <GithubOriginal className="gh" size={22} />
            <div>
              <span>Personal GitHub <i>(for my projects)</i></span>
              <a href={GITHUB_PERSONAL_URL}>@Cadecraft</a>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

export default Contact;
