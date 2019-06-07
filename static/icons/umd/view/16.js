(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.View16 = factory());
}(this, (function () { 'use strict';

  var _16 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: 16,
      height: 16,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M15.5 7.8C14.3 4.7 11.3 2.6 8 2.5 4.7 2.6 1.7 4.7.5 7.8v.3c1.2 3.1 4.1 5.2 7.5 5.3 3.3-.1 6.3-2.2 7.5-5.3v-.3zM8 12.5c-2.7 0-5.4-2-6.5-4.5 1-2.5 3.8-4.5 6.5-4.5s5.4 2 6.5 4.5c-1.1 2.5-3.9 4.5-6.5 4.5z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M8 5C6.3 5 5 6.3 5 8s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        },
      },
    ],
    name: 'view',
    size: 16,
  };

  return _16;

})));
