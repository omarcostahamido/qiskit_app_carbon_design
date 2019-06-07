(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.UserAvatar16 = factory());
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
            'M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM5 13.2v-1.5c0-.9.6-1.6 1.5-1.7h3c.9.1 1.5.8 1.5 1.7v1.5c-1.9 1.1-4.1 1.1-6 0zm7-1.2v-.8c0-.9-1.1-2.1-2.5-2.2h-3C5.1 9.1 4 10.3 4 11.7v.8c-2.5-2.2-2.7-6-.5-8.5s6-2.7 8.5-.5 2.7 6 .5 8.5c-.1.2-.3.3-.5.5V12z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M8 3C6.6 3 5.5 4.1 5.5 5.5S6.6 8 8 8s2.5-1.1 2.5-2.5S9.4 3 8 3zm0 4c-.8 0-1.5-.7-1.5-1.5S7.2 4 8 4s1.5.7 1.5 1.5S8.8 7 8 7z',
        },
      },
    ],
    name: 'user--avatar',
    size: 16,
  };

  return _16;

})));
