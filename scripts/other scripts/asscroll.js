function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var asscroll = createCommonjsModule(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(self, function() {
    return (() => {
      var __webpack_modules__ = {
        4672: (module2) => {
          const store = {
            html: document.documentElement,
            body: document.body,
            window: {
              w: window.innerWidth,
              h: window.innerHeight
            }
          };
          module2.exports = store;
        },
        5336: (module2) => {
          module2.exports = function debounce(fn, delay) {
            let timeoutID = null;
            return function() {
              clearTimeout(timeoutID);
              const args = arguments;
              const that = this;
              timeoutID = setTimeout(function() {
                fn.apply(that, args);
              }, delay);
            };
          };
        },
        6077: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var isObject = __webpack_require__2(111);
          module2.exports = function(it) {
            if (!isObject(it) && it !== null) {
              throw TypeError("Can't set " + String(it) + " as a prototype");
            }
            return it;
          };
        },
        1223: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var wellKnownSymbol = __webpack_require__2(5112);
          var create = __webpack_require__2(30);
          var definePropertyModule = __webpack_require__2(3070);
          var UNSCOPABLES = wellKnownSymbol("unscopables");
          var ArrayPrototype = Array.prototype;
          if (ArrayPrototype[UNSCOPABLES] == void 0) {
            definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
              configurable: true,
              value: create(null)
            });
          }
          module2.exports = function(key) {
            ArrayPrototype[UNSCOPABLES][key] = true;
          };
        },
        9670: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var isObject = __webpack_require__2(111);
          module2.exports = function(it) {
            if (!isObject(it)) {
              throw TypeError(String(it) + " is not an object");
            }
            return it;
          };
        },
        1318: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var toIndexedObject = __webpack_require__2(5656);
          var toLength = __webpack_require__2(7466);
          var toAbsoluteIndex = __webpack_require__2(1400);
          var createMethod = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
              var O = toIndexedObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value;
              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++];
                  if (value != value)
                    return true;
                }
              else
                for (; length > index; index++) {
                  if ((IS_INCLUDES || index in O) && O[index] === el)
                    return IS_INCLUDES || index || 0;
                }
              return !IS_INCLUDES && -1;
            };
          };
          module2.exports = {
            includes: createMethod(true),
            indexOf: createMethod(false)
          };
        },
        4326: (module2) => {
          var toString = {}.toString;
          module2.exports = function(it) {
            return toString.call(it).slice(8, -1);
          };
        },
        9920: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var has2 = __webpack_require__2(6656);
          var ownKeys = __webpack_require__2(3887);
          var getOwnPropertyDescriptorModule = __webpack_require__2(1236);
          var definePropertyModule = __webpack_require__2(3070);
          module2.exports = function(target, source) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (!has2(target, key))
                defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
          };
        },
        8544: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var fails = __webpack_require__2(7293);
          module2.exports = !fails(function() {
            function F() {
            }
            F.prototype.constructor = null;
            return Object.getPrototypeOf(new F()) !== F.prototype;
          });
        },
        4994: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var IteratorPrototype2 = __webpack_require__2(3383).IteratorPrototype;
          var create = __webpack_require__2(30);
          var createPropertyDescriptor = __webpack_require__2(9114);
          var setToStringTag = __webpack_require__2(8003);
          var Iterators = __webpack_require__2(7497);
          var returnThis = function() {
            return this;
          };
          module2.exports = function(IteratorConstructor, NAME, next) {
            var TO_STRING_TAG = NAME + " Iterator";
            IteratorConstructor.prototype = create(IteratorPrototype2, {next: createPropertyDescriptor(1, next)});
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
          };
        },
        8880: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var DESCRIPTORS = __webpack_require__2(9781);
          var definePropertyModule = __webpack_require__2(3070);
          var createPropertyDescriptor = __webpack_require__2(9114);
          module2.exports = DESCRIPTORS ? function(object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
          } : function(object, key, value) {
            object[key] = value;
            return object;
          };
        },
        9114: (module2) => {
          module2.exports = function(bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value
            };
          };
        },
        654: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var $ = __webpack_require__2(2109);
          var createIteratorConstructor = __webpack_require__2(4994);
          var getPrototypeOf = __webpack_require__2(9518);
          var setPrototypeOf = __webpack_require__2(7674);
          var setToStringTag = __webpack_require__2(8003);
          var createNonEnumerableProperty = __webpack_require__2(8880);
          var redefine = __webpack_require__2(1320);
          var wellKnownSymbol = __webpack_require__2(5112);
          var IS_PURE = __webpack_require__2(1913);
          var Iterators = __webpack_require__2(7497);
          var IteratorsCore = __webpack_require__2(3383);
          var IteratorPrototype2 = IteratorsCore.IteratorPrototype;
          var BUGGY_SAFARI_ITERATORS2 = IteratorsCore.BUGGY_SAFARI_ITERATORS;
          var ITERATOR = wellKnownSymbol("iterator");
          var KEYS = "keys";
          var VALUES = "values";
          var ENTRIES = "entries";
          var returnThis = function() {
            return this;
          };
          module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);
            var getIterationMethod = function(KIND) {
              if (KIND === DEFAULT && defaultIterator)
                return defaultIterator;
              if (!BUGGY_SAFARI_ITERATORS2 && KIND in IterablePrototype)
                return IterablePrototype[KIND];
              switch (KIND) {
                case KEYS:
                  return function keys() {
                    return new IteratorConstructor(this, KIND);
                  };
                case VALUES:
                  return function values() {
                    return new IteratorConstructor(this, KIND);
                  };
                case ENTRIES:
                  return function entries() {
                    return new IteratorConstructor(this, KIND);
                  };
              }
              return function() {
                return new IteratorConstructor(this);
              };
            };
            var TO_STRING_TAG = NAME + " Iterator";
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
            var defaultIterator = !BUGGY_SAFARI_ITERATORS2 && nativeIterator || getIterationMethod(DEFAULT);
            var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY;
            if (anyNativeIterator) {
              CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
              if (IteratorPrototype2 !== Object.prototype && CurrentIteratorPrototype.next) {
                if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype2) {
                  if (setPrototypeOf) {
                    setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype2);
                  } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                    createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                  }
                }
                setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                if (IS_PURE)
                  Iterators[TO_STRING_TAG] = returnThis;
              }
            }
            if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
              INCORRECT_VALUES_NAME = true;
              defaultIterator = function values() {
                return nativeIterator.call(this);
              };
            }
            if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
              createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
            }
            Iterators[NAME] = defaultIterator;
            if (DEFAULT) {
              methods = {
                values: getIterationMethod(VALUES),
                keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                entries: getIterationMethod(ENTRIES)
              };
              if (FORCED)
                for (KEY in methods) {
                  if (BUGGY_SAFARI_ITERATORS2 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                    redefine(IterablePrototype, KEY, methods[KEY]);
                  }
                }
              else
                $({target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS2 || INCORRECT_VALUES_NAME}, methods);
            }
            return methods;
          };
        },
        9781: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var fails = __webpack_require__2(7293);
          module2.exports = !fails(function() {
            return Object.defineProperty({}, 1, {get: function() {
              return 7;
            }})[1] != 7;
          });
        },
        317: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var isObject = __webpack_require__2(111);
          var document2 = global.document;
          var EXISTS = isObject(document2) && isObject(document2.createElement);
          module2.exports = function(it) {
            return EXISTS ? document2.createElement(it) : {};
          };
        },
        8324: (module2) => {
          module2.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
        },
        5268: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var classof = __webpack_require__2(4326);
          var global = __webpack_require__2(7854);
          module2.exports = classof(global.process) == "process";
        },
        8113: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var getBuiltIn = __webpack_require__2(5005);
          module2.exports = getBuiltIn("navigator", "userAgent") || "";
        },
        7392: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var userAgent = __webpack_require__2(8113);
          var process = global.process;
          var versions = process && process.versions;
          var v8 = versions && versions.v8;
          var match, version;
          if (v8) {
            match = v8.split(".");
            version = match[0] + match[1];
          } else if (userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
              match = userAgent.match(/Chrome\/(\d+)/);
              if (match)
                version = match[1];
            }
          }
          module2.exports = version && +version;
        },
        748: (module2) => {
          module2.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
          ];
        },
        2109: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var getOwnPropertyDescriptor = __webpack_require__2(1236).f;
          var createNonEnumerableProperty = __webpack_require__2(8880);
          var redefine = __webpack_require__2(1320);
          var setGlobal = __webpack_require__2(3505);
          var copyConstructorProperties = __webpack_require__2(9920);
          var isForced = __webpack_require__2(4705);
          module2.exports = function(options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;
            if (GLOBAL) {
              target = global;
            } else if (STATIC) {
              target = global[TARGET] || setGlobal(TARGET, {});
            } else {
              target = (global[TARGET] || {}).prototype;
            }
            if (target)
              for (key in source) {
                sourceProperty = source[key];
                if (options.noTargetGet) {
                  descriptor = getOwnPropertyDescriptor(target, key);
                  targetProperty = descriptor && descriptor.value;
                } else
                  targetProperty = target[key];
                FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                if (!FORCED && targetProperty !== void 0) {
                  if (typeof sourceProperty === typeof targetProperty)
                    continue;
                  copyConstructorProperties(sourceProperty, targetProperty);
                }
                if (options.sham || targetProperty && targetProperty.sham) {
                  createNonEnumerableProperty(sourceProperty, "sham", true);
                }
                redefine(target, key, sourceProperty, options);
              }
          };
        },
        7293: (module2) => {
          module2.exports = function(exec) {
            try {
              return !!exec();
            } catch (error) {
              return true;
            }
          };
        },
        5005: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var path = __webpack_require__2(857);
          var global = __webpack_require__2(7854);
          var aFunction = function(variable) {
            return typeof variable == "function" ? variable : void 0;
          };
          module2.exports = function(namespace, method) {
            return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
          };
        },
        7854: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var check = function(it) {
            return it && it.Math == Math && it;
          };
          module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__2.g == "object" && __webpack_require__2.g) || function() {
            return this;
          }() || Function("return this")();
        },
        6656: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var toObject = __webpack_require__2(7908);
          var hasOwnProperty = {}.hasOwnProperty;
          module2.exports = function hasOwn(it, key) {
            return hasOwnProperty.call(toObject(it), key);
          };
        },
        3501: (module2) => {
          module2.exports = {};
        },
        490: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var getBuiltIn = __webpack_require__2(5005);
          module2.exports = getBuiltIn("document", "documentElement");
        },
        4664: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var DESCRIPTORS = __webpack_require__2(9781);
          var fails = __webpack_require__2(7293);
          var createElement = __webpack_require__2(317);
          module2.exports = !DESCRIPTORS && !fails(function() {
            return Object.defineProperty(createElement("div"), "a", {
              get: function() {
                return 7;
              }
            }).a != 7;
          });
        },
        8361: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var fails = __webpack_require__2(7293);
          var classof = __webpack_require__2(4326);
          var split = "".split;
          module2.exports = fails(function() {
            return !Object("z").propertyIsEnumerable(0);
          }) ? function(it) {
            return classof(it) == "String" ? split.call(it, "") : Object(it);
          } : Object;
        },
        2788: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var store = __webpack_require__2(5465);
          var functionToString = Function.toString;
          if (typeof store.inspectSource != "function") {
            store.inspectSource = function(it) {
              return functionToString.call(it);
            };
          }
          module2.exports = store.inspectSource;
        },
        9909: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var NATIVE_WEAK_MAP = __webpack_require__2(8536);
          var global = __webpack_require__2(7854);
          var isObject = __webpack_require__2(111);
          var createNonEnumerableProperty = __webpack_require__2(8880);
          var objectHas = __webpack_require__2(6656);
          var shared = __webpack_require__2(5465);
          var sharedKey = __webpack_require__2(6200);
          var hiddenKeys = __webpack_require__2(3501);
          var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
          var WeakMap = global.WeakMap;
          var set2, get2, has2;
          var enforce2 = function(it) {
            return has2(it) ? get2(it) : set2(it, {});
          };
          var getterFor2 = function(TYPE) {
            return function(it) {
              var state;
              if (!isObject(it) || (state = get2(it)).type !== TYPE) {
                throw TypeError("Incompatible receiver, " + TYPE + " required");
              }
              return state;
            };
          };
          if (NATIVE_WEAK_MAP) {
            var store = shared.state || (shared.state = new WeakMap());
            var wmget = store.get;
            var wmhas = store.has;
            var wmset = store.set;
            set2 = function(it, metadata) {
              if (wmhas.call(store, it))
                throw new TypeError(OBJECT_ALREADY_INITIALIZED);
              metadata.facade = it;
              wmset.call(store, it, metadata);
              return metadata;
            };
            get2 = function(it) {
              return wmget.call(store, it) || {};
            };
            has2 = function(it) {
              return wmhas.call(store, it);
            };
          } else {
            var STATE = sharedKey("state");
            hiddenKeys[STATE] = true;
            set2 = function(it, metadata) {
              if (objectHas(it, STATE))
                throw new TypeError(OBJECT_ALREADY_INITIALIZED);
              metadata.facade = it;
              createNonEnumerableProperty(it, STATE, metadata);
              return metadata;
            };
            get2 = function(it) {
              return objectHas(it, STATE) ? it[STATE] : {};
            };
            has2 = function(it) {
              return objectHas(it, STATE);
            };
          }
          module2.exports = {
            set: set2,
            get: get2,
            has: has2,
            enforce: enforce2,
            getterFor: getterFor2
          };
        },
        4705: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var fails = __webpack_require__2(7293);
          var replacement = /#|\.prototype\./;
          var isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
          };
          var normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, ".").toLowerCase();
          };
          var data = isForced.data = {};
          var NATIVE = isForced.NATIVE = "N";
          var POLYFILL = isForced.POLYFILL = "P";
          module2.exports = isForced;
        },
        111: (module2) => {
          module2.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
          };
        },
        1913: (module2) => {
          module2.exports = false;
        },
        3383: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var fails = __webpack_require__2(7293);
          var getPrototypeOf = __webpack_require__2(9518);
          var createNonEnumerableProperty = __webpack_require__2(8880);
          var has2 = __webpack_require__2(6656);
          var wellKnownSymbol = __webpack_require__2(5112);
          var IS_PURE = __webpack_require__2(1913);
          var ITERATOR = wellKnownSymbol("iterator");
          var BUGGY_SAFARI_ITERATORS2 = false;
          var returnThis = function() {
            return this;
          };
          var IteratorPrototype2, PrototypeOfArrayIteratorPrototype, arrayIterator;
          if ([].keys) {
            arrayIterator = [].keys();
            if (!("next" in arrayIterator))
              BUGGY_SAFARI_ITERATORS2 = true;
            else {
              PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
              if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                IteratorPrototype2 = PrototypeOfArrayIteratorPrototype;
            }
          }
          var NEW_ITERATOR_PROTOTYPE = IteratorPrototype2 == void 0 || fails(function() {
            var test = {};
            return IteratorPrototype2[ITERATOR].call(test) !== test;
          });
          if (NEW_ITERATOR_PROTOTYPE)
            IteratorPrototype2 = {};
          if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has2(IteratorPrototype2, ITERATOR)) {
            createNonEnumerableProperty(IteratorPrototype2, ITERATOR, returnThis);
          }
          module2.exports = {
            IteratorPrototype: IteratorPrototype2,
            BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS2
          };
        },
        7497: (module2) => {
          module2.exports = {};
        },
        133: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var IS_NODE = __webpack_require__2(5268);
          var V8_VERSION = __webpack_require__2(7392);
          var fails = __webpack_require__2(7293);
          module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
            return !Symbol.sham && (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
          });
        },
        8536: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var inspectSource = __webpack_require__2(2788);
          var WeakMap = global.WeakMap;
          module2.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
        },
        30: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var anObject = __webpack_require__2(9670);
          var defineProperties = __webpack_require__2(6048);
          var enumBugKeys = __webpack_require__2(748);
          var hiddenKeys = __webpack_require__2(3501);
          var html = __webpack_require__2(490);
          var documentCreateElement = __webpack_require__2(317);
          var sharedKey = __webpack_require__2(6200);
          var GT = ">";
          var LT = "<";
          var PROTOTYPE = "prototype";
          var SCRIPT = "script";
          var IE_PROTO = sharedKey("IE_PROTO");
          var EmptyConstructor = function() {
          };
          var scriptTag = function(content) {
            return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
          };
          var NullProtoObjectViaActiveX = function(activeXDocument2) {
            activeXDocument2.write(scriptTag(""));
            activeXDocument2.close();
            var temp = activeXDocument2.parentWindow.Object;
            activeXDocument2 = null;
            return temp;
          };
          var NullProtoObjectViaIFrame = function() {
            var iframe = documentCreateElement("iframe");
            var JS = "java" + SCRIPT + ":";
            var iframeDocument;
            iframe.style.display = "none";
            html.appendChild(iframe);
            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag("document.F=Object"));
            iframeDocument.close();
            return iframeDocument.F;
          };
          var activeXDocument;
          var NullProtoObject = function() {
            try {
              activeXDocument = document.domain && new ActiveXObject("htmlfile");
            } catch (error) {
            }
            NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
            var length = enumBugKeys.length;
            while (length--)
              delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject();
          };
          hiddenKeys[IE_PROTO] = true;
          module2.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null;
              result[IE_PROTO] = O;
            } else
              result = NullProtoObject();
            return Properties === void 0 ? result : defineProperties(result, Properties);
          };
        },
        6048: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var DESCRIPTORS = __webpack_require__2(9781);
          var definePropertyModule = __webpack_require__2(3070);
          var anObject = __webpack_require__2(9670);
          var objectKeys = __webpack_require__2(1956);
          module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = objectKeys(Properties);
            var length = keys.length;
            var index = 0;
            var key;
            while (length > index)
              definePropertyModule.f(O, key = keys[index++], Properties[key]);
            return O;
          };
        },
        3070: (__unused_webpack_module, exports2, __webpack_require__2) => {
          var DESCRIPTORS = __webpack_require__2(9781);
          var IE8_DOM_DEFINE = __webpack_require__2(4664);
          var anObject = __webpack_require__2(9670);
          var toPrimitive = __webpack_require__2(7593);
          var $defineProperty = Object.defineProperty;
          exports2.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return $defineProperty(O, P, Attributes);
              } catch (error) {
              }
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported");
            if ("value" in Attributes)
              O[P] = Attributes.value;
            return O;
          };
        },
        1236: (__unused_webpack_module, exports2, __webpack_require__2) => {
          var DESCRIPTORS = __webpack_require__2(9781);
          var propertyIsEnumerableModule = __webpack_require__2(5296);
          var createPropertyDescriptor = __webpack_require__2(9114);
          var toIndexedObject = __webpack_require__2(5656);
          var toPrimitive = __webpack_require__2(7593);
          var has2 = __webpack_require__2(6656);
          var IE8_DOM_DEFINE = __webpack_require__2(4664);
          var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE)
              try {
                return $getOwnPropertyDescriptor(O, P);
              } catch (error) {
              }
            if (has2(O, P))
              return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
          };
        },
        8006: (__unused_webpack_module, exports2, __webpack_require__2) => {
          var internalObjectKeys = __webpack_require__2(6324);
          var enumBugKeys = __webpack_require__2(748);
          var hiddenKeys = enumBugKeys.concat("length", "prototype");
          exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };
        },
        5181: (__unused_webpack_module, exports2) => {
          exports2.f = Object.getOwnPropertySymbols;
        },
        9518: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var has2 = __webpack_require__2(6656);
          var toObject = __webpack_require__2(7908);
          var sharedKey = __webpack_require__2(6200);
          var CORRECT_PROTOTYPE_GETTER = __webpack_require__2(8544);
          var IE_PROTO = sharedKey("IE_PROTO");
          var ObjectPrototype = Object.prototype;
          module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
            O = toObject(O);
            if (has2(O, IE_PROTO))
              return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectPrototype : null;
          };
        },
        6324: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var has2 = __webpack_require__2(6656);
          var toIndexedObject = __webpack_require__2(5656);
          var indexOf = __webpack_require__2(1318).indexOf;
          var hiddenKeys = __webpack_require__2(3501);
          module2.exports = function(object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
              !has2(hiddenKeys, key) && has2(O, key) && result.push(key);
            while (names.length > i)
              if (has2(O, key = names[i++])) {
                ~indexOf(result, key) || result.push(key);
              }
            return result;
          };
        },
        1956: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var internalObjectKeys = __webpack_require__2(6324);
          var enumBugKeys = __webpack_require__2(748);
          module2.exports = Object.keys || function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };
        },
        5296: (__unused_webpack_module, exports2) => {
          var $propertyIsEnumerable = {}.propertyIsEnumerable;
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({1: 2}, 1);
          exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
          } : $propertyIsEnumerable;
        },
        7674: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var anObject = __webpack_require__2(9670);
          var aPossiblePrototype = __webpack_require__2(6077);
          module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var CORRECT_SETTER = false;
            var test = {};
            var setter;
            try {
              setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
              setter.call(test, []);
              CORRECT_SETTER = test instanceof Array;
            } catch (error) {
            }
            return function setPrototypeOf(O, proto) {
              anObject(O);
              aPossiblePrototype(proto);
              if (CORRECT_SETTER)
                setter.call(O, proto);
              else
                O.__proto__ = proto;
              return O;
            };
          }() : void 0);
        },
        3887: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var getBuiltIn = __webpack_require__2(5005);
          var getOwnPropertyNamesModule = __webpack_require__2(8006);
          var getOwnPropertySymbolsModule = __webpack_require__2(5181);
          var anObject = __webpack_require__2(9670);
          module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
          };
        },
        857: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          module2.exports = global;
        },
        1320: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var createNonEnumerableProperty = __webpack_require__2(8880);
          var has2 = __webpack_require__2(6656);
          var setGlobal = __webpack_require__2(3505);
          var inspectSource = __webpack_require__2(2788);
          var InternalStateModule = __webpack_require__2(9909);
          var getInternalState = InternalStateModule.get;
          var enforceInternalState = InternalStateModule.enforce;
          var TEMPLATE = String(String).split("String");
          (module2.exports = function(O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;
            var state;
            if (typeof value == "function") {
              if (typeof key == "string" && !has2(value, "name")) {
                createNonEnumerableProperty(value, "name", key);
              }
              state = enforceInternalState(value);
              if (!state.source) {
                state.source = TEMPLATE.join(typeof key == "string" ? key : "");
              }
            }
            if (O === global) {
              if (simple)
                O[key] = value;
              else
                setGlobal(key, value);
              return;
            } else if (!unsafe) {
              delete O[key];
            } else if (!noTargetGet && O[key]) {
              simple = true;
            }
            if (simple)
              O[key] = value;
            else
              createNonEnumerableProperty(O, key, value);
          })(Function.prototype, "toString", function toString() {
            return typeof this == "function" && getInternalState(this).source || inspectSource(this);
          });
        },
        4488: (module2) => {
          module2.exports = function(it) {
            if (it == void 0)
              throw TypeError("Can't call method on " + it);
            return it;
          };
        },
        3505: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var createNonEnumerableProperty = __webpack_require__2(8880);
          module2.exports = function(key, value) {
            try {
              createNonEnumerableProperty(global, key, value);
            } catch (error) {
              global[key] = value;
            }
            return value;
          };
        },
        8003: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var defineProperty = __webpack_require__2(3070).f;
          var has2 = __webpack_require__2(6656);
          var wellKnownSymbol = __webpack_require__2(5112);
          var TO_STRING_TAG = wellKnownSymbol("toStringTag");
          module2.exports = function(it, TAG, STATIC) {
            if (it && !has2(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
              defineProperty(it, TO_STRING_TAG, {configurable: true, value: TAG});
            }
          };
        },
        6200: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var shared = __webpack_require__2(2309);
          var uid = __webpack_require__2(9711);
          var keys = shared("keys");
          module2.exports = function(key) {
            return keys[key] || (keys[key] = uid(key));
          };
        },
        5465: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var setGlobal = __webpack_require__2(3505);
          var SHARED = "__core-js_shared__";
          var store = global[SHARED] || setGlobal(SHARED, {});
          module2.exports = store;
        },
        2309: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var IS_PURE = __webpack_require__2(1913);
          var store = __webpack_require__2(5465);
          (module2.exports = function(key, value) {
            return store[key] || (store[key] = value !== void 0 ? value : {});
          })("versions", []).push({
            version: "3.11.1",
            mode: IS_PURE ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
          });
        },
        1400: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var toInteger = __webpack_require__2(9958);
          var max = Math.max;
          var min = Math.min;
          module2.exports = function(index, length) {
            var integer = toInteger(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
          };
        },
        5656: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var IndexedObject = __webpack_require__2(8361);
          var requireObjectCoercible = __webpack_require__2(4488);
          module2.exports = function(it) {
            return IndexedObject(requireObjectCoercible(it));
          };
        },
        9958: (module2) => {
          var ceil = Math.ceil;
          var floor = Math.floor;
          module2.exports = function(argument) {
            return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
          };
        },
        7466: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var toInteger = __webpack_require__2(9958);
          var min = Math.min;
          module2.exports = function(argument) {
            return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
          };
        },
        7908: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var requireObjectCoercible = __webpack_require__2(4488);
          module2.exports = function(argument) {
            return Object(requireObjectCoercible(argument));
          };
        },
        7593: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var isObject = __webpack_require__2(111);
          module2.exports = function(input, PREFERRED_STRING) {
            if (!isObject(input))
              return input;
            var fn, val;
            if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
              return val;
            if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
              return val;
            if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
              return val;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        9711: (module2) => {
          var id = 0;
          var postfix = Math.random();
          module2.exports = function(key) {
            return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
          };
        },
        3307: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var NATIVE_SYMBOL = __webpack_require__2(133);
          module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
        },
        5112: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var shared = __webpack_require__2(2309);
          var has2 = __webpack_require__2(6656);
          var uid = __webpack_require__2(9711);
          var NATIVE_SYMBOL = __webpack_require__2(133);
          var USE_SYMBOL_AS_UID = __webpack_require__2(3307);
          var WellKnownSymbolsStore = shared("wks");
          var Symbol2 = global.Symbol;
          var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
          module2.exports = function(name) {
            if (!has2(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
              if (NATIVE_SYMBOL && has2(Symbol2, name)) {
                WellKnownSymbolsStore[name] = Symbol2[name];
              } else {
                WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
              }
            }
            return WellKnownSymbolsStore[name];
          };
        },
        6992: (module2, __unused_webpack_exports, __webpack_require__2) => {
          var toIndexedObject = __webpack_require__2(5656);
          var addToUnscopables = __webpack_require__2(1223);
          var Iterators = __webpack_require__2(7497);
          var InternalStateModule = __webpack_require__2(9909);
          var defineIterator = __webpack_require__2(654);
          var ARRAY_ITERATOR = "Array Iterator";
          var setInternalState = InternalStateModule.set;
          var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
          module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
            setInternalState(this, {
              type: ARRAY_ITERATOR,
              target: toIndexedObject(iterated),
              index: 0,
              kind
            });
          }, function() {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;
            if (!target || index >= target.length) {
              state.target = void 0;
              return {value: void 0, done: true};
            }
            if (kind == "keys")
              return {value: index, done: false};
            if (kind == "values")
              return {value: target[index], done: false};
            return {value: [index, target[index]], done: false};
          }, "values");
          Iterators.Arguments = Iterators.Array;
          addToUnscopables("keys");
          addToUnscopables("values");
          addToUnscopables("entries");
        },
        3948: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) => {
          var global = __webpack_require__2(7854);
          var DOMIterables = __webpack_require__2(8324);
          var ArrayIteratorMethods = __webpack_require__2(6992);
          var createNonEnumerableProperty = __webpack_require__2(8880);
          var wellKnownSymbol = __webpack_require__2(5112);
          var ITERATOR = wellKnownSymbol("iterator");
          var TO_STRING_TAG = wellKnownSymbol("toStringTag");
          var ArrayValues = ArrayIteratorMethods.values;
          for (var COLLECTION_NAME in DOMIterables) {
            var Collection = global[COLLECTION_NAME];
            var CollectionPrototype = Collection && Collection.prototype;
            if (CollectionPrototype) {
              if (CollectionPrototype[ITERATOR] !== ArrayValues)
                try {
                  createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                } catch (error) {
                  CollectionPrototype[ITERATOR] = ArrayValues;
                }
              if (!CollectionPrototype[TO_STRING_TAG]) {
                createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
              }
              if (DOMIterables[COLLECTION_NAME])
                for (var METHOD_NAME in ArrayIteratorMethods) {
                  if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                    try {
                      createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                    } catch (error) {
                      CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                    }
                }
            }
          }
        }
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      (() => {
        __webpack_require__.n = (module2) => {
          var getter = module2 && module2.__esModule ? () => module2["default"] : () => module2;
          __webpack_require__.d(getter, {a: getter});
          return getter;
        };
      })();
      (() => {
        __webpack_require__.d = (exports2, definition) => {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, {enumerable: true, get: definition[key]});
            }
          }
        };
      })();
      (() => {
        __webpack_require__.g = function() {
          if (typeof globalThis === "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if (typeof window === "object")
              return window;
          }
        }();
      })();
      (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      })();
      var __webpack_exports__ = {};
      (() => {
        __webpack_require__.d(__webpack_exports__, {
          default: () => src
        });
        var debounce = __webpack_require__(5336);
        var debounce_default = /* @__PURE__ */ __webpack_require__.n(debounce);
        var store = __webpack_require__(4672);
        var store_default = /* @__PURE__ */ __webpack_require__.n(store);
        function SelectorSet() {
          if (!(this instanceof SelectorSet)) {
            return new SelectorSet();
          }
          this.size = 0;
          this.uid = 0;
          this.selectors = [];
          this.selectorObjects = {};
          this.indexes = Object.create(this.indexes);
          this.activeIndexes = [];
        }
        var docElem = window.document.documentElement;
        var matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector;
        SelectorSet.prototype.matchesSelector = function(el, selector) {
          return matches.call(el, selector);
        };
        SelectorSet.prototype.querySelectorAll = function(selectors, context) {
          return context.querySelectorAll(selectors);
        };
        SelectorSet.prototype.indexes = [];
        var idRe = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        SelectorSet.prototype.indexes.push({
          name: "ID",
          selector: function matchIdSelector(sel) {
            var m;
            if (m = sel.match(idRe)) {
              return m[0].slice(1);
            }
          },
          element: function getElementId(el) {
            if (el.id) {
              return [el.id];
            }
          }
        });
        var classRe = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        SelectorSet.prototype.indexes.push({
          name: "CLASS",
          selector: function matchClassSelector(sel) {
            var m;
            if (m = sel.match(classRe)) {
              return m[0].slice(1);
            }
          },
          element: function getElementClassNames(el) {
            var className = el.className;
            if (className) {
              if (typeof className === "string") {
                return className.split(/\s/);
              } else if (typeof className === "object" && "baseVal" in className) {
                return className.baseVal.split(/\s/);
              }
            }
          }
        });
        var tagRe = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        SelectorSet.prototype.indexes.push({
          name: "TAG",
          selector: function matchTagSelector(sel) {
            var m;
            if (m = sel.match(tagRe)) {
              return m[0].toUpperCase();
            }
          },
          element: function getElementTagName(el) {
            return [el.nodeName.toUpperCase()];
          }
        });
        SelectorSet.prototype.indexes["default"] = {
          name: "UNIVERSAL",
          selector: function() {
            return true;
          },
          element: function() {
            return [true];
          }
        };
        var Map;
        if (typeof window.Map === "function") {
          Map = window.Map;
        } else {
          Map = function() {
            function Map2() {
              this.map = {};
            }
            Map2.prototype.get = function(key) {
              return this.map[key + " "];
            };
            Map2.prototype.set = function(key, value) {
              this.map[key + " "] = value;
            };
            return Map2;
          }();
        }
        var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
        function parseSelectorIndexes(allIndexes, selector) {
          allIndexes = allIndexes.slice(0).concat(allIndexes["default"]);
          var allIndexesLen = allIndexes.length, i, j, m, dup, rest = selector, key, index, indexes = [];
          do {
            chunker.exec("");
            if (m = chunker.exec(rest)) {
              rest = m[3];
              if (m[2] || !rest) {
                for (i = 0; i < allIndexesLen; i++) {
                  index = allIndexes[i];
                  if (key = index.selector(m[1])) {
                    j = indexes.length;
                    dup = false;
                    while (j--) {
                      if (indexes[j].index === index && indexes[j].key === key) {
                        dup = true;
                        break;
                      }
                    }
                    if (!dup) {
                      indexes.push({index, key});
                    }
                    break;
                  }
                }
              }
            }
          } while (m);
          return indexes;
        }
        function findByPrototype(ary, proto) {
          var i, len, item;
          for (i = 0, len = ary.length; i < len; i++) {
            item = ary[i];
            if (proto.isPrototypeOf(item)) {
              return item;
            }
          }
        }
        SelectorSet.prototype.logDefaultIndexUsed = function() {
        };
        SelectorSet.prototype.add = function(selector, data) {
          var obj, i, indexProto, key, index, objs, selectorIndexes, selectorIndex, indexes = this.activeIndexes, selectors = this.selectors, selectorObjects = this.selectorObjects;
          if (typeof selector !== "string") {
            return;
          }
          obj = {
            id: this.uid++,
            selector,
            data
          };
          selectorObjects[obj.id] = obj;
          selectorIndexes = parseSelectorIndexes(this.indexes, selector);
          for (i = 0; i < selectorIndexes.length; i++) {
            selectorIndex = selectorIndexes[i];
            key = selectorIndex.key;
            indexProto = selectorIndex.index;
            index = findByPrototype(indexes, indexProto);
            if (!index) {
              index = Object.create(indexProto);
              index.map = new Map();
              indexes.push(index);
            }
            if (indexProto === this.indexes["default"]) {
              this.logDefaultIndexUsed(obj);
            }
            objs = index.map.get(key);
            if (!objs) {
              objs = [];
              index.map.set(key, objs);
            }
            objs.push(obj);
          }
          this.size++;
          selectors.push(selector);
        };
        SelectorSet.prototype.remove = function(selector, data) {
          if (typeof selector !== "string") {
            return;
          }
          var selectorIndexes, selectorIndex, i, j, k, selIndex, objs, obj, indexes = this.activeIndexes, selectors = this.selectors = [], selectorObjects = this.selectorObjects, removedIds = {}, removeAll = arguments.length === 1;
          selectorIndexes = parseSelectorIndexes(this.indexes, selector);
          for (i = 0; i < selectorIndexes.length; i++) {
            selectorIndex = selectorIndexes[i];
            j = indexes.length;
            while (j--) {
              selIndex = indexes[j];
              if (selectorIndex.index.isPrototypeOf(selIndex)) {
                objs = selIndex.map.get(selectorIndex.key);
                if (objs) {
                  k = objs.length;
                  while (k--) {
                    obj = objs[k];
                    if (obj.selector === selector && (removeAll || obj.data === data)) {
                      objs.splice(k, 1);
                      removedIds[obj.id] = true;
                    }
                  }
                }
                break;
              }
            }
          }
          for (i in removedIds) {
            delete selectorObjects[i];
            this.size--;
          }
          for (i in selectorObjects) {
            selectors.push(selectorObjects[i].selector);
          }
        };
        function sortById(a, b) {
          return a.id - b.id;
        }
        SelectorSet.prototype.queryAll = function(context) {
          if (!this.selectors.length) {
            return [];
          }
          var matches2 = {}, results = [];
          var els = this.querySelectorAll(this.selectors.join(", "), context);
          var i, j, len, len2, el, m, match, obj;
          for (i = 0, len = els.length; i < len; i++) {
            el = els[i];
            m = this.matches(el);
            for (j = 0, len2 = m.length; j < len2; j++) {
              obj = m[j];
              if (!matches2[obj.id]) {
                match = {
                  id: obj.id,
                  selector: obj.selector,
                  data: obj.data,
                  elements: []
                };
                matches2[obj.id] = match;
                results.push(match);
              } else {
                match = matches2[obj.id];
              }
              match.elements.push(el);
            }
          }
          return results.sort(sortById);
        };
        SelectorSet.prototype.matches = function(el) {
          if (!el) {
            return [];
          }
          var i, j, k, len, len2, len3, index, keys, objs, obj, id;
          var indexes = this.activeIndexes, matchedIds = {}, matches2 = [];
          for (i = 0, len = indexes.length; i < len; i++) {
            index = indexes[i];
            keys = index.element(el);
            if (keys) {
              for (j = 0, len2 = keys.length; j < len2; j++) {
                if (objs = index.map.get(keys[j])) {
                  for (k = 0, len3 = objs.length; k < len3; k++) {
                    obj = objs[k];
                    id = obj.id;
                    if (!matchedIds[id] && this.matchesSelector(el, obj.selector)) {
                      matchedIds[id] = true;
                      matches2.push(obj);
                    }
                  }
                }
              }
            }
          }
          return matches2.sort(sortById);
        };
        const eventTypes = {};
        const listeners = {};
        const nonBubblers = ["mouseenter", "mouseleave"];
        function makeBusStack(event) {
          if (listeners[event] === void 0) {
            listeners[event] = [];
          }
        }
        function triggerBus(event, args) {
          if (listeners[event]) {
            for (let i = 0; i < listeners[event].length; i++) {
              listeners[event][i](...args);
            }
          }
        }
        function maybeRunQuerySelector(el) {
          return typeof el === "string" ? document.querySelectorAll(el) : el;
        }
        function handleDelegation(e) {
          let matches2 = traverse(eventTypes[e.type], e.target);
          if (matches2.length) {
            for (let i = 0; i < matches2.length; i++) {
              for (let i2 = 0; i2 < matches2[i].stack.length; i2++) {
                if (nonBubblers.indexOf(e.type) !== -1) {
                  addDelegateTarget(e, matches2[i].delegatedTarget);
                  if (e.target === matches2[i].delegatedTarget) {
                    matches2[i].stack[i2].data(e);
                  }
                } else {
                  addDelegateTarget(e, matches2[i].delegatedTarget);
                  matches2[i].stack[i2].data(e);
                }
              }
            }
          }
        }
        function traverse(listeners2, target) {
          const queue = [];
          let node = target;
          do {
            if (node.nodeType !== 1) {
              break;
            }
            const matches2 = listeners2.matches(node);
            if (matches2.length) {
              queue.push({delegatedTarget: node, stack: matches2});
            }
          } while (node = node.parentElement);
          return queue;
        }
        function addDelegateTarget(event, delegatedTarget) {
          Object.defineProperty(event, "currentTarget", {
            configurable: true,
            enumerable: true,
            get: () => delegatedTarget
          });
        }
        function clone(object) {
          return JSON.parse(JSON.stringify(object));
        }
        class E {
          bindAll(context, methods) {
            if (methods === void 0) {
              methods = Object.getOwnPropertyNames(Object.getPrototypeOf(context));
            }
            for (let i = 0; i < methods.length; i++) {
              context[methods[i]] = context[methods[i]].bind(context);
            }
          }
          on(event, el, callback, options) {
            if (typeof el === "function" && callback === void 0) {
              makeBusStack(event);
              listeners[event].push(el);
              return;
            }
            const events = event.split(" ");
            for (let i = 0; i < events.length; i++) {
              if (el.nodeType && el.nodeType === 1 || el === window || el === document) {
                el.addEventListener(events[i], callback, options);
                continue;
              }
              el = maybeRunQuerySelector(el);
              for (let n = 0; n < el.length; n++) {
                el[n].addEventListener(events[i], callback, options);
              }
            }
          }
          delegate(event, delegate, callback) {
            const events = event.split(" ");
            for (let i = 0; i < events.length; i++) {
              let map = eventTypes[events[i]];
              if (map === void 0) {
                map = new SelectorSet();
                eventTypes[events[i]] = map;
                if (nonBubblers.indexOf(events[i]) !== -1) {
                  document.addEventListener(events[i], handleDelegation, true);
                } else {
                  document.addEventListener(events[i], handleDelegation);
                }
              }
              map.add(delegate, callback);
            }
          }
          off(event, el, callback, options) {
            if (el === void 0) {
              listeners[event] = [];
              return;
            }
            if (typeof el === "function") {
              makeBusStack(event);
              for (let i = 0; i < listeners[event].length; i++) {
                if (listeners[event][i] === el) {
                  listeners[event].splice(i, 1);
                }
              }
              return;
            }
            const events = event.split(" ");
            for (let i = 0; i < events.length; i++) {
              const map = eventTypes[events[i]];
              if (map !== void 0) {
                map.remove(el, callback);
                if (map.size === 0) {
                  delete eventTypes[events[i]];
                  document.removeEventListener(events[i], handleDelegation);
                  continue;
                }
              }
              if (el.removeEventListener !== void 0) {
                el.removeEventListener(events[i], callback, options);
                continue;
              }
              el = maybeRunQuerySelector(el);
              for (let n = 0; n < el.length; n++) {
                el[n].removeEventListener(events[i], callback, options);
              }
            }
          }
          emit(event, ...args) {
            triggerBus(event, args);
          }
          debugDelegated() {
            return clone(eventTypes);
          }
          debugBus() {
            return clone(listeners);
          }
        }
        const src_E = new E();
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
          } else {
            obj[key] = value;
          }
          return obj;
        }
        class Events {
          constructor(options = {}) {
            _defineProperty(this, "onRaf", () => {
              src_E.emit(Events.INTERNALRAF);
              if (this.options.disableRaf)
                return;
              requestAnimationFrame(this.onRaf);
            });
            this.options = options;
            this.addEvents();
          }
          addEvents() {
            if (!this.options.disableRaf) {
              requestAnimationFrame(this.onRaf);
            }
            if (!this.options.disableResize) {
              src_E.on("resize", window, debounce_default()(() => {
                this.onResize();
              }, 150));
            }
            this.onScroll();
            if ("ontouchstart" in document.documentElement) {
              store_default().isTouch = true;
              this.detectMouse();
            }
          }
          onScroll() {
            src_E.on("wheel", window, (e) => {
              src_E.emit(Events.WHEEL, {
                event: e
              });
            }, {
              passive: false
            });
            src_E.on("scroll", window, (e) => {
              src_E.emit(Events.INTERNALSCROLL, {
                event: e
              });
            }, {
              passive: true
            });
          }
          onResize({
            width,
            height
          } = {}) {
            store_default().window.w = width || window.innerWidth;
            store_default().window.h = height || window.innerHeight;
            src_E.emit(Events.RESIZE);
          }
          detectMouse() {
            window.addEventListener("mousemove", function detectMouse(e) {
              if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
                store_default().isTouch = false;
                src_E.emit(Events.MOUSEDETECTED);
                window.removeEventListener("mousemove", detectMouse);
              }
            });
          }
        }
        _defineProperty(Events, "INTERNALRAF", "raf:internal");
        _defineProperty(Events, "EXTERNALRAF", "raf:external");
        _defineProperty(Events, "WHEEL", "wheel");
        _defineProperty(Events, "INTERNALSCROLL", "scroll:internal");
        _defineProperty(Events, "EXTERNALSCROLL", "scroll:external");
        _defineProperty(Events, "RESIZE", "resize");
        _defineProperty(Events, "MOUSEDETECTED", "mouseDetected");
        _defineProperty(Events, "SCROLLEND", "scrollEnd");
        var web_dom_collections_iterator = __webpack_require__(3948);
        function Scrollbar_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
          } else {
            obj[key] = value;
          }
          return obj;
        }
        class Scrollbar {
          constructor(controller) {
            Scrollbar_defineProperty(this, "onMouseMove", (e) => {
              if (!this.mouseDown)
                return;
              this.mousePos = e.clientY;
              this.position -= this.prevMousePos - this.mousePos;
              this.position = Math.min(Math.max(this.position, 0), this.maxY);
              this.prevMousePos = this.mousePos;
              this.controller.targetPos = this.position / this.maxY * this.controller.maxScroll;
              this.controller.clamp();
              this.controller.syncScroll = true;
              this.transform();
              src_E.emit(Events.EXTERNALSCROLL, -this.controller.targetPos);
            });
            Scrollbar_defineProperty(this, "onMouseDown", (e) => {
              this.mousePos = this.prevMousePos = e.clientY;
              this.mouseDown = true;
              store_default().body.style.userSelect = "none";
              this.el.classList.add("active");
            });
            Scrollbar_defineProperty(this, "onMouseUp", () => {
              this.mouseDown = false;
              store_default().body.style.removeProperty("user-select");
              this.el.classList.remove("active");
            });
            this.controller = controller;
            this.addHTML();
            this.el = document.querySelector(this.controller.options.scrollbarEl);
            this.handle = document.querySelector(this.controller.options.scrollbarHandleEl);
            this.position = 0;
            this.mousePos = 0;
            this.prevMousePos = 0;
            this.addStyles();
            this.addEvents();
          }
          transform() {
            let y;
            if (this.mouseDown) {
              y = this.position;
            } else {
              y = -this.controller.targetPos / -this.controller.maxScroll * (store_default().window.h - this.handleHeight);
              this.position = y;
            }
            this.handle.style.transform = "translate3d(0, ".concat(y, "px, 0)");
          }
          show() {
            this.el.classList.add("show");
          }
          hide() {
            this.el.classList.remove("show");
          }
          addEvents() {
            src_E.on("mousedown", this.handle, this.onMouseDown);
            src_E.on("mousemove", window, this.onMouseMove);
            src_E.on("mouseup", window, this.onMouseUp);
          }
          onResize() {
            this.scale = (-this.controller.maxScroll + store_default().window.h) / store_default().window.h;
            if (this.scale <= 1) {
              this.handle.style.height = 0;
              return;
            }
            this.trueSize = store_default().window.h / this.scale;
            this.handleHeight = Math.max(this.trueSize, 40);
            this.handle.style.height = "".concat(this.handleHeight, "px");
            this.maxY = store_default().window.h - this.handleHeight;
          }
          addHTML() {
            if (document.querySelector(this.controller.options.scrollbarEl))
              return;
            const div = document.createElement("div");
            div.classList.add(this.controller.options.scrollbarEl.substring(1));
            div.innerHTML = '<div class="'.concat(this.controller.options.scrollbarHandleEl.substring(1), '"><div></div></div>');
            document.body.appendChild(div);
          }
          addStyles() {
            if (!this.controller.options.disableNativeScrollbar && !this.controller.options.scrollbarStyles)
              return;
            let styles = "";
            if (this.controller.options.disableNativeScrollbar) {
              styles += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
            }
            if (this.controller.options.scrollbarStyles) {
              styles += "".concat(this.controller.options.scrollbarEl, " {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch ").concat(this.controller.options.scrollbarEl, " {display:none;}").concat(this.controller.options.scrollbarEl, " > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}").concat(this.controller.options.scrollbarEl, " > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}").concat(this.controller.options.scrollbarEl, " > div > div:hover {opacity:0.9;}").concat(this.controller.options.scrollbarEl, ":hover > div, ").concat(this.controller.options.scrollbarEl, ".show > div, ").concat(this.controller.options.scrollbarEl, ".active > div {visibility:visible;}").concat(this.controller.options.scrollbarEl, ".active > div > div {opacity:0.9;}");
            }
            const css = document.createElement("style");
            if (css.styleSheet)
              css.styleSheet.cssText = styles;
            else
              css.appendChild(document.createTextNode(styles));
            document.getElementsByTagName("head")[0].appendChild(css);
          }
          destroy() {
            src_E.off("mousedown", this.handle, this.onMouseDown);
            src_E.off("mousemove", window, this.onMouseMove);
            src_E.off("mouseup", window, this.onMouseUp);
          }
        }
        function Controller_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
          } else {
            obj[key] = value;
          }
          return obj;
        }
        class Controller {
          constructor(options = {}) {
            Controller_defineProperty(this, "onScroll", ({
              event
            }) => {
              if (!this.scrolling) {
                this.options.customScrollbar && this.scrollbar.show();
                this.toggleIframes();
                this.scrolling = true;
              }
              if (!store_default().isTouch && event.type === "wheel") {
                event.preventDefault();
                this.syncScroll = true;
                this.targetPos += event.deltaY * -1;
              } else {
                if (this.preventResizeScroll) {
                  this.preventResizeScroll = false;
                  return;
                }
                if (store_default().isTouch && this.options.touchScrollType === "scrollTop") {
                  this.targetPos = this.horizontalScroll ? -this.containerElement.scrollLeft : -this.containerElement.scrollTop;
                } else {
                  this.targetPos = -window.scrollY;
                }
                if (store_default().isTouch && this.options.touchScrollType !== "transform") {
                  this.currentPos = this.targetPos;
                }
              }
              this.clamp();
              this.options.customScrollbar && this.scrollbar.transform();
              src_E.emit(Events.EXTERNALSCROLL, -this.targetPos);
            });
            Controller_defineProperty(this, "onRAF", () => {
              if (this.testFps && this.options.limitLerpRate) {
                this.time = performance.now() * 1e-3;
                this.delta = Math.min((this.time - this.startTime) * 60, 1);
                this.startTime = this.time;
              }
              if (!this.render)
                return;
              if (Math.abs(this.targetPos - this.currentPos) < 0.5) {
                this.currentPos = this.targetPos;
                if (this.scrolling && !this.syncScroll) {
                  this.scrolling = false;
                  this.options.customScrollbar && this.scrollbar.hide();
                  this.toggleIframes(true);
                  src_E.emit(Events.SCROLLEND, -this.targetPos);
                }
                if (this.syncScroll) {
                  window.scrollTo(0, -this.targetPos);
                  this.syncScroll = false;
                }
              } else {
                this.currentPos += (this.targetPos - this.currentPos) * this.ease * this.delta;
              }
              const x = this.horizontalScroll ? this.currentPos : 0;
              const y = this.horizontalScroll ? 0 : this.currentPos;
              this.applyTransform(x, y);
              src_E.emit(Events.EXTERNALRAF, {
                targetPos: -this.targetPos,
                currentPos: -this.currentPos
              });
            });
            Controller_defineProperty(this, "onResize", () => {
              if (this.scrollElementsLength > 1) {
                const lastTarget = this.scrollElements[this.scrollElementsLength - 1];
                const compStyle = window.getComputedStyle(lastTarget);
                const marginOffset = parseFloat(this.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom);
                const bcr = lastTarget.getBoundingClientRect();
                const endPosition = this.horizontalScroll ? bcr.right : bcr.bottom;
                this.scrollLength = endPosition + marginOffset - this.currentPos;
              } else {
                this.scrollLength = this.horizontalScroll ? this.scrollElements[0].scrollWidth : this.scrollElements[0].scrollHeight;
              }
              const windowSize = this.horizontalScroll ? store_default().window.w : store_default().window.h;
              this.maxScroll = this.scrollLength > windowSize ? -(this.scrollLength - windowSize) : 0;
              this.clamp();
              if (!this.firstResize) {
                this.preventResizeScroll = true;
              }
              store_default().body.style.height = this.scrollLength + "px";
              this.options.customScrollbar && this.scrollbar.onResize();
              this.firstResize = false;
            });
            Controller_defineProperty(this, "toggleFixedContainer", () => {
              this.containerElement.style.position = "static";
              const scrollPos = this.currentPos;
              this.applyTransform(0, 0);
              requestAnimationFrame(() => {
                this.containerElement.style.position = "fixed";
                const x = this.horizontalScroll ? scrollPos : 0;
                const y = this.horizontalScroll ? 0 : scrollPos;
                this.applyTransform(x, y);
              });
            });
            this.options = options;
            this.targetPos = this.currentPos = this.prevScrollPos = this.maxScroll = 0;
            this.enabled = false;
            this.render = false;
            this.scrolling = false;
            this.syncScroll = false;
            this.horizontalScroll = false;
            this.firstResize = true;
            this.preventResizeScroll = false;
            this.nativeScroll = true;
            this.ease = store_default().isTouch ? this.options.touchEase : this.options.ease;
            this.originalScrollbarSetting = this.options.customScrollbar;
            this.testFps = true;
            this.delta = 1;
            this.time = this.startTime = performance.now();
            this.setElements();
            if (store_default().isTouch) {
              this.options.customScrollbar = false;
              if (this.options.touchScrollType === "transform") {
                this.setupSmoothScroll();
              } else if (this.options.touchScrollType === "scrollTop") {
                document.documentElement.classList.add("asscroll-touch");
                this.addTouchStyles();
                src_E.on("scroll", this.containerElement, (e) => {
                  src_E.emit(Events.INTERNALSCROLL, {
                    event: e
                  });
                }, {
                  passive: true
                });
              }
            } else {
              this.setupSmoothScroll();
            }
            this.addEvents();
          }
          setElements() {
            this.containerElement = typeof this.options.containerElement === "string" ? document.querySelector(this.options.containerElement) : this.options.containerElement;
            if (this.containerElement === null) {
              console.error("ASScroll: could not find container element");
            }
            this.containerElement.setAttribute("asscroll-container", "");
            this.scrollElements = typeof this.options.scrollElements === "string" ? document.querySelectorAll(this.options.scrollElements) : this.options.scrollElements;
            if (this.scrollElements.length)
              this.scrollElements = [...this.scrollElements];
            this.scrollElements = this.scrollElements.length ? this.scrollElements : [this.containerElement.firstElementChild];
            this.scrollElementsLength = this.scrollElements.length;
            this.scrollElements.forEach((el) => el.setAttribute("asscroll", ""));
          }
          setupSmoothScroll() {
            this.nativeScroll = false;
            Object.assign(this.containerElement.style, {
              position: "fixed",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              contain: "content"
            });
            if (this.options.customScrollbar) {
              this.scrollbar = new Scrollbar(this);
            }
            src_E.on(Events.INTERNALRAF, this.onRAF);
            src_E.on(Events.RESIZE, this.onResize);
            if (this.options.limitLerpRate) {
              setTimeout(() => {
                this.testFps = false;
                this.delta = Math.round(this.delta * 10) * 0.1;
              }, 2e3);
            }
          }
          applyTransform(x, y) {
            for (let i = 0; i < this.scrollElementsLength; i++) {
              this.scrollElements[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
            }
          }
          enable({
            newScrollElements = false,
            reset = false,
            restore = false,
            horizontalScroll = false
          } = {}) {
            if (this.enabled)
              return;
            this.enabled = true;
            this.render = true;
            this.horizontalScroll = horizontalScroll;
            if (newScrollElements) {
              this.scrollElements = newScrollElements.length ? [...newScrollElements] : [newScrollElements];
              this.scrollElementsLength = this.scrollElements.length;
              this.scrollElements.forEach((el) => el.setAttribute("asscroll", ""));
            }
            this.iframes = this.containerElement.querySelectorAll("iframe");
            if (store_default().isTouch && this.options.touchScrollType !== "transform") {
              store_default().body.style.removeProperty("height");
              this.maxScroll = -this.containerElement.scrollHeight;
              if (reset) {
                this.targetPos = this.currentPos = 0;
                this.scrollTo(0, false);
              }
            } else {
              this.firstResize = true;
              if (reset) {
                this.targetPos = this.currentPos = 0;
                this.applyTransform(0, 0);
              }
              this.onResize();
            }
            if (restore) {
              this.scrollTo(this.prevScrollPos, false);
            }
            src_E.on(Events.WHEEL, this.onScroll);
            src_E.on(Events.INTERNALSCROLL, this.onScroll);
          }
          disable({
            inputOnly = false
          } = {}) {
            if (!this.enabled)
              return;
            this.enabled = false;
            if (!inputOnly) {
              this.render = false;
            }
            src_E.off(Events.WHEEL, this.onScroll);
            src_E.off(Events.INTERNALSCROLL, this.onScroll);
            this.prevScrollPos = this.targetPos;
            store_default().body.style.height = "0px";
          }
          clamp() {
            this.targetPos = Math.max(Math.min(this.targetPos, 0), this.maxScroll);
          }
          scrollTo(y, emitEvent = true) {
            this.targetPos = y;
            if (store_default().isTouch && this.options.touchScrollType !== "transform") {
              if (this.options.touchScrollType === "scrollTop") {
                if (this.horizontalScroll) {
                  this.containerElement.scrollTo(-this.targetPos, 0);
                } else {
                  this.containerElement.scrollTo(0, -this.targetPos);
                }
              } else {
                window.scrollTo(0, -this.targetPos);
              }
            }
            this.clamp();
            this.syncScroll = true;
            if (emitEvent)
              src_E.emit(Events.EXTERNALSCROLL, -this.targetPos);
          }
          toggleIframes(enable) {
            for (let i = 0; i < this.iframes.length; i++) {
              this.iframes[i].style.pointerEvents = enable ? "auto" : "none";
            }
          }
          blockScrollEvent(e) {
            e.stopPropagation();
          }
          addEvents() {
            src_E.on(Events.MOUSEDETECTED, () => {
              if (this.options.touchScrollType === "transform")
                return;
              this.options.customScrollbar = this.originalScrollbarSetting;
              this.ease = this.options.ease;
              this.setupSmoothScroll();
              this.onResize();
            });
            if (!store_default().isTouch) {
              src_E.on("mouseleave", document, () => {
                window.scrollTo(0, -this.targetPos);
              });
              src_E.on("keydown", window, (e) => {
                if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "PageUp" || e.key === "PageDown" || e.key === "Home" || e.key === "End" || e.key === "Tab") {
                  window.scrollTo(0, -this.targetPos);
                }
                if (e.key === "Tab") {
                  this.toggleFixedContainer();
                }
              });
              src_E.delegate("click", 'a[href^="#"]', this.toggleFixedContainer);
              src_E.delegate("wheel", this.options.blockScrollClass, this.blockScrollEvent);
            }
          }
          addTouchStyles() {
            const styles = ".asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}";
            const css = document.createElement("style");
            if (css.styleSheet)
              css.styleSheet.cssText = styles;
            else
              css.appendChild(document.createTextNode(styles));
            document.getElementsByTagName("head")[0].appendChild(css);
          }
        }
        function src_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
          } else {
            obj[key] = value;
          }
          return obj;
        }
        class ASScroll2 {
          constructor(_parameters = {}) {
            src_defineProperty(this, "update", () => {
              this.events.onRaf();
            });
            src_defineProperty(this, "resize", (parameters) => {
              this.events.onResize(parameters);
            });
            const {
              containerElement = "[asscroll-container]",
              scrollElements = "[asscroll]",
              ease = 0.075,
              touchEase = 1,
              touchScrollType = "none",
              scrollbarEl = ".asscrollbar",
              scrollbarHandleEl = ".asscrollbar__handle",
              customScrollbar = true,
              scrollbarStyles = true,
              disableNativeScrollbar = true,
              disableRaf = false,
              disableResize = false,
              limitLerpRate = true,
              blockScrollClass = ".asscroll-block"
            } = _parameters;
            this.events = new Events({
              disableRaf,
              disableResize
            });
            this.controller = new Controller({
              containerElement,
              scrollElements,
              ease,
              touchEase,
              customScrollbar,
              scrollbarEl,
              scrollbarHandleEl,
              scrollbarStyles,
              disableNativeScrollbar,
              touchScrollType,
              limitLerpRate,
              blockScrollClass
            });
          }
          enable(parameters) {
            if (parameters !== void 0 && typeof parameters !== "object") {
              console.warn("ASScroll: Please pass an object with your parameters. Since 2.0");
            }
            this.controller.enable(parameters);
          }
          disable(parameters) {
            if (parameters !== void 0 && typeof parameters !== "object") {
              console.warn("ASScroll: Please pass an object with your parameters. Since 2.0");
            }
            this.controller.disable(parameters);
          }
          on(eventName, callback) {
            if (typeof callback !== "function") {
              console.error("ASScroll: Function not provided as second parameter");
              return;
            }
            if (eventName === "scroll") {
              src_E.on(Events.EXTERNALSCROLL, callback);
              return;
            }
            if (eventName === "update") {
              src_E.on(Events.EXTERNALRAF, callback);
              return;
            }
            if (eventName === "scrollEnd") {
              src_E.on(Events.SCROLLEND, callback);
              return;
            }
            console.warn('ASScroll: "'.concat(eventName, '" is not a valid event'));
          }
          off(eventName, callback) {
            if (typeof callback !== "function") {
              console.error("ASScroll: Function not provided as second parameter");
              return;
            }
            if (eventName === "scroll") {
              src_E.off(Events.EXTERNALSCROLL, callback);
              return;
            }
            if (eventName === "update") {
              src_E.off(Events.EXTERNALRAF, callback);
              return;
            }
            if (eventName === "scrollEnd") {
              src_E.off(Events.SCROLLEND, callback);
              return;
            }
            console.warn('ASScroll: "'.concat(eventName, '" is not a valid event'));
          }
          scrollTo(targetPos, emitEvent = true) {
            this.controller.scrollTo(-targetPos, emitEvent);
          }
          get targetPos() {
            return -this.controller.targetPos;
          }
          get currentPos() {
            return -this.controller.currentPos;
          }
          set currentPos(scrollPos) {
            this.controller.targetPos = this.controller.currentPos = -scrollPos;
          }
          get maxScroll() {
            return -this.controller.maxScroll;
          }
          get containerElement() {
            return this.controller.containerElement;
          }
          get scrollElements() {
            return this.controller.scrollElements;
          }
          get isHorizontal() {
            return this.controller.horizontalScroll;
          }
          get isScrollJacking() {
            return !this.controller.nativeScroll && this.controller.enabled;
          }
          get scrollPos() {
          }
          get smoothScrollPos() {
          }
          onRaf() {
          }
          onResize() {
          }
        }
        const src = ASScroll2;
      })();
      __webpack_exports__ = __webpack_exports__.default;
      return __webpack_exports__;
    })();
  });
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(asscroll);
var ASScroll = asscroll.ASScroll;
var BUGGY_SAFARI_ITERATORS = asscroll.BUGGY_SAFARI_ITERATORS;
var IteratorPrototype = asscroll.IteratorPrototype;
export default __pika_web_default_export_for_treeshaking__;
var enforce = asscroll.enforce;
var f = asscroll.f;
var get = asscroll.get;
var getterFor = asscroll.getterFor;
var has = asscroll.has;
var includes = asscroll.includes;
var set = asscroll.set;
export {ASScroll, BUGGY_SAFARI_ITERATORS, IteratorPrototype, asscroll as __moduleExports, enforce, f, get, getterFor, has, includes, set};