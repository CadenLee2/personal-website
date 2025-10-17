import './Button.css';

export function Button(props: { children: ReactNode }) {
  return (
    <button className="button">
      {children}
    </button>
  );
}

export function LinkButton(props: { children: ReactNode, href: string }) {
  return (
    <a className="button">
      {children}
    </a>
  );
}
