webpackJsonp([0,2],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),i=r(a),o=n(153),l=r(o),u=n(154),s=n(173);n(229);var c=n(233),d=r(c),f=n(237),p=r(f),h=n(238),g=(r(h),(0,d["default"])()),m=document.getElementById("app");m&&l["default"].render(i["default"].createElement(u.Provider,{store:g},i["default"].createElement(s.Router,{history:s.browserHistory},i["default"].createElement(s.Route,{path:"/client"},i["default"].createElement(s.IndexRoute,{component:p["default"]})))),m)},229:function(e,t,n){var r=n(230);"string"==typeof r&&(r=[[e.id,r,""]]);n(232)(r,{});r.locals&&(e.exports=r.locals)},230:function(e,t,n){t=e.exports=n(231)(),t.push([e.id,"body{border-top:solid #008eff;background-color:#fcfcfc}.app{padding:5px 20px;max-width:1000px}@media (max-width:768px){.app{padding:5px 10px}}.search-row{margin-bottom:10px;border-bottom:1px dotted #aaa}.search-bar{margin:20px 0 15px;padding-bottom:5px}.logo-container{margin:0;padding-left:0}.logo-image{height:50px;width:50px}#clear-search-button{position:absolute;right:60px;top:0;bottom:0;height:14px;margin:auto;font-size:14px;cursor:pointer;color:#ccc}.react-autosuggest__container{background-color:#f1f1f1;margin:7px 0 0 20px;position:relative;border:1px solid #aaa}.react-autosuggest__input{background-color:inherit;width:100%;height:33px;margin-left:5px;outline:none;border:none!important;box-shadow:none!important}.react-autosuggest__input:focus{outline:none}.react-autosuggest__container--open .react-autosuggest__input{border-bottom-left-radius:0;border-bottom-right-radius:0}.react-autosuggest__suggestions-container{position:absolute;top:33px;width:100%;margin:0;padding:0;list-style-type:none;border:1px solid #aaa;background-color:#fcfcfc;font-weight:300;font-size:16px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:2}.react-autosuggest__suggestion{cursor:pointer;padding-left:5px}.react-autosuggest__suggestion--focused{background-color:#f1f1f1}.results{padding:0 0 20px;min-height:300px}.terms{padding:0 20px 30px 10px}@media (max-width:768px){.terms{padding:0 10px 10px}}ul.term-list{list-style:none;margin:0;padding:0}ul.term-list li{border-bottom:1px dotted #aaa;background-color:#fcfcfc;padding:2px;margin:0}.term-thumbnail h4{color:#444}.term-thumbnail .translation{color:#9aa;font-size:90%;font-weight:400}.term-thumbnail .subjectfield{color:#9aa;font-size:60%;font-weight:400;font-style:italic}.subjectfield-container{padding:0;margin:5px 0;border-radius:3px;border:1px dotted #aaa}.subjectfield-label{background-color:#f1f1f1;padding:5px 15px;border-bottom:1px dotted #aaa}.subjectfield-label h6{font-weight:700;color:#444}.subjectfield-list{margin:10px 15px;list-style:none;padding:0}footer{margin-top:20px 0 0 0;border-top:1px dotted #ccc;padding:10px 0 50px;font-size:13px}footer ul{margin:0 0 20px}footer li{display:inline;margin-right:1em}footer p{color:#666;margin:0 0 3px}.red{color:red}",""])},231:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},232:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=p[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(s(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(s(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:o}}}}function a(e){for(var t=[],n={},r=0;r<e.length;r++){var a=e[r],i=a[0],o=a[1],l=a[2],u=a[3],s={css:o,media:l,sourceMap:u};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=m(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,r,a;if(t.singleton){var i=v++;n=b||(b=l(t)),r=c.bind(null,n,i,!1),a=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=f.bind(null,n),a=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=d.bind(null,n),a=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function c(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return r(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var l=n[o],u=p[l.id];u.refs--,i.push(u)}if(e){var s=a(e);r(s,t)}for(var o=0;o<i.length;o++){var u=i[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},233:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){var t=f(c["default"],e);return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var o=n(160),l=n(234),u=r(l),s=n(235),c=r(s),d=[u["default"]],f=o.applyMiddleware.apply(void 0,a(d))(o.createStore)},235:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments[1];switch(t.type){case u.SET_TERM:return o({},e,{term:t.term});case u.LIVE_SEARCH_LOADING:return o({},e,{liveSearchIsLoading:t.liveSearchIsLoading});case u.TOGGLE_SUBJECTFIELD:return o({},e,{selectedSubjectFields:e.selectedSubjectFields.indexOf(t.subjectField)>-1?e.selectedSubjectFields.filter(function(e){return e!==t.subjectField}):[].concat(a(e.selectedSubjectFields)).concat([t.subjectField])});case u.SET_SELECTED_SUBJECTFIELDS:return o({},e,{selectedSubjectFields:t.selectedSubjectFields});case u.SET_DICTENTRIES:return o({},e,{dictentries:t.dictentries});case u.SET_SUGGESTIONS:return o({},e,{suggestions:t.suggestions});case u.CLEAR_ALL:return o({},e,{suggestion:[],dictentries:[],term:"",liveSearchLoading:!1});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=i;var l=n(236),u=r(l),s={liveSearchIsLoading:!1,term:"",selectedSubjectFields:[],dictentries:[],suggestions:[]}},236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_TERM="SET_TERM",t.CLEAR_ALL="CLEAR_ALL",t.TOGGLE_SUBJECTFIELD="TOGGLE_SUBJECTFIELD",t.SET_SELECTED_SUBJECTFIELDS="SET_SELECTED_SUBJECTFIELDS",t.SET_DICTENTRIES="SET_DICTENTRIES",t.SET_SUGGESTIONS="SET_SUGGESTIONS",t.LIVE_SEARCH_LOADING="LIVE_SEARCH_LOADING"},237:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(154),d=n(238),f=r(d),p=n(255),h=r(p),g=n(257),m=r(g),b=n(247),v=(r(b),n(259)),y=r(v),E=n(253),S={dispatch:u.PropTypes.func.isRequired,location:u.PropTypes.object.isRequired,selectedSubjectFields:u.PropTypes.array,term:u.PropTypes.string,dictentries:u.PropTypes.array},_={term:"",selectedSubjectFields:[],dictentries:[]},j=function(e){function t(e,n){a(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e,n));return r.handleSearch=r.handleSearch.bind(r),r.handleSubjectFieldToggle=r.handleSubjectFieldToggle.bind(r),r}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.fetchFromLocation(this.props.location)}},{key:"componentWillReceiveProps",value:function(e){var t=e.location;"POP"===t.action&&this.fetchFromLocation(t)}},{key:"fetchFromLocation",value:function(e){var t=e.query,n=t.term,r=t.selectedSubjectFields,a=this.props.dispatch;r&&r.constructor===String&&(r=[r]),a((0,E.setSelectedSubjectFields)(r)),a((0,E.setTerm)(n)),this.handleSearch()}},{key:"handleSearch",value:function(){var e=this.props,t=e.dispatch;e.term;t((0,E.fetchDictentries)())}},{key:"handleSubjectFieldToggle",value:function(e){var t=this.props.dispatch;t((0,E.toggleSubjectField)(e)),this.handleSearch()}},{key:"render",value:function(){var e=this.props,t=e.term,n=e.selectedSubjectFields,r=e.dictentries;return s["default"].createElement("div",{className:"container app"},s["default"].createElement("div",{className:"row search-row"},s["default"].createElement("div",{className:"col-sm-8 search-bar"},s["default"].createElement(f["default"],{handleSearch:this.handleSearch,selectedSubjectFields:n,term:t}))),s["default"].createElement("div",{className:"row results"},s["default"].createElement("div",{className:"col-sm-8 terms"},s["default"].createElement(h["default"],{dictentries:r})),s["default"].createElement("div",{className:"col-sm-4 subject-fields"},s["default"].createElement(m["default"],{selectedSubjectFields:n,dictentries:r,handleSubjectFieldToggle:this.handleSubjectFieldToggle}))),s["default"].createElement(y["default"],null))}}]),t}(u.Component);j.propTypes=S,j.defaultProps=_,t["default"]=(0,c.connect)(function(e){var t=e.selectedSubjectFields,n=e.dictentries,r=e.term;return{selectedSubjectFields:t,dictentries:n,term:r}})(j)},238:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(239),d=r(c),f=n(247),p=r(f),h=n(249),g=r(h),m=n(251),b=(r(m),n(154)),v=n(253),y={dispatch:u.PropTypes.func.isRequired,selectedSubjectFields:u.PropTypes.array,liveSearchIsLoading:u.PropTypes.bool,suggestions:u.PropTypes.array},E={selectedSubjectFields:[],liveSearchIsLoading:!1,suggestions:[]},S=function(e){return e.de},_=function(e){return s["default"].createElement("span",null,e.de)},j=function(e){function t(){a(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.onChange=e.onChange.bind(e),e.onSubmit=e.onSubmit.bind(e),e.handleReset=e.handleReset.bind(e),e.onSuggestionsUpdateRequested=e.onSuggestionsUpdateRequested.bind(e),e}return o(t,e),l(t,[{key:"loadSuggestions",value:function(e){var t=this,n=this.props,r=n.dispatch,a=n.selectedSubjectFields,i=n.liveSearchIsLoading,o=n.suggestions;i&&!function(){var t=new RegExp("^"+e,"i"),n=o.filter(function(e){return t.test(e.de)});r((0,v.setSuggestions)(n))}(),r((0,v.liveSearchLoading)(!0)),(0,g["default"])({term:e,selectedSubjectFields:a}).then(function(n){e===t.props.term&&r((0,v.setSuggestions)(n)),r((0,v.liveSearchLoading)(!1))})}},{key:"onSuggestionSelected",value:function(e,t){var n=t.suggestionValue,r=this.props;r.handleSearch,r.dispatch;this.loadSuggestions(n)}},{key:"onSuggestionsUpdateRequested",value:function(e){var t=e.value;this.loadSuggestions(t)}},{key:"onChange",value:function(e,t){var n=t.newValue,r=t.method,a=this.props,i=a.dispatch,o=a.handleSearch;i((0,v.setTerm)(n)),"click"===r&&o()}},{key:"handleReset",value:function(e){var t=this.props.dispatch;t((0,v.clearAll)())}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.props,n=t.handleSearch,r=t.dispatch;r((0,v.setSuggestions)([])),n()}},{key:"render",value:function(){var e=this.props,t=e.term,n=(e.selectedSubjectFields,e.liveSearchIsLoading,e.suggestions),r={value:t,onChange:this.onChange};return s["default"].createElement("form",{onSubmit:this.onSubmit},s["default"].createElement("div",{className:"input-group"},s["default"].createElement(p["default"],null),s["default"].createElement(d["default"],{suggestions:n,onSuggestionsUpdateRequested:this.onSuggestionsUpdateRequested,getSuggestionValue:S,renderSuggestion:_,inputProps:r}),s["default"].createElement("span",{id:"clear-search-button",className:"glyphicon glyphicon-remove-circle",onClick:this.handleReset}),s["default"].createElement("span",{className:"input-group-btn"},s["default"].createElement("button",{type:"submit",className:"btn btn-primary"},s["default"].createElement("span",{"aria-hidden":"true",className:"glyphicon glyphicon-search"})))))}}]),t}(s["default"].Component);j.propTypes=y,j.defaultProps=E,t["default"]=(0,b.connect)(function(e){var t=e.liveSearchIsLoading,n=e.suggestions;return{liveSearchIsLoading:t,suggestions:n}})(j)},247:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){return o["default"].createElement("span",{className:"input-group-btn logo-container"},o["default"].createElement("a",{href:"/"},o["default"].createElement("img",{src:u["default"],className:"logo-image",alt:"Logo Term Search"})))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),l=n(248),u=r(l);t["default"]=a},248:function(e,t,n){e.exports=n.p+"assets/images/TERM-SEARCH-LOGO.d30700620fcd3d5d2c4dbea9d6a78c76.png"},249:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(250),i=r(a),o=n(251),l=r(o),u=n(252),s=r(u),c=300,d=2e3,f=0,p=10,h=function(e){return e.filter(function(t,n){return n<e.length-1?t.de!==e[n+1].de:!0})},g=function(e){return e.splice(0,p)},m=function(e){var t=e.term,n=e.selectedSubjectFields,r=new Date,a=(0,i["default"])(t),o="https://api.term-search.nl/dictentries/liveSearch?";return s["default"].ajax({url:o,data:{term:a,limit:d,skip:f,subjectFields:n,format:"json"},dataType:"json",type:"GET"}).then(function(e){return console.log("Live query time: "+(new Date-r)+" ms"),e}).then(function(e){return e.results.dictentries||[]}).then(h).then(g)};t["default"]=(0,l["default"])(m,c)},250:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}},251:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=void 0;return function(){for(var a=arguments.length,i=Array(a),o=0;a>o;o++)i[o]=arguments[o];return new Promise(function(a){var o=function(){r=null,n||a(e.apply(void 0,i))},l=n&&!r;clearTimeout(r),r=setTimeout(o,t),l&&a(e.apply(void 0,i))})}}},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return{type:g.SET_TERM,term:e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return{type:g.LIVE_SEARCH_LOADING,liveSearchIsLoading:e}}function l(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return{type:g.TOGGLE_SUBJECTFIELD,subjectField:e}}function u(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return{type:g.SET_SELECTED_SUBJECTFIELDS,selectedSubjectFields:e}}function s(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return{type:g.SET_DICTENTRIES,dictentries:e}}function c(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return{type:g.SET_SUGGESTIONS,suggestions:e}}function d(){return{type:g.CLEAR_ALL}}function f(){return function(e,t){var n=t(),r=n.term,a=n.selectedSubjectFields;p.browserHistory.push({pathname:"/client",query:{term:r||void 0,selectedSubjectFields:a||void 0}}),r.length>0&&(0,b["default"])({term:r,selectedSubjectFields:a}).fail(function(e){alert("An API error has occured:\n\n "+JSON.stringify(e,null,4))}).then(function(e){return console.log("Query time: "+e.queryTime+" ms"),e.dictentries}).then(function(t){e(s(t))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setTerm=i,t.liveSearchLoading=o,t.toggleSubjectField=l,t.setSelectedSubjectFields=u,t.setDictentries=s,t.setSuggestions=c,t.clearAll=d,t.fetchDictentries=f;var p=n(173),h=n(236),g=a(h),m=n(254),b=r(m)},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(250),i=r(a),o=n(252),l=r(o),u=20,s=0,c=function(e){var t=[];return e.forEach(function(e){var n=!0;t.forEach(function(t){t.de===e.de&&(n=!1,t.nl=t.nl.concat(e.nl))}),n&&t.push(e)}),t};t["default"]=function(e){var t=e.term,n=e.selectedSubjectFields,r=new Date,a=(0,i["default"])(t),o="https://api.term-search.nl/dictentries/startsWith?";return l["default"].ajax({url:o,data:{term:a,limit:u,skip:s,subjectFields:n,format:"json"},dataType:"json",type:"GET"}).then(function(e){return e.results.dictentries||[]}).then(c).then(function(e){var t=new Date-r;return{queryTime:t,dictentries:e}})}},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.dictentries;return o["default"].createElement("div",null,0===t.length?d():"",o["default"].createElement("ul",{className:"term-list"},t.map(function(e){return o["default"].createElement("li",{key:e.id},o["default"].createElement(u["default"],{term:e.de,translations:e.nl,subjectFields:e.subjectFields}))})))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),l=n(256),u=r(l),s={dictentries:i.PropTypes.arrayOf(i.PropTypes.shape({de:i.PropTypes.string.isRequired,nl:i.PropTypes.array,subjectFields:i.PropTypes.array}))},c={dictentries:[]},d=function(){return o["default"].createElement("div",null,o["default"].createElement("h5",null,"Geen zoekresultaten"),o["default"].createElement("p",null,"Uw zoekopdracht heeft geen resultaten opgeleverd."))};a.propTypes=s,a.defaultProps=c,t["default"]=a},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.term,n=e.translations,r=e.subjectFields;return o["default"].createElement("div",{className:"term-thumbnail"},o["default"].createElement("h6",null,t,n.map(u),o["default"].createElement("span",{className:"subjectfield"}," ",s(r).join(", "))))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),l={term:i.PropTypes.string,translations:i.PropTypes.array,subjectFields:i.PropTypes.array},u=function(e,t){return o["default"].createElement("span",{className:"translation",key:t},o["default"].createElement("b",null," ",t+1)," ",e)},s=function(e){return e.map(function(e){return e.termStr})};a.propTypes=l,t["default"]=a},257:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.dictentries,n=e.selectedSubjectFields,r=e.handleSubjectFieldToggle,a=d(t),i=n.concat(a),l=f(i).sort();return l.length<=0?o["default"].createElement("div",null):o["default"].createElement("div",{className:"subjectfield-container"},o["default"].createElement("div",{className:"subjectfield-label"},o["default"].createElement("h6",null,"Vakgebied")),o["default"].createElement("ul",{className:"subjectfield-list"},l.map(function(e,t){return o["default"].createElement(u["default"],{active:p(n,e),key:t,subjectField:e,handleSubjectFieldToggle:r})})))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),l=n(258),u=r(l),s={handleSubjectFieldToggle:i.PropTypes.func.isRequired,selectedSubjectFields:i.PropTypes.array,dictentries:i.PropTypes.array},c={dictentries:[],selectedSubjectFields:[]},d=function(e){var t=[];return e.forEach(function(e){e.subjectFields.forEach(function(e){t.push(e.termStr)})}),t},f=function(e){var t=[];return e.forEach(function(e){var n=!0;t.forEach(function(t){t===e&&(n=!1)}),n&&t.push(e)}),t},p=function(e,t){return e.indexOf(t)>-1};a.propTypes=s,a.defaultProps=c,t["default"]=a},258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.subjectField,n=e.handleSubjectFieldToggle,r=e.active,a=function(e){return n(e.target.value)};return o["default"].createElement("span",{className:"subjectfield-checkbox"},o["default"].createElement("input",{type:"checkbox",name:t,checked:r,value:t,onChange:a}),o["default"].createElement("span",null," ",t),o["default"].createElement("br",null))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),l={subjectField:i.PropTypes.string.isRequired,handleSubjectFieldToggle:i.PropTypes.func.isRequired,active:i.PropTypes.bool.isRequired};a.propTypes=l,t["default"]=a},259:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){return o["default"].createElement("footer",{className:"row"},o["default"].createElement("div",{className:"col-xs-12 col-sm-10 col-md-8 col-lg-7"},o["default"].createElement("ul",{className:"list-unstyled"},o["default"].createElement("li",{className:"pull-right"},o["default"].createElement("a",{href:"#top"},"Naar boven")),o["default"].createElement("li",null," ",o["default"].createElement("a",{href:"/"},"Home")),o["default"].createElement("li",null,o["default"].createElement("a",{href:"/duits-nederlands/vakgebied/"},"Vakgebieden")),o["default"].createElement("li",null,o["default"].createElement("a",{href:"/woordenboeken"},"Woordenboeken")),o["default"].createElement("li",null," ",o["default"].createElement("a",{href:"/duits-nederlands/"},"Pagina's")),o["default"].createElement("li",null," ",o["default"].createElement("a",{href:"/colofon"},"Colofon"))),o["default"].createElement("p",null,"Met ",o["default"].createElement("span",{className:"glyphicon glyphicon-heart red"})," gemaakt in ",o["default"].createElement("a",{href:"/search?term=Utrecht"},"Utrecht")," door ",o["default"].createElement("a",{href:"http://www.vangilst.de/"},"Van Gilst Übersetzungen")),o["default"].createElement("p",null,"De broncode van deze website is beschikbaar op ",o["default"].createElement("a",{href:"https://github.com/vnglst/term-search"},"GitHub "),"en valt onder de MIT-licentie.")))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i);t["default"]=a}});