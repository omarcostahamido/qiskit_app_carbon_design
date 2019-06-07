(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Rotate20 = factory());
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
            'M17.91 26.82l.35 2a12.9 12.9 0 0 0 4.24-1.54l-1-1.73a10.88 10.88 0 0 1-3.59 1.27zm6.51-3.75L26 24.35a13 13 0 0 0 2.24-3.91l-1.87-.68a11 11 0 0 1-1.95 3.31zM9.5 27.25a12.9 12.9 0 0 0 4.24 1.54l.35-2a10.88 10.88 0 0 1-3.59-1.3zm-3.83-7.49l-1.87.68A13 13 0 0 0 6 24.35l.32-.26 1.22-1a11 11 0 0 1-1.91-3.31zM29 16a12.85 12.85 0 0 0-.8-4.44l-1.87.68A11.18 11.18 0 0 1 27 16zm-3-8.35a13 13 0 0 0-20 0V4H4v8h8v-2H6.81a11 11 0 0 1 17.61-1.07z',
        },
      },
    ],
    name: 'rotate',
    size: 20,
  };

  return _20;

})));
