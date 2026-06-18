import './Button.css';
import { children, JSX } from 'solid-js';
import { A } from '@solidjs/router';

type Variant = 'blue' | 'gray-light' | 'action-blue' | 'action-blue-small' | 'gray-mid';

export function Button(props: {
  children: JSX.Element, disabled?: boolean, variant?: Variant, title?: string
}) {
  return (
    <button class={`button ${props.variant ?? ''}`} disabled={props.disabled} title={props.title}>
      {props.children}
    </button>
  );
}

export function LinkButton(props: {
  children: JSX.Element, href: string, disabled?: boolean, variant?: Variant, title?: string, newTabLink?: true
}) {
  if (props.disabled) {
    return (
      <Button disabled={true} variant={props.variant} title={props.title}>
        {props.children}
      </Button>
    );
  }

  const resolved = children(() => props.children);

  return (
    <A
      href={props.href}
      onDragStart={(e) => e.preventDefault()}
      class={`button ${props.variant ?? ''}`}
      title={props.title}
      target={props.newTabLink ? "_blank" : undefined}
    >
      {resolved()}
    </A>
  );
}

export function RawLinkButton(props: {
  children: JSX.Element, href: string, disabled?: boolean, variant?: Variant, title?: string
}) {
  if (props.disabled) {
    return (
      <Button disabled={true} variant={props.variant} title={props.title}>
        {props.children}
      </Button>
    );
  }

  const resolved = children(() => props.children)

  return (
    <a
      href={props.href}
      onDragStart={(e) => e.preventDefault()}
      class={`button ${props.variant ?? ''}`}
      title={props.title}
    >
      {resolved()}
    </a>
  );
}
