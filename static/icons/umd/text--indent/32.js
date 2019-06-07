(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextIndent32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M14 6h14v2H14zm0 6h14v2H14zm-7 6h21v2H7zm0 6h21v2H7zM4 13.59L7.29 10 4 6.41 5.42 5l4.62 5-4.62 5L4 13.59z',
        },
      },
    ],
    name: 'text--indent',
    size: 32,
  };

  return _32;

})));
