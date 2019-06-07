(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MobileAdd20 = factory());
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
      {
        elem: 'path',
        attrs: {
          d:
            'M24 2H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v2H8V4h16zm0 4v16H8V8h16zM8 28v-2h16v2H8z',
        },
      },
      { elem: 'path', attrs: { d: 'M21 15h-4v-4h-2v4h-4v2h4v4h2v-4h4z' } },
    ],
    name: 'mobile--add',
    size: 20,
  };

  return _20;

})));