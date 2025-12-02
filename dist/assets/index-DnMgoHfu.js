function my(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ap={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),_y=Symbol.for("react.portal"),vy=Symbol.for("react.fragment"),yy=Symbol.for("react.strict_mode"),wy=Symbol.for("react.profiler"),Ey=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),Iy=Symbol.for("react.suspense"),ky=Symbol.for("react.memo"),Ty=Symbol.for("react.lazy"),Xd=Symbol.iterator;function Ny(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Lp={};function Jr(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||Op}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mp(){}Mp.prototype=Jr.prototype;function Zu(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||Op}var ec=Zu.prototype=new Mp;ec.constructor=Zu;Dp(ec,Jr.prototype);ec.isPureReactComponent=!0;var Jd=Array.isArray,bp=Object.prototype.hasOwnProperty,tc={current:null},Fp={key:!0,ref:!0,__self:!0,__source:!0};function Up(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bp.call(e,r)&&!Fp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:t,key:s,ref:o,props:i,_owner:tc.current}}function Ry(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function Py(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zd=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Py(""+t.key):e.toString(36)}function eo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case _y:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gl(o,0):r,Jd(i)?(n="",t!=null&&(n=t.replace(Zd,"$&/")+"/"),eo(i,e,n,"",function(u){return u})):i!=null&&(nc(i)&&(i=Ry(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Gl(s,l);o+=eo(s,e,n,a,i)}else if(a=Ny(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Gl(s,l++),o+=eo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ds(t,e,n){if(t==null)return t;var r=[],i=0;return eo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},to={transition:null},Ay={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:to,ReactCurrentOwner:tc};function zp(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Ds,forEach:function(t,e,n){Ds(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ds(t,function(){e++}),e},toArray:function(t){return Ds(t,function(e){return e})||[]},only:function(t){if(!nc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Jr;W.Fragment=vy;W.Profiler=wy;W.PureComponent=Zu;W.StrictMode=yy;W.Suspense=Iy;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;W.act=zp;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)bp.call(e,a)&&!Fp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_s,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:Cy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ey,_context:t},t.Consumer=t};W.createElement=Up;W.createFactory=function(t){var e=Up.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Sy,render:t}};W.isValidElement=nc;W.lazy=function(t){return{$$typeof:Ty,_payload:{_status:-1,_result:t},_init:xy}};W.memo=function(t,e){return{$$typeof:ky,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=to.transition;to.transition={};try{t()}finally{to.transition=e}};W.unstable_act=zp;W.useCallback=function(t,e){return Oe.current.useCallback(t,e)};W.useContext=function(t){return Oe.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};W.useEffect=function(t,e){return Oe.current.useEffect(t,e)};W.useId=function(){return Oe.current.useId()};W.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Oe.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};W.useRef=function(t){return Oe.current.useRef(t)};W.useState=function(t){return Oe.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Oe.current.useTransition()};W.version="18.3.1";Ap.exports=W;var T=Ap.exports;const v=gy(T),Oy=my({__proto__:null,default:v},[T]);var Bp={exports:{}},Xe={},Wp={exports:{}},Vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,C){var I=R.length;R.push(C);e:for(;0<I;){var M=I-1>>>1,b=R[M];if(0<i(b,C))R[M]=C,R[I]=b,I=M;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var C=R[0],I=R.pop();if(I!==C){R[0]=I;e:for(var M=0,b=R.length,ae=b>>>1;M<ae;){var se=2*(M+1)-1,Ce=R[se],Re=se+1,dr=R[Re];if(0>i(Ce,I))Re<b&&0>i(dr,Ce)?(R[M]=dr,R[Re]=I,M=Re):(R[M]=Ce,R[se]=I,M=se);else if(Re<b&&0>i(dr,I))R[M]=dr,R[Re]=I,M=Re;else break e}}return C}function i(R,C){var I=R.sortIndex-C.sortIndex;return I!==0?I:R.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,d=3,m=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var C=n(u);C!==null;){if(C.callback===null)r(u);else if(C.startTime<=R)r(u),C.sortIndex=C.expirationTime,e(a,C);else break;C=n(u)}}function w(R){if(y=!1,g(R),!_)if(n(a)!==null)_=!0,ai(N);else{var C=n(u);C!==null&&ui(w,C.startTime-R)}}function N(R,C){_=!1,y&&(y=!1,p(O),O=-1),m=!0;var I=d;try{for(g(C),c=n(a);c!==null&&(!(c.expirationTime>C)||R&&!$e());){var M=c.callback;if(typeof M=="function"){c.callback=null,d=c.priorityLevel;var b=M(c.expirationTime<=C);C=t.unstable_now(),typeof b=="function"?c.callback=b:c===n(a)&&r(a),g(C)}else r(a);c=n(a)}if(c!==null)var ae=!0;else{var se=n(u);se!==null&&ui(w,se.startTime-C),ae=!1}return ae}finally{c=null,d=I,m=!1}}var x=!1,A=null,O=-1,Q=5,F=-1;function $e(){return!(t.unstable_now()-F<Q)}function On(){if(A!==null){var R=t.unstable_now();F=R;var C=!0;try{C=A(!0,R)}finally{C?Dn():(x=!1,A=null)}}else x=!1}var Dn;if(typeof f=="function")Dn=function(){f(On)};else if(typeof MessageChannel<"u"){var Os=new MessageChannel,je=Os.port2;Os.port1.onmessage=On,Dn=function(){je.postMessage(null)}}else Dn=function(){E(On,0)};function ai(R){A=R,x||(x=!0,Dn())}function ui(R,C){O=E(function(){R(t.unstable_now())},C)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,ai(N))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var C=3;break;default:C=d}var I=d;d=C;try{return R()}finally{d=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,C){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=d;d=R;try{return C()}finally{d=I}},t.unstable_scheduleCallback=function(R,C,I){var M=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?M+I:M):I=M,R){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=I+b,R={id:h++,callback:C,priorityLevel:R,startTime:I,expirationTime:b,sortIndex:-1},I>M?(R.sortIndex=I,e(u,R),n(a)===null&&R===n(u)&&(y?(p(O),O=-1):y=!0,ui(w,I-M))):(R.sortIndex=b,e(a,R),_||m||(_=!0,ai(N))),R},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(R){var C=d;return function(){var I=d;d=C;try{return R.apply(this,arguments)}finally{d=I}}}})(Vp);Wp.exports=Vp;var Dy=Wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=T,Ye=Dy;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hp=new Set,Hi={};function sr(t,e){Br(t,e),Br(t+"Capture",e)}function Br(t,e){for(Hi[t]=e,t=0;t<e.length;t++)Hp.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ba=Object.prototype.hasOwnProperty,My=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function by(t){return ba.call(th,t)?!0:ba.call(eh,t)?!1:My.test(t)?th[t]=!0:(eh[t]=!0,!1)}function Fy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uy(t,e,n,r){if(e===null||typeof e>"u"||Fy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var rc=/[\-:]([a-z])/g;function ic(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rc,ic);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rc,ic);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rc,ic);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function sc(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uy(e,n,i,r)&&(n=null),r||i===null?by(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ls=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),jp=Symbol.for("react.context"),lc=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),za=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Gp=Symbol.for("react.offscreen"),nh=Symbol.iterator;function ci(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Kl;function Ci(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var ql=!1;function Ql(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function zy(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function Ba(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case Fa:return"Profiler";case oc:return"StrictMode";case Ua:return"Suspense";case za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jp:return(t.displayName||"Context")+".Consumer";case $p:return(t._context.displayName||"Context")+".Provider";case lc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ac:return e=t.displayName||null,e!==null?e:Ba(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return Ba(t(e))}catch{}}return null}function By(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ba(e);case 8:return e===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wy(t){var e=Kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ms(t){t._valueTracker||(t._valueTracker=Wy(t))}function qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wa(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qp(t,e){e=e.checked,e!=null&&sc(t,"checked",e,!1)}function Va(t,e){Qp(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ha(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ha(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ha(t,e,n){(e!=="number"||vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Si=Array.isArray;function Rr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Si(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function Yp(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ja(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bs,Jp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vy=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){Vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ti[e]=Ti[t]})});function Zp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+e).trim():e+"px"}function em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hy=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(t,e){if(e){if(Hy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ka(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,Pr=null,xr=null;function lh(t){if(t=ws(t)){if(typeof Qa!="function")throw Error(S(280));var e=t.stateNode;e&&(e=vl(e),Qa(t.stateNode,t.type,e))}}function tm(t){Pr?xr?xr.push(t):xr=[t]:Pr=t}function nm(){if(Pr){var t=Pr,e=xr;if(xr=Pr=null,lh(t),e)for(t=0;t<e.length;t++)lh(e[t])}}function rm(t,e){return t(e)}function im(){}var Yl=!1;function sm(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return rm(t,e,n)}finally{Yl=!1,(Pr!==null||xr!==null)&&(im(),nm())}}function ji(t,e){var n=t.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ya=!1;if(Bt)try{var di={};Object.defineProperty(di,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{Ya=!1}function $y(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Ni=!1,yo=null,wo=!1,Xa=null,jy={onError:function(t){Ni=!0,yo=t}};function Gy(t,e,n,r,i,s,o,l,a){Ni=!1,yo=null,$y.apply(jy,arguments)}function Ky(t,e,n,r,i,s,o,l,a){if(Gy.apply(this,arguments),Ni){if(Ni){var u=yo;Ni=!1,yo=null}else throw Error(S(198));wo||(wo=!0,Xa=u)}}function or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function om(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ah(t){if(or(t)!==t)throw Error(S(188))}function qy(t){var e=t.alternate;if(!e){if(e=or(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ah(i),t;if(s===r)return ah(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function lm(t){return t=qy(t),t!==null?am(t):null}function am(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=am(t);if(e!==null)return e;t=t.sibling}return null}var um=Ye.unstable_scheduleCallback,uh=Ye.unstable_cancelCallback,Qy=Ye.unstable_shouldYield,Yy=Ye.unstable_requestPaint,oe=Ye.unstable_now,Xy=Ye.unstable_getCurrentPriorityLevel,cc=Ye.unstable_ImmediatePriority,cm=Ye.unstable_UserBlockingPriority,Eo=Ye.unstable_NormalPriority,Jy=Ye.unstable_LowPriority,dm=Ye.unstable_IdlePriority,pl=null,Ct=null;function Zy(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:nw,ew=Math.log,tw=Math.LN2;function nw(t){return t>>>=0,t===0?32:31-(ew(t)/tw|0)|0}var Fs=64,Us=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Co(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ii(l):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pt(e),i=1<<n,r|=t[n],e&=~i;return r}function rw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=rw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ja(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hm(){var t=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function sw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function dc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pm,hc,mm,gm,_m,Za=!1,zs=[],cn=null,dn=null,hn=null,Gi=new Map,Ki=new Map,tn=[],ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(e.pointerId)}}function hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ws(e),e!==null&&hc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lw(t,e,n,r,i){switch(e){case"focusin":return cn=hi(cn,t,e,n,r,i),!0;case"dragenter":return dn=hi(dn,t,e,n,r,i),!0;case"mouseover":return hn=hi(hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,hi(Gi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ki.set(s,hi(Ki.get(s)||null,t,e,n,r,i)),!0}return!1}function vm(t){var e=Un(t.target);if(e!==null){var n=or(e);if(n!==null){if(e=n.tag,e===13){if(e=om(n),e!==null){t.blockedOn=e,_m(t.priority,function(){mm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return e=ws(n),e!==null&&hc(e),t.blockedOn=n,!1;e.shift()}return!0}function dh(t,e,n){no(t)&&n.delete(e)}function aw(){Za=!1,cn!==null&&no(cn)&&(cn=null),dn!==null&&no(dn)&&(dn=null),hn!==null&&no(hn)&&(hn=null),Gi.forEach(dh),Ki.forEach(dh)}function fi(t,e){t.blockedOn===e&&(t.blockedOn=null,Za||(Za=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,aw)))}function qi(t){function e(i){return fi(i,t)}if(0<zs.length){fi(zs[0],t);for(var n=1;n<zs.length;n++){var r=zs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cn!==null&&fi(cn,t),dn!==null&&fi(dn,t),hn!==null&&fi(hn,t),Gi.forEach(e),Ki.forEach(e),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)vm(n),n.blockedOn===null&&tn.shift()}var Ar=qt.ReactCurrentBatchConfig,So=!0;function uw(t,e,n,r){var i=$,s=Ar.transition;Ar.transition=null;try{$=1,fc(t,e,n,r)}finally{$=i,Ar.transition=s}}function cw(t,e,n,r){var i=$,s=Ar.transition;Ar.transition=null;try{$=4,fc(t,e,n,r)}finally{$=i,Ar.transition=s}}function fc(t,e,n,r){if(So){var i=eu(t,e,n,r);if(i===null)la(t,e,r,Io,n),ch(t,r);else if(lw(i,t,e,n,r))r.stopPropagation();else if(ch(t,r),e&4&&-1<ow.indexOf(t)){for(;i!==null;){var s=ws(i);if(s!==null&&pm(s),s=eu(t,e,n,r),s===null&&la(t,e,r,Io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else la(t,e,r,null,n)}}var Io=null;function eu(t,e,n,r){if(Io=null,t=uc(r),t=Un(t),t!==null)if(e=or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=om(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Io=t,null}function ym(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case cc:return 1;case cm:return 4;case Eo:case Jy:return 16;case dm:return 536870912;default:return 16}default:return 16}}var ln=null,pc=null,ro=null;function wm(){if(ro)return ro;var t,e=pc,n=e.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ro=i.slice(t,1<r?1-r:void 0)}function io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bs(){return!0}function hh(){return!1}function Je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bs:hh,this.isPropagationStopped=hh,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),e}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=Je(Zr),ys=ne({},Zr,{view:0,detail:0}),dw=Je(ys),Jl,Zl,pi,ml=ne({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(Jl=t.screenX-pi.screenX,Zl=t.screenY-pi.screenY):Zl=Jl=0,pi=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),fh=Je(ml),hw=ne({},ml,{dataTransfer:0}),fw=Je(hw),pw=ne({},ys,{relatedTarget:0}),ea=Je(pw),mw=ne({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),gw=Je(mw),_w=ne({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vw=Je(_w),yw=ne({},Zr,{data:0}),ph=Je(yw),ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cw[t])?!!e[t]:!1}function gc(){return Sw}var Iw=ne({},ys,{key:function(t){if(t.key){var e=ww[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ew[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kw=Je(Iw),Tw=ne({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Je(Tw),Nw=ne({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Rw=Je(Nw),Pw=ne({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xw=Je(Pw),Aw=ne({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ow=Je(Aw),Dw=[9,13,27,32],_c=Bt&&"CompositionEvent"in window,Ri=null;Bt&&"documentMode"in document&&(Ri=document.documentMode);var Lw=Bt&&"TextEvent"in window&&!Ri,Em=Bt&&(!_c||Ri&&8<Ri&&11>=Ri),gh=" ",_h=!1;function Cm(t,e){switch(t){case"keyup":return Dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function Mw(t,e){switch(t){case"compositionend":return Sm(e);case"keypress":return e.which!==32?null:(_h=!0,gh);case"textInput":return t=e.data,t===gh&&_h?null:t;default:return null}}function bw(t,e){if(_r)return t==="compositionend"||!_c&&Cm(t,e)?(t=wm(),ro=pc=ln=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Em&&e.locale!=="ko"?null:e.data;default:return null}}var Fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fw[t.type]:e==="textarea"}function Im(t,e,n,r){tm(r),e=ko(e,"onChange"),0<e.length&&(n=new mc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Qi=null;function Uw(t){Mm(t,0)}function gl(t){var e=wr(t);if(qp(e))return t}function zw(t,e){if(t==="change")return e}var km=!1;if(Bt){var ta;if(Bt){var na="oninput"in document;if(!na){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),na=typeof yh.oninput=="function"}ta=na}else ta=!1;km=ta&&(!document.documentMode||9<document.documentMode)}function wh(){Pi&&(Pi.detachEvent("onpropertychange",Tm),Qi=Pi=null)}function Tm(t){if(t.propertyName==="value"&&gl(Qi)){var e=[];Im(e,Qi,t,uc(t)),sm(Uw,e)}}function Bw(t,e,n){t==="focusin"?(wh(),Pi=e,Qi=n,Pi.attachEvent("onpropertychange",Tm)):t==="focusout"&&wh()}function Ww(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(Qi)}function Vw(t,e){if(t==="click")return gl(e)}function Hw(t,e){if(t==="input"||t==="change")return gl(e)}function $w(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:$w;function Yi(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ba.call(e,i)||!vt(t[i],e[i]))return!1}return!0}function Eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var n=Eh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eh(n)}}function Nm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rm(){for(var t=window,e=vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vo(t.document)}return e}function vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jw(t){var e=Rm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nm(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ch(n,s);var o=Ch(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gw=Bt&&"documentMode"in document&&11>=document.documentMode,vr=null,tu=null,xi=null,nu=!1;function Sh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||vr==null||vr!==vo(r)||(r=vr,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Yi(xi,r)||(xi=r,r=ko(tu,"onSelect"),0<r.length&&(e=new mc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function Ws(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yr={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},ra={},Pm={};Bt&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function _l(t){if(ra[t])return ra[t];if(!yr[t])return t;var e=yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pm)return ra[t]=e[n];return t}var xm=_l("animationend"),Am=_l("animationiteration"),Om=_l("animationstart"),Dm=_l("transitionend"),Lm=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(t,e){Lm.set(t,e),sr(e,[t])}for(var ia=0;ia<Ih.length;ia++){var sa=Ih[ia],Kw=sa.toLowerCase(),qw=sa[0].toUpperCase()+sa.slice(1);Rn(Kw,"on"+qw)}Rn(xm,"onAnimationEnd");Rn(Am,"onAnimationIteration");Rn(Om,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Dm,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function kh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ky(r,e,void 0,t),t.currentTarget=null}function Mm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;kh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;kh(i,l,u),s=a}}}if(wo)throw t=Xa,wo=!1,Xa=null,t}function Y(t,e){var n=e[lu];n===void 0&&(n=e[lu]=new Set);var r=t+"__bubble";n.has(r)||(bm(e,t,2,!1),n.add(r))}function oa(t,e,n){var r=0;e&&(r|=4),bm(n,t,r,e)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[Vs]){t[Vs]=!0,Hp.forEach(function(n){n!=="selectionchange"&&(Qw.has(n)||oa(n,!1,t),oa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vs]||(e[Vs]=!0,oa("selectionchange",!1,e))}}function bm(t,e,n,r){switch(ym(e)){case 1:var i=uw;break;case 4:i=cw;break;default:i=fc}n=i.bind(null,e,n,t),i=void 0,!Ya||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function la(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Un(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}sm(function(){var u=s,h=uc(n),c=[];e:{var d=Lm.get(t);if(d!==void 0){var m=mc,_=t;switch(t){case"keypress":if(io(n)===0)break e;case"keydown":case"keyup":m=kw;break;case"focusin":_="focus",m=ea;break;case"focusout":_="blur",m=ea;break;case"beforeblur":case"afterblur":m=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Rw;break;case xm:case Am:case Om:m=gw;break;case Dm:m=xw;break;case"scroll":m=dw;break;case"wheel":m=Ow;break;case"copy":case"cut":case"paste":m=vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mh}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=ji(f,p),w!=null&&y.push(Ji(f,w,g)))),E)break;f=f.return}0<y.length&&(d=new m(d,_,null,n,h),c.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qa&&(_=n.relatedTarget||n.fromElement)&&(Un(_)||_[Wt]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Un(_):null,_!==null&&(E=or(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=fh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=mh,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?d:wr(m),g=_==null?d:wr(_),d=new y(w,f+"leave",m,n,h),d.target=E,d.relatedTarget=g,w=null,Un(h)===u&&(y=new y(p,f+"enter",_,n,h),y.target=g,y.relatedTarget=E,w=y),E=w,m&&_)t:{for(y=m,p=_,f=0,g=y;g;g=hr(g))f++;for(g=0,w=p;w;w=hr(w))g++;for(;0<f-g;)y=hr(y),f--;for(;0<g-f;)p=hr(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=hr(y),p=hr(p)}y=null}else y=null;m!==null&&Th(c,d,m,y,!1),_!==null&&E!==null&&Th(c,E,_,y,!0)}}e:{if(d=u?wr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var N=zw;else if(vh(d))if(km)N=Hw;else{N=Ww;var x=Bw}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=Vw);if(N&&(N=N(t,u))){Im(c,N,n,h);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&Ha(d,"number",d.value)}switch(x=u?wr(u):window,t){case"focusin":(vh(x)||x.contentEditable==="true")&&(vr=x,tu=u,xi=null);break;case"focusout":xi=tu=vr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Sh(c,n,h);break;case"selectionchange":if(Gw)break;case"keydown":case"keyup":Sh(c,n,h)}var A;if(_c)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else _r?Cm(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Em&&n.locale!=="ko"&&(_r||O!=="onCompositionStart"?O==="onCompositionEnd"&&_r&&(A=wm()):(ln=h,pc="value"in ln?ln.value:ln.textContent,_r=!0)),x=ko(u,O),0<x.length&&(O=new ph(O,t,null,n,h),c.push({event:O,listeners:x}),A?O.data=A:(A=Sm(n),A!==null&&(O.data=A)))),(A=Lw?Mw(t,n):bw(t,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(h=new ph("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=A))}Mm(c,e)})}function Ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ko(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(t,n),s!=null&&r.unshift(Ji(t,s,i)),s=ji(t,e),s!=null&&r.push(Ji(t,s,i))),t=t.return}return r}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ji(n,s),a!=null&&o.unshift(Ji(n,a,l))):i||(a=ji(n,s),a!=null&&o.push(Ji(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Yw=/\r\n?/g,Xw=/\u0000|\uFFFD/g;function Nh(t){return(typeof t=="string"?t:""+t).replace(Yw,`
`).replace(Xw,"")}function Hs(t,e,n){if(e=Nh(e),Nh(t)!==e&&n)throw Error(S(425))}function To(){}var ru=null,iu=null;function su(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,Jw=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(t){return Rh.resolve(null).then(t).catch(eE)}:ou;function eE(t){setTimeout(function(){throw t})}function aa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),Et="__reactFiber$"+ei,Zi="__reactProps$"+ei,Wt="__reactContainer$"+ei,lu="__reactEvents$"+ei,tE="__reactListeners$"+ei,nE="__reactHandles$"+ei;function Un(t){var e=t[Et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[Et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ph(t);t!==null;){if(n=t[Et])return n;t=Ph(t)}return e}t=n,n=t.parentNode}return null}function ws(t){return t=t[Et]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function vl(t){return t[Zi]||null}var au=[],Er=-1;function Pn(t){return{current:t}}function J(t){0>Er||(t.current=au[Er],au[Er]=null,Er--)}function q(t,e){Er++,au[Er]=t.current,t.current=e}var In={},Ne=Pn(In),Ue=Pn(!1),Kn=In;function Wr(t,e){var n=t.type.contextTypes;if(!n)return In;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function No(){J(Ue),J(Ne)}function xh(t,e,n){if(Ne.current!==In)throw Error(S(168));q(Ne,e),q(Ue,n)}function Fm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,By(t)||"Unknown",i));return ne({},n,r)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||In,Kn=Ne.current,q(Ne,t),q(Ue,Ue.current),!0}function Ah(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Fm(t,e,Kn),r.__reactInternalMemoizedMergedChildContext=t,J(Ue),J(Ne),q(Ne,t)):J(Ue),q(Ue,n)}var At=null,yl=!1,ua=!1;function Um(t){At===null?At=[t]:At.push(t)}function rE(t){yl=!0,Um(t)}function xn(){if(!ua&&At!==null){ua=!0;var t=0,e=$;try{var n=At;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}At=null,yl=!1}catch(i){throw At!==null&&(At=At.slice(t+1)),um(cc,xn),i}finally{$=e,ua=!1}}return null}var Cr=[],Sr=0,Po=null,xo=0,Ze=[],et=0,qn=null,Dt=1,Lt="";function Ln(t,e){Cr[Sr++]=xo,Cr[Sr++]=Po,Po=t,xo=e}function zm(t,e,n){Ze[et++]=Dt,Ze[et++]=Lt,Ze[et++]=qn,qn=t;var r=Dt;t=Lt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-pt(e)+i|n<<i|r,Lt=s+t}else Dt=1<<s|n<<i|r,Lt=t}function yc(t){t.return!==null&&(Ln(t,1),zm(t,1,0))}function wc(t){for(;t===Po;)Po=Cr[--Sr],Cr[Sr]=null,xo=Cr[--Sr],Cr[Sr]=null;for(;t===qn;)qn=Ze[--et],Ze[et]=null,Lt=Ze[--et],Ze[et]=null,Dt=Ze[--et],Ze[et]=null}var Qe=null,qe=null,Z=!1,at=null;function Bm(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,qe=fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qn!==null?{id:Dt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,qe=null,!0):!1;default:return!1}}function uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cu(t){if(Z){var e=qe;if(e){var n=e;if(!Oh(t,e)){if(uu(t))throw Error(S(418));e=fn(n.nextSibling);var r=Qe;e&&Oh(t,e)?Bm(r,n):(t.flags=t.flags&-4097|2,Z=!1,Qe=t)}}else{if(uu(t))throw Error(S(418));t.flags=t.flags&-4097|2,Z=!1,Qe=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function $s(t){if(t!==Qe)return!1;if(!Z)return Dh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!su(t.type,t.memoizedProps)),e&&(e=qe)){if(uu(t))throw Wm(),Error(S(418));for(;e;)Bm(t,e),e=fn(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qe=fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qe=null}}else qe=Qe?fn(t.stateNode.nextSibling):null;return!0}function Wm(){for(var t=qe;t;)t=fn(t.nextSibling)}function Vr(){qe=Qe=null,Z=!1}function Ec(t){at===null?at=[t]:at.push(t)}var iE=qt.ReactCurrentBatchConfig;function mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function js(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function Vm(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=_n(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,w){return f===null||f.tag!==6?(f=ga(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,w){var N=g.type;return N===gr?h(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&Lh(N)===f.type)?(w=i(f,g.props),w.ref=mi(p,f,g),w.return=p,w):(w=ho(g.type,g.key,g.props,null,p.mode,w),w.ref=mi(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=_a(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function h(p,f,g,w,N){return f===null||f.tag!==7?(f=jn(g,p.mode,w,N),f.return=p,f):(f=i(f,g),f.return=p,f)}function c(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ga(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ls:return g=ho(f.type,f.key,f.props,null,p.mode,g),g.ref=mi(p,null,f),g.return=p,g;case mr:return f=_a(f,p.mode,g),f.return=p,f;case Zt:var w=f._init;return c(p,w(f._payload),g)}if(Si(f)||ci(f))return f=jn(f,p.mode,g,null),f.return=p,f;js(p,f)}return null}function d(p,f,g,w){var N=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ls:return g.key===N?a(p,f,g,w):null;case mr:return g.key===N?u(p,f,g,w):null;case Zt:return N=g._init,d(p,f,N(g._payload),w)}if(Si(g)||ci(g))return N!==null?null:h(p,f,g,w,null);js(p,g)}return null}function m(p,f,g,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,l(f,p,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ls:return p=p.get(w.key===null?g:w.key)||null,a(f,p,w,N);case mr:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,N);case Zt:var x=w._init;return m(p,f,g,x(w._payload),N)}if(Si(w)||ci(w))return p=p.get(g)||null,h(f,p,w,N,null);js(f,w)}return null}function _(p,f,g,w){for(var N=null,x=null,A=f,O=f=0,Q=null;A!==null&&O<g.length;O++){A.index>O?(Q=A,A=null):Q=A.sibling;var F=d(p,A,g[O],w);if(F===null){A===null&&(A=Q);break}t&&A&&F.alternate===null&&e(p,A),f=s(F,f,O),x===null?N=F:x.sibling=F,x=F,A=Q}if(O===g.length)return n(p,A),Z&&Ln(p,O),N;if(A===null){for(;O<g.length;O++)A=c(p,g[O],w),A!==null&&(f=s(A,f,O),x===null?N=A:x.sibling=A,x=A);return Z&&Ln(p,O),N}for(A=r(p,A);O<g.length;O++)Q=m(A,p,O,g[O],w),Q!==null&&(t&&Q.alternate!==null&&A.delete(Q.key===null?O:Q.key),f=s(Q,f,O),x===null?N=Q:x.sibling=Q,x=Q);return t&&A.forEach(function($e){return e(p,$e)}),Z&&Ln(p,O),N}function y(p,f,g,w){var N=ci(g);if(typeof N!="function")throw Error(S(150));if(g=N.call(g),g==null)throw Error(S(151));for(var x=N=null,A=f,O=f=0,Q=null,F=g.next();A!==null&&!F.done;O++,F=g.next()){A.index>O?(Q=A,A=null):Q=A.sibling;var $e=d(p,A,F.value,w);if($e===null){A===null&&(A=Q);break}t&&A&&$e.alternate===null&&e(p,A),f=s($e,f,O),x===null?N=$e:x.sibling=$e,x=$e,A=Q}if(F.done)return n(p,A),Z&&Ln(p,O),N;if(A===null){for(;!F.done;O++,F=g.next())F=c(p,F.value,w),F!==null&&(f=s(F,f,O),x===null?N=F:x.sibling=F,x=F);return Z&&Ln(p,O),N}for(A=r(p,A);!F.done;O++,F=g.next())F=m(A,p,O,F.value,w),F!==null&&(t&&F.alternate!==null&&A.delete(F.key===null?O:F.key),f=s(F,f,O),x===null?N=F:x.sibling=F,x=F);return t&&A.forEach(function(On){return e(p,On)}),Z&&Ln(p,O),N}function E(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===gr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ls:e:{for(var N=g.key,x=f;x!==null;){if(x.key===N){if(N=g.type,N===gr){if(x.tag===7){n(p,x.sibling),f=i(x,g.props.children),f.return=p,p=f;break e}}else if(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&Lh(N)===x.type){n(p,x.sibling),f=i(x,g.props),f.ref=mi(p,x,g),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}g.type===gr?(f=jn(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=ho(g.type,g.key,g.props,null,p.mode,w),w.ref=mi(p,f,g),w.return=p,p=w)}return o(p);case mr:e:{for(x=g.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=_a(g,p.mode,w),f.return=p,p=f}return o(p);case Zt:return x=g._init,E(p,f,x(g._payload),w)}if(Si(g))return _(p,f,g,w);if(ci(g))return y(p,f,g,w);js(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ga(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var Hr=Vm(!0),Hm=Vm(!1),Ao=Pn(null),Oo=null,Ir=null,Cc=null;function Sc(){Cc=Ir=Oo=null}function Ic(t){var e=Ao.current;J(Ao),t._currentValue=e}function du(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Or(t,e){Oo=t,Cc=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(Cc!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(Oo===null)throw Error(S(308));Ir=t,Oo.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var zn=null;function kc(t){zn===null?zn=[t]:zn.push(t)}function $m(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var en=!1;function Tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,kc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function so(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dc(t,n)}}function Mh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Do(t,e,n,r){var i=t.updateQueue;en=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var d=l.lane,m=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(m,c,d);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,c,d):_,d==null)break e;c=ne({},c,d);break e;case 2:en=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else m={eventTime:m,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,a=c):h=h.next=m,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yn|=o,t.lanes=o,t.memoizedState=c}}function bh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Es={},St=Pn(Es),es=Pn(Es),ts=Pn(Es);function Bn(t){if(t===Es)throw Error(S(174));return t}function Nc(t,e){switch(q(ts,e),q(es,t),q(St,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ja(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ja(e,t)}J(St),q(St,e)}function $r(){J(St),J(es),J(ts)}function Gm(t){Bn(ts.current);var e=Bn(St.current),n=ja(e,t.type);e!==n&&(q(es,t),q(St,n))}function Rc(t){es.current===t&&(J(St),J(es))}var ee=Pn(0);function Lo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ca=[];function Pc(){for(var t=0;t<ca.length;t++)ca[t]._workInProgressVersionPrimary=null;ca.length=0}var oo=qt.ReactCurrentDispatcher,da=qt.ReactCurrentBatchConfig,Qn=0,te=null,ue=null,pe=null,Mo=!1,Ai=!1,ns=0,sE=0;function Se(){throw Error(S(321))}function xc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vt(t[n],e[n]))return!1;return!0}function Ac(t,e,n,r,i,s){if(Qn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oo.current=t===null||t.memoizedState===null?uE:cE,t=n(r,i),Ai){s=0;do{if(Ai=!1,ns=0,25<=s)throw Error(S(301));s+=1,pe=ue=null,e.updateQueue=null,oo.current=dE,t=n(r,i)}while(Ai)}if(oo.current=bo,e=ue!==null&&ue.next!==null,Qn=0,pe=ue=te=null,Mo=!1,e)throw Error(S(300));return t}function Oc(){var t=ns!==0;return ns=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=t:pe=pe.next=t,pe}function it(){if(ue===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=pe===null?te.memoizedState:pe.next;if(e!==null)pe=e,ue=t;else{if(t===null)throw Error(S(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?te.memoizedState=pe=t:pe=pe.next=t}return pe}function rs(t,e){return typeof e=="function"?e(t):e}function ha(t){var e=it(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((Qn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=h,Yn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,vt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Yn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fa(t){var e=it(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Km(){}function qm(t,e){var n=te,r=it(),i=e(),s=!vt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,Dc(Xm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,is(9,Ym.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(S(349));Qn&30||Qm(n,e,i)}return i}function Qm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ym(t,e,n,r){e.value=n,e.getSnapshot=r,Jm(e)&&Zm(t)}function Xm(t,e,n){return n(function(){Jm(e)&&Zm(t)})}function Jm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vt(t,n)}catch{return!0}}function Zm(t){var e=Vt(t,1);e!==null&&mt(e,t,1,-1)}function Fh(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=aE.bind(null,te,t),[e.memoizedState,t]}function is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eg(){return it().memoizedState}function lo(t,e,n,r){var i=wt();te.flags|=t,i.memoizedState=is(1|e,n,void 0,r===void 0?null:r)}function wl(t,e,n,r){var i=it();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&xc(r,o.deps)){i.memoizedState=is(e,n,s,r);return}}te.flags|=t,i.memoizedState=is(1|e,n,s,r)}function Uh(t,e){return lo(8390656,8,t,e)}function Dc(t,e){return wl(2048,8,t,e)}function tg(t,e){return wl(4,2,t,e)}function ng(t,e){return wl(4,4,t,e)}function rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ig(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,rg.bind(null,e,t),n)}function Lc(){}function sg(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function og(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lg(t,e,n){return Qn&21?(vt(n,e)||(n=hm(),te.lanes|=n,Yn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function oE(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=da.transition;da.transition={};try{t(!1),e()}finally{$=n,da.transition=r}}function ag(){return it().memoizedState}function lE(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(t))cg(e,n);else if(n=$m(t,e,n,r),n!==null){var i=xe();mt(n,t,r,i),dg(n,e,r)}}function aE(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(t))cg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vt(l,o)){var a=e.interleaved;a===null?(i.next=i,kc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=$m(t,e,i,r),n!==null&&(i=xe(),mt(n,t,r,i),dg(n,e,r))}}function ug(t){var e=t.alternate;return t===te||e!==null&&e===te}function cg(t,e){Ai=Mo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dc(t,n)}}var bo={readContext:rt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},uE={readContext:rt,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:Uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lo(4194308,4,rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return lo(4,2,t,e)},useMemo:function(t,e){var n=wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lE.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:Lc,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=oE.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=wt();if(Z){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),_e===null)throw Error(S(349));Qn&30||Qm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uh(Xm.bind(null,r,s,t),[t]),r.flags|=2048,is(9,Ym.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wt(),e=_e.identifierPrefix;if(Z){var n=Lt,r=Dt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cE={readContext:rt,useCallback:sg,useContext:rt,useEffect:Dc,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:ha,useRef:eg,useState:function(){return ha(rs)},useDebugValue:Lc,useDeferredValue:function(t){var e=it();return lg(e,ue.memoizedState,t)},useTransition:function(){var t=ha(rs)[0],e=it().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:qm,useId:ag,unstable_isNewReconciler:!1},dE={readContext:rt,useCallback:sg,useContext:rt,useEffect:Dc,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:fa,useRef:eg,useState:function(){return fa(rs)},useDebugValue:Lc,useDeferredValue:function(t){var e=it();return ue===null?e.memoizedState=t:lg(e,ue.memoizedState,t)},useTransition:function(){var t=fa(rs)[0],e=it().memoizedState;return[t,e]},useMutableSource:Km,useSyncExternalStore:qm,useId:ag,unstable_isNewReconciler:!1};function ot(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var El={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=gn(t),s=Ut(r,i);s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(mt(e,t,i,r),so(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=gn(t),s=Ut(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(mt(e,t,i,r),so(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=gn(t),i=Ut(n,r);i.tag=2,e!=null&&(i.callback=e),e=pn(t,i,r),e!==null&&(mt(e,t,r,n),so(e,t,r))}};function zh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function hg(t,e,n){var r=!1,i=In,s=e.contextType;return typeof s=="object"&&s!==null?s=rt(s):(i=ze(e)?Kn:Ne.current,r=e.contextTypes,s=(r=r!=null)?Wr(t,i):In),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=El,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&El.enqueueReplaceState(e,e.state,null)}function fu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rt(s):(s=ze(e)?Kn:Ne.current,i.context=Wr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&El.enqueueReplaceState(i,i.state,null),Do(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jr(t,e){try{var n="",r=e;do n+=zy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hE=typeof WeakMap=="function"?WeakMap:Map;function fg(t,e,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uo||(Uo=!0,Iu=r),pu(t,e)},n}function pg(t,e,n){n=Ut(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pu(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TE.bind(null,t,e,n),e.then(t,t))}function Vh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ut(-1,1),e.tag=2,pn(n,e,1))),n.lanes|=1),t)}var fE=qt.ReactCurrentOwner,Me=!1;function Pe(t,e,n,r){e.child=t===null?Hm(e,null,n,r):Hr(e,t.child,n,r)}function $h(t,e,n,r,i){n=n.render;var s=e.ref;return Or(e,i),r=Ac(t,e,n,r,s,i),n=Oc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(Z&&n&&yc(e),e.flags|=1,Pe(t,e,r,i),e.child)}function jh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mg(t,e,s,r,i)):(t=ho(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,r)&&t.ref===e.ref)return Ht(t,e,i)}return e.flags|=1,t=_n(s,r),t.ref=e.ref,t.return=e,e.child=t}function mg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yi(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,Ht(t,e,i)}return mu(t,e,n,r,i)}function gg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Tr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Tr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Tr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Tr,Ge),Ge|=r;return Pe(t,e,i,n),e.child}function _g(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mu(t,e,n,r,i){var s=ze(n)?Kn:Ne.current;return s=Wr(e,s),Or(e,i),n=Ac(t,e,n,r,s,i),r=Oc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(Z&&r&&yc(e),e.flags|=1,Pe(t,e,n,i),e.child)}function Gh(t,e,n,r,i){if(ze(n)){var s=!0;Ro(e)}else s=!1;if(Or(e,i),e.stateNode===null)ao(t,e),hg(e,n,r),fu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=ze(n)?Kn:Ne.current,u=Wr(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Bh(e,o,r,u),en=!1;var d=e.memoizedState;o.state=d,Do(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Ue.current||en?(typeof h=="function"&&(hu(e,n,h,r),a=e.memoizedState),(l=en||zh(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ot(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=rt(a):(a=ze(n)?Kn:Ne.current,a=Wr(e,a));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Bh(e,o,r,a),en=!1,d=e.memoizedState,o.state=d,Do(e,r,o,i);var _=e.memoizedState;l!==c||d!==_||Ue.current||en?(typeof m=="function"&&(hu(e,n,m,r),_=e.memoizedState),(u=en||zh(e,n,u,r,d,_,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return gu(t,e,n,r,s,i)}function gu(t,e,n,r,i,s){_g(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ah(e,n,!1),Ht(t,e,s);r=e.stateNode,fE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hr(e,t.child,null,s),e.child=Hr(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&Ah(e,n,!0),e.child}function vg(t){var e=t.stateNode;e.pendingContext?xh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xh(t,e.context,!1),Nc(t,e.containerInfo)}function Kh(t,e,n,r,i){return Vr(),Ec(i),e.flags|=256,Pe(t,e,n,r),e.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function yg(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(ee,i&1),t===null)return cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Il(o,r,0,null),t=jn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vu(n),e.memoizedState=_u,t):Mc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return pE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=_n(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_n(l,s):(s=jn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_u,r}return s=t.child,t=s.sibling,r=_n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mc(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gs(t,e,n,r){return r!==null&&Ec(r),Hr(e,t.child,null,n),t=Mc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pa(Error(S(422))),Gs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Il({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hr(e,t.child,null,o),e.child.memoizedState=vu(o),e.memoizedState=_u,s);if(!(e.mode&1))return Gs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=pa(s,r,void 0),Gs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),mt(r,t,i,-1))}return Wc(),r=pa(Error(S(421))),Gs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qe=fn(i.nextSibling),Qe=e,Z=!0,at=null,t!==null&&(Ze[et++]=Dt,Ze[et++]=Lt,Ze[et++]=qn,Dt=t.id,Lt=t.overflow,qn=e),e=Mc(e,r.children),e.flags|=4096,e)}function qh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),du(t.return,e,n)}function ma(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,n,e);else if(t.tag===19)qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ma(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ma(e,!0,n,null,s);break;case"together":ma(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ao(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ht(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mE(t,e,n){switch(e.tag){case 3:vg(e),Vr();break;case 5:Gm(e);break;case 1:ze(e.type)&&Ro(e);break;case 4:Nc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?yg(t,e,n):(q(ee,ee.current&1),t=Ht(t,e,n),t!==null?t.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,gg(t,e,n)}return Ht(t,e,n)}var Eg,yu,Cg,Sg;Eg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yu=function(){};Cg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(St.current);var s=null;switch(n){case"input":i=Wa(t,i),r=Wa(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=$a(t,i),r=$a(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=To)}Ga(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Y("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Sg=function(t,e,n,r){n!==r&&(e.flags|=4)};function gi(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gE(t,e,n){var r=e.pendingProps;switch(wc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return ze(e.type)&&No(),Ie(e),null;case 3:return r=e.stateNode,$r(),J(Ue),J(Ne),Pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($s(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,at!==null&&(Nu(at),at=null))),yu(t,e),Ie(e),null;case 5:Rc(e);var i=Bn(ts.current);if(n=e.type,t!==null&&e.stateNode!=null)Cg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ie(e),null}if(t=Bn(St.current),$s(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Et]=e,r[Zi]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)Y(ki[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":rh(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":sh(r,s),Y("invalid",r)}Ga(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",""+l]):Hi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Ms(r),ih(r,s,!0);break;case"textarea":Ms(r),oh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=To)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Et]=e,t[Zi]=r,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ka(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)Y(ki[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":rh(t,r),i=Wa(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",t);break;case"textarea":sh(t,r),i=$a(t,r),Y("invalid",t);break;default:i=r}Ga(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?em(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Jp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$i(t,a):typeof a=="number"&&$i(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Y("scroll",t):a!=null&&sc(t,s,a,o))}switch(n){case"input":Ms(t),ih(t,r,!1);break;case"textarea":Ms(t),oh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Sg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Bn(ts.current),Bn(St.current),$s(e)){if(r=e.stateNode,n=e.memoizedProps,r[Et]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:Hs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=e,e.stateNode=r}return Ie(e),null;case 13:if(J(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&qe!==null&&e.mode&1&&!(e.flags&128))Wm(),Vr(),e.flags|=98560,s=!1;else if(s=$s(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Et]=e}else Vr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else at!==null&&(Nu(at),at=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?de===0&&(de=3):Wc())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return $r(),yu(t,e),t===null&&Xi(e.stateNode.containerInfo),Ie(e),null;case 10:return Ic(e.type._context),Ie(e),null;case 17:return ze(e.type)&&No(),Ie(e),null;case 19:if(J(ee),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gi(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lo(t),o!==null){for(e.flags|=128,gi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&oe()>Gr&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Ie(e),null}else 2*oe()-s.renderingStartTime>Gr&&n!==1073741824&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=oe(),e.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Bc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function _E(t,e){switch(wc(e),e.tag){case 1:return ze(e.type)&&No(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $r(),J(Ue),J(Ne),Pc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rc(e),null;case 13:if(J(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Vr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ee),null;case 4:return $r(),null;case 10:return Ic(e.type._context),null;case 22:case 23:return Bc(),null;case 24:return null;default:return null}}var Ks=!1,ke=!1,vE=typeof WeakSet=="function"?WeakSet:Set,P=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function wu(t,e,n){try{n()}catch(r){re(t,e,r)}}var Qh=!1;function yE(t,e){if(ru=So,t=Rm(),vc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,d=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)d=c,c=m;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++h===r&&(a=o),(m=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:t,selectionRange:n},So=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:ot(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){re(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=Qh,Qh=!1,_}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wu(e,n,s)}i=i.next}while(i!==r)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Et],delete e[Zi],delete e[lu],delete e[tE],delete e[nE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kg(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=To));else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}var ve=null,lt=!1;function Xt(t,e,n){for(n=n.child;n!==null;)Tg(t,e,n),n=n.sibling}function Tg(t,e,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:ke||kr(n,e);case 6:var r=ve,i=lt;ve=null,Xt(t,e,n),ve=r,lt=i,ve!==null&&(lt?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(lt?(t=ve,n=n.stateNode,t.nodeType===8?aa(t.parentNode,n):t.nodeType===1&&aa(t,n),qi(t)):aa(ve,n.stateNode));break;case 4:r=ve,i=lt,ve=n.stateNode.containerInfo,lt=!0,Xt(t,e,n),ve=r,lt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wu(n,e,o),i=i.next}while(i!==r)}Xt(t,e,n);break;case 1:if(!ke&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Xt(t,e,n);break;case 21:Xt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Xt(t,e,n),ke=r):Xt(t,e,n);break;default:Xt(t,e,n)}}function Xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vE),e.forEach(function(r){var i=RE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,lt=!1;break e;case 3:ve=l.stateNode.containerInfo,lt=!0;break e;case 4:ve=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(ve===null)throw Error(S(160));Tg(s,o,i),ve=null,lt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ng(e,t),e=e.sibling}function Ng(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(st(e,t),yt(t),r&4){try{Oi(3,t,t.return),Cl(3,t)}catch(y){re(t,t.return,y)}try{Oi(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:st(e,t),yt(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(st(e,t),yt(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var i=t.stateNode;try{$i(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Qp(i,s),Ka(l,o);var u=Ka(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?em(i,c):h==="dangerouslySetInnerHTML"?Jp(i,c):h==="children"?$i(i,c):sc(i,h,c,u)}switch(l){case"input":Va(i,s);break;case"textarea":Yp(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rr(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rr(i,!!s.multiple,s.defaultValue,!0):Rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(y){re(t,t.return,y)}}break;case 6:if(st(e,t),yt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(st(e,t),yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:st(e,t),yt(t);break;case 13:st(e,t),yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uc=oe())),r&4&&Xh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||h,st(e,t),ke=u):st(e,t),yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(P=t,h=t.child;h!==null;){for(c=P=h;P!==null;){switch(d=P,m=d.child,d.tag){case 0:case 11:case 14:case 15:Oi(4,d,d.return);break;case 1:kr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:kr(d,d.return);break;case 22:if(d.memoizedState!==null){Zh(c);continue}}m!==null?(m.return=d,P=m):Zh(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Zp("display",o))}catch(y){re(t,t.return,y)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){re(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:st(e,t),yt(t),r&4&&Xh(t);break;case 21:break;default:st(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var s=Yh(t);Su(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Yh(t);Cu(t,l,o);break;default:throw Error(S(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wE(t,e,n){P=t,Rg(t)}function Rg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ks;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=Ks;var u=ke;if(Ks=o,(ke=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?ef(i):a!==null?(a.return=o,P=a):ef(i);for(;s!==null;)P=s,Rg(s),s=s.sibling;P=i,Ks=l,ke=u}Jh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Jh(t)}}function Jh(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ke||Cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&qi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ke||e.flags&512&&Eu(e)}catch(d){re(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Zh(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function ef(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{Eu(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{Eu(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var EE=Math.ceil,Fo=qt.ReactCurrentDispatcher,bc=qt.ReactCurrentOwner,nt=qt.ReactCurrentBatchConfig,V=0,_e=null,le=null,we=0,Ge=0,Tr=Pn(0),de=0,ss=null,Yn=0,Sl=0,Fc=0,Di=null,Le=null,Uc=0,Gr=1/0,xt=null,Uo=!1,Iu=null,mn=null,qs=!1,an=null,zo=0,Li=0,ku=null,uo=-1,co=0;function xe(){return V&6?oe():uo!==-1?uo:uo=oe()}function gn(t){return t.mode&1?V&2&&we!==0?we&-we:iE.transition!==null?(co===0&&(co=hm()),co):(t=$,t!==0||(t=window.event,t=t===void 0?16:ym(t.type)),t):1}function mt(t,e,n,r){if(50<Li)throw Li=0,ku=null,Error(S(185));vs(t,n,r),(!(V&2)||t!==_e)&&(t===_e&&(!(V&2)&&(Sl|=n),de===4&&nn(t,we)),Be(t,r),n===1&&V===0&&!(e.mode&1)&&(Gr=oe()+500,yl&&xn()))}function Be(t,e){var n=t.callbackNode;iw(t,e);var r=Co(t,t===_e?we:0);if(r===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?rE(tf.bind(null,t)):Um(tf.bind(null,t)),Zw(function(){!(V&6)&&xn()}),n=null;else{switch(fm(r)){case 1:n=cc;break;case 4:n=cm;break;case 16:n=Eo;break;case 536870912:n=dm;break;default:n=Eo}n=bg(n,Pg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pg(t,e){if(uo=-1,co=0,V&6)throw Error(S(327));var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var r=Co(t,t===_e?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bo(t,r);else{e=r;var i=V;V|=2;var s=Ag();(_e!==t||we!==e)&&(xt=null,Gr=oe()+500,$n(t,e));do try{IE();break}catch(l){xg(t,l)}while(!0);Sc(),Fo.current=s,V=i,le!==null?e=0:(_e=null,we=0,e=de)}if(e!==0){if(e===2&&(i=Ja(t),i!==0&&(r=i,e=Tu(t,i))),e===1)throw n=ss,$n(t,0),nn(t,r),Be(t,oe()),n;if(e===6)nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!CE(i)&&(e=Bo(t,r),e===2&&(s=Ja(t),s!==0&&(r=s,e=Tu(t,s))),e===1))throw n=ss,$n(t,0),nn(t,r),Be(t,oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Mn(t,Le,xt);break;case 3:if(nn(t,r),(r&130023424)===r&&(e=Uc+500-oe(),10<e)){if(Co(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ou(Mn.bind(null,t,Le,xt),e);break}Mn(t,Le,xt);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EE(r/1960))-r,10<r){t.timeoutHandle=ou(Mn.bind(null,t,Le,xt),r);break}Mn(t,Le,xt);break;case 5:Mn(t,Le,xt);break;default:throw Error(S(329))}}}return Be(t,oe()),t.callbackNode===n?Pg.bind(null,t):null}function Tu(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&($n(t,e).flags|=256),t=Bo(t,e),t!==2&&(e=Le,Le=n,e!==null&&Nu(e)),t}function Nu(t){Le===null?Le=t:Le.push.apply(Le,t)}function CE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nn(t,e){for(e&=~Fc,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),r=1<<n;t[n]=-1,e&=~r}}function tf(t){if(V&6)throw Error(S(327));Dr();var e=Co(t,0);if(!(e&1))return Be(t,oe()),null;var n=Bo(t,e);if(t.tag!==0&&n===2){var r=Ja(t);r!==0&&(e=r,n=Tu(t,r))}if(n===1)throw n=ss,$n(t,0),nn(t,e),Be(t,oe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,Le,xt),Be(t,oe()),null}function zc(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(Gr=oe()+500,yl&&xn())}}function Xn(t){an!==null&&an.tag===0&&!(V&6)&&Dr();var e=V;V|=1;var n=nt.transition,r=$;try{if(nt.transition=null,$=1,t)return t()}finally{$=r,nt.transition=n,V=e,!(V&6)&&xn()}}function Bc(){Ge=Tr.current,J(Tr)}function $n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jw(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(wc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:$r(),J(Ue),J(Ne),Pc();break;case 5:Rc(r);break;case 4:$r();break;case 13:J(ee);break;case 19:J(ee);break;case 10:Ic(r.type._context);break;case 22:case 23:Bc()}n=n.return}if(_e=t,le=t=_n(t.current,null),we=Ge=e,de=0,ss=null,Fc=Sl=Yn=0,Le=Di=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function xg(t,e){do{var n=le;try{if(Sc(),oo.current=bo,Mo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mo=!1}if(Qn=0,pe=ue=te=null,Ai=!1,ns=0,bc.current=null,n===null||n.return===null){de=1,ss=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Vh(o);if(m!==null){m.flags&=-257,Hh(m,o,l,s,e),m.mode&1&&Wh(s,u,e),e=m,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Wh(s,u,e),Wc();break e}a=Error(S(426))}}else if(Z&&l.mode&1){var E=Vh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Hh(E,o,l,s,e),Ec(jr(a,l));break e}}s=a=jr(a,l),de!==4&&(de=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=fg(s,a,e);Mh(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mn===null||!mn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=pg(s,l,e);Mh(s,w);break e}}s=s.return}while(s!==null)}Dg(n)}catch(N){e=N,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Ag(){var t=Fo.current;return Fo.current=bo,t===null?bo:t}function Wc(){(de===0||de===3||de===2)&&(de=4),_e===null||!(Yn&268435455)&&!(Sl&268435455)||nn(_e,we)}function Bo(t,e){var n=V;V|=2;var r=Ag();(_e!==t||we!==e)&&(xt=null,$n(t,e));do try{SE();break}catch(i){xg(t,i)}while(!0);if(Sc(),V=n,Fo.current=r,le!==null)throw Error(S(261));return _e=null,we=0,de}function SE(){for(;le!==null;)Og(le)}function IE(){for(;le!==null&&!Qy();)Og(le)}function Og(t){var e=Mg(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?Dg(t):le=e,bc.current=null}function Dg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_E(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,le=null;return}}else if(n=gE(n,e,Ge),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);de===0&&(de=5)}function Mn(t,e,n){var r=$,i=nt.transition;try{nt.transition=null,$=1,kE(t,e,n,r)}finally{nt.transition=i,$=r}return null}function kE(t,e,n,r){do Dr();while(an!==null);if(V&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sw(t,s),t===_e&&(le=_e=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qs||(qs=!0,bg(Eo,function(){return Dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nt.transition,nt.transition=null;var o=$;$=1;var l=V;V|=4,bc.current=null,yE(t,n),Ng(n,t),jw(iu),So=!!ru,iu=ru=null,t.current=n,wE(n),Yy(),V=l,$=o,nt.transition=s}else t.current=n;if(qs&&(qs=!1,an=t,zo=i),s=t.pendingLanes,s===0&&(mn=null),Zy(n.stateNode),Be(t,oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uo)throw Uo=!1,t=Iu,Iu=null,t;return zo&1&&t.tag!==0&&Dr(),s=t.pendingLanes,s&1?t===ku?Li++:(Li=0,ku=t):Li=0,xn(),null}function Dr(){if(an!==null){var t=fm(zo),e=nt.transition,n=$;try{if(nt.transition=null,$=16>t?16:t,an===null)var r=!1;else{if(t=an,an=null,zo=0,V&6)throw Error(S(331));var i=V;for(V|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Oi(8,h,s)}var c=h.child;if(c!==null)c.return=h,P=c;else for(;P!==null;){h=P;var d=h.sibling,m=h.return;if(Ig(h),h===u){P=null;break}if(d!==null){d.return=m,P=d;break}P=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cl(9,l)}}catch(N){re(l,l.return,N)}if(l===o){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(V=i,xn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(pl,t)}catch{}r=!0}return r}finally{$=n,nt.transition=e}}return!1}function nf(t,e,n){e=jr(n,e),e=fg(t,e,1),t=pn(t,e,1),e=xe(),t!==null&&(vs(t,1,e),Be(t,e))}function re(t,e,n){if(t.tag===3)nf(t,t,n);else for(;e!==null;){if(e.tag===3){nf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=jr(n,t),t=pg(e,t,1),e=pn(e,t,1),t=xe(),e!==null&&(vs(e,1,t),Be(e,t));break}}e=e.return}}function TE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>oe()-Uc?$n(t,0):Fc|=n),Be(t,e)}function Lg(t,e){e===0&&(t.mode&1?(e=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):e=1);var n=xe();t=Vt(t,e),t!==null&&(vs(t,e,n),Be(t,n))}function NE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lg(t,n)}function RE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Lg(t,n)}var Mg;Mg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,mE(t,e,n);Me=!!(t.flags&131072)}else Me=!1,Z&&e.flags&1048576&&zm(e,xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ao(t,e),t=e.pendingProps;var i=Wr(e,Ne.current);Or(e,n),i=Ac(null,e,r,t,i,n);var s=Oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,Ro(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tc(e),i.updater=El,e.stateNode=i,i._reactInternals=e,fu(e,r,t,n),e=gu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&yc(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ao(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xE(r),t=ot(r,t),i){case 0:e=mu(null,e,r,t,n);break e;case 1:e=Gh(null,e,r,t,n);break e;case 11:e=$h(null,e,r,t,n);break e;case 14:e=jh(null,e,r,ot(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),mu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Gh(t,e,r,i,n);case 3:e:{if(vg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jm(t,e),Do(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=jr(Error(S(423)),e),e=Kh(t,e,r,n,i);break e}else if(r!==i){i=jr(Error(S(424)),e),e=Kh(t,e,r,n,i);break e}else for(qe=fn(e.stateNode.containerInfo.firstChild),Qe=e,Z=!0,at=null,n=Hm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){e=Ht(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return Gm(e),t===null&&cu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,su(r,i)?o=null:s!==null&&su(r,s)&&(e.flags|=32),_g(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&cu(e),null;case 13:return yg(t,e,n);case 4:return Nc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),$h(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(Ao,r._currentValue),r._currentValue=o,s!==null)if(vt(s.value,o)){if(s.children===i.children&&!Ue.current){e=Ht(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ut(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),du(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),du(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Or(e,n),i=rt(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=ot(r,e.pendingProps),i=ot(r.type,i),jh(t,e,r,i,n);case 15:return mg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),ao(t,e),e.tag=1,ze(r)?(t=!0,Ro(e)):t=!1,Or(e,n),hg(e,r,i),fu(e,r,i,n),gu(null,e,r,!0,t,n);case 19:return wg(t,e,n);case 22:return gg(t,e,n)}throw Error(S(156,e.tag))};function bg(t,e){return um(t,e)}function PE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new PE(t,e,n,r)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xE(t){if(typeof t=="function")return Vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lc)return 11;if(t===ac)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ho(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return jn(n.children,i,s,e);case oc:o=8,i|=8;break;case Fa:return t=tt(12,n,e,i|2),t.elementType=Fa,t.lanes=s,t;case Ua:return t=tt(13,n,e,i),t.elementType=Ua,t.lanes=s,t;case za:return t=tt(19,n,e,i),t.elementType=za,t.lanes=s,t;case Gp:return Il(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $p:o=10;break e;case jp:o=9;break e;case lc:o=11;break e;case ac:o=14;break e;case Zt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jn(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function Il(t,e,n,r){return t=tt(22,t,r,e),t.elementType=Gp,t.lanes=n,t.stateNode={isHidden:!1},t}function ga(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function _a(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(t,e,n,r,i,s,o,l,a){return t=new AE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(s),t}function OE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fg(t){if(!t)return In;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ze(n))return Fm(t,n,e)}return e}function Ug(t,e,n,r,i,s,o,l,a){return t=Hc(n,r,!0,t,i,s,o,l,a),t.context=Fg(null),n=t.current,r=xe(),i=gn(n),s=Ut(r,i),s.callback=e??null,pn(n,s,i),t.current.lanes=i,vs(t,i,r),Be(t,r),t}function kl(t,e,n,r){var i=e.current,s=xe(),o=gn(i);return n=Fg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ut(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pn(i,e,o),t!==null&&(mt(t,i,o,s),so(t,i,o)),o}function Wo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $c(t,e){rf(t,e),(t=t.alternate)&&rf(t,e)}function DE(){return null}var zg=typeof reportError=="function"?reportError:function(t){console.error(t)};function jc(t){this._internalRoot=t}Tl.prototype.render=jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));kl(t,e,null,null)};Tl.prototype.unmount=jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xn(function(){kl(null,t,null,null)}),e[Wt]=null}};function Tl(t){this._internalRoot=t}Tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tn.length&&e!==0&&e<tn[n].priority;n++);tn.splice(n,0,t),n===0&&vm(t)}};function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sf(){}function LE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Wo(o);s.call(u)}}var o=Ug(e,r,t,0,null,!1,!1,"",sf);return t._reactRootContainer=o,t[Wt]=o.current,Xi(t.nodeType===8?t.parentNode:t),Xn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Wo(a);l.call(u)}}var a=Hc(t,0,!1,null,null,!1,!1,"",sf);return t._reactRootContainer=a,t[Wt]=a.current,Xi(t.nodeType===8?t.parentNode:t),Xn(function(){kl(e,a,n,r)}),a}function Rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Wo(o);l.call(a)}}kl(e,o,t,i)}else o=LE(n,e,t,i,r);return Wo(o)}pm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(dc(e,n|1),Be(e,oe()),!(V&6)&&(Gr=oe()+500,xn()))}break;case 13:Xn(function(){var r=Vt(t,1);if(r!==null){var i=xe();mt(r,t,1,i)}}),$c(t,1)}};hc=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=xe();mt(e,t,134217728,n)}$c(t,134217728)}};mm=function(t){if(t.tag===13){var e=gn(t),n=Vt(t,e);if(n!==null){var r=xe();mt(n,t,e,r)}$c(t,e)}};gm=function(){return $};_m=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Qa=function(t,e,n){switch(e){case"input":if(Va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vl(r);if(!i)throw Error(S(90));qp(r),Va(r,i)}}}break;case"textarea":Yp(t,n);break;case"select":e=n.value,e!=null&&Rr(t,!!n.multiple,e,!1)}};rm=zc;im=Xn;var ME={usingClientEntryPoint:!1,Events:[ws,wr,vl,tm,nm,zc]},_i={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bE={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lm(t),t===null?null:t.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||DE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{pl=Qs.inject(bE),Ct=Qs}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(e))throw Error(S(200));return OE(t,e,null,n)};Xe.createRoot=function(t,e){if(!Gc(t))throw Error(S(299));var n=!1,r="",i=zg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hc(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,Xi(t.nodeType===8?t.parentNode:t),new jc(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=lm(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return Xn(t)};Xe.hydrate=function(t,e,n){if(!Nl(e))throw Error(S(200));return Rl(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!Gc(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ug(e,null,t,1,n??null,i,!1,s,o),t[Wt]=e.current,Xi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tl(e)};Xe.render=function(t,e,n){if(!Nl(e))throw Error(S(200));return Rl(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(S(40));return t._reactRootContainer?(Xn(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};Xe.unstable_batchedUpdates=zc;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Rl(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg)}catch(t){console.error(t)}}Bg(),Bp.exports=Xe;var FE=Bp.exports,Wg,of=FE;Wg=of.createRoot,of.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},os.apply(this,arguments)}var un;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(un||(un={}));const lf="popstate";function UE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ru("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vg(i)}return BE(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zE(){return Math.random().toString(36).substr(2,8)}function af(t,e){return{usr:t.state,key:t.key,idx:e}}function Ru(t,e,n,r){return n===void 0&&(n=null),os({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ti(e):e,{state:n,key:e&&e.key||r||zE()})}function Vg(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ti(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function BE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=un.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(os({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function c(){l=un.Pop;let E=h(),p=E==null?null:E-u;u=E,a&&a({action:l,location:y.location,delta:p})}function d(E,p){l=un.Push;let f=Ru(y.location,E,p);u=h()+1;let g=af(f,u),w=y.createHref(f);try{o.pushState(g,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function m(E,p){l=un.Replace;let f=Ru(y.location,E,p);u=h();let g=af(f,u),w=y.createHref(f);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function _(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Vg(E);return f=f.replace(/ $/,"%20"),he(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(lf,c),a=E,()=>{i.removeEventListener(lf,c),a=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let p=_(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(E){return o.go(E)}};return y}var uf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uf||(uf={}));function WE(t,e,n){return n===void 0&&(n="/"),VE(t,e,n)}function VE(t,e,n,r){let i=typeof e=="string"?ti(e):e,s=jg(i.pathname||"/",n);if(s==null)return null;let o=Hg(t);HE(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=t0(s);l=JE(o[a],u)}return l}function Hg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(he(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Gn([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hg(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:YE(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of $g(s.path))i(s,o,a)}),e}function $g(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$g(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function HE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:XE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $E=/^:[\w-]+$/,jE=3,GE=2,KE=1,qE=10,QE=-2,cf=t=>t==="*";function YE(t,e){let n=t.split("/"),r=n.length;return n.some(cf)&&(r+=QE),e&&(r+=GE),n.filter(i=>!cf(i)).reduce((i,s)=>i+($E.test(s)?jE:s===""?KE:qE),r)}function XE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JE(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",c=ZE({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),d=a.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Gn([s,c.pathname]),pathnameBase:a0(Gn([s,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(s=Gn([s,c.pathnameBase]))}return o}function ZE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=e0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:d,isOptional:m}=h;if(d==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=l[c];return m&&!_?u[d]=void 0:u[d]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function e0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function t0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r0=t=>n0.test(t);function i0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ti(t):t,s;if(n)if(r0(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Kc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=df(n.substring(1),"/"):s=df(n,e)}else s=e;return{pathname:s,search:u0(r),hash:c0(i)}}function df(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function va(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function o0(t,e){let n=s0(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function l0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ti(t):(i=os({},t),he(!i.pathname||!i.pathname.includes("?"),va("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),va("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),va("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}l=c>=0?e[c]:"/"}let a=i0(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const Gn=t=>t.join("/").replace(/\/\/+/g,"/"),a0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),u0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,c0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function d0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gg=["post","put","patch","delete"];new Set(Gg);const h0=["get",...Gg];new Set(h0);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ls.apply(this,arguments)}const qc=T.createContext(null),f0=T.createContext(null),Pl=T.createContext(null),xl=T.createContext(null),lr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Kg=T.createContext(null);function Al(){return T.useContext(xl)!=null}function qg(){return Al()||he(!1),T.useContext(xl).location}function Qg(t){T.useContext(Pl).static||T.useLayoutEffect(t)}function Yg(){let{isDataRoute:t}=T.useContext(lr);return t?N0():p0()}function p0(){Al()||he(!1);let t=T.useContext(qc),{basename:e,future:n,navigator:r}=T.useContext(Pl),{matches:i}=T.useContext(lr),{pathname:s}=qg(),o=JSON.stringify(o0(i,n.v7_relativeSplatPath)),l=T.useRef(!1);return Qg(()=>{l.current=!0}),T.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=l0(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Gn([e,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[e,r,o,s,t])}function m0(){let{matches:t}=T.useContext(lr),e=t[t.length-1];return e?e.params:{}}function g0(t,e){return _0(t,e)}function _0(t,e,n,r){Al()||he(!1);let{navigator:i}=T.useContext(Pl),{matches:s}=T.useContext(lr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=qg(),h;if(e){var c;let E=typeof e=="string"?ti(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||he(!1),h=E}else h=u;let d=h.pathname||"/",m=d;if(a!=="/"){let E=a.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(E.length).join("/")}let _=WE(t,{pathname:m}),y=C0(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:Gn([a,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:Gn([a,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?T.createElement(xl.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:un.Pop}},y):y}function v0(){let t=T0(),e=d0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const y0=T.createElement(v0,null);class w0 extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(lr.Provider,{value:this.props.routeContext},T.createElement(Kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E0(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(lr.Provider,{value:e},r)}function C0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);h>=0||he(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let c=o[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:d,errors:m}=n,_=c.route.loader&&d[c.route.id]===void 0&&(!m||m[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,c,d)=>{let m,_=!1,y=null,E=null;n&&(m=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||y0,a&&(u<0&&d===0?(R0("route-fallback"),_=!0,E=null):u===d&&(_=!0,E=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,d+1)),f=()=>{let g;return m?g=y:_?g=E:c.route.Component?g=T.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=h,T.createElement(E0,{match:c,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?T.createElement(w0,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Xg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Xg||{}),Jg=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Jg||{});function S0(t){let e=T.useContext(qc);return e||he(!1),e}function I0(t){let e=T.useContext(f0);return e||he(!1),e}function k0(t){let e=T.useContext(lr);return e||he(!1),e}function Zg(t){let e=k0(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function T0(){var t;let e=T.useContext(Kg),n=I0(),r=Zg();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function N0(){let{router:t}=S0(Xg.UseNavigateStable),e=Zg(Jg.UseNavigateStable),n=T.useRef(!1);return Qg(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ls({fromRouteId:e},s)))},[t,e])}const hf={};function R0(t,e,n){hf[t]||(hf[t]=!0)}function P0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Pu(t){he(!1)}function x0(t){let{basename:e="/",children:n=null,location:r,navigationType:i=un.Pop,navigator:s,static:o=!1,future:l}=t;Al()&&he(!1);let a=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:a,navigator:s,static:o,future:ls({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ti(r));let{pathname:h="/",search:c="",hash:d="",state:m=null,key:_="default"}=r,y=T.useMemo(()=>{let E=jg(h,a);return E==null?null:{location:{pathname:E,search:c,hash:d,state:m,key:_},navigationType:i}},[a,h,c,d,m,_,i]);return y==null?null:T.createElement(Pl.Provider,{value:u},T.createElement(xl.Provider,{children:n,value:y}))}function A0(t){let{children:e,location:n}=t;return g0(xu(e),n)}new Promise(()=>{});function xu(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,xu(r.props.children,s));return}r.type!==Pu&&he(!1),!r.props.index||!r.props.children||he(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const O0="6";try{window.__reactRouterVersion=O0}catch{}const D0="startTransition",ff=Oy[D0];function L0(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=UE({window:i,v5Compat:!0}));let o=s.current,[l,a]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=T.useCallback(c=>{u&&ff?ff(()=>a(c)):a(c)},[a,u]);return T.useLayoutEffect(()=>o.listen(h),[o,h]),T.useEffect(()=>P0(r),[r]),T.createElement(x0,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var pf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pf||(pf={}));var mf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mf||(mf={}));function M0(t={}){const{nonce:e,onScriptLoadSuccess:n,onScriptLoadError:r}=t,[i,s]=T.useState(!1),o=T.useRef(n);o.current=n;const l=T.useRef(r);return l.current=r,T.useEffect(()=>{const a=document.createElement("script");return a.src="https://accounts.google.com/gsi/client",a.async=!0,a.defer=!0,a.nonce=e,a.onload=()=>{var u;s(!0),(u=o.current)===null||u===void 0||u.call(o)},a.onerror=()=>{var u;s(!1),(u=l.current)===null||u===void 0||u.call(l)},document.body.appendChild(a),()=>{document.body.removeChild(a)}},[e]),i}const b0=T.createContext(null);function F0({clientId:t,nonce:e,onScriptLoadSuccess:n,onScriptLoadError:r,children:i}){const s=M0({nonce:e,onScriptLoadSuccess:n,onScriptLoadError:r}),o=T.useMemo(()=>({clientId:t,scriptLoadedSuccessfully:s}),[t,s]);return v.createElement(b0.Provider,{value:o},i)}const U0=({name:t,mascot:e,colorClass:n,onClick:r})=>v.createElement("button",{onClick:r,className:`${n} btn-class-card transform transition duration-200 hover:scale-105 hover:shadow-2xl active:translate-y-0.5`},v.createElement("div",{className:"flex flex-col items-center gap-3"},v.createElement("div",{className:"text-6xl transform transition duration-200 hover:rotate-3"},e),v.createElement("div",{className:"font-bold text-lg transition-colors duration-150 hover:text-gray-800"},t))),z0=()=>{};var gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw ni(e)},ni=function(t){return new Error("Firebase Database ("+e_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},B0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(d=64)),r.push(n[h],n[c],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):B0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new W0;const d=s<<2|l>>4;if(r.push(d),u!==64){const m=l<<4&240|u>>2;if(r.push(m),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n_=function(t){const e=t_(t);return Qc.encodeByteArray(e,!0)},Vo=function(t){return n_(t).replace(/\./g,"")},Ho=function(t){try{return Qc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){return r_(void 0,t)}function r_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!H0(n)||(t[n]=r_(t[n],e[n]));return t}function H0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=()=>$0().__FIREBASE_DEFAULTS__,G0=()=>{if(typeof process>"u"||typeof gf>"u")return;const t=gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ho(t[1]);return e&&JSON.parse(e)},Yc=()=>{try{return z0()||j0()||G0()||K0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i_=t=>{var e,n;return(n=(e=Yc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},s_=t=>{const e=i_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o_=()=>{var t;return(t=Yc())==null?void 0:t.config},l_=t=>{var e;return(e=Yc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xc(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}const Mi={};function q0(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mi))Mi[e]?t.emulator.push(e):t.prod.push(e);return t}function Q0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _f=!1;function Jc(t,e){if(typeof window>"u"||typeof document>"u"||!ar(window.location.host)||Mi[t]===e||Mi[t]||_f)return;Mi[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=q0().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function a(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{_f=!0,o()},d}function h(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function c(){const d=Q0(r),m=n("text"),_=document.getElementById(m)||document.createElement("span"),y=n("learnmore"),E=document.getElementById(y)||document.createElement("a"),p=n("preprendIcon"),f=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const g=d.element;l(g),h(E,y);const w=u();a(f,p),g.append(f,_,E,w),document.body.appendChild(g)}s?(_.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(f.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Y0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function X0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function u_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J0(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Z0(){return e_.NODE_ADMIN===!0}function eC(){try{return typeof indexedDB=="object"}catch{return!1}}function tC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nC,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,l,r)}}function rC(t,e){return t.replace(iC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=as(Ho(s[0])||""),n=as(Ho(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},sC=function(t){const e=c_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},oC=function(t){const e=c_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Au(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $o(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Jn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vf(s)&&vf(o)){if(!Jn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const d=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function aC(t,e){const n=new uC(t,e);return n.subscribe.bind(n)}class uC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}function ed(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ol;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pC(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fC(t){return t===bn?void 0:t}function pC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const gC={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},_C=j.INFO,vC={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},yC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class td{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=yC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const wC=(t,e)=>e.some(n=>t instanceof n);let yf,wf;function EC(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CC(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d_=new WeakMap,Ou=new WeakMap,h_=new WeakMap,wa=new WeakMap,nd=new WeakMap;function SC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&d_.set(n,t)}).catch(()=>{}),nd.set(e,t),e}function IC(t){if(Ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kC(t){Du=t(Du)}function TC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ea(this),e,...n);return h_.set(r,e.sort?e.sort():[e]),vn(r)}:CC().includes(t)?function(...e){return t.apply(Ea(this),e),vn(d_.get(this))}:function(...e){return vn(t.apply(Ea(this),e))}}function NC(t){return typeof t=="function"?TC(t):(t instanceof IDBTransaction&&IC(t),wC(t,EC())?new Proxy(t,Du):t)}function vn(t){if(t instanceof IDBRequest)return SC(t);if(wa.has(t))return wa.get(t);const e=NC(t);return e!==t&&(wa.set(t,e),nd.set(e,t)),e}const Ea=t=>nd.get(t);function RC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(vn(o.result),a.oldVersion,a.newVersion,vn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const PC=["get","getKey","getAll","getAllKeys","count"],xC=["put","add","delete","clear"],Ca=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ca.set(e,s),s}kC(t=>({...t,get:(e,n,r)=>Ef(e,n)||t.get(e,n,r),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lu="@firebase/app",Cf="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new td("@firebase/app"),DC="@firebase/app-compat",LC="@firebase/analytics-compat",MC="@firebase/analytics",bC="@firebase/app-check-compat",FC="@firebase/app-check",UC="@firebase/auth",zC="@firebase/auth-compat",BC="@firebase/database",WC="@firebase/data-connect",VC="@firebase/database-compat",HC="@firebase/functions",$C="@firebase/functions-compat",jC="@firebase/installations",GC="@firebase/installations-compat",KC="@firebase/messaging",qC="@firebase/messaging-compat",QC="@firebase/performance",YC="@firebase/performance-compat",XC="@firebase/remote-config",JC="@firebase/remote-config-compat",ZC="@firebase/storage",eS="@firebase/storage-compat",tS="@firebase/firestore",nS="@firebase/ai",rS="@firebase/firestore-compat",iS="firebase",sS="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="[DEFAULT]",oS={[Lu]:"fire-core",[DC]:"fire-core-compat",[MC]:"fire-analytics",[LC]:"fire-analytics-compat",[FC]:"fire-app-check",[bC]:"fire-app-check-compat",[UC]:"fire-auth",[zC]:"fire-auth-compat",[BC]:"fire-rtdb",[WC]:"fire-data-connect",[VC]:"fire-rtdb-compat",[HC]:"fire-fn",[$C]:"fire-fn-compat",[jC]:"fire-iid",[GC]:"fire-iid-compat",[KC]:"fire-fcm",[qC]:"fire-fcm-compat",[QC]:"fire-perf",[YC]:"fire-perf-compat",[XC]:"fire-rc",[JC]:"fire-rc-compat",[ZC]:"fire-gcs",[eS]:"fire-gcs-compat",[tS]:"fire-fst",[rS]:"fire-fst-compat",[nS]:"fire-vertex","fire-js":"fire-js",[iS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map,lS=new Map,bu=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(bu.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;bu.set(e,t);for(const n of jo.values())Sf(n,t);for(const n of lS.values())Sf(n,t);return!0}function Ll(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ke(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Cs("app","Firebase",aS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=sS;function f_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Mu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=o_()),!n)throw yn.create("no-options");const s=jo.get(i);if(s){if(Jn(n,s.options)&&Jn(r,s.config))return s;throw yn.create("duplicate-app",{appName:i})}const o=new mC(i);for(const a of bu.values())o.addComponent(a);const l=new uS(n,r,o);return jo.set(i,l),l}function rd(t=Mu){const e=jo.get(t);if(!e&&t===Mu&&o_())return f_();if(!e)throw yn.create("no-app",{appName:t});return e}function It(t,e,n){let r=oS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(o.join(" "));return}Zn(new kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="firebase-heartbeat-database",dS=1,us="firebase-heartbeat-store";let Sa=null;function p_(){return Sa||(Sa=RC(cS,dS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function hS(t){try{const n=(await p_()).transaction(us),r=await n.objectStore(us).get(m_(t));return await n.done,r}catch(e){if(e instanceof Qt)$t.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function If(t,e){try{const r=(await p_()).transaction(us,"readwrite");await r.objectStore(us).put(e,m_(t)),await r.done}catch(n){if(n instanceof Qt)$t.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function m_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=1024,pS=30;class mS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _S(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>pS){const o=vS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kf(),{heartbeatsToSend:r,unsentEntries:i}=gS(this._heartbeatsCache.heartbeats),s=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $t.warn(n),""}}}function kf(){return new Date().toISOString().substring(0,10)}function gS(t,e=fS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _S{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eC()?tC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}function vS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){Zn(new kn("platform-logger",e=>new AC(e),"PRIVATE")),Zn(new kn("heartbeat",e=>new mS(e),"PRIVATE")),It(Lu,Cf,t),It(Lu,Cf,"esm2020"),It("fire-js","")}yS("");function g_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wS=g_,__=new Cs("auth","Firebase",g_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new td("@firebase/auth");function ES(t,...e){Go.logLevel<=j.WARN&&Go.warn(`Auth (${ur}): ${t}`,...e)}function fo(t,...e){Go.logLevel<=j.ERROR&&Go.error(`Auth (${ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw sd(t,...e)}function gt(t,...e){return sd(t,...e)}function id(t,e,n){const r={...wS(),[e]:n};return new Cs("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return id(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),id(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return __.create(t,...e)}function L(t,e,...n){if(!t)throw sd(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function jt(t,e){t||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function CS(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CS()||X0()||"connection"in navigator)?navigator.onLine:!0}function IS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zc()||u_()}get(){return SS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],NS=new Ss(3e4,6e4);function ld(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ii(t,e,n,r,i={}){return w_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ri({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return Y0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ar(t.emulatorConfig.host)&&(u.credentials="include"),y_.fetch()(await E_(t,t.config.apiHost,n,l),u)})}async function w_(t,e,n){t._canInitEmulator=!1;const r={...kS,...e};try{const i=new PS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ys(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ys(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ys(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw id(t,h,u);Tt(t,h)}}catch(i){if(i instanceof Qt)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function RS(t,e,n,r,i={}){const s=await ii(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function E_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?od(t.config,i):`${t.config.apiScheme}://${i}`;return TS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class PS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),NS.get())})}}function Ys(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function Ko(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AS(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=ad(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bi(Ia(i.auth_time)),issuedAtTime:bi(Ia(i.iat)),expirationTime:bi(Ia(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ho(n);return i?JSON.parse(i):(fo("Failed to decode base64 JWT payload"),null)}catch(i){return fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rf(t){const e=ad(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&OS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){var c;const e=t.auth,n=await t.getIdToken(),r=await cs(t,Ko(e,{idToken:n}));L(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(c=i.providerUserInfo)!=null&&c.length?C_(i.providerUserInfo):[],o=MS(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Uu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LS(t){const e=He(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function C_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,e){const n=await w_(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await E_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&ar(t.emulatorConfig.host)&&(a.credentials="include"),y_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FS(t,e){return ii(t,"POST","/v2/accounts:revokeToken",ld(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=Rf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Lr;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ct{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cs(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AS(this,e)}reload(){return LS(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await cs(this,xS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:c,emailVerified:d,isAnonymous:m,providerData:_,stsTokenManager:y}=n;L(c&&y,e,"internal-error");const E=Lr.fromJSON(this.name,y);L(typeof c=="string",e,"internal-error"),Jt(r,e.name),Jt(i,e.name),L(typeof d=="boolean",e,"internal-error"),L(typeof m=="boolean",e,"internal-error"),Jt(s,e.name),Jt(o,e.name),Jt(l,e.name),Jt(a,e.name),Jt(u,e.name),Jt(h,e.name);const p=new ct({uid:c,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:E,createdAt:u,lastLoginAt:h});return _&&Array.isArray(_)&&(p.providerData=_.map(f=>({...f}))),a&&(p._redirectEventId=a),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new Lr;i.updateFromServerResponse(n);const s=new ct({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?C_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Lr;l.updateFromIdToken(r);const a=new ct({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function bt(t){jt(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S_.type="NONE";const xf=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,s),this.fullPersistenceKey=po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ko(this.auth,{idToken:e}).catch(()=>{});return n?ct._fromGetAccountInfoResponse(this.auth,n,e):null}return ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(bt(xf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||bt(xf);const o=po(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let c;if(typeof h=="string"){const d=await Ko(e,{idToken:h}).catch(()=>{});if(!d)break;c=await ct._fromGetAccountInfoResponse(e,d,h)}else c=ct._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Mr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P_(e))return"Blackberry";if(x_(e))return"Webos";if(k_(e))return"Safari";if((e.includes("chrome/")||T_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function I_(t=Ae()){return/firefox\//i.test(t)}function k_(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T_(t=Ae()){return/crios\//i.test(t)}function N_(t=Ae()){return/iemobile/i.test(t)}function R_(t=Ae()){return/android/i.test(t)}function P_(t=Ae()){return/blackberry/i.test(t)}function x_(t=Ae()){return/webos/i.test(t)}function ud(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function US(t=Ae()){var e;return ud(t)&&!!((e=window.navigator)!=null&&e.standalone)}function zS(){return J0()&&document.documentMode===10}function A_(t=Ae()){return ud(t)||R_(t)||x_(t)||P_(t)||/windows phone/i.test(t)||N_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e=[]){let n;switch(t){case"Browser":n=Af(Ae());break;case"Worker":n=`${Af(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e={}){return ii(t,"GET","/v2/passwordPolicy",ld(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=6;class HS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new BS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=__,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ko(this,{idToken:e}),r=await ct._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(wn(this));const n=e?He(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WS(this),n=new HS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ES(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Is(t){return He(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=aC(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jS(t){cd=t}function GS(t){return cd.loadJS(t)}function KS(){return cd.gapiScript}function qS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){const n=Ll(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jn(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function YS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XS(t,e,n){const r=Is(t);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=D_(e),{host:o,port:l}=JS(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},h=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Jn(u,r.config.emulator)&&Jn(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ar(o)?(Xc(`${s}//${o}${a}`),Jc("Auth",!0)):ZS()}function D_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JS(t){const e=D_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Df(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Df(o)}}}function Df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(t,e){return RS(t,"POST","/v1/accounts:signInWithIdp",ld(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="http://localhost";class er extends L_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,br(e,n)}buildRequest(){const e={requestUri:eI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ml{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ks{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return er._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ks{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends ks{constructor(){super("twitter.com")}static credential(e,n){return er._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ct._fromIdTokenResponse(e,r,i),o=Lf(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lf(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Qt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qo(e,n,r,i)}}function M_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,s,e,r):s})}async function tI(t,e,n=!1){const r=await cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e,n=!1){const{auth:r}=t;if(Ke(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await cs(t,M_(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=ad(s.idToken);L(o,r,"internal-error");const{sub:l}=o;return L(t.uid===l,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e,n=!1){if(Ke(t.app))return Promise.reject(wn(t));const r="signIn",i=await M_(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function iI(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function sI(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function oI(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function Mf(t){return He(t).signOut()}const Yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=1e3,aI=10;class F_ extends b_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}F_.type="LOCAL";const uI=F_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends b_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U_.type="SESSION";const z_=U_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await cI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=dd("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function hI(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function fI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function mI(){return B_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="firebaseLocalStorageDb",gI=1,Xo="firebaseLocalStorage",V_="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function _I(){const t=indexedDB.deleteDatabase(W_);return new Ts(t).toPromise()}function zu(){const t=indexedDB.open(W_,gI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:V_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await _I(),e(await zu()))})})}async function bf(t,e,n){const r=Fl(t,!0).put({[V_]:e,value:n});return new Ts(r).toPromise()}async function vI(t,e){const n=Fl(t,!1).get(e),r=await new Ts(n).toPromise();return r===void 0?null:r.value}function Ff(t,e){const n=Fl(t,!0).delete(e);return new Ts(n).toPromise()}const yI=800,wI=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(mI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await fI(),!this.activeServiceWorker)return;this.sender=new dI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await bf(e,Yo,"1"),await Ff(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fl(i,!1).getAll();return new Ts(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const EI=H_;new Ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){return e?bt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends L_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CI(t){return rI(t.auth,new fd(t),t.bypassAuthState)}function SI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),nI(n,new fd(t),t.bypassAuthState)}async function II(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),tI(n,new fd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CI;case"linkViaPopup":case"linkViaRedirect":return II;case"reauthViaPopup":case"reauthViaRedirect":return SI;default:Tt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new Ss(2e3,1e4);async function TI(t,e,n){if(Ke(t.app))return Promise.reject(gt(t,"operation-not-supported-in-this-environment"));const r=Is(t);v_(t,e,Ml);const i=hd(r,n);return new Wn(r,"signInViaPopup",e,i).executeNotNull()}class Wn extends $_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kI.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="pendingRedirect",mo=new Map;class RI extends $_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const r=await PI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PI(t,e){const n=G_(e),r=j_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function xI(t,e){return j_(t)._set(G_(e),"true")}function AI(t,e){mo.set(t._key(),e)}function j_(t){return bt(t._redirectPersistence)}function G_(t){return po(NI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e,n){return DI(t,e,n)}async function DI(t,e,n){if(Ke(t.app))return Promise.reject(wn(t));const r=Is(t);v_(t,e,Ml),await r._initializationPromise;const i=hd(r,n);return await xI(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function LI(t,e,n=!1){if(Ke(t.app))return Promise.reject(wn(t));const r=Is(t),i=hd(r,e),o=await new RI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=10*60*1e3;class bI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!K_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function K_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BI=/^https?/;async function WI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UI(t);for(const n of e)try{if(VI(n))return}catch{}Tt(t,"unauthorized-domain")}function VI(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BI.test(n))return!1;if(zI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new Ss(3e4,6e4);function zf(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $I(t){return new Promise((e,n)=>{var i,s,o;function r(){zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zf(),n(gt(t,"network-request-failed"))},timeout:HI.get()})}if((s=(i=kt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)r();else{const l=qS("iframefcb");return kt()[l]=()=>{gapi.load?r():n(gt(t,"network-request-failed"))},GS(`${KS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw go=null,e})}let go=null;function jI(t){return go=go||$I(t),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new Ss(5e3,15e3),KI="__/auth/iframe",qI="emulator/auth/iframe",QI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XI(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?od(e,qI):`https://${t.config.authDomain}/${KI}`,r={apiKey:e.apiKey,appName:t.name,v:ur},i=YI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ri(r).slice(1)}`}async function JI(t){const e=await jI(t),n=kt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:XI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=kt().setTimeout(()=>{s(o)},GI.get());function a(){kt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ek=500,tk=600,nk="_blank",rk="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ik(t,e,n,r=ek,i=tk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...ZI,width:r.toString(),height:i.toString(),top:s,left:o},u=Ae().toLowerCase();n&&(l=T_(u)?nk:n),I_(u)&&(e=e||rk,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(US(u)&&l!=="_self")return sk(e||"",l),new Bf(null);const c=window.open(e||"",l,h);L(c,t,"popup-blocked");try{c.focus()}catch{}return new Bf(c)}function sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="__/auth/handler",lk="emulator/auth/handler",ak=encodeURIComponent("fac");async function Wf(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ur,eventId:i};if(e instanceof Ml){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Au(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries({}))o[h]=c}if(e instanceof ks){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${ak}=${encodeURIComponent(a)}`:"";return`${uk(t)}?${ri(l).slice(1)}${u}`}function uk({config:t}){return t.emulator?od(t,lk):`https://${t.authDomain}/${ok}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=LI,this._overrideRedirectResult=AI}async _openPopup(e,n,r,i){var o;jt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Wf(e,n,r,Fu(),i);return ik(e,s,dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wf(e,n,r,Fu(),i);return hI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JI(e),r=new bI(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ka];s!==void 0&&n(!!s),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A_()||k_()||ud()}}const dk=ck;var Vf="@firebase/auth",Hf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pk(t){Zn(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O_(t)},u=new $S(r,i,s,a);return YS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new kn("auth-internal",e=>{const n=Is(e.getProvider("auth").getImmediate());return(r=>new hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Vf,Hf,fk(t)),It(Vf,Hf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=5*60,gk=l_("authIdTokenMaxAge")||mk;let $f=null;const _k=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gk)return;const i=n==null?void 0:n.token;$f!==i&&($f=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vk(t=rd()){const e=Ll(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QS(t,{popupRedirectResolver:dk,persistence:[EI,uI,z_]}),r=l_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_k(s.toString());sI(n,o,()=>o(n.currentUser)),iI(n,l=>o(l))}}const i=i_("auth");return i&&XS(n,`http://${i}`),n}function yk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}jS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pk("Browser");var wk="firebase",Ek="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(wk,Ek,"app");var jf={};const Gf="@firebase/database",Kf="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q_="";function Ck(t){q_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sk(e)}}catch{}return new Ik},Vn=Q_("localStorage"),kk=Q_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new td("@firebase/database"),Tk=function(){let t=1;return function(){return t++}}(),Y_=function(t){const e=dC(t),n=new lC;n.update(e);const r=n.digest();return Qc.encodeByteArray(r)},Ns=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ns.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Fi=null,qf=!0;const Nk=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Fr.logLevel=j.VERBOSE,Fi=Fr.log.bind(Fr)},Te=function(...t){if(qf===!0&&(qf=!1,Fi===null&&kk.get("logging_enabled")===!0&&Nk()),Fi){const e=Ns.apply(null,t);Fi(e)}},Rs=function(t){return function(...e){Te(t,...e)}},Bu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ns(...t);Fr.error(e)},Gt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ns(...t)}`;throw Fr.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Ns(...t);Fr.warn(e)},Rk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},X_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Pk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qr="[MIN_NAME]",tr="[MAX_NAME]",si=function(t,e){if(t===e)return 0;if(t===Qr||e===tr)return-1;if(e===Qr||t===tr)return 1;{const n=Qf(t),r=Qf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},xk=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},pd=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=pd(t[e[r]]);return n+="}",n},J_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Z_=function(t){k(!X_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Ak=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ok=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Dk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Lk=new RegExp("^-?(0*)\\d{1,10}$"),Mk=-2147483648,bk=2147483647,Qf=function(t){if(Lk.test(t)){const e=Number(t);if(e>=Mk&&e<=bk)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},Fk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ui=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ke(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class _o{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_o.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="5",ev="v",tv="s",nv="r",rv="f",iv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sv="ls",ov="p",Wu="ac",lv="websocket",av="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Bk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cv(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===lv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===av)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Bk(t)&&(n.ns=t.namespace);const i=[];return Ve(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return V0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta={},Na={};function gd(t){const e=t.toString();return Ta[e]||(Ta[e]=new Wk),Ta[e]}function Vk(t,e){const n=t.toString();return Na[n]||(Na[n]=e()),Na[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="start",$k="close",jk="pLPCommand",Gk="pRTLPCB",dv="id",hv="pw",fv="ser",Kk="cb",qk="seg",Qk="ts",Yk="d",Xk="dframe",pv=1870,mv=30,Jk=pv-mv,Zk=25e3,e1=3e4;class Nr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=gd(n),this.urlFn=a=>(this.appCheckToken&&(a[Wu]=this.appCheckToken),cv(n,av,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Hk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(e1)),Pk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _d((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yf)this.id=l,this.password=a;else if(o===$k)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Yf]="t",r[fv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Kk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ev]=md,this.transportSessionId&&(r[tv]=this.transportSessionId),this.lastSessionId&&(r[sv]=this.lastSessionId),this.applicationId&&(r[ov]=this.applicationId),this.appCheckToken&&(r[Wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&iv.test(location.hostname)&&(r[nv]=rv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nr.forceAllow_=!0}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){return Nr.forceAllow_?!0:!Nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ak()&&!Ok()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=n_(n),i=J_(r,Jk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Xk]="t",r[dv]=e,r[hv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _d{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tk(),window[jk+this.uniqueCallbackIdentifier]=e,window[Gk+this.uniqueCallbackIdentifier]=n,this.myIFrame=_d.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dv]=this.myID,e[hv]=this.myPW,e[fv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mv+r.length<=pv;){const o=this.pendingSegs.shift();r=r+"&"+qk+i+"="+o.seg+"&"+Qk+i+"="+o.ts+"&"+Yk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Zk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=16384,n1=45e3;let Jo=null;typeof MozWebSocket<"u"?Jo=MozWebSocket:typeof WebSocket<"u"&&(Jo=WebSocket);class ut{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=gd(n),this.connURL=ut.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ev]=md,typeof location<"u"&&location.hostname&&iv.test(location.hostname)&&(o[nv]=rv),n&&(o[tv]=n),r&&(o[sv]=r),i&&(o[Wu]=i),s&&(o[ov]=s),cv(e,lv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{let r;Z0(),this.mySock=new Jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jo!==null&&!ut.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=as(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=J_(n,t1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(n1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static get ALL_TRANSPORTS(){return[Nr,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ut&&ut.isAvailable();let r=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ut];else{const i=this.transports_=[];for(const s of ds.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=6e4,i1=5e3,s1=10*1024,o1=100*1024,Ra="t",Xf="d",l1="s",Jf="r",a1="e",Zf="o",ep="a",tp="n",np="p",u1="h";class c1{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ui(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>o1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>s1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ra in e){const n=e[Ra];n===ep?this.upgradeIfSecondaryHealthy_():n===Jf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:np,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ep,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(Ra,e);if(Xf in e){const r=e[Xf];if(n===u1){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===l1?this.onConnectionShutdown_(r):n===Jf?this.onReset_(r):n===a1?Bu("Server Error: "+r):n===Zf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),md!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ui(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(r1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:np,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends _v{static getInstance(){return new Zo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=32,ip=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function vv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function d1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return be(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vd(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class h1{constructor(e,n){this.errorPrefix_=n,this.parts_=yv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dl(this.parts_[r]);Ev(this)}}function f1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),Ev(t)}function p1(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ev(t){if(t.byteLength_>ip)throw new Error(t.errorPrefix_+"has a key path longer than "+ip+" bytes ("+t.byteLength_+").");if(t.parts_.length>rp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rp+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends _v{static getInstance(){return new yd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=1e3,m1=60*5*1e3,sp=30*1e3,g1=1.3,_1=3e4,v1="server_kill",op=3;class zt extends gv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=zt.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=m1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ol,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;zt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const r=Kr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bu("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_1&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*g1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new c1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{We(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(v1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Au(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=op&&(this.reconnectDelay_=sp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=op&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+q_.replace(/\./g,"-")]=1,Zc()?e["framework.cordova"]=1:u_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return Au(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Qr,e),i=new z(Qr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class Cv extends Ul{static get __EMPTY_NODE(){return Xs}static set __EMPTY_NODE(e){Xs=e}compare(e,n){return si(e.name,n.name)}isDefinedOn(e){throw ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(tr,Xs)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Xs)}toString(){return".key"}}const Ur=new Cv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??Fe.EMPTY_NODE,this.right=s??Fe.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class y1{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Js(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Js(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e){return si(t.name,e.name)}function wd(t,e){return si(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;function E1(t){Vu=t}const Sv=function(t){return typeof t=="number"?"number:"+Z_(t):"string:"+t},Iv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else k(t===Vu||t.isEmpty(),"priority of unexpected type.");k(t===Vu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp;class fe{static set __childrenNodeConstructor(e){lp=e}static get __childrenNodeConstructor(){return lp}constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:U(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Z_(this.value_):e+=this.value_,this.lazyHash_=Y_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kv,Tv;function C1(t){kv=t}function S1(t){Tv=t}class I1 extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?si(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(tr,new fe("[PRIORITY-POST]",Tv))}makePost(e,n){const r=kv(e);return new z(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new I1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=Math.log(2);class T1{constructor(e){const n=s=>parseInt(Math.log(s)/k1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const el=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,d;if(h===0)return null;if(h===1)return c=t[a],d=n?n(c):c,new me(d,c.node,me.BLACK,null,null);{const m=parseInt(h/2,10)+a,_=i(a,m),y=i(m+1,u);return c=t[m],d=n?n(c):c,new me(d,c.node,me.BLACK,_,y)}},s=function(a){let u=null,h=null,c=t.length;const d=function(_,y){const E=c-_,p=c;c-=_;const f=i(E+1,p),g=t[E],w=n?n(g):g;m(new me(w,g.node,y,null,f))},m=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(_+1));y?d(E,me.BLACK):(d(E,me.BLACK),d(E,me.RED))}return h},o=new T1(t.length),l=s(o);return new Fe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;const fr={};class Ft{static get Default(){return k(fr&&ie,"ChildrenNode.ts has not been loaded"),Pa=Pa||new Ft({".priority":fr},{".priority":ie}),Pa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=el(r,e.getCompare()):l=fr;const a=e.toString(),u={...this.indexSet_};u[a]=e;const h={...this.indexes_};return h[a]=l,new Ft(h,u)}addToIndexes(e,n){const r=$o(this.indexes_,(i,s)=>{const o=Kr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===fr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),el(l,o.getCompare())}else return fr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Ft(r,this.indexSet_)}removeFromIndexes(e,n){const r=$o(this.indexes_,i=>{if(i===fr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Ft(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class D{static get EMPTY_NODE(){return wi||(wi=new D(new Fe(wd),null,Ft.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Iv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wi:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wi:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{k(U(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sv(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Y_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===Ur||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ur?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class N1 extends D{constructor(){super(new Fe(wd),D.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Ps=new N1;Object.defineProperties(z,{MIN:{value:new z(Qr,D.EMPTY_NODE)},MAX:{value:new z(tr,Ps)}});Cv.__EMPTY_NODE=D.EMPTY_NODE;fe.__childrenNodeConstructor=D;E1(Ps);S1(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=!0;function ye(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ye(e))}if(!(t instanceof Array)&&R1){const n=[];let r=!1;if(Ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=el(n,w1,o=>o.name,wd);if(r){const o=el(n,ie.getCompare());return new D(s,ye(e),new Ft({".priority":o},{".priority":ie}))}else return new D(s,ye(e),Ft.Default)}else{let n=D.EMPTY_NODE;return Ve(t,(r,i)=>{if(Yt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}C1(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1 extends Ul{constructor(e){super(),this.indexPath_=e,k(!B(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?si(e.name,n.name):s}makePost(e,n){const r=ye(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new z(tr,e)}toString(){return yv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1 extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?si(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ye(e);return new z(n,r)}toString(){return".value"}}const A1=new x1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){return{type:"value",snapshotNode:t}}function Yr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function O1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Yr(n,r)):o.trackChildChange(fs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(hs(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fs(i,s,o))}else r.trackChildChange(Yr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.indexedFilter_=new Ed(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,m)=>c(m,d)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,a);if(h&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(fs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(hs(n,c));const y=l.updateImmediateChild(n,D.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Yr(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(hs(u.name,u.node)),s.trackChildChange(Yr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function L1(t){return t.loadsAllData()?new Ed(t.getIndex()):t.hasLimit()?new D1(t):new ps(t)}function ap(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===A1?n="$value":t.index_===Ur?n="$key":(k(t.index_ instanceof P1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function up(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends gv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Rs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tl.getListenId_(e,r),l={};this.listens_[o]=l;const a=ap(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Kr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ap(e._queryParams),r=e._path.toString(),i=new Ol;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=as(l.responseText)}catch{We("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){return{value:null,children:new Map}}function Rv(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,nl());const i=t.children.get(r);e=K(e),Rv(i,e,n)}}function Hu(t,e,n){t.value!==null?n(e,t.value):b1(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Hu(i,s,n)})}function b1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ve(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=10*1e3,U1=30*1e3,z1=5*60*1e3;class B1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new F1(e);const r=cp+(U1-cp)*Math.random();Ui(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ve(e,(i,s)=>{s>0&&Yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ui(this.reportStats_.bind(this),Math.floor(Math.random()*2*z1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function Pv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Id(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ht.ACK_USER_WRITE,this.source=Pv()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new rl(H(),n,this.revert)}}else return k(U(this.path)===e,"operationForChild called for unrelated child."),new rl(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new ms(this.source,H()):new ms(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ht.OVERWRITE}operationForChild(e){return B(this.path)?new nr(this.source,H(),this.snap.getImmediateChild(e)):new nr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ht.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new nr(this.source,H(),n.value):new gs(this.source,H(),n)}else return k(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function V1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(O1(o.childName,o.snapshotNode))}),Ei(t,i,"child_removed",e,r,n),Ei(t,i,"child_added",e,r,n),Ei(t,i,"child_moved",s,r,n),Ei(t,i,"child_changed",e,r,n),Ei(t,i,"value",e,r,n),i}function Ei(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>$1(t,l,a)),o.forEach(l=>{const a=H1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function H1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $1(t,e,n){if(e.childName==null||n.childName==null)throw ni("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e){return{eventCache:t,serverCache:e}}function zi(t,e,n,r){return zl(new rr(e,n,r),t.serverCache)}function xv(t,e,n,r){return zl(t.eventCache,new rr(e,n,r))}function $u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;const j1=()=>(xa||(xa=new Fe(xk)),xa);class X{static fromObject(e){let n=new X(null);return Ve(e,(r,i)=>{n=n.set(new G(r),i)}),n}constructor(e,n=j1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(B(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:ce(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new X(null)}}set(e,n){if(B(e))return new X(n,this.children);{const r=U(e),s=(this.children.get(r)||new X(null)).set(K(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(B(e))return n;{const r=U(e),s=(this.children.get(r)||new X(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(K(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),ce(n,i),r):new X(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new X(null))}}function Bi(t,e,n){if(B(e))return new _t(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=be(i,e);return s=s.updateChild(o,n),new _t(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new _t(s)}}}function dp(t,e,n){let r=t;return Ve(n,(i,s)=>{r=Bi(r,ce(e,i),s)}),r}function hp(t,e){if(B(e))return _t.empty();{const n=t.writeTree_.setTree(e,new X(null));return new _t(n)}}function ju(t,e){return cr(t,e)!=null}function cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function fp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function En(t,e){if(B(e))return t;{const n=cr(t,e);return n!=null?new _t(new X(n)):new _t(t.writeTree_.subtree(e))}}function Gu(t){return t.writeTree_.isEmpty()}function Xr(t,e){return Av(H(),t.writeTree_,e)}function Av(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Av(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){return Mv(e,t)}function G1(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=r}function K1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function q1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Q1(l,r.path)?i=!1:dt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Y1(t),!0;if(r.snap)t.visibleWrites=hp(t.visibleWrites,r.path);else{const l=r.children;Ve(l,a=>{t.visibleWrites=hp(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function Q1(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(ce(t.path,n),e))return!0;return!1}function Y1(t){t.visibleWrites=Ov(t.allWrites,X1,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function X1(t){return t.visible}function Ov(t,e,n){let r=_t.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)dt(n,o)?(l=be(n,o),r=Bi(r,l,s.snap)):dt(o,n)&&(l=be(o,n),r=Bi(r,H(),s.snap.getChild(l)));else if(s.children){if(dt(n,o))l=be(n,o),r=dp(r,l,s.children);else if(dt(o,n))if(l=be(o,n),B(l))r=dp(r,H(),s.children);else{const a=Kr(s.children,U(l));if(a){const u=a.getChild(K(l));r=Bi(r,H(),u)}}}else throw ni("WriteRecord should have .snap or .children")}}return r}function Dv(t,e,n,r,i){if(!r&&!i){const s=cr(t.visibleWrites,e);if(s!=null)return s;{const o=En(t.visibleWrites,e);if(Gu(o))return n;if(n==null&&!ju(o,H()))return null;{const l=n||D.EMPTY_NODE;return Xr(o,l)}}}else{const s=En(t.visibleWrites,e);if(!i&&Gu(s))return n;if(!i&&n==null&&!ju(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(dt(u.path,e)||dt(e,u.path))},l=Ov(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Xr(l,a)}}}function J1(t,e,n){let r=D.EMPTY_NODE;const i=cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=En(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=Xr(En(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),fp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=En(t.visibleWrites,e);return fp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Z1(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(ju(t.visibleWrites,s))return null;{const o=En(t.visibleWrites,s);return Gu(o)?i.getChild(n):Xr(o,i.getChild(n))}}function eT(t,e,n,r){const i=ce(e,n),s=cr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=En(t.visibleWrites,i);return Xr(o,r.getNode().getImmediateChild(n))}else return null}function tT(t,e){return cr(t.visibleWrites,e)}function nT(t,e,n,r,i,s,o){let l;const a=En(t.visibleWrites,e),u=cr(a,H());if(u!=null)l=u;else if(n!=null)l=Xr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=d.getNext();for(;m&&h.length<i;)c(m,r)!==0&&h.push(m),m=d.getNext();return h}else return[]}function rT(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return Dv(t.writeTree,t.treePath,e,n,r)}function Td(t,e){return J1(t.writeTree,t.treePath,e)}function pp(t,e,n,r){return Z1(t.writeTree,t.treePath,e,n,r)}function sl(t,e){return tT(t.writeTree,ce(t.treePath,e))}function iT(t,e,n,r,i,s){return nT(t.writeTree,t.treePath,e,n,r,i,s)}function Nd(t,e,n){return eT(t.writeTree,t.treePath,e,n)}function Lv(t,e){return Mv(ce(t.treePath,e),t.writeTree)}function Mv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,hs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fs(r,e.snapshotNode,i.oldSnap));else throw ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const bv=new oT;class Rd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=iT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){return{filter:t}}function aT(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uT(t,e,n,r,i){const s=new sT;let o,l;if(n.type===ht.OVERWRITE){const u=n;u.source.fromUser?o=Ku(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=ol(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ht.MERGE){const u=n;u.source.fromUser?o=dT(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=qu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ht.ACK_USER_WRITE){const u=n;u.revert?o=pT(t,e,u.path,r,i,s):o=hT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ht.LISTEN_COMPLETE)o=fT(t,e,n.path,r,s);else throw ni("Unknown operation type: "+n.type);const a=s.getChanges();return cT(e,o,a),{viewCache:o,changes:a}}function cT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Nv($u(e)))}}function Fv(t,e,n,r,i,s){const o=e.eventCache;if(sl(r,n)!=null)return e;{let l,a;if(B(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ir(e),h=u instanceof D?u:D.EMPTY_NODE,c=Td(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=il(r,ir(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){k(Tn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=pp(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=K(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=pp(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=Nd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return zi(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ol(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),m,null)}else{const m=U(n);if(!a.isCompleteForPath(n)&&Tn(n)>1)return e;const _=K(n),E=a.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=h.updatePriority(a.getNode(),E):u=h.updateChild(a.getNode(),m,E,_,bv,null)}const c=xv(e,u,a.isFullyInitialized()||B(n),h.filtersNodes()),d=new Rd(i,c,s);return Fv(t,c,n,i,d,l)}function Ku(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Rd(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=zi(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=zi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=K(n),m=l.getNode().getImmediateChild(c);let _;if(B(d))_=r;else{const y=h.getCompleteChild(c);y!=null?vv(d)===".priority"&&y.getChild(wv(d)).isEmpty()?_=y:_=y.updateChild(d,r):_=D.EMPTY_NODE}if(m.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,d,h,o);a=zi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function mp(t,e){return t.eventCache.isCompleteForChild(e)}function dT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=ce(n,a);mp(e,U(h))&&(l=Ku(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=ce(n,a);mp(e,U(h))||(l=Ku(t,l,h,u,i,s,o))}),l}function gp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function qu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new X(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),_=gp(t,m,d);a=ol(t,a,new G(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const m=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!m){const _=e.serverCache.getNode().getImmediateChild(c),y=gp(t,_,d);a=ol(t,a,new G(c),y,i,s,o,l)}}),a}function hT(t,e,n,r,i,s,o){if(sl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ol(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new X(null);return a.getNode().forEachChild(Ur,(h,c)=>{u=u.set(new G(h),c)}),qu(t,e,n,u,i,s,l,o)}else return e}else{let u=new X(null);return r.foreach((h,c)=>{const d=ce(n,h);a.isCompleteForPath(d)&&(u=u.set(h,a.getNode().getChild(d)))}),qu(t,e,n,u,i,s,l,o)}}function fT(t,e,n,r,i){const s=e.serverCache,o=xv(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return Fv(t,o,n,r,bv,i)}function pT(t,e,n,r,i,s){let o;if(sl(r,n)!=null)return e;{const l=new Rd(r,e,i),a=e.eventCache.getNode();let u;if(B(n)||U(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=il(r,ir(e));else{const c=e.serverCache.getNode();k(c instanceof D,"serverChildren would be complete if leaf node"),h=Td(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=U(n);let c=Nd(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,K(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,D.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||sl(r,H())!=null,zi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ed(r.getIndex()),s=L1(r);this.processor_=lT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),h=new rr(a,o.isFullyInitialized(),i.filtersNodes()),c=new rr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=zl(c,h),this.eventGenerator_=new W1(this.query_)}get query(){return this.query_}}function gT(t){return t.viewCache_.serverCache.getNode()}function _T(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function _p(t){return t.eventRegistrations_.length===0}function vT(t,e){t.eventRegistrations_.push(e)}function vp(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function yp(t,e,n,r){e.type===ht.MERGE&&e.source.queryId!==null&&(k(ir(t.viewCache_),"We should always have a full cache before handling merges"),k($u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=uT(t.processor_,i,e,n,r);return aT(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Uv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Yr(s,o))}),n.isFullyInitialized()&&r.push(Nv(n.getNode())),Uv(t,r,n.getNode(),e)}function Uv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return V1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll;class wT{constructor(){this.views=new Map}}function ET(t){k(!ll,"__referenceConstructor has already been defined"),ll=t}function CT(){return k(ll,"Reference.ts has not been loaded"),ll}function ST(t){return t.views.size===0}function Pd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),yp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(yp(o,e,n,r));return s}}function IT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=il(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=Td(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const u=zl(new rr(l,a,!1),new rr(r,i,!1));return new mT(e,u)}return o}function kT(t,e,n,r,i,s){const o=IT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vT(o,n),yT(o,n)}function TT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Nn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(vp(u,n,r)),_p(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(vp(a,n,r)),_p(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Nn(t)&&s.push(new(CT())(e._repo,e._path)),{removed:s,events:o}}function zv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zr(t,e){let n=null;for(const r of t.views.values())n=n||_T(r,e);return n}function Bv(t,e){if(e._queryParams.loadsAllData())return Bl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Wv(t,e){return Bv(t,e)!=null}function Nn(t){return Bl(t)!=null}function Bl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;function NT(t){k(!al,"__referenceConstructor has already been defined"),al=t}function RT(){return k(al,"Reference.ts has not been loaded"),al}let PT=1;class wp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=rT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vv(t,e,n,r,i){return G1(t.pendingWriteTree_,e,n,r,i),i?xs(t,new nr(Pv(),e,n)):[]}function Hn(t,e,n=!1){const r=K1(t.pendingWriteTree_,e);if(q1(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(H(),!0):Ve(r.children,o=>{s=s.set(new G(o),!0)}),xs(t,new rl(r.path,s,n))}else return[]}function Wl(t,e,n){return xs(t,new nr(Sd(),e,n))}function xT(t,e,n){const r=X.fromObject(n);return xs(t,new gs(Sd(),e,r))}function AT(t,e){return xs(t,new ms(Sd(),e))}function OT(t,e,n){const r=Ad(t,n);if(r){const i=Od(r),s=i.path,o=i.queryId,l=be(s,e),a=new ms(Id(o),l);return Dd(t,s,a)}else return[]}function Qu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Wv(o,e))){const a=TT(o,e,n,r);ST(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,m)=>Nn(m));if(h&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=MT(d);for(let _=0;_<m.length;++_){const y=m[_],E=y.query,p=jv(t,y);t.listenProvider_.startListening(Wi(E),ul(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(Wi(e),null):u.forEach(d=>{const m=t.queryToTagMap.get(Vl(d));t.listenProvider_.stopListening(Wi(d),m)}))}bT(t,u)}return l}function DT(t,e,n,r){const i=Ad(t,r);if(i!=null){const s=Od(i),o=s.path,l=s.queryId,a=be(o,e),u=new nr(Id(l),a,n);return Dd(t,o,u)}else return[]}function LT(t,e,n,r){const i=Ad(t,r);if(i){const s=Od(i),o=s.path,l=s.queryId,a=be(o,e),u=X.fromObject(n),h=new gs(Id(l),a,u);return Dd(t,o,h)}else return[]}function Ep(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const _=be(d,i);s=s||zr(m,_),o=o||Nn(m)});let l=t.syncPointTree_.get(i);l?(o=o||Nn(l),s=s||zr(l,H())):(l=new wT,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const y=zr(_,H());y&&(s=s.updateImmediateChild(m,y))}));const u=Wv(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Vl(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=FT();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const h=kd(t.pendingWriteTree_,i);let c=kT(l,e,n,h,s,a);if(!u&&!o&&!r){const d=Bv(l,e);c=c.concat(UT(t,e,d))}return c}function xd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=be(o,e),u=zr(l,a);if(u)return u});return Dv(i,e,s,n,!0)}function xs(t,e){return Hv(e,t.syncPointTree_,null,kd(t.pendingWriteTree_,H()))}function Hv(t,e,n,r){if(B(t.path))return $v(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=zr(i,H()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=Lv(r,o);s=s.concat(Hv(l,a,u,h))}return i&&(s=s.concat(Pd(i,t,r,n))),s}}function $v(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=zr(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Lv(r,o),h=t.operationForChild(o);h&&(s=s.concat($v(h,l,a,u)))}),i&&(s=s.concat(Pd(i,t,r,n))),s}function jv(t,e){const n=e.query,r=ul(t,n);return{hashFn:()=>(gT(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?OT(t,n._path,r):AT(t,n._path);{const s=Dk(i,n);return Qu(t,n,null,s)}}}}function ul(t,e){const n=Vl(e);return t.queryToTagMap.get(n)}function Vl(t){return t._path.toString()+"$"+t._queryIdentifier}function Ad(t,e){return t.tagToQueryMap.get(e)}function Od(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Dd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=kd(t.pendingWriteTree_,e);return Pd(r,n,i,null)}function MT(t){return t.fold((e,n,r)=>{if(n&&Nn(n))return[Bl(n)];{let i=[];return n&&(i=zv(n)),Ve(r,(s,o)=>{i=i.concat(o)}),i}})}function Wi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(RT())(t._repo,t._path):t}function bT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function FT(){return PT++}function UT(t,e,n){const r=e._path,i=ul(t,e),s=jv(t,n),o=t.listenProvider_.startListening(Wi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!Nn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!B(u)&&h&&Nn(h))return[Bl(h).query];{let d=[];return h&&(d=d.concat(zv(h).map(m=>m.query))),Ve(c,(m,_)=>{d=d.concat(_)}),d}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(Wi(h),ul(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ld(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new Md(this.syncTree_,n)}node(){return xd(this.syncTree_,this.path_)}}const zT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cp=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WT(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},WT=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},VT=function(t,e,n,r){return bd(e,new Md(n,t),r)},Gv=function(t,e,n){return bd(t,new Ld(e),n)};function bd(t,e,n){const r=t.getPriority().val(),i=Cp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Cp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(ie,(l,a)=>{const u=bd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ud(t,e){let n=e instanceof G?e:new G(e),r=t,i=U(n);for(;i!==null;){const s=Kr(r.node.children,i)||{children:{},childCount:0};r=new Fd(i,r,s),n=K(n),i=U(n)}return r}function li(t){return t.node.value}function Kv(t,e){t.node.value=e,Yu(t)}function qv(t){return t.node.childCount>0}function HT(t){return li(t)===void 0&&!qv(t)}function Hl(t,e){Ve(t.node.children,(n,r)=>{e(new Fd(n,t,r))})}function Qv(t,e,n,r){n&&e(t),Hl(t,i=>{Qv(i,e,!0)})}function $T(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function As(t){return new G(t.parent===null?t.name:As(t.parent)+"/"+t.name)}function Yu(t){t.parent!==null&&jT(t.parent,t.name,t)}function jT(t,e,n){const r=HT(n),i=Yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Yu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/[\[\].#$\/\u0000-\u001F\u007F]/,KT=/[\[\].#$\u0000-\u001F\u007F]/,Aa=10*1024*1024,Yv=function(t){return typeof t=="string"&&t.length!==0&&!GT.test(t)},Xv=function(t){return typeof t=="string"&&t.length!==0&&!KT.test(t)},qT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xv(t)},QT=function(t,e,n,r){zd(ed(t,"value"),e,n)},zd=function(t,e,n){const r=n instanceof G?new h1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(r)+" with contents = "+e.toString());if(X_(e))throw new Error(t+"contains "+e.toString()+" "+Fn(r));if(typeof e=="string"&&e.length>Aa/3&&Dl(e)>Aa)throw new Error(t+"contains a string greater than "+Aa+" utf8 bytes "+Fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ve(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Yv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f1(r,o),zd(t,l,r),p1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fn(r)+" in addition to actual children.")}},Jv=function(t,e,n,r){if(!Xv(n))throw new Error(ed(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jv(t,e,n)},XT=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},JT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qT(n))throw new Error(ed(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!vd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zv(t,e,n){Bd(t,n),ey(t,r=>vd(r,e))}function Kt(t,e,n){Bd(t,n),ey(t,r=>dt(r,e)||dt(e,r))}function ey(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(eN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fi&&Te("event: "+n.toString()),oi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="repo_interrupt",nN=25;class rN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nl(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iN(t,e,n){if(t.stats_=gd(t.repoInfo_),t.forceRestClient_||Fk())t.server_=new tl(t.repoInfo_,(r,i,s,o)=>{Sp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ip(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zt(t.repoInfo_,e,(r,i,s,o)=>{Sp(t,r,i,s,o)},r=>{Ip(t,r)},r=>{oN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Vk(t.repoInfo_,()=>new B1(t.stats_,t.server_)),t.infoData_=new M1,t.infoSyncTree_=new wp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Wl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Vd(t,"connected",!1),t.serverSyncTree_=new wp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Kt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function sN(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wd(t){return zT({timestamp:sN(t)})}function Sp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=$o(n,u=>ye(u));o=LT(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=DT(t.serverSyncTree_,s,a,i)}else if(r){const a=$o(n,u=>ye(u));o=xT(t.serverSyncTree_,s,a)}else{const a=ye(n);o=Wl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=$l(t,s)),Kt(t.eventQueue_,l,o)}function Ip(t,e){Vd(t,"connected",e),e===!1&&aN(t)}function oN(t,e){Ve(e,(n,r)=>{Vd(t,n,r)})}function Vd(t,e,n){const r=new G("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Wl(t.infoSyncTree_,r,i);Kt(t.eventQueue_,r,s)}function ty(t){return t.nextWriteId_++}function lN(t,e,n,r,i){Hd(t,"set",{path:e.toString(),value:n,priority:r});const s=Wd(t),o=ye(n,r),l=xd(t.serverSyncTree_,e),a=Gv(o,l,s),u=ty(t),h=Vv(t.serverSyncTree_,e,a,u,!0);Bd(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const _=d==="ok";_||We("set at "+e+" failed: "+d);const y=Hn(t.serverSyncTree_,u,!_);Kt(t.eventQueue_,e,y),hN(t,i,d,m)});const c=oy(t,e);$l(t,c),Kt(t.eventQueue_,c,[])}function aN(t){Hd(t,"onDisconnectEvents");const e=Wd(t),n=nl();Hu(t.onDisconnect_,H(),(i,s)=>{const o=VT(i,s,t.serverSyncTree_,e);Rv(n,i,o)});let r=[];Hu(n,H(),(i,s)=>{r=r.concat(Wl(t.serverSyncTree_,i,s));const o=oy(t,i);$l(t,o)}),t.onDisconnect_=nl(),Kt(t.eventQueue_,H(),r)}function uN(t,e,n){let r;U(e._path)===".info"?r=Ep(t.infoSyncTree_,e,n):r=Ep(t.serverSyncTree_,e,n),Zv(t.eventQueue_,e._path,r)}function cN(t,e,n){let r;U(e._path)===".info"?r=Qu(t.infoSyncTree_,e,n):r=Qu(t.serverSyncTree_,e,n),Zv(t.eventQueue_,e._path,r)}function dN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tN)}function Hd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function hN(t,e,n,r){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ny(t,e,n){return xd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function $d(t,e=t.transactionQueueTree_){if(e||jl(t,e),li(e)){const n=iy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fN(t,As(e),n)}else qv(e)&&Hl(e,n=>{$d(t,n)})}function fN(t,e,n){const r=n.map(u=>u.currentWriteId),i=ny(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];k(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=be(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Hd(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();jl(t,Ud(t.transactionQueueTree_,e)),$d(t,t.transactionQueueTree_),Kt(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)oi(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}$l(t,e)}},o)}function $l(t,e){const n=ry(t,e),r=As(n),i=iy(t,n);return pN(t,i,r),r}function pN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=be(n,a.path);let h=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(Hn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=nN)h=!0,c="maxretry",i=i.concat(Hn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=ny(t,a.path,o);a.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){zd("transaction failed: Data returned ",m,a.path);let _=ye(m);typeof m=="object"&&m!=null&&Yt(m,".priority")||(_=_.updatePriority(d.getPriority()));const E=a.currentWriteId,p=Wd(t),f=Gv(_,d,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=ty(t),o.splice(o.indexOf(E),1),i=i.concat(Vv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Hn(t.serverSyncTree_,E,!0))}else h=!0,c="nodata",i=i.concat(Hn(t.serverSyncTree_,a.currentWriteId,!0))}Kt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}jl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)oi(r[l]);$d(t,t.transactionQueueTree_)}function ry(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&li(r)===void 0;)r=Ud(r,n),e=K(e),n=U(e);return r}function iy(t,e){const n=[];return sy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sy(t,e,n){const r=li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hl(e,i=>{sy(t,i,n)})}function jl(t,e){const n=li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Kv(e,n.length>0?n:void 0)}Hl(e,r=>{jl(t,r)})}function oy(t,e){const n=As(ry(t,e)),r=Ud(t.transactionQueueTree_,e);return $T(r,i=>{Oa(t,i)}),Oa(t,r),Qv(r,i=>{Oa(t,i)}),n}function Oa(t,e){const n=li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Kv(e,void 0):n.length=s+1,Kt(t.eventQueue_,As(e),i);for(let o=0;o<r.length;o++)oi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const kp=function(t,e){const n=_N(t),r=n.namespace;n.domain==="firebase.com"&&Gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Rk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},_N=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=mN(t.substring(h,c)));const d=gN(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class yN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:vv(this._path)}get ref(){return new An(this._repo,this._path)}get _queryIdentifier(){const e=up(this._queryParams),n=pd(e);return n==="{}"?"default":n}get _queryObject(){return up(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof jd))return!1;const n=this._repo===e._repo,r=vd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+d1(this._path)}}class An extends jd{constructor(e,n){super(e,n,new Cd,!1)}get parent(){const e=wv(this._path);return e===null?null:new An(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Xu(this.ref,e);return new cl(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cl(i,Xu(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ly(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?Xu(t._root,e):t._root}function Xu(t,e){return t=He(t),U(t._path)===null?YT("child","path",e):Jv("child","path",e),new An(t._repo,ce(t._path,e))}function EN(t,e){t=He(t),XT("set",t._path),QT("set",e,t._path);const n=new Ol;return lN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Gd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new vN("value",this,new cl(e.snapshotNode,new An(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yN(this,e,n):null}matches(e){return e instanceof Gd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function CN(t,e,n,r,i){const s=new wN(n,void 0),o=new Gd(s);return uN(t._repo,t,o),()=>cN(t._repo,t,o)}function SN(t,e,n,r){return CN(t,"value",e)}ET(An);NT(An);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="FIREBASE_DATABASE_EMULATOR_HOST",Ju={};let kN=!1;function TN(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ar(s);t.repoInfo_=new uv(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function NN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kp(s,i),l=o.repoInfo,a;typeof process<"u"&&jf&&(a=jf[IN]),a?(s=`http://${a}?ns=${l.namespace}`,o=kp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new zk(t.name,t.options,e);JT("Invalid Firebase Database URL",o),B(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PN(l,t,u,new Uk(t,n));return new xN(h,t)}function RN(t,e){const n=Ju[e];(!n||n[t.key]!==t)&&Gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dN(t),delete n[t.key]}function PN(t,e,n,r){let i=Ju[e.name];i||(i={},Ju[e.name]=i);let s=i[t.toURLString()];return s&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new rN(t,kN,n,r),i[t.toURLString()]=s,s}class xN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new An(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function AN(t=rd(),e){const n=Ll(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=s_("database");r&&ON(n,...r)}return n}function ON(t,e,n,r={}){t=He(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Jn(r,s.repoInfo_.emulatorOptions))return;Gt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new _o(_o.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:a_(r.mockUserToken,t.app.options.projectId);o=new _o(l)}ar(e)&&(Xc(e),Jc("Database",!0)),TN(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t){Ck(ur),Zn(new kn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return NN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),It(Gf,Kf,t),It(Gf,Kf,"esm2020")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="firebasestorage.googleapis.com",LN="storageBucket",MN=2*60*1e3,bN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Qt{constructor(e,n,r=0){super(Da(e),`Firebase Storage: ${n} (${Da(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Da(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nt||(Nt={}));function Da(t){return"storage/"+t}function FN(){const t="An unknown error occurred, please check the error payload for server response.";return new Rt(Nt.UNKNOWN,t)}function UN(){return new Rt(Nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zN(){return new Rt(Nt.CANCELED,"User canceled the upload/download.")}function BN(t){return new Rt(Nt.INVALID_URL,"Invalid URL '"+t+"'.")}function WN(t){return new Rt(Nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Tp(t){return new Rt(Nt.INVALID_ARGUMENT,t)}function uy(){return new Rt(Nt.APP_DELETED,"The Firebase app was deleted.")}function VN(t){return new Rt(Nt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(r.path==="")return r;throw WN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const h="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${c}/${h}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},y=n===ay?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${y}/${i}/${E}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:m,indices:_,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const N=g[w],x=N.regex.exec(e);if(x){const A=x[N.indices.bucket];let O=x[N.indices.path];O||(O=""),r=new ft(A,O),N.postModify(r);break}}if(r==null)throw BN(e);return r}}class HN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...E){u||(u=!0,e.apply(null,E))}function c(E){i=setTimeout(()=>{i=null,t(m,a())},E)}function d(){s&&clearTimeout(s)}function m(E,...p){if(u){d();return}if(E){d(),h.call(null,E,...p);return}if(a()||o){d(),h.call(null,E,...p);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,c(g)}let _=!1;function y(E){_||(_=!0,d(),!u&&(i!==null?(E||(l=2),clearTimeout(i),c(0)):E||(l=1)))}return c(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function jN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){return t!==void 0}function Np(t,e,n,r){if(r<e)throw Tp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Tp(`Invalid value for '${t}'. Expected ${n} or less.`)}function KN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var dl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(dl||(dl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i,s,o,l,a,u,h,c,d=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=c,this.retry=d,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Zs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===dl.NO_ERROR,a=s.getStatus();if(!l||qN(a,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===dl.ABORT;r(!1,new Zs(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Zs(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());GN(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=FN();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?uy():zN();o(a)}else{const a=UN();o(a)}};this.canceled_?n(!1,new Zs(!1,null,!0)):this.backoffId_=$N(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zs{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eR(t,e,n,r,i,s,o=!0,l=!1){const a=KN(t.urlParams),u=t.url+a,h=Object.assign({},t.headers);return JN(h,e),YN(h,n),XN(h,s),ZN(h,r),new QN(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hl(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nR(this._location.path)}get storage(){return this._service}get parent(){const e=tR(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new hl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VN(e)}}function Rp(t,e){const n=e==null?void 0:e[LN];return n==null?null:ft.makeFromBucketSpec(n,t)}function rR(t,e,n,r={}){t.host=`${e}:${n}`;const i=ar(e);i&&(Xc(`https://${t.host}/b`),Jc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:a_(s,t.app.options.projectId))}class iR{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=ay,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MN,this._maxUploadRetryTime=bN,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=Rp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=Rp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hl(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new HN(uy());{const o=eR(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Pp="@firebase/storage",xp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="storage";function sR(t=rd(),e){t=He(t);const r=Ll(t,cy).getImmediate({identifier:e}),i=s_("storage");return i&&oR(r,...i),r}function oR(t,e,n,r={}){rR(t,e,n,r)}function lR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new iR(n,r,i,e,ur)}function aR(){Zn(new kn(cy,lR,"PUBLIC").setMultipleInstances(!0)),It(Pp,xp,""),It(Pp,xp,"esm2020")}aR();const uR={apiKey:"AIzaSyBSLVB1mcTx3fLA9DLul5qMP1ZBBiH8K44",authDomain:"homeworkmana.firebaseapp.com",projectId:"homeworkmana",databaseURL:"https://homeworkmana-default-rtdb.asia-southeast1.firebasedatabase.app",storageBucket:"homeworkmana.firebasestorage.app",messagingSenderId:"68560768642",appId:"1:68560768642:web:acde1badb9786caba86e9b",measurementId:"G-WM5KHFKD19"},Kd=f_(uR),Pt=vk(Kd),Cn=AN(Kd);sR(Kd);const Vi=(t,e)=>EN(ly(Cn,t),e),fl=(t,e)=>SN(ly(Cn,t),n=>{e(n.exists()?n.val():null)}),cR=["tantaitruong2611@gmail.com"],dy=t=>(t||"").trim().toLowerCase(),dR=new Set(cR.map(dy).filter(Boolean)),hy=T.createContext(null),hR=({children:t})=>{const[e,n]=T.useState(null),[r,i]=T.useState(!1),[s,o]=T.useState(!0),[l,a]=T.useState(null),u=T.useRef(null);T.useEffect(()=>{if(!Pt){o(!1);return}const m=oI(Pt,async _=>{if(n(_),a(null),u.current&&(u.current(),u.current=null),_&&Cn){if(!dR.has(dy(_.email))){i(!1),a(new Error("Tài khoản Google này không nằm trong whitelist.")),o(!1);try{await Mf(Pt)}catch(E){console.warn("Không thể đăng xuất sau khi từ chối quyền",E)}return}try{await Vi(`/admins/${_.uid}`,{email:_.email,updatedAt:Date.now()})}catch(E){console.warn("Không ghi được admin flag",E)}u.current=fl(`/admins/${_.uid}`,E=>{i(!!E),o(!1)})}else i(!1),o(!1)},_=>{console.error("Auth state error",_),a(_),n(null),i(!1),o(!1)});return()=>{m&&m(),u.current&&(u.current(),u.current=null)}},[]);const h=async()=>{if(!Pt)throw new Error("Firebase Auth chưa được cấu hình");const m=new Ot;m.setCustomParameters({prompt:"select_account"});try{o(!0),await TI(Pt,m)}catch(_){if(_.code==="auth/popup-closed-by-user"||_.code==="auth/popup-blocked"){await OI(Pt,m);return}throw o(!1),a(_),_}},c=async()=>{if(Pt)try{await Mf(Pt)}finally{i(!1),n(null)}},d=T.useMemo(()=>({user:e,isAdmin:r,loading:s,error:l,signInWithGoogle:h,logout:c}),[e,r,s,l]);return v.createElement(hy.Provider,{value:d},t)},qd=()=>{const t=T.useContext(hy);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},fy=()=>{const{isAdmin:t,user:e,loading:n,error:r,signInWithGoogle:i,logout:s}=qd(),[o,l]=v.useState(!1),a=async()=>{if(!Pt)return alert("Firebase Auth chưa được cấu hình");try{l(!0),await i()}catch(u){console.error("Firebase sign-in failed",u),alert(u.message||"Google sign-in thất bại")}finally{l(!1)}};return t?v.createElement("div",{className:"flex items-center gap-2"},v.createElement("div",{className:"text-sm"},"Admin: ",v.createElement("strong",null,e==null?void 0:e.email)),v.createElement("button",{onClick:s,className:"px-3 py-1 rounded bg-red-500 text-white"},"Admin Logout")):v.createElement("div",{className:"flex flex-col items-center sm:items-end"},v.createElement("div",{className:"flex flex-col sm:flex-row items-center gap-2"},v.createElement("button",{onClick:a,disabled:n||o,className:"px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-60"},o||n?"Đang đăng nhập...":"Sign in with Google"),v.createElement("div",{className:"text-xs text-gray-500 mt-2 sm:mt-0 sm:ml-3"},v.createElement("span",{className:"hidden sm:inline"},"Chỉ giáo viên whitelist mới có quyền."))),r&&v.createElement("p",{className:"text-xs text-red-500 mt-2"},r.message))},fR="/assets/littlebuddies-DslTpQHy.png",La=[{id:"movers-1",name:"Movers 1",mascot:"🦊",colorClass:"bg-mint"},{id:"movers-2",name:"Movers 2",mascot:"🐸",colorClass:"bg-sky-200"},{id:"flyers-1",name:"Flyers 1",mascot:"🦉",colorClass:"bg-yellow-200"},{id:"flyers-2",name:"Flyers 2",mascot:"🐼",colorClass:"bg-rose-200"},{id:"pre-flyers",name:"Pre-Flyers",mascot:"🐰",colorClass:"bg-violet-200"}];function pR(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}const mR=()=>{const t=Yg(),{isAdmin:e}=qd(),[n,r]=T.useState(()=>Array.isArray(La)?La:[]),[i,s]=T.useState(!0),[o,l]=T.useState(null);T.useEffect(()=>{if(!Cn){r(La),l("Firebase RTDB chưa được cấu hình. Đang dùng dữ liệu mẫu."),s(!1);return}const u=(c,d={})=>({id:c,name:d.name||c||"Untitled class",mascot:d.mascot||"🏫",colorClass:d.colorClass||"bg-slate-100",createdAt:d.createdAt||0}),h=fl("/classes",c=>{if(!c)r([]);else{const d=Object.entries(c).filter(([m,_])=>!!_).map(([m,_])=>u(m,_)).sort((m,_)=>(_.createdAt||0)-(m.createdAt||0));r(d)}s(!1)});return()=>{h&&h()}},[]);const a=async()=>{if(!Cn)return alert("RTDB chưa được cấu hình. Không thể tạo lớp mới.");const u=prompt("Class name (e.g. Movers 3)");if(!u)return;let h=prompt("Mascot emoji (e.g. 🦊) — leave blank for random")||"";if(!h){const _=["🦊","🐸","🦉","🐼","🐰","🦁","🐨","🐵","🐶","🐱","🐯","🦄","🐷","🐻","🐝"],y=new Set((n||[]).map(p=>p.mascot)),E=_.filter(p=>!y.has(p));h=E.length?E[Math.floor(Math.random()*E.length)]:_[Math.floor(Math.random()*_.length)]}const c=pR(u)||`class-${Date.now()}`,m={id:c,name:u,mascot:h,colorClass:"bg-mint",createdAt:Date.now()};try{await Vi(`/classes/${c}`,m)}catch(_){console.error("Failed to create class",_),alert("Không thể tạo lớp. Vui lòng thử lại."),l("Không thể tạo lớp mới.")}};return v.createElement("div",{className:"min-h-screen px-6 py-12"},v.createElement("header",{className:"text-center mb-8 relative"},v.createElement("div",{className:"absolute right-6 top-0"},v.createElement(fy,null)),v.createElement("div",{className:"mx-auto w-20 h-20"},v.createElement("img",{src:fR,alt:"Logo",className:"w-full h-full object-contain"})),v.createElement("h1",{className:"text-4xl font-extrabold"},"Choose Your Class"),v.createElement("p",{className:"text-gray-600 mt-2"},"Tap your child's class to see weekly homework")),v.createElement("section",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"},i&&v.createElement("div",{className:"col-span-full text-center text-gray-500"},"Đang tải lớp học..."),o&&v.createElement("div",{className:"col-span-full text-center text-red-500"},o),(Array.isArray(n)?n:[]).map(u=>v.createElement("div",{key:u.id,className:"relative"},v.createElement(U0,{name:u.name,mascot:u.mascot,colorClass:u.colorClass,onClick:()=>t(`/class/${u.id}`)}),e&&v.createElement("button",{onClick:()=>{if(confirm(`Delete class ${u.name}?`)){if(!Cn){alert("RTDB chưa được cấu hình. Không thể xóa lớp.");return}Vi(`/classes/${u.id}`,null),Vi(`/homework/${u.id}`,null)}},className:"absolute top-2 right-2 bg-red-400 text-white rounded-full p-1 shadow",title:"Delete class"},"✕"))),e&&v.createElement("div",{className:"flex items-center justify-center"},v.createElement("button",{onClick:a,className:"px-4 py-6 rounded-2xl bg-green-400 text-white"},"+ Add Class"))),v.createElement("footer",{className:"text-center mt-8 text-sm text-gray-500"},"📌 Each class has a fixed link — bookmark it for easy access!"))},gR=({title:t,subtitle:e,isAdmin:n=!1,onEditSubtitle:r,children:i})=>v.createElement("div",{className:"relative"},v.createElement("div",{className:"wood-frame p-3 rounded-2xl shadow-playful"},v.createElement("div",{className:"chalkboard-texture rounded-xl p-6 min-h-[220px]"},t&&v.createElement("div",{className:"flex items-center justify-between mb-4"},v.createElement("h2",{className:"text-2xl font-bold"},"📚 ",t),v.createElement("div",{className:"flex items-center gap-2"},e&&v.createElement("div",{className:"text-sm text-chalk/80"},e),n&&r&&v.createElement("button",{onClick:r,className:"px-3 py-1 rounded bg-amber-400 text-foreground text-sm"},"Edit"))),i)),v.createElement("div",{className:"wood-frame h-4 mx-4 -mt-1 rounded-b-lg flex items-center justify-center gap-2 px-4"},v.createElement("div",{className:"w-8 h-1.5 bg-chalk/80 rounded-full"}),v.createElement("div",{className:"w-6 h-1.5 bg-secondary rounded-full"}),v.createElement("div",{className:"w-5 h-1.5 bg-coral rounded-full"}))),_R=({title:t,children:e})=>v.createElement("div",{className:"relative mt-4"},v.createElement("div",{className:"wood-frame p-2 rounded-xl shadow-playful"},v.createElement("div",{className:"cork-texture rounded-lg p-4 min-h-[120px]"},t&&v.createElement("div",{className:"flex items-center gap-2 mb-2"},v.createElement("div",{className:"w-3 h-3 rounded-full bg-red-500"})," ",v.createElement("h3",{className:"font-bold"},t)),e))),vR=t=>{switch(t){case"quiz":return"📘";case"audio":return"🎧";case"worksheet":return"📝";case"link":return"🔗";case"image":return"🖼️";default:return"📚"}},yR=({item:t,onEdit:e,onRemove:n,isAdmin:r=!1})=>v.createElement("div",{className:"homework-item flex items-center justify-between transform transition duration-150 hover:scale-[1.02] hover:shadow-lg"},v.createElement("div",{className:"flex items-center gap-4"},v.createElement("a",{href:t.link||"#",target:"_blank",rel:"noreferrer",className:"w-12 h-12 rounded-xl bg-chalk/20 flex items-center justify-center text-2xl hover:opacity-95 transform transition hover:scale-110",title:`Open ${t.title}`},vR(t.type)),v.createElement("div",null,v.createElement("div",{className:"font-semibold text-white"},t.title),v.createElement("div",{className:"text-sm text-white/80"},t.type))),v.createElement("div",{className:"flex items-center gap-2"},v.createElement("a",{href:t.link,target:"_blank",rel:"noreferrer",className:"px-3 py-1 rounded bg-white/10 text-white hover:bg-white/20 transition"},"Open"),r&&v.createElement(v.Fragment,null,v.createElement("button",{onClick:e,className:"px-3 py-1 rounded bg-yellow-400 hover:brightness-95 transition"},"Edit"),v.createElement("button",{onClick:n,className:"px-3 py-1 rounded bg-red-400 text-white hover:brightness-90 transition"},"Remove")))),wR=({emoji:t,name:e,points:n,photo:r,isAdmin:i=!1,onEditPoints:s,onEditPhoto:o,onEditName:l})=>v.createElement("div",{className:"flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 relative transform transition hover:scale-105 hover:shadow-lg"},v.createElement("div",{className:"w-16 h-16 rounded-full overflow-hidden bg-white/10 flex items-center justify-center text-3xl transition-transform duration-200 hover:scale-110"},r?v.createElement("img",{src:r,alt:e,className:"w-full h-full object-cover"}):v.createElement("span",{className:"select-none"},t)),v.createElement("div",{className:"text-sm font-semibold transition-colors duration-150"},e),n!==void 0&&v.createElement("div",{className:"text-xs"},"⭐ ",n),i&&v.createElement("div",{className:"absolute -right-1 -top-1 flex flex-col gap-1"},v.createElement("button",{onClick:s,className:"bg-amber-400 rounded-full p-1 text-xs shadow hover:scale-110 transition",title:"Edit points"},"✎"),v.createElement("button",{onClick:l,className:"bg-green-400 rounded-full p-1 text-xs shadow hover:scale-110 transition",title:"Edit name"},"✏️"),v.createElement("button",{onClick:o,className:"bg-blue-400 rounded-full p-1 text-xs shadow hover:scale-110 transition",title:"Edit photo"},"📷"))),ER=({open:t,title:e,children:n,onClose:r})=>t?v.createElement("div",{className:"fixed inset-0 z-50 flex items-center justify-center"},v.createElement("div",{className:"absolute inset-0 bg-black/50",onClick:r}),v.createElement("div",{className:"bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-4 z-10"},v.createElement("div",{className:"flex items-center justify-between mb-3"},v.createElement("h3",{className:"text-lg font-semibold"},e),v.createElement("button",{onClick:r,className:"text-gray-600 hover:text-gray-800"},"✕")),v.createElement("div",null,n))):null,pr=()=>({weekRange:"This week",items:[],students:[],announcement:"",updatedAt:Date.now()}),Ma=(t="Student")=>`https://ui-avatars.com/api/?name=${encodeURIComponent(t)}&background=random&color=fff&bold=true&size=128`,CR=()=>{const{classId:t}=m0(),e=Yg(),n={name:"Unknown",mascot:"🏫",colorClass:"bg-white"},[r,i]=T.useState(n),[s,o]=T.useState(()=>pr()),[l,a]=T.useState(!0),[u,h]=T.useState(null);T.useEffect(()=>{if(!Cn){i(n),o(pr()),a(!1),h("RTDB chưa được cấu hình. Đang hiển thị dữ liệu mẫu.");return}const C=fl(`/classes/${t}`,M=>{i(M||n)}),I=fl(`/homework/${t}`,M=>{o(M?{...pr(),...M}:pr()),a(!1)});return()=>{C&&C(),I&&I()}},[t]);const c=C=>{Cn&&Vi(`/homework/${t}`,C).catch(I=>{console.error("Save homework failed",I),h("Không thể lưu dữ liệu. Kiểm tra kết nối mạng.")})},d=C=>{o(I=>{const M={...pr(),...I},b=typeof C=="function"?C(M):C,ae={...pr(),...b,updatedAt:Date.now()};return c(ae),ae})},m=()=>{const C=prompt("Homework title (e.g. Quizizz - Listening)");if(!C)return;const I=prompt("Type (quiz/audio/worksheet/link/image)","quiz")||"quiz",M=prompt("Link (URL)")||"#";d(b=>({...b,items:[...b.items||[],{title:C,type:I,link:M}]}))},_=()=>{const C=prompt("Edit week range",s.weekRange||"")||s.weekRange;d(I=>({...I,weekRange:C}))},y=C=>{const I=s.items[C],M=prompt("Edit title",I.title)||I.title,b=prompt("Type",I.type)||I.type,ae=prompt("Link",I.link)||I.link;d(se=>({...se,items:(se.items||[]).map((Ce,Re)=>Re===C?{title:M,type:b,link:ae}:Ce)}))},E=C=>{confirm("Remove this homework?")&&d(I=>({...I,items:(I.items||[]).filter((M,b)=>b!==C)}))},p=()=>{g(!0)},[f,g]=v.useState(!1),[w,N]=v.useState(""),[x,A]=v.useState(""),[O,Q]=v.useState(null),F=T.useMemo(()=>O||(w?Ma(w.trim()||"Student"):null),[w,O]),$e=()=>{g(!1),N(""),A(""),Q(null)},On=C=>{if(!C){Q(null);return}const I=new FileReader;I.onload=M=>{Q(M.target.result)},I.readAsDataURL(C)},Dn=async()=>{const C=(w||"").trim();if(!C)return alert("Please enter a student name");const I=O||Ma(C);d(M=>({...M,students:[...M.students||[],{name:C,emoji:x||"🧑‍🎓",points:0,photo:I}]})),$e()},Os=()=>{const C=prompt("Announcement text",s.announcement||"")||"";d(I=>({...I,announcement:C}))},{isAdmin:je}=qd(),ai=C=>{const I=s.students[C],M=prompt("Set points for "+I.name,String(I.points||0));if(M===null)return;const b=parseInt(M||"0",10)||0;d(ae=>{const se=(ae.students||[]).map((Ce,Re)=>Re===C?{...Ce,points:b}:Ce);return{...ae,students:se}})},ui=C=>{const I=s.students[C],M=prompt("Edit name for "+I.name,I.name);M!==null&&d(b=>{const ae=(b.students||[]).map((se,Ce)=>Ce===C?{...se,name:M}:se);return{...b,students:ae}})},R=C=>{const I=s.students[C];if(confirm("OK để tải ảnh từ máy, Cancel để dùng avatar tự động")){const b=document.createElement("input");b.type="file",b.accept="image/*",b.onchange=ae=>{const se=ae.target.files&&ae.target.files[0];if(!se)return;const Ce=new FileReader;Ce.onload=Re=>{const dr=Re.target.result;d(Qd=>({...Qd,students:(Qd.students||[]).map((Yd,py)=>py===C?{...Yd,photo:dr}:Yd)}))},Ce.readAsDataURL(se)},b.click()}else{const b=prompt("Nhập tên/seed để tạo avatar mới",I.name||"Student");if(b===null)return;const ae=Ma(b.trim()||I.name||"Student");d(se=>({...se,students:(se.students||[]).map((Ce,Re)=>Re===C?{...Ce,photo:ae}:Ce)}))}};return v.createElement("div",{className:"min-h-screen"},v.createElement("header",{className:`${r.colorClass} py-6 px-6 shadow-md`},v.createElement("div",{className:"flex items-center gap-4"},v.createElement("button",{onClick:()=>e("/"),className:"px-3 py-1"},"← All Classes"),v.createElement("div",{className:"text-5xl"},r.mascot),v.createElement("h1",{className:"text-3xl font-bold flex-1"},r.name),v.createElement("div",{className:"ml-auto"},v.createElement(fy,null)))),v.createElement("main",{className:"container mx-auto px-4 py-8"},l&&v.createElement("div",{className:"text-center text-gray-500"},"Đang tải dữ liệu lớp..."),u&&v.createElement("div",{className:"text-center text-red-500 mb-4"},u),v.createElement("div",{className:"grid lg:grid-cols-3 gap-8"},v.createElement("div",{className:"lg:col-span-2"},v.createElement(gR,{title:"This Week's Homework",subtitle:s.weekRange,isAdmin:je,onEditSubtitle:_},v.createElement("div",{className:"space-y-3"},(s.items||[]).map((C,I)=>v.createElement(yR,{key:I,item:C,isAdmin:je,onEdit:je?()=>y(I):void 0,onRemove:je?()=>E(I):void 0})),s.announcement&&v.createElement("div",{className:"mt-4 p-2 bg-white/10 rounded text-sm truncate",title:s.announcement},"📣 ",s.announcement),je&&v.createElement("div",{className:"flex gap-2 mt-4"},v.createElement("button",{onClick:m,className:"px-4 py-2 rounded bg-green-400 text-white"},"+ Add Homework"),v.createElement("button",{onClick:Os,className:"px-4 py-2 rounded bg-amber-400"},"Edit Announcement"))))),v.createElement("aside",null,v.createElement(_R,{title:"Class Stars ⭐"},v.createElement("div",{className:"grid grid-cols-2 gap-3"},(s.students||[]).map((C,I)=>v.createElement(wR,{key:I,emoji:C.emoji,name:C.name,points:C.points,photo:C.photo,isAdmin:je,onEditPoints:je?()=>ai(I):void 0,onEditName:je?()=>ui(I):void 0,onEditPhoto:je?()=>R(I):void 0})))),v.createElement("div",{className:"mt-4 bg-white/10 p-4 rounded"},v.createElement("h3",{className:"font-bold mb-2"},"Quick Tips"),v.createElement("ul",{className:"text-sm"},v.createElement("li",null,"• Complete homework before next class"),v.createElement("li",null,"• Click items to open resources"),v.createElement("li",null,"• Bookmark this page for easy access")),v.createElement("div",{className:"mt-4 flex gap-2"},je&&v.createElement(v.Fragment,null,v.createElement("button",{onClick:p,className:"px-3 py-2 rounded bg-blue-500 text-white shadow-lg hover:bg-blue-600"},"+ Add Student")),!je&&v.createElement("div",{className:"text-sm text-gray-500"},"Log in as admin to manage class")))))),v.createElement(ER,{open:f,title:"Add Student",onClose:()=>g(!1)},v.createElement("div",{className:"space-y-3"},v.createElement("div",null,v.createElement("label",{className:"block text-sm font-medium"},"Name"),v.createElement("input",{value:w,onChange:C=>N(C.target.value),className:"w-full mt-1 p-2 border rounded",placeholder:"Student name"})),v.createElement("div",null,v.createElement("label",{className:"block text-sm font-medium"},"Emoji (optional)"),v.createElement("input",{value:x,onChange:C=>A(C.target.value),className:"w-full mt-1 p-2 border rounded",placeholder:"e.g. 🧑‍🎓"})),v.createElement("div",null,v.createElement("label",{className:"block text-sm font-medium"},"Photo (optional)"),v.createElement("input",{type:"file",accept:"image/*",onChange:C=>On(C.target.files&&C.target.files[0]),className:"mt-1"}),v.createElement("p",{className:"text-xs text-gray-500"},"Nếu không chọn ảnh, hệ thống sẽ tạo avatar tự động."),F?v.createElement("div",{className:"mt-2"},v.createElement("img",{src:F,alt:"preview",className:"w-28 h-28 rounded-full object-cover border"})):v.createElement("div",{className:"mt-2 text-xs text-gray-400"},"Nhập tên để xem avatar.")),v.createElement("div",{className:"flex justify-end gap-2"},v.createElement("button",{onClick:()=>g(!1),className:"px-4 py-2 rounded border"},"Cancel"),v.createElement("button",{onClick:Dn,className:"px-4 py-2 rounded bg-green-500 text-white"},"Add Student")))))};function SR(){return v.createElement(A0,null,v.createElement(Pu,{path:"/",element:v.createElement(mR,null)}),v.createElement(Pu,{path:"/class/:classId",element:v.createElement(CR,null)}))}const IR="746431102984-dcvs2ct686p5cahu4g32h3rca4anl9eu.apps.googleusercontent.com";Wg(document.getElementById("root")).render(v.createElement(v.StrictMode,null,v.createElement(F0,{clientId:IR},v.createElement(hR,null,v.createElement(L0,null,v.createElement(SR,null))))));
