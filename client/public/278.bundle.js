"use strict";(self.webpackChunkkop_chronik=self.webpackChunkkop_chronik||[]).push([[278],{95278:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(58949),o=n(67294),i=n(39704),c=n(52113),s=n(73727),u=n(85893);function a(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){p.handleClickOutside=function(){return n(!1)};var e=d((0,o.useState)(!1),2),t=e[0],n=e[1],r=function(){return n(!t)},l=(0,i.v9)((function(e){return e.incidents&&e.incidents.map((function(e){return new Date(e.date).getFullYear()||null}))})),f=a(new Set(l));return(0,u.jsx)(c.sJ,{children:(0,u.jsxs)("div",{className:"dd-container",children:[(0,u.jsx)("div",{tabIndex:0,className:"dd-header",role:"button",onKeyPress:function(){return r()},onClick:function(){return r()},children:t?(0,u.jsx)("div",{className:"dd-header",children:(0,u.jsx)("p",{children:"x"})}):(0,u.jsx)("div",{className:"dd-header",children:(0,u.jsx)("p",{children:"2000–2021"})})}),t&&(0,u.jsx)("ul",{className:"dd-list",children:f.map((function(e){return(0,u.jsx)("li",{className:"dd-list-item",children:(0,u.jsx)(s.rU,{to:"/incidents/".concat(e),children:(0,u.jsx)("span",{children:e})})})}))})]})})}var h={handleClickOutside:function(){return p.handleClickOutside}};const m=(0,r.Z)(p,h)},58949:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),o=n(73935);function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}var u,a,d=(void 0===u&&(u=0),function(){return++u}),l={},f={},p=["touchstart","touchmove"];function h(e,t){var n=null;return-1!==p.indexOf(t)&&a&&(n={passive:!e.props.preventDefault}),n}const m=function(e,t){var n,u,p=e.displayName||e.name||"Component";return u=n=function(n){var u,m;function v(e){var r;return(r=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof r.__clickOutsideHandlerProp){var t=r.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+p+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else r.__clickOutsideHandlerProp(e)},r.__getComponentNode=function(){var e=r.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():(0,o.findDOMNode)(e)},r.enableOnClickOutside=function(){if("undefined"!=typeof document&&!f[r._uid]){void 0===a&&(a=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}}()),f[r._uid]=!0;var e=r.props.eventTypes;e.forEach||(e=[e]),l[r._uid]=function(e){var t;null!==r.componentNode&&(r.props.preventDefault&&e.preventDefault(),r.props.stopPropagation&&e.stopPropagation(),r.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,n){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&s(e,t,n))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,r.componentNode,r.props.outsideClickIgnoreClass)===document&&r.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,l[r._uid],h(c(r),e))}))}},r.disableOnClickOutside=function(){delete f[r._uid];var e=l[r._uid];if(e&&"undefined"!=typeof document){var t=r.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,h(c(r),t))})),delete l[r._uid]}},r.getRef=function(e){return r.instanceRef=e},r._uid=d(),r}m=n,(u=v).prototype=Object.create(m.prototype),u.prototype.constructor=u,i(u,m);var y=v.prototype;return y.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},y.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+p+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},y.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},y.componentWillUnmount=function(){this.disableOnClickOutside()},y.render=function(){var t=this.props;t.excludeScrollbar;var n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,(0,r.createElement)(e,n)},v}(r.Component),n.displayName="OnClickOutside("+p+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},u}}}]);