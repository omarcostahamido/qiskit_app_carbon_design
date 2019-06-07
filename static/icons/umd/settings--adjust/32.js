(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SettingsAdjust32 = factory());
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
            'M30 7h-5.1a5 5 0 0 0-9.8 0H2v2h13.1a5 5 0 0 0 9.8 0H30zm-10 4a3 3 0 1 1 3-3 3 3 0 0 1-3 3zM2 25h5.1a5 5 0 0 0 9.8 0H30v-2H16.9a5 5 0 0 0-9.8 0H2zm7-1a3 3 0 1 1 3 3 3 3 0 0 1-3-3z',
        },
      },
    ],
    name: 'settings--adjust',
    size: 32,
  };

  return _32;

})));
