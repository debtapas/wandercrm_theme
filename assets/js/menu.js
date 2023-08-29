(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar TRANSITION_EVENTS = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd']; // const TRANSITION_PROPERTIES = ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition']\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu(el) {\n    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    var _PS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    _classCallCheck(this, Menu);\n\n    this._el = el;\n    this._animate = config.animate !== false;\n    this._accordion = config.accordion !== false;\n    this._closeChildren = Boolean(config.closeChildren);\n\n    this._onOpen = config.onOpen || function () {};\n\n    this._onOpened = config.onOpened || function () {};\n\n    this._onClose = config.onClose || function () {};\n\n    this._onClosed = config.onClosed || function () {};\n\n    this._psScroll = null;\n    this._topParent = null;\n    this._menuBgClass = null;\n    el.classList.add('menu');\n    el.classList[this._animate ? 'remove' : 'add']('menu-no-animation'); // check\n\n    el.classList.add('menu-vertical');\n    var PerfectScrollbarLib = _PS || window.PerfectScrollbar;\n\n    if (PerfectScrollbarLib) {\n      this._scrollbar = new PerfectScrollbarLib(el.querySelector('.menu-inner'), {\n        suppressScrollX: true,\n        wheelPropagation: !Menu._hasClass('layout-menu-fixed layout-menu-fixed-offcanvas')\n      });\n      window.Helpers.menuPsScroll = this._scrollbar;\n    } else {\n      el.querySelector('.menu-inner').classList.add('overflow-auto');\n    } // Add data attribute for bg color class of menu\n\n\n    var menuClassList = el.classList;\n\n    for (var i = 0; i < menuClassList.length; i++) {\n      if (menuClassList[i].startsWith('bg-')) {\n        this._menuBgClass = menuClassList[i];\n      }\n    }\n\n    el.setAttribute('data-bg-class', this._menuBgClass);\n\n    this._bindEvents(); // Link menu instance to element\n\n\n    el.menuInstance = this;\n  }\n\n  _createClass(Menu, [{\n    key: \"_bindEvents\",\n    value: function _bindEvents() {\n      var _this = this;\n\n      // Click Event\n      this._evntElClick = function (e) {\n        // Find top parent element\n        if (e.target.closest('ul') && e.target.closest('ul').classList.contains('menu-inner')) {\n          var menuItem = Menu._findParent(e.target, 'menu-item', false); // eslint-disable-next-line prefer-destructuring\n\n\n          if (menuItem) _this._topParent = menuItem.childNodes[0];\n        }\n\n        var toggleLink = e.target.classList.contains('menu-toggle') ? e.target : Menu._findParent(e.target, 'menu-toggle', false);\n\n        if (toggleLink) {\n          e.preventDefault();\n\n          if (toggleLink.getAttribute('data-hover') !== 'true') {\n            _this.toggle(toggleLink);\n          }\n        }\n      };\n\n      if (window.Helpers.isMobileDevice) this._el.addEventListener('click', this._evntElClick);\n\n      this._evntWindowResize = function () {\n        _this.update();\n\n        if (_this._lastWidth !== window.innerWidth) {\n          _this._lastWidth = window.innerWidth;\n\n          _this.update();\n        }\n\n        var horizontalMenuTemplate = document.querySelector(\"[data-template^='horizontal-menu']\");\n        if (!_this._horizontal && !horizontalMenuTemplate) _this.manageScroll();\n      };\n\n      window.addEventListener('resize', this._evntWindowResize);\n    }\n  }, {\n    key: \"_unbindEvents\",\n    value: function _unbindEvents() {\n      if (this._evntElClick) {\n        this._el.removeEventListener('click', this._evntElClick);\n\n        this._evntElClick = null;\n      }\n\n      if (this._evntElMouseOver) {\n        this._el.removeEventListener('mouseover', this._evntElMouseOver);\n\n        this._evntElMouseOver = null;\n      }\n\n      if (this._evntElMouseOut) {\n        this._el.removeEventListener('mouseout', this._evntElMouseOut);\n\n        this._evntElMouseOut = null;\n      }\n\n      if (this._evntWindowResize) {\n        window.removeEventListener('resize', this._evntWindowResize);\n        this._evntWindowResize = null;\n      }\n\n      if (this._evntBodyClick) {\n        document.body.removeEventListener('click', this._evntBodyClick);\n        this._evntBodyClick = null;\n      }\n\n      if (this._evntInnerMousemove) {\n        this._inner.removeEventListener('mousemove', this._evntInnerMousemove);\n\n        this._evntInnerMousemove = null;\n      }\n\n      if (this._evntInnerMouseleave) {\n        this._inner.removeEventListener('mouseleave', this._evntInnerMouseleave);\n\n        this._evntInnerMouseleave = null;\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open(el) {\n      var _this2 = this;\n\n      var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;\n\n      var item = this._findUnopenedParent(Menu._getItem(el, true), closeChildren);\n\n      if (!item) return;\n\n      var toggleLink = Menu._getLink(item, true);\n\n      Menu._promisify(this._onOpen, this, item, toggleLink, Menu._findMenu(item)).then(function () {\n        if (!_this2._horizontal || !Menu._isRoot(item)) {\n          if (_this2._animate && !_this2._horizontal) {\n            window.requestAnimationFrame(function () {\n              return _this2._toggleAnimation(true, item, false);\n            });\n            if (_this2._accordion) _this2._closeOther(item, closeChildren);\n          } else if (_this2._animate) {\n            // eslint-disable-next-line no-unused-expressions\n            _this2._onOpened && _this2._onOpened(_this2, item, toggleLink, Menu._findMenu(item));\n          } else {\n            item.classList.add('open'); // eslint-disable-next-line no-unused-expressions\n\n            _this2._onOpened && _this2._onOpened(_this2, item, toggleLink, Menu._findMenu(item));\n            if (_this2._accordion) _this2._closeOther(item, closeChildren);\n          }\n        } else {\n          // eslint-disable-next-line no-unused-expressions\n          _this2._onOpened && _this2._onOpened(_this2, item, toggleLink, Menu._findMenu(item));\n        }\n      }).catch(function () {});\n    }\n  }, {\n    key: \"close\",\n    value: function close(el) {\n      var _this3 = this;\n\n      var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;\n\n      var _autoClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      var item = Menu._getItem(el, true);\n\n      var toggleLink = Menu._getLink(el, true);\n\n      if (!item.classList.contains('open') || item.classList.contains('disabled')) return;\n\n      Menu._promisify(this._onClose, this, item, toggleLink, Menu._findMenu(item), _autoClose).then(function () {\n        if (!_this3._horizontal || !Menu._isRoot(item)) {\n          if (_this3._animate && !_this3._horizontal) {\n            window.requestAnimationFrame(function () {\n              return _this3._toggleAnimation(false, item, closeChildren);\n            });\n          } else {\n            item.classList.remove('open');\n\n            if (closeChildren) {\n              var opened = item.querySelectorAll('.menu-item.open');\n\n              for (var i = 0, l = opened.length; i < l; i++) {\n                opened[i].classList.remove('open');\n              }\n            } // eslint-disable-next-line no-unused-expressions\n\n\n            _this3._onClosed && _this3._onClosed(_this3, item, toggleLink, Menu._findMenu(item));\n          }\n        } else {\n          // eslint-disable-next-line no-unused-expressions\n          _this3._onClosed && _this3._onClosed(_this3, item, toggleLink, Menu._findMenu(item));\n        }\n      }).catch(function () {});\n    }\n  }, {\n    key: \"_closeOther\",\n    value: function _closeOther(item, closeChildren) {\n      var opened = Menu._findChild(item.parentNode, ['menu-item', 'open']);\n\n      for (var i = 0, l = opened.length; i < l; i++) {\n        if (opened[i] !== item) this.close(opened[i], closeChildren);\n      }\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle(el) {\n      var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;\n\n      var item = Menu._getItem(el, true); // const toggleLink = Menu._getLink(el, true)\n\n\n      if (item.classList.contains('open')) this.close(item, closeChildren);else this.open(item, closeChildren);\n    }\n  }, {\n    key: \"_findUnopenedParent\",\n    value: function _findUnopenedParent(item, closeChildren) {\n      var tree = [];\n      var parentItem = null;\n\n      while (item) {\n        if (item.classList.contains('disabled')) {\n          parentItem = null;\n          tree = [];\n        } else {\n          if (!item.classList.contains('open')) parentItem = item;\n          tree.push(item);\n        }\n\n        item = Menu._findParent(item, 'menu-item', false);\n      }\n\n      if (!parentItem) return null;\n      if (tree.length === 1) return parentItem;\n      tree = tree.slice(0, tree.indexOf(parentItem));\n\n      for (var i = 0, l = tree.length; i < l; i++) {\n        tree[i].classList.add('open');\n\n        if (this._accordion) {\n          var openedItems = Menu._findChild(tree[i].parentNode, ['menu-item', 'open']);\n\n          for (var j = 0, k = openedItems.length; j < k; j++) {\n            if (openedItems[j] !== tree[i]) {\n              openedItems[j].classList.remove('open');\n\n              if (closeChildren) {\n                var openedChildren = openedItems[j].querySelectorAll('.menu-item.open');\n\n                for (var x = 0, z = openedChildren.length; x < z; x++) {\n                  openedChildren[x].classList.remove('open');\n                }\n              }\n            }\n          }\n        }\n      }\n\n      return parentItem;\n    }\n  }, {\n    key: \"_toggleAnimation\",\n    value: function _toggleAnimation(open, item, closeChildren) {\n      var _this4 = this;\n\n      var toggleLink = Menu._getLink(item, true);\n\n      var menu = Menu._findMenu(item);\n\n      Menu._unbindAnimationEndEvent(item);\n\n      var linkHeight = Math.round(toggleLink.getBoundingClientRect().height);\n      item.style.overflow = 'hidden';\n\n      var clearItemStyle = function clearItemStyle() {\n        item.classList.remove('menu-item-animating');\n        item.classList.remove('menu-item-closing');\n        item.style.overflow = null;\n        item.style.height = null;\n\n        _this4.update();\n      };\n\n      if (open) {\n        item.style.height = \"\".concat(linkHeight, \"px\");\n        item.classList.add('menu-item-animating');\n        item.classList.add('open');\n\n        Menu._bindAnimationEndEvent(item, function () {\n          clearItemStyle();\n\n          _this4._onOpened(_this4, item, toggleLink, menu);\n        });\n\n        setTimeout(function () {\n          item.style.height = \"\".concat(linkHeight + Math.round(menu.getBoundingClientRect().height), \"px\");\n        }, 50);\n      } else {\n        item.style.height = \"\".concat(linkHeight + Math.round(menu.getBoundingClientRect().height), \"px\");\n        item.classList.add('menu-item-animating');\n        item.classList.add('menu-item-closing');\n\n        Menu._bindAnimationEndEvent(item, function () {\n          item.classList.remove('open');\n          clearItemStyle();\n\n          if (closeChildren) {\n            var opened = item.querySelectorAll('.menu-item.open');\n\n            for (var i = 0, l = opened.length; i < l; i++) {\n              opened[i].classList.remove('open');\n            }\n          }\n\n          _this4._onClosed(_this4, item, toggleLink, menu);\n        });\n\n        setTimeout(function () {\n          item.style.height = \"\".concat(linkHeight, \"px\");\n        }, 50);\n      }\n    }\n  }, {\n    key: \"_getItemOffset\",\n    value: function _getItemOffset(item) {\n      var curItem = this._inner.childNodes[0];\n      var left = 0;\n\n      while (curItem !== item) {\n        if (curItem.tagName) {\n          left += Math.round(curItem.getBoundingClientRect().width);\n        }\n\n        curItem = curItem.nextSibling;\n      }\n\n      return left;\n    }\n  }, {\n    key: \"_innerWidth\",\n    get: function get() {\n      var items = this._inner.childNodes;\n      var width = 0;\n\n      for (var i = 0, l = items.length; i < l; i++) {\n        if (items[i].tagName) {\n          width += Math.round(items[i].getBoundingClientRect().width);\n        }\n      }\n\n      return width;\n    }\n  }, {\n    key: \"_innerPosition\",\n    get: function get() {\n      return parseInt(this._inner.style[this._rtl ? 'marginRight' : 'marginLeft'] || '0px', 10);\n    },\n    set: function set(value) {\n      this._inner.style[this._rtl ? 'marginRight' : 'marginLeft'] = \"\".concat(value, \"px\");\n      return value;\n    }\n  }, {\n    key: \"closeAll\",\n    value: function closeAll() {\n      var closeChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._closeChildren;\n\n      var opened = this._el.querySelectorAll('.menu-inner > .menu-item.open');\n\n      for (var i = 0, l = opened.length; i < l; i++) {\n        this.close(opened[i], closeChildren);\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this._scrollbar) {\n        this._scrollbar.update();\n      }\n    }\n  }, {\n    key: \"manageScroll\",\n    value: function manageScroll() {\n      var _window = window,\n          PerfectScrollbar = _window.PerfectScrollbar;\n      var menuInner = document.querySelector('.menu-inner');\n\n      if (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT) {\n        if (this._scrollbar !== null) {\n          // window.Helpers.menuPsScroll.destroy()\n          this._scrollbar.destroy();\n\n          this._scrollbar = null;\n        }\n\n        menuInner.classList.add('overflow-auto');\n      } else {\n        if (this._scrollbar === null) {\n          var menuScroll = new PerfectScrollbar(document.querySelector('.menu-inner'), {\n            suppressScrollX: true,\n            wheelPropagation: false\n          });\n          this._scrollbar = menuScroll;\n        }\n\n        menuInner.classList.remove('overflow-auto');\n      }\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this._el) return;\n\n      this._unbindEvents();\n\n      var items = this._el.querySelectorAll('.menu-item');\n\n      for (var i = 0, l = items.length; i < l; i++) {\n        Menu._unbindAnimationEndEvent(items[i]);\n\n        items[i].classList.remove('menu-item-animating');\n        items[i].classList.remove('open');\n        items[i].style.overflow = null;\n        items[i].style.height = null;\n      }\n\n      var menus = this._el.querySelectorAll('.menu-menu');\n\n      for (var i2 = 0, l2 = menus.length; i2 < l2; i2++) {\n        menus[i2].style.marginRight = null;\n        menus[i2].style.marginLeft = null;\n      }\n\n      this._el.classList.remove('menu-no-animation');\n\n      if (this._wrapper) {\n        this._prevBtn.parentNode.removeChild(this._prevBtn);\n\n        this._nextBtn.parentNode.removeChild(this._nextBtn);\n\n        this._wrapper.parentNode.insertBefore(this._inner, this._wrapper);\n\n        this._wrapper.parentNode.removeChild(this._wrapper);\n\n        this._inner.style.marginLeft = null;\n        this._inner.style.marginRight = null;\n      }\n\n      this._el.menuInstance = null;\n      delete this._el.menuInstance;\n      this._el = null;\n      this._animate = null;\n      this._accordion = null;\n      this._closeChildren = null;\n      this._onOpen = null;\n      this._onOpened = null;\n      this._onClose = null;\n      this._onClosed = null;\n\n      if (this._scrollbar) {\n        this._scrollbar.destroy();\n\n        this._scrollbar = null;\n      }\n\n      this._inner = null;\n      this._prevBtn = null;\n      this._wrapper = null;\n      this._nextBtn = null;\n    }\n  }], [{\n    key: \"childOf\",\n    value: function childOf(\n    /* child node */\n    c,\n    /* parent node */\n    p) {\n      // returns boolean\n      if (c.parentNode) {\n        while ((c = c.parentNode) && c !== p) {\n          ;\n        }\n\n        return !!c;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"_isRoot\",\n    value: function _isRoot(item) {\n      return !Menu._findParent(item, 'menu-item', false);\n    }\n  }, {\n    key: \"_findParent\",\n    value: function _findParent(el, cls) {\n      var throwError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      if (el.tagName.toUpperCase() === 'BODY') return null;\n      el = el.parentNode;\n\n      while (el.tagName.toUpperCase() !== 'BODY' && !el.classList.contains(cls)) {\n        el = el.parentNode;\n      }\n\n      el = el.tagName.toUpperCase() !== 'BODY' ? el : null;\n      if (!el && throwError) throw new Error(\"Cannot find `.\".concat(cls, \"` parent element\"));\n      return el;\n    }\n  }, {\n    key: \"_findChild\",\n    value: function _findChild(el, cls) {\n      var items = el.childNodes;\n      var found = [];\n\n      for (var i = 0, l = items.length; i < l; i++) {\n        if (items[i].classList) {\n          var passed = 0;\n\n          for (var j = 0; j < cls.length; j++) {\n            if (items[i].classList.contains(cls[j])) passed += 1;\n          }\n\n          if (cls.length === passed) found.push(items[i]);\n        }\n      }\n\n      return found;\n    }\n  }, {\n    key: \"_findMenu\",\n    value: function _findMenu(item) {\n      var curEl = item.childNodes[0];\n      var menu = null;\n\n      while (curEl && !menu) {\n        if (curEl.classList && curEl.classList.contains('menu-sub')) menu = curEl;\n        curEl = curEl.nextSibling;\n      }\n\n      if (!menu) throw new Error('Cannot find `.menu-sub` element for the current `.menu-toggle`');\n      return menu;\n    } // Has class\n\n  }, {\n    key: \"_hasClass\",\n    value: function _hasClass(cls) {\n      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.Helpers.ROOT_EL;\n      var result = false;\n      cls.split(' ').forEach(function (c) {\n        if (el.classList.contains(c)) result = true;\n      });\n      return result;\n    }\n  }, {\n    key: \"_getItem\",\n    value: function _getItem(el, toggle) {\n      var item = null;\n      var selector = toggle ? 'menu-toggle' : 'menu-link';\n\n      if (el.classList.contains('menu-item')) {\n        if (Menu._findChild(el, [selector]).length) item = el;\n      } else if (el.classList.contains(selector)) {\n        item = el.parentNode.classList.contains('menu-item') ? el.parentNode : null;\n      }\n\n      if (!item) {\n        throw new Error(\"\".concat(toggle ? 'Toggable ' : '', \"`.menu-item` element not found.\"));\n      }\n\n      return item;\n    }\n  }, {\n    key: \"_getLink\",\n    value: function _getLink(el, toggle) {\n      var found = [];\n      var selector = toggle ? 'menu-toggle' : 'menu-link';\n      if (el.classList.contains(selector)) found = [el];else if (el.classList.contains('menu-item')) found = Menu._findChild(el, [selector]);\n      if (!found.length) throw new Error(\"`\".concat(selector, \"` element not found.\"));\n      return found[0];\n    }\n  }, {\n    key: \"_bindAnimationEndEvent\",\n    value: function _bindAnimationEndEvent(el, handler) {\n      var cb = function cb(e) {\n        if (e.target !== el) return;\n\n        Menu._unbindAnimationEndEvent(el);\n\n        handler(e);\n      };\n\n      var duration = window.getComputedStyle(el).transitionDuration;\n      duration = parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);\n      el._menuAnimationEndEventCb = cb;\n      TRANSITION_EVENTS.forEach(function (ev) {\n        return el.addEventListener(ev, el._menuAnimationEndEventCb, false);\n      });\n      el._menuAnimationEndEventTimeout = setTimeout(function () {\n        cb({\n          target: el\n        });\n      }, duration + 50);\n    }\n  }, {\n    key: \"_promisify\",\n    value: function _promisify(fn) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      var result = fn.apply(void 0, args);\n\n      if (result instanceof Promise) {\n        return result;\n      }\n\n      if (result === false) {\n        return Promise.reject();\n      }\n\n      return Promise.resolve();\n    }\n  }, {\n    key: \"_unbindAnimationEndEvent\",\n    value: function _unbindAnimationEndEvent(el) {\n      var cb = el._menuAnimationEndEventCb;\n\n      if (el._menuAnimationEndEventTimeout) {\n        clearTimeout(el._menuAnimationEndEventTimeout);\n        el._menuAnimationEndEventTimeout = null;\n      }\n\n      if (!cb) return;\n      TRANSITION_EVENTS.forEach(function (ev) {\n        return el.removeEventListener(ev, cb, false);\n      });\n      el._menuAnimationEndEventCb = null;\n    }\n  }, {\n    key: \"setDisabled\",\n    value: function setDisabled(el, disabled) {\n      Menu._getItem(el, false).classList[disabled ? 'add' : 'remove']('disabled');\n    }\n  }, {\n    key: \"isActive\",\n    value: function isActive(el) {\n      return Menu._getItem(el, false).classList.contains('active');\n    }\n  }, {\n    key: \"isOpened\",\n    value: function isOpened(el) {\n      return Menu._getItem(el, false).classList.contains('open');\n    }\n  }, {\n    key: \"isDisabled\",\n    value: function isDisabled(el) {\n      return Menu._getItem(el, false).classList.contains('disabled');\n    }\n  }]);\n\n  return Menu;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tZW51LmpzPzg3N2UiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9FVkVOVFMiLCJNZW51IiwiZWwiLCJjb25maWciLCJfUFMiLCJfZWwiLCJfYW5pbWF0ZSIsImFuaW1hdGUiLCJfYWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiX2Nsb3NlQ2hpbGRyZW4iLCJCb29sZWFuIiwiY2xvc2VDaGlsZHJlbiIsIl9vbk9wZW4iLCJvbk9wZW4iLCJfb25PcGVuZWQiLCJvbk9wZW5lZCIsIl9vbkNsb3NlIiwib25DbG9zZSIsIl9vbkNsb3NlZCIsIm9uQ2xvc2VkIiwiX3BzU2Nyb2xsIiwiX3RvcFBhcmVudCIsIl9tZW51QmdDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsIlBlcmZlY3RTY3JvbGxiYXJMaWIiLCJ3aW5kb3ciLCJQZXJmZWN0U2Nyb2xsYmFyIiwiX3Njcm9sbGJhciIsInF1ZXJ5U2VsZWN0b3IiLCJzdXBwcmVzc1Njcm9sbFgiLCJ3aGVlbFByb3BhZ2F0aW9uIiwiX2hhc0NsYXNzIiwiSGVscGVycyIsIm1lbnVQc1Njcm9sbCIsIm1lbnVDbGFzc0xpc3QiLCJpIiwibGVuZ3RoIiwic3RhcnRzV2l0aCIsInNldEF0dHJpYnV0ZSIsIl9iaW5kRXZlbnRzIiwibWVudUluc3RhbmNlIiwiX2V2bnRFbENsaWNrIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjb250YWlucyIsIm1lbnVJdGVtIiwiX2ZpbmRQYXJlbnQiLCJjaGlsZE5vZGVzIiwidG9nZ2xlTGluayIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlIiwiaXNNb2JpbGVEZXZpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX2V2bnRXaW5kb3dSZXNpemUiLCJ1cGRhdGUiLCJfbGFzdFdpZHRoIiwiaW5uZXJXaWR0aCIsImhvcml6b250YWxNZW51VGVtcGxhdGUiLCJkb2N1bWVudCIsIl9ob3Jpem9udGFsIiwibWFuYWdlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9ldm50RWxNb3VzZU92ZXIiLCJfZXZudEVsTW91c2VPdXQiLCJfZXZudEJvZHlDbGljayIsImJvZHkiLCJfZXZudElubmVyTW91c2Vtb3ZlIiwiX2lubmVyIiwiX2V2bnRJbm5lck1vdXNlbGVhdmUiLCJpdGVtIiwiX2ZpbmRVbm9wZW5lZFBhcmVudCIsIl9nZXRJdGVtIiwiX2dldExpbmsiLCJfcHJvbWlzaWZ5IiwiX2ZpbmRNZW51IiwidGhlbiIsIl9pc1Jvb3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdG9nZ2xlQW5pbWF0aW9uIiwiX2Nsb3NlT3RoZXIiLCJjYXRjaCIsIl9hdXRvQ2xvc2UiLCJyZW1vdmUiLCJvcGVuZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibCIsIl9maW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwiY2xvc2UiLCJvcGVuIiwidHJlZSIsInBhcmVudEl0ZW0iLCJwdXNoIiwic2xpY2UiLCJpbmRleE9mIiwib3BlbmVkSXRlbXMiLCJqIiwiayIsIm9wZW5lZENoaWxkcmVuIiwieCIsInoiLCJtZW51IiwiX3VuYmluZEFuaW1hdGlvbkVuZEV2ZW50IiwibGlua0hlaWdodCIsIk1hdGgiLCJyb3VuZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInN0eWxlIiwib3ZlcmZsb3ciLCJjbGVhckl0ZW1TdHlsZSIsIl9iaW5kQW5pbWF0aW9uRW5kRXZlbnQiLCJzZXRUaW1lb3V0IiwiY3VySXRlbSIsImxlZnQiLCJ0YWdOYW1lIiwid2lkdGgiLCJuZXh0U2libGluZyIsIml0ZW1zIiwicGFyc2VJbnQiLCJfcnRsIiwidmFsdWUiLCJtZW51SW5uZXIiLCJMQVlPVVRfQlJFQUtQT0lOVCIsImRlc3Ryb3kiLCJtZW51U2Nyb2xsIiwiX3VuYmluZEV2ZW50cyIsIm1lbnVzIiwiaTIiLCJsMiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIl93cmFwcGVyIiwiX3ByZXZCdG4iLCJyZW1vdmVDaGlsZCIsIl9uZXh0QnRuIiwiaW5zZXJ0QmVmb3JlIiwiYyIsInAiLCJjbHMiLCJ0aHJvd0Vycm9yIiwidG9VcHBlckNhc2UiLCJFcnJvciIsImZvdW5kIiwicGFzc2VkIiwiY3VyRWwiLCJST09UX0VMIiwicmVzdWx0Iiwic3BsaXQiLCJmb3JFYWNoIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwiY2IiLCJkdXJhdGlvbiIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiX21lbnVBbmltYXRpb25FbmRFdmVudENiIiwiZXYiLCJfbWVudUFuaW1hdGlvbkVuZEV2ZW50VGltZW91dCIsImZuIiwiYXJncyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwiY2xlYXJUaW1lb3V0IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWlCLEdBQUcsQ0FBQyxlQUFELEVBQWtCLHFCQUFsQixFQUF5QyxnQkFBekMsQ0FBMUIsQyxDQUNBOztJQUVNQyxJO0FBQ0osZ0JBQVlDLEVBQVosRUFBeUM7QUFBQSxRQUF6QkMsTUFBeUIsdUVBQWhCLEVBQWdCOztBQUFBLFFBQVpDLEdBQVksdUVBQU4sSUFBTTs7QUFBQTs7QUFDdkMsU0FBS0MsR0FBTCxHQUFXSCxFQUFYO0FBQ0EsU0FBS0ksUUFBTCxHQUFnQkgsTUFBTSxDQUFDSSxPQUFQLEtBQW1CLEtBQW5DO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkwsTUFBTSxDQUFDTSxTQUFQLEtBQXFCLEtBQXZDO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkMsT0FBTyxDQUFDUixNQUFNLENBQUNTLGFBQVIsQ0FBN0I7O0FBRUEsU0FBS0MsT0FBTCxHQUFlVixNQUFNLENBQUNXLE1BQVAsSUFBa0IsWUFBTSxDQUFFLENBQXpDOztBQUNBLFNBQUtDLFNBQUwsR0FBaUJaLE1BQU0sQ0FBQ2EsUUFBUCxJQUFvQixZQUFNLENBQUUsQ0FBN0M7O0FBQ0EsU0FBS0MsUUFBTCxHQUFnQmQsTUFBTSxDQUFDZSxPQUFQLElBQW1CLFlBQU0sQ0FBRSxDQUEzQzs7QUFDQSxT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LFFBQUUsQ0FBQytKLHdCQUFILEdBQThCLElBQTlCO0FBQ0Q7OztXQVFELHFCQUFtQi9KLEVBQW5CLEVBQXVCd0ssUUFBdkIsRUFBaUM7QUFDL0J6SyxVQUFJLENBQUMwRSxRQUFMLENBQWN6RSxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCc0IsU0FBekIsQ0FBbUNrSixRQUFRLEdBQUcsS0FBSCxHQUFXLFFBQXRELEVBQWdFLFVBQWhFO0FBQ0Q7OztXQUVELGtCQUFnQnhLLEVBQWhCLEVBQW9CO0FBQ2xCLGFBQU9ELElBQUksQ0FBQzBFLFFBQUwsQ0FBY3pFLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUJzQixTQUF6QixDQUFtQ3VCLFFBQW5DLENBQTRDLFFBQTVDLENBQVA7QUFDRDs7O1dBRUQsa0JBQWdCN0MsRUFBaEIsRUFBb0I7QUFDbEIsYUFBT0QsSUFBSSxDQUFDMEUsUUFBTCxDQUFjekUsRUFBZCxFQUFrQixLQUFsQixFQUF5QnNCLFNBQXpCLENBQW1DdUIsUUFBbkMsQ0FBNEMsTUFBNUMsQ0FBUDtBQUNEOzs7V0FFRCxvQkFBa0I3QyxFQUFsQixFQUFzQjtBQUNwQixhQUFPRCxJQUFJLENBQUMwRSxRQUFMLENBQWN6RSxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCc0IsU0FBekIsQ0FBbUN1QixRQUFuQyxDQUE0QyxVQUE1QyxDQUFQO0FBQ0QiLCJmaWxlIjoiLi9qcy9tZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVFJBTlNJVElPTl9FVkVOVFMgPSBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsICdvVHJhbnNpdGlvbkVuZCddXHJcbi8vIGNvbnN0IFRSQU5TSVRJT05fUFJPUEVSVElFUyA9IFsndHJhbnNpdGlvbicsICdNb3pUcmFuc2l0aW9uJywgJ3dlYmtpdFRyYW5zaXRpb24nLCAnV2Via2l0VHJhbnNpdGlvbicsICdPVHJhbnNpdGlvbiddXHJcblxyXG5jbGFzcyBNZW51IHtcclxuICBjb25zdHJ1Y3RvcihlbCwgY29uZmlnID0ge30sIF9QUyA9IG51bGwpIHtcclxuICAgIHRoaXMuX2VsID0gZWxcclxuICAgIHRoaXMuX2FuaW1hdGUgPSBjb25maWcuYW5pbWF0ZSAhPT0gZmFsc2VcclxuICAgIHRoaXMuX2FjY29yZGlvbiA9IGNvbmZpZy5hY2NvcmRpb24gIT09IGZhbHNlXHJcbiAgICB0aGlzLl9jbG9zZUNoaWxkcmVuID0gQm9vbGVhbihjb25maWcuY2xvc2VDaGlsZHJlbilcclxuXHJcbiAgICB0aGlzLl9vbk9wZW4gPSBjb25maWcub25PcGVuIHx8ICgoKSA9PiB7fSlcclxuICAgIHRoaXMuX29uT3BlbmVkID0gY29uZmlnLm9uT3BlbmVkIHx8ICgoKSA9PiB7fSlcclxuICAgIHRoaXMuX29uQ2xvc2UgPSBjb25maWcub25DbG9zZSB8fCAoKCkgPT4ge30pXHJcbiAgICB0aGlzLl9vbkNsb3NlZCA9IGNvbmZpZy5vbkNsb3NlZCB8fCAoKCkgPT4ge30pXHJcblxyXG4gICAgdGhpcy5fcHNTY3JvbGwgPSBudWxsXHJcbiAgICB0aGlzLl90b3BQYXJlbnQgPSBudWxsXHJcbiAgICB0aGlzLl9tZW51QmdDbGFzcyA9IG51bGxcclxuXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdtZW51JylcclxuICAgIGVsLmNsYXNzTGlzdFt0aGlzLl9hbmltYXRlID8gJ3JlbW92ZScgOiAnYWRkJ10oJ21lbnUtbm8tYW5pbWF0aW9uJykgLy8gY2hlY2tcclxuXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdtZW51LXZlcnRpY2FsJylcclxuXHJcbiAgICBjb25zdCBQZXJmZWN0U2Nyb2xsYmFyTGliID0gX1BTIHx8IHdpbmRvdy5QZXJmZWN0U2Nyb2xsYmFyXHJcblxyXG4gICAgaWYgKFBlcmZlY3RTY3JvbGxiYXJMaWIpIHtcclxuICAgICAgdGhpcy5fc2Nyb2xsYmFyID0gbmV3IFBlcmZlY3RTY3JvbGxiYXJMaWIoZWwucXVlcnlTZWxlY3RvcignLm1lbnUtaW5uZXInKSwge1xyXG4gICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiAhTWVudS5faGFzQ2xhc3MoJ2xheW91dC1tZW51LWZpeGVkIGxheW91dC1tZW51LWZpeGVkLW9mZmNhbnZhcycpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB3aW5kb3cuSGVscGVycy5tZW51UHNTY3JvbGwgPSB0aGlzLl9zY3JvbGxiYXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWlubmVyJykuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctYXV0bycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGRhdGEgYXR0cmlidXRlIGZvciBiZyBjb2xvciBjbGFzcyBvZiBtZW51XHJcbiAgICBjb25zdCBtZW51Q2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Q2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChtZW51Q2xhc3NMaXN0W2ldLnN0YXJ0c1dpdGgoJ2JnLScpKSB7XHJcbiAgICAgICAgdGhpcy5fbWVudUJnQ2xhc3MgPSBtZW51Q2xhc3NMaXN0W2ldXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1iZy1jbGFzcycsIHRoaXMuX21lbnVCZ0NsYXNzKVxyXG5cclxuICAgIHRoaXMuX2JpbmRFdmVudHMoKVxyXG5cclxuICAgIC8vIExpbmsgbWVudSBpbnN0YW5jZSB0byBlbGVtZW50XHJcbiAgICBlbC5tZW51SW5zdGFuY2UgPSB0aGlzXHJcbiAgfVxyXG5cclxuICBfYmluZEV2ZW50cygpIHtcclxuICAgIC8vIENsaWNrIEV2ZW50XHJcbiAgICB0aGlzLl9ldm50RWxDbGljayA9IGUgPT4ge1xyXG4gICAgICAvLyBGaW5kIHRvcCBwYXJlbnQgZWxlbWVudFxyXG4gICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgndWwnKSAmJiBlLnRhcmdldC5jbG9zZXN0KCd1bCcpLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pbm5lcicpKSB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBNZW51Ll9maW5kUGFyZW50KGUudGFyZ2V0LCAnbWVudS1pdGVtJywgZmFsc2UpXHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgICAgIGlmIChtZW51SXRlbSkgdGhpcy5fdG9wUGFyZW50ID0gbWVudUl0ZW0uY2hpbGROb2Rlc1swXVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXRvZ2dsZScpXHJcbiAgICAgICAgPyBlLnRhcmdldFxyXG4gICAgICAgIDogTWVudS5fZmluZFBhcmVudChlLnRhcmdldCwgJ21lbnUtdG9nZ2xlJywgZmFsc2UpXHJcblxyXG4gICAgICBpZiAodG9nZ2xlTGluaykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZiAodG9nZ2xlTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG92ZXInKSAhPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSh0b2dnbGVMaW5rKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHdpbmRvdy5IZWxwZXJzLmlzTW9iaWxlRGV2aWNlKSB0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2V2bnRFbENsaWNrKVxyXG5cclxuICAgIHRoaXMuX2V2bnRXaW5kb3dSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgaWYgKHRoaXMuX2xhc3RXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9sYXN0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaG9yaXpvbnRhbE1lbnVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZW1wbGF0ZV49J2hvcml6b250YWwtbWVudSddXCIpXHJcbiAgICAgIGlmICghdGhpcy5faG9yaXpvbnRhbCAmJiAhaG9yaXpvbnRhbE1lbnVUZW1wbGF0ZSkgdGhpcy5tYW5hZ2VTY3JvbGwoKVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2V2bnRXaW5kb3dSZXNpemUpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hpbGRPZigvKiBjaGlsZCBub2RlICovIGMsIC8qIHBhcmVudCBub2RlICovIHApIHtcclxuICAgIC8vIHJldHVybnMgYm9vbGVhblxyXG4gICAgaWYgKGMucGFyZW50Tm9kZSkge1xyXG4gICAgICB3aGlsZSAoKGMgPSBjLnBhcmVudE5vZGUpICYmIGMgIT09IHApO1xyXG4gICAgICByZXR1cm4gISFjXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIF91bmJpbmRFdmVudHMoKSB7XHJcbiAgICBpZiAodGhpcy5fZXZudEVsQ2xpY2spIHtcclxuICAgICAgdGhpcy5fZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ldm50RWxDbGljaylcclxuICAgICAgdGhpcy5fZXZudEVsQ2xpY2sgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2V2bnRFbE1vdXNlT3Zlcikge1xyXG4gICAgICB0aGlzLl9lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9ldm50RWxNb3VzZU92ZXIpXHJcbiAgICAgIHRoaXMuX2V2bnRFbE1vdXNlT3ZlciA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZXZudEVsTW91c2VPdXQpIHtcclxuICAgICAgdGhpcy5fZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLl9ldm50RWxNb3VzZU91dClcclxuICAgICAgdGhpcy5fZXZudEVsTW91c2VPdXQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2V2bnRXaW5kb3dSZXNpemUpIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2V2bnRXaW5kb3dSZXNpemUpXHJcbiAgICAgIHRoaXMuX2V2bnRXaW5kb3dSZXNpemUgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2V2bnRCb2R5Q2xpY2spIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2V2bnRCb2R5Q2xpY2spXHJcbiAgICAgIHRoaXMuX2V2bnRCb2R5Q2xpY2sgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2V2bnRJbm5lck1vdXNlbW92ZSkge1xyXG4gICAgICB0aGlzLl9pbm5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9ldm50SW5uZXJNb3VzZW1vdmUpXHJcbiAgICAgIHRoaXMuX2V2bnRJbm5lck1vdXNlbW92ZSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZXZudElubmVyTW91c2VsZWF2ZSkge1xyXG4gICAgICB0aGlzLl9pbm5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5fZXZudElubmVyTW91c2VsZWF2ZSlcclxuICAgICAgdGhpcy5fZXZudElubmVyTW91c2VsZWF2ZSA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBfaXNSb290KGl0ZW0pIHtcclxuICAgIHJldHVybiAhTWVudS5fZmluZFBhcmVudChpdGVtLCAnbWVudS1pdGVtJywgZmFsc2UpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2ZpbmRQYXJlbnQoZWwsIGNscywgdGhyb3dFcnJvciA9IHRydWUpIHtcclxuICAgIGlmIChlbC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdCT0RZJykgcmV0dXJuIG51bGxcclxuICAgIGVsID0gZWwucGFyZW50Tm9kZVxyXG4gICAgd2hpbGUgKGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0JPRFknICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGVcclxuICAgIH1cclxuXHJcbiAgICBlbCA9IGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0JPRFknID8gZWwgOiBudWxsXHJcblxyXG4gICAgaWYgKCFlbCAmJiB0aHJvd0Vycm9yKSB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIFxcYC4ke2Nsc31cXGAgcGFyZW50IGVsZW1lbnRgKVxyXG5cclxuICAgIHJldHVybiBlbFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9maW5kQ2hpbGQoZWwsIGNscykge1xyXG4gICAgY29uc3QgaXRlbXMgPSBlbC5jaGlsZE5vZGVzXHJcbiAgICBjb25zdCBmb3VuZCA9IFtdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKGl0ZW1zW2ldLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGxldCBwYXNzZWQgPSAwXHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2xzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsc1tqXSkpIHBhc3NlZCArPSAxXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xzLmxlbmd0aCA9PT0gcGFzc2VkKSBmb3VuZC5wdXNoKGl0ZW1zW2ldKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvdW5kXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2ZpbmRNZW51KGl0ZW0pIHtcclxuICAgIGxldCBjdXJFbCA9IGl0ZW0uY2hpbGROb2Rlc1swXVxyXG4gICAgbGV0IG1lbnUgPSBudWxsXHJcblxyXG4gICAgd2hpbGUgKGN1ckVsICYmICFtZW51KSB7XHJcbiAgICAgIGlmIChjdXJFbC5jbGFzc0xpc3QgJiYgY3VyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXN1YicpKSBtZW51ID0gY3VyRWxcclxuICAgICAgY3VyRWwgPSBjdXJFbC5uZXh0U2libGluZ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbWVudSkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBgLm1lbnUtc3ViYCBlbGVtZW50IGZvciB0aGUgY3VycmVudCBgLm1lbnUtdG9nZ2xlYCcpXHJcblxyXG4gICAgcmV0dXJuIG1lbnVcclxuICB9XHJcblxyXG4gIC8vIEhhcyBjbGFzc1xyXG4gIHN0YXRpYyBfaGFzQ2xhc3MoY2xzLCBlbCA9IHdpbmRvdy5IZWxwZXJzLlJPT1RfRUwpIHtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZVxyXG5cclxuICAgIGNscy5zcGxpdCgnICcpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYykpIHJlc3VsdCA9IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuXHJcbiAgb3BlbihlbCwgY2xvc2VDaGlsZHJlbiA9IHRoaXMuX2Nsb3NlQ2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9maW5kVW5vcGVuZWRQYXJlbnQoTWVudS5fZ2V0SXRlbShlbCwgdHJ1ZSksIGNsb3NlQ2hpbGRyZW4pXHJcblxyXG4gICAgaWYgKCFpdGVtKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVMaW5rID0gTWVudS5fZ2V0TGluayhpdGVtLCB0cnVlKVxyXG5cclxuICAgIE1lbnUuX3Byb21pc2lmeSh0aGlzLl9vbk9wZW4sIHRoaXMsIGl0ZW0sIHRvZ2dsZUxpbmssIE1lbnUuX2ZpbmRNZW51KGl0ZW0pKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ob3Jpem9udGFsIHx8ICFNZW51Ll9pc1Jvb3QoaXRlbSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRlICYmICF0aGlzLl9ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5fdG9nZ2xlQW5pbWF0aW9uKHRydWUsIGl0ZW0sIGZhbHNlKSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjY29yZGlvbikgdGhpcy5fY2xvc2VPdGhlcihpdGVtLCBjbG9zZUNoaWxkcmVuKVxyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9hbmltYXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgdGhpcy5fb25PcGVuZWQgJiYgdGhpcy5fb25PcGVuZWQodGhpcywgaXRlbSwgdG9nZ2xlTGluaywgTWVudS5fZmluZE1lbnUoaXRlbSkpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIHRoaXMuX29uT3BlbmVkICYmIHRoaXMuX29uT3BlbmVkKHRoaXMsIGl0ZW0sIHRvZ2dsZUxpbmssIE1lbnUuX2ZpbmRNZW51KGl0ZW0pKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWNjb3JkaW9uKSB0aGlzLl9jbG9zZU90aGVyKGl0ZW0sIGNsb3NlQ2hpbGRyZW4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgIHRoaXMuX29uT3BlbmVkICYmIHRoaXMuX29uT3BlbmVkKHRoaXMsIGl0ZW0sIHRvZ2dsZUxpbmssIE1lbnUuX2ZpbmRNZW51KGl0ZW0pKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoZWwsIGNsb3NlQ2hpbGRyZW4gPSB0aGlzLl9jbG9zZUNoaWxkcmVuLCBfYXV0b0Nsb3NlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBNZW51Ll9nZXRJdGVtKGVsLCB0cnVlKVxyXG4gICAgY29uc3QgdG9nZ2xlTGluayA9IE1lbnUuX2dldExpbmsoZWwsIHRydWUpXHJcblxyXG4gICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpIHx8IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSByZXR1cm5cclxuXHJcbiAgICBNZW51Ll9wcm9taXNpZnkodGhpcy5fb25DbG9zZSwgdGhpcywgaXRlbSwgdG9nZ2xlTGluaywgTWVudS5fZmluZE1lbnUoaXRlbSksIF9hdXRvQ2xvc2UpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2hvcml6b250YWwgfHwgIU1lbnUuX2lzUm9vdChpdGVtKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGUgJiYgIXRoaXMuX2hvcml6b250YWwpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLl90b2dnbGVBbmltYXRpb24oZmFsc2UsIGl0ZW0sIGNsb3NlQ2hpbGRyZW4pKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuXHJcbiAgICAgICAgICAgIGlmIChjbG9zZUNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb3BlbmVkID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLm9wZW4nKVxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gb3BlbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykgb3BlbmVkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2xvc2VkICYmIHRoaXMuX29uQ2xvc2VkKHRoaXMsIGl0ZW0sIHRvZ2dsZUxpbmssIE1lbnUuX2ZpbmRNZW51KGl0ZW0pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICB0aGlzLl9vbkNsb3NlZCAmJiB0aGlzLl9vbkNsb3NlZCh0aGlzLCBpdGVtLCB0b2dnbGVMaW5rLCBNZW51Ll9maW5kTWVudShpdGVtKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuICB9XHJcblxyXG4gIF9jbG9zZU90aGVyKGl0ZW0sIGNsb3NlQ2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IG9wZW5lZCA9IE1lbnUuX2ZpbmRDaGlsZChpdGVtLnBhcmVudE5vZGUsIFsnbWVudS1pdGVtJywgJ29wZW4nXSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9wZW5lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKG9wZW5lZFtpXSAhPT0gaXRlbSkgdGhpcy5jbG9zZShvcGVuZWRbaV0sIGNsb3NlQ2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoZWwsIGNsb3NlQ2hpbGRyZW4gPSB0aGlzLl9jbG9zZUNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBpdGVtID0gTWVudS5fZ2V0SXRlbShlbCwgdHJ1ZSlcclxuICAgIC8vIGNvbnN0IHRvZ2dsZUxpbmsgPSBNZW51Ll9nZXRMaW5rKGVsLCB0cnVlKVxyXG5cclxuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB0aGlzLmNsb3NlKGl0ZW0sIGNsb3NlQ2hpbGRyZW4pXHJcbiAgICBlbHNlIHRoaXMub3BlbihpdGVtLCBjbG9zZUNoaWxkcmVuKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9nZXRJdGVtKGVsLCB0b2dnbGUpIHtcclxuICAgIGxldCBpdGVtID0gbnVsbFxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0b2dnbGUgPyAnbWVudS10b2dnbGUnIDogJ21lbnUtbGluaydcclxuXHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0nKSkge1xyXG4gICAgICBpZiAoTWVudS5fZmluZENoaWxkKGVsLCBbc2VsZWN0b3JdKS5sZW5ndGgpIGl0ZW0gPSBlbFxyXG4gICAgfSBlbHNlIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpKSB7XHJcbiAgICAgIGl0ZW0gPSBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pdGVtJykgPyBlbC5wYXJlbnROb2RlIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dG9nZ2xlID8gJ1RvZ2dhYmxlICcgOiAnJ31cXGAubWVudS1pdGVtXFxgIGVsZW1lbnQgbm90IGZvdW5kLmApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBfZ2V0TGluayhlbCwgdG9nZ2xlKSB7XHJcbiAgICBsZXQgZm91bmQgPSBbXVxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0b2dnbGUgPyAnbWVudS10b2dnbGUnIDogJ21lbnUtbGluaydcclxuXHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSkgZm91bmQgPSBbZWxdXHJcbiAgICBlbHNlIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbScpKSBmb3VuZCA9IE1lbnUuX2ZpbmRDaGlsZChlbCwgW3NlbGVjdG9yXSlcclxuXHJcbiAgICBpZiAoIWZvdW5kLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGBcXGAke3NlbGVjdG9yfVxcYCBlbGVtZW50IG5vdCBmb3VuZC5gKVxyXG5cclxuICAgIHJldHVybiBmb3VuZFswXVxyXG4gIH1cclxuXHJcbiAgX2ZpbmRVbm9wZW5lZFBhcmVudChpdGVtLCBjbG9zZUNoaWxkcmVuKSB7XHJcbiAgICBsZXQgdHJlZSA9IFtdXHJcbiAgICBsZXQgcGFyZW50SXRlbSA9IG51bGxcclxuXHJcbiAgICB3aGlsZSAoaXRlbSkge1xyXG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICBwYXJlbnRJdGVtID0gbnVsbFxyXG4gICAgICAgIHRyZWUgPSBbXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkgcGFyZW50SXRlbSA9IGl0ZW1cclxuICAgICAgICB0cmVlLnB1c2goaXRlbSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbSA9IE1lbnUuX2ZpbmRQYXJlbnQoaXRlbSwgJ21lbnUtaXRlbScsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFyZW50SXRlbSkgcmV0dXJuIG51bGxcclxuICAgIGlmICh0cmVlLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHBhcmVudEl0ZW1cclxuXHJcbiAgICB0cmVlID0gdHJlZS5zbGljZSgwLCB0cmVlLmluZGV4T2YocGFyZW50SXRlbSkpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0cmVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB0cmVlW2ldLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2FjY29yZGlvbikge1xyXG4gICAgICAgIGNvbnN0IG9wZW5lZEl0ZW1zID0gTWVudS5fZmluZENoaWxkKHRyZWVbaV0ucGFyZW50Tm9kZSwgWydtZW51LWl0ZW0nLCAnb3BlbiddKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMCwgayA9IG9wZW5lZEl0ZW1zLmxlbmd0aDsgaiA8IGs7IGorKykge1xyXG4gICAgICAgICAgaWYgKG9wZW5lZEl0ZW1zW2pdICE9PSB0cmVlW2ldKSB7XHJcbiAgICAgICAgICAgIG9wZW5lZEl0ZW1zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNsb3NlQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICBjb25zdCBvcGVuZWRDaGlsZHJlbiA9IG9wZW5lZEl0ZW1zW2pdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0ub3BlbicpXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIHogPSBvcGVuZWRDaGlsZHJlbi5sZW5ndGg7IHggPCB6OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIG9wZW5lZENoaWxkcmVuW3hdLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnRJdGVtXHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQW5pbWF0aW9uKG9wZW4sIGl0ZW0sIGNsb3NlQ2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBNZW51Ll9nZXRMaW5rKGl0ZW0sIHRydWUpXHJcbiAgICBjb25zdCBtZW51ID0gTWVudS5fZmluZE1lbnUoaXRlbSlcclxuXHJcbiAgICBNZW51Ll91bmJpbmRBbmltYXRpb25FbmRFdmVudChpdGVtKVxyXG5cclxuICAgIGNvbnN0IGxpbmtIZWlnaHQgPSBNYXRoLnJvdW5kKHRvZ2dsZUxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KVxyXG5cclxuICAgIGl0ZW0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG5cclxuICAgIGNvbnN0IGNsZWFySXRlbVN0eWxlID0gKCkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1hbmltYXRpbmcnKVxyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1jbG9zaW5nJylcclxuICAgICAgaXRlbS5zdHlsZS5vdmVyZmxvdyA9IG51bGxcclxuICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSBudWxsXHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wZW4pIHtcclxuICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSBgJHtsaW5rSGVpZ2h0fXB4YFxyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1hbmltYXRpbmcnKVxyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG5cclxuICAgICAgTWVudS5fYmluZEFuaW1hdGlvbkVuZEV2ZW50KGl0ZW0sICgpID0+IHtcclxuICAgICAgICBjbGVhckl0ZW1TdHlsZSgpXHJcbiAgICAgICAgdGhpcy5fb25PcGVuZWQodGhpcywgaXRlbSwgdG9nZ2xlTGluaywgbWVudSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gYCR7bGlua0hlaWdodCArIE1hdGgucm91bmQobWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpfXB4YFxyXG4gICAgICB9LCA1MClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gYCR7bGlua0hlaWdodCArIE1hdGgucm91bmQobWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpfXB4YFxyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1hbmltYXRpbmcnKVxyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jbG9zaW5nJylcclxuXHJcbiAgICAgIE1lbnUuX2JpbmRBbmltYXRpb25FbmRFdmVudChpdGVtLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgICAgICBjbGVhckl0ZW1TdHlsZSgpXHJcblxyXG4gICAgICAgIGlmIChjbG9zZUNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBjb25zdCBvcGVuZWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0ub3BlbicpXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9wZW5lZC5sZW5ndGg7IGkgPCBsOyBpKyspIG9wZW5lZFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX29uQ2xvc2VkKHRoaXMsIGl0ZW0sIHRvZ2dsZUxpbmssIG1lbnUpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9IGAke2xpbmtIZWlnaHR9cHhgXHJcbiAgICAgIH0sIDUwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9iaW5kQW5pbWF0aW9uRW5kRXZlbnQoZWwsIGhhbmRsZXIpIHtcclxuICAgIGNvbnN0IGNiID0gZSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZWwpIHJldHVyblxyXG4gICAgICBNZW51Ll91bmJpbmRBbmltYXRpb25FbmRFdmVudChlbClcclxuICAgICAgaGFuZGxlcihlKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb25cclxuICAgIGR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbikgKiAoZHVyYXRpb24uaW5kZXhPZignbXMnKSAhPT0gLTEgPyAxIDogMTAwMClcclxuXHJcbiAgICBlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50Q2IgPSBjYlxyXG4gICAgVFJBTlNJVElPTl9FVkVOVFMuZm9yRWFjaChldiA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGV2LCBlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50Q2IsIGZhbHNlKSlcclxuXHJcbiAgICBlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYih7IHRhcmdldDogZWwgfSlcclxuICAgIH0sIGR1cmF0aW9uICsgNTApXHJcbiAgfVxyXG5cclxuICBfZ2V0SXRlbU9mZnNldChpdGVtKSB7XHJcbiAgICBsZXQgY3VySXRlbSA9IHRoaXMuX2lubmVyLmNoaWxkTm9kZXNbMF1cclxuICAgIGxldCBsZWZ0ID0gMFxyXG5cclxuICAgIHdoaWxlIChjdXJJdGVtICE9PSBpdGVtKSB7XHJcbiAgICAgIGlmIChjdXJJdGVtLnRhZ05hbWUpIHtcclxuICAgICAgICBsZWZ0ICs9IE1hdGgucm91bmQoY3VySXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aClcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VySXRlbSA9IGN1ckl0ZW0ubmV4dFNpYmxpbmdcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGVmdFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9wcm9taXNpZnkoZm4sIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpXHJcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgfVxyXG5cclxuICBnZXQgX2lubmVyV2lkdGgoKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2lubmVyLmNoaWxkTm9kZXNcclxuICAgIGxldCB3aWR0aCA9IDBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAoaXRlbXNbaV0udGFnTmFtZSkge1xyXG4gICAgICAgIHdpZHRoICs9IE1hdGgucm91bmQoaXRlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2lkdGhcclxuICB9XHJcblxyXG4gIGdldCBfaW5uZXJQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9pbm5lci5zdHlsZVt0aGlzLl9ydGwgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnXSB8fCAnMHB4JywgMTApXHJcbiAgfVxyXG5cclxuICBzZXQgX2lubmVyUG9zaXRpb24odmFsdWUpIHtcclxuICAgIHRoaXMuX2lubmVyLnN0eWxlW3RoaXMuX3J0bCA/ICdtYXJnaW5SaWdodCcgOiAnbWFyZ2luTGVmdCddID0gYCR7dmFsdWV9cHhgXHJcbiAgICByZXR1cm4gdmFsdWVcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfdW5iaW5kQW5pbWF0aW9uRW5kRXZlbnQoZWwpIHtcclxuICAgIGNvbnN0IGNiID0gZWwuX21lbnVBbmltYXRpb25FbmRFdmVudENiXHJcblxyXG4gICAgaWYgKGVsLl9tZW51QW5pbWF0aW9uRW5kRXZlbnRUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dChlbC5fbWVudUFuaW1hdGlvbkVuZEV2ZW50VGltZW91dClcclxuICAgICAgZWwuX21lbnVBbmltYXRpb25FbmRFdmVudFRpbWVvdXQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjYikgcmV0dXJuXHJcblxyXG4gICAgVFJBTlNJVElPTl9FVkVOVFMuZm9yRWFjaChldiA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBjYiwgZmFsc2UpKVxyXG4gICAgZWwuX21lbnVBbmltYXRpb25FbmRFdmVudENiID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgY2xvc2VBbGwoY2xvc2VDaGlsZHJlbiA9IHRoaXMuX2Nsb3NlQ2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IG9wZW5lZCA9IHRoaXMuX2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWlubmVyID4gLm1lbnUtaXRlbS5vcGVuJylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IG9wZW5lZC5sZW5ndGg7IGkgPCBsOyBpKyspIHRoaXMuY2xvc2Uob3BlbmVkW2ldLCBjbG9zZUNoaWxkcmVuKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldERpc2FibGVkKGVsLCBkaXNhYmxlZCkge1xyXG4gICAgTWVudS5fZ2V0SXRlbShlbCwgZmFsc2UpLmNsYXNzTGlzdFtkaXNhYmxlZCA/ICdhZGQnIDogJ3JlbW92ZSddKCdkaXNhYmxlZCcpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNBY3RpdmUoZWwpIHtcclxuICAgIHJldHVybiBNZW51Ll9nZXRJdGVtKGVsLCBmYWxzZSkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzT3BlbmVkKGVsKSB7XHJcbiAgICByZXR1cm4gTWVudS5fZ2V0SXRlbShlbCwgZmFsc2UpLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNEaXNhYmxlZChlbCkge1xyXG4gICAgcmV0dXJuIE1lbnUuX2dldEl0ZW0oZWwsIGZhbHNlKS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9zY3JvbGxiYXIpIHtcclxuICAgICAgdGhpcy5fc2Nyb2xsYmFyLnVwZGF0ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYW5hZ2VTY3JvbGwoKSB7XHJcbiAgICBjb25zdCB7IFBlcmZlY3RTY3JvbGxiYXIgfSA9IHdpbmRvd1xyXG4gICAgY29uc3QgbWVudUlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaW5uZXInKVxyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHdpbmRvdy5IZWxwZXJzLkxBWU9VVF9CUkVBS1BPSU5UKSB7XHJcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxiYXIgIT09IG51bGwpIHtcclxuICAgICAgICAvLyB3aW5kb3cuSGVscGVycy5tZW51UHNTY3JvbGwuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsYmFyLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMuX3Njcm9sbGJhciA9IG51bGxcclxuICAgICAgfVxyXG4gICAgICBtZW51SW5uZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctYXV0bycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5fc2Nyb2xsYmFyID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgbWVudVNjcm9sbCA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWlubmVyJyksIHtcclxuICAgICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgIHdoZWVsUHJvcGFnYXRpb246IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9zY3JvbGxiYXIgPSBtZW51U2Nyb2xsXHJcbiAgICAgIH1cclxuICAgICAgbWVudUlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWF1dG8nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICghdGhpcy5fZWwpIHJldHVyblxyXG5cclxuICAgIHRoaXMuX3VuYmluZEV2ZW50cygpXHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9lbC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJylcclxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIE1lbnUuX3VuYmluZEFuaW1hdGlvbkVuZEV2ZW50KGl0ZW1zW2ldKVxyXG4gICAgICBpdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWl0ZW0tYW5pbWF0aW5nJylcclxuICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgIGl0ZW1zW2ldLnN0eWxlLm92ZXJmbG93ID0gbnVsbFxyXG4gICAgICBpdGVtc1tpXS5zdHlsZS5oZWlnaHQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVudXMgPSB0aGlzLl9lbC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1tZW51JylcclxuICAgIGZvciAobGV0IGkyID0gMCwgbDIgPSBtZW51cy5sZW5ndGg7IGkyIDwgbDI7IGkyKyspIHtcclxuICAgICAgbWVudXNbaTJdLnN0eWxlLm1hcmdpblJpZ2h0ID0gbnVsbFxyXG4gICAgICBtZW51c1tpMl0uc3R5bGUubWFyZ2luTGVmdCA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9lbC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW5vLWFuaW1hdGlvbicpXHJcblxyXG4gICAgaWYgKHRoaXMuX3dyYXBwZXIpIHtcclxuICAgICAgdGhpcy5fcHJldkJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX3ByZXZCdG4pXHJcbiAgICAgIHRoaXMuX25leHRCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9uZXh0QnRuKVxyXG4gICAgICB0aGlzLl93cmFwcGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuX2lubmVyLCB0aGlzLl93cmFwcGVyKVxyXG4gICAgICB0aGlzLl93cmFwcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fd3JhcHBlcilcclxuICAgICAgdGhpcy5faW5uZXIuc3R5bGUubWFyZ2luTGVmdCA9IG51bGxcclxuICAgICAgdGhpcy5faW5uZXIuc3R5bGUubWFyZ2luUmlnaHQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWwubWVudUluc3RhbmNlID0gbnVsbFxyXG4gICAgZGVsZXRlIHRoaXMuX2VsLm1lbnVJbnN0YW5jZVxyXG5cclxuICAgIHRoaXMuX2VsID0gbnVsbFxyXG4gICAgdGhpcy5fYW5pbWF0ZSA9IG51bGxcclxuICAgIHRoaXMuX2FjY29yZGlvbiA9IG51bGxcclxuICAgIHRoaXMuX2Nsb3NlQ2hpbGRyZW4gPSBudWxsXHJcbiAgICB0aGlzLl9vbk9wZW4gPSBudWxsXHJcbiAgICB0aGlzLl9vbk9wZW5lZCA9IG51bGxcclxuICAgIHRoaXMuX29uQ2xvc2UgPSBudWxsXHJcbiAgICB0aGlzLl9vbkNsb3NlZCA9IG51bGxcclxuICAgIGlmICh0aGlzLl9zY3JvbGxiYXIpIHtcclxuICAgICAgdGhpcy5fc2Nyb2xsYmFyLmRlc3Ryb3koKVxyXG4gICAgICB0aGlzLl9zY3JvbGxiYXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbm5lciA9IG51bGxcclxuICAgIHRoaXMuX3ByZXZCdG4gPSBudWxsXHJcbiAgICB0aGlzLl93cmFwcGVyID0gbnVsbFxyXG4gICAgdGhpcy5fbmV4dEJ0biA9IG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1lbnUgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/menu.js\n");

/***/ })

