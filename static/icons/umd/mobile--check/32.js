(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MobileCheck32 = factory());
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
            'M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2v2H8V4zm0 4v16H8V8zM8 28v-2h16v2z',
        },
      },
      {
        elem: 'path',
        attrs: { d: 'M14 18.18l-2.59-2.59L10 17l4 4 8-8-1.41-1.41L14 18.18z' },
      },
    ],
    name: 'mobile--check',
    size: 32,
  };

  return _32;

})));
