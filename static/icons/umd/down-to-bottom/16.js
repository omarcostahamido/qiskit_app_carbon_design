(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DownToBottom16 = factory());
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
        attrs: { d: 'M8 10l5-5-.7-.7L8 8.6 3.7 4.3 3 5zm-6 2h12v1H2z' },
      },
    ],
    name: 'down-to-bottom',
    size: 16,
  };

  return _16;

})));
