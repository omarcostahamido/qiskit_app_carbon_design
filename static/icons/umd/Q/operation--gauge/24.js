(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QOperationGauge24 = factory());
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
            'M30 4h-6v2h3.75L24 10v2h6v-2h-3.62L30 6V4zM20 17.62L22.08 14l-1.73-1-2.18 3.76A12 12 0 0 0 2 28h2a10 10 0 0 1 13.16-9.48L14 24a2 2 0 1 0 2 2 2 2 0 0 0-.27-1L19 19.35A10 10 0 0 1 24 28h2a12 12 0 0 0-6-10.38z',
        },
      },
    ],
    name: 'operation--gauge',
    size: 24,
  };

  return _24;

})));
