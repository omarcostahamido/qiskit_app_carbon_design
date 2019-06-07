(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Power32 = factory());
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
          d: 'M22.5 5.74l-1 1.73a11 11 0 1 1-11 0l-1-1.73a13 13 0 1 0 13 0z',
        },
      },
      { elem: 'path', attrs: { d: 'M15 2h2v14h-2z' } },
    ],
    name: 'power',
    size: 32,
  };

  return _32;

})));
