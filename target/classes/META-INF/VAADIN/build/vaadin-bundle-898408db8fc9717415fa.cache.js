!function(t){function e(e){for(var a,r,i=e[0],n=e[1],s=0,l=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(h,r)&&h[r]&&l.push(h[r][0]),h[r]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);for(o&&o(e);l.length;)l.shift()()}var a={},h={1:0};function r(e){if(a[e])return a[e].exports;var h=a[e]={i:e,l:!1,exports:{}};return t[e].call(h.exports,h,h.exports,r),h.l=!0,h.exports}r.e=function(t){var e=[],a=h[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=h[t]=[e,r]}));e.push(a[2]=i);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(t){return r.p+"build/vaadin-"+({}[t]||t)+"-"+{0:"1cc7f45211b0ba34dc80",4:"3d60332e200f2e0748c3",6:"e6305915b83dbc6a2813"}[t]+".cache.js"}(t);var o=new Error;n=function(e){s.onerror=s.onload=null,clearTimeout(l);var a=h[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,a[1](o)}h[t]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)r.d(a,h,function(e){return t[e]}.bind(null,h));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="VAADIN/",r.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],n=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var o=n;r(r.s=174)}([,,,,,,,function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var h=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:t=>t},,function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class h{constructor(t){this.value=t.toString()}toString(){return this.value}}function r(t){if(t instanceof h)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}var i=function(t,...e){var a=document.createElement("template");return a.innerHTML=e.reduce((e,a,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof h)return r(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(a)+t[i+1],t[0]),a}},,function(t,e,a){"use strict";a.d(e,"d",(function(){return h})),a.d(e,"g",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"i",(function(){return s})),a.d(e,"e",(function(){return o})),a.d(e,"f",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"h",(function(){return p}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function h(t){return t.indexOf(".")>=0}function r(t){var e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function i(t,e){return 0===t.indexOf(e+".")}function n(t,e){return 0===e.indexOf(t+".")}function s(t,e,a){return e+a.slice(t.length)}function o(t,e){return t===e||i(t,e)||n(t,e)}function l(t){if(Array.isArray(t)){for(var e=[],a=0;a<t.length;a++)for(var h=t[a].toString().split("."),r=0;r<h.length;r++)e.push(h[r]);return e.join(".")}return t}function d(t){return Array.isArray(t)?l(t).split("."):t.toString().split(".")}function c(t,e,a){for(var h=t,r=d(e),i=0;i<r.length;i++){if(!h)return;h=h[r[i]]}return a&&(a.path=r.join(".")),h}function p(t,e,a){var h=t,r=d(e),i=r[r.length-1];if(r.length>1){for(var n=0;n<r.length-1;n++){if(!(h=h[r[n]]))return}h[i]=a}else h[e]=a;return r.join(".")}},,function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"c",(function(){return c}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h=0,r=0,i=[],n=0,s=document.createTextNode("");new window.MutationObserver((function(){for(var t=i.length,e=0;e<t;e++){var a=i[e];if(a)try{a()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),r+=t})).observe(s,{characterData:!0});var o={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},l={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},d={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},c={run:t=>(s.textContent=n++,i.push(t),h++),cancel(t){var e=t-r;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},,function(t,e,a){"use strict";a.d(e,"h",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"g",(function(){return c}));a(17);var h=a(36),r=!window.ShadyDOM,i=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Object(h.a)(document.baseURI||window.location.href)),n=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,s=!1,o=!1,l=!1,d=!1,c=!1},,function(t,e,a){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h=0;function r(){}r.prototype.__mixinApplications,r.prototype.__mixinSet;var i=function(t){var e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);var a=h++;return function(h){var r=h.__mixinSet;if(r&&r[a])return h;var i=e,n=i.get(h);n||(n=t(h),i.set(h,n));var s=Object.create(n.__mixinSet||r||null);return s[a]=!0,n.__mixinSet=s,n}}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var h=a(83),r=(a(9),Object(h.a)(HTMLElement))},,function(t,e,a){"use strict";a.d(e,"a",(function(){return h})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n}));a(17),a(19),a(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class h{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,r.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),r.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,a){return t instanceof h?t._cancelAsync():t=new h,t.setConfig(e,a),t}}var r=new Set,i=function(t){r.add(t)},n=function(){var t=Boolean(r.size);return r.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},,,function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return o}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var h,r,i=!(window.ShadyDOM&&window.ShadyDOM.inUse);function n(t){h=(!t||!t.shimcssproperties)&&(i||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);var s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?h=window.ShadyCSS.nativeCss:window.ShadyCSS?(n(window.ShadyCSS),window.ShadyCSS=void 0):n(window.WebComponents&&window.WebComponents.flags);var o=h},,function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var h=a(60),r=a(128),i=t=>class extends(Object(r.a)(t)){static finalize(){super.finalize();var t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,a=Object.getPrototypeOf(this.prototype)._template;a&&!e&&Array.from(a.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){var e=h.a.prototype.modules,a=!1,r=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{var a=0===t.indexOf("vaadin-"),h=0===e.indexOf("vaadin-"),r=["lumo-","material-"],i=r.filter(e=>0===t.indexOf(e)).length>0,n=r.filter(t=>0===e.indexOf(t)).length>0;return a!==h?a?-1:1:i!==n?i?-1:1:0}).forEach(h=>{if(h!==r){var i=e[h].getAttribute("theme-for");i&&i.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(a=!0,this._includeStyle(h,t))})}}),!a&&e[r]&&this._includeStyle(r,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){var a=document.createElement("style");a.setAttribute("include",t),e.content.appendChild(a)}}}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var h=a(13),r=a(23),i=a(47),n=a(124),s=a(118);function o(){}var l,d=function(){if("function"==typeof s.a)return Object(s.a)(o)};window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){d&&d()};var c=new Set,p=t=>class extends(Object(n.a)(t)){static finalize(){super.finalize();var{is:t}=this;t&&!c.has(t)&&(window.Vaadin.registrations.push(this),c.add(t),window.Vaadin.developmentModeCallback&&(l=r.a.debounce(l,h.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(i.a)(l)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return p}));a(17);var h=a(7),r=(a(15),a(55)),i=(a(47),a(23),Element.prototype),n=i.matches||i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector,s=function(t,e){return n.call(t,e)};class o{constructor(t){this.node=t}observeNodes(t){return new r.a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(h.a)(this.node).contains(t))return!0;for(var e=t,a=t.ownerDocument;e&&e!==a&&e!==this.node;)e=Object(h.a)(e).parentNode||Object(h.a)(e).host;return e===this.node}getOwnerRoot(){return Object(h.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(h.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){for(var t=[],e=Object(h.a)(this.node).assignedSlot;e;)t.push(e),e=Object(h.a)(e).assignedSlot;return t}importNode(t,e){var a=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(h.a)(a).importNode(t,e)}getEffectiveChildNodes(){return r.a.getFlattenedNodes(this.node)}queryDistributedElements(t){for(var e,a=this.getEffectiveChildNodes(),h=[],r=0,i=a.length;r<i&&(e=a[r]);r++)e.nodeType===Node.ELEMENT_NODE&&s(e,t)&&h.push(e);return h}get activeElement(){var t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function l(t,e){for(var a=function(a){var h=e[a];Object.defineProperty(t,h,{get:function(){return this.node[h]},configurable:!0})},h=0;h<e.length;h++)a(h)}class d{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}o.prototype.cloneNode,o.prototype.appendChild,o.prototype.insertBefore,o.prototype.removeChild,o.prototype.replaceChild,o.prototype.setAttribute,o.prototype.removeAttribute,o.prototype.querySelector,o.prototype.querySelectorAll,o.prototype.parentNode,o.prototype.firstChild,o.prototype.lastChild,o.prototype.nextSibling,o.prototype.previousSibling,o.prototype.firstElementChild,o.prototype.lastElementChild,o.prototype.nextElementSibling,o.prototype.previousElementSibling,o.prototype.childNodes,o.prototype.children,o.prototype.classList,o.prototype.textContent,o.prototype.innerHTML;var c=o;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(o.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=o.prototype[e])}),l(t.prototype,["classList"]),c=t,Object.defineProperties(d.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(var a=function(a){var h=e[a];t[h]=function(){return this.node[h].apply(this.node,arguments)}},h=0;h<e.length;h++)a(h)}(o.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),l(o.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(var a=function(a){var h=e[a];Object.defineProperty(t,h,{get:function(){return this.node[h]},set:function(t){this.node[h]=t},configurable:!0})},h=0;h<e.length;h++)a(h)}(o.prototype,["textContent","innerHTML"]);var p=function(t){if((t=t||document)instanceof c)return t;if(t instanceof d)return t;var e=t.__domApi;return e||(e=t instanceof Event?new d(t):new c(t),t.__domApi=e),e}},,function(t,e,a){"use strict";a.d(e,"p",(function(){return l})),a.d(e,"m",(function(){return d})),a.d(e,"j",(function(){return c})),a.d(e,"f",(function(){return p})),a.d(e,"a",(function(){return v})),a.d(e,"c",(function(){return m})),a.d(e,"b",(function(){return f})),a.d(e,"e",(function(){return g})),a.d(e,"l",(function(){return C})),a.d(e,"n",(function(){return M})),a.d(e,"q",(function(){return z})),a.d(e,"i",(function(){return y})),a.d(e,"g",(function(){return b})),a.d(e,"o",(function(){return _})),a.d(e,"h",(function(){return w})),a.d(e,"d",(function(){return x})),a.d(e,"k",(function(){return S}));var h=a(26),r=a(49),i=a(51),n=new Set;function s(t){var e=t.textContent;if(!n.has(e)){n.add(e);var a=document.createElement("style");a.setAttribute("shady-unscoped",""),a.textContent=e,document.head.appendChild(a)}}function o(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function l(t,e){return t?("string"==typeof t&&(t=Object(r.b)(t)),e&&p(t,e),Object(r.d)(t,h.c)):""}function d(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Object(r.b)(t.textContent)),t.__cssRules||null}function c(t){return Boolean(t.parent)&&t.parent.type===r.e.KEYFRAMES_RULE}function p(t,e,a,h){if(t){var n=!1,s=t.type;if(h&&s===r.e.MEDIA_RULE){var o=t.selector.match(i.e);o&&(window.matchMedia(o[1]).matches||(n=!0))}s===r.e.STYLE_RULE?e(t):a&&s===r.e.KEYFRAMES_RULE?a(t):s===r.e.MIXIN_RULE&&(n=!0);var l=t.rules;if(l&&!n)for(var d,c=0,v=l.length;c<v&&(d=l[c]);c++)p(d,e,a,h)}}function v(t,e,a,h){var r=function(t,e){var a=document.createElement("style");e&&a.setAttribute("scope",e);return a.textContent=t,a}(t,e);return f(r,a,h),r}var u=null;function m(t){var e=document.createComment(" Shady DOM styles for "+t+" "),a=u?u.nextSibling:null,h=document.head;return h.insertBefore(e,a||h.firstChild),u=e,e}function f(t,e,a){e=e||document.head;var h=a&&a.nextSibling||e.firstChild;(e.insertBefore(t,h),u)?t.compareDocumentPosition(u)===Node.DOCUMENT_POSITION_PRECEDING&&(u=t):u=t}function g(t,e){for(var a=0,h=e,r=t.length;h<r;h++)if("("===t[h])a++;else if(")"===t[h]&&0==--a)return h;return-1}function C(t,e){var a=t.indexOf("var(");if(-1===a)return e(t,"","","");var h=g(t,a+3),r=t.substring(a+4,h),i=t.substring(0,a),n=C(t.substring(h+1),e),s=r.indexOf(",");return-1===s?e(i,r.trim(),"",n):e(i,r.substring(0,s).trim(),r.substring(s+1).trim(),n)}function M(t,e){h.d?t.setAttribute("class",e):window.ShadyDOM.nativeMethods.setAttribute.call(t,"class",e)}var z=window.ShadyDOM&&window.ShadyDOM.wrap||(t=>t);function y(t){var e=t.localName,a="",h="";return e?e.indexOf("-")>-1?a=e:(h=e,a=t.getAttribute&&t.getAttribute("is")||""):(a=t.is,h=t.extends),{is:a,typeExtension:h}}function b(t){for(var e=[],a=t.querySelectorAll("style"),r=0;r<a.length;r++){var i=a[r];o(i)?h.d||(s(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}function _(t){for(var e=[],a="",h=0;h>=0&&h<t.length;h++)if("("===t[h]){var r=g(t,h);a+=t.slice(h,r+1),h=r}else","===t[h]?(e.push(a),a=""):a+=t[h];return a&&e.push(a),e}function w(t){if(void 0!==h.a)return h.a;if(void 0===t.__cssBuild){var e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{var a=function(t){var e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){var a=e.textContent.trim().split(":");if("css-build"===a[0])return a[1]}return""}(t);""!==a&&function(t){var e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=a}}return t.__cssBuild||""}function x(t){return""!==w(t)}function S(t=""){return!(""===t||!h.c)&&(h.d?"shadow"===t:"shady"===t)}},,function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return l}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h,r,i=/(url\()([^)]*)(\))/g,n=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(t,e){if(t&&n.test(t))return t;if(void 0===h){h=!1;try{var a=new URL("b","http://a");a.pathname="c%20d",h="http://a/c%20d"===a.href}catch(t){}}return e||(e=document.baseURI||window.location.href),h?new URL(t,e).href:(r||((r=document.implementation.createHTMLDocument("temp")).base=r.createElement("base"),r.head.appendChild(r.base),r.anchor=r.createElement("a"),r.body.appendChild(r.anchor)),r.base.href=e,r.anchor.href=t,r.anchor.href||t)}function o(t,e){return t.replace(i,(function(t,a,h,r){return a+"'"+s(h.replace(/["']/g,""),e)+"'"+r}))}function l(t){return t.substring(0,t.lastIndexOf("/")+1)}},,function(t,e,a){"use strict";a(72),a(57);var h=document.createElement("template");h.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(h.content)},,function(t,e,a){"use strict";a(72),a(57),a(60);var h=document.createElement("template");h.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(h.content)},,function(t,e,a){"use strict";a(72),a(57);var h=document.createElement("template");h.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(h.content)},,,function(t,e,a){"use strict";a(72),a(57),a(60);var h=document.createElement("template");h.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can???t combine with the above selector because that doesn???t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(h.content)},,function(t,e,a){"use strict";a.d(e,"b",(function(){return r}));a(17);var h=a(23);a.d(e,"a",(function(){return h.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=function(){var t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(h.c)()}while(t||e)}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return h})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"e",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class h{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function r(t){return function t(e,a){var h=a.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=h.trim(),e.parent){var r=e.previous?e.previous.end:e.parent.start;h=(h=(h=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}(h=a.substring(r,e.start-1))).replace(d.multipleSpaces," ")).substring(h.lastIndexOf(";")+1);var i=e.parsedSelector=e.selector=h.trim();e.atRule=0===i.indexOf(v),e.atRule?0===i.indexOf(p)?e.type=s.MEDIA_RULE:i.match(d.keyframesRule)&&(e.type=s.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===i.indexOf(c)?e.type=s.MIXIN_RULE:e.type=s.STYLE_RULE}var n=e.rules;if(n)for(var o,l=0,u=n.length;l<u&&(o=n[l]);l++)t(o,a);return e}(function(t){var e=new h;e.start=0,e.end=t.length;for(var a=e,r=0,i=t.length;r<i;r++)if(t[r]===o){a.rules||(a.rules=[]);var n=a,s=n.rules[n.rules.length-1]||null;(a=new h).start=r+1,a.parent=n,a.previous=s,n.rules.push(a)}else t[r]===l&&(a.end=r+1,a=a.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function i(t,e,a=""){var h="";if(t.cssText||t.rules){var r=t.rules;if(r&&!function(t){var e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(c)}(r))for(var s,p=0,v=r.length;p<v&&(s=r[p]);p++)h=i(s,e,h);else(h=(h=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=n(t))}(t.cssText)).trim())&&(h="  "+h+"\n")}return h&&(t.selector&&(a+=t.selector+" "+o+"\n"),a+=h,t.selector&&(a+=l+"\n\n")),a}function n(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}var s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},o="{",l="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},c="--",p="@media",v="@"},,function(t,e,a){"use strict";a.d(e,"g",(function(){return h})),a.d(e,"f",(function(){return r})),a.d(e,"h",(function(){return i})),a.d(e,"a",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var h=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,r=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/(--[\w-]+)\s*([:,;)]|$)/gi,n=/(animation\s*:)|(animation-name\s*:)/,s=/@media\s(.*)/,o=/\{[^}]*\}/g,l="(?:^|[^.#[:])",d="($|[.:[\\s>+~])"},,function(t,e,a){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/e.a={}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a(17);var h=a(106),r=a(13),i=a(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function n(t){return"slot"===t.localName}var s=class{static getFlattenedNodes(t){var e=Object(i.a)(t);return n(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>n(t)?(t=t,Object(i.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){n(this._target)?this._listenSlots([this._target]):Object(i.a)(this._target).children&&(this._listenSlots(Object(i.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){n(this._target)?this._unlistenSlots([this._target]):Object(i.a)(this._target).children&&(this._unlistenSlots(Object(i.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.c.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(var e=0;e<t.length;e++){var a=t[e];a.addedNodes&&this._listenSlots(a.addedNodes),a.removedNodes&&this._unlistenSlots(a.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;for(var t,e={target:this._target,addedNodes:[],removedNodes:[]},a=this.constructor.getFlattenedNodes(this._target),r=Object(h.a)(a,this._effectiveNodes),i=0;i<r.length&&(t=r[i]);i++)for(var n,s=0;s<t.removed.length&&(n=t.removed[s]);s++)e.removedNodes.push(n);for(var o,l=0;l<r.length&&(o=r[l]);l++)for(var d=o.index;d<o.index+o.addedCount;d++)e.addedNodes.push(a[d]);this._effectiveNodes=a;var c=!1;return(e.addedNodes.length||e.removedNodes.length)&&(c=!0,this.callback.call(this._target,e)),c}_listenSlots(t){for(var e=0;e<t.length;e++){var a=t[e];n(a)&&a.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(var e=0;e<t.length;e++){var a=t[e];n(a)&&a.removeEventListener("slotchange",this._boundSchedule)}}}},,function(t,e,a){"use strict";var h=a(116),r=a(62),i=a(26),n=new h.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,a){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,a){},styleSubtree(t,e){n.processStyles(),Object(r.c)(t,e)},styleElement(t){n.processStyles()},styleDocument(t){n.processStyles(),Object(r.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(r.b)(t,e),flushCustomStyles(){},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b}),window.ShadyCSS.CustomStyleInterface=n;var s=a(98),o=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class l extends HTMLElement{constructor(){super(),this._style=null,o.addCustomStyle(this)}getStyle(){if(this._style)return this._style;var t=this.querySelector("style");if(!t)return null;this._style=t;var e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(s.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",l)},,,function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a(17);var h=a(36),r=a(15),i={},n={};function s(t,e){i[t]=n[t.toLowerCase()]=e}function o(t){return i[t]||n[t.toLowerCase()]}class l extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){var a=o(t);return a&&e?a.querySelector(e):a}return null}attributeChangedCallback(t,e,a,h){e!==a&&this.register()}get assetpath(){if(!this.__assetpath){var t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(h.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(h.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(r.f&&void 0!==o(t))throw s(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,s(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}l.prototype.modules=i,customElements.define("dom-module",l)},,function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return n}));var h=a(51);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e){for(var a in e)null===a?t.style.removeProperty(a):t.style.setProperty(a,e[a])}function i(t,e){var a=window.getComputedStyle(t).getPropertyValue(e);return a?a.trim():""}function n(t){var e=h.f.test(t)||h.g.test(t);return h.f.lastIndex=0,h.g.lastIndex=0,e}},function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var h=a(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,a,h,r){var i;r&&(i="object"==typeof a&&null!==a)&&(h=t.__dataTemp[e]);var n=h!==a&&(h==h||a==a);return i&&n&&(t.__dataTemp[e]=a),n}var i=Object(h.a)(t=>class extends t{_shouldPropertyChange(t,e,a){return r(this,t,e,a,!0)}}),n=Object(h.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,a){return r(this,t,e,a,this.mutableData)}});i._mutablePropertyChange=r},,,function(t,e,a){"use strict";a(72),a(57);var h=document.createElement("template");h.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(h.content)},,function(t,e,a){"use strict";a.r(e),a.d(e,"gestures",(function(){return L})),a.d(e,"recognizers",(function(){return A})),a.d(e,"deepTargetFind",(function(){return O})),a.d(e,"addListener",(function(){return P})),a.d(e,"removeListener",(function(){return H})),a.d(e,"register",(function(){return F})),a.d(e,"setTouchAction",(function(){return N})),a.d(e,"prevent",(function(){return I})),a.d(e,"resetMouseCanceller",(function(){return j})),a.d(e,"findOriginalTarget",(function(){return V})),a.d(e,"add",(function(){return q})),a.d(e,"remove",(function(){return G}));a(17);var h=a(13),r=a(23),i=a(15),n=a(7),s="string"==typeof document.head.style.touchAction,o="__polymerGesturesHandled",l="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],c=[0,1,4,2],p=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function v(t){return d.indexOf(t)>-1}var u=!1;function m(t){if(!v(t)&&"touchend"!==t)return s&&u&&i.c?{passive:!0}:void 0}!function(){try{var t=Object.defineProperty({},"passive",{get(){u=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();var f=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),g=[],C={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},M={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function z(t){var e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];var a=t.getRootNode();if(t.id)for(var h=a.querySelectorAll(`label[for = ${t.id}]`),r=0;r<h.length;r++)e.push(h[r])}return e}var y=function(t){var e,a=t.sourceCapabilities;if((!a||a.firesTouchEvents)&&(t[o]={skip:!0},"click"===t.type)){for(var h=!1,r=k(t),i=0;i<r.length;i++){if(r[i].nodeType===Node.ELEMENT_NODE)if("label"===r[i].localName)g.push(r[i]);else if(e=r[i],C[e.localName])for(var n=z(r[i]),s=0;s<n.length;s++)h=h||g.indexOf(n[s])>-1;if(r[i]===w.mouse.target)return}if(h)return;t.preventDefault(),t.stopPropagation()}};function b(t){for(var e,a=f?["click"]:d,h=0;h<a.length;h++)e=a[h],t?(g.length=0,document.addEventListener(e,y,!0)):document.removeEventListener(e,y,!0)}function _(t){var e=t.type;if(!v(e))return!1;if("mousemove"===e){var a=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!p&&(a=c[t.which]||0),Boolean(1&a)}return 0===(void 0===t.button?0:t.button)}var w={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function x(t,e,a){t.movefn=e,t.upfn=a,document.addEventListener("mousemove",e),document.addEventListener("mouseup",a)}function S(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){w.mouse.mouseIgnoreJob||b(!0),w.mouse.target=k(t)[0],w.mouse.mouseIgnoreJob=r.a.debounce(w.mouse.mouseIgnoreJob,h.d.after(2500),(function(){b(),w.mouse.target=null,w.mouse.mouseIgnoreJob=null}))}),!!u&&{passive:!0});var k=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],L={},A=[];function O(t,e){for(var a=document.elementFromPoint(t,e),h=a;h&&h.shadowRoot&&!window.ShadyDOM;){if(h===(h=h.shadowRoot.elementFromPoint(t,e)))break;h&&(a=h)}return a}function E(t){var e=k(t);return e.length>0?e[0]:t.target}function T(t){var e,a=t.type,h=t.currentTarget.__polymerGestures;if(h){var r=h[a];if(r){if(!t[o]&&(t[o]={},"touch"===a.slice(0,5))){var i=(t=t).changedTouches[0];if("touchstart"===a&&1===t.touches.length&&(w.touch.id=i.identifier),w.touch.id!==i.identifier)return;s||"touchstart"!==a&&"touchmove"!==a||function(t){var e=t.changedTouches[0],a=t.type;if("touchstart"===a)w.touch.x=e.clientX,w.touch.y=e.clientY,w.touch.scrollDecided=!1;else if("touchmove"===a){if(w.touch.scrollDecided)return;w.touch.scrollDecided=!0;var h=function(t){for(var e,a="auto",h=k(t),r=0;r<h.length;r++)if((e=h[r])[l]){a=e[l];break}return a}(t),r=!1,i=Math.abs(w.touch.x-e.clientX),n=Math.abs(w.touch.y-e.clientY);t.cancelable&&("none"===h?r=!0:"pan-x"===h?r=n>i:"pan-y"===h&&(r=i>n)),r?t.preventDefault():I("track")}}(t)}if(!(e=t[o]).skip){for(var n,d=0;d<A.length;d++)r[(n=A[d]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(var c,p=0;p<A.length;p++)r[(c=A[p]).name]&&!e[c.name]&&(e[c.name]=!0,c[a](t))}}}}function P(t,e,a){return!!L[e]&&(function(t,e,a){var h=L[e],r=h.deps,i=h.name,n=t.__polymerGestures;n||(t.__polymerGestures=n={});for(var s,o,l=0;l<r.length;l++)s=r[l],f&&v(s)&&"click"!==s||((o=n[s])||(n[s]=o={_count:0}),0===o._count&&t.addEventListener(s,T,m(s)),o[i]=(o[i]||0)+1,o._count=(o._count||0)+1);t.addEventListener(e,a),h.touchAction&&N(t,h.touchAction)}(t,e,a),!0)}function H(t,e,a){return!!L[e]&&(function(t,e,a){var h=L[e],r=h.deps,i=h.name,n=t.__polymerGestures;if(n)for(var s,o,l=0;l<r.length;l++)s=r[l],(o=n[s])&&o[i]&&(o[i]=(o[i]||1)-1,o._count=(o._count||1)-1,0===o._count&&t.removeEventListener(s,T,m(s)));t.removeEventListener(e,a)}(t,e,a),!0)}function F(t){A.push(t);for(var e=0;e<t.emits.length;e++)L[t.emits[e]]=t}function N(t,e){s&&t instanceof HTMLElement&&h.c.run(()=>{t.style.touchAction=e}),t[l]=e}function R(t,e,a){var h=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(h.detail=a,Object(n.a)(t).dispatchEvent(h),h.defaultPrevented){var r=a.preventer||a.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function I(t){var e=function(t){for(var e,a=0;a<A.length;a++){e=A[a];for(var h=0;h<e.emits.length;h++)if(e.emits[h]===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function j(){w.mouse.mouseIgnoreJob&&w.mouse.mouseIgnoreJob.flush()}function B(t,e,a,h){e&&R(e,t,{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:h,prevent:function(t){return I(t)}})}function D(t,e,a){if(t.prevent)return!1;if(t.started)return!0;var h=Math.abs(t.x-e),r=Math.abs(t.y-a);return h>=5||r>=5}function Z(t,e,a){if(e){var h,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],n=i.x-t.x,s=i.y-t.y,o=0;r&&(h=i.x-r.x,o=i.y-r.y),R(e,"track",{state:t.state,x:a.clientX,y:a.clientY,dx:n,dy:s,ddx:h,ddy:o,sourceEvent:a,hover:function(){return O(a.clientX,a.clientY)}})}}function W(t,e,a){var h=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=E(a||e);!i||M[i.localName]&&i.hasAttribute("disabled")||(isNaN(h)||isNaN(r)||h<=25&&r<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;var e=E(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;var a=e.getBoundingClientRect(),h=t.pageX,r=t.pageY;return!(h>=a.left&&h<=a.right&&r>=a.top&&r<=a.bottom)}return!1}(e))&&(t.prevent||R(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:a}))}F({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){S(this.info)},mousedown:function(t){if(_(t)){var e=E(t),a=this;x(this.info,(function(t){_(t)||(B("up",e,t),S(a.info))}),(function(t){_(t)&&B("up",e,t),S(a.info)})),B("down",e,t)}},touchstart:function(t){B("down",E(t),t.changedTouches[0],t)},touchend:function(t){B("up",E(t),t.changedTouches[0],t)}}),F({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,S(this.info)},mousedown:function(t){if(_(t)){var e=E(t),a=this,h=function(t){var h=t.clientX,r=t.clientY;D(a.info,h,r)&&(a.info.state=a.info.started?"mouseup"===t.type?"end":"track":"start","start"===a.info.state&&I("tap"),a.info.addMove({x:h,y:r}),_(t)||(a.info.state="end",S(a.info)),e&&Z(a.info,e,t),a.info.started=!0)};x(this.info,h,(function(t){a.info.started&&h(t),S(a.info)})),this.info.x=t.clientX,this.info.y=t.clientY}},touchstart:function(t){var e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){var e=E(t),a=t.changedTouches[0],h=a.clientX,r=a.clientY;D(this.info,h,r)&&("start"===this.info.state&&I("tap"),this.info.addMove({x:h,y:r}),Z(this.info,e,a),this.info.state="track",this.info.started=!0)},touchend:function(t){var e=E(t),a=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:a.clientX,y:a.clientY}),Z(this.info,e,a))}}),F({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){_(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){_(t)&&W(this.info,t)},touchstart:function(t){var e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){W(this.info,t.changedTouches[0],t)}});var V=E,q=P,G=H},,function(t,e,a){"use strict";a.d(e,"b",(function(){return M})),a.d(e,"a",(function(){return z}));a(17);var h=a(85),r=a(63),i=a(15),n=a(7),s=null;function o(){return s}o.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:o,writable:!0}});var l=Object(h.a)(o),d=Object(r.a)(l);var c=Object(h.a)(class{});class p extends c{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);for(var e=this.children=[],a=this.root.firstChild;a;a=a.nextSibling)e.push(a),a.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);var h=this.__templatizeOptions;(t&&h.instanceProps||!h.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(var e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(var a in t)this._setPendingProperty(a,t[a])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,a){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,a(t)});else{var h=this.__dataHost.__dataHost;h&&h._addEventListenerToNode(t,e,a)}}_showHideChildren(t){for(var e=this.children,a=0;a<e.length;a++){var h=e[a];if(Boolean(t)!=Boolean(h.__hideTemplateChildren__))if(h.nodeType===Node.TEXT_NODE)t?(h.__polymerTextContent__=h.textContent,h.textContent=""):h.textContent=h.__polymerTextContent__;else if("slot"===h.localName)if(t)h.__polymerReplaced__=document.createComment("hidden-slot"),Object(n.a)(Object(n.a)(h).parentNode).replaceChild(h.__polymerReplaced__,h);else{var r=h.__polymerReplaced__;r&&Object(n.a)(Object(n.a)(r).parentNode).replaceChild(h,r)}else h.style&&(t?(h.__polymerDisplay__=h.style.display,h.style.display="none"):h.style.display=h.__polymerDisplay__);h.__hideTemplateChildren__=t,h._showHideChildren&&h._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,a){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=a:super._setUnmanagedPropertyToNode(t,e,a)}get parentModel(){var t=this.__parentModel;if(!t){var e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;var v=Object(r.a)(p);function u(t){var e=t.__dataHost;return e&&e._methodHost||e}function m(t,e,a){var h=a.mutableData?v:p;M.mixin&&(h=M.mixin(h));var r=class extends h{};return r.prototype.__templatizeOptions=a,r.prototype._bindTemplate(t),function(t,e,a,h){var r=a.hostProps||{};for(var i in h.instanceProps){delete r[i];var n=h.notifyInstanceProp;n&&t.prototype._addPropertyEffect(i,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:C(i,n)})}if(h.forwardHostProp&&e.__dataHost)for(var s in r)t.prototype._addPropertyEffect(s,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,a){t.__dataHost._setPendingPropertyOrPath("_host_"+e,a[e],!0,!0)}})}(r,t,e,a),r}function f(t,e,a){var h=a.forwardHostProp;if(h){var r=e.templatizeTemplateClass;if(!r){var i=a.mutableData?d:l;r=e.templatizeTemplateClass=class extends i{};var n=e.hostProps;for(var o in n)r.prototype._addPropertyEffect("_host_"+o,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:g(o,h)}),r.prototype._createNotifyingProperty("_host_"+o)}!function(t,e){s=t,Object.setPrototypeOf(t,e.prototype),new e,s=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function g(t,e){return function(t,a,h){e.call(t.__templatizeOwner,a.substring("_host_".length),h[a])}}function C(t,e){return function(t,a,h){e.call(t.__templatizeOwner,t,a,h[a])}}function M(t,e,a){if(i.f&&!u(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(a=a||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;var h=(e?e.constructor:p)._parseTemplate(t),r=h.templatizeInstanceClass;r||(r=m(t,h,a),h.templatizeInstanceClass=r),f(t,h,a);var n=class extends r{};return n.prototype._methodHost=u(t),n.prototype.__dataHost=t,n.prototype.__templatizeOwner=e,n.prototype.__hostProps=h.hostProps,n=n}function z(t,e){for(var a;e;)if(a=e.__templatizeInstance){if(a.__dataHost==t)return a;e=a.__dataHost}else e=Object(n.a)(e).parentNode;return null}},,function(t,e,a){"use strict";class h extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",h)},function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var h=a(102),r=(a(17),function(t){var e;return e="function"==typeof t?t:r.Class(t),customElements.define(e.is,e),e});r.Class=h.a},,,,function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return s}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h={},r=/-[a-z]/g,i=/([A-Z])/g;function n(t){return h[t]||(h[t]=t.indexOf("-")<0?t:t.replace(r,t=>t[1].toUpperCase()))}function s(t){return h[t]||(h[t]=t.replace(i,"-$1").toLowerCase())}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h{static detectScrollType(){var t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);var e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,a){var{scrollLeft:h}=a;if("rtl"!==e||!t)return h;switch(t){case"negative":return a.scrollWidth-a.clientWidth+h;case"reverse":return a.scrollWidth-a.clientWidth-h}return h}static setNormalizedScrollLeft(t,e,a,h){if("rtl"===e&&t)switch(t){case"negative":a.scrollLeft=a.clientWidth-a.scrollWidth+h;break;case"reverse":a.scrollLeft=a.scrollWidth-a.clientWidth-h;break;default:a.scrollLeft=h}else a.scrollLeft=h}}},,function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return d}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var h=!1,r=[],i=[];function n(){h=!0,requestAnimationFrame((function(){h=!1,s(r),setTimeout((function(){!function(t){for(var e=0,a=t.length;e<a;e++)o(t.shift())}(i)}))}))}function s(t){for(;t.length;)o(t.shift())}function o(t){var e=t[0],a=t[1],h=t[2];try{a.apply(e,h)}catch(t){setTimeout(()=>{throw t})}}function l(t,e,a){h||n(),r.push([t,e,a])}function d(t,e,a){h||n(),i.push([t,e,a])}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));a(17);var h=a(15),r=a(19),i=a(98),n=a(36),s=a(60),o=a(85);var l=[];var d=a(109);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var c=Object(r.a)(t=>{var e=Object(d.a)(t);function a(t){var e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function h(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){var e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){var a=t.properties;a&&(e=function(t){var e={};for(var a in t){var h=t[a];e[a]="function"==typeof h?{type:h}:h}return e}(a))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){e=this.prototype,l.push(e);var t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var t=a(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){var t=h(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var t=a(this);this.__properties=Object.assign({},t&&t._properties,h(this))}return this.__properties}static typeForProperty(t){var e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),p=a(7),v=window.ShadyCSS&&window.ShadyCSS.cssBuild,u=Object(r.a)(t=>{var e=c(Object(o.a)(t));return class extends e{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();var t,e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){var t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):h.b||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(var e in t)a=this.prototype,h=e,r=t[e],i=t,r.computed&&(r.readOnly=!0),r.computed&&(a._hasReadOnlyEffect(h)?console.warn(`Cannot redefine computed property '${h}'.`):a._createComputedProperty(h,r.computed,i)),r.readOnly&&!a._hasReadOnlyEffect(h)?a._createReadOnlyProperty(h,!r.computed):!1===r.readOnly&&a._hasReadOnlyEffect(h)&&console.warn(`Cannot make readOnly property '${h}' non-readOnly.`),r.reflectToAttribute&&!a._hasReflectEffect(h)?a._createReflectedProperty(h):!1===r.reflectToAttribute&&a._hasReflectEffect(h)&&console.warn(`Cannot make reflected property '${h}' non-reflected.`),r.notify&&!a._hasNotifyEffect(h)?a._createNotifyingProperty(h):!1===r.notify&&a._hasNotifyEffect(h)&&console.warn(`Cannot make notify property '${h}' non-notify.`),r.observer&&a._createPropertyObserver(h,r.observer,i[r.observer]),a._addPropertyToAttributeMap(h);var a,h,r,i}static createObservers(t,e){for(var a=this.prototype,h=0;h<t.length;h++)a._createMethodObserver(t[h],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){var e=null;if(t&&(!h.f||h.a)&&(e=s.a.import(t,"template"),h.f&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var t=this.importMeta;if(t)this._importPath=Object(n.a)(t.url);else{var e=s.a.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=h.d,this.importPath=this.constructor.importPath;var t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;var e=t._properties;for(var a in e){var h=e[a];"value"in h&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[a]=h)}}return t.__propertyDefaults}(this.constructor);if(t)for(var e in t){var a=t[e];if(!this.hasOwnProperty(e)){var r="function"==typeof a.value?a.value.call(this):a.value;this._hasAccessor(e)?this._setPendingProperty(e,r,!0):this[e]=r}}}static _processStyleText(t,e){return Object(n.b)(t,e)}static _finalizeTemplate(t){var e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;var a=this.importPath;!function(t,e,a,h){if(!v){for(var r=e.content.querySelectorAll("style"),n=Object(i.c)(e),s=Object(i.b)(a),o=e.content.firstElementChild,l=0;l<s.length;l++){var d=s[l];d.textContent=t._processStyleText(d.textContent,h),e.content.insertBefore(d,o)}for(var c=0,p=0;p<n.length;p++){var u=n[p],m=r[c];m!==u?(u=u.cloneNode(!0),m.parentNode.insertBefore(u,m)):c++,u.textContent=t._processStyleText(u.textContent,h)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,a)}(this,e,t,a?Object(n.c)(a):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){var e=Object(p.a)(this);if(e.attachShadow)return t?(e.shadowRoot||e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(t),h.g&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(n.c)(this.importPath)),Object(n.c)(t,e)}static _parseTemplateContent(t,e,a){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,a)}static _addTemplatePropertyEffect(t,e,a){return h.b&&!(e in this._properties)&&console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(t,e,a)}}})},,function(t,e,a){"use strict";a.d(e,"a",(function(){return q}));a(17);var h=a(7),r=a(19),i=a(11),n=a(77),s=a(108),o=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),l={"dom-if":!0,"dom-repeat":!0};function d(t){var e=t.getAttribute("is");if(e&&l[e]){var a=t;for(a.removeAttribute("is"),t=a.ownerDocument.createElement(e),a.parentNode.replaceChild(t,a),t.appendChild(a);a.attributes.length;)t.setAttribute(a.attributes[0].name,a.attributes[0].value),a.removeAttribute(a.attributes[0].name)}return t}function c(t,e){var a=e.parentInfo&&c(t,e.parentInfo);if(!a)return t;o.currentNode=a;for(var h=o.firstChild(),r=0;h;h=o.nextSibling())if(e.parentIndex===r++)return h}function p(t,e,a,h){h.id&&(e[h.id]=a)}function v(t,e,a){if(a.events&&a.events.length)for(var h,r=0,i=a.events;r<i.length&&(h=i[r]);r++)t._addMethodEventListenerToNode(e,h.name,h.value,t)}function u(t,e,a){a.templateInfo&&(e._templateInfo=a.templateInfo)}var m=Object(r.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){var a=t._templateInfo={};a.nodeInfoList=[],a.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,a,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,a){return this._parseTemplateNode(t.content,e,a)}static _parseTemplateNode(t,e,a){var h,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):h=this._parseTemplateNestedTemplate(r,e,a)||h,o.currentNode=r,o.firstChild()&&(h=this._parseTemplateChildNodes(r,e,a)||h),r.hasAttributes&&r.hasAttributes()&&(h=this._parseTemplateNodeAttributes(r,e,a)||h),h}static _parseTemplateChildNodes(t,e,a){if("script"!==t.localName&&"style"!==t.localName){o.currentNode=t;for(var h,r=o.firstChild(),i=0;r;r=h){if("template"==r.localName&&(r=d(r)),o.currentNode=r,h=o.nextSibling(),r.nodeType===Node.TEXT_NODE){for(var n=h;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,h=o.nextSibling(),t.removeChild(n),n=h;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}var s={parentIndex:i,parentInfo:a};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),o.currentNode=r,o.parentNode()&&i++}}}static _parseTemplateNestedTemplate(t,e,a){var h=this._parseTemplate(t,e);return(h.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),a.templateInfo=h,!0}static _parseTemplateNodeAttributes(t,e,a){for(var h,r=!1,i=Array.from(t.attributes),n=i.length-1;h=i[n];n--)r=this._parseTemplateNodeAttribute(t,e,a,h.name,h.value)||r;return r}static _parseTemplateNodeAttribute(t,e,a,h,r){return"on-"===h.slice(0,3)?(t.removeAttribute(h),a.events=a.events||[],a.events.push({name:h.slice(3),value:r}),!0):"id"===h&&(a.id=r,!0)}static _contentForTemplate(t){var e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);var e=this.constructor._parseTemplate(t),a=e.nodeInfoList,h=e.content||t.content,r=document.importNode(h,!0);r.__noInsertionPoint=!e.hasInsertionPoint;var i=r.nodeList=new Array(a.length);r.$={};for(var n,s=0,o=a.length;s<o&&(n=a[s]);s++){var l=i[s]=c(r,n);p(0,r.$,l,n),u(0,l,n),v(this,l,n)}return r=r}_addMethodEventListenerToNode(t,e,a,h){var r=function(t,e,a){return t=t._methodHost||t,function(e){t[a]?t[a](e,e.detail):console.warn("listener method `"+a+"` not defined")}}(h=h||t,0,a);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,a){t.addEventListener(e,a)}_removeEventListenerFromNode(t,e,a){t.removeEventListener(e,a)}}),f=a(15),g=0,C={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},M=/[A-Z]/;function z(t,e){var a=t[e];if(a){if(!t.hasOwnProperty(e))for(var h in a=t[e]=Object.create(t[e]))for(var r=a[h],i=a[h]=Array(r.length),n=0;n<r.length;n++)i[n]=r[n]}else a=t[e]={};return a}function y(t,e,a,h,r,i){if(e){var n=!1,s=g++;for(var o in a)b(t,e,s,o,a,h,r,i)&&(n=!0);return n}return!1}function b(t,e,a,h,r,n,s,o){var l=!1,d=e[s?Object(i.g)(h):h];if(d)for(var c,p=0,v=d.length;p<v&&(c=d[p]);p++)c.info&&c.info.lastRun===a||s&&!_(h,c.trigger)||(c.info&&(c.info.lastRun=a),c.fn(t,h,r,n,c.info,s,o),l=!0);return l}function _(t,e){if(e){var a=e.name;return a==t||!(!e.structured||!Object(i.b)(a,t))||!(!e.wildcard||!Object(i.c)(a,t))}return!0}function w(t,e,a,h,r){var i="string"==typeof r.method?t[r.method]:r.method,n=r.property;i?i.call(t,t.__data[n],h[n]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function x(t,e,a){var h=Object(i.g)(e);return h!==e&&(S(t,Object(n.a)(h)+"-changed",a[e],e),!0)}function S(t,e,a,r){var i={value:a,queueProperty:!0};r&&(i.path=r),Object(h.a)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function k(t,e,a,h,r,n){var s=(n?Object(i.g)(e):e)!=e?e:null,o=s?Object(i.a)(t,s):t.__data[e];s&&void 0===o&&(o=a[e]),S(t,r.eventName,o,s)}function L(t,e,a,h,r){var i=t.__data[e];f.e&&(i=Object(f.e)(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function A(t,e,a,h,r){var i=N(t,e,a,h,r),n=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[n]?t._setPendingProperty(n,i,!0):t[n]=i}function O(t,e,a,h,r,i,s){a.bindings=a.bindings||[];var o={kind:h,target:r,parts:i,literal:s,isCompound:1!==i.length};if(a.bindings.push(o),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(o)){var{event:l,negate:d}=o.parts[0];o.listenerEvent=l||Object(n.a)(r)+"-changed",o.listenerNegate=d}for(var c=e.nodeInfoList.length,p=0;p<o.parts.length;p++){var v=o.parts[p];v.compoundIndex=p,E(t,e,o,v,c)}}function E(t,e,a,h,r){if(!h.literal)if("attribute"===a.kind&&"-"===a.target[0])console.warn("Cannot set attribute "+a.target+' because "-" is not a valid attribute starting character');else for(var i=h.dependencies,n={index:r,binding:a,part:h,evaluator:t},s=0;s<i.length;s++){var o=i[s];"string"==typeof o&&((o=D(o)).wildcard=!0),t._addTemplatePropertyEffect(e,o.rootProperty,{fn:T,info:n,trigger:o})}}function T(t,e,a,h,r,n,s){var o=s[r.index],l=r.binding,d=r.part;if(n&&d.source&&e.length>d.source.length&&"property"==l.kind&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){var c=a[e];e=Object(i.i)(d.source,l.target,e),o._setPendingPropertyOrPath(e,c,!1,!0)&&t._enqueueClient(o)}else{!function(t,e,a,h,r){r=function(t,e,a,h){if(a.isCompound){var r=t.__dataCompoundStorage[a.target];r[h.compoundIndex]=e,e=r.join("")}"attribute"!==a.kind&&("textContent"!==a.target&&("value"!==a.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,a,h),f.e&&(r=Object(f.e)(r,a.target,a.kind,e));if("attribute"==a.kind)t._valueToNodeAttribute(e,r,a.target);else{var i=a.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?e[C.READ_ONLY]&&e[C.READ_ONLY][i]||e._setPendingProperty(i,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,r)}}(t,o,l,d,r.evaluator._evaluateBinding(t,d,e,a,h,n))}}function P(t,e){if(e.isCompound){for(var a=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),h=e.parts,r=new Array(h.length),i=0;i<h.length;i++)r[i]=h[i].literal;var n=e.target;a[n]=r,e.literal&&"property"==e.kind&&(t[n]=e.literal)}}function H(t,e,a){if(a.listenerEvent){var h=a.parts[0];t.addEventListener(a.listenerEvent,(function(t){!function(t,e,a,h,r){var n,s=t.detail,o=s&&s.path;o?(h=Object(i.i)(a,h,o),n=s&&s.value):n=t.currentTarget[a],n=r?!n:n,e[C.READ_ONLY]&&e[C.READ_ONLY][h]||!e._setPendingPropertyOrPath(h,n,!0,Boolean(o))||s&&s.queueProperty||e._invalidateProperties()}(t,e,a.target,h.source,h.negate)}))}}function F(t,e,a,h,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);for(var n,s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i},o=0;o<e.args.length&&(n=e.args[o]);o++)n.literal||t._addPropertyEffect(n.rootProperty,a,{fn:h,info:s,trigger:n});i&&t._addPropertyEffect(e.methodName,a,{fn:h,info:s})}function N(t,e,a,h,r){var i=t._methodHost||t,n=i[r.methodName];if(n){var s=t._marshalArgs(r.args,e,a);return n.apply(i,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}var R=[],I=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function j(t){for(var e="",a=0;a<t.length;a++){e+=t[a].literal||""}return e}function B(t){var e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){var a={methodName:e[1],static:!0,args:R};return e[2].trim()?function(t,e){return e.args=t.map((function(t){var a=D(t);return a.literal||(e.static=!1),a}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),a):a}return null}function D(t){var e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:e,value:"",literal:!1},h=e[0];switch("-"===h&&(h=e[1]),h>="0"&&h<="9"&&(h="#"),h){case"'":case'"':a.value=e.slice(1,-1),a.literal=!0;break;case"#":a.value=Number(e),a.literal=!0}return a.literal||(a.rootProperty=Object(i.g)(e),a.structured=Object(i.d)(e),a.structured&&(a.wildcard=".*"==e.slice(-2),a.wildcard&&(a.name=e.slice(0,-2)))),a}function Z(t,e,a){var h=Object(i.a)(t,a);return void 0===h&&(h=e[a]),h}function W(t,e,a,h){t.notifyPath(a+".splices",{indexSplices:h}),t.notifyPath(a+".length",e.length)}function V(t,e,a,h,r,i){W(t,e,a,[{index:h,addedCount:r,removed:i,object:e,type:"splice"}])}var q=Object(r.a)(t=>{var e=m(Object(s.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return C}_initializeProperties(){super._initializeProperties(),G.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){var e=this[C.READ_ONLY];for(var a in t)e&&e[a]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=t[a])}_addPropertyEffect(t,e,a){this._createPropertyAccessor(t,e==C.READ_ONLY);var h=z(this,e)[t];h||(h=this[e][t]=[]),h.push(a)}_removePropertyEffect(t,e,a){var h=z(this,e)[t],r=h.indexOf(a);r>=0&&h.splice(r,1)}_hasPropertyEffect(t,e){var a=this[e];return Boolean(a&&a[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,C.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,C.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,C.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,C.COMPUTE)}_setPendingPropertyOrPath(t,e,a,h){if(h||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!h){var r=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,a))return function(t,e,a){var h,r=t.__dataLinkedPaths;if(r)for(var n in r){var s=r[n];Object(i.c)(n,e)?(h=Object(i.i)(n,s,e),t._setPendingPropertyOrPath(h,a,!0,!0)):Object(i.c)(s,e)&&(h=Object(i.i)(s,n,e),t._setPendingPropertyOrPath(h,a,!0,!0))}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,a);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,a){a===t[e]&&"object"!=typeof a||(t[e]=a)}_setPendingProperty(t,e,a){var h=this.__dataHasPaths&&Object(i.d)(t),r=h?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),h?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(h||this[C.NOTIFY]&&this[C.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=a),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){var t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(var e=0;e<t.length;e++){var a=t[e];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(var a in t)!e&&this[C.READ_ONLY]&&this[C.READ_ONLY][a]||this._setPendingPropertyOrPath(a,t[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,a){var h=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,a,h){var r=t[C.COMPUTE];if(r)for(var i=e;y(t,r,i,a,h);)Object.assign(a,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}(this,e,a,h);var r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,a,h),this._flushClients(),y(this,this[C.REFLECT],e,a,h),y(this,this[C.OBSERVE],e,a,h),r&&function(t,e,a,h,r){var i,n,s=t[C.NOTIFY],o=g++;for(var l in e)e[l]&&(s&&b(t,s,o,l,a,h,r)||r&&x(t,l,a))&&(i=!0);i&&(n=t.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,r,e,a,h),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,a){this[C.PROPAGATE]&&y(this,this[C.PROPAGATE],t,e,a);for(var h=this.__templateInfo;h;)y(this,h.propertyEffects,t,e,a,h.nodeList),h=h.nextTemplateInfo}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){var a={path:""};W(this,Object(i.a)(this,t,a),a.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,a){a?Object(i.h)(a,t,e):this[C.READ_ONLY]&&this[C.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){var a={path:""},h=Object(i.a)(this,t,a),r=h.length,n=h.push(...e);return e.length&&V(this,h,a.path,r,e.length,[]),n}pop(t){var e={path:""},a=Object(i.a)(this,t,e),h=Boolean(a.length),r=a.pop();return h&&V(this,a,e.path,a.length,0,[r]),r}splice(t,e,a,...h){var r,n={path:""},s=Object(i.a)(this,t,n);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?s.splice(e):s.splice(e,a,...h),(h.length||r.length)&&V(this,s,n.path,e,h.length,r),r}shift(t){var e={path:""},a=Object(i.a)(this,t,e),h=Boolean(a.length),r=a.shift();return h&&V(this,a,e.path,0,0,[r]),r}unshift(t,...e){var a={path:""},h=Object(i.a)(this,t,a),r=h.unshift(...e);return e.length&&V(this,h,a.path,0,e.length,[]),r}notifyPath(t,e){var a;if(1==arguments.length){var h={path:""};e=Object(i.a)(this,t,h),a=h.path}else a=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(a,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var a;this._addPropertyEffect(t,C.READ_ONLY),e&&(this["_set"+(a=t,a[0].toUpperCase()+a.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,a){var h={property:t,method:e,dynamicFn:Boolean(a)};this._addPropertyEffect(t,C.OBSERVE,{fn:w,info:h,trigger:{name:t}}),a&&this._addPropertyEffect(e,C.OBSERVE,{fn:w,info:h,trigger:{name:e}})}_createMethodObserver(t,e){var a=B(t);if(!a)throw new Error("Malformed observer expression '"+t+"'");F(this,a,C.OBSERVE,N,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,C.NOTIFY,{fn:k,info:{eventName:Object(n.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){var e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,C.REFLECT,{fn:L,info:{attrName:e}})}_createComputedProperty(t,e,a){var h=B(e);if(!h)throw new Error("Malformed computed expression '"+e+"'");F(this,h,C.COMPUTE,A,t,a)}_marshalArgs(t,e,a){for(var h=this.__data,r=[],n=0,s=t.length;n<s;n++){var{name:o,structured:l,wildcard:d,value:c,literal:p}=t[n];if(!p)if(d){var v=Object(i.c)(o,e),u=Z(h,a,v?e:o);c={path:v?e:o,value:u,base:v?Object(i.a)(h,o):u}}else c=l?Z(h,a,o):h[o];r[n]=c}return r}static addPropertyEffect(t,e,a){this.prototype._addPropertyEffect(t,e,a)}static createPropertyObserver(t,e,a){this.prototype._createPropertyObserver(t,e,a)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,a){this.prototype._createComputedProperty(t,e,a)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){var a=this.constructor._parseTemplate(t),h=this.__templateInfo==a;if(!h)for(var r in a.propertyEffects)this._createPropertyAccessor(r);if(e&&((a=Object.create(a)).wasPreBound=h,!h&&this.__templateInfo)){var i=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=i.nextTemplateInfo=a,a.previousTemplateInfo=i,a}return this.__templateInfo=a}static _addTemplatePropertyEffect(t,e,a){(t.hostProps=t.hostProps||{})[e]=!0;var h=t.propertyEffects=t.propertyEffects||{};(h[e]=h[e]||[]).push(a)}_stampTemplate(t){G.beginHosting(this);var e=super._stampTemplate(t);G.endHosting(this);var a=this._bindTemplate(t,!0);if(a.nodeList=e.nodeList,!a.wasPreBound)for(var h=a.childNodes=[],r=e.firstChild;r;r=r.nextSibling)h.push(r);return e.templateInfo=a,function(t,e){var{nodeList:a,nodeInfoList:h}=e;if(h.length)for(var r=0;r<h.length;r++){var i=h[r],n=a[r],s=i.bindings;if(s)for(var o=0;o<s.length;o++){var l=s[o];P(n,l),H(n,t,l)}n.__dataHost=t}}(this,a),this.__dataReady&&y(this,a.propertyEffects,this.__data,null,!1,a.nodeList),e}_removeBoundDom(t){var e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;for(var a=e.childNodes,h=0;h<a.length;h++){var r=a[h];r.parentNode.removeChild(r)}}static _parseTemplateNode(t,e,a){var h=super._parseTemplateNode(t,e,a);if(t.nodeType===Node.TEXT_NODE){var r=this._parseBindings(t.textContent,e);r&&(t.textContent=j(r)||" ",O(this,e,a,"text","textContent",r),h=!0)}return h}static _parseTemplateNodeAttribute(t,e,a,h,r){var i=this._parseBindings(r,e);if(i){var s=h,o="property";M.test(h)?o="attribute":"$"==h[h.length-1]&&(h=h.slice(0,-1),o="attribute");var l=j(i);return l&&"attribute"==o&&("class"==h&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(h)),t.setAttribute(h,l)),"input"===t.localName&&"value"===s&&t.setAttribute(s,""),t.removeAttribute(s),"property"===o&&(h=Object(n.b)(h)),O(this,e,a,o,h,i,l),!0}return super._parseTemplateNodeAttribute(t,e,a,h,r)}static _parseTemplateNestedTemplate(t,e,a){var h=super._parseTemplateNestedTemplate(t,e,a),r=a.templateInfo.hostProps;for(var i in r){O(this,e,a,"property","_host_"+i,[{mode:"{",source:i,dependencies:[i]}])}return h}static _parseBindings(t,e){for(var a,h=[],r=0;null!==(a=I.exec(t));){a.index>r&&h.push({literal:t.slice(r,a.index)});var i=a[1][0],n=Boolean(a[2]),s=a[3].trim(),o=!1,l="",d=-1;"{"==i&&(d=s.indexOf("::"))>0&&(l=s.substring(d+2),s=s.substring(0,d),o=!0);var c=B(s),p=[];if(c){for(var{args:v,methodName:u}=c,m=0;m<v.length;m++){var f=v[m];f.literal||p.push(f)}var g=e.dynamicFns;(g&&g[u]||c.static)&&(p.push(u),c.dynamicFn=!0)}else p.push(s);h.push({source:s,mode:i,negate:n,customEvent:o,signature:c,dependencies:p,event:l}),r=I.lastIndex}if(r&&r<t.length){var C=t.substring(r);C&&h.push({literal:C})}return h.length?h:null}static _evaluateBinding(t,e,a,h,r,n){var s;return s=e.signature?N(t,a,h,0,e.signature):a!=e.source?Object(i.a)(t,e.source):n&&Object(i.d)(a)?Object(i.a)(t,a):t.__data[a],e.negate&&(s=!s),s}}});var G=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){var e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var h=a(92),r=(a(73),a(155),a(17),a(85)),i=a(63),n=a(89),s=a(15),o=a(7),l=Object(n.a)(Object(i.b)(Object(r.a)(HTMLElement)));customElements.define("dom-bind",class extends l{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),s.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(o.a)(Object(o.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(var t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){var t;if(!this.__children){if(!(t=t||this.querySelector("template"))){var e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(var a=this.root.firstChild;a;a=a.nextSibling)this.__children[this.__children.length]=a;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});a(153),a(156);var d=a(21),c=a(19),p=a(106),v=a(83),u=Object(c.a)(t=>{var e=Object(v.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){var a=e.path;if(a==JSCompiler_renameProperty("items",this)){var h=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){var i=Object(p.a)(h,r);this.__applySplices(i)}this.__lastItems=h,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{var n=a.slice((JSCompiler_renameProperty("items",this)+".").length),s=parseInt(n,10);n.indexOf(".")<0&&n==s&&this.__deselectChangedIdx(s)}}__applySplices(t){for(var e=this,a=this.__selectedMap,h=function(h){var r=t[h];a.forEach((t,e)=>{t<r.index||(t>=r.index+r.removed.length?a.set(e,t+r.addedCount-r.removed.length):a.set(e,-1))});for(var i=0;i<r.addedCount;i++){var n=r.index+i;a.has(e.items[n])&&a.set(e.items[n],n)}},r=0;r<t.length;r++)h(r);this.__updateLinks();var i=0;a.forEach((t,e)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,a.delete(e)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){var t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){var e=this.__selectedIndexForItemIndex(t);if(e>=0){var a=0;this.__selectedMap.forEach((t,h)=>{e==a++&&this.deselect(h)})}}__selectedIndexForItemIndex(t){var e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){var e,a=this.__selectedMap.get(t);a>=0&&(this.__selectedMap.delete(t),this.multi&&(e=this.__selectedIndexForItemIndex(a)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),e,1):this.selected=this.selectedItem=null)}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){var e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(d.a);class m extends u{static get is(){return"array-selector"}static get template(){return null}}customElements.define(m.is,m);a(57),a(157),a(9);var f=Object(h.a)(HTMLElement).prototype},,function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(17);var h=a(19),r=a(68),i=Object(h.a)(t=>class extends t{_addEventListenerToNode(t,e,a){Object(r.addListener)(t,e,a)||super._addEventListenerToNode(t,e,a)}_removeEventListenerFromNode(t,e,a){Object(r.removeListener)(t,e,a)||super._removeEventListenerFromNode(t,e,a)}})},,,function(t,e,a){"use strict";a.d(e,"a",(function(){return W}));var h=a(34),r=a(51),i=a(62),n=(a(49),/;\s*/m),s=/^\s*(initial)|(inherit)\s*$/,o=/\s*!important/;class l{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}var d=null;class c{constructor(){this._currentElement=null,this._measureElement=null,this._map=new l}detectMixin(t){return Object(i.a)(t)}gatherStyles(t){var e=Object(h.g)(t.content);if(e){var a=document.createElement("style");return a.textContent=e,t.content.insertBefore(a,t.content.firstChild),a}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));var a=t._gatheredStyle;return a?this.transformStyle(a,e):null}transformStyle(t,e=""){var a=Object(h.m)(t);return this.transformRules(a,e),t.textContent=Object(h.p)(a),a}transformCustomStyle(t){var e=Object(h.m)(t);return Object(h.f)(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Object(h.p)(e),e}transformRules(t,e){this._currentElement=e,Object(h.f)(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(r.g,(t,a,h,r)=>this._produceCssProperties(t,a,h,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){for(var e=t;e.parent;)e=e.parent;var a={},r=!1;return Object(h.f)(e,e=>{(r=r||e===t)||e.selector===t.selector&&Object.assign(a,this._cssTextToMap(e.parsedCssText))}),a}_consumeCssProperties(t,e){for(var a=null;a=r.f.exec(t);){var h=a[0],i=a[1],n=a.index,s=n+h.indexOf("@apply"),o=n+h.length,l=t.slice(0,s),d=t.slice(o),c=e?this._fallbacksFromPreviousRules(e):{};Object.assign(c,this._cssTextToMap(l));var p=this._atApplyToCssProperties(i,c);t=`${l}${p}${d}`,r.f.lastIndex=n+p.length}return t}_atApplyToCssProperties(t,e){t=t.replace(n,"");var a=[],h=this._map.get(t);if(h||(this._map.set(t,{}),h=this._map.get(t)),h){var r,i,s;this._currentElement&&(h.dependants[this._currentElement]=!0);var l=h.properties;for(r in l)i=[r,": var(",t,"_-_",r],(s=e&&e[r])&&i.push(",",s.replace(o,"")),i.push(")"),o.test(l[r])&&i.push(" !important"),a.push(i.join(""))}return a.join("; ")}_replaceInitialOrInherit(t,e){var a=s.exec(e);return a&&(e=a[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){for(var a,h,r,i,n=t.split(";"),s={},o=0;o<n.length;o++)(r=n[o])&&(i=r.split(":")).length>1&&(a=i[0].trim(),h=i.slice(1).join(":"),e&&(h=this._replaceInitialOrInherit(a,h)),s[a]=h);return s}_invalidateMixinEntry(t){if(d)for(var e in t.dependants)e!==this._currentElement&&d(e)}_produceCssProperties(t,e,a,r,i){if(a&&Object(h.l)(a,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;var n=this._consumeCssProperties(""+r,i),s=t.slice(0,t.indexOf("--")),o=this._cssTextToMap(n,!0),l=o,d=this._map.get(e),c=d&&d.properties;c?l=Object.assign(Object.create(c),o):this._map.set(e,l);var p,v,u=[],m=!1;for(p in l)void 0===(v=o[p])&&(v="initial"),c&&!(p in c)&&(m=!0),u.push(`${e}_-_${p}: ${v}`);return m&&this._invalidateMixinEntry(d),d&&(d.properties=l),a&&(s=`${t};${s}`),`${s}${u.join("; ")};`}}c.prototype.detectMixin=c.prototype.detectMixin,c.prototype.transformStyle=c.prototype.transformStyle,c.prototype.transformCustomStyle=c.prototype.transformCustomStyle,c.prototype.transformRules=c.prototype.transformRules,c.prototype.transformRule=c.prototype.transformRule,c.prototype.transformTemplate=c.prototype.transformTemplate,c.prototype._separator="_-_",Object.defineProperty(c.prototype,"invalidCallback",{get:()=>d,set(t){d=t}});var p=c,v=a(53),u=a(99),m=(a(116),a(26)),f=new p;class g{constructor(){this.customStyleInterface=null,f.invalidCallback=u.a}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{f.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),!Object(h.d)(t)){v.a[e]=t;var a=f.transformTemplate(t,e);t._styleAst=a}}flushCustomStyles(){if(this.ensure(),this.customStyleInterface){var t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(var e=0;e<t.length;e++){var a=t[e],h=this.customStyleInterface.getStyleForCustomStyle(a);h&&f.transformCustomStyle(h)}this.customStyleInterface.enqueued=!1}}}styleSubtree(t,e){if(this.ensure(),e&&Object(i.c)(t,e),t.shadowRoot){this.styleElement(t);for(var a=t.shadowRoot.children||t.shadowRoot.childNodes,h=0;h<a.length;h++)this.styleSubtree(a[h])}else for(var r=t.children||t.childNodes,n=0;n<r.length;n++)this.styleSubtree(r[n])}styleElement(t){this.ensure();var{is:e}=Object(h.i)(t),a=v.a[e];if((!a||!Object(h.d)(a))&&a&&!u.c(a)){u.d(a)||(this.prepareTemplate(a,e),u.b(a));var r=t.shadowRoot;if(r){var i=r.querySelector("style");i&&(i.__cssRules=a._styleAst,i.textContent=Object(h.p)(a._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var C=new g,M=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,e,a){C.flushCustomStyles(),C.prepareTemplate(t,e)},prepareTemplateStyles(t,e,a){window.ShadyCSS.prepareTemplate(t,e,a)},prepareTemplateDom(t,e){},styleSubtree(t,e){C.flushCustomStyles(),C.styleSubtree(t,e)},styleElement(t){C.flushCustomStyles(),C.styleElement(t)},styleDocument(t){C.flushCustomStyles(),C.styleDocument(t)},getComputedStyleValue:(t,e)=>Object(i.b)(t,e),flushCustomStyles(){C.flushCustomStyles()},nativeCss:m.c,nativeShadow:m.d,cssBuild:m.a,disableRuntime:m.b},M&&(window.ShadyCSS.CustomStyleInterface=M)}window.ShadyCSS.ApplyShim=f;var z=a(83),y=a(89),b=a(108),_=a(19),w=/:host\(:dir\((ltr|rtl)\)\)/g,x=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,S=/:dir\((?:ltr|rtl)\)/,k=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),L=[],A=null,O="";function E(){O=document.documentElement.getAttribute("dir")}function T(t){t.__autoDirOptOut||t.setAttribute("dir",O)}function P(){E(),O=document.documentElement.getAttribute("dir");for(var t=0;t<L.length;t++)T(L[t])}var H=Object(_.a)(t=>{k||A||(E(),(A=new MutationObserver(P)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));var e=Object(b.a)(t);class a extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),!k&&S.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){var e=t;return e=(e=e.replace(w,':host([dir="$1"])')).replace(x,':host([dir="$2"]) $1')}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(A&&A.takeRecords().length&&P(),L.push(this),T(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){var t=L.indexOf(this);t>-1&&L.splice(t,1)}}}return a.__activateDir=!1,a});a(81);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function F(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?F():window.addEventListener("DOMContentLoaded",F);var N=a(32),R=a(68),I=a(23),j=a(13),B=a(11),D=a(7),Z=window.ShadyCSS,W=Object(_.a)(t=>{var e=H(Object(y.a)(Object(z.a)(t))),a={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class h extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,a,h){e!==a&&(super.attributeChangedCallback(t,e,a,h),this.attributeChanged(t,e,a))}attributeChanged(t,e,a){}_initializeProperties(){var t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,a){this._propertyToAttribute(t,e,a)}serializeValueToAttribute(t,e,a){this._valueToNodeAttribute(a||this,t,e)}extend(t,e){if(!t||!e)return t||e;for(var a,h=Object.getOwnPropertyNames(e),r=0;r<h.length&&(a=h[r]);r++){var i=Object.getOwnPropertyDescriptor(e,a);i&&Object.defineProperty(t,a,i)}return t}mixin(t,e){for(var a in e)t[a]=e[a];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){var e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,a){a=a||{},e=null==e?{}:e;var h=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});h.detail=e;var r=a.node||this;return Object(D.a)(r).dispatchEvent(h),h}listen(t,e,a){t=t||this;var h=this.__boundListeners||(this.__boundListeners=new WeakMap),r=h.get(t);r||(r={},h.set(t,r));var i=e+a;r[i]||(r[i]=this._addMethodEventListenerToNode(t,e,a,this))}unlisten(t,e,a){t=t||this;var h=this.__boundListeners&&this.__boundListeners.get(t),r=e+a,i=h&&h[r];i&&(this._removeEventListenerFromNode(t,e,i),h[r]=null)}setScrollDirection(t,e){Object(R.setTouchAction)(e||this,a[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){var t=Object(D.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){var t=Object(N.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(N.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(N.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){for(var t,e=this.getEffectiveChildNodes(),a=[],h=0;t=e[h];h++)t.nodeType!==Node.COMMENT_NODE&&a.push(t.textContent);return a.join("")}queryEffectiveChildren(t){var e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){var e=this.root.querySelector(t||"slot");return e?Object(N.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(D.a)(this).contains(t)&&Object(D.a)(this).getRootNode()===Object(D.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(D.a)(t).getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return Z.getComputedStyleValue(this,t)}debounce(t,e,a){return this._debouncers=this._debouncers||{},this._debouncers[t]=I.a.debounce(this._debouncers[t],a>0?j.d.after(a):j.c,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};var e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};var e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};var e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?j.d.run(t.bind(this),e):~j.c.run(t.bind(this))}cancelAsync(t){t<0?j.c.cancel(~t):j.d.cancel(t)}create(t,e){var a=document.createElement(t);if(e)if(a.setProperties)a.setProperties(e);else for(var h in e)a[h]=e[h];return a}elementMatches(t,e){return Object(N.b)(e||this,t)}toggleAttribute(t,e){var a=this;return 3===arguments.length&&(a=arguments[2]),1==arguments.length&&(e=!a.hasAttribute(t)),e?(Object(D.a)(a).setAttribute(t,""),!0):(Object(D.a)(a).removeAttribute(t),!1)}toggleClass(t,e,a){a=a||this,1==arguments.length&&(e=!a.classList.contains(t)),e?a.classList.add(t):a.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,a,h){h=h||this,this.transform("translate3d("+t+","+e+","+a+")",h)}arrayDelete(t,e){var a;if(Array.isArray(t)){if((a=t.indexOf(e))>=0)return t.splice(a,1)}else if((a=Object(B.a)(this,t).indexOf(e))>=0)return this.splice(t,a,1);return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return h.prototype.is="",h})},,function(t,e,a){"use strict";a(57),a(72);var h=document.createElement("template");h.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(h.content)},,function(t,e,a){"use strict";e.a=".chat-view {\n  display: block;\n}\n\n.inputLayout {\n    width: 100%;\n}\n\n.MessageList {\n    overflow-y: scroll;\n    width: 100%;\n    height: 100%;\n}\n\n.MessageList-name {\n    font-weight: bold;\n}\n\n.MessageList-bubble {\n    margin: .5em;\n    padding: 1em;\n    border-radius: var(--lumo-border-radius-s);\n    background-color: var(--lumo-shade-20pct);\n}\n\n.MessageList-bubble-currentUser {\n    background-color: var(--lumo-primary-text-color);\n    color: var(--lumo-base-color);\n}\n\n.MessageList-avatar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: unset;\n    height: unset;\n    padding: 0;\n}\n\n.MessageList-row {\n    display: flex;\n    align-items: center;\n}\n\n.MessageList-row-currentUser {\n    flex-direction: row-reverse;\n}"},function(t,e,a){"use strict";e.a="#header {\n  height: var(--lumo-size-xl);\n  box-shadow: var(--lumo-box-shadow-s);\n}\n#header vaadin-avatar {\n  margin-left: auto;\n  margin-right: var(--lumo-space-m);\n}\nvaadin-app-layout[dir='rtl'] #header vaadin-avatar {\n  margin-left: var(--lumo-space-m);\n  margin-right: auto;\n}\n#header h1 {\n  font-size: var(--lumo-font-size-l);\n  margin: 0;\n}\n#logo {\n  box-sizing: border-box;\n  box-shadow: inset 0 -1px var(--lumo-contrast-10pct);\n  padding: var(--lumo-space-s) var(--lumo-space-m);\n}\n#logo img {\n  height: calc(var(--lumo-size-l) * 1.5);\n}\n#logo h1 {\n  font-size: var(--lumo-font-size-xl);\n  font-weight: 600;\n  margin: 0 var(--lumo-space-s);\n}\n\nvaadin-tab {\n  font-size: var(--lumo-font-size-s);\n  height: var(--lumo-size-l);\n  font-weight: 600;\n  color: var(--lumo-body-text-color);\n}\n\nvaadin-tab:hover {\n  background-color: var(--lumo-contrast-5pct);\n}\n\nvaadin-tab[selected] {\n  background-color: var(--lumo-primary-color-10pct);\n  color: var(--lumo-primary-text-color);\n}\n"},function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return p}));var h=a(60),r=a(36);function i(t){return h.a.import(t)}function n(t){var e=t.body?t.body:t,a=Object(r.b)(e.textContent,t.baseURI),h=document.createElement("style");return h.textContent=a,h}function s(t){for(var e=t.trim().split(/\s+/),a=[],h=0;h<e.length;h++)a.push(...o(e[h]));return a}function o(t){var e=i(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){var a=[];a.push(...c(e));var h=e.querySelector("template");h&&a.push(...l(h,e.assetpath)),e._styles=a}return e._styles}function l(t,e){if(!t._styles){for(var a=[],h=t.content.querySelectorAll("style"),i=0;i<h.length;i++){var n=h[i],o=n.getAttribute("include");o&&a.push(...s(o).filter((function(t,e,a){return a.indexOf(t)===e}))),e&&(n.textContent=Object(r.b)(n.textContent,e)),a.push(n)}t._styles=a}return t._styles}function d(t){var e=i(t);return e?c(e):[]}function c(t){for(var e=[],a=t.querySelectorAll("link[rel=import][type~=css]"),h=0;h<a.length;h++){var r=a[h];if(r.import){var i=r.import,s=r.hasAttribute("shady-unscoped");if(s&&!i._unscopedStyle){var o=n(i);o.setAttribute("shady-unscoped",""),i._unscopedStyle=o}else i._style||(i._style=n(i));e.push(s?i._unscopedStyle:i._style)}}return e}function p(t){for(var e=t.trim().split(/\s+/),a="",h=0;h<e.length;h++)a+=v(e[h]);return a}function v(t){var e=i(t);if(e&&void 0===e._cssText){var a=u(e),h=e.querySelector("template");h&&(a+=function(t,e){for(var a="",h=l(t,e),r=0;r<h.length;r++){var i=h[r];i.parentNode&&i.parentNode.removeChild(i),a+=i.textContent}return a}(h,e.assetpath)),e._cssText=a||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function u(t){for(var e="",a=c(t),h=0;h<a.length;h++)e+=a[h].textContent;return e}},function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return d}));var h=a(53),r=(a(49),"_applyShimCurrentVersion"),i="_applyShimNextVersion",n=Promise.resolve();function s(t){var e=h.a[t];e&&function(t){t[r]=t[r]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[i]=(t[i]||0)+1}(e)}function o(t){return t[r]===t[i]}function l(t){return!o(t)&&t._applyShimValidatingVersion===t[i]}function d(t){t._applyShimValidatingVersion=t[i],t._validating||(t._validating=!0,n.then((function(){t[r]=t[i],t._validating=!1})))}},,,function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return p}));var h=a(92),r=a(15),i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},n={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},n);function o(t,e){return c({},Object(h.a)(e),t)}function l(t,e,a,h){for(var r in function(t,e,a){for(var h=t._noAccessors,r=Object.getOwnPropertyNames(t),i=0;i<r.length;i++){var n=r[i];if(!(n in a))if(h)e[n]=t[n];else{var s=Object.getOwnPropertyDescriptor(t,n);s&&(s.configurable=!0,Object.defineProperty(e,n,s))}}}(e,t,h),i)e[r]&&(a[r]=a[r]||[],a[r].push(e[r]))}function d(t,e){for(var a in e){var h=t[a],r=e[a];t[a]=!("value"in r)&&h&&"value"in h?Object.assign({value:h.value},r):r}}function c(t,e,a){var h,i={};class o extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(h)for(var e,a=0;a<h.length;a++)(e=h[a]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){var e={};if(h)for(var a=0;a<h.length;a++)d(e,h[a].properties);return d(e,t.properties),e}static get observers(){var e=[];if(h)for(var a,r=0;r<h.length;r++)(a=h[r]).observers&&(e=e.concat(a.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();var t=i.created;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}_registered(){var t=o.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),r.b&&p(t);var e=Object.getPrototypeOf(this),a=i.beforeRegister;if(a)for(var h=0;h<a.length;h++)a[h].call(e);if(a=i.registered)for(var n=0;n<a.length;n++)a[n].call(e)}}_applyListeners(){super._applyListeners();var t=i.listeners;if(t)for(var e=0;e<t.length;e++){var a=t[e];if(a)for(var h in a)this._addMethodEventListenerToNode(this,h,a[h])}}_ensureAttributes(){var t=i.hostAttributes;if(t)for(var e=t.length-1;e>=0;e--){var a=t[e];for(var h in a)this._ensureAttribute(h,a[h])}super._ensureAttributes()}ready(){super.ready();var t=i.ready;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();var t=i.attached;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();var t=i.detached;if(t)for(var e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,a){super.attributeChanged();var h=i.attributeChanged;if(h)for(var r=0;r<h.length;r++)h[r].call(this,t,e,a)}}if(a){Array.isArray(a)||(a=[a]);var c=e.prototype.behaviors;h=function t(e,a,h){a=a||[];for(var r=e.length-1;r>=0;r--){var i=e[r];i?Array.isArray(i)?t(i,a):a.indexOf(i)<0&&(!h||h.indexOf(i)<0)&&a.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return a}(a,null,c),o.prototype.behaviors=c?c.concat(a):h}var p=e=>{h&&function(t,e,a){for(var h=0;h<e.length;h++)l(t,e[h],a,s)}(e,h,i),l(e,t,i,n)};return r.b||p(o.prototype),o.generatedFrom=t,o}var p=function(t,e){t||console.warn("Polymer.Class requires `info` argument");var a=e?e(Object(h.a)(HTMLElement)):Object(h.a)(HTMLElement);return(a=c(t,a,t.behaviors)).is=a.prototype.is=t.is,a}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var h=!1;window.addEventListener("keydown",()=>{h=!0},{capture:!0}),window.addEventListener("mousedown",()=>{h=!1},{capture:!0});var r=t=>class extends((t=>class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}})(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this.contains(t.relatedTarget)||this._focus():-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();var t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{var e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){var a=document.createElement("input");a.style.position="absolute",a.style.opacity="0",a.tabIndex=this.tabIndex,this.parentNode.insertBefore(a,this.nextSibling),a.focus(),a.addEventListener("focusout",()=>this.parentNode.removeChild(a))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&h?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(17);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function h(t,e,a){return{index:t,removed:e,addedCount:a}}function r(t,e,a,r,i,s){var o,l=0,d=0,c=Math.min(a-e,s-i);if(0==e&&0==i&&(l=function(t,e,a){for(var h=0;h<a;h++)if(!n(t[h],e[h]))return h;return a}(t,r,c)),a==t.length&&s==r.length&&(d=function(t,e,a){var h=t.length,r=e.length,i=0;for(;i<a&&n(t[--h],e[--r]);)i++;return i}(t,r,c-l)),i+=l,s-=d,(a-=d)-(e+=l)==0&&s-i==0)return[];if(e==a){for(o=h(e,[],0);i<s;)o.removed.push(r[i++]);return[o]}if(i==s)return[h(e,[],a-e)];var p=function(t){for(var e=t.length-1,a=t[0].length-1,h=t[e][a],r=[];e>0||a>0;)if(0!=e)if(0!=a){var i=t[e-1][a-1],n=t[e-1][a],s=t[e][a-1],o=void 0;(o=n<s?n<i?n:i:s<i?s:i)==i?(i==h?r.push(0):(r.push(1),h=i),e--,a--):o==n?(r.push(3),e--,h=n):(r.push(2),a--,h=s)}else r.push(3),e--;else r.push(2),a--;return r.reverse(),r}(function(t,e,a,h,r,i){for(var s=i-r+1,o=a-e+1,l=new Array(s),d=0;d<s;d++)l[d]=new Array(o),l[d][0]=d;for(var c=0;c<o;c++)l[0][c]=c;for(var p=1;p<s;p++)for(var v=1;v<o;v++)if(n(t[e+v-1],h[r+p-1]))l[p][v]=l[p-1][v-1];else{var u=l[p-1][v]+1,m=l[p][v-1]+1;l[p][v]=u<m?u:m}return l}(t,e,a,r,i,s));o=void 0;for(var v=[],u=e,m=i,f=0;f<p.length;f++)switch(p[f]){case 0:o&&(v.push(o),o=void 0),u++,m++;break;case 1:o||(o=h(u,[],0)),o.addedCount++,u++,o.removed.push(r[m]),m++;break;case 2:o||(o=h(u,[],0)),o.addedCount++,u++;break;case 3:o||(o=h(u,[],0)),o.removed.push(r[m]),m++}return o&&v.push(o),v}function i(t,e){return r(t,0,t.length,e,0,e.length)}function n(t,e){return t===e}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a(17);for(var h=a(19),r=a(77),i=a(109),n={},s=HTMLElement.prototype;s;){for(var o=Object.getOwnPropertyNames(s),l=0;l<o.length;l++)n[o[l]]=!0;s=Object.getPrototypeOf(s)}var d=Object(h.a)(t=>{var e=Object(i.a)(t);return class extends e{static createPropertiesForAttributes(){for(var t=this.observedAttributes,e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(r.b)(t[e]))}static attributeNameForProperty(t){return Object(r.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(var e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){var a;switch(e){case Object:try{a=JSON.parse(t)}catch(e){a=t}break;case Array:try{a=JSON.parse(t)}catch(e){a=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:a=isNaN(t)?String(t):Number(t),a=new Date(a);break;default:a=super._deserializeValue(t,e)}return a}_definePropertyAccessor(t,e){!function(t,e){if(!n[e]){var a=t[e];void 0!==a&&(t.__data?t._setPendingProperty(e,a):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=a))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a(17);var h=a(19),r=a(13),i=a(7),n=r.c,s=Object(h.a)(t=>class extends t{static createProperties(t){var e=this.prototype;for(var a in t)a in e||e._createPropertyAccessor(a)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){var e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(var t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,a){var h=this.__data[t],r=this._shouldPropertyChange(t,e,h);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=h),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,n.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){var t=this.__data,e=this.__dataPending,a=this.__dataOld;this._shouldPropertiesChange(t,e,a)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,a))}_shouldPropertiesChange(t,e,a){return Boolean(e)}_propertiesChanged(t,e,a){}_shouldPropertyChange(t,e,a){return a!==e&&(a==a||e==e)}attributeChangedCallback(t,e,a,h){e!==a&&this._attributeToProperty(t,a),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,a,h)}_attributeToProperty(t,e,a){if(!this.__serializing){var h=this.__dataAttributes,r=h&&h[t]||t;this[r]=this._deserializeValue(e,a||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,a){this.__serializing=!0,a=arguments.length<3?this[t]:a,this._valueToNodeAttribute(this,a,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,a){var h=this._serializeValue(e);void 0===h?t.removeAttribute(a):("class"!==a&&"name"!==a&&"slot"!==a||(t=Object(i.a)(t)),t.setAttribute(a,h))}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},,,,function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var h=a(21),r=a(89),i=a(28),n=a(104),s=a(30),o=a(9),l=a(68);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(s.a)(Object(n.a)(Object(i.a)(Object(r.a)(h.a))))){static get template(){return o.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(l.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(l.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(d.is,d)},,,function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var h,r=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function n(t){requestAnimationFrame((function(){i?i(t):(r||(r=new Promise(t=>{h=t}),"complete"===document.readyState?h():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&h()})),r.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var s="__shadyCSSCachedStyle",o=null,l=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,n(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&l&&(this.enqueued=!0,n(l))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){return t[s]?t[s]:t.getStyle?t.getStyle():t}processStyles(){for(var t=this.customStyles,e=0;e<t.length;e++){var a=t[e];if(!a[s]){var h=this.getStyleForCustomStyle(a);if(h){var r=h.__appliedElement||h;o&&o(r),a[s]=r}}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>o,set(t){o=t}},validateCallback:{get:()=>l,set(t){var e=!1;l||(e=!0),l=t,e&&this.enqueueDocumentValidation()}}})},,function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var h=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,r=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function i(t,e){if("function"==typeof t){var a=h.exec(t.toString());if(a)try{t=new Function(a[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}}window.Vaadin=window.Vaadin||{};var n=function(t,e){if(window.Vaadin.developmentMode)return i(t,e)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(r?!function(){if(r){if(Object.keys(r).map(t=>r[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!i((function(){return!0})))}catch(t){return!1}}())},function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a(87);var h=a(73);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(t){r[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return r.types[t]&&r.types[t][e]}set value(t){var e=this.type,a=this.key;e&&a&&(e=r.types[e]=r.types[e]||{},null==t?delete e[a]:e[a]=t)}get list(){if(this.type){var t=r.types[this.type];return t?Object.keys(t).map((function(t){return i[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}r[" "]=function(){},r.types={};var i=r.types;Object(h.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,a){var h=new r({type:t,key:e});return void 0!==a&&a!==h.value?h.value=a:this.value!==h.value&&(this.value=h.value),h},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new r({type:this.type,key:t}).value}})},,,function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a(87);var h=a(32),r=a(15),i=new Set,n={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(i.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():r.h||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(h.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(i.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?i.delete(this):i.add(this)}}},,function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var h,r=a(79),i=[];new MutationObserver((function(){var t=s();i.forEach(e=>{n(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var n=function(t,e){e?t.setAttribute("dir",e):t.removeAttribute("dir")},s=function(){return document.documentElement.getAttribute("dir")},o=t=>class extends t{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),h||(h=r.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),n(this,s()))}attributeChangedCallback(t,e,a){if(super.attributeChangedCallback(t,e,a),"dir"===t){var h=a===s()&&-1===i.indexOf(this),r=!a&&e&&-1===i.indexOf(this),o=a!==s()&&e===s();h||r?(this.__subscribe(),n(this,s())):o&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(t=!0){t?-1===i.indexOf(this)&&i.push(this):i.indexOf(this)>-1&&i.splice(i.indexOf(this),1)}__getNormalizedScrollLeft(t){return r.a.getNormalizedScrollLeft(h,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return r.a.setNormalizedScrollLeft(h,this.getAttribute("dir")||"ltr",t,e)}}},,function(t,e,a){"use strict";a(40),a(94),a(66),a(42);var h=document.createElement("template");h.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(h.content)},,function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var h=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),"theme"===t&&this._setTheme(a)}}},function(t,e,a){"use strict";a(40),a(38),a(42),a(45);var h=document.createElement("template");h.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "???");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn???t reserve space when there???s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(h.content)},,,function(t,e,a){"use strict";a(40),a(38),a(42),a(45);var h=document.createElement("template");h.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(h.content)},,function(t,e,a){"use strict";a(40),a(66),a(38),a(42),a(45);var h=a(9).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don???t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(h.content)},,function(t,e,a){"use strict";var h=a(87),r=a(9),i=r.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);var n=document.createElement("style");n.textContent="[hidden] { display: none !important; }",document.head.appendChild(n);a(119);var s=a(73),o=a(32);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:r.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:h.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(o.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(o.a)(this.root).appendChild(this._img))}})},,function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var h=t=>class extends t{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();var t=this.getAttribute("value");null!==t&&(this.value=t),this.addEventListener("focus",t=>this._setFocused(!0),!0),this.addEventListener("blur",t=>this._setFocused(!1),!0),this.addEventListener("mousedown",t=>{this._setActive(this._mousedown=!0);var e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("keyup",t=>this._onKeyup(t))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){t?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(t){t?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(t){t?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(t){/^( |SpaceBar|Enter)$/.test(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this._setActive(!0))}_onKeyup(t){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}},function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var h=a(55),r=a(79),i=a(23),n=a(13),s=t=>class extends t{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("click",t=>this._onClick(t)),this._observer=new h.a(this,t=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(t,e,a,h){if(!h&&t){this.setAttribute("aria-orientation",e||"vertical"),this.items.forEach(t=>{e?t.setAttribute("orientation",e):t.removeAttribute("orientation"),t.updateStyles()}),this._setFocusable(a);var r=t[a];t.forEach(t=>t.selected=t===r),r&&!r.disabled&&this._scrollToItem(a)}}get focused(){return this.getRootNode().activeElement}_filterItems(t){return t.filter(t=>t._hasVaadinItemMixin)}_onClick(t){if(!(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)){var e,a=this._filterItems(t.composedPath())[0];a&&!a.disabled&&(e=this.items.indexOf(a))>=0&&(this.selected=e)}}_searchKey(t,e){this._searchReset=i.a.debounce(this._searchReset,n.d.after(500),()=>this._searchBuf=""),this._searchBuf+=e.toLowerCase();this.items.some(t=>0===t.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=e.toLowerCase());var a=1===this._searchBuf.length?t+1:t;return this._getAvailableIndex(a,1,t=>!(t.disabled||this._isItemHidden(t))&&0===t.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(t){if(!t.metaKey&&!t.ctrlKey){var e=t.key.replace(/^Arrow/,""),a=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(e)&&1===e.length){var h=this._searchKey(a,e);h>=0&&this._focus(h)}else{var r,i,n=this._isRTL?-1:1;this._vertical&&"Up"===e||!this._vertical&&"Left"===e?(i=-n,r=a-n):this._vertical&&"Down"===e||!this._vertical&&"Right"===e?(i=n,r=a+n):"Home"===e?(i=1,r=0):"End"===e&&(i=-1,r=this.items.length-1),(r=this._getAvailableIndex(r,i,t=>!(t.disabled||this._isItemHidden(t))))>=0&&(this._focus(r),t.preventDefault())}}}_getAvailableIndex(t,e,a){for(var h=this.items.length,r=0;"number"==typeof t&&r<h;r++,t+=e||1){if(t<0?t=h-1:t>=h&&(t=0),a(this.items[t]))return t}return-1}_isItemHidden(t){return"none"===getComputedStyle(t).display}_setFocusable(t){t=this._getAvailableIndex(t,1,t=>!t.disabled);var e=this.items[t]||this.items[0];this.items.forEach(t=>t.tabIndex=t===e?0:-1)}_focus(t){var e=this.items[t];this.items.forEach(t=>t.focused=t===e),this._setFocusable(t),this._scrollToItem(t),e.focus()}focus(){this._observer&&this._observer.flush();var t=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);t&&t.focus()}get _scrollerElement(){}_scrollToItem(t){var e=this.items[t];if(e){var a=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],h=this._scrollerElement.getBoundingClientRect(),r=(this.items[t+1]||e).getBoundingClientRect(),i=(this.items[t-1]||e).getBoundingClientRect(),n=0;!this._isRTL&&r[a[1]]>=h[a[1]]||this._isRTL&&r[a[1]]<=h[a[1]]?n=r[a[1]]-h[a[1]]:(!this._isRTL&&i[a[0]]<=h[a[0]]||this._isRTL&&i[a[0]]>=h[a[0]])&&(n=i[a[0]]-h[a[0]]),this._scroll(n)}}get _vertical(){return"horizontal"!==this.orientation}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{var e=r.a.detectScrollType(),a=r.a.getNormalizedScrollLeft(e,this.getAttribute("dir")||"ltr",this._scrollerElement)+t;r.a.setNormalizedScrollLeft(e,this.getAttribute("dir")||"ltr",this._scrollerElement,a)}}}},function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var h=a(13),r=a(23),i=a(9).a`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "???";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(i.content);var n={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},s={DEFAULT:"default",ACCESSIBLE:"accessible"},o=t=>class extends t{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+n.default.join(", ")+")","_hostAccessiblePropsChanged("+n.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(this.shadowRoot){var t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return t||this.shadowRoot.querySelector('[part="value"]')}}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(t){if(this.__preventInput)return t.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){var e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=r.a.debounce(this._inputDebouncer,h.d.after(200),()=>{this.removeAttribute("input-prevented")}))}t.__fromClearButton||(this.__userInput=!0),this.value=t.target.value,this.__userInput=!1}_stateChanged(t,e,a,h){!t&&!e&&a&&h?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(t){if(!this._valueClearing){var e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}}_valueChanged(t,e){""===t&&void 0===e||(this.hasValue=""!==t&&null!=t,this.__userInput||(void 0!==t?this.inputElement.value=t:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(t){this._setOrToggleAttribute("has-label",!!t,this)}_helperTextChanged(t){this._setOrToggleAttribute("has-helper",!!t,this)}_errorMessageChanged(t){this._setOrToggleAttribute("has-error-message",!!t,this)}_onHelperSlotChange(){var t=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=t.filter(t=>3!==t.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){var t=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),t&&!this._slottedInput?(this._validateSlottedValue(t),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput=t):!t&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(s).map(t=>s[t]).forEach(t=>this._propagateHostAttributes(n[t].map(t=>this[t]),t))}_hostPropsChanged(...t){this._propagateHostAttributes(t,s.DEFAULT)}_hostAccessiblePropsChanged(...t){this._propagateHostAttributes(t,s.ACCESSIBLE)}_validateSlottedValue(t){t.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),t.value="")}_propagateHostAttributes(t,e){var a=this.inputElement,h=n[e];e===s.ACCESSIBLE?h.forEach((e,h)=>{this._setOrToggleAttribute(e,t[h],a),this._setOrToggleAttribute("aria-"+e,!!t[h]&&"true",a)}):h.forEach((e,h)=>{this._setOrToggleAttribute(e,t[h],a)})}_setOrToggleAttribute(t,e,a){t&&a&&(e?a.setAttribute(t,"boolean"==typeof e?"":e):a.removeAttribute(t))}_constraintsChanged(t,e,a,h){this.invalid&&(t||e||a||h?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange),t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange),t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);var t=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(t),this._addIEListeners(t),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var e=o._uniqueId=1+o._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`,this._labelId=`${this.constructor.is}-label-${e}`,this._helperTextId=`${this.constructor.is}-helper-${e}`,this._inputId=`${this.constructor.is}-input-${e}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(t){}}))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);var e=new Event("input",{bubbles:!0,composed:!0});e.__fromClearButton=!0;var a=new Event("change",{bubbles:!this._slottedInput});a.__fromClearButton=!0,this.inputElement.dispatchEvent(e),this.inputElement.dispatchEvent(a)}_onKeyDown(t){if(27===t.keyCode&&this.clearButtonVisible){var e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(t)&&t.preventDefault()}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__enabledCharRegExp.test(t.key)}_onPaste(t){if(this._enabledCharPattern){var e=(t.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onDrop(t){if(this._enabledCharPattern){var e=t.dataTransfer.getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onBeforeInput(t){this._enabledCharPattern&&t.data&&!this.__enabledTextRegExp.test(t.data)&&t.preventDefault()}__enabledCharPatternChanged(t){this.__enabledCharRegExp=t&&new RegExp("^"+t+"$"),this.__enabledTextRegExp=t&&new RegExp("^"+t+"*$")}_addIEListeners(t){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},t.addEventListener("focusin",this._shouldPreventInput),t.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(t){navigator.userAgent.match(/Trident/)&&(t.removeEventListener("focusin",this._shouldPreventInput),t.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(t,e,a,h,r,i){var n=[];(h||i)&&n.push(r),e&&t&&n.push(a),this._setOrToggleAttribute("aria-describedby",n.join(" "),this.focusElement)}_getActiveLabelId(t,e,a){var h=a;t&&(h=`${e} ${a}`),this.focusElement.setAttribute("aria-labelledby",h)}_getErrorMessageAriaHidden(t,e,a){return(!(e&&t?a:void 0)).toString()}_dispatchIronResizeEventIfNeeded(t,e){var a="__previous"+t;void 0!==this[a]&&this[a]!==e&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[a]=e}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=r.a.debounce(this.__observeOffsetHeightDebouncer,h.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}attributeChangedCallback(t,e,a){if(super.attributeChangedCallback(t,e,a),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(t)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){this.root.querySelectorAll("*").forEach(t=>{t.style["-webkit-backface-visibility"]="visible",t.style["-webkit-backface-visibility"]=""})}}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}}},,,,,function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var h=a(21),r=a(140),i=a(104),n=a(28),s=a(30),o=a(9);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(s.a)(Object(r.a)(Object(i.a)(Object(n.a)(h.a))))){static get template(){return o.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.8.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(l.is,l)},,function(t,e,a){"use strict";a(40),a(66),a(38),a(42),a(45),a(129),a(94),a(126);var h=a(9).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="helper-text"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-left"]) [part="value"] {
        text-align: left;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="input-field"]::after {
        transform-origin: 0% 0;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
      }

      :host([dir="rtl"]) [part="value"]:focus,
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      @-moz-document url-prefix() {
        :host([dir="rtl"]) [part="value"],
        :host([dir="rtl"]) [part="input-field"] ::slotted(input),
        :host([dir="rtl"]) [part="input-field"] ::slotted(textarea),
        :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      :host([theme~="align-left"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(h.content);a(145)},,function(t,e,a){"use strict";a(134),a(113)},,function(t,e,a){"use strict";a(38),a(42),a(132);var h=document.createElement("template");h.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(h.content)},,function(t,e,a){"use strict";a.d(e,"a",(function(){return p}));var h=a(21),r=a(70),i=a(23),n=a(47),s=a(63),o=a(11),l=a(13),d=a(7),c=Object(s.b)(h.a);class p extends c{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(var t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;for(var t=Object(d.a)(Object(d.a)(this).parentNode),e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){var t=this.template=this.querySelector("template");if(!t){var e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}var a={};a[this.as]=!0,a[this.indexAs]=!0,a[this.itemsIndexAs]=!0,this.__ctor=Object(r.b)(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:a,forwardHostProp:function(t,e){for(var a,h=this.__instances,r=0;r<h.length&&(a=h[r]);r++)a.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,a){if(Object(o.e)(this.as,e)){var h=t[this.itemsIndexAs];e==this.as&&(this.items[h]=a);var r=Object(o.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${h}`,e);this.notifyPath(r,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){var e=t,a=this.__getMethodHost();return function(){return a[e].apply(a,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){var t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths)for(var e=this.__observePaths,a=0;a<e.length;a++)0===t.indexOf(e[a])&&this.__debounceRender(this.__render,this.delay)}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=i.a.debounce(this.__renderDebouncer,e>0?l.d.after(e):l.c,t.bind(this)),Object(n.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(n.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){for(var t=this.items||[],e=new Array(t.length),a=0;a<t.length;a++)e[a]=a;this.__filterFn&&(e=e.filter((e,a,h)=>this.__filterFn(t[e],a,h))),this.__sortFn&&e.sort((e,a)=>this.__sortFn(t[e],t[a]));for(var h=this.__itemsIdxToInstIdx={},r=0,i=Math.min(e.length,this.__limit);r<i;r++){var n=this.__instances[r],s=e[r],o=t[s];h[s]=r,n?(n._setPendingProperty(this.as,o),n._setPendingProperty(this.indexAs,r),n._setPendingProperty(this.itemsIndexAs,s),n._flushProperties()):this.__insertInstance(o,r,s)}for(var l=this.__instances.length-1;l>=r;l--)this.__detachAndRemoveInstance(l)}__detachInstance(t){for(var e=this.__instances[t],a=Object(d.a)(e.root),h=0;h<e.children.length;h++){var r=e.children[h];a.appendChild(r)}return e}__attachInstance(t,e){var a=this.__instances[t];e.insertBefore(a.root,this)}__detachAndRemoveInstance(t){var e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,a){var h={};return h[this.as]=t,h[this.indexAs]=e,h[this.itemsIndexAs]=a,new this.__ctor(h)}__insertInstance(t,e,a){var h=this.__pool.pop();h?(h._setPendingProperty(this.as,t),h._setPendingProperty(this.indexAs,e),h._setPendingProperty(this.itemsIndexAs,a),h._flushProperties()):h=this.__stampInstance(t,e,a);var r=this.__instances[e+1],i=r?r.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(h.root,i),this.__instances[e]=h,h}_showHideChildren(t){for(var e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){var a=t.slice(6),h=a.indexOf("."),r=h<0?a:a.substring(0,h);if(r==parseInt(r,10)){var i=h<0?"":a.substring(h+1);this.__handleObservedPaths(i);var n=this.__itemsIdxToInstIdx[r],s=this.__instances[n];if(s){var o=this.as+(i?"."+i:"");s._setPendingPropertyOrPath(o,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){var e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){var e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(r.a)(this.template,t)}}customElements.define(p.is,p)},,function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var h=a(70),r={templatize(t,e){this._templatizerTemplate=t,this.ctor=Object(h.b)(t,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(t){return new this.ctor(t)},modelForElement(t){return Object(h.a)(this._templatizerTemplate,t)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/},function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var h=a(21),r=a(70),i=a(23),n=a(47),s=a(13),o=a(11),l=a(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class d extends h.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=i.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(n.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();var t=Object(l.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(l.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(n.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){var t=Object(l.a)(this).parentNode;if(t){if(!this.__ctor){var e=Object(l.a)(this).querySelector("template");if(!e){var a=new MutationObserver(()=>{if(!Object(l.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");a.disconnect(),this.__render()});return a.observe(this,{childList:!0}),!1}this.__ctor=Object(r.b)(e,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(o.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();var h=this.__instance.children;if(h&&h.length)if(Object(l.a)(this).previousSibling!==h[h.length-1])for(var i,n=0;n<h.length&&(i=h[n]);n++)Object(l.a)(t).insertBefore(i,this)}else this.__instance=new this.__ctor,Object(l.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){var t=this.__invalidProps;if(t){for(var e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){var t=this.__instance.children;if(t&&t.length){var e=Object(l.a)(t[0]).parentNode;if(e){e=Object(l.a)(e);for(var a,h=0;h<t.length&&(a=t[h]);h++)e.removeChild(a)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){var t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(d.is,d)},function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var h,r=a(63);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/h=r.a._mutablePropertyChange;var i={properties:{mutableData:Boolean},_shouldPropertyChange(t,e,a){return h(this,t,e,a,this.mutableData)}}},,,,,,function(t,e,a){"use strict";a(40),a(66),a(38),a(42),a(45);var h=a(9).a`<dom-module id="lumo-avatar" theme-for="vaadin-avatar">
  <template>
    <style>
      :host {
        width: var(--lumo-size-m);
        height: var(--lumo-size-m);
        color: var(--lumo-secondary-text-color);
        background-color: var(--lumo-contrast-10pct);
        border-radius: 50%;
        outline: none;
        cursor: default;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([has-color-index]) {
        color: var(--lumo-base-color);
      }

      :host([focus-ring]) {
        border-color: var(--lumo-primary-color-50pct);
      }

      [part="icon"],
      [part="abbr"] {
        fill: currentColor;
      }

      [part="abbr"] {
        font-family: var(--lumo-font-family);
        font-size: 2.4375em;
        font-weight: 500;
      }

      :host([theme~="xlarge"]) [part="abbr"] {
        font-size: 2.5em;
      }

      :host([theme~="large"]) [part="abbr"] {
        font-size: 2.375em;
      }

      :host([theme~="small"]) [part="abbr"] {
        font-size: 2.75em;
      }

      :host([theme~="xsmall"]) [part="abbr"] {
        font-size: 3em;
      }

      :host([theme~="xlarge"]) {
        width: var(--lumo-size-xl);
        height: var(--lumo-size-xl);
      }

      :host([theme~="large"]) {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
      }

      :host([theme~="small"]) {
        width: var(--lumo-size-s);
        height: var(--lumo-size-s);
      }

      :host([theme~="xsmall"]) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(h.content);a(165)},,function(t,e,a){"use strict";var h=a(21),r=a(28),i=a(30),n=(a(57),document.createElement("template"));n.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-avatar-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(n.content);var s=a(9),o=!1;
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/window.addEventListener("keydown",t=>{o=9===t.keyCode},!0),window.addEventListener("mousedown",()=>{o=!1},!0);class l extends(Object(i.a)(Object(r.a)(h.a))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
        flex: none;
        border-radius: 50%;
        overflow: hidden;
        height: var(--vaadin-avatar-size);
        width: var(--vaadin-avatar-size);
        border: var(--vaadin-avatar-outline-width) solid transparent;
        margin: calc(var(--vaadin-avatar-outline-width) * -1);
        background-clip: content-box;
        --vaadin-avatar-outline-width: 2px;
        --vaadin-avatar-size: 64px;
      }

      img {
        height: 100%;
        width: 100%;
      }

      [part="icon"] {
        font-size: 5.6em;
      }

      [part="abbr"] {
        font-size: 2.2em;
      }

      [part="icon"] > text {
        font-family: 'vaadin-avatar-icons';
      }

      :host([hidden]) {
        display: none !important;
      }

      svg[hidden] {
        display: none !important;
      }

      :host([has-color-index]) {
        position: relative;
        background-color: var(--vaadin-avatar-user-color);
      }

      :host([has-color-index])::before {
        position: absolute;
        z-index: 1;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
      }
    </style>
    <img hidden\$="[[!__imgVisible]]" src\$="[[img]]" aria-hidden="true">
    <svg part="icon" hidden\$="[[!__iconVisible]]" id="avatar-icon" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <text dy=".35em" text-anchor="middle">???</text>
    </svg>
    <svg part="abbr" hidden\$="[[!__abbrVisible]]" id="avatar-abbr" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <text dy=".35em" text-anchor="middle">[[abbr]]</text>
    </svg>
`}static get is(){return"vaadin-avatar"}static get version(){return"1.0.4"}static get properties(){return{img:{type:String,reflectToAttribute:!0},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),this.name||this.abbr||this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("focusin",()=>{this.__setFocused(!0)}),this.addEventListener("focusout",()=>{this.__setFocused(!1)})}__setFocused(t){t?(this.setAttribute("focused",""),o&&this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"))}__colorIndexChanged(t){if(null!=t){var e="--vaadin-user-color-"+t,a=window.ShadyCSS&&!window.ShadyCSS.nativeCss;if(Boolean(a?window.ShadyCSS.getComputedStyleValue(document.documentElement,e):getComputedStyle(document.documentElement).getPropertyValue(e))){var h=`var(${e})`;this.setAttribute("has-color-index",""),a?window.ShadyCSS.styleSubtree(this,{"--vaadin-avatar-user-color":h}):this.style.setProperty("--vaadin-avatar-user-color",h)}else this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${t} is not defined`)}else this.removeAttribute("has-color-index")}__imgOrAbbrOrNameChanged(t,e,a){this.__updateVisibility(),e&&e!==this.__generatedAbbr?this.__setTitle(a?`${a} (${e})`:e):(this.abbr=a?this.__generatedAbbr=a.split(" ").map(t=>t.charAt(0)).join(""):void 0,this.__setTitle(a))}__i18nChanged(t){t.base&&t.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=t.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img,this.__abbrVisible=!this.img&&!!this.abbr,this.__iconVisible=!this.img&&!this.abbr}__setTitle(t){t?this.setAttribute("title",t):this.setAttribute("title",this.i18n.anonymous)}}customElements.define(l.is,l)},,,,,,,,,function(t,e,a){"use strict";a.r(e);var h=a(96),r=a(97),i=(a(40),a(38),a(45),a(9)),n=i.a`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      [part="navbar"]::before {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      }

      :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
        border-right: 1px solid var(--lumo-contrast-10pct);
      }

      :host([dir='rtl']:not([overlay])) [part='drawer'] {
        border-left: 1px solid var(--lumo-contrast-10pct);
      }

      :host([overlay]) [part="drawer"]::before {
        background: var(--lumo-base-color);
      }

      [part="navbar"]::before,
      :host([overlay]) [part="drawer"]::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      :host([overlay]) [part='drawer']::before {
        background: var(--lumo-base-color);
        height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        opacity: 1;
      }

      [part] ::slotted(h2),
      [part] ::slotted(h3),
      [part] ::slotted(h4) {
        margin-top: var(--lumo-space-xs) !important;
        margin-bottom: var(--lumo-space-xs) !important;
      }

      @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
        [part="navbar"]::before {
          opacity: 0.8;
        }

        [part="navbar"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }

        :host([overlay]) [part="drawer"]::before {
          opacity: 0.9;
        }

        :host([overlay]) [part="drawer"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(57);var s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    /* stylelint-disable length-zero-no-unit */\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: constant(safe-area-inset-top, 0px);\n      --safe-area-inset-right: constant(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: constant(safe-area-inset-left, 0px);\n    }\n\n    @supports (padding-left: env(safe-area-inset-left)) {\n      html {\n        --safe-area-inset-top: env(safe-area-inset-top, 0px);\n        --safe-area-inset-right: env(safe-area-inset-right, 0px);\n        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n        --safe-area-inset-left: env(safe-area-inset-left, 0px);\n      }\n    }\n    /* stylelint-enable */\n  </style>\n</custom-style>",document.head.appendChild(s.content);var o=function(){if(window.navigator.userAgent.match(/iPhone|iPad/i)){var t=window.innerHeight,e=window.innerWidth>t,a=document.documentElement.clientHeight;e&&a>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",a-t+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}};o(),window.addEventListener("resize",o);var l=a(21),d=a(81),c=a(28),p=a(30),v=a(55);
/**
@license
Vaadin App Layout
Copyright (C) 2019 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(p.a)(Object(c.a)(l.a))){static get template(){return i.a`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        --vaadin-app-layout-transition: 200ms;
        transition: padding var(--vaadin-app-layout-transition);
        --vaadin-app-layout-touch-optimized: false;
        --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
        --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
        padding-top: var(--vaadin-app-layout-navbar-offset-top);
        padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
        padding-left: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([dir="rtl"]) {
        padding-left: 0;
        padding-right: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([hidden]),
      [hidden] {
        display: none !important;
      }

      :host([no-anim]) {
        --vaadin-app-layout-transition: none !important;
      }

      :host([drawer-opened]) {
        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
      }

      :host([overlay]) {
        --vaadin-app-layout-drawer-offset-left: 0;
        --vaadin-app-layout-navbar-offset-left: 0;
      }

      :host(:not([no-scroll])) [content] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [content] {
        height: 100%;
      }

      @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
        :host {
          --vaadin-app-layout-touch-optimized: true;
        }
      }

      [part="navbar"],
      [part="navbar"]::before {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        left: 0;
        transition: left var(--vaadin-app-layout-transition);
        padding-top: var(--safe-area-inset-top);
        padding-left: var(--safe-area-inset-left);
        padding-right: var(--safe-area-inset-right);
        z-index: 1;
      }

      :host(:not([dir="rtl"])[primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        left: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([dir="rtl"][primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        right: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([primary-section="drawer"]) [part="drawer"] {
        top: 0;
      }

      [part="navbar"][bottom] {
        top: auto;
        bottom: 0;
        padding-bottom: var(--safe-area-inset-bottom);
      }

      [part="drawer"] {
        overflow: auto;
        position: fixed;
        top: var(--vaadin-app-layout-navbar-offset-top, 0);
        right: auto;
        bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
        left: var(--vaadin-app-layout-navbar-offset-left, 0);
        transition: transform var(--vaadin-app-layout-transition);
        transform: translateX(-100%);
        max-width: 90%;
        width: 16em;
        box-sizing: border-box;
        padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
        outline: none;
      }

      :host([drawer-opened]) [part="drawer"] {
        transform: translateX(0%);
        touch-action: manipulation;
      }

      [part="backdrop"] {
        background-color: #000;
        opacity: 0.3;
      }

      :host(:not([drawer-opened])) [part="backdrop"] {
        opacity: 0;
      }

      :host([overlay]) [part="backdrop"] {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        transition: opacity var(--vaadin-app-layout-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([overlay]) [part="drawer"] {
        top: 0;
        bottom: 0;
      }

      :host([overlay]) [part="drawer"],
      :host([overlay]) [part="backdrop"] {
        z-index: 2;
      }

      :host([drawer-opened][overlay]) [part="backdrop"] {
        pointer-events: auto;
        touch-action: manipulation;
      }

      :host([dir="rtl"]) [part="drawer"] {
        left: auto;
        right: var(--vaadin-app-layout-navbar-offset-start, 0);
        transform: translateX(100%);
      }

      :host([dir="rtl"]) [part="navbar"],
      :host([dir="rtl"]) [part="navbar"]::before {
        transition: right var(--vaadin-app-layout-transition);
      }

      :host([dir="rtl"][drawer-opened]) [part='drawer'] {
        transform: translateX(0%);
      }

      :host(:not([dir="rtl"])[drawer-opened]:not([overlay])) {
        padding-left: var(--vaadin-app-layout-drawer-offset-left);
      }

      :host([dir="rtl"][drawer-opened]:not([overlay])) {
        padding-right: var(--vaadin-app-layout-drawer-offset-left);
      }

      @media (max-width: 800px),
      (max-height: 600px) {
        :host {
          --vaadin-app-layout-drawer-overlay: true;
        }

        [part="drawer"] {
          width: 20em;
        }
      }
    </style>
    <div part="navbar" id="navbarTop">
      <slot name="navbar"></slot>
    </div>
    <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
    <div part="drawer" id="drawer">
      <slot name="drawer" id="drawerSlot"></slot>
    </div>
    <div content="">
      <slot></slot>
    </div>
    <div part="navbar" id="navbarBottom" bottom="" hidden="">
      <slot name="navbar-bottom"></slot>
    </div>
    <div hidden=""><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"2.2.0"}static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"_primarySectionObserver"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"_drawerOpenedObserver"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.HTMLImports&&!window.HTMLImports.useNative?Array.from(this.querySelectorAll("*")).forEach(t=>{t.localName.indexOf("-")>-1&&window.customElements.whenDefined(t.localName).then(()=>{Object(d.b)(this,this._afterFirstRender)})}):Object(d.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode();var t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new v.a(t,t=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new v.a(this.$.touchSlot,t=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new v.a(this.$.drawerSlot,t=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),this.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}_primarySectionObserver(t){-1!==["navbar","drawer"].indexOf(t)||this.set("primarySection","navbar")}_drawerOpenedObserver(){var t=this.$.drawer;t.removeAttribute("tabindex"),this.overlay&&this.drawerOpened&&(t.setAttribute("tabindex",0),t.focus(),this._updateDrawerHeight())}_isShadyCSS(){return window.ShadyCSS&&!window.ShadyCSS.nativeCss}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}_updateDrawerSize(){var t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;0===t?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){var t=this.shadowRoot.querySelector('[part="navbar"]').getBoundingClientRect(),e=this.shadowRoot.querySelector('[part="navbar"][bottom]').getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-navbar-offset-size":t.height+"px","--_vaadin-app-layout-navbar-offset-size-bottom":e.height+"px"}):(this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",t.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",e.height+"px"));var a=this.$.drawer.getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-offset-size":a.width+"px","--vaadin-app-layout-drawer-offset-left":"var(--_vaadin-app-layout-drawer-offset-size)"}):this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",a.width+"px")}_updateDrawerHeight(){var{scrollHeight:t,offsetHeight:e}=this.$.drawer,a=t>e?t+"px":"100%";this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-scroll-size":a}):this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",a)}_updateOverlayMode(){var t="true"==this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),e=this.$.drawer;!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","drawer")):(this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label")),this._updateDrawerHeight()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){var e;return this._isShadyCSS()?(window.ShadyCSS.styleSubtree(this),e=window.ShadyCSS.getComputedStyleValue(this,t)):e=getComputedStyle(this).getPropertyValue(t),(e||"").trim().toLowerCase()}_updateTouchOptimizedMode(){var t="true"==this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(e=>{e.getAttribute("slot").indexOf("touch-optimized")>-1&&(e.__touchOptimized=!0),t&&e.__touchOptimized?e.setAttribute("slot","navbar-bottom"):e.setAttribute("slot","navbar")}),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(d.a)(this,()=>{this.removeAttribute("no-anim"),this._isShadyCSS()&&window.ShadyCSS.styleSubtree(this)})}}customElements.define(u.is,u);a(134),a(94);var m=i.a`<dom-module id="lumo-drawer-toggle" theme-for="vaadin-drawer-toggle">
  <template>
    <style include="lumo-button">
      :host {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
        min-width: auto;
        margin: 0 var(--lumo-space-s);
        padding: 0;
        background: transparent;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: inherit;
        height: auto;
        width: auto;
        background: transparent;
        top: auto;
      }

      [part=icon]::before {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        content: var(--lumo-icons-menu);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(m.content);var f=a(113);
/**
@license
Vaadin Drawer Toggle
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class g extends f.a{static get template(){return i.a`
    <style>
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        position: relative;
        outline: none;
        height: 24px;
        width: 24px;
        padding: 4px;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: absolute;
        top: 8px;
        height: 3px;
        width: 24px;
        background-color: #000;
      }

      [part="icon"]::after,
      [part="icon"]::before {
        content: "";
      }

      [part="icon"]::after {
        top: 6px;
      }

      [part="icon"]::before {
        top: 12px;
      }
    </style>
    <slot>
      <div part="icon"></div>
    </slot>
    <button id="button" type="button" aria-label\$="[[ariaLabel]]"></button>
`}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:String}}constructor(){super(),this.addEventListener("click",t=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(g.is,g);a(163),a(149),a(136),a(87);var C=a(119),M=a(73),z=a(32);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(M.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new C.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var a=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(a){var h=Object(z.a)(t.root||t);return h.insertBefore(a,h.childNodes[0]),t._svgIcon=a}return null},removeIcon:function(t){t._svgIcon&&(Object(z.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(z.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,a){if(t){var h=t.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=h.getAttribute("viewBox")||"0 0 "+e+" "+e,n="pointer-events: none; display: block; width: 100%; height: 100%;";return a&&h.hasAttribute("mirror-in-rtl")&&(n+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",i),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=n,r.appendChild(h).removeAttribute("id"),r}return null}});var y=document.createElement("template");y.innerHTML='<iron-iconset-svg name="vaadin" size="16">\n<svg><defs>\n<g id="abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>\n<g id="absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>\n<g id="academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>\n<g id="accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>\n<g id="accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>\n<g id="add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>\n<g id="adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>\n<g id="adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>\n<g id="airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>\n<g id="alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>\n<g id="align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>\n<g id="align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>\n<g id="align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>\n<g id="align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>\n<g id="alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>\n<g id="alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>\n<g id="ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>\n<g id="anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>\n<g id="angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>\n<g id="angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>\n<g id="angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>\n<g id="angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>\n<g id="angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>\n<g id="angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>\n<g id="angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>\n<g id="angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>\n<g id="archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>\n<g id="archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>\n<g id="area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>\n<g id="arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>\n<g id="arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>\n<g id="arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>\n<g id="arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>\n<g id="arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>\n<g id="arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>\n<g id="arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>\n<g id="arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>\n<g id="arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>\n<g id="arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>\n<g id="arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>\n<g id="arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>\n<g id="arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>\n<g id="arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>\n<g id="arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>\n<g id="arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>\n<g id="arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>\n<g id="arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>\n<g id="arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>\n<g id="arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>\n<g id="arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>\n<g id="arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>\n<g id="asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>\n<g id="at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>\n<g id="automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>\n<g id="backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>\n<g id="backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>\n<g id="backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>\n<g id="ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>\n<g id="bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>\n<g id="bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>\n<g id="bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>\n<g id="barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>\n<g id="bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>\n<g id="bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>\n<g id="bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>\n<g id="bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>\n<g id="bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>\n<g id="boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>\n<g id="bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>\n<g id="bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>\n<g id="bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>\n<g id="book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>\n<g id="book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>\n<g id="book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>\n<g id="bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>\n<g id="bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>\n<g id="briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>\n<g id="browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>\n<g id="bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>\n<g id="bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>\n<g id="building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>\n<g id="building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>\n<g id="bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>\n<g id="bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>\n<g id="buss"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>\n<g id="button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>\n<g id="calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>\n<g id="calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>\n<g id="calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>\n<g id="calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>\n<g id="calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>\n<g id="calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>\n<g id="calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>\n<g id="camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>\n<g id="car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>\n<g id="caret-down"><path d="M3 4h10l-5 7z"></path></g>\n<g id="caret-left"><path d="M11 3v10l-7-5z"></path></g>\n<g id="caret-right"><path d="M5 13v-10l7 5z"></path></g>\n<g id="caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>\n<g id="caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>\n<g id="caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>\n<g id="caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>\n<g id="caret-up"><path d="M13 12h-10l5-7z"></path></g>\n<g id="cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>\n<g id="cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>\n<g id="cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>\n<g id="chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>\n<g id="chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>\n<g id="chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>\n<g id="chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>\n<g id="chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>\n<g id="chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>\n<g id="check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>\n<g id="check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>\n<g id="check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>\n<g id="check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>\n<g id="check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>\n<g id="chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>\n<g id="chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>\n<g id="chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>\n<g id="chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>\n<g id="chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>\n<g id="chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>\n<g id="chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>\n<g id="chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>\n<g id="chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>\n<g id="chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>\n<g id="chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>\n<g id="chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>\n<g id="chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>\n<g id="chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>\n<g id="chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>\n<g id="chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>\n<g id="child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>\n<g id="circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>\n<g id="circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>\n<g id="clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>\n<g id="clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>\n<g id="clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>\n<g id="clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>\n<g id="clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>\n<g id="clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>\n<g id="clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>\n<g id="clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>\n<g id="close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>\n<g id="close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>\n<g id="close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>\n<g id="close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>\n<g id="close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>\n<g id="cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>\n<g id="cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>\n<g id="cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>\n<g id="cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>\n<g id="cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>\n<g id="cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>\n<g id="cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>\n<g id="code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>\n<g id="coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>\n<g id="cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>\n<g id="cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>\n<g id="cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>\n<g id="coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>\n<g id="coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>\n<g id="combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>\n<g id="comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>\n<g id="comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>\n<g id="comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>\n<g id="comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>\n<g id="comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>\n<g id="compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>\n<g id="compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>\n<g id="compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>\n<g id="connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>\n<g id="connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>\n<g id="controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>\n<g id="copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>\n<g id="copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>\n<g id="copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>\n<g id="corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>\n<g id="corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>\n<g id="corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>\n<g id="corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>\n<g id="credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>\n<g id="crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>\n<g id="cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>\n<g id="crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>\n<g id="css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>\n<g id="ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>\n<g id="ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>\n<g id="cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>\n<g id="cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>\n<g id="curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>\n<g id="cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>\n<g id="cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>\n<g id="cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>\n<g id="dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>\n<g id="date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>\n<g id="deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>\n<g id="del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>\n<g id="del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>\n<g id="dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>\n<g id="desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>\n<g id="diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>\n<g id="diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>\n<g id="diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>\n<g id="diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>\n<g id="disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>\n<g id="doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>\n<g id="dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>\n<g id="dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>\n<g id="download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>\n<g id="download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>\n<g id="drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>\n<g id="edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>\n<g id="eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>\n<g id="elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>\n<g id="ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>\n<g id="ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>\n<g id="ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>\n<g id="ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>\n<g id="enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>\n<g id="enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>\n<g id="envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>\n<g id="envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>\n<g id="envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>\n<g id="envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>\n<g id="envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>\n<g id="envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>\n<g id="eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>\n<g id="esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>\n<g id="esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>\n<g id="euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>\n<g id="exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>\n<g id="exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>\n<g id="exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>\n<g id="exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>\n<g id="exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>\n<g id="expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>\n<g id="expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>\n<g id="expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>\n<g id="external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>\n<g id="external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>\n<g id="eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>\n<g id="eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>\n<g id="eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>\n<g id="facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>\n<g id="facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>\n<g id="factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>\n<g id="family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>\n<g id="fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>\n<g id="fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>\n<g id="female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>\n<g id="file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>\n<g id="file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>\n<g id="file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>\n<g id="file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>\n<g id="file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>\n<g id="file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>\n<g id="file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>\n<g id="file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>\n<g id="file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>\n<g id="file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>\n<g id="file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>\n<g id="file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>\n<g id="file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>\n<g id="file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>\n<g id="file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>\n<g id="file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>\n<g id="file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>\n<g id="file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>\n<g id="file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>\n<g id="file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>\n<g id="file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>\n<g id="fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>\n<g id="film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>\n<g id="filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>\n<g id="fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>\n<g id="flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>\n<g id="flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>\n<g id="flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>\n<g id="flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>\n<g id="flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>\n<g id="flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>\n<g id="flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>\n<g id="flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>\n<g id="flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>\n<g id="folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>\n<g id="folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>\n<g id="folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>\n<g id="folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>\n<g id="folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>\n<g id="folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>\n<g id="folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>\n<g id="font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>\n<g id="form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>\n<g id="forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>\n<g id="frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>\n<g id="funcion"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>\n<g id="funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>\n<g id="gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>\n<g id="gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>\n<g id="gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>\n<g id="glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>\n<g id="glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>\n<g id="globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>\n<g id="globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>\n<g id="golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>\n<g id="google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>\n<g id="google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>\n<g id="grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>\n<g id="grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>\n<g id="grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>\n<g id="grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>\n<g id="grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>\n<g id="grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>\n<g id="grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>\n<g id="grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>\n<g id="grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>\n<g id="group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>\n<g id="hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>\n<g id="hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>\n<g id="handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>\n<g id="hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>\n<g id="handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>\n<g id="harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>\n<g id="harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>\n<g id="hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>\n<g id="header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>\n<g id="headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>\n<g id="headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>\n<g id="health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>\n<g id="heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>\n<g id="heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>\n<g id="home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>\n<g id="home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>\n<g id="hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>\n<g id="hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>\n<g id="hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>\n<g id="hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>\n<g id="hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>\n<g id="inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>\n<g id="indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>\n<g id="info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>\n<g id="info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>\n<g id="info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>\n<g id="insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>\n<g id="institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>\n<g id="invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>\n<g id="italic"><path d="M8 0h3l-3 16h-3z"></path></g>\n<g id="key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>\n<g id="key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>\n<g id="keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>\n<g id="keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>\n<g id="laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>\n<g id="layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>\n<g id="level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>\n<g id="level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>\n<g id="level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>\n<g id="level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>\n<g id="level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>\n<g id="level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>\n<g id="level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>\n<g id="level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>\n<g id="lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>\n<g id="lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>\n<g id="line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>\n<g id="line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>\n<g id="line-h"><path d="M0 7h16v1h-16v-1z"></path></g>\n<g id="line-v"><path d="M8 0h1v16h-1v-16z"></path></g>\n<g id="lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>\n<g id="lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>\n<g id="link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>\n<g id="list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>\n<g id="list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>\n<g id="list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>\n<g id="list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>\n<g id="location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>\n<g id="location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>\n<g id="location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>\n<g id="lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>\n<g id="magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>\n<g id="magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>\n<g id="mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>\n<g id="male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>\n<g id="map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>\n<g id="margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>\n<g id="margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>\n<g id="margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>\n<g id="margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>\n<g id="margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>\n<g id="medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>\n<g id="megafone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>\n<g id="meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>\n<g id="menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>\n<g id="microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>\n<g id="minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>\n<g id="minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>\n<g id="minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>\n<g id="minus"><path d="M2 7h12v2h-12v-2z"></path></g>\n<g id="mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>\n<g id="mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>\n<g id="mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>\n<g id="modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>\n<g id="modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>\n<g id="money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>\n<g id="money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>\n<g id="money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>\n<g id="money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>\n<g id="moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>\n<g id="moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>\n<g id="morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>\n<g id="movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>\n<g id="mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>\n<g id="native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>\n<g id="newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>\n<g id="notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>\n<g id="nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>\n<g id="office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>\n<g id="open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>\n<g id="option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>\n<g id="option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>\n<g id="options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>\n<g id="orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>\n<g id="out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>\n<g id="outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>\n<g id="package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>\n<g id="padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>\n<g id="padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>\n<g id="padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>\n<g id="padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>\n<g id="padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>\n<g id="paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>\n<g id="paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>\n<g id="palete"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>\n<g id="panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>\n<g id="paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>\n<g id="paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>\n<g id="paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>\n<g id="paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>\n<g id="password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>\n<g id="pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>\n<g id="pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>\n<g id="phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>\n<g id="picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>\n<g id="pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>\n<g id="piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>\n<g id="piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>\n<g id="pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>\n<g id="pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>\n<g id="pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>\n<g id="pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>\n<g id="play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>\n<g id="play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>\n<g id="play"><path d="M2 1v14l12-7z"></path></g>\n<g id="plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>\n<g id="plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>\n<g id="plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>\n<g id="plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>\n<g id="plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>\n<g id="plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>\n<g id="pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>\n<g id="power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>\n<g id="presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>\n<g id="print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>\n<g id="progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>\n<g id="puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>\n<g id="pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>\n<g id="qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>\n<g id="question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>\n<g id="question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>\n<g id="question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>\n<g id="quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>\n<g id="random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>\n<g id="raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>\n<g id="raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>\n<g id="records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>\n<g id="recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>\n<g id="refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>\n<g id="reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>\n<g id="reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>\n<g id="resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>\n<g id="resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>\n<g id="retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>\n<g id="rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>\n<g id="road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>\n<g id="road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>\n<g id="road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>\n<g id="road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>\n<g id="rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>\n<g id="rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>\n<g id="rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>\n<g id="rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>\n<g id="rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>\n<g id="safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>\n<g id="safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>\n<g id="scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>\n<g id="scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>\n<g id="screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>\n<g id="search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>\n<g id="search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>\n<g id="search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>\n<g id="select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>\n<g id="server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>\n<g id="share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>\n<g id="share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>\n<g id="shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>\n<g id="shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>\n<g id="shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>\n<g id="shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>\n<g id="sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>\n<g id="sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>\n<g id="sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>\n<g id="sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>\n<g id="signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>\n<g id="sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>\n<g id="slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>\n<g id="sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>\n<g id="smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>\n<g id="sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>\n<g id="sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>\n<g id="spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>\n<g id="specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>\n<g id="spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>\n<g id="spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>\n<g id="spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>\n<g id="spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>\n<g id="spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>\n<g id="split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>\n<g id="split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>\n<g id="split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>\n<g id="spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>\n<g id="square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>\n<g id="star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>\n<g id="star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>\n<g id="star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>\n<g id="star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>\n<g id="star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>\n<g id="star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>\n<g id="start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>\n<g id="step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>\n<g id="step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>\n<g id="stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>\n<g id="stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>\n<g id="stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>\n<g id="stop"><path d="M1 1h14v14h-14v-14z"></path></g>\n<g id="stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>\n<g id="storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>\n<g id="strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>\n<g id="subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>\n<g id="suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>\n<g id="sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>\n<g id="sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>\n<g id="sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>\n<g id="superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>\n<g id="sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>\n<g id="tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>\n<g id="tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>\n<g id="table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>\n<g id="tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>\n<g id="tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>\n<g id="tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>\n<g id="tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>\n<g id="tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>\n<g id="taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>\n<g id="teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>\n<g id="terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>\n<g id="text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>\n<g id="text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>\n<g id="text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>\n<g id="text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>\n<g id="thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>\n<g id="thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>\n<g id="thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>\n<g id="thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>\n<g id="thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>\n<g id="ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>\n<g id="time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>\n<g id="time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>\n<g id="timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>\n<g id="toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>\n<g id="tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>\n<g id="tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>\n<g id="touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>\n<g id="train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>\n<g id="trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>\n<g id="tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>\n<g id="trendind-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>\n<g id="trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>\n<g id="trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>\n<g id="truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>\n<g id="twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>\n<g id="twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>\n<g id="twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>\n<g id="umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>\n<g id="underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>\n<g id="unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>\n<g id="unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>\n<g id="upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>\n<g id="upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>\n<g id="user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>\n<g id="user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>\n<g id="user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>\n<g id="user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>\n<g id="user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>\n<g id="user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>\n<g id="users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>\n<g id="vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>\n<g id="vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>\n<g id="viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>\n<g id="vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>\n<g id="vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>\n<g id="volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>\n<g id="volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>\n<g id="volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>\n<g id="volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>\n<g id="wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>\n<g id="warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>\n<g id="workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>\n<g id="wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>\n<g id="youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>\n<g id="youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',document.head.appendChild(y.content);a(72);var b=document.createElement("template");b.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(b.content);a(66),a(42);var _=document.createElement("template");_.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_.content);var w=i.a`<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-s);
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing-xs"])::before,
      :host([theme~="spacing-s"])::before,
      :host([theme~="spacing"])::before,
      :host([theme~="spacing-l"])::before,
      :host([theme~="spacing-xl"])::before {
        content: "";
      }

      :host([theme~="spacing-xs"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xs) * -1);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-s) * -1);
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xl) * -1);
      }

      /* RTL styles */
      :host([dir="rtl"][theme~="spacing-xs"]) ::slotted(*) {
        margin-right: var(--lumo-space-xs);
      }

      :host([dir="rtl"][theme~="spacing-s"]) ::slotted(*) {
        margin-right: var(--lumo-space-s);
      }

      :host([dir="rtl"][theme~="spacing"]) ::slotted(*) {
        margin-right: var(--lumo-space-m);
      }

      :host([dir="rtl"][theme~="spacing-l"]) ::slotted(*) {
        margin-right: var(--lumo-space-l);
      }

      :host([dir="rtl"][theme~="spacing-xl"]) ::slotted(*) {
        margin-right: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([dir="rtl"][theme~="spacing-xs"])::before {
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"][theme~="spacing-s"])::before {
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"][theme~="spacing"])::before {
        margin-right: calc(var(--lumo-space-m) * -1);
      }

      :host([dir="rtl"][theme~="spacing-l"])::before {
        margin-right: calc(var(--lumo-space-l) * -1);
      }

      :host([dir="rtl"][theme~="spacing-xl"])::before {
        margin-right: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(w.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class x extends(Object(p.a)(Object(c.a)(l.a))){static get template(){return i.a`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: 1em;
      }

      :host([theme~="spacing"][dir="rtl"]) ::slotted(*) {
        margin-right: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: -1em;
      }

      :host([theme~="spacing"][dir="rtl"])::before {
        margin-right: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.4.0"}}customElements.define(x.is,x);var S=i.a`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]) ::slotted(*) {
        margin-top: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]) ::slotted(*) {
        margin-top: var(--lumo-space-s);
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]) ::slotted(*) {
        margin-top: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]) ::slotted(*) {
        margin-top: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
       :host([theme~="spacing-xs"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-xs) * -1);
       }

       :host([theme~="spacing-s"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-s) * -1);
       }

      :host([theme~="spacing"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(S.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class k extends(Object(p.a)(Object(c.a)(l.a))){static get template(){return i.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(k.is,k);var L=i.a`<dom-module id="lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>
      :host {
        box-sizing: border-box;
        padding: 0.5rem 0.75rem;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        font-weight: 500;
        opacity: 1;
        color: var(--lumo-contrast-60pct);
        transition: 0.15s color, 0.2s transform;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transform-origin: 50% 100%;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        min-width: var(--lumo-size-m);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host(:not([orientation="vertical"])) {
        text-align: center;
      }

      :host([orientation="vertical"]) {
        transform-origin: 0% 50%;
        padding: 0.25rem 1rem;
        min-height: var(--lumo-size-m);
        min-width: 0;
      }

      :host(:hover),
      :host([focus-ring]) {
        color: var(--lumo-body-text-color);
      }

      :host([selected]) {
        color: var(--lumo-primary-text-color);
        transition: 0.6s color;
      }

      :host([active]:not([selected])) {
        color: var(--lumo-primary-text-color);
        transition-duration: 0.1s;
      }

      :host::before,
      :host::after {
        content: "";
        position: absolute;
        display: var(--_lumo-tab-marker-display, block);
        bottom: 0;
        left: 50%;
        width: var(--lumo-size-s);
        height: 2px;
        background-color: var(--lumo-contrast-60pct);
        border-radius: var(--lumo-border-radius) var(--lumo-border-radius) 0 0;
        transform: translateX(-50%) scale(0);
        transform-origin: 50% 100%;
        transition: 0.14s transform cubic-bezier(.12, .32, .54, 1);
        will-change: transform;
      }

      :host([selected])::before,
      :host([selected])::after {
        background-color: var(--lumo-primary-color);
      }

      :host([orientation="vertical"])::before,
      :host([orientation="vertical"])::after {
        left: 0;
        bottom: 50%;
        transform: translateY(50%) scale(0);
        width: 2px;
        height: var(--lumo-size-xs);
        border-radius: 0 var(--lumo-border-radius) var(--lumo-border-radius) 0;
        transform-origin: 100% 50%;
      }

      :host::after {
        box-shadow: 0 0 0 4px var(--lumo-primary-color);
        opacity: 0.15;
        transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
      }

      :host([selected])::before,
      :host([selected])::after {
        transform: translateX(-50%) scale(1);
        transition-timing-function: cubic-bezier(.12, .32, .54, 1.5);
      }

      :host([orientation="vertical"][selected])::before,
      :host([orientation="vertical"][selected])::after {
        transform: translateY(50%) scale(1);
      }

      :host([selected]:not([active]))::after {
        opacity: 0;
      }

      :host(:not([orientation="vertical"])) ::slotted(a[href]) {
        justify-content: center;
      }

      :host ::slotted(a) {
        display: flex;
        width: 100%;
        align-items: center;
        height: 100%;
        margin: -0.5rem -0.75rem;
        padding: 0.5rem 0.75rem;
        outline: none;

        /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
        text-decoration: none !important;
        color: inherit !important;
      }

      :host ::slotted(iron-icon) {
        margin: 0 4px;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      :host ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25rem;
        box-sizing: border-box !important;
      }

      :host(:not([dir="rtl"])) ::slotted(iron-icon:first-child) {
        margin-left: 0;
      }

      :host(:not([dir="rtl"])) ::slotted(iron-icon:last-child) {
        margin-right: 0;
      }

      :host([theme~="icon-on-top"]) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.5rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(a) {
        flex-direction: column;
        align-items: center;
        margin-top: -0.25rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(iron-icon) {
        margin: 0;
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        opacity: 1;
        color: var(--lumo-disabled-text-color);
      }

      /* Focus-ring */

      :host([focus-ring]) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
        border-radius: var(--lumo-border-radius);
      }

      /* RTL specific styles */

      :host([dir="rtl"])::before,
      :host([dir="rtl"])::after {
        left: auto;
        right: 50%;
        transform: translateX(50%) scale(0);
      }

      :host([dir="rtl"][selected]:not([orientation="vertical"]))::before,
      :host([dir="rtl"][selected]:not([orientation="vertical"]))::after {
        transform: translateX(50%) scale(1);
      }

      :host([dir="rtl"]) ::slotted(iron-icon:first-child) {
        margin-right: 0;
      }

      :host([dir="rtl"]) ::slotted(iron-icon:last-child) {
        margin-left: 0;
      }

      :host([orientation="vertical"][dir="rtl"]) {
        transform-origin: 100% 50%;
      }

      :host([dir="rtl"][orientation="vertical"])::before,
      :host([dir="rtl"][orientation="vertical"])::after {
        left: auto;
        right: 0;
        border-radius: var(--lumo-border-radius) 0 0 var(--lumo-border-radius);
        transform-origin: 0% 50%;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(L.content);var A=a(138);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class O extends(Object(p.a)(Object(c.a)(Object(A.a)(l.a)))){static get template(){return i.a`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"3.2.0"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(t){var e=this.hasAttribute("active");if(super._onKeyup(t),e){var a=this.querySelector("a");a&&a.click()}}}customElements.define(O.is,O);var E=i.a`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([orientation="vertical"])) {
        box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
        position: relative;
        min-height: var(--lumo-size-l);
      }

      :host([orientation="horizontal"]) [part="tabs"] ::slotted(vaadin-tab:not([theme~="icon-on-top"])) {
        justify-content: center;
      }

      :host([orientation="vertical"]) {
        box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0 0.75rem;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        width: 100%;
        margin: 0.5rem 0;
      }

      [part="forward-button"],
      [part="back-button"] {
        position: absolute;
        z-index: 1;
        font-family: lumo-icons;
        color: var(--lumo-tertiary-text-color);
        font-size: var(--lumo-icon-size-m);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5em;
        height: 100%;
        transition: 0.2s opacity;
        top: 0;
      }

      [part="forward-button"]:hover,
      [part="back-button"]:hover {
        color: inherit;
      }

      :host(:not([dir="rtl"])) [part="forward-button"] {
        right: 0;
      }

      [part="forward-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      [part="back-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      /* Tabs overflow */

      [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: none;
        -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
        /* For IE11 */
        min-height: var(--lumo-size-l);
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="tabs"] {
          mask-image: var(--_lumo-tabs-overflow-mask-image);
        }
      }

      /* Horizontal tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
      }

      /* Vertical tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
      }

      /* End overflowing */
      :host([overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
      }

      /* Start overflowing */
      :host([overflow~="start"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
      }

      :host [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: var(--lumo-space-m);
      }

      /* Centered */

      :host([theme~="centered"][orientation="horizontal"]) [part="tabs"] {
        justify-content: center;
      }

      /* Small */

      :host([theme~="small"]),
      :host([theme~="small"]) [part="tabs"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="small"]) [part="tabs"] ::slotted(vaadin-tab) {
        font-size: var(--lumo-font-size-s);
      }

      /* Minimal */

      :host([theme~="minimal"]) {
        box-shadow: none;
        /* This doesn't work with ShadyCSS */
        --_lumo-tab-marker-display: none;
      }

      /* Workaround for the above ShadyCSS issue */
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::before,
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::after {
        display: none;
      }

      /* Hide-scroll-buttons */

      :host([theme~="hide-scroll-buttons"]) [part="back-button"],
      :host([theme~="hide-scroll-buttons"]) [part="forward-button"] {
        display: none;
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
      }

      /* Equal-width tabs */
      :host([theme~="equal-width-tabs"]) {
        flex: auto;
      }

      :host([theme~="equal-width-tabs"]) [part="tabs"] ::slotted(vaadin-tab) {
        flex: 1 0 0%;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="forward-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      :host([dir="rtl"]) [part="back-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      :host([orientation="vertical"][dir="rtl"]) {
        box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([dir="rtl"]) [part="forward-button"] {
        left: 0;
      }

      :host([dir="rtl"]) [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: 0;
        margin-right: var(--lumo-space-m);
      }

      /* Both ends overflowing */
      :host([dir="rtl"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([dir="rtl"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([dir="rtl"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(E.content);var T=a(139),P=a(122),H=a(102),F=/Apple.* Version\/(9|10)/.test(navigator.userAgent);class N extends(Object(p.a)(Object(T.a)(Object(c.a)(Object(H.b)([P.a],l.a))))){static get template(){return i.a`
    <style>
      :host {
        display: flex;
        align-items: center;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        display: block;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        flex-grow: 1;
        display: flex;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
      @-moz-document url-prefix() {
        :host([orientation="horizontal"]) [part="tabs"] {
          overflow: hidden;
        }
      }

      :host([orientation="horizontal"]) [part="tabs"]::-webkit-scrollbar {
        display: none;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="back-button"],
      [part="forward-button"] {
        pointer-events: none;
        opacity: 0;
        cursor: default;
      }

      :host([overflow~="start"]) [part="back-button"],
      :host([overflow~="end"]) [part="forward-button"] {
        pointer-events: auto;
        opacity: 1;
      }

      [part="back-button"]::after {
        content: '???';
      }

      [part="forward-button"]::after {
        content: '???';
      }

      :host([orientation="vertical"]) [part="back-button"],
      :host([orientation="vertical"]) [part="forward-button"] {
        display: none;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="back-button"]::after {
        content: '???';
      }

      :host([dir="rtl"]) [part="forward-button"]::after {
        content: '???';
      }
    </style>
    <div on-click="_scrollBack" part="back-button"></div>

    <div id="scroll" part="tabs">
      <slot></slot>
    </div>

    <div on-click="_scrollForward" part="forward-button"></div>
`}static get is(){return"vaadin-tabs"}static get version(){return"3.2.0"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Object(d.a)(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){var t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;e-=1;var a=t>0?"start":"";a+=t+this._scrollOffset<e?" end":"",1==this.__direction&&(a=a.replace(/start|end/gi,t=>"start"===t?"end":"start")),a?this.setAttribute("overflow",a.trim()):this.removeAttribute("overflow"),this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(F&&this.root){this.root.querySelectorAll("*").forEach(t=>{t.style["-webkit-backface-visibility"]="visible",t.style["-webkit-backface-visibility"]=""})}}}customElements.define(N.is,N);a(147);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var R="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,I=(t,e,a=null)=>{for(;e!==a;){var h=e.nextSibling;t.removeChild(e),e=h}},j=`{{lit-${String(Math.random()).slice(2)}}}`,B=`\x3c!--${j}--\x3e`,D=new RegExp(`${j}|${B}`);class Z{constructor(t,e){this.parts=[],this.element=e;for(var a=[],h=[],r=document.createTreeWalker(e.content,133,null,!1),i=0,n=-1,s=0,{strings:o,values:{length:l}}=t;s<l;){var d=r.nextNode();if(null!==d){if(n++,1===d.nodeType){if(d.hasAttributes()){for(var c=d.attributes,{length:p}=c,v=0,u=0;u<p;u++)W(c[u].name,"$lit$")&&v++;for(;v-- >0;){var m=o[s],f=G.exec(m)[2],g=f.toLowerCase()+"$lit$",C=d.getAttribute(g);d.removeAttribute(g);var M=C.split(D);this.parts.push({type:"attribute",index:n,name:f,strings:M}),s+=M.length-1}}"TEMPLATE"===d.tagName&&(h.push(d),r.currentNode=d.content)}else if(3===d.nodeType){var z=d.data;if(z.indexOf(j)>=0){for(var y=d.parentNode,b=z.split(D),_=b.length-1,w=0;w<_;w++){var x=void 0,S=b[w];if(""===S)x=q();else{var k=G.exec(S);null!==k&&W(k[2],"$lit$")&&(S=S.slice(0,k.index)+k[1]+k[2].slice(0,-"$lit$".length)+k[3]),x=document.createTextNode(S)}y.insertBefore(x,d),this.parts.push({type:"node",index:++n})}""===b[_]?(y.insertBefore(q(),d),a.push(d)):d.data=b[_],s+=_}}else if(8===d.nodeType)if(d.data===j){var L=d.parentNode;null!==d.previousSibling&&n!==i||(n++,L.insertBefore(q(),d)),i=n,this.parts.push({type:"node",index:n}),null===d.nextSibling?d.data="":(a.push(d),n--),s++}else for(var A=-1;-1!==(A=d.data.indexOf(j,A+1));)this.parts.push({type:"node",index:-1}),s++}else r.currentNode=h.pop()}for(var O of a)O.parentNode.removeChild(O)}}var W=(t,e)=>{var a=t.length-e.length;return a>=0&&t.slice(a)===e},V=t=>-1!==t.index,q=()=>document.createComment(""),G=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function U(t,e){for(var{element:{content:a},parts:h}=t,r=document.createTreeWalker(a,133,null,!1),i=J(h),n=h[i],s=-1,o=0,l=[],d=null;r.nextNode();){s++;var c=r.currentNode;for(c.previousSibling===d&&(d=null),e.has(c)&&(l.push(c),null===d&&(d=c)),null!==d&&o++;void 0!==n&&n.index===s;)n.index=null!==d?-1:n.index-o,n=h[i=J(h,i)]}l.forEach(t=>t.parentNode.removeChild(t))}var Y=t=>{for(var e=11===t.nodeType?0:1,a=document.createTreeWalker(t,133,null,!1);a.nextNode();)e++;return e},J=(t,e=-1)=>{for(var a=e+1;a<t.length;a++){var h=t[a];if(V(h))return a}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var $=new WeakMap,X=t=>"function"==typeof t&&$.has(t),K={},Q={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class tt{constructor(t,e,a){this.__parts=[],this.template=t,this.processor=e,this.options=a}update(t){var e=0;for(var a of this.__parts)void 0!==a&&a.setValue(t[e]),e++;for(var h of this.__parts)void 0!==h&&h.commit()}_clone(){for(var t,e=R?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),a=[],h=this.template.parts,r=document.createTreeWalker(e,133,null,!1),i=0,n=0,s=r.nextNode();i<h.length;)if(t=h[i],V(t)){for(;n<t.index;)n++,"TEMPLATE"===s.nodeName&&(a.push(s),r.currentNode=s.content),null===(s=r.nextNode())&&(r.currentNode=a.pop(),s=r.nextNode());if("node"===t.type){var o=this.processor.handleTextExpression(this.options);o.insertAfterNode(s.previousSibling),this.__parts.push(o)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options));i++}else this.__parts.push(void 0),i++;return R&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var et=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),at=` ${j} `;class ht{constructor(t,e,a,h){this.strings=t,this.values=e,this.type=a,this.processor=h}getHTML(){for(var t=this.strings.length-1,e="",a=!1,h=0;h<t;h++){var r=this.strings[h],i=r.lastIndexOf("\x3c!--");a=(i>-1||a)&&-1===r.indexOf("--\x3e",i+1);var n=G.exec(r);e+=null===n?r+(a?at:B):r.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+j}return e+=this.strings[t]}getTemplateElement(){var t=document.createElement("template"),e=this.getHTML();return void 0!==et&&(e=et.createHTML(e)),t.innerHTML=e,t}}class rt extends ht{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){var t=super.getTemplateElement(),e=t.content,a=e.firstChild;return e.removeChild(a),((t,e,a=null,h=null)=>{for(;e!==a;){var r=e.nextSibling;t.insertBefore(e,h),e=r}})(e,a.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var it=t=>null===t||!("object"==typeof t||"function"==typeof t),nt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class st{constructor(t,e,a){this.dirty=!0,this.element=t,this.name=e,this.strings=a,this.parts=[];for(var h=0;h<a.length-1;h++)this.parts[h]=this._createPart()}_createPart(){return new ot(this)}_getValue(){var t=this.strings,e=t.length-1,a=this.parts;if(1===e&&""===t[0]&&""===t[1]){var h=a[0].value;if("symbol"==typeof h)return String(h);if("string"==typeof h||!nt(h))return h}for(var r="",i=0;i<e;i++){r+=t[i];var n=a[i];if(void 0!==n){var s=n.value;if(it(s)||!nt(s))r+="string"==typeof s?s:String(s);else for(var o of s)r+="string"==typeof o?o:String(o)}}return r+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ot{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===K||it(t)&&t===this.value||(this.value=t,X(t)||(this.committer.dirty=!0))}commit(){for(;X(this.value);){var t=this.value;this.value=K,t(this)}this.value!==K&&this.committer.commit()}}class lt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(q()),this.endNode=t.appendChild(q())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=q()),t.__insert(this.endNode=q())}insertAfterPart(t){t.__insert(this.startNode=q()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null!==this.startNode.parentNode){for(;X(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=K,t(this)}var e=this.__pendingValue;e!==K&&(it(e)?e!==this.value&&this.__commitText(e):e instanceof ht?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):nt(e)?this.__commitIterable(e):e===Q?(this.value=Q,this.clear()):this.__commitText(e))}}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){var e=this.startNode.nextSibling,a="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=a:this.__commitNode(document.createTextNode(a)),this.value=t}__commitTemplateResult(t){var e=this.options.templateFactory(t);if(this.value instanceof tt&&this.value.template===e)this.value.update(t.values);else{var a=new tt(e,t.processor,this.options),h=a._clone();a.update(t.values),this.__commitNode(h),this.value=a}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());var e,a=this.value,h=0;for(var r of t)void 0===(e=a[h])&&(e=new lt(this.options),a.push(e),0===h?e.appendIntoPart(this):e.insertAfterPart(a[h-1])),e.setValue(r),e.commit(),h++;h<a.length&&(a.length=h,this.clear(e&&e.endNode))}clear(t=this.startNode){I(this.startNode.parentNode,t.nextSibling,this.endNode)}}class dt{constructor(t,e,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=a}setValue(t){this.__pendingValue=t}commit(){for(;X(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=K,t(this)}if(this.__pendingValue!==K){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=K}}}class ct extends st{constructor(t,e,a){super(t,e,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new pt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class pt extends ot{}var vt=!1;(()=>{try{var t={get capture(){return vt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class ut{constructor(t,e,a){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=a,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;X(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=K,t(this)}if(this.__pendingValue!==K){var e=this.__pendingValue,a=this.value,h=null==e||null!=a&&(e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive),r=null!=e&&(null==a||h);h&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=mt(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=K}}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}var mt=t=>t&&(vt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function ft(t){var e=gt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},gt.set(t.type,e));var a=e.stringsArray.get(t.strings);if(void 0!==a)return a;var h=t.strings.join(j);return void 0===(a=e.keyString.get(h))&&(a=new Z(t,t.getTemplateElement()),e.keyString.set(h,a)),e.stringsArray.set(t.strings,a),a}var gt=new Map,Ct=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Mt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,a,h){var r=e[0];return"."===r?new ct(t,e.slice(1),a).parts:"@"===r?[new ut(t,e.slice(1),h.eventContext)]:"?"===r?[new dt(t,e.slice(1),a)]:new st(t,e,a).parts}handleTextExpression(t){return new lt(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var zt=(t,...e)=>new rt(t,e,"svg",Mt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,yt=(t,e)=>`${t}--${e}`,bt=!0;void 0===window.ShadyCSS?bt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),bt=!1);var _t=t=>e=>{var a=yt(e.type,t),h=gt.get(a);void 0===h&&(h={stringsArray:new WeakMap,keyString:new Map},gt.set(a,h));var r=h.stringsArray.get(e.strings);if(void 0!==r)return r;var i=e.strings.join(j);if(void 0===(r=h.keyString.get(i))){var n=e.getTemplateElement();bt&&window.ShadyCSS.prepareTemplateDom(n,t),r=new Z(e,n),h.keyString.set(i,r)}return h.stringsArray.set(e.strings,r),r},wt=["html","svg"],xt=new Set,St=(t,e,a)=>{xt.add(t);var h=a?a.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0!==i){for(var n=document.createElement("style"),s=0;s<i;s++){var o=r[s];o.parentNode.removeChild(o),n.textContent+=o.textContent}(t=>{wt.forEach(e=>{var a=gt.get(yt(e,t));void 0!==a&&a.keyString.forEach(t=>{var{element:{content:e}}=t,a=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{a.add(t)}),U(t,a)})})})(t);var l=h.content;a?function(t,e,a=null){var{element:{content:h},parts:r}=t;if(null!=a)for(var i=document.createTreeWalker(h,133,null,!1),n=J(r),s=0,o=-1;i.nextNode();){for(o++,i.currentNode===a&&(s=Y(e),a.parentNode.insertBefore(e,a));-1!==n&&r[n].index===o;){if(s>0){for(;-1!==n;)r[n].index+=s,n=J(r,n);return}n=J(r,n)}}else h.appendChild(e)}(a,n,l.firstChild):l.insertBefore(n,l.firstChild),window.ShadyCSS.prepareTemplateStyles(h,t);var d=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(a){l.insertBefore(n,l.firstChild);var c=new Set;c.add(n),U(a,c)}}else window.ShadyCSS.prepareTemplateStyles(h,t)};window.JSCompiler_renameProperty=(t,e)=>t;var kt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Lt=(t,e)=>e!==t&&(e==e||t==t),At={attribute:!0,type:String,converter:kt,reflect:!1,hasChanged:Lt};class Ot extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();var t=[];return this._classProperties.forEach((e,a)=>{var h=this._attributeNameForProperty(a,e);void 0!==h&&(this._attributeToPropertyMap.set(h,a),t.push(h))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=At){if(this._ensureClassProperties(),this._classProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var a="symbol"==typeof t?Symbol():"__"+t,h=this.getPropertyDescriptor(t,a,e);void 0!==h&&Object.defineProperty(this.prototype,t,h)}}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(h){var r=this[t];this[e]=h,this.requestUpdateInternal(t,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||At}static finalize(){var t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var e=this.properties,a=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(var h of a)this.createProperty(h,e[h])}}static _attributeNameForProperty(t,e){var a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,a=Lt){return a(t,e)}static _propertyValueFromAttribute(t,e){var a=e.type,h=e.converter||kt,r="function"==typeof h?h:h.fromAttribute;return r?r(t,a):t}static _propertyValueToAttribute(t,e){if(void 0!==e.reflect){var a=e.type,h=e.converter;return(h&&h.toAttribute||kt.toAttribute)(t,a)}}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){var a=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,a)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,a){e!==a&&this._attributeToProperty(t,a)}_propertyToAttribute(t,e,a=At){var h=this.constructor,r=h._attributeNameForProperty(t,a);if(void 0!==r){var i=h._propertyValueToAttribute(e,a);if(void 0===i)return;this._updateState=8|this._updateState,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(!(8&this._updateState)){var a=this.constructor,h=a._attributeToPropertyMap.get(t);if(void 0!==h){var r=a.getPropertyOptions(h);this._updateState=16|this._updateState,this[h]=a._propertyValueFromAttribute(e,r),this._updateState=-17&this._updateState}}}requestUpdateInternal(t,e,a){var h=!0;if(void 0!==t){var r=this.constructor;a=a||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,a.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,a))):h=!1}!this._hasRequestedUpdate&&h&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}var t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var t=!1,e=this._changedProperties;try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Ot.finalized=!0;var Et=Element.prototype;Et.msMatchesSelector||Et.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Tt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol();class Ht{constructor(t,e){if(e!==Pt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}var Ft=(t,...e)=>{var a=e.reduce((e,a,h)=>e+(t=>{if(t instanceof Ht)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(a)+t[h+1],t[0]);return new Ht(a,Pt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var Nt={};class Rt extends Ot{static getStyles(){return this.styles}static _getUniqueStyles(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var t=this.getStyles();if(Array.isArray(t)){var e=(t,a)=>t.reduceRight((t,a)=>Array.isArray(a)?e(a,t):(t.add(a),t),a),a=e(t,new Set),h=[];a.forEach(t=>h.unshift(t)),this._styles=h}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Tt){var e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Ht(String(e),Pt)}return t})}}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){var t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Tt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){var e=this.render();super.update(t),e!==Nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{var e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Nt}}Rt.finalized=!0,Rt.render=(t,e,a)=>{if(!a||"object"!=typeof a||!a.scopeName)throw new Error("The `scopeName` option is required.");var h=a.scopeName,r=Ct.has(e),i=bt&&11===e.nodeType&&!!e.host,n=i&&!xt.has(h),s=n?document.createDocumentFragment():e;if(((t,e,a)=>{var h=Ct.get(e);void 0===h&&(I(e,e.firstChild),Ct.set(e,h=new lt(Object.assign({templateFactory:ft},a))),h.appendInto(e)),h.setValue(t),h.commit()})(t,s,Object.assign({templateFactory:_t(h)},a)),n){var o=Ct.get(s);Ct.delete(s);var l=o.value instanceof tt?o.value.template:void 0;St(h,s,l),I(e,e.firstChild),e.appendChild(s),Ct.set(e,o)}!r&&i&&window.ShadyCSS.styleElement(e.host)};var It=class{constructor(t){this.seed=t%2147483647,this.seed<=0&&(this.seed+=2147483646)}next(){return this.seed=16807*this.seed%2147483647}nextFloat(){return(this.next()-1)/2147483646}nextInt(t,e){return Math.floor(t+this.nextFloat()*(e-t))}},jt={Blank:zt`
`,Kurt:zt`
      <g
        id='Top/_Resources/Kurt'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g
          id='Kurts'
          filter='url("#filter1")'
          transform='translate(5.000000, 2.000000)'>
          <path
            d='M66,11.1111111 C54.9625586,11.1111111 53.3705645,2.0266011 30.6705882,0.740740741 C7.98552275,-0.283199952 0.815225204,6.4494855 0.776470588,11.1111111 C0.813236892,15.4042795 -0.352293566,26.5612661 14.3647059,39.6296296 C29.1367705,55.1420807 44.2704162,49.8818301 49.6941176,44.8148148 C55.1352081,42.4731118 61.3403442,21.4596351 66,21.4814815 C70.6596558,21.5033279 76.8647919,42.4731118 82.3058824,44.8148148 C87.7295838,49.8818301 102.86323,55.1420807 117.635294,39.6296296 C132.352294,26.5612661 131.186763,15.4042795 131.223529,11.1111111 C131.184775,6.4494855 124.014477,-0.283199952 101.329412,0.740740741 C78.6294355,2.0266011 77.0374414,11.1111111 66,11.1111111 Z'
            id='It!'
            fill='#F4F4F4'
            fillRule='nonzero'
          />
          <path
            d='M55.1294118,21.4814815 C55.5103632,13.8233491 42.2156493,5.64243259 27.9529412,5.92592593 C13.6973442,6.22450879 11.8417942,15.3786982 11.6470588,18.8888889 C11.2982286,27.0220633 20.014463,45.3037598 36.1058824,44.8148148 C52.1972736,44.305848 54.9092435,26.5344305 55.1294118,21.4814815 Z'
            id='Did'
            fill='#2F383B'
            fillRule='nonzero'
          />
          <path
            d='M120.352941,21.4814815 C120.733893,13.8233491 107.439179,5.64243259 93.1764706,5.92592593 C78.9208736,6.22450879 77.0653236,15.3786982 76.8705882,18.8888889 C76.521758,27.0220633 85.2379924,45.3037598 101.329412,44.8148148 C117.420803,44.305848 120.132773,26.5344305 120.352941,21.4814815 Z'
            id='Courtney'
            fill='#2F383B'
            fillRule='nonzero'
            transform='translate(98.611765, 25.370370) scale(-1, 1) translate(-98.611765, -25.370370) '
          />
        </g>
      </g>
`,Prescription01:zt`
      <g
        id='Top/_Resources/Prescription-01'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.4%'
            width='101.5%'
            height='109.8%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g
          id='Glasses'
          filter='url("#filter1")'
          transform='translate(8.000000, 8.000000)'
          fill='#D6EAF2'>
          <path
            d='M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z'
            id='Frame-Stuff'
          />
          <path
            d='M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z'
            id='Frame-Stuff'
          />
          <path
            d='M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267'
            id='Frame-Stuff'
          />
          <path
            d='M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267'
            id='Frame-Stuff'
          />
          <path
            d='M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333'
            id='Frame-Stuff'
          />
        </g>
      </g>
`,Prescription02:zt`
      <g
        id='Top/_Resources/Prescription-02'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.4%'
            width='101.5%'
            height='109.8%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g
          id='Wayfarers'
          filter='url("#filter1")'
          transform='translate(6.000000, 7.000000)'
          fill='#252C2F'>
          <path
            d='M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z'
            id='Left'
            fillRule='nonzero'
          />
          <path
            d='M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z'
            id='Right'
            fillRule='nonzero'
          />
          <path
            d='M2.95454545,5.77156439 C3.64590909,5.09629136 11.2095455,0 32.5,0 C50.3513636,0 54.1302273,1.85267217 59.8502273,4.6518809 L60.2689233,4.85850899 C60.6666014,4.99901896 62.7002447,5.68982981 65.0790606,5.76579519 C67.2462948,5.67278567 69.1000195,5.08540191 69.641698,4.89719767 C76.1703915,1.7220864 82.5610971,0 97.5,0 C118.790455,0 126.354091,5.09629136 127.045455,5.77156439 C128.679318,5.77156439 130,7.06150904 130,8.65734659 L130,11.5431288 C130,13.1389663 128.679318,14.428911 127.045455,14.428911 C127.045455,14.428911 120.143997,14.428911 120.143997,17.3146932 C120.143997,20.2004754 118.181818,13.1389663 118.181818,11.5431288 L118.181818,8.73240251 C114.578575,7.35340151 108.128411,4.78617535 97.5,4.78617535 C85.6584651,4.78617535 79.7610984,6.88602813 74.7022935,8.97112368 L74.7588636,9.10752861 L74.7563667,11.0937608 L72.5391666,16.4436339 L69.8004908,15.3608351 C69.5558969,15.2641292 69.0281396,15.090392 68.2963505,14.9099044 C66.256272,14.4067419 64.1589087,14.253569 62.3040836,14.6343084 C61.6235903,14.7739931 60.9922286,14.9836085 60.4128127,15.266732 L57.7704824,16.5578701 L55.1266751,11.3962031 L55.2440909,9.10175705 L55.3248203,8.90683855 C50.9620526,6.87386374 46.9392639,4.78617535 32.5,4.78617535 C21.8721459,4.78617535 15.422131,7.3524397 11.8181818,8.7314671 L11.8181818,11.5431288 C11.8181818,13.1389663 8.86363636,20.2004754 8.86363636,17.3146932 C8.86363636,14.428911 2.95454545,14.428911 2.95454545,14.428911 C1.32363636,14.428911 0,13.1389663 0,11.5431288 L0,8.65734659 C0,7.06150904 1.32363636,5.77156439 2.95454545,5.77156439 Z'
            id='Stuff'
            fillRule='nonzero'
          />
        </g>
      </g>
`,Round:zt`
      <g
        id='Top/_Resources/Round'
        fill='none'
        transform='translate(62.000000, 85.000000)'>
        <defs>
          <path
            d='M80.4646192,16.3941179 C84.3801509,8.45869677 92.552602,3 102,3 C110.919691,3 118.702887,7.86591082 122.839921,15.0880638 C123.050197,15.0306504 123.271519,15 123.5,15 L131.5,15 C132.880712,15 134,16.1192881 134,17.5 C134,18.8807119 132.880712,20 131.5,20 L124.963126,20 C125.637355,22.2145921 126,24.5649459 126,27 C126,40.254834 115.254834,51 102,51 C88.745166,51 78,40.254834 78,27 C78,25.5781066 78.1236513,24.1850936 78.3607874,22.8311273 C78.2762458,18.4553035 74.9135957,15 70.8624171,15 C67.1256697,15 63.9747186,17.9397535 63.4417635,21.8300629 C63.8073299,23.4951922 64,25.2250958 64,27 C64,40.254834 53.254834,51 40,51 C26.745166,51 16,40.254834 16,27 C16,24.5649459 16.3626451,22.2145921 17.0368738,20 L10.5,20 C9.11928813,20 8,18.8807119 8,17.5 C8,16.1192881 9.11928813,15 10.5,15 L10.5,15 L18.5,15 C18.728481,15 18.9498033,15.0306504 19.1600793,15.0880638 C23.2971127,7.86591082 31.0803092,3 40,3 C49.3521568,3 57.4549431,8.34919095 61.415666,16.15488 C63.4929212,13.0392725 66.9494432,11 70.8624171,11 C74.8746823,11 78.4070368,13.1440781 80.4646192,16.3941179 Z M40,47 C51.045695,47 60,38.045695 60,27 C60,15.954305 51.045695,7 40,7 C28.954305,7 20,15.954305 20,27 C20,38.045695 28.954305,47 40,47 Z M102,47 C113.045695,47 122,38.045695 122,27 C122,15.954305 113.045695,7 102,7 C90.954305,7 82,15.954305 82,27 C82,38.045695 90.954305,47 102,47 Z'
            id='Round-path1'
          />
          <filter
            x='-0.8%'
            y='-2.1%'
            width='101.6%'
            height='108.3%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
        </defs>
        <g id='Lennon-Glasses'>
          <use
            fill='black'
            fillOpacity='1'
            filter='url("#filter1")'
            href='#Round-path1'
          />
          <use fill='#252C2F' fillRule='evenodd' href='#Round-path1' />
        </g>
      </g>
`,Sunglasses:zt`
      <g
        id='Top/_Resources/Sunglasses'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.6%'
            width='101.6%'
            height='110.5%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z'
            id='Sunglasses-path1'
          />
          <path
            d='M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z'
            id='Sunglasses-path2'
          />
          <linearGradient
            x1='50%'
            y1='0%'
            x2='50%'
            y2='70.5058195%'
            id='linearGradient1'>
            <stop stop-color='#FFFFFF' stop-opacity='0.5' offset='0%' />
            <stop stop-color='#000000' stop-opacity='0.5' offset='100%' />
          </linearGradient>
          <linearGradient
            x1='50%'
            y1='0%'
            x2='50%'
            y2='100%'
            id='linearGradient2'>
            <stop stop-color='#FFFFFF' stop-opacity='0.5' offset='0%' />
            <stop stop-color='#000000' stop-opacity='0.5' offset='70.5058195%' />
          </linearGradient>
        </defs>
        <g
          id='Sunglasses'
          filter='url("#filter1")'
          transform='translate(8.000000, 8.000000)'>
          <g id='shades'>
            <use
              opacity='0.700000048'
              fill='#000000'
              href='#Sunglasses-path1'
            />
            <use
              fill='url("#linearGradient1")'
              style='mix-blend-mode:screen'
              href='#Sunglasses-path1'
            />
          </g>
          <g id='shades'>
            <use
              opacity='0.700000048'
              fill='#000000'
              href='#Sunglasses-path2'
            />
            <use
              fill='url("#linearGradient2")'
              style='mix-blend-mode:screen'
              href='#Sunglasses-path2'
            />
          </g>
          <g id='Glasses' fill='#252C2F'>
            <path
              d='M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z'
              id='Frame'
            />
            <path
              d='M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z'
              id='Frame'
            />
            <path
              d='M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267'
              id='Frame'
            />
            <path
              d='M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267'
              id='Frame'
            />
            <path
              d='M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333'
              id='Frame'
            />
          </g>
        </g>
      </g>
`,Wayfarers:zt`
      <g
        id='Top/_Resources/Wayfarers'
        fill='none'
        transform='translate(62.000000, 85.000000)'
        strokeWidth='1'>
        <defs>
          <filter
            x='-0.8%'
            y='-2.4%'
            width='101.6%'
            height='109.8%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <linearGradient
            x1='50%'
            y1='0%'
            x2='50%'
            y2='100%'
            id='linearGradient1'>
            <stop stop-color='#FFFFFF' stop-opacity='0.5' offset='0%' />
            <stop stop-color='#000000' stop-opacity='0.5' offset='70.5058195%' />
          </linearGradient>
          <path
            d='M44.9178864,17.5714286 C44.9178864,27.2737857 36.66775,35.1428571 22.9204545,35.1428571 L20.1704091,35.1428571 C6.42311364,35.1428571 0.923022727,27.2708571 0.923022727,17.5714286 L0.923022727,17.5714286 C0.923022727,7.86614286 2.20715909,0 21.4545455,0 L24.3863636,0 C43.63375,0 44.9178864,7.86614286 44.9178864,17.5714286 L44.9178864,17.5714286 Z'
            id='Wayfarers-path1'
          />
          <path
            d='M106.486068,17.5714286 C106.486068,27.2737857 98.2388636,35.1428571 84.4886364,35.1428571 L81.7385909,35.1428571 C67.9912955,35.1428571 62.4912045,27.2708571 62.4912045,17.5714286 L62.4912045,17.5714286 C62.4912045,7.86614286 63.7753409,0 83.0227273,0 L85.9545455,0 C105.199,0 106.486068,7.86614286 106.486068,17.5714286 L106.486068,17.5714286 Z'
            id='Wayfarers-path2'
          />
        </defs>
        <g
          id='Wayfarers'
          filter='url("#filter1")'
          transform='translate(7.000000, 7.000000)'>
          <g
            id='Shades'
            transform='translate(10.795455, 2.928571)'
            fillRule='nonzero'>
            <g id='Shade'>
              <use
                opacity='0.700000048'
                fill='#000000'
                fillRule='evenodd'
                href='#Wayfarers-path1'
              />
              <use
                fill='url("#linearGradient1")'
                fillRule='evenodd'
                style='mix-blend-mode:screen'
                href='#Wayfarers-path1'
              />
            </g>
            <g id='Shade'>
              <use
                opacity='0.700000048'
                fill='#000000'
                fillRule='evenodd'
                href='#Wayfarers-path2'
              />
              <use
                fill='url("#linearGradient1")'
                fillRule='evenodd'
                style='mix-blend-mode:screen'
                href='#Wayfarers-path2'
              />
            </g>
          </g>
          <path
            d='M33.7159091,41 L30.9658636,41 C17.0778409,41 8.78665909,33.3359286 8.78665909,20.5 C8.78665909,10.127 10.5985227,0 32.25,0 L35.1818182,0 C56.8332955,0 58.6451591,10.127 58.6451591,20.5 C58.6451591,32.5686429 48.3955227,41 33.7159091,41 Z M32.25,5.85421429 C14.6502955,5.85421429 14.6502955,12.3175714 14.6502955,20.5 C14.6502955,27.1800714 17.4795,35.1428571 30.9658636,35.1428571 L33.7159091,35.1428571 C44.9418409,35.1428571 52.7815227,29.1217143 52.7815227,20.5 C52.7815227,12.3175714 52.7815227,5.85421429 35.1818182,5.85421429 L32.25,5.85421429 Z'
            id='Left'
            fill='#252C2F'
            fillRule='nonzero'
          />
          <path
            d='M95.2840909,41 L92.5340455,41 C78.6460227,41 70.3548409,33.3359286 70.3548409,20.5 C70.3548409,10.127 72.1667045,0 93.8181818,0 L96.75,0 C118.401477,0 120.213341,10.127 120.213341,20.5 C120.213341,32.5686429 109.963705,41 95.2840909,41 Z M93.8181818,5.85421429 C76.2184773,5.85421429 76.2184773,12.3175714 76.2184773,20.5 C76.2184773,27.1800714 79.0506136,35.1428571 92.5340455,35.1428571 L95.2840909,35.1428571 C106.510023,35.1428571 114.349705,29.1217143 114.349705,20.5 C114.349705,12.3175714 114.349705,5.85421429 96.75,5.85421429 L93.8181818,5.85421429 Z'
            id='Right'
            fill='#252C2F'
            fillRule='nonzero'
          />
          <path
            d='M2.93181818,5.85714286 C3.61786364,5.17185714 11.1233182,0 32.25,0 C49.9640455,0 53.7138409,1.88014286 59.3898409,4.72085714 L59.8053162,4.93054903 C60.1999353,5.07314243 62.2179351,5.77419634 64.5784525,5.85128811 C66.7290156,5.75689949 68.5684809,5.16080623 69.1059926,4.96981137 C75.5844654,1.74762081 81.9260118,0 96.75,0 C117.876682,0 125.382136,5.17185714 126.068182,5.85714286 C127.689477,5.85714286 129,7.16621429 129,8.78571429 L129,11.7142857 C129,13.3337857 127.689477,14.6428571 126.068182,14.6428571 C126.068182,14.6428571 120.204545,14.6428571 120.204545,17.5714286 C120.204545,20.5 117.272727,13.3337857 117.272727,11.7142857 L117.272727,8.8618831 C113.697201,7.46243482 107.296654,5.85714286 96.75,5.85714286 C84.9995538,5.85714286 79.1475515,6.98813142 74.1276604,9.10414393 L74.1837955,9.24257143 L71.6878772,10.2500422 L74.1813177,11.2582547 L71.981173,16.6874536 L69.263564,15.5885995 C69.0208516,15.4904597 68.4971539,15.3141463 67.770994,15.1309826 C65.7466083,14.6203594 63.6653786,14.4649153 61.8248214,14.8513001 C61.1495627,14.993056 60.5230576,15.2057795 59.9480988,15.4931011 L57.3260941,16.8033836 L54.7026238,11.5651815 L57.3246285,10.2548989 L57.3310023,10.251716 L54.8191364,9.23671429 L54.8992448,9.03890561 C50.5700368,6.97578666 46.5781927,5.85714286 32.25,5.85714286 C21.7038986,5.85714286 15.3034993,7.46145875 11.7272727,8.86093383 L11.7272727,11.7142857 C11.7272727,13.3337857 8.79545455,20.5 8.79545455,17.5714286 C8.79545455,14.6428571 2.93181818,14.6428571 2.93181818,14.6428571 C1.31345455,14.6428571 0,13.3337857 0,11.7142857 L0,8.78571429 C0,7.16621429 1.31345455,5.85714286 2.93181818,5.85714286 Z'
            id='Stuff'
            fill='#252C2F'
            fillRule='nonzero'
          />
        </g>
      </g>
`},Bt=zt`
      <g
        id='Facial-Hair/Beard-Light'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'
            id='BeardLight-path1'
          />
        </defs>
        <mask id='BeardLight-mask1' fill='white'>
          <use href='#BeardLight-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#BeardLight-path1'
        />
      </g>
`,Dt=zt`
      <g
        id='Facial-Hair/Beard-Majestic'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='BeardMajestic-path1'
          />
        </defs>
        <mask id='BeardMajestic-mask1' fill='white'>
          <use href='#BeardMajestic-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#BeardMajestic-path1'
        />
      </g>
`,Zt=zt`
      <g
        id='Facial-Hair/Beard-Medium'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M105.017591,94.1296214 C101.150441,99.7213834 98.257542,95.9467308 94.1374777,92.8762163 C91.6567227,91.0272796 87.9608129,88.7275108 84.5044337,88.8410391 C81.0477114,88.7275108 77.3518016,91.0272796 74.8710466,92.8762163 C70.7509822,95.9467308 67.8580835,99.7213834 63.9909333,94.1296214 C61.0884259,89.9323547 62.3028943,82.8739117 65.014944,78.9027173 C68.8738581,73.2512381 74.1088724,75.9847769 79.9622738,75.3400279 C81.5538829,75.1648137 83.1526985,74.7228407 84.5044337,74 C85.856169,74.7228407 87.4546414,75.1648137 89.0462504,75.3400279 C94.899995,75.9847769 100.134666,73.2512381 103.993923,78.9027173 C106.70563,82.8739117 107.920098,89.9323547 105.017591,94.1296214 M140.39109,26 C136.966521,40.0748212 135.393023,54.4337754 132.909944,68.6711471 C132.392536,71.6390145 131.826063,74.5963095 131.224594,77.5496398 C131.098329,78.1697764 130.973781,80.4725746 130.362704,80.7643064 C128.511632,81.6484223 124.739149,76.9466834 123.730409,75.8851496 C121.196893,73.219256 118.684993,70.5292442 115.599415,68.437233 C109.364783,64.2102603 102.065485,61.7108818 94.4700836,61.117837 C91.2922091,60.8693859 86.9951134,61.3025234 84.000116,63.1104016 C81.0051185,61.3025234 76.7080229,60.8693859 73.5298053,61.117837 C65.9344039,61.7108818 58.6351055,64.2102603 52.4004739,68.437233 C49.3148957,70.5292442 46.8033387,73.219256 44.2694796,75.8851496 C43.2607395,76.9466834 39.4882573,81.6484223 37.6371849,80.7643064 C37.0261079,80.4725746 36.9015594,78.1697764 36.7752954,77.5496398 C36.1738255,74.5963095 35.6073527,71.6390145 35.0899445,68.6711471 C32.6072086,54.4337754 31.0337113,40.0748212 27.6091415,26 C26.6127533,26 25.7385119,44.7478165 25.6273446,46.4945731 C25.174784,53.5889755 24.6463963,60.5254529 25.3216346,67.6261326 C26.485803,79.8749043 27.6993791,95.2339402 37.032627,104.58753 C45.4659003,113.039493 57.7103052,114.806417 68.2713185,120.141327 C69.631059,120.828202 71.4347824,121.676306 73.3798667,122.37111 C75.4289129,123.934171 79.4926946,125 84.1740722,125 C89.0846465,125 93.3155222,123.827456 95.2540874,122.137856 C96.9548781,121.49261 98.5180822,120.752874 99.7285704,120.141327 C110.288776,114.805245 122.533989,113.039493 130.967262,104.58753 C140.30051,95.2339402 141.514086,79.8749043 142.678597,67.6261326 C143.353493,60.5254529 142.825105,53.5889755 142.372887,46.4945731 C142.261377,44.7478165 141.387136,26 140.39109,26 Z'
            id='BeardMedium-path1'
          />
        </defs>
        <mask id='BeardMedium-mask1' fill='white'>
          <use href='#BeardMedium-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#BeardMedium-path1'
        />
      </g>
`,Wt={Blank:zt`
`,BeardMedium:Zt,BeardLight:Bt,BeardMajestic:Dt,MoustacheFancy:zt`
      <g
        id='Facial-Hair/Moustache-Fancy'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z'
            id='MoustacheFancy-path1'
          />
        </defs>
        <mask id='MoustacheFancy-mask1' fill='white'>
          <use href='#MoustacheFancy-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#MoustacheFancy-path1'
        />
      </g>
`,MoustacheMagnum:zt`
      <g
        id='Facial-Hair/Moustache-Magnum'
        transform='translate(49.000000, 72.000000)'>
        <defs>
          <path
            d='M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z'
            id='MoustacheMagnum-path1'
          />
        </defs>
        <mask id='MoustacheMagnum-mask1' fill='white'>
          <use href='#MoustacheMagnum-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='var(--avataaar-facial-hair-color)'
          fillRule='evenodd'
          href='#MoustacheMagnum-path1'
        />
      </g>
`},Vt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Eyepatch-path1' x='0' y='0' width='264' height='280' />
        </defs>
        <mask id='Eyepatch-mask1' fill='white'>
          <use href='#Eyepatch-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Eyepatch' mask='url("#Eyepatch-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M160.395307,39.7810237 C157.318088,36.6927979 154.11865,43.6386608 152.623361,45.4281124 C149.013122,49.7486528 145.540256,54.182935 141.868413,58.4518947 C134.616309,66.8823544 127.439316,75.3743141 120.233991,83.8401528 C119.140279,85.1257012 119.27271,85.2649028 117.837048,85.3885641 C116.88598,85.4708947 115.563312,84.9802173 114.5737,84.9256608 C111.823607,84.774556 109.112057,85.2348141 106.435756,85.8227012 C101.091389,86.9961608 95.4264863,88.9291124 90.7890799,91.898306 C89.5718308,92.677306 88.7874545,93.5971608 87.4670933,93.841177 C86.3183659,94.0534512 84.794416,93.6295641 83.622299,93.5194592 C81.5412806,93.3237173 78.5378542,92.4726366 76.4953793,92.9137173 C73.9027538,93.4738302 72.9174244,96.6109915 75.5604528,98.0003624 C77.570314,99.0564431 81.5706,98.4761608 83.8235816,98.6447899 C86.3971,98.8372253 85.6120649,98.704306 85.2473843,101.164306 C84.7239177,104.69758 85.5985582,108.646475 87.0885766,111.878201 C90.5482655,119.383185 100.122861,127.335201 108.8551,126.603153 C116.142123,125.992451 122.526834,119.413274 125.519389,113.099935 C127.050916,109.868871 127.954546,106.192096 128.250376,102.628403 C128.438811,100.36183 128.333722,97.9580399 127.684083,95.7632173 C127.362888,94.6783705 126.853916,93.5554995 126.308378,92.5695157 C125.866281,91.7710076 123.908799,89.9203866 123.788886,89.1165882 C123.556307,87.5602415 127.973324,83.3874995 128.816339,82.3443141 C132.788953,77.4276205 136.780344,72.5320882 140.721662,67.5889431 C144.603353,62.7201931 148.506456,57.8640076 152.489612,53.0785802 C154.294237,50.9098786 163.318023,42.7148382 160.395307,39.7810237'
              class='CustomColor'
              fill='#28354B'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,qt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Hat-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id='Hat-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='Hat-mask1' fill='white'>
          <use href='#Hat-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hat' mask='url("#Hat-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hat'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='Hat-mask2' fill='white'>
                <use href='#Hat-path1' />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M123.182388,2 L141.817612,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L75,75 L84.1098821,33.4361631 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z'
                fill='#1F333C'
                mask='url("#Hat-mask2")'
              />
              <ellipse
                id='Hipster'
                fill='#1F333C'
                mask='url("#Hat-mask2")'
                cx='132'
                cy='87.5'
                rx='122'
                ry='57.5'
              />
              <ellipse
                id='Very'
                fill='#15232A'
                mask='url("#Hat-mask2")'
                cx='132'
                cy='82'
                rx='62'
                ry='25'
              />
            </g>
          </g>
        </g>
      </g>
`,Gt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Hijab-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M66.0421575,77.0749852 C71.6795257,45.2058307 99.5129755,21 133,21 L133,21 L133,21 C170.555363,21 201,51.444637 201,89 L201,119.751022 C201.875211,129.554379 202.693946,136.422143 203.456205,140.354314 C204.833317,147.458254 209.150269,145.115419 209.150269,155.220201 C209.150269,165.324983 204.822005,168.720206 204.803237,177.705482 C204.784469,186.690758 220.200444,193.836185 220.200444,205.242606 C220.200444,216.649027 213.126079,270.475928 142.577598,270.475928 C127.507235,270.475928 114.670509,266.188589 104.06742,257.613911 C104.750275,264.103957 105.394468,271.565987 106,280 L59,280 C59.9324304,256.228591 51.7156549,242.936205 51.7156549,216.44564 C51.7156549,189.955074 65.3525844,151.427541 65,142 C65.019981,141.417741 65.0406721,140.728417 65.0620734,139.932027 C65.0208303,138.959828 65,137.982347 65,137 L65,89 L65,89 C65,85.0240875 65.3412247,81.1278723 65.9959868,77.3390417 C65.9973236,77.2261704 65.9986613,77.1131564 66,77 C66.0140661,77.0249783 66.0281186,77.0499734 66.0421575,77.0749852 Z M132.5,53 L132.5,53 C102.400481,53 78,77.4004811 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,107.5 C188,77.4004811 163.599519,53 133.5,53 L133.5,53 L132.5,53 Z'
            id='Hijab-path2'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='Hijab-mask1' fill='white'>
          <use href='#Hijab-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hijab' mask='url("#Hijab-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='Hijab-mask2' fill='white'>
              <use href='#Hijab-path2' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hat-color)'
              fillRule='evenodd'
              href='#Hijab-path2'
            />
            <path
              d='M72.0744416,104.959767 C71.3690172,101.246903 71,97.4161983 71,93.5 C71,59.5344879 98.7583455,32 133,32 C167.241654,32 195,59.5344879 195,93.5 C195,97.4161983 194.630983,101.246903 193.925558,104.959767 C192.341315,72.6827942 165.669927,47 133,47 C100.330073,47 73.6586845,72.6827942 72.0744428,104.959774 Z'
              id='Band'
              stroke='none'
              opacity='0.5'
              fill='#FFFFFF'
              fillRule='evenodd'
              mask='url("#Hijab-mask2")'
            />
            <path
              d='M187.929085,104.69543 C188.631457,108.187732 189,111.800827 189,115.5 L189,138.5 C189,168.599519 164.599519,193 134.5,193 L131.5,193 C101.400481,193 77,168.599519 77,138.5 L77,115.5 L77,115.5 C77,111.800827 77.3685433,108.187732 78.0709154,104.69543 C78.0238287,105.624341 78,106.559388 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,130.5 L188,107.5 C188,106.559388 187.976171,105.624341 187.929085,104.69543 Z M114.16682,206.995462 C120.651206,211.981028 135.663493,213.708321 152.404574,210.756416 C169.145655,207.804512 182.661822,201.046883 187.049987,194.144193 C187.118291,194.396526 187.175421,194.652296 187.221114,194.911435 C188.930607,204.606451 173.985409,215.345413 153.84008,218.897578 C133.694752,222.449742 115.977919,217.469978 114.268426,207.774963 C114.222732,207.515823 114.188938,207.255938 114.166824,206.995464 Z M126.034638,235.921439 C134.227056,241.574977 150.421729,241.843835 167.103682,235.772101 C183.785635,229.700366 196.018656,219.084674 198.660388,209.487828 C198.803116,209.80837 198.935124,210.134883 199.056117,210.46731 C203.582768,222.904181 190.979008,238.909268 170.904831,246.215671 C150.830654,253.522074 130.887742,249.363007 126.361091,236.926135 C126.240098,236.593709 126.131343,236.258733 126.034643,235.921442 Z'
              id='Shadows'
              stroke='none'
              fill='#000000'
              fillRule='evenodd'
              opacity='0.16'
              mask='url("#Hijab-mask2")'
            />
          </g>
        </g>
      </g>
`,Ut=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairBigHair-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M182.884023,95.3249541 C161.364085,83.7373848 142.890027,67.1442914 130.845581,48.302359 C112.763849,73.9237118 76.5299076,78.5347548 51.2240944,94.679971 C51.0770557,95.4306015 51,96.2063021 51,97 L51,110 C51,116.018625 55.4308707,121.002364 61.2085808,121.867187 C62.9518066,142.114792 75.4692178,159.282984 93,167.610951 L93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,167.610951 C158.530782,159.282984 171.048193,142.114792 172.791419,121.867187 C178.569129,121.002364 183,116.018625 183,110 L183,97 C183,96.4315537 182.960475,95.8723389 182.884023,95.3249541 Z'
            id='LongHairBigHair-path2'
          />
          <path
            d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,140 L93,140 L93,186 Z'
            id='LongHairBigHair-path3'
          />
        </defs>
        <mask id='LongHairBigHair-mask2' fill='white'>
          <use href='#LongHairBigHair-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Big-Hair' mask='url("#LongHairBigHair-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(16.000000, 13.000000)'>
              <mask id='LongHairBigHair-mask3' fill='white'>
                <use href='#LongHairBigHair-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairBigHair-path2' />
            </g>
            <g
              id='Shadow'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(16.000000, 13.000000)'>
              <mask id='LongHairBigHair-mask1' fill='white'>
                <use href='#LongHairBigHair-path3' />
              </mask>
              <g id='Shape' />
              <path
                d='M30.0988695,115.056827 C27.7250732,118.08281 24.5296181,122.528485 24.3618393,122.19381 C26.2345006,119.810609 27.3747977,117.011661 27.3409475,113.436088 C27.517612,95.334874 15.4366324,87.8674306 27.3409475,53.4185647 C28.0096512,51.5090274 29.1070085,49.7044671 30.585889,48.0048838 C20.2433352,82.4586863 31.3685109,90.3556196 31.2026676,109 C31.2224682,111.294844 30.8223327,113.284923 30.0988695,115.056827 Z M202.419413,48.0048838 C203.898293,49.7044671 204.995651,51.5090274 205.664354,53.4185647 C215.822041,82.8130155 208.516445,92.5627534 206.263744,106.036479 C205.964379,106.841192 206.195125,107.789747 205.880216,108.603009 C175.207016,98.1454461 147.589972,78.5596292 131.494917,55.6119279 C108.710969,85.0357527 58.3544031,85.3732378 33.6737341,110.936101 C34.0607045,110.391798 34.4280855,109.884956 34.7584999,109.446288 C57.2940449,79.527377 108.24688,80.3241416 130.845581,48.302359 C146.243536,72.3904102 172.664446,92.9495135 202.009146,103.926748 C202.310417,103.073073 202.089664,102.077381 202.376063,101.232679 C204.483829,87.4002546 211.215481,77.3069293 202.419413,48.0048838 Z'
                id='Shadow-Mask'
                opacity='0.16'
                fill='#000000'
                mask='url("#LongHairBigHair-mask1")'
              />
            </g>
            <path
              d='M50.7584999,122.446288 C73.2940449,92.527377 124.24688,93.3241416 146.845581,61.302359 C162.243536,85.3904102 188.664446,105.949514 218.009146,116.926748 C218.310417,116.073073 218.089664,115.077381 218.376063,114.232679 C220.531197,100.089398 227.520377,89.8551619 217.802634,59 C206.165705,22.5393276 176.088708,13.7681718 133.002651,13.0159929 C132.336177,13.0049705 132.16951,13.0024268 132.002651,13 C88.9165934,13.7681718 58.8395963,22.5393276 47.2026676,59 C35.8139454,95.1607482 47.3716806,102.999274 47.2026676,122 C47.2350518,125.753256 46.1441426,128.691293 44.3525888,131.192923 C44.5361111,131.59459 48.5061717,125.436551 50.7584999,122.446288 Z'
              id='Light'
              opacity='0.1'
              fill='#FFFFFF'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Yt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairBob-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M38,79.3595521 L38,111 C38,133.339168 51.0804213,152.623239 70,161.610951 L70,174.74565 C50.3625813,177.434228 34.6409914,182.163507 23.3845374,181.000327 C9.16164761,179.530612 1.49623627,150.795665 1,126 C0.382878875,95.1640258 29.3189583,30.7950013 40,18 C47.9231015,8.50878211 69.6952966,0.550643437 94.0001685,1 C118.30504,1.44935656 140.861928,6.81215989 149.000169,17 C161.324059,32.4276364 186.868727,91.0786423 187.000169,126 C187.093514,150.800049 177.46255,175.65995 164.000169,177 C152.920532,178.102871 137.475571,175.511343 118,173.997342 L118,161.610951 C136.919579,152.623239 150,133.339168 150,111 L150,82.9882378 C140.478735,78.1305678 131.863294,72.248172 124.153679,65.3410505 C127.362309,70.6368571 130.848786,75.1475352 134.61311,78.8730846 C107.596314,71.2928169 86.1055278,58.4501118 70.1407506,40.3449693 C62.1597317,56.8095313 51.4461487,69.8143919 38.0000014,79.3595511 Z'
            id='LongHairBob-path2'
          />
        </defs>
        <mask id='LongHairBob-mask1' fill='white'>
          <use href='#LongHairBob-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Bob' mask='url("#LongHairBob-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(39.000000, 19.000000)'>
              <mask id='LongHairBob-mask2' fill='white'>
                <use href='#LongHairBob-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairBob-path2' />
            </g>
          </g>
        </g>
      </g>
`,Jt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairBun-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M114.939716,28.3372418 C113.953527,28.5587334 112.985531,28.7906134 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 95.7648164,43.2055199 133,41.6707324 C170.235184,40.1359449 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 C161.866498,31.8520537 156.438352,29.6874962 151.116597,28.2827668 C154.176091,25.3110645 156,21.5675963 156,17.5 C156,7.83501688 145.702549,0 133,0 C120.297451,0 110,7.83501688 110,17.5 C110,21.5924906 111.846303,25.3568736 114.939716,28.3372418 Z'
            id='LongHairBun-path1'
          />
        </defs>
        <mask id='LongHairBun-mask2' fill='white'>
          <use href='#LongHairBun-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Bun' mask='url("#LongHairBun-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='LongHairBun-mask1' fill='white'>
              <use href='#LongHairBun-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#LongHairBun-path1'
            />
          </g>
        </g>
      </g>
`,$t=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairCurly-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M48.7246602,89.2187346 C44.7420117,91.1711421 42,95.2653555 42,100 L42,113 C42,119.018625 46.4308707,124.002364 52.2085808,124.867187 C53.9518066,145.114792 66.4692178,162.282984 84,170.610951 L84,189 L80,189 L80,189 C78.4137385,189 76.8394581,189.051297 75.2787271,189.152323 C70.3620966,186.639548 65.7724391,183.578174 61.590479,180.048925 C57.2814481,181.318646 52.7202934,182 48,182 C21.490332,182 0,160.509668 0,134 C0,119.590902 6.34904132,106.664702 16.4021743,97.866349 C11.1175746,90.6060809 8,81.6671147 8,72 C8,50.160623 23.9112243,32.0375116 44.7738169,28.5905219 C51.0188047,11.8901624 67.1208542,0 86,0 C94.0143172,0 101.528186,2.14267429 108,5.88641659 C114.471814,2.14267429 121.985683,0 130,0 C148.879146,0 164.981195,11.8901624 171.226183,28.5905219 C192.088776,32.0375116 208,50.160623 208,72 C208,81.6671147 204.882425,90.6060809 199.597826,97.866349 C209.650959,106.664702 216,119.590902 216,134 C216,160.509668 194.509668,182 168,182 C163.279707,182 158.718552,181.318646 154.409521,180.048925 C150.227561,183.578174 145.637903,186.639548 140.721273,189.152323 C139.160542,189.051297 137.586262,189 136,189 L136,189 L132,189 L132,170.610951 C149.530782,162.282984 162.048193,145.114792 163.791419,124.867187 C169.569129,124.002364 174,119.018625 174,113 L174,100 C174,95.778427 171.820067,92.0660046 168.524466,89.9269981 C167.450514,89.5343912 166.370126,89.0424011 165.289302,88.4564081 C164.868503,88.3367332 164.43828,88.2394463 164,88.1659169 L164,87.7130302 C155.319369,82.4100235 146.764694,71.1747746 141.449951,56.7992877 C131.312295,58.8351061 119.547256,60 107,60 C95.038684,60 83.7882341,58.9413637 73.9808476,57.0787685 C68.7546917,71.0641476 60.4637821,82.0431875 52,87.4230168 L52,88.1659169 C50.9777341,88.3374206 49.9992949,88.6381729 49.0820602,89.050796 C48.9628927,89.1079465 48.8437566,89.1639284 48.7246602,89.2187346 Z'
            id='LongHairCurly-path2'
          />
        </defs>
        <mask id='LongHairCurly-mask1' fill='white'>
          <use href='#LongHairCurly-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Curly' mask='url("#LongHairCurly-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M105.984735,27.7643628 C114.013215,26.6267967 122.796163,26 132,26 C142.358003,26 152.182939,26.7938545 160.999342,28.2161842 C183.451688,38.7497687 199,61.559133 199,88 L199,105.044138 C187.461887,104.672508 173.831239,90.7644306 166.449951,70.7992877 C156.312295,72.8351061 144.547256,74 132,74 C120.038684,74 108.788234,72.9413637 98.9808476,71.0787685 C91.6758772,90.6271291 78.3831001,104.301811 67,105.021902 L67,88 L67,88 C67,61.1745453 83.0039076,38.0870034 105.984735,27.7643628 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(25.000000, 10.000000)'>
              <mask id='LongHairCurly-mask2' fill='white'>
                <use href='#LongHairCurly-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairCurly-path2' />
            </g>
          </g>
        </g>
      </g>
`,Xt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairCurvy-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M162.831093,71.6181521 C162.943003,73.0640672 163,74.5253775 163,76 L163,114 C163,136.339168 149.919579,155.623239 131,164.610951 L131,183 L135,183 C136.524404,183 137.037743,183.047374 138.538625,183.140731 C123.625568,210.496321 119.823733,233.574048 137.47212,247.543277 C139.169858,248.745686 140.396085,249.328761 140.607243,249.428275 C142.980035,250.546232 145.444343,251.76781 148.074296,252.382591 C152.696796,253.463231 158.007057,252.010459 162.630756,251.429524 C164.742591,251.164137 166.847633,251.000636 168.977452,250.993519 C171.542066,250.985014 174.188404,251.078221 176.119408,252.691023 C178.003455,254.264772 177.763079,259.889444 172.244213,262.523872 C176.3432,264.37915 181.25603,260.071171 182.931671,257.34666 C184.398107,254.962171 185.526058,252.378599 186.146081,249.741914 C186.917963,246.458686 186.967717,243.016815 186.363678,239.728032 C185.106048,232.88022 182.187563,226.295538 180.201011,219.605673 C179.468692,217.139607 178.51478,214.440611 178.099366,211.916746 C177.986471,211.23167 177.851996,208.701383 177.957698,208.171998 C178.036425,207.778517 178.016643,207.37549 179.372782,206.996069 C183.288539,205.899634 187.379733,204.063449 190.225486,201.476579 C193.590156,198.418295 195.343925,194.445304 196.758409,190.497133 C198.998525,184.244662 200.281132,177.550111 200.870584,171.057073 C200.99307,169.708269 201.062205,168.361722 201.086383,167.009968 C201.10077,166.193153 201.000862,165.263344 201.094375,164.445141 C201.247433,163.105189 201.039826,163.457881 202.341615,162.571291 C206.599454,159.671476 209.921164,155.448546 212.051783,151.200622 C215.39827,144.528634 215.834064,137.49302 213.117591,130.733555 C210.864687,125.12728 207.291411,119.498616 201.725588,115.887863 C199.588776,114.501568 197.334273,113.244582 195.115337,111.95809 C193.906862,111.257566 191.067703,110.342511 190.209501,109.441341 C189.609259,108.810939 190.56477,105.649382 190.685858,104.583322 C191.213967,99.9353218 190.606132,95.4261763 189.520542,90.8868298 C187.127368,80.8793698 177.487944,64.7382958 173.617944,55.2249863 C170.293437,47.0528435 165.481911,-0.0750473139 108.58669,0.198941193 C51.691468,0.4729297 41.4185991,50.4377258 33.7159879,59.7736698 C25.3512665,69.9121239 16.9074766,89.1763214 22.602684,107.035643 C17.099033,113.95809 4.54481227,124.04369 1.3853513,134.125611 C-0.596804833,140.450807 -0.511883829,147.495621 2.0289526,153.633016 C3.46621561,157.104393 5.52490056,160.250502 7.94045353,163.272162 C10.0566849,165.919435 12.4084972,168.423513 14.4577909,171.110359 C15.6946403,172.732013 16.0263318,173.129312 15.5599656,175.128304 C14.6406208,179.068318 12.7411877,182.853334 11.0939201,186.603116 C8.54189405,192.412639 6.39748885,197.82226 6.0799842,204.016065 C5.77766543,209.912373 7.40435223,226.688671 24.3409972,236.576369 C26.3249517,237.73442 28.2831301,238.743202 30.3833764,239.685161 C29.2931905,236.290327 30.5294405,224.161856 32.7263968,219.653578 C33.2860762,221.204589 34.2369916,222.697108 35.2618383,224.05216 C36.8611506,226.167444 40.636039,231.460774 45.4085994,231.706547 C43.4722007,228.722725 41.3891385,226.708805 40.7853002,223.10864 C44.7616013,225.068753 50.4191385,226.855644 55.0466338,226.691448 C58.4512667,226.570818 63.4709972,224.871405 66.0000446,222.74779 C57.6284322,224.074724 49.679027,221.3155 46.4820009,215.419366 C45.8146217,214.188415 45.3084926,212.898625 45.0141664,211.558847 C44.5967546,209.659309 43.9381673,206.615432 44.8227444,204.862039 C45.0375932,204.436124 45.3893685,204.001198 45.806628,203.572743 C45.7407358,203.49425 45.6753213,203.415537 45.6103845,203.336606 C51.303506,198.550494 58.4494475,190.932516 62.2752482,185.367908 C62.3459243,185.245492 62.416066,185.122857 62.4856702,185 L62.5253504,185 C62.5536953,184.957813 62.5818364,184.915755 62.6097716,184.873828 C67.874859,183.648086 73.3617452,183 79,183 L83,183 L83,164.610951 C64.0804213,155.623239 51,136.339168 51,114 L51,76 L51,76 C51,73.537425 51.1589523,71.1119753 51.4671565,68.733351 C55.4088487,67.4702772 59.365485,66.2776957 63.3986046,65.2045441 C67.8552588,64.0189378 77.7980098,62.0907786 81.6887904,61.1941723 L84.4252449,58.215348 L85.4876566,60.1702128 C87.6456492,60.0042337 99.5663601,58.212708 99.5663601,58.212708 L100.896323,54.9898699 C102.612526,56.7530625 103.834989,57.668872 103.834989,57.668872 C106.391211,57.460454 117.488488,57.2113208 120.119841,57.2427023 C120.119841,57.2427023 127.460212,57.5012269 129.240756,57.5714137 L130.907605,56.9328981 L131.456495,58.0098503 C132.910143,58.601117 141.699367,61.6008734 143.434153,62.138079 L145.980784,61.2323702 C147.100342,63.9256202 149.920119,63.586016 152.257345,65.7132858 C154.760315,67.9915694 159.482831,69.7372554 162.831093,71.6181521 Z'
            id='LongHairCurvy-path2'
          />
        </defs>
        <mask id='LongHairCurvy-mask1' fill='white'>
          <use href='#LongHairCurvy-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Curvy' mask='url("#LongHairCurvy-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M100.899906,42.4648024 C91.1016204,48.4721303 82.3855283,56.3273858 76.5871222,65.36024 C73.8252914,69.662826 71.5532049,74.1995784 69.4361743,78.7575668 C68.3739624,81.0447336 67.4048638,83.3600237 66.475928,85.6893613 C65.8894735,87.1594817 64.9889112,88.7449062 65.8359233,90.2878445 C66.3526427,89.9857996 66.5492598,90.0943892 66.224362,90.6353417 C68.9162579,91.3693254 72.6583769,89.3003017 74.9906073,88.5362205 C79.7539763,86.9753339 84.5203425,85.5025753 89.3986046,84.2045441 C93.8552588,83.0189378 103.79801,81.0907786 107.68879,80.1941723 L110.425245,77.215348 L111.487657,79.1702128 C113.645649,79.0042337 125.56636,77.212708 125.56636,77.212708 L126.896323,73.9898699 C128.612526,75.7530625 129.834989,76.668872 129.834989,76.668872 C132.391211,76.460454 143.488488,76.2113208 146.119841,76.2427023 C146.119841,76.2427023 153.460212,76.5012269 155.240756,76.5714137 L156.907605,75.9328981 L157.456495,77.0098503 C158.910143,77.601117 167.699367,80.6008734 169.434153,81.138079 L171.980784,80.2323702 C173.100342,82.9256202 175.920119,82.586016 178.257345,84.7132858 C181.34867,87.5271086 187.825645,89.5285179 190.917768,91.9756241 C192.024938,92.8519441 193.059576,93.7675012 194.100208,94.7015404 C195.255933,95.7385867 195.085291,95.890424 195.460742,97.0802141 C195.573237,97.4361731 196.715775,99.2788807 197.202722,99.4296139 C198.935909,99.9660566 187.048767,68.9435732 183.785603,64.9771662 C180.417736,60.8830307 158.574915,33.3231248 129.612057,34.2254634'
              id='Top-Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(26.000000, 16.000000)'>
              <mask id='LongHairCurvy-mask2' fill='white'>
                <use href='#LongHairCurvy-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairCurvy-path2' />
              <path
                d='M62.6794556,184.462132 C69.755442,174.755405 62.148959,147.786913 56.1278159,137.800593 C72.9649824,130.137708 106.213574,131.553467 155.87359,142.047871 C151.079203,150.900348 149.123448,158.803527 150.006324,165.757409 C145.469118,171.332534 141.720304,177.127222 138.759883,183.141474 L103.888915,191.746789 C81.8528509,194.400378 68.1163643,191.97216 62.6794556,184.462132 Z'
                id='Shadow'
                opacity='0.24'
                fill='#000000'
                mask='url("#LongHairCurvy-mask2")'
              />
            </g>
            <path
              d='M79.0404573,170.094305 C78.9812573,169.892618 78.8354573,169.667152 78.6348573,169.428842 C78.7708573,169.650142 78.9074573,169.871269 79.0404573,170.094305 Z M56.409572,120.375261 C57.2661752,126.5406 58.7356083,132.465374 60.8662263,138.377476 C62.9277086,144.09848 65.285915,149.836145 68.678559,155.067858 C71.8402179,159.943234 75.6031176,164.4923 78.6348973,169.428772 C77.8378388,168.48126 76.1633964,167.329804 75.5207941,166.65115 C74.4643769,165.535276 73.4750971,164.385382 72.5369698,163.193485 C70.6143583,160.749982 68.9003527,158.193833 67.243494,155.609567 C63.9913192,150.536843 61.5529875,145.034363 59.4397533,139.530668 C55.2902133,128.722708 51.1268862,115.61687 54.7738936,104.200899 C54.4921557,104.935095 55.2326668,106.688314 55.3491585,107.497319 C55.5525692,108.91069 55.7349995,110.333608 55.8267142,111.757219 C56.0123415,114.639678 56.0109428,117.505994 56.409572,120.375261 Z M68.8553146,165.041212 C67.4967783,163.309515 64.9739252,161.944396 63.4129772,160.279177 C61.9976938,158.769648 60.9019131,157.07822 59.9070386,155.339754 C57.6517365,151.39922 56.1697151,147.374505 55.6897616,142.969154 C55.7992598,143.49177 56.6083072,144.395543 56.8630702,144.824778 C57.4766993,145.858902 58.0839345,146.89424 58.6508072,147.948671 C59.7481863,149.989667 60.6639345,152.099744 61.7731027,154.135533 C63.8106073,157.875421 66.402796,161.495374 68.8553146,165.041212 Z M73.5320242,183.498629 C74.6465874,185.460651 75.5723262,187.464851 76.1569823,189.60079 C76.4654954,190.727599 76.7138643,191.869508 76.9272658,193.013501 C76.9962017,193.382508 77.0093894,194.709963 77.1846264,195.283955 C74.9700864,190.992812 73.2798587,186.448779 70.6421125,182.34214 C68.0381348,178.288092 64.6948448,174.560527 61.1958996,171.061031 C57.5013364,167.36575 53.7855929,163.879099 51.8038364,159.214262 C50.0788411,155.153619 49.4126608,150.996124 49.8138875,146.658464 C49.8160855,148.56911 51.5706533,151.280256 52.1766896,153.126681 C53.0063178,155.654018 53.6655046,158.231689 54.9143429,160.634229 C57.039566,164.722991 60.873,167.876911 64.0792175,171.321558 C67.631513,175.137643 71.0245567,179.084252 73.5320242,183.498629 Z M59.2286696,174.179456 C60.2874847,175.196917 61.2164205,176.28259 62.0352588,177.454354 C62.9328239,178.738937 63.5914112,180.09017 64.1800637,181.504062 C64.6869921,182.721301 64.9105841,184.986375 65.7074428,186.0021 C63.1288415,182.856337 60.4739112,179.884838 58.6955655,176.312444 C58.0893295,175.089825 57.1480051,173.289222 56.4530516,171.817184 C56.6844363,172.409922 58.7059559,173.677148 59.2286696,174.179456 Z M48.9033745,180.528033 C51.7405353,184.777866 55.450684,188.609052 57.877027,193.056233 C60.7067946,198.242644 61.9518364,203.862978 62.202803,209.595957 C62.3216924,212.307277 62.3152983,215.0606 61.9498383,217.764455 C61.7540204,219.211673 61.4399126,220.650211 61.0810465,222.075732 C60.944973,222.616747 60.2406283,224.002173 60.1037556,224.846586 C59.8140251,214.305575 61.5584024,203.763696 56.0767017,193.942823 C53.4811162,189.292219 49.4912277,185.327212 46.398105,180.924811 C43.6164926,176.966226 40.8998197,173.083838 38.6846803,168.851361 C40.0408188,170.567263 42.485145,171.915893 44.0009349,173.619818 C45.8995688,175.753674 47.3488206,178.199606 48.9033745,180.528033 Z M60.1036574,224.846603 C60.0710574,225.050581 60.0700574,225.224111 60.1172574,225.346603 C60.1116574,225.180112 60.1082574,225.01327 60.1036574,224.846603 Z M50.5604331,202.493815 C50.5610325,202.989874 51.376474,204.011501 51.5992667,204.528562 C52.1207816,205.73799 52.5455864,207.007473 52.7573894,208.289626 C53.1752007,210.818004 52.6269108,213.429521 51.6899823,215.850286 C49.7909489,220.757251 46.8161162,225.102895 43.0767946,229.15 C44.4121524,227.402335 44.9438578,224.56136 45.8833838,222.612182 C46.8478866,220.611106 47.8829238,218.6411 48.7335325,216.600624 C50.652947,211.995842 50.4835046,207.289696 50.5604331,202.493815 Z M41.9174331,221.200893 C42.3180604,220.652936 42.1102537,218.018161 42.3222565,217.328919 C42.714092,216.055618 43.3920613,214.827097 44.170737,213.693866 C43.7551236,214.392828 44.3691524,216.160106 44.1663411,217.067177 C43.8338504,218.55553 42.9962296,219.998582 41.9174331,221.200893 Z M99.6077106,42.748374 C99.5269106,42.804974 99.4471106,42.908174 99.3681106,43.044574 C99.4481106,42.945974 99.5267106,42.846574 99.6077106,42.748374 Z M84.8469387,64.3317143 C86.2672175,63.085837 87.0237138,60.1410677 88.0032026,58.5522183 C89.1283559,56.7269681 90.4213532,54.9730547 91.6476125,53.1960567 C94.0795502,49.6719145 96.3744154,46.2123399 99.3680307,43.0054816 C98.7464089,43.9398028 98.1949219,46.7736616 97.8536394,47.5189663 C96.9620688,49.4667561 95.8988578,51.3334892 94.6328355,53.1235049 C91.7722965,57.1680066 88.7029517,60.9266404 84.8469387,64.3317143 Z M84.3117165,54.1218036 C85.0620186,52.7952168 86.2055548,51.6739619 87.4917584,50.7082248 C86.9188913,51.2107066 86.6607314,53.2831189 86.2670976,53.9831221 C85.472237,55.3952784 84.3143141,56.6130375 83.0714703,57.7545999 C83.7352528,57.1726235 83.842553,54.9516363 84.3117165,54.1218036 Z M203.505599,152.127968 C203.498805,152.179518 203.485417,152.282271 203.464637,152.438483 C203.462638,150.913159 202.784469,149.237352 202.704144,147.668984 C202.592048,145.478545 202.906556,143.353715 203.787137,141.277137 C205.526519,137.175704 208.790083,134.069516 212.950612,131.638511 C211.805877,132.313173 210.683921,134.851617 209.949604,135.906916 C208.84663,137.493162 207.668126,139.094161 206.735993,140.757819 C204.793001,144.225725 204.229725,148.375062 203.505599,152.127968 Z M201.998401,130.481881 C201.761221,131.706583 201.448912,132.921738 201.009121,134.107908 C200.534762,135.386937 199.915938,136.630558 199.22578,137.835993 C198.79578,138.586852 197.246621,140.162684 197.24762,140.993211 C197.165296,136.095098 198.975812,131.657983 202.419809,127.7355 C202.04236,128.392806 202.137271,129.766083 201.998401,130.481881 Z M201.196906,165.719988 C204.852905,165.202752 208.302496,166.981313 210.618342,169.271033 C211.855791,170.494694 212.955568,171.900428 213.683091,173.404055 C214.229783,174.534509 214.228783,176.387356 214.9631,177.323587 C213.165772,174.905078 210.886892,172.951214 208.638584,170.859535 C207.075238,169.404855 203.950944,165.678852 201.196906,165.719988 Z M200.41897,176.096698 C200.227148,176.031957 198.485169,175.539368 198.081944,175.776984 C198.679388,175.510035 199.412106,175.184941 200.068895,175.097983 C204.35311,174.529024 209.561066,178.239232 210.13633,181.81909 C209.657576,180.592826 207.111145,179.578489 205.959616,178.968568 C204.136711,178.002484 202.395531,176.832456 200.41897,176.096698 Z M202.227687,183.908269 C202.969797,184.089822 204.54713,185.083504 205.275252,185.072742 C202.345977,185.143906 199.703236,184.81829 196.883858,184.158729 C197.036117,184.200212 198.643022,183.702937 198.694974,183.695647 C199.910043,183.523987 201.052381,183.620492 202.227687,183.908269 Z M190.882541,197.765243 C195.171151,197.522941 200.218656,198.149351 204.314046,199.181739 C206.346955,199.694288 208.253382,200.468058 210.006351,201.476666 C211.420436,202.290531 213.935896,203.408661 214.881616,204.614097 C211.142494,198.162369 203.032039,194.811448 194.722769,196.473197 C193.615199,196.695886 191.914181,197.749796 190.882541,197.765243 Z M189.923153,210.197773 C192.611453,209.233424 195.584487,208.30431 198.505969,208.169273 C201.277391,208.042395 204.351332,208.458613 206.915546,209.342078 C206.033367,209.102206 203.92333,209.674289 202.995793,209.779298 C201.699199,209.926138 200.399608,210.077837 199.099817,210.196558 C197.506299,210.342009 195.898395,210.422718 194.298883,210.41942 C193.159543,210.41699 190.979371,209.87858 189.923153,210.197773 Z M179.458947,227.410508 C179.711912,231.383499 182.010574,234.84533 185.39043,237.491388 C188.973097,240.296087 193.769036,241.572686 196.369816,245.319691 C197.637437,247.145462 198.312809,249.270812 198.20431,251.417686 C198.148362,252.524014 197.870221,253.636069 197.5695,254.712196 C197.371684,255.420184 196.66734,256.580144 196.667939,257.270775 C196.69911,253.384221 196.751661,248.859281 194.031592,245.598095 C191.300932,242.324066 186.539161,241.170701 183.203065,238.482813 C179.924714,235.841442 177.437828,232.389157 176.877749,228.498264 C176.425569,225.354411 176.648562,219.871892 179.90773,217.738557 C179.246345,218.128392 179.377224,220.111764 179.361438,220.669267 C179.298097,222.900321 179.317079,225.185182 179.458947,227.410508 Z M177.005789,242.672904 C177.402221,243.19257 179.575399,243.82436 180.213805,244.182606 C181.67045,245.000116 183.07914,245.92923 184.234665,247.059684 C186.55111,249.326146 188.044121,252.504886 188.151821,255.553623 C188.151821,254.833139 186.505553,253.096583 186.043183,252.481107 C185.275297,251.458613 184.407904,250.511969 183.524526,249.564283 C181.371329,247.253734 179.135209,244.999942 177.005789,242.672904 Z M229.167807,153.791051 C230.371887,154.841663 231.178936,156.147595 231.842519,157.49987 C233.373295,160.619424 233.65823,164.217333 232.431571,167.500388 C232.634582,166.795698 232.030544,165.31585 231.860502,164.601614 C231.488248,163.038626 230.906389,161.56225 230.298355,160.059664 C229.118053,157.144401 228.163741,154.41208 226.113648,151.858014 C226.644354,152.52556 228.442481,153.157872 229.167807,153.791051 Z M171.509602,41.9832998 C171.510002,42.3148163 172.426549,43.2758671 172.633357,43.6374111 C173.149677,44.5392749 173.557297,45.4857459 173.696967,46.4924453 C173.85542,47.6336606 173.6616,48.7505762 173.315522,49.8605491 C173.109914,50.5202844 172.131624,51.7949741 172.132423,52.3894475 C171.972572,48.891167 171.198691,45.5298324 171.509602,41.9832998 Z M179.146978,48.8048339 C179.312224,50.0477605 178.906202,51.4491555 178.183074,52.546805 C178.314952,52.2364639 177.729296,50.1642252 177.710314,49.7849773 C177.650969,48.6118253 177.77925,47.4056953 177.856378,46.2332376 C177.857178,46.8738803 179.039478,47.9958294 179.146978,48.8048339 Z M118.377388,50.3732542 C117.142336,51.8857333 115.738043,53.3032702 114.227248,54.6164922 C113.2036,55.5060327 111.243024,56.5057893 110.46315,57.5267214 C113.964293,51.8147436 118.00913,46.8878178 122.764906,41.8951095 C122.049172,42.8155452 121.862346,44.8121078 121.337434,45.8885819 C120.563354,47.4758692 119.527518,48.9645693 118.377388,50.3732542 Z M124.275361,52.8515919 C124.845431,52.5155626 125.378934,50.859195 125.81333,50.3013446 C126.54465,49.3623371 127.437619,48.4554398 128.390733,47.6728177 C128.186123,47.8927295 127.788693,49.7158968 127.5657,50.0739694 C126.843372,51.2344508 125.56616,52.1809219 124.275361,52.8515919 Z'
              id='Lights'
              opacity='0.6'
              fill='#FFFFFF'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,Kt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairDreads-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C63.4467803,131.013632 63.6113966,121.686985 63.000708,112.826222 C62.1957105,101.145772 62.8887367,89.7481762 65.5369124,78.2476834 C67.9263583,67.8722634 71.3610508,62.3068417 79.1631677,53.9925443 C83.5224388,49.3467459 90.0678681,49.0779432 96.5828586,47.4293172 C103.17612,45.7598396 109.194306,43.2191332 113.317676,38.4387068 C122.400941,48.8499369 146.671683,45.1030183 155.554378,56.4493915 C166.355804,70.2471725 166.476604,79.1499376 167.747424,95.0917937 C168.700138,107.043152 167.218859,128.656014 166.803718,141.630125 C161.185514,152.525228 152.097197,161.339247 141,166.610951 L141,185 L145,185 C151.635699,185 158.061736,185.89767 164.1633,187.578199 C162.113115,190.752042 159.66929,193.757151 157.112045,196.551224 C153.280561,200.738743 149.430596,205.07041 145.111547,208.917959 C140.170678,213.319433 135.443967,216.514694 132.444114,221.999991 C131.086326,224.482676 128.707208,227.093643 131.224932,229.817026 C133.524148,232.304244 137.149083,231.79157 139.609734,229.99245 C143.247171,227.332528 145.947527,223.133676 149.2996,220.076669 C146.062216,225.891963 141.557817,234.561189 143.870623,241.081807 C144.65714,243.298862 145.455615,243.254893 146.671536,244.732627 C148.591355,244.77569 149.350151,245.644199 148.948467,247.337701 C149.128382,247.821818 149.308297,248.305028 149.488756,248.789145 C150.944383,251.382887 153.73062,253.199684 157.268587,251.977153 C168.828809,247.982737 155.493353,230.015568 168.22112,224.674872 C170.498594,227.504326 167.135107,235.453723 167.044334,238.930932 C166.932906,243.218176 167.166089,252.943574 173.685972,254.109896 C182.182202,255.630241 178.905139,247.513126 179.240509,244.059941 C179.630235,240.043766 182.101213,234.747946 184.111805,231.19141 C182.888817,234.970512 180.603189,243.344644 186.927937,245.060811 C194.245208,247.046687 193.409228,238.475373 194.5197,234.910224 C194.748535,240.185647 201.565196,252.659813 207.724704,242.806586 C210.898493,237.730613 208.733533,229.366 208.385661,223.95323 C212.799287,228.512903 216.32584,222.602417 216.224196,219.322843 C217.902135,224.075166 224.207315,237.325369 229.795009,226.807615 C233.19274,220.412559 229.568892,211.82266 227.311529,205.648358 C233.255792,206.168285 232.061613,200.411919 231.17617,197.553001 C229.869476,193.331485 230.56685,192.711833 230.835907,188.347077 C239.08591,193.151981 238.833159,180.113465 238.377664,176.915484 C237.232404,168.863643 230.969077,161.653567 226.135287,154.862787 C222.669068,149.991702 216.20028,141.510593 218.096726,135.636824 C220.053506,138.105004 224.604107,138.079166 226.413041,135.494944 C227.944765,133.306899 226.321725,129.699141 225.582497,127.51291 C223.561578,121.532617 219.523001,117.668749 215.871976,112.532035 C208.763972,102.531035 209.78639,89.3991407 209.129238,78.2191259 C208.309564,64.2703984 205.315147,50.5387982 192.648801,40.3918378 C185.862036,34.9554966 177.590835,30.4783232 171.278589,24.7101717 C169.557166,23.1372455 168.829352,21.1885396 167.213378,19.672275 C165.399552,17.9706136 164.553244,18.373591 163.055221,15.951194 C160.386934,11.6367527 157.252824,7.59700681 150.804147,7.39438491 C146.585112,7.26247669 141.249081,10.823092 137.446405,10.3027118 C134.324254,9.87616325 132.352254,5.42437419 129.78996,3.93032097 C125.824219,1.61762086 123.056462,2.51559399 118.817859,3.85507435 C112.508874,5.8486563 108.488235,6.54355423 102.06293,4.16059373 C97.6906135,2.53871192 93.5645254,-0.846479064 88.4018873,0.357013447 C84.3524397,1.30167574 82.5435053,4.56991717 80.1584078,7.07481345 C77.6972133,9.66084915 78.8865008,8.80593884 75.2887432,9.38026087 C71.6083661,9.9681817 68.7020041,10.5017074 65.9103313,12.9118655 C61.397779,16.8074642 64.5237352,22.8666297 60.95696,26.3007763 C59.0317058,28.154744 55.0219374,29.0377585 52.7922952,30.954734 C50.3582782,33.0471337 48.3677981,35.5901066 46.5441878,38.0655389 C42.992632,42.8881215 40.5678554,48.1435988 37.9642508,53.3460408 C33.1206766,63.0274694 28.8027153,73.0171372 26.9622549,83.4183949 C26.0170215,88.7645307 24.4238764,93.9946236 23.4503783,99.3303337 C22.6997357,103.444873 23.0198867,107.95151 21.5539323,111.946834 C19.8145722,116.686464 15.6553275,121.042608 13.4023127,125.704271 C10.4144183,131.887186 8.40763163,137.818976 7.77222166,144.475128 C7.14822625,151.019317 8.88486854,156.786109 9.65073052,163.202016 C10.0942673,166.919017 9.32731826,167.341033 6.77100254,170.849066 C4.80389503,173.548878 2.81124068,176.221946 1.54639979,179.227278 C-0.815325022,184.841763 -0.684329469,190.304395 3.42490864,195.240301 C6.24484612,198.627758 15.7238148,202.173415 14.9476254,194.622463 C14.5872518,191.114429 10.1763434,189.527451 11.0188459,185.502664 C11.6020751,182.715366 14.443211,180.786605 17.8920358,179.924895 C20.328227,179.316576 21.5278419,179.343321 22.6269,182.014575 C23.6232272,184.435613 22.3024007,189.72146 21.996382,192.265793 C21.8735397,193.288422 21.691994,194.184582 21.5686081,195.131511 C20.7005588,201.806248 20.5407551,207.947459 16.8870119,214.076432 C14.6426939,217.842389 10.2513533,223.149088 15.258536,226.778604 C19.2177543,229.649308 26.0490909,227.900051 29.1359115,224.896532 C32.3923196,228.923586 31.668311,233.320073 30.4502154,237.765516 C29.6941373,240.525616 27.6264731,244.567629 30.8812505,246.798736 C35.2888976,249.820386 42.4838692,245.061265 45.7886533,242.659719 C47.6992316,246.926565 49.4918595,262.485842 57.0243756,253.211017 C59.2224919,250.505765 62.8816706,247.867147 63.5785017,244.677325 C64.7346326,239.386945 63.9046317,233.818695 64.3834993,228.474826 C66.7870774,235.472308 68.4211208,238.262053 69.8925107,245.444931 C70.7774101,249.766172 71.124195,264.264472 80.0666799,262.354749 C86.9474795,260.885627 82.5468986,251.830921 81.6679782,248.139757 C79.9846038,241.070655 79.1724081,238.077382 77.5455629,230.999667 C80.078506,235.625521 82.2918416,240.371497 84.725315,245.034067 C87.115848,249.613685 97.8039252,259.060923 100.930715,255.083614 C104.057505,251.106306 96.435013,245.438857 94.7010885,240.623528 C91.0924599,230.599863 86.7201436,220.618354 85.6835937,210.116466 C85.1851583,205.067237 86.1200644,200.404213 86.5299011,195.413459 C86.8096981,192.003861 86.3887166,188.510775 85.718098,185.073467 Z'
            id='LongHairDreads-path2'
          />
        </defs>
        <mask id='LongHairDreads-mask2' fill='white'>
          <use href='#LongHairDreads-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Dreads' mask='url("#LongHairDreads-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='template-for-hairstyles'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(63.000000, 87.000000)'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(16.000000, 14.000000)'>
              <mask id='LongHairDreads-mask1' fill='white'>
                <use href='#LongHairDreads-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairDreads-path2' />
              <path
                d='M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C66.7437304,141.280375 67.3851037,142.912325 68.1617154,144.509125 C73.916823,156.341882 81.4183567,166.92083 84.4877837,179.589912 C84.9233139,181.387079 85.3569126,183.222183 85.718098,185.073467 Z M164.1633,187.578199 C158.061736,185.89767 151.635699,185 145,185 L145,185 L141,185 L141,166.610951 C151.900717,161.432585 160.863061,152.836228 166.502046,142.206866 C166.424719,145.200638 166.492065,148.178617 166.874747,151.055581 C167.944997,159.099715 170.876362,166.366 169.515856,174.635875 C168.770949,179.167686 166.790265,183.511457 164.1633,187.578199 Z'
                id='Shadows'
                opacity='0.24'
                fill='#000000'
                mask='url("#LongHairDreads-mask1")'
              />
              <path
                d='M49.3607552,108.248307 C49.2357387,105.826133 47.3806025,97.711311 49.6885159,96.3093564 C52.2181977,94.7715832 51.6909542,104.01582 51.7170446,104.962941 C51.7605286,106.500263 52.928074,118.098087 50.7897482,118.046647 C48.6579451,117.995659 49.4428313,109.828495 49.3607552,108.248307 Z M57.7950752,165.998415 C57.7863784,167.012316 56.722651,166.95095 55.9633116,166.68563 C55.0256879,166.358041 55.5996767,164.201639 55.5502136,163.49457 C55.4197616,161.635525 54.5272525,156.156756 55.8904759,154.62169 C58.6158357,151.553363 57.8059462,164.569838 57.7950752,165.998415 Z M32.1210881,179.161492 C34.0501471,179.106894 32.2645853,141.329473 29.29952,141.371437 C27.2171799,141.400766 30.6611128,179.198041 32.1210881,179.161492 Z M34.3531219,198.516092 C31.9555228,198.516092 32.3963419,206.978357 33.8084848,207.654742 C35.9484412,208.679924 37.0349977,198.516092 34.3531219,198.516092 Z M49.5898072,202.054956 C49.6110057,203.112626 48.4113908,203.129321 47.6107416,202.798574 C46.701926,202.423155 47.082411,199.293461 47.0465367,198.598576 C46.9334783,196.41149 45.0299661,187.926664 46.7611729,186.367683 C48.7353466,184.59031 48.7782871,186.540953 49.3093354,187.8662 C50.8731288,191.768841 49.505557,197.898275 49.5898072,202.054956 Z M190.242397,122.33319 C190.352194,123.795609 191.311016,133.35074 189.717871,134.079016 C186.975661,135.332969 188.156795,129.428696 188.167666,128.666127 C188.274745,121.229044 187.19906,113.85423 186.381017,106.456855 C186.225562,105.052193 183.755671,94.2318284 185.564605,93.3352452 C188.272028,91.9937546 187.86817,95.5809897 188.023082,96.7451491 C189.152035,105.213731 189.651014,113.824449 190.242397,122.33319 Z M187.023004,155.587221 C184.490605,155.085459 183.16543,163.680835 184.321017,164.602687 C186.238118,166.132789 189.670093,156.113348 187.023004,155.587221 Z M186.754925,193.385172 C185.616188,193.158658 177.321615,209.117567 178.004314,210.020016 C179.303942,211.738731 190.833725,194.199633 186.754925,193.385172 Z M166.332555,200.758587 C164.551342,199.95631 156.998715,211.509915 158.926686,212.377619 C160.674743,213.163653 168.488275,201.725562 166.332555,200.758587 Z M208.425286,157.447168 C206.274459,157.447168 206.370123,169.269251 208.025233,170.015125 C209.736329,170.785817 210.967469,157.447168 208.425286,157.447168 Z M178.139603,48.8435128 C177.531371,47.9735519 170.964743,40.2233192 175.668081,41.3306242 C177.959145,41.8698375 181.116083,48.6833281 182.149372,50.7413632 C182.743472,51.9235715 186.133593,57.2006425 182.541271,56.8270286 C181.563968,56.7259543 178.951667,50.0063184 178.139603,48.8435128 Z M155.04775,33.3564939 C154.201443,33.7373274 154.215575,34.0946972 155.090147,34.4281522 C155.936998,34.0473186 155.922322,33.6904 155.04775,33.3564939 Z M70.6188876,41.486432 C68.6137316,43.3296843 61.07578,54.0047545 58.4928303,54.1116947 C53.7862308,54.3066237 62.7711125,45.0867526 63.7902688,43.9135688 C64.2452201,43.387441 66.275923,40.8222295 67.5119557,40.1914176 C68.7729918,39.5475202 72.9556091,39.3322861 70.6188876,41.486432 Z M43.2540252,69.9805849 C41.0711283,69.5519216 37.4190158,80.245492 38.693097,81.5359942 C40.6167205,83.4857354 45.7005438,70.4661025 43.2540252,69.9805849 Z M68.1928608,188.992366 C68.6054153,190.333405 72.8244505,200.071733 71.7639844,201.353211 C70.1425747,203.310623 69.6772959,200.536495 69.1467911,199.385872 C67.9689182,196.830588 64.9087316,190.540066 65.4006444,187.850317 C65.8784249,185.241788 67.775958,187.648619 68.1928608,188.992366 Z M59.986234,211.816206 C57.6913658,211.816206 57.9560747,221.618156 59.3225594,222.200687 C61.4391432,223.102685 62.8012795,211.816206 59.986234,211.816206 Z M221.791072,203.446532 C221.927503,204.049819 223.845148,209.009228 221.128485,208.290879 C219.566322,207.878008 219.325529,203.506094 218.926564,202.180847 C217.697597,198.095009 213.646519,193.018282 213.294842,188.98659 C212.955123,185.090266 215.135302,186.575246 216.80998,189.875503 C219.046145,194.283064 220.722996,198.746577 221.791072,203.446532 Z M202.089015,202.950817 C199.957212,202.941341 199.853937,213.724254 201.187265,214.35281 C203.051098,215.231344 204.808395,202.950817 202.089015,202.950817 Z M208.249611,114.654432 C209.831341,114.242012 204.839921,101.328868 203.071753,101.471004 C200.377376,101.688494 205.847663,115.273512 208.249611,114.654432 Z M181.434114,170.746831 C180.587263,171.127665 180.601939,171.485034 181.476511,171.818489 C182.322818,171.437656 182.308686,171.080286 181.434114,170.746831 Z M157.216135,225.987499 C158.009718,225.987499 158.337478,224.763778 157.165041,224.736253 C156.389939,224.742571 155.980645,225.987499 157.216135,225.987499 Z M58.6844317,170.628746 C58.7137834,168.720066 56.215084,170.119764 56.230847,171.730185 C56.26346,174.943806 58.6317074,173.476424 58.6844317,170.628746 Z M52.5187808,122.883143 C51.7148704,122.883143 51.3854791,124.119498 52.5698745,124.148828 C53.3536737,124.142962 53.7673152,122.883143 52.5187808,122.883143 Z M33.3865269,185.392722 C33.3087993,183.451554 31.6863025,185.43604 31.7770753,185.438747 C32.0651568,185.445967 33.4474045,186.856043 33.3865269,185.392722 Z M37.5995831,84.0632577 C35.2318792,84.0632577 35.5754028,89.8168218 37.0864719,90.1859235 C39.6063697,90.801845 39.9509805,84.0632577 37.5995831,84.0632577 Z M50.212933,208.325849 C47.9273051,208.325849 47.7729369,216.139704 49.3503191,216.625673 C51.8011861,217.379669 52.5931385,208.325849 50.212933,208.325849 Z M31.4567613,213.932223 C30.5849071,214.323435 30.5990394,214.691634 31.4991582,215.035467 C32.371556,214.644256 32.3568801,214.276959 31.4567613,213.932223 Z M201.455507,217.282881 C199.135636,217.282881 199.226409,226.836207 200.65051,227.481458 C202.64099,228.383907 204.139014,217.282881 201.455507,217.282881 Z M177.94561,226.161536 C175.534966,225.679629 174.272299,233.567034 175.395817,234.451885 C177.248236,235.910694 180.42148,226.656078 177.94561,226.161536 Z M157.46508,233.451204 C155.467534,233.451204 155.95836,237.025805 157.110686,237.557799 C159.104971,238.478297 159.694179,233.451204 157.46508,233.451204 Z M86.479514,19.5090896 C84.8080977,19.5090896 74.3192131,24.2532644 78.2392958,25.6588288 C80.6358078,26.5179603 90.7371413,19.5090896 86.479514,19.5090896 Z'
                id='Highlights'
                opacity='0.300000012'
                fill='#FFFFFF'
                mask='url("#LongHairDreads-mask1")'
              />
            </g>
            <g
              id='Group-74'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(44.000000, 33.000000)'
            />
          </g>
        </g>
      </g>
`,Qt=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairFrida-path2' x='0' y='0' width='264' height='280' />
          <filter
            x='-3.8%'
            y='-6.7%'
            width='107.7%'
            height='126.7%'
            filterUnits='objectBoundingBox'
            id='filter5'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-6.7%'
            y='-3.4%'
            width='113.3%'
            height='113.8%'
            filterUnits='objectBoundingBox'
            id='filter6'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-6.7%'
            y='-3.4%'
            width='113.3%'
            height='113.8%'
            filterUnits='objectBoundingBox'
            id='filter7'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-3.8%'
            y='-3.8%'
            width='107.7%'
            height='115.4%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-2.5%'
            y='-2.5%'
            width='105.0%'
            height='110.0%'
            filterUnits='objectBoundingBox'
            id='filter2'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-2.7%'
            y='-2.7%'
            width='105.4%'
            height='110.8%'
            filterUnits='objectBoundingBox'
            id='filter3'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <filter
            x='-1.8%'
            y='-1.9%'
            width='103.6%'
            height='107.4%'
            filterUnits='objectBoundingBox'
            id='filter4'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairFrida-path1'
          />
        </defs>
        <mask id='LongHairFrida-mask1' fill='white'>
          <use href='#LongHairFrida-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Frida' mask='url("#LongHairFrida-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              class='CustomColor'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(57.000000, 12.000000)'>
              <path
                d='M132,85.9365741 L132,86.1659169 C137.155374,87.0308248 141.196116,91.1828748 141.893354,96.3931952 C144.449672,93.4871212 146,89.6746099 146,85.5 C146,83.370043 145.596416,81.3343479 144.861548,79.4652142 C148.026608,76.4588698 150,72.2098901 150,67.5 C150,61.6639649 146.970105,56.5355997 142.397534,53.6021248 C143.424844,51.4510861 144,49.0427105 144,46.5 C144,38.865183 138.814518,32.4415002 131.77335,30.5587463 C131.922635,29.560863 132,28.5394662 132,27.5 C132,16.1781626 122.821837,7 111.5,7 C108.870853,7 106.357304,7.49493913 104.047446,8.3967274 C100.317449,3.30576666 94.2947759,0 87.5,0 C83.2377504,0 79.2793114,1.30076749 76,3.52698535 C72.7206886,1.30076749 68.7622496,0 64.5,0 C57.7052241,0 51.6825514,3.30576666 47.9525545,8.3967274 C45.6426956,7.49493913 43.1291474,7 40.5,7 C29.1781626,7 20,16.1781626 20,27.5 C20,28.5394662 20.0773647,29.560863 20.2266501,30.5587463 C13.1854816,32.4415002 8,38.865183 8,46.5 C8,48.6917361 8.4273349,50.7836628 9.20323008,52.6970055 C3.75045759,55.3899422 0,61.0069879 0,67.5 C0,72.9379417 2.63063706,77.7614652 6.68874609,80.7674054 C6.2406808,82.2665254 6,83.8551557 6,85.5 C6,89.6746099 7.55032816,93.4871212 10.1066457,96.3931952 C10.8038839,91.1828748 14.8446259,87.0308248 20,86.1659169 L20,85.9365741 C20.0276665,85.957925 20.0554443,85.9790669 20.0833333,86 C22.985911,38.8525302 68.5527463,55.7423492 76.000002,29.3361688 C83.4472619,55.7423461 129.014089,38.8525344 131.916667,86 C131.944556,85.9790669 131.972333,85.957925 132,85.9365741 Z M52,168.610951 L52,172.811832 C51.1847358,172.935746 50.3498715,173 49.5,173 C42.6790709,173 36.8248202,168.861157 34.3116389,162.957863 C25.7536314,162.348807 19,155.213101 19,146.5 C19,145.029028 19.1924867,143.603013 19.5536459,142.245771 C12.8575367,140.144362 8,133.88945 8,126.5 C8,122.755519 9.24731211,119.302363 11.3491137,116.533355 C13.0865598,119.870864 16.346706,122.289132 20.2085808,122.867187 C21.9518066,143.114792 34.4692178,160.282984 52,168.610951 Z M100,168.610951 L100,172.811832 C100.815264,172.935746 101.650128,173 102.5,173 C109.320929,173 115.17518,168.861157 117.688361,162.957863 C126.246369,162.348807 133,155.213101 133,146.5 C133,145.029028 132.807513,143.603013 132.446354,142.245771 C139.142463,140.144362 144,133.88945 144,126.5 C144,122.755519 142.752688,119.302363 140.650886,116.533355 C138.91344,119.870864 135.653294,122.289132 131.791419,122.867187 C130.048193,143.114792 117.530782,160.282984 100,168.610951 Z'
                fill='var(--avataaar-hair-color)'
              />
            </g>
            <g
              id='Ornamentos'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(67.000000, 0.000000)'>
              <g
                id='hoja'
                filter='url("#filter5")'
                opacity='0.899999976'
                transform='translate(120.000000, 64.500000) scale(1, -1) rotate(-20.000000) translate(-120.000000, -64.500000) translate(107.000000, 57.000000)'
                fillRule='nonzero'>
                <path
                  d='M3.61111111,10 C3.61111111,10 1.95,0 13,0 C20.2222222,0 25.2777778,5.71428571 25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C5.05555556,14.2857143 3.61111111,10 3.61111111,10 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C7.22222222,14.2857143 5.12777778,12.3571429 4.18888889,11.0714286 C2.09444444,12.8571429 1.37222222,14.5 1.37222222,14.5714286 C1.3,14.8571429 1.01111111,15 0.722222222,15 C0.65,15 0.505555556,15 0.433333333,14.9285714 C0.0722222222,14.7857143 -0.0722222222,14.3571429 0.0722222222,14 C0.144444444,13.7857143 1.95,9.85714286 7.43888889,7.28571429 C15.3833333,3.14285714 25.2777778,5.71428571 25.2777778,5.71428571 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='hoja'
                filter='url("#filter6")'
                transform='translate(93.307368, 21.745191) scale(-1, -1) rotate(-120.000000) translate(-93.307368, -21.745191) translate(85.807368, 7.245191)'>
                <path
                  d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='hoja'
                filter='url("#filter7")'
                transform='translate(29.307368, 59.745191) rotate(-120.000000) translate(-29.307368, -59.745191) translate(21.807368, 45.245191)'>
                <path
                  d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'
                  id='leaf'
                  fill='#5DD362'
                />
                <path
                  d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'
                  id='leaf'
                  fill='#42BC53'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter1")'
                transform='translate(13.000000, 42.000000) scale(-1, 1) translate(-13.000000, -42.000000) translate(0.000000, 29.000000)'>
                <path
                  d='M24.4244753,20.9561089 C25.2601813,19.8468762 25.6139026,18.4784184 25.4208747,17.1027473 C25.2278468,15.7270762 24.5099609,14.5094298 23.401533,13.6738657 C23.1024018,13.448127 22.7077101,13.2632031 22.2596302,13.1057873 C22.7130645,12.9646232 23.1137179,12.7934099 23.4204085,12.5786628 C25.7688628,10.9342574 26.3421384,7.68540233 24.6974016,5.33647474 C23.0526648,2.98754715 19.8036678,2.41507618 17.4552135,4.05948158 C17.148523,4.2742286 16.8506035,4.59216121 16.5623958,4.97030055 C16.5681989,4.4950724 16.5289465,4.06126726 16.4191304,3.70296871 C16.0132035,2.3748027 15.1137169,1.2836091 13.8873598,0.632188307 C12.6611446,-0.0200371698 11.2540931,-0.154883395 9.92559572,0.250570203 C7.18364131,1.0892266 5.6350141,4.00181908 6.47286581,6.7436316 C6.58216096,7.10017888 6.78669399,7.47891226 7.05541252,7.86771872 C6.6074755,7.71655089 6.18638481,7.62487741 5.81372806,7.61849197 C2.94678437,7.56848119 0.573854142,9.85989025 0.523370073,12.7271653 C0.504358584,13.8654889 0.853022045,14.9255192 1.46080913,15.7935291 C2.38423063,17.1113044 3.90375474,17.9869973 5.63218533,18.0167186 C6.00484208,18.0231041 6.42832327,17.945939 6.88109576,17.8108811 C6.59932552,18.1901555 6.38197496,18.5617056 6.2605192,18.9140724 C5.69762142,20.5489044 5.99965968,22.2756795 6.92293929,23.5942594 C7.53072638,24.4622693 8.40824188,25.1534041 9.48422896,25.5235908 C12.1953795,26.4571485 15.1603315,25.0102268 16.0934159,22.2994077 C16.2148717,21.947041 16.272275,21.5203224 16.2839005,21.0473654 C16.5573519,21.4328579 16.8436218,21.7550638 17.1409542,21.9792407 C18.2505182,22.81542 19.6186447,23.168668 20.9943157,22.9756401 C22.3707915,22.7827541 23.5887693,22.0653415 24.4244753,20.9561089 Z'
                  fill='#4ACAD3'
                  fillRule='nonzero'
                />
                <path
                  d='M11.178297,8.63990176 C10.9452631,7.87696713 11.3743225,7.06939957 12.1372572,6.83636565 C12.9001918,6.60333173 13.7077594,7.03239119 13.9407933,7.79532582 C14.1738272,8.55826044 13.7087793,11.9767907 13.7087793,11.9767907 C13.7087793,11.9767907 11.4113309,9.40283638 11.178297,8.63990176 Z M8.9355486,14.4373723 C8.1377895,14.4232361 7.50243635,13.7656743 7.5165726,12.9679152 C7.53070884,12.1701561 8.18827062,11.534803 8.98602972,11.5489392 C9.78378882,11.5630754 12.8914353,13.0618808 12.8914353,13.0618808 C12.8914353,13.0618808 9.73297629,14.4510353 8.9355486,14.4373723 Z M14.9931854,12.4189898 C14.9931854,12.4189898 16.7313261,9.4385895 17.3849366,8.98092648 C18.0385471,8.52326347 18.9389925,8.68203629 19.3966555,9.33564681 C19.8543185,9.98925733 19.6955457,10.8897027 19.0419352,11.3473657 C18.3883247,11.8050287 14.9931854,12.4189898 14.9931854,12.4189898 Z M11.9202121,19.2569641 C11.1657288,18.9973982 10.7651265,18.1754621 11.0246924,17.4209789 C11.2842584,16.6664957 13.670556,14.1745805 13.670556,14.1745805 C13.670556,14.1745805 14.0160946,17.6074345 13.7565287,18.3619178 C13.4966313,19.1159277 12.6746953,19.5165301 11.9202121,19.2569641 Z M17.2395979,17.2963365 C16.6023761,16.8164172 14.9694239,13.7771777 14.9694239,13.7771777 C14.9694239,13.7771777 18.3408473,14.5093818 18.978069,14.9893011 C19.6152908,15.4692204 19.7426018,16.3753059 19.2623511,17.0120544 C18.7824319,17.6492761 17.8763463,17.7765872 17.2395979,17.2963365 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter2")'
                transform='translate(20.000000, 16.000000)'>
                <path
                  d='M30.5258511,33.0981022 L30.7843694,30.7838831 L33.0980227,30.5247992 C35.9451175,30.2051869 38.2084249,28.4080043 39.1519882,25.7142103 C40.2177395,22.6719541 39.217042,19.3553405 36.6052724,17.4325757 L34.7311566,16.052869 L35.6634061,13.9191036 C36.8915092,11.1127382 36.3082875,8.02353005 34.142278,5.85752056 C31.9762685,3.69151107 28.8870604,3.10828939 26.0801294,4.33582677 L23.9469296,5.26864203 L22.5666572,3.39396053 C20.6438924,0.78558504 17.3267131,-0.217940904 14.2844569,0.847810436 C11.5917943,1.79137373 9.79348029,4.05468111 9.4749994,6.90177585 L9.21591547,9.21542924 L6.90226208,9.47451317 C4.05460165,9.79355975 1.79129427,11.5918737 0.847730981,14.2845363 C-0.0896097682,16.9607941 0.549614762,19.8457897 2.51650298,21.812678 L2.51706867,21.8132437 C2.78576925,22.0819442 3.08049135,22.3348056 3.39388108,22.5656053 L5.26856258,23.9458777 L4.33518163,26.0796431 C3.10877562,28.8865742 3.6919973,31.9757823 5.85800679,34.1417918 C8.02401628,36.3078013 11.1132244,36.891023 13.9201555,35.664617 L16.0539209,34.731236 L17.4341933,36.6059175 C19.3513012,39.2165558 22.6741374,40.217819 25.7169593,39.1526333 C28.4096219,38.2079386 30.2073702,35.9451969 30.5258511,33.0981022 Z'
                  fill='#FDB599'
                  fillRule='nonzero'
                />
                <path
                  d='M22.8816016,25.1907295 C23.087511,25.9589303 22.6315686,26.7486271 21.8633678,26.9545366 C21.095167,27.1604461 20.3049044,26.703938 20.0995606,25.9363028 C19.8942168,25.1686677 20,20 20,20 C20,20 17.50759,24.5288775 16.9452987,25.0911688 C16.3835731,25.6528945 15.4711225,25.6534601 14.9088312,25.0911688 C14.3465399,24.5288775 14.3471055,23.6164269 14.9088312,23.0547013 C15.4711225,22.49241 20,20 20,20 C20,20 14.831898,20.1063489 14.0636972,19.9004394 C13.2954963,19.6945299 12.8395539,18.904833 13.0454634,18.1366322 C13.2513729,17.3684314 14.0410697,16.912489 14.8092705,17.1183984 C15.5774713,17.3243079 20,20 20,20 C20,20 17.3243079,15.5774713 17.1183984,14.8092705 C16.912489,14.0410697 17.3684314,13.2513729 18.1366322,13.0454634 C18.904833,12.8395539 19.6945299,13.2954963 19.9004394,14.0636972 C20.1063489,14.831898 20,20 20,20 C20,20 22.49241,15.4711225 23.0547013,14.9088312 C23.6169926,14.3465399 24.5288775,14.3465399 25.0911688,14.9088312 C25.6534601,15.4711225 25.6534601,16.3830074 25.0911688,16.9452987 C24.5288775,17.50759 20,20 20,20 C20,20 25.1686677,19.8942168 25.9363028,20.0995606 C26.703938,20.3049044 27.1604461,21.095167 26.9545366,21.8633678 C26.7486271,22.6315686 25.9589303,23.087511 25.1907295,22.8816016 C24.4225287,22.6756921 20,20 20,20 C20,20 22.6751264,24.421963 22.8816016,25.1907295 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter3")'
                transform='translate(89.000000, 26.000000)'>
                <path
                  d='M34.7579072,29.8221549 C35.9471811,28.2436316 36.4505537,26.2962107 36.1758602,24.338525 C35.9011667,22.3808393 34.8795597,20.6480348 33.3021815,19.4589627 C32.8764948,19.1377192 32.3148182,18.8745582 31.6771661,18.6505434 C32.322438,18.4496561 32.8925986,18.2060063 33.3290428,17.9004048 C36.6710739,15.5602894 37.4868893,10.9369187 35.1463023,7.59421406 C32.8057153,4.25150941 28.1821427,3.43683918 24.8401115,5.77695456 C24.4036673,6.08255608 23.979705,6.53499864 23.5695632,7.07312001 C23.5778216,6.3968338 23.5219623,5.77949571 23.3656856,5.26960932 C22.7880204,3.37952692 21.5079818,1.82667448 19.7627813,0.899652591 C18.0177827,-0.0285144339 16.0154402,-0.220410986 14.1248862,0.356580673 C10.2228742,1.55005325 8.01905852,5.69489638 9.21138596,9.59670651 C9.36692136,10.1041007 9.6579876,10.6430675 10.0403947,11.196369 C9.40294591,10.9812455 8.80370145,10.8507871 8.27338223,10.8417001 C4.19350083,10.7705309 0.816638586,14.0313823 0.744795872,18.1117353 C0.717741062,19.7316573 1.21391599,21.2401619 2.07884376,22.4754068 C3.39294359,24.3507024 5.55534329,25.5968808 8.01503297,25.6391765 C8.54535219,25.6482635 9.14799849,25.5384516 9.79232859,25.3462538 C9.39134786,25.8859905 9.08204129,26.414735 8.9092004,26.9161799 C8.10815356,29.2426717 8.53797723,31.7000054 9.85187515,33.5764461 C10.7168029,34.811691 11.965575,35.7952289 13.4967874,36.322033 C17.3549631,37.6505575 21.5743179,35.5914767 22.9021688,31.7337725 C23.0750097,31.2323275 23.1566991,30.6250741 23.173243,29.95202 C23.5623854,30.5006054 23.9697696,30.9591293 24.3928963,31.2781502 C25.9718913,32.4680977 27.9188405,32.9707967 29.8765262,32.6961032 C31.8353571,32.4216117 33.5686332,31.4006783 34.7579072,29.8221549 Z'
                  fill='#F7D30C'
                  fillRule='nonzero'
                />
                <path
                  d='M15.9075765,12.2952448 C15.5759513,11.2095302 16.1865359,10.0602994 17.2722506,9.72867419 C18.3579653,9.397049 19.507196,10.0076336 19.8388212,11.0933483 C20.1704464,12.1790629 19.5086475,17.0438945 19.5086475,17.0438945 C19.5086475,17.0438945 16.2392017,13.3809595 15.9075765,12.2952448 Z M12.715973,20.5454914 C11.5807004,20.5253744 10.676544,19.5896134 10.696661,18.4543409 C10.716778,17.3190683 11.652539,16.4149119 12.7878115,16.4350289 C13.9230841,16.4551458 18.3455041,18.5880611 18.3455041,18.5880611 C18.3455041,18.5880611 13.850774,20.5649348 12.715973,20.5454914 Z M21.3364561,17.6731778 C21.3364561,17.6731778 23.8099641,13.4318389 24.7401021,12.7805492 C25.6702401,12.1292596 26.9516432,12.3552055 27.6029329,13.2853435 C28.2542225,14.2154816 28.0282766,15.4968846 27.0981386,16.1481743 C26.1680005,16.799464 21.3364561,17.6731778 21.3364561,17.6731778 Z M16.9633787,27.4041412 C15.889691,27.0347589 15.3196031,25.8650807 15.6889854,24.7913931 C16.0583677,23.7177054 19.4542528,20.1715184 19.4542528,20.1715184 C19.4542528,20.1715184 19.9459808,25.0567338 19.5765985,26.1304214 C19.2067446,27.2034356 18.0370664,27.7735236 16.9633787,27.4041412 Z M24.5332739,24.6140173 C23.6264583,23.9310553 21.3026416,19.6059836 21.3026416,19.6059836 C21.3026416,19.6059836 26.1004365,20.6479665 27.0072521,21.3309285 C27.9140676,22.0138905 28.095241,23.30332 27.4118074,24.209462 C26.7288453,25.1162776 25.4394159,25.297451 24.5332739,24.6140173 Z'
                  fill='#FFFFFF'
                />
              </g>
              <g
                id='Flor'
                filter='url("#filter4")'
                transform='translate(48.000000, 0.000000)'>
                <path
                  d='M54.1379237,31.5464048 C55.9625462,24.5630399 48.1438056,19.13187 45.1845324,17.3616591 C45.6989766,14.4276922 46.8574047,4.80065356 40.7169237,1.24584505 C34.6121663,-2.28828261 26.9236153,3.44959091 24.6013353,5.39402404 C24.4009276,5.26871855 24.1656352,5.12587117 23.8977086,4.97076479 C20.8314374,3.19565841 13.1300975,-0.380512394 7.84990403,4.73636964 C2.20473848,10.2044755 5.53732179,18.7392794 6.80518652,21.4340926 C4.64577053,23.4449497 -1.57937327,30.0260297 0.986877047,37.024011 C1.69277097,38.9530347 2.99822799,40.4795811 4.86875265,41.5624535 C8.89955964,43.8959428 14.4760657,43.5196765 16.591707,43.2691852 C17.5849083,45.1496134 20.4220029,49.9813784 24.4796026,52.3303784 C26.1496784,53.2972082 27.8550402,53.7431811 29.5502657,53.6552686 C36.4552712,53.2971895 39.4664791,43.6601819 40.2201879,40.7426742 C43.0812084,40.3465884 52.3062726,38.5442744 54.1379237,31.5464048 Z'
                  fill='#FF7398'
                  fillRule='nonzero'
                />
                <path
                  d='M27.7643057,25.6030632 C27.7643057,25.6030632 31.4492792,33.7908502 28.1176886,34.3138653 C24.7835165,34.8339614 26.6574825,25.7216143 26.6574825,25.7216143 C26.6574825,25.7216143 19.5457139,31.7290717 18.5074329,28.7503567 C17.4680864,25.7710249 26.208593,24.7024398 26.208593,24.7024398 C26.208593,24.7024398 18.2208741,20.0098596 20.8149072,17.8660564 C23.4089403,15.7222531 27.0309781,23.9576566 27.0309781,23.9576566 C27.0309781,23.9576566 28.975509,15.0385915 31.8514465,16.7035111 C34.727384,18.3684307 27.9942413,24.5153028 27.9942413,24.5153028 C27.9942413,24.5153028 36.8711392,23.5256765 36.3635103,26.8673556 C35.8586276,30.2092 27.7643057,25.6030632 27.7643057,25.6030632 Z'
                  fill='#FFFFFF'
                />
              </g>
            </g>
            <g
              id='Arete'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(182.000000, 129.000000)'>
              <rect
                id='Cadenita'
                fill='#E6E6E6'
                x='9'
                y='0'
                width='2'
                height='39'
                rx='1'
              />
              <polygon
                id='Rayo'
                fill='#9177FF'
                fillRule='nonzero'
                points='20 37 10.57 37 17 20 6 20 0 41 8.636 41 4 60'
              />
            </g>
          </g>
        </g>
      </g>
`,te=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairFro-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M180.665797,104.495381 C181.518431,106.144109 182,108.015816 182,110 L182,123 C182,129.018625 177.569129,134.002364 171.791419,134.867187 C170.048193,155.114792 157.530782,172.282984 140,180.610951 L140,190.054182 C143.832093,191.949549 148.058707,193 152.5,193 C160.121477,193 167.110765,189.906604 172.559029,184.758484 C174.020475,184.918263 175.501874,185 177,185 C195.390093,185 211.259672,172.683502 218.621514,154.88375 C224.900145,149.813883 229,141.454126 229,132 C229,130.214987 228.853847,128.468986 228.57447,126.776775 C230.785923,120.339137 232,113.331199 232,106 C232,93.1344627 228.26103,81.2644681 221.954258,71.7251464 C221.984605,71.1545437 222,70.5793265 222,70 C222,59.0433596 216.493437,49.5565783 208.470603,44.9571334 C201.160166,27.369138 185.740722,14.9905991 167.696954,14.0567347 C163.273738,9.07458291 157.201041,6 150.5,6 C149.549121,6 148.610894,6.0619088 147.688236,6.18239195 C137.909703,2.19640473 127.211351,0 116,0 C104.788649,0 94.0902965,2.19640473 84.3117637,6.18239195 C83.3891064,6.0619088 82.4508793,6 81.5,6 C74.7989589,6 68.7262617,9.07458291 64.3030458,14.0567347 C46.2592779,14.9905991 30.8398341,27.369138 23.5293968,44.9571334 C15.5065631,49.5565783 10,59.0433596 10,70 C10,70.5793265 10.0153947,71.1545437 10.0457422,71.7251464 C3.73896962,81.2644681 0,93.1344627 0,106 C0,113.331199 1.21407678,120.339137 3.42552978,126.776775 C3.14615333,128.468986 3,130.214987 3,132 C3,141.454126 7.0998554,149.813883 13.3784857,154.88375 C20.7403278,172.683502 36.6099075,185 55,185 C56.4981261,185 57.9795252,184.918263 59.4409604,184.758485 C64.8892346,189.906604 71.878523,193 79.5,193 C83.9412925,193 88.1679073,191.949549 92,190.054182 L92,180.610951 C74.4692178,172.282984 61.9518066,155.114792 60.2085808,134.867187 C54.4308707,134.002364 50,129.018625 50,123 L50,110 C50,108.017039 50.4809755,106.146415 51.3326281,104.498428 C54.034525,103.696079 57.0103265,101.444735 59.9905531,98.1675057 C59.9937016,98.1669748 59.9968506,98.1664452 60,98.1659169 L60,98.1571139 C66.866448,90.6014009 73.7548744,77.602262 77.3694073,64.3345491 C88.4864044,66.0717584 101.905207,67.0867832 116.353789,67.0867832 C130.513023,67.0867832 143.683308,66.1120054 154.66752,64.4380466 C158.288087,77.6642508 165.154277,90.6101259 172,98.1475774 L172,98.1659169 C172.006563,98.167018 172.013125,98.1681244 172.019685,98.1692362 C174.995621,101.441388 177.967097,103.690532 180.665797,104.495381 Z'
            id='LongHairFro-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairFro-path3'
          />
        </defs>
        <mask id='LongHairFro-mask1' fill='white'>
          <use href='#LongHairFro-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Fro' mask='url("#LongHairFro-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M67,109.777572 C76.0375502,108.717226 88.9217814,89.3309188 94.3694073,69.3345491 C105.486404,71.0717584 118.905207,72.0867832 133.353789,72.0867832 C147.513023,72.0867832 160.683308,71.1120054 171.66752,69.4380466 C177.129582,89.3913728 189.978479,108.706688 199,109.77655 L199,89 C199,66.1159733 187.353465,45.9521405 169.664405,34.1125124 C169.136033,36.5946509 168.784517,39.3353373 168.624132,42.297284 C158.284896,40.892676 146.228147,40.0867832 133.353789,40.0867832 C120.190372,40.0867832 107.88169,40.9292706 97.3896338,42.392803 C97.2315704,39.3922173 96.8778294,36.6175705 96.3431783,34.1074375 C78.6498638,45.9463781 67,66.1127033 67,89 L67,89 L67,109.777572 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(17.000000, 0.000000)'>
              <mask id='LongHairFro-mask2' fill='white'>
                <use href='#LongHairFro-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairFro-path2' />
            </g>
          </g>
        </g>
      </g>
`,ee=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairFroBand-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M80.0203173,73.8104172 C78.0626651,79.5136273 77,85.6327143 77,92 L77,92 L77,98.1659169 C71.3245733,99.1180731 67,104.054007 67,110 L67,123 C67,129.018625 71.4308707,134.002364 77.2085808,134.867187 C78.9518066,155.114792 91.4692178,172.282984 109,180.610951 L109,191.55498 C104.295298,193.764912 99.0418843,195 93.5,195 C84.6936661,195 76.615743,191.881303 70.3104439,186.688122 C68.4019201,186.894245 66.4633102,187 64.5,187 C43.405572,187 25.1625605,174.791635 16.4510993,157.055039 C8.9342791,151.923647 4,143.288055 4,133.5 C4,131.385405 4.23029535,129.324599 4.66717333,127.341294 C2.29639351,121.011656 1,114.157223 1,107 C1,94.2436789 5.11811695,82.4491956 12.0974246,72.8734763 C12.0329017,72.0908558 12,71.2992702 12,70.5 C12,59.2025056 18.5734777,49.4403292 28.1042855,44.8296184 C36.5367477,26.7016558 54.5576512,13.9359054 75.6500672,13.049296 C80.7818839,8.06730831 87.7827378,5 95.5,5 C97.8269611,5 100.088787,5.27887473 102.253881,5.80502563 C111.775927,2.05800249 122.147627,0 133,0 C143.346018,0 153.255173,1.87043661 162.407758,5.29160393 C163.744126,5.09944416 165.11045,5 166.5,5 C174.217262,5 181.218116,8.06730831 186.349933,13.049296 C207.442349,13.9359054 225.463252,26.7016558 233.895715,44.8296184 C243.426522,49.4403292 250,59.2025056 250,70.5 C250,71.2992702 249.967098,72.0908558 249.902575,72.8734763 C256.881883,82.4491956 261,94.2436789 261,107 C261,114.157223 259.703606,121.011656 257.332827,127.341294 C257.769705,129.324599 258,131.385405 258,133.5 C258,143.288055 253.065721,151.923647 245.548901,157.055039 C236.837439,174.791635 218.594428,187 197.5,187 C195.53669,187 193.59808,186.894245 191.689556,186.688122 C185.384257,191.881303 177.306334,195 168.5,195 C164.481965,195 160.61557,194.350752 157,193.151442 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,104.054007 194.675427,99.1180731 189,98.1659169 L189,92 C189,86.5585666 188.223906,81.2983998 186.776371,76.3241528 L188.153157,89.1947292 L176.812614,65.1945789 L131.676809,45.6707349 L101.563146,56.2283606 L80.0648273,76.419385 L80.0203173,73.8104172 Z'
            id='LongHairFroBand-path2'
          />
        </defs>
        <mask id='LongHairFroBand-mask1' fill='white'>
          <use href='#LongHairFroBand-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Fro-+-Band' mask='url("#LongHairFroBand-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='LongHairFroBand-mask2' fill='white'>
              <use href='#LongHairFroBand-path2' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#LongHairFroBand-path2'
            />
            <path
              d='M76.6313898,98.975 C76.2155465,96.423245 76,93.8109442 76,91.1521739 C76,62.3493236 101.295912,39 132.5,39 C163.704088,39 189,62.3493236 189,91.1521739 C189,93.8109442 188.784453,96.423245 188.36861,98.975 C184.279562,73.883217 160.823662,54.6456522 132.5,54.6456522 C104.176338,54.6456522 80.7204382,73.883217 76.6313898,98.975 Z'
              id='Band'
              stroke='none'
              fill='#92D9FF'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,ae=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairMiaWallace-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M148.859344,69 C148.952588,70.3212062 149,71.6550662 149,73 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 158.324059,30.4276364 146.000169,15 C137.861928,4.81215989 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 48.9231015,6.50878211 41,16 C30.3189583,28.7950013 -0.0850232975,107.014914 4.92293245e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,73 L37,73 C37,71.6550662 37.0474121,70.3212062 37.1406562,69 L65.3735517,69 L69.2529753,47.5561285 L72.058097,69 L148.859344,69 Z'
            id='LongHairMiaWallace-path2'
          />
        </defs>
        <mask id='LongHairMiaWallace-mask1' fill='white'>
          <use href='#LongHairMiaWallace-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Mia-Wallace' mask='url("#LongHairMiaWallace-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <path
              d='M69.0330562,76.212888 C81.9708809,43.1292208 95.6458945,26.5873873 110.058097,26.5873873 C110.596882,26.5873873 139.311316,26.3494141 158.112657,26.226792 C178.767149,35.5853581 193,55.3036503 193,78.114622 L193,93 L110.058097,93 L107.252975,69.820435 L103.373552,93 L69,93 L69,78.114622 C69,77.478246 69.0110772,76.844277 69.0330621,76.2128728 L69.0330562,76.212888 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(40.000000, 19.000000)'>
              <mask id='LongHairMiaWallace-mask2' fill='white'>
                <use href='#LongHairMiaWallace-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairMiaWallace-path2' />
            </g>
          </g>
        </g>
      </g>
`,he=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairNotTooLong-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M59,102.340285 C59,118.921045 59,145.474283 59,182 C59,186.418278 62.581722,190 67,190 L109,190 L109,180.610951 C91.4692178,172.282984 78.9518066,155.114792 77.2085808,134.867187 C71.4308707,134.002364 67,129.018625 67,123 L67,110 C67,106.509412 68.4903619,103.366917 70.8694649,101.174135 C82.4088376,98.5552525 94.9706808,93.6376395 107.341516,86.4953343 C119.473269,79.4910638 129.843979,71.2579416 137.820938,62.752196 C134.394107,70.6604321 130.244513,77.5880409 125.372156,83.5350224 C138.047336,78.0120855 146.677812,69.1324394 151.263585,56.8960843 C151.64142,57.8180234 152.034942,58.738913 152.444252,59.6582378 C162.699828,82.6926393 180.317578,99.018563 198.205873,104.403108 C198.718861,106.513486 199,108.48395 199,110 L199,123 C199,129.018625 194.569129,134.002364 188.791419,134.867187 C187.048193,155.114792 174.530782,172.282984 157,180.610951 L157,190 L175,190 C192.673112,190 207,175.673112 207,158 C207,133.944314 207,115.902549 207,103.874706 C207,103.807916 206.990567,103.721208 206.971823,103.615272 C206.82774,91.3536714 206.623862,84.2237818 206.360189,82.2256031 C201.576875,45.9764505 170.555563,18 133,18 C96.9151011,18 66.8627142,43.8282542 60,78 C54.4771525,78 50,83.5964406 50,90.5 C50,95.0507583 51.6949619,99.1431718 54.8534901,101.273154 C55.7582038,101.883256 57.323834,102.197638 58.9999994,102.340287 Z'
            id='LongHairNotTooLong-path2'
          />
        </defs>
        <mask id='LongHairNotTooLong-mask1' fill='white'>
          <use href='#LongHairNotTooLong-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Long-but-not-too-long' mask='url("#LongHairNotTooLong-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g id='Behind' strokeWidth='1' fillRule='evenodd'>
              <mask id='LongHairNotTooLong-mask2' fill='white'>
                <use href='#LongHairNotTooLong-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairNotTooLong-path2' />
            </g>
            <g
              id='Top'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(50.000000, 18.000000)'
              opacity='0.159999996'>
              <path
                d='M11.8989604,84.7749122 C25.7109099,83.0145308 41.6792969,77.5379209 57.3415164,68.4953343 C69.4732686,61.4910638 79.8439791,53.2579416 87.8209384,44.752196 C84.3941075,52.6604321 80.2445133,59.5880409 75.3721558,65.5350224 C88.0473359,60.0120855 96.6778122,51.1324394 101.263585,38.8960843 C101.64142,39.8180234 102.034942,40.738913 102.444252,41.6582378 C114.38223,68.4713761 136.296003,86.1944823 157,88.1510343 L157,88.1510343 L157,74 C157,33.1309285 123.869071,-7.50752664e-15 83,0 C46.9151011,6.62868839e-15 16.8627142,25.8282542 10.3212729,60.0063288 C10.214595,60.0021202 10.1074956,60 10,60 C4.4771525,60 0,65.5964406 0,72.5 C0,78.9816827 3.9466744,84.3111215 8.99999442,84.9382803 L8.99999434,85.0927525 C9.31629342,85.0638362 9.63387297,85.0328725 9.95270131,84.9998631 C9.96845895,84.9999543 9.98422521,85 10,85 C10.6492988,85 11.2841443,84.9226474 11.8989604,84.7749122 Z'
                id='Combined-Shape'
                fill='#FFFFFF'
              />
            </g>
          </g>
        </g>
      </g>
`,re=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairShavedSides-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id='LongHairShavedSides-path3'
          />
          <rect id='LongHairShavedSides-path4' x='0' y='0' width='112' height='150' rx='56' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairShavedSides-path1'
          />
        </defs>
        <mask id='LongHairShavedSides-mask2' fill='white'>
          <use href='#LongHairShavedSides-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Shaved-Sides' mask='url("#LongHairShavedSides-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Behind'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='LongHairShavedSides-mask3' fill='white'>
                <use href='#LongHairShavedSides-path3' />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M116.179148,40 L146,40 C171.405098,40 192,60.5949015 192,86 L192,154.108712 C192,180.650314 210.758775,204.349179 222.609956,226.05167 C234.461138,247.754161 215.254522,268.242596 195.770735,276.769484 C190.902336,278.900091 185.645645,280 180.331438,280 L135.26309,280 C78.9108161,280 70.2166412,216.309596 67.6972794,146.504423 L70.2166412,84.1431398 C71.212998,59.4805095 91.4964003,40 116.179148,40 Z'
                class='CustomColor'
                fill='var(--avataaar-hair-color)'
                mask='url("#LongHairShavedSides-mask3")'
              />
            </g>
            <g
              id='Top'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(77.000000, 36.000000)'>
              <mask id='LongHairShavedSides-mask1' fill='white'>
                <use href='#LongHairShavedSides-path4' />
              </mask>
              <g id='Mask' />
              <path
                d='M98.8014742,19.9396383 C107.026909,29.4843994 112,41.9114359 112,55.5 L112,65.5 L112,61.5 C112,45.7605792 105.327989,31.5794902 94.657974,21.6307409 C63.9198041,32.6768506 38.0141969,32.8027026 16.9411526,22.0082968 C6.50516181,31.936614 -1.90326939e-15,45.958626 0,61.5 L0,61.5 L0,65.5 L0,55.5 C-1.66642407e-15,41.8926148 4.98687681,29.4499771 13.2327229,19.8999944 C9.3991564,16.860899 8.25944611,8.18718262 19.4671989,4.87682391 C31.3115751,1.37843003 29.3063159,-13.2020165 47.4575903,-15.9260752 C65.6088648,-18.6501339 63.9714902,-11.3745857 81.028596,-12.3495122 C98.0857017,-13.3244386 103.635746,-29.1131795 106.849606,-25.0739991 C119.588767,-9.06341321 116.420993,9.34036319 98.8014742,19.9396383 Z'
                id='Shadow'
                opacity='0.16'
                fill='#000000'
                mask='url("#LongHairShavedSides-mask1")'
              />
            </g>
            <path
              d='M90.8779151,52.3613196 C113.02785,65.2272934 140.816672,65.2272934 174.244382,52.3613196 C188.77455,44.5891967 199.330608,29.0424257 182.951044,8.96303524 C180.782417,6.30455678 172.244382,15.6755614 155.351199,16.6504878 C138.458015,17.6254143 142.079654,13.3498661 124.102817,16.0739248 C106.12598,18.7979835 108.111968,33.37843 96.3814191,36.8768239 C84.6508698,40.3752178 86.5778198,49.8635735 90.8779151,52.3613196 Z'
              class='CustomColor'
              fill='#E0C863'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,ie=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairStraight-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M133.506381,81.3351151 C137.363649,83.3307002 140,87.3574737 140,92 L140,105 C140,111.018625 135.569129,116.002364 129.791419,116.867187 C128.048193,137.114792 115.530782,154.282984 98,162.610951 L98,162.610951 L98,181 L102,181 C119.490913,181 135.525121,187.236892 148,197.608051 L148,74 C148,53.5654643 139.717268,35.0654643 126.325902,21.6740982 C112.934536,8.28273213 94.4345357,-3.55271368e-15 74,0 C33.1309285,7.10542736e-15 -7.10542736e-15,33.1309285 0,74 L0,257.716445 C13.5691766,255.775526 24,244.105888 24,230 L24,184.423101 C30.9346808,182.200199 38.3271796,181 46,181 L50,181 L50,162.610951 C38.7726252,157.277407 29.6015372,148.317951 24,137.245847 L24,75.2659587 C33.1467898,72.2910056 42.777598,68.0170651 52.3415164,62.4953343 C67.7445474,53.6023901 80.4313947,42.9409152 89.0661426,32.3970356 C90.8310687,37.5951441 93.1752556,42.8009742 96.1104311,47.8848473 C104.877881,63.0705152 117.224186,74.2337047 130,79.9170491 L130,80.1659169 C130.400422,80.233095 130.794121,80.3201038 131.18005,80.4258987 C131.954509,80.7493055 132.730185,81.0524853 133.506381,81.3351151 Z'
            id='LongHairStraight-path2'
          />
        </defs>
        <mask id='LongHairStraight-mask1' fill='white'>
          <use href='#LongHairStraight-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight' mask='url("#LongHairStraight-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(59.000000, 18.000000)'>
              <mask id='LongHairStraight-mask2' fill='white'>
                <use href='#LongHairStraight-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairStraight-path2' />
            </g>
            <path
              d='M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z'
              id='Shadow'
              opacity='0.24'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,ne=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairStraight2-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M21,157.540812 L21,69.046252 C21,65.5140485 21.3981158,62.0748299 22.1519234,58.7710202 C25.205041,38.7314193 36.7752683,22.8108863 50,13 C69.9046441,-1.75961713 103.441939,-6.01828252 115.047069,11.5221046 C123.698343,7.68103538 136.519049,11.1821114 146,20 C155.565156,29.4150438 163.19967,50.1973768 158.657409,67.2035172 C158.762104,68.4691962 158.815476,69.7490355 158.815476,71.0408963 L158.815476,92.8921195 C157.934142,87.9183006 153.988995,84.0029116 149,83.1659169 L149,83 C142.963851,61.4642087 125.229516,51.5800472 114.429684,41.777113 C97.5353566,60.6732583 44.8226408,60.7398069 27,98 L27,108 C27,114.018625 31.4308707,119.002364 37.2085808,119.867187 C38.9518066,140.114792 51.4692178,157.282984 69,165.610951 L69,166 C71.9303712,209.855112 62.358462,264.797432 0,248 C13.6057325,240.037752 20.8081123,189.055563 21,157.540812 Z M117,165.610951 C134.530782,157.282984 147.048193,140.114792 148.791419,119.867187 C153.87876,119.105701 157.921895,115.150816 158.815476,110.107881 L158.815476,111.47039 L158.815476,111.47039 C158.815476,127.298552 162.572711,142.900645 169.7782,156.993609 L196.726668,209.701177 C203.689761,223.320048 201.645562,239.173573 192.790715,250.468968 C189.966212,213.288807 158.90349,184 121,184 L121,184 L117,184 L117,165.610951 Z'
            id='LongHairStraight2-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairStraight2-path3'
          />
        </defs>
        <mask id='LongHairStraight2-mask1' fill='white'>
          <use href='#LongHairStraight2-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight' mask='url("#LongHairStraight2-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(40.000000, 15.000000)'>
              <mask id='LongHairStraight2-mask2' fill='white'>
                <use href='#LongHairStraight2-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairStraight2-path2' />
            </g>
            <path
              d='M67,113 C84.8226408,80.6646674 137.535357,80.6069148 154.429684,64.2083647 C165.207546,72.6982916 182.891727,79.2665518 188.963018,97.8687161 C182.891727,76.423995 165.207546,66.5601054 154.429684,56.777113 C137.535357,75.6732583 84.8226408,75.7398069 67,113 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,se=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='LongHairStraightStrand-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M8.46130289,88.6935361 C8.16088005,89.7438903 8,90.8531574 8,92 L8,105 C8,111.018625 12.4308707,116.002364 18.2085808,116.867187 C19.9518066,137.114792 32.4692178,154.282984 50,162.610951 L50,181 L46,181 L46,181 C30.3810228,181 15.9236322,185.973344 4.12503673,194.422823 C1.45272918,186.776619 1.52589027e-14,178.557961 1.42108547e-14,170 L0,74 L0,74 C-5.00501776e-15,33.1309285 33.1309285,7.50752664e-15 74,0 L74,0 L74,0 C114.869071,-7.50752664e-15 148,33.1309285 148,74 L148,170 C148,178.557961 146.547271,186.776619 143.874963,194.422823 C132.076368,185.973344 117.618977,181 102,181 L102,181 L98,181 L98,162.610951 C115.530782,154.282984 128.048193,137.114792 129.791419,116.867187 C135.569129,116.002364 140,111.018625 140,105 L140,92 C140,90.3107559 139.650957,88.7030352 139.021057,87.2450254 C126.064756,85.0568849 111.478699,79.7686298 97.1489304,71.4953343 C85.0171781,64.4910638 74.6464677,56.2579416 66.6695083,47.752196 C70.0963393,55.6604321 74.2459335,62.5880409 79.118291,68.5350224 C66.4431108,63.0120855 57.8126345,54.1324394 53.2268621,41.8960843 C52.8490267,42.8180234 52.455505,43.738913 52.0461952,44.6582378 C42.206947,66.7575512 25.5911314,82.6819966 8.46130289,88.6935361 Z'
            id='LongHairStraightStrand-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='LongHairStraightStrand-path3'
          />
        </defs>
        <mask id='LongHairStraightStrand-mask1' fill='white'>
          <use href='#LongHairStraightStrand-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Long-Hair/Straight-+-Strand' mask='url("#LongHairStraightStrand-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
              transform='translate(59.000000, 18.000000)'>
              <mask id='LongHairStraightStrand-mask2' fill='white'>
                <use href='#LongHairStraightStrand-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#LongHairStraightStrand-path2' />
            </g>
            <path
              d='M59,102.418954 L59,108.837908 C78.9453743,105.750496 99.5895621,88.3902571 111.046195,62.6582378 C111.455505,61.738913 111.849027,60.8180234 112.226862,59.8960843 C116.231662,70.5822127 123.321236,78.70828 133.495584,84.2742862 C134.956498,86.4697241 136.497401,88.5566361 138.118291,90.5350224 C125.443111,85.0120855 116.812635,76.1324394 112.226862,63.8960843 C111.849027,64.8180234 111.455505,65.738913 111.046195,66.6582378 C99.5895621,92.3902571 78.9453743,109.750496 59,112.837908 L59,102.418954 Z M207,101.140388 L207,110.280776 C192.046922,109.412723 173.901259,103.744646 156.14893,93.4953343 C145.87623,87.5643877 136.866205,80.7523483 129.502994,73.639773 C128.137922,71.1289501 126.860094,68.4997578 125.669508,65.752196 C133.646468,74.2579416 144.017178,82.4910638 156.14893,89.4953343 C173.901259,99.7446457 192.046922,105.412723 207,106.280776 L207,101.140388 Z'
              id='Shadow'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`,oe=zt`
`,le=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairDreads01-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairDreads01-path2'
          />
          <path
            d='M185.831676,73.928751 C187.588868,74.9173665 188.980206,84.8279256 189.047535,88.6176558 C189.08965,90.9562115 189.127358,99.8740101 186.654049,99.1031293 C185.901013,98.868423 184.751682,94.1472484 184.58821,91.3840965 C184.424737,88.6209446 182.855069,79.2200034 180.446757,74.8947261 C179.896491,73.9063366 178.320781,72.1708928 179.001547,71.3348066 C179.846064,70.2980597 180.666198,70.8995898 181.697184,71.3146953 C182.8124,71.7641482 185.6344,73.8180261 185.831676,73.928751 Z M186.636742,70.9565876 C185.890663,71.9188016 180.795829,69.217693 178.671174,68.0439722 C160.825581,58.1840558 157.361562,55.0486831 129.245707,55.4578453 C101.129853,55.8670074 81.8674779,69.0400225 80.7839818,70.3874406 C80.0301584,71.3248831 79.0677773,73.8279219 78.2764086,80.8005402 C77.48504,87.7731584 78.4952061,100.277789 75.6304859,100.262618 C73.1915094,100.249702 72.6608912,76.4770353 73.7137309,67.0463924 C73.8753757,65.5984852 74.4983655,63.0083957 74.0474223,61.7058802 C73.6532986,60.5682485 71.7253768,60.5705662 72.0331217,58.6750651 C72.3829065,56.5173393 74.5584694,57.5890837 75.5060085,56.5574014 C77.3005851,54.602966 74.5321945,54.1404306 74.0730403,52.4306721 C73.3905494,49.8892108 75.3628102,49.2336489 77.1396512,48.4310821 C79.1060001,47.5437559 78.8504766,48.3231462 80.4463492,46.5849138 C78.3147968,45.0224912 77.543628,42.8939014 80.4624425,41.7519655 C81.7019616,41.2669159 84.9268789,41.9089031 85.8980654,41.1801698 C86.1512899,40.9901231 86.251463,39.9008308 86.4074703,39.6780059 C87.9583471,37.4593592 87.5757186,35.8532324 87.4183976,33.3624282 C87.2889936,31.3242265 87.3064008,29.4532263 89.7466834,29.2496048 C91.3750712,29.1138571 92.6993269,30.4441843 94.1582415,30.835866 C95.7767762,31.2705896 95.1688403,31.5877757 96.4369334,30.7150174 C98.6630755,29.1817309 97.1479982,26.1942888 98.913344,24.4120212 C101.335891,21.9662454 102.923881,25.5513084 104.868882,25.8218105 C109.09126,26.4101607 107.736132,22.1218586 110.235861,20.5504965 C113.223647,18.6738677 113.512672,22.8012592 115.378847,22.948264 C116.996068,23.0750722 119.907657,19.9545311 121.317306,19.3731338 C125.499944,17.6471518 127.572378,22.5039387 131.554013,21.8844657 C134.443268,21.434843 135.223305,21.067662 137.830761,22.7115333 C140.361692,24.3070651 140.96306,23.1664535 143.828996,23.1436082 C145.853806,23.128378 147.093982,24.8202575 148.787729,24.9967295 C149.632467,25.085131 150.441078,24.2050888 151.347562,24.2603811 C154.58496,24.4567186 154.789576,28.6430444 157.361562,29.7955753 C159.711524,30.8487786 162.474332,29.3691289 164.806559,29.0953159 C170.497048,28.4275036 166.60015,33.7425217 166.760755,36.914713 C168.994451,37.4358517 171.261648,35.3509661 173.485163,35.7347015 C176.986623,36.3392753 175.664995,39.9680424 174.853429,42.4144804 C177.279589,42.3707762 183.612828,39.6776748 185.184725,43.1220237 C185.995306,44.8980006 184.106797,47.2689496 184.13767,49.0743937 C184.181023,51.615855 186.048513,53.7186196 186.709327,56.1240021 C187.601032,59.3710203 188.871834,68.0740038 186.636742,70.9565876 Z'
            id='ShortHairDreads01-path3'
          />
        </defs>
        <mask id='ShortHairDreads01-mask2' fill='white'>
          <use href='#ShortHairDreads01-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Dreads-01' mask='url("#ShortHairDreads01-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='ShortHairDreads01-mask1' fill='white'>
                <use href='#ShortHairDreads01-path3' />
              </mask>
              <use
                class='CustomColor'
                fill='var(--avataaar-hair-color)'
                href='#ShortHairDreads01-path3'
              />
            </g>
          </g>
        </g>
      </g>
`,de=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairDreads02-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairDreads02-path2'
          />
          <path
            d='M153.503392,98.8736491 C157.89934,100.654655 161,104.965228 161,110 L161,123 C161,128.28759 157.580126,132.776426 152.8316,134.375285 C151.985668,145.321578 147.992514,155.385777 141.755762,163.66426 C141.964657,164.471736 142.166135,165.290125 142.311896,166.167999 C142.862922,169.494538 142.191903,172.260864 143.956619,175.261034 C144.414366,176.040649 145.140008,176.50834 145.478876,177.405464 C146.012313,178.819858 145.247,181.999219 147.428222,182 C150.534993,182.00039 148.803043,176.034013 148.024863,174.616105 C146.500469,171.843533 145.563369,171.165421 145.642135,167.571852 C147.387236,168.73171 153.172487,170.947581 155.089787,169.887664 C159.522305,167.44029 148.428013,164.951924 147.651918,164.434653 C149.356221,162.768846 151.308063,161.884996 152.848916,159.689035 C154.108583,157.895569 155.254913,155.292428 157.398137,155.187802 C158.584855,155.129634 162.056295,158.072417 163.10825,156.053694 C164.07308,154.203231 161.993578,153.931908 161.181077,153.276828 C159.678802,152.06661 159.340419,153.270972 159.706723,151.14333 C160.792178,152.307873 162.495834,151.571982 162.95061,150.127527 C163.441226,148.569468 161.823998,148.10412 161.853937,147.113692 C161.842192,147.500572 162.687735,141.999153 162.554381,142.176001 C163.413669,141.041128 166.462257,141.392482 167.966582,141.555666 C170.263178,141.804346 170.13091,141.873446 171.222117,143.992109 C172.103838,145.707106 174.419542,149.169502 174.928748,144.633135 C175.050449,143.548232 174.059985,141.228907 173.478827,140.295477 C172.851533,139.287873 170.962455,138.651922 170.567003,137.868403 C169.622984,135.99803 172.731819,131.833707 172.206,129.014288 C173.298856,129.431618 176.063377,135.941423 177.404406,130.612948 C178.111059,127.812658 170.89879,121.667871 173.890225,120.718825 C176.178665,119.993084 178.501504,122.944066 179.140297,124.762907 C179.612624,126.110544 179.400215,129.001405 180.207508,130.116368 C183.243976,134.318949 183.618438,127.375418 183.364612,125.543693 C182.806036,121.517569 181.381252,118.556438 177.742225,117.034295 C179.037272,115.426656 177.396605,114.146948 176.467109,113.140514 C177.994834,111.484467 187.90383,113.244749 185.67495,108.813788 C185.137049,107.742159 183.193837,107.552037 182.208315,107.158911 C179.717195,106.166532 177.22313,104.1482 175.950562,101.597371 C177.79234,101.136708 183.230278,102.394554 182.515816,98.6011044 C181.952817,95.619282 177.112955,96.5335826 175.237767,96.9915137 C176.930155,95.9749301 180.211017,96.8166176 180.67198,94.0499017 C181.203002,90.8666365 177.383839,90.9736042 175.591269,91.6482034 C175.17003,88.2904324 181.122531,85.8176826 182.804663,83.2477249 C183.373237,82.3806618 184.275583,82.0835727 183.551013,80.6153042 C182.244616,77.9719526 178.870779,81.7013778 177.758771,82.7050785 C178.635221,81.0771393 181.079608,74.3018671 180.708517,72.5829664 C180.162561,70.057123 178.355898,69.967723 176.919931,72.0153348 C175.988608,73.3450137 175.729666,76.7176196 175.238294,78.4419859 C173.199533,76.9046179 173.095791,78.6883239 172.991008,76.2507095 C172.923099,74.6707886 174.992708,71.5499862 175.522623,70.0032488 C175.978715,68.6739603 177.190719,66.2433729 176.465593,64.9570277 C174.690293,61.8139729 172.993447,66.1289878 172.525841,67.608968 C171.737261,64.1977131 174.740084,61.5524095 175.629329,58.1778516 C176.170088,56.1298495 177.605245,50.5995409 175.118415,49.6165311 C171.724815,48.2755308 172.918922,54.5725714 172.440664,56.6162793 C172.07606,58.1758997 171.519076,60.6935447 170.302082,61.4622287 C170.125896,61.5734908 167.481496,61.8046035 167.354151,61.6554733 C165.620359,59.6336275 170.392027,55.207741 170.637754,53.3037939 C170.861461,51.5731813 170.198398,50.4792998 168.576831,50.3754553 C167.767833,50.323533 166.456472,51.5751333 166.081721,51.4935411 C164.602506,51.1718572 166.529338,44.4051737 166.669221,42.5269926 C166.819045,40.5238856 166.575417,35.355081 163.186097,37.7423348 C163.413049,35.0454993 163.549887,32.5063826 163.920134,29.8505384 C164.114962,28.45176 165.31836,27.2060156 163.546466,26.0840259 C161.389659,24.7192116 160.195301,27.5757179 159.703512,29.2516754 C158.858129,32.1374612 160.604934,36.6265913 156.546177,36.7183337 C151.880955,36.8237399 155.102123,31.9875502 155.331481,28.8503513 C155.459059,27.1091981 154.318536,22.4287754 152.06891,25.5866651 C151.173373,26.8456828 151.481865,31.2813291 150.985494,32.7702884 C149.878539,32.2772219 151.717562,28.2546115 150.755804,27.2056252 C148.695236,24.958913 146.966535,28.2315783 145.655991,28.8975889 C145.57044,27.4527441 145.468923,26.0067281 145.407913,24.5603216 C145.315305,22.3600662 146.663012,17.7307849 145.2945,16.2125461 C142.95772,13.6238495 141.471891,16.6443209 140.789049,18.7364375 C140.175628,20.6196938 140.091904,22.4795265 137.555716,22.7360147 C137.763741,20.0192692 135.29832,14.3004008 136.520803,12.0087933 C137.073558,10.9742516 138.200031,11.7078002 138.699701,10.5498943 C139.521287,8.64672801 138.176249,7.83939509 136.714154,7.77771298 C129.921887,7.49233563 135.152043,16.9117402 132.745372,19.2693241 C131.646423,18.2285361 132.817064,17.1557359 131.680174,15.6730229 C130.456777,14.0782671 128.507084,14.2133431 126.762486,14.9351799 C126.706116,13.3220757 129.125524,2.01512054 123.682122,7.11833905 C122.329503,8.38945896 122.708203,10.5112454 121.988704,12.004499 C121.293397,13.448563 119.599928,15.6019713 118.647561,16.7751026 C118.138071,14.7079712 118.919891,12.1450405 119.467423,10.1091405 C119.848493,8.69357518 122.399415,4.30399525 121.855094,2.8653967 C120.275192,-1.30204956 115.532497,5.5840942 114.282756,6.69671451 C112.701004,8.10642397 106.402711,12.7415612 104.381766,11.3369268 C103.680648,10.8501066 104.312204,9.04610014 103.355021,8.20948774 C102.885296,7.799575 100.877713,7.60828238 100.304676,7.66059506 C100.663044,6.16656069 99.9590183,4.23411488 98.2500992,4.75060494 C96.1010516,5.40060944 97.031157,8.58855944 95.6691727,9.75271164 C93.1402627,11.9174413 90.1353523,7.6410754 87.4245062,7.76092608 C87.8388134,6.00571874 90.9097688,-0.301081675 86.0261697,1.61691959 C84.7804466,2.10647253 83.8958015,4.9680539 83.5854252,6.15758165 C82.7941498,9.19327834 83.364323,9.74958849 80.0771587,10.6065013 C80.3338947,8.84621888 79.876509,6.65923677 80.7256589,5.08595261 C81.4218191,3.79726501 85.0314735,0.441445987 81.1879964,0.0233349851 C76.4475113,-0.492764683 76.9137424,7.69455926 76.3331882,10.4628367 C72.1267344,7.91396017 69.3589223,11.5606221 66.8533479,14.7153886 C67.3001674,13.2963097 68.4061862,-0.841776108 63.8882057,3.47753307 C62.5963925,4.71468878 64.0256621,6.54407081 63.9388761,7.95573223 C63.8604755,9.23622158 63.4388415,10.377731 62.9428241,11.5742858 C62.1474037,13.4950198 61.2224184,15.460649 59.9693808,17.0979577 C58.3962141,19.1568908 58.9543722,19.318904 57.1484939,17.9212967 C54.7243438,16.0478003 53.5723002,11.2974971 53.6920659,8.39570525 C53.781581,6.23526987 54.8879763,1.84842269 51.3078111,2.86461591 C47.8009276,3.86128948 49.6590375,10.8387852 50.0116201,13.3177814 C50.3931233,16.0052474 50.6468605,18.7543956 50.1948883,21.4906608 C47.2109167,18.4409099 46.7758614,24.7926055 46.1779169,25.8763368 C45.1988562,27.6534061 43.310101,28.5232019 41.8428337,29.7357629 C41.0431153,26.9417195 44.2482173,24.5790605 43.6123112,22.3561622 C42.4186453,18.1910583 39.0417626,24.0719399 38.2998862,25.2263323 C37.6814572,26.1886512 35.6651905,31.6682087 34.9351609,32.1593232 C33.9115906,32.848367 27.3301947,29.6315279 26.6642795,29.0186108 C25.4417603,27.8938883 25.8867201,24.7465391 24.3487748,24.0297774 C19.6293173,21.8322547 22.4173261,29.7638712 23.3441752,31.4035222 C25.7628153,35.687696 26.8597232,40.8604044 26.2928172,45.9077967 C25.4350389,45.6056325 24.378271,44.5964663 23.8253733,43.8305151 C22.7491426,42.3411654 23.1404237,39.9656235 22.017351,38.8436337 C18.7294809,35.5639414 18.3438318,41.7216116 18.6111593,43.6353185 C19.1118632,47.2226407 20.9020846,48.3856217 22.3890054,51.3693961 C23.7571524,54.1197154 21.943774,57.4376663 21.5613192,60.4944442 C18.1321771,57.1944514 3.36588279,59.9510171 7.16521769,64.996067 C9.14262534,67.628878 11.4834592,62.6185731 13.763287,62.7450604 C17.8464603,62.9714884 19.9981829,68.0411331 19.730271,71.5921487 C19.2330959,69.6940575 17.308498,67.8307112 15.9842104,70.148475 C15.0865685,71.7213688 16.6185854,74.4088349 17.3583008,75.9707976 C16.4523462,75.5265303 11.9860935,73.4504198 11.1123314,73.8095815 C7.67255627,75.2239756 12.4125819,77.9610216 13.6493116,78.5079623 C17.8734551,80.3759933 20.5363542,82.427509 21.8496116,87.4998864 C19.4819334,86.7425238 19.8941915,85.6220957 18.2972545,84.4567723 C16.830792,83.3870952 16.5566308,83.9387206 15.2071591,83.5889284 C12.8451619,82.9775728 9.76564295,82.1620417 7.09694168,83.2707581 C5.12707484,84.0898028 1.809527,86.5809011 1.19123199,88.9213077 C0.433581882,91.7946008 2.03522104,92.5273687 4.0949367,91.063785 C6.54565844,89.3249741 6.99233616,85.9593953 10.6783285,86.1030599 C12.4468385,86.1721595 14.198865,87.0989527 15.3182307,88.4286316 C16.1532654,89.4217916 16.6409799,90.859219 17.4378821,91.9242113 C18.1406712,92.8638875 20.0019971,94.1826354 20.3954288,95.1781378 C21.8129983,98.7732678 19.1191629,101.97332 17.3124291,104.492136 C16.8931801,103.937778 13.8353612,102.734196 13.2017458,102.613565 C10.2619363,102.05257 9.16499332,103.411918 11.003339,106.125931 C11.5823428,106.981673 12.8005957,107.342006 13.4385893,108.120059 C14.1501828,108.989074 14.5506213,110.319534 15.2570206,111.263504 C16.6502186,113.127241 18.3720966,114.086046 20.0353361,115.585546 C19.4216552,115.995069 19.4893606,114.962089 18.9332619,115.176024 C18.5290809,115.331791 17.8260425,115.020647 17.3157029,115.190078 C16.4875948,115.464915 16.5976214,116.907417 16.0678004,117.11862 C12.7691062,118.433464 9.44069672,113.504361 6.48191847,113.343909 C4.86832034,113.256461 3.50714906,114.33785 4.28187338,116.365942 C4.82030298,117.777604 7.1521321,118.543555 8.31806645,119.133048 C11.5636759,120.776994 14.7956022,122.001266 18.2658233,120.739516 C21.0634173,123.177911 24.4247131,124.380712 27.9404633,124.415457 C25.9286815,125.412912 23.9404919,126.650458 23.2377959,129.136091 C22.0492883,127.906352 19.1297602,122.18397 17.6048295,126.674272 C16.5600021,129.760719 21.328009,133.54519 23.5253695,134.93577 C20.9696368,135.690791 18.8477815,135.842653 16.2480678,135.542832 C14.8906605,135.386674 11.9114372,133.569004 13.0097195,137.290621 C14.1918233,141.306595 21.2508358,139.501808 23.4900552,138.806518 C23.573221,137.609182 12.720439,150.91495 20.3316507,148.295803 C22.5082405,147.54781 22.7169752,143.295258 25.7496614,142.923213 C29.2527527,142.493 29.604919,146.000291 31.6318019,148.569078 C32.6420388,149.851129 37.301235,152.734182 37.0806939,153.833919 C36.8900419,154.785698 34.3317238,155.329905 33.7876434,156.661927 C33.1549566,158.211397 33.4406255,159.407952 34.3203529,160.740363 C35.8579788,163.072962 38.6803216,163.431343 40.9122645,164.344472 C44.0760798,165.639406 45.222862,167.210738 46.6413081,170.561482 C44.1404008,170.681333 37.0221866,177.920783 41.3837473,179.20908 C43.008912,179.689263 42.7562908,178.242857 43.4326768,177.443722 C43.7062927,176.928403 43.9803807,176.413865 44.2542196,175.898937 C44.712395,174.701211 45.2188422,174.627817 45.7732734,175.678365 C45.8972683,175.647914 47.3835007,176.067196 47.7210266,176.087887 C49.4285338,176.192512 50.5714284,174.896017 51.9872076,174.195261 C53.0103456,173.688921 54.0114437,173.77676 54.7822568,172.609485 C54.6931475,172.74417 55.3356677,170.098476 55.3468697,170.07271 C55.6226004,169.435623 56.3317095,169.525891 56.6573761,168.839152 C47.908417,159.753669 42.1996805,147.719969 41.1683996,134.375285 C36.4198742,132.776426 33,128.28759 33,123 L33,110 C33,104.965228 36.1006595,100.654655 40.4966083,98.8736491 C41.0282518,99.2483349 41.7670825,98.8748923 42,98.0318338 C41.5372601,96.526107 45.2959449,70.1780326 55,63.1563695 C58.618222,60.7183684 78.0082164,60.5372207 97.3126144,60.5504522 C116.408606,60.5635409 135.42084,60.7446886 139,63.1563695 C148.704055,70.1780326 152.46274,96.526107 152,98.0318338 C152.232917,98.8748923 152.971748,99.2483349 153.503392,98.8736491 Z'
            id='ShortHairDreads02-path3'
          />
        </defs>
        <mask id='ShortHairDreads02-mask2' fill='white'>
          <use href='#ShortHairDreads02-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Dreads-02' mask='url("#ShortHairDreads02-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(36.000000, 0.000000)'>
              <mask id='ShortHairDreads02-mask1' fill='white'>
                <use href='#ShortHairDreads02-path3' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairDreads02-path3' />
            </g>
          </g>
        </g>
      </g>
`,ce=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairFrizzle-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z'
            id='ShortHairFrizzle-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairFrizzle-mask2' fill='white'>
          <use href='#ShortHairFrizzle-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Frizzle' mask='url("#ShortHairFrizzle-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairFrizzle-mask1' fill='white'>
              <use href='#ShortHairFrizzle-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairFrizzle-path1'
            />
          </g>
        </g>
      </g>
`,pe=(zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShaggy-path2' x='0' y='0' width='264' height='280' />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
          <path
            d='M198.74696,37.856181 C193.606255,34.0244119 187.528383,30.7396605 181.187893,29.4782789 C174.741035,28.1960616 170.829392,27.8846292 164.483286,29.4052984 C162.85043,29.796545 162.299428,30.1854765 160.862131,29.2568033 C159.651446,28.4743102 151.200134,19.7668788 125.441738,24.5998777 C99.4069464,29.4847361 91.6728211,68.675365 82.0154166,70.1662691 C78.5349852,70.703365 74.2336661,69.781637 74.0992189,67.6388757 C70.1355043,73.6726057 69.0913088,81.6460323 70.7717335,88.7129442 C72.2186099,94.7989286 75.2686121,100.517478 80.7607964,103.849523 C85.4865987,106.716901 92.0203357,107.966046 97.4817987,107.437218 C99.9669245,107.196782 102.227091,106.673576 104.513684,105.671152 C107.272659,104.461694 109.470722,102.280238 112.177835,101.127995 C109.351471,103.576015 106.275372,105.735312 103.001731,107.546357 C101.362599,108.452872 99.6980301,109.07761 97.8887739,109.570058 C96.6533133,109.906073 94.127556,111.05104 92.9327267,110.752066 C100.740244,112.148383 108.093217,110.931649 115.252282,107.589351 C118.483309,106.08125 121.59079,104.256976 124.44325,102.112561 C127.276221,99.9826977 130.537639,97.8062025 132.753871,95.0036468 C131.823641,96.2071517 133.450882,94.4169423 133.665931,94.1980029 C134.274082,93.578226 134.869349,92.9458816 135.453055,92.302954 C136.455298,91.1993278 137.450603,90.0751967 138.383805,88.9120401 C140.37772,86.426318 142.234875,83.8298033 143.891185,81.1086057 C145.568637,78.352682 152.249704,67.2357231 154.266412,64.6190342 C152.361358,70.327001 150.286511,76.0372828 147.858864,81.5445 C152.572444,80.0744315 157.142657,76.0002417 160.15401,72.2035294 C163.545911,67.9275978 165.554691,62.9359795 166.262273,57.5379012 C170.087576,67.953725 179.047309,76.1675881 188.294435,81.8328914 C186.29094,78.1026546 183.238626,74.9478777 181.242068,71.1548033 C190.433037,80.4838679 205.809898,85.0481908 209.837367,98.7289227 C210.869671,93.9714569 214.189889,90.1482867 215.184533,85.2955724 C216.28885,79.9070851 217.081329,74.1868816 216.90592,68.6796644 C216.508524,56.4379129 208.273882,44.9574883 198.74696,37.856181 Z'
            id='ShortHairShaggy-path1'
          />
        </defs>
        <mask id='ShortHairShaggy-mask2' fill='white'>
          <use href='#ShortHairShaggy-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Shaggy' mask='url("#ShortHairShaggy-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShaggy-mask1' fill='white'>
              <use href='#ShortHairShaggy-path1' transform='scale(-1, 1)' />
            </mask>
            {/*XXX: some how the mask is broken, fix it later.*/}
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              transform='translate(143.465161, 67.234158) scale(-1, 1) translate(-143.465161, -67.234158) '
              href='#ShortHairShaggy-path1'
            />
            <HairColor maskID='ShortHairShaggy-mask1' />
          </g>
        </g>
      </g>
`,zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShaggyMullet-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z M195.90592,68.6796644 C196.081329,74.1868816 195.28885,79.9070851 194.184533,85.2955724 C193.189889,90.1482867 189.869671,93.9714569 188.837367,98.7289227 C184.809898,85.0481908 169.433037,80.4838679 160.242068,71.1548033 C162.238626,74.9478777 165.29094,78.1026546 167.294435,81.8328914 C158.047309,76.1675881 149.087576,67.953725 145.262273,57.5379012 C144.554691,62.9359795 142.545911,67.9275978 139.15401,72.2035294 C136.142657,76.0002417 131.572444,80.0744315 126.858864,81.5445 C129.286511,76.0372828 131.361358,70.327001 133.266412,64.6190342 C131.249704,67.2357231 124.568637,78.352682 122.891185,81.1086057 C121.234875,83.8298033 119.37772,86.426318 117.383805,88.9120401 C116.450603,90.0751967 115.455298,91.1993278 114.453055,92.302954 C113.869349,92.9458816 113.274082,93.578226 112.665931,94.1980029 C112.450882,94.4169423 110.823641,96.2071517 111.753871,95.0036468 C109.537639,97.8062025 106.276221,99.9826977 103.44325,102.112561 C100.59079,104.256976 97.4833088,106.08125 94.2522818,107.589351 C87.0932166,110.931649 79.7402436,112.148383 71.9327267,110.752066 C73.127556,111.05104 75.6533133,109.906073 76.8887739,109.570058 C78.6980301,109.07761 80.3625987,108.452872 82.0017312,107.546357 C85.2753717,105.735312 88.3514706,103.576015 91.1778346,101.127995 C88.4707222,102.280238 86.2726593,104.461694 83.513684,105.671152 C81.2270908,106.673576 78.9669245,107.196782 76.4817987,107.437218 C71.0203357,107.966046 64.4865987,106.716901 59.7607964,103.849523 C54.2686121,100.517478 51.2186099,94.7989286 49.7717335,88.7129442 C48.0913088,81.6460323 49.1355043,73.6726057 53.0992189,67.6388757 C53.2336661,69.781637 57.5349852,70.703365 61.0154166,70.1662691 C70.6728211,68.675365 76.4180436,32.1184491 101.441738,25.5998777 C121.403017,20.3995724 135.651446,29.4743102 136.862131,30.2568033 C138.299428,31.1854765 138.85043,30.796545 140.483286,30.4052984 C146.829392,28.8846292 153.741035,28.1960616 160.187893,29.4782789 C166.528383,30.7396605 172.606255,34.0244119 177.74696,37.856181 C187.273882,44.9574883 195.508524,56.4379129 195.90592,68.6796644 Z'
            id='ShortHairShaggyMullet-path2'
          />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairShaggyMullet-path3'
          />
        </defs>
        <mask id='ShortHairShaggyMullet-mask1' fill='white'>
          <use href='#ShortHairShaggyMullet-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Shaggy-Mullet' mask='url("#ShortHairShaggyMullet-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShaggyMullet-mask2' fill='white'>
              <use href='#ShortHairShaggyMullet-path2' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShaggyMullet-path2'
            />
            <path
              d='M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z'
              id='Shadow'
              stroke='none'
              opacity='0.16'
              fill='#000000'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
`),ve=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortCurly-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M94.2519269,52.0221149 C94.3749353,51.9677149 94.0696712,51.9468149 93.3361345,51.9595149 C94.2276637,51.9577149 94.5329279,51.9785149 94.2519269,52.0221149 M86.1169775,36.3015924 C86.1148422,36.2819924 86.1337548,36.4526924 86.1169775,36.3015924 M193.765056,70.7656665 C193.500946,67.448734 193.03295,64.1518864 192.246676,60.9110823 C191.622233,58.3353492 190.769007,55.8775343 189.760006,53.4200433 C189.150703,51.9353766 187.727538,49.8961062 187.560324,48.2944933 C187.395466,46.7168527 188.626521,44.969138 188.889285,43.1323368 C189.144311,41.3447761 189.100909,39.4652134 188.734183,37.6938503 C187.901144,33.6710288 185.140271,29.9300447 180.877167,28.8814158 C179.925362,28.6471994 177.913417,28.9358396 177.240862,28.3815597 C176.469729,27.7459682 175.932761,25.5806808 175.234637,24.7121687 C173.244224,22.2362125 170.13984,20.6417265 166.865887,21.1976261 C164.454917,21.606776 165.839391,22.1053363 164.032005,20.6864317 C163.027041,19.8976114 162.276095,18.6931622 161.300066,17.8392279 C159.832826,16.5563826 158.149588,15.4581893 156.408146,14.556958 C151.851325,12.19892 146.654249,10.4848961 141.564162,9.64942693 C132.278934,8.12523827 122.368926,9.45408458 113.368668,11.8688141 C108.890239,13.0703477 104.381531,14.5951842 100.222053,16.6117782 C98.4385542,17.4764029 97.4090304,18.1936301 95.5494951,18.4200717 C92.6207355,18.7767416 90.1404579,18.7589243 87.3661268,20.0009517 C78.8298269,23.8229236 74.9849256,32.6897818 78.3066539,41.1750259 C78.974835,42.8815988 79.8795374,44.3801954 81.1267416,45.7586062 C82.6474761,47.4392631 83.1975648,47.1085093 81.8877817,49.0411999 C79.9289949,51.9311653 78.2777195,55.0129095 76.9332826,58.2128958 C73.4043038,66.6145606 72.8138416,76.0771643 73.043634,85.0373203 C73.1240445,88.1741362 73.2586228,91.3495022 73.753198,94.4561907 C73.966841,95.8009106 74.0267283,98.3293468 75.0353925,99.3271154 C75.5471264,99.8331265 76.2762042,100.115288 77.0035997,99.9137903 C78.7130802,99.4401742 78.1253096,98.1787097 78.1650102,97.0076274 C78.364859,91.1240324 78.0950295,85.9191145 79.4943071,80.1064647 C80.5278683,75.8118486 82.2504702,71.9114806 84.4827873,68.0713675 C87.3213795,63.1871608 90.3857268,58.8977279 94.2895061,54.7155226 C95.2073299,53.7320079 95.4078515,53.3150832 96.6385698,53.243814 C97.5705244,53.1900382 98.9338023,53.8282213 99.8398505,54.0491558 C101.837665,54.5360539 103.83918,55.0174448 105.873331,55.3452831 C109.613261,55.9481556 113.316519,55.9886494 117.090094,55.8704074 C124.516459,55.6381346 131.974787,55.1172217 139.175061,53.2470535 C143.956964,52.00535 148.196516,49.7762443 152.776887,48.1422364 C152.858644,48.1130808 154.006596,47.2951049 154.207791,47.3284719 C154.488723,47.3747968 156.184746,49.1542588 156.471061,49.3784327 C158.696649,51.1238798 161.137899,51.8566566 163.541467,53.2081794 C166.504881,54.8745825 163.634999,52.4899804 165.269452,54.5668292 C165.745859,55.1716454 165.989782,56.2931632 166.371984,56.9783192 C167.587899,59.1610999 169.279548,61.0795367 171.302932,62.6017816 C173.258018,64.0725184 176.196198,64.7829426 177.193087,66.697168 C177.961865,68.1740599 178.220929,70.1812592 178.841334,71.7579279 C180.468722,75.8931602 182.617937,79.7494709 184.767152,83.6443317 C186.498502,86.7830913 188.392354,89.5250111 188.584801,93.1117947 C188.651754,94.3603012 187.463764,101.849397 190.357534,99.5716982 C190.786502,99.2341415 191.711391,95.415733 191.901483,94.7678314 C192.672616,92.135083 192.94682,89.3866841 193.29605,86.6816947 C193.990474,81.3021672 194.218584,76.1837441 193.765056,70.7656665'
            id='ShortHairShortCurly-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortCurly-mask2' fill='white'>
          <use href='#ShortHairShortCurly-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Curly' mask='url("#ShortHairShortCurly-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortCurly-mask1' fill='white'>
              <use href='#ShortHairShortCurly-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortCurly-path1'
            />
          </g>
        </g>
      </g>
`,ue=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortFlat-path2' x='0' y='0' width='264' height='280' />

          <path
            d='M180.14998,39.9204083 C177.390206,37.1003988 174.185913,34.7068297 171.069252,32.3065503 C170.381566,31.777442 169.682843,31.2610833 169.010544,30.7118441 C168.857687,30.5870323 167.291999,29.4657388 167.104691,29.0530544 C166.653816,28.0602634 166.915042,28.8332916 166.977255,27.6485857 C167.055857,26.150508 170.11064,21.9193194 167.831176,20.9490079 C166.828413,20.522232 165.039628,21.6579526 164.077671,22.0330592 C162.196235,22.7671676 160.291721,23.3932399 158.346734,23.9330847 C159.278588,22.0763407 161.055333,18.3594977 157.71591,19.3543018 C155.114345,20.1293431 152.690052,22.1219709 150.075777,23.0594018 C150.940735,21.6415124 154.399901,17.2479341 151.274209,17.0023366 C150.301549,16.925839 147.471201,18.7503735 146.423952,19.1395717 C143.287223,20.3054888 140.083264,21.0590571 136.789999,21.6525844 C125.59203,23.6707114 112.497238,23.0953019 102.1368,28.1934632 C94.1494796,32.1236942 86.262502,38.2220278 81.648386,45.987539 C77.2011742,53.472559 75.537818,61.6641751 74.6069673,70.2412987 C73.9239644,76.535909 73.8684412,83.0425652 74.1878671,89.3599905 C74.2922241,91.4297869 74.5250203,100.970847 77.5319724,98.0813859 C79.0300967,96.641688 79.019059,90.8282073 79.3963495,88.8604076 C80.1472513,84.9452748 80.870057,81.0126951 82.122006,77.2227096 C84.3282191,70.5439339 86.9307879,63.4296587 92.4269209,58.8297383 C95.9539853,55.8782066 98.4307906,51.8889248 101.806002,48.9112229 C103.322188,47.5738572 102.165231,47.7130963 104.602902,47.888571 C106.240504,48.006337 107.885464,48.0512961 109.52641,48.0942421 C113.322394,48.1928837 117.124399,48.16772 120.921387,48.1811407 C128.56821,48.208653 136.179243,48.316689 143.818708,47.9164188 C147.213653,47.7385955 150.617965,47.6423024 154.00388,47.3282597 C155.895349,47.152785 159.251496,45.9405668 160.808488,46.8669256 C162.233362,47.7144383 163.71309,50.4817719 164.736257,51.615144 C167.153525,54.2935659 170.035717,56.3392052 172.862385,58.5354911 C178.756547,63.114945 181.732392,68.8666908 183.522515,76.023241 C185.305949,83.1532854 184.805905,89.76815 187.013456,96.78479 C187.401784,98.0184813 188.428965,100.14498 189.695296,98.2389151 C189.930434,97.8849461 189.869559,95.9390277 189.869559,94.819339 C189.869559,90.2995934 191.014141,86.9083772 190.999758,82.3591197 C190.943566,68.5271489 190.49637,50.4908308 180.14998,39.9204083 Z'
            id='ShortHairShortFlat-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortFlat-mask2' fill='white'>
          <use href='#ShortHairShortFlat-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Flat' mask='url("#ShortHairShortFlat-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortFlat-mask1' fill='white'>
              <use href='#ShortHairShortFlat-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortFlat-path1'
            />
          </g>
        </g>
      </g>
`,me=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortRound-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M167.308863,35.006118 C147.121091,23.3065109 127.128954,25.2219854 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 102.268658,60.045883 111.066257,55.4635848 C110.302881,56.8686624 107.359637,59.1432635 108.379389,60.7268592 C109.083576,61.8207003 111.749474,61.4890712 113.022219,61.4539693 C116.370996,61.3623702 119.734993,60.7796791 123.042844,60.306974 C128.255923,59.5618115 133.140585,58.0517626 138.046555,56.2181078 C142.06299,54.7164165 146.650012,53.3257139 149.66868,50.1404701 C154.539813,55.1881187 160.809849,59.9345599 167.070414,63.1428706 C172.68835,66.0222267 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 Z'
            id='ShortHairShortRound-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortRound-mask2' fill='white'>
          <use href='#ShortHairShortRound-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Round' mask='url("#ShortHairShortRound-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortRound-mask1' fill='white'>
              <use href='#ShortHairShortRound-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortRound-path1'
            />
          </g>
        </g>
      </g>
`,fe=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairShortWaved-path2' x='0' y='0' width='264' height='280' />
          <path
            d='M183.679824,38.9488198 C189.086072,33.9985622 190.387393,23.9615454 187.317704,17.4493246 C183.549263,9.45385312 175.901319,8.45217737 168.572342,11.9686703 C161.664469,15.2835661 155.515175,16.3878671 147.950196,14.7817319 C140.691624,13.2406923 133.805566,10.5226172 126.303388,10.0762471 C113.978028,9.34292483 102.003367,13.914565 93.6031232,23.1292512 C92.0003538,24.8871655 90.7089493,26.8971594 89.4882796,28.9343872 C88.5115454,30.5644351 87.4105298,32.3133822 86.9950459,34.1921885 C86.7973853,35.0855929 87.165272,37.2898774 86.7203704,38.0218712 C86.2391099,38.8123183 84.4244668,39.5373375 83.6510124,40.1238625 C82.0842713,41.3125222 80.7267597,42.6539573 79.4713836,44.1710842 C76.8052796,47.3926541 75.3376994,50.7577001 74.1034777,54.7428152 C70.0005333,67.9877849 69.6528094,83.7412616 74.9569218,96.7467724 C75.6639385,98.4811062 77.8550622,102.098564 79.1431613,98.3847912 C79.3976741,97.6508047 78.8086588,95.1907873 78.8099809,94.4501584 C78.8146084,91.7300906 80.3160587,73.7213568 86.857084,63.6330196 C88.9862338,60.3491948 98.8298903,48.0522456 100.840541,47.9536058 C101.9058,49.6464245 112.720532,60.4624529 140.783385,59.1948919 C153.445253,58.6229725 163.18265,52.9341181 165.520833,50.4680909 C166.549375,56.0008881 178.51323,64.2839965 180.33625,67.6921976 C185.602529,77.5376948 186.770677,97.9957204 188.780988,97.9573368 C190.791299,97.9189532 192.234429,92.7197798 192.647929,91.7270713 C195.719601,84.351669 196.242509,75.0948338 195.914948,67.1684434 C195.487565,56.9663626 191.276535,45.9419513 183.679824,38.9488198 Z'
            id='ShortHairShortWaved-path1'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairShortWaved-mask2' fill='white'>
          <use href='#ShortHairShortWaved-path2' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Short-Waved' mask='url("#ShortHairShortWaved-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id='ShortHairShortWaved-mask1' fill='white'>
              <use href='#ShortHairShortWaved-path1' />
            </mask>
            <use
              class='CustomColor'
              stroke='none'
              fill='var(--avataaar-hair-color)'
              fillRule='evenodd'
              href='#ShortHairShortWaved-path1'
            />
          </g>
        </g>
      </g>
`,ge=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairSides-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'
            id='ShortHairSides-path2'
          />
          <path
            d='M6,28 C0.923687084,28.0709555 0,26.9937684 0,23 C1.30010922e-16,17.3439836 4.0408529,6.77808536 8,2 C9.17612094,-0.170695788 11.6189856,-1.43187215 11,3 C8.3404922,11.4766099 11.4173429,27.914487 6,28 Z M120,28 C114.582657,27.914487 117.659508,11.4766099 115,3 C114.381014,-1.43187215 116.823879,-0.170695788 118,2 C121.959147,6.77808536 126,17.3439836 126,23 C126,26.9937684 125.076313,28.0709555 120,28 Z'
            id='ShortHairSides-path3'
          />
        </defs>
        <mask id='ShortHairSides-mask2' fill='white'>
          <use href='#ShortHairSides-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/Sides' mask='url("#ShortHairSides-mask2")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(70.000000, 74.000000)'>
              <mask id='ShortHairSides-mask1' fill='white'>
                <use href='#ShortHairSides-path3' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairSides-path3' />
            </g>
          </g>
        </g>
      </g>
`,Ce=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairTheCaesar-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z'
            id='ShortHairTheCaesar-path2'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairTheCaesar-mask1' fill='white'>
          <use href='#ShortHairTheCaesar-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/The-Caesar' mask='url("#ShortHairTheCaesar-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(75.000000, 34.000000)'>
              <mask id='ShortHairTheCaesar-mask2' fill='white'>
                <use href='#ShortHairTheCaesar-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairTheCaesar-path2' />
            </g>
          </g>
        </g>
      </g>
`,Me=zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='ShortHairTheCaesarSidePart-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z'
            id='ShortHairTheCaesarSidePart-path2'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='ShortHairTheCaesarSidePart-mask1' fill='white'>
          <use href='#ShortHairTheCaesarSidePart-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Short-Hair/The-Caesar-+-Side-Part' mask='url("#ShortHairTheCaesarSidePart-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hair'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(75.000000, 34.000000)'>
              <mask id='ShortHairTheCaesarSidePart-mask2' fill='white'>
                <use href='#ShortHairTheCaesarSidePart-path2' />
              </mask>
              <use class='CustomColor' fill='var(--avataaar-hair-color)' href='#ShortHairTheCaesarSidePart-path2' />
            </g>
          </g>
        </g>
      </g>
`,ze={NoHair:oe,Eyepatch:Vt,Hat:qt,Hijab:Gt,Turban:zt`
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id='Turban-path1' x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id='Turban-path2'
          />
          <path
            d='M83.9715543,55.8170792 C107.404232,69.414362 145.114919,82.1112884 139,138 C158.377483,132.360101 168.044149,116.801277 168,91.3235294 C167.918252,44.1482824 115.850571,6.80154462e-15 86,0 C85.3259486,0 84.6559706,0.0296343787 83.9916946,0.0880669528 C83.3328225,0.0296343217 82.6684563,0 82.0002187,0 C52.0737254,6.80154462e-15 0.0804892181,44.1482783 0.00021866091,91.3235294 C-0.0442202163,117.440393 9.62244645,132.999216 29.0002187,138 C22.8618971,82.1112789 60.5101967,69.4143577 83.9715662,55.8170722 Z'
            id='Turban-path3'
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id='Turban-mask1' fill='white'>
          <use href='#Turban-path1' />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Turban' mask='url("#Turban-mask1")'>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Behind'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id='Turban-mask2' fill='white'>
                <use href='#Turban-path2' />
              </mask>
              <g id='Mask-Hair' />
            </g>
            <g
              id='Turban'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <path
                d='M74.5304294,97.5 C73.529284,95.0905557 73,92.5798498 73,90 C73,71.7746033 99.4151998,57 132,57 C164.5848,57 191,71.7746033 191,90 C191,92.5798498 190.470716,95.0905557 189.469571,97.5 C183.398106,82.8878805 159.972341,72 132,72 C104.027659,72 80.6018941,82.8878805 74.5304294,97.5 Z'
                id='Band'
                fill='#EDECE3'
              />
              <g transform='translate(48.000000, 3.000000)'>
                <mask id='Turban-mask3' fill='white'>
                  <use href='#Turban-path3' />
                </mask>
                <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#Turban-path3' />
              </g>
              <path
                d='M48.0110963,96.0123559 C48.3807929,121.112082 58.0438337,136.107963 77.0002187,141 C57.6224465,136.289117 47.9557798,121.632254 48.0002187,97.0294118 C48.0008313,96.6902213 48.0044682,96.351197 48.0110963,96.0123559 Z M152.645822,30.4681115 C153.39011,36.1953086 152.126202,42.8891982 148.000219,50.135763 C136.847465,71.5667661 76.561434,72.0039826 76.3339794,129.679698 C76.1051437,67.7612631 136.805324,67.3799133 148.000219,44.5441176 C150.669864,39.5668152 152.141299,34.8351296 152.645822,30.4681115 Z'
                id='Shadow'
                opacity='0.16'
                fill='#000000'
              />
            </g>
          </g>
        </g>
      </g>
`,WinterHat1:zt`
      <g id="Top">
        <defs>
          <rect id='WinterHat1-path3' x="0" y="0" width="264" height="280" />
          <path
            d="M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z"
            id='WinterHat1-path1'
          />
          <filter
            x="-0.8%"
            y="-2.8%"
            width="101.7%"
            height="111.1%"
            filterUnits="objectBoundingBox"
            id='filter1'>
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
              type="matrix"
              in="shadowOffsetOuter1"
            />
          </filter>
          <rect id='WinterHat1-path2' x="74" y="50" width="118" height="36" rx="8" />
        </defs>
        <mask id='WinterHat1-mask1' fill="white">
          <use href='#WinterHat1-path3' />
        </mask>
        <g id="Mask" />
        <g
          id="Top/Accessories/Winter-Hat-1"
          transform="translate(-1.000000, 0.000000)">
          <g
            id="hat"
            strokeWidth="1"
            fillRule="evenodd"
            transform="translate(63.000000, 20.000000)">
            <path
              d="M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z"
              id="inside"
              fill="#F4F4F4"
            />
            <mask id='WinterHat1-mask2' fill="white">
              <use href='#WinterHat1-path1' />
            </mask>
            <use class='CustomColor' fill="var(--avataaar-hat-color)" href='#WinterHat1-path1' />
          </g>
          <g id="hat-front">
            <use
              fill="black"
              opacity="1"
              filter='url("#WinterHat1-path2")'
              href='#WinterHat1-path2'
            />
            <use fill="#F4F4F4" fillRule="evenodd" href='#WinterHat1-path2' />
          </g>
        </g>
      </g>
`,WinterHat2:zt`
      <g id='Top'>
        <defs>
          <rect id='WinterHat2-path3' x='0' y='0' width='264' height='280' />
          <path
            d='M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z'
            id='WinterHat2-path1'
          />
          <path
            d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'
            id='WinterHat2-path2'
          />
        </defs>
        <mask id='WinterHat2-mask1' fill='white'>
          <use href='#WinterHat2-path3' />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-2'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(61.000000, 0.000000)'
          >
            <g
              id='string'
              transform='translate(0.000000, 176.000000)'
              fill='#F4F4F4'
            >
              <circle id='puff' cx='9' cy='65' r='9' />
              <rect x='8' y='0' width='2' height='58' />
            </g>
            <g
              id='string'
              transform='translate(126.000000, 168.000000)'
              fill='#F4F4F4'
            >
              <circle id='puff' cx='9' cy='65' r='9' />
              <rect x='8' y='0' width='2' height='58' />
            </g>
            <circle id='puff' fill='#F4F4F4' cx='72' cy='20' r='20' />
            <mask id='WinterHat2-mask2' fill='white'>
              <use href='#WinterHat2-path1' />
            </mask>
            <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#WinterHat2-path1' />
            <HatColor maskID='WinterHat2-mask2' defaultColor='Blue01' />
            <rect
              id='color-dark'
              opacity='0.2'
              fill='#000000'
              x='-1'
              y='21'
              width='146'
              height='46'
              mask='url("#WinterHat2-mask2")'
            />
            <g
              id='light-triangles'
              transform='translate(29.000000, 32.000000)'
              fill='#FFFFFF'
              opacity='0.5'
            >
              <polygon
                id='Triangle'
                transform='translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000) '
                points='12.5 0 25 18 0 18'
              />
              <polygon
                id='Triangle'
                transform='translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000) '
                points='43.5 0 56 18 31 18'
              />
              <polygon
                id='Triangle'
                transform='translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000) '
                points='74.5 0 87 18 62 18'
              />
            </g>
            <g
              id='dark-triangles'
              transform='translate(13.000000, 41.000000)'
              fill='#000000'
              opacity='0.5'
            >
              <polygon id='Triangle' points='12.5 0 25 18 0 18' />
              <polygon id='Triangle' points='43.5 0 56 18 31 18' />
              <polygon id='Triangle' points='74.5 0 87 18 62 18' />
              <polygon id='Triangle' points='105.5 0 118 18 93 18' />
            </g>
          </g>
        </g>
      </g>
`,WinterHat3:zt`
      <g id='Top'>
        <defs>
          <rect id='WinterHat3-path3' x='0' y='0' width='264' height='280' />
          <path
            d='M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z'
            id='WinterHat3-path1'
          />
          <filter
            x='-0.7%'
            y='-1.7%'
            width='101.4%'
            height='106.8%'
            filterUnits='objectBoundingBox'
            id='filter1'
          >
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
          <path
            d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'
            id='WinterHat3-path2'
          />
        </defs>
        <mask id='WinterHat3-mask1' fill='white'>
          <use href='#WinterHat3-path3' />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-3'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(67.000000, 12.000000)'
          >
            <circle id='puff' fill='#F4F4F4' cx='66' cy='8' r='20' />
            <mask id='WinterHat3-mask2' fill='white'>
              <use href='#WinterHat3-path1' />
            </mask>
            <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#WinterHat3-path1' />
          </g>
          <g id='hat-front'>
            <use
              fill='black'
              opacity='1'
              filter='url("#WinterHat3-path2")'
              href='#WinterHat3-path2'
            />
            <use fill='#F4F4F4' fillRule='evenodd' href='#WinterHat3-path2' />
          </g>
        </g>
      </g>
`,WinterHat4:zt`
      <g id='Top'>
        <defs>
          <rect id='WinterHat4-path5' x='0' y='0' width='264' height='280' />
          <path
            d='M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'
            id='WinterHat4-path1'
          />
          <path
            d='M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'
            id='WinterHat4-path2'
          />
          <path
            d='M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z'
            id='WinterHat4-path3'
          />
          <filter
            x='-0.7%'
            y='-1.7%'
            width='101.4%'
            height='106.8%'
            filterUnits='objectBoundingBox'
            id='filter1'
          >
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
          <path
            d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'
            id='WinterHat4-path4'
          />
        </defs>
        <mask id='WinterHat4-mask1' fill='white'>
          <use href='#WinterHat4-path5' />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-4'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(65.000000, 4.000000)'
          >
            <mask id='WinterHat4-mask2' fill='white'>
              <use href='#WinterHat4-path1' />
            </mask>
            <use class='CustomColor' fill='var(--avataaar-hat-color)' href='#WinterHat4-path1' />
            <mask id='WinterHat4-mask3' fill='white'>
              <use href='#WinterHat4-path2' />
            </mask>
            <use
              id='shadow'
              opacity='0.24'
              fill='#000000'
              href='#WinterHat4-path2'
            />
            <mask id='WinterHat4-mask4' fill='white'>
              <use href='#WinterHat4-path3' />
            </mask>
            <use
              id='light'
              opacity='0.300000012'
              fill='#FFFFFF'
              href='#WinterHat4-path3'
            />
          </g>
          <g id='hat-front'>
            <use
              fill='black'
              opacity='1'
              filter='url("#WinterHat4-path4")'
              href='#WinterHat4-path4'
            />
            <use fill='#F4F4F4' fillRule='evenodd' href='#WinterHat4-path4' />
          </g>
        </g>
      </g>
`,LongHairBigHair:Ut,LongHairBob:Yt,LongHairBun:Jt,LongHairCurly:$t,LongHairCurvy:Xt,LongHairDreads:Kt,LongHairFrida:Qt,LongHairFro:te,LongHairFroBand:ee,LongHairNotTooLong:he,LongHairShavedSides:re,LongHairMiaWallace:ae,LongHairStraight:ie,LongHairStraight2:ne,LongHairStraightStrand:se,ShortHairDreads01:le,ShortHairDreads02:de,ShortHairFrizzle:ce,ShortHairShaggyMullet:pe,ShortHairShortCurly:ve,ShortHairShortFlat:ue,ShortHairShortRound:me,ShortHairShortWaved:fe,ShortHairSides:ge,ShortHairTheCaesar:Ce,ShortHairTheCaesarSidePart:Me},ye={Concerned:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Concerned' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'
            id='Mouth1'
          />
        </defs>
        <mask id='MouthMask1' fill='white'>
          <use
            href='#Mouth1'
            transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '
          />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '
          href='#Mouth1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#MouthMask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#MouthMask1")'
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 24.000000)'>
            <circle id='friend?' cx='11' cy='11' r='11' />
            <circle id='How-you-doing' cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    </g>
`,Default:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Default'
        transform='translate(2.000000, 52.000000)'
        opacity='0.699999988'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id='Mouth'
        />
      </g>
    </g>
`,Disbelief:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Disbelief'
        transform='translate(2.000000, 52.000000)'
        opacity='0.699999988'
        fill='#000000'>
        <path
          d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
          id='Mouth'
          transform='translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) '
        />
      </g>
    </g>
`,Eating:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Eating' transform='translate(2.000000, 52.000000)'>
        <g
          id='Om-Nom-Nom'
          opacity='0.599999964'
          strokeWidth='1'
          transform='translate(28.000000, 6.000000)'
          fill='#000000'>
          <path
            d='M16.1906378,10.106319 C16.0179484,4.99553347 11.7923466,0.797193688 6.29352385,0 C9.66004124,1.95870633 11.9804619,5.49520667 11.9804619,9.67694348 C11.9804619,15.344608 6.50694731,20.2451296 0.176591694,20.2451296 C0.11761218,20.2451296 0.0587475828,20.2447983 0,20.244138 L8.8963743e-11,20.244138 C1.35764479,20.7317259 2.83995964,21 4.39225962,21 C9.71395931,21 14.2131224,17.8469699 15.6863572,13.5136402 C18.1609431,15.6698775 21.8629994,17.0394229 26,17.0394229 C30.1370006,17.0394229 33.8390569,15.6698775 36.3136428,13.5136402 C37.7868776,17.8469699 42.2860407,21 47.6077404,21 C49.1600404,21 50.6423552,20.7317259 52,20.244138 L52,20.244138 C51.9412524,20.2447983 51.8823878,20.2451296 51.8234083,20.2451296 C45.4930527,20.2451296 40.0195381,15.344608 40.0195381,9.67694348 C40.0195381,5.49520667 42.3399588,1.95870633 45.7064761,0 C40.2076534,0.797193688 35.9820516,4.99553347 35.8093622,10.106319 C33.2452605,11.8422828 29.7948543,12.9056086 26,12.9056086 C22.2051457,12.9056086 18.7547395,11.8422828 16.1906378,10.106319 Z'
            id='Delicious'
          />
        </g>
        <circle
          id='Redish'
          opacity='0.2'
          fill='#FF4646'
          cx='17'
          cy='15'
          r='9'
        />
        <circle
          id='Redish'
          opacity='0.2'
          fill='#FF4646'
          cx='91'
          cy='15'
          r='9'
        />
      </g>
    </g>
`,Grimace:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Grimace' transform='translate(2.000000, 52.000000)'>
        <defs>
          <rect id='Grimace-path1' x='24' y='9' width='60' height='22' rx='11' />
        </defs>
        <rect
          id='Mouth'
          opacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          x='22'
          y='7'
          width='64'
          height='26'
          rx='13'
        />
        <mask id='Grimace-mask1' fill='white'>
          <use href='#Grimace-path1' />
        </mask>
        <use
          id='Mouth'
          fill='#FFFFFF'
          fillRule='evenodd'
          href='#Grimace-path1'
        />
        <path
          d='M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z'
          id='Grimace-Teeth'
          fill='#E6E6E6'
          fillRule='evenodd'
          mask='url("#Grimace-mask1")'
        />
      </g>
    </g>
`,Sad:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Sad'
        transform='translate(2.000000, 52.000000)'
        opacity='0.699999988'
        fill='#000000'>
        <path
          d='M40.0582943,16.6539438 C40.7076459,23.6831146 46.7016363,28.3768187 54,28.3768187 C61.3416045,28.3768187 67.3633339,23.627332 67.9526838,16.5287605 C67.9840218,16.1513016 67.0772329,15.8529531 66.6289111,16.077395 C61.0902255,18.8502083 56.8805885,20.2366149 54,20.2366149 C51.1558456,20.2366149 47.0072148,18.8804569 41.5541074,16.168141 C41.0473376,15.9160792 40.0197139,16.2363147 40.0582943,16.6539438 Z'
          id='Mouth'
          transform='translate(54.005357, 22.188409) scale(1, -1) translate(-54.005357, -22.188409) '
        />
      </g>
    </g>
`,ScreamOpen:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Scream-Open' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z'
            id='ScreamOpen-path1'
          />
        </defs>
        <mask id='ScreamOpen-mask1' fill='white'>
          <use
            href='#ScreamOpen-path1'
            transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '
          />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '
          href='#ScreamOpen-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#ScreamOpen-mask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#ScreamOpen-mask1")'
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 32.000000)' id='Say-ahhhh'>
            <circle cx='11' cy='11' r='11' />
            <circle cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    </g>
`,Serious:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Serious'
        transform='translate(2.000000, 52.000000)'
        fill='#000000'
        opacity='0.699999988'>
        <rect id='Why-so-serious?' x='42' y='18' width='24' height='6' rx='3' />
      </g>
    </g>
`,Smile:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Smile' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'
            id='Smile-path1'
          />
        </defs>
        <mask id='Smile-mask1' fill='white'>
          <use href='#Smile-path1' />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          href='#Smile-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#Smile-mask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <g
          id='Tongue'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#Smile-mask1")'
          fill='#FF4F6D'>
          <g transform='translate(38.000000, 24.000000)'>
            <circle cx='11' cy='11' r='11' />
            <circle cx='21' cy='11' r='11' />
          </g>
        </g>
      </g>
    </g>
`,Tongue:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Tongue' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M29,15.6086957 C30.410031,25.2313711 41.062182,33 54,33 C66.9681454,33 77.6461342,25.183301 79,14.7391304 C79.1012093,14.3397326 78.775269,13 76.826087,13 C56.838426,13 41.7395748,13 31.173913,13 C29.3833142,13 28.870211,14.2404669 29,15.6086957 Z'
            id='Tongue-path1'
          />
        </defs>
        <mask id='Tongue-mask1' fill='white'>
          <use href='#Tongue-path1' />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          href='#Tongue-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#Tongue-mask1")'
          x='39'
          y='2'
          width='31'
          height='16'
          rx='5'
        />
        <path
          d='M65.9841079,23.7466656 C65.9945954,23.8296335 66,23.9141856 66,24 L66,33 C66,39.0751322 61.0751322,44 55,44 L54,44 C47.9248678,44 43,39.0751322 43,33 L43,24 L43,24 C43,23.9141856 43.0054046,23.8296335 43.0158921,23.7466656 C43.0053561,23.6651805 43,23.5829271 43,23.5 C43,21.5670034 45.9101491,20 49.5,20 C51.510438,20 53.3076958,20.4914717 54.5,21.2634601 C55.6923042,20.4914717 57.489562,20 59.5,20 C63.0898509,20 66,21.5670034 66,23.5 C66,23.5829271 65.9946439,23.6651805 65.9841079,23.7466656 Z'
          id='Tongue'
          fill='#FF4F6D'
          fillRule='evenodd'
        />
      </g>
    </g>
`,Twinkle:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Mouth/Twinkle'
        transform='translate(2.000000, 52.000000)'
        opacity='0.599999964'
        fillRule='nonzero'
        fill='#000000'>
        <path
          d='M40,16 C40,21.371763 46.1581544,25 54,25 C61.8418456,25 68,21.371763 68,16 C68,14.8954305 67.050301,14 66,14 C64.7072748,14 64.1302316,14.9051755 64,16 C62.7575758,18.9378973 59.6832595,20.7163149 54,21 C48.3167405,20.7163149 45.2424242,18.9378973 44,16 C43.8697684,14.9051755 43.2927252,14 42,14 C40.949699,14 40,14.8954305 40,16 Z'
          id='Mouth'
        />
      </g>
    </g>
`,Vomit:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Mouth/Vomit' transform='translate(2.000000, 52.000000)'>
        <defs>
          <path
            d='M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999974 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999966 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z'
            id='Vomit-path1'
          />
          <path
            d='M59.9170416,36 L60,36 C60,39.3137085 62.6862915,42 66,42 C69.3137085,42 72,39.3137085 72,36 L72,35 L72,31 C72,27.6862915 69.3137085,25 66,25 L66,25 L42,25 L42,25 C38.6862915,25 36,27.6862915 36,31 L36,31 L36,35 L36,38 C36,41.3137085 38.6862915,44 42,44 C45.3137085,44 48,41.3137085 48,38 L48,36 L48.0829584,36 C48.5590365,33.1622867 51.0270037,31 54,31 C56.9729963,31 59.4409635,33.1622867 59.9170416,36 Z'
            id='Vomit-path2'
          />
          <filter
            x='-1.4%'
            y='-2.6%'
            width='102.8%'
            height='105.3%'
            filterUnits='objectBoundingBox'
            id='filter1'>
            <feOffset
              dx='0'
              dy='-1'
              in='SourceAlpha'
              result='shadowOffsetInner1'
            />
            <feComposite
              in='shadowOffsetInner1'
              in2='SourceAlpha'
              operator='arithmetic'
              k2='-1'
              k3='1'
              result='shadowInnerInner1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowInnerInner1'
            />
          </filter>
        </defs>
        <mask id='Vomit-mask1' fill='white'>
          <use
            href='#Vomit-path1'
            transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) '
          />
        </mask>
        <use
          id='Mouth'
          opacity='0.699999988'
          fill='#000000'
          fillRule='evenodd'
          transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) '
          href='#Vomit-path1'
        />
        <rect
          id='Teeth'
          fill='#FFFFFF'
          fillRule='evenodd'
          mask='url("#Vomit-mask1")'
          x='39'
          y='0'
          width='31'
          height='16'
          rx='5'
        />
        <g id='Vomit-Stuff'>
          <use fill='#88C553' fillRule='evenodd' href='#Vomit-path2' />
          <use
            fill='black'
            opacity='1'
            filter='url("#filter1")'
            href='#Vomit-path2'
          />
        </g>
      </g>
    </g>
`},be={BlazerShirt:zt`
      <g
        id='Clothing/Blazer-+-Shirt'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z'
            id="path1"
          />
        </defs>
        <g id='Shirt' transform='translate(32.000000, 29.000000)'>
          <mask id='BlazerShirt-mask1' fill='white'>
            <use href='#BlazerShirt-path1' />
          </mask>
          <use class='CustomColor' fill='#E6E6E6' href='#BlazerShirt-path1' />
          <g id='Color/Palette/Black' mask='url("#BlazerShirt-mask1")' fill='#262E33'>
            <g transform='translate(-32.000000, -29.000000)' id='????Color'>
              <rect x='0' y='0' width='264' height='110' />
            </g>
          </g>
          <g
            id='Shadowy'
            opacity='0.16'
            mask='url("#BlazerShirt-mask1")'
            fill='#000000'>
            <g transform='translate(60.000000, -25.000000)' id='Hola-????????'>
              <ellipse
                cx='40.5'
                cy='27.8476251'
                rx='39.6351047'
                ry='26.9138272'
              />
            </g>
          </g>
        </g>
        <g id='Blazer' transform='translate(32.000000, 28.000000)'>
          <path
            d='M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'
            id='Saco'
            fill='#3A4C5A'
          />
          <path
            d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'
            id='Pocket-hanky'
            fill='#E6E6E6'
          />
          <path
            d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
          />
          <path
            d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
            transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) '
          />
        </g>
      </g>
`,BlazerSweater:zt`
      <g
        id='Clothing/Blazer-+-Sweater'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'
            id='BlazerSweater-path1'
          />
        </defs>
        <mask id='BlazerSweater-mask1' fill='white'>
          <use href='#BlazerSweater-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#BlazerSweater-path1'
        />
        <g
          id='Color/Palette/Black'
          mask='url("#BlazerSweater-mask1")'
          fillRule='evenodd'
          fill='#262E33'>
          <rect id='????Color' x='0' y='0' width='264' height='110' />
        </g>
        <g
          id='Blazer'
          strokeWidth='1'
          fillRule='evenodd'
          transform='translate(32.000000, 28.000000)'>
          <path
            d='M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'
            id='Saco'
            fill='#3A4C5A'
          />
          <path
            d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'
            id='Pocket-hanky'
            fill='#E6E6E6'
          />
          <path
            d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
          />
          <path
            d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'
            id='Wing'
            fill='#2F4351'
            transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) '
          />
        </g>
        <path
          d='M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z'
          id='Collar'
          fill='#F2F2F2'
          fillRule='evenodd'
        />
      </g>
`,CollarSweater:zt`
      <g
        id='Clothing/Collar-+-Sweater'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'
            id='CollarSweater-path1'
          />
        </defs>
        <mask id='CollarSweater-mask1' fill='white'>
          <use href='#CollarSweater-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#CollarSweater-path1'
        />
        <path
          d='M156,22.2794906 C162.181647,26.8351858 166,33.1057265 166,40.027915 C166,47.2334941 161.862605,53.7329769 155.228997,58.3271669 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,22.2794906 Z M108,21.5714994 C101.232748,26.1740081 97,32.7397769 97,40.027915 C97,47.4261549 101.361602,54.080035 108.308428,58.6915723 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5714994 Z'
          id='Collar'
          fill='#F2F2F2'
          fillRule='evenodd'
        />
      </g>
`,GraphicShirt:zt`
      <g
        id='Clothing/Graphic-Shirt'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z'
            id='GraphicShirt-path1'
          />
        </defs>
        <mask id='GraphicShirt-mask1' fill='white'>
          <use href='#GraphicShirt-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#GraphicShirt-path1'
        />
      </g>
`,Hoodie:zt`
      <g id='Clothing/Hoodie' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z'
            id='Hoodie-path1'
          />
        </defs>
        <mask id='Hoodie-mask1' fill='white'>
          <use href='#Hoodie-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#B7C1DB'
          fillRule='evenodd'
          href='#Hoodie-path1'
        />
        <path
          d='M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z'
          id='Straps'
          fill='#F4F4F4'
          fillRule='evenodd'
          mask='url("#Hoodie-mask1")'
        />
        <path
          d='M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z'
          id='Shadow'
          opacity='0.16'
          fill='#000000'
          fillRule='evenodd'
          mask='url("#Hoodie-mask1")'
        />
      </g>
`,Overall:zt`
      <g id='Clothing/Overall' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'
            id='Overall-path1'
          />
        </defs>
        <mask id='Overall-mask1' fill='white'>
          <use href='#Overall-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#B7C1DB'
          fillRule='evenodd'
          href='#Overall-path1'
        />
        <circle
          id='Button'
          fill='#F4F4F4'
          fillRule='evenodd'
          cx='81'
          cy='83'
          r='5'
        />
        <circle
          id='Button'
          fill='#F4F4F4'
          fillRule='evenodd'
          cx='183'
          cy='83'
          r='5'
        />
      </g>
`,ShirtCrewNeck:zt`
      <g
        id='Clothing/Shirt-Crew-Neck'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z'
            id='ShirtCrewNeck-path1'
          />
        </defs>
        <mask id='ShirtCrewNeck-mask1' fill='white'>
          <use href='#ShirtCrewNeck-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#ShirtCrewNeck-path1'
        />
        <g
          id='Shadowy'
          opacity='0.16'
          strokeWidth='1'
          fillRule='evenodd'
          mask='url("#ShirtCrewNeck-mask1")'
          fill='#000000'>
          <g transform='translate(92.000000, 4.000000)' id='Hola-????????'>
            <ellipse
              cx='40.5'
              cy='27.8476251'
              rx='39.6351047'
              ry='26.9138272'
            />
          </g>
        </g>
      </g>
`,ShirtScoopNeck:zt`
      <g
        id='Clothing/Shirt-Scoop-Neck'
        transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z'
            id='ShirtScoopNeck-path1'
          />
        </defs>
        <mask id='ShirtScoopNeck-mask1' fill='white'>
          <use href='#ShirtScoopNeck-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#ShirtScoopNeck-path1'
        />
      </g>
`,ShirtVNeck:zt`
      <g id='Clothing/Shirt-V-Neck' transform='translate(0.000000, 170.000000)'>
        <defs>
          <path
            d='M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z'
            id='ShirtVNeck-path1'
          />
        </defs>
        <mask id='ShirtVNeck-mask1' fill='white'>
          <use href='#ShirtVNeck-path1' />
        </mask>
        <use
          class='CustomColor'
          fill='#E6E6E6'
          fillRule='evenodd'
          href='#ShirtVNeck-path1'
        />
      </g>
`},_e={Close:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Closed-????'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <path
          d='M16.1601674,32.4473116 C18.006676,28.648508 22.1644225,26 26.9975803,26 C31.8136766,26 35.9591217,28.629842 37.8153518,32.4071242 C38.3667605,33.5291977 37.5821037,34.4474817 36.790607,33.7670228 C34.3395063,31.6597833 30.8587163,30.3437884 26.9975803,30.3437884 C23.2572061,30.3437884 19.8737584,31.5787519 17.4375392,33.5716412 C16.5467928,34.3002944 15.6201012,33.5583844 16.1601674,32.4473116 Z'
          id='Closed-Eye'
          transform='translate(27.000000, 30.000000) scale(1, -1) translate(-27.000000, -30.000000) '
        />
        <path
          d='M74.1601674,32.4473116 C76.006676,28.648508 80.1644225,26 84.9975803,26 C89.8136766,26 93.9591217,28.629842 95.8153518,32.4071242 C96.3667605,33.5291977 95.5821037,34.4474817 94.790607,33.7670228 C92.3395063,31.6597833 88.8587163,30.3437884 84.9975803,30.3437884 C81.2572061,30.3437884 77.8737584,31.5787519 75.4375392,33.5716412 C74.5467928,34.3002944 73.6201012,33.5583844 74.1601674,32.4473116 Z'
          id='Closed-Eye'
          transform='translate(85.000000, 30.000000) scale(1, -1) translate(-85.000000, -30.000000) '
        />
      </g>
    </g>
`,Cry:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Cry-????' transform='translate(0.000000, 8.000000)'>
        <circle
          class='CustomColor'
          opacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          cx='30'
          cy='22'
          r='6'
        />
        <path
          d='M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z'
          id='Drop'
          fill='#92D9FF'
          fillRule='nonzero'
        />
        <circle
          class='CustomColor'
          opacity='0.599999964'
          fill='#000000'
          fillRule='evenodd'
          cx='82'
          cy='22'
          r='6'
        />
      </g>
    </g>
`,Default:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <circle id='Eye' cx='30' cy='22' r='6' />
        <circle id='Eye' cx='82' cy='22' r='6' />
      </g>
    </g>
`,Dizzy:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M29,25.2 L34.5,30.7 C35,31.1 35.7,31.1 36.1,30.7 L37.7,29.1 C38.1,28.6 38.1,27.9 37.7,27.5 L32.2,22 L37.7,16.5 C38.1,16 38.1,15.3 37.7,14.9 L36.1,13.3 C35.6,12.9 34.9,12.9 34.5,13.3 L29,18.8 L23.5,13.3 C23,12.9 22.3,12.9 21.9,13.3 L20.3,14.9 C19.9,15.3 19.9,16 20.3,16.5 L25.8,22 L20.3,27.5 C19.9,28 19.9,28.7 20.3,29.1 L21.9,30.7 C22.4,31.1 23.1,31.1 23.5,30.7 L29,25.2 Z'
          id='Eye'
        />
        <path
          d='M83,25.2 L88.5,30.7 C89,31.1 89.7,31.1 90.1,30.7 L91.7,29.1 C92.1,28.6 92.1,27.9 91.7,27.5 L86.2,22 L91.7,16.5 C92.1,16 92.1,15.3 91.7,14.9 L90.1,13.3 C89.6,12.9 88.9,12.9 88.5,13.3 L83,18.8 L77.5,13.3 C77,12.9 76.3,12.9 75.9,13.3 L74.3,14.9 C73.9,15.3 73.9,16 74.3,16.5 L79.8,22 L74.3,27.5 C73.9,28 73.9,28.7 74.3,29.1 L75.9,30.7 C76.4,31.1 77.1,31.1 77.5,30.7 L83,25.2 Z'
          id='Eye'
        />
      </g>
    </g>
`,EyeRoll:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Eye-Roll-????' transform='translate(0.000000, 8.000000)'>
        <circle id='Eyeball' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='14'
          r='6'
        />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='14'
          r='6'
        />
      </g>
    </g>
`,Happy:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Happy-????'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <path
          d='M16.1601674,22.4473116 C18.006676,18.648508 22.1644225,16 26.9975803,16 C31.8136766,16 35.9591217,18.629842 37.8153518,22.4071242 C38.3667605,23.5291977 37.5821037,24.4474817 36.790607,23.7670228 C34.3395063,21.6597833 30.8587163,20.3437884 26.9975803,20.3437884 C23.2572061,20.3437884 19.8737584,21.5787519 17.4375392,23.5716412 C16.5467928,24.3002944 15.6201012,23.5583844 16.1601674,22.4473116 Z'
          id='Squint'
        />
        <path
          d='M74.1601674,22.4473116 C76.006676,18.648508 80.1644225,16 84.9975803,16 C89.8136766,16 93.9591217,18.629842 95.8153518,22.4071242 C96.3667605,23.5291977 95.5821037,24.4474817 94.790607,23.7670228 C92.3395063,21.6597833 88.8587163,20.3437884 84.9975803,20.3437884 C81.2572061,20.3437884 77.8737584,21.5787519 75.4375392,23.5716412 C74.5467928,24.3002944 73.6201012,23.5583844 74.1601674,22.4473116 Z'
          id='Squint'
        />
      </g>
    </g>
`,Hearts:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        class='CustomColor'
        transform='translate(0.000000, 8.000000)'
        opacity='0.8'
        fillRule='nonzero'
        fill='#FF5353'>
        <path
          d='M35.9583333,10 C33.4074091,10 30.8837273,11.9797894 29.5,13.8206358 C28.1106364,11.9797894 25.5925909,10 23.0416667,10 C17.5523182,10 14,13.3341032 14,17.6412715 C14,23.3708668 18.4118636,26.771228 23.0416667,30.376724 C24.695,31.6133636 27.8223436,34.7777086 28.2083333,35.470905 C28.5943231,36.1641015 30.3143077,36.1885229 30.7916667,35.470905 C31.2690257,34.7532872 34.3021818,31.6133636 35.9583333,30.376724 C40.5853182,26.771228 45,23.3708668 45,17.6412715 C45,13.3341032 41.4476818,10 35.9583333,10 Z'
          id='Heart'
        />
        <path
          d='M88.9583333,10 C86.4074091,10 83.8837273,11.9797894 82.5,13.8206358 C81.1106364,11.9797894 78.5925909,10 76.0416667,10 C70.5523182,10 67,13.3341032 67,17.6412715 C67,23.3708668 71.4118636,26.771228 76.0416667,30.376724 C77.695,31.6133636 80.8223436,34.7777086 81.2083333,35.470905 C81.5943231,36.1641015 83.3143077,36.1885229 83.7916667,35.470905 C84.2690257,34.7532872 87.3021818,31.6133636 88.9583333,30.376724 C93.5853182,26.771228 98,23.3708668 98,17.6412715 C98,13.3341032 94.4476818,10 88.9583333,10 Z'
          id='Heart'
        />
      </g>
    </g>
`,Side:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Side-????'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <path
          d='M27.2409577,20.3455337 C26.462715,21.3574913 26,22.6247092 26,24 C26,27.3137085 28.6862915,30 32,30 C35.3137085,30 38,27.3137085 38,24 C38,23.7097898 37.9793961,23.4243919 37.9395713,23.1451894 C37.9474218,22.9227843 37.9097825,22.6709538 37.8153518,22.4071242 C37.7703692,22.2814477 37.7221152,22.1572512 37.6706873,22.0345685 C37.3370199,21.0717264 36.7650456,20.2202109 36.0253277,19.550585 C33.898886,17.3173253 30.5064735,16 26.9975803,16 C22.1644225,16 18.006676,18.648508 16.1601674,22.4473116 C15.6201012,23.5583844 16.5467928,24.3002944 17.4375392,23.5716412 C19.8737584,21.5787519 23.2572061,20.3437884 26.9975803,20.3437884 C27.0788767,20.3437884 27.1600045,20.3443718 27.2409577,20.3455337 Z'
          id='Eye'
        />
        <path
          d='M85.2409577,20.3455337 C84.462715,21.3574913 84,22.6247092 84,24 C84,27.3137085 86.6862915,30 90,30 C93.3137085,30 96,27.3137085 96,24 C96,23.7097898 95.9793961,23.4243919 95.9395713,23.1451894 C95.9474218,22.9227843 95.9097825,22.6709538 95.8153518,22.4071242 C95.7703692,22.2814477 95.7221152,22.1572512 95.6706873,22.0345685 C95.3370199,21.0717264 94.7650456,20.2202109 94.0253277,19.550585 C91.898886,17.3173253 88.5064735,16 84.9975803,16 C80.1644225,16 76.006676,18.648508 74.1601674,22.4473116 C73.6201012,23.5583844 74.5467928,24.3002944 75.4375392,23.5716412 C77.8737584,21.5787519 81.2572061,20.3437884 84.9975803,20.3437884 C85.0788767,20.3437884 85.1600045,20.3443718 85.2409577,20.3455337 Z'
          id='Eye'
        />
      </g>
    </g>
`,Squint:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Squint-????' transform='translate(0.000000, 8.000000)'>
        <defs>
          <path
            d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'
            id='Eye1'
          />
          <path
            d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'
            id='Eye2'
          />
        </defs>
        <g id='Eye' transform='translate(16.000000, 13.000000)'>
          <mask id='EyeMask1' fill='white'>
            <use href='#Eye1' />
          </mask>
          <use id='The-white-stuff' fill='#FFFFFF' href='#Eye1' />
          <circle
            class='CustomColor'
            opacity='0.699999988'
            fill='#000000'
            mask="url('#EyeMask1')"
            cx='14'
            cy='10'
            r='6'
          />
        </g>
        <g id='Eye' transform='translate(68.000000, 13.000000)'>
          <mask id='EyeMask2' fill='white'>
            <use href='#Eye2' />
          </mask>
          <use id='Eyeball-Mask' fill='#FFFFFF' href='#Eye2' />
          <circle
            class='CustomColor'
            opacity='0.699999988'
            fill='#000000'
            mask="url('#EyeMask2')"
            cx='14'
            cy='10'
            r='6'
          />
        </g>
      </g>
    </g>
`,Surprised:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Surprised-????' transform='translate(0.000000, 8.000000)'>
        <circle id='The-White-Stuff' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='Eye-Ball' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='22'
          r='6'
        />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='22'
          r='6'
        />
      </g>
    </g>
`,Wink:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyes/Wink-????'
        transform='translate(0.000000, 8.000000)'
        opacity='0.599999964'>
        <circle id='Eye' cx='30' cy='22' r='6' />
        <path
          d='M70.4123979,24.204889 C72.2589064,20.4060854 76.4166529,17.7575774 81.2498107,17.7575774 C86.065907,17.7575774 90.2113521,20.3874194 92.0675822,24.1647016 C92.618991,25.2867751 91.8343342,26.2050591 91.0428374,25.5246002 C88.5917368,23.4173607 85.1109468,22.1013658 81.2498107,22.1013658 C77.5094365,22.1013658 74.1259889,23.3363293 71.6897696,25.3292186 C70.7990233,26.0578718 69.8723316,25.3159619 70.4123979,24.204889 Z'
          id='Winky-Wink'
          transform='translate(81.252230, 21.757577) rotate(-4.000000) translate(-81.252230, -21.757577) '
        />
      </g>
    </g>
`,WinkWacky:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyes/Wink-Wacky-????' transform='translate(0.000000, 8.000000)'>
        <circle
          id='Cornea?-I-don&#39;t-know'
          fill='#FFFFFF'
          cx='82'
          cy='22'
          r='12'
        />
        <circle
          class='CustomColor'
          opacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='22'
          r='6'
        />
        <path
          d='M16.1601674,25.4473116 C18.006676,21.648508 22.1644225,19 26.9975803,19 C31.8136766,19 35.9591217,21.629842 37.8153518,25.4071242 C38.3667605,26.5291977 37.5821037,27.4474817 36.790607,26.7670228 C34.3395063,24.6597833 30.8587163,23.3437884 26.9975803,23.3437884 C23.2572061,23.3437884 19.8737584,24.5787519 17.4375392,26.5716412 C16.5467928,27.3002944 15.6201012,26.5583844 16.1601674,25.4473116 Z'
          id='Winky-Doodle'
          opacity='0.599999964'
          fill='#000000'
        />
      </g>
    </g>
`},we={Angry:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyebrow/Outline/Angry'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M15.6114904,15.1845247 C19.8515017,9.41618792 22.4892046,9.70087612 28.9238518,14.5564693 C29.1057771,14.6937504 29.2212592,14.7812575 29.5936891,15.063789 C34.4216439,18.7263562 36.7081807,20 40,20 C41.1045695,20 42,19.1045695 42,18 C42,16.8954305 41.1045695,16 40,16 C37.9337712,16 36.0986396,14.9777974 32.011227,11.8770179 C31.6358269,11.5922331 31.5189458,11.5036659 31.3332441,11.3635351 C27.5737397,8.52660822 25.3739873,7.28738405 22.6379899,6.99208688 C18.9538127,6.59445233 15.5799484,8.47367246 12.3885096,12.8154753 C11.7343147,13.7054768 11.9254737,14.9572954 12.8154753,15.6114904 C13.7054768,16.2656853 14.9572954,16.0745263 15.6114904,15.1845247 Z'
          class='CustomColor'
        />
        <path
          d='M73.6114904,15.1845247 C77.8515017,9.41618792 80.4892046,9.70087612 86.9238518,14.5564693 C87.1057771,14.6937504 87.2212592,14.7812575 87.5936891,15.063789 C92.4216439,18.7263562 94.7081807,20 98,20 C99.1045695,20 100,19.1045695 100,18 C100,16.8954305 99.1045695,16 98,16 C95.9337712,16 94.0986396,14.9777974 90.011227,11.8770179 C89.6358269,11.5922331 89.5189458,11.5036659 89.3332441,11.3635351 C85.5737397,8.52660822 83.3739873,7.28738405 80.6379899,6.99208688 C76.9538127,6.59445233 73.5799484,8.47367246 70.3885096,12.8154753 C69.7343147,13.7054768 69.9254737,14.9572954 70.8154753,15.6114904 C71.7054768,16.2656853 72.9572954,16.0745263 73.6114904,15.1845247 Z'
          class='CustomColor'
          transform='translate(84.999934, 13.470064) scale(-1, 1) translate(-84.999934, -13.470064) '
        />
      </g>
    </g>
`,AngryNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Angry-Natural' opacity='0.599999964'>
        <path
          d='M44.8565785,12.2282877 C44.8578785,12.2192877 44.8578785,12.2192877 44.8565785,12.2282877 M17.5862288,7.89238094 C15.2441598,8.3302947 13.0866155,9.78806858 12.1523766,12.0987479 C11.8009169,12.967391 11.3917103,14.9243181 11.7083227,15.8073302 C11.8284629,16.14295 12.0332321,16.1008692 12.9555234,16.0430509 C14.643791,15.9369937 16.9330912,13.6622369 18.7484684,13.2557982 C21.2753939,12.6899315 23.9825295,13.1148447 26.4961798,13.6882381 C30.8109365,14.6725177 36.4854008,17.7875215 40.9461842,16.1699775 C41.2783949,16.0495512 45.6210294,12.9225732 44.3685187,12.2769925 C43.9238011,11.9068186 41.1370145,12.0854053 40.6216067,11.9988489 C38.2277647,11.5971998 35.7297127,10.9345131 33.373373,10.3265657 C28.2329017,9.00016592 22.9666484,6.88073171 17.5862288,7.89238094'
          class='CustomColor'
          transform='translate(28.094701, 12.127505) rotate(17.000000) translate(-28.094701, -12.127505) '
        />
        <path
          d='M100.918293,12.2094196 C100.919593,12.2004196 100.919593,12.2004196 100.918293,12.2094196 M73.5862288,7.89238094 C71.2441598,8.3302947 69.0866155,9.78806858 68.1523766,12.0987479 C67.8009169,12.967391 67.3917103,14.9243181 67.7083227,15.8073302 C67.8284629,16.14295 68.0332321,16.1008692 68.9555234,16.0430509 C70.643791,15.9369937 72.9330912,13.6622369 74.7484684,13.2557982 C77.2753939,12.6899315 79.9825295,13.1148447 82.4961798,13.6882381 C86.8109365,14.6725177 92.4854008,17.7875215 96.9461842,16.1699775 C97.2783949,16.0495512 101.621029,12.9225732 100.368519,12.2769925 C99.9238011,11.9068186 97.1370145,12.0854053 96.6216067,11.9988489 C94.2277647,11.5971998 91.7297127,10.9345131 89.373373,10.3265657 C84.2329017,9.00016592 78.9666484,6.88073171 73.5862288,7.89238094'
          class='CustomColor'
          transform='translate(84.094701, 12.127505) scale(-1, 1) rotate(17.000000) translate(-84.094701, -12.127505) '
        />
      </g>
    </g>
`,Default:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Outline/Default' opacity='0.599999964'>
        <g id='I-Browse' transform='translate(12.000000, 6.000000)'>
          <path
            d='M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z'
            class='CustomColor'
            fillRule='nonzero'
          />
          <path
            d='M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z'
            class='CustomColor'
            fillRule='nonzero'
            transform='translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) '
          />
        </g>
      </g>
    </g>
`,DefaultNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Default-Natural' opacity='0.599999964'>
        <path
          d='M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364'
          class='CustomColor'
          transform='translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) '
        />
        <path
          d='M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364'
          class='CustomColor'
          transform='translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) '
        />
      </g>
    </g>
`,FlatNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Flat-Natural' opacity='0.599999964'>
        <path
          d='M38.5686071,10.7022978 C33.5865557,11.2384494 28.6553385,11.1338998 23.6562444,11.1010606 C19.8231061,11.0762636 15.91974,10.6892291 12.3246118,12.5091287 C11.6361455,12.8572921 7.8767609,14.9449324 8.00311195,16.0108688 C8.10389896,16.8633498 12.0128479,18.0636592 12.7165939,18.2838164 C16.4280826,19.4452548 19.9241869,18.9282036 23.6870976,18.5703225 C28.3024371,18.1316834 32.9139567,18.1745756 37.5322346,17.8739956 C40.6422336,17.6719334 45.4224171,16.9769469 46.8293214,13.1484895 C47.2530382,11.9954284 46.8152171,9.73353891 46.3074622,8.50642195 C46.1050066,8.01751871 45.5634602,7.84963624 45.1688335,8.14921095 C43.7560524,9.22218432 40.9851444,10.4425994 38.5686071,10.7022978'
          class='CustomColor'
          transform='translate(27.500000, 13.500000) rotate(2.000000) translate(-27.500000, -13.500000) '
        />
        <path
          d='M95.5686071,10.7022978 C90.5865557,11.2384494 85.6553385,11.1338998 80.6562444,11.1010606 C76.8231061,11.0762636 72.91974,10.6892291 69.3246118,12.5091287 C68.6361455,12.8572921 64.8767609,14.9449324 65.003112,16.0108688 C65.103899,16.8633498 69.0128479,18.0636592 69.7165939,18.2838164 C73.4280826,19.4452548 76.9241869,18.9282036 80.6870976,18.5703225 C85.3024371,18.1316834 89.9139567,18.1745756 94.5322346,17.8739956 C97.6422336,17.6719334 102.422417,16.9769469 103.829321,13.1484895 C104.253038,11.9954284 103.815217,9.73353891 103.307462,8.50642195 C103.105007,8.01751871 102.56346,7.84963624 102.168833,8.14921095 C100.756052,9.22218432 97.9851444,10.4425994 95.5686071,10.7022978'
          class='CustomColor'
          transform='translate(84.500000, 13.500000) scale(-1, 1) rotate(2.000000) translate(-84.500000, -13.500000) '
        />
      </g>
    </g>
`,FrownNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Frown-Natural' opacity='0.599999964'>
        <path
          d='M36.3692975,6.87618545 C34.3991755,9.78053246 30.8236346,11.5165625 27.6315757,12.5601676 C23.6890255,13.8490851 9.08080143,15.9390364 12.5196198,23.9079177 C12.572332,24.029546 12.7390347,24.0312591 12.7920764,23.9096308 C13.9448284,21.2646433 30.256648,18.7865093 31.7648785,18.2064622 C36.2101722,16.4974987 40.1579937,12.7153722 40.9269343,7.66282939 C41.2794477,5.34640965 40.2901039,1.6143049 39.3791695,0.113308759 C39.2697915,-0.0669067099 39.0052417,-0.02339461 38.9498938,0.181831751 C38.5898029,1.51323348 37.5385221,5.15317482 36.3692975,6.87618545'
          class='CustomColor'
        />
        <path
          d='M95.3692975,6.87618545 C93.3991755,9.78053246 89.8236346,11.5165625 86.6315757,12.5601676 C82.6890255,13.8490851 68.0808014,15.9390364 71.5196198,23.9079177 C71.572332,24.029546 71.7390347,24.0312591 71.7920764,23.9096308 C72.9448284,21.2646433 89.256648,18.7865093 90.7648785,18.2064622 C95.2101722,16.4974987 99.1579937,12.7153722 99.9269343,7.66282939 C100.279448,5.34640965 99.2901039,1.6143049 98.3791695,0.113308759 C98.2697915,-0.0669067099 98.0052417,-0.02339461 97.9498938,0.181831751 C97.5898029,1.51323348 96.5385221,5.15317482 95.3692975,6.87618545'
          class='CustomColor'
          transform='translate(85.500000, 12.000000) scale(-1, 1) translate(-85.500000, -12.000000) '
        />
      </g>
    </g>
`,RaisedExcited:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Outline/Raised-Excited' opacity='0.599999964'>
        <g id='I-Browse' transform='translate(12.000000, 0.000000)'>
          <path
            d='M3.97579559,17.1279169 C5.47099148,7.60476158 18.0585488,1.10867597 27.1635167,5.30104271 C28.1668367,5.76301969 29.3546946,5.32417444 29.8166716,4.32085442 C30.2786486,3.3175344 29.8398033,2.12967649 28.8364833,1.66769952 C17.3488212,-3.62177466 1.93575948,4.3324746 0.0242044059,16.507492 C-0.147121205,17.5986938 0.598585765,18.6221744 1.68978754,18.7935 C2.78098932,18.9648257 3.80446998,18.2191187 3.97579559,17.1279169 Z'
            class='CustomColor'
            fillRule='nonzero'
          />
          <path
            d='M61.9757956,17.1279169 C63.4709915,7.60476158 76.0585488,1.10867597 85.1635167,5.30104271 C86.1668367,5.76301969 87.3546946,5.32417444 87.8166716,4.32085442 C88.2786486,3.3175344 87.8398033,2.12967649 86.8364833,1.66769952 C75.3488212,-3.62177466 59.9357595,4.3324746 58.0242044,16.507492 C57.8528788,17.5986938 58.5985858,18.6221744 59.6897875,18.7935 C60.7809893,18.9648257 61.80447,18.2191187 61.9757956,17.1279169 Z'
            class='CustomColor'
            fillRule='nonzero'
            transform='translate(73.000097, 9.410436) scale(-1, 1) translate(-73.000097, -9.410436) '
          />
        </g>
      </g>
    </g>
`,RaisedExcitedNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Raised-Excited-Natural' opacity='0.599999964'>
        <path
          d='M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z'
          class='CustomColor'
        />
        <path
          d='M80.7663531,1.57844898 L81.6772984,1.17582144 C86.9190996,-0.905265751 94.8645466,-0.0328729562 99.7227321,2.29911638 C100.289785,2.57148957 99.9021563,3.4519421 99.3211012,3.40711006 C84.4021788,2.25602197 74.3582869,11.5525942 70.9460869,17.8470939 C70.8449215,18.0337142 70.5391523,18.05489 70.4635344,17.8808353 C68.156283,12.5620676 74.9134476,3.89614725 80.7663531,1.57844898 Z'
          class='CustomColor'
          transform='translate(85.000000, 9.000000) scale(-1, 1) translate(-85.000000, -9.000000) '
        />
      </g>
    </g>
`,SadConcerned:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyebrow/Outline/Sad-Concerned'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M15.9726042,19.4088529 C17.452356,11.0203704 30.0622688,5.22829657 39.2106453,8.9774793 C40.2254706,9.39337449 41.4016967,8.94600219 41.8378196,7.97824531 C42.2739426,7.01048842 41.8048116,5.88881678 40.7899862,5.47292159 C29.3457328,0.782843812 13.9550264,7.85221132 12.0280273,18.7760684 C11.84479,19.8148122 12.5792704,20.798534 13.6685352,20.9732726 C14.7578,21.1480113 15.7893668,20.4475967 15.9726042,19.4088529 Z'
          class='CustomColor'
          transform='translate(27.000414, 12.500000) scale(-1, -1) translate(-27.000414, -12.500000) '
        />
        <path
          d='M73.9726042,19.4088529 C75.452356,11.0203704 88.0622688,5.22829657 97.2106453,8.9774793 C98.2254706,9.39337449 99.4016967,8.94600219 99.8378196,7.97824531 C100.273943,7.01048842 99.8048116,5.88881678 98.7899862,5.47292159 C87.3457328,0.782843812 71.9550264,7.85221132 70.0280273,18.7760684 C69.84479,19.8148122 70.5792704,20.798534 71.6685352,20.9732726 C72.7578,21.1480113 73.7893668,20.4475967 73.9726042,19.4088529 Z'
          class='CustomColor'
          transform='translate(85.000414, 12.500000) scale(1, -1) translate(-85.000414, -12.500000) '
        />
      </g>
    </g>
`,SadConcernedNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Sad-Concerned-Natural' opacity='0.599999964'>
        <path
          d='M22.7663531,5.57844898 L23.6772984,5.17582144 C28.9190996,3.09473425 36.8645466,3.96712704 41.7227321,6.29911638 C42.2897848,6.57148957 41.9021563,7.4519421 41.3211012,7.40711006 C26.4021788,6.25602197 16.3582869,15.5525942 12.9460869,21.8470939 C12.8449215,22.0337142 12.5391523,22.05489 12.4635344,21.8808353 C10.156283,16.5620676 16.9134476,7.89614725 22.7663531,5.57844898 Z'
          class='CustomColor'
          transform='translate(27.000000, 13.000000) scale(-1, -1) translate(-27.000000, -13.000000) '
        />
        <path
          d='M80.7663531,5.57844898 L81.6772984,5.17582144 C86.9190996,3.09473425 94.8645466,3.96712704 99.7227321,6.29911638 C100.289785,6.57148957 99.9021563,7.4519421 99.3211012,7.40711006 C84.4021788,6.25602197 74.3582869,15.5525942 70.9460869,21.8470939 C70.8449215,22.0337142 70.5391523,22.05489 70.4635344,21.8808353 C68.156283,16.5620676 74.9134476,7.89614725 80.7663531,5.57844898 Z'
          class='CustomColor'
          transform='translate(85.000000, 13.000000) scale(1, -1) translate(-85.000000, -13.000000) '
        />
      </g>
    </g>
`,UnibrowNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Unibrow-Natural' opacity='0.599999964'>
        <path
          d='M57.000525,12 C56.999825,11.9961 56.999825,11.9961 57.000525,12 M59.4596631,14.892451 C61.3120123,16.058698 64.1131185,16.7894891 65.7030886,17.0505179 C71.9486685,18.0766191 78.0153663,15.945512 84.1715051,15.0153209 C89.636055,14.1895424 95.8563653,13.4967455 100.86041,16.507708 C100.987756,16.584232 101.997542,17.2147893 102.524546,17.7511372 C102.91024,18.1443003 103.563259,18.0619945 103.822605,17.5722412 C105.241692,14.8939029 97.7243204,8.76008291 96.2812935,8.14993193 C89.7471082,5.39200867 81.0899445,8.32440654 74.4284137,9.38927986 C70.6888462,9.98718701 66.9279989,10.3803501 63.2409655,11.2908151 C61.9188284,11.6171635 60.6278928,12.2066818 59.3382119,12.3724317 C59.1848981,12.1429782 58.9889964,12 58.7633758,12 C57.5922879,12 55.8451696,15.4574504 58.0750241,15.6547468 C58.7728345,15.7164887 59.215997,15.3816732 59.4596631,14.892451 Z'
          class='CustomColor'
          transform='translate(80.500000, 12.500000) rotate(-2.000000) translate(-80.500000, -12.500000) '
        />
        <path
          d='M54.999475,12 C55.000175,11.9961 55.000175,11.9961 54.999475,12 M15.7187065,8.14993193 C22.2528918,5.39200867 30.9100555,8.32440654 37.5715863,9.38927986 C41.3111538,9.98718701 45.0720011,10.3803501 48.7590345,11.2908151 C50.2416282,11.6567696 51.6849876,12.3536477 53.1313394,12.4128263 C53.8325707,12.4413952 54.2674737,13.2763566 53.8149484,13.8242681 C52.3320222,15.6179895 48.3271239,16.7172136 46.2969114,17.0505179 C40.0513315,18.0766191 33.9846337,15.945512 27.8284949,15.0153209 C22.363945,14.1895424 16.1436347,13.4967455 11.1395899,16.507708 C11.0122444,16.584232 10.0024581,17.2147893 9.47545402,17.7511372 C9.0897602,18.1443003 8.43674067,18.0619945 8.17739482,17.5722412 C6.75830756,14.8939029 14.2756796,8.76008291 15.7187065,8.14993193 Z M54.9339874,11 C56.1050753,11 57.8521936,15.4015737 55.6223391,15.6527457 C53.3924847,15.9039176 53.7628995,11 54.9339874,11 Z'
          class='CustomColor'
          transform='translate(32.348682, 12.500000) rotate(2.000000) translate(-32.348682, -12.500000) '
        />
      </g>
    </g>
`,UpDown:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g
        id='Eyebrow/Outline/Up-Down'
        opacity='0.599999964'
        fillRule='nonzero'>
        <path
          d='M15.5914402,14.1619718 C20.0874642,7.83556966 29.6031809,4.65350252 39.3473715,7.79575991 C40.3986323,8.13476518 41.5256656,7.55736801 41.8646708,6.50610724 C42.2036761,5.45484647 41.6262789,4.32781316 40.5750182,3.98880789 C29.1665516,0.309863172 17.8358054,4.09887835 12.3309495,11.8448183 C11.6910852,12.7451779 11.9022584,13.9937761 12.8026181,14.6336404 C13.7029777,15.2735046 14.9515759,15.0623314 15.5914402,14.1619718 Z'
          class='CustomColor'
        />
        <path
          d='M73.6376405,21.1577995 C77.5525501,15.6490895 88.2853148,12.56006 97.5304219,14.8304032 C98.6031199,15.0938282 99.6862617,14.4377829 99.9496867,13.3650849 C100.213112,12.2923868 99.5570664,11.2092451 98.4843684,10.9458201 C87.7477584,8.30920485 75.3194947,11.8862211 70.3771498,18.840646 C69.7372855,19.7410057 69.9484587,20.9896038 70.8488184,21.6294681 C71.749178,22.2693324 72.9977762,22.0581591 73.6376405,21.1577995 Z'
          class='CustomColor'
          transform='translate(85.007549, 16.038421) scale(-1, 1) translate(-85.007549, -16.038421) '
        />
      </g>
    </g>
`,UpDownNatural:zt`
  <g transform='translate(76.000000, 82.000000)'>
      <g id='Eyebrow/Natural/Up-Down-Natural' opacity='0.599999964'>
        <path
          d='M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z'
          class='CustomColor'
        />
        <path
          d='M86.535177,12.0246305 C92.3421916,12.2928751 101.730304,16.5124899 101.488432,22.3684172 C101.480419,22.5600881 101.1989,22.6442368 101.06135,22.496811 C98.306449,19.5374968 78.7459953,16.5471364 71.8564209,18.1317995 C71.2258949,18.2770375 70.7468448,17.6550104 71.1462176,17.2056651 C74.5683263,13.3574126 81.3327077,11.7792465 86.535177,12.0246305 Z'
          class='CustomColor'
          transform='translate(86.246508, 17.285912) rotate(5.000000) translate(-86.246508, -17.285912) '
        />
      </g>
    </g>
`};class xe extends Rt{static get hatColors(){return{Black:"#262E33",Blue01:"#65C9FF",Blue02:"#5199E4",Blue03:"#25557C",Gray01:"#E6E6E6",Gray02:"#929598",Heather:"#3C4F5C",PastelBlue:"#B1E2FF",PastelGreen:"#A7FFC4",PastelOrange:"#FFDEB5",PastelRed:"#FFAFB9",PastelYellow:"#FFFFB1",Pink:"#FF488E",Red:"#FF5C5C",White:"#FFFFFF"}}static get hairColors(){return{Auburn:"#A55728",Black:"#2C1B18",Blonde:"#B58143",BlondeGolden:"#D6B370",Brown:"#724133",BrownDark:"#4A312C",PastelPink:"#F59797",Platinum:"#ECDCBF",Red:"#C93305",SilverGray:"#E8E1E1"}}static get skinColors(){return{Tanned:"#FD9841",Yellow:"#F8D25C",Pale:"#FFDBB4",Light:"#EDB98A",Brown:"#D08B5B",DarkBrown:"#AE5D29",Black:"#614335"}}static get properties(){return{identifier:{type:String},topType:{type:String},accessoriesType:{type:String},facialHairType:{type:String},clotheType:{type:String},eyeType:{type:String},eyebrowType:{type:String},mouthType:{type:String},skinColor:{type:String},noseType:{type:String}}}hash(t){var e=t.split("").reduce((t,e)=>(t<<5)-t+e.charCodeAt(0)|0,0);return e>=0?e:-e}randomOption(t){var e=Object.values(t);return e[this.random.nextInt(0,e.length)]}randomArrayOption(t){return t[this.random.nextInt(0,t.length)]}set identifier(t){this._identifier=t;var e=this.hash(t);this.random=new It(e),this.noseType=zt`<g fill='black' transform='translate(76.000000, 82.000000)'>
    <g
      id='Nose/Default'
      transform='translate(28.000000, 40.000000)'
      opacity='0.16'>
      <path
        d='M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8'
        id='Nose'
      />
    </g>
</g>
`,this.topType=this.randomOption(ze),this.accessoriesType=this.randomOption(jt),this.style.setProperty("--avataaar-hair-color",this.randomOption(xe.hairColors)),this.facialHairType=this.randomOption(Wt),this.clotheType=this.randomOption(be),this.eyeType=this.randomOption(_e),this.eyebrowType=this.randomOption(we),this.mouthType=this.randomOption(ye),this.style.setProperty("--avataaar-skin-color",this.randomOption(xe.skinColors)),this.style.setProperty("--avataaar-facial-hair-color",this.randomOption(xe.hairColors)),this.style.setProperty("--avataaar-hat-color",this.randomOption(xe.hatColors))}get identifier(){return this._identifier}static get styles(){return Ft`
      :host {
        display: inline-block;
        width: 64px;
        --avataaar-internal-circle-color: var(--avataaar-circle-color, #6fb8e0);
      }
    `}render(){return zt`
          <svg
        viewBox='0 0 264 280'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:xlink='http://www.w3.org/1999/xlink'>
        <desc>Created with getavataaars.com</desc>
        <defs>
          <circle id='path-1' cx='120' cy='120' r='120' />
          <path
            d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'
            id='path-2'
          />
          <path
            d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'
            id='path-silhouette'
          />
        </defs>
        <g
          id='Avataaar'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'>
          <g
            transform='translate(-825.000000, -1100.000000)'
            id='Avataaar/Circle'>
            <g transform='translate(825.000000, 1100.000000)'>
                <g
                  id='Circle'
                  stroke-width='1'
                  fill-rule='evenodd'
                  transform='translate(12.000000, 40.000000)'>
                  <mask id='mask-1' fill='white'>
                    <use xlink:href='#path-1' />
                  </mask>
                  <use
                    id='Circle-Background'
                    fill='#E6E6E6'
                    xlink:href='#path-1'
                  />
                  <g
                    id='Color/Palette/Blue-01'
                    mask='url(#mask-1)'
                    fill='var(--avataaar-internal-circle-color)'>
                    <rect id='????Color' x='0' y='0' width='240' height='240' />
                  </g>
                </g>
                <mask id='mask-2' fill='white'>
                  <use xlink:href='#path-2' />
                </mask>
              <g id='Mask' />
              <g
                id='Avataaar'
                stroke-width='1'
                fill-rule='evenodd'
                fill='black'
                mask='url(#mask-2)'>
                <g id='Body' transform='translate(32.000000, 36.000000)'>
                  <mask id='mask-silhouette' fill='white'>
                    <use xlink:href='#path-silhouette' />
                  </mask>
                  <use fill='var(--avataaar-skin-color)' xlink:href='#path-silhouette' />
                  <path
                    d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'
                    id='Neck-Shadow'
                    fillOpacity='0.100000001'
                    fill='#000000'
                    mask='url(#mask-silhouette)'
                  />
                </g>
                ${this.clotheType}
                ${this.eyebrowType}
                ${this.eyeType}
                ${this.mouthType}
                ${this.noseType}
                ${this.topType}
                ${this.accessoriesType}
                ${this.facialHairType}
              </g>
            </g>
          </g>
        </g>
      </svg>
`}}customElements.define("a-avataaar",xe);a(126),a(151),a(132),a(129);var Se=document.createElement("template");Se.innerHTML='<dom-module id="lumo-badge">\n  <template>\n    <style>\n      [theme~="badge"] {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-primary-color-10pct);\n        border-radius: var(--lumo-border-radius-s);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-s);\n        line-height: 1;\n        font-weight: 500;\n        text-transform: initial;\n        letter-spacing: initial;\n        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);\n      }\n\n      /* Ensure proper vertical alignment */\n      [theme~="badge"]::before {\n        display: inline-block;\n        content: "\\2003";\n        width: 0;\n      }\n\n      [theme~="badge"][theme~="small"] {\n        font-size: var(--lumo-font-size-xxs);\n        line-height: 1;\n      }\n\n      /* Colors */\n\n      [theme~="badge"][theme~="success"] {\n        color: var(--lumo-success-text-color);\n        background-color: var(--lumo-success-color-10pct);\n      }\n\n      [theme~="badge"][theme~="error"] {\n        color: var(--lumo-error-text-color);\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      [theme~="badge"][theme~="contrast"] {\n        color: var(--lumo-contrast-80pct);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* Primary */\n\n      [theme~="badge"][theme~="primary"] {\n        color: var(--lumo-primary-contrast-color);\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="success"][theme~="primary"] {\n        color: var(--lumo-success-contrast-color);\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"][theme~="primary"] {\n        color: var(--lumo-error-contrast-color);\n        background-color: var(--lumo-error-color);\n      }\n\n      [theme~="badge"][theme~="contrast"][theme~="primary"] {\n        color: var(--lumo-base-color);\n        background-color: var(--lumo-contrast);\n      }\n\n      /* Links */\n\n      [theme~="badge"][href]:hover {\n        text-decoration: none;\n      }\n\n      /* Icon */\n\n      [theme~="badge"] iron-icon {\n        margin: -0.25em 0;\n        --iron-icon-width: 1.5em;\n        --iron-icon-height: 1.5em;\n      }\n\n      [theme~="badge"] iron-icon:first-child {\n        margin-left: -0.375em;\n      }\n\n      [theme~="badge"] iron-icon:last-child {\n        margin-right: -0.375em;\n      }\n\n      [theme~="badge"][icon] {\n        min-width: 0;\n        padding: 0;\n        font-size: 1rem;\n        --iron-icon-width: var(--lumo-icon-size-m);\n        --iron-icon-height: var(--lumo-icon-size-m);\n      }\n\n      [theme~="badge"][icon][theme~="small"] {\n        --iron-icon-width: var(--lumo-icon-size-s);\n        --iron-icon-height: var(--lumo-icon-size-s);\n      }\n\n      /* Empty */\n\n      [theme~="badge"]:not([icon]):empty {\n        min-width: 0;\n        width: 1em;\n        height: 1em;\n        padding: 0;\n        border-radius: 50%;\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="small"]:not([icon]):empty {\n        width: 0.75em;\n        height: 0.75em;\n      }\n\n      [theme~="badge"][theme~="contrast"]:not([icon]):empty {\n        background-color: var(--lumo-contrast);\n      }\n\n      [theme~="badge"][theme~="success"]:not([icon]):empty {\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"]:not([icon]):empty {\n        background-color: var(--lumo-error-color);\n      }\n\n      /* Pill */\n\n      [theme~="badge"][theme~="pill"] {\n        --lumo-border-radius-s: 1em;\n      }\n\n      /* RTL specific styles */\n\n      [dir="rtl"][theme~="badge"] iron-icon:first-child {\n        margin-right: -0.375em;\n        margin-left: 0;\n      }\n\n      [dir="rtl"][theme~="badge"] iron-icon:last-child {\n        margin-left: -0.375em;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Se.content);var ke=document.createElement("template");ke.innerHTML='\n<custom-style>\n<style include=\'lumo-badge\'>\n    html {\n      --lumo-font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;\n      --lumo-border-radius: 0.5em;\n    }\n\n    [theme~="dark"] {\n      --lumo-shade-5pct: rgba(222, 222, 222, 0.05);\n      --lumo-shade-10pct: rgba(222, 222, 222, 0.1);\n      --lumo-shade-20pct: rgba(222, 222, 222, 0.2);\n      --lumo-shade-30pct: rgba(222, 222, 222, 0.3);\n      --lumo-shade-40pct: rgba(222, 222, 222, 0.4);\n      --lumo-shade-50pct: rgba(222, 222, 222, 0.5);\n      --lumo-shade-60pct: rgba(222, 222, 222, 0.6);\n      --lumo-shade-70pct: rgba(222, 222, 222, 0.7);\n      --lumo-shade-80pct: rgba(222, 222, 222, 0.8);\n      --lumo-shade-90pct: rgba(242, 242, 242, 0.9);\n      --lumo-shade: hsl(34, 0%, 87%);\n      --lumo-base-color: hsl(214, 6%, 9%);\n      --lumo-tint-5pct: rgba(217, 201, 201, 0.05);\n      --lumo-tint-10pct: rgba(209, 209, 209, 0.1);\n      --lumo-tint-20pct: rgba(209, 209, 209, 0.2);\n      --lumo-tint-30pct: rgba(209, 209, 209, 0.3);\n      --lumo-tint-40pct: rgba(209, 209, 209, 0.4);\n      --lumo-tint-50pct: rgba(209, 209, 209, 0.5);\n      --lumo-tint-60pct: rgba(209, 209, 209, 0.6);\n      --lumo-tint-70pct: rgba(209, 209, 209, 0.7);\n      --lumo-tint-80pct: rgba(209, 209, 209, 0.8);\n      --lumo-tint-90pct: rgba(209, 209, 209, 0.9);\n      --lumo-tint: hsl(214, 0%, 82%);\n      --lumo-primary-text-color: rgb(185, 140, 121);\n      --lumo-primary-color-50pct: rgba(185, 140, 121, 0.5);\n      --lumo-primary-color-10pct: rgba(185, 140, 121, 0.1);\n      --lumo-primary-color: hsl(18, 31%, 60%);\n      --lumo-primary-contrast-color: #fafafa;\n      --lumo-error-text-color: rgb(246, 118, 111);\n      --lumo-error-color-50pct: rgba(246, 118, 111, 0.5);\n      --lumo-error-color-10pct: rgba(246, 118, 111, 0.1);\n      --lumo-error-color: hsl(3, 88%, 70%);\n    }\n\n      </style>\n    </custom-style>\n\n\n    <dom-module id="button-style" theme-for="vaadin-button">\n      <template>\n        <style>:host(:not([theme~="tertiary"])){background-image:linear-gradient(var(--lumo-tint-5pct), var(--lumo-shade-5pct));box-shadow:inset 0 0 0 1px var(--lumo-contrast-20pct);}:host(:not([theme~="tertiary"]):not([theme~="primary"]):not([theme~="error"]):not([theme~="success"])){color:var(--lumo-body-text-color);}:host([theme~="primary"]){text-shadow:0 -1px 0 var(--lumo-shade-20pct);}\n</style>\n</custom-style>\n\n\n',document.head.appendChild(ke.content);var Le=document.createElement("div");function Ae(t){var e=document.createElement("template");e.innerHTML=t,document.head.appendChild(e.content)}Le.innerHTML='<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',document.head.insertBefore(Le.firstElementChild,document.head.firstChild),document.documentElement.setAttribute("theme","dark"),Ae(`<custom-style><style>${h.a}</style></custom-style>`),Ae(`<custom-style><style>${r.a}</style></custom-style>`);document.getElementsByTagName("script");for(var Oe,Ee=document.getElementsByTagName("script"),Te=0;Te<Ee.length;Te++){var Pe=Ee[Te];if("module"==Pe.getAttribute("type")&&Pe.getAttribute("data-app-id")&&!Pe["vaadin-bundle"]){Oe=Pe;break}}if(!Oe)throw new Error("Could not find the bundle script to identify the application id");Oe["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});var He=window.Vaadin.Flow.fallbacks;He[Oe.getAttribute("data-app-id")]={},He[Oe.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,494))}}]);