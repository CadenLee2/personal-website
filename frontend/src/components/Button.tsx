import './Button.css';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type Variant = 'blue' | 'gray-light';

export function Button(props: {
  children: ReactNode, disabled?: boolean, variant?: Variant
}) {
  return (
    <button className={`button ${props.variant ?? ''}`} disabled={props.disabled}>
      {props.children}
    </button>
  );
}

export function LinkButton(props: {
  children: ReactNode, href: string, disabled?: boolean, variant?: Variant
}) {
  if (props.disabled) {
    return (
      <Button disabled={true} variant={props.variant}>
        {props.children}
      </Button>
    );
  }

  return (
    <NavLink to={props.href} onDragStart={(e) => e.preventDefault()} className={`button ${props.variant ?? ''}`}>
      {props.children}
    </NavLink>
  );
}
