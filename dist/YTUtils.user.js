// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       none
// @version     1.5.1
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var e={715:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(375),r=o(n(184));class l extends i.AutoBound{constructor(e){if(super(),this.eventHandlers={},this.methods={},this.state={},this.shouldBeActive=()=>!0,this.isActive=!1,this.moduleName=null,this.logger=r.default.GLOBAL_MANAGER,!e.shouldBeActive)throw new Error("Path regex not specified");this.shouldBeActive=e.shouldBeActive.bind(this),Object.assign(this.eventHandlers,(0,i.arrToObj)(Object.entries(e.eventHandlers),(([e])=>e),(([e,t])=>t.bind(this)))),e.methods&&Object.assign(this.methods,(0,i.arrToObj)(Object.entries(e.methods),(([e])=>e),(([e,t])=>t.bind(this)))),e.logger&&(this.logger=e.logger),e.moduleName&&(this.moduleName=e.moduleName)}getStateValue(e,t=null){var n;return null!==(n=this.state[e])&&void 0!==n?n:t}setStateValue(e,t){this.state[e]=t}}t.default=l},815:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleUtils=t.YTUModule=t.MODULES=void 0;var a=n(464);Object.defineProperty(t,"MODULES",{enumerable:!0,get:function(){return l(a).default}});var s=n(715);Object.defineProperty(t,"YTUModule",{enumerable:!0,get:function(){return l(s).default}}),t.ModuleUtils=r(n(403))},464:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(905),r=o(n(715)),l=n(403);t.default=[new r.default({eventHandlers:{onModuleStart:i.noShortsOnURLChange},shouldBeActive:(0,l.activateForRegex)(/^\/shorts\/.*\/?$/i),moduleName:"No Shorts Redirector"}),new r.default({eventHandlers:{onPageDataFetch:i.initCustomPlaylistRuntimeDisplay},shouldBeActive:(0,l.activateForRegex)(/^\/playlist\/?$/i),moduleName:"Custom Playlist Statistics"}),new r.default({eventHandlers:{onDocumentLoad:i.noPlaylist.addNoPLControls,onModuleStart:i.noPlaylist.addNoPLControls,onModuleStop:i.noPlaylist.removeNoPLControls},shouldBeActive:i.noPlaylist.shouldBeActiveFor,moduleName:"No Playlist Controls"})]},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.activateForRegex=t.onModuleEvent=void 0,t.onModuleEvent=function(e,t,n,o=!0){var i,r,l;for(let a of e)a.shouldBeActive(document.location)&&a.eventHandlers[t]&&"function"==typeof a.eventHandlers[t]&&(a.isActive=null!==(l=null===(r=(i=a.eventHandlers)[t])||void 0===r?void 0:r.call(i,...n))&&void 0!==l?l:o)},t.activateForRegex=function(e,t=!1){const n="string"==typeof e?new RegExp(e):e;return function(e=document.location){const o="string"==typeof e?new URL(e):e;return n.test(t?o.href:o.pathname)}}},905:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.noPlaylist=t.noShortsOnURLChange=t.initCustomPlaylistRuntimeDisplay=void 0;var a=n(685);Object.defineProperty(t,"initCustomPlaylistRuntimeDisplay",{enumerable:!0,get:function(){return l(a).default}});var s=n(701);Object.defineProperty(t,"noShortsOnURLChange",{enumerable:!0,get:function(){return l(s).default}}),t.noPlaylist=r(n(534))},534:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shouldBeActiveFor=t.removeNoPLControls=t.addNoPLControls=void 0;const o=n(960);t.addNoPLControls=function(){var e,t,n;const i="float: left; top: 50%; white-space: nowrap;",r="ytutils-noplaylist-newtabcheckbox",l="yt-utils-noplaylist-noplbtn";null===(e=this.setStateValue)||void 0===e||e.call(this,"newTabCheckboxID",r),null===(t=this.setStateValue)||void 0===t||t.call(this,"noPLButtonID",l);const a=Object.assign(document.createElement("input"),{type:"checkbox",id:r,style:`${i} transform: translateY(50%);`,name:r,title:"Open in new tab","aria-label":"Open in new tab"}),s=Object.assign(document.createElement("button"),{id:l,title:"Watch outside playlist","aria-label":"Watch outside playlist",onclick:()=>{var e;let t=(0,o.getSearchParams)();(null===(e=document.getElementById(r))||void 0===e?void 0:e.checked)?globalThis.GM_openInTab?GM_openInTab(`https://youtube.com/watch?v=${t.v}`):globalThis.open(`https://youtube.com/watch?v=${t.v}`,"_blank"):document.location.search=`?v=${t.v}`},innerHTML:"No Playlist",style:i});return null===(n=document.querySelector(".ytp-right-controls"))||void 0===n||n.prepend(a,s),!0},t.removeNoPLControls=function(){var e,t;return(0,o.removeElementById)(null===(e=this.getStateValue)||void 0===e?void 0:e.call(this,"newTabCheckboxID",null)),(0,o.removeElementById)(null===(t=this.getStateValue)||void 0===t?void 0:t.call(this,"noPLButtonID",null)),!1},t.shouldBeActiveFor=function(e){const t="string"==typeof e?new URL(e):e;return"/watch"===t.pathname&&!!(0,o.getSearchParams)(t).list}},701:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const[,e,t]=document.location.pathname.split("/");return"shorts"===e&&(document.location.href=`https://youtube.com/watch?v=${t}`),!0}},685:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addTimeManually=void 0;const o=n(627);t.default=function(e){let t=e.detail.pageData.response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents.reduce(((e,t)=>{var n,o,i;let r=Number.parseInt(t.playlistVideoRenderer.lengthSeconds),l=r-r*((null===(i=null===(o=null===(n=t.playlistVideoRenderer)||void 0===n?void 0:n.thumbnailOverlays[1])||void 0===o?void 0:o.thumbnailOverlayResumePlaybackRenderer)||void 0===i?void 0:i.percentDurationWatched)||0)/100;return e.total+=r,e.remaining+=l,e}),{total:0,remaining:0}),n=`Runtime: ${(0,o.getTimeString)(t.total)}`,i=`Estimated remaining: ${(0,o.getTimeString)(t.remaining)}`;return this.logger.print({playlistSeconds:t,runtimeString:n,remainingString:i}),e.detail.pageData.response.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer.stats.push({simpleText:n},{simpleText:i}),this.logger.print("Added time to playlist!"),!0},t.addTimeManually=function(e,t=!0){try{const n=document.getElementById("stats");return!!n&&(t&&n.innerText.includes(e)||(n.appendChild(Object.assign(document.createElement("yt-formatted-string"),{className:"style-scope ytd-playlist-sidebar-primary-info-renderer"})).innerText=e),!0)}catch(e){return!1}}},627:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeString=void 0,t.getTimeString=function(e){let t=e,n=Math.floor(t/3600);t%=3600;let o=Math.floor(t/60);return t=Math.round(t%60),[n.toString().padStart(2,"0"),o.toString().padStart(2,"0"),t.toString().padStart(2,"0")].join(":")}},184:(e,t,n)=>{var o,i,r,l;Object.defineProperty(t,"__esModule",{value:!0});const a=n(375);class s extends a.AutoBound{constructor(e,t=!0,n="Locale"){super(),this.scriptName=e,this.logTimestamp=t,this.timestampFormat=n}getTimestamp(){switch(this.timestampFormat){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}joinPrefixes(e,t=!1){return e.map((e=>`[${e}]`)).join(" ")+":"+(t?" ":"")}getPrefix(e=!1,t=!1){return this.joinPrefixes([...e?[this.getTimestamp()]:[],this.scriptName],t)}print(...e){console.log(this.getPrefix(this.logTimestamp,!1),...e)}prompt(e,t,n=!1){return globalThis.prompt(this.getPrefix(n,!0)+e,t)}alert(e,t=!1){globalThis.alert(this.getPrefix(t,!0)+e)}}t.default=s,s.GLOBAL_MANAGER=new s(null!==(l=null===(r=null===(i=null===(o=globalThis.GM_info)||void 0===o?void 0:o.call(globalThis))||void 0===i?void 0:i.script)||void 0===r?void 0:r.name)&&void 0!==l?l:"YT Utils")},375:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.arrToObj=t.AutoBound=t.bindMethods=void 0,t.bindMethods=function(e,t=null,n=null){let o=[];o=e.constructor===Object?Object.keys(e):Object.getOwnPropertyNames(Object.getPrototypeOf(e)),t||(t=e),n||(n=e);for(let i of o)"constructor"!==i&&"function"==typeof e[i]&&(n[i]=e[i].bind(t))};t.AutoBound=class{constructor(){let e=Object.getOwnPropertyNames(Object.getPrototypeOf(this));for(let t of e)"constructor"!==t&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}},t.arrToObj=function(e,t=((e,t)=>t.toString()),n=(e=>e)){const o={};for(let i=0;i<e.length;i++)o[t(e[i],i,e)]=n(e[i],i,e);return o}},960:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeElementById=t.getSearchParams=void 0;const o=n(375);t.getSearchParams=function(e=document.location){return(0,o.arrToObj)(e.search.substring(1).split("&"),(e=>e.substring(0,e.indexOf("="))),(e=>e.substring(e.indexOf("=")+1)))},t.removeElementById=function(e){if(!e)return;let t=document.getElementById(e);t&&t.parentNode.removeChild(t)}},150:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(375),r=o(n(184));class l extends i.AutoBound{constructor(e,t=r.default.GLOBAL_MANAGER,n=!1){super(),this.watchWholeURL=!1,this.lastURL="",this.observerInstance=new MutationObserver(this.onUrlChange),this.logger=t,this.moduleList=e,this.watchWholeURL=n}onUrlChange(){var e,t,n,o,i,r;let l,a=this.watchWholeURL?document.location.href:document.location.pathname;if(this.lastURL!==a){this.lastURL=a,this.logger.print("Changed url!",`New ${this.watchWholeURL?"url":"pathname"}: "${a}"`);for(let a of this.moduleList)l=a.shouldBeActive(document.location),a.isActive&&!l&&a.eventHandlers.onModuleStop?(a.isActive=null!==(n=null===(t=(e=a.eventHandlers).onModuleStop)||void 0===t?void 0:t.call(e))&&void 0!==n&&n,a.isActive||this.logger.print(`Stopped module: "${a.moduleName}"`)):!a.isActive&&l&&a.eventHandlers.onModuleStart&&(a.isActive=null===(r=null===(i=(o=a.eventHandlers).onModuleStart)||void 0===i?void 0:i.call(o))||void 0===r||r,a.isActive&&this.logger.print(`Started module: "${a.moduleName}"`))}}start(){this.observerInstance.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}}t.default=l},928:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PathWatcher=t.IOManager=t.PageUtils=t.DateUtils=t.ObjUtils=void 0,t.ObjUtils=r(n(375)),t.DateUtils=r(n(627)),t.PageUtils=r(n(960));var a=n(184);Object.defineProperty(t,"IOManager",{enumerable:!0,get:function(){return l(a).default}});var s=n(150);Object.defineProperty(t,"PathWatcher",{enumerable:!0,get:function(){return l(s).default}})}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(()=>{const e=n(928),t=n(815);new e.PathWatcher(t.MODULES,e.IOManager.GLOBAL_MANAGER,!0).start(),t.ModuleUtils.onModuleEvent(t.MODULES,"onDocumentStart",[]),globalThis.addEventListener("yt-page-data-fetched",(e=>t.ModuleUtils.onModuleEvent(t.MODULES,"onPageDataFetch",[e]))),globalThis.addEventListener("load",(()=>t.ModuleUtils.onModuleEvent(t.MODULES,"onDocumentLoad",[])))})()})();