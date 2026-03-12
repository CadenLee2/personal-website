import type { PropsWithChildren } from 'react';

export function FootnoteContent(props: PropsWithChildren<{ num: number }>) {
  const { num, children } = props;

  return (
    <p id={`footnote-${num}`}>
      {num}. {children}{' '}
      <a href={`#footnote-${num}-ref`}>^</a>
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
