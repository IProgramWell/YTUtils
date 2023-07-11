// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       GM_info
// @grant       GM_openInTab
// @version     1.6.6
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @homepageURL https://github.com/IProgramWell/YTUtils
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var t={913:(t,e,n)=>{var i;Object.defineProperty(e,"t",{value:!0}),e.i=e.o=e.u=void 0;const o=n(583);e.u=new o.l({h:!0,target:null!==(i=document.body)&&void 0!==i?i:document}),e.o=["yt-navigate-start"],e.i={"ytutils-no-pl-btn":"{\n\tfloat: left;\n\ttop: 50%;\n\twhite-space: nowrap;\n}"}},607:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(127),u=n(583),s=i(n(815)),r=n(913);!function(){const t=(0,s.default)({m:{O:r.u,g:u.j,p:u._,M:u.T,S:globalThis}});o.N.L({$:t,U:"init",A:!1}),o.N.L({$:t,U:"onDocumentStart",A:!0});for(let e of r.o)globalThis.document.addEventListener(e,(function(n){o.N.R({$:t,methodName:e,methodArgs:[n],A:!0})}));globalThis.addEventListener("load",(function(){globalThis.document.head.appendChild(u.j.createElement("style",{innerHTML:Object.entries(r.i).map((([t,e])=>`.${t} ${e}`)).join("\n").trim(),id:"ytutils-styles"})),o.N.L({$:t,U:"onDocumentLoad"})})),globalThis.addEventListener("yt-navigate-finish",(function(){const e=u._.I();u.C.k.print(`Changed url! New url: "${e.href}"`),o.N.D({$:t,P:u.C.k,H:e})}))}()},815:function(t,e,n){var i=this&&this.B||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.q)||(o={X:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{X:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.V||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const s=n(127),r=u(n(566)),l=u(n(105)),c=u(n(138)),a=u(n(257));e.default=function(t){return[new s.W({J:{Y:r.G,K:r.G},Z:{"yt-navigate-start":r.tt},et:s.N.nt(/^\/shorts\/.+$/i),m:t.m,it:"No Shorts Redirector"}),new s.W({J:{ot:l.ut,Y:l.ut,st:l.rt},et:l.lt,m:t.m,it:"No Playlist Controls"}),new s.W({J:{Y:c.ct,st:c.ht},et:s.N.nt(/^\/watch\/?$/),it:"Search by title",m:t.m}),new s.W({J:a,et:s.N.nt(/^\/?$/),it:"No (more) banner ads",m:t.m})]}},257:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Y=void 0,e.Y=function(){let{O:t}=this.m;return!!t&&(t.dt("div#masthead-ad",(function(t){for(let e of Array.from(t))e.parentElement.removeChild(e)})),t.dt("ytd-in-feed-ad-layout-renderer",(function(t){for(let e of Array.from(t))e.parentElement.parentElement.parentElement.remove()})),!0)}},105:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.lt=e.rt=e.ut=void 0;const n={ft:"ytutils-noplaylist-newtabcheckbox",vt:"ytutils-noplaylist-newtabcheckbox-label",bt:"ytutils-noplaylist-noplbtn"};e.ut=function(){const{p:t,g:e}=this.m,i=e.Ot(".ytp-right-controls");if(!i)return!1;const o=e.createElement("input",{type:"checkbox",id:n.ft,style:"transform: translateY(50%)",className:"ytutils-no-pl-btn",name:n.ft,title:"Open in new tab",checked:!0}),u=e.createElement("label",{htmlFor:n.ft,innerHTML:"New tab?",className:"ytutils-no-pl-btn",id:n.vt}),s=e.createElement("button",{id:n.bt,title:"Watch outside playlist",onclick(){var i;let o=e.gt();(null===(i=e.Ot(`#${n.ft}`))||void 0===i?void 0:i.checked)?t.jt(`https://youtube.com/watch?v=${o.get("v")}`):t.yt("search",`?v=${o.get("v")}`)},innerHTML:"No Playlist",className:"ytutils-no-pl-btn"});return i.prepend(o,u,s),!0},e.rt=function(){for(let t of Object.values(n))this.m.g.wt(t);return!1},e.lt=function(t){const e=t?"string"==typeof t?new URL(t):t:this.m.p.I();return/\/watch\/?/i.test(e.pathname)&&!!this.m.g.gt(e).get("list")}},566:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.tt=e.G=void 0,e.G=function(){const[t,e,n]=this.m.p.I().pathname.split("/");return"shorts"===e&&this.m.p.navigate(`https://youtube.com/watch?v=${n}`),!0},e.tt=function(t){"shorts"===t.detail.pageType&&this.m.p.navigate(`https://youtube.com/watch?v=${this.m.p.I().pathname.split("/")[2]}`)}},138:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.ht=e.ct=void 0;const n={_t:"ytutils-searchbytitle-searchbtn"};e.ct=function(){var t;const{m:{g:e,p:i,O:o},P:u}=this,s='//div[@id="title"]/h1/yt-formatted-string[text()]';if(!o)return!1;const r=e.createElement("span",{innerText:"🔍",title:"Search by this video's title",style:"cursor: grab;",id:n._t,onclick(){var t;i.navigate(`https://youtube.com/results?search_query=${encodeURIComponent(e.evaluate(s,null!==(t=document.body)&&void 0!==t?t:document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null).singleNodeValue.textContent)}`)}});return o.Mt({Tt:s,St:null!==(t=document.body)&&void 0!==t?t:document,Lt(t){try{return!!t.singleNodeValue}catch(t){return!1}},resultType:XPathResult.ANY_UNORDERED_NODE_TYPE},(function(t){u.print(t.singleNodeValue),t.singleNodeValue.parentElement.append(r)})),!0},e.ht=function(){for(let t of Object.values(n))this.m.g.wt(t);return!1}},996:function(t,e,n){var i=this&&this.B||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.q)||(o={X:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{X:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.V||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},s=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.W=void 0;const r=n(235),l=s(n(355)),c=u(n(949)),a=u(n(633)),h=u(n(554));class d{constructor(t){var e,n;this.J={},this.Z={},this.et=function(){return!0},this.it=null,this.P=l.default.k,this.m={p:c,g:a,M:h},this.state=new Map,this.isActive=!1,(0,r.Nt)({source:this}),t.et&&(this.et=t.et.bind(this)),(0,r.Nt)({source:null!==(e=t.J)&&void 0!==e?e:{},$t:this.J,Ut:this}),(0,r.Nt)({source:null!==(n=t.Z)&&void 0!==n?n:{},$t:this.Z,Ut:this}),t.P&&(this.P=t.P),t.it&&(this.it=t.it),t.m&&Object.assign(this.m,t.m)}At(t,e){var n;return null!==(n=this.state.get(t))&&void 0!==n?n:e}xt(t,e){this.state.set(t,e)}Rt(t){this.state.delete(t)}}e.W=d,e.default=d},127:function(t,e,n){var i=this&&this.B||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.q)||(o={X:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{X:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.V||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},s=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.N=e.W=void 0;var r=n(996);Object.defineProperty(e,"W",{X:!0,get:function(){return s(r).default}}),e.N=u(n(997))},997:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.nt=e.D=e.R=e.L=void 0;const o=i(n(355));e.L=function(t){var e,n,i;let u,s=null!==(e=t.P)&&void 0!==e?e:o.default.k;for(let e of t.$)try{t.A&&e.isActive===e.et(null!==(n=t.H)&&void 0!==n?n:e.m.p.I())||(u=null===(i=e.J[t.U])||void 0===i?void 0:i.call(e),"boolean"==typeof u&&u!==e.isActive&&(e.isActive=u,s.print(`${u?"Started":"Stopped"} module: "${e.it}"`)))}catch(t){s.error(t,e)}},e.R=function(t){var e,n,i,u;let s=null!==(e=t.P)&&void 0!==e?e:o.default.k;for(let e of t.$)try{t.A&&!e.et(null!==(n=t.H)&&void 0!==n?n:e.m.p.I())||null===(u=null===(i=e.Z)||void 0===i?void 0:i[t.methodName])||void 0===u||u.call(e,...t.methodArgs)}catch(n){s.error({error:n,module:e,methodName:t.methodName,methodArgs:t.methodArgs})}},e.D=function(t){var e,n;let i=null!==(e=t.P)&&void 0!==e?e:o.default.k;for(let e of t.$)try{e.et(null!==(n=t.H)&&void 0!==n?n:e.m.p.I())?!e.isActive&&e.J.Y&&(e.isActive=e.J.Y.call(e),i.print(`Started module: "${e.it}"`)):e.isActive&&e.J.st&&(e.isActive=e.J.st.call(e),i.print(`Stopped module: "${e.it}"`))}catch(t){i.error(t,e)}},e.nt=function(t,e=!1){const n="string"==typeof t?new RegExp(t):t;return function(t){const i=t?"string"==typeof t?new URL(t):t:this.m.p.I();return n.test(e?i.href:i.pathname)}}},227:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.It=void 0,e.It=function(t){let e=t,n=Math.floor(e/3600);e%=3600;let i=Math.floor(e/60);return e=Math.round(e%60),[n.toString().padStart(2,"0"),i.toString().padStart(2,"0"),e.toString().padStart(2,"0")].join(":")}},355:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0});const i=n(235),o=n(633);class u{constructor(t=u.kt){var e;this.Ct=!1;const n=Object.assign(Object.assign({},u.kt),t);(0,i.Nt)({source:this}),this.Dt=n.name,this.Pt=n.Pt,this.Ht=n.Ht,this.Ct=null!==(e=n.Ct)&&void 0!==e&&e}Bt(){switch(this.Ht){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}Et(t=!1,e=!1){return[t&&this.Bt(),this.Ct&&u.qt,this.Dt].reduce((function(t,e){return e&&t.push(`[${e}]`),t}),[]).join(" ")+":"+(e?" ":"")}print(...t){console.log(this.Et(this.Pt,!1),...t)}error(...t){console.error(this.Et(this.Pt,!1),...t)}}u.qt="iframe",u.kt={name:globalThis.GM_info?`${globalThis.GM_info.script.name} v${globalThis.GM_info.script.version}`:"",Pt:!0,Ht:"Locale",Ct:(0,o.Xt)()},u.k=new u,e.default=u},235:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Nt=void 0,e.Nt=function(t){var e,n;const i=null!==(e=t.Ut)&&void 0!==e?e:t.source,o=t.Ft?{}:null!==(n=t.$t)&&void 0!==n?n:t.source,u=t.source.constructor===Object?Object.keys(t.source):Object.getOwnPropertyNames(Object.getPrototypeOf(t.source));for(let e of u)"constructor"!==e&&"function"==typeof t.source[e]?o[e]=t.source[e].bind(i):o[e]=t.source[e];return o}},633:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Xt=e.isVisible=e.createElement=e.wt=e.gt=e.evaluate=e.Vt=e.Ot=void 0,e.Ot=function(t){return document.querySelector(t)},e.Vt=function(t){return document.querySelectorAll(t)},e.evaluate=function(t,e,n,i,o){return document.evaluate(t,e,n,i,o)},e.gt=function(t=document.location){const e=new Map;let n;for(let i of(t.search.startsWith("?")?t.search.substring(1):t.search).split("&"))n=i.indexOf("="),e.set(i.substring(0,n),i.substring(n+1));return e},e.wt=function(t){var e,n;t&&(null===(n=null===(e=document.getElementById(t))||void 0===e?void 0:e.remove)||void 0===n||n.call(e))},e.createElement=function(t,e={},n){const i=Object.assign(document.createElement(t),e);return n&&i.append(...n),i},e.isVisible=function(t){let e=globalThis.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility},e.Xt=function(){return globalThis.self!==globalThis.top}},795:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(235),u=i(n(355)),s=n(949),r=n(997);class l{constructor(t=l.Wt){this.Qt=!1,this.Jt=r.D,this.I=s.I,(0,o.Nt)({source:this});const e=Object.assign(Object.assign({},l.Wt),t);this.Yt="",this.zt=new e.Gt(this.D),this.P=e.P,this.$=e.$,this.Qt=e.Qt,this.Jt=e.D.bind(this),this.I=e.I.bind(this)}D(){let t=this.I(),e=this.Qt?t.href:t.pathname;this.Yt!==e&&(this.Yt=e,this.P.print("Changed url!",`New ${this.Qt?"url":"pathname"}: "${e}"`),this.Jt({$:this.$,H:this.I(),P:this.P}))}start(){this.zt.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}stop(){this.zt.disconnect()}}l.Wt={$:[],P:u.default.k,Qt:!1,D:r.D,Gt:MutationObserver,I:s.I},e.default=l},491:function(t,e,n){var i,o=this&&this.B||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.q)||(o={X:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),u=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{X:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.V||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return u(e,t),e};Object.defineProperty(e,"t",{value:!0});const r=s(n(633)),l=n(235);class c{constructor(t=c.Kt){var e;this.Zt=[],this.target=null!==(e=document.body)&&void 0!==e?e:document;const n=Object.assign(Object.assign({},c.Kt),t);(0,l.Nt)({source:this}),this.g=n.g,this.zt=new n.Gt(this.te),this.target=n.target,this.Zt=[],n.h&&this.start()}te(){var t,e,n,i,o,u;const s=[];let r;for(let l of this.Zt)r=l.query?this.g.Vt(l.query):l.Tt?this.g.evaluate(l.Tt.Tt,null!==(t=l.Tt.St)&&void 0!==t?t:document.body,null!==(e=l.Tt.ee)&&void 0!==e?e:null,null!==(n=l.Tt.resultType)&&void 0!==n?n:XPathResult.ANY_TYPE,null!==(i=l.Tt.result)&&void 0!==i?i:null):null,r instanceof NodeList&&r.length>0||r instanceof XPathResult&&(null===(u=(o=l.Tt).Lt)||void 0===u?void 0:u.call(o,r))?l.ne(r):s.push(l);this.Zt=s}dt(t,e){if(!t)return;const n=this.g.Vt(t);if(n.length>0)return e(n);this.Zt.push({query:t,ne:e})}Mt(t,e){var n,i,o,u,s,r;if(!(null==t?void 0:t.Tt))return;const l=this.g.evaluate(t.Tt,null!==(i=null!==(n=t.St)&&void 0!==n?n:document.body)&&void 0!==i?i:document,null!==(o=t.ee)&&void 0!==o?o:null,null!==(u=t.resultType)&&void 0!==u?u:XPathResult.ANY_TYPE,null!==(s=t.result)&&void 0!==s?s:null);if(null===(r=t.Lt)||void 0===r?void 0:r.call(t,l))return e(l);this.Zt.push({Tt:t,ne:e})}start(){this.zt.observe(this.target,{subtree:!0,childList:!0})}stop(){this.zt.disconnect()}}c.Kt={Gt:MutationObserver,g:r,target:null!==(i=document.body)&&void 0!==i?i:document,h:!1},e.default=c},52:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=i(n(627));class u extends o.default{constructor(t,e,n){super(t,e,new Proxy(t[e],n)),this.items=[]}add(t){this.items.push(t)}remove(t){return this.items.splice(t,1)[0]}clear(){return this.items.splice(0,this.items.length)}item(t){return this.items[t]}getItems(){return this.items}ie(){return 0===this.items.length}oe(){return this.items.length>0}*[Symbol.iterator](){for(let t=0;t<=this.items.length;t++)yield this.items[t]}}e.default=u},627:(t,e)=>{Object.defineProperty(e,"t",{value:!0});class n extends EventTarget{get se(){return this.re[this.key]===this.le}constructor(t,e,n){super(),this.re=t,this.key=e,this.le=n,this.ce=t[e]}ae(){if(this.se)return!0;try{return this.dispatchEvent(new Event("beforeInstall")),this.re[this.key]=this.le,this.dispatchEvent(new Event("installed")),!0}catch(t){return!1}}he(){if(!this.se)return!0;try{return this.dispatchEvent(new Event("beforeUninstall")),this.re[this.key]=this.ce,this.dispatchEvent(new Event("uninstalled")),!0}catch(t){return!1}}}e.default=n},554:(t,e)=>{function n(t){return t.getAllResponseHeaders().split(new RegExp("\r?\n","g")).reduce((function(t,e){if(!e)return t;const n=e.indexOf(": "),[i,o]=n<0?[e.toLowerCase().trim(),""]:[e.substring(0,n).toLowerCase().trim(),e.substring(n+2).trim()],u=t.get(i);switch(typeof u){case"undefined":t.set(i,o);break;case"object":Array.isArray(u)&&u.push(o);break;case"string":t.set(i,[u,o])}return t}),new Map)}Object.defineProperty(e,"t",{value:!0}),e.de=e.fe=void 0,e.fe=function(t){var e;const i=n(t),o=null!==(e=i.get("content-type"))&&void 0!==e?e:"";return{response:{body:(Array.isArray(o)?o.some((t=>t.toLowerCase().startsWith("application/json"))):o.toLowerCase().startsWith("application/json"))?JSON.parse(t.responseText):t.responseText,headers:i,status:t.status},url:t.responseURL}},e.de=n},949:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.I=e.jt=e.yt=e.navigate=void 0,e.navigate=function(t){document.location.assign(t.toString())},e.yt=function(t,e){document.location[t]=e},e.jt=function(t){globalThis.GM_openInTab?globalThis.GM_openInTab(t.toString()):globalThis.open(t.toString(),"_blank")},e.I=function(){return document.location}},583:function(t,e,n){var i=this&&this.B||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.q)||(o={X:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{X:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.V||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},s=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.ve=e.be=e.T=e.l=e.me=e.C=e._=e.j=e.Oe=e.ge=void 0,e.ge=u(n(235)),e.Oe=u(n(227)),e.j=u(n(633)),e._=u(n(949));var r=n(355);Object.defineProperty(e,"C",{X:!0,get:function(){return s(r).default}});var l=n(795);Object.defineProperty(e,"me",{X:!0,get:function(){return s(l).default}});var c=n(491);Object.defineProperty(e,"l",{X:!0,get:function(){return s(c).default}}),e.T=u(n(554));var a=n(627);Object.defineProperty(e,"be",{X:!0,get:function(){return s(a).default}});var h=n(52);Object.defineProperty(e,"ve",{X:!0,get:function(){return s(h).default}})}},e={};(function n(i){var o=e[i];if(void 0!==o)return o.exports;var u=e[i]={exports:{}};return t[i].call(u.exports,u,u.exports,n),u.exports})(607)})();