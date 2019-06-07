(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.FlowData32 = factory());
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
            'M20 23h-8.14a4.17 4.17 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57 4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28a4.17 4.17 0 0 0 .43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8zM8 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm16-4a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM8 26a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14-4h4v4h-4z',
        },
      },
    ],
    name: 'flow--data',
    size: 32,
  };

  return _32;

})));
