// ==UserScript==
// @name        YT Utils
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/**
// @grant       GM_info
// @grant       GM_openInTab
// @version     1.6.0
// @author      -
// @inject-into page
// @run-at      document-start
// @description Useful YouTube utilities.
// @homepageURL https://github.com/IProgramWell/YTUtils
// @downloadURL https://raw.githubusercontent.com/IProgramWell/YTUtils/master/dist/YTUtils.user.js
// ==/UserScript==
(()=>{"use strict";var e={913:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GLOBAL_AWAITER=void 0;const o=n(751);t.GLOBAL_AWAITER=new o.utils.QueryAwaiter({autoStart:!0,target:document})},607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(751),r=o(n(815));function l(e){return function(t){i.modules.ModuleUtils.callAllModulesMethod({moduleList:r.default,methodName:e,methodArgs:[t],onlyIfShouldBeActive:!0})}}new i.utils.PathWatcher({moduleList:r.default,watchWholeURL:!0}).start(),i.modules.ModuleUtils.onModuleEvent({moduleList:r.default,eventHandlerName:"onDocumentStart",handlerArgs:[]}),globalThis.addEventListener("yt-page-data-fetched",l("onPageDataFetch")),globalThis.addEventListener("yt-navigate-finish",l("onNavigateFinish")),globalThis.addEventListener("load",(()=>i.modules.ModuleUtils.onModuleEvent({moduleList:r.default,eventHandlerName:"onDocumentLoad",handlerArgs:[]})))},815:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(751),s=n(913),u=l(n(828)),d=l(n(566)),c=r(n(105)),h=r(n(138));t.default=[new a.modules.PageModule({eventHandlers:{onModuleStart:d.default},shouldBeActive:a.modules.ModuleUtils.activateForRegex(/^\/shorts\/.*\/?$/i),moduleName:"No Shorts Redirector"}),new a.modules.PageModule({methods:{onPageDataFetch:u.default},shouldBeActive:a.modules.ModuleUtils.activateForRegex(/^\/playlist\/?$/i),moduleName:"Custom Playlist Statistics"}),new a.modules.PageModule({eventHandlers:{onDocumentLoad:c.addNoPLControls,onModuleStart:c.addNoPLControls,onModuleStop:c.removeNoPLControls},shouldBeActive:c.shouldBeActiveFor,moduleName:"No Playlist Controls"}),new a.modules.PageModule({eventHandlers:{onModuleStart:h.addSearchBtn,onModuleStop:h.removeSearchBtn},methods:{onPageDataFetch:h.updateTitleState},shouldBeActive:a.modules.ModuleUtils.activateForRegex(/^\/watch\/?$/),moduleName:"Search by title",utils:{pageUtils:a.utils.PageUtils,urlUtils:a.utils.URLUtils,queryAwaiter:s.GLOBAL_AWAITER}})]},105:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shouldBeActiveFor=t.removeNoPLControls=t.addNoPLControls=void 0;const n={newTabCheckboxID:"ytutils-noplaylist-newtabcheckbox",newTabCheckboxLabelID:"ytutils-noplaylist-newtabcheckbox-label",noPLButtonID:"ytutils-noplaylist-noplbtn"};t.addNoPLControls=function(){const{urlUtils:e,pageUtils:t}=this.utils,o=t.queryElement(".ytp-right-controls");if(!o)return!1;const i="float: left; top: 50%; white-space: nowrap;",r=t.createElement("input",{type:"checkbox",id:n.newTabCheckboxID,style:`${i} transform: translateY(50%)`,name:n.newTabCheckboxID,title:"Open in new tab"}),l=t.createElement("label",{htmlFor:n.newTabCheckboxID,innerHTML:"New tab?",style:i,id:n.newTabCheckboxLabelID}),a=t.createElement("button",{id:n.noPLButtonID,title:"Watch outside playlist",onclick(){var o;let i=t.getSearchParams();(null===(o=t.queryElement(`#${n.newTabCheckboxID}`))||void 0===o?void 0:o.checked)?e.openNewTab(`https://youtube.com/watch?v=${i.v}`):e.setLocationAttribute("search",`?v=${i.v}`)},innerHTML:"No Playlist",style:i});return o.prepend(r,l,a),!0},t.removeNoPLControls=function(){for(let e of Object.values(n))this.utils.pageUtils.removeElementById(e);return!1},t.shouldBeActiveFor=function(e){const t=e?"string"==typeof e?new URL(e):e:this.utils.urlUtils.getCurrentLocation();return/\/watch\/?/i.test(t.pathname)&&!!this.utils.pageUtils.getSearchParams(t).list}},566:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const[e,t,n]=this.utils.urlUtils.getCurrentLocation().pathname.split("/");return"shorts"===t&&this.utils.urlUtils.navigate(`https://youtube.com/watch?v=${n}`),!0}},828:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(751);t.default=function(e){let t=e.detail.pageData.response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents.reduce(((e,t)=>{var n,o,i;let r=Number.parseInt(t.playlistVideoRenderer.lengthSeconds),l=r-r*((null===(i=null===(o=null===(n=t.playlistVideoRenderer)||void 0===n?void 0:n.thumbnailOverlays[1])||void 0===o?void 0:o.thumbnailOverlayResumePlaybackRenderer)||void 0===i?void 0:i.percentDurationWatched)||0)/100;return e.total+=r,e.remaining+=l,e}),{total:0,remaining:0}),n=`Runtime: ${o.utils.DateUtils.getTimeString(t.total)}`,i=`Estimated remaining: ${o.utils.DateUtils.getTimeString(t.remaining)}`;this.logger.print({playlistSeconds:t,runtimeString:n,remainingString:i}),e.detail.pageData.response.sidebar.playlistSidebarRenderer.items[0].playlistSidebarPrimaryInfoRenderer.stats.push({simpleText:n},{simpleText:i}),this.logger.print("Added time to playlist!"),this.isActive=!0}},138:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeSearchBtn=t.addSearchBtn=t.updateTitleState=void 0;const n={SEARCH_BTN:"ytutils-searchbytitle-searchbtn"},o="videoTitle";t.updateTitleState=function(e){var t;null===(t=null==this?void 0:this.setStateValue)||void 0===t||t.call(this,o,e.detail.pageData.playerResponse.videoDetails.title)},t.addSearchBtn=function(){var e;const{utils:{pageUtils:t,urlUtils:i,queryAwaiter:r},logger:l,getStateValue:a}=this;if(!r)return!1;const s=t.createElement("span",{innerText:"🔍",title:"Search by this video's title",style:"cursor: grab;",id:n.SEARCH_BTN,onclick(){i.navigate(`https://youtube.com/results?search_query=${encodeURIComponent(null==a?void 0:a(o,null))}`)}});return r.addXpath({xpath:'//*[@id="container"]/h1/yt-formatted-string[text()]',contextNode:null!==(e=document.body)&&void 0!==e?e:document,isValidResult(e){try{return!!e.singleNodeValue}catch(e){return!1}},resultType:XPathResult.ANY_UNORDERED_NODE_TYPE},(function(e){l.print(e.singleNodeValue),e.singleNodeValue.parentElement.append(s)})),!0},t.removeSearchBtn=function(){for(let e of Object.values(n))this.utils.pageUtils.removeElementById(e);return!1}},751:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t.modules=void 0,t.modules=r(n(230)),t.utils=r(n(873))},51:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageModule=void 0;const a=n(256),s=l(n(570)),u=r(n(40)),d=r(n(168));class c extends a.AutoBound{constructor(e){var t,n;super(),this.eventHandlers={},this.methods={},this.shouldBeActive=()=>!0,this.moduleName=null,this.logger=s.default.GLOBAL_MANAGER,this.utils={urlUtils:u,pageUtils:d},this.state={},this.isActive=!1,e.shouldBeActive&&(this.shouldBeActive=e.shouldBeActive.bind(this));for(let[n,o]of Object.entries(null!==(t=e.eventHandlers)&&void 0!==t?t:{}))"function"==typeof o&&(this.eventHandlers[n]=o.bind(this));for(let[t,o]of Object.entries(null!==(n=e.methods)&&void 0!==n?n:{}))"function"==typeof o&&(this.methods[t]=o.bind(this));e.logger&&(this.logger=e.logger),e.moduleName&&(this.moduleName=e.moduleName),e.utils&&(this.utils=e.utils)}getStateValue(e,t=null){var n;return null!==(n=this.state[e])&&void 0!==n?n:t}setStateValue(e,t){this.state[e]=t}}t.PageModule=c,t.default=c},230:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ModuleUtils=t.PageModule=void 0;var a=n(51);Object.defineProperty(t,"PageModule",{enumerable:!0,get:function(){return l(a).default}}),t.ModuleUtils=r(n(843))},843:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.activateForRegex=t.onUrlChange=t.callAllModulesMethod=t.onModuleEvent=void 0;const i=o(n(570));t.onModuleEvent=function(e){var t,n,o,r,l;let a;for(let s of e.moduleList)try{s.isActive!==s.shouldBeActive(null!==(t=e.currentLocation)&&void 0!==t?t:s.utils.urlUtils.getCurrentLocation())&&(a=null===(o=(n=s.eventHandlers)[e.eventHandlerName])||void 0===o?void 0:o.call(n,...e.handlerArgs),"boolean"==typeof a&&a!==s.isActive&&(s.isActive=a,(null!==(r=e.logger)&&void 0!==r?r:i.default.GLOBAL_MANAGER).print((a?"Started":"Stopped")+` module: "${s.moduleName}"`)))}catch(t){(null!==(l=e.logger)&&void 0!==l?l:i.default.GLOBAL_MANAGER).error(t,s)}},t.callAllModulesMethod=function(e){var t,n,o,r;for(let l of e.moduleList)try{e.onlyIfShouldBeActive&&!l.shouldBeActive(null!==(t=e.currentLocation)&&void 0!==t?t:l.utils.urlUtils.getCurrentLocation())||null===(o=null===(n=l.methods)||void 0===n?void 0:n[e.methodName])||void 0===o||o.call(n,...e.methodArgs)}catch(t){(null!==(r=e.logger)&&void 0!==r?r:i.default.GLOBAL_MANAGER).error({err:t,module:l,methodName:e.methodName,methodArgs:e.methodArgs})}},t.onUrlChange=function(e){var t,n,o,r;for(let l of e.moduleList)try{l.shouldBeActive(null!==(t=e.currentLocation)&&void 0!==t?t:l.utils.urlUtils.getCurrentLocation())?!l.isActive&&l.eventHandlers.onModuleStart&&(l.isActive=l.eventHandlers.onModuleStart(),null===(n=e.logger)||void 0===n||n.print(`Started module: "${l.moduleName}"`)):l.isActive&&l.eventHandlers.onModuleStop&&(l.isActive=l.eventHandlers.onModuleStop(),null===(o=e.logger)||void 0===o||o.print(`Stopped module: "${l.moduleName}"`))}catch(t){(null!==(r=e.logger)&&void 0!==r?r:i.default.GLOBAL_MANAGER).error(t,l)}},t.activateForRegex=function(e,t=!1){const n="string"==typeof e?new RegExp(e):e;return function(e){const o=e?"string"==typeof e?new URL(e):e:this.utils.urlUtils.getCurrentLocation();return n.test(t?o.href:o.pathname)}}},458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeString=void 0,t.getTimeString=function(e){let t=e,n=Math.floor(t/3600);t%=3600;let o=Math.floor(t/60);return t=Math.round(t%60),[n.toString().padStart(2,"0"),o.toString().padStart(2,"0"),t.toString().padStart(2,"0")].join(":")}},570:(e,t,n)=>{var o;Object.defineProperty(t,"__esModule",{value:!0});const i=n(256),r=n(168),{script:{name:l,version:a}}=null!==(o=globalThis.GM_info)&&void 0!==o?o:{script:{}};class s extends i.AutoBound{constructor(e=s.DEFAULT_LOGGER_OPTIONS){var t,n;const o=Object.assign(Object.assign({},s.DEFAULT_LOGGER_OPTIONS),e);super(),this.isInIFrame=!1,this.scriptName=o.name,this.logTimestamp=o.logTimestamp,this.timestampFormat=o.timestampFormat,this.isInIFrame=null!==(n=null===(t=o.detectIFrames)||void 0===t?void 0:t.call(o))&&void 0!==n&&n}getTimestamp(){switch(this.timestampFormat){case"UTC":return(new Date).toUTCString();case"ISO":return(new Date).toISOString();case"Locale":return(new Date).toLocaleString();case"Milliseconds":return(new Date).getTime().toString();default:return(new Date).toString()}}joinPrefixes(e,t=!1){const n=[];for(let t of e)t&&n.push(`[${t}]`);const o=`${n.join(" ")}:`;return t?o+" ":o}getPrefix(e=!1,t=!1){const n=[];return e&&n.push(this.getTimestamp()),this.isInIFrame&&n.push(s.IFRAME_LOG_PREFIX),n.push(this.scriptName),this.joinPrefixes(n,t)}print(...e){console.log(this.getPrefix(this.logTimestamp,!1),...e)}error(...e){console.error(this.getPrefix(this.logTimestamp,!1),...e)}prompt(e,t,n=!1){return globalThis.prompt(this.getPrefix(n,!0)+e,t)}alert(e,t=!1){globalThis.alert(this.getPrefix(t,!0)+e)}}t.default=s,s.IFRAME_LOG_PREFIX="iframe",s.DEFAULT_LOGGER_OPTIONS={name:globalThis.GM_info?`${l} v${a}`:"",logTimestamp:!0,timestampFormat:"Locale",detectIFrames:r.isScriptInIFrame},s.GLOBAL_MANAGER=new s},256:(e,t)=>{function n(e,t=null,n=null){let o=[];o=e.constructor===Object?Object.keys(e):Object.getOwnPropertyNames(Object.getPrototypeOf(e));for(let i of o)"constructor"!==i&&"function"==typeof e[i]&&((null!=n?n:e)[i]=e[i].bind(null!=t?t:e))}Object.defineProperty(t,"__esModule",{value:!0}),t.AutoBound=t.bindMethods=void 0,t.bindMethods=n;t.AutoBound=class{constructor(){n(this)}}},168:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isScriptInIFrame=t.isVisible=t.createElement=t.removeElementById=t.getSearchParams=t.evaluate=t.queryAllElements=t.queryElement=void 0,t.queryElement=function(e){return document.querySelector(e)},t.queryAllElements=function(e){return document.querySelectorAll(e)},t.evaluate=function(...e){return document.evaluate(...e)},t.getSearchParams=function(e=document.location){const t={};for(let n of e.search.substring(1).split("&"))t[n.substring(0,n.indexOf("="))]=n.substring(n.indexOf("=")+1);return t},t.removeElementById=function(e){var t,n;e&&(null===(n=null===(t=document.getElementById(e))||void 0===t?void 0:t.remove)||void 0===n||n.call(t))},t.createElement=function(e,t={},n){const o=Object.assign(document.createElement(e),t);return n&&o.append(...n),o},t.isVisible=function(e){let t=globalThis.getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility},t.isScriptInIFrame=function(){return globalThis.self!==globalThis.top}},262:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(256),r=o(n(570)),l=n(40),a=n(843);class s extends i.AutoBound{constructor(e=s.DEFAULT_WATCHER_OPTIONS){super(),this.watchWholeURL=!1,this.urlChangeHandler=a.onUrlChange,this.getCurrentLocation=l.getCurrentLocation;let t=Object.assign(Object.assign({},s.DEFAULT_WATCHER_OPTIONS),e);this.lastURL="",this.observerInstance=new t.ObserverClass(this.onUrlChange),this.logger=t.logger,this.moduleList=t.moduleList,this.watchWholeURL=t.watchWholeURL,this.urlChangeHandler=t.onUrlChange.bind(this),this.getCurrentLocation=t.getCurrentLocation.bind(this)}onUrlChange(){let e=this.getCurrentLocation(),t=this.watchWholeURL?e.href:e.pathname;this.lastURL!==t&&(this.lastURL=t,this.logger.print("Changed url!",`New ${this.watchWholeURL?"url":"pathname"}: "${t}"`),this.urlChangeHandler({moduleList:this.moduleList,currentLocation:this.getCurrentLocation(),logger:this.logger}))}start(){this.observerInstance.observe(document,{subtree:!0,childList:!0,attributeFilter:["location"]})}}t.default=s,s.DEFAULT_WATCHER_OPTIONS={moduleList:[],logger:r.default.GLOBAL_MANAGER,watchWholeURL:!1,onUrlChange:a.onUrlChange,ObserverClass:MutationObserver,getCurrentLocation:l.getCurrentLocation}},387:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const l=r(n(168)),a=n(256);class s extends a.AutoBound{constructor(e=s.DEFAULY_AWAITER_OPTIONS){let t=Object.assign(Object.assign({},s.DEFAULY_AWAITER_OPTIONS),e);super(),this.queries=[],this.target=document.body,this.pageUtils=t.pageUtils,this.observerInstance=new t.ObserverClass(this.onMutation),this.target=t.target,this.queries=[],t.autoStart&&this.start()}onMutation(){var e,t,n,o,i,r;const l=[];let a;for(let s of this.queries)a=s.query?this.pageUtils.queryAllElements(s.query):s.xpath?this.pageUtils.evaluate(s.xpath.xpath,null!==(e=s.xpath.contextNode)&&void 0!==e?e:document.body,null!==(t=s.xpath.namespaceResolver)&&void 0!==t?t:null,null!==(n=s.xpath.resultType)&&void 0!==n?n:XPathResult.ANY_TYPE,null!==(o=s.xpath.result)&&void 0!==o?o:null):null,a instanceof NodeList&&a.length>0||a instanceof XPathResult&&(null===(r=(i=s.xpath).isValidResult)||void 0===r?void 0:r.call(i,a))?s.callback(a):l.push(s);this.queries=l}addQuery(e,t){if(!e)return;const n=this.pageUtils.queryAllElements(e);if(n.length>0)return t(n);this.queries.push({query:e,callback:t})}addXpath(e,t){var n,o,i,r,l;if(!e)return;const a=this.pageUtils.evaluate(e.xpath,null!==(n=e.contextNode)&&void 0!==n?n:document.body,null!==(o=e.namespaceResolver)&&void 0!==o?o:null,null!==(i=e.resultType)&&void 0!==i?i:XPathResult.ANY_TYPE,null!==(r=e.result)&&void 0!==r?r:null);if(null===(l=e.isValidResult)||void 0===l?void 0:l.call(e,a))return t(a);this.queries.push({xpath:e,callback:t})}start(){this.observerInstance.observe(this.target,{subtree:!0,childList:!0})}stop(){this.observerInstance.disconnect()}}t.default=s,s.DEFAULY_AWAITER_OPTIONS={ObserverClass:MutationObserver,pageUtils:l,target:document.body,autoStart:!1}},40:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentLocation=t.openNewTab=t.setLocationAttribute=t.navigate=void 0,t.navigate=function(e){document.location.assign(e.toString())},t.setLocationAttribute=function(e,t){document.location[e]=t},t.openNewTab=function(e){globalThis.GM_openInTab?GM_openInTab(e.toString()):globalThis.open(e.toString(),"_blank")},t.getCurrentLocation=function(){return document.location}},873:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.QueryAwaiter=t.PathWatcher=t.IOManager=t.URLUtils=t.PageUtils=t.DateUtils=t.ObjUtils=void 0,t.ObjUtils=r(n(256)),t.DateUtils=r(n(458)),t.PageUtils=r(n(168)),t.URLUtils=r(n(40));var a=n(570);Object.defineProperty(t,"IOManager",{enumerable:!0,get:function(){return l(a).default}});var s=n(262);Object.defineProperty(t,"PathWatcher",{enumerable:!0,get:function(){return l(s).default}});var u=n(387);Object.defineProperty(t,"QueryAwaiter",{enumerable:!0,get:function(){return l(u).default}})}},t={};(function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports})(607)})();