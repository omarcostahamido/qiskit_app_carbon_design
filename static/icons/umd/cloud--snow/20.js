(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CloudSnow20 = factory());
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
            'M23.5 22h-15A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22zM16 4a7 7 0 0 0-6.94 6.14L9 11h-.86a4.5 4.5 0 0 0 .36 9h15a4.5 4.5 0 0 0 .36-9H23l-.1-.82A7 7 0 0 0 16 4zm-4 21.05L10.95 24 9.5 25.45 8.05 24 7 25.05l1.45 1.45L7 27.95 8.05 29l1.45-1.45L10.95 29 12 27.95l-1.45-1.45L12 25.05zm14 0L24.95 24l-1.45 1.45L22.05 24 21 25.05l1.45 1.45L21 27.95 22.05 29l1.45-1.45L24.95 29 26 27.95l-1.45-1.45L26 25.05zm-7 2L17.95 26l-1.45 1.45L15.05 26 14 27.05l1.45 1.45L14 29.95 15.05 31l1.45-1.45L17.95 31 19 29.95l-1.45-1.45L19 27.05z',
        },
      },
    ],
    name: 'cloud--snow',
    size: 20,
  };

  return _20;

})));
