(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Fade16 = factory());
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
            'M4.1 12.6l-.6.8c.6.5 1.3.9 2.1 1.2l.3-.9c-.6-.3-1.2-.7-1.8-1.1zM2.1 9l-1 .2c.1.8.4 1.6.8 2.3l.9-.5c-.4-.6-.6-1.3-.7-2zm3.8-6.6l-.3-1c-.8.3-1.5.7-2.1 1.3l.6.8c.6-.5 1.2-.9 1.8-1.1zM2.8 5l-.9-.5c-.4.7-.6 1.5-.8 2.3l1 .2c.1-.7.4-1.4.7-2zM8 1v1c3.3 0 6 2.7 6 6s-2.7 6-6 6v1c3.9 0 7-3.1 7-7s-3.1-7-7-7z',
        },
      },
    ],
    name: 'fade',
    size: 16,
  };

  return _16;

})));
