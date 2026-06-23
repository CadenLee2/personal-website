import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

// TODO: update readme
// TODO: deployment ensure blog data and rss generation is correct

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Caden Lee: Student & Software Developer</Title>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
