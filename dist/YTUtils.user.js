// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       GM_info
// @grant       GM_openInTab
// @version     1.6.4
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @homepageURL https://github.com/IProgramWell/YTUtils
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var t={913:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0}),e.i=e.o=void 0;const i=n(751);e.o=new i.l.u({h:!0,target:document}),e.i={v:"onPageDataFetch",m:"onNavigateFinish",O:"onServiceReqCompleted",g:"onNavigateRedirect",j:"onAppContext",p:"onContextProviderGet",_:"playlistReloading",M:"onPlaylistUpdated"}},607:function(t,e,n){var i=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(751),u=i(n(815)),l=n(913);for(let t of["init","onDocumentStart"])o.N.L.T({R:u.default,C:t,U:[],$:!1});for(let[t,e]of Object.entries(l.i))globalThis.addEventListener(t,(function(t){o.N.L.A({R:u.default,methodName:e,D:[t],$:!0})}));globalThis.addEventListener("load",(function(){o.N.L.T({R:u.default,C:"onDocumentLoad",U:[]})})),globalThis.addEventListener("yt-navigate-finish",(function(){const t=o.l.k.P();o.l.B.I.print(`Changed url! New url: "${t.href}"`),o.N.L.H({R:u.default,q:o.l.B.I,F:t})}))},815:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const l=n(751),r=n(913),s=u(n(828)),c=u(n(566)),a=u(n(105)),h=u(n(138));e.default=[new l.N.J({K:{Z:c.tt},et:l.N.L.nt(c.it),ot:"No Shorts Redirector"}),new l.N.J({ut:{[r.i["v"]]:s.lt,[r.i["O"]]:s.rt},et:l.N.L.nt(/^\/playlist\/?$/i),ot:"Custom Playlist Statistics"}),new l.N.J({K:{st:a.ct,Z:a.ct,ht:a.dt},et:a.vt,ot:"No Playlist Controls"}),new l.N.J({K:{Z:h.ft,ht:h.bt},ut:{[r.i["v"]]:h.Ot},et:l.N.L.nt(/^\/watch\/?$/),ot:"Search by title",l:{gt:l.l.jt,yt:l.l.k,_t:r.o}})]},105:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.vt=e.dt=e.ct=void 0;const n={Mt:"ytutils-noplaylist-newtabcheckbox",wt:"ytutils-noplaylist-newtabcheckbox-label",St:"ytutils-noplaylist-noplbtn"};e.ct=function(){const{yt:t,gt:e}=this.l,i=e.Tt(".ytp-right-controls"),o=e.xt(),u="float: left; top: 50%; white-space: nowrap;";if(!i)return!1;if(!o.list)return!1;const l=e.createElement("input",{type:"checkbox",id:n.Mt,style:`${u} transform: translateY(50%)`,name:n.Mt,title:"Open in new tab"}),r=e.createElement("label",{htmlFor:n.Mt,innerHTML:"New tab?",style:u,id:n.wt}),s=e.createElement("button",{id:n.St,title:"Watch outside playlist",onclick(){var i;let o=e.xt();(null===(i=e.Tt(`#${n.Mt}`))||void 0===i?void 0:i.checked)?t.Lt(`https://youtube.com/watch?v=${o.Nt}`):t.Rt("search",`?v=${o.Nt}`)},innerHTML:"No Playlist",style:u});return i.prepend(l,r,s),!0},e.dt=function(){for(let t of Object.values(n))this.l.gt.Ct(t);return!1},e.vt=function(t){const e=t?"string"==typeof t?new URL(t):t:this.l.yt.P();return/\/watch\/?/i.test(e.pathname)&&!!this.l.gt.xt(e).list}},566:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.tt=e.it=void 0,e.it=/^\/shorts\/\.+$/i,e.tt=function(){const[t,e,n]=this.l.yt.P().pathname.split("/");return"shorts"===e&&this.l.yt.navigate(`https://youtube.com/watch?v=${n}`),!0}},828:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0}),e.rt=e.lt=void 0;const i=n(751),o="totalRuntime",u="remainingRuntime";function l(t,e){var n,i,o;if(!e.Ut)return t;let u=Number.parseInt(e.Ut.$t),l=u-u*((null===(o=null===(i=null===(n=e.Ut)||void 0===n?void 0:n.At[1])||void 0===i?void 0:i.Dt)||void 0===o?void 0:o.Pt)||0)/100;return t.total+=u,t.kt+=l,t}function r(t){return[{It:[{text:"Runtime: "},{text:i.l.Ht.Bt(t.total)}]},{It:[{text:"Estimated remaining: "},{text:i.l.Ht.Bt(t.kt)}]}]}e.lt=function(t){const e=t.detail.Qt.response.qt.Wt.Vt[0].Gt.content.Et.qt[0].Xt.qt[0].Ft.qt.reduce(l,{total:this.Yt(o,0),kt:this.Yt(u,0)}),n=r(e);this.zt(o,e.total),this.zt(u,e.kt),this.q.print({Jt:e,Kt:n,Zt:t.detail.Qt.response.sidebar.ee.items[0].te.Zt}),t.detail.Qt.response.sidebar.ee.items[0].te.Zt.push(...n),this.q.print("Added time to playlist!"),this.isActive=!0},e.rt=function(t){var e,n,i,s,c;if(!(null===(c=null===(s=null===(i=null===(n=null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.data)||void 0===n?void 0:n.ne)||void 0===i?void 0:i[0])||void 0===s?void 0:s.ie)||void 0===c?void 0:c.oe))return;const{ue:a,le:h}=this.l.gt,d=t.detail.data.ne[0].ie.oe.reduce(l,{total:this.Yt(o,0),kt:this.Yt(u,0)}),v=r(d);let f,b;this.zt(o,d.total),this.zt(u,d.kt),this.q.print({Jt:d,Kt:v});for(let t of v)[f,b]=t.It,this.l.gt.evaluate(`//ytd-playlist-byline-renderer/div/yt-formatted-string/span[text() = "${f.text}"]`,null!=a?a:h,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null).singleNodeValue.parentElement.lastChild.textContent=b.text}},138:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.bt=e.ft=e.Ot=void 0;const n={re:"ytutils-searchbytitle-searchbtn"},i="videoTitle";e.Ot=function(t){var e;null===(e=null==this?void 0:this.zt)||void 0===e||e.call(this,i,t.detail.Qt.ce.se.title)},e.ft=function(){var t;const{l:{gt:e,yt:o,_t:u},q:l,Yt:r}=this;if(!u)return!1;const s=e.createElement("span",{innerText:"🔍",title:"Search by this video's title",style:"cursor: grab;",id:n.re,onclick(){o.navigate(`https://youtube.com/results?search_query=${encodeURIComponent(null==r?void 0:r(i,null))}`)}});return u.ae({he:'//div[@id="title"]/h1/yt-formatted-string[text()]',de:null!==(t=e.ue)&&void 0!==t?t:e.le,ve(t){try{return!!t.singleNodeValue}catch(t){return!1}},resultType:XPathResult.ANY_UNORDERED_NODE_TYPE},(function(t){l.print(t.singleNodeValue),t.singleNodeValue.parentElement.append(s)})),!0},e.bt=function(){for(let t of Object.values(n))this.l.gt.Ct(t);return!1}},751:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0}),e.l=e.N=void 0,e.N=u(n(230)),e.l=u(n(873))},51:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.J=void 0;const r=n(256),s=l(n(570)),c=u(n(40)),a=u(n(168));class h{constructor(t){var e,n;this.K={},this.ut={},this.et=()=>!0,this.ot=null,this.q=s.default.I,this.l={yt:c,gt:a},this.state={},this.isActive=!1,(0,r.fe)({source:this}),t.et&&(this.et=t.et.bind(this));for(let[n,i]of Object.entries(null!==(e=t.K)&&void 0!==e?e:{}))"function"==typeof i&&(this.K[n]=i.bind(this));for(let[e,i]of Object.entries(null!==(n=t.ut)&&void 0!==n?n:{}))"function"==typeof i&&(this.ut[e]=i.bind(this));t.q&&(this.q=t.q),t.ot&&(this.ot=t.ot),t.l&&(this.l=t.l)}Yt(t,e=null){var n;return null!==(n=this.state[t])&&void 0!==n?n:e}zt(t,e){this.state[t]=e}}e.J=h,e.default=h},230:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.L=e.J=void 0;var r=n(51);Object.defineProperty(e,"J",{V:!0,get:function(){return l(r).default}}),e.L=u(n(843))},843:function(t,e,n){var i=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.nt=e.H=e.A=e.T=void 0;const o=i(n(570));e.T=function(t){var e,n,i,u,l;let r,s=0;for(let c of t.R)try{t.$&&c.isActive===c.et(null!==(e=t.F)&&void 0!==e?e:c.l.yt.P())||(r=null===(i=(n=c.K)[t.C])||void 0===i?void 0:i.call(n,...t.U),"boolean"==typeof r&&r!==c.isActive&&(c.isActive=r,s++,(null!==(u=t.q)&&void 0!==u?u:o.default.I).print((r?"Started":"Stopped")+` module: "${c.ot}"`)))}catch(e){(null!==(l=t.q)&&void 0!==l?l:o.default.I).error(e,c)}return s},e.A=function(t){var e,n,i,u;let l=0;for(let r of t.R)try{t.$&&!r.et(null!==(e=t.F)&&void 0!==e?e:r.l.yt.P())||(l++,null===(i=null===(n=r.ut)||void 0===n?void 0:n[t.methodName])||void 0===i||i.call(n,...t.D))}catch(e){(null!==(u=t.q)&&void 0!==u?u:o.default.I).error({be:e,me:r,methodName:t.methodName,D:t.D})}return l},e.H=function(t){var e,n,i,u;let l=0;for(let r of t.R)try{r.et(null!==(e=t.F)&&void 0!==e?e:r.l.yt.P())?!r.isActive&&r.K.Z&&(l++,r.isActive=r.K.Z(),null===(n=t.q)||void 0===n||n.print(`Started module: "${r.ot}"`)):r.isActive&&r.K.ht&&(l++,r.isActive=r.K.ht(),null===(i=t.q)||void 0===i||i.print(`Stopped module: "${r.ot}"`))}catch(e){(null!==(u=t.q)&&void 0!==u?u:o.default.I).error(e,r)}return l},e.nt=function(t,e=!1){const n="string"==typeof t?new RegExp(t):t;return function(t){const i=t?"string"==typeof t?new URL(t):t:this.l.yt.P();return n.test(e?i.href:i.pathname)}}},458:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.Bt=void 0,e.Bt=function(t){let e=t,n=Math.floor(e/3600);e%=3600;let i=Math.floor(e/60);return e=Math.round(e%60),[n.toString().padStart(2,"0"),i.toString().padStart(2,"0"),e.toString().padStart(2,"0")].join(":")}},570:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0});const i=n(256),o=n(168);class u{constructor(t=u.Oe){var e,n;this.ge=!1;const o=Object.assign(Object.assign({},u.Oe),t);(0,i.fe)({source:this}),this.je=o.name,this.pe=o.pe,this.ye=o.ye,this.ge=null!==(n=null===(e=o._e)||void 0===e?void 0:e.call(o))&&void 0!==n&&n}Me(){switch(this.ye){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}we(t,e=!1){const n=[];for(let e of t)e&&n.push(`[${e}]`);const i=`${n.join(" ")}:`;return e?i+" ":i}Se(t=!1,e=!1){const n=[];return t&&n.push(this.Me()),this.ge&&n.push(u.Te),n.push(this.je),this.we(n,e)}print(...t){console.log(this.Se(this.pe,!1),...t)}error(...t){console.error(this.Se(this.pe,!1),...t)}prompt(t,e,n=!1){return globalThis.prompt(this.Se(n,!0)+t,e)}alert(t,e=!1){globalThis.alert(this.Se(e,!0)+t)}}e.default=u,u.Te="iframe",u.Oe={name:globalThis.GM_info?GM_info.script.name+" v"+GM_info.script.version:"",pe:!0,ye:"Locale",_e:o.xe},u.I=new u},256:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.fe=void 0,e.fe=function(t){var e,n;const i=null!==(e=t.Le)&&void 0!==e?e:t.source,o=t.Ne?{}:null!==(n=t.Re)&&void 0!==n?n:t.source,u=t.source.constructor===Object?Object.keys(t.source):Object.getOwnPropertyNames(Object.getPrototypeOf(t.source));for(let e of u)"constructor"!==e&&"function"==typeof t.source[e]?o[e]=t.source[e].bind(i):o[e]=t.source[e];return o}},168:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.ue=e.Ce=e.le=e.xe=e.isVisible=e.createElement=e.Ct=e.xt=e.evaluate=e.Ue=e.Tt=void 0,e.Tt=function(t){return document.querySelector(t)},e.Ue=function(t){return document.querySelectorAll(t)},e.evaluate=function(t,e,n,i,o){return document.evaluate(t,e,n,i,o)},e.xt=function(t=document.location){const e={};for(let n of t.search.substring(1).split("&"))e[n.substring(0,n.indexOf("="))]=n.substring(n.indexOf("=")+1);return e},e.Ct=function(t){var e,n;t&&(null===(n=null===(e=document.getElementById(t))||void 0===e?void 0:e.remove)||void 0===n||n.call(e))},e.createElement=function(t,e={},n){const i=Object.assign(document.createElement(t),e);return n&&i.append(...n),i},e.isVisible=function(t){let e=globalThis.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility},e.xe=function(){return globalThis.self!==globalThis.top},e.le=document,e.Ce=document.head,e.ue=document.body},262:function(t,e,n){var i=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(256),u=i(n(570)),l=n(40),r=n(843);class s{constructor(t=s.$e){this.Ae=!1,this.De=r.H,this.P=l.P,(0,o.fe)({source:this});let e=Object.assign(Object.assign({},s.$e),t);this.Pe="",this.ke=new e.Ie(this.H),this.q=e.q,this.R=e.R,this.Ae=e.Ae,this.De=e.H.bind(this),this.P=e.P.bind(this)}H(){let t=this.P(),e=this.Ae?t.href:t.pathname;this.Pe!==e&&(this.Pe=e,this.q.print("Changed url!",`New ${this.Ae?"url":"pathname"}: "${e}"`),this.De({R:this.R,F:this.P(),q:this.q}))}start(){this.ke.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}}e.default=s,s.$e={R:[],q:u.default.I,Ae:!1,H:r.H,Ie:MutationObserver,P:l.P}},387:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const l=u(n(168)),r=n(256);class s{constructor(t=s.Be){this.He=[],this.target=document.body;const e=Object.assign(Object.assign({},s.Be),t);(0,r.fe)({source:this}),this.gt=e.gt,this.ke=new e.Ie(this.qe),this.target=e.target,this.He=[],e.h&&this.start()}qe(){var t,e,n,i,o,u;const l=[];let r;for(let s of this.He)r=s.query?this.gt.Ue(s.query):s.he?this.gt.evaluate(s.he.he,null!==(t=s.he.de)&&void 0!==t?t:document.body,null!==(e=s.he.Fe)&&void 0!==e?e:null,null!==(n=s.he.resultType)&&void 0!==n?n:XPathResult.ANY_TYPE,null!==(i=s.he.result)&&void 0!==i?i:null):null,r instanceof NodeList&&r.length>0||r instanceof XPathResult&&(null===(u=(o=s.he).ve)||void 0===u?void 0:u.call(o,r))?s.Xe(r):l.push(s);this.He=l}Ee(t,e){if(!t)return;const n=this.gt.Ue(t);if(n.length>0)return e(n);this.He.push({query:t,Xe:e})}ae(t,e){var n,i,o,u,l;if(!t)return;const r=this.gt.evaluate(t.he,null!==(n=t.de)&&void 0!==n?n:document.body,null!==(i=t.Fe)&&void 0!==i?i:null,null!==(o=t.resultType)&&void 0!==o?o:XPathResult.ANY_TYPE,null!==(u=t.result)&&void 0!==u?u:null);if(null===(l=t.ve)||void 0===l?void 0:l.call(t,r))return e(r);this.He.push({he:t,Xe:e})}start(){this.ke.observe(this.target,{subtree:!0,childList:!0})}stop(){this.ke.disconnect()}}e.default=s,s.Be={Ie:MutationObserver,gt:l,target:document.body,h:!1}},40:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.P=e.Lt=e.Rt=e.navigate=void 0,e.navigate=function(t){document.location.assign(t.toString())},e.Rt=function(t,e){document.location[t]=e},e.Lt=function(t){globalThis.GM_openInTab?GM_openInTab(t.toString()):globalThis.open(t.toString(),"_blank")},e.P=function(){return document.location}},873:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.u=e.Ge=e.B=e.k=e.jt=e.Ht=e.Ve=void 0,e.Ve=u(n(256)),e.Ht=u(n(458)),e.jt=u(n(168)),e.k=u(n(40));var r=n(570);Object.defineProperty(e,"B",{V:!0,get:function(){return l(r).default}});var s=n(262);Object.defineProperty(e,"Ge",{V:!0,get:function(){return l(s).default}});var c=n(387);Object.defineProperty(e,"u",{V:!0,get:function(){return l(c).default}})}},e={};(function n(i){var o=e[i];if(void 0!==o)return o.exports;var u=e[i]={exports:{}};return t[i].call(u.exports,u,u.exports,n),u.exports})(607)})();