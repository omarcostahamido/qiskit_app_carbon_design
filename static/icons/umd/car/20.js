(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Car20 = factory());
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
            'M29.34 15.94l-7.73-2.78-3.24-4.06A3 3 0 0 0 16.05 8h-8a3 3 0 0 0-2.47 1.32l-2.71 4A5 5 0 0 0 2 16.11V24a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7.12a1 1 0 0 0-.66-.94zM9 26a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm5-3h-1.14a4 4 0 0 0-7.72 0h-6.28a4 4 0 0 0-7.72 0H4v-6.89a3 3 0 0 1 .52-1.69l2.71-4a1 1 0 0 1 .83-.42h8a1 1 0 0 1 .77.36l3.4 4.27a1.09 1.09 0 0 0 .44.32L28 17.58z',
        },
      },
    ],
    name: 'car',
    size: 20,
  };

  return _20;

})));
