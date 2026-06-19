import { JSX, children } from 'solid-js';

export function FootnoteContent(props: { num: number, children: JSX.Element }) {
  const { num } = props;

  const resolved = children(() => props.children);

  return (
    <p id={`footnote-${num}`}>
      {num}. {resolved()}{' '}
      <a href={`#footnote-${num}-ref`}>↩</a>
    </p>
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
