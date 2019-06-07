(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Departure24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M2 28h28v2H2zM13.48 5.15l5.69 8.14.8 1.15 1.35-.36 4.52-1.21a2.13 2.13 0 0 1 1.12 0A1.84 1.84 0 0 1 28.23 14 1.87 1.87 0 0 1 27 16.45l-18.71 5a1.78 1.78 0 0 1-1 0A1.87 1.87 0 0 1 6 20.12l-.25-.93L5 16.38l-.74-2.74 1.44-.39 2.3 3.1.81 1.08 1.31-.35 2.8-.75 1.94-.52-.52-1.93-2.26-8.36 1.4-.37M14.16 3a1.06 1.06 0 0 0-.5 0l-3.09.83A1 1 0 0 0 9.89 5l2.5 9.36-2.81.75-2.73-3.61a1 1 0 0 0-.52-.36 1.06 1.06 0 0 0-.5 0L2.72 12A1 1 0 0 0 2 13.16l1 3.74.75 2.8.25.94a3.87 3.87 0 0 0 2.74 2.74 3.91 3.91 0 0 0 2 0l18.7-5a3.84 3.84 0 0 0 0-7.44 4.27 4.27 0 0 0-2.16 0l-4.51 1.21-6.07-8.74a1 1 0 0 0-.54-.41z',
        },
      },
    ],
    name: 'departure',
    size: 24,
  };

  return _24;

})));
