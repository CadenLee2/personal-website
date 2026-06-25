import { JSX, children } from 'solid-js';

export function FootnoteContent(props: { num: number, children: JSX.Element }) {
  const resolved = children(() => props.children);

  return (
    <div id={`footnote-${props.num}`}>
      {props.num}. {resolved()}{' '}
      <a href={`#footnote-${props.num}-ref`}>↩</a>
    </div>
  );
}

export function FootnoteRef(props: { num: number }) {
  const { num } = props;

  return (
    <sup>
      <a id={`footnote-${num}-ref`} href={`#footnote-${num}`}>{num}</a>
    </sup>
  );
}
