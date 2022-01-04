/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);
  
  // EXPORTS
  __webpack_require__.d(__webpack_exports__, "applyDecoratedDescriptor", function() { return /* reexport */ _applyDecoratedDescriptor; });
  __webpack_require__.d(__webpack_exports__, "arrayWithHoles", function() { return /* reexport */ _arrayWithHoles; });
  __webpack_require__.d(__webpack_exports__, "arrayWithoutHoles", function() { return /* reexport */ _arrayWithoutHoles; });
  __webpack_require__.d(__webpack_exports__, "assertThisInitialized", function() { return /* reexport */ _assertThisInitialized; });
  __webpack_require__.d(__webpack_exports__, "asyncGenerator", function() { return /* reexport */ AsyncGenerator; });
  __webpack_require__.d(__webpack_exports__, "asyncGeneratorDelegate", function() { return /* reexport */ _asyncGeneratorDelegate; });
  __webpack_require__.d(__webpack_exports__, "asyncIterator", function() { return /* reexport */ _asyncIterator; });
  __webpack_require__.d(__webpack_exports__, "asyncToGenerator", function() { return /* reexport */ _asyncToGenerator; });
  __webpack_require__.d(__webpack_exports__, "awaitAsyncGenerator", function() { return /* reexport */ _awaitAsyncGenerator; });
  __webpack_require__.d(__webpack_exports__, "awaitValue", function() { return /* reexport */ _AwaitValue; });
  __webpack_require__.d(__webpack_exports__, "classCallCheck", function() { return /* reexport */ _classCallCheck; });
  __webpack_require__.d(__webpack_exports__, "classNameTDZError", function() { return /* reexport */ _classNameTDZError; });
  __webpack_require__.d(__webpack_exports__, "classPrivateFieldGet", function() { return /* reexport */ _classPrivateFieldGet; });
  __webpack_require__.d(__webpack_exports__, "classPrivateFieldLooseBase", function() { return /* reexport */ _classPrivateFieldBase; });
  __webpack_require__.d(__webpack_exports__, "classPrivateFieldSet", function() { return /* reexport */ _classPrivateFieldSet; });
  __webpack_require__.d(__webpack_exports__, "classPrivateMethodGet", function() { return /* reexport */ _classPrivateMethodGet; });
  __webpack_require__.d(__webpack_exports__, "classPrivateMethodSet", function() { return /* reexport */ _classPrivateMethodSet; });
  __webpack_require__.d(__webpack_exports__, "classStaticPrivateFieldSpecGet", function() { return /* reexport */ _classStaticPrivateFieldSpecGet; });
  __webpack_require__.d(__webpack_exports__, "classStaticPrivateFieldSpecSet", function() { return /* reexport */ _classStaticPrivateFieldSpecSet; });
  __webpack_require__.d(__webpack_exports__, "construct", function() { return /* reexport */ _construct; });
  __webpack_require__.d(__webpack_exports__, "createClass", function() { return /* reexport */ _createClass; });
  __webpack_require__.d(__webpack_exports__, "decorate", function() { return /* reexport */ _decorate; });
  __webpack_require__.d(__webpack_exports__, "defaults", function() { return /* reexport */ _defaults; });
  __webpack_require__.d(__webpack_exports__, "defineEnumerableProperties", function() { return /* reexport */ _defineEnumerableProperties; });
  __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return /* reexport */ _defineProperty; });
  __webpack_require__.d(__webpack_exports__, "extends", function() { return /* reexport */ _extends; });
  __webpack_require__.d(__webpack_exports__, "get", function() { return /* reexport */ _get; });
  __webpack_require__.d(__webpack_exports__, "getPrototypeOf", function() { return /* reexport */ _getPrototypeOf; });
  __webpack_require__.d(__webpack_exports__, "inherits", function() { return /* reexport */ _inherits; });
  __webpack_require__.d(__webpack_exports__, "inheritsLoose", function() { return /* reexport */ _inheritsLoose; });
  __webpack_require__.d(__webpack_exports__, "initializerDefineProperty", function() { return /* reexport */ _initializerDefineProperty; });
  __webpack_require__.d(__webpack_exports__, "initializerWarningHelper", function() { return /* reexport */ _initializerWarningHelper; });
  __webpack_require__.d(__webpack_exports__, "_instanceof", function() { return /* reexport */ _instanceof; });
  __webpack_require__.d(__webpack_exports__, "interopRequireDefault", function() { return /* reexport */ _interopRequireDefault; });
  __webpack_require__.d(__webpack_exports__, "interopRequireWildcard", function() { return /* reexport */ _interopRequireWildcard; });
  __webpack_require__.d(__webpack_exports__, "isNativeFunction", function() { return /* reexport */ _isNativeFunction; });
  __webpack_require__.d(__webpack_exports__, "iterableToArray", function() { return /* reexport */ _iterableToArray; });
  __webpack_require__.d(__webpack_exports__, "iterableToArrayLimit", function() { return /* reexport */ _iterableToArrayLimit; });
  __webpack_require__.d(__webpack_exports__, "iterableToArrayLimitLoose", function() { return /* reexport */ _iterableToArrayLimitLoose; });
  __webpack_require__.d(__webpack_exports__, "jsx", function() { return /* reexport */ _createRawReactElement; });
  __webpack_require__.d(__webpack_exports__, "newArrowCheck", function() { return /* reexport */ _newArrowCheck; });
  __webpack_require__.d(__webpack_exports__, "nonIterableRest", function() { return /* reexport */ _nonIterableRest; });
  __webpack_require__.d(__webpack_exports__, "nonIterableSpread", function() { return /* reexport */ _nonIterableSpread; });
  __webpack_require__.d(__webpack_exports__, "objectSpread", function() { return /* reexport */ _objectSpread; });
  __webpack_require__.d(__webpack_exports__, "objectWithoutProperties", function() { return /* reexport */ _objectWithoutProperties; });
  __webpack_require__.d(__webpack_exports__, "objectWithoutPropertiesLoose", function() { return /* reexport */ _objectWithoutPropertiesLoose; });
  __webpack_require__.d(__webpack_exports__, "possibleConstructorReturn", function() { return /* reexport */ _possibleConstructorReturn; });
  __webpack_require__.d(__webpack_exports__, "readOnlyError", function() { return /* reexport */ _readOnlyError; });
  __webpack_require__.d(__webpack_exports__, "set", function() { return /* reexport */ _set; });
  __webpack_require__.d(__webpack_exports__, "setPrototypeOf", function() { return /* reexport */ _set_prototype_of_setPrototypeOf; });
  __webpack_require__.d(__webpack_exports__, "skipFirstGeneratorNext", function() { return /* reexport */ _skipFirstGeneratorNext; });
  __webpack_require__.d(__webpack_exports__, "slicedToArray", function() { return /* reexport */ _slicedToArray; });
  __webpack_require__.d(__webpack_exports__, "slicedToArrayLoose", function() { return /* reexport */ _slicedToArrayLoose; });
  __webpack_require__.d(__webpack_exports__, "superPropBase", function() { return /* reexport */ _superPropBase; });
  __webpack_require__.d(__webpack_exports__, "taggedTemplateLiteral", function() { return /* reexport */ _taggedTemplateLiteral; });
  __webpack_require__.d(__webpack_exports__, "taggedTemplateLiteralLoose", function() { return /* reexport */ _taggedTemplateLiteralLoose; });
  __webpack_require__.d(__webpack_exports__, "_throw", function() { return /* reexport */ _throw; });
  __webpack_require__.d(__webpack_exports__, "toArray", function() { return /* reexport */ _toArray; });
  __webpack_require__.d(__webpack_exports__, "toConsumableArray", function() { return /* reexport */ _toConsumableArray; });
  __webpack_require__.d(__webpack_exports__, "toPrimitive", function() { return /* reexport */ _toPrimitive; });
  __webpack_require__.d(__webpack_exports__, "toPropertyKey", function() { return /* reexport */ _toPropertyKey; });
  __webpack_require__.d(__webpack_exports__, "typeOf", function() { return /* reexport */ _type_of_typeof; });
  __webpack_require__.d(__webpack_exports__, "wrapAsyncGenerator", function() { return /* reexport */ _wrapAsyncGenerator; });
  __webpack_require__.d(__webpack_exports__, "wrapNativeSuper", function() { return /* reexport */ _wrapNativeSuper; });
  __webpack_require__.d(__webpack_exports__, "createSuper", function() { return /* reexport */ _createSuper; });
  __webpack_require__.d(__webpack_exports__, "isNativeReflectConstruct", function() { return /* reexport */ _isNativeReflectConstruct; });
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_apply_decorated_descriptor.js
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator ? (decorator(target, property, desc) || desc) : desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_array_with_holes.js
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_array_without_holes.js
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }
  
      return arr2;
    }
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_assert_this_initialized.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
  
    return self;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_await_value.js
  function _AwaitValue(value) {
    this.wrapped = value;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_async_generator.js
  
  
  function AsyncGenerator(gen) {
    var front, back;
  
    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };
  
        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }
  
    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;
        var wrappedAwait = value instanceof _AwaitValue;
        Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
          if (wrappedAwait) {
            resume("next", arg);
            return;
          }
  
          settle(result.done ? "return" : "normal", arg);
        }, function (err) {
          resume("throw", err);
        });
      } catch (err) {
        settle("throw", err);
      }
    }
  
    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;
  
        case "throw":
          front.reject(value);
          break;
  
        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }
  
      front = front.next;
  
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }
  
    this._invoke = send;
  
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }
  
  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }
  
  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };
  
  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };
  
  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_async_generator_delegate.js
  function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {},
      waiting = false;
  
    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }
  
    ;
  
    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () {
        return this;
      };
    }
  
    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
  
      return pump("next", value);
    };
  
    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
  
        return pump("throw", value);
      };
    }
  
    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }
  
    return iter;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_async_iterator.js
  function _asyncIterator(iterable) {
    var method;
  
    if (typeof Symbol === "function") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator];
        if (method != null) return method.call(iterable);
      }
  
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator];
        if (method != null) return method.call(iterable);
      }
    }
  
    throw new TypeError("Object is not async iterable");
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
  
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
  
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
  
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
  
        _next(undefined);
      });
    };
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_await_async_generator.js
  
  
  function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_call_check.js
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_name_tdz_error.js
  function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_private_field_get.js
  function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
  
    return privateMap.get(receiver).value;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_private_field_loose_base.js
  function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
  
    return receiver;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_private_field_set.js
  function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
  
    var descriptor = privateMap.get(receiver);
  
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
  
    descriptor.value = value;
    return value;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_private_method_get.js
  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
  
    return fn;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_private_method_set.js
  function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_static_private_field_spec_get.js
  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  
    return descriptor.value;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_class_static_private_field_spec_set.js
  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
  
    descriptor.value = value;
    return value;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_construct.js
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
  
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
      return true;
    } catch (e) {
      return false;
    }
  }
  
  function construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      construct = Reflect.construct;
    } else {
      construct = function construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
  
    return construct.apply(null, arguments);
  }
  
  function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_create_class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_iterable_to_array.js
  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_non_iterable_rest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_to_array.js
  
  
  
  
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_type_of.js
  function _type_of_typeof(obj) {
      return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_to_primitive.js
  
  
  function _toPrimitive(input, hint) {
    if (_type_of_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
  
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_type_of_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
  
    return (hint === "string" ? String : Number)(input);
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_to_property_key.js
  
  
  
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _type_of_typeof(key) === "symbol" ? key : String(key);
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_decorate.js
  
  
  
  function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
      _initializeInstanceElements(O, decorated.elements);
    }, superClass);
  
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
  
    _initializeClassElements(r.F, decorated.elements);
  
    return _runClassFinishers(r.F, decorated.finishers);
  }
  
  function _createElementDescriptor(def) {
    var key = _toPropertyKey(def.key);
    var descriptor;
  
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false
      };
      Object.defineProperty(def.value, "name", {
        value: _typeof(key) === "symbol" ? "" : key,
        configurable: true
      });
    } else if (def.kind === "get") {
      descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "set") {
      descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === "field") {
      descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
      };
    }
  
    var element = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
      descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
  }
  
  function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }
  
  function _coalesceClassElements(elements) {
    var newElements = [];
  
    var isSameElement = function isSameElement(other) {
      return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var other;
  
      if (element.kind === "method" && (other = newElements.find(isSameElement))) {
        if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
          }
  
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
            }
  
            other.decorators = element.decorators;
          }
  
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }
  
    return newElements;
  }
  
  function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
  }
  
  function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
  }
  
  function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    ["method", "field"].forEach(function (kind) {
      elements.forEach(function (element) {
        var placement = element.placement;
  
        if (element.kind === kind && (placement === "static" || placement === "prototype")) {
          var receiver = placement === "static" ? F : proto;
  
          _defineClassElement(receiver, element);
        }
      });
    });
  }
  
  function _initializeInstanceElements(O, elements) {
    ["method", "field"].forEach(function (kind) {
      elements.forEach(function (element) {
        if (element.kind === kind && element.placement === "own") {
          _defineClassElement(O, element);
        }
      });
    });
  }
  
  function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
  
    if (element.kind === "field") {
      var initializer = element.initializer;
      descriptor = {
        enumerable: descriptor.enumerable,
        writable: descriptor.writable,
        configurable: descriptor.configurable,
        value: initializer === void 0 ? void 0 : initializer.call(receiver)
      };
    }
  
    Object.defineProperty(receiver, element.key, descriptor);
  }
  
  function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
      static: [],
      prototype: [],
      own: []
    };
    elements.forEach(function (element) {
      _addElementPlacement(element, placements);
    });
    elements.forEach(function (element) {
      if (!_hasDecorators(element)) return newElements.push(element);
  
      var elementFinishersExtras = _decorateElement(element, placements);
  
      newElements.push(elementFinishersExtras.element);
      newElements.push.apply(newElements, elementFinishersExtras.extras);
      finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
  
    if (!decorators) {
      return {
        elements: newElements,
        finishers: finishers
      };
    }
  
    var result = _decorateConstructor(newElements, decorators);
  
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
  }
  
  function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
  
    if (!silent && keys.indexOf(element.key) !== -1) {
      throw new TypeError("Duplicated element (" + element.key + ")");
    }
  
    keys.push(element.key);
  }
  
  function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
  
    for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
      var keys = placements[element.placement];
      keys.splice(keys.indexOf(element.key), 1);
  
      var elementObject = _fromElementDescriptor(element);
  
      var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
  
      element = elementFinisherExtras.element;
  
      _addElementPlacement(element, placements);
  
      if (elementFinisherExtras.finisher) {
        finishers.push(elementFinisherExtras.finisher);
      }
  
      var newExtras = elementFinisherExtras.extras;
  
      if (newExtras) {
        for (var j = 0; j < newExtras.length; j++) {
          _addElementPlacement(newExtras[j], placements);
        }
  
        extras.push.apply(extras, newExtras);
      }
    }
  
    return {
      element: element,
      finishers: finishers,
      extras: extras
    };
  }
  
  function _decorateConstructor(elements, decorators) {
    var finishers = [];
  
    for (var i = decorators.length - 1; i >= 0; i--) {
      var obj = _fromClassDescriptor(elements);
  
      var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
  
      if (elementsAndFinisher.finisher !== undefined) {
        finishers.push(elementsAndFinisher.finisher);
      }
  
      if (elementsAndFinisher.elements !== undefined) {
        elements = elementsAndFinisher.elements;
  
        for (var j = 0; j < elements.length - 1; j++) {
          for (var k = j + 1; k < elements.length; k++) {
            if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
              throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
          }
        }
      }
    }
  
    return {
      elements: elements,
      finishers: finishers
    };
  }
  
  function _fromElementDescriptor(element) {
    var obj = {
      kind: element.kind,
      key: element.key,
      placement: element.placement,
      descriptor: element.descriptor
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
  }
  
  function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArray(elementObjects).map(function (elementObject) {
      var element = _toElementDescriptor(elementObject);
  
      _disallowProperty(elementObject, "finisher", "An element descriptor");
  
      _disallowProperty(elementObject, "extras", "An element descriptor");
  
      return element;
    });
  }
  
  function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
  
    if (kind !== "method" && kind !== "field") {
      throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
    }
  
    var key = _toPropertyKey(elementObject.key);
    var placement = String(elementObject.placement);
  
    if (placement !== "static" && placement !== "prototype" && placement !== "own") {
      throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
    }
  
    var descriptor = elementObject.descriptor;
  
    _disallowProperty(elementObject, "elements", "An element descriptor");
  
    var element = {
      kind: kind,
      key: key,
      placement: placement,
      descriptor: Object.assign({}, descriptor)
    };
  
    if (kind !== "field") {
      _disallowProperty(elementObject, "initializer", "A method descriptor");
    } else {
      _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
  
      _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
  
      _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
  
      element.initializer = elementObject.initializer;
    }
  
    return element;
  }
  
  function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
  
    var finisher = _optionalCallableProperty(elementObject, "finisher");
  
    var extras = _toElementDescriptors(elementObject.extras);
  
    return {
      element: element,
      finisher: finisher,
      extras: extras
    };
  }
  
  function _fromClassDescriptor(elements) {
    var obj = {
      kind: "class",
      elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
  }
  
  function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
  
    if (kind !== "class") {
      throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
    }
  
    _disallowProperty(obj, "key", "A class descriptor");
  
    _disallowProperty(obj, "placement", "A class descriptor");
  
    _disallowProperty(obj, "descriptor", "A class descriptor");
  
    _disallowProperty(obj, "initializer", "A class descriptor");
  
    _disallowProperty(obj, "extras", "A class descriptor");
  
    var finisher = _optionalCallableProperty(obj, "finisher");
  
    var elements = _toElementDescriptors(obj.elements);
  
    return {
      elements: elements,
      finisher: finisher
    };
  }
  
  function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) {
      throw new TypeError(objectType + " can't have a ." + name + " property.");
    }
  }
  
  function _optionalCallableProperty(obj, name) {
    var value = obj[name];
  
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
  
    return value;
  }
  
  function _runClassFinishers(constructor, finishers) {
    for (var i = 0; i < finishers.length; i++) {
      var newConstructor = (0, finishers[i])(constructor);
  
      if (newConstructor !== undefined) {
        if (typeof newConstructor !== "function") {
          throw new TypeError("Finishers must return a constructor.");
        }
  
        constructor = newConstructor;
      }
    }
  
    return constructor;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_defaults.js
  function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
  
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
  
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
  
    return obj;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_define_enumerable_properties.js
  function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }
  
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
  
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
  
    return obj;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_define_property.js
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
  
    return obj;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_extends.js
  function extends_() {
    extends_ = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    };
  
    return extends_.apply(this, arguments);
  }
  
  function _extends() {
    return extends_.apply(this, arguments);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_get_prototype_of.js
  function getPrototypeOf(o) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o);
  }
  
  function _getPrototypeOf(o) {
    return getPrototypeOf(o);
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_super_prop_base.js
  
  
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
  
    return object;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_get.js
  
  
  function _get_get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get_get = Reflect.get;
    } else {
      _get_get = function get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
  
        if (desc.get) {
          return desc.get.call(receiver || target);
        }
  
        return desc.value;
      };
    }
  
    return _get_get(target, property, receiver);
  }
  
  function _get(target, property, reciever) {
    return _get_get(target, property, reciever);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_set_prototype_of.js
  function setPrototypeOf(o, p) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  
    return setPrototypeOf(o, p);
  }
  
  function _set_prototype_of_setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_inherits.js
  
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
  
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _set_prototype_of_setPrototypeOf(subClass, superClass);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_inherits_loose.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_initializer_define_property.js
  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_initializer_warning_helper.js
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.');
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_instanceof.js
  function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_interop_require_default.js
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_interop_require_wildcard.js
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
  
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
  
            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }
  
      newObj.default = obj;
      return newObj;
    }
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_is_native_function.js
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_iterable_to_array_limit.js
  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
  
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
  
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
  
    return _arr;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_iterable_to_array_limit_loose.js
  function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
  
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
  
      if (i && _arr.length === i) break;
    }
  
    return _arr;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_jsx.js
  var REACT_ELEMENT_TYPE;
  
  function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    }
  
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
  
    if (!props && childrenLength !== 0) {
      props = {
        children: void 0
      };
    }
  
    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }
  
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
  
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
  
      props.children = childArray;
    }
  
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_new_arrow_check.js
  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_non_iterable_spread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_object_spread.js
  
  
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
  
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
  
      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }
  
    return target;
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_object_without_properties_loose.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
  
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  
    return target;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_object_without_properties.js
  
  
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
  
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
  
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
  
    return target;
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_possible_constructor_return.js
  
  
  
  function _possibleConstructorReturn(self, call) {
    if (call && (_type_of_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
  
    return _assertThisInitialized(self);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_read_only_error.js
  function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_set.js
  
  
  
  function _set_set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      _set_set = Reflect.set;
    } else {
      _set_set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);
        var desc;
  
        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
  
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }
  
        desc = Object.getOwnPropertyDescriptor(receiver, property);
  
        if (desc) {
          if (!desc.writable) {
            return false;
          }
  
          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }
  
        return true;
      };
    }
  
    return _set_set(target, property, value, receiver);
  }
  
  function _set(target, property, value, receiver, isStrict) {
    var s = _set_set(target, property, value, receiver || target);
  
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }
  
    return value;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_skip_first_generator_next.js
  function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    };
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_sliced_to_array.js
  
  
  
  
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArray(arr, i) || _nonIterableRest();
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_sliced_to_array_loose.js
  
  
  
  
  function _slicedToArrayLoose(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _nonIterableRest();
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_tagged_template_literal.js
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
  
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_tagged_template_literal_loose.js
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
  
    strings.raw = raw;
    return strings;
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_throw.js
  function _throw(e) {
      throw e;
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_to_consumable_array.js
  
  
  
  
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_wrap_async_generator.js
  
  
  function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_wrap_native_super.js
  
  
  
  
  
  function _wrap_native_super_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
  
    _wrap_native_super_wrapNativeSuper = function wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
  
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
  
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
  
        _cache.set(Class, Wrapper);
      }
  
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
  
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of_setPrototypeOf(Wrapper, Class);
    };
  
    return _wrap_native_super_wrapNativeSuper(Class);
  }
  
  function _wrapNativeSuper(Class) {
    return _wrap_native_super_wrapNativeSuper(Class);
  }
  
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_is_native_reflect_construct.js
  function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }));
          return true;
      } catch (e) {
          return false;
      }
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/_create_super.js
  
  
  
  
  function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
              result;
          if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
          } else {
              result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
      };
  }
  // CONCATENATED MODULE: ./node_modules/_@swc_helpers@0.2.14@@swc/helpers/src/index.js
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  if (true) {
      module.exports = __webpack_require__(32);
  } else {}
  
  
  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.DEFAULT_APP_CONFIG = exports.MINIAPP_PAGE_LIFECYCLE = exports.UNHANDLED_REJECTION = exports.TAB_ITEM_CLICK = exports.SHARE = exports.NOT_FOUND = exports.ERROR = exports.LAUNCH = exports.HIDE = exports.SHOW = void 0;
  var _a;
  var SHOW = 'show';
  exports.SHOW = SHOW;
  var HIDE = 'hide';
  exports.HIDE = HIDE;
  var LAUNCH = 'launch';
  exports.LAUNCH = LAUNCH;
  var ERROR = 'error';
  exports.ERROR = ERROR;
  var NOT_FOUND = 'notfound';
  exports.NOT_FOUND = NOT_FOUND;
  var SHARE = 'share';
  exports.SHARE = SHARE;
  var TAB_ITEM_CLICK = 'tabitemclick';
  exports.TAB_ITEM_CLICK = TAB_ITEM_CLICK;
  var UNHANDLED_REJECTION = 'unhandledrejection';
  exports.UNHANDLED_REJECTION = UNHANDLED_REJECTION;
  var MINIAPP_PAGE_LIFECYCLE = (_a = {
  }, _a[SHOW] = 'miniapp_pageshow', _a[HIDE] = 'miniapp_pagehide', _a);
  exports.MINIAPP_PAGE_LIFECYCLE = MINIAPP_PAGE_LIFECYCLE;
  var DEFAULT_APP_CONFIG = {
      app: {
          rootId: 'root'
      },
      router: {
          type: 'hash'
      }
  }; //# sourceMappingURL=constants.js.map
  exports.DEFAULT_APP_CONFIG = DEFAULT_APP_CONFIG;
  
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.history = exports.setHistory = exports.getHistory = void 0;
  // eslint-disable-next-line import/no-mutable-exports
  var history = null;
  var storage = {
      history: null
  };
  function getHistory() {
      return storage.history;
  }
  function setHistory(customHistory) {
      history = customHistory;
      storage.history = customHistory;
  }
  exports.getHistory = getHistory;
  exports.setHistory = setHistory;
  exports.history = history;
  
  
  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // shim for using process in browser
  var process = module.exports = {
  };
  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
      throw new Error('clearTimeout has not been defined');
  }
  (function() {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e1) {
          cachedClearTimeout = defaultClearTimeout;
      }
  })();
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch (e) {
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e) {
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while(len){
          currentQueue = queue;
          queue = [];
          while(++queueIndex < len){
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for(var i = 1; i < arguments.length; i++){
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function() {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {
  };
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {
  };
  function noop() {
  }
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  process.listeners = function(name) {
      return [];
  };
  process.binding = function(name) {
      throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
      return '/';
  };
  process.chdir = function(dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
      return 0;
  };
  
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  Object.defineProperty(exports, "addAppLifeCycle", {
      enumerable: true,
      get: function() {
          return _appLifeCycles.addAppLifeCycle;
      }
  });
  Object.defineProperty(exports, "withPageLifeCycle", {
      enumerable: true,
      get: function() {
          return _pageLifeCycles.withPageLifeCycle;
      }
  });
  Object.defineProperty(exports, "createUsePageLifeCycle", {
      enumerable: true,
      get: function() {
          return _pageLifeCycles.createUsePageLifeCycle;
      }
  });
  Object.defineProperty(exports, "emitLifeCycles", {
      enumerable: true,
      get: function() {
          return _emitLifeCycles.default;
      }
  });
  Object.defineProperty(exports, "createHistory", {
      enumerable: true,
      get: function() {
          return _history.default;
      }
  });
  Object.defineProperty(exports, "initHistory", {
      enumerable: true,
      get: function() {
          return _history.initHistory;
      }
  });
  Object.defineProperty(exports, "initAppLifeCycles", {
      enumerable: true,
      get: function() {
          return _initAppLifeCycles.default;
      }
  });
  Object.defineProperty(exports, "setHistory", {
      enumerable: true,
      get: function() {
          return _storage.setHistory;
      }
  });
  Object.defineProperty(exports, "getHistory", {
      enumerable: true,
      get: function() {
          return _storage.getHistory;
      }
  });
  Object.defineProperty(exports, "history", {
      enumerable: true,
      get: function() {
          return _storage.history;
      }
  });
  Object.defineProperty(exports, "pathRedirect", {
      enumerable: true,
      get: function() {
          return _utils.pathRedirect;
      }
  });
  Object.defineProperty(exports, "getSearchParams", {
      enumerable: true,
      get: function() {
          return _getSearchParams.default;
      }
  });
  Object.defineProperty(exports, "collectAppLifeCycle", {
      enumerable: true,
      get: function() {
          return _collectAppLifeCycle.default;
      }
  });
  Object.defineProperty(exports, "RuntimeModule", {
      enumerable: true,
      get: function() {
          return _runtimeModule.default;
      }
  });
  Object.defineProperty(exports, "createBaseApp", {
      enumerable: true,
      get: function() {
          return _createBaseApp.default;
      }
  });
  var _exportNames = {
      addAppLifeCycle: true,
      withPageLifeCycle: true,
      createUsePageLifeCycle: true,
      emitLifeCycles: true,
      createHistory: true,
      initHistory: true,
      initAppLifeCycles: true,
      setHistory: true,
      getHistory: true,
      history: true,
      pathRedirect: true,
      getSearchParams: true,
      collectAppLifeCycle: true,
      RuntimeModule: true,
      createBaseApp: true
  };
  var swcHelpers = __webpack_require__(0);
  var _appLifeCycles = __webpack_require__(6);
  var _pageLifeCycles = __webpack_require__(7);
  var _emitLifeCycles = swcHelpers.interopRequireDefault(__webpack_require__(35));
  var _history = swcHelpers.interopRequireWildcard(__webpack_require__(36));
  var _initAppLifeCycles = swcHelpers.interopRequireDefault(__webpack_require__(44));
  var _storage = __webpack_require__(3);
  var _utils = __webpack_require__(13);
  var _getSearchParams = swcHelpers.interopRequireDefault(__webpack_require__(45));
  var _collectAppLifeCycle = swcHelpers.interopRequireDefault(__webpack_require__(14));
  var _runtimeModule = swcHelpers.interopRequireDefault(__webpack_require__(15));
  var _createBaseApp = swcHelpers.interopRequireDefault(__webpack_require__(51));
  var _nativeEventListener = swcHelpers.interopRequireWildcard(__webpack_require__(52));
  Object.keys(_nativeEventListener).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _nativeEventListener[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _nativeEventListener[key];
          }
      });
  });
  var _types = swcHelpers.interopRequireWildcard(__webpack_require__(53));
  Object.keys(_types).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _types[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _types[key];
          }
      });
  });
  
  
  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.emit = emit;
  exports.addAppLifeCycle = addAppLifeCycle;
  exports.appCycles = void 0;
  var _constants = __webpack_require__(2);
  var _utils = __webpack_require__(13);
  var appCycles = {
  };
  exports.appCycles = appCycles;
  function emit(cycle, context) {
      var args = [];
      for(var _i = 2; _i < arguments.length; _i++){
          args[_i - 2] = arguments[_i];
      }
      if (Object.prototype.hasOwnProperty.call(appCycles, cycle)) {
          var cycles = appCycles[cycle];
          if (cycle === _constants.SHARE) {
              // In MiniApp, it need return callback result as share info, like { title, desc, path }
              args[0].content = context ? cycles[0].call(context, args[1]) : cycles[0](args[1]);
          } else {
              cycles.forEach(function(fn) {
                  // eslint-disable-next-line
                  context ? fn.apply(context, args) : fn.apply(void 0, args);
              });
          }
      }
  }
  function addAppLifeCycle(cycle, callback) {
      if ((0, _utils).isFunction(callback)) {
          appCycles[cycle] = appCycles[cycle] || [];
          appCycles[cycle].push(callback);
      }
  } //# sourceMappingURL=appLifeCycles.js.map
  
  
  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.emit = emit;
  exports.withPageLifeCycle = withPageLifeCycle;
  exports.createUsePageLifeCycle = createUsePageLifeCycle;
  var swcHelpers = __webpack_require__(0);
  var _constants = __webpack_require__(2);
  var _router = swcHelpers.interopRequireDefault(__webpack_require__(8));
  var __extends = (void 0) && (void 0).__extends || function() {
      var extendStatics = function(d1, b1) {
          extendStatics = Object.setPrototypeOf || ({
              __proto__: []
          }) instanceof Array && function(d, b) {
              d.__proto__ = b;
          } || function(d, b) {
              for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          };
          return extendStatics(d1, b1);
      };
      return function(d, b) {
          var __ = function __() {
              this.constructor = d;
          };
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  }();
  // visibleListeners => { [pathname]: { show: [], hide: [] } }
  var visibleListeners = {
  };
  function addPageLifeCycle(cycle, callback) {
      var _a;
      var pathname = _router.default.current.pathname;
      if (!visibleListeners[pathname]) {
          visibleListeners[pathname] = (_a = {
          }, _a[_constants.SHOW] = [], _a[_constants.HIDE] = [], _a);
      }
      visibleListeners[pathname][cycle].push(callback);
  }
  function emit(cycle, pathname) {
      var _a;
      var args = [];
      for(var _i = 2; _i < arguments.length; _i++){
          args[_i - 2] = arguments[_i];
      }
      // Ensure queue exists
      if (visibleListeners[pathname] && visibleListeners[pathname][cycle]) {
          for(var i = 0, l = visibleListeners[pathname][cycle].length; i < l; i++){
              (_a = visibleListeners[pathname][cycle])[i].apply(_a, args);
          }
      }
  }
  function createPageLifeCycle(useEffect) {
      return function(cycle, callback) {
          useEffect(function() {
              // When component did mount, it will trigger usePageShow callback
              if (cycle === _constants.SHOW) {
                  callback();
              }
              var pathname = _router.default.current.pathname;
              addPageLifeCycle(cycle, callback);
              return function() {
                  if (visibleListeners[pathname]) {
                      var index = visibleListeners[pathname][cycle].indexOf(callback);
                      if (index > -1) {
                          visibleListeners[pathname][cycle].splice(index, 1);
                      }
                  }
              };
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);
      };
  }
  function withPageLifeCycle(Component) {
      var Wrapper1 = /** @class */ function(_super) {
          var Wrapper = function Wrapper(props, context) {
              var _this = _super.call(this, props, context) || this;
              if (_this.onShow) {
                  // trigger onShow after addPageLifeCycle
                  _this.onShow();
                  addPageLifeCycle(_constants.SHOW, _this.onShow.bind(_this));
              }
              if (_this.onHide) {
                  addPageLifeCycle(_constants.HIDE, _this.onHide.bind(_this));
              }
              // Keep the path name corresponding to current page component
              _this.pathname = _router.default.current.pathname;
              return _this;
          };
          __extends(Wrapper, _super);
          Wrapper.prototype.componentWillUnmount = function() {
              var _a;
              // eslint-disable-next-line no-unused-expressions
              (_a = _super.prototype.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(this);
              visibleListeners[this.pathname] = null;
          };
          return Wrapper;
      }(Component);
      Wrapper1.displayName = "withPageLifeCycle(" + (Component.displayName || Component.name) + ")";
      return Wrapper1;
  }
  function createUsePageLifeCycle(_a) {
      var useEffect = _a.useEffect;
      var usePageShow = function usePageShow(callback) {
          createPageLifeCycle(useEffect)(_constants.SHOW, callback);
      };
      var usePageHide = function usePageHide(callback) {
          createPageLifeCycle(useEffect)(_constants.HIDE, callback);
      };
      return {
          usePageShow: usePageShow,
          usePageHide: usePageHide
      };
  } //# sourceMappingURL=pageLifeCycles.js.map
  
  
  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var current = {
      pathname: '/',
      visibilityState: true
  };
  var router = {
      prev: null,
      current: current
  };
  Object.defineProperty(router, 'current', {
      get: function get() {
          return current;
      },
      set: function set(value) {
          Object.assign(current, value);
      }
  });
  var _default = router;
  exports.default = _default;
  
  
  /***/ }),
  /* 9 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  Object.defineProperty(exports, "getInitialData", {
      enumerable: true,
      get: function() {
          return _initialData.getInitialData;
      }
  });
  Object.defineProperty(exports, "setInitialData", {
      enumerable: true,
      get: function() {
          return _initialData.setInitialData;
      }
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _renderer = swcHelpers.interopRequireDefault(__webpack_require__(55));
  var _initialData = swcHelpers.interopRequireWildcard(__webpack_require__(19));
  Object.keys(_initialData).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _initialData[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _initialData[key];
          }
      });
  });
  var _default = _renderer.default;
  exports.default = _default;
  
  
  /***/ }),
  /* 10 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  Object.defineProperty(exports, "config", {
      enumerable: true,
      get: function() {
          return _config.config;
      }
  });
  Object.defineProperty(exports, "APP_MODE", {
      enumerable: true,
      get: function() {
          return _config.APP_MODE;
      }
  });
  Object.defineProperty(exports, "logger", {
      enumerable: true,
      get: function() {
          return _logger.default;
      }
  });
  var _exportNames = {
  };
  var swcHelpers = __webpack_require__(0);
  var _config = __webpack_require__(63);
  var _logger = swcHelpers.interopRequireDefault(__webpack_require__(64));
  var _routerAPI = swcHelpers.interopRequireWildcard(__webpack_require__(65));
  Object.keys(_routerAPI).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _routerAPI[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _routerAPI[key];
          }
      });
  });
  var _publicAPI = swcHelpers.interopRequireWildcard(__webpack_require__(66));
  Object.keys(_publicAPI).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _publicAPI[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _publicAPI[key];
          }
      });
  });
  var _runApp = swcHelpers.interopRequireWildcard(__webpack_require__(68));
  Object.keys(_runApp).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _runApp[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _runApp[key];
          }
      });
  });
  var _types = swcHelpers.interopRequireWildcard(__webpack_require__(77));
  Object.keys(_types).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
      if (key in exports && exports[key] === _types[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _types[key];
          }
      });
  });
  
  
  /***/ }),
  /* 11 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _errorBoundaryFallback = swcHelpers.interopRequireDefault(__webpack_require__(67));
  var ErrorBoundary = /*#__PURE__*/ function(Component) {
      "use strict";
      swcHelpers.inherits(ErrorBoundary, Component);
      function ErrorBoundary(props) {
          swcHelpers.classCallCheck(this, ErrorBoundary);
          var _this;
          _this = swcHelpers.possibleConstructorReturn(this, swcHelpers.getPrototypeOf(ErrorBoundary).call(this, props));
          _this.state = {
              error: null
          };
          return _this;
      }
      swcHelpers.createClass(ErrorBoundary, [
          {
              key: "componentDidCatch",
              value: function componentDidCatch(error) {
                  var onError = this.props.onError;
                  if (typeof onError === 'function') {
                      try {
                          // can’t reproduce missing info in development environment.
                          onError.call(this, error);
                      } catch (ignoredError) {
                      // ignored error
                      }
                  }
                  // Update state so the next render will show the fallback UI.
                  this.setState({
                      error: error
                  });
              }
          },
          {
              key: "render",
              value: function render() {
                  var _props = this.props, children = _props.children, Fallback = _props.Fallback;
                  var error = this.state.error;
                  // render fallback UI if there is error
                  if (error !== null && typeof Fallback === 'function') {
                      return(/*#__PURE__*/ (0, _rax).createElement(Fallback, {
                          error: error
                      }));
                  }
                  return children || null;
              }
          }
      ]);
      return ErrorBoundary;
  }(_rax.Component);
  ErrorBoundary.defaultProps = {
      Fallback: _errorBoundaryFallback.default
  };
  var _default = ErrorBoundary;
  exports.default = _default;
  
  
  /***/ }),
  /* 12 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _pathToRegexp = __webpack_require__(24);
  var RouteMatcher = /*#__PURE__*/ function() {
      "use strict";
      function RouteMatcher(routes) {
          swcHelpers.classCallCheck(this, RouteMatcher);
          this.cachedRoutes = {
          };
          this.routes = [];
          this.routes = routes;
      }
      swcHelpers.createClass(RouteMatcher, [
          {
              key: "match",
              value: function match(currentPathName) {
                  var matchedRoute;
                  var notFoundRoute;
                  for(var i = 0; i < this.routes.length; i++){
                      var path = this.routes[i].path;
                      if (this.cachedRoutes[currentPathName]) return this.cachedRoutes[currentPathName];
                      if (path) {
                          var regexp = (0, _pathToRegexp).pathToRegexp(path);
                          if (regexp.test(currentPathName)) {
                              matchedRoute = this.routes[i];
                              this.cachedRoutes[path] = this.routes[i];
                              break;
                          }
                      } else {
                          notFoundRoute = this.routes[i];
                      }
                  }
                  return matchedRoute || notFoundRoute;
              }
          }
      ]);
      return RouteMatcher;
  } //# sourceMappingURL=RouteMatcher.js.map
  ();
  exports.default = RouteMatcher;
  
  
  /***/ }),
  /* 13 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  Object.defineProperty(exports, "isFunction", {
      enumerable: true,
      get: function() {
          return _type.isFunction;
      }
  });
  Object.defineProperty(exports, "pathRedirect", {
      enumerable: true,
      get: function() {
          return _pathRedirect.default;
      }
  });
  var swcHelpers = __webpack_require__(0);
  var _type = __webpack_require__(33);
  var _pathRedirect = swcHelpers.interopRequireDefault(__webpack_require__(34));
  
  
  /***/ }),
  /* 14 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = collectAppLifeCycle;
  var _appLifeCycles = __webpack_require__(6);
  var _constants = __webpack_require__(2);
  function collectAppLifeCycle(appConfig) {
      var _a = appConfig.app, onLaunch = _a.onLaunch, onShow = _a.onShow, onError = _a.onError, onHide = _a.onHide, onTabItemClick = _a.onTabItemClick;
      // multi-end valid lifecycle
      // Add app launch callback
      (0, _appLifeCycles).addAppLifeCycle(_constants.LAUNCH, onLaunch);
      // Add app show callback
      (0, _appLifeCycles).addAppLifeCycle(_constants.SHOW, onShow);
      // Add app error callback
      (0, _appLifeCycles).addAppLifeCycle(_constants.ERROR, onError);
      // Add app hide callback
      (0, _appLifeCycles).addAppLifeCycle(_constants.HIDE, onHide);
      // Add tab bar item click callback
      (0, _appLifeCycles).addAppLifeCycle(_constants.TAB_ITEM_CLICK, onTabItemClick);
  } //# sourceMappingURL=collectAppLifeCycle.js.map
  
  
  /***/ }),
  /* 15 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var __assign = (void 0) && (void 0).__assign || function() {
      __assign = Object.assign || function(t) {
          for(var s, i = 1, n = arguments.length; i < n; i++){
              s = arguments[i];
              for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __rest = (void 0) && (void 0).__rest || function(s, e) {
      var t = {
      };
      for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
  };
  var RuntimeModule1 = /** @class */ function() {
      var RuntimeModule = function RuntimeModule(appConfig, buildConfig, context, staticConfig) {
          var _this = this;
          this.registerRuntimeAPI = function(key, api) {
              if (_this.apiRegistration[key]) {
                  console.warn("api " + key + " had already been registered");
              } else {
                  _this.apiRegistration[key] = api;
              }
          };
          this.applyRuntimeAPI = function(key) {
              var _a;
              var args = [];
              for(var _i = 1; _i < arguments.length; _i++){
                  args[_i - 1] = arguments[_i];
              }
              if (!_this.apiRegistration[key]) {
                  console.warn("unknown api " + key);
              } else {
                  return (_a = _this.apiRegistration)[key].apply(_a, args);
              }
          };
          this.setRuntimeValue = function(key, value) {
              if (Object.prototype.hasOwnProperty.call(_this.internalValue, key)) {
                  console.warn("internal value " + key + " had already been registered");
              } else {
                  _this.internalValue[key] = value;
              }
          };
          this.getRuntimeValue = function(key) {
              return _this.internalValue[key];
          };
          // plugin-router 会调用
          this.setRenderApp = function(renderRouter) {
              _this.renderApp = renderRouter;
          };
          // plugin-icestark 会调用
          this.wrapperRouterRender = function(wrapper) {
              // pass origin router render for custom requirement
              _this.renderApp = wrapper(_this.renderApp);
          };
          this.addProvider = function(Provider) {
              _this.AppProvider.push(Provider);
          };
          this.addDOMRender = function(render) {
              _this.modifyDOMRender = render;
          };
          this.modifyRoutes = function(modifyFn) {
              _this.modifyRoutesRegistration.push(modifyFn);
          };
          this.modifyRoutesComponent = function(modify) {
              _this.routesComponent = modify(_this.routesComponent);
          };
          this.wrapperPageComponent = function(wrapperPage) {
              _this.wrapperPageRegistration.push(wrapperPage);
          };
          this.wrapperRoutes = function(routes) {
              return routes.map(function(item) {
                  if (item.children) {
                      item.children = _this.wrapperRoutes(item.children);
                  } else if (item.component) {
                      item.routeWrappers = _this.wrapperPageRegistration;
                  }
                  return item;
              });
          };
          this.getWrapperPageRegistration = function() {
              return _this.wrapperPageRegistration;
          };
          this.getAppComponent = function() {
              var _a;
              // 表示是否启用 pluin-router runtime，何时不启用：1. SPA + router: false 2. MPA + 对应 pages 文件下面没有 routes.[j|t]s 这个文件
              var enableRouter = _this.getRuntimeValue('enableRouter');
              if (enableRouter) {
                  var routes = _this.wrapperRoutes(_this.modifyRoutesRegistration.reduce(function(acc, curr) {
                      return curr(acc);
                  }, []));
                  // renderApp define by plugin-router
                  return _this.renderApp(routes, _this.routesComponent);
              } else {
                  // 通过 appConfig.app.renderComponent 渲染
                  var renderComponent = (_a = _this.appConfig.app) === null || _a === void 0 ? void 0 : _a.renderComponent;
                  // default renderApp
                  return _this.renderApp(_this.wrapperPageRegistration.reduce(function(acc, curr) {
                      var compose = curr(acc);
                      if (acc.pageConfig) {
                          compose.pageConfig = acc.pageConfig;
                      }
                      if (acc.getInitialProps) {
                          compose.getInitialProps = acc.getInitialProps;
                      }
                      return compose;
                  }, renderComponent));
              }
          };
          this.AppProvider = [];
          this.appConfig = appConfig;
          this.buildConfig = buildConfig;
          this.context = context;
          // Rax App 里的 app.json
          this.staticConfig = staticConfig;
          this.modifyDOMRender = null;
          this.apiRegistration = {
          };
          this.internalValue = {
          };
          this.renderApp = function(AppComponent) {
              return AppComponent;
          };
          this.routesComponent = false;
          this.modifyRoutesRegistration = [];
          this.wrapperPageRegistration = [];
      };
      RuntimeModule.prototype.loadModule = function(module) {
          var enableRouter = this.getRuntimeValue('enableRouter');
          var runtimeAPI = {
              addProvider: this.addProvider,
              addDOMRender: this.addDOMRender,
              applyRuntimeAPI: this.applyRuntimeAPI,
              wrapperPageComponent: this.wrapperPageComponent,
              appConfig: this.appConfig,
              buildConfig: this.buildConfig,
              context: this.context,
              setRenderApp: this.setRenderApp,
              staticConfig: this.staticConfig,
              getRuntimeValue: this.getRuntimeValue
          };
          if (enableRouter) {
              runtimeAPI = __assign(__assign({
              }, runtimeAPI), {
                  modifyRoutes: this.modifyRoutes,
                  wrapperRouterRender: this.wrapperRouterRender,
                  modifyRoutesComponent: this.modifyRoutesComponent
              });
          }
          var runtimeModule = module.default || module;
          if (module) runtimeModule(runtimeAPI);
      };
      RuntimeModule.prototype.composeAppProvider = function() {
          var _this = this;
          if (!this.AppProvider.length) return null;
          return this.AppProvider.reduce(function(ProviderComponent, CurrentProvider) {
              return function(_a) {
                  var children = _a.children, rest = __rest(_a, [
                      "children"
                  ]);
                  var element = CurrentProvider ? _this.context.createElement(CurrentProvider, __assign({
                  }, rest), children) : children;
                  return _this.context.createElement(ProviderComponent, __assign({
                  }, rest), element);
              };
          });
      };
      return RuntimeModule;
  }();
  var _default = RuntimeModule1;
  exports.default = _default;
  
  
  /***/ }),
  /* 16 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _miniappRenderer = swcHelpers.interopRequireDefault(__webpack_require__(54));
  var _default = _miniappRenderer.default;
  exports.default = _default;
  
  
  /***/ }),
  /* 17 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _extends = swcHelpers.interopRequireDefault(__webpack_require__(18));
  var DriverDOM = swcHelpers.interopRequireWildcard(__webpack_require__(56));
  var _default = (0, _extends).default({
  }, DriverDOM, {
      createElement: function createElement(type, props, component) {
          return DriverDOM.createElement(type, props, component, true);
      },
      setStyle: function setStyle(node, style) {
          return DriverDOM.setStyle(node, style, true);
      }
  });
  exports.default = _default;
  
  
  /***/ }),
  /* 18 */
  /***/ (function(module, exports) {
  
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends.apply(this, arguments);
  }
  
  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
  
  /***/ }),
  /* 19 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.setInitialData = setInitialData;
  exports.getInitialData = getInitialData;
  var __initialData__;
  function setInitialData(initialData) {
      __initialData__ = initialData;
  }
  function getInitialData() {
      return __initialData__;
  } //# sourceMappingURL=initialData.js.map
  
  
  /***/ }),
  /* 20 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  function loadStaticModules(appConfig) {
  }
  var _default = loadStaticModules;
  exports.default = _default;
  
  
  /***/ }),
  /* 21 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var __assign = (void 0) && (void 0).__assign || function() {
      __assign = Object.assign || function(t) {
          for(var s, i = 1, n = arguments.length; i < n; i++){
              s = arguments[i];
              for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
      var adopt = function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
          });
      };
      return new (P || (P = Promise))(function(resolve, reject) {
          var fulfilled = function fulfilled(value) {
              try {
                  step(generator.next(value));
              } catch (e) {
                  reject(e);
              }
          };
          var rejected = function rejected(value) {
              try {
                  step(generator["throw"](value));
              } catch (e) {
                  reject(e);
              }
          };
          var step = function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          };
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
      var verb = function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      };
      var step = function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      };
      var _ = {
          label: 0,
          sent: function sent() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      }, f, y, t, g;
      return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g;
  };
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var rax_1 = __webpack_require__(1);
  var universal_env_1 = __webpack_require__(61);
  // @ts-ignore
  var rax_app_1 = __webpack_require__(10);
  exports.default = function(api) {
      return __awaiter(void 0, void 0, void 0, function() {
          var appConfig, staticConfig, wrapperPageComponent, addProvider, context;
          return __generator(this, function(_a) {
              appConfig = api.appConfig, staticConfig = api.staticConfig, wrapperPageComponent = api.wrapperPageComponent, addProvider = api.addProvider, context = api.context;
              if (appConfig.app && appConfig.app.addProvider) {
                  addProvider(appConfig.app.addProvider);
              }
              wrapperPageComponent(universal_env_1.isWeb ? wrapperPageWithWeb(staticConfig) : wrapperPageWithOtherPlatform(context));
              return [
                  2 /*return*/ 
              ];
          });
      });
  };
  function wrapperPageWithOtherPlatform(context) {
      var WrapperPageFn = function WrapperPageFn(PageComponent) {
          var pageConfig = PageComponent.__pageConfig;
          var PageWrapper = function PageWrapper(props) {
              var history = rax_app_1.getHistory();
              var pageProps = __assign(__assign(__assign({
              }, props), context.pageInitialProps), {
                  history: history,
                  location: history === null || history === void 0 ? void 0 : history.location,
                  pageConfig: pageConfig
              });
              return rax_1.createElement(PageComponent, __assign({
              }, pageProps));
          };
          return PageWrapper;
      };
      return WrapperPageFn;
  }
  function wrapperPageWithWeb(staticConfig) {
      var _this = this;
      var wrapperPage = function wrapperPage(PageComponent) {
          var pageConfig = PageComponent.__pageConfig;
          var PageWrapper = function PageWrapper(props) {
              var _a1, _b1;
              var history = rax_app_1.getHistory();
              var location = (history === null || history === void 0 ? void 0 : history.location) || window.location;
              var _c1 = rax_1.useState((_b1 = (_a1 = window) === null || _a1 === void 0 ? void 0 : _a1.__INITIAL_DATA__) === null || _b1 === void 0 ? void 0 : _b1.pageInitialProps), data = _c1[0], setData = _c1[1];
              rax_1.useEffect(function() {
                  var _a2, _b, _c;
                  var title = ((_a2 = pageConfig.window) === null || _a2 === void 0 ? void 0 : _a2.title) || ((_b = staticConfig.window) === null || _b === void 0 ? void 0 : _b.title);
                  // Avoid override developer custom title
                  if (title) {
                      document.title = title;
                  }
                  // When enter the page for the first time, need to use window.__INITIAL_DATA__.pageInitialProps as props
                  // And don't need to re-request to switch routes
                  // Set the data to null after use, otherwise other pages will use
                  if ((_c = window.__INITIAL_DATA__) === null || _c === void 0 ? void 0 : _c.pageInitialProps) {
                      if (window.__INITIAL_DATA__) {
                          window.__INITIAL_DATA__.pageInitialProps = null;
                      }
                  } else if (PageComponent.getInitialProps) {
                      // When the server does not return data, the client calls getinitialprops
                      (function() {
                          return __awaiter(_this, void 0, void 0, function() {
                              var initialContext, result;
                              return __generator(this, function(_a) {
                                  switch(_a.label){
                                      case 0:
                                          initialContext = {
                                              pathname: location.pathname,
                                              query: rax_app_1.getSearchParams(),
                                              location: location
                                          };
                                          return [
                                              4 /*yield*/ ,
                                              PageComponent.getInitialProps(initialContext)
                                          ];
                                      case 1:
                                          result = _a.sent();
                                          setData(result);
                                          return [
                                              2 /*return*/ 
                                          ];
                                  }
                              });
                          });
                      })();
                  }
              // eslint-disable-next-line react-hooks/exhaustive-deps
              }, []);
              return rax_1.createElement(PageComponent, __assign({
              }, __assign(__assign(__assign({
              }, props), data), {
                  history: history,
                  location: location,
                  pageConfig: pageConfig
              })));
          };
          return PageWrapper;
      };
      return wrapperPage;
  } //# sourceMappingURL=runtime.js.map
  
  
  /***/ }),
  /* 22 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(__dirname) {
  module.exports = /******/ (function() {
      /******/ var __webpack_modules__ = {
          /***/ 33: /***/ function(module) {
              var g;
              // This works in non-strict mode
              g = (function() {
                  return this;
              })();
              try {
                  // This works if eval is allowed (see CSP)
                  g = g || new Function("return this")();
              } catch (e) {
                  // This works if the window reference is available
                  if (typeof window === "object") g = window;
              }
              // g can still be undefined, but nothing to do about it...
              // We return undefined, instead of nothing here, so it's
              // easier to handle this case. if(!global) { ...}
              module.exports = g;
          /***/ }
      };
      /************************************************************************/ /******/ // The module cache
      /******/ var __webpack_module_cache__ = {
      };
      /******/ /******/ // The require function
      /******/ function __nccwpck_require__(moduleId) {
          /******/ // Check if module is in cache
          /******/ if (__webpack_module_cache__[moduleId]) {
              /******/ return __webpack_module_cache__[moduleId].exports;
          /******/ }
          /******/ // Create a new module (and put it into the cache)
          /******/ var module = __webpack_module_cache__[moduleId] = {
              /******/ // no module.id needed
              /******/ // no module.loaded needed
              /******/ exports: {
              }
          };
          /******/ /******/ // Execute the module function
          /******/ var threw = true;
          /******/ try {
              /******/ __webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
              /******/ threw = false;
          /******/ } finally{
              /******/ if (threw) delete __webpack_module_cache__[moduleId];
          /******/ }
          /******/ /******/ // Return the exports of the module
          /******/ return module.exports;
      /******/ }
      /******/ /************************************************************************/ /******/ /* webpack/runtime/compat */ /******/ /******/ __nccwpck_require__.ab = __dirname + "/"; /************************************************************************/ 
      /******/ // module exports must be returned from runtime so entry inlining is disabled
      /******/ // startup
      /******/ // Load entry module and return exports
      /******/ return __nccwpck_require__(33);
  /******/ })();
  
  /* WEBPACK VAR INJECTION */}.call(this, "/"))
  
  /***/ }),
  /* 23 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.useRouter = useRouter;
  exports.withRouter = withRouter;
  var swcHelpers = __webpack_require__(0);
  var _extends = swcHelpers.interopRequireDefault(__webpack_require__(18));
  var _rax = __webpack_require__(1);
  var _pathToRegexp = __webpack_require__(24);
  var cache = {
  };
  function decodeParam(val) {
      try {
          return decodeURIComponent(val);
      } catch (err) {
          return val;
      }
  }
  function matchPath(route, pathname, parentParams) {
      var path = route.path, routes = route.routes, _route$exact = route.exact, end = _route$exact === void 0 ? true : _route$exact, _route$strict = route.strict, strict = _route$strict === void 0 ? false : _route$strict, _route$sensitive = route.sensitive, sensitive = _route$sensitive === void 0 ? false : _route$sensitive; // If not has path or has routes that should do not exact match
      if (path == null || routes) {
          end = false;
      } // Default path is empty
      path = path || '';
      var regexpCacheKey = path + "|" + end + "|" + strict + "|" + sensitive;
      var keysCacheKey = regexpCacheKey + '|';
      var regexp = cache[regexpCacheKey];
      var keys = cache[keysCacheKey] || [];
      if (!regexp) {
          regexp = (0, _pathToRegexp).pathToRegexp(path, keys, {
              end: end,
              strict: strict,
              sensitive: sensitive
          });
          cache[regexpCacheKey] = regexp;
          cache[keysCacheKey] = keys;
      }
      var result = regexp.exec(pathname);
      if (!result) {
          return null;
      }
      var url = result[0];
      var params = (0, _extends).default({
      }, parentParams, {
          history: router.history,
          location: router.history.location
      });
      for(var i = 1; i < result.length; i++){
          var key = keys[i - 1];
          var prop = key.name;
          var value = result[i];
          if (value !== undefined || !Object.prototype.hasOwnProperty.call(params, prop)) {
              if (key.repeat) {
                  params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
              } else {
                  params[prop] = value ? decodeParam(value) : value;
              }
          }
      }
      return {
          path: !end && url.charAt(url.length - 1) === '/' ? url.substr(1) : url,
          params: params
      };
  }
  function matchRoute(route, baseUrl, pathname, parentParams) {
      var matched;
      var childMatches;
      var childIndex = 0;
      return {
          next: function next() {
              if (!matched) {
                  matched = matchPath(route, pathname, parentParams);
                  if (matched) {
                      return {
                          done: false,
                          $: {
                              route: route,
                              baseUrl: baseUrl,
                              path: matched.path,
                              params: matched.params
                          }
                      };
                  }
              }
              if (matched && route.routes) {
                  while(childIndex < route.routes.length){
                      if (!childMatches) {
                          var childRoute = route.routes[childIndex];
                          childRoute.parent = route;
                          childMatches = matchRoute(childRoute, baseUrl + matched.path, pathname.substr(matched.path.length), matched.params);
                      }
                      var childMatch = childMatches.next();
                      if (!childMatch.done) {
                          return {
                              done: false,
                              $: childMatch.$
                          };
                      }
                      childMatches = null;
                      childIndex++;
                  }
              }
              return {
                  done: true
              };
          }
      };
  }
  var router = {
      history: null,
      handles: [],
      errorHandler: function errorHandler() {
      },
      addHandle: function addHandle(handle) {
          return router.handles.push(handle);
      },
      removeHandle: function removeHandle(handleId) {
          router.handles[handleId - 1] = null;
      },
      triggerHandles: function triggerHandles(component) {
          router.handles.map(function(handle) {
              handle && handle(component);
          });
      },
      match: function match(fullpath) {
          if (fullpath == null) return;
          router.fullpath = fullpath;
          var parent1 = router.root;
          var matched = matchRoute(parent1, parent1.path, fullpath);
          function next(parent) {
              var current = matched.next();
              if (current.done) {
                  var error = new Error("No match for " + fullpath);
                  return router.errorHandler(error, router.history.location);
              }
              var component1 = current.$.route.component;
              if (typeof component1 === 'function') {
                  component1 = component1(current.$.params, router.history.location);
              }
              if (component1 instanceof Promise) {
                  // Lazy loading component by import('./Foo')
                  return component1.then(function(component) {
                      // Check current fullpath avoid router has changed before lazy loading complete
                      if (fullpath === router.fullpath) {
                          router.triggerHandles(component);
                      }
                  });
              } else if (component1 != null) {
                  router.triggerHandles(component1);
                  return component1;
              } else {
                  return next(parent);
              }
          }
          return next(parent1);
      }
  };
  function matchLocation(_ref) {
      var pathname = _ref.pathname;
      router.match(pathname);
  }
  function getInitialComponent(routerConfig) {
      var InitialComponent = [];
      if (false) {}
      if (routerConfig.InitialComponent != null) {
          InitialComponent = routerConfig.InitialComponent;
      }
      router.history = routerConfig.history;
      return InitialComponent;
  }
  function useRouter(routerConfig) {
      routerConfig = typeof routerConfig === 'function' ? routerConfig() : routerConfig;
      var _useState = (0, _rax).useState(getInitialComponent(routerConfig)), component2 = _useState[0], setComponent = _useState[1];
      (0, _rax).useLayoutEffect(function() {
          var history = routerConfig.history;
          var routes = routerConfig.routes;
          router.root = Array.isArray(routes) ? {
              routes: routes
          } : routes;
          var handleId = router.addHandle(function(component) {
              setComponent(component);
          }); // Init path match
          if (routerConfig.InitialComponent == null) {
              matchLocation(history.location);
          }
          var unlisten = history.listen(function() {
              for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                  args[_key] = arguments[_key];
              }
              if (args.length === 1) {
                  // Support history v5
                  var location = args[0].location;
                  matchLocation(location);
              } else {
                  var _location = args[0];
                  matchLocation(_location);
              }
          });
          return function() {
              router.removeHandle(handleId);
              unlisten();
          };
      }, []);
      return {
          component: component2
      };
  }
  function withRouter(Component) {
      var Wrapper = function Wrapper(props) {
          var history = router.history;
          return (0, _rax).createElement(Component, (0, _extends).default({
          }, props, {
              history: history,
              location: history.location
          }));
      };
      ;
      Wrapper.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
      Wrapper.WrappedComponent = Component;
      return Wrapper;
  }
  
  
  /***/ }),
  /* 24 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.parse = parse;
  exports.compile = compile;
  exports.tokensToFunction = tokensToFunction;
  exports.match = match;
  exports.regexpToFunction = regexpToFunction;
  exports.tokensToRegexp = tokensToRegexp;
  exports.pathToRegexp = pathToRegexp;
  /**
   * Tokenize input string.
   */ function lexer(str) {
      var tokens = [];
      var i = 0;
      while(i < str.length){
          var _char = str[i];
          if (_char === "*" || _char === "+" || _char === "?") {
              tokens.push({
                  type: "MODIFIER",
                  index: i,
                  value: str[i++]
              });
              continue;
          }
          if (_char === "\\") {
              tokens.push({
                  type: "ESCAPED_CHAR",
                  index: i++,
                  value: str[i++]
              });
              continue;
          }
          if (_char === "{") {
              tokens.push({
                  type: "OPEN",
                  index: i,
                  value: str[i++]
              });
              continue;
          }
          if (_char === "}") {
              tokens.push({
                  type: "CLOSE",
                  index: i,
                  value: str[i++]
              });
              continue;
          }
          if (_char === ":") {
              var name = "";
              var j = i + 1;
              while(j < str.length){
                  var code = str.charCodeAt(j);
                  if (// `0-9`
                  (code >= 48 && code <= 57) || // `A-Z`
                  (code >= 65 && code <= 90) || // `a-z`
                  (code >= 97 && code <= 122) || // `_`
                  code === 95) {
                      name += str[j++];
                      continue;
                  }
                  break;
              }
              if (!name) throw new TypeError("Missing parameter name at " + i);
              tokens.push({
                  type: "NAME",
                  index: i,
                  value: name
              });
              i = j;
              continue;
          }
          if (_char === "(") {
              var count = 1;
              var pattern = "";
              var j = i + 1;
              if (str[j] === "?") {
                  throw new TypeError("Pattern cannot start with \"?\" at " + j);
              }
              while(j < str.length){
                  if (str[j] === "\\") {
                      pattern += str[j++] + str[j++];
                      continue;
                  }
                  if (str[j] === ")") {
                      count--;
                      if (count === 0) {
                          j++;
                          break;
                      }
                  } else if (str[j] === "(") {
                      count++;
                      if (str[j + 1] !== "?") {
                          throw new TypeError("Capturing groups are not allowed at " + j);
                      }
                  }
                  pattern += str[j++];
              }
              if (count) throw new TypeError("Unbalanced pattern at " + i);
              if (!pattern) throw new TypeError("Missing pattern at " + i);
              tokens.push({
                  type: "PATTERN",
                  index: i,
                  value: pattern
              });
              i = j;
              continue;
          }
          tokens.push({
              type: "CHAR",
              index: i,
              value: str[i++]
          });
      }
      tokens.push({
          type: "END",
          index: i,
          value: ""
      });
      return tokens;
  }
  function parse(str, options) {
      if (options === void 0) {
          options = {
          };
      }
      var tokens = lexer(str);
      var _a1 = options.prefixes, prefixes = _a1 === void 0 ? "./" : _a1;
      var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
      var result1 = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function tryConsume(type) {
          if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
      };
      var mustConsume = function mustConsume(type) {
          var value = tryConsume(type);
          if (value !== undefined) return value;
          var _a = tokens[i], nextType = _a.type, index = _a.index;
          throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
      };
      var consumeText = function consumeText() {
          var result = "";
          var value;
          // tslint:disable-next-line
          while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
              result += value;
          }
          return result;
      };
      while(i < tokens.length){
          var _char = tryConsume("CHAR");
          var name = tryConsume("NAME");
          var pattern = tryConsume("PATTERN");
          if (name || pattern) {
              var prefix = _char || "";
              if (prefixes.indexOf(prefix) === -1) {
                  path += prefix;
                  prefix = "";
              }
              if (path) {
                  result1.push(path);
                  path = "";
              }
              result1.push({
                  name: name || key++,
                  prefix: prefix,
                  suffix: "",
                  pattern: pattern || defaultPattern,
                  modifier: tryConsume("MODIFIER") || ""
              });
              continue;
          }
          var value1 = _char || tryConsume("ESCAPED_CHAR");
          if (value1) {
              path += value1;
              continue;
          }
          if (path) {
              result1.push(path);
              path = "";
          }
          var open = tryConsume("OPEN");
          if (open) {
              var prefix = consumeText();
              var name_1 = tryConsume("NAME") || "";
              var pattern_1 = tryConsume("PATTERN") || "";
              var suffix = consumeText();
              mustConsume("CLOSE");
              result1.push({
                  name: name_1 || (pattern_1 ? key++ : ""),
                  pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                  prefix: prefix,
                  suffix: suffix,
                  modifier: tryConsume("MODIFIER") || ""
              });
              continue;
          }
          mustConsume("END");
      }
      return result1;
  }
  function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
  }
  function tokensToFunction(tokens, options) {
      if (options === void 0) {
          options = {
          };
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function encode(x) {
          return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      // Compile all the tokens into regexps.
      var matches = tokens.map(function(token) {
          if (typeof token === "object") {
              return new RegExp("^(?:" + token.pattern + ")$", reFlags);
          }
      });
      return function(data) {
          var path = "";
          for(var i = 0; i < tokens.length; i++){
              var token = tokens[i];
              if (typeof token === "string") {
                  path += token;
                  continue;
              }
              var value = data ? data[token.name] : undefined;
              var optional = token.modifier === "?" || token.modifier === "*";
              var repeat = token.modifier === "*" || token.modifier === "+";
              if (Array.isArray(value)) {
                  if (!repeat) {
                      throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                  }
                  if (value.length === 0) {
                      if (optional) continue;
                      throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                  }
                  for(var j = 0; j < value.length; j++){
                      var segment = encode(value[j], token);
                      if (validate && !matches[i].test(segment)) {
                          throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                      }
                      path += token.prefix + segment + token.suffix;
                  }
                  continue;
              }
              if (typeof value === "string" || typeof value === "number") {
                  var segment = encode(String(value), token);
                  if (validate && !matches[i].test(segment)) {
                      throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                  }
                  path += token.prefix + segment + token.suffix;
                  continue;
              }
              if (optional) continue;
              var typeOfMessage = repeat ? "an array" : "a string";
              throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
          }
          return path;
      };
  }
  function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
  }
  function regexpToFunction(re, keys, options) {
      if (options === void 0) {
          options = {
          };
      }
      var _a = options.decode, decode = _a === void 0 ? function decode(x) {
          return x;
      } : _a;
      return function(pathname) {
          var m = re.exec(pathname);
          if (!m) return false;
          var path = m[0], index = m.index;
          var params = Object.create(null);
          var _loop_1 = function _loop_1(i) {
              // tslint:disable-next-line
              if (m[i] === undefined) return "continue";
              var key = keys[i - 1];
              if (key.modifier === "*" || key.modifier === "+") {
                  params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                      return decode(value, key);
                  });
              } else {
                  params[key.name] = decode(m[i], key);
              }
          };
          for(var i = 1; i < m.length; i++){
              _loop_1(i);
          }
          return {
              path: path,
              index: index,
              params: params
          };
      };
  }
  /**
   * Escape a regular expression string.
   */ function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  /**
   * Get the flags for a regexp from the options.
   */ function flags(options) {
      return options && options.sensitive ? "" : "i";
  }
  /**
   * Pull out keys from a regexp.
   */ function regexpToRegexp(path, keys) {
      if (!keys) return path;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path.source);
      while(execResult){
          keys.push({
              // Use parenthesized substring match if available, index otherwise
              name: execResult[1] || index++,
              prefix: "",
              suffix: "",
              modifier: "",
              pattern: ""
          });
          execResult = groupsRegex.exec(path.source);
      }
      return path;
  }
  /**
   * Transform an array into a regexp.
   */ function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
          return pathToRegexp(path, keys, options).source;
      });
      return new RegExp("(?:" + parts.join("|") + ")", flags(options));
  }
  /**
   * Create a path regexp from string input.
   */ function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
  }
  function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
          options = {
          };
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function encode(x) {
          return x;
      } : _d;
      var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
      var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
      var route = start ? "^" : "";
      // Iterate over the tokens and create our regexp string.
      for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
          var token = tokens_1[_i];
          if (typeof token === "string") {
              route += escapeString(encode(token));
          } else {
              var prefix = escapeString(encode(token.prefix));
              var suffix = escapeString(encode(token.suffix));
              if (token.pattern) {
                  if (keys) keys.push(token);
                  if (prefix || suffix) {
                      if (token.modifier === "+" || token.modifier === "*") {
                          var mod = token.modifier === "*" ? "?" : "";
                          route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                      } else {
                          route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                      }
                  } else {
                      route += "(" + token.pattern + ")" + token.modifier;
                  }
              } else {
                  route += "(?:" + prefix + suffix + ")" + token.modifier;
              }
          }
      }
      if (end) {
          if (!strict) route += delimiter + "?";
          route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
      } else {
          var endToken = tokens[tokens.length - 1];
          var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
          if (!strict) {
              route += "(?:" + delimiter + "(?=" + endsWith + "))?";
          }
          if (!isEndDelimited) {
              route += "(?=" + delimiter + "|" + endsWith + ")";
          }
      }
      return new RegExp(route, flags(options));
  }
  function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp) return regexpToRegexp(path, keys);
      if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
  } //# sourceMappingURL=index.js.map
  
  
  /***/ }),
  /* 25 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = useCreation;
  var _rax = __webpack_require__(1);
  function useCreation(factory) {
      var current = (0, _rax).useRef({
          initialized: false,
          result: undefined
      }).current;
      if (!current.initialized) {
          current.initialized = true;
          current.result = factory();
      }
      return current.result;
  } //# sourceMappingURL=useCreation.js.map
  
  
  /***/ }),
  /* 26 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.getAppConfig = exports.setAppConfig = void 0;
  var appConfig;
  function setAppConfig(config) {
      appConfig = config;
  }
  function getAppConfig() {
      return appConfig;
  }
  exports.setAppConfig = setAppConfig;
  exports.getAppConfig = getAppConfig;
  
  
  /***/ }),
  /* 27 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.mount = mount;
  exports.unmount = unmount;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _driverUniversal = swcHelpers.interopRequireDefault(__webpack_require__(17));
  function mount(appInstance, rootEl) {
      return (0, _rax).render(appInstance, rootEl, {
          driver: _driverUniversal.default
      });
  }
  function unmount(appInstance, rootEl) {
      return appInstance._internal.unmountComponent.bind(appInstance._internal);
  }
  
  
  /***/ }),
  /* 28 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _appJson = swcHelpers.interopRequireDefault(__webpack_require__(76));
  var _default = _appJson.default;
  exports.default = _default;
  
  
  /***/ }),
  /* 29 */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = __webpack_require__(30);
  
  
  /***/ }),
  /* 30 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var swcHelpers = __webpack_require__(0);
  var _runApp = __webpack_require__(31);
  var _index = swcHelpers.interopRequireDefault(__webpack_require__(79));
  var appConfig = {
      app: {
          renderComponent: _index.default
      }
  };
  (0, _runApp).runApp(appConfig);
  
  
  /***/ }),
  /* 31 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.runApp = runApp;
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _createAppShared = __webpack_require__(5);
  var _miniappRenderer = swcHelpers.interopRequireDefault(__webpack_require__(16));
  var _raxAppRenderer = swcHelpers.interopRequireDefault(__webpack_require__(9));
  var _loadStaticModules = swcHelpers.interopRequireDefault(__webpack_require__(20));
  var _loadRuntimeModules = swcHelpers.interopRequireDefault(__webpack_require__(60));
  var _appConfig = __webpack_require__(26);
  var _errorBoundary = swcHelpers.interopRequireDefault(__webpack_require__(11));
  var _render = __webpack_require__(27);
  var _staticConfig = swcHelpers.interopRequireDefault(__webpack_require__(28));
  var isNode = false;
  var isWeb = true;
  var isKuaiShouMiniProgram = false;
  var isBaiduSmartProgram = false;
  var isByteDanceMicroApp = false;
  var isWeChatMiniProgram = false;
  var isMiniApp = false;
  var staticConfig = _staticConfig.default;
  var inMiniApp = (isMiniApp || isWeChatMiniProgram || isByteDanceMicroApp || isBaiduSmartProgram || isKuaiShouMiniProgram) && !isWeb;
  var buildConfig = {
      mpa: true,
      web: {
          mpa: true
      },
      icestarkType: 'normal'
  };
  var runtimeValue = {
  };
  var frameworkAppBase = (0, _createAppShared).createBaseApp({
      loadRuntimeModules: _loadRuntimeModules.default,
      createElement: _rax.createElement,
      runtimeAPI: {
      },
      runtimeValue: runtimeValue
  });
  var pageConfig = {
      path: '/',
      source: 'pages/Home/index',
      spm: '26115364'
  };
  function runApp(appConfig) {
      // server bundle will to get appConfig after run runApp
      (0, _appConfig).setAppConfig(appConfig);
      // load static modules before init runtime such as request
      (0, _loadStaticModules).default(appConfig);
      appConfig.app.renderComponent.__pageConfig = pageConfig;
      if (process.env.__IS_SERVER__ || isNode) return;
      var renderer;
      if (inMiniApp) {
          renderer = _miniappRenderer.default;
      } else {
          renderer = _raxAppRenderer.default;
      }
      renderer({
          appConfig: appConfig,
          buildConfig: buildConfig,
          staticConfig: staticConfig,
          ErrorBoundary: _errorBoundary.default,
          appLifecycle: {
              createBaseApp: frameworkAppBase,
              initAppLifeCycles: _createAppShared.initAppLifeCycles,
              emitLifeCycles: _createAppShared.emitLifeCycles
          },
          pageConfig: pageConfig
      }, {
          mount: _render.mount,
          unmount: _render.unmount
      });
  }
  var _default = {
      createBaseApp: frameworkAppBase,
      staticConfig: staticConfig,
      pageConfig: pageConfig,
      enableRouter: false
  };
  exports.default = _default;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))
  
  /***/ }),
  /* 32 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var n1 = {
      t: 1,
      i: !1,
      driver: null,
      rootComponents: {
      },
      rootInstances: {
      },
      owner: null
  };
  function t1(n, t, i, r, u) {
      return {
          type: n,
          key: t,
          ref: i,
          props: r,
          _owner: u
      };
  }
  function i1(n) {
      return null === n;
  }
  function r1(n) {
      return "function" == typeof n;
  }
  function u1(n) {
      return "object" == typeof n;
  }
  function f1(n) {
      return "[object Object]" === h1.toString.call(n);
  }
  function o1(n) {
      return Array.isArray(n);
  }
  function e1(n) {
      return "string" == typeof n;
  }
  function s1(n) {
      return "number" == typeof n;
  }
  var c = function c() {
  }, h1 = {
  };
  function a1(n, t) {
      if (o1(n)) for(var i = 0, r = n.length; i < r; i++)a1(n[i], t);
      else t.push(n);
  }
  function v1(n) {
      if (null == n) return n;
      var t = [];
      return a1(n, t), t.length - 1 ? t : t[0];
  }
  var l1 = [], p1 = [], d1 = [], _1 = setTimeout;
  function x1(n) {
      var t;
      while(t = n.shift())t();
  }
  function w1(n) {
      0 === l1.length && _1(y1), l1.push(n);
  }
  function y1() {
      x1(l1);
  }
  function b1(n) {
      0 === p1.length && _1(j1), p1.push(n);
  }
  function j1() {
      x1(p1);
  }
  function m1(n) {
      d1.push(n);
  }
  function O(t, i, r) {
      var u, o = void 0 === r ? "" : " got: " + function(n) {
          return f1(n) ? Object.keys(n) : n;
      }(r);
      return Error(t + ": #" + i + ", " + (((u = n1.owner) ? "check <" + u.u() + ">" : "no owner") + ".") + o);
  }
  function g1(n, t) {
      throw O("Error", n, t);
  }
  function k1(n, t) {
      var i = O("Warn", n, t);
      _1(function() {
          throw i;
      }, 0);
  }
  var I1 = {
      key: !0,
      ref: !0
  };
  function A1(i, r, u) {
      var f, e = {
      }, s = null, h = null;
      if (null != r) for(f in h = void 0 === r.ref ? null : r.ref, s = void 0 === r.key ? null : "" + r.key, r)I1[f] || (e[f] = r[f]);
      var a = arguments.length - 2;
      if (a > 0) if (1 !== a || o1(u)) {
          var l = u;
          if (a > 1) {
              l = Array(a);
              for(var p = 0; p < a; p++)l[p] = arguments[p + 2];
          }
          e.children = v1(l);
      } else e.children = u;
      if (i && i.defaultProps) {
          var d = i.defaultProps;
          for(f in d)void 0 === e[f] && (e[f] = d[f]);
      }
      return null == i && (i = c, k1(0)), new t1(i, s, h, e, n1.owner);
  }
  function C(n, t, i) {
      for(var r = 0, u = n && n.length; r < u; r++)n[r].call(t, i);
  }
  var E1 = h1.hasOwnProperty;
  function P1(n, t) {
      return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
  }
  function D1(n, t) {
      if (P1(n, t)) return !0;
      if (!u1(n) || i1(n) || !u1(t) || i1(t)) return !1;
      var r = Object.keys(n);
      if (r.length !== Object.keys(t).length) return !1;
      for(var f = 0; f < r.length; f++)if (!E1.call(t, r[f]) || !P1(n[r[f]], t[r[f]])) return !1;
      return !0;
  }
  function S() {
      return n1.owner && n1.owner._instance;
  }
  function U() {
      var n = S();
      if (n) return n;
      g1(1);
  }
  function H(n, t) {
      if (i1(t) || n.length !== t.length) return !1;
      for(var r = 0; r < n.length; r++)if (!P1(n[r], t[r])) return !1;
      return !0;
  }
  function N(t2) {
      var i = U(), u = i.getHookID(), f = i.getHooks();
      if (!f[u]) {
          r1(t2) && (t2 = t2());
          f[u] = [
              t2,
              function(t) {
                  n1.i || j1();
                  var o = f[u], e = o[2];
                  r1(t) && (t = t(e)), P1(t, e) || (o[2] = t, S() === i ? i.o = !0 : i.h());
              },
              t2
          ];
      }
      var o2 = f[u];
      return P1(o2[0], o2[2]) || (o2[0] = o2[2], i.v = !0), o2;
  }
  function R(n, t) {
      T(n, t);
  }
  function T(n2, t3, i2) {
      var r2 = U(), u = r2.getHookID(), f = r2.getHooks();
      if (t3 = void 0 === t3 ? null : t3, f[u]) {
          var o = f[u], e = o.l, s = o.p;
          o.p = t3, o._ = s, e.current = n2;
      } else {
          var c = function n(t) {
              if (!t && i2) return b1(function() {
                  return n(!0);
              });
              var r = n.current;
              r && (h.current = r(), n.current = null);
          }, h = function n(t) {
              if (!t && i2) return b1(function() {
                  return n(!0);
              });
              var r = n.current;
              r && (r(), n.current = null);
          };
          c.current = n2, f[u] = {
              l: c,
              j: h,
              _: t3,
              p: t3
          }, r2.didMount.push(c), r2.willUnmount.push(function() {
              return h(!0);
          }), r2.didUpdate.push(function() {
              var n = f[u], t = n.p, i = n.l;
              null != t && H(t, n._) || (h(), i());
          });
      }
  }
  function V(n, t) {
      var r = U(), u = r.getHookID(), f = r.getHooks();
      if (t = void 0 === t ? null : t, f[u]) {
          var o = f[u][1];
          !i1(t) && H(t, o) || (f[u] = [
              n(),
              t
          ]);
      } else f[u] = [
          n(),
          t
      ];
      return f[u][0];
  }
  function W(n) {
      return o1(n) ? n : [
          n
      ];
  }
  function Z(n, t) {
      var i;
      while(n && n._internal){
          if (t(n)) {
              i = n;
              break;
          }
          n = n._internal.m;
      }
      return i;
  }
  var $ = 0;
  function q(n, t) {
      n.prototype = Object.create(t.prototype), n.prototype.constructor = n, z(n, t);
  }
  function z(n3, t4) {
      return (z = Object.setPrototypeOf || function(n, t) {
          return n.__proto__ = t, n;
      })(n3, t4);
  }
  var B = function() {
      var t = function t(n) {
          this.O = n;
      };
      var i3 = t.prototype;
      return i3.g = function(t, i, r) {
          this._parent = t, this.m = i, this._context = r, this._mountID = n1.t++;
      }, i3.k = function() {
          this.O = this._nativeNode = this._parent = this.m = this._context = null, this._instance && (this._instance = this._instance._internal = null);
      }, i3.I = function(n, t, i, r) {
          this.g(n, t, i), this.A(r);
          var u = {
          };
          return u._internal = this, u;
      }, i3.unmountComponent = function(t) {
          this._nativeNode && !t && n1.driver.removeChild(this._nativeNode, this._parent), this.k();
      }, i3.u = function() {
          var n = this.O, t = n && n.type;
          return t && t.displayName || t && t.name || t || n;
      }, i3.A = function(t) {
          var i = this.C(), r = this._parent;
          t ? t(i, r) : n1.driver.appendChild(i, r);
      }, i3.C = function() {
          return null == this._nativeNode ? this._nativeNode = this.P() : this._nativeNode;
      }, i3.D = function() {
          return this.C();
      }, t;
  }(), F = function(t) {
      var i = function i() {
          return t.apply(this, arguments) || this;
      };
      q(i, t);
      var r = i.prototype;
      return r.P = function() {
          return n1.driver.createEmpty(this);
      }, r.S = function() {
      }, i;
  }(B);
  function G(n, t, i) {
      var r = n ? n.ref : null, u = t ? t.ref : null;
      r !== u && (r && K(n._owner, r, i), u && J(t._owner, u, i));
  }
  function J(n, t, i) {
      if (n) {
          var f = i.D();
          r1(t) ? t(f) : u1(t) ? t.current = f : n._instance.refs[t] = f;
      } else k1(3);
  }
  function K(n, t, i) {
      if (r1(t)) t(null);
      else {
          var f = i.D();
          u1(t) && t.current === f ? t.current = null : n._instance.refs[t] === f && delete n._instance.refs[t];
      }
  }
  function L(t) {
      var r;
      return f1(t) && null !== t && t.type ? r = e1(t.type) ? new n1.U(t) : new n1.H(t) : e1(t) || s1(t) ? r = new n1.N(t + "") : o1(t) ? r = new n1.R(t) : (void 0 === t || i1(t) || !1 === t || !0 === t || k1(2, t), r = new n1.T(t)), r;
  }
  function M(n, t) {
      var r = i1(n), f = i1(t);
      return r || f ? r === f : !(!o1(n) || !o1(t)) || (e1(n) || s1(n) ? e1(t) || s1(t) : u1(n) && u1(t) && n.type === t.type && n.key === t.key);
  }
  function Q(n, t, i) {
      var r = t && t.key, u = "." + i.toString(36);
      if (e1(r)) {
          var f = "$" + r;
          return void 0 === n[f] ? f : u;
      }
      return u;
  }
  function X(t) {
      var i = t;
      while(i = t.m && t.m._internal)if (i instanceof n1.H) t = i;
      else {
          for(var r = Object.keys(i.V), u = t.W - 1; u >= 0; u--){
              var f = i.V[r[u]].C();
              if (!o1(f)) return f;
              if (f.length > 0) return f[f.length - 1];
          }
          if (!(i instanceof n1.R)) return null;
          t = i;
      }
  }
  var Y = function() {
      var n4 = function n4(n, t) {
          this.props = n, this.context = t, this.refs = {
          };
      };
      var t5 = n4.prototype;
      return t5.setState = function(n, t) {
          this.updater.setState(this, n, t);
      }, t5.forceUpdate = function(n) {
          this.updater.forceUpdate(this, n);
      }, n4;
  }(), nn = function(n) {
      var t6 = function t6(t, i) {
          var r;
          return (r = n.call(this, t, i) || this).Z = !0, r;
      };
      return q(t6, n), t6;
  }(Y), tn = 1, rn = function(n5) {
      var t = function t() {
          var t7;
          return (t7 = n5.call(this) || this).$ = [], t7.q = tn++, t7;
      };
      q(t, n5);
      var i = t.prototype;
      return i.D = function() {
          return this.B().D();
      }, i.B = function() {
          return this._internal._renderedComponent;
      }, i.h = function(n) {
          this.$ = n, this.forceUpdate();
      }, i.render = function() {
          return this.$;
      }, t;
  }(Y), un = {
      set: function set(t, i) {
          t._r || (t._r = i, i.q && (n1.rootInstances[i.q] = i, n1.rootComponents[i.q] = i._internal));
      },
      get: function get(n) {
          return n._r;
      },
      remove: function remove(t) {
          var i = this.get(t);
          i && (t._r = null, i.q && (delete n1.rootComponents[i.q], delete n1.rootInstances[i.q]));
      },
      mount: function mount(t, i, r) {
          var u = r.parent, f = r.hydrate, o = n1.driver;
          null == i && (i = o.createBody());
          var e, s = {
              element: t,
              container: i,
              hydrate: f
          };
          if (o.beforeRender && o.beforeRender(s), u) {
              var c = u._internal;
              e = c.F(c._context);
          }
          var h = this.get(i);
          if (h && h.q) return e && (h._internal.G = e), h.h(t), o.afterRender && o.afterRender(s), h;
          var a = L(A1(rn)).I(i, u, e || {
          });
          return this.set(i, a), a.h(t), o.afterRender && o.afterRender(s), a;
      }
  }, fn = Object.assign, on = /^on[A-Z]/, en = function(t8) {
      var u = function u() {
          return t8.apply(this, arguments) || this;
      };
      q(u, t8);
      var f2 = u.prototype;
      return f2.I = function(n, t, i, r) {
          this.g(n, t, i);
          var u = this.O, f = u.props, o = u.type, e = f.children, s = f.append || "tree";
          this.J = fn({
          }, f.style);
          var c = {
              type: o,
              props: f
          };
          return c._internal = this, this._instance = c, "tree" === s ? (this.K(e, i), this.A(r)) : (this.A(r), this.K(e, i)), u && u.ref && J(u._owner, u.ref, this), c;
      }, f2.K = function(n, t) {
          if (null == n) return n;
          var i = this.C();
          return this.L(i, W(n), t);
      }, f2.L = function(n, t, i, r) {
          for(var u = this.V = {
          }, f = [], o = 0, e = t.length; o < e; o++){
              var s = t[o], c = L(s);
              u[Q(u, s, o)] = c, c.W = o;
              var h = c.I(n, this._instance, i, r);
              f.push(h);
          }
          return f;
      }, f2.M = function(n) {
          var t = this.V;
          if (t) {
              for(var i in t){
                  t[i].unmountComponent(n);
              }
              this.V = null;
          }
      }, f2.unmountComponent = function(t) {
          if (this._nativeNode) {
              var i = this.O.ref;
              i && K(this.O._owner, i, this), un.remove(this._nativeNode), t || n1.driver.removeChild(this._nativeNode, this._parent);
          }
          this.M(!0), this.J = null, this.k();
      }, f2.S = function(n, t, i, r) {
          this.O = t, G(n, t, this);
          var u = n.props, f = t.props;
          this.X(u, f), null == u.children || o1(u.children) && 0 === u.children.length ? this.K(f.children, r) : this.Y(f.children, r);
      }, f2.X = function(t, i) {
          var u, f, o, e = n1.driver, s = this.C();
          for(u in t)if ("children" !== u && null != t[u] && !i.hasOwnProperty(u)) if ("style" === u) {
              var c = this.J;
              for(f in c)(o = o || {
              })[f] = "";
              this.J = null;
          } else if (on.test(u)) {
              var h = t[u];
              r1(h) && e.removeEventListener(s, u.slice(2).toLowerCase(), h);
          } else e.removeAttribute(s, u, t[u]);
          for(u in i){
              var a = i[u], v = "style" === u ? this.J : null != t ? t[u] : void 0;
              if ("children" !== u && v !== a && (null != a || null != v)) if ("style" === u) if (a ? a = this.J = fn({
              }, a) : this.J = null, null != v) {
                  for(f in v)a && (a[f] || 0 === a[f]) || ((o = o || {
                  })[f] = "");
                  for(f in a)v[f] !== a[f] && ((o = o || {
                  })[f] = a[f]);
              } else o = a;
              else if (on.test(u)) {
                  var l = u.slice(2).toLowerCase();
                  r1(v) && e.removeEventListener(s, l, v, i), r1(a) && e.addEventListener(s, l, a, i);
              } else null != a ? e.setAttribute(s, u, a) : e.removeAttribute(s, u, t[u]);
          }
          o && e.setStyle(s, o);
      }, f2.Y = function(t9, r3) {
          var u = this.V, f = n1.driver;
          if (null != t9 || null != u) {
              var e = {
              };
              if (null != t9) for(var s = 0, c = (t9 = W(t9)).length; s < c; s++){
                  var h = t9[s], a = Q(e, h, s), v = u && u[a], l = v && v.O, p = v && v._context;
                  null != v && M(l, h) ? (l === h && p === r3 || v.S(l, h, r3, r3), e[a] = v) : (v && (v.nn = !0), e[a] = L(h));
              }
              var d = this.C(), _ = o1(d), x = null, w = null, y = !1, b = !1, j = null, m = !(!f.removeChildren || !(i1(t9) || t9 && !t9.length) || _);
              if (null != u) {
                  for(var O in u){
                      var g = u[O], k = g.nn || !e[O];
                      x ? k && g.unmountComponent(m) : (b = k, o1(w = (x = g).C()) && (y = 0 === w.length, w = w[0]));
                  }
                  (_ && 0 === d.length || y) && (j = X(this));
              }
              if (null != e) {
                  var I = function I(n, t) {
                      for(var i = 0, r = (n = W(n)).length; i < r; i++)j ? f.insertAfter(n[r - 1 - i], j) : w ? f.insertBefore(n[i], w) : t && f.appendChild(n[i], t);
                  }, A = 0;
                  for(var C in e){
                      var E = e[C], P = u && u[C];
                      if (P === E) {
                          var D = P.C();
                          P.W !== A && I(D);
                      } else _ && (d = this._parent), E.I(d, this._instance, r3, I);
                      E.W = A++, o1(j = E.C()) && (j = j[j.length - 1]);
                  }
              }
              b && x.unmountComponent(m), m && f.removeChildren(this._nativeNode), this.V = e;
          }
      }, f2.P = function() {
          var t = this._instance, i = n1.driver.createElement(t.type, t.props, this);
          return un.set(i, t), i;
      }, u;
  }(B), sn = function(t10) {
      var i = function i() {
          return t10.apply(this, arguments) || this;
      };
      q(i, t10);
      var r = i.prototype;
      return r.S = function(t, i) {
          t !== (i = "" + i) && (this.O = i, n1.driver.updateText(this.C(), i));
      }, r.P = function() {
          return n1.driver.createText(this.O, this);
      }, i;
  }(B), cn = function(n6) {
      var t11 = function t11(t12, i5) {
          var r;
          (r = n6.call(this) || this).tn = !0, r.rn = t12, r.un = 0, r.fn = 0, r.on = {
          }, r.o = !1, r.v = !1, r.en = null, r.sn = {
          }, r.didMount = [], r.didUpdate = [], r.willUnmount = [], r.state = h1, t12._forwardRef && (r.cn = r._forwardRef = i5);
          var u = t12.hn;
          return u && (r.shouldComponentUpdate = function(n) {
              for(var t = !0, i = u.length - 1; i > -1; i--)if (t = u[i](r.props, n)) break;
              return !t || r.cn !== r._forwardRef;
          }), r;
      };
      q(t11, n6);
      var i4 = t11.prototype;
      return i4.getHooks = function() {
          return this.on;
      }, i4.getHookID = function() {
          return ++this.un;
      }, i4.useContext = function(n7) {
          var t = this, i = n7._contextID, r = this.sn[i];
          if (!r) {
              var u = n7.an(this);
              if (r = this.sn[i] = {
                  vn: u
              }, u) {
                  var f = function f(n) {
                      r.ln !== n && (t.v = !0, t.h());
                  };
                  u.pn(f), this.willUnmount.push(function() {
                      return u.dn(f);
                  });
              }
          }
          return r.ln = r.vn ? r.vn.getValue() : n7._defaultValue;
      }, i4.componentWillMount = function() {
          this.v = !0;
      }, i4.componentDidMount = function() {
          C(this.didMount);
      }, i4.componentWillReceiveProps = function() {
          this.v = !0;
      }, i4.componentDidUpdate = function() {
          C(this.didUpdate);
      }, i4.componentWillUnmount = function() {
          C(this.willUnmount);
      }, i4.h = function() {
          this.setState(h1);
      }, i4.render = function() {
          this.un = 0, this.fn = 0, this.o = !1;
          var n = this.rn(this.props, this._forwardRef ? this._forwardRef : this.context);
          while(this.o)this.fn++, this.fn > 24 && g1(4), this.un = 0, this.o = !1, n = this.rn(this.props, this._forwardRef ? this._forwardRef : this.context);
          return this.v && (this.en = n, this.v = !1), this.en;
      }, t11;
  }(Y), hn = [];
  function an(n) {
      return n._n;
  }
  function vn(t) {
      var i = t._internal;
      if (i) {
          n1.i = !0;
          var r = i.O, u = i._context, f = i.G || u;
          i.G = void 0, (an(i) || i.xn) && (i.S(r, r, u, f), x1(d1)), n1.i = !1;
      }
  }
  function ln(n, t) {
      return t._internal._mountID - n._internal._mountID;
  }
  function pn() {
      if (n1.i) return w1(pn);
      var t, i = hn;
      if (i.length > 0) {
          j1(), hn = [], i.length > 1 && (i = i.filter(function(n) {
              return !!n._internal;
          }).sort(ln));
          while(t = i.pop())vn(t);
      }
  }
  function dn(n, t) {
      if (hn.indexOf(n) < 0 && hn.push(n), t) {
          if (hn.length > 1) return;
          w1(pn);
      } else pn();
  }
  function _n(n8, t13, i) {
      var r = n8._internal;
      if (r) {
          i && (function(n9, t) {
              ((function(n) {
                  return n.wn;
              })(n9) || (function(n) {
                  return n.wn = [];
              })(n9)).push(t);
          })(r, i);
          var u = r._renderedComponent;
          t13 ? (n8.tn && (r.xn = !0), (function(n10, t) {
              (an(n10) || (function(n) {
                  return n._n = [];
              })(n10)).push(t);
          })(r, t13), !r.yn && u && dn(n8, !0)) : (r.xn = !0, u && dn(n8));
      }
  }
  var xn = {
      setState: function setState(t, i, r) {
          n1.i || j1(), _n(t, i, r);
      },
      forceUpdate: function forceUpdate(n, t) {
          _n(n, null, t);
      }
  };
  function wn(n12, t14, i6) {
      try {
          return n12();
      } catch (n11) {
          i6 ? i6(n11) : (function(n13, t) {
              var i = Z(n13, function(n) {
                  return n.componentDidCatch || n.constructor && n.constructor.getDerivedStateFromError;
              });
              i ? m1(function() {
                  var n14 = i._internal;
                  n14 && wn(function() {
                      if (i.componentDidCatch && i.componentDidCatch(t), i.constructor && i.constructor.getDerivedStateFromError) {
                          var n = i.constructor.getDerivedStateFromError(t);
                          i.setState(n);
                      }
                  }, n14.m);
              }) : _1(function() {
                  throw t;
              }, 0);
          })(t14, n11);
      }
  }
  function yn(n, t) {
      m1(function() {
          wn(n, t);
      });
  }
  function bn(n, t) {
      n && yn(function() {
          C(n, t);
      }, t);
  }
  var jn = function(t15) {
      var i = function i() {
          return t15.apply(this, arguments) || this;
      };
      q(i, t15);
      var u2 = i.prototype;
      return u2.I = function(t, i, u, f) {
          this.g(t, i, u);
          var o, e, s = this.O, c = s.type, h = s.ref, a = s.props, v = c.prototype, l = this.bn(u);
          if (wn(function() {
              v && v.render ? o = new c(a, l) : r1(c) ? o = new cn(c, h) : g1(6, c);
          }, i), o) {
              o.props = a, o.context = l, o.refs = {
              }, o.updater = xn, o._internal = this, this._instance = o;
              var p = o.state;
              void 0 === p && (o.state = p = null), o.componentWillMount && wn(function() {
                  o.componentWillMount();
              }, o), n1.owner = this, o.state = this.jn(a, l);
              var d = this.wn;
              return this.wn = null, wn(function() {
                  e = o.render();
              }, o), n1.owner = null, this._renderedComponent = L(e), this._renderedComponent.I(this._parent, o, this.F(u), f), !s.type._forwardRef && h && J(s._owner, h, this), o.componentDidMount && yn(function() {
                  o.componentDidMount();
              }, o), bn(d, o), o;
          }
      }, u2.unmountComponent = function(n) {
          var t = this._instance;
          if (t && t.componentWillUnmount && wn(function() {
              t.componentWillUnmount();
          }, t), null != this._renderedComponent) {
              var i = this.O, r = i.ref;
              !i.type._forwardRef && r && K(i._owner, r, this), this._renderedComponent.unmountComponent(n), this._renderedComponent = null;
          }
          this._n = null, this.xn = !1, this.k();
      }, u2.bn = function(n) {
          var t = {
          }, i = this.O.type.contextTypes;
          if (i) for(var r in i)t[r] = n[r];
          return t;
      }, u2.F = function(n) {
          var t = this._instance, i = t.getChildContext && t.getChildContext();
          return i ? fn({
          }, n, i) : n;
      }, u2.jn = function(n, t) {
          var i = this._instance, u = this._n;
          if (!u) return i.state;
          this._n = null;
          for(var f = fn({
          }, i.state), o = 0; o < u.length; o++){
              var e = u[o];
              fn(f, r1(e) ? e.call(i, f, n, t) : e);
          }
          return f;
      }, u2.S = function(n, t, i7, r) {
          var u = this, f = this._instance;
          f && wn(function() {
              var i, o, e;
              u._context === r ? o = f.context : (o = u.bn(r), i = !0), e = t.props, n !== t && (i = !0), i && f.componentWillReceiveProps && (u.yn = !0, f.componentWillReceiveProps(e, o), u.yn = !1), u.O.type._forwardRef ? (f.cn = n.ref, f._forwardRef = t.ref) : G(n, t, u);
              var s = !0, c = f.props, h = f.state, a = u.jn(e, o), v = u.wn;
              if (u.wn = null, u.xn || (f.shouldComponentUpdate ? s = f.shouldComponentUpdate(e, a, o) : f.Z && (s = !D1(c, e) || !D1(h, a))), s) {
                  u.xn = !1;
                  var l = f.context;
                  f.componentWillUpdate && f.componentWillUpdate(e, a, o), u.O = t, u._context = r, f.props = e, f.state = a, f.context = o, u.mn(r), f.componentDidUpdate && yn(function() {
                      f.componentDidUpdate(c, h, l);
                  }, f);
              } else u.O = t, u._context = r, f.props = e, f.state = a, f.context = o;
              bn(v, f);
          }, f);
      }, u2.mn = function(t16) {
          var i8, r4 = this._renderedComponent, u3 = r4.O, f3 = this._instance;
          if (n1.owner = this, i8 = f3.render(), n1.owner = null, M(u3, i8)) {
              var e = r4._context, s = this.F(t16);
              u3 === i8 && e === s || r4.S(u3, i8, e, s);
          } else {
              var c = null, h = r4.C();
              o1(h) && 0 === h.length && null == f3.q && (c = X(r4)), r4.unmountComponent(!0), this._renderedComponent = L(i8), this._renderedComponent.I(this._parent, f3, this.F(t16), function(t, i) {
                  var r = n1.driver;
                  h = W(h), t = W(t);
                  for(var u = 0; u < t.length; u++){
                      var f = t[u];
                      h[u] ? r.replaceChild(f, h[u]) : c ? r.insertAfter(f, c) : r.appendChild(f, i), c = f;
                  }
                  for(var o = t.length; o < h.length; o++)r.removeChild(h[o]);
              });
          }
      }, u2.C = function() {
          var n = this._renderedComponent;
          if (n) return n.C();
      }, u2.D = function() {
          var n = this._instance;
          return n.tn ? null : n;
      }, i;
  }(B), mn = function(t17) {
      var i = function i() {
          return t17.apply(this, arguments) || this;
      };
      q(i, t17);
      var r5 = i.prototype;
      return r5.I = function(t18, i, r, u) {
          this.g(t18, i, r);
          var f = this._instance = {
          };
          f._internal = this;
          var o = [];
          if (this.L(this._parent, this.O, r, function(n) {
              n = W(n);
              for(var t = 0; t < n.length; t++)o.push(n[t]);
          }), u) u(o, t18);
          else for(var e = 0; e < o.length; e++)n1.driver.appendChild(o[e], t18);
          return f;
      }, r5.unmountComponent = function(t) {
          if (!t) for(var i = this.C(), r = 0, u = i.length; r < u; r++)n1.driver.removeChild(i[r]);
          this.M(!0), this.k();
      }, r5.S = function(n, t, i, r) {
          this.O = t, this.Y(this.O, r);
      }, r5.C = function() {
          var n = this.V || {
          };
          return [].concat.apply([], Object.keys(n).map(function(t) {
              return n[t].C();
          }));
      }, i;
  }(en);
  var On = {
      Host: n1,
      Instance: un,
      Element: t1,
      flattenChildren: v1
  };
  exports.Component = Y, exports.Fragment = function(n) {
      return n.children;
  }, exports.PureComponent = nn, exports.createContext = function(n15) {
      var i = function i(n16) {
          return Z(n16, function(n) {
              return n.On === t19;
          });
      };
      var t19 = "_c" + $++;
      return {
          Provider: (function() {
              var i = function i() {
                  this.On = t19, this.gn = [];
              };
              var r = i.prototype;
              return r.pn = function(n) {
                  this.gn.push(n);
              }, r.dn = function(n) {
                  this.gn = this.gn.filter(function(t) {
                      return t !== n;
                  });
              }, r._getChildContext = function() {
                  var n;
                  return (n = {
                  })[t19] = this, n;
              }, r.getValue = function() {
                  return void 0 !== this.props.value ? this.props.value : n15;
              }, r.componentDidUpdate = function(n) {
                  this.props.value !== n.value && C(this.gn, null, this.getValue());
              }, r.render = function() {
                  return this.props.children;
              }, i;
          })(),
          Consumer: function Consumer(u, f) {
              var o = this, e = N(function() {
                  return f[t19] || i(o);
              })[0], s = e ? e.getValue() : n15, c = N(s), h = c[1];
              if (s === c[0]) {
                  R(function() {
                      if (e) return e.pn(h), function() {
                          e.dn(h);
                      };
                  }, []);
                  var a = W(u.children)[0];
                  return r1(a) ? a(s) : void 0;
              }
              h(s);
          },
          _contextID: t19,
          _defaultValue: n15,
          an: i
      };
  }, exports.createElement = A1, exports.createRef = function() {
      return {
          current: null
      };
  }, exports.forwardRef = function(n) {
      return n._forwardRef = !0, n;
  }, exports.memo = function(n, t) {
      return t = t || D1, n.hn ? n.hn.push(t) : n.hn = [
          t
      ], n;
  }, exports.render = function(t, i, u, f) {
      var o;
      r1(u) && (f = u, u = null), o = (u = u || h1).driver, n1.T = F, n1.U = en, n1.N = sn, n1.R = mn, n1.H = jn, (n1.driver = o || n1.driver) || g1(5);
      var e = un.mount(t, i, u).D();
      return f && f.call(e), e;
  }, exports.shared = On, exports.useCallback = function(n, t) {
      return V(function() {
          return n;
      }, t);
  }, exports.useContext = function(n) {
      return U().useContext(n);
  }, exports.useEffect = function(n, t) {
      T(n, t, !0);
  }, exports.useImperativeHandle = function(n, t, i) {
      R(function() {
          return r1(n) ? (n(t()), function() {
              return n(null);
          }) : null != n ? (n.current = t(), function() {
              n.current = null;
          }) : void 0;
      }, o1(i) ? i.concat([
          n
      ]) : null);
  }, exports.useLayoutEffect = R, exports.useMemo = V, exports.useReducer = function(t20, i9, u4) {
      var f = U(), o = f.getHookID(), e = f.getHooks(), s = e[o];
      if (!s) {
          var c = r1(u4) ? u4(i9) : i9;
          return e[o] = [
              c,
              function(t) {
                  n1.i || j1();
                  var i = e[o][2];
                  if (S() === f) i.kn.push(t), f.o = !0;
                  else {
                      var r = i.In, u = (0, i.An)(r, t);
                      if (P1(u, r)) return;
                      i.In = u, i.kn.push(t), f.h();
                  }
              },
              {
                  kn: [],
                  An: t20,
                  In: c
              }
          ];
      }
      var h = s[2], a = s[0];
      if (f.fn > 0) for(var v = 0; v < h.kn.length; v++)a = t20(a, h.kn[v]);
      else a = h.In;
      return P1(a, s[0]) || (s[0] = a, f.v = !0), h.An = t20, h.In = a, h.kn.length = 0, e[o];
  }, exports.useRef = function(n) {
      var t = U(), i = t.getHookID(), r = t.getHooks();
      return r[i] || (r[i] = {
          current: n
      }), r[i];
  }, exports.useState = N, exports.version = "1.2.2";
  
  
  /***/ }),
  /* 33 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.isFunction = void 0;
  var isFunction = function isFunction(target) {
      return typeof target === 'function';
  }; //# sourceMappingURL=type.js.map
  exports.isFunction = isFunction;
  
  
  /***/ }),
  /* 34 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = pathRedirect;
  var isWeb = true;
  var isWeex = false;
  // We want to control applications on different platforms to jump to specific pages through unified parameters.
  // Like https://xxx.com?_path=/page1, use `_path` to jump to the specific route.
  var TARGET_PATH_REG = /[?&]_path=([^&#]+)/i;
  function pathRedirect(history, routes) {
      var targetPath = '';
      var targetQuery = null;
      // In Web, use location.search first
      if (isWeb && TARGET_PATH_REG.test(window.location.search)) {
          targetQuery = window.location.search.match(TARGET_PATH_REG);
      }
      // In Weex, use location.href first. Support by rax-weex framework
      if (isWeex && TARGET_PATH_REG.test(window.location.href)) {
          targetQuery = window.location.href.match(TARGET_PATH_REG);
      }
      // If there is no `_path` in url search, try history.location.
      if (!targetQuery && TARGET_PATH_REG.test(history.location.search)) {
          targetQuery = history.location.search.match(TARGET_PATH_REG);
      }
      var isConfirmed = false;
      targetPath = targetQuery ? targetQuery[1] : '';
      for(var i = 0, l = routes.length; i < l; i++){
          if (targetPath === routes[i].path) {
              isConfirmed = true;
              break;
          }
      }
      if (targetPath && !isConfirmed) {
          console.warn('Warning: url query `_path` should be an exist path in app.json, see: https://rax.js.org/docs/guide/routes ');
          return false;
      }
      // If `targetPath` exists, jump to the specific route.
      if (targetPath) {
          history.replace(targetPath + history.location.search);
      }
  } //# sourceMappingURL=pathRedirect.js.map
  
  
  /***/ }),
  /* 35 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _storage = __webpack_require__(3);
  var _router = swcHelpers.interopRequireDefault(__webpack_require__(8));
  var _constants = __webpack_require__(2);
  var _appLifeCycles = __webpack_require__(6);
  var _pageLifeCycles = __webpack_require__(7);
  var __assign = (void 0) && (void 0).__assign || function() {
      __assign = Object.assign || function(t) {
          for(var s, i = 1, n = arguments.length; i < n; i++){
              s = arguments[i];
              for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  function emitLifeCycles() {
      // Get history
      var history = (0, _storage).getHistory();
      var pathname = history && history.location ? history.location.pathname : typeof window !== 'undefined' && window.location.pathname;
      // Set current router
      _router.default.current = {
          pathname: pathname,
          visibilityState: true
      };
      // Emit app lifecycle
      (0, _appLifeCycles).emit(_constants.LAUNCH);
      (0, _appLifeCycles).emit(_constants.SHOW);
      if (history && history.listen) {
          // Listen history change
          history.listen(function(location) {
              if (location.pathname !== _router.default.current.pathname) {
                  // Flow router info
                  _router.default.prev = __assign({
                  }, _router.default.current);
                  _router.default.current = {
                      pathname: location.pathname,
                      visibilityState: true
                  };
                  _router.default.prev.visibiltyState = false;
                  (0, _pageLifeCycles).emit(_constants.HIDE, _router.default.prev.pathname);
                  (0, _pageLifeCycles).emit(_constants.SHOW, _router.default.current.pathname);
              }
          });
      }
  }
  var _default = emitLifeCycles;
  exports.default = _default;
  
  
  /***/ }),
  /* 36 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = exports.initHistory = void 0;
  var swcHelpers = __webpack_require__(0);
  var _history = __webpack_require__(37);
  var _createInitHistory = swcHelpers.interopRequireDefault(__webpack_require__(43));
  var _storage = __webpack_require__(3);
  var createHistory = function createHistory(_a) {
      var type = _a.type, basename = _a.basename, location = _a.location;
      var history;
      if (process.env.__IS_SERVER__) {
          history = (0, _history).createMemoryHistory();
          history.location = location;
      } else if (type === 'hash') {
          history = (0, _history).createHashHistory({
              basename: basename
          });
      } else if (type === 'browser') {
          history = (0, _history).createBrowserHistory({
              basename: basename
          });
      } else {
          history = (0, _history).createMemoryHistory();
      }
      (0, _storage).setHistory(history);
      return history;
  };
  var initHistory = (0, _createInitHistory).default(createHistory);
  exports.initHistory = initHistory;
  var _default = createHistory;
  exports.default = _default;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))
  
  /***/ }),
  /* 37 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = void 0;
  var swcHelpers = __webpack_require__(0);
  var _extends = swcHelpers.interopRequireDefault(__webpack_require__(38));
  var _resolvePathname = swcHelpers.interopRequireDefault(__webpack_require__(39));
  var _valueEqual = swcHelpers.interopRequireDefault(__webpack_require__(40));
  var _tinyWarning = swcHelpers.interopRequireDefault(__webpack_require__(41));
  var _tinyInvariant = swcHelpers.interopRequireDefault(__webpack_require__(42));
  function addLeadingSlash(path) {
      return path.charAt(0) === '/' ? path : '/' + path;
  }
  function stripLeadingSlash(path) {
      return path.charAt(0) === '/' ? path.substr(1) : path;
  }
  function hasBasename(path, prefix) {
      return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
  }
  function stripBasename(path, prefix) {
      return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
  }
  function stripTrailingSlash(path) {
      return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  }
  function parsePath(path) {
      var pathname = path || '/';
      var search = '';
      var hash = '';
      var hashIndex = pathname.indexOf('#');
      if (hashIndex !== -1) {
          hash = pathname.substr(hashIndex);
          pathname = pathname.substr(0, hashIndex);
      }
      var searchIndex = pathname.indexOf('?');
      if (searchIndex !== -1) {
          search = pathname.substr(searchIndex);
          pathname = pathname.substr(0, searchIndex);
      }
      return {
          pathname: pathname,
          search: search === '?' ? '' : search,
          hash: hash === '#' ? '' : hash
      };
  }
  function createPath(location) {
      var pathname = location.pathname, search = location.search, hash = location.hash;
      var path = pathname || '/';
      if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
      if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
      return path;
  }
  function createLocation(path, state, key, currentLocation) {
      var location;
      if (typeof path === 'string') {
          // Two-arg form: push(path, state)
          location = parsePath(path);
          location.state = state;
      } else {
          // One-arg form: push(location)
          location = (0, _extends).default({
          }, path);
          if (location.pathname === undefined) location.pathname = '';
          if (location.search) {
              if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
          } else {
              location.search = '';
          }
          if (location.hash) {
              if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
          } else {
              location.hash = '';
          }
          if (state !== undefined && location.state === undefined) location.state = state;
      }
      try {
          location.pathname = decodeURI(location.pathname);
      } catch (e) {
          if (e instanceof URIError) {
              throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
          } else {
              throw e;
          }
      }
      if (key) location.key = key;
      if (currentLocation) {
          // Resolve incomplete/relative pathname relative to current location.
          if (!location.pathname) {
              location.pathname = currentLocation.pathname;
          } else if (location.pathname.charAt(0) !== '/') {
              location.pathname = (0, _resolvePathname).default(location.pathname, currentLocation.pathname);
          }
      } else {
          // When there is no prior location and pathname is empty, set it to /
          if (!location.pathname) {
              location.pathname = '/';
          }
      }
      return location;
  }
  function locationsAreEqual(a, b) {
      return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual).default(a.state, b.state);
  }
  function createTransitionManager() {
      var setPrompt = function setPrompt(nextPrompt) {
           false ? undefined : void 0;
          prompt = nextPrompt;
          return function() {
              if (prompt === nextPrompt) prompt = null;
          };
      };
      var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
          // TODO: If another transition starts while we're still confirming
          // the previous one, we may end up in a weird state. Figure out the
          // best way to handle this.
          if (prompt != null) {
              var result = typeof prompt === 'function' ? prompt(location, action) : prompt;
              if (typeof result === 'string') {
                  if (typeof getUserConfirmation === 'function') {
                      getUserConfirmation(result, callback);
                  } else {
                       false ? undefined : void 0;
                      callback(true);
                  }
              } else {
                  // Return false from a transition hook to cancel the transition.
                  callback(result !== false);
              }
          } else {
              callback(true);
          }
      };
      var appendListener = function appendListener(fn) {
          var isActive = true;
          function listener() {
              if (isActive) fn.apply(void 0, arguments);
          }
          listeners.push(listener);
          return function() {
              isActive = false;
              listeners = listeners.filter(function(item) {
                  return item !== listener;
              });
          };
      };
      var notifyListeners = function notifyListeners() {
          for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
              args[_key] = arguments[_key];
          }
          listeners.forEach(function(listener) {
              return listener.apply(void 0, args);
          });
      };
      var prompt = null;
      var listeners = [];
      return {
          setPrompt: setPrompt,
          confirmTransitionTo: confirmTransitionTo,
          appendListener: appendListener,
          notifyListeners: notifyListeners
      };
  }
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  function getConfirmation(message, callback) {
      callback(window.confirm(message)); // eslint-disable-line no-alert
  }
  /**
   * Returns true if the HTML5 history API is supported. Taken from Modernizr.
   *
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
   */ function supportsHistory() {
      var ua = window.navigator.userAgent;
      if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
      return window.history && 'pushState' in window.history;
  }
  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */ function supportsPopStateOnHashChange() {
      return window.navigator.userAgent.indexOf('Trident') === -1;
  }
  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */ function supportsGoWithoutReloadUsingHash() {
      return window.navigator.userAgent.indexOf('Firefox') === -1;
  }
  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */ function isExtraneousPopstateEvent(event) {
      return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  }
  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';
  function getHistoryState() {
      try {
          return window.history.state || {
          };
      } catch (e) {
          // IE 11 sometimes throws when accessing window.history.state
          // See https://github.com/ReactTraining/history/pull/289
          return {
          };
      }
  }
  /**
   * Creates a history object that uses the HTML5 history API including
   * pushState, replaceState, and the popstate event.
   */ function createBrowserHistory(props) {
      var getDOMLocation = function getDOMLocation(historyState) {
          var _ref = historyState || {
          }, key = _ref.key, state = _ref.state;
          var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
          var path = pathname + search + hash;
           false ? undefined : void 0;
          if (basename) path = stripBasename(path, basename);
          return createLocation(path, state, key);
      };
      var createKey = function createKey() {
          return Math.random().toString(36).substr(2, keyLength);
      };
      var setState = function setState(nextState) {
          (0, _extends).default(history, nextState);
          history.length = globalHistory.length;
          transitionManager.notifyListeners(history.location, history.action);
      };
      var handlePopState = function handlePopState(event) {
          // Ignore extraneous popstate events in WebKit.
          if (isExtraneousPopstateEvent(event)) return;
          handlePop(getDOMLocation(event.state));
      };
      var handleHashChange = function handleHashChange() {
          handlePop(getDOMLocation(getHistoryState()));
      };
      var handlePop = function handlePop(location) {
          if (forceNextPop) {
              forceNextPop = false;
              setState();
          } else {
              var action = 'POP';
              transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
                  if (ok) {
                      setState({
                          action: action,
                          location: location
                      });
                  } else {
                      revertPop(location);
                  }
              });
          }
      };
      var revertPop = function revertPop(fromLocation) {
          var toLocation = history.location; // TODO: We could probably make this more reliable by
          // keeping a list of keys we've seen in sessionStorage.
          // Instead, we just default to 0 for keys we don't know.
          var toIndex = allKeys.indexOf(toLocation.key);
          if (toIndex === -1) toIndex = 0;
          var fromIndex = allKeys.indexOf(fromLocation.key);
          if (fromIndex === -1) fromIndex = 0;
          var delta = toIndex - fromIndex;
          if (delta) {
              forceNextPop = true;
              go(delta);
          }
      };
      var createHref = function createHref(location) {
          return basename + createPath(location);
      };
      var push = function push(path, state1) {
           false ? undefined : void 0;
          var action = 'PUSH';
          var location = createLocation(path, state1, createKey(), history.location);
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (!ok) return;
              var href = createHref(location);
              var key = location.key, state = location.state;
              if (canUseHistory) {
                  globalHistory.pushState({
                      key: key,
                      state: state
                  }, null, href);
                  if (forceRefresh) {
                      window.location.href = href;
                  } else {
                      var prevIndex = allKeys.indexOf(history.location.key);
                      var nextKeys = allKeys.slice(0, prevIndex + 1);
                      nextKeys.push(location.key);
                      allKeys = nextKeys;
                      setState({
                          action: action,
                          location: location
                      });
                  }
              } else {
                   false ? undefined : void 0;
                  window.location.href = href;
              }
          });
      };
      var replace = function replace(path, state2) {
           false ? undefined : void 0;
          var action = 'REPLACE';
          var location = createLocation(path, state2, createKey(), history.location);
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (!ok) return;
              var href = createHref(location);
              var key = location.key, state = location.state;
              if (canUseHistory) {
                  globalHistory.replaceState({
                      key: key,
                      state: state
                  }, null, href);
                  if (forceRefresh) {
                      window.location.replace(href);
                  } else {
                      var prevIndex = allKeys.indexOf(history.location.key);
                      if (prevIndex !== -1) allKeys[prevIndex] = location.key;
                      setState({
                          action: action,
                          location: location
                      });
                  }
              } else {
                   false ? undefined : void 0;
                  window.location.replace(href);
              }
          });
      };
      var go = function go(n) {
          globalHistory.go(n);
      };
      var goBack = function goBack() {
          go(-1);
      };
      var goForward = function goForward() {
          go(1);
      };
      var checkDOMListeners = function checkDOMListeners(delta) {
          listenerCount += delta;
          if (listenerCount === 1 && delta === 1) {
              window.addEventListener(PopStateEvent, handlePopState);
              if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
          } else if (listenerCount === 0) {
              window.removeEventListener(PopStateEvent, handlePopState);
              if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
          }
      };
      var block = function block(prompt) {
          if (prompt === void 0) {
              prompt = false;
          }
          var unblock = transitionManager.setPrompt(prompt);
          if (!isBlocked) {
              checkDOMListeners(1);
              isBlocked = true;
          }
          return function() {
              if (isBlocked) {
                  isBlocked = false;
                  checkDOMListeners(-1);
              }
              return unblock();
          };
      };
      var listen = function listen(listener) {
          var unlisten = transitionManager.appendListener(listener);
          checkDOMListeners(1);
          return function() {
              checkDOMListeners(-1);
              unlisten();
          };
      };
      if (props === void 0) {
          props = {
          };
      }
      !canUseDOM ?  false ? undefined : (0, _tinyInvariant).default(false) : void 0;
      var globalHistory = window.history;
      var canUseHistory = supportsHistory();
      var needsHashChangeListener = !supportsPopStateOnHashChange();
      var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
      var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
      var transitionManager = createTransitionManager();
      var forceNextPop = false;
      var initialLocation = getDOMLocation(getHistoryState());
      var allKeys = [
          initialLocation.key
      ]; // Public interface
      var listenerCount = 0;
      var isBlocked = false;
      var history = {
          length: globalHistory.length,
          action: 'POP',
          location: initialLocation,
          createHref: createHref,
          push: push,
          replace: replace,
          go: go,
          goBack: goBack,
          goForward: goForward,
          block: block,
          listen: listen
      };
      return history;
  }
  var HashChangeEvent$1 = 'hashchange';
  var HashPathCoders = {
      hashbang: {
          encodePath: function encodePath(path) {
              return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
          },
          decodePath: function decodePath(path) {
              return path.charAt(0) === '!' ? path.substr(1) : path;
          }
      },
      noslash: {
          encodePath: stripLeadingSlash,
          decodePath: addLeadingSlash
      },
      slash: {
          encodePath: addLeadingSlash,
          decodePath: addLeadingSlash
      }
  };
  function stripHash(url) {
      var hashIndex = url.indexOf('#');
      return hashIndex === -1 ? url : url.slice(0, hashIndex);
  }
  function getHashPath() {
      // We can't use window.location.hash here because it's not
      // consistent across browsers - Firefox will pre-decode it!
      var href = window.location.href;
      var hashIndex = href.indexOf('#');
      return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  }
  function pushHashPath(path) {
      window.location.hash = path;
  }
  function replaceHashPath(path) {
      window.location.replace(stripHash(window.location.href) + '#' + path);
  }
  function createHashHistory(props) {
      var getDOMLocation = function getDOMLocation() {
          var path = decodePath(getHashPath());
           false ? undefined : void 0;
          if (basename) path = stripBasename(path, basename);
          return createLocation(path);
      };
      var setState = function setState(nextState) {
          (0, _extends).default(history, nextState);
          history.length = globalHistory.length;
          transitionManager.notifyListeners(history.location, history.action);
      };
      var locationsAreEqual$$1 = function locationsAreEqual$$1(a, b) {
          return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
      };
      var handleHashChange = function handleHashChange() {
          var path = getHashPath();
          var encodedPath = encodePath(path);
          if (path !== encodedPath) {
              // Ensure we always have a properly-encoded hash.
              replaceHashPath(encodedPath);
          } else {
              var location = getDOMLocation();
              var prevLocation = history.location;
              if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.
              if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.
              ignorePath = null;
              handlePop(location);
          }
      };
      var handlePop = function handlePop(location) {
          if (forceNextPop) {
              forceNextPop = false;
              setState();
          } else {
              var action = 'POP';
              transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
                  if (ok) {
                      setState({
                          action: action,
                          location: location
                      });
                  } else {
                      revertPop(location);
                  }
              });
          }
      };
      var revertPop = function revertPop(fromLocation) {
          var toLocation = history.location; // TODO: We could probably make this more reliable by
          // keeping a list of paths we've seen in sessionStorage.
          // Instead, we just default to 0 for paths we don't know.
          var toIndex = allPaths.lastIndexOf(createPath(toLocation));
          if (toIndex === -1) toIndex = 0;
          var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
          if (fromIndex === -1) fromIndex = 0;
          var delta = toIndex - fromIndex;
          if (delta) {
              forceNextPop = true;
              go(delta);
          }
      } // Ensure the hash is encoded properly before doing anything else.
      ;
      var createHref = function createHref(location) {
          var baseTag = document.querySelector('base');
          var href = '';
          if (baseTag && baseTag.getAttribute('href')) {
              href = stripHash(window.location.href);
          }
          return href + '#' + encodePath(basename + createPath(location));
      };
      var push = function push(path2, state) {
           false ? undefined : void 0;
          var action = 'PUSH';
          var location = createLocation(path2, undefined, undefined, history.location);
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (!ok) return;
              var path = createPath(location);
              var encodedPath = encodePath(basename + path);
              var hashChanged = getHashPath() !== encodedPath;
              if (hashChanged) {
                  // We cannot tell if a hashchange was caused by a PUSH, so we'd
                  // rather setState here and ignore the hashchange. The caveat here
                  // is that other hash histories in the page will consider it a POP.
                  ignorePath = path;
                  pushHashPath(encodedPath);
                  var prevIndex = allPaths.lastIndexOf(createPath(history.location));
                  var nextPaths = allPaths.slice(0, prevIndex + 1);
                  nextPaths.push(path);
                  allPaths = nextPaths;
                  setState({
                      action: action,
                      location: location
                  });
              } else {
                   false ? undefined : void 0;
                  setState();
              }
          });
      };
      var replace = function replace(path3, state) {
           false ? undefined : void 0;
          var action = 'REPLACE';
          var location = createLocation(path3, undefined, undefined, history.location);
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (!ok) return;
              var path = createPath(location);
              var encodedPath = encodePath(basename + path);
              var hashChanged = getHashPath() !== encodedPath;
              if (hashChanged) {
                  // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                  // rather setState here and ignore the hashchange. The caveat here
                  // is that other hash histories in the page will consider it a POP.
                  ignorePath = path;
                  replaceHashPath(encodedPath);
              }
              var prevIndex = allPaths.indexOf(createPath(history.location));
              if (prevIndex !== -1) allPaths[prevIndex] = path;
              setState({
                  action: action,
                  location: location
              });
          });
      };
      var go = function go(n) {
           false ? undefined : void 0;
          globalHistory.go(n);
      };
      var goBack = function goBack() {
          go(-1);
      };
      var goForward = function goForward() {
          go(1);
      };
      var checkDOMListeners = function checkDOMListeners(delta) {
          listenerCount += delta;
          if (listenerCount === 1 && delta === 1) {
              window.addEventListener(HashChangeEvent$1, handleHashChange);
          } else if (listenerCount === 0) {
              window.removeEventListener(HashChangeEvent$1, handleHashChange);
          }
      };
      var block = function block(prompt) {
          if (prompt === void 0) {
              prompt = false;
          }
          var unblock = transitionManager.setPrompt(prompt);
          if (!isBlocked) {
              checkDOMListeners(1);
              isBlocked = true;
          }
          return function() {
              if (isBlocked) {
                  isBlocked = false;
                  checkDOMListeners(-1);
              }
              return unblock();
          };
      };
      var listen = function listen(listener) {
          var unlisten = transitionManager.appendListener(listener);
          checkDOMListeners(1);
          return function() {
              checkDOMListeners(-1);
              unlisten();
          };
      };
      if (props === void 0) {
          props = {
          };
      }
      !canUseDOM ?  false ? undefined : (0, _tinyInvariant).default(false) : void 0;
      var globalHistory = window.history;
      var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
      var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
      var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
      var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath = _HashPathCoders$hashT.encodePath, decodePath = _HashPathCoders$hashT.decodePath;
      var transitionManager = createTransitionManager();
      var forceNextPop = false;
      var ignorePath = null;
      var path1 = getHashPath();
      var encodedPath1 = encodePath(path1);
      if (path1 !== encodedPath1) replaceHashPath(encodedPath1);
      var initialLocation = getDOMLocation();
      var allPaths = [
          createPath(initialLocation)
      ]; // Public interface
      var listenerCount = 0;
      var isBlocked = false;
      var history = {
          length: globalHistory.length,
          action: 'POP',
          location: initialLocation,
          createHref: createHref,
          push: push,
          replace: replace,
          go: go,
          goBack: goBack,
          goForward: goForward,
          block: block,
          listen: listen
      };
      return history;
  }
  function clamp(n, lowerBound, upperBound) {
      return Math.min(Math.max(n, lowerBound), upperBound);
  }
  /**
   * Creates a history object that stores locations in memory.
   */ function createMemoryHistory(props) {
      var setState = function setState(nextState) {
          (0, _extends).default(history, nextState);
          history.length = history.entries.length;
          transitionManager.notifyListeners(history.location, history.action);
      };
      var createKey = function createKey() {
          return Math.random().toString(36).substr(2, keyLength);
      };
      var push = function push(path, state) {
           false ? undefined : void 0;
          var action = 'PUSH';
          var location = createLocation(path, state, createKey(), history.location);
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (!ok) return;
              var prevIndex = history.index;
              var nextIndex = prevIndex + 1;
              var nextEntries = history.entries.slice(0);
              if (nextEntries.length > nextIndex) {
                  nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
              } else {
                  nextEntries.push(location);
              }
              setState({
                  action: action,
                  location: location,
                  index: nextIndex,
                  entries: nextEntries
              });
          });
      };
      var replace = function replace(path, state) {
           false ? undefined : void 0;
          var action = 'REPLACE';
          var location = createLocation(path, state, createKey(), history.location);
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (!ok) return;
              history.entries[history.index] = location;
              setState({
                  action: action,
                  location: location
              });
          });
      };
      var go = function go(n) {
          var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
          var action = 'POP';
          var location = history.entries[nextIndex];
          transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function(ok) {
              if (ok) {
                  setState({
                      action: action,
                      location: location,
                      index: nextIndex
                  });
              } else {
                  // Mimic the behavior of DOM histories by
                  // causing a render after a cancelled POP.
                  setState();
              }
          });
      };
      var goBack = function goBack() {
          go(-1);
      };
      var goForward = function goForward() {
          go(1);
      };
      var canGo = function canGo(n) {
          var nextIndex = history.index + n;
          return nextIndex >= 0 && nextIndex < history.entries.length;
      };
      var block = function block(prompt) {
          if (prompt === void 0) {
              prompt = false;
          }
          return transitionManager.setPrompt(prompt);
      };
      var listen = function listen(listener) {
          return transitionManager.appendListener(listener);
      };
      if (props === void 0) {
          props = {
          };
      }
      var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? [
          '/'
      ] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
      var transitionManager = createTransitionManager();
      var index = clamp(initialIndex, 0, initialEntries.length - 1);
      var entries = initialEntries.map(function(entry) {
          return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
      }); // Public interface
      var createHref = createPath;
      var history = {
          length: entries.length,
          action: 'POP',
          location: entries[index],
          index: index,
          entries: entries,
          createHref: createHref,
          push: push,
          replace: replace,
          go: go,
          goBack: goBack,
          goForward: goForward,
          canGo: canGo,
          block: block,
          listen: listen
      };
      return history;
  }
  exports.createBrowserHistory = createBrowserHistory;
  exports.createHashHistory = createHashHistory;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createLocation = createLocation;
  exports.locationsAreEqual = locationsAreEqual;
  exports.parsePath = parsePath;
  exports.createPath = createPath;
  
  
  /***/ }),
  /* 38 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    };
  
    return _extends.apply(this, arguments);
  }
  
  /***/ }),
  /* 39 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  function isAbsolute(pathname) {
      return pathname.charAt(0) === '/';
  }
  // About 1.5x faster than the two-arg version of Array#splice()
  function spliceOne(list, index) {
      for(var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1){
          list[i] = list[k];
      }
      list.pop();
  }
  // This implementation is based heavily on node's url.parse
  function resolvePathname(to, from) {
      if (from === undefined) from = '';
      var toParts = to && to.split('/') || [];
      var fromParts = from && from.split('/') || [];
      var isToAbs = to && isAbsolute(to);
      var isFromAbs = from && isAbsolute(from);
      var mustEndAbs = isToAbs || isFromAbs;
      if (to && isAbsolute(to)) {
          // to is absolute
          fromParts = toParts;
      } else if (toParts.length) {
          // to is relative, drop the filename
          fromParts.pop();
          fromParts = fromParts.concat(toParts);
      }
      if (!fromParts.length) return '/';
      var hasTrailingSlash;
      if (fromParts.length) {
          var last = fromParts[fromParts.length - 1];
          hasTrailingSlash = last === '.' || last === '..' || last === '';
      } else {
          hasTrailingSlash = false;
      }
      var up = 0;
      for(var i = fromParts.length; i >= 0; i--){
          var part = fromParts[i];
          if (part === '.') {
              spliceOne(fromParts, i);
          } else if (part === '..') {
              spliceOne(fromParts, i);
              up++;
          } else if (up) {
              spliceOne(fromParts, i);
              up--;
          }
      }
      if (!mustEndAbs) for(; up--; up)fromParts.unshift('..');
      if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
      var result = fromParts.join('/');
      if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
      return result;
  }
  var _default = resolvePathname;
  exports.default = _default;
  
  
  /***/ }),
  /* 40 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  function valueOf(obj) {
      return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
  }
  function valueEqual(a, b) {
      // Test for strict equality first.
      if (a === b) return true;
      // Otherwise, if either of them == null they are not equal.
      if (a == null || b == null) return false;
      if (Array.isArray(a)) {
          return Array.isArray(b) && a.length === b.length && a.every(function(item, index) {
              return valueEqual(item, b[index]);
          });
      }
      if (typeof a === 'object' || typeof b === 'object') {
          var aValue = valueOf(a);
          var bValue = valueOf(b);
          if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
          return Object.keys(Object.assign({
          }, a, b)).every(function(key) {
              return valueEqual(a[key], b[key]);
          });
      }
      return false;
  }
  var _default = valueEqual;
  exports.default = _default;
  
  
  /***/ }),
  /* 41 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var isProduction = "production" === 'production';
  function warning(condition, message) {
      if (!isProduction) {
          if (condition) {
              return;
          }
          var text = "Warning: " + message;
          if (typeof console !== 'undefined') {
              console.warn(text);
          }
          try {
              throw Error(text);
          } catch (x) {
          }
      }
  }
  var _default = warning;
  exports.default = _default;
  
  
  /***/ }),
  /* 42 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var isProduction = "production" === 'production';
  var prefix = 'Invariant failed';
  function invariant(condition, message) {
      if (condition) {
          return;
      }
      if (isProduction) {
          throw new Error(prefix);
      }
      var provided = typeof message === 'function' ? message() : message;
      var value = provided ? prefix + ": " + provided : prefix;
      throw new Error(value);
  }
  exports.default = invariant;
  
  
  /***/ }),
  /* 43 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var _constants = __webpack_require__(2);
  var _default = function(createHistory) {
      return function(appConfig, options) {
          if (options === void 0) {
              options = {
                  staticConfig: {
                      routes: []
                  }
              };
          }
          if (!appConfig.router) {
              appConfig.router = _constants.DEFAULT_APP_CONFIG.router;
          }
          var _a = options.initialContext, initialContext = _a === void 0 ? null : _a, _b = options.staticConfig, staticConfig = _b === void 0 ? {
              routes: []
          } : _b;
          var router = appConfig.router;
          var _c = router.type, type = _c === void 0 ? _constants.DEFAULT_APP_CONFIG.router.type : _c, basename = router.basename, customHistory = router.history;
          var location = initialContext ? initialContext.location : null;
          var newHistory = createHistory({
              type: type,
              basename: basename,
              location: location,
              customHistory: customHistory,
              routes: staticConfig.routes
          });
          appConfig.router.history = newHistory;
      };
  };
  exports.default = _default;
  
  
  /***/ }),
  /* 44 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _constants = __webpack_require__(2);
  var _storage = __webpack_require__(3);
  var _router = swcHelpers.interopRequireDefault(__webpack_require__(8));
  var _pageLifeCycles = __webpack_require__(7);
  var _appLifeCycles = __webpack_require__(6);
  function initAppLifeCycles() {
      if (typeof document !== 'undefined' && typeof window !== 'undefined') {
          document.addEventListener('visibilitychange', function() {
              // Get history
              var history = (0, _storage).getHistory();
              var currentPathName = history ? history.location.pathname : _router.default.current.pathname;
              // The app switches from foreground to background
              if (currentPathName === _router.default.current.pathname) {
                  _router.default.current.visibilityState = !_router.default.current.visibilityState;
                  if (_router.default.current.visibilityState) {
                      // Emit app show
                      (0, _appLifeCycles).emit(_constants.SHOW);
                      // Emit page show
                      (0, _pageLifeCycles).emit(_constants.SHOW, _router.default.current.pathname);
                  } else {
                      // Emit page hide
                      (0, _pageLifeCycles).emit(_constants.HIDE, _router.default.current.pathname);
                      // Emit app hide
                      (0, _appLifeCycles).emit(_constants.HIDE);
                  }
              }
          });
          // Emit error lifeCycles
          window.addEventListener('error', function(event) {
              (0, _appLifeCycles).emit(_constants.ERROR, null, event.error);
          });
      }
  }
  var _default = initAppLifeCycles;
  exports.default = _default;
  
  
  /***/ }),
  /* 45 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = _default;
  var swcHelpers = __webpack_require__(0);
  var queryString = swcHelpers.interopRequireWildcard(__webpack_require__(46));
  var _storage = __webpack_require__(3);
  function _default(history) {
      var _a;
      if (history === void 0) {
          history = (0, _storage).getHistory();
      }
      // SSR 会在渲染前通过 setHistory 设置通过 request 信息模拟的 history
      var search = (_a = history === null || history === void 0 ? void 0 : history.location) === null || _a === void 0 ? void 0 : _a.search;
      if (!search && typeof window !== 'undefined') {
          search = window.location.search;
      }
      return queryString.parse(search);
  } //# sourceMappingURL=getSearchParams.js.map
  
  
  /***/ }),
  /* 46 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var swcHelpers = __webpack_require__(0);
  var strictUriEncode = __webpack_require__(47);
  var decodeComponent = __webpack_require__(48);
  var splitOnFirst = __webpack_require__(49);
  var filterObject = __webpack_require__(50);
  var isNullOrUndefined = function(value) {
      return value === null || value === undefined;
  };
  function encoderForArrayFormat(options) {
      switch(options.arrayFormat){
          case 'index':
              return function(key) {
                  return function(result, value) {
                      var index = result.length;
                      if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                          return result;
                      }
                      if (value === null) {
                          return swcHelpers.toConsumableArray(result).concat([
                              [
                                  encode(key, options),
                                  '[',
                                  index,
                                  ']'
                              ].join('')
                          ]);
                      }
                      return swcHelpers.toConsumableArray(result).concat([
                          [
                              encode(key, options),
                              '[',
                              encode(index, options),
                              ']=',
                              encode(value, options)
                          ].join('')
                      ]);
                  };
              };
          case 'bracket':
              return function(key) {
                  return function(result, value) {
                      if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                          return result;
                      }
                      if (value === null) {
                          return swcHelpers.toConsumableArray(result).concat([
                              [
                                  encode(key, options),
                                  '[]'
                              ].join('')
                          ]);
                      }
                      return swcHelpers.toConsumableArray(result).concat([
                          [
                              encode(key, options),
                              '[]=',
                              encode(value, options)
                          ].join('')
                      ]);
                  };
              };
          case 'comma':
          case 'separator':
              return function(key) {
                  return function(result, value) {
                      if (value === null || value === undefined || value.length === 0) {
                          return result;
                      }
                      if (result.length === 0) {
                          return [
                              [
                                  encode(key, options),
                                  '=',
                                  encode(value, options)
                              ].join('')
                          ];
                      }
                      return [
                          [
                              result,
                              encode(value, options)
                          ].join(options.arrayFormatSeparator)
                      ];
                  };
              };
          default:
              return function(key) {
                  return function(result, value) {
                      if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                          return result;
                      }
                      if (value === null) {
                          return swcHelpers.toConsumableArray(result).concat([
                              encode(key, options)
                          ]);
                      }
                      return swcHelpers.toConsumableArray(result).concat([
                          [
                              encode(key, options),
                              '=',
                              encode(value, options)
                          ].join('')
                      ]);
                  };
              };
      }
  }
  function parserForArrayFormat(options) {
      var result;
      switch(options.arrayFormat){
          case 'index':
              return function(key, value, accumulator) {
                  result = /\[(\d*)\]$/.exec(key);
                  key = key.replace(/\[\d*\]$/, '');
                  if (!result) {
                      accumulator[key] = value;
                      return;
                  }
                  if (accumulator[key] === undefined) {
                      accumulator[key] = {
                      };
                  }
                  accumulator[key][result[1]] = value;
              };
          case 'bracket':
              return function(key, value, accumulator) {
                  result = /(\[\])$/.exec(key);
                  key = key.replace(/\[\]$/, '');
                  if (!result) {
                      accumulator[key] = value;
                      return;
                  }
                  if (accumulator[key] === undefined) {
                      accumulator[key] = [
                          value
                      ];
                      return;
                  }
                  accumulator[key] = [].concat(accumulator[key], value);
              };
          case 'comma':
          case 'separator':
              return function(key, value, accumulator) {
                  var isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
                  var isEncodedArray = typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
                  value = isEncodedArray ? decode(value, options) : value;
                  var newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(function(item) {
                      return decode(item, options);
                  }) : value === null ? value : decode(value, options);
                  accumulator[key] = newValue;
              };
          default:
              return function(key, value, accumulator) {
                  if (accumulator[key] === undefined) {
                      accumulator[key] = value;
                      return;
                  }
                  accumulator[key] = [].concat(accumulator[key], value);
              };
      }
  }
  function validateArrayFormatSeparator(value) {
      if (typeof value !== 'string' || value.length !== 1) {
          throw new TypeError('arrayFormatSeparator must be single character string');
      }
  }
  function encode(value, options) {
      if (options.encode) {
          return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
  }
  function decode(value, options) {
      if (options.decode) {
          return decodeComponent(value);
      }
      return value;
  }
  function keysSorter(input) {
      if (Array.isArray(input)) {
          return input.sort();
      }
      if (typeof input === 'object') {
          return keysSorter(Object.keys(input)).sort(function(a, b) {
              return Number(a) - Number(b);
          }).map(function(key) {
              return input[key];
          });
      }
      return input;
  }
  function removeHash(input) {
      var hashStart = input.indexOf('#');
      if (hashStart !== -1) {
          input = input.slice(0, hashStart);
      }
      return input;
  }
  function getHash(url) {
      var hash = '';
      var hashStart = url.indexOf('#');
      if (hashStart !== -1) {
          hash = url.slice(hashStart);
      }
      return hash;
  }
  function extract(input) {
      input = removeHash(input);
      var queryStart = input.indexOf('?');
      if (queryStart === -1) {
          return '';
      }
      return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
          value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
          value = value.toLowerCase() === 'true';
      }
      return value;
  }
  function parse(query, options) {
      options = Object.assign({
          decode: true,
          sort: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          parseNumbers: false,
          parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      var formatter = parserForArrayFormat(options);
      // Create an object with no prototype
      var ret = Object.create(null);
      if (typeof query !== 'string') {
          return ret;
      }
      query = query.trim().replace(/^[?#&]/, '');
      if (!query) {
          return ret;
      }
      for(var _i = 0, _iter = query.split('&'); _i < _iter.length; _i++){
          var param = _iter[_i];
          if (param === '') {
              continue;
          }
          var ref = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='), key = ref[0], value = ref[1];
          // Missing `=` should be `null`:
          // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
          value = value === undefined ? null : [
              'comma',
              'separator'
          ].includes(options.arrayFormat) ? value : decode(value, options);
          formatter(decode(key, options), value, ret);
      }
      for(var _i1 = 0, _iter1 = Object.keys(ret); _i1 < _iter1.length; _i1++){
          var key1 = _iter1[_i1];
          var value1 = ret[key1];
          if (typeof value1 === 'object' && value1 !== null) {
              for(var _i2 = 0, _iter2 = Object.keys(value1); _i2 < _iter2.length; _i2++){
                  var k = _iter2[_i2];
                  value1[k] = parseValue(value1[k], options);
              }
          } else {
              ret[key1] = parseValue(value1, options);
          }
      }
      if (options.sort === false) {
          return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function(result, key) {
          var value = ret[key];
          if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
              // Sort object keys, not values
              result[key] = keysSorter(value);
          } else {
              result[key] = value;
          }
          return result;
      }, Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = function(object, options) {
      if (!object) {
          return '';
      }
      options = Object.assign({
          encode: true,
          strict: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ','
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      var shouldFilter = function(key) {
          return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
      };
      var formatter = encoderForArrayFormat(options);
      var objectCopy = {
      };
      for(var _i = 0, _iter = Object.keys(object); _i < _iter.length; _i++){
          var key = _iter[_i];
          if (!shouldFilter(key)) {
              objectCopy[key] = object[key];
          }
      }
      var keys = Object.keys(objectCopy);
      if (options.sort !== false) {
          keys.sort(options.sort);
      }
      return keys.map(function(key) {
          var value = object[key];
          if (value === undefined) {
              return '';
          }
          if (value === null) {
              return encode(key, options);
          }
          if (Array.isArray(value)) {
              return value.reduce(formatter(key), []).join('&');
          }
          return encode(key, options) + '=' + encode(value, options);
      }).filter(function(x) {
          return x.length > 0;
      }).join('&');
  };
  exports.parseUrl = function(url, options) {
      options = Object.assign({
          decode: true
      }, options);
      var ref = splitOnFirst(url, '#'), url_ = ref[0], hash = ref[1];
      return Object.assign({
          url: url_.split('?')[0] || '',
          query: parse(extract(url), options)
      }, options && options.parseFragmentIdentifier && hash ? {
          fragmentIdentifier: decode(hash, options)
      } : {
      });
  };
  exports.stringifyUrl = function(object, options) {
      options = Object.assign({
          encode: true,
          strict: true
      }, options);
      var url = removeHash(object.url).split('?')[0] || '';
      var queryFromUrl = exports.extract(object.url);
      var parsedQueryFromUrl = exports.parse(queryFromUrl, {
          sort: false
      });
      var query = Object.assign(parsedQueryFromUrl, object.query);
      var queryString = exports.stringify(query, options);
      if (queryString) {
          queryString = "?".concat(queryString);
      }
      var hash = getHash(object.url);
      if (object.fragmentIdentifier) {
          hash = "#".concat(encode(object.fragmentIdentifier, options));
      }
      return "".concat(url).concat(queryString).concat(hash);
  };
  exports.pick = function(input, filter, options) {
      options = Object.assign({
          parseFragmentIdentifier: true
      }, options);
      var ref = exports.parseUrl(input, options), url = ref.url, query = ref.query, fragmentIdentifier = ref.fragmentIdentifier;
      return exports.stringifyUrl({
          url: url,
          query: filterObject(query, filter),
          fragmentIdentifier: fragmentIdentifier
      }, options);
  };
  exports.exclude = function(input, filter, options) {
      var exclusionFilter = Array.isArray(filter) ? function(key) {
          return !filter.includes(key);
      } : function(key, value) {
          return !filter(key, value);
      };
      return exports.pick(input, exclusionFilter, options);
  };
  
  
  /***/ }),
  /* 47 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  module.exports = function(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function(x) {
          return "%".concat(x.charCodeAt(0).toString(16).toUpperCase());
      });
  };
  
  
  /***/ }),
  /* 48 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var swcHelpers = __webpack_require__(0);
  var token = '%[a-f0-9]{2}';
  var singleMatcher = new RegExp(token, 'gi');
  var multiMatcher = new RegExp('(' + token + ')+', 'gi');
  function decodeComponents(components, split) {
      try {
          // Try to decode the entire string first
          return decodeURIComponent(components.join(''));
      } catch (err) {
      // Do nothing
      }
      if (components.length === 1) {
          return components;
      }
      split = split || 1;
      // Split the array in 2 parts
      var left = components.slice(0, split);
      var right = components.slice(split);
      return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
  }
  function decode(input) {
      try {
          return decodeURIComponent(input);
      } catch (err) {
          var tokens = input.match(singleMatcher);
          for(var i = 1; i < tokens.length; i++){
              input = decodeComponents(tokens, i).join('');
              tokens = input.match(singleMatcher);
          }
          return input;
      }
  }
  function customDecodeURIComponent(input) {
      // Keep track of all the replacements and prefill the map with the `BOM`
      var replaceMap = {
          '%FE%FF': '��',
          '%FF%FE': '��'
      };
      var match = multiMatcher.exec(input);
      while(match){
          try {
              // Decode as big chunks as possible
              replaceMap[match[0]] = decodeURIComponent(match[0]);
          } catch (err) {
              var result = decode(match[0]);
              if (result !== match[0]) {
                  replaceMap[match[0]] = result;
              }
          }
          match = multiMatcher.exec(input);
      }
      // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
      replaceMap['%C2'] = '�';
      var entries = Object.keys(replaceMap);
      for(var i = 0; i < entries.length; i++){
          // Replace all decoded components
          var key = entries[i];
          input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
      }
      return input;
  }
  module.exports = function(encodedURI) {
      if (typeof encodedURI !== 'string') {
          throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + (typeof encodedURI === "undefined" ? "undefined" : swcHelpers.typeOf(encodedURI)) + '`');
      }
      try {
          encodedURI = encodedURI.replace(/\+/g, ' ');
          // Try the built in decoder first
          return decodeURIComponent(encodedURI);
      } catch (err) {
          // Fallback to a more advanced decoder
          return customDecodeURIComponent(encodedURI);
      }
  };
  
  
  /***/ }),
  /* 49 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  module.exports = function(string, separator) {
      if (!(typeof string === 'string' && typeof separator === 'string')) {
          throw new TypeError('Expected the arguments to be of type `string`');
      }
      if (separator === '') {
          return [
              string
          ];
      }
      var separatorIndex = string.indexOf(separator);
      if (separatorIndex === -1) {
          return [
              string
          ];
      }
      return [
          string.slice(0, separatorIndex),
          string.slice(separatorIndex + separator.length)
      ];
  };
  
  
  /***/ }),
  /* 50 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  module.exports = function(obj, predicate) {
      var ret = {
      };
      var keys = Object.keys(obj);
      var isArr = Array.isArray(predicate);
      for(var i = 0; i < keys.length; i++){
          var key = keys[i];
          var val = obj[key];
          if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
              ret[key] = val;
          }
      }
      return ret;
  };
  
  
  /***/ }),
  /* 51 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _runtimeModule = swcHelpers.interopRequireDefault(__webpack_require__(15));
  var _constants = __webpack_require__(2);
  var _collectAppLifeCycle = swcHelpers.interopRequireDefault(__webpack_require__(14));
  function mergeDefaultConfig(defaultConfig, config) {
      Object.keys(defaultConfig).forEach(function(key) {
          if (typeof config[key] === 'object' && config[key] !== null) {
              config[key] = mergeDefaultConfig(defaultConfig[key], config[key]);
          } else if (!Object.prototype.hasOwnProperty.call(config, key)) {
              config[key] = defaultConfig[key];
          }
      });
      return config;
  }
  var _default = function(_a) {
      var loadRuntimeModules = _a.loadRuntimeModules, createElement = _a.createElement, _b = _a.runtimeAPI, runtimeAPI = _b === void 0 ? {
      } : _b, _c = _a.runtimeValue, runtimeValue = _c === void 0 ? {
      } : _c;
      var createBaseApp = function createBaseApp(appConfig, buildConfig, context, staticConfig) {
          // Merge default appConfig to user appConfig
          appConfig = mergeDefaultConfig(_constants.DEFAULT_APP_CONFIG, appConfig);
          context.createElement = createElement;
          context.enableRouter = runtimeValue.enableRouter;
          // Load runtime modules
          var runtime = new _runtimeModule.default(appConfig, buildConfig, context, staticConfig);
          Object.keys(runtimeAPI).forEach(function(apiKey) {
              runtime.registerRuntimeAPI(apiKey, runtimeAPI[apiKey]);
          });
          // Assign runtime plugin internal value
          Object.keys(runtimeValue).forEach(function(key) {
              runtime.setRuntimeValue(key, runtimeValue[key]);
          });
          loadRuntimeModules(runtime);
          // Collect app lifeCyle
          (0, _collectAppLifeCycle).default(appConfig);
          return {
              runtime: runtime,
              appConfig: appConfig
          };
      };
      return createBaseApp;
  };
  exports.default = _default;
  
  
  /***/ }),
  /* 52 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.registerNativeEventListeners = registerNativeEventListeners;
  exports.addNativeEventListener = addNativeEventListener;
  exports.removeNativeEventListener = removeNativeEventListener;
  function registerNativeEventListeners(Klass, events) {
  // For rax miniapp runtime babel plugins prev compile
  }
  function addNativeEventListener(eventName, callback) {
      document.addEventListener(eventName, callback);
  }
  function removeNativeEventListener(eventName, callback) {
      document.removeEventListener(eventName, callback);
  } //# sourceMappingURL=nativeEventListener.js.map
  
  
  /***/ }),
  /* 53 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  
  /***/ }),
  /* 54 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  function miniappRenderer(param, param1) {
      var _appConfig = param.appConfig, appConfig = _appConfig === void 0 ? {
      } : _appConfig, buildConfig = param.buildConfig, staticConfig = param.staticConfig, ErrorBoundary = param.ErrorBoundary, _appLifecycle = param.appLifecycle, createBaseApp = _appLifecycle.createBaseApp, emitLifeCycles = _appLifecycle.emitLifeCycles, initAppLifeCycles = _appLifecycle.initAppLifeCycles, mount = param1.mount, unmount = param1.unmount;
      var runtime = createBaseApp(appConfig, buildConfig, {
      }, staticConfig).runtime;
      initAppLifeCycles();
      var _app = appConfig.app, app = _app === void 0 ? {
      } : _app;
      var ErrorBoundaryFallback = app.ErrorBoundaryFallback, onErrorBoundaryHander = app.onErrorBoundaryHander, onErrorBoundaryHandler = app.onErrorBoundaryHandler, errorBoundary = app.errorBoundary, _rootId = app.rootId, rootId = _rootId === void 0 ? 'root' : _rootId;
      ErrorBoundary = errorBoundary ? ErrorBoundary : null;
      var onError = onErrorBoundaryHander || onErrorBoundaryHandler;
      if (onErrorBoundaryHander) {
          console.error('Please use onErrorBoundaryHandler instead of onErrorBoundaryHander');
      }
      // Emit app lifecycles
      emitLifeCycles();
      var pagesRenderInfo = staticConfig.routes.map(function(route) {
          var source = route.source, component = route.component, pageSource = route.pageSource;
          return {
              path: pageSource || source,
              render: function() {
                  // Add page config to page component
                  var Page = component();
                  Page.__pageConfig = route;
                  // Deprecate in rax-app v4.0
                  // miniapp root element is the root node, which avoid developer render extra element to document.body, it will override the page component
                  var rootEl = document.createElement('div');
                  rootEl.setAttribute('id', rootId);
                  var appInstance = mount(getRenderApp(Page, runtime, {
                      ErrorBoundary: ErrorBoundary,
                      ErrorBoundaryFallback: ErrorBoundaryFallback,
                      onError: onError
                  }), rootEl);
                  document.body.appendChild(rootEl);
                  document.__unmount = unmount(appInstance, rootEl);
              },
              setDocument: function(value) {
                  // eslint-disable-next-line no-global-assign
                  document = value;
                  // getApp doesn't exist in plugin situation
                  // @ts-ignore
                  if (typeof getApp === 'function') {
                      // @ts-ignore
                      var MiniAppGlobalInstance = getApp();
                      var dispatchDocumentModify = MiniAppGlobalInstance._dispatchDocumentModify;
                      if (typeof dispatchDocumentModify === 'function') {
                          dispatchDocumentModify.call(MiniAppGlobalInstance, value);
                      }
                  }
              }
          };
      });
      window.__pagesRenderInfo = (window.__pagesRenderInfo || []).concat(pagesRenderInfo);
  }
  function wrapperPage(component, pageWrappers) {
      var Wrapper = (pageWrappers || []).reduce(function(acc, curr) {
          return curr(acc);
      }, component);
      return (0, _rax).createElement(Wrapper, null);
  }
  function getRenderApp(Page, runtime, param) {
      var onError = param.onError, ErrorBoundary = param.ErrorBoundary, ErrorBoundaryFallback = param.ErrorBoundaryFallback;
      var _a, _b;
      var wrapperPageRegistration = (_a = runtime === null || runtime === void 0 ? void 0 : runtime.getWrapperPageRegistration) === null || _a === void 0 ? void 0 : _a.call(runtime);
      var rootApp = wrapperPage(Page, wrapperPageRegistration);
      var AppProvider = (_b = runtime === null || runtime === void 0 ? void 0 : runtime.composeAppProvider) === null || _b === void 0 ? void 0 : _b.call(runtime);
      if (AppProvider) {
          rootApp = (0, _rax).createElement(AppProvider, null, rootApp);
      }
      if (ErrorBoundary) {
          rootApp = (0, _rax).createElement(ErrorBoundary, {
              Fallback: ErrorBoundaryFallback,
              onError: onError
          }, rootApp);
      }
      var App = // For miniapp unmount
      /*#__PURE__*/ function(Component) {
          "use strict";
          swcHelpers.inherits(App, Component);
          function App() {
              swcHelpers.classCallCheck(this, App);
              return swcHelpers.possibleConstructorReturn(this, swcHelpers.getPrototypeOf(App).apply(this, arguments));
          }
          swcHelpers.createClass(App, [
              {
                  key: "render",
                  value: function render() {
                      return rootApp;
                  }
              }
          ]);
          return App;
      }(_rax.Component);
      return (0, _rax).createElement(App, null);
  }
  var _default = miniappRenderer;
  exports.default = _default;
  
  
  /***/ }),
  /* 55 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.getRenderApp = getRenderApp;
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _driverUniversal = swcHelpers.interopRequireDefault(__webpack_require__(17));
  var _initialData = __webpack_require__(19);
  var _parseSearch = swcHelpers.interopRequireDefault(__webpack_require__(59));
  var isKraken = false;
  var isWeex = false;
  var isWeb = true;
  var __assign = (void 0) && (void 0).__assign || function() {
      __assign = Object.assign || function(t) {
          for(var s, i = 1, n = arguments.length; i < n; i++){
              s = arguments[i];
              for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
      var adopt = function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
          });
      };
      return new (P || (P = Promise))(function(resolve, reject) {
          var fulfilled = function fulfilled(value) {
              try {
                  step(generator.next(value));
              } catch (e) {
                  reject(e);
              }
          };
          var rejected = function rejected(value) {
              try {
                  step(generator["throw"](value));
              } catch (e) {
                  reject(e);
              }
          };
          var step = function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          };
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
      var verb = function verb(n) {
          return function(v) {
              return step([
                  n,
                  v
              ]);
          };
      };
      var step = function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while(_)try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [
                  op[0] & 2,
                  t.value
              ];
              switch(op[0]){
                  case 0:
                  case 1:
                      t = op;
                      break;
                  case 4:
                      _.label++;
                      return {
                          value: op[1],
                          done: false
                      };
                  case 5:
                      _.label++;
                      y = op[1];
                      op = [
                          0
                      ];
                      continue;
                  case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                          _ = 0;
                          continue;
                      }
                      if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                          _.label = op[1];
                          break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                          _.label = t[1];
                          t = op;
                          break;
                      }
                      if (t && _.label < t[2]) {
                          _.label = t[2];
                          _.ops.push(op);
                          break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
              }
              op = body.call(thisArg, _);
          } catch (e) {
              op = [
                  6,
                  e
              ];
              y = 0;
          } finally{
              f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
              value: op[0] ? op[1] : void 0,
              done: true
          };
      };
      var _ = {
          label: 0,
          sent: function sent() {
              if (t[0] & 1) throw t[1];
              return t[1];
          },
          trys: [],
          ops: []
      }, f, y, t, g;
      return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
      }), g;
  };
  var driver = _driverUniversal.default;
  function raxAppRenderer(options, renderOptions) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
          var appConfig, buildConfig, appLifecycle, staticConfig, createBaseApp, emitLifeCycles, initAppLifeCycles, context, _c, pathname, search, query, initialContext, _d, _e, runtime, modifiedAppConfig;
          return __generator(this, function(_f) {
              switch(_f.label){
                  case 0:
                      if (!options.appConfig) {
                          options.appConfig = {
                          };
                      }
                      appConfig = options.appConfig, buildConfig = options.buildConfig, appLifecycle = options.appLifecycle, staticConfig = options.staticConfig;
                      createBaseApp = appLifecycle.createBaseApp, emitLifeCycles = appLifecycle.emitLifeCycles, initAppLifeCycles = appLifecycle.initAppLifeCycles;
                      context = {
                      };
                      if (!((_a = window) === null || _a === void 0 ? void 0 : _a.__INITIAL_DATA__)) return [
                          3 /*break*/ ,
                          1
                      ];
                      context.initialData = window.__INITIAL_DATA__.initialData;
                      context.pageInitialProps = window.__INITIAL_DATA__.pageInitialProps;
                      return [
                          3 /*break*/ ,
                          3
                      ];
                  case 1:
                      if (!(isWeb && ((_b = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _b === void 0 ? void 0 : _b.getInitialData))) return [
                          3 /*break*/ ,
                          3
                      ];
                      _c = window.location, pathname = _c.pathname, search = _c.search;
                      query = (0, _parseSearch).default(search);
                      initialContext = {
                          pathname: pathname,
                          query: query
                      };
                      _d = context;
                      return [
                          4 /*yield*/ ,
                          appConfig.app.getInitialData(initialContext)
                      ];
                  case 2:
                      _d.initialData = _f.sent();
                      _f.label = 3;
                  case 3:
                      (0, _initialData).setInitialData(context.initialData);
                      _e = createBaseApp(appConfig, buildConfig, context, staticConfig), runtime = _e.runtime, modifiedAppConfig = _e.appConfig;
                      initAppLifeCycles();
                      // set InitialData, can get the return value through getInitialData method
                      (0, _initialData).setInitialData(context.initialData);
                      // emit app launch cycle
                      emitLifeCycles();
                      return [
                          2 /*return*/ ,
                          _render(runtime, context, __assign(__assign({
                          }, options), {
                              appConfig: modifiedAppConfig
                          }))
                      ];
              }
          });
      });
  }
  function _render(runtime, context, options) {
      var _a;
      var _b = options.appConfig, appConfig = _b === void 0 ? {
      } : _b, buildConfig = options.buildConfig;
      var _c = appConfig.app, rootId = _c.rootId, mountNode = _c.mountNode;
      var webConfig = buildConfig.web || {
      };
      var App = getRenderApp(runtime, options);
      var appMountNode = _getAppMountNode(mountNode, rootId);
      if (runtime === null || runtime === void 0 ? void 0 : runtime.modifyDOMRender) {
          return (_a = runtime === null || runtime === void 0 ? void 0 : runtime.modifyDOMRender) === null || _a === void 0 ? void 0 : _a.call(runtime, {
              App: App,
              appMountNode: appMountNode
          });
      }
      // add process.env.SSR for tree-shaking
      (0, _rax).render((0, _rax).createElement(App, null), appMountNode, {
          driver: driver,
          hydrate: webConfig.hydrate || webConfig.snapshot || webConfig.ssr || webConfig.staticExport
      });
  }
  function _getAppMountNode(mountNode, rootId) {
      if (rootId === void 0) {
          rootId = 'root';
      }
      if (isWeex || isKraken) return null;
      return mountNode || document.getElementById(rootId);
  }
  function getRenderApp(runtime, options) {
      var App = function App() {
          var appComponent = (0, _rax).createElement(AppComponent, null);
          var rootApp = AppProvider ? (0, _rax).createElement(AppProvider, null, appComponent) : appComponent;
          if (TabBar) {
              rootApp = (0, _rax).createElement(_rax.Fragment, null, rootApp, (0, _rax).createElement(TabBar, null));
          }
          if (errorBoundary) {
              return (0, _rax).createElement(ErrorBoundary, {
                  Fallback: ErrorBoundaryFallback,
                  onError: onErrorBoundaryHandler
              }, rootApp);
          }
          return rootApp;
      };
      var _a, _b;
      var ErrorBoundary = options.ErrorBoundary, _c = options.appConfig, appConfig = _c === void 0 ? {
          app: {
          }
      } : _c, TabBar = options.TabBar;
      var _d = appConfig.app, ErrorBoundaryFallback = _d.ErrorBoundaryFallback, onErrorBoundaryHandler = _d.onErrorBoundaryHandler, errorBoundary = _d.errorBoundary;
      var AppProvider = (_a = runtime === null || runtime === void 0 ? void 0 : runtime.composeAppProvider) === null || _a === void 0 ? void 0 : _a.call(runtime);
      var AppComponent = (_b = runtime === null || runtime === void 0 ? void 0 : runtime.getAppComponent) === null || _b === void 0 ? void 0 : _b.call(runtime);
      return App;
  }
  var _default = raxAppRenderer;
  exports.default = _default;
  
  
  /***/ }),
  /* 56 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.setTagNamePrefix = setTagNamePrefix;
  exports.createBody = createBody;
  exports.createEmpty = createEmpty;
  exports.createText = createText;
  exports.updateText = updateText;
  exports.createElement = createElement;
  exports.appendChild = appendChild;
  exports.removeChild = removeChild;
  exports.replaceChild = replaceChild;
  exports.insertAfter = insertAfter;
  exports.insertBefore = insertBefore;
  exports.addEventListener = addEventListener;
  exports.removeEventListener = removeEventListener;
  exports.removeAttribute = removeAttribute;
  exports.setAttribute = setAttribute;
  exports.setStyle = setStyle;
  exports.beforeRender = beforeRender;
  exports.afterRender = afterRender;
  exports.removeChildren = removeChildren;
  Object.defineProperty(exports, /**
   * Set viewport width.
   * @param viewport {Number} Viewport width, default to 750.
  */ "setViewportWidth", {
      enumerable: true,
      get: function() {
          return _styleUnit.setViewportWidth;
      }
  });
  Object.defineProperty(exports, "setUnitPrecision", {
      enumerable: true,
      get: function() {
          return _styleUnit.setUnitPrecision;
      }
  });
  var _styleUnit = __webpack_require__(57);
  var _warning = __webpack_require__(58);
  // fontWeight -> ntw
  // lineHeight|lineClamp -> ne[ch]
  // flex|flexGrow|flexPositive|flexShrink|flexNegative|boxFlex|boxFlexGroup|zIndex -> ex(?:s|g|n|p|$)
  // order -> ^ord
  // zoom -> zoo
  // gridArea|gridRow|gridRowEnd|gridRowSpan|gridRowStart|gridColumn|gridColumnEnd|gridColumnSpan|gridColumnStart -> grid
  // columnCount -> mnc
  // tabSize -> bs
  // orphans -> orp
  // windows -> ows
  // animationIterationCount -> onit
  // borderImageOutset|borderImageSlice|borderImageWidth -> erim
  var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
  var EVENT_PREFIX_REG = /^on[A-Z]/;
  var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
  var HTML = '__html';
  var INNER_HTML = 'innerHTML';
  var CLASS_NAME = 'className';
  var CLASS = 'class';
  var STYLE = 'style';
  var CHILDREN = 'children';
  var TEXT_CONTENT_ATTR = 'textContent';
  var CREATE_ELEMENT = 'createElement';
  var CREATE_COMMENT = 'createComment';
  var CREATE_TEXT_NODE = 'createTextNode';
  var SET_ATTRIBUTE = 'setAttribute';
  var REMOVE_ATTRIBUTE = 'removeAttribute';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;
  var TEXT_SPLIT_COMMENT = '|';
  var EMPTY = '';
  var HYDRATION_INDEX = '__i';
  var HYDRATION_APPEND = '__a';
  var WITH_INNERHTML = '__h';
  var __DEV__ = "production" !== 'production';
  var tagNamePrefix = EMPTY; // Flag indicating if the diff is currently within an SVG
  var isSVGMode = false;
  var isHydrating = false;
  /**
   * Camelize CSS property.
   * Vendor prefixes should begin with a capital letter.
   * For example:
   * background-color -> backgroundColor
   * -webkit-transition -> webkitTransition
   */ var camelizeStyleName = (0, _styleUnit).cached(function(name) {
      return name.replace(/-([a-z])/gi, function(s, g) {
          return g.toUpperCase();
      });
  });
  var isDimensionalProp = (0, _styleUnit).cached(function(prop) {
      return !NON_DIMENSIONAL_REG.test(prop);
  });
  var isEventProp = (0, _styleUnit).cached(function(prop) {
      return EVENT_PREFIX_REG.test(prop);
  });
  function setTagNamePrefix(prefix) {
      tagNamePrefix = prefix;
  }
  function createBody() {
      return document.body;
  }
  function createEmpty(component) {
      var parent = component._parent;
      var node;
      if (isHydrating) {
          var hydrationChild = findHydrationChild(parent);
          if (hydrationChild) {
              if (hydrationChild.nodeType === COMMENT_NODE) {
                  return hydrationChild;
              } else {
                  node = document[CREATE_COMMENT](EMPTY);
                  replaceChild(node, hydrationChild, parent);
              }
          } else {
              node = document[CREATE_COMMENT](EMPTY);
              node[HYDRATION_APPEND] = true;
          }
      } else {
          node = document[CREATE_COMMENT](EMPTY);
      }
      return node;
  }
  function createText(text, component) {
      var parent = component._parent;
      var node;
      if (isHydrating) {
          var hydrationChild = findHydrationChild(parent);
          if (hydrationChild) {
              if (hydrationChild.nodeType === TEXT_NODE) {
                  if (text !== hydrationChild[TEXT_CONTENT_ATTR]) {
                      hydrationChild[TEXT_CONTENT_ATTR] = text;
                  }
                  return hydrationChild;
              } else {
                  node = document[CREATE_TEXT_NODE](text);
                  replaceChild(node, hydrationChild, parent);
              }
          } else {
              node = document[CREATE_TEXT_NODE](text);
              node[HYDRATION_APPEND] = true;
          }
      } else {
          node = document[CREATE_TEXT_NODE](text);
      }
      return node;
  }
  function updateText(node, text) {
      node[TEXT_CONTENT_ATTR] = text;
  }
  function findHydrationChild(parent) {
      var childNodes = parent.childNodes;
      if (parent[HYDRATION_INDEX] == null) {
          parent[HYDRATION_INDEX] = 0;
      }
      var child = childNodes[parent[HYDRATION_INDEX]++]; // If child is an comment node for spliting text node, use the next node.
      if (child && child.nodeType === COMMENT_NODE && child.data === TEXT_SPLIT_COMMENT) {
          return childNodes[parent[HYDRATION_INDEX]++];
      } else {
          return child;
      }
  }
  function createElement(type, props, component, __shouldConvertUnitlessToRpx) {
      var createNode = function createNode() {
          if (isSVGMode) {
              node = document.createElementNS(SVG_NS, type);
          } else if (tagNamePrefix) {
              var _tagNamePrefix = typeof _tagNamePrefix === 'function' ? _tagNamePrefix(type) : _tagNamePrefix;
              node = document[CREATE_ELEMENT](_tagNamePrefix + type);
          } else {
              node = document[CREATE_ELEMENT](type);
          }
      };
      var parent = component._parent;
      isSVGMode = type === 'svg' || parent && parent.namespaceURI === SVG_NS;
      var node;
      var hydrationChild = null;
      if (isHydrating) {
          hydrationChild = findHydrationChild(parent);
          if (hydrationChild) {
              if (type === hydrationChild.nodeName.toLowerCase()) {
                  for(var attributes = hydrationChild.attributes, i = attributes.length; i--;){
                      var attribute = attributes[i];
                      var attributeName = attribute.name;
                      var propValue = props[attributeName];
                      if (attributeName === CLASS && props[CLASS_NAME] == null && propValue == null || attributeName === STYLE && (propValue == null || Object.keys(propValue).length === 0) || attributeName !== CLASS && attributeName !== STYLE && propValue == null) {
                          hydrationChild[REMOVE_ATTRIBUTE](attributeName);
                          continue;
                      }
                      if (attributeName === STYLE) {
                          // Remove invalid style prop, and direct reset style to child avoid diff style
                          // Set style to empty will change the index of style, so here need to traverse style backwards
                          for(var l = hydrationChild.style.length; 0 < l; l--){
                              // Prop name get from node style is hyphenated, eg: background-color
                              var stylePropName = hydrationChild.style[l - 1]; // Style with webkit prefix, will cause stylePropName be undefined in iOS 10.1 and 10.2.
                              // Eg. when set transition-timing-function to be empty, it will also delete -webkit-transition-timing-function.
                              if (stylePropName) {
                                  var camelizedStyleName = camelizeStyleName(stylePropName);
                                  if (propValue[camelizedStyleName] == null) {
                                      hydrationChild.style[camelizedStyleName] = EMPTY;
                                  }
                              }
                          }
                      }
                  }
                  node = hydrationChild;
              } else {
                  createNode();
                  replaceChild(node, hydrationChild, parent);
                  if (__DEV__) {
                      (0, _warning).warnForReplacedHydratebleElement(parent, node, hydrationChild);
                  }
              }
          } else {
              createNode();
              node[HYDRATION_APPEND] = true;
              if (__DEV__) {
                  (0, _warning).warnForInsertedHydratedElement(parent, node);
              }
          }
      } else {
          createNode();
      }
      for(var prop in props){
          var value = props[prop];
          if (prop === CHILDREN) continue;
          if (value != null) {
              if (prop === STYLE) {
                  setStyle(node, value, __shouldConvertUnitlessToRpx);
              } else if (isEventProp(prop)) {
                  addEventListener(node, prop.slice(2).toLowerCase(), value, component);
              } else {
                  setAttribute(node, prop, value, isSVGMode);
              }
          }
      }
      return node;
  }
  function appendChild(node, parent) {
      if (!isHydrating || node[HYDRATION_APPEND]) {
          return parent.appendChild(node);
      }
  }
  function removeChild(node, parent) {
      parent = parent || node.parentNode; // Maybe has been removed when remove child
      if (parent) {
          parent.removeChild(node);
      }
  }
  function replaceChild(newChild, oldChild, parent) {
      parent = parent || oldChild.parentNode;
      parent.replaceChild(newChild, oldChild);
  }
  function insertAfter(node, after, parent) {
      parent = parent || after.parentNode;
      var nextSibling = after.nextSibling;
      if (nextSibling) {
          // Performance improve when node has been existed before nextSibling
          if (nextSibling !== node) {
              insertBefore(node, nextSibling, parent);
          }
      } else {
          appendChild(node, parent);
      }
  }
  function insertBefore(node, before, parent) {
      parent = parent || before.parentNode;
      parent.insertBefore(node, before);
  }
  function addEventListener(node, eventName, eventHandler) {
      return node.addEventListener(eventName, eventHandler);
  }
  function removeEventListener(node, eventName, eventHandler) {
      return node.removeEventListener(eventName, eventHandler);
  }
  function removeAttribute(node, propKey) {
      if (propKey === DANGEROUSLY_SET_INNER_HTML) {
          return node[INNER_HTML] = null;
      }
      if (propKey === CLASS_NAME) propKey = CLASS;
      if (propKey in node) {
          try {
              // Some node property is readonly when in strict mode
              node[propKey] = null;
          } catch (e) {
          }
      }
      node[REMOVE_ATTRIBUTE](propKey);
  }
  function setAttribute(node, propKey, propValue, isSvg) {
      if (propKey === DANGEROUSLY_SET_INNER_HTML) {
          // For reduce innerHTML operation to improve performance.
          if (node[INNER_HTML] !== propValue[HTML]) {
              node[INNER_HTML] = propValue[HTML];
          }
          node[WITH_INNERHTML] = true;
          return;
      }
      if (propKey === CLASS_NAME) propKey = CLASS; // Prop for svg can only be set by attribute
      if (!isSvg && propKey in node) {
          try {
              // Some node property is readonly when in strict mode
              node[propKey] = propValue;
          } catch (e) {
              node[SET_ATTRIBUTE](propKey, propValue);
          }
      } else {
          node[SET_ATTRIBUTE](propKey, propValue);
      }
  }
  function setStyle(node, style, __shouldConvertUnitlessToRpx) {
      for(var prop in style){
          var value = style[prop];
          var convertedValue = void 0;
          if (typeof value === 'number' && isDimensionalProp(prop)) {
              if (__shouldConvertUnitlessToRpx) {
                  convertedValue = value + 'rpx'; // Transfrom rpx to vw
                  convertedValue = (0, _styleUnit).convertUnit(convertedValue);
              } else {
                  convertedValue = value + 'px';
              }
          } else {
              convertedValue = (0, _styleUnit).convertUnit(value);
          } // Support CSS custom properties (variables) like { --main-color: "black" }
          if (prop[0] === '-' && prop[1] === '-') {
              // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
              // style.setProperty do not support Camel-Case style properties.
              node.style.setProperty(prop, convertedValue);
          } else {
              node.style[prop] = convertedValue;
          }
      }
  }
  function beforeRender(_ref) {
      var hydrate = _ref.hydrate;
      // Nested render may reset `isHydrating`, `recolectHydrationChild` will not work correctly after render.
      if (isHydrating && !hydrate) {
          if (__DEV__) {
              throw new Error('Nested render is not allowed when hydrating. ' + 'If necessary, trigger render in useEffect.');
          } else {
              throw new Error('Nested render found.');
          }
      }
      isHydrating = hydrate;
  }
  function recolectHydrationChild(hydrationParent) {
      // Should not to compare node with dangerouslySetInnerHTML because vdomLength is alway 0
      if (hydrationParent[WITH_INNERHTML]) {
          return;
      }
      var nativeLength = hydrationParent.childNodes.length;
      var vdomLength = hydrationParent[HYDRATION_INDEX] || 0;
      if (nativeLength - vdomLength > 0) {
          for(var i = nativeLength - 1; i >= vdomLength; i--){
              if (__DEV__) {
                  (0, _warning).warnForDeletedHydratableElement(hydrationParent, hydrationParent.childNodes[i]);
              }
              hydrationParent.removeChild(hydrationParent.childNodes[i]);
          }
      }
      for(var j = hydrationParent.childNodes.length - 1; j >= 0; j--){
          recolectHydrationChild(hydrationParent.childNodes[j]);
      }
  }
  function afterRender(_ref2) {
      var container = _ref2.container;
      if (isHydrating) {
          // Remove native node when more then vdom node
          recolectHydrationChild(container);
          isHydrating = false;
      }
  }
  function removeChildren(node) {
      node.textContent = EMPTY;
  }
  
  
  /***/ }),
  /* 57 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.isRpx = isRpx;
  exports.calcRpx = calcRpx;
  exports.getRpx = getRpx;
  exports.setRpx = setRpx;
  exports.getViewportWidth = getViewportWidth;
  exports.setViewportWidth = setViewportWidth;
  exports.setDecimalPixelTransformer = setDecimalPixelTransformer;
  exports.setUnitPrecision = setUnitPrecision;
  exports.cached = cached;
  exports.setTargetPlatform = setTargetPlatform;
  exports.convertUnit = void 0;
  var swcHelpers = __webpack_require__(0);
  var isWeex = false;
  var isWeb = true;
  var RPX_REG = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)rpx/g;
  var __rpx_coefficient__;
  var __viewport_width__; // convertUnit method targetPlatform
  var targetPlatform = isWeb ? 'web' : isWeex ? 'weex' : ''; // Init toFixed method
  var unitPrecision = 4;
  var toFixed = function toFixed(number, precision) {
      var multiplier = Math.pow(10, precision + 1);
      var wholeNumber = Math.floor(number * multiplier);
      return Math.round(wholeNumber / 10) * 10 / multiplier;
  }; // Dedault decimal px transformer.
  var decimalPixelTransformer = function decimalPixelTransformer(rpx, $1) {
      return $1 ? parseFloat(rpx) * getRpx() + 'px' : rpx;
  }; // Default decimal vw transformer.
  var decimalVWTransformer = function decimalVWTransformer(rpx, $1) {
      return $1 ? toFixed(parseFloat(rpx) / (getViewportWidth() / 100), unitPrecision) + 'vw' : rpx;
  }; // Default 1 rpx to 1 px
  if (getRpx() === undefined) {
      setRpx(1);
  } // Viewport width, default to 750.
  if (getViewportWidth() === undefined) {
      setViewportWidth(750);
  }
  var CustomMap1 = /*#__PURE__*/ function() {
      var CustomMap = function CustomMap() {
          this.__store = {
          };
      };
      var _proto = CustomMap.prototype;
      _proto.set = function set(key, value) {
          this.__store[key + "_" + (typeof key === "undefined" ? "undefined" : swcHelpers.typeOf(key))] = value;
      };
      _proto.get = function get(key) {
          return this.__store[key + "_" + (typeof key === "undefined" ? "undefined" : swcHelpers.typeOf(key))];
      };
      _proto.has = function has(key) {
          return Object.prototype.hasOwnProperty.call(this.__store, key + "_" + (typeof key === "undefined" ? "undefined" : swcHelpers.typeOf(key)));
      };
      return CustomMap;
  }();
  function isRpx(str) {
      return typeof str === 'string' && RPX_REG.test(str);
  }
  function calcRpx(str) {
      if (targetPlatform === 'web') {
          // In Web convert rpx to 'vw', same as driver-dom and driver-universal
          // '375rpx' => '50vw'
          return str.replace(RPX_REG, decimalVWTransformer);
      } else if (targetPlatform === 'weex') {
          // In Weex convert rpx to 'px'
          // '375rpx' => 375 * px
          return str.replace(RPX_REG, decimalPixelTransformer);
      } else {
          // Other platform return original value, like Mini-App and WX Mini-Program ...
          // '375rpx' => '375rpx'
          return str;
      }
  }
  function getRpx() {
      return __rpx_coefficient__;
  }
  function setRpx(rpx) {
      __rpx_coefficient__ = rpx;
  }
  function getViewportWidth() {
      return __viewport_width__;
  }
  function setViewportWidth(viewport) {
      __viewport_width__ = viewport;
  }
  function setDecimalPixelTransformer(transformer) {
      decimalPixelTransformer = transformer;
  }
  function setUnitPrecision(n) {
      unitPrecision = n;
  }
  function cached(fn) {
      var cache = new CustomMap1();
      return function cachedFn() {
          var key = arguments.length <= 0 ? undefined : arguments[0];
          if (!cache.has(key)) cache.set(key, fn.apply(void 0, arguments));
          return cache.get(key);
      };
  }
  function setTargetPlatform(platform) {
      targetPlatform = platform;
  }
  var convertUnit = cached(function(value, prop, platform) {
      if (platform) {
          setTargetPlatform(platform);
      }
      return isRpx(value) ? calcRpx(value) : value;
  });
  exports.convertUnit = convertUnit;
  
  
  /***/ }),
  /* 58 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.warnForReplacedHydratebleElement = warnForReplacedHydratebleElement;
  exports.warnForDeletedHydratableElement = warnForDeletedHydratableElement;
  exports.warnForInsertedHydratedElement = warnForInsertedHydratedElement;
  exports.warning = void 0;
  var didWarnInvalidHydration = false;
  var __DEV__ = "production" !== 'production';
  function warnForReplacedHydratebleElement(parentNode, clientNode, serverNode) {
      if (__DEV__) {
          if (didWarnInvalidHydration) {
              return;
          } // should not warn for replace comment, bescause it may be a placeholder from server
          if (serverNode.nodeType === 8) {
              return;
          }
          didWarnInvalidHydration = true;
          warning('Expected server HTML to contain a matching %s in %s, but got %s.', getNodeName(clientNode), getNodeName(parentNode), getNodeName(serverNode));
      }
  }
  function warnForDeletedHydratableElement(parentNode, child) {
      if (__DEV__) {
          if (didWarnInvalidHydration) {
              return;
          }
          didWarnInvalidHydration = true;
          warning('Did not expect server HTML to contain a %s in %s.', getNodeName(child), getNodeName(parentNode));
      }
  }
  function warnForInsertedHydratedElement(parentNode, node) {
      if (__DEV__) {
          if (didWarnInvalidHydration) {
              return;
          }
          didWarnInvalidHydration = true;
          warning('Expected server HTML to contain a matching %s in %s.', getNodeName(node), getNodeName(parentNode));
      }
  }
  /**
   * Concat tagName、 id and class info to help locate a node
   * @param {*} node HTMLElement
   * @returns {string} for example: <div#home.rax-view.home>
   */ function getNodeName(node) {
      // text node don`t have tagName
      if (!node.tagName) {
          return node.nodeName;
      }
      var name = node.tagName.toLowerCase();
      var id = node.id ? '#' + node.id : '';
      var classStr = node.className || '';
      var classList = classStr.split(' ').map(function(className) {
          return className ? '.' + className : '';
      });
      return "<" + name + id + classList.join('') + ">";
  }
  var warning = function warning() {
  };
  exports.warning = warning;
  if (false) {}
  
  
  /***/ }),
  /* 59 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = _default;
  function _default(search) {
      var results = search.substr(1).split('&');
      var query = {
      };
      results.forEach(function(result) {
          var _a = result.split('='), key = _a[0], value = _a[1];
          query[key] = value;
      });
      return query;
  } //# sourceMappingURL=parseSearch.js.map
  
  
  /***/ }),
  /* 60 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _runtimeJs = swcHelpers.interopRequireDefault(__webpack_require__(21));
  function loadRuntimeModules(runtime) {
      runtime.loadModule(_runtimeJs.default);
  }
  var _default = loadRuntimeModules;
  exports.default = _default;
  
  
  /***/ }),
  /* 61 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  exports.__esModule = true;
  var _env = __webpack_require__(62);
  Object.keys(_env).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _env[key]) return;
      exports[key] = _env[key];
  });
  
  
  /***/ }),
  /* 62 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(process, global) {
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = exports.isQuickApp = exports.isWeChatMiniProgram = exports.isKuaiShouMiniProgram = exports.isBaiduSmartProgram = exports.isByteDanceMicroApp = exports.isMiniApp = exports.isKraken = exports.isWeex = exports.isNode = exports.isWeb = void 0;
  var isWeb = typeof window !== 'undefined' && 'onload' in window;
  exports.isWeb = isWeb;
  var isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
  exports.isNode = isNode;
  var isWeex = typeof WXEnvironment !== 'undefined' && WXEnvironment.platform !== 'Web';
  exports.isWeex = isWeex;
  var isKraken = typeof __kraken__ !== 'undefined';
  exports.isKraken = isKraken;
  var isMiniApp = typeof my !== 'undefined' && my !== null && typeof my.alert !== 'undefined';
  exports.isMiniApp = isMiniApp;
  var isByteDanceMicroApp = typeof tt !== 'undefined' && tt !== null && typeof tt.showToast !== 'undefined';
  exports.isByteDanceMicroApp = isByteDanceMicroApp;
  var isBaiduSmartProgram = typeof swan !== 'undefined' && swan !== null && typeof swan.showToast !== 'undefined';
  exports.isBaiduSmartProgram = isBaiduSmartProgram;
  var isKuaiShouMiniProgram = typeof ks !== 'undefined' && ks !== null && typeof ks.showToast !== 'undefined'; // In wechat mini program, wx.login is a function
  exports.isKuaiShouMiniProgram = isKuaiShouMiniProgram;
  var isWeChatMiniProgram = !isByteDanceMicroApp && typeof wx !== 'undefined' && wx !== null && (typeof wx.request !== 'undefined' || typeof wx.miniProgram !== 'undefined');
  exports.isWeChatMiniProgram = isWeChatMiniProgram;
  var isQuickApp = typeof global !== 'undefined' && global !== null && typeof global.callNative !== 'undefined' && !isWeex;
  exports.isQuickApp = isQuickApp;
  var _default = {
      isWeb: isWeb,
      isNode: isNode,
      isWeex: isWeex,
      isKraken: isKraken,
      isMiniApp: isMiniApp,
      isByteDanceMicroApp: isByteDanceMicroApp,
      isBaiduSmartProgram: isBaiduSmartProgram,
      isKuaiShouMiniProgram: isKuaiShouMiniProgram,
      isWeChatMiniProgram: isWeChatMiniProgram,
      isQuickApp: isQuickApp
  };
  exports.default = _default;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4), __webpack_require__(22)))
  
  /***/ }),
  /* 63 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(global) {
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.APP_MODE = exports.config = void 0;
  var swcHelpers = __webpack_require__(0);
  var userConfig = {
      default: {
      }
  };
  //
  var globalPolyfill = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {
  };
  var config = swcHelpers.objectSpread({
  }, userConfig.default || {
  }, userConfig[globalPolyfill.__app_mode__ || "build"] || {
  });
  var APP_MODE = globalPolyfill.__app_mode__ || "build";
  exports.config = config;
  exports.APP_MODE = APP_MODE;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))
  
  /***/ }),
  /* 64 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  // export console to compat with `import { logger } from 'ice';`
  var logger = {
      trace: console.trace,
      debug: console.debug,
      info: console.info,
      warn: console.warn,
      error: console.error
  };
  var _default = logger;
  exports.default = _default;
  
  
  /***/ }),
  /* 65 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  Object.defineProperty(exports, "withRouter", {
      enumerable: true,
      get: function() {
          return _raxUseRouter.withRouter;
      }
  });
  Object.defineProperty(exports, "history", {
      enumerable: true,
      get: function() {
          return _createAppShared.history;
      }
  });
  Object.defineProperty(exports, "getHistory", {
      enumerable: true,
      get: function() {
          return _createAppShared.getHistory;
      }
  });
  Object.defineProperty(exports, "setHistory", {
      enumerable: true,
      get: function() {
          return _createAppShared.setHistory;
      }
  });
  var _raxUseRouter = __webpack_require__(23);
  var _createAppShared = __webpack_require__(5);
  
  
  /***/ }),
  /* 66 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  Object.defineProperty(exports, "getSearchParams", {
      enumerable: true,
      get: function() {
          return _createAppShared.getSearchParams;
      }
  });
  Object.defineProperty(exports, "emitLifeCycles", {
      enumerable: true,
      get: function() {
          return _createAppShared.emitLifeCycles;
      }
  });
  Object.defineProperty(exports, "getInitialData", {
      enumerable: true,
      get: function() {
          return _raxAppRenderer.getInitialData;
      }
  });
  Object.defineProperty(exports, "withPageLifeCycle", {
      enumerable: true,
      get: function() {
          return _createAppShared.withPageLifeCycle;
      }
  });
  Object.defineProperty(exports, // events api
  "registerNativeEventListeners", {
      enumerable: true,
      get: function() {
          return _createAppShared.registerNativeEventListeners;
      }
  });
  Object.defineProperty(exports, "addNativeEventListener", {
      enumerable: true,
      get: function() {
          return _createAppShared.addNativeEventListener;
      }
  });
  Object.defineProperty(exports, "removeNativeEventListener", {
      enumerable: true,
      get: function() {
          return _createAppShared.removeNativeEventListener;
      }
  });
  Object.defineProperty(exports, "ErrorBoundary", {
      enumerable: true,
      get: function() {
          return _errorBoundary.default;
      }
  });
  exports.usePageHide = exports.usePageShow = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _createAppShared = __webpack_require__(5);
  var _raxAppRenderer = __webpack_require__(9);
  var _errorBoundary = swcHelpers.interopRequireDefault(__webpack_require__(11));
  var ref = (0, _createAppShared).createUsePageLifeCycle({
      useEffect: _rax.useEffect
  }), usePageShow = ref.usePageShow, usePageHide = ref.usePageHide;
  exports.// LifeCycles api
  usePageShow = usePageShow;
  exports.usePageHide = usePageHide;
  
  
  /***/ }),
  /* 67 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var _rax = __webpack_require__(1);
  var toTitle = function(error) {
      return "".concat(error.toString());
  };
  var style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '100px 0',
      color: '#ed3131'
  };
  var ErrorBoundaryFallback = function(param) {
      var error = param.error;
      return(/*#__PURE__*/ (0, _rax).createElement("div", {
          style: style,
          title: toTitle(error)
      }, /*#__PURE__*/ (0, _rax).createElement("svg", {
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "843",
          width: "60",
          height: "60"
      }, /*#__PURE__*/ (0, _rax).createElement("path", {
          d: "M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z",
          "p-id": "844",
          fill: "#cdcdcd"
      }), /*#__PURE__*/ (0, _rax).createElement("path", {
          d: "M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z",
          "p-id": "845",
          fill: "#cdcdcd"
      })), /*#__PURE__*/ (0, _rax).createElement("h3", null, "Oops! Something went wrong.")));
  };
  var _default = ErrorBoundaryFallback;
  exports.default = _default;
  
  
  /***/ }),
  /* 68 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(process) {
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.runApp = runApp;
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _createAppShared = __webpack_require__(5);
  var _miniappRenderer = swcHelpers.interopRequireDefault(__webpack_require__(16));
  var _raxAppRenderer = swcHelpers.interopRequireDefault(__webpack_require__(9));
  var _loadStaticModules = swcHelpers.interopRequireDefault(__webpack_require__(20));
  var _loadRuntimeModules = swcHelpers.interopRequireDefault(__webpack_require__(69));
  var _appConfig = __webpack_require__(26);
  var _errorBoundary = swcHelpers.interopRequireDefault(__webpack_require__(11));
  var _render = __webpack_require__(27);
  var _staticConfig = swcHelpers.interopRequireDefault(__webpack_require__(28));
  var isNode = false;
  var isWeb = true;
  var isKuaiShouMiniProgram = false;
  var isBaiduSmartProgram = false;
  var isByteDanceMicroApp = false;
  var isWeChatMiniProgram = false;
  var isMiniApp = false;
  var staticConfig = _staticConfig.default;
  var inMiniApp = (isMiniApp || isWeChatMiniProgram || isByteDanceMicroApp || isBaiduSmartProgram || isKuaiShouMiniProgram) && !isWeb;
  var buildConfig = {
      mpa: false,
      web: {
          mpa: true
      },
      icestarkType: 'normal'
  };
  var runtimeValue = {
  };
  runtimeValue.enableRouter = true;
  var frameworkAppBase = (0, _createAppShared).createBaseApp({
      loadRuntimeModules: _loadRuntimeModules.default,
      createElement: _rax.createElement,
      runtimeAPI: {
          createHistory: _createAppShared.createHistory
      },
      runtimeValue: runtimeValue
  });
  function runApp(appConfig, customStaticConfig) {
      // server bundle will to get appConfig after run runApp
      (0, _appConfig).setAppConfig(appConfig);
      // load static modules before init runtime such as request
      (0, _loadStaticModules).default(appConfig);
      if (customStaticConfig) {
          staticConfig = customStaticConfig;
      }
      // set History before GID
      _createAppShared.initHistory && (0, _createAppShared).initHistory(appConfig, {
          staticConfig: staticConfig
      });
      if (process.env.__IS_SERVER__ || isNode) return;
      var renderer;
      if (inMiniApp) {
          renderer = _miniappRenderer.default;
      } else {
          renderer = _raxAppRenderer.default;
      }
      renderer({
          appConfig: appConfig,
          buildConfig: buildConfig,
          staticConfig: staticConfig,
          ErrorBoundary: _errorBoundary.default,
          appLifecycle: {
              createBaseApp: frameworkAppBase,
              initAppLifeCycles: _createAppShared.initAppLifeCycles,
              emitLifeCycles: _createAppShared.emitLifeCycles
          }
      }, {
          mount: _render.mount,
          unmount: _render.unmount
      });
  }
  var _default = {
      createBaseApp: frameworkAppBase,
      staticConfig: staticConfig,
      enableRouter: true
  };
  exports.default = _default;
  
  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))
  
  /***/ }),
  /* 69 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _runtimeJs = swcHelpers.interopRequireDefault(__webpack_require__(21));
  var _runtimeJs1 = swcHelpers.interopRequireDefault(__webpack_require__(70));
  function loadRuntimeModules(runtime) {
      runtime.loadModule(_runtimeJs.default);
      runtime.loadModule(_runtimeJs1.default);
  }
  var _default = loadRuntimeModules;
  exports.default = _default;
  
  
  /***/ }),
  /* 70 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _regeneratorRuntime = swcHelpers.interopRequireDefault(__webpack_require__(71));
  var _rax = __webpack_require__(1);
  var _raxApp = __webpack_require__(10);
  var _keepAliveRouter = swcHelpers.interopRequireDefault(__webpack_require__(72));
  var _staticRouter = swcHelpers.interopRequireDefault(__webpack_require__(73));
  var _router = swcHelpers.interopRequireDefault(__webpack_require__(74));
  var _tabBar = swcHelpers.interopRequireDefault(__webpack_require__(75));
  var isWeChatMiniProgram = false;
  var isKuaiShouMiniProgram = false;
  var isByteDanceMicroApp = false;
  var isBaiduSmartProgram = false;
  var isMiniApp = false;
  var isWeb = true;
  var isNode = false;
  var __awaiter = (void 0) && (void 0).__awaiter || function(thisArg, _arguments, P, generator) {
      var adopt = function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
          });
      };
      return new (P || (P = Promise))(function(resolve, reject) {
          var fulfilled = function fulfilled(value) {
              try {
                  step(generator.next(value));
              } catch (e) {
                  reject(e);
              }
          };
          var rejected = function rejected(value) {
              try {
                  step(generator["throw"](value));
              } catch (e) {
                  reject(e);
              }
          };
          var step = function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          };
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __rest = (void 0) && (void 0).__rest || function(s, e) {
      var t = {
      };
      for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
  };
  var isMiniAppPlatform = (isMiniApp || isBaiduSmartProgram || isByteDanceMicroApp || isWeChatMiniProgram || isKuaiShouMiniProgram) && !isWeb;
  var _default = function(api) {
      return __awaiter(void 0, void 0, void 0, _regeneratorRuntime.default.mark(function _callee() {
          var appConfig, staticConfig, setRenderApp, modifyRoutes, getRuntimeValue, appRoutes, tmp, appConfigRouter, history, TabBar, tabBarConfig, renderRouter;
          return _regeneratorRuntime.default.wrap(function _callee$(_ctx) {
              while(1)switch(_ctx.prev = _ctx.next){
                  case 0:
                      if (!isMiniAppPlatform) {
                          _ctx.next = 2;
                          break;
                      }
                      return _ctx.abrupt("return");
                  case 2:
                      appConfig = api.appConfig, staticConfig = api.staticConfig, setRenderApp = api.setRenderApp, modifyRoutes = api.modifyRoutes, getRuntimeValue = api.getRuntimeValue;
                      appRoutes = staticConfig.routes;
                      tmp = appConfig.router, appConfigRouter = tmp === void 0 ? {
                      } : tmp;
                      modifyRoutes(function() {
                          return appRoutes;
                      });
                      if (appConfigRouter.modifyRoutes) {
                          modifyRoutes(appConfigRouter.modifyRoutes);
                      }
                      history = (0, _raxApp).getHistory();
                      TabBar = getRuntimeValue('TabBar');
                      tabBarConfig = getRuntimeValue('tabBarConfig');
                      renderRouter = function(initialRoutes) {
                          var ref = parseRoutes(initialRoutes), routes = ref.routes, keepAliveRoutes = ref.keepAliveRoutes;
                          return function() {
                              routes.push({
                                  // @ts-ignore
                                  component: ''
                              });
                              // Add KeepAliveRouter
                              var RouterComponents = [
                                  (0, _rax).createElement(_keepAliveRouter.default, {
                                      key: "rax-keep-alive-router",
                                      history: history,
                                      routes: keepAliveRoutes
                                  }), 
                              ];
                              var handleTabBarItemClick = (0, _rax).useCallback(function(item) {
                                  history.push(item.pageName);
                              }, []);
                              if (isNode) {
                                  // Add StaticRouter for node
                                  RouterComponents.push((0, _rax).createElement(_staticRouter.default, {
                                      key: "rax-static-router",
                                      history: history,
                                      routes: routes
                                  }));
                              } else {
                                  // Add Normal Router for other route
                                  RouterComponents.push((0, _rax).createElement(_router.default, {
                                      key: "rax-normal-router",
                                      history: history,
                                      routes: routes
                                  }));
                              }
                              if (TabBar) {
                                  RouterComponents.push((0, _rax).createElement(_tabBar.default, {
                                      key: "rax-app-tab-bar",
                                      history: history,
                                      renderTabBar: function() {
                                          var currentPageName = history.location.pathname;
                                          var shouldRender = tabBarConfig.items.some(function(param) {
                                              var pageName = param.pageName;
                                              return pageName === currentPageName;
                                          });
                                          return shouldRender ? (0, _rax).createElement(TabBar, {
                                              onClick: handleTabBarItemClick,
                                              config: tabBarConfig,
                                              currentPageName: currentPageName
                                          }) : null;
                                      }
                                  }));
                              }
                              return RouterComponents;
                          };
                      };
                      setRenderApp(renderRouter);
                  case 12:
                  case "end":
                      return _ctx.stop();
              }
          }, _callee);
      }));
  };
  exports.default = _default;
  function parseRoutes(routes) {
      var initialRoutes = [];
      var keepAliveRoutes = [];
      routes.forEach(function(route) {
          var routeWrappers = route.routeWrappers, others = __rest(route, [
              "routeWrappers"
          ]);
          if ((isWeb || isNode) && route.keepAlive) {
              keepAliveRoutes.push(Object.assign(Object.assign({
              }, others), {
                  component: getComponentByLazy(route.component, {
                      route: route
                  })
              }));
              return;
          }
          initialRoutes.push(Object.assign(Object.assign({
          }, others), {
              component: getComponentByLazy(route.component, {
                  route: route
              })
          }));
      });
      return {
          routes: initialRoutes,
          keepAliveRoutes: keepAliveRoutes
      };
  }
  function getComponentByLazy(PageComponent, param) {
      var route = param.route;
      var _lazy = route.lazy, lazy = _lazy === void 0 ? true : _lazy;
      if (isWeb) {
          if (lazy) {
              // When it is lazy, PageComponent is a function which return a Promise<Component>
              var LazyComponent = PageComponent();
              return LazyComponent.then(function(component) {
                  return wrapperPage(component, {
                      route: route
                  });
              });
          }
          return wrapperPage(PageComponent, {
              route: route
          });
      }
      // When it is other platform, the route.component is () => Component
      var Page = PageComponent();
      return wrapperPage(Page, {
          route: route
      });
  }
  function wrapperPage(PageComponent, param) {
      var route = param.route;
      var routeWrappers = route.routeWrappers, others = __rest(route, [
          "routeWrappers"
      ]);
      PageComponent.__pageConfig = others;
      var Wrapper = wrapperRoute(PageComponent, routeWrappers);
      return (0, _rax).createElement(Wrapper, {
          key: route.path
      });
  }
  function wrapperRoute(component, routerWrappers) {
      return (routerWrappers || []).reduce(function(acc, curr) {
          var compose = curr(acc);
          if (acc.getInitialProps) {
              compose.getInitialProps = acc.getInitialProps;
          }
          return compose;
      }, component);
  } //# sourceMappingURL=runtime.js.map
  
  
  /***/ }),
  /* 71 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var runtime = function(exports) {
      "use strict";
      var define = function define(obj, key, value) {
          Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
          });
          return obj[key];
      };
      var wrap = function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
      };
      var tryCatch = // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
          try {
              return {
                  type: "normal",
                  arg: fn.call(obj, arg)
              };
          } catch (err) {
              return {
                  type: "throw",
                  arg: err
              };
          }
      };
      var Generator = // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {
      };
      var GeneratorFunction = function GeneratorFunction() {
      };
      var GeneratorFunctionPrototype = function GeneratorFunctionPrototype() {
      };
      var defineIteratorMethods = // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
          [
              "next",
              "throw",
              "return"
          ].forEach(function(method) {
              define(prototype, method, function(arg) {
                  return this._invoke(method, arg);
              });
          });
      };
      var AsyncIterator = function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                  reject(record.arg);
              } else {
                  var result = record.arg;
                  var value1 = result.value;
                  if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) {
                      return PromiseImpl.resolve(value1.__await).then(function(value) {
                          invoke("next", value, resolve, reject);
                      }, function(err) {
                          invoke("throw", err, resolve, reject);
                      });
                  }
                  return PromiseImpl.resolve(value1).then(function(unwrapped) {
                      // When a yielded Promise is resolved, its final value becomes
                      // the .value of the Promise<{value,done}> result for the
                      // current iteration.
                      result.value = unwrapped;
                      resolve(result);
                  }, function(error) {
                      // If a rejected Promise was yielded, throw the rejection back
                      // into the async generator function so it can be handled there.
                      return invoke("throw", error, resolve, reject);
                  });
              }
          }
          var previousPromise;
          function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function(resolve, reject) {
                      invoke(method, arg, resolve, reject);
                  });
              }
              return previousPromise = // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
      };
      var makeInvokeMethod = function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                  throw new Error("Generator is already running");
              }
              if (state === GenStateCompleted) {
                  if (method === "throw") {
                      throw arg;
                  }
                  // Be forgiving, per 25.3.3.3.3 of the spec:
                  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                  return doneResult();
              }
              context.method = method;
              context.arg = arg;
              while(true){
                  var delegate = context.delegate;
                  if (delegate) {
                      var delegateResult = maybeInvokeDelegate(delegate, context);
                      if (delegateResult) {
                          if (delegateResult === ContinueSentinel) continue;
                          return delegateResult;
                      }
                  }
                  if (context.method === "next") {
                      // Setting context._sent for legacy support of Babel's
                      // function.sent implementation.
                      context.sent = context._sent = context.arg;
                  } else if (context.method === "throw") {
                      if (state === GenStateSuspendedStart) {
                          state = GenStateCompleted;
                          throw context.arg;
                      }
                      context.dispatchException(context.arg);
                  } else if (context.method === "return") {
                      context.abrupt("return", context.arg);
                  }
                  state = GenStateExecuting;
                  var record = tryCatch(innerFn, self, context);
                  if (record.type === "normal") {
                      // If an exception is thrown from innerFn, we leave state ===
                      // GenStateExecuting and loop back for another invocation.
                      state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                      if (record.arg === ContinueSentinel) {
                          continue;
                      }
                      return {
                          value: record.arg,
                          done: context.done
                      };
                  } else if (record.type === "throw") {
                      state = GenStateCompleted;
                      // Dispatch the exception by looping back around to the
                      // context.dispatchException(context.arg) call above.
                      context.method = "throw";
                      context.arg = record.arg;
                  }
              }
          };
      };
      var pushTryEntry = function pushTryEntry(locs) {
          var entry = {
              tryLoc: locs[0]
          };
          if (1 in locs) {
              entry.catchLoc = locs[1];
          }
          if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
      };
      var resetTryEntry = function resetTryEntry(entry) {
          var record = entry.completion || {
          };
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
      };
      var Context = function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [
              {
                  tryLoc: "root"
              }
          ];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
      };
      var values = function values(iterable) {
          if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                  return iteratorMethod.call(iterable);
              }
              if (typeof iterable.next === "function") {
                  return iterable;
              }
              if (!isNaN(iterable.length)) {
                  var i = -1, next1 = function next() {
                      while(++i < iterable.length){
                          if (hasOwn.call(iterable, i)) {
                              next.value = iterable[i];
                              next.done = false;
                              return next;
                          }
                      }
                      next.value = undefined;
                      next.done = true;
                      return next;
                  };
                  return next1.next = next1;
              }
          }
          // Return an iterator with no values.
          return {
              next: doneResult
          };
      };
      var doneResult = function doneResult() {
          return {
              value: undefined,
              done: true
          };
      };
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.
      var $Symbol = typeof Symbol === "function" ? Symbol : {
      };
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({
          }, "");
      } catch (err) {
          define = function define(obj, key, value) {
              return obj[key] = value;
          };
      }
      exports.wrap = wrap;
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {
      };
      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {
      };
      define(IteratorPrototype, iteratorSymbol, function() {
          return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
      exports.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports.mark = function(genFun) {
          if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
      };
      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function(arg) {
          return {
              __await: arg
          };
      };
      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
          return this;
      });
      exports.AsyncIterator = AsyncIterator;
      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
           : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
          });
      };
      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;
              if (context.method === "throw") {
                  // Note: ["return"] must be used for ES3 parsing compatibility.
                  if (delegate.iterator["return"]) {
                      // If the delegate iterator has a return method, give it a
                      // chance to clean up.
                      context.method = "return";
                      context.arg = undefined;
                      maybeInvokeDelegate(delegate, context);
                      if (context.method === "throw") {
                          // If maybeInvokeDelegate(context) changed context.method from
                          // "return" to "throw", let that override the TypeError below.
                          return ContinueSentinel;
                      }
                  }
                  context.method = "throw";
                  context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
          }
          if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;
              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;
              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                  context.method = "next";
                  context.arg = undefined;
              }
          } else {
              // Re-yield the result returned by the delegate method.
              return info;
          }
          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
      }
      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator");
      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      define(Gp, iteratorSymbol, function() {
          return this;
      });
      define(Gp, "toString", function() {
          return "[object Generator]";
      });
      exports.keys = function(object) {
          var keys = [];
          for(var key1 in object){
              keys.push(key1);
          }
          keys.reverse();
          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
              while(keys.length){
                  var key = keys.pop();
                  if (key in object) {
                      next.value = key;
                      next.done = false;
                      return next;
                  }
              }
              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
          };
      };
      exports.values = values;
      Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined;
              this.tryEntries.forEach(resetTryEntry);
              if (!skipTempReset) {
                  for(var name in this){
                      // Not sure about the optimal order of these conditions:
                      if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                          this[name] = undefined;
                      }
                  }
              }
          },
          stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                  throw rootRecord.arg;
              }
              return this.rval;
          },
          dispatchException: function dispatchException(exception) {
              var handle = function handle(loc, caught) {
                  record.type = "throw";
                  record.arg = exception;
                  context.next = loc;
                  if (caught) {
                      // If the dispatched exception was caught by a catch block,
                      // then let that catch block handle the exception normally.
                      context.method = "next";
                      context.arg = undefined;
                  }
                  return !!caught;
              };
              if (this.done) {
                  throw exception;
              }
              var context = this;
              for(var i = this.tryEntries.length - 1; i >= 0; --i){
                  var entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === "root") {
                      // Exception thrown outside of any try block that could handle
                      // it, so set the completion value of the entire function to
                      // throw the exception.
                      return handle("end");
                  }
                  if (entry.tryLoc <= this.prev) {
                      var hasCatch = hasOwn.call(entry, "catchLoc");
                      var hasFinally = hasOwn.call(entry, "finallyLoc");
                      if (hasCatch && hasFinally) {
                          if (this.prev < entry.catchLoc) {
                              return handle(entry.catchLoc, true);
                          } else if (this.prev < entry.finallyLoc) {
                              return handle(entry.finallyLoc);
                          }
                      } else if (hasCatch) {
                          if (this.prev < entry.catchLoc) {
                              return handle(entry.catchLoc, true);
                          }
                      } else if (hasFinally) {
                          if (this.prev < entry.finallyLoc) {
                              return handle(entry.finallyLoc);
                          }
                      } else {
                          throw new Error("try statement without catch or finally");
                      }
                  }
              }
          },
          abrupt: function abrupt(type, arg) {
              for(var i = this.tryEntries.length - 1; i >= 0; --i){
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                      var finallyEntry = entry;
                      break;
                  }
              }
              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                  // Ignore the finally entry if control is not jumping to a
                  // location outside the try/catch block.
                  finallyEntry = null;
              }
              var record = finallyEntry ? finallyEntry.completion : {
              };
              record.type = type;
              record.arg = arg;
              if (finallyEntry) {
                  this.method = "next";
                  this.next = finallyEntry.finallyLoc;
                  return ContinueSentinel;
              }
              return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                  throw record.arg;
              }
              if (record.type === "break" || record.type === "continue") {
                  this.next = record.arg;
              } else if (record.type === "return") {
                  this.rval = this.arg = record.arg;
                  this.method = "return";
                  this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                  this.next = afterLoc;
              }
              return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
              for(var i = this.tryEntries.length - 1; i >= 0; --i){
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc) {
                      this.complete(entry.completion, entry.afterLoc);
                      resetTryEntry(entry);
                      return ContinueSentinel;
                  }
              }
          },
          "catch": function(tryLoc) {
              for(var i = this.tryEntries.length - 1; i >= 0; --i){
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                      var record = entry.completion;
                      if (record.type === "throw") {
                          var thrown = record.arg;
                          resetTryEntry(entry);
                      }
                      return thrown;
                  }
              }
              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc
              };
              if (this.method === "next") {
                  // Deliberately forget the last sent value so that we don't
                  // accidentally pass it on to the delegate.
                  this.arg = undefined;
              }
              return ContinueSentinel;
          }
      };
      // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports;
  }(// If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined);
  try {
      regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
      } else {
          Function("r", "regeneratorRuntime = r")(runtime);
      }
  }
  
  
  /***/ }),
  /* 72 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = KeepAliveRouter;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _useCreation = swcHelpers.interopRequireDefault(__webpack_require__(25));
  var _routeMatcher = swcHelpers.interopRequireDefault(__webpack_require__(12));
  function KeepAliveRouter(param1) {
      var history = param1.history, routes = param1.routes;
      var currentPathName = history.location.pathname;
      var keepAliveRoutesRef = (0, _rax).useRef([]);
      // Append new keep alive route
      var appendKeepAliveRoute = (0, _rax).useCallback(function(route) {
          var newKeepAliveRoutes = swcHelpers.toConsumableArray(keepAliveRoutesRef.current).concat([
              route, 
          ]);
          setKeepAliveRoutes(newKeepAliveRoutes);
          keepAliveRoutesRef.current = newKeepAliveRoutes;
      }, []);
      // Only get initialRoutes when the first render
      var initialRoutes = (0, _useCreation).default(function() {
          var matcher = new _routeMatcher.default(routes);
          var route = matcher.match(currentPathName);
          if (!route) {
              return [];
          }
          if (isPromise(route)) {
              loadAsyncComponent(function() {
                  return route.component;
              }, function(err, component) {
                  if (err) {
                      throw err;
                  }
                  appendKeepAliveRoute(Object.assign(Object.assign({
                  }, route), {
                      component: component
                  }));
              });
              return [];
          }
          return [
              route
          ];
      });
      // Keep-alive routes
      var ref = (0, _rax).useState(initialRoutes), keepAliveRoutes = ref[0], setKeepAliveRoutes = ref[1];
      // For force update the router component
      var ref1 = (0, _rax).useState(0), setForceUpdate = ref1[1];
      (0, _rax).useEffect(function() {
          var matcher = new _routeMatcher.default(routes);
          var unlisten = history.listen(function(location) {
              var pathname = location.pathname;
              var targetRoute = matcher.match(pathname);
              if (targetRoute && targetRoute.keepAlive) {
                  // Find existed alive page from keepAliveRoutes
                  if (keepAliveRoutesRef.current.find(function(param) {
                      var path = param.path;
                      return path === pathname;
                  })) {
                      setForceUpdate(Math.random());
                  } else if (isPromise(targetRoute)) {
                      loadAsyncComponent(function() {
                          return targetRoute.component;
                      }, function(err, component) {
                          if (err) {
                              throw err;
                          }
                          appendKeepAliveRoute(Object.assign(Object.assign({
                          }, targetRoute), {
                              component: component
                          }));
                      });
                  } else {
                      appendKeepAliveRoute(targetRoute);
                  }
              } else {
                  // When router toggle, it need to hide visible page
                  setForceUpdate(Math.random());
              }
          });
          return unlisten;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return (0, _rax).createElement(_rax.Fragment, null, keepAliveRoutes.map(function(param) {
          var path = param.path, component = param.component;
          return (0, _rax).createElement("div", {
              key: path,
              style: {
                  display: path === currentPathName ? 'unset' : 'none'
              }
          }, component);
      }));
  }
  function isPromise(route) {
      return route.component instanceof Promise;
  }
  function loadAsyncComponent(dynamicImport, updater) {
      dynamicImport().then(function(component) {
          updater(null, component);
      }).catch(function(err) {
          updater(err);
      });
  } //# sourceMappingURL=KeepAliveRouter.js.map
  
  
  /***/ }),
  /* 73 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = StaticRouter;
  var swcHelpers = __webpack_require__(0);
  var _routeMatcher = swcHelpers.interopRequireDefault(__webpack_require__(12));
  function StaticRouter(param) {
      var history = param.history, routes = param.routes;
      var matcher = new _routeMatcher.default(routes);
      var route = matcher.match(history.location.pathname);
      if (!route) {
          throw new Error('Cannot find target route info to render page.');
      }
      return route.component;
  } //# sourceMappingURL=StaticRouter.js.map
  
  
  /***/ }),
  /* 74 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = Router;
  var swcHelpers = __webpack_require__(0);
  var _raxUseRouter = __webpack_require__(23);
  var _routeMatcher = swcHelpers.interopRequireDefault(__webpack_require__(12));
  var _useCreation = swcHelpers.interopRequireDefault(__webpack_require__(25));
  function Router(param) {
      var history = param.history, routes = param.routes;
      var currentPathName = history.location.pathname;
      var InitialComponent = (0, _useCreation).default(function() {
          var matcher = new _routeMatcher.default(routes);
          var route = matcher.match(currentPathName);
          if (!route) {
              throw new Error('Cannot find target route info to render page.');
          }
          if (!route.lazy) {
              return route.component;
          }
      });
      var component = (0, _raxUseRouter).useRouter({
          history: history,
          routes: routes,
          InitialComponent: InitialComponent
      }).component;
      return component;
  } //# sourceMappingURL=Router.js.map
  
  
  /***/ }),
  /* 75 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = TabBarWrapper;
  var _rax = __webpack_require__(1);
  function TabBarWrapper(param) {
      var renderTabBar = param.renderTabBar, history = param.history;
      var ref = (0, _rax).useState(history.location.pathname), setPathName = ref[1];
      (0, _rax).useEffect(function() {
          var unlisten = history.listen(function() {
              setPathName(history.location.pathname);
          });
          return unlisten;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return renderTabBar();
  } //# sourceMappingURL=TabBar.js.map
  
  
  /***/ }),
  /* 76 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var appConfig = {
      "routes": [
          {
              "path": "/",
              "source": "pages/Home/index",
              "spm": "26115364"
          }
      ],
      "window": {
          "title": "Rax App"
      },
      "builtInLibrary": {
          "lib-mtop": false
      },
      "spm": "a21jiy",
      "metas": [
          "<meta name=\"aplus-waiting\" content=\"MAN\">"
      ]
  };
  var _default = appConfig;
  exports.default = _default;
  
  
  /***/ }),
  /* 77 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  var swcHelpers = __webpack_require__(0);
  var _types = swcHelpers.interopRequireWildcard(__webpack_require__(78));
  Object.keys(_types).forEach(function(key) {
      if (key === "default" || key === "__esModule") return;
      if (key in exports && exports[key] === _types[key]) return;
      Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
              return _types[key];
          }
      });
  });
  
  
  /***/ }),
  /* 78 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  }); //# sourceMappingURL=index.js.map
  
  
  /***/ }),
  /* 79 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = Home;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _raxView = swcHelpers.interopRequireDefault(__webpack_require__(80));
  var _raxText = swcHelpers.interopRequireDefault(__webpack_require__(84));
  var _raxApp = __webpack_require__(10);
  var _indexModuleCss = swcHelpers.interopRequireDefault(__webpack_require__(87));
  var _logo = swcHelpers.interopRequireDefault(__webpack_require__(88));
  function Home() {
      var ref = (0, _rax).useState(0), count = ref[0], setCount = ref[1];
      (0, _raxApp).usePageShow(function() {
          setCount(count + 1);
      });
      return(/*#__PURE__*/ (0, _rax).createElement(_raxView.default, {
          className: _indexModuleCss.default.homeContainer
      }, "Count: ", count, /*#__PURE__*/ (0, _rax).createElement(_logo.default, {
          uri: "//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png"
      }), /*#__PURE__*/ (0, _rax).createElement(_raxText.default, {
          className: _indexModuleCss.default.homeTitle
      }, "Welcome to Your Rax App"), /*#__PURE__*/ (0, _rax).createElement(_raxText.default, {
          className: _indexModuleCss.default.homeInfo
      }, "More information about Rax"), /*#__PURE__*/ (0, _rax).createElement(_raxText.default, {
          className: _indexModuleCss.default.homeInfo
      }, "Visit https://rax.js.org")));
  }
  
  
  /***/ }),
  /* 80 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _dedupe = swcHelpers.interopRequireDefault(__webpack_require__(81));
  var _wrapDefaultProperties = swcHelpers.interopRequireDefault(__webpack_require__(82));
  var _indexCss = swcHelpers.interopRequireDefault(__webpack_require__(83));
  var _excluded = [
      "className",
      "style",
      "onFirstAppear",
      "onAppear"
  ];
  function _extends() {
      _extends = Object.assign || function(target) {
          for(var i = 1; i < arguments.length; i++){
              var source = arguments[i];
              for(var key in source){
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                  }
              }
          }
          return target;
      };
      return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {
      };
      var target = {
      };
      var sourceKeys = Object.keys(source);
      var key, i;
      for(i = 0; i < sourceKeys.length; i++){
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
      }
      return target;
  }
  var _styleSheet = _indexCss.default;
  function _getClassName() {
      var className = [];
      var args = arguments[0];
      var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
      if (type === 'string') {
          args = args.trim();
          args && className.push(args);
      } else if (type === 'array') {
          args.forEach(function(cls) {
              cls = _getClassName(cls).trim();
              cls && className.push(cls);
          });
      } else if (type === 'object') {
          for(var k in args){
              k = k.trim();
              if (k && args.hasOwnProperty(k) && args[k]) {
                  className.push(k);
              }
          }
      }
      return className.join(' ').trim();
  }
  function _getStyle(classNameExpression) {
      var cache = _styleSheet.__cache || (_styleSheet.__cache = {
      });
      var className = _getClassName(classNameExpression);
      var classNameArr = className.split(/\s+/);
      var style = cache[className];
      if (!style) {
          style = {
          };
          if (classNameArr.length === 1) {
              style = _styleSheet[classNameArr[0].trim()];
          } else {
              classNameArr.forEach(function(cls) {
                  var value = _styleSheet[cls.trim()];
                  if (typeof value === 'object') {
                      style = Object.assign(style, _styleSheet[cls.trim()]);
                  }
              });
          }
          cache[className] = style;
      }
      return style;
  }
  var View = (0, _rax).forwardRef(function(props, ref) {
      var selfRef = (0, _rax).useRef(null);
      var className = props.className, style = props.style, onFirstAppear = props.onFirstAppear, onAppear = props.onAppear, rest = _objectWithoutPropertiesLoose(props, _excluded);
      var handleAppear = onAppear;
      if (onFirstAppear) {
          handleAppear = function handleAppear(event) {
              onAppear && onAppear(event);
              if (!selfRef.current || !selfRef.current.triggeredAppear) {
                  onFirstAppear && onFirstAppear(event);
                  selfRef.current = {
                      triggeredAppear: true
                  };
              }
          };
      }
      return (0, _rax).createElement("div", _extends({
      }, rest, {
          onAppear: handleAppear,
          ref: ref,
          className: (0, _dedupe).default('rax-view-v2', className),
          style: Object.assign({
          }, _getStyle((0, _dedupe).default('rax-view-v2', className)), style)
      }));
  });
  var _default = (0, _wrapDefaultProperties).default(View);
  exports.default = _default;
  
  
  /***/ }),
  /* 81 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
  var swcHelpers = __webpack_require__(0);
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */ /* global define */ (function() {
      'use strict';
      var classNames = function() {
          var StorageObject = // don't inherit from Object so we can skip hasOwnProperty check later
          // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
          function StorageObject() {
          };
          var _parseArray = function _parseArray(resultSet, array) {
              var length = array.length;
              for(var i = 0; i < length; ++i){
                  _parse(resultSet, array[i]);
              }
          };
          var _parseNumber = function _parseNumber(resultSet, num) {
              resultSet[num] = true;
          };
          var _parseObject = function _parseObject(resultSet, object) {
              if (object.toString === Object.prototype.toString) {
                  for(var k in object){
                      if (hasOwn.call(object, k)) {
                          // set value to false instead of deleting it to avoid changing object structure
                          // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                          resultSet[k] = !!object[k];
                      }
                  }
              } else {
                  resultSet[object.toString()] = true;
              }
          };
          var _parseString = function _parseString(resultSet, str) {
              var array = str.split(SPACE);
              var length = array.length;
              for(var i = 0; i < length; ++i){
                  resultSet[array[i]] = true;
              }
          };
          var _parse = function _parse(resultSet, arg) {
              if (!arg) return;
              var argType = typeof arg === "undefined" ? "undefined" : swcHelpers.typeOf(arg);
              // 'foo bar'
              if (argType === 'string') {
                  _parseString(resultSet, arg);
              // ['foo', 'bar', ...]
              } else if (Array.isArray(arg)) {
                  _parseArray(resultSet, arg);
              // { 'foo': true, ... }
              } else if (argType === 'object') {
                  _parseObject(resultSet, arg);
              // '130'
              } else if (argType === 'number') {
                  _parseNumber(resultSet, arg);
              }
          };
          var _classNames = function _classNames() {
              // don't leak arguments
              // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
              var len = arguments.length;
              var args = Array(len);
              for(var i = 0; i < len; i++){
                  args[i] = arguments[i];
              }
              var classSet = new StorageObject();
              _parseArray(classSet, args);
              var list = [];
              for(var k in classSet){
                  if (classSet[k]) {
                      list.push(k);
                  }
              }
              return list.join(' ');
          };
          StorageObject.prototype = Object.create(null);
          var hasOwn = {
          }.hasOwnProperty;
          var SPACE = /\s+/;
          return _classNames;
      }();
      if ( true && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
      } else if (true) {
          // register as 'classnames', consistent with npm package name
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
              return classNames;
          }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
  })();
  
  
  /***/ }),
  /* 82 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = wrapDefaultProperties;
  function wrapDefaultProperties(View) {
      View.displayName = 'View';
      return View;
  }
  
  
  /***/ }),
  /* 83 */
  /***/ (function(module, exports, __webpack_require__) {
  
  // extracted by mini-css-extract-plugin
  
  /***/ }),
  /* 84 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _wrapDefaultProperties = swcHelpers.interopRequireDefault(__webpack_require__(85));
  var _indexCss = swcHelpers.interopRequireDefault(__webpack_require__(86));
  var _excluded = [
      "className",
      "style",
      "numberOfLines",
      "children",
      "onPress",
      "onClick"
  ];
  function _extends() {
      _extends = Object.assign || function(target) {
          for(var i = 1; i < arguments.length; i++){
              var source = arguments[i];
              for(var key in source){
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                  }
              }
          }
          return target;
      };
      return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {
      };
      var target = {
      };
      var sourceKeys = Object.keys(source);
      var key, i;
      for(i = 0; i < sourceKeys.length; i++){
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
      }
      return target;
  }
  var _styleSheet = _indexCss.default;
  function _getClassName() {
      var className = [];
      var args = arguments[0];
      var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
      if (type === 'string') {
          args = args.trim();
          args && className.push(args);
      } else if (type === 'array') {
          args.forEach(function(cls) {
              cls = _getClassName(cls).trim();
              cls && className.push(cls);
          });
      } else if (type === 'object') {
          for(var k in args){
              k = k.trim();
              if (k && args.hasOwnProperty(k) && args[k]) {
                  className.push(k);
              }
          }
      }
      return className.join(' ').trim();
  }
  function _getStyle(classNameExpression) {
      var cache = _styleSheet.__cache || (_styleSheet.__cache = {
      });
      var className = _getClassName(classNameExpression);
      var classNameArr = className.split(/\s+/);
      var style = cache[className];
      if (!style) {
          style = {
          };
          if (classNameArr.length === 1) {
              style = _styleSheet[classNameArr[0].trim()];
          } else {
              classNameArr.forEach(function(cls) {
                  var value = _styleSheet[cls.trim()];
                  if (typeof value === 'object') {
                      style = Object.assign(style, _styleSheet[cls.trim()]);
                  }
              });
          }
          cache[className] = style;
      }
      return style;
  }
  var prefixCls = 'rax-text-v2';
  var Text = (0, _rax).forwardRef(function(props, ref) {
      var className = props.className, style = props.style, numberOfLines = props.numberOfLines, children = props.children, onPress = props.onPress, onClick = props.onClick, rest = _objectWithoutPropertiesLoose(props, _excluded);
      var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
      var textString = '';
      if (children != null) {
          textString = Array.isArray(children) ? children.join('') : children.toString();
      }
      var classNames = [
          prefixCls,
          className
      ];
      if (lines) {
          classNames.push(prefixCls + "--overflow-hidden");
          if (lines === 1) {
              classNames.push(prefixCls + "--singleline");
          } else {
              classNames.push(prefixCls + "--multiline");
          }
      }
      var lineClamp = lines > 1 ? lines : undefined;
      return (0, _rax).createElement("span", _extends({
      }, rest, {
          ref: ref,
          className: classNames.join(' ') // Vendor prefixes should begin with a capital letter.
          ,
          style: Object.assign({
          }, _getStyle(classNames.join(' ')), _extends({
          }, style, {
              // Currently only -webkit-line-clamp is supported in browsers
              // https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
              WebkitLineClamp: lineClamp,
              // Add line-clamp for standard compatibility and engines which
              // has already support it such as Kraken
              lineClamp: lineClamp
          })),
          onClick: onClick || onPress
      }), textString);
  });
  var _default = (0, _wrapDefaultProperties).default(Text);
  exports.default = _default;
  
  
  /***/ }),
  /* 85 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = wrapDefaultProperties;
  function wrapDefaultProperties(Text) {
      Text.displayName = 'ScrollView';
      return Text;
  }
  
  
  /***/ }),
  /* 86 */
  /***/ (function(module, exports, __webpack_require__) {
  
  // extracted by mini-css-extract-plugin
  
  /***/ }),
  /* 87 */
  /***/ (function(module, exports, __webpack_require__) {
  
  // extracted by mini-css-extract-plugin
  module.exports = {"homeContainer":"Home--homeContainer--2S6_gYM","homeTitle":"Home--homeTitle--18dDvg0","homeInfo":"Home--homeInfo--fJaGM0W"};
  
  /***/ }),
  /* 88 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _raxImage = swcHelpers.interopRequireDefault(__webpack_require__(89));
  var _indexModuleCss = swcHelpers.interopRequireDefault(__webpack_require__(91));
  var _default = function(props) {
      var uri = props.uri;
      var source = {
          uri: uri
      };
      return(/*#__PURE__*/ (0, _rax).createElement(_raxImage.default, {
          className: _indexModuleCss.default.logo,
          source: source
      }));
  };
  exports.default = _default;
  
  
  /***/ }),
  /* 89 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var swcHelpers = __webpack_require__(0);
  var _rax = __webpack_require__(1);
  var _emptySource = swcHelpers.interopRequireDefault(__webpack_require__(90));
  var _excluded = [
      "source",
      "fallbackSource",
      "onLoad",
      "onError",
      "style",
      "resizeMode",
      "loading"
  ];
  function _extends() {
      _extends = Object.assign || function(target) {
          for(var i = 1; i < arguments.length; i++){
              var source = arguments[i];
              for(var key in source){
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                  }
              }
          }
          return target;
      };
      return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {
      };
      var target = {
      };
      var sourceKeys = Object.keys(source);
      var key, i;
      for(i = 0; i < sourceKeys.length; i++){
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
      }
      return target;
  }
  var Image = (0, _rax).forwardRef(function(_ref, ref) {
      var source = _ref.source, fallbackSource = _ref.fallbackSource, onLoad = _ref.onLoad, onError = _ref.onError, style = _ref.style, resizeMode = _ref.resizeMode, loading = _ref.loading, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
      source = source || _emptySource.default;
      fallbackSource = fallbackSource || _emptySource.default;
      var nativeProps = rest;
      var _useState = (0, _rax).useState({
      }), errorState = _useState[0], setErrorState = _useState[1];
      nativeProps.onError = (0, _rax).useCallback(function(e) {
          if (errorState.uri === undefined) {
              setErrorState({
                  uri: source.uri
              });
          }
          onError && onError(e);
      }, [
          source.uri,
          onError,
          errorState
      ]);
      nativeProps.onLoad = (0, _rax).useCallback(function(e) {
          if (e && e.success) {
              // weex
              onLoad && onLoad(e);
          } else if (e && e.currentTarget && e.currentTarget.naturalWidth > 1 && e.currentTarget.naturalHeight > 1) {
              // web
              onLoad && onLoad(e);
          } else {
              if (errorState.uri === undefined) {
                  setErrorState({
                      uri: source.uri
                  });
              }
              onError && onError(e);
          }
      }, [
          onLoad,
          onError
      ]);
      if (errorState.uri !== undefined) {
          if (errorState.uri !== source.uri) {
              errorState.uri = undefined;
          } else if (fallbackSource.uri != null) {
              source = fallbackSource;
          }
      }
      var _source = source, width = _source.width, height = _source.height, uri = _source.uri;
      nativeProps.src = uri;
      nativeProps.style = _extends({
          width: width,
          height: height
      }, style);
      if (loading) {
          nativeProps.loading = loading;
      } // for cover and contain
      resizeMode = resizeMode || nativeProps.style.resizeMode;
      if (resizeMode) {
          nativeProps.style.objectFit = resizeMode;
      }
      return (0, _rax).createElement("img", _extends({
      }, nativeProps, {
          ref: ref
      }));
  });
  var _default = Image;
  exports.default = _default;
  
  
  /***/ }),
  /* 90 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.default = void 0;
  var EMPTY_SOURCE = {
  };
  var _default = EMPTY_SOURCE;
  exports.default = _default;
  
  
  /***/ }),
  /* 91 */
  /***/ (function(module, exports, __webpack_require__) {
  
  // extracted by mini-css-extract-plugin
  module.exports = {"logo":"Logo--logo--3to53D4"};
  
  /***/ })
  /******/ ]);