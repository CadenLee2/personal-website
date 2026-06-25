import './Marquee.css';
import { JSX, children } from 'solid-js';

function Marquee(props: { children: JSX.Element, duration: number }) {
  const resolved = children(() => props.children);

  return (
    <div class="marquee">
      <span style={{animation: `marquee ${props.duration}s linear infinite`}}>{resolved()}</span>
    </div>
  );
}

export default Marquee;
