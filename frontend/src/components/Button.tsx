import './Button.css';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function Button(props: { children: ReactNode, disabled?: boolean }) {
  return (
    <button className="button" disabled={props.disabled}>
      {props.children}
    </button>
  );
}

export function LinkButton(props: { children: ReactNode, href: string, disabled?: boolean }) {
  if (props.disabled) {
    return <Button disabled={true}>{props.children}</Button>;
  }

  return (
    <Link to={props.href} className="button">
      {props.children}
    </Link>
  );
}
