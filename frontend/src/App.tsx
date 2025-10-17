import './App.css'
import type { ReactNode } from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      TOP BAR
    </div>
  );
}

function Footer() {
  return (
    <div className="top-bar">
      FOOTER
    </div>
  );
}

function PageFrame(props: { children: ReactNode }) {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <TopBar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <PageFrame>
      <div className="section">
        <h2>Section</h2>
      </div>
      <div className="section">
        <h2>Section 2</h2>
      </div>
    </PageFrame>
  );
}

export default App
