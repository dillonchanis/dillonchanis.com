import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import Navbar from "./components/Navbar";

import styles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return {
    title: "Dillon Chanis",
    description: "Dillon Chanis is a software engineer helping teams scale their frontend architecture."
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="pb-20 font-sans antialiased">
        <Navbar />
        <main
          id="content"
          className="max-w-2xl px-6 pt-12 mx-auto sm:pt-32 sm:px-8"
        >
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