/******/ })));

jQuery(document).ready(function(){

  //Change input date format to dd-mm-yyyy in Invoice ~~~~~~~~~~~~~
    flatpickr("#basic-default-date", {
      dateFormat: "d-m-Y"
    });


//Change input date format to dd-mm-yyyy in Receipt ~~~~~~~~~~~~~
    flatpickr("#dt-receipt", {
      dateFormat: "d-m-Y"
    });
    flatpickr("#dt-trans-bank", {
      dateFormat: "d-m-Y"
    });


  //Sidemenu Toggle~~~~~~~
  jQuery('.menu-slide').click(function(){
    jQuery('.layout-menu').toggleClass('side-menu');
    })

  //Covert HTML recipt to PDF for preview~~~
    jQuery('#btn-genarate-pdf-receipt').click(function(){
      jQuery("#receipt-pdf").printThis();
    })

  //Covert HTML invoice to PDF for preview~~~
    jQuery('#btn-genarate-pdf-invoice').click(function(){
      jQuery("#invoice-pdf").printThis();
    })

  //Duplicat Money Receipt HTML for PDF/print ~~~
    

    jQuery('#receipt-clone').click(function(){
      let btnText = jQuery(this).text();
      if(btnText == 'Duplicate'){
          jQuery(this).text('Remove');
          jQuery('.clone-receipt').show();
      }else{
          jQuery(this).text('Duplicate');
          jQuery('.clone-receipt').hide();
      }
      
    })



//Preview button ajax in invoice list page ~~~~~~
  jQuery('.btn-inv-modal').click(function(){
    var invIds = jQuery(this).val();   

    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: wandercrm.ajaxurl,
      data: {
        action: "get_invoice_data",
        'invoice_ids': invIds
      },
      success: function(response){

        let client_id               = response.ID;
        let receipt_no              = response.receipt_no;
        let user_id                 = response.user_id;
        let client_name             = response.client_name;
        let client_address          = response.client_address;
        let client_phone            = response.client_phone;
        let client_mail             = response.client_mail;
        let client_gst              = response.client_gst;
        let client_pan              = response.client_pan;
        let invoice_no              = response.invoice_no;
        let invoice_fin_yr          = response.invoice_fin_yr;
        let item_details            = response.table_items_row;
        let number_to_word_total    = response.number_to_word_total;
        let bank_name               = response.payment_mode;
        let invoice_generator       = response.generated_by;

        jQuery('.inv-no span').text(`${invoice_no}`);
        jQuery('.company-nm').text(`${client_name}`);
        jQuery('.address').text(`${client_address}`);
        jQuery('.tel span').text(`${client_phone}`);
        jQuery('.mail span').text(`${client_mail}`);
        jQuery('.gstin span').text(`${client_gst}`);
        jQuery('.pan span').text(`${client_pan}`);
        jQuery('.bill-dt span').text(`${invoice_fin_yr}`);
        jQuery('#wander_invoice_items tbody').html(`${item_details}`);
        jQuery('.amount_in_word span').text(`${number_to_word_total}`);
        jQuery('.invoice-generated-by p span').text(`${invoice_generator}`);

        if ( bank_name == 'hdfc' ) {
          jQuery('.payment-option-display').html(`
            <div class="account-details">
                <p><span>Account Name:</span> WANDERVOGEL TOURS AND TRAVELS PVT LTD.</p> 
                <p><span>Account Type:</span> Current Account</p> 
                <p><span>Bank Name:</span> HDFC Bank</p> 
                <p><span>Branch:</span> Ballygunge, Navjivan,1st Floor,54/1A Hazra Road, Kolkata-700019</p>
                <p><span>Account No: </span>50200005928942</p> 
                <p><span>RTGS/NEFT/IFSC Code: </span>HDFC0000516</p> 
                <p><span>Swift Code: </span>HDFCINBBCAL</p> 
            </div>
          `);

        }else if( bank_name == 'icici' ){
          jQuery('.payment-option-display').html(`
            <div class="account-details">
                <p><span>Account Name:</span> WANDERVOGEL TOURS AND TRAVELS PVT LTD.</p> 
                <p><span>Account Type:</span> Current Account</p> 
                <p><span>Bank Name:</span> ICICI Bank</p> 
                <p><span>Branch:</span> Ballygunge, Rishikesh,1/1 Asutosh Chowdhury Avenue, Kolkata-700019</p>
                <p><span>Account No: </span>003405012275</p> 
                <p><span>RTGS/NEFT/IFSC Code: </span>ICIC0000034</p> 
                <p><span>Swift Code: </span>ICICINBBXXX</p> 
            </div>
          `);
          
        }else{
          jQuery('.payment-option-display').html(`
            <div class="account-details">
                <p><span>Account Name:</span> WANDERVOGEL TOURS AND TRAVELS PVT LTD.</p> 
                <p><span>Account Type:</span> Current Account</p> 
                <p><span>Bank Name:</span> AXIS Bank Ltd.</p> 
                <p><span>Branch:</span> Salt Lake, Kolkata (WB), BD-20, Sector I, Salt Lake City, Kolkata-700064</p>
                <p><span>Account No: </span>917020058003025</p> 
                <p><span>RTGS/NEFT/IFSC Code: </span>UTIB0000025</p> 
                <p><span>Swift Code: </span>AXISINBB025</p> 
            </div>
          `);
        }

        if (response) {
          jQuery('#exLargeModalPrev').modal('show');
        } else {
          console.log( 'Error: ' + response );
        }
      }
    })
  })

