"use strict";(self.webpackChunkkop_chronik=self.webpackChunkkop_chronik||[]).push([[811],{83811:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(77297),r=n.n(o),i=n(39704),a=n(5977),u=n(85893);function l(){var e=(0,a.UO)().id,t=(0,i.v9)((function(t){return t.incidents&&t.incidents.filter((function(t){return t.id==e||null}))})),n=(0,i.v9)((function(e){return e.overlay||null}));return(0,u.jsx)(u.Fragment,{children:t?(0,u.jsx)("div",{className:"streetview-container ".concat(n?"blur":""),children:(0,u.jsx)(r(),{apiKey:"AIzaSyDeCq5mnB7lE9dnj1PwOYeEvrosngd0sHY",streetViewPanoramaOptions:{position:{lat:parseFloat(t[0].lat),lng:parseFloat(t[0].lng)},pov:{heading:t[0].heading,pitch:0},zoom:1,addressControl:!1,showRoadLabels:!1,zoomControl:!1}})}):null})}},95549:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=l=void 0,o=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,i);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(a)}var s=Object.getPrototypeOf(r);if(null===s)return;e=s,t=i,n=a,o=!0}},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=a(n(67294)),c=a(n(71167));function p(e){return e.displayName||e.name||"Component"}function f(e){if("undefined"==typeof window)return null;for(var t=e.split("."),n=window,o=0;o<t.length;o++){var r=n[t[o]];if(void 0===r)return null;n=r}return n}t.default=function(e){function t(t){var n=e(t);return Object.keys(n).reduce((function(e,t){return i({},e,l({},t,f(n[t].globalPath)))}),{})}return function(n){var i=function(i){function a(){u(this,a),r(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments),this.displayName="AsyncLoaded("+p(n)+")",this.state=t(this.props)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,i),o(a,[{key:"loadScripts",value:function(e){var t=this;return Object.keys(e).filter((function(e){return null===t.state[e]})).map((function(n){var o=e[n];return function(e,t){var n=this;if("undefined"==typeof document)return null;var o=e.globalPath,r=e.url,i=e.jsonp,a=document.createElement("script");if(i){var u=e.callbackName,l=void 0===u?"_async_"+o.replace(".","_"):u;r=r+(r.indexOf("?")>-1?"&":"?")+"callback="+l,window[l]=t}else a.onload=t,a.onreadystatechange=function(){"loaded"===n.readyState&&window.setTimeout(a.onload,0)};return a.async=1,a.src=r,a}(o,t.loadHandler.bind(t,n,o.globalPath))})).map((function(e){"undefined"!=typeof document&&document.body.appendChild(e)}))}},{key:"componentDidMount",value:function(){this.loadScripts(e(this.props))}},{key:"loadHandler",value:function(e,t){var n=f(t);null!==n&&this.setState(l({},e,n))}},{key:"injectScripts",value:function(e){return s.default.cloneElement(s.default.createElement(e,this.props),this.state)}},{key:"render",value:function(){return this.injectScripts(n)}}]),a}(s.default.Component);return(0,c.default)(i,n)}},e.exports=t.default},71167:e=>{var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,r,i){if("string"!=typeof r){var a=Object.getOwnPropertyNames(r);o&&(a=a.concat(Object.getOwnPropertySymbols(r)));for(var u=0;u<a.length;++u)if(!(t[a[u]]||n[a[u]]||i&&i[a[u]]))try{e[a[u]]=r[a[u]]}catch(e){}}return e}},77297:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function r(e){return e&&e.__esModule?e:{default:e}}var i=r(n(67294)),a=r(n(73935)),u=r(n(45697)),l=r(n(95549)),s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;o=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,i);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(a)}var s=Object.getPrototypeOf(r);if(null===s)return;e=s,t=i,n=a,o=!0,u=s=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.streetView=null}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"initialize",value:function(e){var t=this;this.props.googleMaps&&null==this.streetView&&(this.streetView=new this.props.googleMaps.StreetViewPanorama(e,this.props.streetViewPanoramaOptions),this.streetView.addListener("position_changed",(function(){t.props.onPositionChanged&&t.props.onPositionChanged(t.streetView.getPosition())})),this.streetView.addListener("pov_changed",(function(){t.props.onPovChanged&&t.props.onPovChanged(t.streetView.getPov())})))}},{key:"componentDidMount",value:function(){this.initialize(a.default.findDOMNode(this))}},{key:"componentDidUpdate",value:function(){this.initialize(a.default.findDOMNode(this))}},{key:"componentWillUnmount",value:function(){this.streetView&&this.props.googleMaps.event.clearInstanceListeners(this.streetView)}},{key:"render",value:function(){return i.default.createElement("div",{style:{height:"100%"}})}}]),t}(i.default.Component);s.propTypes={apiKey:u.default.string.isRequired,streetViewPanoramaOptions:u.default.object.isRequired,onPositionChanged:u.default.func,onPovChanged:u.default.func},s.defaultProps={streetViewPanoramaOptions:{position:{lat:46.9171876,lng:17.8951832},pov:{heading:0,pitch:0},zoom:1}},t.default=(0,l.default)((function(e){return{googleMaps:{globalPath:"google.maps",url:"https://maps.googleapis.com/maps/api/js?key="+e.apiKey,jsonp:!0}}}))(s),e.exports=t.default}}]);