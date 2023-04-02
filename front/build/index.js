var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/components/audio.client
var require_audio = __commonJS({
  "empty-module:~/components/audio.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/audio-recorder3.client
var require_audio_recorder3 = __commonJS({
  "empty-module:~/components/audio-recorder3.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_react_hot_toast2 = require("react-hot-toast");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EH3ECZEL.css";

// app/socket.ts
var import_react3 = require("react"), import_socket = require("socket.io-client"), import_react_hot_toast = require("react-hot-toast");

// app/loading.ts
var import_react2 = require("react"), LoadingContext = (0, import_react2.createContext)({ isLoading: !1, setIsLoading: () => {
} });
function useLoadingContext() {
  return (0, import_react2.useContext)(LoadingContext);
}

// app/socket.ts
var SocketContext = (0, import_react3.createContext)(void 0);
function useSocket() {
  let [socket, setSocket] = (0, import_react3.useState)();
  return (0, import_react3.useEffect)(() => {
    let socket2;
    return socket2 = (0, import_socket.io)(`${window.ENV.SERVER_IP}:${window.ENV.SERVER_PORT}/`), setSocket(socket2), () => {
      socket2.close();
    };
  }, []), socket;
}

// app/voice-memory.ts
var import_react4 = require("react"), VMContext = (0, import_react4.createContext)({ voices: [], setVoices: () => {
} });
function useVMContext() {
  return (0, import_react4.useContext)(VMContext);
}

// app/root.tsx
var import_react6 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
async function loader() {
  return (0, import_node2.json)({
    ENV: {
      SERVER_PORT: process.env.SERVER_PORT,
      SERVER_IP: process.env.SERVER_IP
    }
  });
}
function App() {
  let data = (0, import_react5.useLoaderData)(), socket = useSocket(), [isLoading, setIsLoading] = (0, import_react6.useState)(!1), [voices, setVoices] = (0, import_react6.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocketContext.Provider, { value: socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VMContext.Provider, { value: { voices, setVoices }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoadingContext.Provider, { value: { isLoading, setIsLoading }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_hot_toast2.Toaster, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react5.LiveReload, { port: 8002 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_remix_utils = require("remix-utils");

// app/components/message.tsx
var import_bs = require("react-icons/bs"), import_ai = require("react-icons/ai"), import_audio = __toESM(require_audio()), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Message({
  msgOwnerUsername,
  voiceSrc
}) {
  let username = "1";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `chat ${username === msgOwnerUsername ? "chat-start" : "chat-end"} `, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chat-image avatar ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " rounded-full", children: username === msgOwnerUsername ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_bs.BsPerson, { size: 45, className: "fill-secondary" }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiOutlineRobot, { size: 45, className: "fill-secondary" }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 24,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chat-header font-mono text-xl text-secondary", children: username === msgOwnerUsername ? "You" : "ChatGPT" }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chat-bubble  bg-secondary text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_audio.default, { src: voiceSrc }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/message.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/message.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var import_audio_recorder3 = __toESM(require_audio_recorder3());
var import_react7 = require("react");

// app/components/language-selector.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), langs = [
  { iso: "fa", text: "persian" },
  { iso: "en", text: "english" },
  { iso: "ar", text: "arabic" },
  { iso: "af", text: "african" },
  { iso: "bs", text: "bosnian" },
  { iso: "ca", text: "catalan" },
  { iso: "cs", text: "Czech" },
  { iso: "cy", text: "Welsh" },
  { iso: "da", text: "danish" },
  { iso: "dr", text: "germany" },
  { iso: "et", text: "estonian" },
  { iso: "es", text: "spanish" },
  { iso: "el", text: "greek" },
  { iso: "fi", text: "finnish" },
  { iso: "fr", text: "french" },
  { iso: "hi", text: "hindi" },
  { iso: "hu", text: "hungarian" },
  { iso: "hy", text: "armanian" },
  { iso: "it", text: "italian" },
  { iso: "id", text: "indonesian" },
  { iso: "ja", text: "japanese" },
  { iso: "kn", text: "kannada" },
  { iso: "ko", text: "korean" },
  { iso: "pl", text: "polish" },
  { iso: "pt", text: "portuguese" },
  { iso: "la", text: "latin" },
  { iso: "lv", text: "latvian" },
  { iso: "ml", text: "malay" },
  { iso: "mk", text: "makedonain" },
  { iso: "mr", text: "marathi" },
  { iso: "ne", text: "nepali" },
  { iso: "nl", text: "dutch" },
  { iso: "no", text: "norwegian" },
  { iso: "ru", text: "russian" },
  { iso: "ro", text: "romanian" },
  { iso: "tr", text: "turkish" },
  { iso: "sr", text: "serbian" },
  { iso: "sk", text: "slovak" },
  { iso: "sv", text: "swedish" },
  { iso: "ur", text: "urdu" },
  { iso: "zh", text: "chinese" }
];
function LanguageSelector({ lang, setLang }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown text-secondary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "btn btn-primary m-1 w-20 min-[358px]:w-28", tabIndex: 0, children: lang }, void 0, !1, {
      fileName: "app/components/language-selector.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "ul",
      {
        tabIndex: 0,
        className: "msg-container dropdown-content menu shadow bg-primary rounded-sm w-20 min-[358px]:w-28 h-40 overflow-y-auto overflow-x-hidden flex flex-row scrol",
        children: langs.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { onClick: () => setLang(l.text), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: l.text }, void 0, !1, {
          fileName: "app/components/language-selector.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this) }, l.iso, !1, {
          fileName: "app/components/language-selector.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/language-selector.tsx",
        lineNumber: 53,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/language-selector.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  let { voices } = useVMContext(), { isLoading } = useLoadingContext(), [lang, setLang] = (0, import_react7.useState)("english");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col w-full bg-primary lg:w-[55%] xl:w-[35%] mx-auto min-h-screen max-h-screen h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex flex-row w-full h-32 bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "flex flex-col my-auto ml-2 lg:ml-16 text-primary font-mono font-extrabold text-3xl h-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "h-8", children: "OpenAI/ChatGPT" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("progress", { className: "progress progress-info bg-primary w-[100%] h-2" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 18,
          columnNumber: 25
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 18,
          columnNumber: 108
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-auto ml-auto mr-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LanguageSelector, { lang, setLang }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full msg-container p-4 max-h-[calc(100%-14rem)] h-[calc(100%-14rem)] overflow-y-scroll flex flex-col", children: voices.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-secondary font-mono font-extrabold flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-2xl mx-auto mt-32", children: "WELCOME" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "sm:text-xl  mx-auto mt-12", children: "To Chatting Click On Microphone" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm min-[380px]:text-base sm:text-xl  mx-auto mt-12", children: "Please Wait Until The Answer Is Ready" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: voices.map(
      (voice) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Message,
        {
          msgOwnerUsername: voice.sender,
          voiceSrc: voice.blobUrl
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 39,
          columnNumber: 17
        },
        this
      ) }, voice.id, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "loading .... " }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 50,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_audio_recorder3.AudioRecorder, { lang }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 52,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "525c10c1", entry: { module: "/build/entry.client-3TUG74CF.js", imports: ["/build/_shared/chunk-KX73WXZQ.js", "/build/_shared/chunk-NYPLP55S.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3UR2HREM.js", imports: ["/build/_shared/chunk-VHSI2ZSL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-HOES36DU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-525C10C1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