//Preview button ajax in money receipt list page ~~~~~~
  jQuery('.btn-receipt-modal').click(function(){
    var receiptId = jQuery(this).val();

    jQuery.ajax({
      type: 'post',
      dataType: 'json',
      url: wandercrm.ajaxurl,
      data: {
        action: 'get_receipt_data',
        'receipt_id': receiptId,
      },
      success: function(response){

        var receipt_id             = response.ID;
        var receipt_user_id        = response.user_id;
        var receipt_no             = response.receipt_no;
        var client_name            = response.client_name;
        var receipt_address        = response.receipt_address;
        var receipt_phone          = response.receipt_phone;
        var receipt_amount         = response.amount;
        var payment_mode           = response.payment_mode;
        var cheque_no              = response.cheque_no;
        var cheque_issued_br       = response.cheque_issued_br;
        var neft_trans_id          = response.neft_trans_id;
        var neft_trans_br          = response.neft_trans_br;
        var card_no                = response.card_no;
        var card_name              = response.card_name;
        var swipt_on               = response.swipt_on;
        var card_type              = response.card_type;
        var package_booking        = response.package_booking;
        var receipt_dt             = response.receipt_date;
        var receipt_trans_dt       = response.transaction_date;
        var package_details        = response.package_details;
        var receipt_amount_in_word = response.receipt_amount_in_word;
        var receipt_generated_by   = response.generated_by;

        jQuery('.receipt-no span').text(`${receipt_no}`);
        jQuery('.receipt-dt span').text(`${receipt_dt}`);
        jQuery('.receipt-amount').text(`${receipt_amount}`);        
        jQuery('.receipt-generater p span').text(`${receipt_generated_by}`);

        if ( payment_mode == 'cash' ) {
          jQuery('.receipt-body').html(`Received with thanks from <span>${client_name}</span>,</br>of (Address) ${receipt_address}, </br> Phone no. <span>${receipt_phone}</span> </br>a sum of Rupees  <span>${receipt_amount}</span> (in word Rupees <span>${receipt_amount_in_word}</span> only) </br>by Cash amount Rs. <span>${receipt_amount}</span> dated <span>${receipt_trans_dt}</span> payment received towards (<span>${package_booking}</span>), </br><span>${package_details}</span>`)

        }else if( payment_mode == 'cheque' ){
          jQuery('.receipt-body').html(`Received with thanks from <span>${client_name}</span>,</br>of (Address) ${receipt_address}, </br> Phone no. <span>${receipt_phone}</span> </br>a sum of Rupees  <span>${receipt_amount}</span> (in word Rupees <span>${receipt_amount_in_word}</span> only) </br >by Cheque issued by Bank <span>${cheque_issued_br}</span>, Cheque no. <span>${cheque_no}</span> dated <span>${receipt_trans_dt}</span> payment received towards (<span>${package_booking}</span>), </br><span>${package_details}</span>`)

        }else if( payment_mode == 'neft' ){
           jQuery('.receipt-body').html(`Received with thanks from <span>${client_name}</span>,</br>of (Address) ${receipt_address}, </br> Phone no. <span>${receipt_phone}</span> </br>a sum of Rupees  <span>${receipt_amount}</span> (in word Rupees <span>${receipt_amount_in_word}</span> only) </br>by NEFT/Transaction, <span>${neft_trans_br}</span> Transition ID <span>${neft_trans_id}</span> dated <span>${receipt_trans_dt}</span> payment received towards (<span>${package_booking}</span>), </br><span>${package_details}</span>`)

        }else{
           jQuery('.receipt-body').html(`Received with thanks from <span>${client_name}</span>,</br>of (Address) ${receipt_address}, </br> Phone no. <span>${receipt_phone}</span> </br>a sum of Rupees  <span>${receipt_amount}</span> (in word Rupees <span>${receipt_amount_in_word}</span> only) </br>by Card, card no. <span>${card_no}</span>, name of card <span>${card_name}</span>, swipt no <span>${swipt_on}</span>, type of card <span>${card_type}</span>  payment received towards (<span>${package_booking}</span>), </br><span>${package_details}</span>`)
        }

        if (response) {
          jQuery('#receiptModalPrev').modal('show');
        } else {
          console.log( 'Error: ' + response );
        }
      }
    })
  })


