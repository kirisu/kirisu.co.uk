module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([0],{191:function(e,t,n){e.exports=n(192)},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(7)),o=i(n(193)),a=i(n(207));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(o.default,{title:"@kirisu"},r.default.createElement("section",{className:"hero is-fullheight is-light"},r.default.createElement("div",{className:"hero-body"},r.default.createElement("div",{className:"container has-text-centered"},r.default.createElement("h3",{className:"title is-3"},"@kirisu"),r.default.createElement("h4",{className:"subtitle is-4 has-text-grey-light"},"Christopher Lunt is a Software Engineer based in Glasgow, Scotland."),r.default.createElement("a",{href:"mailto:contact@kirisu.co.uk",className:"button is-medium is-primary is-outlined is-rounded"},r.default.createElement(a.default,null),r.default.createElement("span",null,"Contact Me"))))))}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7)),o=a(n(194));function a(e){return e&&e.__esModule?e:{default:e}}n(206);t.default=function(e){var t=e.children,n=e.title,a=void 0===n?"":n;return r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,null,r.default.createElement("title",null,a)),t,r.default.createElement("div",{id:"root-modal"}))}},194:function(e,t,n){e.exports=n(94)},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=1e3/30,c=Date.now(),f=[0,315,0,45],s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return i(r,(n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(u(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{angle:f[0],then:c}}),Object.defineProperty(u(r),"tick",{configurable:!0,enumerable:!0,writable:!0,value:function(){cancelAnimationFrame(r.timer),r.timer=requestAnimationFrame(r.tick);var e=Date.now(),t=e-r.state.then;t>l&&r.setState({angle:f[parseInt((r.state.then-c)/500)%4],then:e-t%l})}}),n))}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer)}},{key:"render",value:function(){return r.default.createElement("span",{className:"icon"},r.default.createElement("i",{className:"mdi mdi-bell-ring-outline mdi-rotate-".concat(this.state.angle)}))}}])&&a(n.prototype,o),s&&a(n,s),t}();t.default=s},218:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}}},[191]).default}});