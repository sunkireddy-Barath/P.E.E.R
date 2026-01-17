import{r as b,a as Ya,u as Ms,N as Ds,b as Xa,c as Ls,L as O,O as Qa,B as Za,R as ei,d as C,e as ti}from"./react-vendor-BZl7sM6o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var xn={exports:{}},Ut={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=b,ri=Symbol.for("react.element"),ni=Symbol.for("react.fragment"),ai=Object.prototype.hasOwnProperty,ii=si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oi={key:!0,ref:!0,__self:!0,__source:!0};function gn(s,e,r){var n,a={},i=null,o=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)ai.call(e,n)&&!oi.hasOwnProperty(n)&&(a[n]=e[n]);if(s&&s.defaultProps)for(n in e=s.defaultProps,e)a[n]===void 0&&(a[n]=e[n]);return{$$typeof:ri,type:s,key:i,ref:o,props:a,_owner:ii.current}}Ut.Fragment=ni;Ut.jsx=gn;Ut.jsxs=gn;xn.exports=Ut;var t=xn.exports,ws={},vr=Ya;ws.createRoot=vr.createRoot,ws.hydrateRoot=vr.hydrateRoot;const li=()=>{};var jr={};/**
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
 */const bn=function(s){const e=[];let r=0;for(let n=0;n<s.length;n++){let a=s.charCodeAt(n);a<128?e[r++]=a:a<2048?(e[r++]=a>>6|192,e[r++]=a&63|128):(a&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(s.charCodeAt(++n)&1023),e[r++]=a>>18|240,e[r++]=a>>12&63|128,e[r++]=a>>6&63|128,e[r++]=a&63|128):(e[r++]=a>>12|224,e[r++]=a>>6&63|128,e[r++]=a&63|128)}return e},ci=function(s){const e=[];let r=0,n=0;for(;r<s.length;){const a=s[r++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const i=s[r++];e[n++]=String.fromCharCode((a&31)<<6|i&63)}else if(a>239&&a<365){const i=s[r++],o=s[r++],l=s[r++],c=((a&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=s[r++],o=s[r++];e[n++]=String.fromCharCode((a&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<s.length;a+=3){const i=s[a],o=a+1<s.length,l=o?s[a+1]:0,c=a+2<s.length,u=c?s[a+2]:0,p=i>>2,d=(i&3)<<4|l>>4;let h=(l&15)<<2|u>>6,f=u&63;c||(f=64,o||(h=64)),n.push(r[p],r[d],r[h],r[f])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(bn(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):ci(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<s.length;){const i=r[s.charAt(a++)],l=a<s.length?r[s.charAt(a)]:0;++a;const u=a<s.length?r[s.charAt(a)]:64;++a;const d=a<s.length?r[s.charAt(a)]:64;if(++a,i==null||l==null||u==null||d==null)throw new di;const h=i<<2|l>>4;if(n.push(h),u!==64){const f=l<<4&240|u>>2;if(n.push(f),d!==64){const w=u<<6&192|d;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class di extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ui=function(s){const e=bn(s);return yn.encodeByteArray(e,!0)},wn=function(s){return ui(s).replace(/\./g,"")},vn=function(s){try{return yn.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hi=()=>mi().__FIREBASE_DEFAULTS__,pi=()=>{if(typeof process>"u"||typeof jr>"u")return;const s=jr.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},fi=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&vn(s[1]);return e&&JSON.parse(e)},Os=()=>{try{return li()||hi()||pi()||fi()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},xi=s=>Os()?.emulatorHosts?.[s],jn=()=>Os()?.config,Nn=s=>Os()?.[`_${s}`];/**
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
 */class gi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function $t(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bi(s){return(await fetch(s,{credentials:"include"})).ok}const nt={};function yi(){const s={prod:[],emulator:[]};for(const e of Object.keys(nt))nt[e]?s.emulator.push(e):s.prod.push(e);return s}function wi(s){let e=document.getElementById(s),r=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),r=!0),{created:r,element:e}}let Nr=!1;function vi(s,e){if(typeof window>"u"||typeof document>"u"||!$t(window.location.host)||nt[s]===e||nt[s]||Nr)return;nt[s]=e;function r(h){return`__firebase__banner__${h}`}const n="__firebase__banner",i=yi().prod.length>0;function o(){const h=document.getElementById(n);h&&h.remove()}function l(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,f){h.setAttribute("width","24"),h.setAttribute("id",f),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function u(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Nr=!0,o()},h}function p(h,f){h.setAttribute("id",f),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=wi(n),f=r("text"),w=document.getElementById(f)||document.createElement("span"),m=r("learnmore"),x=document.getElementById(m)||document.createElement("a"),g=r("preprendIcon"),v=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const k=h.element;l(k),p(x,m);const T=u();c(v,g),k.append(v,w,x,T),document.body.appendChild(k)}i?(w.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function R(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ji(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(R())}function Ni(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zs(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function ki(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ii(){const s=R();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Fs(){try{return typeof indexedDB=="object"}catch{return!1}}function Us(){return new Promise((s,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),s(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(r){e(r)}})}function kn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Si="FirebaseError";class K extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Si,Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Le.prototype.create)}}class Le{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},a=`${this.service}/${e}`,i=this.errors[e],o=i?_i(i,n):"Error",l=`${this.serviceName}: ${o} (${a}).`;return new K(a,l,n)}}function _i(s,e){return s.replace(Ci,(r,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const Ci=/\{\$([^}]+)}/g;function Ei(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Ce(s,e){if(s===e)return!0;const r=Object.keys(s),n=Object.keys(e);for(const a of r){if(!n.includes(a))return!1;const i=s[a],o=e[a];if(kr(i)&&kr(o)){if(!Ce(i,o))return!1}else if(i!==o)return!1}for(const a of n)if(!r.includes(a))return!1;return!0}function kr(s){return s!==null&&typeof s=="object"}/**
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
 */function ct(s){const e=[];for(const[r,n]of Object.entries(s))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function st(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,i]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(i)}}),e}function rt(s){const e=s.indexOf("?");if(!e)return"";const r=s.indexOf("#",e);return s.substring(e,r>0?r:void 0)}function Ti(s,e){const r=new Ai(s,e);return r.subscribe.bind(r)}class Ai{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let a;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Pi(e,["next","error","complete"])?a=e:a={next:e,error:r,complete:n},a.next===void 0&&(a.next=es),a.error===void 0&&(a.error=es),a.complete===void 0&&(a.complete=es);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pi(s,e){if(typeof s!="object"||s===null)return!1;for(const r of e)if(r in s&&typeof s[r]=="function")return!0;return!1}function es(){}/**
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
 */const Ri=1e3,Mi=2,Di=4*60*60*1e3,Li=.5;function Ir(s,e=Ri,r=Mi){const n=e*Math.pow(r,s),a=Math.round(Li*n*(Math.random()-.5)*2);return Math.min(Di,n+a)}/**
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
 */function D(s){return s&&s._delegate?s._delegate:s}class G{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ke="[DEFAULT]";/**
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
 */class Oi{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new gi;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:r});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(n)return null;throw a}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fi(e))try{this.getOrInitializeService({instanceIdentifier:ke})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:a});n.resolve(i)}catch{}}}}clearInstance(e=ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ke){return this.instances.has(e)}getOptions(e=ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&o.resolve(a)}return a}onInit(e,r){const n=this.normalizeInstanceIdentifier(r),a=this.onInitCallbacks.get(n)??new Set;a.add(e),this.onInitCallbacks.set(n,a);const i=this.instances.get(n);return i&&e(i,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const a of n)try{a(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:zi(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ke){return this.component?this.component.multipleInstances?e:ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zi(s){return s===ke?void 0:s}function Fi(s){return s.instantiationMode==="EAGER"}/**
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
 */class Ui{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Oi(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var I;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(I||(I={}));const $i={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Bi=I.INFO,Wi={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Hi=(s,e,...r)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),a=Wi[e];if(a)console[a](`[${n}]  ${s.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $s{constructor(e){this.name=e,this._logLevel=Bi,this._logHandler=Hi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const qi=(s,e)=>e.some(r=>s instanceof r);let Sr,_r;function Vi(){return Sr||(Sr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gi(){return _r||(_r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const In=new WeakMap,vs=new WeakMap,Sn=new WeakMap,ts=new WeakMap,Bs=new WeakMap;function Ki(s){const e=new Promise((r,n)=>{const a=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{r(ge(s.result)),a()},o=()=>{n(s.error),a()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(r=>{r instanceof IDBCursor&&In.set(r,s)}).catch(()=>{}),Bs.set(e,s),e}function Ji(s){if(vs.has(s))return;const e=new Promise((r,n)=>{const a=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{r(),a()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});vs.set(s,e)}let js={get(s,e,r){if(s instanceof IDBTransaction){if(e==="done")return vs.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Sn.get(s);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ge(s[e])},set(s,e,r){return s[e]=r,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Yi(s){js=s(js)}function Xi(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=s.call(ss(this),e,...r);return Sn.set(n,e.sort?e.sort():[e]),ge(n)}:Gi().includes(s)?function(...e){return s.apply(ss(this),e),ge(In.get(this))}:function(...e){return ge(s.apply(ss(this),e))}}function Qi(s){return typeof s=="function"?Xi(s):(s instanceof IDBTransaction&&Ji(s),qi(s,Vi())?new Proxy(s,js):s)}function ge(s){if(s instanceof IDBRequest)return Ki(s);if(ts.has(s))return ts.get(s);const e=Qi(s);return e!==s&&(ts.set(s,e),Bs.set(e,s)),e}const ss=s=>Bs.get(s);function _n(s,e,{blocked:r,upgrade:n,blocking:a,terminated:i}={}){const o=indexedDB.open(s,e),l=ge(o);return n&&o.addEventListener("upgradeneeded",c=>{n(ge(o.result),c.oldVersion,c.newVersion,ge(o.transaction),c)}),r&&o.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),a&&c.addEventListener("versionchange",u=>a(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Zi=["get","getKey","getAll","getAllKeys","count"],eo=["put","add","delete","clear"],rs=new Map;function Cr(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(rs.get(e))return rs.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,a=eo.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(a||Zi.includes(r)))return;const i=async function(o,...l){const c=this.transaction(o,a?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[r](...l),a&&c.done]))[0]};return rs.set(e,i),i}Yi(s=>({...s,get:(e,r,n)=>Cr(e,r)||s.get(e,r,n),has:(e,r)=>!!Cr(e,r)||s.has(e,r)}));/**
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
 */class to{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(so(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function so(s){return s.getComponent()?.type==="VERSION"}const Ns="@firebase/app",Er="0.14.7";/**
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
 */const re=new $s("@firebase/app"),ro="@firebase/app-compat",no="@firebase/analytics-compat",ao="@firebase/analytics",io="@firebase/app-check-compat",oo="@firebase/app-check",lo="@firebase/auth",co="@firebase/auth-compat",uo="@firebase/database",mo="@firebase/data-connect",ho="@firebase/database-compat",po="@firebase/functions",fo="@firebase/functions-compat",xo="@firebase/installations",go="@firebase/installations-compat",bo="@firebase/messaging",yo="@firebase/messaging-compat",wo="@firebase/performance",vo="@firebase/performance-compat",jo="@firebase/remote-config",No="@firebase/remote-config-compat",ko="@firebase/storage",Io="@firebase/storage-compat",So="@firebase/firestore",_o="@firebase/ai",Co="@firebase/firestore-compat",Eo="firebase",To="12.8.0";/**
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
 */const ks="[DEFAULT]",Ao={[Ns]:"fire-core",[ro]:"fire-core-compat",[ao]:"fire-analytics",[no]:"fire-analytics-compat",[oo]:"fire-app-check",[io]:"fire-app-check-compat",[lo]:"fire-auth",[co]:"fire-auth-compat",[uo]:"fire-rtdb",[mo]:"fire-data-connect",[ho]:"fire-rtdb-compat",[po]:"fire-fn",[fo]:"fire-fn-compat",[xo]:"fire-iid",[go]:"fire-iid-compat",[bo]:"fire-fcm",[yo]:"fire-fcm-compat",[wo]:"fire-perf",[vo]:"fire-perf-compat",[jo]:"fire-rc",[No]:"fire-rc-compat",[ko]:"fire-gcs",[Io]:"fire-gcs-compat",[So]:"fire-fst",[Co]:"fire-fst-compat",[_o]:"fire-vertex","fire-js":"fire-js",[Eo]:"fire-js-all"};/**
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
 */const Ct=new Map,Po=new Map,Is=new Map;function Tr(s,e){try{s.container.addComponent(e)}catch(r){re.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,r)}}function ne(s){const e=s.name;if(Is.has(e))return re.debug(`There were multiple attempts to register component ${e}.`),!1;Is.set(e,s);for(const r of Ct.values())Tr(r,s);for(const r of Po.values())Tr(r,s);return!0}function Ve(s,e){const r=s.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),s.container.getProvider(e)}function L(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Ro={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new Le("app","Firebase",Ro);/**
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
 */class Mo{constructor(e,r,n){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new G("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
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
 */const dt=To;function Cn(s,e={}){let r=s;typeof e!="object"&&(e={name:e});const n={name:ks,automaticDataCollectionEnabled:!0,...e},a=n.name;if(typeof a!="string"||!a)throw be.create("bad-app-name",{appName:String(a)});if(r||(r=jn()),!r)throw be.create("no-options");const i=Ct.get(a);if(i){if(Ce(r,i.options)&&Ce(n,i.config))return i;throw be.create("duplicate-app",{appName:a})}const o=new Ui(a);for(const c of Is.values())o.addComponent(c);const l=new Mo(r,n,o);return Ct.set(a,l),l}function En(s=ks){const e=Ct.get(s);if(!e&&s===ks&&jn())return Cn();if(!e)throw be.create("no-app",{appName:s});return e}function q(s,e,r){let n=Ao[s]??s;r&&(n+=`-${r}`);const a=n.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const o=[`Unable to register library "${n}" with version "${e}":`];a&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),re.warn(o.join(" "));return}ne(new G(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const Do="firebase-heartbeat-database",Lo=1,ot="firebase-heartbeat-store";let ns=null;function Tn(){return ns||(ns=_n(Do,Lo,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(ot)}catch(r){console.warn(r)}}}}).catch(s=>{throw be.create("idb-open",{originalErrorMessage:s.message})})),ns}async function Oo(s){try{const r=(await Tn()).transaction(ot),n=await r.objectStore(ot).get(An(s));return await r.done,n}catch(e){if(e instanceof K)re.warn(e.message);else{const r=be.create("idb-get",{originalErrorMessage:e?.message});re.warn(r.message)}}}async function Ar(s,e){try{const n=(await Tn()).transaction(ot,"readwrite");await n.objectStore(ot).put(e,An(s)),await n.done}catch(r){if(r instanceof K)re.warn(r.message);else{const n=be.create("idb-set",{originalErrorMessage:r?.message});re.warn(n.message)}}}function An(s){return`${s.name}!${s.options.appId}`}/**
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
 */const zo=1024,Fo=30;class Uo{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Bo(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Pr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(a=>a.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>Fo){const a=Wo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){re.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pr(),{heartbeatsToSend:r,unsentEntries:n}=$o(this._heartbeatsCache.heartbeats),a=wn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return re.warn(e),""}}}function Pr(){return new Date().toISOString().substring(0,10)}function $o(s,e=zo){const r=[];let n=s.slice();for(const a of s){const i=r.find(o=>o.agent===a.agent);if(i){if(i.dates.push(a.date),Rr(r)>e){i.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Rr(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Bo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fs()?Us().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Oo(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ar(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ar(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Rr(s){return wn(JSON.stringify({version:2,heartbeats:s})).length}function Wo(s){if(s.length===0)return-1;let e=0,r=s[0].date;for(let n=1;n<s.length;n++)s[n].date<r&&(r=s[n].date,e=n);return e}/**
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
 */function Ho(s){ne(new G("platform-logger",e=>new to(e),"PRIVATE")),ne(new G("heartbeat",e=>new Uo(e),"PRIVATE")),q(Ns,Er,s),q(Ns,Er,"esm2020"),q("fire-js","")}Ho("");var qo="firebase",Vo="12.8.0";/**
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
 */q(qo,Vo,"app");const Pn="@firebase/installations",Ws="0.6.19";/**
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
 */const Rn=1e4,Mn=`w:${Ws}`,Dn="FIS_v2",Go="https://firebaseinstallations.googleapis.com/v1",Ko=60*60*1e3,Jo="installations",Yo="Installations";/**
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
 */const Xo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ee=new Le(Jo,Yo,Xo);function Ln(s){return s instanceof K&&s.code.includes("request-failed")}/**
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
 */function On({projectId:s}){return`${Go}/projects/${s}/installations`}function zn(s){return{token:s.token,requestStatus:2,expiresIn:Zo(s.expiresIn),creationTime:Date.now()}}async function Fn(s,e){const n=(await e.json()).error;return Ee.create("request-failed",{requestName:s,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Un({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function Qo(s,{refreshToken:e}){const r=Un(s);return r.append("Authorization",el(e)),r}async function $n(s){const e=await s();return e.status>=500&&e.status<600?s():e}function Zo(s){return Number(s.replace("s","000"))}function el(s){return`${Dn} ${s}`}/**
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
 */async function tl({appConfig:s,heartbeatServiceProvider:e},{fid:r}){const n=On(s),a=Un(s),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const o={fid:r,authVersion:Dn,appId:s.appId,sdkVersion:Mn},l={method:"POST",headers:a,body:JSON.stringify(o)},c=await $n(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:zn(u.authToken)}}else throw await Fn("Create Installation",c)}/**
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
 */function Bn(s){return new Promise(e=>{setTimeout(e,s)})}/**
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
 */function sl(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rl=/^[cdef][\w-]{21}$/,Ss="";function nl(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const r=al(s);return rl.test(r)?r:Ss}catch{return Ss}}function al(s){return sl(s).substr(0,22)}/**
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
 */function Bt(s){return`${s.appName}!${s.appId}`}/**
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
 */const Wn=new Map;function Hn(s,e){const r=Bt(s);qn(r,e),il(r,e)}function qn(s,e){const r=Wn.get(s);if(r)for(const n of r)n(e)}function il(s,e){const r=ol();r&&r.postMessage({key:s,fid:e}),ll()}let Ie=null;function ol(){return!Ie&&"BroadcastChannel"in self&&(Ie=new BroadcastChannel("[Firebase] FID Change"),Ie.onmessage=s=>{qn(s.data.key,s.data.fid)}),Ie}function ll(){Wn.size===0&&Ie&&(Ie.close(),Ie=null)}/**
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
 */const cl="firebase-installations-database",dl=1,Te="firebase-installations-store";let as=null;function Hs(){return as||(as=_n(cl,dl,{upgrade:(s,e)=>{switch(e){case 0:s.createObjectStore(Te)}}})),as}async function Et(s,e){const r=Bt(s),a=(await Hs()).transaction(Te,"readwrite"),i=a.objectStore(Te),o=await i.get(r);return await i.put(e,r),await a.done,(!o||o.fid!==e.fid)&&Hn(s,e.fid),e}async function Vn(s){const e=Bt(s),n=(await Hs()).transaction(Te,"readwrite");await n.objectStore(Te).delete(e),await n.done}async function Wt(s,e){const r=Bt(s),a=(await Hs()).transaction(Te,"readwrite"),i=a.objectStore(Te),o=await i.get(r),l=e(o);return l===void 0?await i.delete(r):await i.put(l,r),await a.done,l&&(!o||o.fid!==l.fid)&&Hn(s,l.fid),l}/**
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
 */async function qs(s){let e;const r=await Wt(s.appConfig,n=>{const a=ul(n),i=ml(s,a);return e=i.registrationPromise,i.installationEntry});return r.fid===Ss?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function ul(s){const e=s||{fid:nl(),registrationStatus:0};return Gn(e)}function ml(s,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Ee.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=hl(s,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pl(s)}:{installationEntry:e}}async function hl(s,e){try{const r=await tl(s,e);return Et(s.appConfig,r)}catch(r){throw Ln(r)&&r.customData.serverCode===409?await Vn(s.appConfig):await Et(s.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function pl(s){let e=await Mr(s.appConfig);for(;e.registrationStatus===1;)await Bn(100),e=await Mr(s.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await qs(s);return n||r}return e}function Mr(s){return Wt(s,e=>{if(!e)throw Ee.create("installation-not-found");return Gn(e)})}function Gn(s){return fl(s)?{fid:s.fid,registrationStatus:0}:s}function fl(s){return s.registrationStatus===1&&s.registrationTime+Rn<Date.now()}/**
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
 */async function xl({appConfig:s,heartbeatServiceProvider:e},r){const n=gl(s,r),a=Qo(s,r),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const o={installation:{sdkVersion:Mn,appId:s.appId}},l={method:"POST",headers:a,body:JSON.stringify(o)},c=await $n(()=>fetch(n,l));if(c.ok){const u=await c.json();return zn(u)}else throw await Fn("Generate Auth Token",c)}function gl(s,{fid:e}){return`${On(s)}/${e}/authTokens:generate`}/**
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
 */async function Vs(s,e=!1){let r;const n=await Wt(s.appConfig,i=>{if(!Kn(i))throw Ee.create("not-registered");const o=i.authToken;if(!e&&wl(o))return i;if(o.requestStatus===1)return r=bl(s,e),i;{if(!navigator.onLine)throw Ee.create("app-offline");const l=jl(i);return r=yl(s,l),l}});return r?await r:n.authToken}async function bl(s,e){let r=await Dr(s.appConfig);for(;r.authToken.requestStatus===1;)await Bn(100),r=await Dr(s.appConfig);const n=r.authToken;return n.requestStatus===0?Vs(s,e):n}function Dr(s){return Wt(s,e=>{if(!Kn(e))throw Ee.create("not-registered");const r=e.authToken;return Nl(r)?{...e,authToken:{requestStatus:0}}:e})}async function yl(s,e){try{const r=await xl(s,e),n={...e,authToken:r};return await Et(s.appConfig,n),r}catch(r){if(Ln(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Vn(s.appConfig);else{const n={...e,authToken:{requestStatus:0}};await Et(s.appConfig,n)}throw r}}function Kn(s){return s!==void 0&&s.registrationStatus===2}function wl(s){return s.requestStatus===2&&!vl(s)}function vl(s){const e=Date.now();return e<s.creationTime||s.creationTime+s.expiresIn<e+Ko}function jl(s){const e={requestStatus:1,requestTime:Date.now()};return{...s,authToken:e}}function Nl(s){return s.requestStatus===1&&s.requestTime+Rn<Date.now()}/**
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
 */async function kl(s){const e=s,{installationEntry:r,registrationPromise:n}=await qs(e);return n?n.catch(console.error):Vs(e).catch(console.error),r.fid}/**
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
 */async function Il(s,e=!1){const r=s;return await Sl(r),(await Vs(r,e)).token}async function Sl(s){const{registrationPromise:e}=await qs(s);e&&await e}/**
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
 */function _l(s){if(!s||!s.options)throw is("App Configuration");if(!s.name)throw is("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!s.options[r])throw is(r);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function is(s){return Ee.create("missing-app-config-values",{valueName:s})}/**
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
 */const Jn="installations",Cl="installations-internal",El=s=>{const e=s.getProvider("app").getImmediate(),r=_l(e),n=Ve(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},Tl=s=>{const e=s.getProvider("app").getImmediate(),r=Ve(e,Jn).getImmediate();return{getId:()=>kl(r),getToken:a=>Il(r,a)}};function Al(){ne(new G(Jn,El,"PUBLIC")),ne(new G(Cl,Tl,"PRIVATE"))}Al();q(Pn,Ws);q(Pn,Ws,"esm2020");/**
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
 */const Tt="analytics",Pl="firebase_id",Rl="origin",Ml=60*1e3,Dl="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gs="https://www.googletagmanager.com/gtag/js";/**
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
 */const A=new $s("@firebase/analytics");/**
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
 */const Ll={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},M=new Le("analytics","Analytics",Ll);/**
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
 */function Ol(s){if(!s.startsWith(Gs)){const e=M.create("invalid-gtag-resource",{gtagURL:s});return A.warn(e.message),""}return s}function Yn(s){return Promise.all(s.map(e=>e.catch(r=>r)))}function zl(s,e){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(s,e)),r}function Fl(s,e){const r=zl("firebase-js-sdk-policy",{createScriptURL:Ol}),n=document.createElement("script"),a=`${Gs}?l=${s}&id=${e}`;n.src=r?r?.createScriptURL(a):a,n.async=!0,document.head.appendChild(n)}function Ul(s){let e=[];return Array.isArray(window[s])?e=window[s]:window[s]=e,e}async function $l(s,e,r,n,a,i){const o=n[a];try{if(o)await e[o];else{const c=(await Yn(r)).find(u=>u.measurementId===a);c&&await e[c.appId]}}catch(l){A.error(l)}s("config",a,i)}async function Bl(s,e,r,n,a){try{let i=[];if(a&&a.send_to){let o=a.send_to;Array.isArray(o)||(o=[o]);const l=await Yn(r);for(const c of o){const u=l.find(d=>d.measurementId===c),p=u&&e[u.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),s("event",n,a||{})}catch(i){A.error(i)}}function Wl(s,e,r,n){async function a(i,...o){try{if(i==="event"){const[l,c]=o;await Bl(s,e,r,l,c)}else if(i==="config"){const[l,c]=o;await $l(s,e,r,n,l,c)}else if(i==="consent"){const[l,c]=o;s("consent",l,c)}else if(i==="get"){const[l,c,u]=o;s("get",l,c,u)}else if(i==="set"){const[l]=o;s("set",l)}else s(i,...o)}catch(l){A.error(l)}}return a}function Hl(s,e,r,n,a){let i=function(...o){window[n].push(arguments)};return window[a]&&typeof window[a]=="function"&&(i=window[a]),window[a]=Wl(i,s,e,r),{gtagCore:i,wrappedGtag:window[a]}}function ql(s){const e=window.document.getElementsByTagName("script");for(const r of Object.values(e))if(r.src&&r.src.includes(Gs)&&r.src.includes(s))return r;return null}/**
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
 */const Vl=30,Gl=1e3;class Kl{constructor(e={},r=Gl){this.throttleMetadata=e,this.intervalMillis=r}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,r){this.throttleMetadata[e]=r}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Xn=new Kl;function Jl(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function Yl(s){const{appId:e,apiKey:r}=s,n={method:"GET",headers:Jl(r)},a=Dl.replace("{app-id}",e),i=await fetch(a,n);if(i.status!==200&&i.status!==304){let o="";try{const l=await i.json();l.error?.message&&(o=l.error.message)}catch{}throw M.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Xl(s,e=Xn,r){const{appId:n,apiKey:a,measurementId:i}=s.options;if(!n)throw M.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:n};throw M.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ec;return setTimeout(async()=>{l.abort()},Ml),Qn({appId:n,apiKey:a,measurementId:i},o,l,e)}async function Qn(s,{throttleEndTimeMillis:e,backoffCount:r},n,a=Xn){const{appId:i,measurementId:o}=s;try{await Ql(n,e)}catch(l){if(o)return A.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw l}try{const l=await Yl(s);return a.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!Zl(c)){if(a.deleteThrottleMetadata(i),o)return A.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?Ir(r,a.intervalMillis,Vl):Ir(r,a.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:r+1};return a.setThrottleMetadata(i,p),A.debug(`Calling attemptFetch again in ${u} millis`),Qn(s,p,n,a)}}function Ql(s,e){return new Promise((r,n)=>{const a=Math.max(e-Date.now(),0),i=setTimeout(r,a);s.addEventListener(()=>{clearTimeout(i),n(M.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Zl(s){if(!(s instanceof K)||!s.customData)return!1;const e=Number(s.customData.httpStatus);return e===429||e===500||e===503||e===504}class ec{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tc(s,e,r,n,a){if(a&&a.global){s("event",r,n);return}else{const i=await e,o={...n,send_to:i};s("event",r,o)}}async function sc(s,e,r,n){if(n&&n.global){const a={};for(const i of Object.keys(r))a[`user_properties.${i}`]=r[i];return s("set",a),Promise.resolve()}else{const a=await e;s("config",a,{update:!0,user_properties:r})}}/**
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
 */async function rc(){if(Fs())try{await Us()}catch(s){return A.warn(M.create("indexeddb-unavailable",{errorInfo:s?.toString()}).message),!1}else return A.warn(M.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nc(s,e,r,n,a,i,o){const l=Xl(s);l.then(h=>{r[h.measurementId]=h.appId,s.options.measurementId&&h.measurementId!==s.options.measurementId&&A.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>A.error(h)),e.push(l);const c=rc().then(h=>{if(h)return n.getId()}),[u,p]=await Promise.all([l,c]);ql(i)||Fl(i,u.measurementId),a("js",new Date);const d=o?.config??{};return d[Rl]="firebase",d.update=!0,p!=null&&(d[Pl]=p),a("config",u.measurementId,d),u.measurementId}/**
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
 */class ac{constructor(e){this.app=e}_delete(){return delete Fe[this.app.options.appId],Promise.resolve()}}let Fe={},Lr=[];const Or={};let os="dataLayer",ic="gtag",zr,Ks,Fr=!1;function oc(){const s=[];if(zs()&&s.push("This is a browser extension environment."),kn()||s.push("Cookies are not available."),s.length>0){const e=s.map((n,a)=>`(${a+1}) ${n}`).join(" "),r=M.create("invalid-analytics-context",{errorInfo:e});A.warn(r.message)}}function lc(s,e,r){oc();const n=s.options.appId;if(!n)throw M.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)A.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw M.create("no-api-key");if(Fe[n]!=null)throw M.create("already-exists",{id:n});if(!Fr){Ul(os);const{wrappedGtag:i,gtagCore:o}=Hl(Fe,Lr,Or,os,ic);Ks=i,zr=o,Fr=!0}return Fe[n]=nc(s,Lr,Or,e,zr,os,r),new ac(s)}function cc(s=En()){s=D(s);const e=Ve(s,Tt);return e.isInitialized()?e.getImmediate():dc(s)}function dc(s,e={}){const r=Ve(s,Tt);if(r.isInitialized()){const a=r.getImmediate();if(Ce(e,r.getOptions()))return a;throw M.create("already-initialized")}return r.initialize({options:e})}async function uc(){if(zs()||!kn()||!Fs())return!1;try{return await Us()}catch{return!1}}function mc(s,e,r){s=D(s),sc(Ks,Fe[s.app.options.appId],e,r).catch(n=>A.error(n))}function hc(s,e,r,n){s=D(s),tc(Ks,Fe[s.app.options.appId],e,r,n).catch(a=>A.error(a))}const Ur="@firebase/analytics",$r="0.10.19";function pc(){ne(new G(Tt,(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return lc(n,a,r)},"PUBLIC")),ne(new G("analytics-internal",s,"PRIVATE")),q(Ur,$r),q(Ur,$r,"esm2020");function s(e){try{const r=e.getProvider(Tt).getImmediate();return{logEvent:(n,a,i)=>hc(r,n,a,i),setUserProperties:(n,a)=>mc(r,n,a)}}catch(r){throw M.create("interop-component-reg-failed",{reason:r})}}}pc();function Zn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fc=Zn,ea=new Le("auth","Firebase",Zn());/**
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
 */const At=new $s("@firebase/auth");function xc(s,...e){At.logLevel<=I.WARN&&At.warn(`Auth (${dt}): ${s}`,...e)}function jt(s,...e){At.logLevel<=I.ERROR&&At.error(`Auth (${dt}): ${s}`,...e)}/**
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
 */function z(s,...e){throw Ys(s,...e)}function U(s,...e){return Ys(s,...e)}function Js(s,e,r){const n={...fc(),[e]:r};return new Le("auth","Firebase",n).create(e,{appName:s.name})}function se(s){return Js(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gc(s,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&z(s,"argument-error"),Js(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ys(s,...e){if(typeof s!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(r,...n)}return ea.create(s,...e)}function j(s,e,...r){if(!s)throw Ys(e,...r)}function ee(s){const e="INTERNAL ASSERTION FAILED: "+s;throw jt(e),new Error(e)}function ae(s,e){s||ee(e)}/**
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
 */function _s(){return typeof self<"u"&&self.location?.href||""}function bc(){return Br()==="http:"||Br()==="https:"}function Br(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function yc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bc()||zs()||"connection"in navigator)?navigator.onLine:!0}function wc(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class ut{constructor(e,r){this.shortDelay=e,this.longDelay=r,ae(r>e,"Short delay should be less than long delay!"),this.isMobile=ji()||ki()}get(){return yc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xs(s,e){ae(s.emulator,"Emulator should always be set here");const{url:r}=s.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class ta{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nc=new ut(3e4,6e4);function oe(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function J(s,e,r,n,a={}){return sa(s,a,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const l=ct({key:s.config.apiKey,...o}).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const u={method:e,headers:c,...i};return Ni()||(u.referrerPolicy="no-referrer"),s.emulatorConfig&&$t(s.emulatorConfig.host)&&(u.credentials="include"),ta.fetch()(await ra(s,s.config.apiHost,r,l),u)})}async function sa(s,e,r){s._canInitEmulator=!1;const n={...vc,...e};try{const a=new Ic(s),i=await Promise.race([r(),a.promise]);a.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gt(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gt(s,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gt(s,"email-already-in-use",o);if(c==="USER_DISABLED")throw gt(s,"user-disabled",o);const p=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Js(s,p,u);z(s,p)}}catch(a){if(a instanceof K)throw a;z(s,"network-request-failed",{message:String(a)})}}async function mt(s,e,r,n,a={}){const i=await J(s,e,r,n,a);return"mfaPendingCredential"in i&&z(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function ra(s,e,r,n){const a=`${e}${r}?${n}`,i=s,o=i.config.emulator?Xs(s.config,a):`${s.config.apiScheme}://${a}`;return jc.includes(r)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function kc(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ic{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(U(this.auth,"network-request-failed")),Nc.get())})}}function gt(s,e,r){const n={appName:s.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const a=U(s,e,n);return a.customData._tokenResponse=r,a}function Wr(s){return s!==void 0&&s.enterprise!==void 0}class Sc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return kc(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _c(s,e){return J(s,"GET","/v2/recaptchaConfig",oe(s,e))}/**
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
 */async function Cc(s,e){return J(s,"POST","/v1/accounts:delete",e)}async function Pt(s,e){return J(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function at(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ec(s,e=!1){const r=D(s),n=await r.getIdToken(e),a=Qs(n);j(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const i=typeof a.firebase=="object"?a.firebase:void 0,o=i?.sign_in_provider;return{claims:a,token:n,authTime:at(ls(a.auth_time)),issuedAtTime:at(ls(a.iat)),expirationTime:at(ls(a.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ls(s){return Number(s)*1e3}function Qs(s){const[e,r,n]=s.split(".");if(e===void 0||r===void 0||n===void 0)return jt("JWT malformed, contained fewer than 3 sections"),null;try{const a=vn(r);return a?JSON.parse(a):(jt("Failed to decode base64 JWT payload"),null)}catch(a){return jt("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Hr(s){const e=Qs(s);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function He(s,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof K&&Tc(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Tc({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class Ac{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cs{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rt(s){const e=s.auth,r=await s.getIdToken(),n=await He(s,Pt(e,{idToken:r}));j(n?.users.length,e,"internal-error");const a=n.users[0];s._notifyReloadListener(a);const i=a.providerUserInfo?.length?na(a.providerUserInfo):[],o=Rc(s.providerData,i),l=s.isAnonymous,c=!(s.email&&a.passwordHash)&&!o?.length,u=l?c:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Cs(a.createdAt,a.lastLoginAt),isAnonymous:u};Object.assign(s,p)}async function Pc(s){const e=D(s);await Rt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rc(s,e){return[...s.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function na(s){return s.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
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
 */async function Mc(s,e){const r=await sa(s,{},async()=>{const n=ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:i}=s.config,o=await ra(s,a,"/v1/token",`key=${i}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:n};return s.emulatorConfig&&$t(s.emulatorConfig.host)&&(c.credentials="include"),ta.fetch()(o,c)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Dc(s,e){return J(s,"POST","/v2/accounts:revokeToken",oe(s,e))}/**
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
 */class Ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){j(e.length!==0,"internal-error");const r=Hr(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:a,expiresIn:i}=await Mc(e,r);this.updateTokensAndExpiration(n,a,Number(i))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:a,expirationTime:i}=r,o=new Ue;return n&&(j(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),a&&(j(typeof a=="string","internal-error",{appName:e}),o.accessToken=a),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ue,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
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
 */function ce(s,e){j(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class F{constructor({uid:e,auth:r,stsTokenManager:n,...a}){this.providerId="firebase",this.proactiveRefresh=new Ac(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cs(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await He(this,this.stsTokenManager.getToken(this.auth,e));return j(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Ec(this,e)}reload(){return Pc(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>({...r})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new F({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Rt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(L(this.auth.app))return Promise.reject(se(this.auth));const e=await this.getIdToken();return await He(this,Cc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){const n=r.displayName??void 0,a=r.email??void 0,i=r.phoneNumber??void 0,o=r.photoURL??void 0,l=r.tenantId??void 0,c=r._redirectEventId??void 0,u=r.createdAt??void 0,p=r.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:f,providerData:w,stsTokenManager:m}=r;j(d&&m,e,"internal-error");const x=Ue.fromJSON(this.name,m);j(typeof d=="string",e,"internal-error"),ce(n,e.name),ce(a,e.name),j(typeof h=="boolean",e,"internal-error"),j(typeof f=="boolean",e,"internal-error"),ce(i,e.name),ce(o,e.name),ce(l,e.name),ce(c,e.name),ce(u,e.name),ce(p,e.name);const g=new F({uid:d,auth:e,email:a,emailVerified:h,displayName:n,isAnonymous:f,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:u,lastLoginAt:p});return w&&Array.isArray(w)&&(g.providerData=w.map(v=>({...v}))),c&&(g._redirectEventId=c),g}static async _fromIdTokenResponse(e,r,n=!1){const a=new Ue;a.updateFromServerResponse(r);const i=new F({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await Rt(i),i}static async _fromGetAccountInfoResponse(e,r,n){const a=r.users[0];j(a.localId!==void 0,"internal-error");const i=a.providerUserInfo!==void 0?na(a.providerUserInfo):[],o=!(a.email&&a.passwordHash)&&!i?.length,l=new Ue;l.updateFromIdToken(n);const c=new F({uid:a.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:i,metadata:new Cs(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const qr=new Map;function te(s){ae(s instanceof Function,"Expected a class definition");let e=qr.get(s);return e?(ae(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,qr.set(s,e),e)}/**
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
 */class aa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}aa.type="NONE";const Vr=aa;/**
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
 */function Nt(s,e,r){return`firebase:${s}:${e}:${r}`}class $e{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:a,name:i}=this.auth;this.fullUserKey=Nt(this.userKey,a.apiKey,i),this.fullPersistenceKey=Nt("persistence",a.apiKey,i),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await Pt(this.auth,{idToken:e}).catch(()=>{});return r?F._fromGetAccountInfoResponse(this.auth,r,e):null}return F._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new $e(te(Vr),e,n);const a=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=a[0]||te(Vr);const o=Nt(n,e.config.apiKey,e.name);let l=null;for(const u of r)try{const p=await u._get(o);if(p){let d;if(typeof p=="string"){const h=await Pt(e,{idToken:p}).catch(()=>{});if(!h)break;d=await F._fromGetAccountInfoResponse(e,h,p)}else d=F._fromJSON(e,p);u!==i&&(l=d),i=u;break}}catch{}const c=a.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $e(i,e,n):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(r.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $e(i,e,n))}}/**
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
 */function Gr(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ca(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ia(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ua(e))return"Blackberry";if(ma(e))return"Webos";if(oa(e))return"Safari";if((e.includes("chrome/")||la(e))&&!e.includes("edge/"))return"Chrome";if(da(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(r);if(n?.length===2)return n[1]}return"Other"}function ia(s=R()){return/firefox\//i.test(s)}function oa(s=R()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function la(s=R()){return/crios\//i.test(s)}function ca(s=R()){return/iemobile/i.test(s)}function da(s=R()){return/android/i.test(s)}function ua(s=R()){return/blackberry/i.test(s)}function ma(s=R()){return/webos/i.test(s)}function Zs(s=R()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Lc(s=R()){return Zs(s)&&!!window.navigator?.standalone}function Oc(){return Ii()&&document.documentMode===10}function ha(s=R()){return Zs(s)||da(s)||ma(s)||ua(s)||/windows phone/i.test(s)||ca(s)}/**
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
 */function pa(s,e=[]){let r;switch(s){case"Browser":r=Gr(R());break;case"Worker":r=`${Gr(R())}-${s}`;break;default:r=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${dt}/${n}`}/**
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
 */class zc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});n.onAbort=r,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const a of r)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function Fc(s,e={}){return J(s,"GET","/v2/passwordPolicy",oe(s,e))}/**
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
 */const Uc=6;class $c{constructor(e){const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Uc,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),a&&(r.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let a=0;a<e.length;a++)n=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,a,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Bc{constructor(e,r,n,a){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kr(this),this.idTokenSubscription=new Kr(this),this.beforeStateQueue=new zc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ea,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=te(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await $e.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await Pt(this,{idToken:e}),n=await F._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(L(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let n=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(n=l.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Rt(e)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(L(this.app))return Promise.reject(se(this));const r=e?D(e):null;return r&&j(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return L(this.app)?Promise.reject(se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return L(this.app)?Promise.reject(se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fc(this),r=new $c(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Le("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Dc(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&te(e)||this._popupRedirectResolver;j(r,this,"argument-error"),this.redirectPersistenceManager=await $e.create(this,[te(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,a){if(this._deleted)return()=>{};const i=typeof r=="function"?r:r.next.bind(r);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,a);return()=>{o=!0,c()}}else{const c=e.addObserver(r);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(e["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(L(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&xc(`Error while retrieving App Check token: ${e.error}`),e?.token}}function le(s){return D(s)}class Kr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ti(r=>this.observer=r)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ht={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wc(s){Ht=s}function fa(s){return Ht.loadJS(s)}function Hc(){return Ht.recaptchaEnterpriseScript}function qc(){return Ht.gapiScript}function Vc(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Gc{constructor(){this.enterprise=new Kc}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class Kc{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const Jc="recaptcha-enterprise",xa="NO_RECAPTCHA";class Yc{constructor(e){this.type=Jc,this.auth=le(e)}async verify(e="verify",r=!1){async function n(i){if(!r){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{_c(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Sc(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function a(i,o,l){const c=window.grecaptcha;Wr(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(xa)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gc().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(l=>{if(!r&&Wr(window.grecaptcha))a(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Hc();c.length!==0&&(c+=l),fa(c).then(()=>{a(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Jr(s,e,r,n=!1,a=!1){const i=new Yc(s);let o;if(a)o=xa;else try{o=await i.verify(r)}catch{o=await i.verify(r,!0)}const l={...e};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return n?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mt(s,e,r,n,a){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jr(s,e,r,r==="getOobCode");return n(s,i)}else return n(s,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jr(s,e,r,r==="getOobCode");return n(s,o)}else return Promise.reject(i)})}/**
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
 */function Xc(s,e){const r=Ve(s,"auth");if(r.isInitialized()){const a=r.getImmediate(),i=r.getOptions();if(Ce(i,e??{}))return a;z(a,"already-initialized")}return r.initialize({options:e})}function Qc(s,e){const r=e?.persistence||[],n=(Array.isArray(r)?r:[r]).map(te);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e?.popupRedirectResolver)}function Zc(s,e,r){const n=le(s);j(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!1,i=ga(e),{host:o,port:l}=ed(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator){j(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),j(Ce(u,n.config.emulator)&&Ce(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,$t(o)?(bi(`${i}//${o}${c}`),vi("Auth",!0)):td()}function ga(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function ed(s){const e=ga(s),r=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const i=a[1];return{host:i,port:Yr(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Yr(o)}}}function Yr(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function td(){function s(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class er{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,r){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}async function sd(s,e){return J(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rd(s,e){return mt(s,"POST","/v1/accounts:signInWithPassword",oe(s,e))}async function nd(s,e){return J(s,"POST","/v1/accounts:sendOobCode",oe(s,e))}async function ad(s,e){return nd(s,e)}/**
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
 */async function id(s,e){return mt(s,"POST","/v1/accounts:signInWithEmailLink",oe(s,e))}async function od(s,e){return mt(s,"POST","/v1/accounts:signInWithEmailLink",oe(s,e))}/**
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
 */class lt extends er{constructor(e,r,n,a=null){super("password",n),this._email=e,this._password=r,this._tenantId=a}static _fromEmailAndPassword(e,r){return new lt(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new lt(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mt(e,r,"signInWithPassword",rd);case"emailLink":return id(e,{email:this._email,oobCode:this._password});default:z(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mt(e,n,"signUpPassword",sd);case"emailLink":return od(e,{idToken:r,email:this._email,oobCode:this._password});default:z(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Be(s,e){return mt(s,"POST","/v1/accounts:signInWithIdp",oe(s,e))}/**
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
 */const ld="http://localhost";class Ae extends er{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):z("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,...i}=r;if(!n||!a)return null;const o=new Ae(n,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const r=this.buildRequest();return Be(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Be(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Be(e,r)}buildRequest(){const e={requestUri:ld,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=ct(r)}return e}}/**
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
 */function cd(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dd(s){const e=st(rt(s)).link,r=e?st(rt(e)).deep_link_id:null,n=st(rt(s)).deep_link_id;return(n?st(rt(n)).link:null)||n||r||e||s}class tr{constructor(e){const r=st(rt(e)),n=r.apiKey??null,a=r.oobCode??null,i=cd(r.mode??null);j(n&&a&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=a,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(e){const r=dd(e);try{return new tr(r)}catch{return null}}}/**
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
 */class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,r){return lt._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=tr.parseLink(r);return j(n,"argument-error"),lt._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password";Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ht extends sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class he extends ht{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return he.credential(e.oauthAccessToken)}catch{return null}}}he.FACEBOOK_SIGN_IN_METHOD="facebook.com";he.PROVIDER_ID="facebook.com";/**
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
 */class Z extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Ae._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Z.credential(r,n)}catch{return null}}}Z.GOOGLE_SIGN_IN_METHOD="google.com";Z.PROVIDER_ID="google.com";/**
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
 */class pe extends ht{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
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
 */class fe extends ht{constructor(){super("twitter.com")}static credential(e,r){return Ae._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return fe.credential(r,n)}catch{return null}}}fe.TWITTER_SIGN_IN_METHOD="twitter.com";fe.PROVIDER_ID="twitter.com";/**
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
 */async function ud(s,e){return mt(s,"POST","/v1/accounts:signUp",oe(s,e))}/**
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
 */class Pe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,a=!1){const i=await F._fromIdTokenResponse(e,n,a),o=Xr(n);return new Pe({user:i,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const a=Xr(n);return new Pe({user:e,providerId:a,_tokenResponse:n,operationType:r})}}function Xr(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Dt extends K{constructor(e,r,n,a){super(r.code,r.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,Dt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,a){return new Dt(e,r,n,a)}}function ba(s,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(s):r._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Dt._fromErrorAndOperation(s,i,e,n):i})}async function md(s,e,r=!1){const n=await He(s,e._linkToIdToken(s.auth,await s.getIdToken()),r);return Pe._forOperation(s,"link",n)}/**
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
 */async function hd(s,e,r=!1){const{auth:n}=s;if(L(n.app))return Promise.reject(se(n));const a="reauthenticate";try{const i=await He(s,ba(n,a,e,s),r);j(i.idToken,n,"internal-error");const o=Qs(i.idToken);j(o,n,"internal-error");const{sub:l}=o;return j(s.uid===l,n,"user-mismatch"),Pe._forOperation(s,a,i)}catch(i){throw i?.code==="auth/user-not-found"&&z(n,"user-mismatch"),i}}/**
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
 */async function ya(s,e,r=!1){if(L(s.app))return Promise.reject(se(s));const n="signIn",a=await ba(s,n,e),i=await Pe._fromIdTokenResponse(s,n,a);return r||await s._updateCurrentUser(i.user),i}async function pd(s,e){return ya(le(s),e)}/**
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
 */async function wa(s){const e=le(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fd(s,e,r){const n=le(s);await Mt(n,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ad)}async function xd(s,e,r){if(L(s.app))return Promise.reject(se(s));const n=le(s),o=await Mt(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ud).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&wa(s),c}),l=await Pe._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(l.user),l}function gd(s,e,r){return L(s.app)?Promise.reject(se(s)):pd(D(s),Ge.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&wa(s),n})}/**
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
 */async function bd(s,e){return J(s,"POST","/v1/accounts:update",e)}/**
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
 */async function yd(s,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const n=D(s),i={idToken:await n.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},o=await He(n,bd(n.auth,i));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const l=n.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=n.displayName,l.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function wd(s,e,r,n){return D(s).onIdTokenChanged(e,r,n)}function vd(s,e,r){return D(s).beforeAuthStateChanged(e,r)}function jd(s,e,r,n){return D(s).onAuthStateChanged(e,r,n)}function Nd(s){return D(s).signOut()}const Lt="__sak";/**
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
 */class va{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Lt,"1"),this.storage.removeItem(Lt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kd=1e3,Id=10;class ja extends va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ha(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),a=this.localCache[r];n!==a&&e(r,a,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const n=e.key;r?this.detachListener():this.stopPolling();const a=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Oc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Id):a()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},kd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}ja.type="LOCAL";const Sd=ja;/**
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
 */class Na extends va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Na.type="SESSION";const ka=Na;/**
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
 */function _d(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(a=>a.isListeningto(e));if(r)return r;const n=new qt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:a,data:i}=r.data,o=this.handlersMap[a];if(!o?.size)return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const l=Array.from(o).map(async u=>u(r.origin,i)),c=await _d(l);r.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qt.receivers=[];/**
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
 */function rr(s="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return s+r}/**
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
 */class Cd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=rr("",20);a.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:a,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(h.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),a.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[a.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function V(){return window}function Ed(s){V().location.href=s}/**
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
 */function Ia(){return typeof V().WorkerGlobalScope<"u"&&typeof V().importScripts=="function"}async function Td(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ad(){return navigator?.serviceWorker?.controller||null}function Pd(){return Ia()?self:null}/**
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
 */const Sa="firebaseLocalStorageDb",Rd=1,Ot="firebaseLocalStorage",_a="fbase_key";class pt{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Vt(s,e){return s.transaction([Ot],e?"readwrite":"readonly").objectStore(Ot)}function Md(){const s=indexedDB.deleteDatabase(Sa);return new pt(s).toPromise()}function Es(){const s=indexedDB.open(Sa,Rd);return new Promise((e,r)=>{s.addEventListener("error",()=>{r(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Ot,{keyPath:_a})}catch(a){r(a)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Ot)?e(n):(n.close(),await Md(),e(await Es()))})})}async function Qr(s,e,r){const n=Vt(s,!0).put({[_a]:e,value:r});return new pt(n).toPromise()}async function Dd(s,e){const r=Vt(s,!1).get(e),n=await new pt(r).toPromise();return n===void 0?null:n.value}function Zr(s,e){const r=Vt(s,!0).delete(e);return new pt(r).toPromise()}const Ld=800,Od=3;class Ca{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Es(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>Od)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qt._getInstance(Pd()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Td(),!this.activeServiceWorker)return;this.sender=new Cd(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ad()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Es();return await Qr(e,Lt,"1"),await Zr(e,Lt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qr(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Dd(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zr(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const i=Vt(a,!1).getAll();return new pt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:a,value:i}of e)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(i)&&(this.notifyListeners(a,i),r.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),r.push(a));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ld)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ca.type="LOCAL";const zd=Ca;new ut(3e4,6e4);/**
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
 */function Ea(s,e){return e?te(e):(j(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class nr extends er{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Be(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Fd(s){return ya(s.auth,new nr(s),s.bypassAuthState)}function Ud(s){const{auth:e,user:r}=s;return j(r,e,"internal-error"),hd(r,new nr(s),s.bypassAuthState)}async function $d(s){const{auth:e,user:r}=s;return j(r,e,"internal-error"),md(r,new nr(s),s.bypassAuthState)}/**
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
 */class Ta{constructor(e,r,n,a,i=!1){this.auth=e,this.resolver=n,this.user=a,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:a,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:i||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fd;case"linkViaPopup":case"linkViaRedirect":return $d;case"reauthViaPopup":case"reauthViaRedirect":return Ud;default:z(this.auth,"internal-error")}}resolve(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bd=new ut(2e3,1e4);async function Wd(s,e,r){if(L(s.app))return Promise.reject(U(s,"operation-not-supported-in-this-environment"));const n=le(s);gc(s,e,sr);const a=Ea(n,r);return new Se(n,"signInViaPopup",e,a).executeNotNull()}class Se extends Ta{constructor(e,r,n,a,i){super(e,r,a,i),this.provider=n,this.authWindow=null,this.pollId=null,Se.currentPopupAction&&Se.currentPopupAction.cancel(),Se.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ae(this.filter.length===1,"Popup operations only handle one event");const e=rr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(U(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(U(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Se.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(U(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bd.get())};e()}}Se.currentPopupAction=null;/**
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
 */const Hd="pendingRedirect",kt=new Map;class qd extends Ta{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=kt.get(this.auth._key());if(!e){try{const n=await Vd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}kt.set(this.auth._key(),e)}return this.bypassAuthState||kt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vd(s,e){const r=Jd(e),n=Kd(s);if(!await n._isAvailable())return!1;const a=await n._get(r)==="true";return await n._remove(r),a}function Gd(s,e){kt.set(s._key(),e)}function Kd(s){return te(s._redirectPersistence)}function Jd(s){return Nt(Hd,s.config.apiKey,s.name)}async function Yd(s,e,r=!1){if(L(s.app))return Promise.reject(se(s));const n=le(s),a=Ea(n,e),o=await new qd(n,a,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const Xd=10*60*1e3;class Qd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zd(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){if(e.error&&!Aa(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";r.onError(U(this.auth,n))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xd&&this.cachedEventUids.clear(),this.cachedEventUids.has(en(e))}saveEventToCache(e){this.cachedEventUids.add(en(e)),this.lastProcessedEventTime=Date.now()}}function en(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Aa({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function Zd(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Aa(s);default:return!1}}/**
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
 */async function eu(s,e={}){return J(s,"GET","/v1/projects",e)}/**
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
 */const tu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,su=/^https?/;async function ru(s){if(s.config.emulator)return;const{authorizedDomains:e}=await eu(s);for(const r of e)try{if(nu(r))return}catch{}z(s,"unauthorized-domain")}function nu(s){const e=_s(),{protocol:r,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?r==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!su.test(r))return!1;if(tu.test(s))return n===s;const a=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}/**
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
 */const au=new ut(3e4,6e4);function tn(){const s=V().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let r=0;r<s.CP.length;r++)s.CP[r]=null}}function iu(s){return new Promise((e,r)=>{function n(){tn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tn(),r(U(s,"network-request-failed"))},timeout:au.get()})}if(V().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(V().gapi?.load)n();else{const a=Vc("iframefcb");return V()[a]=()=>{gapi.load?n():r(U(s,"network-request-failed"))},fa(`${qc()}?onload=${a}`).catch(i=>r(i))}}).catch(e=>{throw It=null,e})}let It=null;function ou(s){return It=It||iu(s),It}/**
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
 */const lu=new ut(5e3,15e3),cu="__/auth/iframe",du="emulator/auth/iframe",uu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hu(s){const e=s.config;j(e.authDomain,s,"auth-domain-config-required");const r=e.emulator?Xs(e,du):`https://${s.config.authDomain}/${cu}`,n={apiKey:e.apiKey,appName:s.name,v:dt},a=mu.get(s.config.apiHost);a&&(n.eid=a);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${r}?${ct(n).slice(1)}`}async function pu(s){const e=await ou(s),r=V().gapi;return j(r,s,"internal-error"),e.open({where:document.body,url:hu(s),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uu,dontclear:!0},n=>new Promise(async(a,i)=>{await n.restyle({setHideOnLeave:!1});const o=U(s,"network-request-failed"),l=V().setTimeout(()=>{i(o)},lu.get());function c(){V().clearTimeout(l),a(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xu=500,gu=600,bu="_blank",yu="http://localhost";class sn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wu(s,e,r,n=xu,a=gu){const i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c={...fu,width:n.toString(),height:a.toString(),top:i,left:o},u=R().toLowerCase();r&&(l=la(u)?bu:r),ia(u)&&(e=e||yu,c.scrollbars="yes");const p=Object.entries(c).reduce((h,[f,w])=>`${h}${f}=${w},`,"");if(Lc(u)&&l!=="_self")return vu(e||"",l),new sn(null);const d=window.open(e||"",l,p);j(d,s,"popup-blocked");try{d.focus()}catch{}return new sn(d)}function vu(s,e){const r=document.createElement("a");r.href=s,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const ju="__/auth/handler",Nu="emulator/auth/handler",ku=encodeURIComponent("fac");async function rn(s,e,r,n,a,i){j(s.config.authDomain,s,"auth-domain-config-required"),j(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:r,redirectUrl:n,v:dt,eventId:a};if(e instanceof sr){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Ei(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,d]of Object.entries({}))o[p]=d}if(e instanceof ht){const p=e.getScopes().filter(d=>d!=="");p.length>0&&(o.scopes=p.join(","))}s.tenantId&&(o.tid=s.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await s._getAppCheckToken(),u=c?`#${ku}=${encodeURIComponent(c)}`:"";return`${Iu(s)}?${ct(l).slice(1)}${u}`}function Iu({config:s}){return s.emulator?Xs(s,Nu):`https://${s.authDomain}/${ju}`}/**
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
 */const cs="webStorageSupport";class Su{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ka,this._completeRedirectFn=Yd,this._overrideRedirectResult=Gd}async _openPopup(e,r,n,a){ae(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await rn(e,r,n,_s(),a);return wu(e,i,rr())}async _openRedirect(e,r,n,a){await this._originValidation(e);const i=await rn(e,r,n,_s(),a);return Ed(i),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:a,promise:i}=this.eventManagers[r];return a?Promise.resolve(a):(ae(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await pu(e),n=new Qd(e);return r.register("authEvent",a=>(j(a?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(cs,{type:cs},a=>{const i=a?.[0]?.[cs];i!==void 0&&r(!!i),z(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=ru(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ha()||oa()||Zs()}}const _u=Su;var nn="@firebase/auth",an="1.12.0";/**
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
 */class Cu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Eu(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tu(s){ne(new G("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pa(s)},u=new Bc(n,a,i,c);return Qc(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ne(new G("auth-internal",e=>{const r=le(e.getProvider("auth").getImmediate());return(n=>new Cu(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),q(nn,an,Eu(s)),q(nn,an,"esm2020")}/**
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
 */const Au=5*60,Pu=Nn("authIdTokenMaxAge")||Au;let on=null;const Ru=s=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Pu)return;const a=r?.token;on!==a&&(on=a,await fetch(s,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Mu(s=En()){const e=Ve(s,"auth");if(e.isInitialized())return e.getImmediate();const r=Xc(s,{popupRedirectResolver:_u,persistence:[zd,Sd,ka]}),n=Nn("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Ru(i.toString());vd(r,o,()=>o(r.currentUser)),wd(r,l=>o(l))}}const a=xi("auth");return a&&Zc(r,`http://${a}`),r}function Du(){return document.getElementsByTagName("head")?.[0]??document}Wc({loadJS(s){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=a=>{const i=U("internal-error");i.customData=a,r(i)},n.type="text/javascript",n.charset="UTF-8",Du().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tu("Browser");const Lu={apiKey:"AIzaSyCOuQQhHzmbG7EYqpQuDj9TAeUAEdIFshY",authDomain:"peer-e8633.firebaseapp.com",projectId:"peer-e8633",storageBucket:"peer-e8633.firebasestorage.app",messagingSenderId:"767906632988",appId:"1:767906632988:web:7d7645fa356eac116096d9",measurementId:"G-7W66C4G7PY"},Pa=Cn(Lu);uc().then(s=>{s&&cc(Pa)});const Ke=Mu(Pa),Ra=new Z;Ra.setCustomParameters({prompt:"select_account"});const Ma=async()=>{try{return{user:(await Wd(Ke,Ra)).user,error:null}}catch(s){return{user:null,error:s.message}}},Ou=async(s,e)=>{try{return{user:(await gd(Ke,s,e)).user,error:null}}catch(r){let n="Login failed. Please try again.";return r.code==="auth/user-not-found"?n="No account found with this email.":r.code==="auth/wrong-password"?n="Incorrect password.":r.code==="auth/invalid-email"?n="Invalid email address.":r.code==="auth/too-many-requests"&&(n="Too many failed attempts. Please try again later."),{user:null,error:n}}},zu=async(s,e,r)=>{try{const n=await xd(Ke,s,e);return await yd(n.user,{displayName:r}),{user:n.user,error:null}}catch(n){let a="Sign up failed. Please try again.";return n.code==="auth/email-already-in-use"?a="An account with this email already exists.":n.code==="auth/invalid-email"?a="Invalid email address.":n.code==="auth/weak-password"&&(a="Password should be at least 6 characters."),{user:null,error:a}}},Fu=async()=>{try{return await Nd(Ke),{error:null}}catch(s){return{error:s.message}}},Uu=async s=>{try{return await fd(Ke,s),{error:null}}catch(e){let r="Failed to send reset email.";return e.code==="auth/user-not-found"?r="No account found with this email.":e.code==="auth/invalid-email"&&(r="Invalid email address."),{error:r}}},Da=b.createContext({user:null,loading:!0,isAuthenticated:!1});function ar(){const s=b.useContext(Da);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s}function $u({children:s}){const[e,r]=b.useState(null),[n,a]=b.useState(!0);b.useEffect(()=>{const o=jd(Ke,l=>{r(l),a(!1)});return()=>o()},[]);const i={user:e,loading:n,isAuthenticated:!!e};return t.jsx(Da.Provider,{value:i,children:s})}/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),y=(s,e)=>{const r=b.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,...u},p)=>b.createElement("svg",{ref:p,...Bu,width:a,height:a,stroke:n,strokeWidth:o?Number(i)*24/Number(a):i,className:["lucide",`lucide-${Wu(s)}`,l].join(" "),...u},[...e.map(([d,h])=>b.createElement(d,h)),...Array.isArray(c)?c:[c]]));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=y("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=y("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=y("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=y("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=y("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=y("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=y("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=y("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=y("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=y("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=y("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=y("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=y("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=y("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=y("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=y("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=y("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=y("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=y("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=y("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=y("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=y("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=y("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=y("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=y("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=y("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=y("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=y("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=y("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=y("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=y("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=y("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=y("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=y("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=y("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=y("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=y("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=y("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=y("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=y("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=y("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=y("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=y("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=y("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=y("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=y("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=y("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=y("WifiOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65",key:"11utq1"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76",key:"hxefdu"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68",key:"q734kn"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76",key:"piq4yl"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=y("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=y("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=y("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function xm({children:s}){const{user:e,loading:r,isAuthenticated:n}=ar(),a=Ms();return r?t.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-background",children:[t.jsx("div",{className:"p-4 bg-primary/10 rounded-full mb-4",children:t.jsx(E,{size:40,className:"text-primary animate-pulse",fill:"currentColor"})}),t.jsx(De,{size:24,className:"animate-spin text-primary mb-2"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]}):n?t.jsx(t.Fragment,{children:s}):t.jsx(Ds,{to:"/login",state:{from:a},replace:!0})}function us({children:s}){const{isAuthenticated:e,loading:r}=ar(),n=Ms();if(r)return t.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-background",children:[t.jsx("div",{className:"p-4 bg-primary/10 rounded-full mb-4",children:t.jsx(E,{size:40,className:"text-primary animate-pulse",fill:"currentColor"})}),t.jsx(De,{size:24,className:"animate-spin text-primary mb-2"}),t.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]});if(e){const a=n.state?.from?.pathname||"/dashboard";return t.jsx(Ds,{to:a,replace:!0})}return t.jsx(t.Fragment,{children:s})}const gm=[{id:"1",name:"Math Tutor",specialty:"Mathematics",isOnline:!0,avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=math"},{id:"2",name:"Science Tutor",specialty:"Science",isOnline:!0,avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=science"},{id:"3",name:"English Tutor",specialty:"English",isOnline:!1,avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=english"},{id:"4",name:"Hindi Tutor",specialty:"Hindi",isOnline:!0,avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=hindi"}],bm=[{id:"1",text:"Hello! How can I help you with your studies today?",isAi:!0,timestamp:Date.now()-36e5},{id:"2",text:"Can you explain quadratic equations?",isAi:!1,timestamp:Date.now()-35e5},{id:"3",text:"Of course! A quadratic equation is a polynomial equation of degree 2. The general form is ax² + bx + c = 0, where a ≠ 0. The solutions can be found using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a",isAi:!0,timestamp:Date.now()-34e5}],bt={currentStudent:{name:"Aarav"},currentStudentCourses:[{id:"1",subject:"Mathematics",title:"Algebra Fundamentals",progress:75,totalModules:12,estimatedHours:8,lastAccessed:new Date(Date.now()-864e5)},{id:"2",subject:"Science",title:"Physics: Motion and Force",progress:45,totalModules:10,estimatedHours:6,lastAccessed:new Date(Date.now()-1728e5)},{id:"3",subject:"English",title:"Grammar and Composition",progress:20,totalModules:8,estimatedHours:5,lastAccessed:new Date(Date.now()-2592e5)},{id:"4",subject:"Hindi",title:"कविता और कहानियाँ",progress:60,totalModules:6,estimatedHours:4,lastAccessed:new Date(Date.now()-432e5)}],currentStudentProgress:[{courseId:"1",quizzesCompleted:8,quizzesTotal:12,averageScore:85,timeSpent:180},{courseId:"2",quizzesCompleted:4,quizzesTotal:10,averageScore:78,timeSpent:120},{courseId:"3",quizzesCompleted:2,quizzesTotal:8,averageScore:72,timeSpent:60},{courseId:"4",quizzesCompleted:5,quizzesTotal:6,averageScore:88,timeSpent:90}],currentStudentBadges:[{id:"1",name:"Quick Learner",earnedDate:new Date(Date.now()-6048e5)},{id:"2",name:"Math Wizard",earnedDate:new Date(Date.now()-12096e5)},{id:"3",name:"Science Explorer",earnedDate:null},{id:"4",name:"Perfect Score",earnedDate:new Date(Date.now()-432e6)}]},ym=async()=>({chat:async s=>{await new Promise(n=>setTimeout(n,1e3));const e={algebra:"Algebra is a branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations. The basic operations include addition, subtraction, multiplication, and division.",geometry:"Geometry is the branch of mathematics concerned with shapes, sizes, positions, and properties of space. It includes the study of points, lines, angles, surfaces, and solids.",physics:"Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.",chemistry:"Chemistry is the scientific study of the properties and behavior of matter. It includes the study of atoms, molecules, and their interactions.",biology:"Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field."},r=s.toLowerCase();for(const[n,a]of Object.entries(e))if(r.includes(n))return a;return`That's a great question about "${s}"! Let me explain: This topic involves understanding fundamental concepts and applying them to solve problems. Would you like me to break it down further or give you some practice examples?`}}),wm=async()=>(console.log("Mock database initialized"),{get:async s=>null,set:async(s,e)=>!0,delete:async s=>!0}),yt=43200,cn=1440,dn=Symbol.for("constructDateFrom");function ur(s,e){return typeof s=="function"?s(e):s&&typeof s=="object"&&dn in s?s[dn](e):s instanceof Date?new s.constructor(e):new Date(e)}function je(s,e){return ur(s,s)}let vm={};function jm(){return vm}function un(s){const e=je(s),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+s-+r}function mr(s,...e){const r=ur.bind(null,s||e.find(n=>typeof n=="object"));return e.map(r)}function St(s,e){const r=+je(s)-+je(e);return r<0?-1:r>0?1:r}function Nm(s){return ur(s,Date.now())}function km(s,e,r){const[n,a]=mr(r?.in,s,e),i=n.getFullYear()-a.getFullYear(),o=n.getMonth()-a.getMonth();return i*12+o}function Im(s){return e=>{const n=(s?Math[s]:Math.trunc)(e);return n===0?0:n}}function Sm(s,e){return+je(s)-+je(e)}function _m(s,e){const r=je(s);return r.setHours(23,59,59,999),r}function Cm(s,e){const r=je(s),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Em(s,e){const r=je(s);return+_m(r)==+Cm(r)}function Tm(s,e,r){const[n,a,i]=mr(r?.in,s,s,e),o=St(a,i),l=Math.abs(km(a,i));if(l<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*l);let c=St(a,i)===-o;Em(n)&&l===1&&St(n,i)===1&&(c=!1);const u=o*(l-+c);return u===0?0:u}function Am(s,e,r){const n=Sm(s,e)/1e3;return Im(r?.roundingMethod)(n)}const Pm={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Rm=(s,e,r)=>{let n;const a=Pm[s];return typeof a=="string"?n=a:e===1?n=a.one:n=a.other.replace("{{count}}",e.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function ms(s){return(e={})=>{const r=e.width?String(e.width):s.defaultWidth;return s.formats[r]||s.formats[s.defaultWidth]}}const Mm={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Dm={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Lm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Om={date:ms({formats:Mm,defaultWidth:"full"}),time:ms({formats:Dm,defaultWidth:"full"}),dateTime:ms({formats:Lm,defaultWidth:"full"})},zm={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Fm=(s,e,r,n)=>zm[s];function Xe(s){return(e,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&s.formattingValues){const o=s.defaultFormattingWidth||s.defaultWidth,l=r?.width?String(r.width):o;a=s.formattingValues[l]||s.formattingValues[o]}else{const o=s.defaultWidth,l=r?.width?String(r.width):s.defaultWidth;a=s.values[l]||s.values[o]}const i=s.argumentCallback?s.argumentCallback(e):e;return a[i]}}const Um={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$m={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Bm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Wm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Hm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Vm=(s,e)=>{const r=Number(s),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Gm={ordinalNumber:Vm,era:Xe({values:Um,defaultWidth:"wide"}),quarter:Xe({values:$m,defaultWidth:"wide",argumentCallback:s=>s-1}),month:Xe({values:Bm,defaultWidth:"wide"}),day:Xe({values:Wm,defaultWidth:"wide"}),dayPeriod:Xe({values:Hm,defaultWidth:"wide",formattingValues:qm,defaultFormattingWidth:"wide"})};function Qe(s){return(e,r={})=>{const n=r.width,a=n&&s.matchPatterns[n]||s.matchPatterns[s.defaultMatchWidth],i=e.match(a);if(!i)return null;const o=i[0],l=n&&s.parsePatterns[n]||s.parsePatterns[s.defaultParseWidth],c=Array.isArray(l)?Jm(l,d=>d.test(o)):Km(l,d=>d.test(o));let u;u=s.valueCallback?s.valueCallback(c):c,u=r.valueCallback?r.valueCallback(u):u;const p=e.slice(o.length);return{value:u,rest:p}}}function Km(s,e){for(const r in s)if(Object.prototype.hasOwnProperty.call(s,r)&&e(s[r]))return r}function Jm(s,e){for(let r=0;r<s.length;r++)if(e(s[r]))return r}function Ym(s){return(e,r={})=>{const n=e.match(s.matchPattern);if(!n)return null;const a=n[0],i=e.match(s.parsePattern);if(!i)return null;let o=s.valueCallback?s.valueCallback(i[0]):i[0];o=r.valueCallback?r.valueCallback(o):o;const l=e.slice(a.length);return{value:o,rest:l}}}const Xm=/^(\d+)(th|st|nd|rd)?/i,Qm=/\d+/i,Zm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},eh={any:[/^b/i,/^(a|c)/i]},th={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},sh={any:[/1/i,/2/i,/3/i,/4/i]},rh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},nh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ah={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ih={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ch={ordinalNumber:Ym({matchPattern:Xm,parsePattern:Qm,valueCallback:s=>parseInt(s,10)}),era:Qe({matchPatterns:Zm,defaultMatchWidth:"wide",parsePatterns:eh,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:th,defaultMatchWidth:"wide",parsePatterns:sh,defaultParseWidth:"any",valueCallback:s=>s+1}),month:Qe({matchPatterns:rh,defaultMatchWidth:"wide",parsePatterns:nh,defaultParseWidth:"any"}),day:Qe({matchPatterns:ah,defaultMatchWidth:"wide",parsePatterns:ih,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:oh,defaultMatchWidth:"any",parsePatterns:lh,defaultParseWidth:"any"})},dh={code:"en-US",formatDistance:Rm,formatLong:Om,formatRelative:Fm,localize:Gm,match:ch,options:{weekStartsOn:0,firstWeekContainsDate:1}};function uh(s,e,r){const n=jm(),a=r?.locale??n.locale??dh,i=2520,o=St(s,e);if(isNaN(o))throw new RangeError("Invalid time value");const l=Object.assign({},r,{addSuffix:r?.addSuffix,comparison:o}),[c,u]=mr(r?.in,...o>0?[e,s]:[s,e]),p=Am(u,c),d=(un(u)-un(c))/1e3,h=Math.round((p-d)/60);let f;if(h<2)return r?.includeSeconds?p<5?a.formatDistance("lessThanXSeconds",5,l):p<10?a.formatDistance("lessThanXSeconds",10,l):p<20?a.formatDistance("lessThanXSeconds",20,l):p<40?a.formatDistance("halfAMinute",0,l):p<60?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",1,l):h===0?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",h,l);if(h<45)return a.formatDistance("xMinutes",h,l);if(h<90)return a.formatDistance("aboutXHours",1,l);if(h<cn){const w=Math.round(h/60);return a.formatDistance("aboutXHours",w,l)}else{if(h<i)return a.formatDistance("xDays",1,l);if(h<yt){const w=Math.round(h/cn);return a.formatDistance("xDays",w,l)}else if(h<yt*2)return f=Math.round(h/yt),a.formatDistance("aboutXMonths",f,l)}if(f=Tm(u,c),f<12){const w=Math.round(h/yt);return a.formatDistance("xMonths",w,l)}else{const w=f%12,m=Math.trunc(f/12);return w<3?a.formatDistance("aboutXYears",m,l):w<9?a.formatDistance("overXYears",m,l):a.formatDistance("almostXYears",m+1,l)}}function mh(s,e){return uh(s,Nm(s),e)}const hh=()=>{const s=bt.currentStudent,e=bt.currentStudentCourses,r=bt.currentStudentProgress,n=e.filter(p=>p.progress>0&&p.progress<100).length,a=r.reduce((p,d)=>p+d.timeSpent/60,0),i=bt.currentStudentBadges.filter(p=>p.earnedDate!==null).length,o=Math.round(r.reduce((p,d)=>p+d.averageScore,0)/r.length),l=[{label:"Courses in Progress",value:n.toString(),icon:t.jsx(Re,{className:"text-blue-500",size:24}),change:"+1 this week"},{label:"Hours Learned",value:a.toFixed(1),icon:t.jsx(B,{className:"text-green-500",size:24}),change:"+2.5 hrs"},{label:"Achievements",value:i.toString(),icon:t.jsx(ye,{className:"text-yellow-500",size:24}),change:"New badge!"},{label:"Avg. Score",value:`${o}%`,icon:t.jsx(dr,{className:"text-purple-500",size:24}),change:"+5%"}],c=e.sort((p,d)=>d.lastAccessed.getTime()-p.lastAccessed.getTime()).slice(0,3).map(p=>{const d=r.find(h=>h.courseId===p.id);return{subject:p.subject,title:p.title,description:`Completed ${d?.quizzesCompleted||0} of ${d?.quizzesTotal||10} quizzes with ${d?.averageScore||0}% average`,time:mh(p.lastAccessed,{addSuffix:!0}),icon:p.subject.substring(0,3).toUpperCase()}}),u=e.filter(p=>p.progress<30).slice(0,3).map(p=>({subject:p.subject,title:p.title,description:`${p.totalModules} modules • ${p.estimatedHours}h estimated`,icon:p.subject.substring(0,3).toUpperCase()}));return t.jsxs("div",{className:"space-y-6 animate-slide-in-right",children:[t.jsxs("header",{className:"mb-8",children:[t.jsxs("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:["Welcome back, ",s.name,"!"]}),t.jsx("p",{className:"text-gray-500 dark:text-gray-400 mt-2",children:"Ready to continue your learning journey?"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:l.map((p,d)=>t.jsxs("div",{className:"bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all duration-200",children:[t.jsxs("div",{className:"flex justify-between items-start mb-4",children:[t.jsx("div",{className:"p-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg",children:p.icon}),t.jsx("span",{className:"text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full",children:p.change})]}),t.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-1",children:p.value}),t.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:p.label})]},d))}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700",children:[t.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Recent Activity"}),t.jsx("div",{className:"space-y-4",children:c.map((p,d)=>t.jsxs("div",{className:"flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-xl transition-colors cursor-pointer",children:[t.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs",children:p.icon}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h4",{className:"font-medium text-gray-900 dark:text-white",children:p.title}),t.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:p.description})]}),t.jsx("span",{className:"text-xs text-gray-400",children:p.time})]},d))})]}),t.jsxs("div",{className:"bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700",children:[t.jsx("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Recommended for You"}),t.jsx("div",{className:"space-y-4",children:u.map((p,d)=>t.jsxs("div",{className:"flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-xl transition-colors cursor-pointer",children:[t.jsx("div",{className:"w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs",children:p.icon}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h4",{className:"font-medium text-gray-900 dark:text-white",children:p.title}),t.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:p.description})]}),t.jsx("button",{className:"p-2 text-primary hover:bg-primary/10 rounded-full transition-colors",children:t.jsx(Re,{size:20})})]},d))})]})]})]})};function mn(){const{contentId:s}=Xa();console.log(s);const[e,r]=b.useState([{role:"assistant",content:"Hello! I'm your AI tutor. What would you like to learn today?"}]),[n,a]=b.useState(""),[i,o]=b.useState(!1),l=async()=>{if(!n.trim())return;const c={role:"user",content:n};r(u=>[...u,c]),a(""),o(!0);try{const p=await(await ym()).chat(n);r(d=>[...d,{role:"assistant",content:p}])}catch(u){console.error("AI inference failed:",u),r(p=>[...p,{role:"assistant",content:"Sorry, I encountered an error. Please try again."}])}finally{o(!1)}};return t.jsxs("div",{className:"fade-in",children:[t.jsx("h1",{className:"mb-3",children:"AI Learning Assistant"}),t.jsx("p",{className:"text-secondary mb-4",children:"Ask me anything about your lessons!"}),t.jsxs("div",{className:"grid grid-2 gap-3",children:[t.jsxs("div",{className:"card",style:{height:"600px",display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{flex:1,overflowY:"auto",marginBottom:"1rem"},children:[e.map((c,u)=>t.jsx("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:c.role==="user"?"flex-end":"flex-start"},children:t.jsx("div",{style:{maxWidth:"80%",padding:"1rem",borderRadius:"1rem",backgroundColor:c.role==="user"?"var(--primary)":"var(--background)",color:c.role==="user"?"white":"var(--text-primary)"},children:c.content})},u)),i&&t.jsx("div",{style:{textAlign:"center",color:"var(--text-secondary)"},children:t.jsx("span",{children:"AI is thinking..."})})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{type:"text",value:n,onChange:c=>a(c.target.value),onKeyPress:c=>c.key==="Enter"&&l(),placeholder:"Ask a question...",style:{flex:1}}),t.jsx("button",{className:"btn btn-primary",onClick:l,disabled:i,children:"Send"})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"card mb-3",children:[t.jsx("h3",{className:"mb-2",children:"Quick Topics"}),t.jsx("div",{className:"flex flex-col gap-2",children:["Algebra","Geometry","Physics","Chemistry","Biology"].map(c=>t.jsx("button",{className:"btn btn-secondary",onClick:()=>a(`Explain ${c} basics`),style:{justifyContent:"flex-start"},children:c},c))})]}),t.jsxs("div",{className:"card",children:[t.jsx("h3",{className:"mb-2",children:"Practice Quiz"}),t.jsx("p",{className:"text-secondary mb-3",children:"Test your knowledge"}),t.jsx("button",{className:"btn btn-primary",style:{width:"100%"},children:"Start Quiz"})]})]})]})]})}function ph(){const[s]=b.useState(gm.map(c=>({id:c.id,name:c.name,lastMessage:c.specialty+" Tutor",unread:0,online:c.isOnline,avatar:c.avatar}))),[e,r]=b.useState(s[0]),[n,a]=b.useState(bm.map(c=>({id:c.id,from:c.isAi?"AI Assistant":"Me",content:c.text||"",time:new Date(c.timestamp||Date.now()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isMe:!c.isAi}))),[i,o]=b.useState(""),l=()=>{i.trim()&&(a([...n,{id:Date.now().toString(),from:"Me",content:i,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),isMe:!0}]),o(""))};return t.jsxs("div",{className:"fade-in",children:[t.jsx("h1",{className:"mb-3",children:"Peer Chat & Tutoring"}),t.jsx("p",{className:"text-secondary mb-4",children:"Connect with classmates and help each other learn"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"300px 1fr",gap:"1.5rem",height:"600px"},children:[t.jsxs("div",{className:"card",style:{overflowY:"auto"},children:[t.jsx("h3",{className:"mb-3",children:"Conversations"}),s.map(c=>t.jsxs("div",{onClick:()=>r(c),style:{padding:"1rem",borderRadius:"0.75rem",backgroundColor:e.id===c.id?"rgba(79, 70, 229, 0.1)":"transparent",cursor:"pointer",marginBottom:"0.5rem",transition:"all 0.2s ease"},onMouseEnter:u=>{e.id!==c.id&&(u.currentTarget.style.backgroundColor="var(--background)")},onMouseLeave:u=>{e.id!==c.id&&(u.currentTarget.style.backgroundColor="transparent")},children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("img",{src:c.avatar,alt:c.name,style:{width:"32px",height:"32px",borderRadius:"50%"}}),t.jsx("h4",{style:{margin:0,fontSize:"1rem"},children:c.name}),c.online&&t.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"var(--success)"}})]}),c.unread>0&&t.jsx("span",{style:{backgroundColor:"var(--primary)",color:"white",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600},children:c.unread})]}),t.jsx("p",{className:"text-secondary",style:{fontSize:"0.875rem",margin:0},children:c.lastMessage})]},c.id))]}),t.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column"},children:[t.jsx("div",{style:{borderBottom:"1px solid var(--border)",paddingBottom:"1rem",marginBottom:"1rem"},children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("img",{src:e.avatar,alt:e.name,style:{width:"48px",height:"48px",borderRadius:"50%"}}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:0},children:e.name}),t.jsx("p",{className:"text-secondary",style:{fontSize:"0.875rem",margin:0},children:e.online?"Online":"Offline"})]})]})}),t.jsx("div",{style:{flex:1,overflowY:"auto",marginBottom:"1rem"},children:n.map(c=>t.jsx("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:c.isMe?"flex-end":"flex-start"},children:t.jsxs("div",{style:{maxWidth:"70%"},children:[!c.isMe&&t.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",marginBottom:"0.25rem"},children:c.from}),t.jsx("div",{style:{padding:"0.75rem 1rem",borderRadius:"1rem",backgroundColor:c.isMe?"var(--primary)":"var(--background)",color:c.isMe?"white":"var(--text-primary)"},children:c.content}),t.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-secondary)",marginTop:"0.25rem"},children:c.time})]})},c.id))}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{type:"text",value:i,onChange:c=>o(c.target.value),onKeyPress:c=>c.key==="Enter"&&l(),placeholder:"Type a message...",style:{flex:1}}),t.jsx("button",{className:"btn btn-primary",onClick:l,children:"Send"})]})]})]})]})}function fh(){const s={name:"Student Name",grade:8,section:"A",school:"Government High School",points:450,credits:120,streak:5};return t.jsxs("div",{className:"fade-in",children:[t.jsx("h1",{className:"mb-4",children:"Profile"}),t.jsxs("div",{className:"grid grid-2 gap-3",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[t.jsx("div",{style:{width:"100px",height:"100px",borderRadius:"50%",backgroundColor:"var(--primary)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",margin:"0 auto 1rem"},children:t.jsx(ze,{size:48})}),t.jsx("h2",{style:{margin:0},children:s.name}),t.jsxs("p",{className:"text-secondary",children:["Class ",s.grade," - Section ",s.section]})]}),t.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"1rem"},children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"School"}),t.jsx("p",{className:"text-secondary",style:{margin:0},children:s.school})]}),t.jsxs("div",{style:{marginBottom:"1rem"},children:[t.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Language"}),t.jsxs("select",{style:{width:"100%",padding:"0.5rem",borderRadius:"0.5rem",border:"1px solid var(--border)"},children:[t.jsx("option",{children:"English"}),t.jsx("option",{children:"हिंदी (Hindi)"}),t.jsx("option",{children:"தமிழ் (Tamil)"})]})]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"card mb-3",children:[t.jsx("h3",{className:"mb-3",children:"Statistics"}),t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ye,{size:20,color:"var(--primary)"}),t.jsx("span",{children:"Total Points"})]}),t.jsx("strong",{style:{color:"var(--primary)"},children:s.points})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(E,{size:20,color:"var(--secondary)"}),t.jsx("span",{children:"Knowledge Credits"})]}),t.jsx("strong",{style:{color:"var(--secondary)"},children:s.credits})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ye,{size:20,color:"var(--warning)"}),t.jsx("span",{children:"Current Streak"})]}),t.jsxs("strong",{style:{color:"var(--warning)"},children:[s.streak," days"]})]})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("h3",{className:"mb-3",children:"Settings"}),t.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",marginBottom:"0.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Kt,{size:18}),t.jsx("span",{children:"Notifications"})]}),t.jsx(it,{size:18})]}),t.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",marginBottom:"0.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(om,{size:18}),t.jsx("span",{children:"Sync Devices"})]}),t.jsx(it,{size:18})]}),t.jsxs("button",{className:"btn btn-secondary",style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx($a,{size:18}),t.jsx("span",{children:"Privacy"})]}),t.jsx(it,{size:18})]})]})]})]})]})}const _t=[{id:"first_lesson",name:"First Steps",description:"Complete your first lesson",icon:"🎯",rarity:"common",category:"learning",requirement:"Complete 1 lesson",xpReward:50,earnedDate:new Date(Date.now()-6048e5),progress:1,maxProgress:1},{id:"lesson_master",name:"Lesson Master",description:"Complete 50 lessons",icon:"📚",rarity:"rare",category:"learning",requirement:"Complete 50 lessons",xpReward:200,progress:32,maxProgress:50},{id:"knowledge_seeker",name:"Knowledge Seeker",description:"Complete 100 lessons",icon:"🧠",rarity:"epic",category:"learning",requirement:"Complete 100 lessons",xpReward:500,progress:32,maxProgress:100},{id:"math_wizard",name:"Math Wizard",description:"Score 100% on 10 math quizzes",icon:"🧮",rarity:"epic",category:"learning",requirement:"Perfect score on 10 math quizzes",xpReward:300,earnedDate:new Date(Date.now()-12096e5),progress:10,maxProgress:10},{id:"science_explorer",name:"Science Explorer",description:"Complete all science chapters",icon:"🔬",rarity:"rare",category:"learning",requirement:"Complete all science chapters",xpReward:250,progress:7,maxProgress:12},{id:"streak_starter",name:"Streak Starter",description:"Maintain a 7-day learning streak",icon:"🔥",rarity:"common",category:"streak",requirement:"7-day streak",xpReward:100,earnedDate:new Date(Date.now()-432e6),progress:7,maxProgress:7},{id:"streak_warrior",name:"Streak Warrior",description:"Maintain a 30-day learning streak",icon:"⚡",rarity:"rare",category:"streak",requirement:"30-day streak",xpReward:300,progress:12,maxProgress:30},{id:"streak_legend",name:"Streak Legend",description:"Maintain a 100-day learning streak",icon:"🌟",rarity:"legendary",category:"streak",requirement:"100-day streak",xpReward:1e3,progress:12,maxProgress:100},{id:"perfect_week",name:"Perfect Week",description:"Complete all daily challenges in a week",icon:"🏆",rarity:"rare",category:"achievement",requirement:"Complete 7 daily challenges",xpReward:200,progress:5,maxProgress:7},{id:"quiz_champion",name:"Quiz Champion",description:"Win 20 quiz battles",icon:"👑",rarity:"epic",category:"achievement",requirement:"Win 20 quiz battles",xpReward:400,progress:8,maxProgress:20},{id:"speed_demon",name:"Speed Demon",description:"Complete a quiz in under 60 seconds with 100% accuracy",icon:"⚡",rarity:"epic",category:"achievement",requirement:"Quick perfect quiz",xpReward:350,earnedDate:new Date(Date.now()-864e5)},{id:"helpful_peer",name:"Helpful Peer",description:"Help 10 classmates with their questions",icon:"🤝",rarity:"rare",category:"social",requirement:"Help 10 peers",xpReward:200,progress:6,maxProgress:10},{id:"team_player",name:"Team Player",description:"Complete 5 group study sessions",icon:"👥",rarity:"common",category:"social",requirement:"Join 5 group sessions",xpReward:100,progress:3,maxProgress:5},{id:"early_bird",name:"Early Bird",description:"Complete a lesson before 7 AM",icon:"🌅",rarity:"common",category:"special",requirement:"Study before 7 AM",xpReward:75,earnedDate:new Date(Date.now()-1728e5)},{id:"night_owl",name:"Night Owl",description:"Complete a lesson after 10 PM",icon:"🦉",rarity:"common",category:"special",requirement:"Study after 10 PM",xpReward:75}],xh=[{id:"daily_1",title:"Quick Learner",description:"Complete 3 lessons today",type:"daily",xpReward:100,coinReward:25,progress:2,target:3,expiresAt:new Date(new Date().setHours(23,59,59,999)),completed:!1,icon:"📖"},{id:"daily_2",title:"Quiz Master",description:"Score 80% or above on 2 quizzes",type:"daily",xpReward:150,coinReward:35,progress:1,target:2,expiresAt:new Date(new Date().setHours(23,59,59,999)),completed:!1,icon:"🎯"},{id:"daily_3",title:"Helping Hand",description:"Answer a question in the community",type:"daily",xpReward:75,coinReward:20,progress:0,target:1,expiresAt:new Date(new Date().setHours(23,59,59,999)),completed:!1,icon:"🙋"}],gh=[{id:"weekly_1",title:"Dedicated Student",description:"Study for 5 hours this week",type:"weekly",xpReward:500,coinReward:100,progress:180,target:300,expiresAt:new Date(Date.now()+5*24*60*60*1e3),completed:!1,icon:"⏰"},{id:"weekly_2",title:"Subject Explorer",description:"Complete lessons in 4 different subjects",type:"weekly",xpReward:400,coinReward:80,progress:2,target:4,expiresAt:new Date(Date.now()+5*24*60*60*1e3),completed:!1,icon:"🌍"},{id:"weekly_3",title:"Perfect Streak",description:"Maintain a 7-day streak",type:"weekly",xpReward:300,coinReward:75,progress:5,target:7,expiresAt:new Date(Date.now()+5*24*60*60*1e3),completed:!1,icon:"🔥"}],hn=[{rank:1,id:"101",name:"Priya Sharma",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=priya",xp:15420,level:24,streak:45,badges:18,school:"Delhi Public School",change:"same"},{rank:2,id:"102",name:"Rahul Kumar",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",xp:14850,level:23,streak:32,badges:15,school:"Kendriya Vidyalaya",change:"up"},{rank:3,id:"103",name:"Anita Devi",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=anita",xp:13920,level:22,streak:28,badges:14,school:"Government School",change:"down"},{rank:4,id:"104",name:"Vikram Singh",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",xp:12680,level:21,streak:21,badges:12,school:"St. Mary's School",change:"up"},{rank:5,id:"105",name:"Meera Patel",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=meera",xp:11950,level:20,streak:18,badges:11,school:"DAV Public School",change:"same"},{rank:6,id:"106",name:"Arjun Reddy",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",xp:11200,level:19,streak:15,badges:10,school:"Navodaya Vidyalaya",change:"up"},{rank:7,id:"1",name:"Aarav (You)",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=aarav",xp:10580,level:18,streak:12,badges:9,school:"Government School",change:"up"},{rank:8,id:"107",name:"Kavya Nair",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=kavya",xp:9840,level:17,streak:10,badges:8,school:"Vidya Niketan",change:"down"},{rank:9,id:"108",name:"Rohan Gupta",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=rohan",xp:9120,level:16,streak:8,badges:7,school:"Modern School",change:"same"},{rank:10,id:"109",name:"Simran Kaur",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=simran",xp:8560,level:15,streak:6,badges:6,school:"Army Public School",change:"up"}],de=[{id:"q1",question:"What is the value of x if 2x + 5 = 15?",options:["3","5","7","10"],correctAnswer:1,explanation:"2x + 5 = 15 → 2x = 10 → x = 5",difficulty:"easy",subject:"Mathematics",topic:"Algebra",xpReward:10},{id:"q2",question:"Which planet is known as the Red Planet?",options:["Venus","Mars","Jupiter","Saturn"],correctAnswer:1,explanation:"Mars is called the Red Planet due to iron oxide (rust) on its surface.",difficulty:"easy",subject:"Science",topic:"Solar System",xpReward:10},{id:"q3",question:"What is the formula for the area of a circle?",options:["πr","2πr","πr²","2πr²"],correctAnswer:2,explanation:"The area of a circle is π times the radius squared (πr²).",difficulty:"medium",subject:"Mathematics",topic:"Geometry",xpReward:20},{id:"q4",question:"What is the chemical symbol for water?",options:["H₂O","CO₂","NaCl","O₂"],correctAnswer:0,explanation:"Water consists of 2 hydrogen atoms and 1 oxygen atom: H₂O.",difficulty:"easy",subject:"Science",topic:"Chemistry",xpReward:10},{id:"q5",question:"Solve: (3 + 4) × 2 - 5 = ?",options:["6","9","11","14"],correctAnswer:1,explanation:"(3 + 4) × 2 - 5 = 7 × 2 - 5 = 14 - 5 = 9",difficulty:"medium",subject:"Mathematics",topic:"Arithmetic",xpReward:20},{id:"q6",question:"Who wrote the Indian National Anthem?",options:["Bankim Chandra Chatterjee","Rabindranath Tagore","Sarojini Naidu","Mahatma Gandhi"],correctAnswer:1,explanation:'Rabindranath Tagore wrote "Jana Gana Mana", our National Anthem.',difficulty:"easy",subject:"Social Studies",topic:"Indian History",xpReward:10},{id:"q7",question:"What is the square root of 144?",options:["10","11","12","14"],correctAnswer:2,explanation:"12 × 12 = 144, so √144 = 12",difficulty:"easy",subject:"Mathematics",topic:"Numbers",xpReward:10},{id:"q8",question:"Which gas do plants absorb from the atmosphere?",options:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],correctAnswer:2,explanation:"Plants absorb CO₂ during photosynthesis to make food.",difficulty:"easy",subject:"Science",topic:"Biology",xpReward:10},{id:"q9",question:"If a triangle has angles 60°, 60°, and 60°, what type is it?",options:["Scalene","Isosceles","Equilateral","Right-angled"],correctAnswer:2,explanation:"A triangle with all equal angles (60° each) is equilateral.",difficulty:"medium",subject:"Mathematics",topic:"Geometry",xpReward:20},{id:"q10",question:"What is the SI unit of force?",options:["Joule","Watt","Newton","Pascal"],correctAnswer:2,explanation:"The SI unit of force is Newton (N), named after Isaac Newton.",difficulty:"medium",subject:"Science",topic:"Physics",xpReward:20}],xe={level:18,xp:580,xpToNextLevel:1900,totalXp:10580,coins:1250,streak:12,quizzesCompleted:89,perfectScores:23,rank:7,badges:_t.filter(s=>s.earnedDate)},bh=[{id:"math_sprint",name:"Math Sprint",description:"Solve as many math problems as you can in 60 seconds!",icon:"🔢",type:"math",difficulty:"medium",xpReward:50,coinReward:15,highScore:24,timesPlayed:45},{id:"word_scramble",name:"Word Scramble",description:"Unscramble the letters to form English words",icon:"🔤",type:"word",difficulty:"easy",xpReward:30,coinReward:10,highScore:18,timesPlayed:32},{id:"memory_match",name:"Memory Match",description:"Match pairs of science concepts and formulas",icon:"🧩",type:"memory",difficulty:"medium",xpReward:40,coinReward:12,highScore:12,timesPlayed:28},{id:"equation_puzzle",name:"Equation Puzzle",description:"Arrange numbers to complete the equation",icon:"🧮",type:"puzzle",difficulty:"hard",xpReward:75,coinReward:25,highScore:8,timesPlayed:15}],yh=[{id:"xp_boost",name:"XP Boost",description:"Double XP for 30 minutes",icon:"⚡",cost:100,effect:"2x XP",duration:30,owned:2},{id:"streak_shield",name:"Streak Shield",description:"Protect your streak for one day",icon:"🛡️",cost:150,effect:"Streak protection",owned:1},{id:"hint_pack",name:"Hint Pack",description:"5 hints for quiz questions",icon:"💡",cost:75,effect:"5 hints",owned:3},{id:"time_freeze",name:"Time Freeze",description:"Pause timer for 15 seconds in timed quizzes",icon:"⏸️",cost:50,effect:"+15 seconds",owned:0}];function wh(){const[s,e]=b.useState("badges"),[r,n]=b.useState("all"),[a,i]=b.useState(!1);b.useEffect(()=>{i(!0);const m=setTimeout(()=>i(!1),1e3);return()=>clearTimeout(m)},[]);const o=xe,l=["all","learning","streak","achievement","social","special"],c=r==="all"?_t:_t.filter(m=>m.category===r),u=c.filter(m=>m.earnedDate),p=c.filter(m=>!m.earnedDate),d={common:"from-gray-400 to-gray-500",rare:"from-blue-400 to-blue-600",epic:"from-purple-400 to-purple-600",legendary:"from-yellow-400 to-orange-500"},h={common:"bg-gray-100 dark:bg-gray-800",rare:"bg-blue-50 dark:bg-blue-900/30",epic:"bg-purple-50 dark:bg-purple-900/30",legendary:"bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"},f=(m,x=!1)=>t.jsxs("div",{className:`relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${x?"opacity-60":""} ${h[m.rarity]}`,children:[m.rarity==="legendary"&&!x&&t.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 animate-pulse"}),t.jsxs("div",{className:"relative",children:[t.jsxs("div",{className:"flex items-start justify-between mb-3",children:[t.jsx("div",{className:`text-4xl ${x?"grayscale":""}`,children:x?t.jsx(ie,{className:"w-10 h-10 text-gray-400"}):m.icon}),t.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${d[m.rarity]} text-white`,children:m.rarity})]}),t.jsx("h3",{className:"font-bold text-foreground mb-1",children:m.name}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:m.description}),m.progress!==void 0&&m.maxProgress&&t.jsxs("div",{className:"mb-2",children:[t.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[t.jsx("span",{className:"text-muted-foreground",children:"Progress"}),t.jsxs("span",{className:"font-medium",children:[m.progress,"/",m.maxProgress]})]}),t.jsx("div",{className:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full bg-gradient-to-r ${d[m.rarity]} transition-all duration-500`,style:{width:`${m.progress/m.maxProgress*100}%`}})})]}),t.jsxs("div",{className:"flex items-center justify-between mt-3 pt-3 border-t border-border/50",children:[t.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[t.jsx(E,{className:"w-4 h-4 text-yellow-500"}),t.jsxs("span",{className:"font-medium",children:["+",m.xpReward," XP"]})]}),m.earnedDate&&t.jsx("span",{className:"text-xs text-muted-foreground",children:new Date(m.earnedDate).toLocaleDateString()})]})]})]},m.id),w=m=>{const x=m.progress/m.target*100,g=Math.max(0,m.expiresAt.getTime()-Date.now()),v=Math.floor(g/(1e3*60*60)),k=Math.floor(g%(1e3*60*60)/(1e3*60));return t.jsx("div",{className:`p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${m.completed?"bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800":"bg-card border-border"}`,children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${m.completed?"bg-green-100 dark:bg-green-900/40":"bg-primary/10"}`,children:m.completed?"✅":m.icon}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsx("h3",{className:"font-bold text-foreground",children:m.title}),t.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium ${m.type==="daily"?"bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300":m.type==="weekly"?"bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300":"bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"}`,children:m.type})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:m.description}),t.jsxs("div",{className:"mb-3",children:[t.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[t.jsxs("span",{className:"text-muted-foreground",children:[m.progress,"/",m.target," completed"]}),t.jsxs("span",{className:"font-medium",children:[Math.round(x),"%"]})]}),t.jsx("div",{className:"h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full transition-all duration-500 ${m.completed?"bg-green-500":"bg-gradient-to-r from-primary to-secondary"}`,style:{width:`${x}%`}})})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[t.jsx(E,{className:"w-4 h-4 text-yellow-500"}),t.jsxs("span",{className:"font-medium",children:["+",m.xpReward]})]}),t.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[t.jsx("span",{className:"text-yellow-500",children:"🪙"}),t.jsxs("span",{className:"font-medium",children:["+",m.coinReward]})]})]}),!m.completed&&t.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[t.jsx(B,{className:"w-3 h-3"}),t.jsxs("span",{children:[v,"h ",k,"m left"]})]})]})]})]})},m.id)};return t.jsxs("div",{className:"space-y-6 animate-fade-in",children:[t.jsxs("div",{className:"bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-6 text-white",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-2xl font-bold mb-1",children:"Achievements"}),t.jsx("p",{className:"text-white/80",children:"Track your progress and earn rewards"})]}),t.jsxs("div",{className:"flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full",children:[t.jsx(we,{className:"w-5 h-5 text-orange-300"}),t.jsxs("span",{className:"font-bold",children:[o.streak," day streak"]})]})]}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[t.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(P,{className:"w-5 h-5 text-yellow-300"}),t.jsx("span",{className:"text-white/80 text-sm",children:"Level"})]}),t.jsx("p",{className:"text-2xl font-bold",children:o.level})]}),t.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(E,{className:"w-5 h-5 text-yellow-300"}),t.jsx("span",{className:"text-white/80 text-sm",children:"Total XP"})]}),t.jsx("p",{className:"text-2xl font-bold",children:o.totalXp.toLocaleString()})]}),t.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(Ft,{className:"w-5 h-5 text-yellow-300"}),t.jsx("span",{className:"text-white/80 text-sm",children:"Badges"})]}),t.jsxs("p",{className:"text-2xl font-bold",children:[u.length,"/",_t.length]})]}),t.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx("span",{className:"text-xl",children:"🪙"}),t.jsx("span",{className:"text-white/80 text-sm",children:"Coins"})]}),t.jsx("p",{className:"text-2xl font-bold",children:o.coins.toLocaleString()})]})]}),t.jsxs("div",{className:"mt-6",children:[t.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[t.jsxs("span",{children:["Level ",o.level]}),t.jsxs("span",{children:[o.xp," / ",o.xpToNextLevel," XP"]}),t.jsxs("span",{children:["Level ",o.level+1]})]}),t.jsx("div",{className:"h-3 bg-white/20 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000 ${a?"animate-pulse":""}`,style:{width:`${o.xp/o.xpToNextLevel*100}%`}})})]})]}),t.jsx("div",{className:"flex gap-2 p-1 bg-muted rounded-xl",children:[{id:"badges",label:"Badges",icon:t.jsx(ye,{className:"w-4 h-4"})},{id:"challenges",label:"Challenges",icon:t.jsx(qe,{className:"w-4 h-4"})},{id:"rewards",label:"Rewards",icon:t.jsx(zt,{className:"w-4 h-4"})}].map(m=>t.jsxs("button",{onClick:()=>e(m.id),className:`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${s===m.id?"bg-background shadow-sm text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[m.icon,m.label]},m.id))}),s==="badges"&&t.jsxs("div",{className:"space-y-6",children:[t.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2",children:l.map(m=>t.jsx("button",{onClick:()=>n(m),className:`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${r===m?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))}),u.length>0&&t.jsxs("div",{children:[t.jsxs("h2",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(Oe,{className:"w-5 h-5 text-yellow-500"}),"Earned (",u.length,")"]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:u.map(m=>f(m))})]}),p.length>0&&t.jsxs("div",{children:[t.jsxs("h2",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(ie,{className:"w-5 h-5 text-gray-400"}),"Locked (",p.length,")"]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:p.map(m=>f(m,!0))})]})]}),s==="challenges"&&t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(qe,{className:"w-5 h-5 text-blue-500"}),"Daily Challenges"]}),t.jsx("div",{className:"space-y-3",children:xh.map(w)})]}),t.jsxs("div",{children:[t.jsxs("h2",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(ve,{className:"w-5 h-5 text-purple-500"}),"Weekly Challenges"]}),t.jsx("div",{className:"space-y-3",children:gh.map(w)})]})]}),s==="rewards"&&t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800",children:[t.jsxs("h2",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(zt,{className:"w-5 h-5 text-orange-500"}),"Daily Reward"]}),t.jsx("p",{className:"text-muted-foreground mb-4",children:"Come back every day to claim your rewards!"}),t.jsx("div",{className:"grid grid-cols-7 gap-2",children:[1,2,3,4,5,6,7].map(m=>{const x=m<=5,g=m===6;return t.jsxs("div",{className:`p-3 rounded-lg text-center transition-all ${x?"bg-green-100 dark:bg-green-900/40 border-green-300":g?"bg-primary text-white animate-pulse cursor-pointer hover:scale-105":"bg-gray-100 dark:bg-gray-800"} border`,children:[t.jsxs("p",{className:"text-xs font-medium mb-1",children:["Day ",m]}),t.jsx("p",{className:"text-lg",children:x?"✅":g?"🎁":"🔒"}),t.jsxs("p",{className:"text-xs mt-1",children:["+",m*10," 🪙"]})]},m)})}),t.jsx("button",{className:"w-full mt-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all",children:"Claim Today's Reward"})]}),t.jsxs("div",{className:"bg-card rounded-xl p-6 border",children:[t.jsx("h2",{className:"text-lg font-bold mb-4",children:"Milestone Rewards"}),t.jsx("div",{className:"space-y-3",children:[{level:10,reward:"500 coins + XP Boost",claimed:!0},{level:15,reward:"1000 coins + Streak Shield",claimed:!0},{level:20,reward:"2000 coins + Special Badge",claimed:!1},{level:25,reward:"5000 coins + Mystery Box",claimed:!1}].map(m=>t.jsxs("div",{className:`flex items-center justify-between p-4 rounded-xl ${m.claimed?"bg-green-50 dark:bg-green-900/20":o.level>=m.level?"bg-yellow-50 dark:bg-yellow-900/20":"bg-muted"}`,children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center font-bold ${m.claimed?"bg-green-500 text-white":o.level>=m.level?"bg-yellow-500 text-white":"bg-gray-300 dark:bg-gray-600 text-gray-500"}`,children:m.level}),t.jsxs("div",{children:[t.jsxs("p",{className:"font-medium",children:["Level ",m.level]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:m.reward})]})]}),m.claimed?t.jsx("span",{className:"text-green-600 font-medium",children:"Claimed ✓"}):o.level>=m.level?t.jsx("button",{className:"px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors",children:"Claim"}):t.jsxs("span",{className:"text-muted-foreground text-sm",children:[m.level-o.level," levels to go"]})]},m.level))})]})]})]})}function vh(){const[s,e]=b.useState("weekly"),[r,n]=b.useState(""),a="1",i=hn.find(d=>d.id===a),o=hn.filter(d=>d.name.toLowerCase().includes(r.toLowerCase())),l=d=>{switch(d){case 1:return t.jsx(Ju,{className:"w-6 h-6 text-yellow-500"});case 2:return t.jsx(Ft,{className:"w-6 h-6 text-gray-400"});case 3:return t.jsx(Ft,{className:"w-6 h-6 text-amber-600"});default:return t.jsxs("span",{className:"w-6 h-6 flex items-center justify-center font-bold text-muted-foreground",children:["#",d]})}},c=d=>{switch(d){case"up":return t.jsx(dr,{className:"w-4 h-4 text-green-500"});case"down":return t.jsx(lm,{className:"w-4 h-4 text-red-500"});default:return t.jsx(sm,{className:"w-4 h-4 text-gray-400"})}},u=(d,h)=>{if(h)return"bg-primary/10 border-primary";switch(d){case 1:return"bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-300 dark:border-yellow-700";case 2:return"bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-gray-300 dark:border-gray-600";case 3:return"bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-300 dark:border-amber-700";default:return"bg-card border-border"}},p=(d,h)=>{const f=d.id===a;return t.jsx("div",{className:`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${u(d.rank,f)} ${f?"ring-2 ring-primary ring-offset-2":""}`,style:{animationDelay:`${h*50}ms`},children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-2 w-16",children:[l(d.rank),c(d.change)]}),t.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:d.avatar,alt:d.name,className:"w-12 h-12 rounded-full border-2 border-background shadow"}),t.jsx("div",{className:"absolute -bottom-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center",children:d.level})]}),t.jsxs("div",{children:[t.jsx("p",{className:`font-bold ${f?"text-primary":"text-foreground"}`,children:d.name}),d.school&&t.jsx("p",{className:"text-xs text-muted-foreground",children:d.school})]})]}),t.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-xs text-muted-foreground",children:"Streak"}),t.jsxs("p",{className:"font-bold flex items-center gap-1",children:[t.jsx(we,{className:"w-4 h-4 text-orange-500"}),d.streak]})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-xs text-muted-foreground",children:"Badges"}),t.jsxs("p",{className:"font-bold flex items-center gap-1",children:[t.jsx(ye,{className:"w-4 h-4 text-purple-500"}),d.badges]})]})]}),t.jsxs("div",{className:"text-right",children:[t.jsx("p",{className:"text-xl font-bold text-primary",children:d.xp.toLocaleString()}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"XP"})]})]})},d.id)};return t.jsxs("div",{className:"space-y-6 animate-fade-in",children:[t.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white",children:[t.jsx("div",{className:"flex items-center justify-between mb-6",children:t.jsxs("div",{children:[t.jsxs("h1",{className:"text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(ve,{className:"w-7 h-7"}),"Leaderboard"]}),t.jsx("p",{className:"text-white/80",children:"Compete with students across India"})]})}),i&&t.jsxs("div",{className:"bg-white/10 rounded-xl p-4",children:[t.jsx("p",{className:"text-sm text-white/80 mb-2",children:"Your Position"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold",children:["#",i.rank]}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold text-lg",children:i.name}),t.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(we,{className:"w-4 h-4 text-orange-300"}),i.streak," day streak"]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(ye,{className:"w-4 h-4 text-yellow-300"}),i.badges," badges"]})]})]})]}),t.jsxs("div",{className:"text-right",children:[t.jsx("p",{className:"text-3xl font-bold",children:i.xp.toLocaleString()}),t.jsx("p",{className:"text-sm text-white/80",children:"Total XP"})]})]})]})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsx("div",{className:"flex gap-2 p-1 bg-muted rounded-xl",children:[{id:"daily",label:"Today"},{id:"weekly",label:"This Week"},{id:"monthly",label:"This Month"},{id:"allTime",label:"All Time"}].map(d=>t.jsx("button",{onClick:()=>e(d.id),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${s===d.id?"bg-background shadow-sm text-foreground":"text-muted-foreground hover:text-foreground"}`,children:d.label},d.id))}),t.jsxs("div",{className:"relative flex-1",children:[t.jsx(cr,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search students...",value:r,onChange:d=>n(d.target.value),className:"w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"})]})]}),t.jsx("div",{className:"grid grid-cols-3 gap-4",children:o.slice(0,3).map((d,h)=>{const w=[1,0,2][h],m=o[w];if(!m)return null;const x=["h-24","h-32","h-20"],g=["from-gray-300 to-gray-400","from-yellow-400 to-amber-500","from-amber-500 to-orange-600"];return t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("img",{src:m.avatar,alt:m.name,className:`w-16 h-16 rounded-full border-4 shadow-lg mb-2 ${w===0?"border-yellow-400":w===1?"border-gray-400":"border-amber-600"}`}),t.jsx("p",{className:"font-bold text-sm text-center truncate max-w-full",children:m.name.split(" ")[0]}),t.jsxs("p",{className:"text-xs text-muted-foreground mb-2",children:[m.xp.toLocaleString()," XP"]}),t.jsx("div",{className:`w-full ${x[w]} bg-gradient-to-t ${g[w]} rounded-t-lg flex items-center justify-center`,children:t.jsx("span",{className:"text-2xl font-bold text-white",children:w===0?"🥇":w===1?"🥈":"🥉"})})]},m.id)})}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("h2",{className:"text-lg font-bold",children:"Rankings"}),o.map((d,h)=>p(d,h))]}),t.jsx("div",{className:"bg-muted rounded-xl p-4",children:t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl font-bold text-primary",children:"10,000+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Active Students"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl font-bold text-primary",children:"500+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Schools"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl font-bold text-primary",children:"15"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"States"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl font-bold text-primary",children:"1M+"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Lessons Completed"})]})]})})]})}function jh(){const[s,e]=b.useState(null),[r,n]=b.useState({currentQuestion:0,score:0,answers:[],showResult:!1,selectedAnswer:null,showExplanation:!1,timeLeft:60,isActive:!1}),[a,i]=b.useState({score:0,timeLeft:60,currentProblem:{num1:0,num2:0,operator:"+",answer:0},userAnswer:"",isActive:!1,problems:[]}),o=b.useCallback(()=>{const m=["+","-","×"],x=m[Math.floor(Math.random()*m.length)];let g,v,k;switch(x){case"+":g=Math.floor(Math.random()*50)+1,v=Math.floor(Math.random()*50)+1,k=g+v;break;case"-":g=Math.floor(Math.random()*50)+20,v=Math.floor(Math.random()*20)+1,k=g-v;break;case"×":g=Math.floor(Math.random()*12)+1,v=Math.floor(Math.random()*12)+1,k=g*v;break;default:g=0,v=0,k=0}return{num1:g,num2:v,operator:x,answer:k}},[]);b.useEffect(()=>{if(a.isActive&&a.timeLeft>0){const m=setTimeout(()=>{i(x=>({...x,timeLeft:x.timeLeft-1}))},1e3);return()=>clearTimeout(m)}else a.timeLeft===0&&a.isActive&&i(m=>({...m,isActive:!1}))},[a.isActive,a.timeLeft]),b.useEffect(()=>{if(r.isActive&&r.timeLeft>0&&!r.showResult){const m=setTimeout(()=>{n(x=>({...x,timeLeft:x.timeLeft-1}))},1e3);return()=>clearTimeout(m)}},[r.isActive,r.timeLeft,r.showResult]);const l=()=>{e("quiz"),n({currentQuestion:0,score:0,answers:[],showResult:!1,selectedAnswer:null,showExplanation:!1,timeLeft:60,isActive:!0})},c=m=>{if(r.selectedAnswer!==null)return;const x=de[r.currentQuestion],g=m===x.correctAnswer;n(v=>({...v,selectedAnswer:m,showExplanation:!0,score:g?v.score+x.xpReward:v.score,answers:[...v.answers,g]}))},u=()=>{r.currentQuestion<de.length-1?n(m=>({...m,currentQuestion:m.currentQuestion+1,selectedAnswer:null,showExplanation:!1})):n(m=>({...m,showResult:!0,isActive:!1}))},p=()=>{e("math_sprint"),i({score:0,timeLeft:60,currentProblem:o(),userAnswer:"",isActive:!0,problems:[]})},d=()=>{const m=parseInt(a.userAnswer)===a.currentProblem.answer,x=`${a.currentProblem.num1} ${a.currentProblem.operator} ${a.currentProblem.num2}`;i(g=>({...g,score:m?g.score+1:g.score,problems:[...g.problems,{correct:m,problem:x}],currentProblem:o(),userAnswer:""}))},h=m=>t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]",onClick:()=>m.id==="math_sprint"?p():null,children:[t.jsxs("div",{className:"flex items-start justify-between mb-4",children:[t.jsx("div",{className:"text-4xl",children:m.icon}),t.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${m.difficulty==="easy"?"bg-green-100 text-green-700":m.difficulty==="medium"?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:m.difficulty})]}),t.jsx("h3",{className:"font-bold text-lg mb-2",children:m.name}),t.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:m.description}),t.jsxs("div",{className:"flex items-center justify-between text-sm",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(E,{className:"w-4 h-4 text-yellow-500"}),"+",m.xpReward]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"text-yellow-500",children:"🪙"}),"+",m.coinReward]})]}),t.jsxs("span",{className:"text-muted-foreground",children:["Best: ",m.highScore]})]}),t.jsxs("button",{className:"w-full mt-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",children:[t.jsx(H,{className:"w-4 h-4"}),"Play Now"]})]},m.id),f=()=>{if(r.showResult){const x=r.answers.filter(v=>v).length,g=Math.round(x/de.length*100);return t.jsxs("div",{className:"bg-card border border-border rounded-xl p-8 text-center",children:[t.jsxs("div",{className:"mb-6",children:[g>=80?t.jsx("div",{className:"text-6xl mb-4",children:"🏆"}):g>=60?t.jsx("div",{className:"text-6xl mb-4",children:"⭐"}):t.jsx("div",{className:"text-6xl mb-4",children:"💪"}),t.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Quiz Complete!"}),t.jsx("p",{className:"text-muted-foreground",children:g>=80?"Excellent work!":g>=60?"Good job!":"Keep practicing!"})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-muted rounded-xl p-4",children:[t.jsxs("p",{className:"text-3xl font-bold text-primary",children:[x,"/",de.length]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Correct"})]}),t.jsxs("div",{className:"bg-muted rounded-xl p-4",children:[t.jsxs("p",{className:"text-3xl font-bold text-green-500",children:[g,"%"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Score"})]}),t.jsxs("div",{className:"bg-muted rounded-xl p-4",children:[t.jsxs("p",{className:"text-3xl font-bold text-yellow-500",children:["+",r.score]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"XP Earned"})]})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:()=>e(null),className:"flex-1 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors",children:"Back to Games"}),t.jsxs("button",{onClick:l,className:"flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",children:[t.jsx(As,{className:"w-4 h-4"}),"Play Again"]})]})]})}const m=de[r.currentQuestion];return t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("span",{className:"text-sm text-muted-foreground",children:["Question ",r.currentQuestion+1,"/",de.length]}),t.jsx("div",{className:"w-32 h-2 bg-muted rounded-full overflow-hidden",children:t.jsx("div",{className:"h-full bg-primary transition-all",style:{width:`${(r.currentQuestion+1)/de.length*100}%`}})})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(B,{className:"w-4 h-4 text-muted-foreground"}),t.jsxs("span",{className:`font-mono font-bold ${r.timeLeft<=10?"text-red-500":""}`,children:[r.timeLeft,"s"]})]})]}),t.jsxs("div",{className:"mb-6",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium ${m.difficulty==="easy"?"bg-green-100 text-green-700":m.difficulty==="medium"?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:m.difficulty}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:[m.subject," • ",m.topic]})]}),t.jsx("h2",{className:"text-xl font-bold",children:m.question})]}),t.jsx("div",{className:"space-y-3 mb-6",children:m.options.map((x,g)=>{const v=r.selectedAnswer===g,k=g===m.correctAnswer,T=r.showExplanation&&k,Ne=r.showExplanation&&v&&!k;return t.jsxs("button",{onClick:()=>c(g),disabled:r.selectedAnswer!==null,className:`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${T?"bg-green-50 border-green-500 dark:bg-green-900/30":Ne?"bg-red-50 border-red-500 dark:bg-red-900/30":v?"bg-primary/10 border-primary":"bg-card border-border hover:border-primary/50 hover:bg-muted/50"}`,children:[t.jsx("span",{className:"font-medium",children:x}),T&&t.jsx(W,{className:"w-5 h-5 text-green-500"}),Ne&&t.jsx(fm,{className:"w-5 h-5 text-red-500"})]},g)})}),r.showExplanation&&t.jsxs("div",{className:"bg-muted rounded-xl p-4 mb-6",children:[t.jsx("p",{className:"text-sm font-medium mb-1",children:"Explanation:"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:m.explanation})]}),r.showExplanation&&t.jsx("button",{onClick:u,className:"w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",children:r.currentQuestion<de.length-1?t.jsxs(t.Fragment,{children:["Next Question",t.jsx(it,{className:"w-4 h-4"})]}):t.jsxs(t.Fragment,{children:["See Results",t.jsx(ve,{className:"w-4 h-4"})]})})]})},w=()=>!a.isActive&&a.problems.length>0?(a.problems.filter(m=>m.correct).length,t.jsxs("div",{className:"bg-card border border-border rounded-xl p-8 text-center",children:[t.jsx("div",{className:"text-6xl mb-4",children:"⏱️"}),t.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Time's Up!"}),t.jsx("p",{className:"text-muted-foreground mb-6",children:"Great effort!"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"bg-muted rounded-xl p-4",children:[t.jsx("p",{className:"text-3xl font-bold text-primary",children:a.score}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Problems Solved"})]}),t.jsxs("div",{className:"bg-muted rounded-xl p-4",children:[t.jsxs("p",{className:"text-3xl font-bold text-yellow-500",children:["+",a.score*5]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"XP Earned"})]})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:()=>e(null),className:"flex-1 py-3 bg-muted text-foreground rounded-xl font-medium",children:"Back"}),t.jsxs("button",{onClick:p,className:"flex-1 py-3 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2",children:[t.jsx(As,{className:"w-4 h-4"}),"Play Again"]})]})]})):t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ve,{className:"w-5 h-5 text-yellow-500"}),t.jsx("span",{className:"font-bold text-xl",children:a.score})]}),t.jsxs("div",{className:`flex items-center gap-2 px-4 py-2 rounded-full ${a.timeLeft<=10?"bg-red-100 text-red-700":"bg-muted"}`,children:[t.jsx(B,{className:"w-5 h-5"}),t.jsxs("span",{className:"font-mono font-bold text-xl",children:[a.timeLeft,"s"]})]})]}),t.jsx("div",{className:"text-center mb-8",children:t.jsxs("p",{className:"text-5xl font-bold mb-4",children:[a.currentProblem.num1," ",a.currentProblem.operator," ",a.currentProblem.num2," = ?"]})}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("input",{type:"number",value:a.userAnswer,onChange:m=>i(x=>({...x,userAnswer:m.target.value})),onKeyPress:m=>m.key==="Enter"&&d(),className:"flex-1 text-center text-2xl font-bold py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"?",autoFocus:!0}),t.jsx("button",{onClick:d,className:"px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors",children:"Submit"})]}),a.problems.length>0&&t.jsx("div",{className:"mt-6 flex gap-2 flex-wrap",children:a.problems.slice(-5).map((m,x)=>t.jsxs("span",{className:`px-3 py-1 rounded-full text-sm ${m.correct?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:[m.problem," ",m.correct?"✓":"✗"]},x))})]});return t.jsxs("div",{className:"space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-6 text-white",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Fa,{className:"w-7 h-7"}),"Learning Games"]}),t.jsx("p",{className:"text-white/80",children:"Learn while having fun!"})]}),t.jsx("div",{className:"flex items-center gap-4",children:t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-2xl font-bold",children:xe.totalXp.toLocaleString()}),t.jsx("p",{className:"text-sm text-white/80",children:"Total XP"})]})})]})}),s===null?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsxs("h2",{className:"text-lg font-bold flex items-center gap-2",children:[t.jsx(qu,{className:"w-5 h-5 text-indigo-500"}),"Daily Quiz Challenge"]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Test your knowledge with 10 questions!"})]}),t.jsxs("button",{onClick:l,className:"px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2",children:[t.jsx(H,{className:"w-4 h-4"}),"Start Quiz"]})]})}),t.jsxs("div",{children:[t.jsxs("h2",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(Oe,{className:"w-5 h-5 text-yellow-500"}),"Mini Games"]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:bh.map(h)})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsx("h2",{className:"text-lg font-bold mb-4",children:"Your Gaming Stats"}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[t.jsxs("div",{className:"text-center p-4 bg-muted rounded-xl",children:[t.jsx("p",{className:"text-2xl font-bold text-primary",children:xe.quizzesCompleted}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Quizzes Completed"})]}),t.jsxs("div",{className:"text-center p-4 bg-muted rounded-xl",children:[t.jsx("p",{className:"text-2xl font-bold text-green-500",children:xe.perfectScores}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Perfect Scores"})]}),t.jsxs("div",{className:"text-center p-4 bg-muted rounded-xl",children:[t.jsx("p",{className:"text-2xl font-bold text-orange-500",children:xe.streak}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Day Streak"})]}),t.jsxs("div",{className:"text-center p-4 bg-muted rounded-xl",children:[t.jsxs("p",{className:"text-2xl font-bold text-purple-500",children:["#",xe.rank]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Leaderboard Rank"})]})]})]})]}):s==="quiz"?t.jsxs("div",{children:[t.jsx("button",{onClick:()=>e(null),className:"mb-4 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2",children:"← Back to Games"}),f()]}):s==="math_sprint"?t.jsxs("div",{children:[t.jsx("button",{onClick:()=>e(null),className:"mb-4 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2",children:"← Back to Games"}),w()]}):null]})}function Nh(){const[s,e]=b.useState("powerups"),[r,n]=b.useState(null),[a,i]=b.useState(xe.coins),o=[{id:"powerups",label:"Power-ups",icon:t.jsx(E,{className:"w-4 h-4"})},{id:"avatars",label:"Avatars",icon:t.jsx(P,{className:"w-4 h-4"})},{id:"themes",label:"Themes",icon:t.jsx(Oe,{className:"w-4 h-4"})}],l=[{id:"av1",name:"Cool Cat",icon:"😎",price:200,owned:!0},{id:"av2",name:"Ninja",icon:"🥷",price:300,owned:!0},{id:"av3",name:"Astronaut",icon:"👨‍🚀",price:500,owned:!1},{id:"av4",name:"Wizard",icon:"🧙‍♂️",price:400,owned:!1},{id:"av5",name:"Robot",icon:"🤖",price:350,owned:!1},{id:"av6",name:"Superhero",icon:"🦸‍♂️",price:600,owned:!1},{id:"av7",name:"Scientist",icon:"👨‍🔬",price:450,owned:!1},{id:"av8",name:"Artist",icon:"👨‍🎨",price:250,owned:!0}],c=[{id:"th1",name:"Ocean Blue",colors:["#0ea5e9","#0284c7","#0369a1"],price:400,owned:!0},{id:"th2",name:"Forest Green",colors:["#22c55e","#16a34a","#15803d"],price:400,owned:!1},{id:"th3",name:"Sunset Orange",colors:["#f97316","#ea580c","#c2410c"],price:400,owned:!1},{id:"th4",name:"Royal Purple",colors:["#a855f7","#9333ea","#7e22ce"],price:500,owned:!1},{id:"th5",name:"Cherry Pink",colors:["#ec4899","#db2777","#be185d"],price:500,owned:!1},{id:"th6",name:"Golden",colors:["#eab308","#ca8a04","#a16207"],price:750,owned:!1}],u=d=>{switch(d){case"xp_boost":return t.jsx(E,{className:"w-8 h-8 text-yellow-500"});case"streak_shield":return t.jsx($a,{className:"w-8 h-8 text-blue-500"});case"hint_pack":return t.jsx(Ua,{className:"w-8 h-8 text-purple-500"});case"time_freeze":return t.jsx(Ps,{className:"w-8 h-8 text-cyan-500"});default:return t.jsx(P,{className:"w-8 h-8"})}},p=d=>{a>=d.cost&&(i(h=>h-d.cost),n(null))};return t.jsxs("div",{className:"space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Ba,{className:"w-7 h-7"}),"Shop"]}),t.jsx("p",{className:"text-white/80",children:"Spend your coins on awesome items!"})]}),t.jsxs("div",{className:"flex items-center gap-2 bg-white/20 px-6 py-3 rounded-xl",children:[t.jsx("span",{className:"text-2xl",children:"🪙"}),t.jsx("span",{className:"text-2xl font-bold",children:a.toLocaleString()})]})]})}),t.jsx("div",{className:"flex gap-2 p-1 bg-muted rounded-xl",children:o.map(d=>t.jsxs("button",{onClick:()=>e(d.id),className:`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${s===d.id?"bg-background shadow-sm text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[d.icon,d.label]},d.id))}),s==="powerups"&&t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:yh.map(d=>t.jsx("div",{className:"bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all",children:t.jsxs("div",{className:"flex items-start gap-4",children:[t.jsx("div",{className:"p-3 bg-muted rounded-xl",children:u(d.id)}),t.jsxs("div",{className:"flex-1",children:[t.jsxs("div",{className:"flex items-center justify-between mb-1",children:[t.jsx("h3",{className:"font-bold text-lg",children:d.name}),d.owned>0&&t.jsxs("span",{className:"px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full",children:["Owned: ",d.owned]})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:d.description}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"text-xl",children:"🪙"}),t.jsx("span",{className:"font-bold text-lg",children:d.cost})]}),t.jsx("button",{onClick:()=>n(d),disabled:a<d.cost,className:`px-4 py-2 rounded-lg font-medium transition-colors ${a>=d.cost?"bg-primary text-white hover:bg-primary/90":"bg-muted text-muted-foreground cursor-not-allowed"}`,children:a>=d.cost?"Buy":"Not enough coins"})]})]})]})},d.id))}),s==="avatars"&&t.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:l.map(d=>t.jsxs("div",{className:`bg-card border rounded-xl p-4 text-center transition-all hover:shadow-lg ${d.owned?"border-green-300 dark:border-green-700":"border-border"}`,children:[t.jsx("div",{className:"text-6xl mb-3",children:d.icon}),t.jsx("h3",{className:"font-bold mb-2",children:d.name}),d.owned?t.jsxs("div",{className:"flex items-center justify-center gap-1 text-green-600",children:[t.jsx(_e,{className:"w-4 h-4"}),t.jsx("span",{className:"text-sm font-medium",children:"Owned"})]}):t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-center justify-center gap-1",children:[t.jsx("span",{className:"text-lg",children:"🪙"}),t.jsx("span",{className:"font-bold",children:d.price})]}),t.jsx("button",{disabled:a<d.price,className:`w-full py-2 rounded-lg text-sm font-medium transition-colors ${a>=d.price?"bg-primary text-white hover:bg-primary/90":"bg-muted text-muted-foreground cursor-not-allowed"}`,children:a>=d.price?"Buy":t.jsx(ie,{className:"w-4 h-4 mx-auto"})})]})]},d.id))}),s==="themes"&&t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:c.map(d=>t.jsxs("div",{className:`bg-card border rounded-xl overflow-hidden transition-all hover:shadow-lg ${d.owned?"border-green-300 dark:border-green-700":"border-border"}`,children:[t.jsx("div",{className:"h-24 flex",style:{background:`linear-gradient(135deg, ${d.colors.join(", ")})`}}),t.jsxs("div",{className:"p-4",children:[t.jsx("h3",{className:"font-bold mb-2",children:d.name}),t.jsx("div",{className:"flex items-center gap-2 mb-3",children:d.colors.map((h,f)=>t.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-white shadow",style:{backgroundColor:h}},f))}),d.owned?t.jsxs("button",{className:"w-full py-2 bg-green-100 text-green-700 rounded-lg font-medium flex items-center justify-center gap-2",children:[t.jsx(_e,{className:"w-4 h-4"}),"Apply Theme"]}):t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"text-lg",children:"🪙"}),t.jsx("span",{className:"font-bold",children:d.price})]}),t.jsx("button",{disabled:a<d.price,className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${a>=d.price?"bg-primary text-white hover:bg-primary/90":"bg-muted text-muted-foreground cursor-not-allowed"}`,children:a>=d.price?"Buy":t.jsx(ie,{className:"w-4 h-4"})})]})]})]},d.id))}),t.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(zt,{className:"w-5 h-5 text-purple-500"}),t.jsx("h2",{className:"text-lg font-bold",children:"Special Bundles"})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-purple-200 dark:border-purple-700",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("h3",{className:"font-bold",children:"Starter Pack"}),t.jsx("span",{className:"px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full",children:"50% OFF"})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"2x XP Boost + 3x Hint Pack + 500 Coins"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-muted-foreground line-through text-sm",children:"🪙 500"}),t.jsx("span",{className:"text-lg font-bold ml-2",children:"🪙 250"})]}),t.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:"Buy Bundle"})]})]}),t.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-purple-200 dark:border-purple-700",children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("h3",{className:"font-bold",children:"Pro Pack"}),t.jsx("span",{className:"px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full",children:"BEST VALUE"})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"5x All Power-ups + Premium Avatar + 2000 Coins"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-muted-foreground line-through text-sm",children:"🪙 1500"}),t.jsx("span",{className:"text-lg font-bold ml-2",children:"🪙 750"})]}),t.jsx("button",{className:"px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:"Buy Bundle"})]})]})]})]}),r&&t.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:t.jsxs("div",{className:"bg-background rounded-2xl p-6 max-w-md w-full",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("div",{className:"p-4 bg-muted rounded-full inline-flex mb-4",children:u(r.id)}),t.jsxs("h2",{className:"text-xl font-bold mb-2",children:["Purchase ",r.name,"?"]}),t.jsx("p",{className:"text-muted-foreground",children:r.description})]}),t.jsxs("div",{className:"flex items-center justify-between p-4 bg-muted rounded-xl mb-6",children:[t.jsx("span",{className:"text-muted-foreground",children:"Price:"}),t.jsxs("span",{className:"flex items-center gap-1 font-bold text-lg",children:[t.jsx("span",{className:"text-xl",children:"🪙"}),r.cost]})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:()=>n(null),className:"flex-1 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors",children:"Cancel"}),t.jsx("button",{onClick:()=>p(r),className:"flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors",children:"Confirm Purchase"})]})]})})]})}const hs=[{id:"1",name:"Priya Sharma",avatar:"👩‍🎓",level:15,streak:28,status:"studying",xpToday:450},{id:"2",name:"Rahul Verma",avatar:"👨‍💻",level:12,streak:14,status:"online",xpToday:320},{id:"3",name:"Ananya Patel",avatar:"🧑‍🔬",level:18,streak:45,status:"online",xpToday:680},{id:"4",name:"Vikram Singh",avatar:"🎯",level:10,streak:7,status:"offline",lastActive:"2h ago",xpToday:150},{id:"5",name:"Meera Reddy",avatar:"📚",level:14,streak:21,status:"offline",lastActive:"5h ago",xpToday:0},{id:"6",name:"Arjun Nair",avatar:"🚀",level:16,streak:33,status:"studying",xpToday:520}],ps=[{id:"1",name:"Kavya Menon",avatar:"🌟",level:11,mutualFriends:3},{id:"2",name:"Dev Kumar",avatar:"💡",level:9,mutualFriends:1}],kh=[{id:"1",userName:"Priya Sharma",userAvatar:"👩‍🎓",type:"badge",content:'earned the "Math Master" badge!',timestamp:"5 min ago",likes:12,liked:!1},{id:"2",userName:"Ananya Patel",userAvatar:"🧑‍🔬",type:"streak",content:"reached a 45-day streak! 🔥",timestamp:"15 min ago",likes:24,liked:!0},{id:"3",userName:"Rahul Verma",userAvatar:"👨‍💻",type:"challenge",content:"completed Weekly Math Challenge!",timestamp:"1 hour ago",likes:8,liked:!1},{id:"4",userName:"Arjun Nair",userAvatar:"🚀",type:"level",content:"reached Level 16! 🎉",timestamp:"2 hours ago",likes:15,liked:!0}],Ih=[{id:"10",name:"Shreya Iyer",avatar:"🎨",level:13,school:"Same school"},{id:"11",name:"Aditya Joshi",avatar:"⚡",level:15,school:"Top learner"},{id:"12",name:"Neha Gupta",avatar:"🌈",level:11,school:"5 mutual friends"}];function Sh(){const[s,e]=b.useState("friends"),[r,n]=b.useState(""),[a,i]=b.useState(kh),o=hs.filter(p=>p.status!=="offline"),l=hs.filter(p=>p.status==="offline"),c=p=>{switch(p){case"online":return"bg-green-500";case"studying":return"bg-yellow-500";case"offline":return"bg-gray-400"}},u=p=>{i(d=>d.map(h=>h.id===p?{...h,liked:!h.liked,likes:h.liked?h.likes-1:h.likes+1}:h))};return t.jsxs("div",{className:"space-y-4 md:space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white",children:t.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-xl md:text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx($,{className:"w-6 h-6 md:w-7 md:h-7"}),"Social"]}),t.jsx("p",{className:"text-white/80 text-sm md:text-base",children:"Connect with friends!"})]}),t.jsx("div",{className:"flex items-center gap-4",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-2xl md:text-3xl font-bold",children:hs.length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Friends"})]})})]})}),t.jsx("div",{className:"flex gap-1 md:gap-2 p-1 bg-muted rounded-lg md:rounded-xl overflow-x-auto",children:[{id:"friends",label:"Friends",icon:t.jsx($,{className:"w-4 h-4"})},{id:"activity",label:"Activity",icon:t.jsx(Kt,{className:"w-4 h-4"})},{id:"find",label:"Find",icon:t.jsx(ds,{className:"w-4 h-4"})}].map(p=>t.jsxs("button",{onClick:()=>e(p.id),className:`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 md:py-2.5 rounded-md md:rounded-lg text-xs md:text-sm font-medium transition-all ${s===p.id?"bg-background shadow-sm text-foreground":"text-muted-foreground hover:text-foreground"}`,children:[p.icon,t.jsx("span",{className:"hidden xs:inline",children:p.label})]},p.id))}),s==="friends"&&t.jsxs("div",{className:"space-y-4 md:space-y-6",children:[t.jsxs("div",{className:"relative",children:[t.jsx(cr,{className:"absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search friends...",value:r,onChange:p=>n(p.target.value),className:"w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-card border border-border rounded-lg md:rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"})]}),o.length>0&&t.jsxs("div",{children:[t.jsxs("h2",{className:"text-xs md:text-sm font-medium text-muted-foreground mb-2 md:mb-3 flex items-center gap-2",children:[t.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"Online (",o.length,")"]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3",children:o.map(p=>t.jsx("div",{className:"bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-lg transition-all",children:t.jsxs("div",{className:"flex items-center gap-3 md:gap-4",children:[t.jsxs("div",{className:"relative flex-shrink-0",children:[t.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 bg-muted rounded-full flex items-center justify-center text-xl md:text-2xl",children:p.avatar}),t.jsx("span",{className:`absolute bottom-0 right-0 w-3 h-3 ${c(p.status)} rounded-full border-2 border-card`})]}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h3",{className:"font-bold text-sm md:text-base truncate",children:p.name}),t.jsxs("div",{className:"flex items-center gap-2 text-xs md:text-sm text-muted-foreground",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(we,{className:"w-3 h-3 text-orange-500"}),p.streak]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(P,{className:"w-3 h-3 text-yellow-500"}),p.xpToday," XP"]})]})]}),t.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(lr,{className:"w-4 h-4 text-muted-foreground"})})]})},p.id))})]}),l.length>0&&t.jsxs("div",{children:[t.jsxs("h2",{className:"text-xs md:text-sm font-medium text-muted-foreground mb-2 md:mb-3",children:["Offline (",l.length,")"]}),t.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3",children:l.map(p=>t.jsx("div",{className:"bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 opacity-70 hover:opacity-100 transition-all",children:t.jsxs("div",{className:"flex items-center gap-3 md:gap-4",children:[t.jsxs("div",{className:"relative flex-shrink-0",children:[t.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 bg-muted rounded-full flex items-center justify-center text-xl md:text-2xl",children:p.avatar}),t.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border-2 border-card"})]}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h3",{className:"font-bold text-sm md:text-base truncate",children:p.name}),t.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[t.jsx(B,{className:"w-3 h-3"}),p.lastActive]})]}),t.jsx("button",{className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(rm,{className:"w-4 h-4 text-muted-foreground"})})]})},p.id))})]})]}),s==="activity"&&t.jsx("div",{className:"space-y-3 md:space-y-4",children:a.map(p=>t.jsx("div",{className:"bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4",children:t.jsxs("div",{className:"flex gap-3 md:gap-4",children:[t.jsx("div",{className:"w-9 h-9 md:w-10 md:h-10 bg-muted rounded-full flex items-center justify-center text-lg md:text-xl flex-shrink-0",children:p.userAvatar}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("p",{className:"text-sm md:text-base",children:[t.jsx("span",{className:"font-bold",children:p.userName})," ",p.content]}),t.jsxs("div",{className:"flex items-center gap-3 md:gap-4 mt-2",children:[t.jsx("span",{className:"text-xs text-muted-foreground",children:p.timestamp}),t.jsxs("button",{onClick:()=>u(p.id),className:`flex items-center gap-1 text-xs md:text-sm transition-colors ${p.liked?"text-pink-500":"text-muted-foreground hover:text-pink-500"}`,children:[t.jsx(Jt,{className:`w-3.5 h-3.5 ${p.liked?"fill-current":""}`}),p.likes]})]})]})]})},p.id))}),s==="find"&&t.jsxs("div",{className:"space-y-4 md:space-y-6",children:[ps.length>0&&t.jsxs("div",{children:[t.jsxs("h2",{className:"text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2",children:[t.jsx(ds,{className:"w-4 h-4 md:w-5 md:h-5 text-primary"}),"Requests (",ps.length,")"]}),t.jsx("div",{className:"space-y-2 md:space-y-3",children:ps.map(p=>t.jsx("div",{className:"bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4",children:t.jsxs("div",{className:"flex items-center gap-3 md:gap-4",children:[t.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 bg-muted rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0",children:p.avatar}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h3",{className:"font-bold text-sm md:text-base",children:p.name}),t.jsxs("p",{className:"text-xs md:text-sm text-muted-foreground",children:["Lvl ",p.level," • ",p.mutualFriends," mutual"]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{className:"p-2 bg-primary text-white rounded-lg hover:bg-primary/90",children:t.jsx(_e,{className:"w-4 h-4 md:w-5 md:h-5"})}),t.jsx("button",{className:"p-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80",children:t.jsx(Wa,{className:"w-4 h-4 md:w-5 md:h-5"})})]})]})},p.id))})]}),t.jsxs("div",{children:[t.jsxs("h2",{className:"text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2",children:[t.jsx(P,{className:"w-4 h-4 md:w-5 md:h-5 text-yellow-500"}),"Suggested"]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:Ih.map(p=>t.jsxs("div",{className:"bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:shadow-lg transition-all",children:[t.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2 md:mb-3",children:p.avatar}),t.jsx("h3",{className:"font-bold text-sm md:text-base",children:p.name}),t.jsxs("p",{className:"text-xs text-muted-foreground mb-1",children:["Level ",p.level]}),t.jsx("p",{className:"text-xs text-primary mb-2 md:mb-3",children:p.school}),t.jsxs("button",{className:"w-full flex items-center justify-center gap-1 py-2 bg-primary text-white rounded-lg text-xs md:text-sm font-medium hover:bg-primary/90",children:[t.jsx(ds,{className:"w-3.5 h-3.5"}),"Add"]})]},p.id))})]}),t.jsx("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg md:rounded-xl p-4 md:p-6 border border-blue-200 dark:border-blue-800",children:t.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4",children:[t.jsx("div",{className:"p-2.5 md:p-3 bg-blue-500 rounded-lg md:rounded-xl text-white",children:t.jsx(im,{className:"w-5 h-5 md:w-6 md:h-6"})}),t.jsxs("div",{className:"flex-1 text-center sm:text-left",children:[t.jsx("h3",{className:"font-bold text-sm md:text-lg",children:"Invite Classmates!"}),t.jsx("p",{className:"text-xs md:text-sm text-muted-foreground",children:"Earn 100 XP for each friend"})]}),t.jsx("button",{className:"w-full sm:w-auto px-4 md:px-6 py-2 md:py-2.5 bg-blue-500 text-white rounded-lg md:rounded-xl text-sm font-medium hover:bg-blue-600",children:"Share Invite"})]})})]})]})}function _h(){const[s,e]=b.useState(new Date),[r,n]=b.useState(new Date().getDate()),a=new Date(s.getFullYear(),s.getMonth()+1,0).getDate(),i=new Date(s.getFullYear(),s.getMonth(),1).getDay(),o=["January","February","March","April","May","June","July","August","September","October","November","December"],l=new Date,c=x=>{const g=x===l.getDate()&&s.getMonth()===l.getMonth()&&s.getFullYear()===l.getFullYear(),k=(x<l.getDate()||s.getMonth()<l.getMonth())&&Math.random()>.15;return{date:x,completed:k,xpEarned:k?Math.floor(Math.random()*500)+100:g?350:0,lessonsCompleted:k?Math.floor(Math.random()*5)+1:g?2:0}},u=[...Array(i).fill(null),...Array.from({length:a},(x,g)=>c(g+1))],p=()=>{e(new Date(s.getFullYear(),s.getMonth()-1)),n(null)},d=()=>{e(new Date(s.getFullYear(),s.getMonth()+1)),n(null)},h=r?u.find(x=>x?.date===r):null,f=u.filter(x=>x?.completed).length,w=xe.streak,m=[{id:1,title:"Complete 3 lessons",progress:2,target:3,xp:100},{id:2,title:"Earn 500 XP",progress:350,target:500,xp:50},{id:3,title:"Practice for 30 min",progress:22,target:30,xp:75},{id:4,title:"Play a quiz game",progress:1,target:1,xp:50,completed:!0}];return t.jsxs("div",{className:"space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-6 text-white",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Me,{className:"w-7 h-7"}),"Daily Progress"]}),t.jsx("p",{className:"text-white/80",children:"Track your learning journey day by day!"})]}),t.jsxs("div",{className:"flex gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(we,{className:"w-6 h-6 text-orange-300"}),t.jsx("span",{className:"text-3xl font-bold",children:w})]}),t.jsx("p",{className:"text-white/80 text-sm",children:"Day Streak"})]}),t.jsxs("div",{className:"text-center",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(_e,{className:"w-6 h-6 text-green-300"}),t.jsx("span",{className:"text-3xl font-bold",children:f})]}),t.jsx("p",{className:"text-white/80 text-sm",children:"Days This Month"})]})]})]})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[t.jsxs("div",{className:"lg:col-span-2 bg-card border border-border rounded-xl p-6",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx("button",{onClick:p,className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(Gu,{className:"w-5 h-5"})}),t.jsxs("h2",{className:"text-xl font-bold",children:[o[s.getMonth()]," ",s.getFullYear()]}),t.jsx("button",{onClick:d,className:"p-2 hover:bg-muted rounded-lg transition-colors",children:t.jsx(it,{className:"w-5 h-5"})})]}),t.jsx("div",{className:"grid grid-cols-7 gap-2 mb-2",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>t.jsx("div",{className:"text-center text-sm font-medium text-muted-foreground py-2",children:x},x))}),t.jsx("div",{className:"grid grid-cols-7 gap-2",children:u.map((x,g)=>{if(!x)return t.jsx("div",{className:"aspect-square"},`empty-${g}`);const v=x.date===l.getDate()&&s.getMonth()===l.getMonth()&&s.getFullYear()===l.getFullYear(),k=x.date===r,T=x.date>l.getDate()&&s.getMonth()>=l.getMonth()&&s.getFullYear()>=l.getFullYear();return t.jsxs("button",{onClick:()=>n(x.date),disabled:T,className:`aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative ${k?"bg-primary text-white shadow-lg scale-105":v?"bg-primary/10 border-2 border-primary":x.completed?"bg-green-100 dark:bg-green-900/30":T?"bg-muted opacity-50":"hover:bg-muted"}`,children:[t.jsx("span",{className:`text-lg font-medium ${k?"text-white":v?"text-primary":""}`,children:x.date}),x.completed&&!k&&t.jsx(_e,{className:"w-3 h-3 text-green-600 dark:text-green-400 absolute bottom-1"})]},x.date)})}),t.jsxs("div",{className:"flex items-center gap-6 mt-4 pt-4 border-t border-border",children:[t.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[t.jsx("div",{className:"w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded border border-green-300"}),t.jsx("span",{className:"text-muted-foreground",children:"Completed"})]}),t.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[t.jsx("div",{className:"w-4 h-4 bg-primary/10 rounded border-2 border-primary"}),t.jsx("span",{className:"text-muted-foreground",children:"Today"})]})]})]}),t.jsxs("div",{className:"space-y-6",children:[h&&t.jsxs("div",{className:"bg-card border border-border rounded-xl p-5",children:[t.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[t.jsx(Me,{className:"w-4 h-4 text-primary"}),r===l.getDate()?"Today":`Day ${r}`]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between p-3 bg-muted rounded-lg",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(P,{className:"w-5 h-5 text-yellow-500"}),t.jsx("span",{className:"text-sm",children:"XP Earned"})]}),t.jsx("span",{className:"font-bold",children:h.xpEarned})]}),t.jsxs("div",{className:"flex items-center justify-between p-3 bg-muted rounded-lg",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ve,{className:"w-5 h-5 text-purple-500"}),t.jsx("span",{className:"text-sm",children:"Lessons"})]}),t.jsx("span",{className:"font-bold",children:h.lessonsCompleted})]}),t.jsxs("div",{className:"flex items-center justify-between p-3 bg-muted rounded-lg",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[h.completed?t.jsx(_e,{className:"w-5 h-5 text-green-500"}):t.jsx(qe,{className:"w-5 h-5 text-orange-500"}),t.jsx("span",{className:"text-sm",children:"Status"})]}),t.jsx("span",{className:`font-bold ${h.completed?"text-green-600":"text-orange-600"}`,children:h.completed?"Complete":"In Progress"})]})]})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-5",children:[t.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[t.jsx(qe,{className:"w-4 h-4 text-primary"}),"Today's Goals"]}),t.jsx("div",{className:"space-y-3",children:m.map(x=>{const g=Math.min(x.progress/x.target*100,100);return t.jsxs("div",{className:`p-3 rounded-lg border ${x.completed?"bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800":"bg-muted border-transparent"}`,children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:"text-sm font-medium",children:x.title}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx(P,{className:"w-3.5 h-3.5 text-yellow-500"}),t.jsxs("span",{className:"text-xs font-medium",children:["+",x.xp]})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"flex-1 h-2 bg-muted-foreground/20 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full rounded-full transition-all ${x.completed?"bg-green-500":"bg-primary"}`,style:{width:`${g}%`}})}),t.jsxs("span",{className:"text-xs text-muted-foreground whitespace-nowrap",children:[x.progress,"/",x.target]}),x.completed&&t.jsx(_e,{className:"w-4 h-4 text-green-500"})]})]},x.id)})})]}),t.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-5 border border-orange-200 dark:border-orange-800",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:"p-2 bg-orange-500 rounded-lg",children:t.jsx(we,{className:"w-5 h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold",children:"Streak Bonus!"}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:[w," days and counting"]})]})]}),t.jsxs("div",{className:"flex items-center justify-between p-3 bg-white/50 dark:bg-black/20 rounded-lg",children:[t.jsx("span",{className:"text-sm",children:"Tomorrow's bonus:"}),t.jsxs("span",{className:"flex items-center gap-1 font-bold text-orange-600",children:[t.jsx(zt,{className:"w-4 h-4"}),"+",Math.min(w*10,500)," XP"]})]})]})]})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl p-6",children:[t.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[t.jsx(B,{className:"w-5 h-5 text-primary"}),"This Week's Summary"]}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[t.jsxs("div",{className:"p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-primary",children:"2,450"}),t.jsx("div",{className:"text-sm text-muted-foreground",children:"Total XP"})]}),t.jsxs("div",{className:"p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-green-600",children:"12"}),t.jsx("div",{className:"text-sm text-muted-foreground",children:"Lessons Done"})]}),t.jsxs("div",{className:"p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-purple-600",children:"4h 35m"}),t.jsx("div",{className:"text-sm text-muted-foreground",children:"Time Spent"})]}),t.jsxs("div",{className:"p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-3xl font-bold text-orange-600",children:"6/7"}),t.jsx("div",{className:"text-sm text-muted-foreground",children:"Active Days"})]})]})]})]})}const wt=[{id:"1",title:"Fun with Fractions",description:"Learn fractions through interactive games and real-life examples",instructor:"Mrs. Priya Sharma",instructorAvatar:"👩‍🏫",date:"Today",time:"4:00 PM",duration:"45 min",category:"math",type:"live",enrolled:24,maxCapacity:30,rating:4.8,image:"🔢",tags:["Beginner","Interactive"],xpReward:150},{id:"2",title:"Solar System Explorer",description:"Virtual tour of our solar system with 3D models",instructor:"Dr. Rajan Kumar",instructorAvatar:"👨‍🔬",date:"Tomorrow",time:"5:00 PM",duration:"1 hour",category:"science",type:"upcoming",enrolled:45,maxCapacity:50,rating:4.9,image:"🌌",tags:["Visual","VR Ready"],xpReward:200},{id:"3",title:"Coding Your First Game",description:"Create a simple snake game using Scratch programming",instructor:"Mr. Arjun Nair",instructorAvatar:"👨‍💻",date:"Jan 20",time:"3:00 PM",duration:"1.5 hours",category:"coding",type:"upcoming",enrolled:18,maxCapacity:25,rating:4.7,image:"🎮",tags:["Hands-on","Project"],xpReward:250},{id:"4",title:"Hindi Poetry & Storytelling",description:"Express yourself through Hindi poetry and creative writing",instructor:"Mrs. Sunita Devi",instructorAvatar:"👩‍🎨",date:"Jan 21",time:"4:30 PM",duration:"1 hour",category:"language",type:"upcoming",enrolled:32,maxCapacity:40,rating:4.6,image:"📝",tags:["Creative","Cultural"],xpReward:175},{id:"5",title:"Algebra Made Easy",description:"Master algebraic expressions with step-by-step guidance",instructor:"Mr. Vikram Singh",instructorAvatar:"👨‍🏫",date:"Recorded",time:"Anytime",duration:"2 hours",category:"math",type:"recorded",enrolled:156,maxCapacity:999,rating:4.9,image:"➕",tags:["Self-paced","Practice"],xpReward:300},{id:"6",title:"Digital Art Basics",description:"Learn to create beautiful digital art on your tablet or phone",instructor:"Ms. Kavya Menon",instructorAvatar:"👩‍🎨",date:"Recorded",time:"Anytime",duration:"1.5 hours",category:"art",type:"recorded",enrolled:89,maxCapacity:999,rating:4.8,image:"🎨",tags:["Creative","Project"],xpReward:200}];function Ch(){const[s,e]=b.useState("all"),[r,n]=b.useState("all"),[a,i]=b.useState(""),o=[{id:"all",label:"All",icon:"📚"},{id:"math",label:"Math",icon:"🔢"},{id:"science",label:"Science",icon:"🔬"},{id:"coding",label:"Coding",icon:"💻"},{id:"art",label:"Art",icon:"🎨"},{id:"language",label:"Language",icon:"📝"}],l=[{id:"all",label:"All"},{id:"live",label:"🔴 Live"},{id:"upcoming",label:"📅 Upcoming"},{id:"recorded",label:"📹 Recorded"}],c=wt.filter(d=>{const h=s==="all"||d.category===s,f=r==="all"||d.type===r,w=d.title.toLowerCase().includes(a.toLowerCase())||d.description.toLowerCase().includes(a.toLowerCase());return h&&f&&w}),u=d=>{switch(d){case"live":return"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";case"upcoming":return"bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";case"recorded":return"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"}},p=d=>{switch(d){case"live":return"🔴 Live Now";case"upcoming":return"📅 Upcoming";case"recorded":return"📹 Recorded"}};return t.jsxs("div",{className:"space-y-4 md:space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-xl md:text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Xu,{className:"w-6 h-6 md:w-7 md:h-7"}),"Workshops"]}),t.jsx("p",{className:"text-white/80 text-sm md:text-base",children:"Interactive learning sessions with expert teachers"})]}),t.jsxs("div",{className:"flex gap-3 md:gap-4",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:wt.filter(d=>d.type==="live").length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Live"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:wt.filter(d=>d.type==="upcoming").length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Upcoming"})]})]})]})}),t.jsxs("div",{className:"space-y-3 md:space-y-4",children:[t.jsxs("div",{className:"relative",children:[t.jsx(cr,{className:"absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground"}),t.jsx("input",{type:"text",placeholder:"Search workshops...",value:a,onChange:d=>i(d.target.value),className:"w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-card border border-border rounded-lg md:rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"})]}),t.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 no-scrollbar",children:o.map(d=>t.jsxs("button",{onClick:()=>e(d.id),className:`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all ${s===d.id?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[t.jsx("span",{children:d.icon}),d.label]},d.id))}),t.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar",children:l.map(d=>t.jsx("button",{onClick:()=>n(d.id),className:`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${r===d.id?"bg-foreground text-background":"bg-card border border-border text-muted-foreground hover:text-foreground"}`,children:d.label},d.id))})]}),c.some(d=>d.type==="live")&&t.jsx("div",{className:"bg-gradient-to-r from-red-500 to-orange-500 rounded-xl md:rounded-2xl p-4 md:p-5 text-white",children:t.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("span",{className:"relative flex h-3 w-3",children:[t.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"}),t.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-white"})]}),t.jsx("span",{className:"font-bold text-sm md:text-base",children:"LIVE NOW"})]}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h3",{className:"font-bold text-sm md:text-lg",children:c.find(d=>d.type==="live")?.title}),t.jsx("p",{className:"text-white/80 text-xs md:text-sm",children:c.find(d=>d.type==="live")?.instructor})]}),t.jsxs("button",{className:"w-full sm:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-white text-red-600 rounded-lg md:rounded-xl font-bold text-sm hover:bg-white/90",children:[t.jsx(H,{className:"w-4 h-4",fill:"currentColor"}),"Join Now"]})]})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:c.map(d=>t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all group",children:[t.jsx("div",{className:`h-24 md:h-32 flex items-center justify-center text-5xl md:text-6xl ${d.category==="math"?"bg-blue-100 dark:bg-blue-900/30":d.category==="science"?"bg-purple-100 dark:bg-purple-900/30":d.category==="coding"?"bg-green-100 dark:bg-green-900/30":d.category==="art"?"bg-pink-100 dark:bg-pink-900/30":"bg-orange-100 dark:bg-orange-900/30"}`,children:d.image}),t.jsxs("div",{className:"p-3 md:p-4",children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium ${u(d.type)}`,children:p(d.type)}),t.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[t.jsx(P,{className:"w-3 h-3 text-yellow-500 fill-yellow-500"}),d.rating]})]}),t.jsx("h3",{className:"font-bold text-sm md:text-base mb-1 group-hover:text-primary transition-colors",children:d.title}),t.jsx("p",{className:"text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2",children:d.description}),t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{className:"text-lg",children:d.instructorAvatar}),t.jsx("span",{className:"text-xs md:text-sm text-muted-foreground",children:d.instructor})]}),t.jsx("div",{className:"flex flex-wrap gap-1 mb-3",children:d.tags.map(h=>t.jsx("span",{className:"px-2 py-0.5 bg-muted rounded text-xs",children:h},h))}),t.jsxs("div",{className:"flex items-center justify-between text-xs text-muted-foreground mb-3 pb-3 border-b border-border",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Me,{className:"w-3 h-3"}),d.date]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(B,{className:"w-3 h-3"}),d.duration]})]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx($,{className:"w-3 h-3"}),d.enrolled,"/",d.maxCapacity]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-1 text-yellow-600 dark:text-yellow-400",children:[t.jsx(P,{className:"w-4 h-4"}),t.jsxs("span",{className:"text-sm font-bold",children:["+",d.xpReward," XP"]})]}),t.jsx("button",{className:`flex items-center gap-1 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${d.type==="live"?"bg-red-500 text-white hover:bg-red-600":d.type==="upcoming"?"bg-primary text-white hover:bg-primary/90":"bg-green-500 text-white hover:bg-green-600"}`,children:d.type==="live"?t.jsxs(t.Fragment,{children:["Join ",t.jsx(H,{className:"w-3 h-3"})]}):d.type==="upcoming"?t.jsxs(t.Fragment,{children:["Enroll ",t.jsx(Kt,{className:"w-3 h-3"})]}):t.jsxs(t.Fragment,{children:["Watch ",t.jsx(H,{className:"w-3 h-3"})]})})]})]})]},d.id))}),c.length===0&&t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"text-4xl md:text-6xl mb-4",children:"🔍"}),t.jsx("h3",{className:"text-lg font-bold mb-2",children:"No workshops found"}),t.jsx("p",{className:"text-muted-foreground text-sm",children:"Try adjusting your filters"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6",children:[t.jsxs("h2",{className:"text-base md:text-lg font-bold mb-4 flex items-center gap-2",children:[t.jsx(W,{className:"w-5 h-5 text-green-500"}),"My Enrolled Workshops"]}),t.jsx("div",{className:"space-y-3",children:wt.slice(0,2).map(d=>t.jsxs("div",{className:"flex items-center gap-3 md:gap-4 p-3 bg-muted rounded-xl",children:[t.jsx("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-2xl bg-background",children:d.image}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("h4",{className:"font-bold text-sm truncate",children:d.title}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:[d.date," • ",d.time]})]}),t.jsx("button",{className:"p-2 bg-primary text-white rounded-lg",children:t.jsx(ir,{className:"w-4 h-4"})})]},d.id))})]})]})}const fs=[{id:"1",subject:"Mathematics",title:"Chapter 5 - Fractions Quiz",date:"Today",time:"2:00 PM",duration:"30 min",type:"quiz",status:"today",totalMarks:20,topics:["Fractions","Decimals","Word Problems"],difficulty:"medium",icon:"🔢"},{id:"2",subject:"Science",title:"Unit Test - Light & Sound",date:"Jan 20",time:"10:00 AM",duration:"1 hour",type:"test",status:"upcoming",totalMarks:50,topics:["Reflection","Refraction","Sound Waves"],difficulty:"medium",icon:"🔬"},{id:"3",subject:"English",title:"Essay Writing Assignment",date:"Jan 22",time:"11:59 PM",duration:"2 days",type:"assignment",status:"upcoming",totalMarks:25,topics:["Essay Structure","Grammar","Vocabulary"],difficulty:"easy",icon:"📝"},{id:"4",subject:"Hindi",title:"Quarterly Exam",date:"Jan 25",time:"9:00 AM",duration:"2 hours",type:"exam",status:"upcoming",totalMarks:100,topics:["Grammar","Poetry","Prose","Writing"],difficulty:"hard",icon:"📖"},{id:"5",subject:"Mathematics",title:"Algebra Practice Quiz",date:"Jan 15",time:"3:00 PM",duration:"20 min",type:"quiz",status:"completed",score:18,totalMarks:20,topics:["Variables","Equations"],difficulty:"easy",icon:"🔢"},{id:"6",subject:"Science",title:"Chapter 3 Quiz",date:"Jan 12",time:"2:00 PM",duration:"30 min",type:"quiz",status:"completed",score:15,totalMarks:20,topics:["Atoms","Molecules"],difficulty:"medium",icon:"🔬"}],Eh=[{icon:"📚",tip:"Review fractions notes before today's quiz"},{icon:"⏰",tip:"Start preparing for Science Unit Test"},{icon:"✍️",tip:"Draft your essay outline today"},{icon:"📖",tip:"Hindi exam in 8 days - start revision"}];function Th(){const[s,e]=b.useState(new Date),[r,n]=b.useState("list"),[a,i]=b.useState("all"),o=fs.filter(f=>f.status==="upcoming"||f.status==="today"),l=fs.filter(f=>f.status==="completed"),c=fs.filter(f=>f.status==="today"),u=f=>{switch(f){case"today":return"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 border-red-200";case"upcoming":return"bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200";case"completed":return"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 border-green-200";case"missed":return"bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200"}},p=f=>{switch(f){case"quiz":return t.jsx(Ps,{className:"w-4 h-4"});case"test":return t.jsx(Yu,{className:"w-4 h-4"});case"exam":return t.jsx(ye,{className:"w-4 h-4"});case"assignment":return t.jsx(Re,{className:"w-4 h-4"})}},d=f=>{switch(f){case"easy":return"text-green-600";case"medium":return"text-yellow-600";case"hard":return"text-red-600"}},h=a==="all"?[...o,...l]:[...o,...l].filter(f=>f.type===a);return t.jsxs("div",{className:"space-y-4 md:space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-orange-500 to-red-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-xl md:text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Me,{className:"w-6 h-6 md:w-7 md:h-7"}),"Exam Schedule"]}),t.jsx("p",{className:"text-white/80 text-sm md:text-base",children:"Stay prepared and ace your exams!"})]}),t.jsxs("div",{className:"flex gap-3 md:gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:c.length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Today"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:o.length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Upcoming"})]})]})]})}),c.length>0&&t.jsx("div",{className:"bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-xl md:rounded-2xl p-4 md:p-5",children:t.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"p-2.5 bg-red-500 rounded-lg text-white",children:t.jsx(Gt,{className:"w-5 h-5"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 text-sm md:text-base",children:"Exam Today!"}),t.jsxs("p",{className:"text-xs md:text-sm text-red-600/70 dark:text-red-400/70",children:[c[0].title," at ",c[0].time]})]})]}),t.jsx("button",{className:"w-full sm:w-auto ml-auto px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600",children:"Start Exam"})]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-between",children:[t.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar",children:["all","quiz","test","exam","assignment"].map(f=>t.jsx("button",{onClick:()=>i(f),className:`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all capitalize ${a===f?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:f==="all"?"All":f},f))}),t.jsxs("div",{className:"flex gap-1 p-1 bg-muted rounded-lg self-start",children:[t.jsx("button",{onClick:()=>n("list"),className:`px-3 py-1.5 rounded text-xs md:text-sm font-medium ${r==="list"?"bg-background shadow-sm":"text-muted-foreground"}`,children:"List"}),t.jsx("button",{onClick:()=>n("calendar"),className:`px-3 py-1.5 rounded text-xs md:text-sm font-medium ${r==="calendar"?"bg-background shadow-sm":"text-muted-foreground"}`,children:"Calendar"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6",children:[t.jsxs("div",{className:"lg:col-span-2 space-y-3 md:space-y-4",children:[t.jsxs("h2",{className:"text-base md:text-lg font-bold flex items-center gap-2",children:[t.jsx(qe,{className:"w-5 h-5 text-primary"}),a==="all"?"All Exams":`${a.charAt(0).toUpperCase()+a.slice(1)}s`]}),h.map(f=>t.jsx("div",{className:`bg-card border rounded-xl md:rounded-2xl p-4 md:p-5 transition-all hover:shadow-lg ${f.status==="today"?"border-red-300 dark:border-red-700":"border-border"}`,children:t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("div",{className:"flex sm:flex-col items-center gap-3 sm:gap-1",children:[t.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl ${f.status==="completed"?"bg-green-100 dark:bg-green-900/30":"bg-muted"}`,children:f.icon}),f.status==="completed"&&f.score!==void 0&&t.jsx("div",{className:"text-center",children:t.jsxs("div",{className:"text-lg md:text-xl font-bold text-green-600",children:[Math.round(f.score/f.totalMarks*100),"%"]})})]}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[t.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-medium ${u(f.status)}`,children:f.status==="today"?"🔴 Today":f.status==="upcoming"?"📅 Upcoming":f.status==="completed"?"✅ Done":"❌ Missed"}),t.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 bg-muted rounded text-xs",children:[p(f.type),f.type]}),t.jsx("span",{className:`text-xs font-medium ${d(f.difficulty)}`,children:f.difficulty})]}),t.jsx("h3",{className:"font-bold text-sm md:text-base mb-1",children:f.title}),t.jsx("p",{className:"text-xs md:text-sm text-muted-foreground mb-2",children:f.subject}),t.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[f.topics.slice(0,3).map(w=>t.jsx("span",{className:"px-2 py-0.5 bg-primary/10 text-primary rounded text-xs",children:w},w)),f.topics.length>3&&t.jsxs("span",{className:"px-2 py-0.5 text-muted-foreground text-xs",children:["+",f.topics.length-3," more"]})]}),t.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs text-muted-foreground",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Me,{className:"w-3.5 h-3.5"}),f.date]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(B,{className:"w-3.5 h-3.5"}),f.time]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(Ps,{className:"w-3.5 h-3.5"}),f.duration]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(P,{className:"w-3.5 h-3.5"}),f.totalMarks," marks"]})]})]}),t.jsxs("div",{className:"flex sm:flex-col items-center gap-2 sm:justify-center",children:[f.status==="today"&&t.jsx("button",{className:"w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600",children:"Start"}),f.status==="upcoming"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"flex-1 sm:flex-none px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90",children:"Prepare"}),t.jsx("button",{className:"p-2 bg-muted rounded-lg hover:bg-muted/80",children:t.jsx(Kt,{className:"w-4 h-4"})})]}),f.status==="completed"&&t.jsx("button",{className:"w-full sm:w-auto px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80",children:"Review"})]})]})},f.id))]}),t.jsxs("div",{className:"space-y-4 md:space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-200 dark:border-yellow-800",children:[t.jsxs("h3",{className:"font-bold text-base mb-3 flex items-center gap-2",children:[t.jsx(we,{className:"w-5 h-5 text-orange-500"}),"Study Tips"]}),t.jsx("div",{className:"space-y-2",children:Eh.map((f,w)=>t.jsxs("div",{className:"flex items-start gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg",children:[t.jsx("span",{className:"text-lg",children:f.icon}),t.jsx("span",{className:"text-xs md:text-sm",children:f.tip})]},w))})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5",children:[t.jsxs("h3",{className:"font-bold text-base mb-4 flex items-center gap-2",children:[t.jsx(ye,{className:"w-5 h-5 text-primary"}),"Recent Scores"]}),t.jsx("div",{className:"space-y-3",children:l.map(f=>t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-lg",children:f.icon}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"text-xs md:text-sm font-medium truncate",children:f.title}),t.jsx("div",{className:"w-full h-1.5 bg-muted rounded-full mt-1",children:t.jsx("div",{className:`h-full rounded-full ${f.score/f.totalMarks>=.8?"bg-green-500":f.score/f.totalMarks>=.6?"bg-yellow-500":"bg-red-500"}`,style:{width:`${f.score/f.totalMarks*100}%`}})})]}),t.jsxs("span",{className:"text-sm font-bold",children:[f.score,"/",f.totalMarks]})]},f.id))})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[t.jsxs("button",{className:"p-3 md:p-4 bg-primary/10 hover:bg-primary/20 rounded-xl text-center transition-colors",children:[t.jsx(Re,{className:"w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 text-primary"}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:"Study Mode"})]}),t.jsxs("button",{className:"p-3 md:p-4 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 rounded-xl text-center transition-colors",children:[t.jsx(W,{className:"w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 text-green-600"}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:"Practice"})]})]})]})]})]})}const xs=[{id:"1",title:"Solar System Explorer",description:"Travel through space and explore planets, moons, and asteroids in stunning 3D!",subject:"Science",thumbnail:"🌌",duration:"15-30 min",difficulty:"beginner",rating:4.9,players:2450,xpReward:200,isNew:!0,isLocked:!1,requiredLevel:1,features:["360° View","Voice Guide","Quiz Mode"]},{id:"2",title:"Ancient India Time Machine",description:"Walk through the streets of Harappa and witness the Indus Valley Civilization!",subject:"History",thumbnail:"🏛️",duration:"20-40 min",difficulty:"intermediate",rating:4.8,players:1890,xpReward:250,isNew:!0,isLocked:!1,requiredLevel:5,features:["Time Travel","Interactive NPCs","Collect Artifacts"]},{id:"3",title:"Human Body Adventure",description:"Shrink down and travel inside the human body to learn about organs and systems!",subject:"Biology",thumbnail:"🫀",duration:"25-45 min",difficulty:"intermediate",rating:4.9,players:3120,xpReward:300,isNew:!1,isLocked:!1,requiredLevel:3,features:["Organ Systems","Blood Flow Ride","Cell Explorer"]},{id:"4",title:"Math Kingdom Quest",description:"Solve puzzles and defeat monsters using math skills in this fantasy adventure!",subject:"Mathematics",thumbnail:"🏰",duration:"30-60 min",difficulty:"beginner",rating:4.7,players:4560,xpReward:350,isNew:!1,isLocked:!1,requiredLevel:1,features:["Boss Battles","Power-ups","Multiplayer"]},{id:"5",title:"Ocean Deep Dive",description:"Explore the mysterious depths of the ocean and discover marine life!",subject:"Marine Biology",thumbnail:"🌊",duration:"20-35 min",difficulty:"beginner",rating:4.8,players:2100,xpReward:225,isNew:!1,isLocked:!1,requiredLevel:2,features:["Underwater Camera","Species Database","Treasure Hunt"]},{id:"6",title:"Chemistry Lab Simulator",description:"Conduct exciting experiments safely in a virtual chemistry laboratory!",subject:"Chemistry",thumbnail:"🧪",duration:"15-25 min",difficulty:"advanced",rating:4.6,players:1560,xpReward:400,isNew:!1,isLocked:!0,requiredLevel:10,features:["Safe Experiments","Element Explorer","Reaction Simulator"]},{id:"7",title:"Dinosaur World",description:"Travel back 65 million years and walk among the dinosaurs!",subject:"Paleontology",thumbnail:"🦕",duration:"25-40 min",difficulty:"beginner",rating:4.9,players:5230,xpReward:275,isNew:!1,isLocked:!1,requiredLevel:1,features:["Dino Identification","Fossil Dig","Size Comparison"]},{id:"8",title:"Space Station Mission",description:"Live as an astronaut on the International Space Station!",subject:"Space Science",thumbnail:"🚀",duration:"30-50 min",difficulty:"advanced",rating:4.7,players:1890,xpReward:450,isNew:!1,isLocked:!0,requiredLevel:15,features:["Zero Gravity","Space Walk","Mission Control"]}];function Ah(){const[s,e]=b.useState(null),[r,n]=b.useState("all"),[a,i]=b.useState(!1),[o,l]=b.useState(!1),c=[{id:"all",label:"All Games",icon:"🎮"},{id:"new",label:"New",icon:"✨"},{id:"Science",label:"Science",icon:"🔬"},{id:"Mathematics",label:"Math",icon:"🔢"},{id:"History",label:"History",icon:"📜"}],u=xs.filter(h=>r==="all"?!0:r==="new"?h.isNew:h.subject===r),p=h=>{switch(h){case"beginner":return"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";case"intermediate":return"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400";case"advanced":return"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"}},d=8;return t.jsxs("div",{className:"space-y-4 md:space-y-6 animate-fade-in",children:[t.jsxs("div",{className:"bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative overflow-hidden",children:[t.jsx("div",{className:"absolute top-0 right-0 opacity-20",children:t.jsx(Ts,{className:"w-32 h-32 md:w-48 md:h-48 -mr-8 -mt-8"})}),t.jsxs("div",{className:"relative",children:[t.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-xl md:text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Ts,{className:"w-6 h-6 md:w-7 md:h-7"}),"VR Learning Games"]}),t.jsx("p",{className:"text-white/80 text-sm md:text-base",children:"Immersive educational experiences"})]}),t.jsxs("div",{className:"flex gap-3 md:gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:xs.length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Games"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:xs.filter(h=>!h.isLocked||h.requiredLevel<=d).length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Unlocked"})]})]})]}),t.jsxs("div",{className:"mt-4 p-3 bg-white/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Oe,{className:"w-5 h-5"}),t.jsx("span",{className:"text-sm font-medium",children:"Works on mobile, tablet & VR headsets!"})]}),t.jsxs("div",{className:"flex gap-2 ml-auto",children:[t.jsx("span",{className:"px-2 py-1 bg-white/30 rounded text-xs",children:"📱 Mobile"}),t.jsx("span",{className:"px-2 py-1 bg-white/30 rounded text-xs",children:"🎮 Gyroscope"}),t.jsx("span",{className:"px-2 py-1 bg-white/30 rounded text-xs",children:"🥽 VR Ready"})]})]})]})]}),!a&&t.jsx("div",{className:"bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-200 dark:border-purple-800",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4 md:gap-6",children:[t.jsx("div",{className:"w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-5xl md:text-6xl shadow-lg",children:"🌌"}),t.jsxs("div",{className:"flex-1 text-center md:text-left",children:[t.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-2 mb-1",children:[t.jsx("span",{className:"px-2 py-0.5 bg-purple-500 text-white text-xs font-medium rounded-full",children:"⭐ Featured"}),t.jsx("span",{className:"px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full",children:"NEW"})]}),t.jsx("h2",{className:"text-lg md:text-xl font-bold mb-1",children:"Solar System Explorer"}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Experience the wonders of our solar system in breathtaking 3D!"}),t.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(P,{className:"w-3.5 h-3.5 text-yellow-500 fill-yellow-500"}),"4.9"]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx($,{className:"w-3.5 h-3.5"}),"2.4K players"]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(E,{className:"w-3.5 h-3.5 text-yellow-500"}),"+200 XP"]})]})]}),t.jsxs("button",{onClick:()=>i(!0),className:"w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors",children:[t.jsx(H,{className:"w-5 h-5",fill:"currentColor"}),"Play Now"]})]})}),a&&t.jsxs("div",{className:"bg-black rounded-xl md:rounded-2xl overflow-hidden relative aspect-video",children:[t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-indigo-900 to-black flex items-center justify-center",children:t.jsxs("div",{className:"text-center text-white",children:[t.jsx("div",{className:"text-6xl md:text-8xl mb-4",children:"🌌"}),t.jsx("h3",{className:"text-xl md:text-2xl font-bold mb-2",children:"Solar System Explorer"}),t.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Loading VR Experience..."}),t.jsx("div",{className:"w-48 h-1 bg-white/20 rounded-full mx-auto overflow-hidden",children:t.jsx("div",{className:"h-full bg-white rounded-full animate-pulse",style:{width:"60%"}})})]})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>i(!1),className:"p-2 bg-white/20 rounded-lg hover:bg-white/30",children:t.jsx(As,{className:"w-5 h-5 text-white"})}),t.jsx("button",{onClick:()=>l(!o),className:"p-2 bg-white/20 rounded-lg hover:bg-white/30",children:o?t.jsx(um,{className:"w-5 h-5 text-white"}):t.jsx(dm,{className:"w-5 h-5 text-white"})})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{className:"p-2 bg-white/20 rounded-lg hover:bg-white/30",children:t.jsx(Qu,{className:"w-5 h-5 text-white"})}),t.jsx("button",{className:"p-2 bg-white/20 rounded-lg hover:bg-white/30",children:t.jsx(em,{className:"w-5 h-5 text-white"})})]})]})})]}),t.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 no-scrollbar",children:c.map(h=>t.jsxs("button",{onClick:()=>n(h.id),className:`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all ${r===h.id?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[t.jsx("span",{children:h.icon}),h.label]},h.id))}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4",children:u.map(h=>{const f=h.isLocked&&h.requiredLevel>d;return t.jsxs("div",{className:`bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden transition-all group ${f?"opacity-60":"hover:shadow-lg cursor-pointer"}`,onClick:()=>!f&&e(h),children:[t.jsxs("div",{className:`h-28 md:h-36 flex items-center justify-center text-5xl md:text-6xl relative ${h.subject==="Science"||h.subject==="Biology"||h.subject==="Marine Biology"?"bg-blue-100 dark:bg-blue-900/30":h.subject==="Mathematics"?"bg-purple-100 dark:bg-purple-900/30":h.subject==="History"?"bg-orange-100 dark:bg-orange-900/30":h.subject==="Chemistry"?"bg-green-100 dark:bg-green-900/30":h.subject==="Paleontology"?"bg-yellow-100 dark:bg-yellow-900/30":"bg-cyan-100 dark:bg-cyan-900/30"}`,children:[h.thumbnail,f&&t.jsx("div",{className:"absolute inset-0 bg-black/50 flex items-center justify-center",children:t.jsxs("div",{className:"text-center text-white",children:[t.jsx(ie,{className:"w-8 h-8 mx-auto mb-1"}),t.jsxs("span",{className:"text-xs",children:["Level ",h.requiredLevel]})]})}),h.isNew&&!f&&t.jsx("span",{className:"absolute top-2 right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full",children:"NEW"}),!f&&t.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all",children:t.jsx(H,{className:"w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity",fill:"currentColor"})})]}),t.jsxs("div",{className:"p-3 md:p-4",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-medium ${p(h.difficulty)}`,children:h.difficulty}),t.jsx("span",{className:"px-2 py-0.5 bg-muted rounded text-xs",children:h.subject})]}),t.jsx("h3",{className:"font-bold text-sm md:text-base mb-1 line-clamp-1",children:h.title}),t.jsx("p",{className:"text-xs text-muted-foreground mb-3 line-clamp-2",children:h.description}),t.jsxs("div",{className:"flex items-center justify-between text-xs text-muted-foreground mb-3",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(P,{className:"w-3 h-3 text-yellow-500 fill-yellow-500"}),h.rating]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(B,{className:"w-3 h-3"}),h.duration]}),t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx($,{className:"w-3 h-3"}),h.players>1e3?`${(h.players/1e3).toFixed(1)}K`:h.players]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-1 text-yellow-600 dark:text-yellow-400",children:[t.jsx(E,{className:"w-4 h-4"}),t.jsxs("span",{className:"text-sm font-bold",children:["+",h.xpReward]})]}),t.jsxs("button",{disabled:f,className:`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium ${f?"bg-muted text-muted-foreground cursor-not-allowed":"bg-primary text-white hover:bg-primary/90"}`,children:[f?t.jsx(ie,{className:"w-3 h-3"}):t.jsx(H,{className:"w-3 h-3"}),f?"Locked":"Play"]})]})]})]},h.id)})}),s&&t.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:()=>e(null),children:t.jsxs("div",{className:"bg-background rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto",onClick:h=>h.stopPropagation(),children:[t.jsx("div",{className:`h-40 flex items-center justify-center text-7xl ${s.subject==="Science"?"bg-blue-100 dark:bg-blue-900/30":"bg-purple-100 dark:bg-purple-900/30"}`,children:s.thumbnail}),t.jsxs("div",{className:"p-6",children:[t.jsx("h2",{className:"text-xl font-bold mb-2",children:s.title}),t.jsx("p",{className:"text-muted-foreground mb-4",children:s.description}),t.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.features.map(h=>t.jsx("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-sm",children:h},h))}),t.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"text-center p-3 bg-muted rounded-xl",children:[t.jsx(P,{className:"w-5 h-5 mx-auto mb-1 text-yellow-500"}),t.jsx("span",{className:"text-lg font-bold",children:s.rating}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Rating"})]}),t.jsxs("div",{className:"text-center p-3 bg-muted rounded-xl",children:[t.jsx($,{className:"w-5 h-5 mx-auto mb-1 text-blue-500"}),t.jsx("span",{className:"text-lg font-bold",children:s.players}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Players"})]}),t.jsxs("div",{className:"text-center p-3 bg-muted rounded-xl",children:[t.jsx(E,{className:"w-5 h-5 mx-auto mb-1 text-yellow-500"}),t.jsxs("span",{className:"text-lg font-bold",children:["+",s.xpReward]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"XP"})]})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:()=>e(null),className:"flex-1 py-3 bg-muted text-foreground rounded-xl font-medium",children:"Cancel"}),t.jsxs("button",{onClick:()=>{e(null),i(!0)},className:"flex-1 py-3 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2",children:[t.jsx(H,{className:"w-5 h-5",fill:"currentColor"}),"Play Now"]})]})]})]})})]})}const vt=[{id:"1",title:"Morning Yoga",description:"Start your day with gentle stretches and breathing exercises",category:"mindfulness",icon:"🧘",duration:"15 min",xpReward:75,healthBenefit:"Improves focus & flexibility",isRecommended:!0},{id:"2",title:"Outdoor Run",description:"Get active with a jog around your neighborhood",category:"sports",icon:"🏃",duration:"20-30 min",xpReward:150,healthBenefit:"Builds stamina & energy"},{id:"3",title:"Nature Walk",description:"Explore local parks and observe plants and animals",category:"nature",icon:"🌳",duration:"30 min",xpReward:100,healthBenefit:"Reduces stress",isRecommended:!0},{id:"4",title:"Drawing Challenge",description:"Express yourself through art - draw anything you like!",category:"creative",icon:"🎨",duration:"20 min",xpReward:80,healthBenefit:"Boosts creativity"},{id:"5",title:"Music Practice",description:"Learn a song or practice an instrument",category:"creative",icon:"🎵",duration:"25 min",xpReward:100,healthBenefit:"Enhances brain function"},{id:"6",title:"Book Club Discussion",description:"Share your favorite book with friends",category:"social",icon:"📚",duration:"30 min",xpReward:120,healthBenefit:"Improves communication",participants:8},{id:"7",title:"Cycling Adventure",description:"Explore your area on two wheels",category:"sports",icon:"🚴",duration:"30-45 min",xpReward:175,healthBenefit:"Strengthens legs & heart"},{id:"8",title:"Meditation Session",description:"Calm your mind with guided meditation",category:"mindfulness",icon:"🧠",duration:"10 min",xpReward:50,healthBenefit:"Improves focus & calm",isRecommended:!0,completedToday:!0},{id:"9",title:"Team Sports",description:"Play cricket, football, or any team sport with friends",category:"sports",icon:"⚽",duration:"45-60 min",xpReward:200,healthBenefit:"Teamwork & fitness",participants:12},{id:"10",title:"Gardening",description:"Plant seeds, water plants, or start a small garden",category:"nature",icon:"🌱",duration:"20 min",xpReward:90,healthBenefit:"Connect with nature"},{id:"11",title:"Dance Break",description:"Dance to your favorite songs and have fun!",category:"creative",icon:"💃",duration:"15 min",xpReward:85,healthBenefit:"Mood booster"},{id:"12",title:"Volunteer Work",description:"Help in your community - clean up, teach, or assist",category:"social",icon:"🤝",duration:"1 hour",xpReward:250,healthBenefit:"Builds empathy & kindness"}],Ph=[{id:1,title:"Complete 1 outdoor activity",progress:0,target:1,xp:50},{id:2,title:"Try something creative",progress:1,target:1,xp:50,completed:!0},{id:3,title:"Exercise for 30 minutes total",progress:15,target:30,xp:75}];function Rh(){const[s,e]=b.useState("all"),[r,n]=b.useState(["8"]),a=[{id:"all",label:"All",icon:"📋",color:"bg-gray-500"},{id:"sports",label:"Sports",icon:"⚽",color:"bg-green-500"},{id:"creative",label:"Creative",icon:"🎨",color:"bg-purple-500"},{id:"nature",label:"Nature",icon:"🌳",color:"bg-emerald-500"},{id:"social",label:"Social",icon:"👥",color:"bg-blue-500"},{id:"mindfulness",label:"Mindful",icon:"🧘",color:"bg-pink-500"}],i=s==="all"?vt:vt.filter(u=>u.category===s),o=vt.filter(u=>u.isRecommended),l=u=>{switch(u){case"sports":return"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";case"creative":return"bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";case"nature":return"bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";case"social":return"bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";case"mindfulness":return"bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"}},c=u=>{r.includes(u)||n([...r,u])};return t.jsxs("div",{className:"space-y-4 md:space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-xl md:text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(La,{className:"w-6 h-6 md:w-7 md:h-7"}),"Activities"]}),t.jsx("p",{className:"text-white/80 text-sm md:text-base",children:"Stay active, healthy & happy!"})]}),t.jsxs("div",{className:"flex gap-4 md:gap-6",children:[t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:r.length}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"Today"})]}),t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"text-xl md:text-2xl font-bold",children:r.reduce((u,p)=>{const d=vt.find(h=>h.id===p);return u+(d?.xpReward||0)},0)}),t.jsx("div",{className:"text-white/80 text-xs md:text-sm",children:"XP Earned"})]})]})]})}),t.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-200 dark:border-yellow-800",children:[t.jsxs("h2",{className:"font-bold text-base md:text-lg mb-3 flex items-center gap-2",children:[t.jsx(qe,{className:"w-5 h-5 text-orange-500"}),"Daily Activity Goals"]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:Ph.map(u=>t.jsxs("div",{className:`p-3 rounded-xl border ${u.completed?"bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800":"bg-white dark:bg-gray-800 border-transparent"}`,children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("span",{className:"text-xs md:text-sm font-medium",children:u.title}),u.completed&&t.jsx(Oe,{className:"w-4 h-4 text-green-500"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"flex-1 h-2 bg-muted-foreground/20 rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full rounded-full ${u.completed?"bg-green-500":"bg-orange-500"}`,style:{width:`${Math.min(u.progress/u.target*100,100)}%`}})}),t.jsxs("span",{className:"text-xs text-muted-foreground",children:["+",u.xp," XP"]})]})]},u.id))})]}),t.jsxs("div",{children:[t.jsxs("h2",{className:"font-bold text-base md:text-lg mb-3 flex items-center gap-2",children:[t.jsx(P,{className:"w-5 h-5 text-yellow-500"}),"Recommended for You"]}),t.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 no-scrollbar",children:o.map(u=>t.jsxs("div",{className:`flex-shrink-0 w-64 md:w-72 bg-card border rounded-xl md:rounded-2xl p-4 transition-all hover:shadow-lg ${r.includes(u.id)?"border-green-300 dark:border-green-700":"border-border"}`,children:[t.jsxs("div",{className:"flex items-start gap-3",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl",children:u.icon}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("h3",{className:"font-bold text-sm truncate",children:u.title}),r.includes(u.id)&&t.jsx("span",{className:"text-green-500",children:"✓"})]}),t.jsx("p",{className:"text-xs text-muted-foreground line-clamp-2",children:u.description})]})]}),t.jsxs("div",{className:"flex items-center justify-between mt-3",children:[t.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[t.jsx(B,{className:"w-3 h-3"}),u.duration]}),t.jsx("button",{onClick:()=>c(u.id),disabled:r.includes(u.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium ${r.includes(u.id)?"bg-green-100 text-green-600":"bg-primary text-white"}`,children:r.includes(u.id)?"Done!":`+${u.xpReward} XP`})]})]},u.id))})]}),t.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 no-scrollbar",children:a.map(u=>t.jsxs("button",{onClick:()=>e(u.id),className:`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all ${s===u.id?"bg-primary text-white":"bg-muted text-muted-foreground hover:bg-muted/80"}`,children:[t.jsx("span",{children:u.icon}),u.label]},u.id))}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:i.map(u=>t.jsxs("div",{className:`bg-card border rounded-xl md:rounded-2xl p-4 transition-all hover:shadow-lg ${r.includes(u.id)?"border-green-300 dark:border-green-700":"border-border"}`,children:[t.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[t.jsx("div",{className:"w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted flex items-center justify-center text-2xl md:text-3xl",children:u.icon}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-medium ${l(u.category)}`,children:u.category}),r.includes(u.id)&&t.jsx("span",{className:"px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs",children:"✓ Done"})]}),t.jsx("h3",{className:"font-bold text-sm md:text-base",children:u.title})]})]}),t.jsx("p",{className:"text-xs md:text-sm text-muted-foreground mb-3",children:u.description}),t.jsxs("div",{className:"flex items-center gap-2 mb-3 text-xs",children:[t.jsxs("span",{className:"flex items-center gap-1 px-2 py-1 bg-muted rounded",children:[t.jsx(B,{className:"w-3 h-3"}),u.duration]}),t.jsxs("span",{className:"flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded",children:[t.jsx(Jt,{className:"w-3 h-3"}),u.healthBenefit]})]}),u.participants&&t.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground mb-3",children:[t.jsx($,{className:"w-3 h-3"}),u.participants," others doing this"]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-1 text-yellow-600 dark:text-yellow-400",children:[t.jsx(P,{className:"w-4 h-4"}),t.jsxs("span",{className:"text-sm font-bold",children:["+",u.xpReward," XP"]})]}),t.jsx("button",{onClick:()=>c(u.id),disabled:r.includes(u.id),className:`flex items-center gap-1 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${r.includes(u.id)?"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 cursor-default":"bg-primary text-white hover:bg-primary/90"}`,children:r.includes(u.id)?t.jsx(t.Fragment,{children:"Completed!"}):t.jsxs(t.Fragment,{children:[t.jsx(H,{className:"w-3.5 h-3.5"}),"Start"]})})]})]},u.id))}),t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6",children:[t.jsxs("h2",{className:"font-bold text-base md:text-lg mb-4 flex items-center gap-2",children:[t.jsx(we,{className:"w-5 h-5 text-orange-500"}),"This Week's Activity"]}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",children:[t.jsxs("div",{className:"p-3 md:p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-2xl md:text-3xl font-bold text-primary",children:"12"}),t.jsx("div",{className:"text-xs md:text-sm text-muted-foreground",children:"Activities"})]}),t.jsxs("div",{className:"p-3 md:p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-2xl md:text-3xl font-bold text-green-600",children:"3h 45m"}),t.jsx("div",{className:"text-xs md:text-sm text-muted-foreground",children:"Active Time"})]}),t.jsxs("div",{className:"p-3 md:p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-2xl md:text-3xl font-bold text-yellow-600",children:"1,250"}),t.jsx("div",{className:"text-xs md:text-sm text-muted-foreground",children:"XP Earned"})]}),t.jsxs("div",{className:"p-3 md:p-4 bg-muted rounded-xl text-center",children:[t.jsx("div",{className:"text-2xl md:text-3xl font-bold text-purple-600",children:"5"}),t.jsx("div",{className:"text-xs md:text-sm text-muted-foreground",children:"Day Streak"})]})]})]})]})}const gs=[{id:"great",emoji:"😄",label:"Great!",color:"bg-green-500",lightColor:"bg-green-100 text-green-600"},{id:"good",emoji:"🙂",label:"Good",color:"bg-blue-500",lightColor:"bg-blue-100 text-blue-600"},{id:"okay",emoji:"😐",label:"Okay",color:"bg-yellow-500",lightColor:"bg-yellow-100 text-yellow-600"},{id:"sad",emoji:"😔",label:"Sad",color:"bg-orange-500",lightColor:"bg-orange-100 text-orange-600"},{id:"stressed",emoji:"😰",label:"Stressed",color:"bg-red-500",lightColor:"bg-red-100 text-red-600"}],X=[{id:"1",mood:"good",timestamp:"Today, 9:00 AM",date:"Today"},{id:"2",mood:"great",timestamp:"Yesterday, 8:30 AM",date:"Yesterday"},{id:"3",mood:"okay",timestamp:"Jan 15, 10:00 AM",date:"Jan 15"},{id:"4",mood:"good",timestamp:"Jan 14, 9:15 AM",date:"Jan 14"},{id:"5",mood:"great",timestamp:"Jan 13, 8:45 AM",date:"Jan 13"},{id:"6",mood:"sad",timestamp:"Jan 12, 11:00 AM",date:"Jan 12"},{id:"7",mood:"good",timestamp:"Jan 11, 9:30 AM",date:"Jan 11"}],Mh=[{id:"1",category:"Focus",title:"Take a 5-minute break",description:"Step away from your screen and look at something far away",icon:"👀"},{id:"2",category:"Energy",title:"Stretch your body",description:"Do some simple stretches to refresh your mind",icon:"🤸"},{id:"3",category:"Calm",title:"Deep breathing",description:"Take 5 deep breaths - inhale for 4, hold for 4, exhale for 4",icon:"🌬️"},{id:"4",category:"Social",title:"Talk to a friend",description:"Share how you feel with someone you trust",icon:"💬"},{id:"5",category:"Joy",title:"Listen to music",description:"Play your favorite uplifting song",icon:"🎵"},{id:"6",category:"Gratitude",title:"Write 3 good things",description:"List three things that made you smile today",icon:"📝"}],bs=[{quote:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{quote:"Every expert was once a beginner.",author:"Helen Hayes"},{quote:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{quote:"Success is not final, failure is not fatal.",author:"Winston Churchill"},{quote:"You are braver than you believe.",author:"A.A. Milne"}],Dh={great:["Share your happiness with friends!","Try a challenging lesson","Help someone else learn"],good:["Keep up the good work!","Try a new activity","Set a new goal"],okay:["Take a short break","Do something you enjoy","Talk to a friend"],sad:["It's okay to feel this way","Try some gentle exercise","Listen to calming music"],stressed:["Take deep breaths","Break tasks into smaller steps","Ask for help if needed"]};function Lh(){const[s,e]=b.useState(null),[r,n]=b.useState(""),[a,i]=b.useState(!0),[o,l]=b.useState(0),[c,u]=b.useState(X[0]);b.useEffect(()=>{const m=setInterval(()=>{l(x=>(x+1)%bs.length)},1e4);return()=>clearInterval(m)},[]);const p=m=>{e(m),i(!1)},d=()=>{s&&(u({id:Date.now().toString(),mood:s,note:r,timestamp:"Just now",date:"Today"}),n(""),e(null))},h=m=>gs.find(x=>x.id===m),f=X.slice(0,7).map(m=>{const x=h(m.mood);return{...m,...x}}),w={great:X.filter(m=>m.mood==="great").length,good:X.filter(m=>m.mood==="good").length,okay:X.filter(m=>m.mood==="okay").length,sad:X.filter(m=>m.mood==="sad").length,stressed:X.filter(m=>m.mood==="stressed").length};return t.jsxs("div",{className:"space-y-4 md:space-y-6 animate-fade-in",children:[t.jsx("div",{className:"bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white",children:t.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-xl md:text-2xl font-bold mb-1 flex items-center gap-2",children:[t.jsx(Jt,{className:"w-6 h-6 md:w-7 md:h-7"}),"How are you feeling?"]}),t.jsx("p",{className:"text-white/80 text-sm md:text-base",children:"Your emotions matter - track and understand them"})]}),c&&t.jsxs("div",{className:"flex items-center gap-3 bg-white/20 px-4 py-2 rounded-xl",children:[t.jsx("span",{className:"text-2xl",children:h(c.mood)?.emoji}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-white/80",children:"Today's mood"}),t.jsx("p",{className:"font-medium",children:h(c.mood)?.label})]})]})]})}),a&&t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6",children:[t.jsx("h2",{className:"text-base md:text-lg font-bold mb-4 text-center",children:"How are you feeling right now?"}),t.jsx("div",{className:"flex flex-wrap justify-center gap-3 md:gap-4",children:gs.map(m=>t.jsxs("button",{onClick:()=>p(m.id),className:`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl transition-all hover:scale-110 ${s===m.id?`${m.color} text-white shadow-lg`:"bg-muted hover:bg-muted/80"}`,children:[t.jsx("span",{className:"text-3xl md:text-4xl",children:m.emoji}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:m.label})]},m.id))})]}),s&&!a&&t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6",children:[t.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[t.jsx("div",{className:`p-4 rounded-xl ${h(s)?.color}`,children:t.jsx("span",{className:"text-4xl",children:h(s)?.emoji})}),t.jsxs("div",{children:[t.jsxs("h3",{className:"font-bold text-lg",children:["You're feeling ",h(s)?.label.toLowerCase()]}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Would you like to add a note?"})]})]}),t.jsx("textarea",{value:r,onChange:m=>n(m.target.value),placeholder:"What's on your mind? (optional)",className:"w-full p-3 bg-muted border-none rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary",rows:3}),t.jsxs("div",{className:"mt-4",children:[t.jsx("h4",{className:"font-medium text-sm mb-2",children:"💡 Suggestions for you:"}),t.jsx("div",{className:"flex flex-wrap gap-2",children:Dh[s].map((m,x)=>t.jsx("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-xs",children:m},x))})]}),t.jsxs("div",{className:"flex gap-3 mt-4",children:[t.jsx("button",{onClick:()=>i(!0),className:"flex-1 py-2.5 bg-muted text-foreground rounded-xl font-medium text-sm",children:"Change"}),t.jsx("button",{onClick:d,className:"flex-1 py-2.5 bg-primary text-white rounded-xl font-medium text-sm",children:"Save Mood"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6",children:[t.jsxs("div",{className:"lg:col-span-2 space-y-4 md:space-y-6",children:[t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5",children:[t.jsxs("h3",{className:"font-bold text-base mb-4 flex items-center gap-2",children:[t.jsx(dr,{className:"w-5 h-5 text-primary"}),"This Week's Mood"]}),t.jsx("div",{className:"flex items-end justify-between gap-2 h-32",children:f.reverse().map((m,x)=>t.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[t.jsx("div",{className:`w-full rounded-t-lg ${m.color} transition-all`,style:{height:m.mood==="great"?"100%":m.mood==="good"?"80%":m.mood==="okay"?"60%":m.mood==="sad"?"40%":"30%"}}),t.jsx("span",{className:"text-lg",children:m.emoji}),t.jsx("span",{className:"text-xs text-muted-foreground",children:m.date?.split(" ")[0]||"Day"})]},x))})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5",children:[t.jsxs("h3",{className:"font-bold text-base mb-4 flex items-center gap-2",children:[t.jsx(Me,{className:"w-5 h-5 text-primary"}),"Recent Entries"]}),t.jsx("div",{className:"space-y-3",children:X.slice(0,5).map(m=>{const x=h(m.mood);return t.jsxs("div",{className:"flex items-center gap-3 p-3 bg-muted rounded-xl",children:[t.jsx("span",{className:"text-2xl",children:x?.emoji}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"font-medium text-sm",children:x?.label}),t.jsx("p",{className:"text-xs text-muted-foreground",children:m.timestamp})]}),t.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-medium ${x?.lightColor}`,children:m.date})]},m.id)})})]})]}),t.jsxs("div",{className:"space-y-4 md:space-y-6",children:[t.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-200 dark:border-yellow-800",children:[t.jsxs("div",{className:"flex items-start gap-2 mb-3",children:[t.jsx(am,{className:"w-5 h-5 text-yellow-600"}),t.jsx("span",{className:"font-bold text-sm",children:"Daily Inspiration"})]}),t.jsxs("p",{className:"text-sm italic mb-2",children:['"',bs[o].quote,'"']}),t.jsxs("p",{className:"text-xs text-muted-foreground",children:["— ",bs[o].author]})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5",children:[t.jsxs("h3",{className:"font-bold text-sm mb-3 flex items-center gap-2",children:[t.jsx(Oe,{className:"w-4 h-4 text-primary"}),"Mood Summary"]}),t.jsx("div",{className:"space-y-2",children:gs.map(m=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-lg",children:m.emoji}),t.jsx("div",{className:"flex-1 h-2 bg-muted rounded-full overflow-hidden",children:t.jsx("div",{className:`h-full ${m.color}`,style:{width:`${w[m.id]/X.length*100}%`}})}),t.jsx("span",{className:"text-xs text-muted-foreground w-4",children:w[m.id]})]},m.id))})]}),t.jsxs("div",{className:"bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5",children:[t.jsxs("h3",{className:"font-bold text-sm mb-3 flex items-center gap-2",children:[t.jsx(Ua,{className:"w-4 h-4 text-yellow-500"}),"Wellness Tips"]}),t.jsx("div",{className:"space-y-2",children:Mh.slice(0,4).map(m=>t.jsxs("button",{className:"w-full flex items-start gap-2 p-2 bg-muted rounded-lg text-left hover:bg-muted/80 transition-colors",children:[t.jsx("span",{className:"text-lg",children:m.icon}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs font-medium",children:m.title}),t.jsx("p",{className:"text-xs text-muted-foreground line-clamp-1",children:m.description})]})]},m.id))})]}),t.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl md:rounded-2xl p-4 border border-blue-200 dark:border-blue-800",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:"p-2 bg-blue-500 rounded-lg text-white",children:t.jsx(lr,{className:"w-5 h-5"})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold text-sm",children:"Need to talk?"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Connect with a counselor"})]})]}),t.jsx("button",{className:"w-full py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600",children:"Chat Now"})]})]})]}),t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[t.jsxs("button",{className:"p-4 bg-green-100 dark:bg-green-900/30 rounded-xl text-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors",children:[t.jsx(pm,{className:"w-6 h-6 mx-auto mb-2 text-green-600"}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:"Breathing"})]}),t.jsxs("button",{className:"p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-center hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors",children:[t.jsx(nm,{className:"w-6 h-6 mx-auto mb-2 text-purple-600"}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:"Calm Music"})]}),t.jsxs("button",{className:"p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors",children:[t.jsx(Re,{className:"w-6 h-6 mx-auto mb-2 text-blue-600"}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:"Journal"})]}),t.jsxs("button",{className:"p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-center hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors",children:[t.jsx($,{className:"w-6 h-6 mx-auto mb-2 text-orange-600"}),t.jsx("span",{className:"text-xs md:text-sm font-medium",children:"Friends"})]})]})]})}function Oh(){const s=Ls(),[e,r]=b.useState(""),[n,a]=b.useState(""),[i,o]=b.useState(!1),[l,c]=b.useState(""),[u,p]=b.useState(!1),[d,h]=b.useState(!1),f=async m=>{m.preventDefault(),c(""),p(!0);const{user:x,error:g}=await Ou(e,n);g?(c(g),p(!1)):x&&s("/dashboard")},w=async()=>{c(""),h(!0);const{user:m,error:x}=await Ma();x?(c(x),h(!1)):m&&s("/dashboard")};return t.jsxs("div",{className:"min-h-screen flex bg-gradient-to-br from-primary/5 via-background to-purple-500/5",children:[t.jsxs("div",{className:"hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-purple-600 p-12 flex-col justify-between text-white",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[t.jsx("div",{className:"p-3 bg-white/20 rounded-xl",children:t.jsx(E,{size:32,fill:"currentColor"})}),t.jsx("h1",{className:"text-3xl font-bold",children:"P.E.E.R"})]}),t.jsxs("h2",{className:"text-4xl font-bold mb-4 leading-tight",children:["Personalized Education for",t.jsx("br",{}),"Every Rural student"]}),t.jsx("p",{className:"text-white/80 text-lg",children:"AI-powered offline learning platform designed for rural students"})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm",children:[t.jsx("div",{className:"p-3 bg-white/20 rounded-lg",children:t.jsx(Re,{size:24})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold",children:"Personalized Learning"}),t.jsx("p",{className:"text-sm text-white/70",children:"AI adapts to your learning style"})]})]}),t.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm",children:[t.jsx("div",{className:"p-3 bg-white/20 rounded-lg",children:t.jsx(ve,{size:24})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold",children:"Gamified Experience"}),t.jsx("p",{className:"text-sm text-white/70",children:"Learn while having fun"})]})]}),t.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm",children:[t.jsx("div",{className:"p-3 bg-white/20 rounded-lg",children:t.jsx($,{size:24})}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-semibold",children:"Community Learning"}),t.jsx("p",{className:"text-sm text-white/70",children:"Connect with peers worldwide"})]})]})]}),t.jsx("p",{className:"text-white/60 text-sm",children:"© 2024 P.E.E.R • Empowering Rural Education"})]}),t.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12",children:t.jsxs("div",{className:"w-full max-w-md",children:[t.jsxs("div",{className:"lg:hidden flex items-center justify-center gap-3 mb-8",children:[t.jsx("div",{className:"p-3 bg-primary/10 rounded-xl text-primary",children:t.jsx(E,{size:32,fill:"currentColor"})}),t.jsx("h1",{className:"text-2xl font-bold",children:"P.E.E.R"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Welcome back!"}),t.jsx("p",{className:"text-muted-foreground",children:"Sign in to continue learning"})]}),l&&t.jsxs("div",{className:"mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400 text-sm",children:[t.jsx(Gt,{size:18}),l]}),t.jsxs("button",{onClick:w,disabled:d,className:"w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-muted border border-border rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-muted/80 transition-colors disabled:opacity-50",children:[d?t.jsx(De,{size:20,className:"animate-spin"}):t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),t.jsxs("div",{className:"flex items-center gap-4 my-6",children:[t.jsx("div",{className:"flex-1 h-px bg-border"}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"or"}),t.jsx("div",{className:"flex-1 h-px bg-border"})]}),t.jsxs("form",{onSubmit:f,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email"}),t.jsxs("div",{className:"relative",children:[t.jsx(or,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:"email",value:e,onChange:m=>r(m.target.value),placeholder:"Enter your email",className:"w-full pl-10 pr-4 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(ie,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:i?"text":"password",value:n,onChange:m=>a(m.target.value),placeholder:"Enter your password",className:"w-full pl-10 pr-12 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),t.jsx("button",{type:"button",onClick:()=>o(!i),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:i?t.jsx(Oa,{size:18}):t.jsx(za,{size:18})})]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[t.jsx("input",{type:"checkbox",className:"w-4 h-4 rounded border-border"}),"Remember me"]}),t.jsx(O,{to:"/forgot-password",className:"text-sm text-primary hover:underline",children:"Forgot password?"})]}),t.jsx("button",{type:"submit",disabled:u,className:"w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",children:u?t.jsx(De,{size:20,className:"animate-spin"}):t.jsxs(t.Fragment,{children:["Sign In",t.jsx(ir,{size:18})]})})]}),t.jsxs("p",{className:"text-center text-sm text-muted-foreground mt-6",children:["Don't have an account?"," ",t.jsx(O,{to:"/signup",className:"text-primary font-medium hover:underline",children:"Sign up for free"})]})]}),t.jsxs("div",{className:"lg:hidden mt-8 grid grid-cols-3 gap-3",children:[t.jsxs("div",{className:"text-center p-3 bg-card border border-border rounded-xl",children:[t.jsx(Oe,{size:24,className:"mx-auto mb-2 text-primary"}),t.jsx("span",{className:"text-xs font-medium",children:"AI Learning"})]}),t.jsxs("div",{className:"text-center p-3 bg-card border border-border rounded-xl",children:[t.jsx(ve,{size:24,className:"mx-auto mb-2 text-yellow-500"}),t.jsx("span",{className:"text-xs font-medium",children:"Gamified"})]}),t.jsxs("div",{className:"text-center p-3 bg-card border border-border rounded-xl",children:[t.jsx($,{size:24,className:"mx-auto mb-2 text-blue-500"}),t.jsx("span",{className:"text-xs font-medium",children:"Community"})]})]})]})})]})}function zh(){const s=Ls(),[e,r]=b.useState({name:"",email:"",password:"",confirmPassword:""}),[n,a]=b.useState(!1),[i,o]=b.useState(""),[l,c]=b.useState(!1),[u,p]=b.useState(!1),[d,h]=b.useState(!1),f=[{label:"At least 6 characters",met:e.password.length>=6},{label:"Contains a number",met:/\d/.test(e.password)},{label:"Passwords match",met:e.password===e.confirmPassword&&e.confirmPassword!==""}],w=g=>{r(v=>({...v,[g.target.name]:g.target.value}))},m=async g=>{if(g.preventDefault(),o(""),e.password!==e.confirmPassword){o("Passwords do not match");return}if(e.password.length<6){o("Password must be at least 6 characters");return}if(!d){o("Please agree to the Terms of Service");return}c(!0);const{user:v,error:k}=await zu(e.email,e.password,e.name);k?(o(k),c(!1)):v&&s("/dashboard")},x=async()=>{o(""),p(!0);const{user:g,error:v}=await Ma();v?(o(v),p(!1)):g&&s("/dashboard")};return t.jsxs("div",{className:"min-h-screen flex bg-gradient-to-br from-primary/5 via-background to-purple-500/5",children:[t.jsxs("div",{className:"hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-primary p-12 flex-col justify-between text-white",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[t.jsx("div",{className:"p-3 bg-white/20 rounded-xl",children:t.jsx(E,{size:32,fill:"currentColor"})}),t.jsx("h1",{className:"text-3xl font-bold",children:"P.E.E.R"})]}),t.jsxs("h2",{className:"text-4xl font-bold mb-4 leading-tight",children:["Start your learning",t.jsx("br",{}),"journey today"]}),t.jsx("p",{className:"text-white/80 text-lg",children:"Join thousands of students learning with AI-powered education"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(W,{size:20,className:"text-green-300"}),t.jsx("span",{children:"100% Free to get started"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(W,{size:20,className:"text-green-300"}),t.jsx("span",{children:"Works offline - perfect for rural areas"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(W,{size:20,className:"text-green-300"}),t.jsx("span",{children:"Personalized AI tutoring"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(W,{size:20,className:"text-green-300"}),t.jsx("span",{children:"Earn rewards while learning"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(W,{size:20,className:"text-green-300"}),t.jsx("span",{children:"Connect with a learning community"})]})]}),t.jsx("p",{className:"text-white/60 text-sm",children:"© 2024 P.E.E.R • Empowering Rural Education"})]}),t.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 overflow-y-auto",children:t.jsxs("div",{className:"w-full max-w-md",children:[t.jsxs("div",{className:"lg:hidden flex items-center justify-center gap-3 mb-6",children:[t.jsx("div",{className:"p-3 bg-primary/10 rounded-xl text-primary",children:t.jsx(E,{size:32,fill:"currentColor"})}),t.jsx("h1",{className:"text-2xl font-bold",children:"P.E.E.R"})]}),t.jsxs("div",{className:"bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Create an account"}),t.jsx("p",{className:"text-muted-foreground",children:"Join P.E.E.R and start learning"})]}),i&&t.jsxs("div",{className:"mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400 text-sm",children:[t.jsx(Gt,{size:18}),i]}),t.jsxs("button",{onClick:x,disabled:u,className:"w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-muted border border-border rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-muted/80 transition-colors disabled:opacity-50",children:[u?t.jsx(De,{size:20,className:"animate-spin"}):t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign up with Google"]}),t.jsxs("div",{className:"flex items-center gap-4 my-6",children:[t.jsx("div",{className:"flex-1 h-px bg-border"}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"or"}),t.jsx("div",{className:"flex-1 h-px bg-border"})]}),t.jsxs("form",{onSubmit:m,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Full Name"}),t.jsxs("div",{className:"relative",children:[t.jsx(ze,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:"text",name:"name",value:e.name,onChange:w,placeholder:"Enter your name",className:"w-full pl-10 pr-4 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email"}),t.jsxs("div",{className:"relative",children:[t.jsx(or,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:"email",name:"email",value:e.email,onChange:w,placeholder:"Enter your email",className:"w-full pl-10 pr-4 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(ie,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:n?"text":"password",name:"password",value:e.password,onChange:w,placeholder:"Create a password",className:"w-full pl-10 pr-12 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),t.jsx("button",{type:"button",onClick:()=>a(!n),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",children:n?t.jsx(Oa,{size:18}):t.jsx(za,{size:18})})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Confirm Password"}),t.jsxs("div",{className:"relative",children:[t.jsx(ie,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:n?"text":"password",name:"confirmPassword",value:e.confirmPassword,onChange:w,placeholder:"Confirm your password",className:"w-full pl-10 pr-4 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]})]}),e.password&&t.jsx("div",{className:"p-3 bg-muted rounded-xl space-y-2",children:f.map((g,v)=>t.jsxs("div",{className:`flex items-center gap-2 text-xs ${g.met?"text-green-600":"text-muted-foreground"}`,children:[t.jsx(W,{size:14,className:g.met?"text-green-500":"text-muted-foreground/50"}),g.label]},v))}),t.jsxs("label",{className:"flex items-start gap-2 text-sm",children:[t.jsx("input",{type:"checkbox",checked:d,onChange:g=>h(g.target.checked),className:"w-4 h-4 mt-0.5 rounded border-border"}),t.jsxs("span",{className:"text-muted-foreground",children:["I agree to the"," ",t.jsx(O,{to:"/terms",className:"text-primary hover:underline",children:"Terms of Service"})," ","and"," ",t.jsx(O,{to:"/privacy",className:"text-primary hover:underline",children:"Privacy Policy"})]})]}),t.jsx("button",{type:"submit",disabled:l,className:"w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",children:l?t.jsx(De,{size:20,className:"animate-spin"}):t.jsxs(t.Fragment,{children:["Create Account",t.jsx(ir,{size:18})]})})]}),t.jsxs("p",{className:"text-center text-sm text-muted-foreground mt-6",children:["Already have an account?"," ",t.jsx(O,{to:"/login",className:"text-primary font-medium hover:underline",children:"Sign in"})]})]})]})})]})}function Fh(){const[s,e]=b.useState(""),[r,n]=b.useState(""),[a,i]=b.useState(!1),[o,l]=b.useState(!1),c=async u=>{u.preventDefault(),n(""),i(!0);const{error:p}=await Uu(s);p?(n(p),i(!1)):(l(!0),i(!1))};return t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-purple-500/5 p-6",children:t.jsxs("div",{className:"w-full max-w-md",children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-8",children:[t.jsx("div",{className:"p-3 bg-primary/10 rounded-xl text-primary",children:t.jsx(E,{size:32,fill:"currentColor"})}),t.jsx("h1",{className:"text-2xl font-bold",children:"P.E.E.R"})]}),t.jsx("div",{className:"bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl",children:o?t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4",children:t.jsx(W,{size:32,className:"text-green-600"})}),t.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Check your email"}),t.jsxs("p",{className:"text-muted-foreground mb-6",children:["We've sent a password reset link to",t.jsx("br",{}),t.jsx("span",{className:"font-medium text-foreground",children:s})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Didn't receive the email? Check your spam folder or try again."}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:()=>l(!1),className:"w-full py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors",children:"Try different email"}),t.jsx(O,{to:"/login",className:"block w-full py-3 bg-primary text-white rounded-xl font-medium text-center hover:bg-primary/90 transition-colors",children:"Back to Sign In"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(O,{to:"/login",className:"inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6",children:[t.jsx(Hu,{size:16}),"Back to sign in"]}),t.jsxs("div",{className:"mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Forgot password?"}),t.jsx("p",{className:"text-muted-foreground",children:"No worries! Enter your email and we'll send you a reset link."})]}),r&&t.jsxs("div",{className:"mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400 text-sm",children:[t.jsx(Gt,{size:18}),r]}),t.jsxs("form",{onSubmit:c,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email"}),t.jsxs("div",{className:"relative",children:[t.jsx(or,{size:18,className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),t.jsx("input",{type:"email",value:s,onChange:u=>e(u.target.value),placeholder:"Enter your email",className:"w-full pl-10 pr-4 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary",required:!0})]})]}),t.jsx("button",{type:"submit",disabled:a,className:"w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",children:a?t.jsx(De,{size:20,className:"animate-spin"}):"Send Reset Link"})]})]})}),t.jsxs("p",{className:"text-center text-sm text-muted-foreground mt-6",children:["Remember your password?"," ",t.jsx(O,{to:"/login",className:"text-primary font-medium hover:underline",children:"Sign in"})]})]})})}function Ha(s){var e,r,n="";if(typeof s=="string"||typeof s=="number")n+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(r=Ha(s[e]))&&(n&&(n+=" "),n+=r)}else for(r in s)s[r]&&(n&&(n+=" "),n+=r);return n}function Uh(){for(var s,e,r=0,n="",a=arguments.length;r<a;r++)(s=arguments[r])&&(e=Ha(s))&&(n&&(n+=" "),n+=e);return n}const hr="-",$h=s=>{const e=Wh(s),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=s;return{getClassGroupId:o=>{const l=o.split(hr);return l[0]===""&&l.length!==1&&l.shift(),qa(l,e)||Bh(o)},getConflictingClassGroupIds:(o,l)=>{const c=r[o]||[];return l&&n[o]?[...c,...n[o]]:c}}},qa=(s,e)=>{if(s.length===0)return e.classGroupId;const r=s[0],n=e.nextPart.get(r),a=n?qa(s.slice(1),n):void 0;if(a)return a;if(e.validators.length===0)return;const i=s.join(hr);return e.validators.find(({validator:o})=>o(i))?.classGroupId},pn=/^\[(.+)\]$/,Bh=s=>{if(pn.test(s)){const e=pn.exec(s)[1],r=e?.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},Wh=s=>{const{theme:e,prefix:r}=s,n={nextPart:new Map,validators:[]};return qh(Object.entries(s.classGroups),r).forEach(([i,o])=>{Rs(o,n,i,e)}),n},Rs=(s,e,r,n)=>{s.forEach(a=>{if(typeof a=="string"){const i=a===""?e:fn(e,a);i.classGroupId=r;return}if(typeof a=="function"){if(Hh(a)){Rs(a(n),e,r,n);return}e.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([i,o])=>{Rs(o,fn(e,i),r,n)})})},fn=(s,e)=>{let r=s;return e.split(hr).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},Hh=s=>s.isThemeGetter,qh=(s,e)=>e?s.map(([r,n])=>{const a=n.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[e+o,l])):i);return[r,a]}):s,Vh=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,n=new Map;const a=(i,o)=>{r.set(i,o),e++,e>s&&(e=0,n=r,r=new Map)};return{get(i){let o=r.get(i);if(o!==void 0)return o;if((o=n.get(i))!==void 0)return a(i,o),o},set(i,o){r.has(i)?r.set(i,o):a(i,o)}}},Va="!",Gh=s=>{const{separator:e,experimentalParseClassName:r}=s,n=e.length===1,a=e[0],i=e.length,o=l=>{const c=[];let u=0,p=0,d;for(let x=0;x<l.length;x++){let g=l[x];if(u===0){if(g===a&&(n||l.slice(x,x+i)===e)){c.push(l.slice(p,x)),p=x+i;continue}if(g==="/"){d=x;continue}}g==="["?u++:g==="]"&&u--}const h=c.length===0?l:l.substring(p),f=h.startsWith(Va),w=f?h.substring(1):h,m=d&&d>p?d-p:void 0;return{modifiers:c,hasImportantModifier:f,baseClassName:w,maybePostfixModifierPosition:m}};return r?l=>r({className:l,parseClassName:o}):o},Kh=s=>{if(s.length<=1)return s;const e=[];let r=[];return s.forEach(n=>{n[0]==="["?(e.push(...r.sort(),n),r=[]):r.push(n)}),e.push(...r.sort()),e},Jh=s=>({cache:Vh(s.cacheSize),parseClassName:Gh(s),...$h(s)}),Yh=/\s+/,Xh=(s,e)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a}=e,i=[],o=s.trim().split(Yh);let l="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{modifiers:p,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:f}=r(u);let w=!!f,m=n(w?h.substring(0,f):h);if(!m){if(!w){l=u+(l.length>0?" "+l:l);continue}if(m=n(h),!m){l=u+(l.length>0?" "+l:l);continue}w=!1}const x=Kh(p).join(":"),g=d?x+Va:x,v=g+m;if(i.includes(v))continue;i.push(v);const k=a(m,w);for(let T=0;T<k.length;++T){const Ne=k[T];i.push(g+Ne)}l=u+(l.length>0?" "+l:l)}return l};function Qh(){let s=0,e,r,n="";for(;s<arguments.length;)(e=arguments[s++])&&(r=Ga(e))&&(n&&(n+=" "),n+=r);return n}const Ga=s=>{if(typeof s=="string")return s;let e,r="";for(let n=0;n<s.length;n++)s[n]&&(e=Ga(s[n]))&&(r&&(r+=" "),r+=e);return r};function Zh(s,...e){let r,n,a,i=o;function o(c){const u=e.reduce((p,d)=>d(p),s());return r=Jh(u),n=r.cache.get,a=r.cache.set,i=l,l(c)}function l(c){const u=n(c);if(u)return u;const p=Xh(c,r);return a(c,p),p}return function(){return i(Qh.apply(null,arguments))}}const S=s=>{const e=r=>r[s]||[];return e.isThemeGetter=!0,e},Ka=/^\[(?:([a-z-]+):)?(.+)\]$/i,ep=/^\d+\/\d+$/,tp=new Set(["px","full","screen"]),sp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,np=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ap=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ip=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Q=s=>We(s)||tp.has(s)||ep.test(s),ue=s=>Je(s,"length",pp),We=s=>!!s&&!Number.isNaN(Number(s)),ys=s=>Je(s,"number",We),Ze=s=>!!s&&Number.isInteger(Number(s)),op=s=>s.endsWith("%")&&We(s.slice(0,-1)),N=s=>Ka.test(s),me=s=>sp.test(s),lp=new Set(["length","size","percentage"]),cp=s=>Je(s,lp,Ja),dp=s=>Je(s,"position",Ja),up=new Set(["image","url"]),mp=s=>Je(s,up,xp),hp=s=>Je(s,"",fp),et=()=>!0,Je=(s,e,r)=>{const n=Ka.exec(s);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):r(n[2]):!1},pp=s=>rp.test(s)&&!np.test(s),Ja=()=>!1,fp=s=>ap.test(s),xp=s=>ip.test(s),gp=()=>{const s=S("colors"),e=S("spacing"),r=S("blur"),n=S("brightness"),a=S("borderColor"),i=S("borderRadius"),o=S("borderSpacing"),l=S("borderWidth"),c=S("contrast"),u=S("grayscale"),p=S("hueRotate"),d=S("invert"),h=S("gap"),f=S("gradientColorStops"),w=S("gradientColorStopPositions"),m=S("inset"),x=S("margin"),g=S("opacity"),v=S("padding"),k=S("saturate"),T=S("scale"),Ne=S("sepia"),pr=S("skew"),fr=S("space"),xr=S("translate"),Yt=()=>["auto","contain","none"],Xt=()=>["auto","hidden","clip","visible","scroll"],Qt=()=>["auto",N,e],_=()=>[N,e],gr=()=>["",Q,ue],ft=()=>["auto",We,N],br=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],xt=()=>["solid","dashed","dotted","double","none"],yr=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Zt=()=>["start","end","center","between","around","evenly","stretch"],Ye=()=>["","0",N],wr=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[We,N];return{cacheSize:500,separator:":",theme:{colors:[et],spacing:[Q,ue],blur:["none","",me,N],brightness:Y(),borderColor:[s],borderRadius:["none","","full",me,N],borderSpacing:_(),borderWidth:gr(),contrast:Y(),grayscale:Ye(),hueRotate:Y(),invert:Ye(),gap:_(),gradientColorStops:[s],gradientColorStopPositions:[op,ue],inset:Qt(),margin:Qt(),opacity:Y(),padding:_(),saturate:Y(),scale:Y(),sepia:Ye(),skew:Y(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",N]}],container:["container"],columns:[{columns:[me]}],"break-after":[{"break-after":wr()}],"break-before":[{"break-before":wr()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...br(),N]}],overflow:[{overflow:Xt()}],"overflow-x":[{"overflow-x":Xt()}],"overflow-y":[{"overflow-y":Xt()}],overscroll:[{overscroll:Yt()}],"overscroll-x":[{"overscroll-x":Yt()}],"overscroll-y":[{"overscroll-y":Yt()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ze,N]}],basis:[{basis:Qt()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",N]}],grow:[{grow:Ye()}],shrink:[{shrink:Ye()}],order:[{order:["first","last","none",Ze,N]}],"grid-cols":[{"grid-cols":[et]}],"col-start-end":[{col:["auto",{span:["full",Ze,N]},N]}],"col-start":[{"col-start":ft()}],"col-end":[{"col-end":ft()}],"grid-rows":[{"grid-rows":[et]}],"row-start-end":[{row:["auto",{span:[Ze,N]},N]}],"row-start":[{"row-start":ft()}],"row-end":[{"row-end":ft()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",N]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",N]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...Zt()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Zt(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Zt(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[fr]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[fr]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",N,e]}],"min-w":[{"min-w":[N,e,"min","max","fit"]}],"max-w":[{"max-w":[N,e,"none","full","min","max","fit","prose",{screen:[me]},me]}],h:[{h:[N,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[N,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[N,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[N,e,"auto","min","max","fit"]}],"font-size":[{text:["base",me,ue]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ys]}],"font-family":[{font:[et]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",N]}],"line-clamp":[{"line-clamp":["none",We,ys]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Q,N]}],"list-image":[{"list-image":["none",N]}],"list-style-type":[{list:["none","disc","decimal",N]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[s]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[s]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...xt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Q,ue]}],"underline-offset":[{"underline-offset":["auto",Q,N]}],"text-decoration-color":[{decoration:[s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",N]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",N]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...br(),dp]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",cp]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},mp]}],"bg-color":[{bg:[s]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...xt(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:xt()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...xt()]}],"outline-offset":[{"outline-offset":[Q,N]}],"outline-w":[{outline:[Q,ue]}],"outline-color":[{outline:[s]}],"ring-w":[{ring:gr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[s]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Q,ue]}],"ring-offset-color":[{"ring-offset":[s]}],shadow:[{shadow:["","inner","none",me,hp]}],"shadow-color":[{shadow:[et]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...yr(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":yr()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",me,N]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[d]}],saturate:[{saturate:[k]}],sepia:[{sepia:[Ne]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[Ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",N]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",N]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",N]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[Ze,N]}],"translate-x":[{"translate-x":[xr]}],"translate-y":[{"translate-y":[xr]}],"skew-x":[{"skew-x":[pr]}],"skew-y":[{"skew-y":[pr]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",N]}],accent:[{accent:["auto",s]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",N]}],"caret-color":[{caret:[s]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",N]}],fill:[{fill:[s,"none"]}],"stroke-w":[{stroke:[Q,ue,ys]}],stroke:[{stroke:[s,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},bp=Zh(gp);function tt(...s){return bp(Uh(s))}function yp(){const s=Ms(),e=Ls(),{user:r}=ar(),[n,a]=b.useState(navigator.onLine),[i,o]=b.useState(!1),[l,c]=b.useState(!1);b.useEffect(()=>{const d=()=>a(!0),h=()=>a(!1);return window.addEventListener("online",d),window.addEventListener("offline",h),()=>{window.removeEventListener("online",d),window.removeEventListener("offline",h)}},[]),b.useEffect(()=>{o(!1),c(!1)},[s.pathname]);const u=async()=>{await Fu(),e("/login")},p=[{path:"/dashboard",label:"Dashboard",icon:t.jsx(Zu,{size:20})},{path:"/learn",label:"Learn",icon:t.jsx(Re,{size:20})},{path:"/games",label:"Games",icon:t.jsx(Fa,{size:20})},{path:"/vr-games",label:"VR Games",icon:t.jsx(Ts,{size:20})},{path:"/workshops",label:"Workshops",icon:t.jsx(cm,{size:20})},{path:"/exams",label:"Exams",icon:t.jsx(Ku,{size:20})},{path:"/activities",label:"Activities",icon:t.jsx(La,{size:20})},{path:"/emotions",label:"Emotions",icon:t.jsx(Jt,{size:20})},{path:"/achievements",label:"Achievements",icon:t.jsx(ve,{size:20})},{path:"/leaderboard",label:"Leaderboard",icon:t.jsx(Ft,{size:20})},{path:"/progress",label:"Progress",icon:t.jsx(Me,{size:20})},{path:"/social",label:"Social",icon:t.jsx($,{size:20})},{path:"/shop",label:"Shop",icon:t.jsx(Ba,{size:20})},{path:"/chat",label:"Chat",icon:t.jsx(lr,{size:20})},{path:"/profile",label:"Profile",icon:t.jsx(ze,{size:20})}];return t.jsxs("div",{className:"min-h-screen flex flex-col bg-background font-sans text-foreground",children:[t.jsx("header",{className:"bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm transition-all duration-200",children:t.jsxs("div",{className:"container mx-auto px-4 py-3 flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"text-primary flex items-center p-2 bg-primary/10 rounded-full",children:t.jsx(E,{size:24,fill:"currentColor"})}),t.jsx("h1",{className:"text-lg md:text-xl font-bold tracking-tight text-foreground m-0",children:"P.E.E.R"})]}),t.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[t.jsxs("div",{className:tt("flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300",n?"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400":"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"),children:[t.jsx("span",{className:"flex items-center",children:n?t.jsx(hm,{size:14}):t.jsx(mm,{size:14})}),t.jsx("span",{className:"hidden sm:inline",children:n?"Online":"Offline"})]}),t.jsxs("div",{className:"hidden md:block relative",children:[t.jsxs("button",{onClick:()=>c(!l),className:"flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors",children:[r?.photoURL?t.jsx("img",{src:r.photoURL,alt:"Profile",className:"w-8 h-8 rounded-full"}):t.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center",children:t.jsx(ze,{size:16,className:"text-primary"})}),t.jsx("span",{className:"text-sm font-medium max-w-[100px] truncate",children:r?.displayName||r?.email?.split("@")[0]||"User"}),t.jsx(Vu,{size:16,className:tt("transition-transform",l&&"rotate-180")})]}),l&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0",onClick:()=>c(!1)}),t.jsxs("div",{className:"absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50",children:[t.jsxs("div",{className:"p-3 border-b border-border",children:[t.jsx("p",{className:"font-medium text-sm truncate",children:r?.displayName||"User"}),t.jsx("p",{className:"text-xs text-muted-foreground truncate",children:r?.email})]}),t.jsxs("div",{className:"p-2",children:[t.jsxs(O,{to:"/profile",className:"flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors",children:[t.jsx(ze,{size:16}),"View Profile"]}),t.jsxs("button",{onClick:u,className:"w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",children:[t.jsx(ln,{size:16}),"Sign Out"]})]})]})]})]}),t.jsx("button",{onClick:()=>o(!i),className:"md:hidden p-2 rounded-lg hover:bg-muted",children:i?t.jsx(Wa,{size:24}):t.jsx(tm,{size:24})})]})]})}),i&&t.jsxs("div",{className:"fixed inset-0 z-40 md:hidden",children:[t.jsx("div",{className:"fixed inset-0 bg-black/50",onClick:()=>o(!1)}),t.jsxs("div",{className:"fixed top-[60px] left-0 right-0 bottom-0 bg-surface overflow-y-auto animate-in slide-in-from-top duration-200",children:[t.jsxs("div",{className:"p-4 border-b border-border flex items-center gap-3",children:[r?.photoURL?t.jsx("img",{src:r.photoURL,alt:"Profile",className:"w-12 h-12 rounded-full"}):t.jsx("div",{className:"w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center",children:t.jsx(ze,{size:24,className:"text-primary"})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"font-medium truncate",children:r?.displayName||"User"}),t.jsx("p",{className:"text-sm text-muted-foreground truncate",children:r?.email})]}),t.jsx("button",{onClick:u,className:"p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg",children:t.jsx(ln,{size:20})})]}),t.jsx("div",{className:"p-4 grid grid-cols-3 gap-3",children:p.map(d=>{const h=s.pathname.startsWith(d.path);return t.jsxs(O,{to:d.path,className:tt("flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all duration-200",h?"bg-primary text-white shadow-lg":"bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"),children:[t.jsx("span",{className:"flex items-center",children:d.icon}),t.jsx("span",{className:"text-xs font-medium",children:d.label})]},d.path)})})]})]}),t.jsx("nav",{className:"hidden md:block bg-surface border-b border-border/50 shadow-sm",children:t.jsx("div",{className:"container mx-auto px-4 py-2",children:t.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar",children:p.map(d=>{const h=s.pathname.startsWith(d.path);return t.jsxs(O,{to:d.path,className:tt("flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",h?"bg-primary text-white shadow-md shadow-primary/25 translate-y-[-1px]":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[t.jsx("span",{className:"flex items-center",children:d.icon}),t.jsx("span",{children:d.label})]},d.path)})})})}),t.jsx("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-40 safe-area-bottom",children:t.jsx("div",{className:"flex justify-around items-center py-2",children:p.slice(0,5).map(d=>{const h=s.pathname.startsWith(d.path);return t.jsxs(O,{to:d.path,className:tt("flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",h?"text-primary":"text-muted-foreground"),children:[t.jsx("span",{children:d.icon}),t.jsx("span",{className:"text-[10px] font-medium",children:d.label})]},d.path)})})}),t.jsx("main",{className:"flex-1 py-4 md:py-8 pb-20 md:pb-8 animate-in fade-in duration-500",children:t.jsx("div",{className:"container mx-auto px-3 md:px-4",children:t.jsx(Qa,{})})}),t.jsx("footer",{className:"hidden md:block bg-surface border-t border-border py-8 mt-auto",children:t.jsxs("div",{className:"container mx-auto px-4 text-center text-muted-foreground",children:[t.jsx("p",{className:"font-medium",children:"© 2024 P.E.E.R"}),t.jsx("p",{className:"text-sm mt-2 opacity-80",children:"Empowering Rural Education • Offline-first AI Learning Platform"})]})})]})}function wp(){return t.jsx($u,{children:t.jsx(Za,{children:t.jsxs(ei,{children:[t.jsx(C,{path:"/login",element:t.jsx(us,{children:t.jsx(Oh,{})})}),t.jsx(C,{path:"/signup",element:t.jsx(us,{children:t.jsx(zh,{})})}),t.jsx(C,{path:"/forgot-password",element:t.jsx(us,{children:t.jsx(Fh,{})})}),t.jsxs(C,{path:"/",element:t.jsx(xm,{children:t.jsx(yp,{})}),children:[t.jsx(C,{index:!0,element:t.jsx(Ds,{to:"/dashboard",replace:!0})}),t.jsx(C,{path:"dashboard",element:t.jsx(hh,{})}),t.jsx(C,{path:"learn",element:t.jsx(mn,{})}),t.jsx(C,{path:"learn/:contentId",element:t.jsx(mn,{})}),t.jsx(C,{path:"chat",element:t.jsx(ph,{})}),t.jsx(C,{path:"profile",element:t.jsx(fh,{})}),t.jsx(C,{path:"achievements",element:t.jsx(wh,{})}),t.jsx(C,{path:"leaderboard",element:t.jsx(vh,{})}),t.jsx(C,{path:"games",element:t.jsx(jh,{})}),t.jsx(C,{path:"shop",element:t.jsx(Nh,{})}),t.jsx(C,{path:"social",element:t.jsx(Sh,{})}),t.jsx(C,{path:"progress",element:t.jsx(_h,{})}),t.jsx(C,{path:"workshops",element:t.jsx(Ch,{})}),t.jsx(C,{path:"exams",element:t.jsx(Th,{})}),t.jsx(C,{path:"vr-games",element:t.jsx(Ah,{})}),t.jsx(C,{path:"activities",element:t.jsx(Rh,{})}),t.jsx(C,{path:"emotions",element:t.jsx(Lh,{})}),"student"==="teacher"]})]})})})}wm().then(()=>{console.log("Database initialized")}).catch(s=>{console.error("Failed to initialize database:",s)});ws.createRoot(document.getElementById("root")).render(t.jsx(ti.StrictMode,{children:t.jsx(wp,{})}));
