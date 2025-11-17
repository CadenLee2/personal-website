import './Button.css';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type Variant = 'blue' | 'gray-light' | 'action-blue' | 'action-blue-small';

export function Button(props: {
  children: ReactNode, disabled?: boolean, variant?: Variant, title?: string
}) {
  return (
    <button className={`button ${props.variant ?? ''}`} disabled={props.disabled} title={props.title}>
      {props.children}
    </button>
  );
}

export function LinkButton(props: {
  children: ReactNode, href: string, disabled?: boolean, variant?: Variant, title?: string
}) {
  if (props.disabled) {
    return (
      <Button disabled={true} variant={props.variant} title={props.title}>
        {props.children}
      </Button>
    );
  }

  return (
    <NavLink
      to={props.href}
      onDragStart={(e) => e.preventDefault()}
      className={`button ${props.variant ?? ''}`}
      title={props.title}
    >
      {props.children}
    </NavLink>
  );
}

export function RawLinkButton(props: {
  children: ReactNode, href: string, disabled?: boolean, variant?: Variant, title?: string
}) {
  if (props.disabled) {
    return (
      <Button disabled={true} variant={props.variant} title={props.title}>
        {props.children}
      </Button>
    );
  }

  return (
    <a
      href={props.href}
      onDragStart={(e) => e.preventDefault()}
      className={`button ${props.variant ?? ''}`}
      title={props.title}
    >
      {props.children}
    </a>
  );
}
