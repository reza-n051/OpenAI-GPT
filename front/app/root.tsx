import { json, LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {Toaster} from 'react-hot-toast';
import stylesheet from "~/tailwind.css";
import type { Socket } from 'socket.io-client';
import { useSocket,SocketContext } from "./socket";
import { LoadingContext } from "./loading";
import type { Voice } from "./voice-memory";
import { VMContext } from "./voice-memory";
import { useState } from "react";
declare global{
  interface Window{
    ENV:{
      SERVER_IP:string;
      SERVER_PORT:string;
    }
  }
}
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader(){
  return json({
    ENV:{
      SERVER_PORT:process.env.SERVER_PORT,
      SERVER_IP:process.env.SERVER_IP,
    }
  })
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  const socket:Socket|undefined = useSocket();

  const [isLoading,setIsLoading] = useState<boolean>(false);
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
            <LoadingContext.Provider value={{isLoading,setIsLoading}}>
              <Outlet />
              <Toaster/>
            </LoadingContext.Provider>
          </VMContext.Provider>
        </SocketContext.Provider>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
        <Scripts />
        <LiveReload port={8002}/>
      </body>
    </html>
  );
}
