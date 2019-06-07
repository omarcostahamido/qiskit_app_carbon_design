(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QOperation32 = factory());
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
            'M23 26h-2l5-10-5-10h2l5 10-5 10zM4 6h2v20H4zm12 3h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zm0 12h-4V11h4z',
        },
      },
      { elem: 'path', attrs: { d: 'M13 15h2v2h-2z' } },
    ],
    name: 'operation',
    size: 32,
  };

  return _32;

})));
