function gI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b_={exports:{}},yu={},D_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),_I=Symbol.for("react.portal"),vI=Symbol.for("react.fragment"),wI=Symbol.for("react.strict_mode"),EI=Symbol.for("react.profiler"),TI=Symbol.for("react.provider"),II=Symbol.for("react.context"),xI=Symbol.for("react.forward_ref"),SI=Symbol.for("react.suspense"),AI=Symbol.for("react.memo"),RI=Symbol.for("react.lazy"),Nm=Symbol.iterator;function CI(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var V_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,L_={};function fs(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||V_}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M_(){}M_.prototype=fs.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||V_}var Md=Ld.prototype=new M_;Md.constructor=Ld;O_(Md,fs.prototype);Md.isPureReactComponent=!0;var bm=Array.isArray,j_=Object.prototype.hasOwnProperty,jd={current:null},F_={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j_.call(e,r)&&!F_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Jo,type:t,key:s,ref:o,props:i,_owner:jd.current}}function kI(t,e){return{$$typeof:Jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jo}function PI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dm=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PI(""+t.key):e.toString(36)}function nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jo:case _I:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ac(o,0):r,bm(i)?(n="",t!=null&&(n=t.replace(Dm,"$&/")+"/"),nl(i,e,n,"",function(c){return c})):i!=null&&(Fd(i)&&(i=kI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ac(s,l);o+=nl(s,e,n,u,i)}else if(u=CI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ac(s,l++),o+=nl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var r=[],i=0;return nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},rl={transition:null},bI={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:rl,ReactCurrentOwner:jd};function z_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=fs;ee.Fragment=vI;ee.Profiler=EI;ee.PureComponent=Ld;ee.StrictMode=wI;ee.Suspense=SI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bI;ee.act=z_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=O_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)j_.call(e,u)&&!F_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Jo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:II,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TI,_context:t},t.Consumer=t};ee.createElement=U_;ee.createFactory=function(t){var e=U_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:xI,render:t}};ee.isValidElement=Fd;ee.lazy=function(t){return{$$typeof:RI,_payload:{_status:-1,_result:t},_init:NI}};ee.memo=function(t,e){return{$$typeof:AI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};ee.unstable_act=z_;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";D_.exports=ee;var V=D_.exports;const DI=yI(V),VI=gI({__proto__:null,default:DI},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OI=V,LI=Symbol.for("react.element"),MI=Symbol.for("react.fragment"),jI=Object.prototype.hasOwnProperty,FI=OI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UI={key:!0,ref:!0,__self:!0,__source:!0};function B_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jI.call(e,r)&&!UI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LI,type:t,key:s,ref:o,props:i,_owner:FI.current}}yu.Fragment=MI;yu.jsx=B_;yu.jsxs=B_;b_.exports=yu;var m=b_.exports,$_={exports:{}},St={},W_={exports:{}},H_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var X=$.length;$.push(Q);e:for(;0<X;){var me=X-1>>>1,xe=$[me];if(0<i(xe,Q))$[me]=Q,$[X]=xe,X=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],X=$.pop();if(X!==Q){$[0]=X;e:for(var me=0,xe=$.length,Lr=xe>>>1;me<Lr;){var Rt=2*(me+1)-1,Mr=$[Rt],Ot=Rt+1,On=$[Ot];if(0>i(Mr,X))Ot<xe&&0>i(On,Mr)?($[me]=On,$[Ot]=X,me=Ot):($[me]=Mr,$[Rt]=X,me=Rt);else if(Ot<xe&&0>i(On,X))$[me]=On,$[Ot]=X,me=Ot;else break e}}return Q}function i($,Q){var X=$.sortIndex-Q.sortIndex;return X!==0?X:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,g=3,I=!1,S=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O($){if(k=!1,R($),!S)if(n(u)!==null)S=!0,Ss(j);else{var Q=n(c);Q!==null&&As(O,Q.startTime-$)}}function j($,Q){S=!1,k&&(k=!1,w(y),y=-1),I=!0;var X=g;try{for(R(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!C());){var me=p.callback;if(typeof me=="function"){p.callback=null,g=p.priorityLevel;var xe=me(p.expirationTime<=Q);Q=t.unstable_now(),typeof xe=="function"?p.callback=xe:p===n(u)&&r(u),R(Q)}else r(u);p=n(u)}if(p!==null)var Lr=!0;else{var Rt=n(c);Rt!==null&&As(O,Rt.startTime-Q),Lr=!1}return Lr}finally{p=null,g=X,I=!1}}var U=!1,E=null,y=-1,T=5,A=-1;function C(){return!(t.unstable_now()-A<T)}function N(){if(E!==null){var $=t.unstable_now();A=$;var Q=!0;try{Q=E(!0,$)}finally{Q?x():(U=!1,E=null)}}else U=!1}var x;if(typeof v=="function")x=function(){v(N)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,gn=Be.port2;Be.port1.onmessage=N,x=function(){gn.postMessage(null)}}else x=function(){P(N,0)};function Ss($){E=$,U||(U=!0,x())}function As($,Q){y=P(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||I||(S=!0,Ss(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return $()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var X=g;g=$;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function($,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,$){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=X+xe,$={id:d++,callback:Q,priorityLevel:$,startTime:X,expirationTime:xe,sortIndex:-1},X>me?($.sortIndex=X,e(c,$),n(u)===null&&$===n(c)&&(k?(w(y),y=-1):k=!0,As(O,X-me))):($.sortIndex=xe,e(u,$),S||I||(S=!0,Ss(j))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Q=g;return function(){var X=g;g=Q;try{return $.apply(this,arguments)}finally{g=X}}}})(H_);W_.exports=H_;var zI=W_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=V,xt=zI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q_=new Set,Io={};function mi(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Io[t]=e,t=0;t<e.length;t++)q_.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,$I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vm={},Om={};function WI(t){return ph.call(Om,t)?!0:ph.call(Vm,t)?!1:$I.test(t)?Om[t]=!0:(Vm[t]=!0,!1)}function HI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qI(t,e,n,r){if(e===null||typeof e>"u"||HI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,zd);Ke[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,zd);Ke[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,zd);Ke[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qI(e,n,i,r)&&(n=null),r||i===null?WI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),G_=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Q_=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Rc;function Xs(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Cc=!1;function kc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function KI(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function _h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case ki:return"Portal";case mh:return"Profiler";case $d:return"StrictMode";case gh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G_:return(t.displayName||"Context")+".Consumer";case K_:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:_h(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return _h(t(e))}catch{}}return null}function GI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _h(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QI(t){var e=Y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=QI(t))}function J_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X_(t,e){e=e.checked,e!=null&&Bd(t,"checked",e,!1)}function wh(t,e){X_(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eh(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Zs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Z_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YI=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){YI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xh(t,e){if(e){if(JI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,Wi=null,Hi=null;function zm(t){if(t=ea(t)){if(typeof Rh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Tu(e),Rh(t.stateNode,t.type,e))}}function iv(t){Wi?Hi?Hi.push(t):Hi=[t]:Wi=t}function sv(){if(Wi){var t=Wi,e=Hi;if(Hi=Wi=null,zm(t),e)for(t=0;t<e.length;t++)zm(e[t])}}function ov(t,e){return t(e)}function av(){}var Pc=!1;function lv(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return ov(t,e,n)}finally{Pc=!1,(Wi!==null||Hi!==null)&&(av(),sv())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var r=Tu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ch=!1;if(Sn)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Ch=!1}function XI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var uo=!1,Sl=null,Al=!1,kh=null,ZI={onError:function(t){uo=!0,Sl=t}};function ex(t,e,n,r,i,s,o,l,u){uo=!1,Sl=null,XI.apply(ZI,arguments)}function tx(t,e,n,r,i,s,o,l,u){if(ex.apply(this,arguments),uo){if(uo){var c=Sl;uo=!1,Sl=null}else throw Error(F(198));Al||(Al=!0,kh=c)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(t){if(gi(t)!==t)throw Error(F(188))}function nx(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bm(i),t;if(s===r)return Bm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function cv(t){return t=nx(t),t!==null?hv(t):null}function hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hv(t);if(e!==null)return e;t=t.sibling}return null}var dv=xt.unstable_scheduleCallback,$m=xt.unstable_cancelCallback,rx=xt.unstable_shouldYield,ix=xt.unstable_requestPaint,Ae=xt.unstable_now,sx=xt.unstable_getCurrentPriorityLevel,Kd=xt.unstable_ImmediatePriority,fv=xt.unstable_UserBlockingPriority,Rl=xt.unstable_NormalPriority,ox=xt.unstable_LowPriority,pv=xt.unstable_IdlePriority,_u=null,tn=null;function ax(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:cx,lx=Math.log,ux=Math.LN2;function cx(t){return t>>>=0,t===0?32:31-(lx(t)/ux|0)|0}var Oa=64,La=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=eo(l):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function hx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hx(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function fx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,Qd,_v,vv,wv,Nh=!1,Ma=[],rr=null,ir=null,sr=null,Ao=new Map,Ro=new Map,Kn=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mx(t,e,n,r,i){switch(e){case"focusin":return rr=Hs(rr,t,e,n,r,i),!0;case"dragenter":return ir=Hs(ir,t,e,n,r,i),!0;case"mouseover":return sr=Hs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,Hs(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,Hs(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function Ev(t){var e=qr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ah=r,n.target.dispatchEvent(r),Ah=null}else return e=ea(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){il(t)&&n.delete(e)}function gx(){Nh=!1,rr!==null&&il(rr)&&(rr=null),ir!==null&&il(ir)&&(ir=null),sr!==null&&il(sr)&&(sr=null),Ao.forEach(Hm),Ro.forEach(Hm)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,gx)))}function Co(t){function e(i){return qs(i,t)}if(0<Ma.length){qs(Ma[0],t);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&qs(rr,t),ir!==null&&qs(ir,t),sr!==null&&qs(sr,t),Ao.forEach(e),Ro.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&Kn.shift()}var qi=Vn.ReactCurrentBatchConfig,kl=!0;function yx(t,e,n,r){var i=ae,s=qi.transition;qi.transition=null;try{ae=1,Yd(t,e,n,r)}finally{ae=i,qi.transition=s}}function _x(t,e,n,r){var i=ae,s=qi.transition;qi.transition=null;try{ae=4,Yd(t,e,n,r)}finally{ae=i,qi.transition=s}}function Yd(t,e,n,r){if(kl){var i=bh(t,e,n,r);if(i===null)zc(t,e,r,Pl,n),Wm(t,r);else if(mx(i,t,e,n,r))r.stopPropagation();else if(Wm(t,r),e&4&&-1<px.indexOf(t)){for(;i!==null;){var s=ea(i);if(s!==null&&yv(s),s=bh(t,e,n,r),s===null&&zc(t,e,r,Pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Pl=null;function bh(t,e,n,r){if(Pl=null,t=qd(r),t=qr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function Tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sx()){case Kd:return 1;case fv:return 4;case Rl:case ox:return 16;case pv:return 536870912;default:return 16}default:return 16}}var Zn=null,Jd=null,sl=null;function Iv(){if(sl)return sl;var t,e=Jd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return sl=i.slice(t,1<r?1-r:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function qm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ja:qm,this.isPropagationStopped=qm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=At(ps),Zo=we({},ps,{view:0,detail:0}),vx=At(Zo),bc,Dc,Ks,vu=we({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(bc=t.screenX-Ks.screenX,Dc=t.screenY-Ks.screenY):Dc=bc=0,Ks=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Km=At(vu),wx=we({},vu,{dataTransfer:0}),Ex=At(wx),Tx=we({},Zo,{relatedTarget:0}),Vc=At(Tx),Ix=we({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=At(Ix),Sx=we({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=At(Sx),Rx=we({},ps,{data:0}),Gm=At(Rx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Px[t])?!!e[t]:!1}function Zd(){return Nx}var bx=we({},Zo,{key:function(t){if(t.key){var e=Cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dx=At(bx),Vx=we({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=At(Vx),Ox=we({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),Lx=At(Ox),Mx=we({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=At(Mx),Fx=we({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=At(Fx),zx=[9,13,27,32],ef=Sn&&"CompositionEvent"in window,co=null;Sn&&"documentMode"in document&&(co=document.documentMode);var Bx=Sn&&"TextEvent"in window&&!co,xv=Sn&&(!ef||co&&8<co&&11>=co),Ym=" ",Jm=!1;function Sv(t,e){switch(t){case"keyup":return zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function $x(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(Jm=!0,Ym);case"textInput":return t=e.data,t===Ym&&Jm?null:t;default:return null}}function Wx(t,e){if(Ni)return t==="compositionend"||!ef&&Sv(t,e)?(t=Iv(),sl=Jd=Zn=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xv&&e.locale!=="ko"?null:e.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hx[t.type]:e==="textarea"}function Rv(t,e,n,r){iv(r),e=Nl(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ho=null,ko=null;function qx(t){jv(t,0)}function wu(t){var e=Vi(t);if(J_(e))return t}function Kx(t,e){if(t==="change")return e}var Cv=!1;if(Sn){var Oc;if(Sn){var Lc="oninput"in document;if(!Lc){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Lc=typeof Zm.oninput=="function"}Oc=Lc}else Oc=!1;Cv=Oc&&(!document.documentMode||9<document.documentMode)}function eg(){ho&&(ho.detachEvent("onpropertychange",kv),ko=ho=null)}function kv(t){if(t.propertyName==="value"&&wu(ko)){var e=[];Rv(e,ko,t,qd(t)),lv(qx,e)}}function Gx(t,e,n){t==="focusin"?(eg(),ho=e,ko=n,ho.attachEvent("onpropertychange",kv)):t==="focusout"&&eg()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wu(ko)}function Yx(t,e){if(t==="click")return wu(e)}function Jx(t,e){if(t==="input"||t==="change")return wu(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:Xx;function Po(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ph.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function Pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nv(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zx(t){var e=Nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pv(n.ownerDocument.documentElement,n)){if(r!==null&&tf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ng(n,s);var o=ng(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eS=Sn&&"documentMode"in document&&11>=document.documentMode,bi=null,Dh=null,fo=null,Vh=!1;function rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||bi==null||bi!==xl(r)||(r=bi,"selectionStart"in r&&tf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fo&&Po(fo,r)||(fo=r,r=Nl(Dh,"onSelect"),0<r.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Mc={},bv={};Sn&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Eu(t){if(Mc[t])return Mc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bv)return Mc[t]=e[n];return t}var Dv=Eu("animationend"),Vv=Eu("animationiteration"),Ov=Eu("animationstart"),Lv=Eu("transitionend"),Mv=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Mv.set(t,e),mi(e,[t])}for(var jc=0;jc<ig.length;jc++){var Fc=ig[jc],tS=Fc.toLowerCase(),nS=Fc[0].toUpperCase()+Fc.slice(1);Ar(tS,"on"+nS)}Ar(Dv,"onAnimationEnd");Ar(Vv,"onAnimationIteration");Ar(Ov,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Lv,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tx(r,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;sg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;sg(i,l,c),s=u}}}if(Al)throw t=kh,Al=!1,kh=null,t}function de(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(Fv(e,t,2,!1),n.add(r))}function Uc(t,e,n){var r=0;e&&(r|=4),Fv(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[Ua]){t[Ua]=!0,q_.forEach(function(n){n!=="selectionchange"&&(rS.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Uc("selectionchange",!1,e))}}function Fv(t,e,n,r){switch(Tv(e)){case 1:var i=yx;break;case 4:i=_x;break;default:i=Yd}n=i.bind(null,e,n,t),i=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lv(function(){var c=s,d=qd(n),p=[];e:{var g=Mv.get(t);if(g!==void 0){var I=Xd,S=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":I=Dx;break;case"focusin":S="focus",I=Vc;break;case"focusout":S="blur",I=Vc;break;case"beforeblur":case"afterblur":I=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Lx;break;case Dv:case Vv:case Ov:I=xx;break;case Lv:I=jx;break;case"scroll":I=vx;break;case"wheel":I=Ux;break;case"copy":case"cut":case"paste":I=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Qm}var k=(e&4)!==0,P=!k&&t==="scroll",w=k?g!==null?g+"Capture":null:g;k=[];for(var v=c,R;v!==null;){R=v;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,w!==null&&(O=So(v,w),O!=null&&k.push(bo(v,O,R)))),P)break;v=v.return}0<k.length&&(g=new I(g,S,null,n,d),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Ah&&(S=n.relatedTarget||n.fromElement)&&(qr(S)||S[An]))break e;if((I||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,I?(S=n.relatedTarget||n.toElement,I=c,S=S?qr(S):null,S!==null&&(P=gi(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(I=null,S=c),I!==S)){if(k=Km,O="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Qm,O="onPointerLeave",w="onPointerEnter",v="pointer"),P=I==null?g:Vi(I),R=S==null?g:Vi(S),g=new k(O,v+"leave",I,n,d),g.target=P,g.relatedTarget=R,O=null,qr(d)===c&&(k=new k(w,v+"enter",S,n,d),k.target=R,k.relatedTarget=P,O=k),P=O,I&&S)t:{for(k=I,w=S,v=0,R=k;R;R=xi(R))v++;for(R=0,O=w;O;O=xi(O))R++;for(;0<v-R;)k=xi(k),v--;for(;0<R-v;)w=xi(w),R--;for(;v--;){if(k===w||w!==null&&k===w.alternate)break t;k=xi(k),w=xi(w)}k=null}else k=null;I!==null&&og(p,g,I,k,!1),S!==null&&P!==null&&og(p,P,S,k,!0)}}e:{if(g=c?Vi(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var j=Kx;else if(Xm(g))if(Cv)j=Jx;else{j=Qx;var U=Gx}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Yx);if(j&&(j=j(t,c))){Rv(p,j,n,d);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Eh(g,"number",g.value)}switch(U=c?Vi(c):window,t){case"focusin":(Xm(U)||U.contentEditable==="true")&&(bi=U,Dh=c,fo=null);break;case"focusout":fo=Dh=bi=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,rg(p,n,d);break;case"selectionchange":if(eS)break;case"keydown":case"keyup":rg(p,n,d)}var E;if(ef)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ni?Sv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xv&&n.locale!=="ko"&&(Ni||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ni&&(E=Iv()):(Zn=d,Jd="value"in Zn?Zn.value:Zn.textContent,Ni=!0)),U=Nl(c,y),0<U.length&&(y=new Gm(y,t,null,n,d),p.push({event:y,listeners:U}),E?y.data=E:(E=Av(n),E!==null&&(y.data=E)))),(E=Bx?$x(t,n):Wx(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(d=new Gm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}jv(p,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=So(t,n),s!=null&&r.unshift(bo(t,s,i)),s=So(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=So(n,s),u!=null&&o.unshift(bo(n,u,l))):i||(u=So(n,s),u!=null&&o.push(bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(sS,"")}function za(t,e,n){if(e=ag(e),ag(t)!==e&&n)throw Error(F(425))}function bl(){}var Oh=null,Lh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(lS)}:jh;function lS(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),en="__reactFiber$"+ms,Do="__reactProps$"+ms,An="__reactContainer$"+ms,Fh="__reactEvents$"+ms,uS="__reactListeners$"+ms,cS="__reactHandles$"+ms;function qr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[en])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[en]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Tu(t){return t[Do]||null}var Uh=[],Oi=-1;function Rr(t){return{current:t}}function pe(t){0>Oi||(t.current=Uh[Oi],Uh[Oi]=null,Oi--)}function ce(t,e){Oi++,Uh[Oi]=t.current,t.current=e}var yr={},nt=Rr(yr),mt=Rr(!1),ti=yr;function ts(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Dl(){pe(mt),pe(nt)}function cg(t,e,n){if(nt.current!==yr)throw Error(F(168));ce(nt,e),ce(mt,n)}function Uv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,GI(t)||"Unknown",i));return we({},n,r)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,ti=nt.current,ce(nt,t),ce(mt,mt.current),!0}function hg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Uv(t,e,ti),r.__reactInternalMemoizedMergedChildContext=t,pe(mt),pe(nt),ce(nt,t)):pe(mt),ce(mt,n)}var _n=null,Iu=!1,$c=!1;function zv(t){_n===null?_n=[t]:_n.push(t)}function hS(t){Iu=!0,zv(t)}function Cr(){if(!$c&&_n!==null){$c=!0;var t=0,e=ae;try{var n=_n;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Iu=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),dv(Kd,Cr),i}finally{ae=e,$c=!1}}return null}var Li=[],Mi=0,Ol=null,Ll=0,Ct=[],kt=0,ni=null,vn=1,wn="";function $r(t,e){Li[Mi++]=Ll,Li[Mi++]=Ol,Ol=t,Ll=e}function Bv(t,e,n){Ct[kt++]=vn,Ct[kt++]=wn,Ct[kt++]=ni,ni=t;var r=vn;t=wn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Bt(e)+i|n<<i|r,wn=s+t}else vn=1<<s|n<<i|r,wn=t}function nf(t){t.return!==null&&($r(t,1),Bv(t,1,0))}function rf(t){for(;t===Ol;)Ol=Li[--Mi],Li[Mi]=null,Ll=Li[--Mi],Li[Mi]=null;for(;t===ni;)ni=Ct[--kt],Ct[kt]=null,wn=Ct[--kt],Ct[kt]=null,vn=Ct[--kt],Ct[kt]=null}var It=null,Et=null,ge=!1,Ft=null;function $v(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Et=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ni!==null?{id:vn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Et=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(ge){var e=Et;if(e){var n=e;if(!dg(t,e)){if(zh(t))throw Error(F(418));e=or(n.nextSibling);var r=It;e&&dg(t,e)?$v(r,n):(t.flags=t.flags&-4097|2,ge=!1,It=t)}}else{if(zh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,It=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ba(t){if(t!==It)return!1;if(!ge)return fg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=Et)){if(zh(t))throw Wv(),Error(F(418));for(;e;)$v(t,e),e=or(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=It?or(t.stateNode.nextSibling):null;return!0}function Wv(){for(var t=Et;t;)t=or(t.nextSibling)}function ns(){Et=It=null,ge=!1}function sf(t){Ft===null?Ft=[t]:Ft.push(t)}var dS=Vn.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pg(t){var e=t._init;return e(t._payload)}function Hv(t){function e(w,v){if(t){var R=w.deletions;R===null?(w.deletions=[v],w.flags|=16):R.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=cr(w,v),w.index=0,w.sibling=null,w}function s(w,v,R){return w.index=R,t?(R=w.alternate,R!==null?(R=R.index,R<v?(w.flags|=2,v):R):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,R,O){return v===null||v.tag!==6?(v=Yc(R,w.mode,O),v.return=w,v):(v=i(v,R),v.return=w,v)}function u(w,v,R,O){var j=R.type;return j===Pi?d(w,v,R.props.children,O,R.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Hn&&pg(j)===v.type)?(O=i(v,R.props),O.ref=Gs(w,v,R),O.return=w,O):(O=fl(R.type,R.key,R.props,null,w.mode,O),O.ref=Gs(w,v,R),O.return=w,O)}function c(w,v,R,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=Jc(R,w.mode,O),v.return=w,v):(v=i(v,R.children||[]),v.return=w,v)}function d(w,v,R,O,j){return v===null||v.tag!==7?(v=Jr(R,w.mode,O,j),v.return=w,v):(v=i(v,R),v.return=w,v)}function p(w,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yc(""+v,w.mode,R),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:return R=fl(v.type,v.key,v.props,null,w.mode,R),R.ref=Gs(w,null,v),R.return=w,R;case ki:return v=Jc(v,w.mode,R),v.return=w,v;case Hn:var O=v._init;return p(w,O(v._payload),R)}if(Zs(v)||$s(v))return v=Jr(v,w.mode,R,null),v.return=w,v;$a(w,v)}return null}function g(w,v,R,O){var j=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return j!==null?null:l(w,v,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ba:return R.key===j?u(w,v,R,O):null;case ki:return R.key===j?c(w,v,R,O):null;case Hn:return j=R._init,g(w,v,j(R._payload),O)}if(Zs(R)||$s(R))return j!==null?null:d(w,v,R,O,null);$a(w,R)}return null}function I(w,v,R,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(R)||null,l(v,w,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ba:return w=w.get(O.key===null?R:O.key)||null,u(v,w,O,j);case ki:return w=w.get(O.key===null?R:O.key)||null,c(v,w,O,j);case Hn:var U=O._init;return I(w,v,R,U(O._payload),j)}if(Zs(O)||$s(O))return w=w.get(R)||null,d(v,w,O,j,null);$a(v,O)}return null}function S(w,v,R,O){for(var j=null,U=null,E=v,y=v=0,T=null;E!==null&&y<R.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var A=g(w,E,R[y],O);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(w,E),v=s(A,v,y),U===null?j=A:U.sibling=A,U=A,E=T}if(y===R.length)return n(w,E),ge&&$r(w,y),j;if(E===null){for(;y<R.length;y++)E=p(w,R[y],O),E!==null&&(v=s(E,v,y),U===null?j=E:U.sibling=E,U=E);return ge&&$r(w,y),j}for(E=r(w,E);y<R.length;y++)T=I(E,w,y,R[y],O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=s(T,v,y),U===null?j=T:U.sibling=T,U=T);return t&&E.forEach(function(C){return e(w,C)}),ge&&$r(w,y),j}function k(w,v,R,O){var j=$s(R);if(typeof j!="function")throw Error(F(150));if(R=j.call(R),R==null)throw Error(F(151));for(var U=j=null,E=v,y=v=0,T=null,A=R.next();E!==null&&!A.done;y++,A=R.next()){E.index>y?(T=E,E=null):T=E.sibling;var C=g(w,E,A.value,O);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(w,E),v=s(C,v,y),U===null?j=C:U.sibling=C,U=C,E=T}if(A.done)return n(w,E),ge&&$r(w,y),j;if(E===null){for(;!A.done;y++,A=R.next())A=p(w,A.value,O),A!==null&&(v=s(A,v,y),U===null?j=A:U.sibling=A,U=A);return ge&&$r(w,y),j}for(E=r(w,E);!A.done;y++,A=R.next())A=I(E,w,y,A.value,O),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?y:A.key),v=s(A,v,y),U===null?j=A:U.sibling=A,U=A);return t&&E.forEach(function(N){return e(w,N)}),ge&&$r(w,y),j}function P(w,v,R,O){if(typeof R=="object"&&R!==null&&R.type===Pi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ba:e:{for(var j=R.key,U=v;U!==null;){if(U.key===j){if(j=R.type,j===Pi){if(U.tag===7){n(w,U.sibling),v=i(U,R.props.children),v.return=w,w=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Hn&&pg(j)===U.type){n(w,U.sibling),v=i(U,R.props),v.ref=Gs(w,U,R),v.return=w,w=v;break e}n(w,U);break}else e(w,U);U=U.sibling}R.type===Pi?(v=Jr(R.props.children,w.mode,O,R.key),v.return=w,w=v):(O=fl(R.type,R.key,R.props,null,w.mode,O),O.ref=Gs(w,v,R),O.return=w,w=O)}return o(w);case ki:e:{for(U=R.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(w,v.sibling),v=i(v,R.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Jc(R,w.mode,O),v.return=w,w=v}return o(w);case Hn:return U=R._init,P(w,v,U(R._payload),O)}if(Zs(R))return S(w,v,R,O);if($s(R))return k(w,v,R,O);$a(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,R),v.return=w,w=v):(n(w,v),v=Yc(R,w.mode,O),v.return=w,w=v),o(w)):n(w,v)}return P}var rs=Hv(!0),qv=Hv(!1),Ml=Rr(null),jl=null,ji=null,of=null;function af(){of=ji=jl=null}function lf(t){var e=Ml.current;pe(Ml),t._currentValue=e}function $h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){jl=t,of=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(jl===null)throw Error(F(308));ji=t,jl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Kr=null;function uf(t){Kr===null?Kr=[t]:Kr.push(t)}function Kv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,uf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,uf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}function mg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,I=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,k=l;switch(g=e,I=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){p=S.call(I,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,g=typeof S=="function"?S.call(I,p,g):S,g==null)break e;p=we({},p,g);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else I={eventTime:I,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ii|=o,t.lanes=o,t.memoizedState=p}}function gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ta={},nn=Rr(ta),Vo=Rr(ta),Oo=Rr(ta);function Gr(t){if(t===ta)throw Error(F(174));return t}function hf(t,e){switch(ce(Oo,e),ce(Vo,t),ce(nn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}pe(nn),ce(nn,e)}function is(){pe(nn),pe(Vo),pe(Oo)}function Qv(t){Gr(Oo.current);var e=Gr(nn.current),n=Ih(e,t.type);e!==n&&(ce(Vo,t),ce(nn,n))}function df(t){Vo.current===t&&(pe(nn),pe(Vo))}var _e=Rr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function ff(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ll=Vn.ReactCurrentDispatcher,Hc=Vn.ReactCurrentBatchConfig,ri=0,ve=null,Oe=null,Ue=null,zl=!1,po=!1,Lo=0,fS=0;function Ye(){throw Error(F(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function mf(t,e,n,r,i,s){if(ri=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?yS:_S,t=n(r,i),po){s=0;do{if(po=!1,Lo=0,25<=s)throw Error(F(301));s+=1,Ue=Oe=null,e.updateQueue=null,ll.current=vS,t=n(r,i)}while(po)}if(ll.current=Bl,e=Oe!==null&&Oe.next!==null,ri=0,Ue=Oe=ve=null,zl=!1,e)throw Error(F(300));return t}function gf(){var t=Lo!==0;return Lo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Vt(){if(Oe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Ue===null?ve.memoizedState:Ue.next;if(e!==null)Ue=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Mo(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ri&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=d,ii|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yv(){}function Jv(t,e){var n=ve,r=Vt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,yf(e0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,jo(9,Zv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(F(349));ri&30||Xv(n,e,i)}return i}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,r){e.value=n,e.getSnapshot=r,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function n0(t){var e=Rn(t,1);e!==null&&$t(e,t,1,-1)}function yg(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=gS.bind(null,ve,t),[e.memoizedState,t]}function jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r0(){return Vt().memoizedState}function ul(t,e,n,r){var i=Xt();ve.flags|=t,i.memoizedState=jo(1|e,n,void 0,r===void 0?null:r)}function xu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&pf(r,o.deps)){i.memoizedState=jo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=jo(1|e,n,s,r)}function _g(t,e){return ul(8390656,8,t,e)}function yf(t,e){return xu(2048,8,t,e)}function i0(t,e){return xu(4,2,t,e)}function s0(t,e){return xu(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,xu(4,4,o0.bind(null,e,t),n)}function _f(){}function l0(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u0(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return ri&21?(qt(n,e)||(n=mv(),ve.lanes|=n,ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function pS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Hc.transition;Hc.transition={};try{t(!1),e()}finally{ae=n,Hc.transition=r}}function h0(){return Vt().memoizedState}function mS(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d0(t))f0(e,n);else if(n=Kv(t,e,n,r),n!==null){var i=lt();$t(n,t,r,i),p0(n,e,r)}}function gS(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(t))f0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,uf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Kv(t,e,i,r),n!==null&&(i=lt(),$t(n,t,r,i),p0(n,e,r))}}function d0(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function f0(t,e){po=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}var Bl={readContext:Dt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},yS={readContext:Dt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:_g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:yg,useDebugValue:_f,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=yg(!1),e=t[0];return t=pS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Xt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),ze===null)throw Error(F(349));ri&30||Xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_g(e0.bind(null,r,s,t),[t]),r.flags|=2048,jo(9,Zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=ze.identifierPrefix;if(ge){var n=wn,r=vn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:Dt,useCallback:l0,useContext:Dt,useEffect:yf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:qc,useRef:r0,useState:function(){return qc(Mo)},useDebugValue:_f,useDeferredValue:function(t){var e=Vt();return c0(e,Oe.memoizedState,t)},useTransition:function(){var t=qc(Mo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Jv,useId:h0,unstable_isNewReconciler:!1},vS={readContext:Dt,useCallback:l0,useContext:Dt,useEffect:yf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:Kc,useRef:r0,useState:function(){return Kc(Mo)},useDebugValue:_f,useDeferredValue:function(t){var e=Vt();return Oe===null?e.memoizedState=t:c0(e,Oe.memoizedState,t)},useTransition:function(){var t=Kc(Mo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Jv,useId:h0,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&($t(e,t,i,r),al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&($t(e,t,i,r),al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ur(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&($t(e,t,r,n),al(e,t,r))}};function vg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,r)||!Po(i,s):!0}function m0(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=gt(e)?ti:nt.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Hh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=gt(e)?ti:nt.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Su.enqueueReplaceState(i,i.state,null),Fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",r=e;do n+=KI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function g0(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wl||(Wl=!0,nd=r),qh(t,e)},n}function y0(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VS.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var ES=Vn.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?qv(e,null,n,r):rs(e,t.child,n,r)}function xg(t,e,n,r,i){n=n.render;var s=e.ref;return Ki(e,i),r=mf(t,e,n,r,s,i),n=gf(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ge&&n&&nf(e),e.flags|=1,at(t,e,r,i),e.child)}function Sg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,r,i)):(t=fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Po(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return Kh(t,e,n,r,i)}function v0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ui,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ui,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ui,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ui,vt),vt|=r;return at(t,e,i,n),e.child}function w0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,i){var s=gt(n)?ti:nt.current;return s=ts(e,s),Ki(e,i),n=mf(t,e,n,r,s,i),r=gf(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ge&&r&&nf(e),e.flags|=1,at(t,e,n,i),e.child)}function Ag(t,e,n,r,i){if(gt(n)){var s=!0;Vl(e)}else s=!1;if(Ki(e,i),e.stateNode===null)cl(t,e),m0(e,n,r),Hh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=gt(n)?ti:nt.current,c=ts(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&wg(e,o,r,c),qn=!1;var g=e.memoizedState;o.state=g,Fl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||mt.current||qn?(typeof d=="function"&&(Wh(e,n,d,r),u=e.memoizedState),(l=qn||vg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=gt(n)?ti:nt.current,u=ts(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&wg(e,o,r,u),qn=!1,g=e.memoizedState,o.state=g,Fl(e,r,o,i);var S=e.memoizedState;l!==p||g!==S||mt.current||qn?(typeof I=="function"&&(Wh(e,n,I,r),S=e.memoizedState),(c=qn||vg(e,n,c,r,g,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Gh(t,e,n,r,s,i)}function Gh(t,e,n,r,i,s){w0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hg(e,n,!1),Cn(t,e,s);r=e.stateNode,ES.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&hg(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cg(t,e.context,!1),hf(t,e.containerInfo)}function Rg(t,e,n,r,i){return ns(),sf(i),e.flags|=256,at(t,e,n,r),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yh(n),e.memoizedState=Qh,t):vf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qh,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vf(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wa(t,e,n,r){return r!==null&&sf(r),rs(e,t.child,null,n),t=vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gc(Error(F(422))),Wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cu({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=Qh,s);if(!(e.mode&1))return Wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Gc(s,r,void 0),Wa(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),$t(r,t,i,-1))}return Sf(),r=Gc(Error(F(421))),Wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=or(i.nextSibling),It=e,ge=!0,Ft=null,t!==null&&(Ct[kt++]=vn,Ct[kt++]=wn,Ct[kt++]=ni,vn=t.id,wn=t.overflow,ni=e),e=vf(e,r.children),e.flags|=4096,e)}function Cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$h(t.return,e,n)}function Qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function I0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,n,e);else if(t.tag===19)Cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:E0(e),ns();break;case 5:Qv(e);break;case 1:gt(e.type)&&Vl(e);break;case 4:hf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?T0(t,e,n):(ce(_e,_e.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return I0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return Cn(t,e,n)}var x0,Jh,S0,A0;x0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jh=function(){};S0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(nn.current);var s=null;switch(n){case"input":i=vh(t,i),r=vh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}xh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xS(t,e,n){var r=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&Dl(),Je(e),null;case 3:return r=e.stateNode,is(),pe(mt),pe(nt),ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(sd(Ft),Ft=null))),Jh(t,e),Je(e),null;case 5:df(e);var i=Gr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Je(e),null}if(t=Gr(nn.current),Ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)de(to[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Mm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Fm(r,s),de("invalid",r)}xh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&za(r.textContent,l,t),i=["children",""+l]):Io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Da(r),jm(r,s,!0);break;case"textarea":Da(r),Um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[Do]=r,x0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)de(to[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Mm(t,r),i=vh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Fm(t,r),i=Th(t,r),de("invalid",t);break;default:i=r}xh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xo(t,u):typeof u=="number"&&xo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Bd(t,s,u,o))}switch(n){case"input":Da(t),jm(t,r,!1);break;case"textarea":Da(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Gr(Oo.current),Gr(nn.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Et!==null&&e.mode&1&&!(e.flags&128))Wv(),ns(),e.flags|=98560,s=!1;else if(s=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[en]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Ft!==null&&(sd(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Le===0&&(Le=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return is(),Jh(t,e),t===null&&No(e.stateNode.containerInfo),Je(e),null;case 10:return lf(e.type._context),Je(e),null;case 17:return gt(e.type)&&Dl(),Je(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,Qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>os&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Ae()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return xf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function SS(t,e){switch(rf(e),e.tag){case 1:return gt(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),pe(mt),pe(nt),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return is(),null;case 10:return lf(e.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var Ha=!1,et=!1,AS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Xh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var kg=!1;function RS(t,e){if(Oh=kl,t=Nv(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)g=p,p=I;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},kl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,P=S.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:Mt(e.type,k),P);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Ie(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=kg,kg=!1,S}function mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xh(e,n,s)}i=i.next}while(i!==r)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R0(t){var e=t.alternate;e!==null&&(t.alternate=null,R0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[Do],delete e[Fh],delete e[uS],delete e[cS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function Pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var $e=null,jt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)k0(t,e,n),n=n.sibling}function k0(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:et||Fi(n,e);case 6:var r=$e,i=jt;$e=null,Bn(t,e,n),$e=r,jt=i,$e!==null&&(jt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(jt?(t=$e,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Co(t)):Bc($e,n.stateNode));break;case 4:r=$e,i=jt,$e=n.stateNode.containerInfo,jt=!0,Bn(t,e,n),$e=r,jt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!et&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Bn(t,e,n),et=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AS),e.forEach(function(r){var i=LS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,jt=!1;break e;case 3:$e=l.stateNode.containerInfo,jt=!0;break e;case 4:$e=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if($e===null)throw Error(F(160));k0(s,o,i),$e=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Jt(t),r&4){try{mo(3,t,t.return),Au(3,t)}catch(k){Ie(t,t.return,k)}try{mo(5,t,t.return)}catch(k){Ie(t,t.return,k)}}break;case 1:Lt(e,t),Jt(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Lt(e,t),Jt(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{xo(i,"")}catch(k){Ie(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&X_(i,s),Sh(l,o);var c=Sh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?rv(i,p):d==="dangerouslySetInnerHTML"?tv(i,p):d==="children"?xo(i,p):Bd(i,d,p,c)}switch(l){case"input":wh(i,s);break;case"textarea":Z_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?$i(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(k){Ie(t,t.return,k)}}break;case 6:if(Lt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ie(t,t.return,k)}}break;case 3:if(Lt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(k){Ie(t,t.return,k)}break;case 4:Lt(e,t),Jt(t);break;case 13:Lt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tf=Ae())),r&4&&Ng(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||d,Lt(e,t),et=c):Lt(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(g=H,I=g.child,g.tag){case 0:case 11:case 14:case 15:mo(4,g,g.return);break;case 1:Fi(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){Ie(r,n,k)}}break;case 5:Fi(g,g.return);break;case 22:if(g.memoizedState!==null){Dg(p);continue}}I!==null?(I.return=g,H=I):Dg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nv("display",o))}catch(k){Ie(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ie(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Jt(t),r&4&&Ng(t);break;case 21:break;default:Lt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var s=Pg(t);td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Pg(t);ed(t,l,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CS(t,e,n){H=t,N0(t)}function N0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=Ha;var c=et;if(Ha=o,(et=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Vg(i):u!==null?(u.return=o,H=u):Vg(i);for(;s!==null;)H=s,N0(s),s=s.sibling;H=i,Ha=l,et=c}bg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):bg(t)}}function bg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Au(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Co(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}et||e.flags&512&&Zh(e)}catch(g){Ie(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Dg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Vg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{Zh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{Zh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var kS=Math.ceil,$l=Vn.ReactCurrentDispatcher,wf=Vn.ReactCurrentOwner,bt=Vn.ReactCurrentBatchConfig,se=0,ze=null,Ce=null,qe=0,vt=0,Ui=Rr(0),Le=0,Fo=null,ii=0,Ru=0,Ef=0,go=null,dt=null,Tf=0,os=1/0,yn=null,Wl=!1,nd=null,lr=null,qa=!1,er=null,Hl=0,yo=0,rd=null,hl=-1,dl=0;function lt(){return se&6?Ae():hl!==-1?hl:hl=Ae()}function ur(t){return t.mode&1?se&2&&qe!==0?qe&-qe:dS.transition!==null?(dl===0&&(dl=mv()),dl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Tv(t.type)),t):1}function $t(t,e,n,r){if(50<yo)throw yo=0,rd=null,Error(F(185));Xo(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(Ru|=n),Le===4&&Gn(t,qe)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(os=Ae()+500,Iu&&Cr()))}function yt(t,e){var n=t.callbackNode;dx(t,e);var r=Cl(t,t===ze?qe:0);if(r===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?hS(Og.bind(null,t)):zv(Og.bind(null,t)),aS(function(){!(se&6)&&Cr()}),n=null;else{switch(gv(r)){case 1:n=Kd;break;case 4:n=fv;break;case 16:n=Rl;break;case 536870912:n=pv;break;default:n=Rl}n=F0(n,b0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b0(t,e){if(hl=-1,dl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=Cl(t,t===ze?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var i=se;se|=2;var s=V0();(ze!==t||qe!==e)&&(yn=null,os=Ae()+500,Yr(t,e));do try{bS();break}catch(l){D0(t,l)}while(!0);af(),$l.current=s,se=i,Ce!==null?e=0:(ze=null,qe=0,e=Le)}if(e!==0){if(e===2&&(i=Ph(t),i!==0&&(r=i,e=id(t,i))),e===1)throw n=Fo,Yr(t,0),Gn(t,r),yt(t,Ae()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!PS(i)&&(e=ql(t,r),e===2&&(s=Ph(t),s!==0&&(r=s,e=id(t,s))),e===1))throw n=Fo,Yr(t,0),Gn(t,r),yt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Wr(t,dt,yn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=Tf+500-Ae(),10<e)){if(Cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jh(Wr.bind(null,t,dt,yn),e);break}Wr(t,dt,yn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kS(r/1960))-r,10<r){t.timeoutHandle=jh(Wr.bind(null,t,dt,yn),r);break}Wr(t,dt,yn);break;case 5:Wr(t,dt,yn);break;default:throw Error(F(329))}}}return yt(t,Ae()),t.callbackNode===n?b0.bind(null,t):null}function id(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=dt,dt=n,e!==null&&sd(e)),t}function sd(t){dt===null?dt=t:dt.push.apply(dt,t)}function PS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~Ef,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Og(t){if(se&6)throw Error(F(327));Gi();var e=Cl(t,0);if(!(e&1))return yt(t,Ae()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=Ph(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=Fo,Yr(t,0),Gn(t,e),yt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,dt,yn),yt(t,Ae()),null}function If(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(os=Ae()+500,Iu&&Cr())}}function si(t){er!==null&&er.tag===0&&!(se&6)&&Gi();var e=se;se|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,t)return t()}finally{ae=r,bt.transition=n,se=e,!(se&6)&&Cr()}}function xf(){vt=Ui.current,pe(Ui)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oS(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:is(),pe(mt),pe(nt),ff();break;case 5:df(r);break;case 4:is();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:lf(r.type._context);break;case 22:case 23:xf()}n=n.return}if(ze=t,Ce=t=cr(t.current,null),qe=vt=e,Le=0,Fo=null,Ef=Ru=ii=0,dt=go=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function D0(t,e){do{var n=Ce;try{if(af(),ll.current=Bl,zl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(ri=0,Ue=Oe=ve=null,po=!1,Lo=0,wf.current=null,n===null||n.return===null){Le=1,Fo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=Tg(o);if(I!==null){I.flags&=-257,Ig(I,o,l,s,e),I.mode&1&&Eg(s,c,e),e=I,u=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(u),e.updateQueue=k}else S.add(u);break e}else{if(!(e&1)){Eg(s,c,e),Sf();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var P=Tg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ig(P,o,l,s,e),sf(ss(u,l));break e}}s=u=ss(u,l),Le!==4&&(Le=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=g0(s,u,e);mg(s,w);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(lr===null||!lr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=y0(s,l,e);mg(s,O);break e}}s=s.return}while(s!==null)}L0(n)}catch(j){e=j,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function V0(){var t=$l.current;return $l.current=Bl,t===null?Bl:t}function Sf(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(ii&268435455)&&!(Ru&268435455)||Gn(ze,qe)}function ql(t,e){var n=se;se|=2;var r=V0();(ze!==t||qe!==e)&&(yn=null,Yr(t,e));do try{NS();break}catch(i){D0(t,i)}while(!0);if(af(),se=n,$l.current=r,Ce!==null)throw Error(F(261));return ze=null,qe=0,Le}function NS(){for(;Ce!==null;)O0(Ce)}function bS(){for(;Ce!==null&&!rx();)O0(Ce)}function O0(t){var e=j0(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?L0(t):Ce=e,wf.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SS(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ce=null;return}}else if(n=xS(n,e,vt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Le===0&&(Le=5)}function Wr(t,e,n){var r=ae,i=bt.transition;try{bt.transition=null,ae=1,DS(t,e,n,r)}finally{bt.transition=i,ae=r}return null}function DS(t,e,n,r){do Gi();while(er!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fx(t,s),t===ze&&(Ce=ze=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,F0(Rl,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ae;ae=1;var l=se;se|=4,wf.current=null,RS(t,n),P0(n,t),Zx(Lh),kl=!!Oh,Lh=Oh=null,t.current=n,CS(n),ix(),se=l,ae=o,bt.transition=s}else t.current=n;if(qa&&(qa=!1,er=t,Hl=i),s=t.pendingLanes,s===0&&(lr=null),ax(n.stateNode),yt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,t=nd,nd=null,t;return Hl&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===rd?yo++:(yo=0,rd=t):yo=0,Cr(),null}function Gi(){if(er!==null){var t=gv(Hl),e=bt.transition,n=ae;try{if(bt.transition=null,ae=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Hl=0,se&6)throw Error(F(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:mo(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var g=d.sibling,I=d.return;if(R0(d),d===c){H=null;break}if(g!==null){g.return=I,H=g;break}H=I}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,H=R;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Au(9,l)}}catch(j){Ie(l,l.return,j)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(se=i,Cr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(_u,t)}catch{}r=!0}return r}finally{ae=n,bt.transition=e}}return!1}function Lg(t,e,n){e=ss(n,e),e=g0(t,e,1),t=ar(t,e,1),e=lt(),t!==null&&(Xo(t,1,e),yt(t,e))}function Ie(t,e,n){if(t.tag===3)Lg(t,t,n);else for(;e!==null;){if(e.tag===3){Lg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=ss(n,t),t=y0(e,t,1),e=ar(e,t,1),t=lt(),e!==null&&(Xo(e,1,t),yt(e,t));break}}e=e.return}}function VS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Ae()-Tf?Yr(t,0):Ef|=n),yt(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=lt();t=Rn(t,e),t!==null&&(Xo(t,e,n),yt(t,n))}function OS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),M0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,IS(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ge&&e.flags&1048576&&Bv(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cl(t,e),t=e.pendingProps;var i=ts(e,nt.current);Ki(e,n),i=mf(null,e,r,t,i,n);var s=gf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Vl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cf(e),i.updater=Su,e.stateNode=i,i._reactInternals=e,Hh(e,r,t,n),e=Gh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&nf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jS(r),t=Mt(r,t),i){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=Ag(null,e,r,t,n);break e;case 11:e=xg(null,e,r,t,n);break e;case 14:e=Sg(null,e,r,Mt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Ag(t,e,r,i,n);case 3:e:{if(E0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gv(t,e),Fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(F(423)),e),e=Rg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(F(424)),e),e=Rg(t,e,r,n,i);break e}else for(Et=or(e.stateNode.containerInfo.firstChild),It=e,ge=!0,Ft=null,n=qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Cn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return Qv(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mh(r,i)?o=null:s!==null&&Mh(r,s)&&(e.flags|=32),w0(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return T0(t,e,n);case 4:return hf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),xg(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Ml,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!mt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=In(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ki(e,n),i=Dt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Sg(t,e,r,i,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),cl(t,e),e.tag=1,gt(r)?(t=!0,Vl(e)):t=!1,Ki(e,n),m0(e,r,i),Hh(e,r,i,n),Gh(null,e,r,!0,t,n);case 19:return I0(t,e,n);case 22:return v0(t,e,n)}throw Error(F(156,e.tag))};function F0(t,e){return dv(t,e)}function MS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new MS(t,e,n,r)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Hd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Jr(n.children,i,s,e);case $d:o=8,i|=8;break;case mh:return t=Nt(12,n,e,i|2),t.elementType=mh,t.lanes=s,t;case gh:return t=Nt(13,n,e,i),t.elementType=gh,t.lanes=s,t;case yh:return t=Nt(19,n,e,i),t.elementType=yh,t.lanes=s,t;case Q_:return Cu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K_:o=10;break e;case G_:o=9;break e;case Wd:o=11;break e;case Hd:o=14;break e;case Hn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Cu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Q_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,r,i,s,o,l,u){return t=new FS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(s),t}function US(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U0(t){if(!t)return yr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(gt(n))return Uv(t,n,e)}return e}function z0(t,e,n,r,i,s,o,l,u){return t=Rf(n,r,!0,t,i,s,o,l,u),t.context=U0(null),n=t.current,r=lt(),i=ur(n),s=In(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Xo(t,i,r),yt(t,r),t}function ku(t,e,n,r){var i=e.current,s=lt(),o=ur(i);return n=U0(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&($t(t,i,o,s),al(t,i,o)),o}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function zS(){return null}var B0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Pu.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ku(t,e,null,null)};Pu.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;si(function(){ku(null,t,null,null)}),e[An]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&Ev(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function BS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Kl(o);s.call(c)}}var o=z0(e,r,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[An]=o.current,No(t.nodeType===8?t.parentNode:t),si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Kl(u);l.call(c)}}var u=Rf(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=u,t[An]=u.current,No(t.nodeType===8?t.parentNode:t),si(function(){ku(e,u,n,r)}),u}function bu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Kl(o);l.call(u)}}ku(e,o,t,i)}else o=BS(n,e,t,i,r);return Kl(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(Gd(e,n|1),yt(e,Ae()),!(se&6)&&(os=Ae()+500,Cr()))}break;case 13:si(function(){var r=Rn(t,1);if(r!==null){var i=lt();$t(r,t,1,i)}}),Cf(t,1)}};Qd=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=lt();$t(e,t,134217728,n)}Cf(t,134217728)}};_v=function(t){if(t.tag===13){var e=ur(t),n=Rn(t,e);if(n!==null){var r=lt();$t(n,t,e,r)}Cf(t,e)}};vv=function(){return ae};wv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Rh=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tu(r);if(!i)throw Error(F(90));J_(r),wh(r,i)}}}break;case"textarea":Z_(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};ov=If;av=si;var $S={usingClientEntryPoint:!1,Events:[ea,Vi,Tu,iv,sv,If]},Ys={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{_u=Ka.inject(WS),tn=Ka}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$S;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(F(200));return US(t,e,null,n)};St.createRoot=function(t,e){if(!Pf(t))throw Error(F(299));var n=!1,r="",i=B0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,No(t.nodeType===8?t.parentNode:t),new kf(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return si(t)};St.hydrate=function(t,e,n){if(!Nu(e))throw Error(F(200));return bu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=z0(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,No(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pu(e)};St.render=function(t,e,n){if(!Nu(e))throw Error(F(200));return bu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(F(40));return t._reactRootContainer?(si(function(){bu(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};St.unstable_batchedUpdates=If;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return bu(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(t){console.error(t)}}$0(),$_.exports=St;var HS=$_.exports,W0,Fg=HS;W0=Fg.createRoot,Fg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uo.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Ug="popstate";function qS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return od("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:H0(i)}return GS(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Nf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function zg(t,e){return{usr:t.state,key:t.key,idx:e}}function od(t,e,n,r){return n===void 0&&(n=null),Uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?gs(e):e,{state:n,key:e&&e.key||r||KS()})}function H0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function GS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Uo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=tr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:w})}function g(P,w){l=tr.Push;let v=od(k.location,P,w);c=d()+1;let R=zg(v,c),O=k.createHref(v);try{o.pushState(R,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&u&&u({action:l,location:k.location,delta:1})}function I(P,w){l=tr.Replace;let v=od(k.location,P,w);c=d();let R=zg(v,c),O=k.createHref(v);o.replaceState(R,"",O),s&&u&&u({action:l,location:k.location,delta:0})}function S(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:H0(P);return v=v.replace(/ $/,"%20"),be(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let k={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ug,p),u=P,()=>{i.removeEventListener(Ug,p),u=null}},createHref(P){return e(i,P)},createURL:S,encodeLocation(P){let w=S(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:I,go(P){return o.go(P)}};return k}var Bg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bg||(Bg={}));function QS(t,e,n){return n===void 0&&(n="/"),YS(t,e,n)}function YS(t,e,n,r){let i=typeof e=="string"?gs(e):e,s=G0(i.pathname||"/",n);if(s==null)return null;let o=q0(t);JS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=u1(s);l=o1(o[u],c)}return l}function q0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Xr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:i1(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of K0(s.path))i(s,o,u)}),e}function K0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=K0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function JS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:s1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XS=/^:[\w-]+$/,ZS=3,e1=2,t1=1,n1=10,r1=-2,$g=t=>t==="*";function i1(t,e){let n=t.split("/"),r=n.length;return n.some($g)&&(r+=r1),e&&(r+=e1),n.filter(i=>!$g(i)).reduce((i,s)=>i+(XS.test(s)?ZS:s===""?t1:n1),r)}function s1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function o1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=a1({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Xr([s,p.pathname]),pathnameBase:p1(Xr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Xr([s,p.pathnameBase]))}return o}function a1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=l1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:I}=d;if(g==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const S=l[p];return I&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function l1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Nf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function u1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Nf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function G0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const c1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h1=t=>c1.test(t);function d1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?gs(t):t,s;if(n)if(h1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Nf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Wg(n.substring(1),"/"):s=Wg(n,e)}else s=e;return{pathname:s,search:m1(r),hash:g1(i)}}function Wg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Q0(t,e){let n=f1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Y0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=gs(t):(i=Uo({},t),be(!i.pathname||!i.pathname.includes("?"),Xc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Xc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=d1(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Xr=t=>t.join("/").replace(/\/\/+/g,"/"),p1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,g1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function y1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const J0=["post","put","patch","delete"];new Set(J0);const _1=["get",...J0];new Set(_1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}const bf=V.createContext(null),v1=V.createContext(null),na=V.createContext(null),Du=V.createContext(null),kr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),X0=V.createContext(null);function ra(){return V.useContext(Du)!=null}function Df(){return ra()||be(!1),V.useContext(Du).location}function Z0(t){V.useContext(na).static||V.useLayoutEffect(t)}function ia(){let{isDataRoute:t}=V.useContext(kr);return t?D1():w1()}function w1(){ra()||be(!1);let t=V.useContext(bf),{basename:e,future:n,navigator:r}=V.useContext(na),{matches:i}=V.useContext(kr),{pathname:s}=Df(),o=JSON.stringify(Q0(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return Z0(()=>{l.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Y0(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Xr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function E1(){let{matches:t}=V.useContext(kr),e=t[t.length-1];return e?e.params:{}}function T1(t,e){return I1(t,e)}function I1(t,e,n,r){ra()||be(!1);let{navigator:i}=V.useContext(na),{matches:s}=V.useContext(kr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Df(),d;if(e){var p;let P=typeof e=="string"?gs(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||be(!1),d=P}else d=c;let g=d.pathname||"/",I=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=QS(t,{pathname:I}),k=C1(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Xr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Xr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?V.createElement(Du.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tr.Pop}},k):k}function x1(){let t=b1(),e=y1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const S1=V.createElement(x1,null);class A1 extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(kr.Provider,{value:this.props.routeContext},V.createElement(X0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R1(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(bf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(kr.Provider,{value:e},r)}function C1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:I}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let I,S=!1,k=null,P=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||S1,u&&(c<0&&g===0?(V1("route-fallback"),S=!0,P=null):c===g&&(S=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),v=()=>{let R;return I?R=k:S?R=P:p.route.Component?R=V.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=d,V.createElement(R1,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?V.createElement(A1,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var ew=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ew||{}),tw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tw||{});function k1(t){let e=V.useContext(bf);return e||be(!1),e}function P1(t){let e=V.useContext(v1);return e||be(!1),e}function N1(t){let e=V.useContext(kr);return e||be(!1),e}function nw(t){let e=N1(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function b1(){var t;let e=V.useContext(X0),n=P1(),r=nw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function D1(){let{router:t}=k1(ew.UseNavigateStable),e=nw(tw.UseNavigateStable),n=V.useRef(!1);return Z0(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zo({fromRouteId:e},s)))},[t,e])}const Hg={};function V1(t,e,n){Hg[t]||(Hg[t]=!0)}function O1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function zi(t){let{to:e,replace:n,state:r,relative:i}=t;ra()||be(!1);let{future:s,static:o}=V.useContext(na),{matches:l}=V.useContext(kr),{pathname:u}=Df(),c=ia(),d=Y0(e,Q0(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return V.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Wn(t){be(!1)}function L1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;ra()&&be(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:zo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=gs(r));let{pathname:d="/",search:p="",hash:g="",state:I=null,key:S="default"}=r,k=V.useMemo(()=>{let P=G0(d,u);return P==null?null:{location:{pathname:P,search:p,hash:g,state:I,key:S},navigationType:i}},[u,d,p,g,I,S,i]);return k==null?null:V.createElement(na.Provider,{value:c},V.createElement(Du.Provider,{children:n,value:k}))}function M1(t){let{children:e,location:n}=t;return T1(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,ad(r.props.children,s));return}r.type!==Wn&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const j1="6";try{window.__reactRouterVersion=j1}catch{}const F1="startTransition",qg=VI[F1];function U1(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=qS({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=V.useCallback(p=>{c&&qg?qg(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(d),[o,d]),V.useEffect(()=>O1(r),[r]),V.createElement(L1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Kg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kg||(Kg={}));var Gg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gg||(Gg={}));const z1=()=>{};var Qg={};/**
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
 */const rw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},B1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(g=64)),r.push(n[d],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):B1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new $1;const g=s<<2|l>>4;if(r.push(g),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W1=function(t){const e=rw(t);return iw.encodeByteArray(e,!0)},Gl=function(t){return W1(t).replace(/\./g,"")},sw=function(t){try{return iw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function H1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q1=()=>H1().__FIREBASE_DEFAULTS__,K1=()=>{if(typeof process>"u"||typeof Qg>"u")return;const t=Qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},G1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sw(t[1]);return e&&JSON.parse(e)},Vu=()=>{try{return z1()||q1()||K1()||G1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ow=t=>{var e,n;return(n=(e=Vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},aw=t=>{const e=ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lw=()=>{var t;return(t=Vu())==null?void 0:t.config},uw=t=>{var e;return(e=Vu())==null?void 0:e[`_${t}`]};/**
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
 */class Q1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Gl(JSON.stringify(n)),Gl(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function J1(){var e;const t=(e=Vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function X1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tA(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nA(){return!J1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rA(){try{return typeof indexedDB=="object"}catch{return!1}}function iA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const sA="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sA,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new fn(i,l,r)}}function oA(t,e){return t.replace(aA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aA=/\{\$([^}]+)}/g;function lA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yg(s)&&Yg(o)){if(!_r(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yg(t){return t!==null&&typeof t=="object"}/**
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
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uA(t,e){const n=new cA(t,e);return n.subscribe.bind(n)}class cA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ys(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vf(t){return(await fetch(t,{credentials:"include"})).ok}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class dA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Q1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pA(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fA(t){return t===Hr?void 0:t}function pA(t){return t.instantiationMode==="EAGER"}/**
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
 */class mA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const gA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},yA=te.INFO,_A={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},vA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_A[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=yA,this._logHandler=vA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const wA=(t,e)=>e.some(n=>t instanceof n);let Jg,Xg;function EA(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TA(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hw=new WeakMap,ld=new WeakMap,dw=new WeakMap,eh=new WeakMap,Lf=new WeakMap;function IA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hw.set(n,t)}).catch(()=>{}),Lf.set(e,t),e}function xA(t){if(ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SA(t){ud=t(ud)}function AA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return dw.set(r,e.sort?e.sort():[e]),hr(r)}:TA().includes(t)?function(...e){return t.apply(th(this),e),hr(hw.get(this))}:function(...e){return hr(t.apply(th(this),e))}}function RA(t){return typeof t=="function"?AA(t):(t instanceof IDBTransaction&&xA(t),wA(t,EA())?new Proxy(t,ud):t)}function hr(t){if(t instanceof IDBRequest)return IA(t);if(eh.has(t))return eh.get(t);const e=RA(t);return e!==t&&(eh.set(t,e),Lf.set(e,t)),e}const th=t=>Lf.get(t);function CA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const kA=["get","getKey","getAll","getAllKeys","count"],PA=["put","add","delete","clear"],nh=new Map;function Zg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nh.set(e,s),s}SA(t=>({...t,get:(e,n,r)=>Zg(e,n)||t.get(e,n,r),has:(e,n)=>!!Zg(e,n)||t.has(e,n)}));/**
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
 */class NA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",ey="0.14.11";/**
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
 */const kn=new Of("@firebase/app"),DA="@firebase/app-compat",VA="@firebase/analytics-compat",OA="@firebase/analytics",LA="@firebase/app-check-compat",MA="@firebase/app-check",jA="@firebase/auth",FA="@firebase/auth-compat",UA="@firebase/database",zA="@firebase/data-connect",BA="@firebase/database-compat",$A="@firebase/functions",WA="@firebase/functions-compat",HA="@firebase/installations",qA="@firebase/installations-compat",KA="@firebase/messaging",GA="@firebase/messaging-compat",QA="@firebase/performance",YA="@firebase/performance-compat",JA="@firebase/remote-config",XA="@firebase/remote-config-compat",ZA="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/ai",rR="@firebase/firestore-compat",iR="firebase",sR="12.12.0";/**
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
 */const hd="[DEFAULT]",oR={[cd]:"fire-core",[DA]:"fire-core-compat",[OA]:"fire-analytics",[VA]:"fire-analytics-compat",[MA]:"fire-app-check",[LA]:"fire-app-check-compat",[jA]:"fire-auth",[FA]:"fire-auth-compat",[UA]:"fire-rtdb",[zA]:"fire-data-connect",[BA]:"fire-rtdb-compat",[$A]:"fire-fn",[WA]:"fire-fn-compat",[HA]:"fire-iid",[qA]:"fire-iid-compat",[KA]:"fire-fcm",[GA]:"fire-fcm-compat",[QA]:"fire-perf",[YA]:"fire-perf-compat",[JA]:"fire-rc",[XA]:"fire-rc-compat",[ZA]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[rR]:"fire-fst-compat",[nR]:"fire-vertex","fire-js":"fire-js",[iR]:"fire-js-all"};/**
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
 */const Ql=new Map,aR=new Map,dd=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(dd.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,t);for(const n of Ql.values())ty(n,t);for(const n of aR.values())ty(n,t);return!0}function Ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const lR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new sa("app","Firebase",lR);/**
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
 */class uR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=sR;function fw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=lw()),!n)throw dr.create("no-options");const s=Ql.get(i);if(s){if(_r(n,s.options)&&_r(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new mA(i);for(const u of dd.values())o.addComponent(u);const l=new uR(n,r,o);return Ql.set(i,l),l}function Mf(t=hd){const e=Ql.get(t);if(!e&&t===hd&&lw())return fw();if(!e)throw dr.create("no-app",{appName:t});return e}function rn(t,e,n){let r=oR[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}oi(new vr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const cR="firebase-heartbeat-database",hR=1,Bo="firebase-heartbeat-store";let rh=null;function pw(){return rh||(rh=CA(cR,hR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function dR(t){try{const n=(await pw()).transaction(Bo),r=await n.objectStore(Bo).get(mw(t));return await n.done,r}catch(e){if(e instanceof fn)kn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function ny(t,e){try{const r=(await pw()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,mw(t)),await r.done}catch(n){if(n instanceof fn)kn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function mw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fR=1024,pR=30;class mR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ry();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>pR){const o=_R(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ry(),{heartbeatsToSend:r,unsentEntries:i}=gR(this._heartbeatsCache.heartbeats),s=Gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function ry(){return new Date().toISOString().substring(0,10)}function gR(t,e=fR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rA()?iA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ny(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ny(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function iy(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}function _R(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function vR(t){oi(new vr("platform-logger",e=>new NA(e),"PRIVATE")),oi(new vr("heartbeat",e=>new mR(e),"PRIVATE")),rn(cd,ey,t),rn(cd,ey,"esm2020"),rn("fire-js","")}vR("");function gw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wR=gw,yw=new sa("auth","Firebase",gw());/**
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
 */const Yl=new Of("@firebase/auth");function ER(t,...e){Yl.logLevel<=te.WARN&&Yl.warn(`Auth (${yi}): ${t}`,...e)}function pl(t,...e){Yl.logLevel<=te.ERROR&&Yl.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw jf(t,...e)}function sn(t,...e){return jf(t,...e)}function _w(t,e,n){const r={...wR(),[e]:n};return new sa("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return _w(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yw.create(t,...e)}function K(t,e,...n){if(!t)throw jf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pl(e),new Error(e)}function Pn(t,e){t||En(e)}/**
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
 */function fd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function TR(){return sy()==="http:"||sy()==="https:"}function sy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function IR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TR()||Z1()||"connection"in navigator)?navigator.onLine:!0}function xR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Y1()||eA()}get(){return IR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ff(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RR=new aa(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Nr(t,e,n,r,i={}){return ww(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=oa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return X1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ys(t.emulatorConfig.host)&&(c.credentials="include"),vw.fetch()(await Ew(t,t.config.apiHost,n,l),c)})}async function ww(t,e,n){t._canInitEmulator=!1;const r={...SR,...e};try{const i=new kR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ga(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _w(t,d,c);Kt(t,d)}}catch(i){if(i instanceof fn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function la(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ew(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`;return AR.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function CR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),RR.get())})}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function oy(t){return t!==void 0&&t.enterprise!==void 0}class PR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NR(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
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
 */async function bR(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function Jl(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DR(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Uf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(ih(i.auth_time)),issuedAtTime:_o(ih(i.iat)),expirationTime:_o(ih(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ih(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const i=sw(n);return i?JSON.parse(i):(pl("Failed to decode base64 JWT payload"),null)}catch(i){return pl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ay(t){const e=Uf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&VR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class OR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await $o(t,Jl(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Tw(i.providerUserInfo):[],o=MR(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new pd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function LR(t){const e=De(t);await Xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jR(t,e){const n=await ww(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ew(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ys(t.emulatorConfig.host)&&(u.credentials="include"),vw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FR(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
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
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=ay(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function $n(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new OR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DR(this,e)}reload(){return LR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await $o(this,bR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:I,providerData:S,stsTokenManager:k}=n;K(p&&k,e,"internal-error");const P=Qi.fromJSON(this.name,k);K(typeof p=="string",e,"internal-error"),$n(r,e.name),$n(i,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof I=="boolean",e,"internal-error"),$n(s,e.name),$n(o,e.name),$n(l,e.name),$n(u,e.name),$n(c,e.name),$n(d,e.name);const w=new Ut({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return S&&Array.isArray(S)&&(w.providerData=S.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Qi;l.updateFromIdToken(r);const u=new Ut({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const ly=new Map;function Tn(t){Pn(t instanceof Function,"Expected a class definition");let e=ly.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ly.set(t,e),e)}/**
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
 */class Iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iw.type="NONE";const uy=Iw;/**
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
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jl(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yi(Tn(uy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Tn(uy);const o=ml(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const g=await Jl(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Ut._fromGetAccountInfoResponse(e,g,d)}else p=Ut._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Yi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Yi(s,e,r))}}/**
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
 */function cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kw(e))return"Blackberry";if(Pw(e))return"Webos";if(Sw(e))return"Safari";if((e.includes("chrome/")||Aw(e))&&!e.includes("edge/"))return"Chrome";if(Cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xw(t=rt()){return/firefox\//i.test(t)}function Sw(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Aw(t=rt()){return/crios\//i.test(t)}function Rw(t=rt()){return/iemobile/i.test(t)}function Cw(t=rt()){return/android/i.test(t)}function kw(t=rt()){return/blackberry/i.test(t)}function Pw(t=rt()){return/webos/i.test(t)}function zf(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UR(t=rt()){var e;return zf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function zR(){return tA()&&document.documentMode===10}function Nw(t=rt()){return zf(t)||Cw(t)||Pw(t)||kw(t)||/windows phone/i.test(t)||Rw(t)}/**
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
 */function bw(t,e=[]){let n;switch(t){case"Browser":n=cy(rt());break;case"Worker":n=`${cy(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class BR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $R(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const WR=6;class HR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??WR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class qR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new BR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jl(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(xn(this));const n=e?De(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $R(this),n=new HR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ER(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _i(t){return De(t)}class hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=uA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KR(t){Lu=t}function Dw(t){return Lu.loadJS(t)}function GR(){return Lu.recaptchaEnterpriseScript}function QR(){return Lu.gapiScript}function YR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JR{constructor(){this.enterprise=new XR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ZR="recaptcha-enterprise",Vw="NO_RECAPTCHA";class eC{constructor(e){this.type=ZR,this.auth=_i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{NR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new PR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;oy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Vw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&oy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=GR();u.length!==0&&(u+=l),Dw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function dy(t,e,n,r=!1,i=!1){const s=new eC(t);let o;if(i)o=Vw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function md(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await dy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await dy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function tC(t,e){const n=Ou(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_r(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function nC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rC(t,e,n){const r=_i(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ow(e),{host:o,port:l}=iC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(_r(c,r.config.emulator)&&_r(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ys(o)?Vf(`${s}//${o}${u}`):sC()}function Ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iC(t){const e=Ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fy(o)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function oC(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function aC(t,e){return la(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
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
 */async function lC(t,e){return la(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function uC(t,e){return la(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
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
 */class Wo extends Bf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return md(e,n,"signInWithPassword",aC);case"emailLink":return lC(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return md(e,r,"signUpPassword",oC);case"emailLink":return uC(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ji(t,e){return la(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
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
 */const cC="http://localhost";class ai extends Bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:cC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
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
 */function hC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dC(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class $f{constructor(e){const n=no(ro(e)),r=n.apiKey??null,i=n.oobCode??null,s=hC(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=dC(e);try{return new $f(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$f.parseLink(n);return K(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ua extends Lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends ua{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Jn extends ua{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Xn extends ua{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function fC(t,e){return la(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ut._fromIdTokenResponse(e,r,i),o=py(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=py(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zl extends fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zl(e,n,r,i)}}function Mw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zl._fromErrorAndOperation(t,s,e,r):s})}async function pC(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function mC(t,e,n=!1){const{auth:r}=t;if(wt(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await $o(t,Mw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Uf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function jw(t,e,n=!1){if(wt(t.app))return Promise.reject(xn(t));const r="signIn",i=await Mw(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gC(t,e){return jw(_i(t),e)}/**
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
 */async function Fw(t){const e=_i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yC(t,e,n){if(wt(t.app))return Promise.reject(xn(t));const r=_i(t),o=await md(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Fw(t),u}),l=await li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function _C(t,e,n){return wt(t.app)?Promise.reject(xn(t)):gC(De(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fw(t),r})}function vC(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function wC(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function EC(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function TC(t){return De(t).signOut()}const eu="__sak";/**
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
 */class Uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eu,"1"),this.storage.removeItem(eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IC=1e3,xC=10;class zw extends Uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zw.type="LOCAL";const SC=zw;/**
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
 */class Bw extends Uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bw.type="SESSION";const $w=Bw;/**
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
 */function AC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await AC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
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
 */function Wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Wf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function CC(t){on().location.href=t}/**
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
 */function Ww(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function kC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function NC(){return Ww()?self:null}/**
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
 */const Hw="firebaseLocalStorageDb",bC=1,tu="firebaseLocalStorage",qw="fbase_key";class ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ju(t,e){return t.transaction([tu],e?"readwrite":"readonly").objectStore(tu)}function DC(){const t=indexedDB.deleteDatabase(Hw);return new ca(t).toPromise()}function gd(){const t=indexedDB.open(Hw,bC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tu,{keyPath:qw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tu)?e(r):(r.close(),await DC(),e(await gd()))})})}async function my(t,e,n){const r=ju(t,!0).put({[qw]:e,value:n});return new ca(r).toPromise()}async function VC(t,e){const n=ju(t,!1).get(e),r=await new ca(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=ju(t,!0).delete(e);return new ca(n).toPromise()}const OC=800,LC=3;class Kw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(NC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await kC(),!this.activeServiceWorker)return;this.sender=new RC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await my(e,eu,"1"),await gy(e,eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ju(i,!1).getAll();return new ca(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kw.type="LOCAL";const MC=Kw;new aa(3e4,6e4);/**
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
 */function jC(t,e){return e?Tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hf extends Bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FC(t){return jw(t.auth,new Hf(t),t.bypassAuthState)}function UC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),mC(n,new Hf(t),t.bypassAuthState)}async function zC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),pC(n,new Hf(t),t.bypassAuthState)}/**
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
 */class Gw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return zC;case"reauthViaPopup":case"reauthViaRedirect":return UC;default:Kt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BC=new aa(2e3,1e4);class Bi extends Gw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BC.get())};e()}}Bi.currentPopupAction=null;/**
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
 */const $C="pendingRedirect",gl=new Map;class WC extends Gw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=GC(e),r=KC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qC(t,e){gl.set(t._key(),e)}function KC(t){return Tn(t._redirectPersistence)}function GC(t){return ml($C,t.config.apiKey,t.name)}async function QC(t,e,n=!1){if(wt(t.app))return Promise.reject(xn(t));const r=_i(t),i=jC(r,e),o=await new WC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YC=10*60*1e3;class JC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YC&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qw(t);default:return!1}}/**
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
 */async function ZC(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
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
 */const ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tk=/^https?/;async function nk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZC(t);for(const n of e)try{if(rk(n))return}catch{}Kt(t,"unauthorized-domain")}function rk(t){const e=fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tk.test(n))return!1;if(ek.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ik=new aa(3e4,6e4);function _y(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sk(t){return new Promise((e,n)=>{var i,s,o;function r(){_y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_y(),n(sn(t,"network-request-failed"))},timeout:ik.get()})}if((s=(i=on().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=on().gapi)!=null&&o.load)r();else{const l=YR("iframefcb");return on()[l]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},Dw(`${QR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw yl=null,e})}let yl=null;function ok(t){return yl=yl||sk(t),yl}/**
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
 */const ak=new aa(5e3,15e3),lk="__/auth/iframe",uk="emulator/auth/iframe",ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,uk):`https://${t.config.authDomain}/${lk}`,r={apiKey:e.apiKey,appName:t.name,v:yi},i=hk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function fk(t){const e=await ok(t),n=on().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:dk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ck,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},ak.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mk=500,gk=600,yk="_blank",_k="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vk(t,e,n,r=mk,i=gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...pk,width:r.toString(),height:i.toString(),top:s,left:o},c=rt().toLowerCase();n&&(l=Aw(c)?yk:n),xw(c)&&(e=e||_k,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[I,S])=>`${g}${I}=${S},`,"");if(UR(c)&&l!=="_self")return wk(e||"",l),new vy(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new vy(p)}function wk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ek="__/auth/handler",Tk="emulator/auth/handler",Ik=encodeURIComponent("fac");async function wy(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:i};if(e instanceof Lw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ua){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Ik}=${encodeURIComponent(u)}`:"";return`${xk(t)}?${oa(l).slice(1)}${c}`}function xk({config:t}){return t.emulator?Ff(t,Tk):`https://${t.authDomain}/${Ek}`}/**
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
 */const sh="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$w,this._completeRedirectFn=QC,this._overrideRedirectResult=qC}async _openPopup(e,n,r,i){var o;Pn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await wy(e,n,r,fd(),i);return vk(e,s,Wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wy(e,n,r,fd(),i);return CC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fk(e),r=new JC(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sh,{type:sh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[sh];s!==void 0&&n(!!s),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nw()||Sw()||zf()}}const Ak=Sk;var Ey="@firebase/auth",Ty="1.13.0";/**
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
 */class Rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kk(t){oi(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bw(t)},c=new qR(r,i,s,u);return nC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new vr("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(r=>new Rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Ey,Ty,Ck(t)),rn(Ey,Ty,"esm2020")}/**
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
 */const Pk=5*60,Nk=uw("authIdTokenMaxAge")||Pk;let Iy=null;const bk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nk)return;const i=n==null?void 0:n.token;Iy!==i&&(Iy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dk(t=Mf()){const e=Ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tC(t,{popupRedirectResolver:Ak,persistence:[MC,SC,$w]}),r=uw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bk(s.toString());wC(n,o,()=>o(n.currentUser)),vC(n,l=>o(l))}}const i=ow("auth");return i&&rC(n,`http://${i}`),n}function Vk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}KR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Vk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kk("Browser");var xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,Yw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function T(){}T.prototype=y.prototype,E.F=y.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(A,C,N){for(var x=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)x[Be-2]=arguments[Be];return y.prototype[C].apply(A,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,T){T||(T=0);const A=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)A[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;C<16;++C)A[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=E.g[0],T=E.g[1],C=E.g[2];let N=E.g[3],x;x=y+(N^T&(C^N))+A[0]+3614090360&4294967295,y=T+(x<<7&4294967295|x>>>25),x=N+(C^y&(T^C))+A[1]+3905402710&4294967295,N=y+(x<<12&4294967295|x>>>20),x=C+(T^N&(y^T))+A[2]+606105819&4294967295,C=N+(x<<17&4294967295|x>>>15),x=T+(y^C&(N^y))+A[3]+3250441966&4294967295,T=C+(x<<22&4294967295|x>>>10),x=y+(N^T&(C^N))+A[4]+4118548399&4294967295,y=T+(x<<7&4294967295|x>>>25),x=N+(C^y&(T^C))+A[5]+1200080426&4294967295,N=y+(x<<12&4294967295|x>>>20),x=C+(T^N&(y^T))+A[6]+2821735955&4294967295,C=N+(x<<17&4294967295|x>>>15),x=T+(y^C&(N^y))+A[7]+4249261313&4294967295,T=C+(x<<22&4294967295|x>>>10),x=y+(N^T&(C^N))+A[8]+1770035416&4294967295,y=T+(x<<7&4294967295|x>>>25),x=N+(C^y&(T^C))+A[9]+2336552879&4294967295,N=y+(x<<12&4294967295|x>>>20),x=C+(T^N&(y^T))+A[10]+4294925233&4294967295,C=N+(x<<17&4294967295|x>>>15),x=T+(y^C&(N^y))+A[11]+2304563134&4294967295,T=C+(x<<22&4294967295|x>>>10),x=y+(N^T&(C^N))+A[12]+1804603682&4294967295,y=T+(x<<7&4294967295|x>>>25),x=N+(C^y&(T^C))+A[13]+4254626195&4294967295,N=y+(x<<12&4294967295|x>>>20),x=C+(T^N&(y^T))+A[14]+2792965006&4294967295,C=N+(x<<17&4294967295|x>>>15),x=T+(y^C&(N^y))+A[15]+1236535329&4294967295,T=C+(x<<22&4294967295|x>>>10),x=y+(C^N&(T^C))+A[1]+4129170786&4294967295,y=T+(x<<5&4294967295|x>>>27),x=N+(T^C&(y^T))+A[6]+3225465664&4294967295,N=y+(x<<9&4294967295|x>>>23),x=C+(y^T&(N^y))+A[11]+643717713&4294967295,C=N+(x<<14&4294967295|x>>>18),x=T+(N^y&(C^N))+A[0]+3921069994&4294967295,T=C+(x<<20&4294967295|x>>>12),x=y+(C^N&(T^C))+A[5]+3593408605&4294967295,y=T+(x<<5&4294967295|x>>>27),x=N+(T^C&(y^T))+A[10]+38016083&4294967295,N=y+(x<<9&4294967295|x>>>23),x=C+(y^T&(N^y))+A[15]+3634488961&4294967295,C=N+(x<<14&4294967295|x>>>18),x=T+(N^y&(C^N))+A[4]+3889429448&4294967295,T=C+(x<<20&4294967295|x>>>12),x=y+(C^N&(T^C))+A[9]+568446438&4294967295,y=T+(x<<5&4294967295|x>>>27),x=N+(T^C&(y^T))+A[14]+3275163606&4294967295,N=y+(x<<9&4294967295|x>>>23),x=C+(y^T&(N^y))+A[3]+4107603335&4294967295,C=N+(x<<14&4294967295|x>>>18),x=T+(N^y&(C^N))+A[8]+1163531501&4294967295,T=C+(x<<20&4294967295|x>>>12),x=y+(C^N&(T^C))+A[13]+2850285829&4294967295,y=T+(x<<5&4294967295|x>>>27),x=N+(T^C&(y^T))+A[2]+4243563512&4294967295,N=y+(x<<9&4294967295|x>>>23),x=C+(y^T&(N^y))+A[7]+1735328473&4294967295,C=N+(x<<14&4294967295|x>>>18),x=T+(N^y&(C^N))+A[12]+2368359562&4294967295,T=C+(x<<20&4294967295|x>>>12),x=y+(T^C^N)+A[5]+4294588738&4294967295,y=T+(x<<4&4294967295|x>>>28),x=N+(y^T^C)+A[8]+2272392833&4294967295,N=y+(x<<11&4294967295|x>>>21),x=C+(N^y^T)+A[11]+1839030562&4294967295,C=N+(x<<16&4294967295|x>>>16),x=T+(C^N^y)+A[14]+4259657740&4294967295,T=C+(x<<23&4294967295|x>>>9),x=y+(T^C^N)+A[1]+2763975236&4294967295,y=T+(x<<4&4294967295|x>>>28),x=N+(y^T^C)+A[4]+1272893353&4294967295,N=y+(x<<11&4294967295|x>>>21),x=C+(N^y^T)+A[7]+4139469664&4294967295,C=N+(x<<16&4294967295|x>>>16),x=T+(C^N^y)+A[10]+3200236656&4294967295,T=C+(x<<23&4294967295|x>>>9),x=y+(T^C^N)+A[13]+681279174&4294967295,y=T+(x<<4&4294967295|x>>>28),x=N+(y^T^C)+A[0]+3936430074&4294967295,N=y+(x<<11&4294967295|x>>>21),x=C+(N^y^T)+A[3]+3572445317&4294967295,C=N+(x<<16&4294967295|x>>>16),x=T+(C^N^y)+A[6]+76029189&4294967295,T=C+(x<<23&4294967295|x>>>9),x=y+(T^C^N)+A[9]+3654602809&4294967295,y=T+(x<<4&4294967295|x>>>28),x=N+(y^T^C)+A[12]+3873151461&4294967295,N=y+(x<<11&4294967295|x>>>21),x=C+(N^y^T)+A[15]+530742520&4294967295,C=N+(x<<16&4294967295|x>>>16),x=T+(C^N^y)+A[2]+3299628645&4294967295,T=C+(x<<23&4294967295|x>>>9),x=y+(C^(T|~N))+A[0]+4096336452&4294967295,y=T+(x<<6&4294967295|x>>>26),x=N+(T^(y|~C))+A[7]+1126891415&4294967295,N=y+(x<<10&4294967295|x>>>22),x=C+(y^(N|~T))+A[14]+2878612391&4294967295,C=N+(x<<15&4294967295|x>>>17),x=T+(N^(C|~y))+A[5]+4237533241&4294967295,T=C+(x<<21&4294967295|x>>>11),x=y+(C^(T|~N))+A[12]+1700485571&4294967295,y=T+(x<<6&4294967295|x>>>26),x=N+(T^(y|~C))+A[3]+2399980690&4294967295,N=y+(x<<10&4294967295|x>>>22),x=C+(y^(N|~T))+A[10]+4293915773&4294967295,C=N+(x<<15&4294967295|x>>>17),x=T+(N^(C|~y))+A[1]+2240044497&4294967295,T=C+(x<<21&4294967295|x>>>11),x=y+(C^(T|~N))+A[8]+1873313359&4294967295,y=T+(x<<6&4294967295|x>>>26),x=N+(T^(y|~C))+A[15]+4264355552&4294967295,N=y+(x<<10&4294967295|x>>>22),x=C+(y^(N|~T))+A[6]+2734768916&4294967295,C=N+(x<<15&4294967295|x>>>17),x=T+(N^(C|~y))+A[13]+1309151649&4294967295,T=C+(x<<21&4294967295|x>>>11),x=y+(C^(T|~N))+A[4]+4149444226&4294967295,y=T+(x<<6&4294967295|x>>>26),x=N+(T^(y|~C))+A[11]+3174756917&4294967295,N=y+(x<<10&4294967295|x>>>22),x=C+(y^(N|~T))+A[2]+718787259&4294967295,C=N+(x<<15&4294967295|x>>>17),x=T+(N^(C|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const T=y-this.blockSize,A=this.C;let C=this.h,N=0;for(;N<y;){if(C==0)for(;N<=T;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<y;)if(A[C++]=E.charCodeAt(N++),C==this.blockSize){i(this,A),C=0;break}}else for(;N<y;)if(A[C++]=E[N++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)E[y++]=this.g[T]>>>A&255;return E};function s(E,y){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=y(E)}function o(E,y){this.h=y;const T=[];let A=!0;for(let C=E.length-1;C>=0;C--){const N=E[C]|0;A&&N==y||(T[C]=N,A=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?s(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return P(c(-E));const y=[];let T=1;for(let A=0;E>=T;A++)y[A]=E/T|0,T*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return P(d(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let A=p;for(let N=0;N<E.length;N+=8){var C=Math.min(8,E.length-N);const x=parseInt(E.substring(N,N+C),y);C<8?(C=c(Math.pow(y,C)),A=A.j(C).add(c(x))):(A=A.j(T),A=A.add(c(x)))}return A}var p=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let E=0,y=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);E+=(A>=0?A:4294967296+A)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(k(this))return"-"+P(this).toString(E);const y=c(Math.pow(E,6));var T=this;let A="";for(;;){const C=O(T,y).g;T=w(T,C.j(y));let N=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=C,S(T))return N+A;for(;N.length<6;)N="0"+N;A=N+A}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=w(this,E),k(E)?-1:S(E)?0:1};function P(E){const y=E.g.length,T=[];for(let A=0;A<y;A++)T[A]=~E.g[A];return new o(T,~E.h).add(g)}t.abs=function(){return k(this)?P(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),T=[];let A=0;for(let C=0;C<=y;C++){let N=A+(this.i(C)&65535)+(E.i(C)&65535),x=(N>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);A=x>>>16,N&=65535,x&=65535,T[C]=x<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(P(y))}t.j=function(E){if(S(this)||S(E))return p;if(k(this))return k(E)?P(this).j(P(E)):P(P(this).j(E));if(k(E))return P(this.j(P(E)));if(this.l(I)<0&&E.l(I)<0)return c(this.m()*E.m());const y=this.g.length+E.g.length,T=[];for(var A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<E.g.length;C++){const N=this.i(A)>>>16,x=this.i(A)&65535,Be=E.i(C)>>>16,gn=E.i(C)&65535;T[2*A+2*C]+=x*gn,v(T,2*A+2*C),T[2*A+2*C+1]+=N*gn,v(T,2*A+2*C+1),T[2*A+2*C+1]+=x*Be,v(T,2*A+2*C+1),T[2*A+2*C+2]+=N*Be,v(T,2*A+2*C+2)}for(E=0;E<y;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=y;E<2*y;E++)T[E]=0;return new o(T,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function R(E,y){this.g=E,this.h=y}function O(E,y){if(S(y))throw Error("division by zero");if(S(E))return new R(p,p);if(k(E))return y=O(P(E),y),new R(P(y.g),P(y.h));if(k(y))return y=O(E,P(y)),new R(P(y.g),y.h);if(E.g.length>30){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;A.l(E)<=0;)T=j(T),A=j(A);var C=U(T,1),N=U(A,1);for(A=U(A,2),T=U(T,2);!S(A);){var x=N.add(A);x.l(E)<=0&&(C=C.add(T),N=x),A=U(A,1),T=U(T,1)}return y=w(E,C.j(y)),new R(C,y)}for(C=p;E.l(y)>=0;){for(T=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),N=c(T),x=N.j(y);k(x)||x.l(E)>0;)T-=A,N=c(T),x=N.j(y);S(N)&&(N=g),C=C.add(N),E=w(E,x)}return new R(C,E)}t.B=function(E){return O(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)&E.i(A);return new o(T,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)|E.i(A);return new o(T,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)^E.i(A);return new o(T,this.h^E.h)};function j(E){const y=E.g.length+1,T=[];for(let A=0;A<y;A++)T[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(T,E.h)}function U(E,y){const T=y>>5;y%=32;const A=E.g.length-T,C=[];for(let N=0;N<A;N++)C[N]=y>0?E.i(N+T)>>>y|E.i(N+T+1)<<32-y:E.i(N+T);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Yw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,fr=o}).apply(typeof xy<"u"?xy:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jw,io,Xw,_l,yd,Zw,eE,tE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var b=a[_];if(!(b in f))break e;f=f[b]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&f.push([_,h[_]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(_,b,D){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[b].apply(_,z)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function S(a,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const D=b.length||0;a.length=f+D;for(let z=0;z<D;z++)a[f+z]=b[z]}else a.push(b)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const _=R.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var R=new k(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,E=new v,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){P(f)}var h=R;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function x(a){return/^[\s\xa0]*$/.test(a)}function Be(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Be,C),Be.prototype.init=function(a,h){const f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gn="closure_listenable_"+(Math.random()*1e6|0),Ss=0;function As(a,h,f,_,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=b,this.key=++Ss,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function X(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function me(a){const h={};for(const f in a)h[f]=a[f];return h}const xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lr(a,h){let f,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(f in _)a[f]=_[f];for(let D=0;D<xe.length;D++)f=xe[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function Rt(a){this.src=a,this.g={},this.h=0}Rt.prototype.add=function(a,h,f,_,b){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const z=Ot(a,h,_,b);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new As(h,this.src,D,!!_,b),h.fa=f,a.push(h)),h};function Mr(a,h){const f=h.type;if(f in a.g){var _=a.g[f],b=Array.prototype.indexOf.call(_,h,void 0),D;(D=b>=0)&&Array.prototype.splice.call(_,b,1),D&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ot(a,h,f,_){for(let b=0;b<a.length;++b){const D=a[b];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==_)return b}return-1}var On="closure_lm_"+(Math.random()*1e6|0),sc={};function Dp(a,h,f,_,b){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Dp(a,h[D],f,_,b);return null}return f=Lp(f),a&&a[gn]?a.J(h,f,l(_)?!!_.capture:!1,b):zT(a,h,f,!1,_,b)}function zT(a,h,f,_,b,D){if(!h)throw Error("Invalid event type");const z=l(b)?!!b.capture:!!b;let Z=ac(a);if(Z||(a[On]=Z=new Rt(a)),f=Z.add(h,f,_,z,D),f.proxy)return f;if(_=BT(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)N||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),_,b);else if(a.attachEvent)a.attachEvent(Op(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function BT(){function a(f){return h.call(a.src,a.listener,f)}const h=$T;return a}function Vp(a,h,f,_,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)Vp(a,h[D],f,_,b);else _=l(_)?!!_.capture:!!_,f=Lp(f),a&&a[gn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],f=Ot(h,f,_,b),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=ac(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ot(h,f,_,b)),(f=a>-1?h[a]:null)&&oc(f))}function oc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gn])Mr(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(Op(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=ac(h))?(Mr(f,a),f.h==0&&(f.src=null,h[On]=null)):$(a)}}}function Op(a){return a in sc?sc[a]:sc[a]="on"+a}function $T(a,h){if(a.da)a=!0;else{h=new Be(h,this);const f=a.listener,_=a.ha||a.src;a.fa&&oc(a),a=f.call(_,h)}return a}function ac(a){return a=a[On],a instanceof Rt?a:null}var lc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Lp(a){return typeof a=="function"?a:(a[lc]||(a[lc]=function(h){return a.handleEvent(h)}),a[lc])}function Qe(){A.call(this),this.i=new Rt(this),this.M=this,this.G=null}p(Qe,A),Qe.prototype[gn]=!0,Qe.prototype.removeEventListener=function(a,h,f,_){Vp(this,a,h,f,_)};function st(a,h){var f,_=a.G;if(_)for(f=[];_;_=_.G)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var b=h;h=new C(_,a),Lr(h,b)}b=!0;let D,z;if(f)for(z=f.length-1;z>=0;z--)D=h.g=f[z],b=va(D,_,!0,h)&&b;if(D=h.g=a,b=va(D,_,!0,h)&&b,b=va(D,_,!1,h)&&b,f)for(z=0;z<f.length;z++)D=h.g=f[z],b=va(D,_,!1,h)&&b}Qe.prototype.N=function(){if(Qe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let _=0;_<f.length;_++)$(f[_]);delete a.g[h],a.h--}}this.G=null},Qe.prototype.J=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},Qe.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function va(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let D=0;D<h.length;++D){const z=h[D];if(z&&!z.da&&z.capture==f){const Z=z.listener,Ve=z.ha||z.src;z.fa&&Mr(a.i,z),b=Z.call(Ve,_)!==!1&&b}}return b&&!_.defaultPrevented}function WT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Mp(a){a.g=WT(()=>{a.g=null,a.i&&(a.i=!1,Mp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HT extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Mp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rs(a){A.call(this),this.h=a,this.g={}}p(Rs,A);var jp=[];function Fp(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&oc(h)},a),a.g={}}Rs.prototype.N=function(){Rs.Z.N.call(this),Fp(this)},Rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uc=o.JSON.stringify,qT=o.JSON.parse,KT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Up(){}function zp(){}var Cs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cc(){C.call(this,"d")}p(cc,C);function hc(){C.call(this,"c")}p(hc,C);var jr={},Bp=null;function wa(){return Bp=Bp||new Qe}jr.Ia="serverreachability";function $p(a){C.call(this,jr.Ia,a)}p($p,C);function ks(a){const h=wa();st(h,new $p(h))}jr.STAT_EVENT="statevent";function Wp(a,h){C.call(this,jr.STAT_EVENT,a),this.stat=h}p(Wp,C);function ot(a){const h=wa();st(h,new Wp(h,a))}jr.Ja="timingevent";function Hp(a,h){C.call(this,jr.Ja,a),this.size=h}p(Hp,C);function Ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ns(){this.g=!0}Ns.prototype.ua=function(){this.g=!1};function GT(a,h,f,_,b,D){a.info(function(){if(a.g)if(D){var z="",Z=D.split("&");for(let le=0;le<Z.length;le++){var Ve=Z[le].split("=");if(Ve.length>1){const je=Ve[0];Ve=Ve[1];const Yt=je.split("_");z=Yt.length>=2&&Yt[1]=="type"?z+(je+"="+Ve+"&"):z+(je+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+f+`
`+z})}function QT(a,h,f,_,b,D,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+f+`
`+D+" "+z})}function Ei(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+JT(a,f)+(_?" "+_:"")})}function YT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ns.prototype.info=function(){};function JT(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var f=D[a];if(!(f.length<2)){var _=f[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return uc(D)}catch{return h}}var Ea={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kp;function dc(){}p(dc,Up),dc.prototype.g=function(){return new XMLHttpRequest},Kp=new dc;function bs(a){return encodeURIComponent(String(a))}function XT(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Ln(a,h,f,_){this.j=a,this.i=h,this.l=f,this.S=_||1,this.V=new Rs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gp}function Gp(){this.i=null,this.g="",this.h=!1}var Qp={},fc={};function pc(a,h,f){a.M=1,a.A=Ia(Qt(h)),a.u=f,a.R=!0,Yp(a,null)}function Yp(a,h){a.F=Date.now(),Ta(a),a.B=Qt(a.A);var f=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),um(f.i,"t",_),a.C=0,f=a.j.L,a.h=new Gp,a.g=Rm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new HT(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,_=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(jp[0]=b.toString()),b=jp);for(let D=0;D<b.length;D++){const z=Dp(f,b[D],_||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ks(),GT(a.i,a.v,a.B,a.l,a.S,a.u)}Ln.prototype.ba=function(a){a=a.target;const h=this.O;h&&Fn(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Fn(this.g),Ve=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||gm(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||le<=0?ks(3):ks(2)),mc(this);var h=this.g.ca();this.X=h;var f=ZT(this);if(this.o=h==200,QT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(_)){var D=_;break t}}D=null}if(a=D)Ei(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gc(this,a);else{this.o=!1,this.m=3,ot(12),Fr(this),Ds(this);break e}}if(this.R){a=!0;let je;for(;!this.K&&this.C<f.length;)if(je=eI(this,f),je==fc){Z==4&&(this.m=4,ot(14),a=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(je==Qp){this.m=4,ot(15),Ei(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ei(this.i,this.l,je,null),gc(this,je);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)Ei(this.i,this.l,f,"[Invalid Chunked Response]"),Fr(this),Ds(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),xc(z),z.P=!0,ot(11))}}else Ei(this.i,this.l,f,null),gc(this,f);Z==4&&Fr(this),this.o&&!this.K&&(Z==4?Im(this.j,this):(this.o=!1,Ta(this)))}else pI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Fr(this),Ds(this)}}}catch{}finally{}};function ZT(a){if(!Jp(a))return a.g.la();const h=gm(a.g);if(h==="")return"";let f="";const _=h.length,b=Fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Fr(a),Ds(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<_;D++)a.h.h=!0,f+=a.h.i.decode(h[D],{stream:!(b&&D==_-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function eI(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?fc:(f=Number(h.substring(f,_)),isNaN(f)?Qp:(_+=1,_+f>h.length?fc:(h=h.slice(_,_+f),a.C=_+f,h)))}Ln.prototype.cancel=function(){this.K=!0,Fr(this)};function Ta(a){a.T=Date.now()+a.H,Xp(a,a.H)}function Xp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ps(c(a.aa,a),h)}function mc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Ln.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(YT(this.i,this.B),this.M!=2&&(ks(),ot(17)),Fr(this),this.m=2,Ds(this)):Xp(this,this.T-a)};function Ds(a){a.j.I==0||a.K||Im(a.j,a)}function Fr(a){mc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Fp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function gc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||yc(f.h,a))){if(!a.L&&yc(f.h,a)&&f.I==3){try{var _=f.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ca(f),Aa(f);else break e;Ic(f),ot(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ps(c(f.Va,f),6e3));tm(f.h)<=1&&f.ta&&(f.ta=void 0)}else zr(f,11)}else if((a.L||f.g==a)&&Ca(f),!x(h))for(b=f.Ba.g.parse(h),h=0;h<b.length;h++){let le=b[h];const je=le[0];if(!(je<=f.K))if(f.K=je,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const Yt=le[3];Yt!=null&&(f.ka=Yt,f.j.info("VER="+f.ka));const Br=le[4];Br!=null&&(f.za=Br,f.j.info("SVER="+f.za));const Un=le[5];Un!=null&&typeof Un=="number"&&Un>0&&(_=1.5*Un,f.O=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const zn=a.g;if(zn){const Pa=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var D=_.h;D.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(_c(D,D.h),D.h=null))}if(_.G){const Sc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sc&&(_.wa=Sc,he(_.J,_.G,Sc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),_=f;var z=a;if(_.na=Am(_,_.L?_.ba:null,_.W),z.L){nm(_.h,z);var Z=z,Ve=_.O;Ve&&(Z.H=Ve),Z.D&&(mc(Z),Ta(Z)),_.g=z}else Em(_);f.i.length>0&&Ra(f)}else le[0]!="stop"&&le[0]!="close"||zr(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?zr(f,7):Tc(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}ks(4)}catch{}}var tI=class{constructor(a,h){this.g=a,this.map=h}};function Zp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function em(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tm(a){return a.h?1:a.g?a.g.size:0}function yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _c(a,h){a.g?a.g.add(h):a.h=h}function nm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Zp.prototype.cancel=function(){if(this.i=rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const _=a[f].indexOf("=");let b,D=null;_>=0?(b=a[f].substring(0,_),D=a[f].substring(_+1)):b=a[f],h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,Vs(this,a.j),this.o=a.o,this.g=a.g,Os(this,a.u),this.h=a.h,vc(this,cm(a.i)),this.m=a.m):a&&(h=String(a).match(im))?(this.l=!1,Vs(this,h[1]||"",!0),this.o=Ls(h[2]||""),this.g=Ls(h[3]||"",!0),Os(this,h[4]),this.h=Ls(h[5]||"",!0),vc(this,h[6]||"",!0),this.m=Ls(h[7]||"")):(this.l=!1,this.i=new js(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ms(h,sm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ms(h,sm,!0),"@"),a.push(bs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ms(f,f.charAt(0)=="/"?sI:iI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ms(f,aI)),a.join("")},Mn.prototype.resolve=function(a){const h=Qt(this);let f=!!a.j;f?Vs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var _=a.h;if(f)Os(h,a.u);else if(f=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const D=[];for(let z=0;z<b.length;){const Z=b[z++];Z=="."?_&&z==b.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),_&&z==b.length&&D.push("")):(D.push(Z),_=!0)}_=D.join("/")}else _=b}return f?h.h=_:f=a.i.toString()!=="",f?vc(h,cm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Qt(a){return new Mn(a)}function Vs(a,h,f){a.j=f?Ls(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Os(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function vc(a,h,f){h instanceof js?(a.i=h,lI(a.i,a.l)):(f||(h=Ms(h,oI)),a.i=new js(h,a.l))}function he(a,h,f){a.i.set(h,f)}function Ia(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ls(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,rI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sm=/[#\/\?@]/g,iI=/[#\?:]/g,sI=/[#\?]/g,oI=/[#\?@]/g,aI=/#/g;function js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&nI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=js.prototype,t.add=function(a,h){Ur(this),this.i=null,a=Ti(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function om(a,h){Ur(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function am(a,h){return Ur(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){Ur(this),this.g.forEach(function(f,_){f.forEach(function(b){a.call(h,b,_,this)},this)},this)};function lm(a,h){Ur(a);let f=[];if(typeof h=="string")am(a,h)&&(f=f.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Ur(this),this.i=null,a=Ti(this,a),am(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=lm(this,a),a.length>0?String(a[0]):h):h};function um(a,h,f){om(a,h),f.length>0&&(a.i=null,a.g.set(Ti(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var f=h[_];const b=bs(f);f=lm(this,f);for(let D=0;D<f.length;D++){let z=b;f[D]!==""&&(z+="="+bs(f[D])),a.push(z)}}return this.i=a.join("&")};function cm(a){const h=new js;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function lI(a,h){h&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(f,_){const b=_.toLowerCase();_!=b&&(om(this,_),um(this,b,f))},a)),a.j=h}function uI(a,h){const f=new Ns;if(o.Image){const _=new Image;_.onload=d(jn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=d(jn,f,"TestLoadImage: error",!1,h,_),_.onabort=d(jn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=d(jn,f,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function cI(a,h){const f=new Ns,_=new AbortController,b=setTimeout(()=>{_.abort(),jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(b),D.ok?jn(f,"TestPingServer: ok",!0,h):jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),jn(f,"TestPingServer: error",!1,h)})}function jn(a,h,f,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(f)}catch{}}function hI(){this.g=new KT}function wc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(wc,Up),wc.prototype.g=function(){return new xa(this.i,this.h)};function xa(a,h){Qe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xa,Qe),t=xa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Fs(this):Us(this),this.readyState==3&&hm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},t.Na=function(a){this.g&&(this.response=a,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Us(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dm(a){let h="";return Q(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Ec(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=dm(f),typeof a=="string"?f!=null&&bs(f):he(a,h,f))}function Te(a){Qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Te,Qe);var dI=/^https?$/i,fI=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){fm(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)f.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(fI,h,void 0)>=0)||_||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){fm(this,D)}};function fm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,pm(a),Sa(a)}function pm(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,st(this,"complete"),st(this,"abort"),Sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sa(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?mm(this):this.Xa())},t.Xa=function(){mm(this)};function mm(a){if(a.h&&typeof s<"u"){if(a.v&&Fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(st(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=D===0){let z=String(a.D).match(im)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!dI.test(z?z.toLowerCase():"")}f=_}if(f)st(a,"complete"),st(a,"success");else{a.o=6;try{var b=Fn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",pm(a)}}finally{Sa(a)}}}}function Sa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||st(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qT(h)}};function gm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pI(a){const h={};a=(a.g&&Fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(x(a[_]))continue;var f=XT(a[_]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[b]||[];h[b]=D,D.push(f)}X(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ym(a){this.za=0,this.i=[],this.j=new Ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,a),this.Za=zs("retryDelaySeedMs",1e4,a),this.Ta=zs("forwardChannelMaxRetries",2,a),this.va=zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zp(a&&a.concurrentRequestLimit),this.Ba=new hI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ym.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,_){ot(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.J=Am(this,null,this.W),Ra(this)};function Tc(a){if(_m(a),a.I==3){var h=a.V++,f=Qt(a.J);if(he(f,"SID",a.M),he(f,"RID",h),he(f,"TYPE","terminate"),Bs(a,f),h=new Ln(a,a.j,h),h.M=2,h.A=Ia(Qt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Rm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ta(h)}Sm(a)}function Aa(a){a.g&&(xc(a),a.g.cancel(),a.g=null)}function _m(a){Aa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ca(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ra(a){if(!em(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||y(),U||(j(),U=!0),E.add(h,a),a.D=0}}function mI(a,h){return tm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ps(c(a.Ea,a,h),xm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new Ln(this,this.j,a);let D=this.o;if(this.U&&(D?(D=me(D),Lr(D,this.U)):D=this.U),this.u!==null||this.R||(b.J=D,D=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=wm(this,b,h),f=Qt(this.J),he(f,"RID",a),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),Bs(this,f),D&&(this.R?h="headers="+bs(dm(D))+"&"+h:this.u&&Ec(f,this.u,D)),_c(this.h,b),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",h),he(f,"SID","null"),b.U=!0,pc(b,f,null)):pc(b,f,h),this.I=2}}else this.I==3&&(a?vm(this,a):this.i.length==0||em(this.h)||vm(this))};function vm(a,h){var f;h?f=h.l:f=a.V++;const _=Qt(a.J);he(_,"SID",a.M),he(_,"RID",f),he(_,"AID",a.K),Bs(a,_),a.u&&a.o&&Ec(_,a.u,a.o),f=new Ln(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=wm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_c(a.h,f),pc(f,_,h)}function Bs(a,h){a.H&&Q(a.H,function(f,_){he(h,_,f)}),a.l&&Q({},function(f,_){he(h,_,f)})}function wm(a,h,f){f=Math.min(a.i.length,f);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let Z=-1;for(;;){const Ve=["count="+f];Z==-1?f>0?(Z=b[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let le=!0;for(let je=0;je<f;je++){var D=b[je].g;const Yt=b[je].map;if(D-=Z,D<0)Z=Math.max(0,b[je].g-100),le=!1;else try{D="req"+D+"_"||"";try{var z=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Br,Un]of z){let zn=Un;l(Un)&&(zn=uc(Un)),Ve.push(D+Br+"="+encodeURIComponent(zn))}}catch(Br){throw Ve.push(D+"type="+encodeURIComponent("_badmap")),Br}}catch{_&&_(Yt)}}if(le){z=Ve.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function Em(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||y(),U||(j(),U=!0),E.add(h,a),a.A=0}}function Ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ps(c(a.Da,a),xm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Tm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ps(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),Aa(this),Tm(this))};function xc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tm(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Bs(a,h),a.u&&a.o&&Ec(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ia(Qt(h)),f.u=null,f.R=!0,Yp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Aa(this),Ic(this),ot(19))};function Ca(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Im(a,h){var f=null;if(a.g==h){Ca(a),xc(a),a.g=null;var _=2}else if(yc(a.h,h))f=h.G,nm(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;_=wa(),st(_,new Hp(_,f)),Ra(a)}else Em(a);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&mI(a,h)||_==2&&Ic(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),b){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function xm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function zr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),_=a.Ua;const b=!_;_=new Mn(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Vs(_,"https"),Ia(_),b?uI(_.toString(),f):cI(_.toString(),f)}else ot(2);a.I=0,a.l&&a.l.pa(h),Sm(a),_m(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Sm(a){if(a.I=0,a.ja=[],a.l){const h=rm(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Am(a,h,f){var _=f instanceof Mn?Qt(f):new Mn(f);if(_.g!="")h&&(_.g=h+"."+_.g),Os(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const D=new Mn(null);_&&Vs(D,_),h&&(D.g=h),b&&Os(D,b),f&&(D.h=f),_=D}return f=a.G,h=a.wa,f&&h&&he(_,f,h),he(_,"VER",a.ka),Bs(a,_),_}function Rm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new wc({ab:f})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cm(){}t=Cm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ka(){}ka.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Qe.call(this),this.g=new ym(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!x(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ii(this)}p(_t,Qe),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Tc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=uc(a),a=f);h.i.push(new tI(h.Ya++,a)),h.I==3&&Ra(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,_t.Z.N.call(this)};function km(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(km,cc);function Pm(){hc.call(this),this.status=1}p(Pm,hc);function Ii(a){this.g=a}p(Ii,Cm),Ii.prototype.ra=function(){st(this.g,"a")},Ii.prototype.qa=function(a){st(this.g,new km(a))},Ii.prototype.pa=function(a){st(this.g,new Pm)},Ii.prototype.oa=function(){st(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,tE=function(){return new ka},eE=function(){return wa()},Zw=jr,yd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,_l=Ea,qp.COMPLETE="complete",Xw=qp,zp.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",Qe.prototype.listen=Qe.prototype.J,io=zp,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,Jw=Te}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let vs="12.12.0";function Ok(t){vs=t}/**
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
 *//**
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
 */const ui=new Of("@firebase/firestore");function Si(){return ui.logLevel}function W(t,...e){if(ui.logLevel<=te.DEBUG){const n=e.map(qf);ui.debug(`Firestore (${vs}): ${t}`,...n)}}function Nn(t,...e){if(ui.logLevel<=te.ERROR){const n=e.map(qf);ui.error(`Firestore (${vs}): ${t}`,...n)}}function ci(t,...e){if(ui.logLevel<=te.WARN){const n=e.map(qf);ui.warn(`Firestore (${vs}): ${t}`,...n)}}function qf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,nE(t,r,n)}function nE(t,e,n){let r=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||nE(e,i,r)}function J(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class Mk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jk{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new rE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class Fk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Uk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Fk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Sy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Bk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Bk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function _d(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return oh(i)===oh(s)?ne(i,s):oh(i)?1:-1}return ne(t.length,e.length)}const $k=55296,Wk=57343;function oh(t){const e=t.charCodeAt(0);return e>=$k&&e<=Wk}function as(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Ay="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Zt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),i=Zt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):_d(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fr.fromString(e.substring(4,e.length-2))}}class ue extends Zt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const Hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Zt{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Hk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ay}static keyField(){return new He([Ay])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ue.fromString(e))}static fromName(e){return new q(ue.fromString(e).popFirst(5))}static empty(){return new q(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ue(e.slice()))}}/**
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
 */function iE(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qk(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ry(t){if(!q.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cy(t){if(q.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ha(t,e){if(!sE(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const ky=-62135596800,Py=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Py);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ky)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Py}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ha(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ky;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Pe("string",fe._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ho=-1;function Kk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new wr(i,q.empty(),e)}function Gk(t){return new wr(t.readTime,t.key,Ho)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(Y.min(),q.empty(),Ho)}static max(){return new wr(Y.max(),q.empty(),Ho)}}function Qk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const Yk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ws(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Yk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Xk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Uu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Uu.ce=-1;/**
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
 */const Gf=-1;function zu(t){return t==null}function nu(t){return t===0&&1/t==-1/0}function Zk(t){return typeof t=="number"&&Number.isInteger(t)&&!nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const oE="";function eP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ny(e)),e=tP(t.get(n),e);return Ny(e)}function tP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case oE:n+="";break;default:n+=s}}return n}function Ny(t){return t+oE+""}/**
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
 */function by(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lE("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const nP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=nP.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */const uE="server_timestamp",cE="__type__",hE="__previous_value__",dE="__local_write_time__";function Qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[cE])==null?void 0:r.stringValue)===uE}function Bu(t){const e=t.mapValue.fields[hE];return Qf(e)?Bu(e):e}function qo(t){const e=Er(t.mapValue.fields[dE].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class rP{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const ru="(default)";class Ko{constructor(e,n){this.projectId=e,this.database=n||ru}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database===ru}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}function iP(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(t.options.projectId,e)}/**
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
 */const fE="__type__",sP="__max__",Ja={mapValue:{}},pE="__vector__",iu="value";function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qf(t)?4:aP(t)?9007199254740991:oP(t)?10:11:G(28295,{value:t})}function hn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Tr(i.bytesValue).isEqual(Tr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?nu(o)===nu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(by(o)!==by(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Go(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Vy(t.timestampValue,e.timestampValue);case 4:return Vy(qo(t),qo(e));case 5:return _d(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Tr(s),u=Tr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ne(l[c],u[c]);if(d!==0)return d}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Se(s.latitude),Se(o.latitude));return l!==0?l:ne(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Oy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,I,S,k;const l=s.fields||{},u=o.fields||{},c=(g=l[iu])==null?void 0:g.arrayValue,d=(I=u[iu])==null?void 0:I.arrayValue,p=ne(((S=c==null?void 0:c.values)==null?void 0:S.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Oy(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ja.mapValue&&o===Ja.mapValue)return 0;if(s===Ja.mapValue)return 1;if(o===Ja.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=_d(u[p],d[p]);if(g!==0)return g;const I=ls(l[u[p]],c[d[p]]);if(I!==0)return I}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function Vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Er(t),r=Er(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Oy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ls(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function us(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vd(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function vl(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bu(t);return e?16+vl(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+vl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return br(r.fields,(s,o)=>{i+=s.length+vl(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function Ly(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wd(t){return!!t&&"integerValue"in t}function Yf(t){return!!t&&"arrayValue"in t}function My(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function oP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[fE])==null?void 0:r.stringValue)===pE}function vo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return{...t}}function aP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sP}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){br(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(vo(this.value))}}function mE(t){const e=[];return br(t.fields,(n,r)=>{const i=new He([n]);if(wl(r)){const s=mE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class su{constructor(e,n){this.position=e,this.inclusive=n}}function Fy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function lP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gE{}class ke extends gE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cP(e,n,r):n==="array-contains"?new fP(e,r):n==="in"?new pP(e,r):n==="not-in"?new mP(e,r):n==="array-contains-any"?new gP(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hP(e,r):new dP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ls(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends gE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gt(e,n)}matches(e){return yE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yE(t){return t.op==="and"}function _E(t){return uP(t)&&yE(t)}function uP(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function Ed(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+us(t.value);if(_E(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function vE(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&hn(r.value,i.value)}(t,e):t instanceof Gt?function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&vE(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function wE(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${us(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(wE).join(" ,")+"}"}(t):"Filter"}class cP extends ke{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class hP extends ke{constructor(e,n){super(e,"in",n),this.keys=EE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dP extends ke{constructor(e,n){super(e,"not-in",n),this.keys=EE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function EE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class fP extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yf(n)&&Go(n.arrayValue,this.value)}}class pP extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class mP extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Go(this.value.arrayValue,n)}}class gP extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class yP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function zy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yP(t,e,n,r,i,s,o)}function Jf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),e.Te=n}return e.Te}function Xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uy(t.startAt,e.startAt)&&Uy(t.endAt,e.endAt)}function Td(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ts{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function _P(t,e,n,r,i,s,o,l){return new Ts(t,e,n,r,i,s,o,l)}function Zf(t){return new Ts(t)}function By(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vP(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function TE(t){return t.collectionGroup!==null}function wo(t){const e=J(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Qo(s,r))}),n.has(He.keyField().canonicalString())||e.Ee.push(new Qo(He.keyField(),r))}return e.Ee}function ln(t){const e=J(t);return e.Ie||(e.Ie=wP(e,wo(t))),e.Ie}function wP(t,e){if(t.limitType==="F")return zy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qo(i.field,s)});const n=t.endAt?new su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new su(t.startAt.position,t.startAt.inclusive):null;return zy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e){const n=t.filters.concat([e]);return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function EP(t,e){const n=t.explicitOrderBy.concat([e]);return new Ts(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function xd(t,e,n){return new Ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $u(t,e){return Xf(ln(t),ln(e))&&t.limitType===e.limitType}function IE(t){return`${Jf(ln(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wE(i)).join(", ")}]`),zu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>us(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Fy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,wo(r),i)||r.endAt&&!function(o,l,u){const c=Fy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,wo(r),i))}(t,e)}function TP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xE(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=IP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function IP(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ls(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aE(this.inner)}size(){return this.innerSize}}/**
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
 */const xP=new Ee(q.comparator);function bn(){return xP}const SE=new Ee(q.comparator);function so(...t){let e=SE;for(const n of t)e=e.insert(n.key,n);return e}function AE(t){let e=SE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Eo()}function RE(){return Eo()}function Eo(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const SP=new Ee(q.comparator),AP=new Me(q.comparator);function re(...t){let e=AP;for(const n of t)e=e.add(n);return e}const RP=new Me(ne);function CP(){return RP}/**
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
 */function ep(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function CE(t){return{integerValue:""+t}}function kP(t,e){return Zk(e)?CE(e):ep(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Hu{constructor(){this._=void 0}}function PP(t,e,n){return t instanceof ou?function(i,s){const o={fields:{[cE]:{stringValue:uE},[dE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qf(s)&&(s=Bu(s)),s&&(o.fields[hE]=s),{mapValue:o}}(n,e):t instanceof cs?PE(t,e):t instanceof Yo?NE(t,e):function(i,s){const o=kE(i,s),l=$y(o)+$y(i.Ae);return wd(o)&&wd(i.Ae)?CE(l):ep(i.serializer,l)}(t,e)}function NP(t,e,n){return t instanceof cs?PE(t,e):t instanceof Yo?NE(t,e):n}function kE(t,e){return t instanceof au?function(r){return wd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ou extends Hu{}class cs extends Hu{constructor(e){super(),this.elements=e}}function PE(t,e){const n=bE(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Hu{constructor(e){super(),this.elements=e}}function NE(t,e){let n=bE(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class au extends Hu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function $y(t){return Se(t.integerValue||t.doubleValue)}function bE(t){return Yf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class bP{constructor(e,n){this.field=e,this.transform=n}}function DP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof cs&&i instanceof cs||r instanceof Yo&&i instanceof Yo?as(r.elements,i.elements,hn):r instanceof au&&i instanceof au?hn(r.Ae,i.Ae):r instanceof ou&&i instanceof ou}(t.transform,e.transform)}class VP{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qu{}function DE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tp(t.key,Wt.none()):new da(t.key,t.data,Wt.none());{const n=t.data,r=ft.empty();let i=new Me(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Tt(i.toArray()),Wt.none())}}function OP(t,e,n){t instanceof da?function(i,s,o){const l=i.value.clone(),u=Hy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!El(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Hy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(VE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,r){return t instanceof da?function(s,o,l,u){if(!El(s.precondition,o))return l;const c=s.value.clone(),d=qy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,l,u){if(!El(s.precondition,o))return l;const c=qy(s.fieldTransforms,u,o),d=o.data;return d.setAll(VE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return El(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kE(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function Wy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&as(r,i,(s,o)=>DP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class da extends qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,NP(o,l,n[i]))}return r}function qy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PP(s,o,e))}return r}class tp extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MP extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=To(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=DE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Wy(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Wy(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return SP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
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
 */class FP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class UP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Re,ie;function zP(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function OE(t){if(t===void 0)return Nn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(ie=Re||(Re={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BP(){return new TextEncoder}/**
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
 */const $P=new fr([4294967295,4294967295],0);function Ky(t){const e=BP().encode(t),n=new Yw;return n.update(e),new Uint8Array(n.digest())}function Gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fr([n,r],0),new fr([i,s],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oo(`Invalid padding: ${n}`);if(r<0)throw new oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(fr.fromNumber(r)));return i.compare($P)===1&&(i=new fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ky(e),[r,i]=Gy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ky(e),[r,i]=Gy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ku{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ku(Y.min(),i,new Ee(ne),bn(),re())}}class fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fa(r,n,re(),re(),re())}}/**
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
 */class Tl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class LE{constructor(e,n){this.targetId=e,this.Ce=n}}class ME{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Qy{constructor(){this.ve=0,this.Fe=Yy(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new fa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Yy()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WP{constructor(e){this.Ge=e,this.ze=new Map,this.je=bn(),this.Je=Xa(),this.He=Xa(),this.Ze=new Ee(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Td(s))if(r===0){const o=new q(s.path);this.et(n,o,tt.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(u){if(u instanceof lE)return ci("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new rp(o,i,s)}catch(u){return ci(u instanceof oo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Td(l.target)){const u=new q(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,tt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ku(e,n,this.Ze,this.je,r);return this.je=bn(),this.Je=Xa(),this.He=Xa(),this.Ze=new Ee(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Qy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Me(ne),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Me(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new Ee(q.comparator)}function Yy(){return new Ee(q.comparator)}const HP={asc:"ASCENDING",desc:"DESCENDING"},qP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KP={and:"AND",or:"OR"};class GP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||zu(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QP(t,e){return lu(t,e.toTimestamp())}function un(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=Er(n);return new fe(r.seconds,r.nanos)}(t))}function ip(t,e){return Ad(t,e).canonicalString()}function Ad(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FE(t){const e=ue.fromString(t);return oe(WE(e),10190,{key:e.toString()}),e}function Rd(t,e){return ip(t.databaseId,e.path)}function ah(t,e){const n=FE(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(zE(n))}function UE(t,e){return ip(t.databaseId,e)}function YP(t){const e=FE(t);return e.length===4?ue.emptyPath():zE(e)}function Cd(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zE(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Jy(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function JP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(oe(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:OE(c.code);return new B(d,c.message||"")}(o);n=new ME(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ah(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):Y.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Tl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ah(t,r.document),s=r.readTime?un(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ah(t,r.document),s=r.removedTargetIds||[];n=new Tl([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new UP(i,s),l=r.targetId;n=new LE(l,o)}}return n}function XP(t,e){let n;if(e instanceof da)n={update:Jy(t,e.key,e.value)};else if(e instanceof tp)n={delete:Rd(t,e.key)};else if(e instanceof Dr)n={update:Jy(t,e.key,e.data),updateMask:aN(e.fieldMask)};else{if(!(e instanceof MP))return G(16599,{dt:e.type});n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ou)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof cs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof au)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:QP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function ZP(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(Y.min())&&(o=un(s)),new VP(o,i.transformResults||[])}(n,e))):[]}function eN(t,e){return{documents:[UE(t,e.path)]}}function tN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=UE(t,i);const s=function(c){if(c.length!==0)return $E(Gt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Ri(g.field),direction:iN(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function nN(t){let e=YP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=BE(p);return g instanceof Gt&&_E(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Qo(Ci(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,zu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,I=p.values||[];return new su(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,I=p.values||[];return new su(I,g)}(n.endAt)),_P(e,i,o,s,l,"F",u,c)}function rN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ci(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ci(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return ke.create(Ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>BE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function iN(t){return HP[t]}function sN(t){return qP[t]}function oN(t){return KP[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Ci(t){return He.fromServerFormat(t.fieldPath)}function $E(t){return t instanceof ke?function(n){if(n.op==="=="){if(jy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(My(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(My(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:sN(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(i=>$E(i));return r.length===1?r[0]:{compositeFilter:{op:oN(n.op),filters:r}}}(t):G(54877,{filter:t})}function aN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function HE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class nr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lN{constructor(e){this.yt=e}}function uN(t){const e=nN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
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
 */class cN{constructor(){this.bn=new hN}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(wr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class hN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qE=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(qE,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class hs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new hs(0)}static ar(){return new hs(-1)}}/**
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
 */const Zy="LruGarbageCollector",dN=1048576;function e_([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class fN{constructor(e){this.Pr=e,this.buffer=new Me(e_),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();e_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Zy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?W(Zy,"Ignoring IndexedDB error during garbage collection: ",n):await ws(n)}await this.Ar(3e5)})}}class mN{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Uu.ce);const r=new fN(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Xy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Si()<=te.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function gN(t,e){return new mN(t,e)}/**
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
 */class yN{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class _N{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&To(r.mutation,i,Tt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=so();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=bn();const o=Eo(),l=function(){return Eo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Dr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),To(d.mutation,c,d.mutation.getFieldMask(),fe.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new _N(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Eo();let i=new Ee((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Tt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=RE();d.forEach(g=>{if(!s.has(g)){const I=DE(n.get(g),r.get(g));I!==null&&p.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return vP(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Qr());let l=Ho,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:AE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=so();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=so();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,g){return new Ts(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,tt.newInvalidDocument(d)))});let l=so();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&To(d.mutation,c,Tt.empty(),fe.now()),Wu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class wN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:uN(i.bundledQuery),readTime:un(i.readTime)}}(n)),M.resolve()}}/**
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
 */class EN{constructor(){this.overlays=new Ee(q.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Qr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Qr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FP(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class TN{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class sp{constructor(){this.kr=new Me(Fe.qr),this.Kr=new Me(Fe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Fe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new ue([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new q(new ue([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=re();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return q.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
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
 */class IN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(Fe.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Gf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new q(s),0);let l=new Me(ne);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xN{constructor(e){this.ti=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Qk(Gk(d),r)<=0||(i.has(d.key)||Wu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SN(this)}getSize(e){return M.resolve(this.size)}}class SN extends yN{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class AN{constructor(e){this.persistence=e,this.ri=new vi(n=>Jf(n),Xf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new sp,this.targetCount=0,this.oi=hs._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class KE{constructor(e,n){this._i={},this.overlays={},this.ai=new Uu(0),this.ui=!1,this.ui=!0,this.ci=new TN,this.referenceDelegate=e(this),this.li=new AN(this),this.indexManager=new cN,this.remoteDocumentCache=function(i){return new xN(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new lN(n),this.Pi=new wN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new IN(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new RN(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class RN extends Jk{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Ri=new sp,this.Ai=null}static Vi(e){return new op(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class uu{constructor(e,n){this.persistence=e,this.fi=new vi(r=>eP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=gN(this,n)}static Vi(e,n){return new uu(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ap{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ap(e,n.fromCache,r,i)}}/**
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
 */class CN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return nA()?8:Xk(rt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CN;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Si()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Si()<=te.DEBUG&&W("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Si()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}gs(e,n){if(By(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,xd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return By(n)||i.isEqual(Y.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Si()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.Ds(e,o,n,Kk(i,Ho)).next(l=>l))})}Ss(e,n){let r=new Me(xE(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Si()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.fs.getDocumentsMatchingQuery(e,n,wr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const lp="LocalStore",PN=3e8;class NN{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ee(ne),this.Fs=new vi(s=>Jf(s),Xf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function bN(t,e,n,r){return new NN(t,e,n,r)}async function GE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function DN(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let I=M.resolve();return g.forEach(S=>{I=I.next(()=>d.getEntry(u,S)).next(k=>{const P=c.docVersions.get(S);oe(P!==null,48541),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function QE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function VN(t,e){const n=J(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,p)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(k,P,w){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=PN?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,I,d)&&l.push(n.li.updateTargetData(s,I))});let u=bn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(ON(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(Y.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function ON(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(lp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function LN(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MN(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function kd(t,e,n){const r=J(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Es(o))throw o;W(lp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function t_(t,e,n){const r=J(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),g=p.Fs.get(d);return g!==void 0?M.resolve(p.vs.get(g)):p.li.getTargetData(c,d)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(jN(r,TP(e),l),{documents:l,ks:s})))}function jN(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class n_{constructor(){this.activeTargetIds=CP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FN{constructor(){this.vo=new n_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new n_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UN{Mo(e){}shutdown(){}}/**
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
 */const r_="ConnectivityMonitor";class i_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(r_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(r_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Za=null;function Pd(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
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
 */const lh="RestConnection",zN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class BN{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===ru?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Pd(),l=this.Qo(e,n.toUriEncodedString());W(lh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=ys(c);return this.zo(e,l,u,r,d).then(p=>(W(lh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ci(lh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=zN[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class $N{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Xe="WebChannelConnection",Js=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Xi extends BN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xi.c_){const e=eE();Js(e,Zw.STAT_EVENT,n=>{n.stat===yd.PROXY?W(Xe,"STAT_EVENT: detected buffering proxy"):n.stat===yd.NOPROXY&&W(Xe,"STAT_EVENT: detected no buffering proxy")}),Xi.c_=!0}}zo(e,n,r,i,s){const o=Pd();return new Promise((l,u)=>{const c=new Jw;c.setWithCredentials(!0),c.listenOnce(Xw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _l.NO_ERROR:const p=c.getResponseJson();W(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case _l.TIMEOUT:W(Xe,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const g=c.getStatus();if(W(Xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const k=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(S.status);u(new B(k,S.message))}else u(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Xe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);W(Xe,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Pd(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");W(Xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let p=!1,g=!1;const I=new $N({Jo:S=>{g?W(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(p||(W(Xe,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),W(Xe,`RPC '${e}' stream ${i} sending:`,S),d.send(S))},Ho:()=>d.close()});return Js(d,io.EventType.OPEN,()=>{g||(W(Xe,`RPC '${e}' stream ${i} transport opened.`),I.i_())}),Js(d,io.EventType.CLOSE,()=>{g||(g=!0,W(Xe,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.I_(d))}),Js(d,io.EventType.ERROR,S=>{g||(g=!0,ci(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,S.name,"Message:",S.message),I.o_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),Js(d,io.EventType.MESSAGE,S=>{var k;if(!g){const P=S.data[0];oe(!!P,16349);const w=P,v=(w==null?void 0:w.error)||((k=w[0])==null?void 0:k.error);if(v){W(Xe,`RPC '${e}' stream ${i} received error:`,v);const R=v.status;let O=function(E){const y=Re[E];if(y!==void 0)return OE(y)}(R),j=v.message;R==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ci(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=L.INTERNAL,j="Unknown error status: "+R+" with message "+v.message),g=!0,I.o_(new B(O,j)),d.close()}else W(Xe,`RPC '${e}' stream ${i} received:`,P),I.__(P)}}),Xi.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return tE()}}/**
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
 */function WN(t){return new Xi(t)}function uh(){return typeof document<"u"?document:null}/**
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
 */function Gu(t){return new GP(t,!0)}/**
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
 */Xi.c_=!1;class YE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const s_="PersistentStream";class JE{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new YE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(s_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(s_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HN extends JE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=JP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?un(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Cd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Td(u)?{documents:eN(s,u)}:{query:tN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jE(s,o.resumeToken);const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=lu(s,o.snapshotVersion.toTimestamp());const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=rN(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Cd(this.serializer),n.removeTarget=e,this.q_(n)}}class qN extends JE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ZP(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Cd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XP(this.serializer,r))};this.q_(n)}}/**
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
 */class KN{}class GN extends KN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ad(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Ad(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function QN(t,e,n,r){return new GN(t,e,n,r)}class YN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const hi="RemoteStore";class JN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{wi(this)&&(W(hi,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ia.add(4),await pa(c),c.Va.set("Unknown"),c.Ia.delete(4),await Qu(c)}(this))})}),this.Va=new YN(r,i)}}async function Qu(t){if(wi(t))for(const e of t.Ra)await e(!0)}async function pa(t){for(const e of t.Ra)await e(!1)}function XE(t,e){const n=J(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),dp(n)?hp(n):Is(n).O_()&&cp(n,e))}function up(t,e){const n=J(t),r=Is(n);n.Ea.delete(e),r.O_()&&ZE(n,e),n.Ea.size===0&&(r.O_()?r.L_():wi(n)&&n.Va.set("Unknown"))}function cp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).Z_(e)}function ZE(t,e){t.da.$e(e),Is(t).X_(e)}function hp(t){t.da=new WP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.Va.ua()}function dp(t){return wi(t)&&!Is(t).x_()&&t.Ea.size>0}function wi(t){return J(t).Ia.size===0}function eT(t){t.da=void 0}async function XN(t){t.Va.set("Online")}async function ZN(t){t.Ea.forEach((e,n)=>{cp(t,e)})}async function e2(t,e){eT(t),dp(t)?(t.Va.ha(e),hp(t)):t.Va.set("Unknown")}async function t2(t,e,n){if(t.Va.set("Online"),e instanceof ME&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){W(hi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cu(t,r)}else if(e instanceof Tl?t.da.Xe(e):e instanceof LE?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await QE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),ZE(s,u);const p=new nr(d.target,u,c,d.sequenceNumber);cp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(hi,"Failed to raise snapshot:",r),await cu(t,r)}}async function cu(t,e,n){if(!Es(e))throw e;t.Ia.add(1),await pa(t),t.Va.set("Offline"),n||(n=()=>QE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(hi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Qu(t)})}function tT(t,e){return e().catch(n=>cu(t,n,e))}async function Yu(t){const e=J(t),n=xr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gf;for(;n2(e);)try{const i=await LN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,r2(e,i)}catch(i){await cu(e,i)}nT(e)&&rT(e)}function n2(t){return wi(t)&&t.Ta.length<10}function r2(t,e){t.Ta.push(e);const n=xr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function nT(t){return wi(t)&&!xr(t).x_()&&t.Ta.length>0}function rT(t){xr(t).start()}async function i2(t){xr(t).ra()}async function s2(t){const e=xr(t);for(const n of t.Ta)e.ea(n.mutations)}async function o2(t,e,n){const r=t.Ta.shift(),i=np.from(r,e,n);await tT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yu(t)}async function a2(t,e){e&&xr(t).Y_&&await async function(r,i){if(function(o){return zP(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();xr(r).B_(),await tT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yu(r)}}(t,e),nT(t)&&rT(t)}async function o_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W(hi,"RemoteStore received new credentials");const r=wi(n);n.Ia.add(3),await pa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Qu(n)}async function l2(t,e){const n=J(t);e?(n.Ia.delete(2),await Qu(n)):e||(n.Ia.add(2),await pa(n),n.Va.set("Unknown"))}function Is(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new HN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:XN.bind(null,t),Yo:ZN.bind(null,t),t_:e2.bind(null,t),H_:t2.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),dp(t)?hp(t):t.Va.set("Unknown")):(await t.ma.stop(),eT(t))})),t.ma}function xr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new qN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:i2.bind(null,t),t_:a2.bind(null,t),ta:s2.bind(null,t),na:o2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Yu(t)):(await t.fa.stop(),t.Ta.length>0&&(W(hi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class fp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Es(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zi{static emptySet(e){return new Zi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class a_{constructor(){this.ga=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ds(e,n,Zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class u2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class c2{constructor(){this.queries=l_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=l_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function l_(){return new vi(t=>IE(t),$u)}async function iT(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new u2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pp(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&mp(n)}async function sT(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function h2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&mp(n)}function d2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function mp(t){t.Ca.forEach(e=>{e.next()})}var Nd,u_;(u_=Nd||(Nd={})).Ma="default",u_.Cache="cache";class oT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Nd.Cache}}/**
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
 */class aT{constructor(e){this.key=e}}class lT{constructor(e){this.key=e}}class f2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=xE(e),this.tu=new Zi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new a_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),I=Wu(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;g&&I?g.data.isEqual(I.data)?S!==k&&(r.track({type:3,doc:I}),P=!0):this.su(g,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),P=!0):g&&!I&&(r.track({type:1,doc:g}),P=!0,(u||c)&&(l=!0)),P&&(I?(o=o.add(I),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(I,S){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:P})}};return k(I)-k(S)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new ds(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new a_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new lT(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new aT(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ds.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const gp="SyncEngine";class p2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class m2{constructor(e){this.key=e,this.hu=!1}}class g2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new vi(l=>IE(l),$u),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ee(q.comparator),this.Au=new Map,this.Vu=new sp,this.du={},this.mu=new Map,this.fu=hs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function y2(t,e,n=!0){const r=pT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await uT(r,e,n,!0),i}async function _2(t,e){const n=pT(t);await uT(n,e,!0,!1)}async function uT(t,e,n,r){const i=await MN(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await v2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&XE(t.remoteStore,i),l}async function v2(t,e,n,r,i){t.pu=(p,g,I)=>async function(k,P,w,v){let R=P.view.ru(w);R.bs&&(R=await t_(k.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,R)));const O=v&&v.targetChanges.get(P.targetId),j=v&&v.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(R,k.isPrimaryClient,O,j);return h_(k,P.targetId,U.au),U.snapshot}(t,p,g,I);const s=await t_(t.localStore,e,!0),o=new f2(e,s.ks),l=o.ru(s.documents),u=fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);h_(t,n,c.au);const d=new p2(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function w2(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!$u(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&up(r.remoteStore,i.targetId),bd(r,i.targetId)}).catch(ws)):(bd(r,i.targetId),await kd(r.localStore,i.targetId,!0))}async function E2(t,e){const n=J(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),up(n.remoteStore,r.targetId))}async function T2(t,e,n){const r=k2(t);try{const i=await function(o,l){const u=J(o),c=fe.now(),d=l.reduce((I,S)=>I.add(S.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=bn(),k=re();return u.xs.getEntries(I,d).next(P=>{S=P,S.forEach((w,v)=>{v.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,S)).next(P=>{p=P;const w=[];for(const v of l){const R=LP(v,p.get(v.key).overlayedDocument);R!=null&&w.push(new Dr(v.key,R,mE(R.value.mapValue),Wt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(P=>{g=P;const w=P.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(I,P.batchId,w)})}).then(()=>({batchId:g.batchId,changes:AE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ee(ne)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await ma(r,i.changes),await Yu(r.remoteStore)}catch(i){const s=pp(i,"Failed to persist write");n.reject(s)}}async function cT(t,e){const n=J(t);try{const r=await VN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await ma(n,r,e)}catch(r){await ws(r)}}function c_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.Sa)g.va(l)&&(c=!0)}),c&&mp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee(q.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=re().add(s),u=new Ku(Y.min(),new Map,new Ee(ne),o,l);await cT(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),yp(r)}else await kd(r.localStore,e,!1).then(()=>bd(r,e,n)).catch(ws)}async function x2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await DN(n.localStore,e);dT(n,r,null),hT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ma(n,i)}catch(i){await ws(i)}}async function S2(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);dT(r,e,n),hT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ma(r,i)}catch(i){await ws(i)}}function hT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function dT(t,e,n){const r=J(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||fT(t,r)})}function fT(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(up(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),yp(t))}function h_(t,e,n){for(const r of n)r instanceof aT?(t.Vu.addReference(r.key,e),A2(t,r)):r instanceof lT?(W(gp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||fT(t,r.key)):G(19791,{wu:r})}function A2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(W(gp,"New document in limbo: "+n),t.Iu.add(r),yp(t))}function yp(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new q(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new m2(n)),t.Ru=t.Ru.insert(n,r),XE(t.remoteStore,new nr(ln(Zf(n.path)),r,"TargetPurposeLimboResolution",Uu.ce))}}async function ma(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=ap.Is(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,g=>M.forEach(g.Ts,I=>d.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>M.forEach(g.Es,I=>d.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!Es(p))throw p;W(lp,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const I=d.vs.get(g),S=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(S);d.vs=d.vs.insert(g,k)}}}(r.localStore,s))}async function R2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W(gp,"User change. New user:",e.toKey());const r=await GE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ma(n,r.Ns)}}function C2(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function pT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I2.bind(null,e),e.Pu.H_=h2.bind(null,e.eventManager),e.Pu.yu=d2.bind(null,e.eventManager),e}function k2(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S2.bind(null,e),e}class hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return bN(this.persistence,new kN,e.initialUser,this.serializer)}Cu(e){return new KE(op.Vi,this.serializer)}Du(e){return new FN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hu.provider={build:()=>new hu};class P2 extends hu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof uu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new KE(r=>uu.Vi(r,n),this.serializer)}}class Dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>c_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R2.bind(null,this.syncEngine),await l2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new c2}()}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),r=WN(e.databaseInfo);return QN(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new JN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>c_(this.syncEngine,n,0),function(){return i_.v()?new i_:new UN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new g2(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);W(hi,"RemoteStore shutting down."),s.Ia.add(5),await pa(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Dd.provider={build:()=>new Dd};/**
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
 *//**
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
 */class mT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Sr="FirestoreClient";class N2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=Kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Sr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Sr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ch(t,e){t.asyncQueue.verifyOperationInProgress(),W(Sr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b2(t);W(Sr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>o_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>o_(e.remoteStore,i)),t._onlineComponents=e}async function b2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Sr,"Using user provided OfflineComponentProvider");try{await ch(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ci("Error using user provided cache. Falling back to memory cache: "+n),await ch(t,new hu)}}else W(Sr,"Using default OfflineComponentProvider"),await ch(t,new P2(void 0));return t._offlineComponents}async function gT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Sr,"Using user provided OnlineComponentProvider"),await d_(t,t._uninitializedComponentsProvider._online)):(W(Sr,"Using default OnlineComponentProvider"),await d_(t,new Dd))),t._onlineComponents}function D2(t){return gT(t).then(e=>e.syncEngine)}async function Vd(t){const e=await gT(t),n=e.eventManager;return n.onListen=y2.bind(null,e.syncEngine),n.onUnlisten=w2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=E2.bind(null,e.syncEngine),n}function V2(t,e,n,r){const i=new mT(r),s=new oT(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>iT(await Vd(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>sT(await Vd(t),s))}}function O2(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new mT({next:g=>{d.Nu(),o.enqueueAndForget(()=>sT(s,p)),g.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new oT(l,d,{includeMetadataChanges:!0,qa:!0});return iT(s,p)}(await Vd(t),t.asyncQueue,e,n,r)),r.promise}function L2(t,e){const n=new pr;return t.asyncQueue.enqueueAndForget(async()=>T2(await D2(t),e,n)),n.promise}/**
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
 */function yT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const M2="ComponentProvider",f_=new Map;function j2(t,e,n,r,i){return new rP(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,yT(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const _T="firestore.googleapis.com",p_=!0;class m_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_T,this.ssl=p_}else this.host=e.host,this.ssl=e.ssl??p_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dN)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lk;switch(r.type){case"firstParty":return new Uk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=f_.get(n);r&&(W(M2,"Removing Datastore"),f_.delete(n),r.terminate())}(this),Promise.resolve()}}function F2(t,e,n,r={}){var c;t=an(t,Ju);const i=ys(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Vf(`https://${l}`),s.host!==_T&&s.host!==l&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!_r(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ze.MOCK_USER;else{d=cw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(g)}t._authCredentials=new Mk(new rE(d,p))}}/**
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
 */class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ha(n,Ne._jsonSchema))return new Ne(e,r||null,new q(ue.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Pe("string",Ne._jsonSchemaVersion),referencePath:Pe("string")};class mr extends Vr{constructor(e,n,r){super(e,n,Zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new q(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Dn(t,e,...n){if(t=De(t),iE("collection","path",e),t instanceof Ju){const r=ue.fromString(e,...n);return Cy(r),new mr(t,null,r)}{if(!(t instanceof Ne||t instanceof mr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Cy(r),new mr(t.firestore,null,r)}}function Or(t,e,...n){if(t=De(t),arguments.length===1&&(e=Kf.newId()),iE("doc","path",e),t instanceof Ju){const r=ue.fromString(e,...n);return Ry(r),new Ne(t,null,new q(r))}{if(!(t instanceof Ne||t instanceof mr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Ry(r),new Ne(t.firestore,t instanceof mr?t.converter:null,new q(r))}}/**
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
 */const g_="AsyncQueue";class y_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new YE(this,"async_queue_retry"),this._c=()=>{const r=uh();r&&W(g_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=uh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=uh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new pr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Es(e))throw e;W(g_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nn("INTERNAL UNHANDLED ERROR: ",__(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=fp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:__(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function __(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class di extends Ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new y_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new y_(e),this._firestoreClient=void 0,await e}}}function U2(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:ru,i=Ou(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aw("firestore");s&&F2(i,...s)}return i}function _p(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||z2(t),t._firestoreClient}function z2(t){var r,i,s,o;const e=t._freezeSettings(),n=j2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new N2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Ge.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ha(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Pe("string",Pt._jsonSchemaVersion),bytes:Pe("string")};/**
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
 */class vp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xu{constructor(e){this._methodName=e}}/**
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
 */class cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(e){if(ha(e,cn._jsonSchema))return new cn(e.latitude,e.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:Pe("string",cn._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ha(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:Pe("string",Ht._jsonSchemaVersion),vectorValues:Pe("object")};/**
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
 */const B2=/^__.*__$/;class $2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new da(e,this.data,n,this.fieldTransforms)}}class vT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Zu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Zu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return du(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(wT(this.dataSource)&&B2.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class W2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gu(e)}I(e,n,r,i=!1){return new Zu({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wp(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new W2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function H2(t,e,n,r,i,s={}){const o=t.I(s.merge||s.mergeFields?2:0,e,n,i);Tp("Data must be an object, but it was:",o,r);const l=ET(r,o);let u,c;if(s.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=fi(e,p,n);if(!o.contains(g))throw new B(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);xT(d,g)||d.push(g)}u=new Tt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new $2(new ft(l),u,c)}class ec extends Xu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function q2(t,e,n){return new Zu({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ep extends Xu{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=q2(this,e,!0),r=this.Sc.map(s=>xs(s,n)),i=new cs(r);return new bP(e.path,i)}isEqual(e){return e instanceof Ep&&_r(this.Sc,e.Sc)}}function K2(t,e,n,r){const i=t.I(1,e,n);Tp("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();br(r,(u,c)=>{const d=IT(e,u,n);c=De(c);const p=i.fc(d);if(c instanceof ec)s.push(d);else{const g=xs(c,p);g!=null&&(s.push(d),o.set(d,g))}});const l=new Tt(s);return new vT(o,l,i.fieldTransforms)}function G2(t,e,n,r,i,s){const o=t.I(1,e,n),l=[fi(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(fi(e,s[g])),u.push(s[g+1]);const c=[],d=ft.empty();for(let g=l.length-1;g>=0;--g)if(!xT(c,l[g])){const I=l[g];let S=u[g];S=De(S);const k=o.fc(I);if(S instanceof ec)c.push(I);else{const P=xs(S,k);P!=null&&(c.push(I),d.set(I,P))}}const p=new Tt(c);return new vT(d,p,o.fieldTransforms)}function Q2(t,e,n,r=!1){return xs(n,t.I(r?4:3,e))}function xs(t,e){if(TT(t=De(t)))return Tp("Unsupported field value:",e,t),ET(t,e);if(t instanceof Xu)return function(r,i){if(!wT(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=xs(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:lu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(i.serializer,s)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:jE(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ip(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,l){const u=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[fE]:{stringValue:pE},[iu]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return ep(l.serializer,d)})}}}}}}(r,i);if(HE(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Fu(r)}`)}(t,e)}function ET(t,e){const n={};return aE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,i)=>{const s=xs(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof cn||t instanceof Pt||t instanceof Ne||t instanceof Xu||t instanceof Ht||HE(t))}function Tp(t,e,n){if(!TT(n)||!sE(n)){const r=Fu(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function fi(t,e,n){if((e=De(e))instanceof vp)return e._internalPath;if(typeof e=="string")return IT(t,e);throw du("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y2=new RegExp("[~\\*/\\[\\]]");function IT(t,e,n){if(e.search(Y2)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vp(...e.split("."))._internalPath}catch{throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function xT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class J2{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[iu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Se(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new cn(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(WE(r),9688,{name:e});const i=new Ko(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ip extends J2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function ST(...t){return new Ep("arrayUnion",t)}const v_="@firebase/firestore",w_="4.14.0";/**
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
 */function E_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class AT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(fi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X2 extends AT{data(){return super.data()}}/**
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
 */function RT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xp{}class CT extends xp{}function ga(t,e,...n){let r=[];e instanceof xp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Sp).length,l=s.filter(u=>u instanceof tc).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class tc extends CT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tc(e,n,r)}_apply(e){const n=this._parse(e);return PT(e._query,n),new Vr(e.firestore,e.converter,Id(e._query,n))}_parse(e){const n=wp(e.firestore);return function(s,o,l,u,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){I_(p,d);const S=[];for(const k of p)S.push(T_(u,s,k));g={arrayValue:{values:S}}}else g=T_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||I_(p,d),g=Q2(l,o,p,d==="in"||d==="not-in");return ke.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kT(t,e,n){const r=e,i=fi("where",t);return tc._create(i,r,n)}class Sp extends xp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)PT(o,u),o=Id(o,u)}(e._query,n),new Vr(e.firestore,e.converter,Id(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ap extends CT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ap(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qo(s,o)}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,EP(e._query,n))}}function Rp(t,e="asc"){const n=e,r=fi("orderBy",t);return Ap._create(r,n)}function T_(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!TE(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!q.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ly(t,new q(r))}if(n instanceof Ne)return Ly(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fu(n)}.`)}function I_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Z2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zr extends AT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zr._jsonSchema={type:Pe("string",Zr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Il extends Zr{data(e={}){return super.data(e)}}class ei{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ao(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ao(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ao(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:eb(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */ei._jsonSchemaVersion="firestore/querySnapshot/1.0",ei._jsonSchema={type:Pe("string",ei._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};function tb(t){t=an(t,Vr);const e=an(t.firestore,di),n=_p(e),r=new Ip(e);return RT(t._query),O2(n,t._query).then(i=>new ei(e,r,t,i))}function nc(t,e,n,...r){t=an(t,Ne);const i=an(t.firestore,di),s=wp(i);let o;return o=typeof(e=De(e))=="string"||e instanceof vp?G2(s,"updateDoc",t._key,e,n,r):K2(s,"updateDoc",t._key,e),kp(i,[o.toMutation(t._key,Wt.exists(!0))])}function Cp(t){return kp(an(t.firestore,di),[new tp(t._key,Wt.none())])}function rc(t,e){const n=an(t.firestore,di),r=Or(t),i=Z2(t.converter,e),s=wp(t.firestore);return kp(n,[H2(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function ya(t,...e){var c,d,p;t=De(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||E_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(E_(e[r])){const g=e[r];e[r]=(c=g.next)==null?void 0:c.bind(g),e[r+1]=(d=g.error)==null?void 0:d.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let s,o,l;if(t instanceof Ne)o=an(t.firestore,di),l=Zf(t._key.path),s={next:g=>{e[r]&&e[r](nb(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=an(t,Vr);o=an(g.firestore,di),l=g._query;const I=new Ip(o);s={next:S=>{e[r]&&e[r](new ei(o,I,g,S))},error:e[r+1],complete:e[r+2]},RT(t._query)}const u=_p(o);return V2(u,l,i,s)}function kp(t,e){const n=_p(t);return L2(n,e)}function nb(t,e,n){const r=n.docs.get(e._key),i=new Ip(t);return new Zr(t,i,e._key,r,new ao(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Ok(yi),oi(new vr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new di(new jk(r.getProvider("auth-internal")),new zk(o,r.getProvider("app-check-internal")),iP(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),rn(v_,w_,e),rn(v_,w_,"esm2020")})();var rb="firebase",ib="12.12.1";/**
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
 */rn(rb,ib,"app");/**
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
 */const NT="firebasestorage.googleapis.com",sb="storageBucket",ob=2*60*1e3,ab=10*60*1e3;/**
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
 */class pn extends fn{constructor(e,n,r=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var dn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(dn||(dn={}));function hh(t){return"storage/"+t}function lb(){const t="An unknown error occurred, please check the error payload for server response.";return new pn(dn.UNKNOWN,t)}function ub(){return new pn(dn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cb(){return new pn(dn.CANCELED,"User canceled the upload/download.")}function hb(t){return new pn(dn.INVALID_URL,"Invalid URL '"+t+"'.")}function db(t){return new pn(dn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function x_(t){return new pn(dn.INVALID_ARGUMENT,t)}function bT(){return new pn(dn.APP_DELETED,"The Firebase app was deleted.")}function fb(t){return new pn(dn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zt.makeFromUrl(e,n)}catch{return new zt(e,"")}if(r.path==="")return r;throw db(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),S={bucket:1,path:3},k=n===NT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",w=new RegExp(`^https?://${k}/${i}/${P}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:I,indices:S,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<R.length;O++){const j=R[O],U=j.regex.exec(e);if(U){const E=U[j.indices.bucket];let y=U[j.indices.path];y||(y=""),r=new zt(E,y),j.postModify(r);break}}if(r==null)throw hb(e);return r}}class pb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function mb(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(I,u())},P)}function g(){s&&clearTimeout(s)}function I(P,...w){if(c){g();return}if(P){g(),d.call(null,P,...w);return}if(u()||o){g(),d.call(null,P,...w);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let S=!1;function k(P){S||(S=!0,g(),!c&&(i!==null?(P||(l=2),clearTimeout(i),p(0)):P||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function gb(t){t(!1)}/**
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
 */function yb(t){return t!==void 0}function S_(t,e,n,r){if(r<e)throw x_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw x_(`Invalid value for '${t}'. Expected ${n} or less.`)}function _b(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var fu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fu||(fu={}));/**
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
 */function vb(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class wb{constructor(e,n,r,i,s,o,l,u,c,d,p,g=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new el(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===fu.NO_ERROR,u=s.getStatus();if(!l||vb(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===fu.ABORT;r(!1,new el(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new el(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());yb(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=lb();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?bT():cb();o(u)}else{const u=ub();o(u)}};this.canceled_?n(!1,new el(!1,null,!0)):this.backoffId_=mb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class el{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Eb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Tb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ib(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Sb(t,e,n,r,i,s,o=!0,l=!1){const u=_b(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return Ib(d,e),Eb(d,n),Tb(d,s),xb(d,r),new wb(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function Ab(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Rb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class pu{constructor(e,n){this._service=e,n instanceof zt?this._location=n:this._location=zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pu(e,n)}get root(){const e=new zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rb(this._location.path)}get storage(){return this._service}get parent(){const e=Ab(this._location.path);if(e===null)return null;const n=new zt(this._location.bucket,e);return new pu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fb(e)}}function A_(t,e){const n=e==null?void 0:e[sb];return n==null?null:zt.makeFromBucketSpec(n,t)}function Cb(t,e,n,r={}){t.host=`${e}:${n}`;const i=ys(e);i&&Vf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:cw(s,t.app.options.projectId))}class kb{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=NT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ob,this._maxUploadRetryTime=ab,this._requests=new Set,i!=null?this._bucket=zt.makeFromBucketSpec(i,this._host):this._bucket=A_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,e):this._bucket=A_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){S_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){S_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new pb(bT());{const o=Sb(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const R_="@firebase/storage",C_="0.14.2";/**
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
 */const DT="storage";function Pb(t=Mf(),e){t=De(t);const r=Ou(t,DT).getImmediate({identifier:e}),i=aw("storage");return i&&Nb(r,...i),r}function Nb(t,e,n,r={}){Cb(t,e,n,r)}function bb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kb(n,r,i,e,yi)}function Db(){oi(new vr(DT,bb,"PUBLIC").setMultipleInstances(!0)),rn(R_,C_,""),rn(R_,C_,"esm2020")}Db();const Vb={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},Pp=fw(Vb),mu=Dk(Pp),it=U2(Pp);Pb(Pp);const VT=V.createContext({user:null,family:null,loading:!0});function mn(){return V.useContext(VT)}function Ob({children:t}){const[e,n]=V.useState(null),[r,i]=V.useState(null),[s,o]=V.useState(!0),[l,u]=V.useState(!1);V.useEffect(()=>EC(mu,async p=>{n(p),o(!1),p||(i(null),u(!1))}),[]),V.useEffect(()=>{if(!e){i(null);return}u(!0);const d=Dn(it,"families"),p=ga(d,kT("members","array-contains",e.uid));return ya(p,I=>{if(I.empty)i(null);else{const S=I.docs[0];i({id:S.id,...S.data()})}u(!1)})},[e==null?void 0:e.uid]);const c=s||l;return m.jsx(VT.Provider,{value:{user:e,family:r,loading:c},children:t})}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OT=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=V.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>V.createElement("svg",{ref:u,...Mb,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:OT("lucide",i),...l},[...o.map(([c,d])=>V.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(t,e)=>{const n=V.forwardRef(({className:r,...i},s)=>V.createElement(jb,{ref:s,iconNode:e,className:OT(`lucide-${Lb(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=ye("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=ye("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=ye("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=ye("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=ye("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=ye("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=ye("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=ye("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=ye("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=ye("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=ye("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=ye("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=ye("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Xb(t,e){const n=ga(Dn(it,"families",t,"trips"),Rp("createdAt","desc"));return ya(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i)})}async function Zb(t,e,n){const r=Dn(it,"families",t,"trips"),i={...e,createdAt:new Date().toISOString(),createdBy:n};return{id:(await rc(r,i)).id,...i}}async function eD(t,e){await Cp(Or(it,"families",t,"trips",e))}function tD(t,e,n){const r=ga(Dn(it,"families",t,"trips",e,"photos"),Rp("createdAt","asc"));return ya(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));n(s)})}async function nD(t,e,n){const r=Dn(it,"families",t,"trips",e,"photos"),i={...n,createdAt:new Date().toISOString()};return{id:(await rc(r,i)).id,...i}}async function rD(t,e,n){await Cp(Or(it,"families",t,"trips",e,"photos",n))}async function iD(t,e,n,r){await nc(Or(it,"families",t,"trips",e,"photos",n),r)}function sD(t,e,n){const r=ga(Dn(it,"families",t,"trips",e,"itinerary"),Rp("date","asc"));return ya(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));n(s)})}async function oD(t,e,n){const r=Dn(it,"families",t,"trips",e,"itinerary"),i={...n};return{id:(await rc(r,i)).id,...i}}async function aD(t,e,n){await Cp(Or(it,"families",t,"trips",e,"itinerary",n))}async function lD(t,e,n,r){const i={...r,id:crypto.randomUUID()};return await nc(Or(it,"families",t,"trips",e,"itinerary",n),{activities:ST(i)}),i}async function k_(t,e,n,r){await nc(Or(it,"families",t,"trips",e,"itinerary",n),{activities:r})}function uD({coverPhoto:t,name:e}){if(!t)return m.jsx("div",{className:"w-full h-full cover-gradient-amber flex items-center justify-center",children:m.jsx("span",{className:"text-white text-4xl font-bold opacity-70",children:e.charAt(0)})});if(t.startsWith("gradient-")){const r=`cover-gradient-${t.replace("gradient-","")}`;return m.jsx("div",{className:`w-full h-full ${r} flex items-center justify-center`,children:m.jsx("span",{className:"text-white text-4xl font-bold opacity-70",children:e.charAt(0)})})}return m.jsx("img",{src:t,alt:e,className:"w-full h-full object-cover"})}function cD(t,e){const n=new Date(t),r=new Date(e),i=s=>`${s.getFullYear()}年${s.getMonth()+1}月${s.getDate()}日`;return`${i(n)} — ${i(r)}`}function hD({trip:t,photoCount:e,onDelete:n}){const r=ia(),i=s=>{s.stopPropagation(),window.confirm(`确认删除「${t.name}」？此操作不可撤销。`)&&n(t.id)};return m.jsxs("div",{className:"bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200 fade-in",onClick:()=>r(`/trips/${t.id}`),children:[m.jsxs("div",{className:"relative h-48 overflow-hidden",children:[m.jsx(uD,{coverPhoto:t.coverPhoto,name:t.name}),m.jsxs("div",{className:"absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm",children:[e," 张照片"]}),m.jsx("button",{onClick:i,className:"absolute top-3 right-3 bg-black/30 hover:bg-red-500 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors",title:"删除行程",children:m.jsx(ic,{size:14})})]}),m.jsxs("div",{className:"p-4",children:[m.jsx("h3",{className:"font-bold text-gray-900 text-lg leading-tight",children:t.name}),m.jsxs("div",{className:"mt-2 space-y-1.5",children:[m.jsxs("div",{className:"flex items-center gap-1.5 text-gray-500 text-sm",children:[m.jsx(_a,{size:14,className:"text-amber-500 flex-shrink-0"}),m.jsx("span",{className:"truncate",children:t.destination})]}),m.jsxs("div",{className:"flex items-center gap-1.5 text-gray-500 text-sm",children:[m.jsx(Np,{size:14,className:"text-amber-500 flex-shrink-0"}),m.jsx("span",{children:cD(t.startDate,t.endDate)})]})]}),t.description&&m.jsx("p",{className:"mt-3 text-gray-600 text-sm line-clamp-2",children:t.description}),m.jsxs("div",{className:"mt-3 flex items-center justify-end text-amber-600 text-sm font-medium",children:[m.jsx("span",{children:"查看详情"}),m.jsx(LT,{size:16})]})]})]})}const dD=[{value:"gradient-amber",label:"暖橙",cls:"cover-gradient-amber"},{value:"gradient-rose",label:"樱粉",cls:"cover-gradient-rose"},{value:"gradient-blue",label:"天蓝",cls:"cover-gradient-blue"},{value:"gradient-green",label:"翠绿",cls:"cover-gradient-green"},{value:"gradient-purple",label:"紫罗",cls:"cover-gradient-purple"},{value:"gradient-teal",label:"青碧",cls:"cover-gradient-teal"}];function fD({onClose:t,onCreated:e}){const{user:n,family:r}=mn(),[i,s]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState(""),[d,p]=V.useState(""),[g,I]=V.useState(""),[S,k]=V.useState("gradient-amber"),[P,w]=V.useState({}),[v,R]=V.useState(!1),O=V.useRef(null);function j(){const y={};return i.trim()||(y.name="请输入行程名称"),o.trim()||(y.destination="请输入目的地"),u||(y.startDate="请选择出发日期"),d||(y.endDate="请选择返回日期"),u&&d&&d<u&&(y.endDate="返回日期不能早于出发日期"),w(y),Object.keys(y).length===0}function U(y){var C;const T=(C=y.target.files)==null?void 0:C[0];if(!T)return;const A=new FileReader;A.onload=N=>{var x;(x=N.target)!=null&&x.result&&k(N.target.result)},A.readAsDataURL(T)}async function E(y){if(y.preventDefault(),!(!j()||!r||!n)){R(!0);try{const T=await Zb(r.id,{name:i.trim(),destination:o.trim(),startDate:u,endDate:d,coverPhoto:S,description:g.trim()},n.uid);e(T)}catch{w({submit:"创建失败，请重试"})}finally{R(!1)}}}return m.jsx("div",{className:"modal-backdrop",onClick:t,children:m.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl slide-up",onClick:y=>y.stopPropagation(),children:[m.jsxs("div",{className:"flex items-center justify-between p-5 border-b border-gray-100",children:[m.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"新建行程"}),m.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:m.jsx(FT,{size:20,className:"text-gray-500"})})]}),m.jsxs("form",{onSubmit:E,className:"p-5 space-y-5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"封面"}),m.jsxs("div",{className:"flex gap-2 flex-wrap",children:[dD.map(y=>m.jsx("button",{type:"button",onClick:()=>k(y.value),className:`w-12 h-12 rounded-xl ${y.cls} transition-all ${S===y.value?"ring-2 ring-offset-2 ring-amber-500 scale-110":"hover:scale-105"}`,title:y.label},y.value)),m.jsx("button",{type:"button",onClick:()=>{var y;return(y=O.current)==null?void 0:y.click()},className:`w-12 h-12 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-amber-400 hover:bg-amber-50 transition-all ${S&&!S.startsWith("gradient-")?"border-amber-500":""}`,title:"上传自定义封面",children:S&&!S.startsWith("gradient-")?m.jsx("img",{src:S,alt:"封面",className:"w-full h-full object-cover rounded-xl"}):m.jsx(MT,{size:18,className:"text-gray-400"})}),m.jsx("input",{ref:O,type:"file",accept:"image/*",className:"hidden",onChange:U})]})]}),m.jsxs("div",{children:[m.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:["行程名称 ",m.jsx("span",{className:"text-red-500",children:"*"})]}),m.jsx("input",{type:"text",value:i,onChange:y=>s(y.target.value),placeholder:"例：京都赏樱之旅",className:`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${P.name?"border-red-400":"border-gray-200"}`}),P.name&&m.jsx("p",{className:"text-red-500 text-xs mt-1",children:P.name})]}),m.jsxs("div",{children:[m.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:[m.jsx(_a,{size:14,className:"inline text-amber-500 mr-1"}),"目的地 ",m.jsx("span",{className:"text-red-500",children:"*"})]}),m.jsx("input",{type:"text",value:o,onChange:y=>l(y.target.value),placeholder:"例：日本·京都",className:`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${P.destination?"border-red-400":"border-gray-200"}`}),P.destination&&m.jsx("p",{className:"text-red-500 text-xs mt-1",children:P.destination})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsxs("div",{children:[m.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:[m.jsx(Np,{size:14,className:"inline text-amber-500 mr-1"}),"出发日期 ",m.jsx("span",{className:"text-red-500",children:"*"})]}),m.jsx("input",{type:"date",value:u,onChange:y=>c(y.target.value),className:`w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${P.startDate?"border-red-400":"border-gray-200"}`}),P.startDate&&m.jsx("p",{className:"text-red-500 text-xs mt-1",children:P.startDate})]}),m.jsxs("div",{children:[m.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:["返回日期 ",m.jsx("span",{className:"text-red-500",children:"*"})]}),m.jsx("input",{type:"date",value:d,onChange:y=>p(y.target.value),min:u,className:`w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${P.endDate?"border-red-400":"border-gray-200"}`}),P.endDate&&m.jsx("p",{className:"text-red-500 text-xs mt-1",children:P.endDate})]})]}),m.jsxs("div",{children:[m.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:[m.jsx(Fb,{size:14,className:"inline text-amber-500 mr-1"}),"行程简介"]}),m.jsx("textarea",{value:g,onChange:y=>I(y.target.value),placeholder:"写下这次旅行的期待或回忆...",rows:3,className:"w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none"})]}),P.submit&&m.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3",children:P.submit}),m.jsxs("div",{className:"flex gap-3 pt-1",children:[m.jsx("button",{type:"button",onClick:t,className:"flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors",children:"取消"}),m.jsx("button",{type:"submit",disabled:v,className:"flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-2.5 rounded-xl text-sm font-medium transition-colors",children:v?"创建中...":"创建行程"})]})]})]})})}function pD(){const{user:t,family:e}=mn(),[n,r]=V.useState([]),[i]=V.useState({}),[s,o]=V.useState(!1),[l,u]=V.useState(!1),[c,d]=V.useState(!1);V.useEffect(()=>e?Xb(e.id,v=>r(v)):void 0,[e==null?void 0:e.id]);async function p(w){e&&await eD(e.id,w)}function g(w){o(!1)}async function I(){if(e){try{await navigator.clipboard.writeText(e.inviteCode)}catch{}d(!0),setTimeout(()=>d(!1),2e3)}}async function S(){await TC(mu)}const k=Object.values(i).reduce((w,v)=>w+v,0),P=new Set(n.map(w=>w.destination.split("·")[0])).size;return m.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"#fffbeb"},children:[m.jsx("header",{className:"bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg",children:m.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center",children:m.jsx(gu,{size:22,className:"text-white"})}),m.jsxs("div",{children:[m.jsx("h1",{className:"text-xl font-bold tracking-wide",children:(e==null?void 0:e.name)??"家庭旅行相册"}),m.jsx("p",{className:"text-amber-100 text-xs mt-0.5",children:"记录每一段美好旅程"})]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("button",{onClick:()=>o(!0),className:"flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors border border-white/30",children:[m.jsx(pi,{size:16}),"新建行程"]}),m.jsx("button",{onClick:S,className:"p-2 bg-white/20 hover:bg-white/30 rounded-xl border border-white/30 transition-colors",title:"退出登录",children:m.jsx(Jb,{size:16})})]})]}),e&&m.jsxs("div",{className:"mt-3 flex items-center gap-3 flex-wrap",children:[m.jsxs("button",{onClick:I,className:"flex items-center gap-2 bg-white/15 hover:bg-white/25 rounded-xl px-3 py-1.5 text-xs transition-colors border border-white/20",title:"点击复制邀请码",children:[m.jsx("span",{className:"text-amber-100",children:"邀请码"}),m.jsx("span",{className:"font-mono font-bold tracking-widest",children:e.inviteCode}),c?m.jsx(bp,{size:12,className:"text-green-300"}):m.jsx(qb,{size:12,className:"text-white/60"})]}),m.jsxs("button",{onClick:()=>u(w=>!w),className:"flex items-center gap-1.5 bg-white/15 hover:bg-white/25 rounded-xl px-3 py-1.5 text-xs transition-colors border border-white/20",children:[m.jsx(Od,{size:12}),m.jsxs("span",{children:[e.members.length," 位成员"]})]}),m.jsx("span",{className:"text-amber-200 text-xs truncate max-w-[160px]",children:t==null?void 0:t.email})]}),l&&e&&m.jsxs("div",{className:"mt-2 bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/20",children:[m.jsx("p",{className:"text-xs text-amber-100 font-medium mb-2",children:"家庭成员"}),m.jsx("div",{className:"space-y-1",children:e.members.map(w=>m.jsxs("div",{className:"flex items-center gap-2 text-xs text-white/90",children:[m.jsx("div",{className:"w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0",children:m.jsx(Od,{size:10})}),m.jsx("span",{className:"font-mono truncate",children:w===(t==null?void 0:t.uid)?`${t==null?void 0:t.email} (你)`:w.slice(0,12)+"…"})]},w))})]})]})}),m.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-6",children:[m.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[m.jsx(dh,{icon:m.jsx(gu,{size:20,className:"text-amber-500"}),value:n.length,label:"次旅行"}),m.jsx(dh,{icon:m.jsx(MT,{size:20,className:"text-orange-500"}),value:k,label:"张照片"}),m.jsx(dh,{icon:m.jsx(_a,{size:20,className:"text-rose-500"}),value:P,label:"个目的地"})]}),n.length===0?m.jsx(mD,{onNew:()=>o(!0)}):m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"text-base font-semibold text-gray-700 mb-3",children:"家庭旅行"}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:n.map(w=>m.jsx(hD,{trip:w,photoCount:i[w.id]??0,onDelete:p},w.id))})]})]}),s&&m.jsx(fD,{onClose:()=>o(!1),onCreated:g})]})}function dh({icon:t,value:e,label:n}){return m.jsxs("div",{className:"bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center gap-1.5 border border-amber-50",children:[t,m.jsx("span",{className:"text-2xl font-bold text-gray-900",children:e}),m.jsx("span",{className:"text-xs text-gray-500",children:n})]})}function mD({onNew:t}){return m.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-gray-400",children:[m.jsx("div",{className:"w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mb-5",children:m.jsx(gu,{size:36,className:"text-amber-400"})}),m.jsx("p",{className:"text-lg font-semibold text-gray-600 mb-1",children:"还没有旅行记录"}),m.jsxs("p",{className:"text-sm text-gray-400 mb-6 text-center px-8",children:["开始记录你的第一次家庭旅行吧！",m.jsx("br",{}),"上传照片、规划行程，留住美好瞬间。"]}),m.jsxs("button",{onClick:t,className:"flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-2xl font-medium transition-colors shadow-md",children:[m.jsx(pi,{size:20}),"创建第一次旅行"]})]})}function gD({photos:t,initialIndex:e,onClose:n,onPhotosChange:r}){const{family:i}=mn(),[s,o]=V.useState(e),[l,u]=V.useState(!1),[c,d]=V.useState(""),p=t[s];V.useEffect(()=>{var k;d(((k=t[s])==null?void 0:k.caption)??""),u(!1)},[s,t]);const g=V.useCallback(()=>{o(k=>k>0?k-1:t.length-1)},[t.length]),I=V.useCallback(()=>{o(k=>k<t.length-1?k+1:0)},[t.length]);V.useEffect(()=>{function k(P){P.key==="ArrowLeft"?g():P.key==="ArrowRight"?I():P.key==="Escape"&&n()}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[g,I,n]);async function S(){if(!p||!i)return;const k=t.map(P=>P.id===p.id?{...P,caption:c}:P);r(k),u(!1),await iD(i.id,p.tripId,p.id,{caption:c})}return p?m.jsxs("div",{className:"lightbox-backdrop",onClick:n,children:[m.jsx("button",{className:"absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors",onClick:n,children:m.jsx(FT,{size:24})}),t.length>1&&m.jsx("button",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors",onClick:k=>{k.stopPropagation(),g()},children:m.jsx($b,{size:32})}),t.length>1&&m.jsx("button",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors",onClick:k=>{k.stopPropagation(),I()},children:m.jsx(LT,{size:32})}),m.jsxs("div",{className:"max-w-3xl w-full mx-12 flex flex-col items-center gap-4",onClick:k=>k.stopPropagation(),children:[m.jsx("img",{src:p.dataUrl,alt:p.caption||`照片 ${s+1}`,className:"max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"}),m.jsxs("div",{className:"w-full flex items-start gap-3",children:[m.jsx("div",{className:"flex-1 min-w-0",children:l?m.jsx("input",{autoFocus:!0,type:"text",value:c,onChange:k=>d(k.target.value),onKeyDown:k=>{k.key==="Enter"&&S(),k.key==="Escape"&&u(!1)},placeholder:"为这张照片添加说明...",className:"w-full bg-white/10 text-white placeholder-white/50 border border-white/30 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-400"}):m.jsx("p",{className:"text-white/80 text-sm truncate",children:p.caption||m.jsx("span",{className:"italic text-white/40",children:"暂无说明"})})}),m.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[m.jsxs("span",{className:"text-white/50 text-sm",children:[s+1," / ",t.length]}),l?m.jsx("button",{onClick:S,className:"text-amber-400 hover:text-amber-300 p-1",children:m.jsx(bp,{size:18})}):m.jsx("button",{onClick:()=>u(!0),className:"text-white/50 hover:text-white/80 p-1 transition-colors",title:"编辑说明",children:m.jsx(jT,{size:16})})]})]})]})]}):null}function P_({tripId:t,onAdded:e}){const{family:n}=mn(),r=V.useRef(null),[i,s]=V.useState(!1);async function o(l){const u=Array.from(l.target.files||[]);if(u.length===0||!n)return;s(!0);const c=u.map(d=>new Promise((p,g)=>{const I=new FileReader;I.onload=async S=>{var P;const k=(P=S.target)==null?void 0:P.result;try{const w=await nD(n.id,t,{tripId:t,dataUrl:k,caption:""});p(w)}catch(w){g(w)}},I.readAsDataURL(d)}));try{const d=await Promise.all(c);e(d)}catch{}finally{s(!1),r.current&&(r.current.value="")}}return m.jsxs(m.Fragment,{children:[m.jsxs("button",{onClick:()=>{var l;return(l=r.current)==null?void 0:l.click()},disabled:i,className:"flex items-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm",children:[m.jsx(pi,{size:18}),i?"上传中...":"添加照片"]}),m.jsx("input",{ref:r,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:o})]})}function yD({tripId:t,photos:e,onPhotosChange:n}){const{family:r}=mn(),[i,s]=V.useState(null);async function o(u,c){u.stopPropagation(),!(!window.confirm("确认删除这张照片？")||!r)&&(n(e.filter(d=>d.id!==c)),i!==null&&s(null),await rD(r.id,t,c))}function l(u){n([...e,...u])}return e.length===0?m.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-gray-400",children:[m.jsx(Kb,{size:48,className:"mb-4 opacity-40"}),m.jsx("p",{className:"text-base font-medium mb-1",children:"还没有照片"}),m.jsx("p",{className:"text-sm mb-6",children:"上传你的旅行照片，留住美好瞬间"}),m.jsx(P_,{tripId:t,onAdded:l})]}):m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsxs("p",{className:"text-sm text-gray-500",children:["共 ",e.length," 张照片"]}),m.jsx(P_,{tripId:t,onAdded:l})]}),m.jsx("div",{className:"grid grid-cols-3 gap-1 sm:gap-2",children:e.map((u,c)=>m.jsxs("div",{className:"photo-cell rounded-lg relative group",onClick:()=>s(c),children:[m.jsx("img",{src:u.dataUrl,alt:u.caption||`照片 ${c+1}`}),u.caption&&m.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity",children:m.jsx("p",{className:"text-white text-xs truncate",children:u.caption})}),m.jsx("button",{className:"absolute top-1.5 right-1.5 bg-black/40 hover:bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all",onClick:d=>o(d,u.id),title:"删除照片",children:m.jsx(ic,{size:12})})]},u.id))}),i!==null&&m.jsx(gD,{photos:e,initialIndex:i,onClose:()=>s(null),onPhotosChange:n})]})}function _D(t){const e=new Date(t+"T00:00:00"),n=["日","一","二","三","四","五","六"];return`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日（周${n[e.getDay()]}）`}function UT({initial:t,onSave:e,onCancel:n}){const[r,i]=V.useState((t==null?void 0:t.title)??""),[s,o]=V.useState((t==null?void 0:t.notes)??""),[l,u]=V.useState((t==null?void 0:t.location)??""),[c,d]=V.useState((t==null?void 0:t.time)??""),[p,g]=V.useState("");function I(){if(!r.trim()){g("请输入活动名称");return}e({title:r.trim(),notes:s.trim(),location:l.trim(),time:c.trim()})}return m.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3 mt-2",children:[m.jsxs("div",{children:[m.jsx("input",{autoFocus:!0,type:"text",value:r,onChange:S=>{i(S.target.value),g("")},placeholder:"活动名称 *",className:`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white ${p?"border-red-400":"border-gray-200"}`}),p&&m.jsx("p",{className:"text-red-500 text-xs mt-0.5",children:p})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsx("input",{type:"text",value:l,onChange:S=>u(S.target.value),placeholder:"地点",className:"border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white"}),m.jsx("input",{type:"time",value:c,onChange:S=>d(S.target.value),className:"border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white"})]}),m.jsx("textarea",{value:s,onChange:S=>o(S.target.value),placeholder:"备注（可选）",rows:2,className:"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white resize-none"}),m.jsxs("div",{className:"flex gap-2 justify-end",children:[m.jsx("button",{type:"button",onClick:n,className:"px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",children:"取消"}),m.jsxs("button",{type:"button",onClick:I,className:"px-4 py-1.5 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors flex items-center gap-1.5",children:[m.jsx(bp,{size:14}),"保存"]})]})]})}function vD({activity:t,familyId:e,tripId:n,dayId:r,allActivities:i,onUpdated:s,onDeleted:o}){const[l,u]=V.useState(!1);async function c(p){const g={...t,...p};s(g),u(!1);const I=i.map(S=>S.id===t.id?g:S);await k_(e,n,r,I)}async function d(){if(!window.confirm(`确认删除「${t.title}」？`))return;o(t.id);const p=i.filter(g=>g.id!==t.id);await k_(e,n,r,p)}return l?m.jsx(UT,{initial:t,onSave:c,onCancel:()=>u(!1)}):m.jsxs("div",{className:"flex gap-3 group py-2",children:[m.jsxs("div",{className:"flex flex-col items-center flex-shrink-0 w-12",children:[t.time?m.jsx("span",{className:"text-xs font-semibold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full whitespace-nowrap",children:t.time}):m.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-300 mt-1"}),m.jsx("div",{className:"flex-1 w-px bg-amber-200 mt-1"})]}),m.jsxs("div",{className:"flex-1 min-w-0 pb-2",children:[m.jsxs("div",{className:"flex items-start justify-between gap-2",children:[m.jsx("p",{className:"font-medium text-gray-900 text-sm leading-snug",children:t.title}),m.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0",children:[m.jsx("button",{onClick:()=>u(!0),className:"p-1 hover:bg-amber-100 rounded-lg text-gray-400 hover:text-amber-600 transition-colors",title:"编辑",children:m.jsx(jT,{size:13})}),m.jsx("button",{onClick:d,className:"p-1 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors",title:"删除",children:m.jsx(ic,{size:13})})]})]}),t.location&&m.jsxs("div",{className:"flex items-center gap-1 mt-0.5 text-xs text-gray-500",children:[m.jsx(_a,{size:11,className:"text-amber-400 flex-shrink-0"}),m.jsx("span",{className:"truncate",children:t.location})]}),t.notes&&m.jsx("p",{className:"mt-1 text-xs text-gray-500 leading-relaxed",children:t.notes})]})]})}function wD({day:t,familyId:e,tripId:n,dayNumber:r,onDayUpdated:i,onDayDeleted:s}){const[o,l]=V.useState(!1),[u,c]=V.useState(!1);async function d(S){const k=await lD(e,n,t.id,S),P={...t,activities:[...t.activities,k]};i(P),c(!1)}function p(S){i({...t,activities:t.activities.map(k=>k.id===S.id?S:k)})}function g(S){i({...t,activities:t.activities.filter(k=>k.id!==S)})}async function I(){window.confirm(`确认删除第 ${r} 天的行程？`)&&(s(t.id),await aD(e,n,t.id))}return m.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden fade-in",children:[m.jsxs("div",{className:"flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-amber-50 transition-colors",onClick:()=>l(S=>!S),children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsxs("div",{className:"w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0",children:["D",r]}),m.jsxs("div",{children:[m.jsxs("p",{className:"font-semibold text-gray-900 text-sm",children:["第 ",r," 天"]}),m.jsxs("p",{className:"text-xs text-gray-500 flex items-center gap-1",children:[m.jsx(Hb,{size:11}),_D(t.date)]})]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("span",{className:"text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full",children:[t.activities.length," 项活动"]}),m.jsx("button",{onClick:S=>{S.stopPropagation(),I()},className:"p-1.5 hover:bg-red-50 text-gray-300 hover:text-red-400 rounded-lg transition-colors",title:"删除这一天",children:m.jsx(ic,{size:14})}),o?m.jsx(Bb,{size:16,className:"text-gray-400"}):m.jsx(Wb,{size:16,className:"text-gray-400"})]})]}),!o&&m.jsxs("div",{className:"px-4 pb-4",children:[t.activities.length===0&&!u&&m.jsx("p",{className:"text-sm text-gray-400 py-3 text-center",children:"暂无活动，点击下方添加"}),t.activities.map(S=>m.jsx(vD,{activity:S,familyId:e,tripId:n,dayId:t.id,allActivities:t.activities,onUpdated:p,onDeleted:g},S.id)),u?m.jsx(UT,{onSave:d,onCancel:()=>c(!1)}):m.jsxs("button",{onClick:()=>c(!0),className:"mt-2 w-full flex items-center justify-center gap-1.5 text-sm text-amber-600 hover:text-amber-700 border border-dashed border-amber-300 hover:border-amber-400 rounded-xl py-2 transition-colors",children:[m.jsx(pi,{size:15}),"添加活动"]})]})]})}function ED({onAdd:t,onCancel:e,existingDates:n}){const[r,i]=V.useState(""),[s,o]=V.useState("");function l(){if(!r){o("请选择日期");return}if(n.includes(r)){o("该日期已存在");return}t(r)}return m.jsxs("div",{className:"bg-white rounded-2xl border border-amber-200 shadow-sm p-4 flex items-end gap-3 slide-up",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"选择日期"}),m.jsx("input",{autoFocus:!0,type:"date",value:r,onChange:u=>{i(u.target.value),o("")},className:`w-full border rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${s?"border-red-400":"border-gray-200"}`}),s&&m.jsx("p",{className:"text-red-500 text-xs mt-0.5",children:s})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:e,className:"px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors",children:"取消"}),m.jsx("button",{onClick:l,className:"px-4 py-2.5 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition-colors",children:"添加"})]})]})}function TD({tripId:t,days:e,onDaysChange:n}){const{family:r}=mn(),[i,s]=V.useState(!1);async function o(c){if(!r)return;const d=await oD(r.id,t,{date:c,activities:[]}),p=[...e,d].sort((g,I)=>g.date.localeCompare(I.date));n(p),s(!1)}function l(c){n(e.map(d=>d.id===c.id?c:d))}function u(c){n(e.filter(d=>d.id!==c))}return e.length===0&&!i?m.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-gray-400",children:[m.jsx(zb,{size:48,className:"mb-4 opacity-40"}),m.jsx("p",{className:"text-base font-medium mb-1",children:"还没有行程安排"}),m.jsx("p",{className:"text-sm mb-6",children:"添加每天的行程，规划完美旅行"}),m.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm",children:[m.jsx(pi,{size:18}),"添加第一天"]})]}):m.jsxs("div",{className:"space-y-4",children:[e.map((c,d)=>m.jsx(wD,{day:c,familyId:(r==null?void 0:r.id)??"",tripId:t,dayNumber:d+1,onDayUpdated:l,onDayDeleted:u},c.id)),i?m.jsx(ED,{onAdd:o,onCancel:()=>s(!1),existingDates:e.map(c=>c.date)}):m.jsxs("button",{onClick:()=>s(!0),className:"w-full flex items-center justify-center gap-2 text-sm text-amber-600 hover:text-amber-700 border border-dashed border-amber-300 hover:border-amber-400 rounded-2xl py-3.5 bg-white hover:bg-amber-50 transition-all shadow-sm",children:[m.jsx(pi,{size:16}),"添加行程天"]})]})}function ID(t,e){const n=new Date(t+"T00:00:00"),r=new Date(e+"T00:00:00"),i=r.getTime()-n.getTime(),s=Math.round(i/(1e3*60*60*24)),o=l=>`${l.getMonth()+1}月${l.getDate()}日`;return`${o(n)} — ${o(r)}（${s+1}天${s}晚）`}function xD({coverPhoto:t,name:e}){if(!t)return m.jsx("div",{className:"w-full h-full cover-gradient-amber flex items-end justify-start p-5",children:m.jsx("span",{className:"text-white text-5xl font-bold opacity-50",children:e.charAt(0)})});if(t.startsWith("gradient-")){const n=t.replace("gradient-","");return m.jsx("div",{className:`w-full h-full cover-gradient-${n} flex items-end justify-start p-5`,children:m.jsx("span",{className:"text-white text-5xl font-bold opacity-50",children:e.charAt(0)})})}return m.jsx("img",{src:t,alt:e,className:"w-full h-full object-cover"})}function fh({initialTab:t="photos"}){const{id:e}=E1(),n=ia(),{family:r}=mn(),[i,s]=V.useState(null),[o,l]=V.useState([]),[u,c]=V.useState([]),[d,p]=V.useState(t),[g,I]=V.useState(!1);return V.useEffect(()=>{if(!e||!r){I(!0);return}const S=Or(it,"families",r.id,"trips",e);return ya(S,P=>{P.exists()?s({id:P.id,...P.data()}):I(!0)})},[e,r==null?void 0:r.id]),V.useEffect(()=>!e||!r?void 0:tD(r.id,e,l),[e,r==null?void 0:r.id]),V.useEffect(()=>!e||!r?void 0:sD(r.id,e,c),[e,r==null?void 0:r.id]),V.useEffect(()=>{p(t)},[t]),g?m.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4 text-gray-400",style:{backgroundColor:"#fffbeb"},children:[m.jsx("p",{className:"text-lg",children:"行程不存在"}),m.jsx("button",{onClick:()=>n("/"),className:"text-amber-600 hover:underline text-sm",children:"返回首页"})]}):i?m.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"#fffbeb"},children:[m.jsxs("div",{className:"relative h-56 sm:h-64 overflow-hidden",children:[m.jsx(xD,{coverPhoto:i.coverPhoto,name:i.name}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"}),m.jsx("button",{onClick:()=>n("/"),className:"absolute top-4 left-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-2.5 rounded-xl transition-colors",children:m.jsx(Ub,{size:20})}),m.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4",children:[m.jsx("h1",{className:"text-white text-2xl font-bold leading-tight drop-shadow",children:i.name}),m.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-1",children:[m.jsxs("span",{className:"flex items-center gap-1 text-white/80 text-xs",children:[m.jsx(_a,{size:12}),i.destination]}),m.jsxs("span",{className:"flex items-center gap-1 text-white/80 text-xs",children:[m.jsx(Np,{size:12}),ID(i.startDate,i.endDate)]})]})]})]}),i.description&&m.jsx("div",{className:"max-w-2xl mx-auto px-4 mt-4",children:m.jsx("div",{className:"bg-white rounded-2xl p-4 shadow-sm border border-amber-50",children:m.jsx("p",{className:"text-gray-600 text-sm leading-relaxed line-clamp-3",children:i.description})})}),m.jsx("div",{className:"max-w-2xl mx-auto px-4 mt-4",children:m.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-amber-50 flex overflow-hidden",children:[m.jsx(N_,{active:d==="photos",onClick:()=>p("photos"),icon:m.jsx(Gb,{size:16}),label:`相册 (${o.length})`}),m.jsx(N_,{active:d==="itinerary",onClick:()=>p("itinerary"),icon:m.jsx(Qb,{size:16}),label:`行程 (${u.length}天)`})]})}),m.jsx("div",{className:"max-w-2xl mx-auto px-4 py-4 pb-10",children:d==="photos"?m.jsx(yD,{tripId:i.id,photos:o,onPhotosChange:l}):m.jsx(TD,{tripId:i.id,days:u,onDaysChange:c})})]}):m.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{backgroundColor:"#fffbeb"},children:m.jsx("div",{className:"w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"})})}function N_({active:t,onClick:e,icon:n,label:r}){return m.jsxs("button",{onClick:e,className:`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${t?"bg-amber-500 text-white":"text-gray-500 hover:text-amber-600 hover:bg-amber-50"}`,children:[n,r]})}function SD(){const[t,e]=V.useState("login"),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState(!1),d=ia();async function p(g){if(g.preventDefault(),l(""),!n.trim()||!i.trim()){l("请输入邮箱和密码");return}if(i.length<6){l("密码至少需要6位");return}c(!0);try{t==="register"?await yC(mu,n.trim(),i):await _C(mu,n.trim(),i),d("/",{replace:!0})}catch(I){const S=I==null?void 0:I.code;l(S==="auth/user-not-found"||S==="auth/wrong-password"||S==="auth/invalid-credential"?"邮箱或密码错误":S==="auth/email-already-in-use"?"该邮箱已被注册，请直接登录":S==="auth/invalid-email"?"邮箱格式不正确":S==="auth/too-many-requests"?"登录次数过多，请稍后再试":"操作失败，请检查网络或重试")}finally{c(!1)}}return m.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-4",style:{backgroundColor:"#fffbeb"},children:[m.jsxs("div",{className:"mb-8 flex flex-col items-center gap-3",children:[m.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg",children:m.jsx(gu,{size:30,className:"text-white"})}),m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"家庭旅行相册"}),m.jsx("p",{className:"text-gray-500 text-sm",children:"记录每一段美好旅程"})]}),m.jsxs("div",{className:"bg-white rounded-2xl shadow-lg w-full max-w-sm p-6",children:[m.jsxs("div",{className:"flex bg-gray-100 rounded-xl p-1 mb-6",children:[m.jsx("button",{type:"button",onClick:()=>{e("login"),l("")},className:`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${t==="login"?"bg-white text-gray-900 shadow-sm":"text-gray-500 hover:text-gray-700"}`,children:"登录"}),m.jsx("button",{type:"button",onClick:()=>{e("register"),l("")},className:`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${t==="register"?"bg-white text-gray-900 shadow-sm":"text-gray-500 hover:text-gray-700"}`,children:"注册"})]}),m.jsxs("form",{onSubmit:p,className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:"邮箱"}),m.jsx("input",{type:"email",value:n,onChange:g=>r(g.target.value),placeholder:"请输入邮箱",autoComplete:"email",className:"w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:"密码"}),m.jsx("input",{type:"password",value:i,onChange:g=>s(g.target.value),placeholder:t==="register"?"至少6位密码":"请输入密码",autoComplete:t==="register"?"new-password":"current-password",className:"w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400"})]}),o&&m.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3",children:o}),m.jsx("button",{type:"submit",disabled:u,className:"w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl text-sm font-semibold transition-colors",children:u?"请稍候...":t==="register"?"注册账号":"登录"})]}),t==="register"&&m.jsxs("p",{className:"mt-4 text-xs text-gray-400 text-center leading-relaxed",children:["注册后，你可以创建家庭空间或加入已有家庭，",m.jsx("br",{}),"与家人共同记录旅行故事。"]})]})]})}function AD(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let n=0;n<6;n++)e+=t[Math.floor(Math.random()*t.length)];return e}function RD(){const{user:t}=mn(),e=ia(),[n,r]=V.useState("choose"),[i,s]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState(!1),[d,p]=V.useState(""),[g,I]=V.useState(""),[S,k]=V.useState(!1);async function P(v){if(v.preventDefault(),!i.trim()){l("请输入家庭名称");return}if(t){c(!0),l("");try{const R=AD();await rc(Dn(it,"families"),{name:i.trim(),createdBy:t.uid,members:[t.uid],inviteCode:R,createdAt:new Date().toISOString()}),e("/",{replace:!0})}catch{l("创建失败，请重试")}finally{c(!1)}}}async function w(v){v.preventDefault();const R=d.trim().toUpperCase();if(R.length!==6){I("邀请码为6位字符");return}if(t){k(!0),I("");try{const O=ga(Dn(it,"families"),kT("inviteCode","==",R)),j=await tb(O);if(j.empty){I("邀请码不存在，请确认后重试");return}const U=j.docs[0];if(U.data().members.includes(t.uid)){e("/",{replace:!0});return}await nc(U.ref,{members:ST(t.uid)}),e("/",{replace:!0})}catch{I("加入失败，请重试")}finally{k(!1)}}}return m.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-4",style:{backgroundColor:"#fffbeb"},children:[m.jsxs("div",{className:"mb-8 flex flex-col items-center gap-3",children:[m.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg",children:m.jsx(Od,{size:30,className:"text-white"})}),m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"设置家庭空间"}),m.jsx("p",{className:"text-gray-500 text-sm text-center",children:"创建或加入一个家庭，开始共同记录旅行"})]}),m.jsxs("div",{className:"bg-white rounded-2xl shadow-lg w-full max-w-sm p-6",children:[n==="choose"&&m.jsxs("div",{className:"space-y-4",children:[m.jsxs("button",{onClick:()=>r("create"),className:"w-full flex items-center gap-4 border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 rounded-2xl p-4 transition-all text-left",children:[m.jsx("div",{className:"w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0",children:m.jsx(pi,{size:22,className:"text-amber-600"})}),m.jsxs("div",{children:[m.jsx("p",{className:"font-semibold text-gray-900",children:"创建家庭"}),m.jsx("p",{className:"text-sm text-gray-500 mt-0.5",children:"新建一个家庭空间，邀请成员加入"})]})]}),m.jsxs("button",{onClick:()=>r("join"),className:"w-full flex items-center gap-4 border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 rounded-2xl p-4 transition-all text-left",children:[m.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0",children:m.jsx(Yb,{size:22,className:"text-blue-600"})}),m.jsxs("div",{children:[m.jsx("p",{className:"font-semibold text-gray-900",children:"加入家庭"}),m.jsx("p",{className:"text-sm text-gray-500 mt-0.5",children:"输入邀请码，加入已有的家庭空间"})]})]})]}),n==="create"&&m.jsxs("form",{onSubmit:P,className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[m.jsx("button",{type:"button",onClick:()=>{r("choose"),l("")},className:"text-gray-400 hover:text-gray-600 text-sm",children:"← 返回"}),m.jsx("h2",{className:"font-semibold text-gray-900",children:"创建家庭"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:"家庭名称"}),m.jsx("input",{type:"text",value:i,onChange:v=>s(v.target.value),placeholder:"例：张家旅行团",autoFocus:!0,className:`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 ${o?"border-red-400":"border-gray-200"}`}),o&&m.jsx("p",{className:"text-red-500 text-xs mt-1",children:o})]}),m.jsx("button",{type:"submit",disabled:u,className:"w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl text-sm font-semibold transition-colors",children:u?"创建中...":"创建家庭"})]}),n==="join"&&m.jsxs("form",{onSubmit:w,className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[m.jsx("button",{type:"button",onClick:()=>{r("choose"),I("")},className:"text-gray-400 hover:text-gray-600 text-sm",children:"← 返回"}),m.jsx("h2",{className:"font-semibold text-gray-900",children:"加入家庭"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1.5",children:"邀请码"}),m.jsx("input",{type:"text",value:d,onChange:v=>p(v.target.value.toUpperCase()),placeholder:"输入6位邀请码",maxLength:6,autoFocus:!0,className:`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 tracking-widest text-center font-mono text-lg uppercase ${g?"border-red-400":"border-gray-200"}`}),g&&m.jsx("p",{className:"text-red-500 text-xs mt-1",children:g})]}),m.jsx("button",{type:"submit",disabled:S,className:"w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 rounded-xl text-sm font-semibold transition-colors",children:S?"加入中...":"加入家庭"})]})]}),n==="choose"&&m.jsxs("p",{className:"mt-4 text-xs text-gray-400 text-center",children:["当前账号：",t==null?void 0:t.email]})]})}function tl({children:t}){const{user:e,family:n,loading:r}=mn();return r?m.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{backgroundColor:"#fffbeb"},children:m.jsx("div",{className:"w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"})}):e?n?m.jsx(m.Fragment,{children:t}):m.jsx(zi,{to:"/family-setup",replace:!0}):m.jsx(zi,{to:"/auth",replace:!0})}function CD(){const{user:t,family:e,loading:n}=mn();return n?m.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{backgroundColor:"#fffbeb"},children:m.jsx("div",{className:"w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"})}):m.jsx(U1,{children:m.jsxs(M1,{children:[m.jsx(Wn,{path:"/auth",element:t&&e?m.jsx(zi,{to:"/",replace:!0}):m.jsx(SD,{})}),m.jsx(Wn,{path:"/family-setup",element:t?e?m.jsx(zi,{to:"/",replace:!0}):m.jsx(RD,{}):m.jsx(zi,{to:"/auth",replace:!0})}),m.jsx(Wn,{path:"/",element:m.jsx(tl,{children:m.jsx(pD,{})})}),m.jsx(Wn,{path:"/trips/:id",element:m.jsx(tl,{children:m.jsx(fh,{})})}),m.jsx(Wn,{path:"/trips/:id/photos",element:m.jsx(tl,{children:m.jsx(fh,{initialTab:"photos"})})}),m.jsx(Wn,{path:"/trips/:id/itinerary",element:m.jsx(tl,{children:m.jsx(fh,{initialTab:"itinerary"})})}),m.jsx(Wn,{path:"*",element:m.jsx(zi,{to:"/",replace:!0})})]})})}W0(document.getElementById("root")).render(m.jsx(V.StrictMode,{children:m.jsx(Ob,{children:m.jsx(CD,{})})}));
