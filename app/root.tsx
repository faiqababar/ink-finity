import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css";
import OpenAI from "openai";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          fontFamily: "monospace, roboto, sans-serif",
        }}
        className="bg-white font-medium w-full flex flex-col items-center"
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