if (jQuery('body').hasClass('page-template-receipt-list')) {

//Money Receipt filter option for all data by year with resets filter option ~~~~~~~~~~~~~
var recptTable = jQuery('#receiptTable').DataTable({
      "order": [[0, 'desc']]
    });

   // Populate the year filter options
  var years = [];
  recptTable.column(3).data().each(function(value) {
    var year = value.split('-')[2]; // Assuming date format is dd-mm-yy
    if (years.indexOf(year) === -1) {
      years.push(year);
      jQuery('#receiptYearFilter').append('<option value="' + year + '">' + year + '</option>');
    }
  });

  // Handle year filter change
  jQuery('#receiptYearFilter').on('change', function() {
    var year = jQuery(this).val();
    
    // Filter the table based on the selected year
    recptTable.column(3).search(year, true, false).draw();
  });

}


if (jQuery('body').hasClass('page-template-invoice-list')) {

//Invoice filter option for all data by year with resets filter option ~~~~~~~~~~~~~
  var invTable = jQuery('#invoiceTable').DataTable({
      "order": [[0, 'desc']]
    });

  // Populate the year filter options
  var years = [];
  invTable.column(9).data().each(function(value) {
    var year = value.split('-')[2]; // Assuming date format is dd-mm-yy
    if (years.indexOf(year) === -1) {
      years.push(year);
      jQuery('#yearFilterInv').append('<option value="' + year + '">' + year + '</option>');
    }
  });

  // Handle year filter change
  jQuery('#yearFilterInv').on('change', function() {
    var year = jQuery(this).val();
    
    // Filter the table based on the selected year
    invTable.column(9).search(year, true, false).draw();
  });

}


