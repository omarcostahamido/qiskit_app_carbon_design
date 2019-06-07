(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Mp420 = factory());
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
        attrs: { d: 'M27.5 22.5v-4h-5v-9h1v8h4v-8h1v8h1v1h-1v4h-1z' },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M28 10v8-8m1-1h-2v8h-3V9h-2v10h5v4h2v-4h1v-2h-1V9zM14 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4zM8 9l-1.51 5L6 15.98 5.54 14 4 9H2v14h2v-8l-.16-2 .58 2L6 19.63 7.58 15l.58-2L8 15v8h2V9H8z',
        },
      },
    ],
    name: 'MP4',
    size: 20,
  };

  return _20;

})));
