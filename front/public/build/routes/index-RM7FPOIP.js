import {
  useChat,
  useVMContext
} from "/build/_shared/chunk-Q4KOK4IL.js";
import {
  __commonJS,
  __esm,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NYPLP55S.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React4 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var con text= type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV6(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement2(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV6(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/tslib/tslib.es6.js
var __assign2;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.js"() {
    __assign2 = function() {
      __assign2 = Object.assign || function __assign3(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/recordrtc/RecordRTC.js
var require_RecordRTC = __commonJS({
  "node_modules/recordrtc/RecordRTC.js"(exports, module) {
    "use strict";
    function RecordRTC(mediaStream, config) {
      if (!mediaStream) {
        throw "First parameter is required.";
      }
      config = config || {
        type: "video"
      };
      config = new RecordRTCConfiguration(mediaStream, config);
      var self = this;
      function startRecording(config2) {
        if (!config.disableLogs) {
          console.log("RecordRTC version: ", self.version);
        }
        if (!!config2) {
          config = new RecordRTCConfiguration(mediaStream, config2);
        }
        if (!config.disableLogs) {
          console.log("started recording " + config.type + " stream.");
        }
        if (mediaRecorder) {
          mediaRecorder.clearRecordedData();
          mediaRecorder.record();
          setState("recording");
          if (self.recordingDuration) {
            handleRecordingDuration();
          }
          return self;
        }
        initRecorder(function() {
          if (self.recordingDuration) {
            handleRecordingDuration();
          }
        });
        return self;
      }
      function initRecorder(initCallback) {
        if (initCallback) {
          config.initCallback = function() {
            initCallback();
            initCallback = config.initCallback = null;
          };
        }
        var Recorder = new GetRecorderType(mediaStream, config);
        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();
        setState("recording");
        if (!config.disableLogs) {
          console.log("Initialized recorderType:", mediaRecorder.constructor.name, "for output-type:", config.type);
        }
      }
      function stopRecording(callback) {
        callback = callback || function() {
        };
        if (!mediaRecorder) {
          warningLog();
          return;
        }
        if (self.state === "paused") {
          self.resumeRecording();
          setTimeout(function() {
            stopRecording(callback);
          }, 1);
          return;
        }
        if (self.state !== "recording" && !config.disableLogs) {
          console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }
        if (!config.disableLogs) {
          console.log("Stopped recording " + config.type + " stream.");
        }
        if (config.type !== "gif") {
          mediaRecorder.stop(_callback);
        } else {
          mediaRecorder.stop();
          _callback();
        }
        setState("stopped");
        function _callback(__blob) {
          if (!mediaRecorder) {
            if (typeof callback.call === "function") {
              callback.call(self, "");
            } else {
              callback("");
            }
            return;
          }
          Object.keys(mediaRecorder).forEach(function(key) {
            if (typeof mediaRecorder[key] === "function") {
              return;
            }
            self[key] = mediaRecorder[key];
          });
          var blob = mediaRecorder.blob;
          if (!blob) {
            if (__blob) {
              mediaRecorder.blob = blob = __blob;
            } else {
              throw "Recording failed.";
            }
          }
          if (blob && !config.disableLogs) {
            console.log(blob.type, "->", bytesToSize(blob.size));
          }
          if (callback) {
            var url;
            try {
              url = URL2.createObjectURL(blob);
            } catch (e) {
            }
            if (typeof callback.call === "function") {
              callback.call(self, url);
            } else {
              callback(url);
            }
          }
          if (!config.autoWriteToDisk) {
            return;
          }
          getDataURL(function(dataURL) {
            var parameter = {};
            parameter[config.type + "Blob"] = dataURL;
            DiskStorage.Store(parameter);
          });
        }
      }
      function pauseRecording() {
        if (!mediaRecorder) {
          warningLog();
          return;
        }
        if (self.state !== "recording") {
          if (!config.disableLogs) {
            console.warn("Unable to pause the recording. Recording state: ", self.state);
          }
          return;
        }
        setState("paused");
        mediaRecorder.pause();
        if (!config.disableLogs) {
          console.log("Paused recording.");
        }
      }
      function resumeRecording() {
        if (!mediaRecorder) {
          warningLog();
          return;
        }
        if (self.state !== "paused") {
          if (!config.disableLogs) {
            console.warn("Unable to resume the recording. Recording state: ", self.state);
          }
          return;
        }
        setState("recording");
        mediaRecorder.resume();
        if (!config.disableLogs) {
          console.log("Resumed recording.");
        }
      }
      function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
      }
      function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
          throw "Pass a callback function over getDataURL.";
        }
        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;
        if (!blob) {
          if (!config.disableLogs) {
            console.warn("Blob encoder did not finish its job yet.");
          }
          setTimeout(function() {
            getDataURL(callback, _mediaRecorder);
          }, 1e3);
          return;
        }
        if (typeof Worker !== "undefined" && !navigator.mozGetUserMedia) {
          var webWorker = processInWebWorker(readFile);
          webWorker.onmessage = function(event) {
            callback(event.data);
          };
          webWorker.postMessage(blob);
        } else {
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = function(event) {
            callback(event.target.result);
          };
        }
        function processInWebWorker(_function) {
          try {
            var blob2 = URL2.createObjectURL(new Blob([
              _function.toString(),
              "this.onmessage =  function (eee) {" + _function.name + "(eee.data);}"
            ], {
              type: "application/javascript"
            }));
            var worker = new Worker(blob2);
            URL2.revokeObjectURL(blob2);
            return worker;
          } catch (e) {
          }
        }
      }
      function handleRecordingDuration(counter) {
        counter = counter || 0;
        if (self.state === "paused") {
          setTimeout(function() {
            handleRecordingDuration(counter);
          }, 1e3);
          return;
        }
        if (self.state === "stopped") {
          return;
        }
        if (counter >= self.recordingDuration) {
          stopRecording(self.onRecordingStopped);
          return;
        }
        counter += 1e3;
        setTimeout(function() {
          handleRecordingDuration(counter);
        }, 1e3);
      }
      function setState(state) {
        if (!self) {
          return;
        }
        self.state = state;
        if (typeof self.onStateChanged.call === "function") {
          self.onStateChanged.call(self, state);
        } else {
          self.onStateChanged(state);
        }
      }
      var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + " recorder.";
      function warningLog() {
        if (config.disableLogs === true) {
          return;
        }
        console.warn(WARNING);
      }
      var mediaRecorder;
      var returnObject = {
        startRecording,
        stopRecording,
        pauseRecording,
        resumeRecording,
        initRecorder,
        setRecordingDuration: function(recordingDuration, callback) {
          if (typeof recordingDuration === "undefined") {
            throw "recordingDuration is required.";
          }
          if (typeof recordingDuration !== "number") {
            throw "recordingDuration must be a number.";
          }
          self.recordingDuration = recordingDuration;
          self.onRecordingStopped = callback || function() {
          };
          return {
            onRecordingStopped: function(callback2) {
              self.onRecordingStopped = callback2;
            }
          };
        },
        clearRecordedData: function() {
          if (!mediaRecorder) {
            warningLog();
            return;
          }
          mediaRecorder.clearRecordedData();
          if (!config.disableLogs) {
            console.log("Cleared old recorded data.");
          }
        },
        getBlob: function() {
          if (!mediaRecorder) {
            warningLog();
            return;
          }
          return mediaRecorder.blob;
        },
        getDataURL,
        toURL: function() {
          if (!mediaRecorder) {
            warningLog();
            return;
          }
          return URL2.createObjectURL(mediaRecorder.blob);
        },
        getInternalRecorder: function() {
          return mediaRecorder;
        },
        save: function(fileName) {
          if (!mediaRecorder) {
            warningLog();
            return;
          }
          invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },
        getFromDisk: function(callback) {
          if (!mediaRecorder) {
            warningLog();
            return;
          }
          RecordRTC.getFromDisk(config.type, callback);
        },
        setAdvertisementArray: function(arrayOfWebPImages) {
          config.advertisement = [];
          var length = arrayOfWebPImages.length;
          for (var i = 0; i < length; i++) {
            config.advertisement.push({
              duration: i,
              image: arrayOfWebPImages[i]
            });
          }
        },
        blob: null,
        bufferSize: 0,
        sampleRate: 0,
        buffer: null,
        reset: function() {
          if (self.state === "recording" && !config.disableLogs) {
            console.warn("Stop an active recorder.");
          }
          if (mediaRecorder && typeof mediaRecorder.clearRecordedData === "function") {
            mediaRecorder.clearRecordedData();
          }
          mediaRecorder = null;
          setState("inactive");
          self.blob = null;
        },
        onStateChanged: function(state) {
          if (!config.disableLogs) {
            console.log("Recorder state changed:", state);
          }
        },
        state: "inactive",
        getState: function() {
          return self.state;
        },
        destroy: function() {
          var disableLogsCache = config.disableLogs;
          config = {
            disableLogs: true
          };
          self.reset();
          setState("destroyed");
          returnObject = self = null;
          if (Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor.close();
            Storage.AudioContextConstructor = null;
          }
          config.disableLogs = disableLogsCache;
          if (!config.disableLogs) {
            console.log("RecordRTC is destroyed.");
          }
        },
        version: "5.6.2"
      };
      if (!this) {
        self = returnObject;
        return returnObject;
      }
      for (var prop in returnObject) {
        this[prop] = returnObject[prop];
      }
      self = this;
      return returnObject;
    }
    RecordRTC.version = "5.6.2";
    if (typeof module !== "undefined") {
      module.exports = RecordRTC;
    }
    if (typeof define === "function" && define.amd) {
      define("RecordRTC", [], function() {
        return RecordRTC;
      });
    }
    RecordRTC.getFromDisk = function(type, callback) {
      if (!callback) {
        throw "callback is mandatory.";
      }
      console.log("Getting recorded " + (type === "all" ? "blobs" : type + " blob ") + " from disk!");
      DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== "all" && _type === type + "Blob" && callback) {
          callback(dataURL);
        }
        if (type === "all" && callback) {
          callback(dataURL, _type.replace("Blob", ""));
        }
      });
    };
    RecordRTC.writeToDisk = function(options) {
      console.log("Writing recorded blob(s) to disk!");
      options = options || {};
      if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
          options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
              DiskStorage.Store({
                audioBlob: audioDataURL,
                videoBlob: videoDataURL,
                gifBlob: gifDataURL
              });
            });
          });
        });
      } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
          options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
              audioBlob: audioDataURL,
              videoBlob: videoDataURL
            });
          });
        });
      } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
          options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
              audioBlob: audioDataURL,
              gifBlob: gifDataURL
            });
          });
        });
      } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
          options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
              videoBlob: videoDataURL,
              gifBlob: gifDataURL
            });
          });
        });
      } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
          DiskStorage.Store({
            audioBlob: audioDataURL
          });
        });
      } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
          DiskStorage.Store({
            videoBlob: videoDataURL
          });
        });
      } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
          DiskStorage.Store({
            gifBlob: gifDataURL
          });
        });
      }
    };
    function RecordRTCConfiguration(mediaStream, config) {
      if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
          config.type = "video";
        } else if (!!config.audio && !config.video) {
          config.type = "audio";
        }
      }
      if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || typeof WebAssemblyRecorder !== "undefined" && config.recorderType === WebAssemblyRecorder) {
          config.type = "video";
        } else if (config.recorderType === GifRecorder) {
          config.type = "gif";
        } else if (config.recorderType === StereoAudioRecorder2) {
          config.type = "audio";
        } else if (config.recorderType === MediaStreamRecorder) {
          if (getTracks(mediaStream, "audio").length && getTracks(mediaStream, "video").length) {
            config.type = "video";
          } else if (!getTracks(mediaStream, "audio").length && getTracks(mediaStream, "video").length) {
            config.type = "video";
          } else if (getTracks(mediaStream, "audio").length && !getTracks(mediaStream, "video").length) {
            config.type = "audio";
          } else {
          }
        }
      }
      if (typeof MediaStreamRecorder !== "undefined" && typeof MediaRecorder !== "undefined" && "requestData" in MediaRecorder.prototype) {
        if (!config.mimeType) {
          config.mimeType = "video/webm";
        }
        if (!config.type) {
          config.type = config.mimeType.split("/")[0];
        }
        if (!config.bitsPerSecond) {
        }
      }
      if (!config.type) {
        if (config.mimeType) {
          config.type = config.mimeType.split("/")[0];
        }
        if (!config.type) {
          config.type = "audio";
        }
      }
      return config;
    }
    function GetRecorderType(mediaStream, config) {
      var recorder;
      if (isChrome || isEdge || isOpera) {
        recorder = StereoAudioRecorder2;
      }
      if (typeof MediaRecorder !== "undefined" && "requestData" in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
      }
      if (config.type === "video" && (isChrome || isOpera)) {
        recorder = WhammyRecorder;
        if (typeof WebAssemblyRecorder !== "undefined" && typeof ReadableStream !== "undefined") {
          recorder = WebAssemblyRecorder;
        }
      }
      if (config.type === "gif") {
        recorder = GifRecorder;
      }
      if (config.type === "canvas") {
        recorder = CanvasRecorder;
      }
      if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== "undefined" && "requestData" in MediaRecorder.prototype) {
        if (getTracks(mediaStream, "video").length || getTracks(mediaStream, "audio").length) {
          if (config.type === "audio") {
            if (typeof MediaRecorder.isTypeSupported === "function" && MediaRecorder.isTypeSupported("audio/webm")) {
              recorder = MediaStreamRecorder;
            }
          } else {
            if (typeof MediaRecorder.isTypeSupported === "function" && MediaRecorder.isTypeSupported("video/webm")) {
              recorder = MediaStreamRecorder;
            }
          }
        }
      }
      if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
      }
      if (config.recorderType) {
        recorder = config.recorderType;
      }
      if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log("Using recorderType:", recorder.name || recorder.constructor.name);
      }
      if (!recorder && isSafari) {
        recorder = MediaStreamRecorder;
      }
      return recorder;
    }
    function MRecordRTC(mediaStream) {
      this.addStream = function(_mediaStream) {
        if (_mediaStream) {
          mediaStream = _mediaStream;
        }
      };
      this.mediaType = {
        audio: true,
        video: true
      };
      this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
          audio: null,
          video: null,
          gif: null
        };
        if (typeof mediaType.audio !== "function" && isMediaRecorderCompatible() && !getTracks(mediaStream, "audio").length) {
          mediaType.audio = false;
        }
        if (typeof mediaType.video !== "function" && isMediaRecorderCompatible() && !getTracks(mediaStream, "video").length) {
          mediaType.video = false;
        }
        if (typeof mediaType.gif !== "function" && isMediaRecorderCompatible() && !getTracks(mediaStream, "video").length) {
          mediaType.gif = false;
        }
        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
          throw "MediaStream must have either audio or video tracks.";
        }
        if (!!mediaType.audio) {
          recorderType = null;
          if (typeof mediaType.audio === "function") {
            recorderType = mediaType.audio;
          }
          this.audioRecorder = new RecordRTC(mediaStream, {
            type: "audio",
            bufferSize: this.bufferSize,
            sampleRate: this.sampleRate,
            numberOfAudioChannels: this.numberOfAudioChannels || 2,
            disableLogs: this.disableLogs,
            recorderType,
            mimeType: mimeType.audio,
            timeSlice: this.timeSlice,
            onTimeStamp: this.onTimeStamp
          });
          if (!mediaType.video) {
            this.audioRecorder.startRecording();
          }
        }
        if (!!mediaType.video) {
          recorderType = null;
          if (typeof mediaType.video === "function") {
            recorderType = mediaType.video;
          }
          var newStream = mediaStream;
          if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === "function") {
            var videoTrack = getTracks(mediaStream, "video")[0];
            if (isFirefox) {
              newStream = new MediaStream();
              newStream.addTrack(videoTrack);
              if (recorderType && recorderType === WhammyRecorder) {
                recorderType = MediaStreamRecorder;
              }
            } else {
              newStream = new MediaStream();
              newStream.addTrack(videoTrack);
            }
          }
          this.videoRecorder = new RecordRTC(newStream, {
            type: "video",
            video: this.video,
            canvas: this.canvas,
            frameInterval: this.frameInterval || 10,
            disableLogs: this.disableLogs,
            recorderType,
            mimeType: mimeType.video,
            timeSlice: this.timeSlice,
            onTimeStamp: this.onTimeStamp,
            workerPath: this.workerPath,
            webAssemblyPath: this.webAssemblyPath,
            frameRate: this.frameRate,
            bitrate: this.bitrate
          });
          if (!mediaType.audio) {
            this.videoRecorder.startRecording();
          }
        }
        if (!!mediaType.audio && !!mediaType.video) {
          var self = this;
          var isSingleRecorder = isMediaRecorderCompatible() === true;
          if (mediaType.audio instanceof StereoAudioRecorder2 && !!mediaType.video) {
            isSingleRecorder = false;
          } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
            isSingleRecorder = false;
          }
          if (isSingleRecorder === true) {
            self.audioRecorder = null;
            self.videoRecorder.startRecording();
          } else {
            self.videoRecorder.initRecorder(function() {
              self.audioRecorder.initRecorder(function() {
                self.videoRecorder.startRecording();
                self.audioRecorder.startRecording();
              });
            });
          }
        }
        if (!!mediaType.gif) {
          recorderType = null;
          if (typeof mediaType.gif === "function") {
            recorderType = mediaType.gif;
          }
          this.gifRecorder = new RecordRTC(mediaStream, {
            type: "gif",
            frameRate: this.frameRate || 200,
            quality: this.quality || 10,
            disableLogs: this.disableLogs,
            recorderType,
            mimeType: mimeType.gif
          });
          this.gifRecorder.startRecording();
        }
      };
      this.stopRecording = function(callback) {
        callback = callback || function() {
        };
        if (this.audioRecorder) {
          this.audioRecorder.stopRecording(function(blobURL) {
            callback(blobURL, "audio");
          });
        }
        if (this.videoRecorder) {
          this.videoRecorder.stopRecording(function(blobURL) {
            callback(blobURL, "video");
          });
        }
        if (this.gifRecorder) {
          this.gifRecorder.stopRecording(function(blobURL) {
            callback(blobURL, "gif");
          });
        }
      };
      this.pauseRecording = function() {
        if (this.audioRecorder) {
          this.audioRecorder.pauseRecording();
        }
        if (this.videoRecorder) {
          this.videoRecorder.pauseRecording();
        }
        if (this.gifRecorder) {
          this.gifRecorder.pauseRecording();
        }
      };
      this.resumeRecording = function() {
        if (this.audioRecorder) {
          this.audioRecorder.resumeRecording();
        }
        if (this.videoRecorder) {
          this.videoRecorder.resumeRecording();
        }
        if (this.gifRecorder) {
          this.gifRecorder.resumeRecording();
        }
      };
      this.getBlob = function(callback) {
        var output = {};
        if (this.audioRecorder) {
          output.audio = this.audioRecorder.getBlob();
        }
        if (this.videoRecorder) {
          output.video = this.videoRecorder.getBlob();
        }
        if (this.gifRecorder) {
          output.gif = this.gifRecorder.getBlob();
        }
        if (callback) {
          callback(output);
        }
        return output;
      };
      this.destroy = function() {
        if (this.audioRecorder) {
          this.audioRecorder.destroy();
          this.audioRecorder = null;
        }
        if (this.videoRecorder) {
          this.videoRecorder.destroy();
          this.videoRecorder = null;
        }
        if (this.gifRecorder) {
          this.gifRecorder.destroy();
          this.gifRecorder = null;
        }
      };
      this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
          if (blob.audio && blob.video) {
            getDataURL(blob.audio, function(_audioDataURL) {
              getDataURL(blob.video, function(_videoDataURL) {
                callback({
                  audio: _audioDataURL,
                  video: _videoDataURL
                });
              });
            });
          } else if (blob.audio) {
            getDataURL(blob.audio, function(_audioDataURL) {
              callback({
                audio: _audioDataURL
              });
            });
          } else if (blob.video) {
            getDataURL(blob.video, function(_videoDataURL) {
              callback({
                video: _videoDataURL
              });
            });
          }
        });
        function getDataURL(blob, callback00) {
          if (typeof Worker !== "undefined") {
            var webWorker = processInWebWorker(function readFile(_blob) {
              postMessage(new FileReaderSync().readAsDataURL(_blob));
            });
            webWorker.onmessage = function(event) {
              callback00(event.data);
            };
            webWorker.postMessage(blob);
          } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
              callback00(event.target.result);
            };
          }
        }
        function processInWebWorker(_function) {
          var blob = URL2.createObjectURL(new Blob([
            _function.toString(),
            "this.onmessage =  function (eee) {" + _function.name + "(eee.data);}"
          ], {
            type: "application/javascript"
          }));
          var worker = new Worker(blob);
          var url;
          if (typeof URL2 !== "undefined") {
            url = URL2;
          } else if (typeof webkitURL !== "undefined") {
            url = webkitURL;
          } else {
            throw "Neither URL nor webkitURL detected.";
          }
          url.revokeObjectURL(blob);
          return worker;
        }
      };
      this.writeToDisk = function() {
        RecordRTC.writeToDisk({
          audio: this.audioRecorder,
          video: this.videoRecorder,
          gif: this.gifRecorder
        });
      };
      this.save = function(args) {
        args = args || {
          audio: true,
          video: true,
          gif: true
        };
        if (!!args.audio && this.audioRecorder) {
          this.audioRecorder.save(typeof args.audio === "string" ? args.audio : "");
        }
        if (!!args.video && this.videoRecorder) {
          this.videoRecorder.save(typeof args.video === "string" ? args.video : "");
        }
        if (!!args.gif && this.gifRecorder) {
          this.gifRecorder.save(typeof args.gif === "string" ? args.gif : "");
        }
      };
    }
    MRecordRTC.getFromDisk = RecordRTC.getFromDisk;
    MRecordRTC.writeToDisk = RecordRTC.writeToDisk;
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.MRecordRTC = MRecordRTC;
    }
    var browserFakeUserAgent = "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";
    (function(that) {
      if (!that) {
        return;
      }
      if (typeof window !== "undefined") {
        return;
      }
      if (typeof globalThis === "undefined") {
        return;
      }
      globalThis.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {
        }
      };
      if (!globalThis.console) {
        globalThis.console = {};
      }
      if (typeof globalThis.console.log === "undefined" || typeof globalThis.console.error === "undefined") {
        globalThis.console.error = globalThis.console.log = globalThis.console.log || function() {
          console.log(arguments);
        };
      }
      if (typeof document === "undefined") {
        that.document = {
          documentElement: {
            appendChild: function() {
              return "";
            }
          }
        };
        document.createElement = document.captureStream = document.mozCaptureStream = function() {
          var obj = {
            getContext: function() {
              return obj;
            },
            play: function() {
            },
            pause: function() {
            },
            drawImage: function() {
            },
            toDataURL: function() {
              return "";
            },
            style: {}
          };
          return obj;
        };
        that.HTMLVideoElement = function() {
        };
      }
      if (typeof location === "undefined") {
        that.location = {
          protocol: "file:",
          href: "",
          hash: ""
        };
      }
      if (typeof screen === "undefined") {
        that.screen = {
          width: 0,
          height: 0
        };
      }
      if (typeof URL2 === "undefined") {
        that.URL = {
          createObjectURL: function() {
            return "";
          },
          revokeObjectURL: function() {
            return "";
          }
        };
      }
      that.window = globalThis;
    })(typeof globalThis !== "undefined" ? globalThis : null);
    var requestAnimationFrame = window.requestAnimationFrame;
    if (typeof requestAnimationFrame === "undefined") {
      if (typeof webkitRequestAnimationFrame !== "undefined") {
        requestAnimationFrame = webkitRequestAnimationFrame;
      } else if (typeof mozRequestAnimationFrame !== "undefined") {
        requestAnimationFrame = mozRequestAnimationFrame;
      } else if (typeof msRequestAnimationFrame !== "undefined") {
        requestAnimationFrame = msRequestAnimationFrame;
      } else if (typeof requestAnimationFrame === "undefined") {
        lastTime = 0;
        requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = setTimeout(function() {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }
    }
    var lastTime;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    if (typeof cancelAnimationFrame === "undefined") {
      if (typeof webkitCancelAnimationFrame !== "undefined") {
        cancelAnimationFrame = webkitCancelAnimationFrame;
      } else if (typeof mozCancelAnimationFrame !== "undefined") {
        cancelAnimationFrame = mozCancelAnimationFrame;
      } else if (typeof msCancelAnimationFrame !== "undefined") {
        cancelAnimationFrame = msCancelAnimationFrame;
      } else if (typeof cancelAnimationFrame === "undefined") {
        cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    }
    var AudioCon text= window.AudioContext;
    if (typeof AudioCon text=== "undefined") {
      if (typeof webkitAudioCon text!== "undefined") {
        AudioCon text= webkitAudioContext;
      }
      if (typeof mozAudioCon text!== "undefined") {
        AudioCon text= mozAudioContext;
      }
    }
    var URL2 = window.URL;
    if (typeof URL2 === "undefined" && typeof webkitURL !== "undefined") {
      URL2 = webkitURL;
    }
    if (typeof navigator !== "undefined" && typeof navigator.getUserMedia === "undefined") {
      if (typeof navigator.webkitGetUserMedia !== "undefined") {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
      }
      if (typeof navigator.mozGetUserMedia !== "undefined") {
        navigator.getUserMedia = navigator.mozGetUserMedia;
      }
    }
    var isEdge = navigator.userAgent.indexOf("Edge") !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
    var isOpera = !!window.opera || navigator.userAgent.indexOf("OPR/") !== -1;
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && "netscape" in window && / rv:/.test(navigator.userAgent);
    var isChrome = !isOpera && !isEdge && !!navigator.webkitGetUserMedia || isElectron() || navigator.userAgent.toLowerCase().indexOf("chrome/") !== -1;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari && !isChrome && navigator.userAgent.indexOf("CriOS") !== -1) {
      isSafari = false;
      isChrome = true;
    }
    var MediaStream = window.MediaStream;
    if (typeof MediaStream === "undefined" && typeof webkitMediaStream !== "undefined") {
      MediaStream = webkitMediaStream;
    }
    if (typeof MediaStream !== "undefined") {
      if (typeof MediaStream.prototype.stop === "undefined") {
        MediaStream.prototype.stop = function() {
          this.getTracks().forEach(function(track) {
            track.stop();
          });
        };
      }
    }
    function bytesToSize(bytes) {
      var k = 1e3;
      var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes === 0) {
        return "0 Bytes";
      }
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    }
    function invokeSaveAsDialog(file, fileName) {
      if (!file) {
        throw "Blob object is required.";
      }
      if (!file.type) {
        try {
          file.type = "video/webm";
        } catch (e) {
        }
      }
      var fileExtension = (file.type || "video/webm").split("/")[1];
      if (fileExtension.indexOf(";") !== -1) {
        fileExtension = fileExtension.split(";")[0];
      }
      if (fileName && fileName.indexOf(".") !== -1) {
        var splitted = fileName.split(".");
        fileName = splitted[0];
        fileExtension = splitted[1];
      }
      var fileFullName = (fileName || Math.round(Math.random() * 9999999999) + 888888888) + "." + fileExtension;
      if (typeof navigator.msSaveOrOpenBlob !== "undefined") {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
      } else if (typeof navigator.msSaveBlob !== "undefined") {
        return navigator.msSaveBlob(file, fileFullName);
      }
      var hyperlink = document.createElement("a");
      hyperlink.href = URL2.createObjectURL(file);
      hyperlink.download = fileFullName;
      hyperlink.style = "display:none;opacity:0;color:transparent;";
      (document.body || document.documentElement).appendChild(hyperlink);
      if (typeof hyperlink.click === "function") {
        hyperlink.click();
      } else {
        hyperlink.target = "_blank";
        hyperlink.dispatchEvent(new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true
        }));
      }
      URL2.revokeObjectURL(hyperlink.href);
    }
    function isElectron() {
      if (typeof window !== "undefined" && typeof window.process === "object" && window.process.type === "renderer") {
        return true;
      }
      if (typeof process !== "undefined" && typeof process.versions === "object" && !!process.versions.electron) {
        return true;
      }
      if (typeof navigator === "object" && typeof navigator.userAgent === "string" && navigator.userAgent.indexOf("Electron") >= 0) {
        return true;
      }
      return false;
    }
    function getTracks(stream, kind) {
      if (!stream || !stream.getTracks) {
        return [];
      }
      return stream.getTracks().filter(function(t) {
        return t.kind === (kind || "audio");
      });
    }
    function setSrcObject(stream, element) {
      if ("srcObject" in element) {
        element.srcObject = stream;
      } else if ("mozSrcObject" in element) {
        element.mozSrcObject = stream;
      } else {
        element.srcObject = stream;
      }
    }
    function getSeekableBlob(inputBlob, callback) {
      if (typeof EBML === "undefined") {
        throw new Error("Please link: https://www.webrtc-experiment.com/EBML.js");
      }
      var reader = new EBML.Reader();
      var decoder = new EBML.Decoder();
      var tools = EBML.tools;
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var ebmlElms = decoder.decode(this.result);
        ebmlElms.forEach(function(element) {
          reader.read(element);
        });
        reader.stop();
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
        var body = this.result.slice(reader.metadataSize);
        var newBlob = new Blob([refinedMetadataBuf, body], {
          type: "video/webm"
        });
        callback(newBlob);
      };
      fileReader.readAsArrayBuffer(inputBlob);
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog;
      RecordRTC.getTracks = getTracks;
      RecordRTC.getSeekableBlob = getSeekableBlob;
      RecordRTC.bytesToSize = bytesToSize;
      RecordRTC.isElectron = isElectron;
    }
    var Storage = {};
    if (typeof AudioCon text!== "undefined") {
      Storage.AudioCon text= AudioContext;
    } else if (typeof webkitAudioCon text!== "undefined") {
      Storage.AudioCon text= webkitAudioContext;
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.Storage = Storage;
    }
    function isMediaRecorderCompatible() {
      if (isFirefox || isSafari || isEdge) {
        return true;
      }
      var nVer = navigator.appVersion;
      var nAgt = navigator.userAgent;
      var fullVersion = "" + parseFloat(navigator.appVersion);
      var majorVersion = parseInt(navigator.appVersion, 10);
      var nameOffset, verOffset, ix;
      if (isChrome || isOpera) {
        verOffset = nAgt.indexOf("Chrome");
        fullVersion = nAgt.substring(verOffset + 7);
      }
      if ((ix = fullVersion.indexOf(";")) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
      }
      if ((ix = fullVersion.indexOf(" ")) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
      }
      majorVersion = parseInt("" + fullVersion, 10);
      if (isNaN(majorVersion)) {
        fullVersion = "" + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
      }
      return majorVersion >= 49;
    }
    function MediaStreamRecorder(mediaStream, config) {
      var self = this;
      if (typeof mediaStream === "undefined") {
        throw 'First argument "MediaStream" is required.';
      }
      if (typeof MediaRecorder === "undefined") {
        throw "Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.";
      }
      config = config || {
        mimeType: "video/webm"
      };
      if (config.type === "audio") {
        if (getTracks(mediaStream, "video").length && getTracks(mediaStream, "audio").length) {
          var stream;
          if (!!navigator.mozGetUserMedia) {
            stream = new MediaStream();
            stream.addTrack(getTracks(mediaStream, "audio")[0]);
          } else {
            stream = new MediaStream(getTracks(mediaStream, "audio"));
          }
          mediaStream = stream;
        }
        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf("audio") === -1) {
          config.mimeType = isChrome ? "audio/webm" : "audio/ogg";
        }
        if (config.mimeType && config.mimeType.toString().toLowerCase() !== "audio/ogg" && !!navigator.mozGetUserMedia) {
          config.mimeType = "audio/ogg";
        }
      }
      var arrayOfBlobs = [];
      this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
      };
      this.record = function() {
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];
        var recorderHints = config;
        if (!config.disableLogs) {
          console.log("Passing following config over MediaRecorder API.", recorderHints);
        }
        if (mediaRecorder) {
          mediaRecorder = null;
        }
        if (isChrome && !isMediaRecorderCompatible()) {
          recorderHints = "video/vp8";
        }
        if (typeof MediaRecorder.isTypeSupported === "function" && recorderHints.mimeType) {
          if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
            if (!config.disableLogs) {
              console.warn("MediaRecorder API seems unable to record mimeType:", recorderHints.mimeType);
            }
            recorderHints.mimeType = config.type === "audio" ? "audio/webm" : "video/webm";
          }
        }
        try {
          mediaRecorder = new MediaRecorder(mediaStream, recorderHints);
          config.mimeType = recorderHints.mimeType;
        } catch (e) {
          mediaRecorder = new MediaRecorder(mediaStream);
        }
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && "canRecordMimeType" in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
          if (!config.disableLogs) {
            console.warn("MediaRecorder API seems unable to record mimeType:", recorderHints.mimeType);
          }
        }
        mediaRecorder.ondataavailable = function(e) {
          if (e.data) {
            allStates.push("ondataavailable: " + bytesToSize(e.data.size));
          }
          if (typeof config.timeSlice === "number") {
            if (e.data && e.data.size) {
              arrayOfBlobs.push(e.data);
              updateTimeStamp();
              if (typeof config.ondataavailable === "function") {
                var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                  type: getMimeType(recorderHints)
                });
                config.ondataavailable(blob);
              }
            }
            return;
          }
          if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
            if (self.recordingCallback) {
              self.recordingCallback(new Blob([], {
                type: getMimeType(recorderHints)
              }));
              self.recordingCallback = null;
            }
            return;
          }
          self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
            type: getMimeType(recorderHints)
          });
          if (self.recordingCallback) {
            self.recordingCallback(self.blob);
            self.recordingCallback = null;
          }
        };
        mediaRecorder.onstart = function() {
          allStates.push("started");
        };
        mediaRecorder.onpause = function() {
          allStates.push("paused");
        };
        mediaRecorder.onresume = function() {
          allStates.push("resumed");
        };
        mediaRecorder.onstop = function() {
          allStates.push("stopped");
        };
        mediaRecorder.onerror = function(error) {
          if (!error) {
            return;
          }
          if (!error.name) {
            error.name = "UnknownError";
          }
          allStates.push("error: " + error);
          if (!config.disableLogs) {
            if (error.name.toString().toLowerCase().indexOf("invalidstate") !== -1) {
              console.error("The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.", error);
            } else if (error.name.toString().toLowerCase().indexOf("notsupported") !== -1) {
              console.error("MIME type (", recorderHints.mimeType, ") is not supported.", error);
            } else if (error.name.toString().toLowerCase().indexOf("security") !== -1) {
              console.error("MediaRecorder security error", error);
            } else if (error.name === "OutOfMemory") {
              console.error("The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.", error);
            } else if (error.name === "IllegalStreamModification") {
              console.error("A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.", error);
            } else if (error.name === "OtherRecordingError") {
              console.error("Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.", error);
            } else if (error.name === "GenericError") {
              console.error("The UA cannot provide the codec or recording option that has been requested.", error);
            } else {
              console.error("MediaRecorder Error", error);
            }
          }
          (function(looper) {
            if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === "inactive") {
              delete config.timeslice;
              mediaRecorder.start(10 * 60 * 1e3);
              return;
            }
            setTimeout(looper, 1e3);
          })();
          if (mediaRecorder.state !== "inactive" && mediaRecorder.state !== "stopped") {
            mediaRecorder.stop();
          }
        };
        if (typeof config.timeSlice === "number") {
          updateTimeStamp();
          mediaRecorder.start(config.timeSlice);
        } else {
          mediaRecorder.start(36e5);
        }
        if (config.initCallback) {
          config.initCallback();
        }
      };
      this.timestamps = [];
      function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());
        if (typeof config.onTimeStamp === "function") {
          config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
      }
      function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
          return mediaRecorder.mimeType;
        }
        return secondObject.mimeType || "video/webm";
      }
      this.stop = function(callback) {
        callback = callback || function() {
        };
        self.manuallyStopped = true;
        if (!mediaRecorder) {
          return;
        }
        this.recordingCallback = callback;
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
        }
        if (typeof config.timeSlice === "number") {
          setTimeout(function() {
            self.blob = new Blob(arrayOfBlobs, {
              type: getMimeType(config)
            });
            self.recordingCallback(self.blob);
          }, 100);
        }
      };
      this.pause = function() {
        if (!mediaRecorder) {
          return;
        }
        if (mediaRecorder.state === "recording") {
          mediaRecorder.pause();
        }
      };
      this.resume = function() {
        if (!mediaRecorder) {
          return;
        }
        if (mediaRecorder.state === "paused") {
          mediaRecorder.resume();
        }
      };
      this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === "recording") {
          self.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
      };
      function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
      }
      var mediaRecorder;
      this.getInternalRecorder = function() {
        return mediaRecorder;
      };
      function isMediaStreamActive() {
        if ("active" in mediaStream) {
          if (!mediaStream.active) {
            return false;
          }
        } else if ("ended" in mediaStream) {
          if (mediaStream.ended) {
            return false;
          }
        }
        return true;
      }
      this.blob = null;
      this.getState = function() {
        if (!mediaRecorder) {
          return "inactive";
        }
        return mediaRecorder.state || "inactive";
      };
      var allStates = [];
      this.getAllStates = function() {
        return allStates;
      };
      if (typeof config.checkForInactiveTracks === "undefined") {
        config.checkForInactiveTracks = false;
      }
      var self = this;
      (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
          return;
        }
        if (isMediaStreamActive() === false) {
          if (!config.disableLogs) {
            console.log("MediaStream seems stopped.");
          }
          self.stop();
          return;
        }
        setTimeout(looper, 1e3);
      })();
      this.name = "MediaStreamRecorder";
      this.toString = function() {
        return this.name;
      };
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
    }
    function StereoAudioRecorder2(mediaStream, config) {
      if (!getTracks(mediaStream, "audio").length) {
        throw "Your stream has no audio tracks.";
      }
      config = config || {};
      var self = this;
      var leftchannel = [];
      var rightchannel = [];
      var recording = false;
      var recordingLength = 0;
      var jsAudioNode;
      var numberOfAudioChannels = 2;
      var desiredSampRate = config.desiredSampRate;
      if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
      }
      if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
      }
      if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
        numberOfAudioChannels = 2;
      }
      if (!config.disableLogs) {
        console.log("StereoAudioRecorder is set to record number of channels: " + numberOfAudioChannels);
      }
      if (typeof config.checkForInactiveTracks === "undefined") {
        config.checkForInactiveTracks = true;
      }
      function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
          return true;
        }
        if ("active" in mediaStream) {
          if (!mediaStream.active) {
            return false;
          }
        } else if ("ended" in mediaStream) {
          if (mediaStream.ended) {
            return false;
          }
        }
        return true;
      }
      this.record = function() {
        if (isMediaStreamActive() === false) {
          throw "Please make sure MediaStream is active.";
        }
        resetVariables();
        isAudioProcessStarted = isPaused = false;
        recording = true;
        if (typeof config.timeSlice !== "undefined") {
          looper();
        }
      };
      function mergeLeftRightBuffers(config2, callback) {
        function mergeAudioBuffers(config3, cb) {
          var numberOfAudioChannels2 = config3.numberOfAudioChannels;
          var leftBuffers = config3.leftBuffers.slice(0);
          var rightBuffers = config3.rightBuffers.slice(0);
          var sampleRate2 = config3.sampleRate;
          var internalInterleavedLength = config3.internalInterleavedLength;
          var desiredSampRate2 = config3.desiredSampRate;
          if (numberOfAudioChannels2 === 2) {
            leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
            rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);
            if (desiredSampRate2) {
              leftBuffers = interpolateArray(leftBuffers, desiredSampRate2, sampleRate2);
              rightBuffers = interpolateArray(rightBuffers, desiredSampRate2, sampleRate2);
            }
          }
          if (numberOfAudioChannels2 === 1) {
            leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
            if (desiredSampRate2) {
              leftBuffers = interpolateArray(leftBuffers, desiredSampRate2, sampleRate2);
            }
          }
          if (desiredSampRate2) {
            sampleRate2 = desiredSampRate2;
          }
          function interpolateArray(data, newSampleRate, oldSampleRate) {
            var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
            var newData = [];
            var springFactor = Number((data.length - 1) / (fitCount - 1));
            newData[0] = data[0];
            for (var i2 = 1; i2 < fitCount - 1; i2++) {
              var tmp = i2 * springFactor;
              var before = Number(Math.floor(tmp)).toFixed();
              var after = Number(Math.ceil(tmp)).toFixed();
              var atPoint = tmp - before;
              newData[i2] = linearInterpolate(data[before], data[after], atPoint);
            }
            newData[fitCount - 1] = data[data.length - 1];
            return newData;
          }
          function linearInterpolate(before, after, atPoint) {
            return before + (after - before) * atPoint;
          }
          function mergeBuffers(channelBuffer, rLength) {
            var result = new Float64Array(rLength);
            var offset = 0;
            var lng2 = channelBuffer.length;
            for (var i2 = 0; i2 < lng2; i2++) {
              var buffer2 = channelBuffer[i2];
              result.set(buffer2, offset);
              offset += buffer2.length;
            }
            return result;
          }
          function interleave(leftChannel, rightChannel) {
            var length = leftChannel.length + rightChannel.length;
            var result = new Float64Array(length);
            var inputIndex = 0;
            for (var index2 = 0; index2 < length; ) {
              result[index2++] = leftChannel[inputIndex];
              result[index2++] = rightChannel[inputIndex];
              inputIndex++;
            }
            return result;
          }
          function writeUTFBytes(view2, offset, string) {
            var lng2 = string.length;
            for (var i2 = 0; i2 < lng2; i2++) {
              view2.setUint8(offset + i2, string.charCodeAt(i2));
            }
          }
          var interleaved;
          if (numberOfAudioChannels2 === 2) {
            interleaved = interleave(leftBuffers, rightBuffers);
          }
          if (numberOfAudioChannels2 === 1) {
            interleaved = leftBuffers;
          }
          var interleavedLength = interleaved.length;
          var resultingBufferLength = 44 + interleavedLength * 2;
          var buffer = new ArrayBuffer(resultingBufferLength);
          var view = new DataView(buffer);
          writeUTFBytes(view, 0, "RIFF");
          view.setUint32(4, 36 + interleavedLength * 2, true);
          writeUTFBytes(view, 8, "WAVE");
          writeUTFBytes(view, 12, "fmt ");
          view.setUint32(16, 16, true);
          view.setUint16(20, 1, true);
          view.setUint16(22, numberOfAudioChannels2, true);
          view.setUint32(24, sampleRate2, true);
          view.setUint32(28, sampleRate2 * numberOfAudioChannels2 * 2, true);
          view.setUint16(32, numberOfAudioChannels2 * 2, true);
          view.setUint16(34, 16, true);
          writeUTFBytes(view, 36, "data");
          view.setUint32(40, interleavedLength * 2, true);
          var lng = interleavedLength;
          var index = 44;
          var volume = 1;
          for (var i = 0; i < lng; i++) {
            view.setInt16(index, interleaved[i] * (32767 * volume), true);
            index += 2;
          }
          if (cb) {
            return cb({
              buffer,
              view
            });
          }
          postMessage({
            buffer,
            view
          });
        }
        if (config2.noWorker) {
          mergeAudioBuffers(config2, function(data) {
            callback(data.buffer, data.view);
          });
          return;
        }
        var webWorker = processInWebWorker(mergeAudioBuffers);
        webWorker.onmessage = function(event) {
          callback(event.data.buffer, event.data.view);
          URL2.revokeObjectURL(webWorker.workerURL);
          webWorker.terminate();
        };
        webWorker.postMessage(config2);
      }
      function processInWebWorker(_function) {
        var workerURL = URL2.createObjectURL(new Blob([
          _function.toString(),
          ";this.onmessage =  function (eee) {" + _function.name + "(eee.data);}"
        ], {
          type: "application/javascript"
        }));
        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
      }
      this.stop = function(callback) {
        callback = callback || function() {
        };
        recording = false;
        mergeLeftRightBuffers({
          desiredSampRate,
          sampleRate,
          numberOfAudioChannels,
          internalInterleavedLength: recordingLength,
          leftBuffers: leftchannel,
          rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
          noWorker: config.noWorker
        }, function(buffer, view) {
          self.blob = new Blob([view], {
            type: "audio/wav"
          });
          self.buffer = new ArrayBuffer(view.buffer.byteLength);
          self.view = view;
          self.sampleRate = desiredSampRate || sampleRate;
          self.bufferSize = bufferSize;
          self.length = recordingLength;
          isAudioProcessStarted = false;
          if (callback) {
            callback(self.blob);
          }
        });
      };
      if (typeof RecordRTC.Storage === "undefined") {
        RecordRTC.Storage = {
          AudioContextConstructor: null,
          AudioContext: window.AudioCon text|| window.webkitAudioContext
        };
      }
      if (!RecordRTC.Storage.AudioContextConstructor || RecordRTC.Storage.AudioContextConstructor.state === "closed") {
        RecordRTC.Storage.AudioContextConstructor = new RecordRTC.Storage.AudioContext();
      }
      var con text= RecordRTC.Storage.AudioContextConstructor;
      var audioInput = context.createMediaStreamSource(mediaStream);
      var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];
      var bufferSize = typeof config.bufferSize === "undefined" ? 4096 : config.bufferSize;
      if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
          console.log("Legal values for buffer-size are " + JSON.stringify(legalBufferValues, null, "	"));
        }
      }
      if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
      } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
      } else {
        throw "WebAudio API has no support on this browser.";
      }
      audioInput.connect(jsAudioNode);
      if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize;
      }
      var sampleRate = typeof config.sampleRate !== "undefined" ? config.sampleRate : context.sampleRate || 44100;
      if (sampleRate < 22050 || sampleRate > 96e3) {
        if (!config.disableLogs) {
          console.log("sample-rate must be under range 22050 and 96000.");
        }
      }
      if (!config.disableLogs) {
        if (config.desiredSampRate) {
          console.log("Desired sample-rate: " + config.desiredSampRate);
        }
      }
      var isPaused = false;
      this.pause = function() {
        isPaused = true;
      };
      this.resume = function() {
        if (isMediaStreamActive() === false) {
          throw "Please make sure MediaStream is active.";
        }
        if (!recording) {
          if (!config.disableLogs) {
            console.log("Seems recording has been restarted.");
          }
          this.record();
          return;
        }
        isPaused = false;
      };
      this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;
        if (recording) {
          this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
      };
      function resetVariables() {
        leftchannel = [];
        rightchannel = [];
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;
        con text= null;
        self.leftchannel = leftchannel;
        self.rightchannel = rightchannel;
        self.numberOfAudioChannels = numberOfAudioChannels;
        self.desiredSampRate = desiredSampRate;
        self.sampleRate = sampleRate;
        self.recordingLength = recordingLength;
        intervalsBasedBuffers = {
          left: [],
          right: [],
          recordingLength: 0
        };
      }
      function clearRecordedDataCB() {
        if (jsAudioNode) {
          jsAudioNode.onaudioprocess = null;
          jsAudioNode.disconnect();
          jsAudioNode = null;
        }
        if (audioInput) {
          audioInput.disconnect();
          audioInput = null;
        }
        resetVariables();
      }
      this.name = "StereoAudioRecorder";
      this.toString = function() {
        return this.name;
      };
      var isAudioProcessStarted = false;
      function onAudioProcessDataAvailable(e) {
        if (isPaused) {
          return;
        }
        if (isMediaStreamActive() === false) {
          if (!config.disableLogs) {
            console.log("MediaStream seems stopped.");
          }
          jsAudioNode.disconnect();
          recording = false;
        }
        if (!recording) {
          if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
          }
          return;
        }
        if (!isAudioProcessStarted) {
          isAudioProcessStarted = true;
          if (config.onAudioProcessStarted) {
            config.onAudioProcessStarted();
          }
          if (config.initCallback) {
            config.initCallback();
          }
        }
        var left = e.inputBuffer.getChannelData(0);
        var chLeft = new Float32Array(left);
        leftchannel.push(chLeft);
        if (numberOfAudioChannels === 2) {
          var right = e.inputBuffer.getChannelData(1);
          var chRight = new Float32Array(right);
          rightchannel.push(chRight);
        }
        recordingLength += bufferSize;
        self.recordingLength = recordingLength;
        if (typeof config.timeSlice !== "undefined") {
          intervalsBasedBuffers.recordingLength += bufferSize;
          intervalsBasedBuffers.left.push(chLeft);
          if (numberOfAudioChannels === 2) {
            intervalsBasedBuffers.right.push(chRight);
          }
        }
      }
      jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;
      if (context.createMediaStreamDestination) {
        jsAudioNode.connect(context.createMediaStreamDestination());
      } else {
        jsAudioNode.connect(context.destination);
      }
      this.leftchannel = leftchannel;
      this.rightchannel = rightchannel;
      this.numberOfAudioChannels = numberOfAudioChannels;
      this.desiredSampRate = desiredSampRate;
      this.sampleRate = sampleRate;
      self.recordingLength = recordingLength;
      var intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
      };
      function looper() {
        if (!recording || typeof config.ondataavailable !== "function" || typeof config.timeSlice === "undefined") {
          return;
        }
        if (intervalsBasedBuffers.left.length) {
          mergeLeftRightBuffers({
            desiredSampRate,
            sampleRate,
            numberOfAudioChannels,
            internalInterleavedLength: intervalsBasedBuffers.recordingLength,
            leftBuffers: intervalsBasedBuffers.left,
            rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
          }, function(buffer, view) {
            var blob = new Blob([view], {
              type: "audio/wav"
            });
            config.ondataavailable(blob);
            setTimeout(looper, config.timeSlice);
          });
          intervalsBasedBuffers = {
            left: [],
            right: [],
            recordingLength: 0
          };
        } else {
          setTimeout(looper, config.timeSlice);
        }
      }
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.StereoAudioRecorder = StereoAudioRecorder2;
    }
    function CanvasRecorder(htmlElement, config) {
      if (typeof html2canvas === "undefined") {
        throw "Please link: https://www.webrtc-experiment.com/screenshot.js";
      }
      config = config || {};
      if (!config.frameInterval) {
        config.frameInterval = 10;
      }
      var isCanvasSupportsStreamCapturing = false;
      ["captureStream", "mozCaptureStream", "webkitCaptureStream"].forEach(function(item) {
        if (item in document.createElement("canvas")) {
          isCanvasSupportsStreamCapturing = true;
        }
      });
      var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;
      var chromeVersion = 50;
      var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
      }
      if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
      }
      if (config.useWhammyRecorder) {
        isCanvasSupportsStreamCapturing = false;
      }
      var globalCanvas, mediaStreamRecorder;
      if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
          console.log("Your browser supports both MediRecorder API and canvas.captureStream!");
        }
        if (htmlElement instanceof HTMLCanvasElement) {
          globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
          globalCanvas = htmlElement.canvas;
        } else {
          throw "Please pass either HTMLCanvasElement or CanvasRenderingContext2D.";
        }
      } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
          console.error("Canvas recording is NOT supported in Firefox.");
        }
      }
      var isRecording;
      this.record = function() {
        isRecording = true;
        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
          var canvasMediaStream;
          if ("captureStream" in globalCanvas) {
            canvasMediaStream = globalCanvas.captureStream(25);
          } else if ("mozCaptureStream" in globalCanvas) {
            canvasMediaStream = globalCanvas.mozCaptureStream(25);
          } else if ("webkitCaptureStream" in globalCanvas) {
            canvasMediaStream = globalCanvas.webkitCaptureStream(25);
          }
          try {
            var mdStream = new MediaStream();
            mdStream.addTrack(getTracks(canvasMediaStream, "video")[0]);
            canvasMediaStream = mdStream;
          } catch (e) {
          }
          if (!canvasMediaStream) {
            throw "captureStream API are NOT available.";
          }
          mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
            mimeType: config.mimeType || "video/webm"
          });
          mediaStreamRecorder.record();
        } else {
          whammy.frames = [];
          lastTime2 = new Date().getTime();
          drawCanvasFrame();
        }
        if (config.initCallback) {
          config.initCallback();
        }
      };
      this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== "canvas") {
          callback();
          return;
        }
        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
          var framesRemaining = framesLength - idx;
          if (!config.disableLogs) {
            console.log(framesRemaining + "/" + framesLength + " frames remaining");
          }
          if (config.onEncodingCallback) {
            config.onEncodingCallback(framesRemaining, framesLength);
          }
          var webp = frame.image.toDataURL("image/webp", 1);
          whammy.frames[idx].image = webp;
        });
        if (!config.disableLogs) {
          console.log("Generating WebM");
        }
        callback();
      };
      this.stop = function(callback) {
        isRecording = false;
        var that = this;
        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
          mediaStreamRecorder.stop(callback);
          return;
        }
        this.getWebPImages(function() {
          whammy.compile(function(blob) {
            if (!config.disableLogs) {
              console.log("Recording finished!");
            }
            that.blob = blob;
            if (that.blob.forEach) {
              that.blob = new Blob([], {
                type: "video/webm"
              });
            }
            if (callback) {
              callback(that.blob);
            }
            whammy.frames = [];
          });
        });
      };
      var isPausedRecording = false;
      this.pause = function() {
        isPausedRecording = true;
        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
          mediaStreamRecorder.pause();
          return;
        }
      };
      this.resume = function() {
        isPausedRecording = false;
        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
          mediaStreamRecorder.resume();
          return;
        }
        if (!isRecording) {
          this.record();
        }
      };
      this.clearRecordedData = function() {
        if (isRecording) {
          this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
      };
      function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
      }
      this.name = "CanvasRecorder";
      this.toString = function() {
        return this.name;
      };
      function cloneCanvas() {
        var newCanvas = document.createElement("canvas");
        var con text= newCanvas.getContext("2d");
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;
        context.drawImage(htmlElement, 0, 0);
        return newCanvas;
      }
      function drawCanvasFrame() {
        if (isPausedRecording) {
          lastTime2 = new Date().getTime();
          return setTimeout(drawCanvasFrame, 500);
        }
        if (htmlElement.nodeName.toLowerCase() === "canvas") {
          var duration = new Date().getTime() - lastTime2;
          lastTime2 = new Date().getTime();
          whammy.frames.push({
            image: cloneCanvas(),
            duration
          });
          if (isRecording) {
            setTimeout(drawCanvasFrame, config.frameInterval);
          }
          return;
        }
        html2canvas(htmlElement, {
          grabMouse: typeof config.showMousePointer === "undefined" || config.showMousePointer,
          onrendered: function(canvas) {
            var duration2 = new Date().getTime() - lastTime2;
            if (!duration2) {
              return setTimeout(drawCanvasFrame, config.frameInterval);
            }
            lastTime2 = new Date().getTime();
            whammy.frames.push({
              image: canvas.toDataURL("image/webp", 1),
              duration: duration2
            });
            if (isRecording) {
              setTimeout(drawCanvasFrame, config.frameInterval);
            }
          }
        });
      }
      var lastTime2 = new Date().getTime();
      var whammy = new Whammy.Video(100);
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.CanvasRecorder = CanvasRecorder;
    }
    function WhammyRecorder(mediaStream, config) {
      config = config || {};
      if (!config.frameInterval) {
        config.frameInterval = 10;
      }
      if (!config.disableLogs) {
        console.log("Using frames-interval:", config.frameInterval);
      }
      this.record = function() {
        if (!config.width) {
          config.width = 320;
        }
        if (!config.height) {
          config.height = 240;
        }
        if (!config.video) {
          config.video = {
            width: config.width,
            height: config.height
          };
        }
        if (!config.canvas) {
          config.canvas = {
            width: config.width,
            height: config.height
          };
        }
        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;
        con text= canvas.getContext("2d");
        if (config.video && config.video instanceof HTMLVideoElement) {
          video = config.video.cloneNode();
          if (config.initCallback) {
            config.initCallback();
          }
        } else {
          video = document.createElement("video");
          setSrcObject(mediaStream, video);
          video.onloadedmetadata = function() {
            if (config.initCallback) {
              config.initCallback();
            }
          };
          video.width = config.video.width;
          video.height = config.video.height;
        }
        video.muted = true;
        video.play();
        lastTime2 = new Date().getTime();
        whammy = new Whammy.Video();
        if (!config.disableLogs) {
          console.log("canvas resolutions", canvas.width, "*", canvas.height);
          console.log("video width/height", video.width || canvas.width, "*", video.height || canvas.height);
        }
        drawFrames(config.frameInterval);
      };
      function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== "undefined" ? frameInterval : 10;
        var duration = new Date().getTime() - lastTime2;
        if (!duration) {
          return setTimeout(drawFrames, frameInterval, frameInterval);
        }
        if (isPausedRecording) {
          lastTime2 = new Date().getTime();
          return setTimeout(drawFrames, 100);
        }
        lastTime2 = new Date().getTime();
        if (video.paused) {
          video.play();
        }
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
          duration,
          image: canvas.toDataURL("image/webp")
        });
        if (!isStopDrawing) {
          setTimeout(drawFrames, frameInterval, frameInterval);
        }
      }
      function asyncLoop(o) {
        var i = -1, length = o.length;
        (function loop() {
          i++;
          if (i === length) {
            o.callback();
            return;
          }
          setTimeout(function() {
            o.functionToLoop(loop, i);
          }, 1);
        })();
      }
      function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement("canvas");
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext("2d");
        var resultFrames = [];
        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = _framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length ? _framesToCheck : _frames.length;
        var sampleColor = {
          r: 0,
          g: 0,
          b: 0
        };
        var maxColorDifference = Math.sqrt(
          Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;
        asyncLoop({
          length: endCheckFrame,
          functionToLoop: function(loop, f) {
            var matchPixCount, endPixCheck, maxPixCount;
            var finishImage = function() {
              if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
              } else {
                if (checkUntilNotBlack) {
                  doNotCheckNext = true;
                }
                resultFrames.push(_frames[f]);
              }
              loop();
            };
            if (!doNotCheckNext) {
              var image = new Image();
              image.onload = function() {
                context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                matchPixCount = 0;
                endPixCheck = imageData.data.length;
                maxPixCount = imageData.data.length / 4;
                for (var pix = 0; pix < endPixCheck; pix += 4) {
                  var currentColor = {
                    r: imageData.data[pix],
                    g: imageData.data[pix + 1],
                    b: imageData.data[pix + 2]
                  };
                  var colorDifference = Math.sqrt(
                    Math.pow(currentColor.r - sampleColor.r, 2) + Math.pow(currentColor.g - sampleColor.g, 2) + Math.pow(currentColor.b - sampleColor.b, 2)
                  );
                  if (colorDifference <= maxColorDifference * pixTolerance) {
                    matchPixCount++;
                  }
                }
                finishImage();
              };
              image.src = _frames[f].image;
            } else {
              finishImage();
            }
          },
          callback: function() {
            resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));
            if (resultFrames.length <= 0) {
              resultFrames.push(_frames[_frames.length - 1]);
            }
            callback(resultFrames);
          }
        });
      }
      var isStopDrawing = false;
      this.stop = function(callback) {
        callback = callback || function() {
        };
        isStopDrawing = true;
        var _this = this;
        setTimeout(function() {
          dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
            whammy.frames = frames;
            if (config.advertisement && config.advertisement.length) {
              whammy.frames = config.advertisement.concat(whammy.frames);
            }
            whammy.compile(function(blob) {
              _this.blob = blob;
              if (_this.blob.forEach) {
                _this.blob = new Blob([], {
                  type: "video/webm"
                });
              }
              if (callback) {
                callback(_this.blob);
              }
            });
          });
        }, 10);
      };
      var isPausedRecording = false;
      this.pause = function() {
        isPausedRecording = true;
      };
      this.resume = function() {
        isPausedRecording = false;
        if (isStopDrawing) {
          this.record();
        }
      };
      this.clearRecordedData = function() {
        if (!isStopDrawing) {
          this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
      };
      function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
      }
      this.name = "WhammyRecorder";
      this.toString = function() {
        return this.name;
      };
      var canvas = document.createElement("canvas");
      var con text= canvas.getContext("2d");
      var video;
      var lastTime2;
      var whammy;
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.WhammyRecorder = WhammyRecorder;
    }
    var Whammy = function() {
      function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
      }
      WhammyVideo.prototype.add = function(frame, duration) {
        if ("canvas" in frame) {
          frame = frame.canvas;
        }
        if ("toDataURL" in frame) {
          frame = frame.toDataURL("image/webp", this.quality);
        }
        if (!/^data:image\/webp;base64,/ig.test(frame)) {
          throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
        }
        this.frames.push({
          image: frame,
          duration: duration || this.duration
        });
      };
      function processInWebWorker(_function) {
        var blob = URL2.createObjectURL(new Blob([
          _function.toString(),
          "this.onmessage =  function (eee) {" + _function.name + "(eee.data);}"
        ], {
          type: "application/javascript"
        }));
        var worker = new Worker(blob);
        URL2.revokeObjectURL(blob);
        return worker;
      }
      function whammyInWebWorker(frames) {
        function ArrayToWebM(frames2) {
          var info = checkFrames(frames2);
          if (!info) {
            return [];
          }
          var clusterMaxDuration = 3e4;
          var EBML2 = [{
            "id": 440786851,
            "data": [{
              "data": 1,
              "id": 17030
            }, {
              "data": 1,
              "id": 17143
            }, {
              "data": 4,
              "id": 17138
            }, {
              "data": 8,
              "id": 17139
            }, {
              "data": "webm",
              "id": 17026
            }, {
              "data": 2,
              "id": 17031
            }, {
              "data": 2,
              "id": 17029
            }]
          }, {
            "id": 408125543,
            "data": [{
              "id": 357149030,
              "data": [{
                "data": 1e6,
                "id": 2807729
              }, {
                "data": "whammy",
                "id": 19840
              }, {
                "data": "whammy",
                "id": 22337
              }, {
                "data": doubleToString(info.duration),
                "id": 17545
              }]
            }, {
              "id": 374648427,
              "data": [{
                "id": 174,
                "data": [{
                  "data": 1,
                  "id": 215
                }, {
                  "data": 1,
                  "id": 29637
                }, {
                  "data": 0,
                  "id": 156
                }, {
                  "data": "und",
                  "id": 2274716
                }, {
                  "data": "V_VP8",
                  "id": 134
                }, {
                  "data": "VP8",
                  "id": 2459272
                }, {
                  "data": 1,
                  "id": 131
                }, {
                  "id": 224,
                  "data": [{
                    "data": info.width,
                    "id": 176
                  }, {
                    "data": info.height,
                    "id": 186
                  }]
                }]
              }]
            }]
          }];
          var frameNumber = 0;
          var clusterTimecode = 0;
          while (frameNumber < frames2.length) {
            var clusterFrames = [];
            var clusterDuration = 0;
            do {
              clusterFrames.push(frames2[frameNumber]);
              clusterDuration += frames2[frameNumber].duration;
              frameNumber++;
            } while (frameNumber < frames2.length && clusterDuration < clusterMaxDuration);
            var clusterCounter = 0;
            var cluster = {
              "id": 524531317,
              "data": getClusterData(clusterTimecode, clusterCounter, clusterFrames)
            };
            EBML2[1].data.push(cluster);
            clusterTimecode += clusterDuration;
          }
          return generateEBML(EBML2);
        }
        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
          return [{
            "data": clusterTimecode,
            "id": 231
          }].concat(clusterFrames.map(function(webp) {
            var block = makeSimpleBlock({
              discardable: 0,
              frame: webp.data.slice(4),
              invisible: 0,
              keyframe: 1,
              lacing: 0,
              trackNum: 1,
              timecode: Math.round(clusterCounter)
            });
            clusterCounter += webp.duration;
            return {
              data: block,
              id: 163
            };
          }));
        }
        function checkFrames(frames2) {
          if (!frames2[0]) {
            postMessage({
              error: "Something went wrong. Maybe WebP format is not supported in the current browser."
            });
            return;
          }
          var width = frames2[0].width, height = frames2[0].height, duration = frames2[0].duration;
          for (var i = 1; i < frames2.length; i++) {
            duration += frames2[i].duration;
          }
          return {
            duration,
            width,
            height
          };
        }
        function numToBuffer(num) {
          var parts = [];
          while (num > 0) {
            parts.push(num & 255);
            num = num >> 8;
          }
          return new Uint8Array(parts.reverse());
        }
        function strToBuffer(str) {
          return new Uint8Array(str.split("").map(function(e) {
            return e.charCodeAt(0);
          }));
        }
        function bitsToBuffer(bits) {
          var data = [];
          var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join("0") : "";
          bits = pad + bits;
          for (var i = 0; i < bits.length; i += 8) {
            data.push(parseInt(bits.substr(i, 8), 2));
          }
          return new Uint8Array(data);
        }
        function generateEBML(json) {
          var ebml = [];
          for (var i = 0; i < json.length; i++) {
            var data = json[i].data;
            if (typeof data === "object") {
              data = generateEBML(data);
            }
            if (typeof data === "number") {
              data = bitsToBuffer(data.toString(2));
            }
            if (typeof data === "string") {
              data = strToBuffer(data);
            }
            var len = data.size || data.byteLength || data.length;
            var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
            var sizeToString = len.toString(2);
            var padded = new Array(zeroes * 7 + 7 + 1 - sizeToString.length).join("0") + sizeToString;
            var size = new Array(zeroes).join("0") + "1" + padded;
            ebml.push(numToBuffer(json[i].id));
            ebml.push(bitsToBuffer(size));
            ebml.push(data);
          }
          return new Blob(ebml, {
            type: "video/webm"
          });
        }
        function toBinStrOld(bits) {
          var data = "";
          var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join("0") : "";
          bits = pad + bits;
          for (var i = 0; i < bits.length; i += 8) {
            data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
          }
          return data;
        }
        function makeSimpleBlock(data) {
          var flags = 0;
          if (data.keyframe) {
            flags |= 128;
          }
          if (data.invisible) {
            flags |= 8;
          }
          if (data.lacing) {
            flags |= data.lacing << 1;
          }
          if (data.discardable) {
            flags |= 1;
          }
          if (data.trackNum > 127) {
            throw "TrackNumber > 127 not supported";
          }
          var out = [data.trackNum | 128, data.timecode >> 8, data.timecode & 255, flags].map(function(e) {
            return String.fromCharCode(e);
          }).join("") + data.frame;
          return out;
        }
        function parseWebP(riff) {
          var VP8 = riff.RIFF[0].WEBP[0];
          var frameStart = VP8.indexOf("\x9D*");
          for (var i = 0, c = []; i < 4; i++) {
            c[i] = VP8.charCodeAt(frameStart + 3 + i);
          }
          var width, height, tmp;
          tmp = c[1] << 8 | c[0];
          width = tmp & 16383;
          tmp = c[3] << 8 | c[2];
          height = tmp & 16383;
          return {
            width,
            height,
            data: VP8,
            riff
          };
        }
        function getStrLength(string, offset) {
          return parseInt(string.substr(offset + 4, 4).split("").map(function(i) {
            var unpadded = i.charCodeAt(0).toString(2);
            return new Array(8 - unpadded.length + 1).join("0") + unpadded;
          }).join(""), 2);
        }
        function parseRIFF(string) {
          var offset = 0;
          var chunks = {};
          while (offset < string.length) {
            var id = string.substr(offset, 4);
            var len = getStrLength(string, offset);
            var data = string.substr(offset + 4 + 4, len);
            offset += 4 + 4 + len;
            chunks[id] = chunks[id] || [];
            if (id === "RIFF" || id === "LIST") {
              chunks[id].push(parseRIFF(data));
            } else {
              chunks[id].push(data);
            }
          }
          return chunks;
        }
        function doubleToString(num) {
          return [].slice.call(
            new Uint8Array(new Float64Array([num]).buffer),
            0
          ).map(function(e) {
            return String.fromCharCode(e);
          }).reverse().join("");
        }
        var webm = new ArrayToWebM(frames.map(function(frame) {
          var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
          webp.duration = frame.duration;
          return webp;
        }));
        postMessage(webm);
      }
      WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);
        webWorker.onmessage = function(event) {
          if (event.data.error) {
            console.error(event.data.error);
            return;
          }
          callback(event.data);
        };
        webWorker.postMessage(this.frames);
      };
      return {
        Video: WhammyVideo
      };
    }();
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.Whammy = Whammy;
    }
    var DiskStorage = {
      init: function() {
        var self = this;
        if (typeof indexedDB === "undefined" || typeof indexedDB.open === "undefined") {
          console.error("IndexedDB API are not available in this browser.");
          return;
        }
        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ""), db;
        var request = indexedDB.open(dbName, dbVersion);
        function createObjectStore(dataBase) {
          dataBase.createObjectStore(self.dataStoreName);
        }
        function putInDB() {
          var transaction = db.transaction([self.dataStoreName], "readwrite");
          if (self.videoBlob) {
            transaction.objectStore(self.dataStoreName).put(self.videoBlob, "videoBlob");
          }
          if (self.gifBlob) {
            transaction.objectStore(self.dataStoreName).put(self.gifBlob, "gifBlob");
          }
          if (self.audioBlob) {
            transaction.objectStore(self.dataStoreName).put(self.audioBlob, "audioBlob");
          }
          function getFromStore(portionName) {
            transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
              if (self.callback) {
                self.callback(event.target.result, portionName);
              }
            };
          }
          getFromStore("audioBlob");
          getFromStore("videoBlob");
          getFromStore("gifBlob");
        }
        request.onerror = self.onError;
        request.onsuccess = function() {
          db = request.result;
          db.onerror = self.onError;
          if (db.setVersion) {
            if (db.version !== dbVersion) {
              var setVersion = db.setVersion(dbVersion);
              setVersion.onsuccess = function() {
                createObjectStore(db);
                putInDB();
              };
            } else {
              putInDB();
            }
          } else {
            putInDB();
          }
        };
        request.onupgradeneeded = function(event) {
          createObjectStore(event.target.result);
        };
      },
      Fetch: function(callback) {
        this.callback = callback;
        this.init();
        return this;
      },
      Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;
        this.init();
        return this;
      },
      onError: function(error) {
        console.error(JSON.stringify(error, null, "	"));
      },
      dataStoreName: "recordRTC",
      dbName: null
    };
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.DiskStorage = DiskStorage;
    }
    function GifRecorder(mediaStream, config) {
      if (typeof GIFEncoder === "undefined") {
        var script = document.createElement("script");
        script.src = "https://www.webrtc-experiment.com/gif-recorder.js";
        (document.body || document.documentElement).appendChild(script);
      }
      config = config || {};
      var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;
      this.record = function() {
        if (typeof GIFEncoder === "undefined") {
          setTimeout(self.record, 1e3);
          return;
        }
        if (!isLoadedMetaData) {
          setTimeout(self.record, 1e3);
          return;
        }
        if (!isHTMLObject) {
          if (!config.width) {
            config.width = video.offsetWidth || 320;
          }
          if (!config.height) {
            config.height = video.offsetHeight || 240;
          }
          if (!config.video) {
            config.video = {
              width: config.width,
              height: config.height
            };
          }
          if (!config.canvas) {
            config.canvas = {
              width: config.width,
              height: config.height
            };
          }
          canvas.width = config.canvas.width || 320;
          canvas.height = config.canvas.height || 240;
          video.width = config.video.width || 320;
          video.height = config.video.height || 240;
        }
        gifEncoder = new GIFEncoder();
        gifEncoder.setRepeat(0);
        gifEncoder.setDelay(config.frameRate || 200);
        gifEncoder.setQuality(config.quality || 10);
        gifEncoder.start();
        if (typeof config.onGifRecordingStarted === "function") {
          config.onGifRecordingStarted();
        }
        startTime = Date.now();
        function drawVideoFrame(time) {
          if (self.clearedRecordedData === true) {
            return;
          }
          if (isPausedRecording) {
            return setTimeout(function() {
              drawVideoFrame(time);
            }, 100);
          }
          lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
          if (typeof lastFrameTime === void 0) {
            lastFrameTime = time;
          }
          if (time - lastFrameTime < 90) {
            return;
          }
          if (!isHTMLObject && video.paused) {
            video.play();
          }
          if (!isHTMLObject) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
          }
          if (config.onGifPreview) {
            config.onGifPreview(canvas.toDataURL("image/png"));
          }
          gifEncoder.addFrame(context);
          lastFrameTime = time;
        }
        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
        if (config.initCallback) {
          config.initCallback();
        }
      };
      this.stop = function(callback) {
        callback = callback || function() {
        };
        if (lastAnimationFrame) {
          cancelAnimationFrame(lastAnimationFrame);
        }
        endTime = Date.now();
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
          type: "image/gif"
        });
        callback(this.blob);
        gifEncoder.stream().bin = [];
      };
      var isPausedRecording = false;
      this.pause = function() {
        isPausedRecording = true;
      };
      this.resume = function() {
        isPausedRecording = false;
      };
      this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
      };
      function clearRecordedDataCB() {
        if (gifEncoder) {
          gifEncoder.stream().bin = [];
        }
      }
      this.name = "GifRecorder";
      this.toString = function() {
        return this.name;
      };
      var canvas = document.createElement("canvas");
      var con text= canvas.getContext("2d");
      if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
          con text= mediaStream;
          canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
          con text= mediaStream.getContext("2d");
          canvas = mediaStream;
        }
      }
      var isLoadedMetaData = true;
      if (!isHTMLObject) {
        var video = document.createElement("video");
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
          isLoadedMetaData = true;
        };
        setSrcObject(mediaStream, video);
        video.play();
      }
      var lastAnimationFrame = null;
      var startTime, endTime, lastFrameTime;
      var gifEncoder;
      var self = this;
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.GifRecorder = GifRecorder;
    }
    function MultiStreamsMixer(arrayOfMediaStreams, elementClass) {
      var browserFakeUserAgent2 = "Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";
      (function(that) {
        if (typeof RecordRTC !== "undefined") {
          return;
        }
        if (!that) {
          return;
        }
        if (typeof window !== "undefined") {
          return;
        }
        if (typeof globalThis === "undefined") {
          return;
        }
        globalThis.navigator = {
          userAgent: browserFakeUserAgent2,
          getUserMedia: function() {
          }
        };
        if (!globalThis.console) {
          globalThis.console = {};
        }
        if (typeof globalThis.console.log === "undefined" || typeof globalThis.console.error === "undefined") {
          globalThis.console.error = globalThis.console.log = globalThis.console.log || function() {
            console.log(arguments);
          };
        }
        if (typeof document === "undefined") {
          that.document = {
            documentElement: {
              appendChild: function() {
                return "";
              }
            }
          };
          document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
              getContext: function() {
                return obj;
              },
              play: function() {
              },
              pause: function() {
              },
              drawImage: function() {
              },
              toDataURL: function() {
                return "";
              },
              style: {}
            };
            return obj;
          };
          that.HTMLVideoElement = function() {
          };
        }
        if (typeof location === "undefined") {
          that.location = {
            protocol: "file:",
            href: "",
            hash: ""
          };
        }
        if (typeof screen === "undefined") {
          that.screen = {
            width: 0,
            height: 0
          };
        }
        if (typeof URL3 === "undefined") {
          that.URL = {
            createObjectURL: function() {
              return "";
            },
            revokeObjectURL: function() {
              return "";
            }
          };
        }
        that.window = globalThis;
      })(typeof globalThis !== "undefined" ? globalThis : null);
      elementClass = elementClass || "multi-streams-mixer";
      var videos = [];
      var isStopDrawingFrames = false;
      var canvas = document.createElement("canvas");
      var con text= canvas.getContext("2d");
      canvas.style.opacity = 0;
      canvas.style.position = "absolute";
      canvas.style.zIndex = -1;
      canvas.style.top = "-1000em";
      canvas.style.left = "-1000em";
      canvas.className = elementClass;
      (document.body || document.documentElement).appendChild(canvas);
      this.disableLogs = false;
      this.frameInterval = 10;
      this.width = 360;
      this.height = 240;
      this.useGainNode = true;
      var self = this;
      var AudioContext2 = window.AudioContext;
      if (typeof AudioContext2 === "undefined") {
        if (typeof webkitAudioCon text!== "undefined") {
          AudioContext2 = webkitAudioContext;
        }
        if (typeof mozAudioCon text!== "undefined") {
          AudioContext2 = mozAudioContext;
        }
      }
      var URL3 = window.URL;
      if (typeof URL3 === "undefined" && typeof webkitURL !== "undefined") {
        URL3 = webkitURL;
      }
      if (typeof navigator !== "undefined" && typeof navigator.getUserMedia === "undefined") {
        if (typeof navigator.webkitGetUserMedia !== "undefined") {
          navigator.getUserMedia = navigator.webkitGetUserMedia;
        }
        if (typeof navigator.mozGetUserMedia !== "undefined") {
          navigator.getUserMedia = navigator.mozGetUserMedia;
        }
      }
      var MediaStream2 = window.MediaStream;
      if (typeof MediaStream2 === "undefined" && typeof webkitMediaStream !== "undefined") {
        MediaStream2 = webkitMediaStream;
      }
      if (typeof MediaStream2 !== "undefined") {
        if (typeof MediaStream2.prototype.stop === "undefined") {
          MediaStream2.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
              track.stop();
            });
          };
        }
      }
      var Storage2 = {};
      if (typeof AudioContext2 !== "undefined") {
        Storage2.AudioCon text= AudioContext2;
      } else if (typeof webkitAudioCon text!== "undefined") {
        Storage2.AudioCon text= webkitAudioContext;
      }
      function setSrcObject2(stream, element) {
        if ("srcObject" in element) {
          element.srcObject = stream;
        } else if ("mozSrcObject" in element) {
          element.mozSrcObject = stream;
        } else {
          element.srcObject = stream;
        }
      }
      this.startDrawingFrames = function() {
        drawVideosToCanvas();
      };
      function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
          return;
        }
        var videosLength = videos.length;
        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
          if (!video.stream) {
            video.stream = {};
          }
          if (video.stream.fullcanvas) {
            fullcanvas = video;
          } else {
            remaining.push(video);
          }
        });
        if (fullcanvas) {
          canvas.width = fullcanvas.stream.width;
          canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
          canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;
          var height = 1;
          if (videosLength === 3 || videosLength === 4) {
            height = 2;
          }
          if (videosLength === 5 || videosLength === 6) {
            height = 3;
          }
          if (videosLength === 7 || videosLength === 8) {
            height = 4;
          }
          if (videosLength === 9 || videosLength === 10) {
            height = 5;
          }
          canvas.height = remaining[0].height * height;
        } else {
          canvas.width = self.width || 360;
          canvas.height = self.height || 240;
        }
        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
          drawImage(fullcanvas);
        }
        remaining.forEach(function(video, idx) {
          drawImage(video, idx);
        });
        setTimeout(drawVideosToCanvas, self.frameInterval);
      }
      function drawImage(video, idx) {
        if (isStopDrawingFrames) {
          return;
        }
        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;
        if (idx === 1) {
          x = video.width;
        }
        if (idx === 2) {
          y = video.height;
        }
        if (idx === 3) {
          x = video.width;
          y = video.height;
        }
        if (idx === 4) {
          y = video.height * 2;
        }
        if (idx === 5) {
          x = video.width;
          y = video.height * 2;
        }
        if (idx === 6) {
          y = video.height * 3;
        }
        if (idx === 7) {
          x = video.width;
          y = video.height * 3;
        }
        if (typeof video.stream.left !== "undefined") {
          x = video.stream.left;
        }
        if (typeof video.stream.top !== "undefined") {
          y = video.stream.top;
        }
        if (typeof video.stream.width !== "undefined") {
          width = video.stream.width;
        }
        if (typeof video.stream.height !== "undefined") {
          height = video.stream.height;
        }
        context.drawImage(video, x, y, width, height);
        if (typeof video.stream.onRender === "function") {
          video.stream.onRender(context, x, y, width, height, idx);
        }
      }
      function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();
        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
          mixedAudioStream.getTracks().filter(function(t) {
            return t.kind === "audio";
          }).forEach(function(track) {
            mixedVideoStream.addTrack(track);
          });
        }
        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
          if (stream.fullcanvas) {
            fullcanvas = true;
          }
        });
        return mixedVideoStream;
      }
      function getMixedVideoStream() {
        resetVideoStreams();
        var capturedStream;
        if ("captureStream" in canvas) {
          capturedStream = canvas.captureStream();
        } else if ("mozCaptureStream" in canvas) {
          capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
          console.error("Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features");
        }
        var videoStream = new MediaStream2();
        capturedStream.getTracks().filter(function(t) {
          return t.kind === "video";
        }).forEach(function(track) {
          videoStream.addTrack(track);
        });
        canvas.stream = videoStream;
        return videoStream;
      }
      function getMixedAudioStream() {
        if (!Storage2.AudioContextConstructor) {
          Storage2.AudioContextConstructor = new Storage2.AudioContext();
        }
        self.audioCon text= Storage2.AudioContextConstructor;
        self.audioSources = [];
        if (self.useGainNode === true) {
          self.gainNode = self.audioContext.createGain();
          self.gainNode.connect(self.audioContext.destination);
          self.gainNode.gain.value = 0;
        }
        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
          if (!stream.getTracks().filter(function(t) {
            return t.kind === "audio";
          }).length) {
            return;
          }
          audioTracksLength++;
          var audioSource = self.audioContext.createMediaStreamSource(stream);
          if (self.useGainNode === true) {
            audioSource.connect(self.gainNode);
          }
          self.audioSources.push(audioSource);
        });
        if (!audioTracksLength) {
          return;
        }
        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
          audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
      }
      function getVideo(stream) {
        var video = document.createElement("video");
        setSrcObject2(stream, video);
        video.className = elementClass;
        video.muted = true;
        video.volume = 0;
        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;
        video.play();
        return video;
      }
      this.appendStreams = function(streams) {
        if (!streams) {
          throw "First parameter is required.";
        }
        if (!(streams instanceof Array)) {
          streams = [streams];
        }
        streams.forEach(function(stream) {
          var newStream = new MediaStream2();
          if (stream.getTracks().filter(function(t) {
            return t.kind === "video";
          }).length) {
            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
            newStream.addTrack(stream.getTracks().filter(function(t) {
              return t.kind === "video";
            })[0]);
          }
          if (stream.getTracks().filter(function(t) {
            return t.kind === "audio";
          }).length) {
            var audioSource = self.audioContext.createMediaStreamSource(stream);
            self.audioDestination = self.audioContext.createMediaStreamDestination();
            audioSource.connect(self.audioDestination);
            newStream.addTrack(self.audioDestination.stream.getTracks().filter(function(t) {
              return t.kind === "audio";
            })[0]);
          }
          arrayOfMediaStreams.push(newStream);
        });
      };
      this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;
        if (self.gainNode) {
          self.gainNode.disconnect();
          self.gainNode = null;
        }
        if (self.audioSources.length) {
          self.audioSources.forEach(function(source) {
            source.disconnect();
          });
          self.audioSources = [];
        }
        if (self.audioDestination) {
          self.audioDestination.disconnect();
          self.audioDestination = null;
        }
        if (self.audioContext) {
          self.audioContext.close();
        }
        self.audioCon text= null;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (canvas.stream) {
          canvas.stream.stop();
          canvas.stream = null;
        }
      };
      this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
          streams = [streams];
        }
        resetVideoStreams(streams);
      };
      function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;
        streams.forEach(function(stream) {
          if (!stream.getTracks().filter(function(t) {
            return t.kind === "video";
          }).length) {
            return;
          }
          var video = getVideo(stream);
          video.stream = stream;
          videos.push(video);
        });
      }
      this.name = "MultiStreamsMixer";
      this.toString = function() {
        return this.name;
      };
      this.getMixedStream = getMixedStream;
    }
    if (typeof RecordRTC === "undefined") {
      if (typeof module !== "undefined") {
        module.exports = MultiStreamsMixer;
      }
      if (typeof define === "function" && define.amd) {
        define("MultiStreamsMixer", [], function() {
          return MultiStreamsMixer;
        });
      }
    }
    function MultiStreamRecorder(arrayOfMediaStreams, options) {
      arrayOfMediaStreams = arrayOfMediaStreams || [];
      var self = this;
      var mixer;
      var mediaRecorder;
      options = options || {
        elementClass: "multi-streams-mixer",
        mimeType: "video/webm",
        video: {
          width: 360,
          height: 240
        }
      };
      if (!options.frameInterval) {
        options.frameInterval = 10;
      }
      if (!options.video) {
        options.video = {};
      }
      if (!options.video.width) {
        options.video.width = 360;
      }
      if (!options.video.height) {
        options.video.height = 240;
      }
      this.record = function() {
        mixer = new MultiStreamsMixer(arrayOfMediaStreams, options.elementClass || "multi-streams-mixer");
        if (getAllVideoTracks().length) {
          mixer.frameInterval = options.frameInterval || 10;
          mixer.width = options.video.width || 360;
          mixer.height = options.video.height || 240;
          mixer.startDrawingFrames();
        }
        if (options.previewStream && typeof options.previewStream === "function") {
          options.previewStream(mixer.getMixedStream());
        }
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
      };
      function getAllVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
          getTracks(stream, "video").forEach(function(track) {
            tracks.push(track);
          });
        });
        return tracks;
      }
      this.stop = function(callback) {
        if (!mediaRecorder) {
          return;
        }
        mediaRecorder.stop(function(blob) {
          self.blob = blob;
          callback(blob);
          self.clearRecordedData();
        });
      };
      this.pause = function() {
        if (mediaRecorder) {
          mediaRecorder.pause();
        }
      };
      this.resume = function() {
        if (mediaRecorder) {
          mediaRecorder.resume();
        }
      };
      this.clearRecordedData = function() {
        if (mediaRecorder) {
          mediaRecorder.clearRecordedData();
          mediaRecorder = null;
        }
        if (mixer) {
          mixer.releaseStreams();
          mixer = null;
        }
      };
      this.addStreams = function(streams) {
        if (!streams) {
          throw "First parameter is required.";
        }
        if (!(streams instanceof Array)) {
          streams = [streams];
        }
        arrayOfMediaStreams.concat(streams);
        if (!mediaRecorder || !mixer) {
          return;
        }
        mixer.appendStreams(streams);
        if (options.previewStream && typeof options.previewStream === "function") {
          options.previewStream(mixer.getMixedStream());
        }
      };
      this.resetVideoStreams = function(streams) {
        if (!mixer) {
          return;
        }
        if (streams && !(streams instanceof Array)) {
          streams = [streams];
        }
        mixer.resetVideoStreams(streams);
      };
      this.getMixer = function() {
        return mixer;
      };
      this.name = "MultiStreamRecorder";
      this.toString = function() {
        return this.name;
      };
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
    }
    function RecordRTCPromisesHandler(mediaStream, options) {
      if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
      }
      if (typeof mediaStream === "undefined") {
        throw 'First argument "MediaStream" is required.';
      }
      var self = this;
      self.recordRTC = new RecordRTC(mediaStream, options);
      this.startRecording = function() {
        return new Promise(function(resolve, reject) {
          try {
            self.recordRTC.startRecording();
            resolve();
          } catch (e) {
            reject(e);
          }
        });
      };
      this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
          try {
            self.recordRTC.stopRecording(function(url) {
              self.blob = self.recordRTC.getBlob();
              if (!self.blob || !self.blob.size) {
                reject("Empty blob.", self.blob);
                return;
              }
              resolve(url);
            });
          } catch (e) {
            reject(e);
          }
        });
      };
      this.pauseRecording = function() {
        return new Promise(function(resolve, reject) {
          try {
            self.recordRTC.pauseRecording();
            resolve();
          } catch (e) {
            reject(e);
          }
        });
      };
      this.resumeRecording = function() {
        return new Promise(function(resolve, reject) {
          try {
            self.recordRTC.resumeRecording();
            resolve();
          } catch (e) {
            reject(e);
          }
        });
      };
      this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
          try {
            self.recordRTC.getDataURL(function(dataURL) {
              resolve(dataURL);
            });
          } catch (e) {
            reject(e);
          }
        });
      };
      this.getBlob = function() {
        return new Promise(function(resolve, reject) {
          try {
            resolve(self.recordRTC.getBlob());
          } catch (e) {
            reject(e);
          }
        });
      };
      this.getInternalRecorder = function() {
        return new Promise(function(resolve, reject) {
          try {
            resolve(self.recordRTC.getInternalRecorder());
          } catch (e) {
            reject(e);
          }
        });
      };
      this.reset = function() {
        return new Promise(function(resolve, reject) {
          try {
            resolve(self.recordRTC.reset());
          } catch (e) {
            reject(e);
          }
        });
      };
      this.destroy = function() {
        return new Promise(function(resolve, reject) {
          try {
            resolve(self.recordRTC.destroy());
          } catch (e) {
            reject(e);
          }
        });
      };
      this.getState = function() {
        return new Promise(function(resolve, reject) {
          try {
            resolve(self.recordRTC.getState());
          } catch (e) {
            reject(e);
          }
        });
      };
      this.blob = null;
      this.version = "5.6.2";
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
    }
    function WebAssemblyRecorder(stream, config) {
      if (typeof ReadableStream === "undefined" || typeof WritableStream === "undefined") {
        console.error("Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js");
      }
      config = config || {};
      config.width = config.width || 640;
      config.height = config.height || 480;
      config.frameRate = config.frameRate || 30;
      config.bitrate = config.bitrate || 1200;
      config.realtime = config.realtime || true;
      function createBufferURL(buffer, type) {
        return URL2.createObjectURL(new Blob([buffer], {
          type: type || ""
        }));
      }
      var finished;
      function cameraStream() {
        return new ReadableStream({
          start: function(controller) {
            var cvs = document.createElement("canvas");
            var video = document.createElement("video");
            var first = true;
            video.srcObject = stream;
            video.muted = true;
            video.height = config.height;
            video.width = config.width;
            video.volume = 0;
            video.onplaying = function() {
              cvs.width = config.width;
              cvs.height = config.height;
              var ctx = cvs.getContext("2d");
              var frameTimeout = 1e3 / config.frameRate;
              var cameraTimer = setInterval(function f() {
                if (finished) {
                  clearInterval(cameraTimer);
                  controller.close();
                }
                if (first) {
                  first = false;
                  if (config.onVideoProcessStarted) {
                    config.onVideoProcessStarted();
                  }
                }
                ctx.drawImage(video, 0, 0);
                if (controller._controlledReadableStream.state !== "closed") {
                  try {
                    controller.enqueue(
                      ctx.getImageData(0, 0, config.width, config.height)
                    );
                  } catch (e) {
                  }
                }
              }, frameTimeout);
            };
            video.play();
          }
        });
      }
      var worker;
      function startRecording(stream2, buffer) {
        if (!config.workerPath && !buffer) {
          finished = false;
          fetch(
            "https://unpkg.com/webm-wasm@latest/dist/webm-worker.js"
          ).then(function(r) {
            r.arrayBuffer().then(function(buffer2) {
              startRecording(stream2, buffer2);
            });
          });
          return;
        }
        if (!config.workerPath && buffer instanceof ArrayBuffer) {
          var blob = new Blob([buffer], {
            type: "text/javascript"
          });
          config.workerPath = URL2.createObjectURL(blob);
        }
        if (!config.workerPath) {
          console.error("workerPath parameter is missing.");
        }
        worker = new Worker(config.workerPath);
        worker.postMessage(config.webAssemblyPath || "https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm");
        worker.addEventListener("message", function(event) {
          if (event.data === "READY") {
            worker.postMessage({
              width: config.width,
              height: config.height,
              bitrate: config.bitrate || 1200,
              timebaseDen: config.frameRate || 30,
              realtime: config.realtime
            });
            cameraStream().pipeTo(new WritableStream({
              write: function(image) {
                if (finished) {
                  console.error("Got image, but recorder is finished!");
                  return;
                }
                worker.postMessage(image.data.buffer, [image.data.buffer]);
              }
            }));
          } else if (!!event.data) {
            if (!isPaused) {
              arrayOfBuffers.push(event.data);
            }
          }
        });
      }
      this.record = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
        startRecording(stream);
        if (typeof config.initCallback === "function") {
          config.initCallback();
        }
      };
      var isPaused;
      this.pause = function() {
        isPaused = true;
      };
      this.resume = function() {
        isPaused = false;
      };
      function terminate(callback) {
        if (!worker) {
          if (callback) {
            callback();
          }
          return;
        }
        worker.addEventListener("message", function(event) {
          if (event.data === null) {
            worker.terminate();
            worker = null;
            if (callback) {
              callback();
            }
          }
        });
        worker.postMessage(null);
      }
      var arrayOfBuffers = [];
      this.stop = function(callback) {
        finished = true;
        var recorder = this;
        terminate(function() {
          recorder.blob = new Blob(arrayOfBuffers, {
            type: "video/webm"
          });
          callback(recorder.blob);
        });
      };
      this.name = "WebAssemblyRecorder";
      this.toString = function() {
        return this.name;
      };
      this.clearRecordedData = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
      };
      this.blob = null;
    }
    if (typeof RecordRTC !== "undefined") {
      RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
    }
  }
});

