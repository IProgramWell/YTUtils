// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       none
// @version     1.5.6
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @homepageURL https://github.com/IProgramWell/YTUtils
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var e={715:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YTUModule=void 0;const a=n(375),s=l(n(184)),u=i(n(910)),d=i(n(960));class c extends a.AutoBound{constructor(e){if(super(),this.eventHandlers={},this.methods={},this.shouldBeActive=()=>!0,this.moduleName=null,this.logger=s.default.GLOBAL_MANAGER,this.utils={urlUtils:u,pageUtils:d},this.state={},this.isActive=!1,!e.shouldBeActive)throw new Error("Path regex not specified");if(this.shouldBeActive=e.shouldBeActive.bind(this),e.eventHandlers)for(let[t,n]of Object.entries(e.eventHandlers))"function"==typeof n&&(this.eventHandlers[t]=n.bind(this));if(e.methods)for(let[t,n]of Object.entries(e.methods))"function"==typeof n&&(this.methods[t]=n.bind(this));e.logger&&(this.logger=e.logger),e.moduleName&&(this.moduleName=e.moduleName),e.utils&&(this.utils=e.utils)}getStateValue(e,t=null){var n;return null!==(n=this.state[e])&&void 0!==n?n:t}setStateValue(e,t){this.state[e]=t}}t.YTUModule=c,t.default=c},815:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleUtils=t.YTUModule=t.MODULES=void 0;var a=n(464);Object.defineProperty(t,"MODULES",{enumerable:!0,get:function(){return l(a).default}});var s=n(715);Object.defineProperty(t,"YTUModule",{enumerable:!0,get:function(){return l(s).default}}),t.ModuleUtils=i(n(403))},464:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(905),i=o(n(715)),l=n(403);t.default=[new i.default({eventHandlers:{onModuleStart:r.noShortsOnURLChange},shouldBeActive:(0,l.activateForRegex)(/^\/shorts\/.*\/?$/i,!1),moduleName:"No Shorts Redirector"}),new i.default({methods:{onPageDataFetch:r.initCustomPlaylistRuntimeDisplay},shouldBeActive:(0,l.activateForRegex)(/^\/playlist\/?$/i,!1),moduleName:"Custom Playlist Statistics"}),new i.default({eventHandlers:{onDocumentLoad:r.noPlaylist.addNoPLControls,onModuleStart:r.noPlaylist.addNoPLControls,onModuleStop:r.noPlaylist.removeNoPLControls},shouldBeActive:r.noPlaylist.shouldBeActiveFor,moduleName:"No Playlist Controls"})]},403:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.activateForRegex=t.onUrlChange=t.callAllModulesMethod=t.onModuleEvent=void 0;const o=n(910);t.onModuleEvent=function(e){var t,n;let r;for(let i of e.moduleList)try{i.isActive!==i.shouldBeActive((0,o.getCurrentLocation)())&&(e.logger.print(i),r=null===(n=(t=i.eventHandlers)[e.eventHandlerName])||void 0===n?void 0:n.call(t,...e.handlerArgs),"boolean"==typeof r&&(i.isActive=r,e.logger.print(`${r?"Started":"Stopped"} module: "${i.moduleName}"`)))}catch(t){e.logger.error(t,i)}},t.callAllModulesMethod=function(e){var t,n;for(let r of e.moduleList)try{e.onlyIfShouldBeActive&&!r.shouldBeActive((0,o.getCurrentLocation)())||null===(n=null===(t=r.methods)||void 0===t?void 0:t[e.methodName])||void 0===n||n.call(t,...e.methodArgs)}catch(t){e.logger.error({err:t,module:r,methodName:e.methodName,methodArgs:e.methodArgs})}},t.onUrlChange=function(e){var t,n;for(let o of e.moduleList)try{o.shouldBeActive(e.currentLocation)?!o.isActive&&o.eventHandlers.onModuleStart&&(o.isActive=o.eventHandlers.onModuleStart(),null===(t=e.logger)||void 0===t||t.print(`Started module: "${o.moduleName}"`)):o.isActive&&o.eventHandlers.onModuleStop&&(o.isActive=o.eventHandlers.onModuleStop(),null===(n=e.logger)||void 0===n||n.print(`Stopped module: "${o.moduleName}"`))}catch(t){e.logger.error(t,o)}},t.activateForRegex=function(e,t=!1){const n="string"==typeof e?new RegExp(e):e;return function(e){const o=e?"string"==typeof e?new URL(e):e:this.utils.urlUtils.getCurrentLocation();return n.test(t?o.href:o.pathname)}}},905:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.noPlaylist=t.noShortsOnURLChange=t.initCustomPlaylistRuntimeDisplay=void 0;var a=n(685);Object.defineProperty(t,"initCustomPlaylistRuntimeDisplay",{enumerable:!0,get:function(){return l(a).default}});var s=n(701);Object.defineProperty(t,"noShortsOnURLChange",{enumerable:!0,get:function(){return l(s).default}}),t.noPlaylist=i(n(534))},534:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shouldBeActiveFor=t.removeNoPLControls=t.addNoPLControls=void 0,t.addNoPLControls=function(){var e,t,n;const{urlUtils:o,pageUtils:r}=this.utils,i="float: left; top: 50%; white-space: nowrap;",l="ytutils-noplaylist-newtabcheckbox",a="ytutils-noplaylist-newtabcheckbox-label",s="ytutils-noplaylist-noplbtn";null===(e=this.setStateValue)||void 0===e||e.call(this,"newTabCheckboxID",l),null===(t=this.setStateValue)||void 0===t||t.call(this,"noPLButtonID",s),null===(n=this.setStateValue)||void 0===n||n.call(this,"newTabCheckboxLabelID",a);const u=["input",{type:"checkbox",id:l,style:`${i} transform: translateY(50%)`,name:l,title:"Open in new tab"}],d=["label",{htmlFor:l,innerHTML:"New tab?",style:i,id:a}],c=["button",{id:s,title:"Watch outside playlist",onclick:()=>{var e;let t=r.getSearchParams();(null===(e=r.queryElement(`#${l}`))||void 0===e?void 0:e.checked)?o.openNewTab(`https://youtube.com/watch?v=${t.v}`):o.setLocationAttribute("search",`?v=${t.v}`)},innerHTML:"No Playlist",style:i}];return r.render(r.queryElement(".ytp-right-controls"),[u,d,c],"start"),!0},t.removeNoPLControls=function(){var e;for(let t of["noPLButtonID","newTabCheckboxID","newTabCheckboxLabelID"])this.utils.pageUtils.removeElementById(null===(e=this.getStateValue)||void 0===e?void 0:e.call(this,t,null));return!1},t.shouldBeActiveFor=function(e){const t=e?"string"==typeof e?new URL(e):e:this.utils.urlUtils.getCurrentLocation();return"/watch"===t.pathname&&!!this.utils.pageUtils.getSearchParams(t).list}},701:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const[,e,t]=this.urlUtils.getCurrentLocation().pathname.split("/");return"shorts"===e&&this.utils.urlUtils.navigate(`https://youtube.com/watch?v=${t}`),!0}},685:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(928);t.default=function(e){let t=e.detail.pageData.response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents.reduce(((e,t)=>{var n,o,r;let i=Number.parseInt(t.playlistVideoRenderer.lengthSeconds),l=i-i*((null===(r=null===(o=null===(n=t.playlistVideoRenderer)||void 0===n?void 0:n.thumbnailOverlays[1])||void 0===o?void 0:o.thumbnailOverlayResumePlaybackRenderer)||void 0===r?void 0:r.percentDurationWatched)||0)/100;return e.total+=i,e.remaining+=l,e}),{total:0,remaining:0}),n=`Runtime: ${o.DateUtils.getTimeString(t.total)}`,r=`Estimated remaining: ${o.DateUtils.getTimeString(t.remaining)}`;this.logger.print({playlistSeconds:t,runtimeString:n,remainingString:r}),e.detail.pageData.response.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer.stats.push({simpleText:n},{simpleText:r}),this.logger.print("Added time to playlist!"),this.isActive=!0}},627:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeString=void 0,t.getTimeString=function(e){let t=e,n=Math.floor(t/3600);t%=3600;let o=Math.floor(t/60);return t=Math.round(t%60),[n.toString().padStart(2,"0"),o.toString().padStart(2,"0"),t.toString().padStart(2,"0")].join(":")}},184:(e,t,n)=>{var o,r,i,l;Object.defineProperty(t,"__esModule",{value:!0});const a=n(375);class s extends a.AutoBound{constructor(e,t=!0,n="Locale"){super(),this.scriptName=e,this.logTimestamp=t,this.timestampFormat=n}getTimestamp(){switch(this.timestampFormat){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}joinPrefixes(e,t=!1){return e.map((e=>`[${e}]`)).join(" ")+":"+(t?" ":"")}getPrefix(e=!1,t=!1){return this.joinPrefixes([...e?[this.getTimestamp()]:[],this.scriptName],t)}print(...e){console.log(this.getPrefix(this.logTimestamp,!1),...e)}error(...e){console.error(this.getPrefix(this.logTimestamp,!1),...e)}prompt(e,t,n=!1){return globalThis.prompt(this.getPrefix(n,!0)+e,t)}alert(e,t=!1){globalThis.alert(this.getPrefix(t,!0)+e)}}t.default=s,s.GLOBAL_MANAGER=new s(null!==(l=null===(i=null===(r=null===(o=globalThis.GM_info)||void 0===o?void 0:o.call(globalThis))||void 0===r?void 0:r.script)||void 0===i?void 0:i.name)&&void 0!==l?l:"YT Utils")},375:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.arrToObj=t.AutoBound=t.bindMethods=void 0,t.bindMethods=function(e,t=null,n=null){let o=[];o=e.constructor===Object?Object.keys(e):Object.getOwnPropertyNames(Object.getPrototypeOf(e)),t||(t=e),n||(n=e);for(let r of o)"constructor"!==r&&"function"==typeof e[r]&&(n[r]=e[r].bind(t))};t.AutoBound=class{constructor(){let e=Object.getOwnPropertyNames(Object.getPrototypeOf(this));for(let t of e)"constructor"!==t&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}},t.arrToObj=function(e,t=((e,t)=>t.toString()),n=(e=>e)){const o={};for(let r=0;r<e.length;r++)o[t(e[r],r,e)]=n(e[r],r,e);return o}},960:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.elementize=t.removeElementById=t.getSearchParams=t.queryAllElements=t.queryElement=void 0;const o=n(375);function r(e){const[t,n,...o]=e,i=Object.assign(document.createElement(t),null!=n?n:{}),l=null==o?void 0:o.reduce(((e,t)=>{if(null!=t)switch(typeof t){case"string":e.push(t);break;case"object":Array.isArray(t)?e.push(r(t)):e.push(t);break;default:e.push(`${t}`)}return e}),[]);return l&&l.length>0&&i.append(...l),i}t.queryElement=function(e){return document.querySelector(e)},t.queryAllElements=function(e){return document.querySelectorAll(e)},t.getSearchParams=function(e=document.location){return(0,o.arrToObj)(e.search.substring(1).split("&"),(e=>e.substring(0,e.indexOf("="))),(e=>e.substring(e.indexOf("=")+1)))},t.removeElementById=function(e){if(!e)return;let t=document.getElementById(e);t&&t.parentNode.removeChild(t)},t.elementize=r,t.render=function(e,t,n="end"){if(console.log({parentElement:e,components:t,insertAt:n}),!e||!t||0===t.length)return;const o=t.reduce(((e,t)=>(t&&(Array.isArray(t)?e.push(r(t)):e.push(t)),e)),[]);if("start"===n)e.prepend(...o);else e.append(...o)}},150:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(375),i=o(n(184)),l=n(910),a=n(403),s={moduleList:[],logger:i.default.GLOBAL_MANAGER,watchWholeURL:!1,onUrlChange:a.onUrlChange,ObserverClass:MutationObserver,getCurrentLocation:l.getCurrentLocation};class u extends r.AutoBound{constructor(e=s){super(),this.watchWholeURL=!1;let t=Object.assign(Object.assign({},s),e);this.lastURL="",this.observerInstance=new t.ObserverClass(this.onUrlChange),this.logger=t.logger,this.moduleList=t.moduleList,this.watchWholeURL=t.watchWholeURL,this.urlChangeHandler=t.onUrlChange.bind(this),this.getCurrentLocation=t.getCurrentLocation.bind(this)}onUrlChange(){let e=this.getCurrentLocation(),t=this.watchWholeURL?e.href:e.pathname;this.lastURL!==t&&(this.lastURL=t,this.logger.print("Changed url!",`New ${this.watchWholeURL?"url":"pathname"}: "${t}"`),this.urlChangeHandler({moduleList:this.moduleList,currentLocation:this.getCurrentLocation(),logger:this.logger}))}start(){this.observerInstance.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}}t.default=u},910:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentLocation=t.openNewTab=t.setLocationAttribute=t.navigate=void 0,t.navigate=function(e){document.location.assign(e.toString())},t.setLocationAttribute=function(e,t){document.location[e]=t},t.openNewTab=function(e){globalThis.GM_openInTab?GM_openInTab(e.toString()):globalThis.open(e.toString(),"_blank")},t.getCurrentLocation=function(){return document.location}},928:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PathWatcher=t.IOManager=t.URLUtils=t.PageUtils=t.DateUtils=t.ObjUtils=void 0,t.ObjUtils=i(n(375)),t.DateUtils=i(n(627)),t.PageUtils=i(n(960)),t.URLUtils=i(n(910));var a=n(184);Object.defineProperty(t,"IOManager",{enumerable:!0,get:function(){return l(a).default}});var s=n(150);Object.defineProperty(t,"PathWatcher",{enumerable:!0,get:function(){return l(s).default}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{const e=n(928),t=n(815);new e.PathWatcher({moduleList:t.MODULES,watchWholeURL:!0}).start(),t.ModuleUtils.onModuleEvent({moduleList:t.MODULES,eventHandlerName:"onDocumentStart",handlerArgs:[],logger:e.IOManager.GLOBAL_MANAGER}),globalThis.addEventListener("yt-page-data-fetched",(n=>t.ModuleUtils.callAllModulesMethod({moduleList:t.MODULES,methodName:"onPageDataFetch",methodArgs:[n],logger:e.IOManager.GLOBAL_MANAGER,onlyIfShouldBeActive:!0}))),globalThis.addEventListener("load",(()=>t.ModuleUtils.onModuleEvent({moduleList:t.MODULES,eventHandlerName:"onDocumentLoad",handlerArgs:[],logger:e.IOManager.GLOBAL_MANAGER})))})()})();