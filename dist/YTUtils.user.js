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
(()=>{"use strict";var t={913:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0}),e.i=e.o=void 0;const i=n(751);e.o=new i.l.u({h:!0,target:document}),e.i={v:"onPageDataFetch",m:"onNavigateFinish",O:"onServiceReqCompleted",g:"onNavigateRedirect",j:"onAppContext",p:"onContextProviderGet",_:"playlistReloading",M:"onPlaylistUpdated"}},607:function(t,e,n){var i=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(751),u=i(n(815)),l=n(913);for(let t of["init","onDocumentStart"])o.N.L.T({R:u.default,C:t,U:[],$:!1});for(let[t,e]of Object.entries(l.i))globalThis.addEventListener(t,(function(t){o.N.L.A({R:u.default,methodName:e,D:[t],$:!0})}));globalThis.addEventListener("load",(function(){o.N.L.T({R:u.default,C:"onDocumentLoad",U:[]})})),globalThis.addEventListener("yt-navigate-finish",(function(){const t=o.l.k.P();o.l.B.I.print(`Changed url! New url: "${t.href}"`),o.N.L.H({R:u.default,q:o.l.B.I,F:t})}))},815:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const l=n(751),r=n(913),s=u(n(828)),c=u(n(566)),a=u(n(105)),h=u(n(138));e.default=[new l.N.J({K:{Z:c.tt},et:l.N.L.nt(/^\/shorts\/.+$/i),it:"No Shorts Redirector"}),new l.N.J({ot:{[r.i["v"]]:s.ut,[r.i["O"]]:s.lt},et:l.N.L.nt(/^\/playlist\/?$/i),it:"Custom Playlist Statistics"}),new l.N.J({K:{rt:a.st,Z:a.st,ct:a.ht},et:a.dt,it:"No Playlist Controls"}),new l.N.J({K:{Z:h.vt,ct:h.ft},ot:{[r.i["v"]]:h.bt},et:l.N.L.nt(/^\/watch\/?$/),it:"Search by title",l:{Ot:l.l.gt,jt:l.l.k,yt:r.o}})]},105:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.dt=e.ht=e.st=void 0;const n={_t:"ytutils-noplaylist-newtabcheckbox",Mt:"ytutils-noplaylist-newtabcheckbox-label",wt:"ytutils-noplaylist-noplbtn"};e.st=function(){const{jt:t,Ot:e}=this.l,i=e.St(".ytp-right-controls"),o=e.Tt(),u="float: left; top: 50%; white-space: nowrap;";if(!i)return!1;if(!o.list)return!1;const l=e.createElement("input",{type:"checkbox",id:n._t,style:`${u} transform: translateY(50%)`,name:n._t,title:"Open in new tab"}),r=e.createElement("label",{htmlFor:n._t,innerHTML:"New tab?",style:u,id:n.Mt}),s=e.createElement("button",{id:n.wt,title:"Watch outside playlist",onclick(){var i;let o=e.Tt();(null===(i=e.St(`#${n._t}`))||void 0===i?void 0:i.checked)?t.xt(`https://youtube.com/watch?v=${o.Lt}`):t.Nt("search",`?v=${o.Lt}`)},innerHTML:"No Playlist",style:u});return i.prepend(l,r,s),!0},e.ht=function(){for(let t of Object.values(n))this.l.Ot.Rt(t);return!1},e.dt=function(t){const e=t?"string"==typeof t?new URL(t):t:this.l.jt.P();return/\/watch\/?/i.test(e.pathname)&&!!this.l.Ot.Tt(e).list}},566:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.tt=void 0,e.tt=function(){const[t,e,n]=this.l.jt.P().pathname.split("/");return"shorts"===e&&this.l.jt.navigate(`https://youtube.com/watch?v=${n}`),!0}},828:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0}),e.lt=e.ut=void 0;const i=n(751),o="totalRuntime",u="remainingRuntime";function l(t,e){var n,i,o;if(!e.Ct)return t;let u=Number.parseInt(e.Ct.Ut),l=u-u*((null===(o=null===(i=null===(n=e.Ct)||void 0===n?void 0:n.$t[1])||void 0===i?void 0:i.At)||void 0===o?void 0:o.Dt)||0)/100;return t.total+=u,t.Pt+=l,t}function r(t){return[{kt:[{text:"Runtime: "},{text:i.l.Bt.It(t.total)}]},{kt:[{text:"Estimated remaining: "},{text:i.l.Bt.It(t.Pt)}]}]}e.ut=function(t){const e=t.detail.Wt.response.Ht.Vt.Gt[0].Et.content.Xt.Ht[0].Ft.Ht[0].qt.Ht.reduce(l,{total:this.Qt(o,0),Pt:this.Qt(u,0)}),n=r(e);this.Yt(o,e.total),this.Yt(u,e.Pt),this.q.print({zt:e,Jt:n,Kt:t.detail.Wt.response.sidebar.te.items[0].Zt.Kt}),t.detail.Wt.response.sidebar.te.items[0].Zt.Kt.push(...n),this.q.print("Added time to playlist!"),this.isActive=!0},e.lt=function(t){var e,n,i,s,c;if(!(null===(c=null===(s=null===(i=null===(n=null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.data)||void 0===n?void 0:n.ee)||void 0===i?void 0:i[0])||void 0===s?void 0:s.ne)||void 0===c?void 0:c.ie))return;const{oe:a,ue:h}=this.l.Ot,d=t.detail.data.ee[0].ne.ie.reduce(l,{total:this.Qt(o,0),Pt:this.Qt(u,0)}),v=r(d);let f,b;this.Yt(o,d.total),this.Yt(u,d.Pt),this.q.print({zt:d,Jt:v});for(let t of v)[f,b]=t.kt,this.l.Ot.evaluate(`//ytd-playlist-byline-renderer/div/yt-formatted-string/span[text() = "${f.text}"]`,null!=a?a:h,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null).singleNodeValue.parentElement.lastChild.textContent=b.text}},138:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.ft=e.vt=e.bt=void 0;const n={le:"ytutils-searchbytitle-searchbtn"},i="videoTitle";e.bt=function(t){var e;null===(e=null==this?void 0:this.Yt)||void 0===e||e.call(this,i,t.detail.Wt.se.re.title)},e.vt=function(){var t;const{l:{Ot:e,jt:o,yt:u},q:l,Qt:r}=this;if(!u)return!1;const s=e.createElement("span",{innerText:"🔍",title:"Search by this video's title",style:"cursor: grab;",id:n.le,onclick(){o.navigate(`https://youtube.com/results?search_query=${encodeURIComponent(null==r?void 0:r(i,null))}`)}});return u.ce({ae:'//div[@id="title"]/h1/yt-formatted-string[text()]',he:null!==(t=e.oe)&&void 0!==t?t:e.ue,de(t){try{return!!t.singleNodeValue}catch(t){return!1}},resultType:XPathResult.ANY_UNORDERED_NODE_TYPE},(function(t){l.print(t.singleNodeValue),t.singleNodeValue.parentElement.append(s)})),!0},e.ft=function(){for(let t of Object.values(n))this.l.Ot.Rt(t);return!1}},751:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0}),e.l=e.N=void 0,e.N=u(n(230)),e.l=u(n(873))},51:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.J=void 0;const r=n(256),s=l(n(570)),c=u(n(40)),a=u(n(168));class h{constructor(t){var e,n;this.K={},this.ot={},this.et=()=>!0,this.it=null,this.q=s.default.I,this.l={jt:c,Ot:a},this.state={},this.isActive=!1,(0,r.ve)({source:this}),t.et&&(this.et=t.et.bind(this));for(let[n,i]of Object.entries(null!==(e=t.K)&&void 0!==e?e:{}))"function"==typeof i&&(this.K[n]=i.bind(this));for(let[e,i]of Object.entries(null!==(n=t.ot)&&void 0!==n?n:{}))"function"==typeof i&&(this.ot[e]=i.bind(this));t.q&&(this.q=t.q),t.it&&(this.it=t.it),t.l&&(this.l=t.l)}Qt(t,e=null){var n;return null!==(n=this.state[t])&&void 0!==n?n:e}Yt(t,e){this.state[t]=e}}e.J=h,e.default=h},230:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.L=e.J=void 0;var r=n(51);Object.defineProperty(e,"J",{V:!0,get:function(){return l(r).default}}),e.L=u(n(843))},843:function(t,e,n){var i=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.nt=e.H=e.A=e.T=void 0;const o=i(n(570));e.T=function(t){var e,n,i,u,l;let r,s=0;for(let c of t.R)try{t.$&&c.isActive===c.et(null!==(e=t.F)&&void 0!==e?e:c.l.jt.P())||(r=null===(i=(n=c.K)[t.C])||void 0===i?void 0:i.call(n,...t.U),"boolean"==typeof r&&r!==c.isActive&&(c.isActive=r,s++,(null!==(u=t.q)&&void 0!==u?u:o.default.I).print((r?"Started":"Stopped")+` module: "${c.it}"`)))}catch(e){(null!==(l=t.q)&&void 0!==l?l:o.default.I).error(e,c)}return s},e.A=function(t){var e,n,i,u;let l=0;for(let r of t.R)try{t.$&&!r.et(null!==(e=t.F)&&void 0!==e?e:r.l.jt.P())||(l++,null===(i=null===(n=r.ot)||void 0===n?void 0:n[t.methodName])||void 0===i||i.call(n,...t.D))}catch(e){(null!==(u=t.q)&&void 0!==u?u:o.default.I).error({fe:e,be:r,methodName:t.methodName,D:t.D})}return l},e.H=function(t){var e,n,i,u;let l=0;for(let r of t.R)try{r.et(null!==(e=t.F)&&void 0!==e?e:r.l.jt.P())?!r.isActive&&r.K.Z&&(l++,r.isActive=r.K.Z(),null===(n=t.q)||void 0===n||n.print(`Started module: "${r.it}"`)):r.isActive&&r.K.ct&&(l++,r.isActive=r.K.ct(),null===(i=t.q)||void 0===i||i.print(`Stopped module: "${r.it}"`))}catch(e){(null!==(u=t.q)&&void 0!==u?u:o.default.I).error(e,r)}return l},e.nt=function(t,e=!1){const n="string"==typeof t?new RegExp(t):t;return function(t){const i=t?"string"==typeof t?new URL(t):t:this.l.jt.P();return n.test(e?i.href:i.pathname)}}},458:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.It=void 0,e.It=function(t){let e=t,n=Math.floor(e/3600);e%=3600;let i=Math.floor(e/60);return e=Math.round(e%60),[n.toString().padStart(2,"0"),i.toString().padStart(2,"0"),e.toString().padStart(2,"0")].join(":")}},570:(t,e,n)=>{Object.defineProperty(e,"t",{value:!0});const i=n(256),o=n(168);class u{constructor(t=u.me){var e,n;this.Oe=!1;const o=Object.assign(Object.assign({},u.me),t);(0,i.ve)({source:this}),this.ge=o.name,this.je=o.je,this.pe=o.pe,this.Oe=null!==(n=null===(e=o.ye)||void 0===e?void 0:e.call(o))&&void 0!==n&&n}_e(){switch(this.pe){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}Me(t,e=!1){const n=[];for(let e of t)e&&n.push(`[${e}]`);const i=`${n.join(" ")}:`;return e?i+" ":i}we(t=!1,e=!1){const n=[];return t&&n.push(this._e()),this.Oe&&n.push(u.Se),n.push(this.ge),this.Me(n,e)}print(...t){console.log(this.we(this.je,!1),...t)}error(...t){console.error(this.we(this.je,!1),...t)}prompt(t,e,n=!1){return globalThis.prompt(this.we(n,!0)+t,e)}alert(t,e=!1){globalThis.alert(this.we(e,!0)+t)}}e.default=u,u.Se="iframe",u.me={name:globalThis.GM_info?GM_info.script.name+" v"+GM_info.script.version:"",je:!0,pe:"Locale",ye:o.Te},u.I=new u},256:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.ve=void 0,e.ve=function(t){var e,n;const i=null!==(e=t.xe)&&void 0!==e?e:t.source,o=t.Le?{}:null!==(n=t.Ne)&&void 0!==n?n:t.source,u=t.source.constructor===Object?Object.keys(t.source):Object.getOwnPropertyNames(Object.getPrototypeOf(t.source));for(let e of u)"constructor"!==e&&"function"==typeof t.source[e]?o[e]=t.source[e].bind(i):o[e]=t.source[e];return o}},168:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.oe=e.Re=e.ue=e.Te=e.isVisible=e.createElement=e.Rt=e.Tt=e.evaluate=e.Ce=e.St=void 0,e.St=function(t){return document.querySelector(t)},e.Ce=function(t){return document.querySelectorAll(t)},e.evaluate=function(t,e,n,i,o){return document.evaluate(t,e,n,i,o)},e.Tt=function(t=document.location){const e={};for(let n of t.search.substring(1).split("&"))e[n.substring(0,n.indexOf("="))]=n.substring(n.indexOf("=")+1);return e},e.Rt=function(t){var e,n;t&&(null===(n=null===(e=document.getElementById(t))||void 0===e?void 0:e.remove)||void 0===n||n.call(e))},e.createElement=function(t,e={},n){const i=Object.assign(document.createElement(t),e);return n&&i.append(...n),i},e.isVisible=function(t){let e=globalThis.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility},e.Te=function(){return globalThis.self!==globalThis.top},e.ue=document,e.Re=document.head,e.oe=document.body},262:function(t,e,n){var i=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0});const o=n(256),u=i(n(570)),l=n(40),r=n(843);class s{constructor(t=s.Ue){this.$e=!1,this.Ae=r.H,this.P=l.P,(0,o.ve)({source:this});let e=Object.assign(Object.assign({},s.Ue),t);this.De="",this.Pe=new e.ke(this.H),this.q=e.q,this.R=e.R,this.$e=e.$e,this.Ae=e.H.bind(this),this.P=e.P.bind(this)}H(){let t=this.P(),e=this.$e?t.href:t.pathname;this.De!==e&&(this.De=e,this.q.print("Changed url!",`New ${this.$e?"url":"pathname"}: "${e}"`),this.Ae({R:this.R,F:this.P(),q:this.q}))}start(){this.Pe.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}}e.default=s,s.Ue={R:[],q:u.default.I,$e:!1,H:r.H,ke:MutationObserver,P:l.P}},387:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"t",{value:!0});const l=u(n(168)),r=n(256);class s{constructor(t=s.Ie){this.Be=[],this.target=document.body;const e=Object.assign(Object.assign({},s.Ie),t);(0,r.ve)({source:this}),this.Ot=e.Ot,this.Pe=new e.ke(this.He),this.target=e.target,this.Be=[],e.h&&this.start()}He(){var t,e,n,i,o,u;const l=[];let r;for(let s of this.Be)r=s.query?this.Ot.Ce(s.query):s.ae?this.Ot.evaluate(s.ae.ae,null!==(t=s.ae.he)&&void 0!==t?t:document.body,null!==(e=s.ae.qe)&&void 0!==e?e:null,null!==(n=s.ae.resultType)&&void 0!==n?n:XPathResult.ANY_TYPE,null!==(i=s.ae.result)&&void 0!==i?i:null):null,r instanceof NodeList&&r.length>0||r instanceof XPathResult&&(null===(u=(o=s.ae).de)||void 0===u?void 0:u.call(o,r))?s.Fe(r):l.push(s);this.Be=l}Xe(t,e){if(!t)return;const n=this.Ot.Ce(t);if(n.length>0)return e(n);this.Be.push({query:t,Fe:e})}ce(t,e){var n,i,o,u,l;if(!t)return;const r=this.Ot.evaluate(t.ae,null!==(n=t.he)&&void 0!==n?n:document.body,null!==(i=t.qe)&&void 0!==i?i:null,null!==(o=t.resultType)&&void 0!==o?o:XPathResult.ANY_TYPE,null!==(u=t.result)&&void 0!==u?u:null);if(null===(l=t.de)||void 0===l?void 0:l.call(t,r))return e(r);this.Be.push({ae:t,Fe:e})}start(){this.Pe.observe(this.target,{subtree:!0,childList:!0})}stop(){this.Pe.disconnect()}}e.default=s,s.Ie={ke:MutationObserver,Ot:l,target:document.body,h:!1}},40:(t,e)=>{Object.defineProperty(e,"t",{value:!0}),e.P=e.xt=e.Nt=e.navigate=void 0,e.navigate=function(t){document.location.assign(t.toString())},e.Nt=function(t,e){document.location[t]=e},e.xt=function(t){globalThis.GM_openInTab?GM_openInTab(t.toString()):globalThis.open(t.toString(),"_blank")},e.P=function(){return document.location}},873:function(t,e,n){var i=this&&this.X||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.t:o.writable||o.G)||(o={V:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.W||(Object.create?function(t,e){Object.defineProperty(t,"default",{V:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.Y||function(t){if(t&&t.t)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e},l=this&&this.S||function(t){return t&&t.t?t:{default:t}};Object.defineProperty(e,"t",{value:!0}),e.u=e.Ee=e.B=e.k=e.gt=e.Bt=e.Ge=void 0,e.Ge=u(n(256)),e.Bt=u(n(458)),e.gt=u(n(168)),e.k=u(n(40));var r=n(570);Object.defineProperty(e,"B",{V:!0,get:function(){return l(r).default}});var s=n(262);Object.defineProperty(e,"Ee",{V:!0,get:function(){return l(s).default}});var c=n(387);Object.defineProperty(e,"u",{V:!0,get:function(){return l(c).default}})}},e={};(function n(i){var o=e[i];if(void 0!==o)return o.exports;var u=e[i]={exports:{}};return t[i].call(u.exports,u,u.exports,n),u.exports})(607)})();