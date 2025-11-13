import '../App.css'
import PageFrame from '../components/PageFrame';

import { LinkButton } from '../components/Button';

function Contact() {
  return (
    <PageFrame pageName='contact'>
      <div className="section error">
        <h2>Contact</h2>
        Coming soon!
        <br />
        <br />
        <LinkButton variant="blue" href="/">Home</LinkButton>
      </div>
    </PageFrame>
  );
}

export default Contact;
