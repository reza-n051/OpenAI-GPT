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
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_react_hot_toast2 = require("react-hot-toast");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YZJMS3DR.css";

// app/socket.ts
var import_react2 = require("react"), import_socket = require("socket.io-client"), import_react_hot_toast = require("react-hot-toast"), SocketCon text= (0, import_react2.createContext)(void 0);
function useSocket() {
  let [socket, setSocket] = (0, import_react2.useState)();
  return (0, import_react2.useEffect)(() => {
    let socket2 = (0, import_socket.io)("http://localhost:8000/");
    return setSocket(socket2), () => {
      socket2.close();
    };
  }, []), socket;
}

// app/voice-memory.ts
var import_react3 = require("react"), VMCon text= (0, import_react3.createContext)({ voices: [], setVoices: () => {
} });
function useVMContext() {
  return (0, import_react3.useContext)(VMContext);
}

// app/root.tsx
var import_react5 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let socket = useSocket(), [voices, setVoices] = (0, import_react5.useState)([]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocketContext.Provider, { value: socket, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VMContext.Provider, { value: { voices, setVoices }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_hot_toast2.Toaster, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.LiveReload, { port: 8002 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chat-header font-mono text-xl text-secondary", children: username === msgOwnerUsername ? "You" : "GPT" }, void 0, !1, {
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
var import_react6 = require("react");

// app/components/language-selector.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), langs = [
  "fa",
  "en",
  "lv",
  "af",
  "cs",
  "kn",
  "ar",
  "ja",
  "hu",
  "hi",
  "ko",
  "la",
  "cy",
  "da",
  "ml",
  "bs",
  "nl",
  "ne",
  "mr",
  "ru",
  "ca",
  "et",
  "fi",
  "sr",
  "it",
  "ur",
  "tr",
  "id",
  "hy",
  "no",
  "pl",
  "fr",
  "pt",
  "sk",
  "dr",
  "zh",
  "sv",
  "es",
  "mk",
  "el"
];
function LanguageSelector({ lang, setLang }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown text-secondary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "btn btn-primary m-1", tabIndex: 0, children: lang }, void 0, !1, {
      fileName: "app/components/language-selector.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "ul",
      {
        tabIndex: 0,
        className: "msg-container dropdown-content menu shadow bg-primary rounded-sm w-16 h-40 overflow-y-auto overflow-x-hidden flex flex-row scrol",
        children: langs.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { onClick: () => setLang(l), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: l }, void 0, !1, {
          fileName: "app/components/language-selector.tsx",
          lineNumber: 25,
          columnNumber: 25
        }, this) }, l, !1, {
          fileName: "app/components/language-selector.tsx",
          lineNumber: 24,
          columnNumber: 21
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/language-selector.tsx",
        lineNumber: 19,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/language-selector.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Index() {
  let { voices } = useVMContext(), [lang, setLang] = (0, import_react6.useState)("en");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col w-full bg-primary lg:w-[45%] mx-auto min-h-screen max-h-screen h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex flex-row w-full h-32 bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "my-auto ml-2 lg:ml-16 text-primary font-mono font-extrabold text-3xl", children: "OpenAI/GPT" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-auto ml-auto mr-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LanguageSelector, { lang, setLang }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full msg-container p-4 max-h-[calc(100%-14rem)] h-[calc(100%-14rem)] overflow-y-scroll flex flex-col", children: voices.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-secondary font-mono font-extrabold flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-3xl mx-auto mt-52", children: "WELCOME" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xl  mx-auto mt-12", children: "For Start Chatting with GPT-3 Click On Microphone ..." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
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
          lineNumber: 33,
          columnNumber: 17
        },
        this
      ) }, voice.id, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this)
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "loading .... " }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 44,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_audio_recorder3.AudioRecorder, { lang }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 46,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "aafaf4dd", entry: { module: "/build/entry.client-7E2ZW3GE.js", imports: ["/build/_shared/chunk-KDYTP4YU.js", "/build/_shared/chunk-NYPLP55S.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Z2JISB2X.js", imports: ["/build/_shared/chunk-4VGX42PY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CXO3X5YK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-AAFAF4DD.js" };

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
