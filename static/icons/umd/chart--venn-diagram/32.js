(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChartVennDiagram32 = factory());
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
            'M20 6a9.92 9.92 0 0 0-4 .84A9.92 9.92 0 0 0 12 6a10 10 0 0 0 0 20 9.92 9.92 0 0 0 4-.84 9.92 9.92 0 0 0 4 .84 10 10 0 0 0 0-20zm-8 18a8 8 0 0 1 0-16 7.91 7.91 0 0 1 1.76.2 10 10 0 0 0 0 15.6A7.91 7.91 0 0 1 12 24zm8-8a8 8 0 0 1-4 6.92 8 8 0 0 1 0-13.84A8 8 0 0 1 20 16zm0 8a7.91 7.91 0 0 1-1.76-.2 10 10 0 0 0 0-15.6A7.91 7.91 0 0 1 20 8a8 8 0 0 1 0 16z',
        },
      },
    ],
    name: 'chart--venn-diagram',
    size: 32,
  };

  return _32;

})));
