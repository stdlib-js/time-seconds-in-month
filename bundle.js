// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).secondsInMonth=r()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(e){return i.call(e)},o=Object.prototype.hasOwnProperty;var u=function(e,r){return null!=e&&o.call(e,r)},c="function"==typeof Symbol?Symbol.toStringTag:"",s=u,f=c,l=n;var g=a,p=function(e){var r,t,n;if(null==e)return l.call(e);t=e[f],r=s(e,f);try{e[f]=void 0}catch(r){return l.call(e)}return n=l.call(e),r?e[f]=t:delete e[f],n},v=t()?p:g,d=Date.prototype.getDay;var m=v,h=function(e){try{return d.call(e),!0}catch(e){return!1}},b=t();var w=function(e){return"object"==typeof e&&(e instanceof Date||(b?h(e):"[object Date]"===m(e)))},y="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=function(){try{return y({},"x",{}),!0}catch(e){return!1}},E=Object.defineProperty,P=Object.prototype,_=P.toString,T=P.__defineGetter__,V=P.__defineSetter__,O=P.__lookupGetter__,x=P.__lookupSetter__;var S=function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===_.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===_.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(O.call(e,r)||x.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(e,r,t.get),o&&V&&V.call(e,r,t.set),e},k=E,F=S,I=j()?k:F;var A=function(e,r,t){I(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},M=A;var R=function(e){return"string"==typeof e},$=String.prototype.valueOf;var C=v,D=function(e){try{return $.call(e),!0}catch(e){return!1}},N=t();var B=function(e){return"object"==typeof e&&(e instanceof String||(N?D(e):"[object String]"===C(e)))},G=R,Y=B;var L=M,Z=function(e){return G(e)||Y(e)},W=B;L(Z,"isPrimitive",R),L(Z,"isObject",W);var X=Z;var z=function(e){return"number"==typeof e},U=Number,q=U.prototype.toString;var H=v,J=U,K=function(e){try{return q.call(e),!0}catch(e){return!1}},Q=t();var ee=function(e){return"object"==typeof e&&(e instanceof J||(Q?K(e):"[object Number]"===H(e)))},re=z,te=ee;var ne=M,ie=function(e){return re(e)||te(e)},ae=ee;ne(ie,"isPrimitive",z),ne(ie,"isObject",ae);var oe=ie,ue=Number.POSITIVE_INFINITY,ce=U.NEGATIVE_INFINITY,se=Math.floor;var fe=function(e){return se(e)===e},le=ue,ge=ce,pe=fe;var ve=function(e){return e<le&&e>ge&&pe(e)},de=oe.isPrimitive,me=ve;var he=function(e){return de(e)&&me(e)},be=oe.isObject,we=ve;var ye=function(e){return be(e)&&we(e.valueOf())},je=he,Ee=ye;var Pe=M,_e=function(e){return je(e)||Ee(e)},Te=ye;Pe(_e,"isPrimitive",he),Pe(_e,"isObject",Te);var Ve=_e,Oe=X.isPrimitive;var xe=function(e){if(!Oe(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toLowerCase()},Se=w,ke=Ve.isPrimitive;var Fe=function(e){var r;if(arguments.length)if(Se(e))r=e.getFullYear();else{if(!ke(e))return!1;r=e}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0},Ie=Fe,Ae=fe;var Me=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ae(e.length)&&e.length>=0&&e.length<=9007199254740991};var Re=function(e){return e!=e},$e=oe.isPrimitive,Ce=Re;var De=function(e){return $e(e)&&Ce(e)},Ne=oe.isObject,Be=Re;var Ge=function(e){return Ne(e)&&Be(e.valueOf())},Ye=De,Le=Ge;var Ze=M,We=function(e){return Ye(e)||Le(e)},Xe=Ge;Ze(We,"isPrimitive",De),Ze(We,"isObject",Xe);var ze=Me,Ue=Ve.isPrimitive,qe=X.isPrimitive,He=We.isPrimitive;var Je=function(e,r,t){var n,i,a;if(!ze(e)&&!qe(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ue(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(qe(e)){if(!qe(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==e.indexOf(r,i)}if(n=e.length,He(r)){for(a=i;a<n;a++)if(He(e[a]))return!0;return!1}for(a=i;a<n;a++)if(e[a]===r)return!0;return!1},Ke=Je,Qe=X.isPrimitive;var er=function(e){if(!Qe(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toUpperCase()},rr=xe,tr=er,nr=X.isPrimitive;var ir=function(e){return nr(e)&&e===tr(e)&&e!==rr(e)},ar=ue,or=ce;var ur=function(e){return e==e&&e>or&&e<ar},cr=Ve.isPrimitive;var sr=function(e){return cr(e)&&e>=0},fr=Ve.isObject;var lr=function(e){return fr(e)&&e.valueOf()>=0},gr=sr,pr=lr;var vr=M,dr=function(e){return gr(e)||pr(e)},mr=lr;vr(dr,"isPrimitive",sr),vr(dr,"isObject",mr);var hr=dr.isPrimitive,br=X.isPrimitive;var wr=function(e,r){var t,n;if(!br(e))throw new TypeError("invalid argument. First argument must be a string. Value: `"+e+"`.");if(!hr(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(0===e.length||0===r)return"";if(e.length*r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=r;1==(1&n)&&(t+=e),0!==(n>>>=1);)e+=e;return t},yr=Ve.isPrimitive,jr=X.isPrimitive;var Er=function(e,r,t){var n,i;if(!jr(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(!jr(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");if(arguments.length>2){if(!yr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?e.length+t:t}else n=0;if(0===r.length)return!0;if(n<0||n+r.length>e.length)return!1;for(i=0;i<r.length;i++)if(e.charCodeAt(n+i)!==r.charCodeAt(i))return!1;return!0},Pr=wr,_r=Er;var Tr=function(e,r,t){var n=!1,i=r-e.length;return i<0||(_r(e,"-")&&(n=!0,e=e.substr(1)),e=t?e+Pr("0",i):Pr("0",i)+e,n&&(e="-"+e)),e},Vr=ir,Or=er,xr=xe,Sr=ur,kr=oe.isPrimitive,Fr=Tr;var Ir=function(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!Sr(n)){if(!kr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Fr(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Fr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=Vr(e.specifier)?Or(t):xr(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ar=X.isPrimitive,Mr=/[-\/\\^$*+?.()|[\]{}]/g;var Rr=function(e){var r,t;if(!Ar(e))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+e+"`.");if("/"===e[0])for(t=e.length-1;t>=0&&"/"!==e[t];t--);return void 0===t||t<=0?e.replace(Mr,"\\$&"):(r=(r=e.substring(1,t)).replace(Mr,"\\$&"),e=e[0]+r+e.substring(t))},$r=/./;var Cr=function(e){return"boolean"==typeof e},Dr=Boolean.prototype.toString;var Nr=v,Br=function(e){try{return Dr.call(e),!0}catch(e){return!1}},Gr=t();var Yr=function(e){return"object"==typeof e&&(e instanceof Boolean||(Gr?Br(e):"[object Boolean]"===Nr(e)))},Lr=Cr,Zr=Yr;var Wr=M,Xr=function(e){return Lr(e)||Zr(e)},zr=Yr;Wr(Xr,"isPrimitive",Cr),Wr(Xr,"isObject",zr);var Ur=Xr;var qr=function(){return new Function("return this;")()},Hr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Qr="object"==typeof Kr?Kr:null;module.exports=Qr;var et=Ur.isPrimitive,rt=qr,tt=Hr,nt=Jr,it=e(Object.freeze({__proto__:null}));var at=function(e){if(arguments.length){if(!et(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return rt()}if(tt)return tt;if(nt)return nt;if(it)return it;throw new Error("unexpected error. Unable to resolve global object.")},ot=at(),ut=ot.document&&ot.document.childNodes,ct=Int8Array,st=$r,ft=ut,lt=ct;var gt=function(){return"function"==typeof st||"object"==typeof lt||"function"==typeof ft};var pt=function(){return/^\s*function\s*([^(]*)/i},vt=pt;M(vt,"REGEXP",pt());var dt=vt,mt=v;var ht=Array.isArray?Array.isArray:function(e){return"[object Array]"===mt(e)};var bt=function(e){return null!==e&&"object"==typeof e};M(bt,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!ht(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(bt));var wt=bt;var yt=v,jt=dt.REGEXP,Et=function(e){return wt(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var Pt=function(e){var r,t,n;if(("Object"===(t=yt(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=jt.exec(n.toString()))return r[1]}return Et(e)?"Buffer":t},_t=Pt;var Tt=Pt;var Vt=function(e){var r;return null===e?"null":"object"===(r=typeof e)?_t(e).toLowerCase():r},Ot=function(e){return Tt(e).toLowerCase()},xt=gt()?Ot:Vt;var St=function(e){return"function"===xt(e)},kt=RegExp.prototype.exec;var Ft=v,It=function(e){try{return kt.call(e),!0}catch(e){return!1}},At=t();var Mt=Rr,Rt=St,$t=X.isPrimitive,Ct=function(e){return"object"==typeof e&&(e instanceof RegExp||(At?It(e):"[object RegExp]"===Ft(e)))};var Dt=ir,Nt=er,Bt=xe,Gt=function(e,r,t){if(!$t(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if($t(r))r=Mt(r),r=new RegExp(r,"g");else if(!Ct(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!$t(t)&&!Rt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return e.replace(r,t)},Yt=ur,Lt=oe.isPrimitive,Zt=function(e){return Math.abs(e)},Wt=/e\+(\d)$/,Xt=/e-(\d)$/,zt=/^(\d+)$/,Ut=/^(\d+)e/,qt=/\.0$/,Ht=/\.0*e/,Jt=/(\..*[^0])0*e/;var Kt=function(e){var r,t,n=parseFloat(e.arg);if(!Yt(n)){if(!Lt(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Zt(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Gt(t,Jt,"$1e"),t=Gt(t,Ht,"e"),t=Gt(t,qt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Gt(t,Wt,"e+0$1"),t=Gt(t,Xt,"e-0$1"),e.alternate&&(t=Gt(t,zt,"$1."),t=Gt(t,Ut,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=Dt(e.specifier)?Nt(t):Bt(t)},Qt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var en=wr;var rn=X.isPrimitive,tn=Ke,nn=Re,an=Ir,on=Kt,un=function(e){var r,t,n,i,a;for(r=0,n=[],a=Qt.exec(e);a;)(t=e.slice(r,Qt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),r=Qt.lastIndex,a=Qt.exec(e);return(t=e.slice(r)).length&&n.push(t),n;function o(e){return{mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],hasPeriod:"."===e[4],precision:e[5],specifier:e[6]}}},cn=function(e,r,t){var n=r-e.length;return n<0?e:e=t?e+en(" ",n):en(" ",n)+e},sn=Tr,fn=String.fromCharCode;var ln=function(e){var r,t,n,i,a,o,u,c,s;if(!rn(e))throw new TypeError("invalid argument. Must provide a string. Value: `"+e+"`.");for(r=un(e),o="",u=1,c=0;c<r.length;c++)if(n=r[c],rn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!tn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,nn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,nn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=an(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!nn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=nn(a)?String(n.arg):fn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=on(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=sn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=cn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},gn=w,pn=X.isPrimitive,vn=Ve.isPrimitive,dn=xe,mn=Ie,hn=ln,bn={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};var wn=function(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(gn(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!pn(e)&&!vn(e))throw new TypeError(hn("invalid argument. First argument must be either a string, integer, or `Date` object. Value: `%s`.",e));i=(new Date).getFullYear(),n=e}else{if(!pn(e)&&!vn(e))throw new TypeError(hn("invalid argument. First argument must be either a string or integer. Value: `%s`.",e));if(!vn(r))throw new TypeError(hn("invalid argument. Second argument must be an integer. Value: `%s`.",r));n=e,i=r}if(vn(n)&&(n<1||n>12))throw new RangeError(hn("invalid argument. An integer month value must be on the interval `[1,12]`. Value: `%s`.",n));if(n=dn(n.toString()),void 0===(t=bn[n]))throw new Error(hn("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&mn(i)&&(t+=86400),t};return wn}));
//# sourceMappingURL=bundle.js.map