// node_modules/remix-utils/browser/react/client-only.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/remix-utils/browser/react/use-hydrated.js
var import_react = __toESM(require_react());
var hydrating = true;
function useHydrated() {
  let [hydrated, setHydrated] = (0, import_react.useState)(() => !hydrating);
  (0, import_react.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

// node_modules/remix-utils/browser/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children() }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
}

// node_modules/react-icons/lib/esm/iconBase.js
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react2 = __toESM(require_react());
var DefaultCon text= {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconCon text= import_react2.default.createCon text&& import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react3.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react3.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react3.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react3.default.createElement("title", null, title), props.children);
  };
  return IconCon text!== void 0 ? import_react3.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bs/index.esm.js
function BsMic(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" } }, { "tag": "path", "attr": { "d": "M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" } }] })(props);
}
function BsPerson(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" } }] })(props);
}
function BsPlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" } }] })(props);
}

// node_modules/react-icons/ai/index.esm.js
function AiOutlineDelete(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] })(props);
}
function AiOutlineRobot(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M300 328a60 60 0 1 0 120 0 60 60 0 1 0-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 1 0 120 0 60 60 0 1 0-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(props);
}
function AiOutlineSend(props) {
  return GenIcon({ "tag": "svg", "attr": { "t": "1569683742680", "viewBox": "0 0 1024 1024", "version": "1.1" }, "child": [{ "tag": "defs", "attr": {}, "child": [] }, { "tag": "path", "attr": { "d": "M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" } }] })(props);
}

