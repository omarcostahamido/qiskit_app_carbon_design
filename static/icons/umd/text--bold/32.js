(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextBold32 = factory());
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
            'M18.25 25H9V7h8.5a5.25 5.25 0 0 1 4 8.65A5.25 5.25 0 0 1 18.25 25zM12 22h6.23a2.25 2.25 0 1 0 0-4.5H12zm0-7.5h5.5a2.25 2.25 0 1 0 0-4.5H12z',
        },
      },
    ],
    name: 'text--bold',
    size: 32,
  };

  return _32;

})));
