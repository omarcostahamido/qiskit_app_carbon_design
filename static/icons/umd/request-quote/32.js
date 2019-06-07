(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.RequestQuote32 = factory());
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
            'M22 22v6H6V4h10V2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M29.54 5.76l-3.3-3.3a1.6 1.6 0 0 0-2.24 0l-14 14V22h5.53l14-14a1.6 1.6 0 0 0 0-2.24zM14.7 20H12v-2.7l9.44-9.45 2.71 2.71zM25.56 9.15l-2.71-2.71 2.27-2.27 2.71 2.71z',
        },
      },
    ],
    name: 'request-quote',
    size: 32,
  };

  return _32;

})));
