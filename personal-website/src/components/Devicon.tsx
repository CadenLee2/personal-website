import './Devicon.css'

// Requires that the devicons link be provided (see PageFrame.tsx)
export default function Devicon(props: { deviconId: string, size?: string }) {
  return (
    <i style={{ "font-size": props.size }} class={`styled-devicon ${props.deviconId}`}></i>
  );
}
