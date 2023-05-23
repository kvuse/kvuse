function dt(t,e){return function(){return t.apply(e,arguments)}}const{toString:Lt}=Object.prototype,{getPrototypeOf:X}=Object,F=(t=>e=>{const n=Lt.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=t=>(t=t.toLowerCase(),e=>F(e)===t),D=t=>e=>typeof e===t,{isArray:N}=Array,C=D("undefined");function Ut(t){return t!==null&&!C(t)&&t.constructor!==null&&!C(t.constructor)&&S(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const pt=R("ArrayBuffer");function _t(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&pt(t.buffer),e}const Bt=D("string"),S=D("function"),ht=D("number"),Z=t=>t!==null&&typeof t=="object",Ft=t=>t===!0||t===!1,P=t=>{if(F(t)!=="object")return!1;const e=X(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Dt=R("Date"),kt=R("File"),qt=R("Blob"),It=R("FileList"),Mt=t=>Z(t)&&S(t.pipe),zt=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||S(t.append)&&((e=F(t))==="formdata"||e==="object"&&S(t.toString)&&t.toString()==="[object FormData]"))},Ht=R("URLSearchParams"),Jt=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function v(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,o;if(typeof t!="object"&&(t=[t]),N(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),i=s.length;let u;for(r=0;r<i;r++)u=s[r],e.call(null,t[u],u,t)}}function mt(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,o;for(;r-- >0;)if(o=n[r],e===o.toLowerCase())return o;return null}const yt=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),gt=t=>!C(t)&&t!==yt;function K(){const{caseless:t}=gt(this)&&this||{},e={},n=(r,o)=>{const s=t&&mt(e,o)||o;P(e[s])&&P(r)?e[s]=K(e[s],r):P(r)?e[s]=K({},r):N(r)?e[s]=r.slice():e[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&v(arguments[r],n);return e}const Wt=(t,e,n,{allOwnKeys:r}={})=>(v(e,(o,s)=>{n&&S(o)?t[s]=dt(o,n):t[s]=o},{allOwnKeys:r}),t),Kt=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Vt=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},$t=(t,e,n,r)=>{let o,s,i;const u={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),s=o.length;s-- >0;)i=o[s],(!r||r(i,t,e))&&!u[i]&&(e[i]=t[i],u[i]=!0);t=n!==!1&&X(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Gt=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Xt=t=>{if(!t)return null;if(N(t))return t;let e=t.length;if(!ht(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Zt=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&X(Uint8Array)),Qt=(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const o=r.value;e.call(t,o[0],o[1])}},Yt=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},te=R("HTMLFormElement"),ee=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,n,r){return n.toUpperCase()+r}),nt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ne=R("RegExp"),bt=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};v(n,(o,s)=>{e(o,s,t)!==!1&&(r[s]=o)}),Object.defineProperties(t,r)},re=t=>{bt(t,(e,n)=>{if(S(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(S(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oe=(t,e)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return N(t)?r(t):r(String(t).split(e)),n},se=()=>{},ie=(t,e)=>(t=+t,Number.isFinite(t)?t:e),z="abcdefghijklmnopqrstuvwxyz",rt="0123456789",Et={DIGIT:rt,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+rt},ae=(t=16,e=Et.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function ce(t){return!!(t&&S(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ue=t=>{const e=new Array(10),n=(r,o)=>{if(Z(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[o]=r;const s=N(r)?[]:{};return v(r,(i,u)=>{const c=n(i,o+1);!C(c)&&(s[u]=c)}),e[o]=void 0,s}}return r};return n(t,0)},a={isArray:N,isArrayBuffer:pt,isBuffer:Ut,isFormData:zt,isArrayBufferView:_t,isString:Bt,isNumber:ht,isBoolean:Ft,isObject:Z,isPlainObject:P,isUndefined:C,isDate:Dt,isFile:kt,isBlob:qt,isRegExp:ne,isFunction:S,isStream:Mt,isURLSearchParams:Ht,isTypedArray:Zt,isFileList:It,forEach:v,merge:K,extend:Wt,trim:Jt,stripBOM:Kt,inherits:Vt,toFlatObject:$t,kindOf:F,kindOfTest:R,endsWith:Gt,toArray:Xt,forEachEntry:Qt,matchAll:Yt,isHTMLForm:te,hasOwnProperty:nt,hasOwnProp:nt,reduceDescriptors:bt,freezeMethods:re,toObjectSet:oe,toCamelCase:ee,noop:se,toFiniteNumber:ie,findKey:mt,global:yt,isContextDefined:gt,ALPHABET:Et,generateString:ae,isSpecCompliantForm:ce,toJSONObject:ue};function m(t,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ot=m.prototype,wt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{wt[t]={value:t}});Object.defineProperties(m,wt);Object.defineProperty(Ot,"isAxiosError",{value:!0});m.from=(t,e,n,r,o,s)=>{const i=Object.create(Ot);return a.toFlatObject(t,i,function(u){return u!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,t.message,e,n,r,o),i.cause=t,i.name=t.name,s&&Object.assign(i,s),i};const le=null;function V(t){return a.isPlainObject(t)||a.isArray(t)}function St(t){return a.endsWith(t,"[]")?t.slice(0,-2):t}function ot(t,e,n){return t?t.concat(e).map(function(r,o){return r=St(r),!n&&o?"["+r+"]":r}).join(n?".":""):e}function fe(t){return a.isArray(t)&&!t.some(V)}const de=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function k(t,e,n){if(!a.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,f){return!a.isUndefined(f[p])});const r=n.metaTokens,o=n.visitor||d,s=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(e);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!u&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?u&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,f,O){let b=p;if(p&&!O&&typeof p=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&fe(p)||(a.isFileList(p)||a.endsWith(f,"[]"))&&(b=a.toArray(p)))return f=St(f),b.forEach(function(M,Pt){!(a.isUndefined(M)||M===null)&&e.append(i===!0?ot([f],Pt,s):i===null?f:f+"[]",c(M))}),!1}return V(p)?!0:(e.append(ot(O,f,s),c(p)),!1)}const l=[],h=Object.assign(de,{defaultVisitor:d,convertValue:c,isVisitable:V});function y(p,f){if(!a.isUndefined(p)){if(l.indexOf(p)!==-1)throw Error("Circular reference detected in "+f.join("."));l.push(p),a.forEach(p,function(O,b){(!(a.isUndefined(O)||O===null)&&o.call(e,O,a.isString(b)?b.trim():b,f,h))===!0&&y(O,f?f.concat(b):[b])}),l.pop()}}if(!a.isObject(t))throw new TypeError("data must be an object");return y(t),e}function st(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Q(t,e){this._pairs=[],t&&k(t,this,e)}const Rt=Q.prototype;Rt.append=function(t,e){this._pairs.push([t,e])};Rt.toString=function(t){const e=t?function(n){return t.call(this,n,st)}:st;return this._pairs.map(function(n){return e(n[0])+"="+e(n[1])},"").join("&")};function pe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function At(t,e,n){if(!e)return t;const r=n&&n.encode||pe,o=n&&n.serialize;let s;if(o?s=o(e,n):s=a.isURLSearchParams(e)?e.toString():new Q(e,n).toString(r),s){const i=t.indexOf("#");i!==-1&&(t=t.slice(0,i)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class he{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){a.forEach(this.handlers,function(n){n!==null&&e(n)})}}const it=he,Tt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},me=typeof URLSearchParams<"u"?URLSearchParams:Q,ye=typeof FormData<"u"?FormData:null,ge=typeof Blob<"u"?Blob:null,be=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ee=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),E={isBrowser:!0,classes:{URLSearchParams:me,FormData:ye,Blob:ge},isStandardBrowserEnv:be,isStandardBrowserWebWorkerEnv:Ee,protocols:["http","https","file","blob","url","data"]};function Oe(t,e){return k(t,new E.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return E.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function we(t){return a.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Se(t){const e={},n=Object.keys(t);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],e[s]=t[s];return e}function Nt(t){function e(n,r,o,s){let i=n[s++];const u=Number.isFinite(+i),c=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,c?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),e(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Se(o[i])),!u)}if(a.isFormData(t)&&a.isFunction(t.entries)){const n={};return a.forEachEntry(t,(r,o)=>{e(we(r),o,n,0)}),n}return null}const Re={"Content-Type":void 0};function Ae(t,e,n){if(a.isString(t))try{return(e||JSON.parse)(t),a.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const q={transitional:Tt,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return r&&r?JSON.stringify(Nt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Oe(t,this.formSerializer).toString();if((s=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const i=this.env&&this.env.FormData;return k(s?{"files[]":t}:t,i&&new i,this.formSerializer)}}return o||r?(e.setContentType("application/json",!1),Ae(t)):t}],transformResponse:[function(t){const e=this.transitional||q.transitional,n=e&&e.forcedJSONParsing,r=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||r)){const o=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?m.from(s,m.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:E.classes.FormData,Blob:E.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){q.headers[t]={}});a.forEach(["post","put","patch"],function(t){q.headers[t]=a.merge(Re)});const Y=q,Te=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ne=t=>{const e={};let n,r,o;return t&&t.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||e[n]&&Te[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},at=Symbol("internals");function j(t){return t&&String(t).trim().toLowerCase()}function L(t){return t===!1||t==null?t:a.isArray(t)?t.map(L):String(t)}function je(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Ce=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function H(t,e,n,r,o){if(a.isFunction(r))return r.call(this,e,n);if(o&&(e=n),!!a.isString(e)){if(a.isString(r))return e.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(e)}}function ve(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function xe(t,e){const n=a.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(o,s,i){return this[r].call(this,e,o,s,i)},configurable:!0})})}class I{constructor(e){e&&this.set(e)}set(e,n,r){const o=this;function s(u,c,d){const l=j(c);if(!l)throw new Error("header name must be a non-empty string");const h=a.findKey(o,l);(!h||o[h]===void 0||d===!0||d===void 0&&o[h]!==!1)&&(o[h||c]=L(u))}const i=(u,c)=>a.forEach(u,(d,l)=>s(d,l,c));return a.isPlainObject(e)||e instanceof this.constructor?i(e,n):a.isString(e)&&(e=e.trim())&&!Ce(e)?i(Ne(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=j(e),e){const r=a.findKey(this,e);if(r){const o=this[r];if(!n)return o;if(n===!0)return je(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=j(e),e){const r=a.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||H(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let o=!1;function s(i){if(i=j(i),i){const u=a.findKey(r,i);u&&(!n||H(r,r[u],u,n))&&(delete r[u],o=!0)}}return a.isArray(e)?e.forEach(s):s(e),o}clear(e){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!e||H(this,this[s],s,e,!0))&&(delete this[s],o=!0)}return o}normalize(e){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=L(o),delete n[s];return}const u=e?ve(s):String(s).trim();u!==s&&delete n[s],n[u]=L(o),r[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=e&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(o=>r.set(o)),r}static accessor(e){const n=(this[at]=this[at]={accessors:{}}).accessors,r=this.prototype;function o(s){const i=j(s);n[i]||(xe(r,s),n[i]=!0)}return a.isArray(e)?e.forEach(o):o(e),this}}I.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(I.prototype);a.freezeMethods(I);const w=I;function J(t,e){const n=this||Y,r=e||n,o=w.from(r.headers);let s=r.data;return a.forEach(t,function(i){s=i.call(n,s,o.normalize(),e?e.status:void 0)}),o.normalize(),s}function jt(t){return!!(t&&t.__CANCEL__)}function x(t,e,n){m.call(this,t??"canceled",m.ERR_CANCELED,e,n),this.name="CanceledError"}a.inherits(x,m,{__CANCEL__:!0});function Pe(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Le=E.isStandardBrowserEnv?function(){return{write:function(t,e,n,r,o,s){const i=[];i.push(t+"="+encodeURIComponent(e)),a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ue(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function _e(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ct(t,e){return t&&!Ue(e)?_e(t,e):e}const Be=E.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(o){let s=o;return t&&(e.setAttribute("href",s),s=e.href),e.setAttribute("href",s),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(o){const s=a.isString(o)?r(o):o;return s.protocol===n.protocol&&s.host===n.host}}():function(){return function(){return!0}}();function Fe(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function De(t,e){t=t||10;const n=new Array(t),r=new Array(t);let o=0,s=0,i;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];i||(i=c),n[o]=u,r[o]=c;let l=s,h=0;for(;l!==o;)h+=n[l++],l=l%t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),c-i<e)return;const y=d&&c-d;return y?Math.round(h*1e3/y):void 0}}function ct(t,e){let n=0;const r=De(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-n,c=r(u),d=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:c||void 0,estimated:c&&i&&d?(i-s)/c:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}const ke=typeof XMLHttpRequest<"u",qe=ke&&function(t){return new Promise(function(e,n){let r=t.data;const o=w.from(t.headers).normalize(),s=t.responseType;let i;function u(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}a.isFormData(r)&&(E.isStandardBrowserEnv||E.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+p))}const d=Ct(t.baseURL,t.url);c.open(t.method.toUpperCase(),At(d,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function l(){if(!c)return;const y=w.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:t,request:c};Pe(function(f){e(f),u()},function(f){n(f),u()},p),c=null}if("onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(l)},c.onabort=function(){c&&(n(new m("Request aborted",m.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let y=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const p=t.transitional||Tt;t.timeoutErrorMessage&&(y=t.timeoutErrorMessage),n(new m(y,p.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,t,c)),c=null},E.isStandardBrowserEnv){const y=(t.withCredentials||Be(d))&&t.xsrfCookieName&&Le.read(t.xsrfCookieName);y&&o.set(t.xsrfHeaderName,y)}r===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(y,p){c.setRequestHeader(p,y)}),a.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&s!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",ct(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ct(t.onUploadProgress)),(t.cancelToken||t.signal)&&(i=y=>{c&&(n(!y||y.type?new x(null,t,c):y),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));const h=Fe(d);if(h&&E.protocols.indexOf(h)===-1){n(new m("Unsupported protocol "+h+":",m.ERR_BAD_REQUEST,t));return}c.send(r||null)})},U={http:le,xhr:qe};a.forEach(U,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ie={getAdapter:t=>{t=a.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let o=0;o<e&&(n=t[o],!(r=a.isString(n)?U[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(U,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:U};function W(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new x(null,t)}function ut(t){return W(t),t.headers=w.from(t.headers),t.data=J.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ie.getAdapter(t.adapter||Y.adapter)(t).then(function(e){return W(t),e.data=J.call(t,t.transformResponse,e),e.headers=w.from(e.headers),e},function(e){return jt(e)||(W(t),e&&e.response&&(e.response.data=J.call(t,t.transformResponse,e.response),e.response.headers=w.from(e.response.headers))),Promise.reject(e)})}const lt=t=>t instanceof w?t.toJSON():t;function T(t,e){e=e||{};const n={};function r(d,l,h){return a.isPlainObject(d)&&a.isPlainObject(l)?a.merge.call({caseless:h},d,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(d,l,h){if(a.isUndefined(l)){if(!a.isUndefined(d))return r(void 0,d,h)}else return r(d,l,h)}function s(d,l){if(!a.isUndefined(l))return r(void 0,l)}function i(d,l){if(a.isUndefined(l)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,l)}function u(d,l,h){if(h in e)return r(d,l);if(h in t)return r(void 0,d)}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(d,l)=>o(lt(d),lt(l),!0)};return a.forEach(Object.keys(t).concat(Object.keys(e)),function(d){const l=c[d]||o,h=l(t[d],e[d],d);a.isUndefined(h)&&l!==u||(n[d]=h)}),n}const vt="1.3.6",tt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{tt[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const ft={};tt.transitional=function(t,e,n){function r(o,s){return"[Axios v"+vt+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,i)=>{if(t===!1)throw new m(r(s," has been removed"+(e?" in "+e:"")),m.ERR_DEPRECATED);return e&&!ft[s]&&(ft[s]=!0,console.warn(r(s," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(o,s,i):!0}};function Me(t,e,n){if(typeof t!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;for(;o-- >0;){const s=r[o],i=e[s];if(i){const u=t[s],c=u===void 0||i(u,s,t);if(c!==!0)throw new m("option "+s+" must be "+c,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const $={assertOptions:Me,validators:tt},A=$.validators;class B{constructor(e){this.defaults=e,this.interceptors={request:new it,response:new it}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=T(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&$.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:$.assertOptions(o,{encode:A.function,serialize:A.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=w.concat(i,s);const u=[];let c=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(c=c&&f.synchronous,u.unshift(f.fulfilled,f.rejected))});const d=[];this.interceptors.response.forEach(function(f){d.push(f.fulfilled,f.rejected)});let l,h=0,y;if(!c){const f=[ut.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,d),y=f.length,l=Promise.resolve(n);h<y;)l=l.then(f[h++],f[h++]);return l}y=u.length;let p=n;for(h=0;h<y;){const f=u[h++],O=u[h++];try{p=f(p)}catch(b){O.call(this,b);break}}try{l=ut.call(this,p)}catch(f){return Promise.reject(f)}for(h=0,y=d.length;h<y;)l=l.then(d[h++],d[h++]);return l}getUri(e){e=T(this.defaults,e);const n=Ct(e.baseURL,e.url);return At(n,e.params,e.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(e,n){return this.request(T(n||{},{method:t,url:e,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function e(n){return function(r,o,s){return this.request(T(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}B.prototype[t]=e(),B.prototype[t+"Form"]=e(!0)});const _=B;class et{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},e(function(o,s,i){r.reason||(r.reason=new x(o,s,i),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new et(function(n){e=n}),cancel:e}}}const ze=et;function He(t){return function(e){return t.apply(null,e)}}function Je(t){return a.isObject(t)&&t.isAxiosError===!0}const G={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(G).forEach(([t,e])=>{G[e]=t});const We=G;function xt(t){const e=new _(t),n=dt(_.prototype.request,e);return a.extend(n,_.prototype,e,{allOwnKeys:!0}),a.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return xt(T(t,r))},n}const g=xt(Y);g.Axios=_;g.CanceledError=x;g.CancelToken=ze;g.isCancel=jt;g.VERSION=vt;g.toFormData=k;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=He;g.isAxiosError=Je;g.mergeConfig=T;g.AxiosHeaders=w;g.formToJSON=t=>Nt(a.isHTMLForm(t)?new FormData(t):t);g.HttpStatusCode=We;g.default=g;const Ke={mounted:(t,e)=>{const{activeName:n,className:r,defaultIndex:o}=e.value||{};r&&o?document.querySelectorAll(`.${r}`)[o].classList.add(n):document.querySelector(`.${n}`)||t.classList.add(n),t.handler=function(){const s=document.querySelector(`.${n}`);s&&s.classList.remove(n),t.classList.add(n)},t.addEventListener("click",t.handler)},unmounted:t=>{t.removeEventListener("click",t.handler)}};export{Ke as O};