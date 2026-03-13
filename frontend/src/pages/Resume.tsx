import '../App.css'
import './Resume.css';
import PageFrame from '../components/PageFrame';

import { LinkButton, RawLinkButton } from '../components/Button';
import { MdDownload, MdArrowForward } from 'react-icons/md';

import { RESUME_PATH } from '../constants';

function Resume() {
  return (
    <PageFrame pageName='resume'>
      <div className="section resume">
        <h2>Resume</h2>
        This is a standardized version of my resume and may not be fully up to date.
        <object data={RESUME_PATH} type="application/pdf" width="100%" height="700px">
          <embed src={RESUME_PATH} width="100%" height="700px" type="application/pdf" />
        </object>
        <p>
          This resume is available to download as a PDF.
        </p>
        <RawLinkButton variant="blue" href={RESUME_PATH}>
          <MdDownload size={18} />
          Download as PDF
        </RawLinkButton>
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