//Show Invoice payment details ~~~~~~~~~~~~~
  jQuery('#bank-option').change( function(){
    var bankOption = jQuery(this).val();

    if( bankOption == 'hdfc' ) {
      jQuery("#hdfcBank").show();
      jQuery("#iciciBank").hide();
      jQuery("#axisBank").hide();

    }else if( bankOption == 'icici' ){
      jQuery("#iciciBank").show();
      jQuery("#hdfcBank").hide();
      jQuery("#axisBank").hide();

    }else{
      jQuery("#axisBank").show();
      jQuery("#hdfcBank").hide();
      jQuery("#iciciBank").hide();
    }

  })

  //Show Money receipt payment details ~~~~~~~~~~~~~
  jQuery('#receipt-payment-mode').change( function(){
    var paymentMode = jQuery(this).val();

    if( paymentMode == 'cheque' ) {
      jQuery("#receipt-cheque-fld").show();
      jQuery("#receipt-transaction-fld").hide();
      jQuery("#receipt-cash-fld").hide();
      jQuery("#receipt-card-fld").hide();

    }else if( paymentMode == 'neft' ){
      jQuery("#receipt-transaction-fld").show();
      jQuery("#receipt-cheque-fld").hide();
      jQuery("#receipt-cash-fld").hide();
      jQuery("#receipt-card-fld").hide();

    }else if( paymentMode == 'card' ){
      jQuery("#receipt-card-fld").show();
      jQuery("#receipt-transaction-fld").hide();
      jQuery("#receipt-cheque-fld").hide();
      jQuery("#receipt-cash-fld").hide();

    }else{
      jQuery("#receipt-cash-fld").show();
      jQuery("#receipt-card-fld").hide();
      jQuery("#receipt-transaction-fld").hide();
      jQuery("#receipt-cheque-fld").hide();
    }

  })

