(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Receipt20 = factory());
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
          d: 'M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M25 2H7a2.002 2.002 0 0 0-2 2v25a1 1 0 0 0 1 1h1a.999.999 0 0 0 .8-.4l2.2-2.933 2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933 2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933 2.2 2.933a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2.002 2.002 0 0 0-2-2zm0 25.333L22.8 24.4a1.035 1.035 0 0 0-1.6 0L19 27.333 16.8 24.4a1.035 1.035 0 0 0-1.6 0L13 27.333 10.8 24.4a1.035 1.035 0 0 0-1.6 0L7 27.333V4h18z',
        },
      },
    ],
    name: 'receipt',
    size: 20,
  };

  return _20;

})));
