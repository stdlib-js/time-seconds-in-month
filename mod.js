// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(r){return i.call(r)},o=Object.prototype.hasOwnProperty;var u=function(r,e){return null!=r&&o.call(r,e)},c="function"==typeof Symbol?Symbol.toStringTag:"",s=u,f=c,l=n;var g=a,v=function(r){var e,t,n;if(null==r)return l.call(r);t=r[f],e=s(r,f);try{r[f]=void 0}catch(e){return l.call(r)}return n=l.call(r),e?r[f]=t:delete r[f],n},p=t()?v:g,m=Date.prototype.getDay;var h=p,d=function(r){try{return m.call(r),!0}catch(r){return!1}},b=t();var w=function(r){return"object"==typeof r&&(r instanceof Date||(b?d(r):"[object Date]"===h(r)))},y="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=function(){try{return y({},"x",{}),!0}catch(r){return!1}},E=Object.defineProperty,P=Object.prototype,_=P.toString,T=P.__defineGetter__,V=P.__defineSetter__,O=P.__lookupGetter__,x=P.__lookupSetter__;var S=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===_.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===_.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(O.call(r,e)||x.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r},k=E,F=S,I=j()?k:F;var A=function(r,e,t){I(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},M=A;var R=function(r){return"string"==typeof r},$=String.prototype.valueOf;var C=p,D=function(r){try{return $.call(r),!0}catch(r){return!1}},N=t();var B=function(r){return"object"==typeof r&&(r instanceof String||(N?D(r):"[object String]"===C(r)))},G=R,Y=B;var L=M,Z=function(r){return G(r)||Y(r)},W=B;L(Z,"isPrimitive",R),L(Z,"isObject",W);var X=Z;var z=function(r){return"number"==typeof r},U=Number,q=U.prototype.toString;var H=p,J=U,K=function(r){try{return q.call(r),!0}catch(r){return!1}},Q=t();var rr=function(r){return"object"==typeof r&&(r instanceof J||(Q?K(r):"[object Number]"===H(r)))},er=z,tr=rr;var nr=M,ir=function(r){return er(r)||tr(r)},ar=rr;nr(ir,"isPrimitive",z),nr(ir,"isObject",ar);var or=ir,ur=Number.POSITIVE_INFINITY,cr=U.NEGATIVE_INFINITY,sr=Math.floor;var fr=function(r){return sr(r)===r},lr=ur,gr=cr,vr=fr;var pr=function(r){return r<lr&&r>gr&&vr(r)},mr=or.isPrimitive,hr=pr;var dr=function(r){return mr(r)&&hr(r)},br=or.isObject,wr=pr;var yr=function(r){return br(r)&&wr(r.valueOf())},jr=dr,Er=yr;var Pr=M,_r=function(r){return jr(r)||Er(r)},Tr=yr;Pr(_r,"isPrimitive",dr),Pr(_r,"isObject",Tr);var Vr=_r,Or=X.isPrimitive;var xr=function(r){if(!Or(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Sr=w,kr=Vr.isPrimitive;var Fr=function(r){var e;if(arguments.length)if(Sr(r))e=r.getFullYear();else{if(!kr(r))return!1;e=r}else e=(new Date).getFullYear();return e%100==0?e%400==0:e%4==0},Ir=fr;var Ar=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ir(r.length)&&r.length>=0&&r.length<=9007199254740991};var Mr=function(r){return r!=r},Rr=or.isPrimitive,$r=Mr;var Cr=function(r){return Rr(r)&&$r(r)},Dr=or.isObject,Nr=Mr;var Br=function(r){return Dr(r)&&Nr(r.valueOf())},Gr=Cr,Yr=Br;var Lr=M,Zr=function(r){return Gr(r)||Yr(r)},Wr=Br;Lr(Zr,"isPrimitive",Cr),Lr(Zr,"isObject",Wr);var Xr=Ar,zr=Vr.isPrimitive,Ur=X.isPrimitive,qr=Zr.isPrimitive;var Hr=function(r,e,t){var n,i,a;if(!Xr(r)&&!Ur(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!zr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ur(r)){if(!Ur(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,qr(e)){for(a=i;a<n;a++)if(qr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Jr=X.isPrimitive;var Kr=function(r){if(!Jr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Qr=xr,re=Kr,ee=X.isPrimitive;var te=function(r){return ee(r)&&r===re(r)&&r!==Qr(r)},ne=ur,ie=cr;var ae=function(r){return r==r&&r>ie&&r<ne},oe=Vr.isPrimitive;var ue=function(r){return oe(r)&&r>=0},ce=Vr.isObject;var se=function(r){return ce(r)&&r.valueOf()>=0},fe=ue,le=se;var ge=M,ve=function(r){return fe(r)||le(r)},pe=se;ge(ve,"isPrimitive",ue),ge(ve,"isObject",pe);var me=ve.isPrimitive,he=X.isPrimitive;var de=function(r,e){var t,n;if(!he(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!me(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},be=Vr.isPrimitive,we=X.isPrimitive;var ye=de,je=function(r,e,t){var n,i;if(!we(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!we(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!be(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Ee=function(r,e,t){var n=!1,i=e-r.length;return i<0||(je(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ye("0",i):ye("0",i)+r,n&&(r="-"+r)),r},Pe=te,_e=Kr,Te=xr,Ve=ae,Oe=or.isPrimitive,xe=Ee;var Se=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ve(n)){if(!Oe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=xe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=xe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Pe(r.specifier)?_e(t):Te(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},ke=X.isPrimitive,Fe=/[-\/\\^$*+?.()|[\]{}]/g;var Ie=function(r){var e,t;if(!ke(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Fe,"\\$&"):(e=(e=r.substring(1,t)).replace(Fe,"\\$&"),r=r[0]+e+r.substring(t))},Ae=/./;var Me=function(r){return"boolean"==typeof r},Re=Boolean.prototype.toString;var $e=p,Ce=function(r){try{return Re.call(r),!0}catch(r){return!1}},De=t();var Ne=function(r){return"object"==typeof r&&(r instanceof Boolean||(De?Ce(r):"[object Boolean]"===$e(r)))},Be=Me,Ge=Ne;var Ye=M,Le=function(r){return Be(r)||Ge(r)},Ze=Ne;Ye(Le,"isPrimitive",Me),Ye(Le,"isObject",Ze);var We="object"==typeof self?self:null,Xe="object"==typeof window?window:null,ze=Le.isPrimitive,Ue=function(){return new Function("return this;")()},qe=We,He=Xe,Je=r(Object.freeze({__proto__:null}));var Ke=function(r){if(arguments.length){if(!ze(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ue()}if(qe)return qe;if(He)return He;if(Je)return Je;throw new Error("unexpected error. Unable to resolve global object.")},Qe=Ke(),rt=Qe.document&&Qe.document.childNodes,et=Int8Array,tt=Ae,nt=rt,it=et;var at=function(){return"function"==typeof tt||"object"==typeof it||"function"==typeof nt};var ot=function(){return/^\s*function\s*([^(]*)/i},ut=ot;M(ut,"REGEXP",ot());var ct=ut,st=p;var ft=Array.isArray?Array.isArray:function(r){return"[object Array]"===st(r)};var lt=function(r){return null!==r&&"object"==typeof r};M(lt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ft(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lt));var gt=lt;var vt=p,pt=ct.REGEXP,mt=function(r){return gt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ht=function(r){var e,t,n;if(("Object"===(t=vt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pt.exec(n.toString()))return e[1]}return mt(r)?"Buffer":t},dt=ht;var bt=ht;var wt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?dt(r).toLowerCase():e},yt=function(r){return bt(r).toLowerCase()},jt=at()?yt:wt;var Et=function(r){return"function"===jt(r)},Pt=RegExp.prototype.exec;var _t=p,Tt=function(r){try{return Pt.call(r),!0}catch(r){return!1}},Vt=t();var Ot=Ie,xt=Et,St=X.isPrimitive,kt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Vt?Tt(r):"[object RegExp]"===_t(r)))};var Ft=te,It=Kr,At=xr,Mt=function(r,e,t){if(!St(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(St(e))e=Ot(e),e=new RegExp(e,"g");else if(!kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!St(t)&&!xt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Rt=ae,$t=or.isPrimitive,Ct=function(r){return Math.abs(r)},Dt=/e\+(\d)$/,Nt=/e-(\d)$/,Bt=/^(\d+)$/,Gt=/^(\d+)e/,Yt=/\.0$/,Lt=/\.0*e/,Zt=/(\..*[^0])0*e/;var Wt=function(r){var e,t,n=parseFloat(r.arg);if(!Rt(n)){if(!$t(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ct(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Mt(t,Zt,"$1e"),t=Mt(t,Lt,"e"),t=Mt(t,Yt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Mt(t,Dt,"e+0$1"),t=Mt(t,Nt,"e-0$1"),r.alternate&&(t=Mt(t,Bt,"$1."),t=Mt(t,Gt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ft(r.specifier)?It(t):At(t)},Xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var zt=de;var Ut=X.isPrimitive,qt=Hr,Ht=Mr,Jt=Se,Kt=Wt,Qt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Xt.exec(r);a;)(t=r.slice(e,Xt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Xt.lastIndex,a=Xt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},rn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+zt(" ",n):zt(" ",n)+r},en=Ee,tn=String.fromCharCode;var nn=w,an=X.isPrimitive,on=Vr.isPrimitive,un=xr,cn=Fr,sn=function(r){var e,t,n,i,a,o,u,c,s;if(!Ut(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Qt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Ut(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ht(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ht(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Jt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ht(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ht(a)?String(n.arg):tn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Kt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=en(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=rn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},fn={1:2678400,2:2419200,3:2678400,4:2592e3,5:2678400,6:2592e3,7:2678400,8:2678400,9:2592e3,10:2678400,11:2592e3,12:2678400,jan:2678400,january:2678400,feb:2419200,february:2419200,mar:2678400,march:2678400,apr:2592e3,april:2592e3,may:2678400,jun:2592e3,june:2592e3,jul:2678400,july:2678400,aug:2678400,august:2678400,sep:2592e3,september:2592e3,oct:2678400,october:2678400,nov:2592e3,november:2592e3,dec:2678400,december:2678400};var ln=function(r,e){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(nn(r))n=(a=r).getMonth()+1,i=a.getFullYear();else{if(!an(r)&&!on(r))throw new TypeError(sn("invalid argument. First argument must be either a string, integer, or `Date` object. Value: `%s`.",r));i=(new Date).getFullYear(),n=r}else{if(!an(r)&&!on(r))throw new TypeError(sn("invalid argument. First argument must be either a string or integer. Value: `%s`.",r));if(!on(e))throw new TypeError(sn("invalid argument. Second argument must be an integer. Value: `%s`.",e));n=r,i=e}if(on(n)&&(n<1||n>12))throw new RangeError(sn("invalid argument. An integer month value must be on the interval `[1,12]`. Value: `%s`.",n));if(n=un(n.toString()),void 0===(t=fn[n]))throw new Error(sn("invalid argument. Must provide a recognized month. Value: `%s`.",n));return 2419200===t&&cn(i)&&(t+=86400),t};export{ln as default};
//# sourceMappingURL=mod.js.map
