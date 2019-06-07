(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.RulerAlt32 = factory());
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
            'M29.41 21.67L10.34 2.58a2 2 0 0 0-2.83 0L2.59 7.51a2 2 0 0 0 0 2.82l19.07 19.09a2 2 0 0 0 1.42.58 2 2 0 0 0 1.41-.58l4.92-4.93a2 2 0 0 0 0-2.82zM23.08 28L4 8.92 8.92 4l3.79 3.79L10.46 10l1.41 1.41 2.25-2.21 4.13 4.13L16 15.58 17.42 17l2.25-2.25 4.13 4.13-2.25 2.25L23 22.54l2.25-2.25L28 23.08z',
        },
      },
    ],
    name: 'ruler--alt',
    size: 32,
  };

  return _32;

})));
