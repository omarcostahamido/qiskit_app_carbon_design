(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Mov32 = factory());
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
            'M28 9l-2 13-2-13h-2l2.52 14h2.96L30 9h-2zM18 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm-4-12v10h4V11zM8 9l-1.51 5L6 15.98 5.54 14 4 9H2v14h2v-8l-.16-2 .58 2L6 19.63 7.58 15l.58-2L8 15v8h2V9H8z',
        },
      },
    ],
    name: 'MOV',
    size: 32,
  };

  return _32;

})));