//Show/hide Money GST field ~~~~~~~~~~~~~
  jQuery('#client-type').change( function(){
    var clientType = jQuery(this).val();

    if ( clientType == 'company' ) {
      jQuery('.gst-show').show();
    }else{
      jQuery('.gst-show').hide();
    }
  })


  //Add new invoice element ~~~~~~~~~
  var index = 1;

  tinymce.init({
      selector: '.my-custom-textarea',
      height: 180,
  });
            
    jQuery(".add").click(function(){

        // Finding total number of elements added
        var total_element = jQuery(".element").length;
        index = total_element;
        //last <div> with element class id
        var lastid = jQuery(".element:last").attr("id");
        var split_id = lastid.split("_");
        var nextindex = Number(split_id[1]) + 1;
        var max = 15;

        //Check total number elements
        if(total_element < max ){

            jQuery(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
                        
            //Adding element to <div>
            jQuery("#div_" + nextindex).append(`<div class='row'><div class='mb-3 col-7'><textarea name='item[${index}][item_description]' placeholder= 'Add Invoice Description' class='form-control my-custom-textarea'></textarea></div><div class='mb-3 col-2'><input type='text' name='item[${index}][item_quantity]' placeholder= 'Quantity' class='form-control'/></div><div class='mb-3 col-2'><input type='text' name='item[${index}][item_rate]' placeholder= 'Rate' class='form-control'/></div><div class='mb-3 col'>&nbsp;<span id='${nextindex}' class='btn btn-outline-danger remove'>Del</span></div></div>`);

            tinymce.init({
                selector: '.my-custom-textarea',
                height: 180,
            });
          }
          index++;
    });

    // Remove element
    jQuery('.remove-container').on('click','.remove',function(){ 
        var itemCount = jQuery('.remove-container').children('div.element').length;
        var id = this.id;

        if( itemCount > 1 ){          
          jQuery("#div_" + id).remove();
        }else{
          alert("At least one field is mandatory");
        }
    });

  // Handler for the button click event of receipt~~~~~~~~~~~~~~
    jQuery('#btn-send-mail-receipt').on('click', function() {
      var selectedHtml = jQuery('#receipt-pdf').html();
      var mailTo = jQuery('.mailto').val();

        jQuery.ajax({
          type: 'POST',
          url: wandercrm.ajaxurl,
          data: {
            action: 'generate_pdf',
            send_mailTo: mailTo,
            html_content: selectedHtml
          },
          success: function(response) {
            jQuery('p.mail-send-msg').html(`${response}`);
          },
          error: function(error) {
            console.log('Error generating PDF:', error);
          }
        });
      
    });



  // Handler for the button click event of Invoice ~~~~~~~~~~~~~~~~~~
    jQuery('#btn-send-mail-invoice').on('click', function() {
      var selectedHtml = jQuery('#invoice-pdf').html();
      var mailTo = jQuery('.mailtoinvoice').val();

      jQuery.ajax({
          type: 'POST',
          url: wandercrm.ajaxurl,
          data: {
            action: 'generate_pdf_invoice',
            send_mailToInv: mailTo,
            html_invoice: selectedHtml
          },
          success: function(response) {
            jQuery('p.mail-send-inv-msg').html(`${response}`);
          },
          error: function(error) {
            console.log('Error generating PDF:', error);
          }
        });

    });


// Invoice create Form validation ~~~~~~~~~~~~~~~~~~~
  /*jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

  var invForm = jQuery( "#invoiceValid" );

  invForm.validate({
    rules: {
      invoice_no: "required",
      fin_yr: "required",
      client_name: "required",
      generated_fullname: "required",
      client_phone: {
        required: true,
        number: true,
      },
      client_mail: {
        required: true,
        email: true
      },
      client_address: {
        required: true
      },
      client_pan: "required",
      client_gst: "required",
      "invoice_tax[]": {
        required: true,
      }
    }
  });*/

/*var receiptForm = jQuery( "#receiptValid" );
receiptForm.validate({
  rules: {
    receipt_no: "required",
    receipt_date: "required",
    client_name: "required",
    client_phone: {
      required: true,
      number: true,
    },
    amount: {
      required: true,
      number: true,
    },
    client_address: {
      required: true
    },
    payment_mode: "required",
    transaction_date: "required",
    package_booking: "required",
    package_details: "required"
  }
});*/
  


//Tax checkbox validation ~~~~~~~~~~~~~~~~~~~~~
    var cgst_tax  = jQuery("#cgst_tax");
    var sgst_tax  = jQuery("#sgst_tax");
    var igst_tax  = jQuery("#igst_tax");
    var tcs_tax20 = jQuery("#tcs_tax20");
    var tcs_tax5  = jQuery("#tcs_tax5");

//For enable TCS 20% checkbox ~~~~~
    jQuery("#tcs_tax20").change(function(){
      if( tcs_tax20.is(":checked") ){
        // cgst_tax.prop("disabled", false);
        // sgst_tax.prop("disabled", false);
        // igst_tax.prop("disabled", false);
        tcs_tax5.prop({"disabled": true, "checked": false})

      }else{
        // cgst_tax.prop("disabled", false);
        // sgst_tax.prop("disabled", false);
        // igst_tax.prop("disabled", false);
        tcs_tax5.prop("disabled", false);
      }     
    })

//For enable TCS 5% checkbox ~~~~~
    jQuery("#tcs_tax5").change(function(){
      if( tcs_tax5.is(":checked") ){
        tcs_tax20.prop({"disabled": true, "checked": false})

      }else{
        tcs_tax20.prop("disabled", false);
      }     
    })

//For enable IGST checkbox ~~~~~
    jQuery("#igst_tax").change(function(){
      if( igst_tax.is(":checked") ){
        cgst_tax.prop({"disabled": true, "checked": false})
        sgst_tax.prop({"disabled": true, "checked": false})

      }else{
        cgst_tax.prop("disabled", false);
        sgst_tax.prop("disabled", false);
      }     
    })

//For enable CGST checkbox ~~~~~
    jQuery("#cgst_tax").change(function(){
      if( cgst_tax.is(":checked") ){
        igst_tax.prop({"disabled": true, "checked": false})
        sgst_tax.prop("disabled", false);

      }else{
        igst_tax.prop("disabled", false);
        sgst_tax.prop("disabled", false);
      }     
    })

  //For enable SGST checkbox ~~~~~
    jQuery("#sgst_tax").change(function(){
      if( sgst_tax.is(":checked") ){
        igst_tax.prop({"disabled": true, "checked": false})
        cgst_tax.prop("disabled", false);

      }else{
        igst_tax.prop("disabled", false);
        sgst_tax.prop("disabled", false);
      }     
    })



  //Side Menu Dropdown with arrow change ~~~~~~~~~~~~~~~~~~
    jQuery(".menu-item").click(function() {
        var dropdownMenu = jQuery(this).siblings(".menu-sub");
        dropdownMenu.toggle();
        jQuery(this).toggleClass("open");
      });






  })




