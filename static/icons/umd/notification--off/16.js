(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.NotificationOff16 = factory());
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
            'M2.5 11.5v-.8l1.3-1.4c.1 0 .2-.2.2-.3V6.5c0-2.2 1.8-4 4-4 .9 0 1.8.3 2.5.9l.7-.7c-.7-.7-1.7-1.1-2.7-1.2v-1h-1v1C5 1.8 3 3.9 3 6.5v2.3l-1.4 1.3c-.1.1-.2.2-.1.4v1h1zM13 8.8V6.5c0-.8-.2-1.6-.5-2.2L15 1.7l-.7-.7L1 14.3l.7.7 2.5-2.5h1.3C5.5 13.9 6.6 15 8 15s2.5-1.1 2.5-2.5H14c.3 0 .5-.2.5-.4v-1.6c0-.1-.1-.3-.1-.4L13 8.8zM8 14c-.8 0-1.5-.7-1.5-1.5h3c0 .8-.7 1.5-1.5 1.5zm5.5-2.5H5.2L11.7 5c.2.5.3 1 .3 1.5V9c0 .1.1.3.1.4l1.4 1.3v.8z',
        },
      },
    ],
    name: 'notification--off',
    size: 16,
  };

  return _16;

})));
