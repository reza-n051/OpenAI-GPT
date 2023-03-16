import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {Toaster} from 'react-hot-toast';
import stylesheet from "~/tailwind.css";
import type { Socket } from 'socket.io-client';
import { useSocket,SocketCon text} from "./socket";
import type { Voice } from "./voice-memory";
import { VMCon text} from "./voice-memory";
import { useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const socket:Socket|undefined = useSocket();
  const [voices,setVoices] = useState<Voice[]>([]);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SocketContext.Provider value={socket}>
          <VMContext.Provider value={{voices,setVoices}}>
            <Outlet />
            <Toaster/>
          </VMContext.Provider>
        </SocketContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
