(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Bicycle20 = factory());
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
            'M26 16a5.93 5.93 0 0 0-1.75.26l-2.36-4.71a1.07 1.07 0 0 0-.25-.31L22.72 8H25V6h-7v2h2.61l-1 3H9.38L10 8.21A1 1 0 0 0 9 7H4v2h3.76l-1.5 7H6a6 6 0 1 0 2.22.43l.64-3 7.06 8.82a2 2 0 0 0 1.56.75h2.61A6 6 0 1 0 26 16zm-16 6a4 4 0 1 1-4.17-4L5 21.79A1.55 1.55 0 0 0 5 22a1 1 0 0 0 1 1 1 1 0 0 0 1-.79l.81-3.77A4 4 0 0 1 10 22zm1.08-9H19l-2.32 6.94zm9 8h-1.7l2.39-7.19 1.68 3.35A6.05 6.05 0 0 0 20.09 21zM26 26a4 4 0 0 1-2.62-7l1.73 3.45A1 1 0 0 0 27 22a1.06 1.06 0 0 0-.11-.44l-1.73-3.46A3.86 3.86 0 0 1 26 18a4 4 0 0 1 0 8z',
        },
      },
    ],
    name: 'bicycle',
    size: 20,
  };

  return _20;

})));
