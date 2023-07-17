// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       GM_info
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @version     1.7.0
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @homepageURL https://github.com/IProgramWell/YTUtils
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var t={913:(t,e,n)=>{var i;Object.defineProperty(e,"t",{value:!0}),e.i=e.o=e.u=void 0;const o=n(583);e.u=new o.l({h:!0,target:null!==(i=document.body)&&void 0!==i?i:document}),e.o=["yt-navigate-start"],e.i={"ytutils-no-pl-btn":"{\n\tfloat: left;\n\ttop: 50%;\n\twhite-space: nowrap;\n}"}},607:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(127),s=n(583),r=i(n(815)),u=n(913);!function(){const t=(0,r.default)({m:{g:u.u,O:s.j,p:s._,M:s.T}});o.S.$({L:t}),o.S.A({L:t,N:"onDocumentStart",D:!0});for(let e of t)globalThis.GM_registerMenuCommand(`Enable/Disable "${e.U}" module`,(function(){let{isDisabled:t}=e;e.isDisabled=!t,s.k.I.print(`${t?"En":"Dis"}abled module "${e.U}"`)}));for(let e of u.o)globalThis.document.addEventListener(e,(function(n){o.S.C({L:t,methodName:e,methodArgs:[n],D:!0})}));globalThis.addEventListener("load",(function(){globalThis.document.head.appendChild(s.j.createElement("style",{innerHTML:Object.entries(u.i).map((([t,e])=>`.${t} ${e}`)).join("\n").trim(),id:"ytutils-styles"})),o.S.A({L:t,N:"onDocumentLoad"})})),globalThis.addEventListener("yt-navigate-finish",(function(){const e=s._.R();s.k.I.print(`Changed url! New url: "${e.href}"`),o.S.H({L:t,q:s.k.I,B:e})}))}()},815:function(t,e,n){var i=this&&this.P||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.W||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const r=n(127),u=s(n(566)),l=s(n(105)),c=s(n(138)),a=s(n(257));e.default=function(t){return[new r.V({J:{Y:u.G,K:u.G},X:{"yt-navigate-start":u.Z},tt:r.S.et(/^\/shorts\/.+$/i),m:t.m,U:"No Shorts Redirector"}),new r.V({J:{nt:l.it,Y:l.it,ot:l.st},tt:l.rt,m:t.m,U:"No Playlist Controls"}),new r.V({J:{Y:c.ut,ot:c.lt},tt:r.S.et(/^\/watch\/?$/),U:"Search by title",m:t.m}),new r.V({J:{init:a.ct},tt:r.S.et(/^\/(results|watch)?\/?$/),U:"No (more) banner ads",m:t.m})]}},257:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.ct=void 0,e.ct=function(){let{m:{g:t},q:e}=this;t&&(t.ht("div#masthead-ad",(function(t){e.print(`Removing ${t.length} ads for selector "div#masthead-ad"`);for(let e of Array.from(t))e.parentElement.removeChild(e)}),!1),t.ht("ytd-ad-slot-renderer",(function(t){e.print(`Removing ${t.length} ads for selector "ytd-ad-slot-renderer"`);for(let e of Array.from(t))e.parentElement.removeChild(e)}),!1))}},105:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0}),e.rt=e.st=e.it=void 0;const i=n(127),o={dt:"ytutils-noplaylist-newtabcheckbox",ft:"ytutils-noplaylist-newtabcheckbox-label",vt:"ytutils-noplaylist-noplbtn"};e.it=function(){const{p:t,O:e}=this.m,n=e.bt(".ytp-right-controls");if(!n)return!1;const i=e.createElement("input",{type:"checkbox",id:o.dt,style:"transform: translateY(50%)",className:"ytutils-no-pl-btn",name:o.dt,title:"Open in new tab",checked:!0}),s=e.createElement("label",{htmlFor:o.dt,innerHTML:"New tab?",className:"ytutils-no-pl-btn",id:o.ft}),r=e.createElement("button",{id:o.vt,title:"Watch outside playlist",onclick(){var n;let i=e.gt();(null===(n=e.bt(`#${o.dt}`))||void 0===n?void 0:n.checked)?t.Ot(`https://youtube.com/watch?v=${i.get("v")}`):t.jt("search",`?v=${i.get("v")}`)},innerHTML:"No Playlist",className:"ytutils-no-pl-btn"});return n.prepend(i,s,r),!0},e.st=function(){for(let t of Object.values(o))this.m.O.yt(t);return!1};const s=i.S.et(/\/watch\/?/i);e.rt=function(t){const e=t?"string"==typeof t?new URL(t):t:this.m.p.R();return s.call(this,e)&&!!this.m.O.gt(e).get("list")}},566:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Z=e.G=void 0,e.G=function(){const[t,e,n]=this.m.p.R().pathname.split("/");return"shorts"===e&&this.m.p.navigate(`https://youtube.com/watch?v=${n}`),!0},e.Z=function(t){"shorts"===t.detail.pageType&&this.m.p.navigate(`https://youtube.com/watch?v=${this.m.p.R().pathname.split("/")[2]}`)}},138:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.lt=e.ut=void 0;const n={wt:"ytutils-searchbytitle-searchbtn"},i="div#title yt-formatted-string";e.ut=function(){const{m:{O:t,p:e,g:o},q:s}=this;if(!o)return!1;const r=t.createElement("span",{innerText:"🔍",title:"Search by this video's title",style:"cursor: grab;",id:n.wt,onclick(){var n;let o=null===(n=t.bt(i))||void 0===n?void 0:n.textContent;o&&e.navigate(`https://youtube.com/results?search_query=${encodeURIComponent(o)}`)}});return o.ht(i,(function(t){let e=t[0];s.print(e),e.parentElement.appendChild(r)})),!0},e.lt=function(){for(let t of Object.values(n))this.m.O.yt(t);return!1}},996:function(t,e,n){var i=this&&this.P||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.W||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0}),e.V=void 0;const r=n(583),u=s(n(997));class l{get isActive(){return-1!==this._t}set isActive(t){-1!==this._t&&(this._t=t?1:0)}get isDisabled(){return-1===this._t}set isDisabled(t){this._t=t?-1:0}constructor(t){var e,n;this.J={},this.X={},this.tt=function(){return-1!==this._t},this.U=null,this.q=r.k.I,this.m={p:r._,O:r.j,M:r.T},this.state=new Map,this._t=0,r.Tt.Mt({source:this}),t.tt&&("function"==typeof t.tt?this.tt=t.tt.bind(this):t.tt instanceof RegExp&&(this.tt=u.et(t.tt,!1))),r.Tt.Mt({source:null!==(e=t.J)&&void 0!==e?e:{},$t:this.J,St:this}),r.Tt.Mt({source:null!==(n=t.X)&&void 0!==n?n:{},$t:this.X,St:this}),t.q&&(this.q=t.q),t.U&&(this.U=t.U),t.m&&Object.assign(this.m,t.m)}Lt(t,e){var n;return null!==(n=this.state.get(t))&&void 0!==n?n:e}At(t,e){this.state.set(t,e)}Nt(t){this.state.delete(t)}}e.V=l,e.default=l},127:function(t,e,n){var i=this&&this.P||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.W||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},r=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.S=e.V=void 0;var u=n(996);Object.defineProperty(e,"V",{enumerable:!0,get:function(){return r(u).default}}),e.S=s(n(997))},997:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.et=e.H=e.C=e.A=e.$=void 0;const o=i(n(355));e.$=function(t){var e;for(let n of t.L)null===(e=n.J.init)||void 0===e||e.call(n)},e.A=function(t){var e,n,i;let s,r=null!==(e=t.q)&&void 0!==e?e:o.default.I;for(let e of t.L)try{t.D&&e.isActive===e.tt(null!==(n=t.B)&&void 0!==n?n:e.m.p.R())||(s=null===(i=e.J[t.N])||void 0===i?void 0:i.call(e),"boolean"==typeof s&&s!==e.isActive&&(e.isActive=s,r.print(`${s?"Started":"Stopped"} module: "${e.U}"`)))}catch(t){r.error(t,e)}},e.C=function(t){var e,n,i,s;let r=null!==(e=t.q)&&void 0!==e?e:o.default.I;for(let e of t.L)try{t.D&&!e.tt(null!==(n=t.B)&&void 0!==n?n:e.m.p.R())||null===(s=null===(i=e.X)||void 0===i?void 0:i[t.methodName])||void 0===s||s.call(e,...t.methodArgs)}catch(n){r.error({error:n,module:e,methodName:t.methodName,methodArgs:t.methodArgs})}},e.H=function(t){var e,n;let i=null!==(e=t.q)&&void 0!==e?e:o.default.I;for(let e of t.L)try{e.tt(null!==(n=t.B)&&void 0!==n?n:e.m.p.R())?!e.isActive&&e.J.Y&&(e.isActive=e.J.Y.call(e),i.print(`Started module: "${e.U}"`)):e.isActive&&e.J.ot&&(e.isActive=e.J.ot.call(e),i.print(`Stopped module: "${e.U}"`))}catch(t){i.error(t,e)}},e.et=function(t,e=!1){const n="string"==typeof t?new RegExp(t):t;return function(t){if(this.isDisabled)return!1;const i=t?"string"==typeof t?new URL(t):t:this.m.p.R();return n.test(e?i.href:i.pathname)}}},227:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Dt=void 0,e.Dt=function(t){let e=t,n=Math.floor(e/3600);e%=3600;let i=Math.floor(e/60);return e=Math.round(e%60),[n.toString().padStart(2,"0"),i.toString().padStart(2,"0"),e.toString().padStart(2,"0")].join(":")}},326:(t,e)=>{Object.defineProperty(e,"t",{value:!0});class n extends Event{constructor(t,e,n){super(t,n),this.detail=e}}e.default=n},355:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0});const i=n(235),o=n(633);class s{constructor(t=s.Ut){var e;this.xt=!1;const n=Object.assign(Object.assign({},s.Ut),t);(0,i.Mt)({source:this}),this.It=n.name,this.kt=n.kt,this.Ct=n.Ct,this.xt=null!==(e=n.xt)&&void 0!==e&&e}Rt(){switch(this.Ct){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}Et(t=!1,e=!1){return[t&&this.Rt(),this.xt&&s.Ht,this.It].reduce((function(t,e){return e&&t.push(`[${e}]`),t}),[]).join(" ")+":"+(e?" ":"")}print(...t){console.log(this.Et(this.kt,!1),...t)}error(...t){console.error(this.Et(this.kt,!1),...t)}}s.Ht="iframe",s.Ut={name:globalThis.GM_info?`${globalThis.GM_info.script.name} v${globalThis.GM_info.script.version}`:"",kt:!0,Ct:"Locale",xt:(0,o.qt)()},s.I=new s,e.default=s},235:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Mt=void 0,e.Mt=function(t){var e,n,i;const o=null!==(e=t.St)&&void 0!==e?e:t.source,s=t.Bt?{}:null!==(n=t.$t)&&void 0!==n?n:t.source,r=null!==(i=t.X)&&void 0!==i?i:t.source.constructor===Object?Object.keys(t.source):Object.getOwnPropertyNames(Object.getPrototypeOf(t.source));for(let e of r)"constructor"!==e&&"function"==typeof t.source[e]?s[e]=t.source[e].bind(o):s[e]=t.source[e];return s}},633:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.qt=e.isVisible=e.createElement=e.yt=e.gt=e.evaluate=e.Pt=e.bt=void 0,e.bt=function(t){return document.querySelector(t)},e.Pt=function(t){return document.querySelectorAll(t)},e.evaluate=function(t,e,n,i,o){return document.evaluate(t,e,n,i,o)},e.gt=function(t=document.location){const e=new Map;let n;for(let i of(t.search.startsWith("?")?t.search.substring(1):t.search).split("&"))n=i.indexOf("="),e.set(i.substring(0,n),i.substring(n+1));return e},e.yt=function(t){var e,n;t&&(null===(n=null===(e=document.getElementById(t))||void 0===e?void 0:e.remove)||void 0===n||n.call(e))},e.createElement=function(t,e={},n){const i=Object.assign(document.createElement(t),e);return n&&i.append(...n),i},e.isVisible=function(t){let e=globalThis.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility},e.qt=function(){return globalThis.self!==globalThis.top}},795:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(235),s=i(n(355)),r=n(949),u=n(997);class l{constructor(t=l.Ft){this.Wt=!1,this.Vt=u.H,this.R=r.R,(0,o.Mt)({source:this});const e=Object.assign(Object.assign({},l.Ft),t);this.Qt="",this.Jt=new e.Yt(this.H),this.q=e.q,this.L=e.L,this.Wt=e.Wt,this.Vt=e.H.bind(this),this.R=e.R.bind(this)}H(){let t=this.R(),e=this.Wt?t.href:t.pathname;this.Qt!==e&&(this.Qt=e,this.q.print("Changed url!",`New ${this.Wt?"url":"pathname"}: "${e}"`),this.Vt({L:this.L,B:this.R(),q:this.q}))}start(){this.Jt.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}stop(){this.Jt.disconnect()}}l.Ft={L:[],q:s.default.I,Wt:!1,H:u.H,Yt:MutationObserver,R:r.R},e.default=l},491:function(t,e,n){var i,o=this&&this.P||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),s=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.W||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return s(e,t),e};Object.defineProperty(e,"t",{value:!0});const u=r(n(633)),l=n(235);class c{constructor(t=c.zt){var e;this.Gt=[],this.target=null!==(e=document.body)&&void 0!==e?e:document;const n=Object.assign(Object.assign({},c.zt),t);(0,l.Mt)({source:this}),this.O=n.O,this.Jt=new n.Yt(this.Kt),this.target=n.target,this.Gt=[],n.h&&this.start()}Kt(t){let e;for(let[n,i]of this.Gt.entries())e=t.flatMap((t=>Array.from(t.addedNodes))).filter((t=>t instanceof Element&&t.matches(i.query))),e.length>0&&(i.Xt(e),i.Zt&&this.Gt.splice(n,1))}ht(t,e,n=!0){if(!t)return;const i=Array.from(this.O.Pt(t));i.length>0?(e(i),n||this.Gt.push({query:t,Xt:e,Zt:n})):this.Gt.push({query:t,Xt:e,Zt:n})}start(){this.Jt.observe(this.target,{subtree:!0,childList:!0})}stop(){this.Jt.disconnect()}}c.zt={Yt:MutationObserver,O:u,target:null!==(i=document.body)&&void 0!==i?i:document,h:!1},e.default=c},52:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=i(n(627)),s=i(n(326));class r extends o.default{constructor(t,e,n){super(t,e,new Proxy(t[e],n)),this.items=[]}add(t){this.items.push(t),this.dispatchEvent(new s.default("added",t))}remove(t){let e=this.items.splice(t,1)[0];return this.dispatchEvent(new s.default("removed",e)),e}clear(){let t=this.items.splice(0,this.items.length);return this.dispatchEvent(new s.default("cleared",t)),t}item(t){return this.items[t]}getItems(){return this.items}te(){return 0===this.items.length}ee(){return this.items.length>0}*[Symbol.iterator](){for(let t=0;t<this.items.length;t++)yield this.items[t]}}e.default=r},627:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=i(n(326));class s extends EventTarget{get ie(){return this.oe[this.key]===this.se}constructor(t,e,n){super(),this.oe=t,this.key=e,this.se=n,this.re=t[e]}ue(){if(this.ie)return!0;try{return this.dispatchEvent(new o.default("beforeInstall",this.oe[this.key])),this.oe[this.key]=this.se,this.dispatchEvent(new o.default("installed",this.oe[this.key])),!0}catch(t){return!1}}le(){if(!this.ie)return!0;try{return this.dispatchEvent(new o.default("beforeUninstall",this.oe[this.key])),this.oe[this.key]=this.re,this.dispatchEvent(new o.default("uninstalled",this.oe[this.key])),!0}catch(t){return!1}}}e.default=s},554:(t,e)=>{function n(t){return t.getAllResponseHeaders().split(new RegExp("\r?\n","g")).reduce((function(t,e){if(!e)return t;const n=e.indexOf(": "),[i,o]=n<0?[e.toLowerCase().trim(),""]:[e.substring(0,n).toLowerCase().trim(),e.substring(n+2).trim()],s=t.get(i);switch(typeof s){case"undefined":t.set(i,o);break;case"object":Array.isArray(s)&&s.push(o);break;case"string":t.set(i,[s,o])}return t}),new Map)}Object.defineProperty(e,"t",{value:!0}),e.ce=e.ae=void 0,e.ae=function(t){var e;const i=n(t),o=null!==(e=i.get("content-type"))&&void 0!==e?e:"";return{response:{body:(Array.isArray(o)?o.some((t=>t.toLowerCase().startsWith("application/json"))):o.toLowerCase().startsWith("application/json"))?JSON.parse(t.responseText):t.responseText,headers:i,status:t.status},url:t.responseURL}},e.ce=n},949:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.R=e.Ot=e.jt=e.navigate=void 0,e.navigate=function(t){document.location.assign(t.toString())},e.jt=function(t,e){document.location[t]=e},e.Ot=function(t){globalThis.GM_openInTab?globalThis.GM_openInTab(t.toString()):globalThis.open(t.toString(),"_blank")},e.R=function(){return document.location}},314:(t,e)=>{Object.defineProperty(e,"t",{value:!0});e.default=class extends Promise{constructor(){super(((t,e)=>{this.resolve=t,this.reject=e}))}}},583:function(t,e,n){var i=this&&this.P||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.F||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.W||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},r=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.he=e.de=e.fe=e.ve=e.T=e.l=e.be=e.k=e._=e.j=e.me=e.Tt=void 0,e.Tt=s(n(235)),e.me=s(n(227)),e.j=s(n(633)),e._=s(n(949));var u=n(355);Object.defineProperty(e,"k",{enumerable:!0,get:function(){return r(u).default}});var l=n(795);Object.defineProperty(e,"be",{enumerable:!0,get:function(){return r(l).default}});var c=n(491);Object.defineProperty(e,"l",{enumerable:!0,get:function(){return r(c).default}}),e.T=s(n(554));var a=n(627);Object.defineProperty(e,"ve",{enumerable:!0,get:function(){return r(a).default}});var h=n(52);Object.defineProperty(e,"fe",{enumerable:!0,get:function(){return r(h).default}});var d=n(314);Object.defineProperty(e,"de",{enumerable:!0,get:function(){return r(d).default}});var f=n(326);Object.defineProperty(e,"he",{enumerable:!0,get:function(){return r(f).default}})}},e={};(function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports})(607)})();