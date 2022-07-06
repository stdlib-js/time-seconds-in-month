// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",i=t()?function(e){var t,i,u,a,l;if(null==e)return r.call(e);i=e[o],l=o,t=null!=(a=e)&&n.call(a,l);try{e[o]=void 0}catch(t){return r.call(e)}return u=r.call(e),t?e[o]=i:delete e[o],u}:function(e){return r.call(e)},u=Date.prototype.getDay,a=t();function l(e){return"object"==typeof e&&(e instanceof Date||(a?function(e){try{return u.call(e),!0}catch(e){return!1}}(e):"[object Date]"===i(e)))}var c="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty,p=Object.prototype,y=p.toString,s=p.__defineGetter__,b=p.__defineSetter__,g=p.__lookupGetter__,m=p.__lookupSetter__,v=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?f:function(e,t,r){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===y.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(g.call(e,t)||m.call(e,t)?(n=e.__proto__,e.__proto__=p,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&s&&s.call(e,t,r.get),u&&b&&b.call(e,t,r.set),e};function d(e,t,r){v(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(e){return"string"==typeof e}var _=String.prototype.valueOf,j=t();function w(e){return"object"==typeof e&&(e instanceof String||(j?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object String]"===i(e)))}function S(e){return h(e)||w(e)}function T(e){return"number"==typeof e}d(S,"isPrimitive",h),d(S,"isObject",w);var O=Number,E=O.prototype.toString,I=t();function F(e){return"object"==typeof e&&(e instanceof O||(I?function(e){try{return E.call(e),!0}catch(e){return!1}}(e):"[object Number]"===i(e)))}function P(e){return T(e)||F(e)}d(P,"isPrimitive",T),d(P,"isObject",F);var D=Number.POSITIVE_INFINITY,N=O.NEGATIVE_INFINITY,V=Math.floor;function Y(e){return e<D&&e>N&&V(t=e)===t;var t}function M(e){return T(e)&&Y(e)}function x(e){return F(e)&&Y(e.valueOf())}function A(e){return M(e)||x(e)}function C(e){if(!h(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toLowerCase()}function G(e){var t;if(arguments.length)if(l(e))t=e.getFullYear();else{if(!M(e))return!1;t=e}else t=(new Date).getFullYear();return t%100==0?t%400==0:t%4==0}function k(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}d(A,"isPrimitive",M),d(A,"isObject",x);var B={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};return function(e,t){var r,n,o,i;if(0===arguments.length)n=(i=new Date).getMonth()+1,o=i.getFullYear();else if(1===arguments.length)if(l(e))n=(i=e).getMonth()+1,o=i.getFullYear();else{if(!h(e)&&!M(e))throw new TypeError(k("invalid argument. First argument must be either a string, integer, or Date object. Value: `%s`.",e));o=(new Date).getFullYear(),n=e}else{if(!h(e)&&!M(e))throw new TypeError(k("0i6BF",e));if(!M(t))throw new TypeError(k("0i67x",t));n=e,o=t}if(M(n)&&(n<1||n>12))throw new RangeError(k("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",n));if(n=C(n.toString()),void 0===(r=B[n]))throw new Error(k("0i6BJ",n));return 2419200===r&&G(o)&&(r+=86400),r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).secondsInMonth=t();
//# sourceMappingURL=browser.js.map