//Export Invoice datatable data  to csv file ~~~~~~~~~~~~
    function exportDataTableToCSV(filename) {
        var csv = [];
        var rows = jQuery('#invoiceTable').find('tr');

        // Add header row to CSV
        var headerRow = [];
        jQuery(rows[0]).find('th').each(function() {
          headerRow.push(jQuery(this).text());
        });
        csv.push(headerRow.join(','));

        // Add data rows to CSV
        for (var i = 1; i < rows.length; i++) {
          var rowData = [];
          jQuery(rows[i]).find('td').each(function() {
            rowData.push(jQuery(this).text());
          });
          csv.push(rowData.join(','));
        }

        // Create a download link
        var csvData = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv.join('\n'));
        var link = document.createElement('a');
        link.setAttribute('href', csvData);
        link.setAttribute('download', filename + '.csv');
        link.click();
      }


//Export Receipt datatable data  to csv file ~~~~~~~~~~~~
    function exportDataTableToCSVReceipt(filename) {
        var csv = [];
        var rows = jQuery('#receiptTable').find('tr');

        // Add header row to CSV
        var headerRow = [];
        jQuery(rows[0]).find('th').each(function() {
          headerRow.push(jQuery(this).text());
        });
        csv.push(headerRow.join(','));

        // Add data rows to CSV
        for (var i = 1; i < rows.length; i++) {
          var rowData = [];
          jQuery(rows[i]).find('td').each(function() {
            rowData.push(jQuery(this).text());
          });
          csv.push(rowData.join(','));
        }

        // Create a download link
        var csvData = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv.join('\n'));
        var link = document.createElement('a');
        link.setAttribute('href', csvData);
        link.setAttribute('download', filename + '.csv');
        link.click();
      }