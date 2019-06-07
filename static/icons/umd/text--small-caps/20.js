(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextSmallCaps20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [
      { elem: 'path', attrs: { d: 'M23 27V15h-5v-2h12v2h-5v12h-2z' } },
      { elem: 'path', attrs: { d: 'M11 27V8H2V6h20v2h-9v19h-2z' } },
    ],
    name: 'text--small-caps',
    size: 20,
  };

  return _20;

})));
