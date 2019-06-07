(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.FolderAdd20 = factory());
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
      { elem: 'path', attrs: { d: 'M26 20h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M28 8H16l-3.41-3.41A2 2 0 0 0 11.17 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12v-2H4V6h7.17l3.42 3.41.58.59H28v7h2v-7a2 2 0 0 0-2-2z',
        },
      },
    ],
    name: 'folder--add',
    size: 20,
  };

  return _20;

})));
