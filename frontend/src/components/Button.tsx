import './Button.css';
import type { ReactNode } from 'react';

export function Button(props: { children: ReactNode }) {
  return (
    <button className="button">
      {props.children}
    </button>
  );
}

export function LinkButton(props: { children: ReactNode, href: string }) {
  return (
    <a className="button">
      {props.children}
    </a>
  );
}
