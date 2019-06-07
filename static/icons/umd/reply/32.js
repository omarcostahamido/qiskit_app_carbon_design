(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Reply32 = factory());
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
            'M28.88 30a1 1 0 0 1-.88-.5A15.19 15.19 0 0 0 15 22v6a1 1 0 0 1-.62.92 1 1 0 0 1-1.09-.21l-12-12a1 1 0 0 1 0-1.42l12-12a1 1 0 0 1 1.09-.21A1 1 0 0 1 15 4v6.11a17.19 17.19 0 0 1 15 17 16.34 16.34 0 0 1-.13 2 1 1 0 0 1-.79.86zM14.5 20A17.62 17.62 0 0 1 28 26a15.31 15.31 0 0 0-14.09-14 1 1 0 0 1-.91-1V6.41L3.41 16 13 25.59V21a1 1 0 0 1 1-1h.54z',
        },
      },
    ],
    name: 'reply',
    size: 32,
  };

  return _32;

})));
