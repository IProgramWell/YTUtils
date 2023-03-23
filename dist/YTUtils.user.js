// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       GM_openInTab
// @version     1.6.5
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @homepageURL https://github.com/IProgramWell/YTUtils
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var t={913:(t,e,n)=>{var i;Object.defineProperty(e,"t",{value:!0}),e.i=e.o=void 0;const o=n(751);e.o=new o.l.u({h:!0,target:null!==(i=document.body)&&void 0!==i?i:document}),e.i=["yt-page-data-fetched","yt-service-request-completed","yt-navigate-finish"]},607:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(751),u=i(n(815)),l=n(913);for(let t of["init","onDocumentStart"])o.j.O.m({g:u.default,p:t,_:!1});for(let t of l.i)globalThis.addEventListener(t,(function(e){o.j.O.M({g:u.default,methodName:t,L:[e],_:!0})}));globalThis.addEventListener("load",(function(){o.j.O.m({g:u.default,p:"onDocumentLoad"})})),globalThis.addEventListener("yt-navigate-finish",(function(){const t=o.l.T.S();o.l.N.$.print(`Changed url! New url: "${t.href}"`),o.j.O.U({g:u.default,A:o.l.N.$,C:t})}))},815:function(t,e,n){var i=this&&this.R||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.D)||(o={P:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.k||(Object.create?function(t,e){Object.defineProperty(t,"default",{P:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.I||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const l=n(751),r=n(913),s=u(n(566)),c=u(n(105)),a=u(n(138));e.default=[new l.j.H({B:{q:s.X},F:l.j.O.V(/^\/shorts\/.+$/i),W:"No Shorts Redirector"}),new l.j.H({B:{Y:c.G,q:c.G,J:c.K},F:c.Z,W:"No Playlist Controls"}),new l.j.H({B:{q:a.tt,J:a.et},F:l.j.O.V(/^\/watch\/?$/),W:"Search by title",l:{nt:r.o}}),new l.j.H({B:{q(){var t;return!!(null===(t=this.l)||void 0===t?void 0:t.nt)&&(this.l.nt.it("div#masthead-ad",(function(t){console.log(t);for(let e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e])})),!0)}},l:{nt:r.o},F:l.j.O.V(/^\/?$/)})]},105:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Z=e.K=e.G=void 0;const n={ot:"ytutils-noplaylist-newtabcheckbox",ut:"ytutils-noplaylist-newtabcheckbox-label",lt:"ytutils-noplaylist-noplbtn"};e.G=function(){const{rt:t,st:e}=this.l,i=e.ct(".ytp-right-controls"),o="float: left; top: 50%; white-space: nowrap;";if(!i)return!1;const u=e.createElement("input",{type:"checkbox",id:n.ot,style:`${o} transform: translateY(50%)`,name:n.ot,title:"Open in new tab"}),l=e.createElement("label",{htmlFor:n.ot,innerHTML:"New tab?",style:o,id:n.ut}),r=e.createElement("button",{id:n.lt,title:"Watch outside playlist",onclick(){var i;let o=e.ht();(null===(i=e.ct(`#${n.ot}`))||void 0===i?void 0:i.checked)?t.dt(`https://youtube.com/watch?v=${o.get("v")}`):t.ft("search",`?v=${o.get("v")}`)},innerHTML:"No Playlist",style:o});return i.prepend(u,l,r),!0},e.K=function(){for(let t of Object.values(n))this.l.st.vt(t);return!1},e.Z=function(t){const e=t?"string"==typeof t?new URL(t):t:this.l.rt.S();return/\/watch\/?/i.test(e.pathname)&&!!this.l.st.ht(e).get("list")}},566:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.X=void 0,e.X=function(){const[t,e,n]=this.l.rt.S().pathname.split("/");return"shorts"===e&&this.l.rt.navigate(`https://youtube.com/watch?v=${n}`),!0}},138:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.et=e.tt=void 0;const n={bt:"ytutils-searchbytitle-searchbtn"};e.tt=function(){var t;const{l:{st:e,rt:i,nt:o},A:u}=this,l='//div[@id="title"]/h1/yt-formatted-string[text()]';if(!o)return!1;const r=e.createElement("span",{innerText:"🔍",title:"Search by this video's title",style:"cursor: grab;",id:n.bt,onclick(){var t;i.navigate(`https://youtube.com/results?search_query=${encodeURIComponent(e.evaluate(l,null!==(t=document.body)&&void 0!==t?t:document,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null).singleNodeValue.textContent)}`)}});return o.Ot({jt:l,gt:null!==(t=document.body)&&void 0!==t?t:document,yt(t){try{return!!t.singleNodeValue}catch(t){return!1}},resultType:XPathResult.ANY_UNORDERED_NODE_TYPE},(function(t){u.print(t.singleNodeValue),t.singleNodeValue.parentElement.append(r)})),!0},e.et=function(){for(let t of Object.values(n))this.l.st.vt(t);return!1}},751:function(t,e,n){var i=this&&this.R||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.D)||(o={P:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.k||(Object.create?function(t,e){Object.defineProperty(t,"default",{P:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.I||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0}),e.l=e.j=void 0,e.j=u(n(230)),e.l=u(n(873))},51:function(t,e,n){var i=this&&this.R||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.D)||(o={P:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.k||(Object.create?function(t,e){Object.defineProperty(t,"default",{P:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.I||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.H=void 0;const r=n(256),s=l(n(570)),c=u(n(40)),a=u(n(168));class h{constructor(t){var e,n;this.B={},this._t={},this.F=function(){return!0},this.W=null,this.A=s.default.$,this.l={rt:c,st:a},this.state=new Map,this.isActive=!1,(0,r.wt)({source:this}),t.F&&(this.F=t.F.bind(this));for(let[n,i]of Object.entries(null!==(e=t.B)&&void 0!==e?e:{}))"function"==typeof i&&(this.B[n]=i.bind(this));for(let[e,i]of Object.entries(null!==(n=t._t)&&void 0!==n?n:{}))"function"==typeof i&&(this._t[e]=i.bind(this));t.A&&(this.A=t.A),t.W&&(this.W=t.W),t.l&&Object.assign(this.l,t.l)}Mt(t,e=null){var n;return null!==(n=this.state.get(t))&&void 0!==n?n:e}Lt(t,e){this.state.set(t,e)}St(t){this.state.delete(t)}}e.H=h,e.default=h},230:function(t,e,n){var i=this&&this.R||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.D)||(o={P:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.k||(Object.create?function(t,e){Object.defineProperty(t,"default",{P:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.I||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.O=e.H=void 0;var r=n(51);Object.defineProperty(e,"H",{P:!0,get:function(){return l(r).default}}),e.O=u(n(843))},843:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.V=e.U=e.M=e.m=void 0;const o=i(n(570));e.m=function(t){var e,n,i,u;let l,r=null!==(e=t.A)&&void 0!==e?e:o.default.$;for(let e of t.g)try{t._&&e.isActive===e.F(null!==(n=t.C)&&void 0!==n?n:e.l.rt.S())||(l=null===(u=(i=e.B)[t.p])||void 0===u?void 0:u.call(i),"boolean"==typeof l&&l!==e.isActive&&(e.isActive=l,r.print(`${l?"Started":"Stopped"} module: "${e.W}"`)))}catch(t){r.error(t,e)}},e.M=function(t){var e,n,i,u;let l=null!==(e=t.A)&&void 0!==e?e:o.default.$;for(let e of t.g)try{t._&&!e.F(null!==(n=t.C)&&void 0!==n?n:e.l.rt.S())||null===(u=null===(i=e._t)||void 0===i?void 0:i[t.methodName])||void 0===u||u.call(i,...t.L)}catch(n){l.error({Tt:n,$t:e,methodName:t.methodName,L:t.L})}},e.U=function(t){var e,n;let i=null!==(e=t.A)&&void 0!==e?e:o.default.$;for(let e of t.g)try{e.F(null!==(n=t.C)&&void 0!==n?n:e.l.rt.S())?!e.isActive&&e.B.q&&(e.isActive=e.B.q(),i.print(`Started module: "${e.W}"`)):e.isActive&&e.B.J&&(e.isActive=e.B.J(),i.print(`Stopped module: "${e.W}"`))}catch(t){i.error(t,e)}},e.V=function(t,e=!1){const n="string"==typeof t?new RegExp(t):t;return function(t){const i=t?"string"==typeof t?new URL(t):t:this.l.rt.S();return n.test(e?i.href:i.pathname)}}},458:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Nt=void 0,e.Nt=function(t){let e=t,n=Math.floor(e/3600);e%=3600;let i=Math.floor(e/60);return e=Math.round(e%60),[n.toString().padStart(2,"0"),i.toString().padStart(2,"0"),e.toString().padStart(2,"0")].join(":")}},570:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0});const i=n(256),o=n(168);class u{constructor(t=u.Ut){var e;this.xt=!1;const n=Object.assign(Object.assign({},u.Ut),t);(0,i.wt)({source:this}),this.At=n.name,this.Ct=n.Ct,this.Rt=n.Rt,this.xt=null!==(e=n.xt)&&void 0!==e&&e}Dt(){switch(this.Rt){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}Pt(t=!1,e=!1){return[t&&this.Dt(),this.xt&&u.kt,this.At].reduce((function(t,e){return e&&t.push(`[${e}]`),t}),[]).join(" ")+":"+(e?" ":"")}print(...t){console.log(this.Pt(this.Ct,!1),...t)}error(...t){console.error(this.Pt(this.Ct,!1),...t)}}u.kt="iframe",u.Ut={name:globalThis.GM_info?`${globalThis.GM_info.script.name} v${globalThis.GM_info.script.version}`:"",Ct:!0,Rt:"Locale",xt:(0,o.It)()},u.$=new u,e.default=u},256:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.wt=void 0,e.wt=function(t){var e,n;const i=null!==(e=t.Ht)&&void 0!==e?e:t.source,o=t.Bt?{}:null!==(n=t.qt)&&void 0!==n?n:t.source,u=t.source.constructor===Object?Object.keys(t.source):Object.getOwnPropertyNames(Object.getPrototypeOf(t.source));for(let e of u)"constructor"!==e&&"function"==typeof t.source[e]?o[e]=t.source[e].bind(i):o[e]=t.source[e];return o}},168:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.It=e.isVisible=e.createElement=e.vt=e.ht=e.evaluate=e.Xt=e.ct=void 0,e.ct=function(t){return document.querySelector(t)},e.Xt=function(t){return document.querySelectorAll(t)},e.evaluate=function(t,e,n,i,o){return document.evaluate(t,e,n,i,o)},e.ht=function(t=document.location){const e=new Map;let n;for(let i of(t.search.startsWith("?")?t.search.substring(1):t.search).split("&"))n=i.indexOf("="),e.set(i.substring(0,n),i.substring(n+1));return e},e.vt=function(t){var e,n;t&&(null===(n=null===(e=document.getElementById(t))||void 0===e?void 0:e.remove)||void 0===n||n.call(e))},e.createElement=function(t,e={},n){const i=Object.assign(document.createElement(t),e);return n&&i.append(...n),i},e.isVisible=function(t){let e=globalThis.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility},e.It=function(){return globalThis.self!==globalThis.top}},262:function(t,e,n){var i=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(256),u=i(n(570)),l=n(40),r=n(843);class s{constructor(t=s.Ft){this.Vt=!1,this.Wt=r.U,this.S=l.S,(0,o.wt)({source:this});const e=Object.assign(Object.assign({},s.Ft),t);this.Et="",this.Qt=new e.Yt(this.U),this.A=e.A,this.g=e.g,this.Vt=e.Vt,this.Wt=e.U.bind(this),this.S=e.S.bind(this)}U(){let t=this.S(),e=this.Vt?t.href:t.pathname;this.Et!==e&&(this.Et=e,this.A.print("Changed url!",`New ${this.Vt?"url":"pathname"}: "${e}"`),this.Wt({g:this.g,C:this.S(),A:this.A}))}start(){this.Qt.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}stop(){this.Qt.disconnect()}}s.Ft={g:[],A:u.default.$,Vt:!1,U:r.U,Yt:MutationObserver,S:l.S},e.default=s},387:function(t,e,n){var i,o=this&&this.R||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.D)||(o={P:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),u=this&&this.k||(Object.create?function(t,e){Object.defineProperty(t,"default",{P:!0,value:e})}:function(t,e){t.default=e}),l=this&&this.I||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return u(e,t),e};Object.defineProperty(e,"t",{value:!0});const r=l(n(168)),s=n(256);class c{constructor(t=c.zt){var e;this.Gt=[],this.target=null!==(e=document.body)&&void 0!==e?e:document;const n=Object.assign(Object.assign({},c.zt),t);(0,s.wt)({source:this}),this.st=n.st,this.Qt=new n.Yt(this.Jt),this.target=n.target,this.Gt=[],n.h&&this.start()}Jt(){var t,e,n,i,o,u;const l=[];let r;for(let s of this.Gt)r=s.query?this.st.Xt(s.query):s.jt?this.st.evaluate(s.jt.jt,null!==(t=s.jt.gt)&&void 0!==t?t:document.body,null!==(e=s.jt.Kt)&&void 0!==e?e:null,null!==(n=s.jt.resultType)&&void 0!==n?n:XPathResult.ANY_TYPE,null!==(i=s.jt.result)&&void 0!==i?i:null):null,r instanceof NodeList&&r.length>0||r instanceof XPathResult&&(null===(u=(o=s.jt).yt)||void 0===u?void 0:u.call(o,r))?s.Zt(r):l.push(s);this.Gt=l}it(t,e){if(!t)return;const n=this.st.Xt(t);if(n.length>0)return e(n);this.Gt.push({query:t,Zt:e})}Ot(t,e){var n,i,o,u,l,r;if(!(null==t?void 0:t.jt))return;const s=this.st.evaluate(t.jt,null!==(i=null!==(n=t.gt)&&void 0!==n?n:document.body)&&void 0!==i?i:document,null!==(o=t.Kt)&&void 0!==o?o:null,null!==(u=t.resultType)&&void 0!==u?u:XPathResult.ANY_TYPE,null!==(l=t.result)&&void 0!==l?l:null);if(null===(r=t.yt)||void 0===r?void 0:r.call(t,s))return e(s);this.Gt.push({jt:t,Zt:e})}start(){this.Qt.observe(this.target,{subtree:!0,childList:!0})}stop(){this.Qt.disconnect()}}c.zt={Yt:MutationObserver,st:r,target:null!==(i=document.body)&&void 0!==i?i:document,h:!1},e.default=c},40:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.S=e.dt=e.ft=e.navigate=void 0,e.navigate=function(t){document.location.assign(t.toString())},e.ft=function(t,e){document.location[t]=e},e.dt=function(t){globalThis.GM_openInTab?globalThis.GM_openInTab(t.toString()):globalThis.open(t.toString(),"_blank")},e.S=function(){return document.location}},873:function(t,e,n){var i=this&&this.R||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.D)||(o={P:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.k||(Object.create?function(t,e){Object.defineProperty(t,"default",{P:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.I||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.v||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.u=e.te=e.N=e.T=e.ee=e.ne=e.ie=void 0,e.ie=u(n(256)),e.ne=u(n(458)),e.ee=u(n(168)),e.T=u(n(40));var r=n(570);Object.defineProperty(e,"N",{P:!0,get:function(){return l(r).default}});var s=n(262);Object.defineProperty(e,"te",{P:!0,get:function(){return l(s).default}});var c=n(387);Object.defineProperty(e,"u",{P:!0,get:function(){return l(c).default}})}},e={};(function n(i){var o=e[i];if(void 0!==o)return o.exports;var u=e[i]={exports:{}};return t[i].call(u.exports,u,u.exports,n),u.exports})(607)})();