// node_modules/react-icons/tfi/index.esm.js
function TfiControlPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 17 17" }, "child": [{ "tag": "g", "attr": {}, "child": [] }, { "tag": "path", "attr": { "d": "M3 15h4v-13h-4v13zM4 3h2v11h-2v-11zM10 2v13h4v-13h-4zM13 14h-2v-11h2v11z" } }] })(props);
}

// node_modules/react-use/esm/factory/createHTMLMediaHook.js
init_tslib_es6();
var React3 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/react-use/esm/useSetState.js
var import_react4 = __toESM(require_react());
var useSetState = function(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  var _a = (0, import_react4.useState)(initialState), state = _a[0], set = _a[1];
  var setState = (0, import_react4.useCallback)(function(patch) {
    set(function(prevState) {
      return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
    });
  }, []);
  return [state, setState];
};
var useSetState_default = useSetState;

// node_modules/react-use/esm/misc/parseTimeRanges.js
function parseTimeRanges(ranges) {
  var result = [];
  for (var i = 0; i < ranges.length; i++) {
    result.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }
  return result;
}

// node_modules/react-use/esm/factory/createHTMLMediaHook.js
function createHTMLMediaHook(tag) {
  return function(elOrProps) {
    var element;
    var props;
    if (React3.isValidElement(elOrProps)) {
      element = elOrProps;
      props = element.props;
    } else {
      props = elOrProps;
    }
    var _a = useSetState_default({
      buffered: [],
      time: 0,
      duration: 0,
      paused: true,
      muted: false,
      volume: 1,
      playing: false
    }), state = _a[0], setState = _a[1];
    var ref = (0, import_react5.useRef)(null);
    var wrapEvent = function(userEvent, proxyEvent) {
      return function(event) {
        try {
          proxyEvent && proxyEvent(event);
        } finally {
          userEvent && userEvent(event);
        }
      };
    };
    var onPlay = function() {
      return setState({ paused: false });
    };
    var onPlaying = function() {
      return setState({ playing: true });
    };
    var onWaiting = function() {
      return setState({ playing: false });
    };
    var onPause = function() {
      return setState({ paused: true, playing: false });
    };
    var onVolumeChange = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        muted: el.muted,
        volume: el.volume
      });
    };
    var onDurationChange = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      var duration = el.duration, buffered = el.buffered;
      setState({
        duration,
        buffered: parseTimeRanges(buffered)
      });
    };
    var onTimeUpdate = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({ time: el.currentTime });
    };
    var onProgress = function() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({ buffered: parseTimeRanges(el.buffered) });
    };
    if (element) {
      element = React3.cloneElement(element, __assign2(__assign2({ controls: false }, props), { ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
    } else {
      element = React3.createElement(tag, __assign2(__assign2({ controls: false }, props), { ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
    }
    var lockPlay = false;
    var controls = {
      play: function() {
        var el = ref.current;
        if (!el) {
          return void 0;
        }
        if (!lockPlay) {
          var promise = el.play();
          var isPromise = typeof promise === "object";
          if (isPromise) {
            lockPlay = true;
            var resetLock = function() {
              lockPlay = false;
            };
            promise.then(resetLock, resetLock);
          }
          return promise;
        }
        return void 0;
      },
      pause: function() {
        var el = ref.current;
        if (el && !lockPlay) {
          return el.pause();
        }
      },
      seek: function(time) {
        var el = ref.current;
        if (!el || state.duration === void 0) {
          return;
        }
        time = Math.min(state.duration, Math.max(0, time));
        el.currentTime = time;
      },
      volume: function(volume) {
        var el = ref.current;
        if (!el) {
          return;
        }
        volume = Math.min(1, Math.max(0, volume));
        el.volume = volume;
        setState({ volume });
      },
      mute: function() {
        var el = ref.current;
        if (!el) {
          return;
        }
        el.muted = true;
      },
      unmute: function() {
        var el = ref.current;
        if (!el) {
          return;
        }
        el.muted = false;
      }
    };
    (0, import_react5.useEffect)(function() {
      var el = ref.current;
      if (!el) {
        if (true) {
          if (tag === "audio") {
            console.error("useAudio() ref to <audio> element is empty at mount. It seem you have not rendered the audio element, which it returns as the first argument const [audio] = useAudio(...).");
          } else if (tag === "video") {
            console.error("useVideo() ref to <video> element is empty at mount. It seem you have not rendered the video element, which it returns as the first argument const [video] = useVideo(...).");
          }
        }
        return;
      }
      setState({
        volume: el.volume,
        muted: el.muted,
        paused: el.paused
      });
      if (props.autoPlay && el.paused) {
        controls.play();
      }
    }, [props.src]);
    return [element, state, controls, ref];
  };
}

// node_modules/react-use/esm/useAudio.js
var useAudio = createHTMLMediaHook("audio");
var useAudio_default = useAudio;

// app/components/audio.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Audio({ src }) {
  const [audio, state, controls] = useAudio_default({ src });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "loading" }, void 0, false, {
    fileName: "app/components/audio.client.tsx",
    lineNumber: 8,
    columnNumber: 31
  }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimeFormat, { time: state.duration }, void 0, false, {
      fileName: "app/components/audio.client.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    ":",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TimeFormat, { time: state.time }, void 0, false, {
      fileName: "app/components/audio.client.tsx",
      lineNumber: 13,
      columnNumber: 54
    }, this),
    state.paused ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        onClick: () => controls.play(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BsPlay, { size: 25, className: "fill-primary hover:fill-third" }, void 0, false, {
          fileName: "app/components/audio.client.tsx",
          lineNumber: 18,
          columnNumber: 18
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/audio.client.tsx",
        lineNumber: 16,
        columnNumber: 17
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        onClick: () => controls.pause(),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TfiControlPause, { size: 25, className: "fill-primary hover:fill-third" }, void 0, false, {
          fileName: "app/components/audio.client.tsx",
          lineNumber: 22,
          columnNumber: 18
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/audio.client.tsx",
        lineNumber: 20,
        columnNumber: 17
      },
      this
    ),
    audio,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AudioBar, { seek: controls.seek, time: state.time, duration: state.duration, className: "mx-2 mt-[6px]" }, void 0, false, {
      fileName: "app/components/audio.client.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/audio.client.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/audio.client.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
function AudioBar({
  className,
  time,
  duration,
  seek
}) {
  const handleChange = (e) => {
    try {
      const valNum = parseFloat(e.target.value);
      seek(valNum / 100 * duration);
    } catch (e2) {
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${className}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "input",
    {
      type: "range",
      step: "any",
      onChange: handleChange,
      value: `${duration !== Infinity ? time / duration * 100 : time / 50 * 100}`,
      className: "range range-xs range-primary w-16 min-[335px]:w-24 min-[380px]:w-36 "
    },
    void 0,
    false,
    {
      fileName: "app/components/audio.client.tsx",
      lineNumber: 52,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/audio.client.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
}
function TimeFormat({ time }) {
  if (time === Infinity) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-0.5", children: "0:00" }, void 0, false, {
      fileName: "app/components/audio.client.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-0.5", children: [
    Math.floor(time / 60),
    ":",
    Math.floor(time) - Math.floor(time / 60) * 60 < 10 ? 0 : "",
    Math.floor(time) - Math.floor(time / 60) * 60
  ] }, void 0, true, {
    fileName: "app/components/audio.client.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

// app/components/message.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Message({
  msgOwnerUsername,
  voiceSrc
}) {
  const username = "1";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `chat ${username === msgOwnerUsername ? "chat-start" : "chat-end"} `, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chat-image avatar ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " rounded-full", children: username === msgOwnerUsername ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BsPerson, { size: 45, className: "fill-secondary" }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiOutlineRobot, { size: 45, className: "fill-secondary" }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 24,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 19,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chat-header font-mono text-xl text-secondary", children: username === msgOwnerUsername ? "You" : "GPT" }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chat-bubble  bg-secondary text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Audio, { src: voiceSrc }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/message.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/message.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/components/audio-recorder3.client.tsx
var import_react7 = __toESM(require_react());

// app/audio-recorder.client.ts
var import_react6 = __toESM(require_react());
var import_recordrtc = __toESM(require_RecordRTC());
function useAudioRecorder({ onStop, onStart }) {
  const [stream, setStream] = (0, import_react6.useState)();
  const [recorderRTC, setRecorderRTC] = (0, import_react6.useState)();
  const handleStart = (0, import_react6.useCallback)(async () => {
    const stream2 = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new import_recordrtc.StereoAudioRecorder(stream2, { mimeType: "audio/wav" });
    setStream(stream2);
    setRecorderRTC(recorder);
    recorder.record();
    onStart();
  }, [onStart]);
  const handleStop = (0, import_react6.useCallback)(() => {
    if (recorderRTC === void 0 || stream === void 0)
      return;
    recorderRTC.stop((blob) => {
      onStop(blob, URL.createObjectURL(blob));
    });
    stream.getAudioTracks().forEach((track) => track.stop());
  }, [onStop, recorderRTC, stream]);
  return {
    start: handleStart,
    stop: handleStop
  };
}

// app/components/audio-recorder3.client.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function AudioRecorder({ lang }) {
  const [blobUrl, setBlobUrl] = (0, import_react7.useState)("");
  const [blob, setBlob] = (0, import_react7.useState)();
  const { voices, setVoices } = useVMContext();
  const { sendVoiceMessage } = useChat({ setVoices, voices });
  const [micState, setMicState] = (0, import_react7.useState)("record");
  const { start, stop } = useAudioRecorder({
    onStart() {
      setMicState("recording");
    },
    onStop: (0, import_react7.useCallback)((blob2, blobUrl2) => {
      setMicState("recorded");
      setBlob(blob2);
      setBlobUrl(blobUrl2);
    }, [])
  });
  const handleSendVoice = () => {
    if (blob === void 0 || blob === null)
      return;
    sendVoiceMessage(blob, lang);
    setBlob(null);
    setBlobUrl("");
    setMicState("record");
  };
  const handleDelete = () => {
    setMicState("record");
    setBlob(null);
    setBlobUrl("");
  };
  if (micState === "record") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row w-full h-12 bg-secondary text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BsMic, { onClick: start, size: 25, className: "fill-primary hover:fill-third m-auto" }, void 0, false, {
      fileName: "app/components/audio-recorder3.client.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/audio-recorder3.client.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this);
  } else if (micState === "recording") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row w-full h-12 bg-secondary text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TfiControlPause, { onClick: stop, size: 25, className: "fill-primary hover:fill-third m-auto" }, void 0, false, {
      fileName: "app/components/audio-recorder3.client.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/audio-recorder3.client.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this);
  } else {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row w-full h-12 bg-secondary text-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-8 w-8 ml-0 sm:ml-52 lg:ml-16 2xl:ml-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AiOutlineDelete, { onClick: handleDelete, size: 25, className: "fill-primary hover:fill-third" }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-auto h-8 w-52", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Audio, { src: blobUrl }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "my-auto ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-8 w-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AiOutlineSend, { onClick: handleSendVoice, size: 25, className: "m-auto fill-primary hover:fill-third" }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/audio-recorder3.client.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/audio-recorder3.client.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this);
  }
}

// app/routes/index.tsx
var import_react8 = __toESM(require_react());

// app/components/language-selector.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var langs = [
  "fa",
  "en",
  "ar",
  "af",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "dr",
  "el",
  "et",
  "es",
  "fi",
  "fr",
  "hy",
  "hu",
  "hi",
  "it",
  "id",
  "kn",
  "ko",
  "ja",
  "la",
  "lv",
  "ml",
  "mr",
  "mk",
  "nl",
  "ne",
  "no",
  "ru",
  "ro",
  "sr",
  "sk",
  "sv",
  "tr",
  "pl",
  "pt",
  "ur",
  "zh"
];
function LanguageSelector({ lang, setLang }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown text-secondary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "btn btn-primary m-1", tabIndex: 0, children: lang }, void 0, false, {
      fileName: "app/components/language-selector.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "ul",
      {
        tabIndex: 0,
        className: "msg-container dropdown-content menu shadow bg-primary rounded-sm w-16 h-40 overflow-y-auto overflow-x-hidden flex flex-row scrol",
        children: langs.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { onClick: () => setLang(l), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: l }, void 0, false, {
          fileName: "app/components/language-selector.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this) }, l, false, {
          fileName: "app/components/language-selector.tsx",
          lineNumber: 35,
          columnNumber: 21
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/language-selector.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/language-selector.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Index() {
  const { voices } = useVMContext();
  const [lang, setLang] = (0, import_react8.useState)("en");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col w-full bg-primary lg:w-[55%] xl:w-[35%] mx-auto min-h-screen max-h-screen h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex flex-row w-full h-32 bg-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "my-auto ml-2 lg:ml-16 text-primary font-mono font-extrabold text-3xl", children: "OpenAI/GPT" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-auto ml-auto mr-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LanguageSelector, { lang, setLang }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full msg-container p-4 max-h-[calc(100%-14rem)] h-[calc(100%-14rem)] overflow-y-scroll flex flex-col", children: voices.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-secondary font-mono font-extrabold flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-3xl mx-auto mt-52", children: "WELCOME" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xl  mx-auto mt-12", children: "For Start Chatting with ChatGPT Click On Microphone ..." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
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
        false,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 33,
          columnNumber: 17
        },
        this
      ) }, voice.id, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this)
    ) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "loading .... " }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 44,
      columnNumber: 29
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AudioRecorder, { lang }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 46,
      columnNumber: 16
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-RM7FPOIP.js.map
