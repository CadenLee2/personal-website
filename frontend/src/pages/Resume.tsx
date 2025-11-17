import '../App.css'
import './Resume.css';
import PageFrame from '../components/PageFrame';

import { LinkButton, RawLinkButton } from '../components/Button';
import { MdDownload, MdArrowForward } from 'react-icons/md';

import { RESUME_PATH } from '../constants';

function Resume() {
  return (
    <PageFrame pageName='resume'>
      <div className="section">
        This resume is available to download as a standardized PDF.
        <br />
        <br />
        <RawLinkButton variant="blue" href={RESUME_PATH}>
          <MdDownload size={18} />
          Download as PDF
        </RawLinkButton>
      </div>
      <div className="section resume">
        <h2>Resume</h2>
        <object data={RESUME_PATH} type="application/pdf" width="100%" height="700px">
          <embed src={RESUME_PATH} width="100%" height="700px" type="application/pdf" />
          </object>
      </div>
      <div className="section get-in-touch">
        <h2>Get in touch!</h2>
        <LinkButton href="/contact" variant="blue">
          <MdArrowForward size={18} /> Contact
        </LinkButton>
      </div>
    </PageFrame>
  );
}

export default Resume;
