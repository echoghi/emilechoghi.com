/*! Emile Choghi's Portfolio Version: 2.6.0 Date: 5/23/2018 @ 10:50 */
webpackJsonp([3],{"../node_modules/@material-ui/core/IconButton/IconButton.js":function(e,t,n){"use strict";function i(e){var t,n=e.children,i=e.classes,o=e.className,m=e.color,d=e.disabled,f=(0,l.default)(e,["children","classes","className","color","disabled"]);return s.default.createElement(p.default,(0,a.default)({className:(0,c.default)(i.root,(t={},(0,r.default)(t,i["color".concat((0,u.capitalize)(m))],"default"!==m),(0,r.default)(t,i.disabled,d),t),o),centerRipple:!0,focusRipple:!0,disabled:d},f),s.default.createElement("span",{className:i.label},n))}var o=n("../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=o(n("../node_modules/@babel/runtime/helpers/extends.js")),r=o(n("../node_modules/@babel/runtime/helpers/defineProperty.js")),l=o(n("../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("../node_modules/react/index.js")),c=(o(n("../node_modules/prop-types/index.js")),o(n("../node_modules/classnames/index.js"))),m=o(n("../node_modules/@material-ui/core/styles/withStyles.js")),d=n("../node_modules/@material-ui/core/styles/colorManipulator.js"),p=o(n("../node_modules/@material-ui/core/ButtonBase/index.js")),u=n("../node_modules/@material-ui/core/utils/helpers.js"),f=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),width:48,height:48,padding:0,borderRadius:"50%",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.fade)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}};t.styles=f,i.propTypes={},i.defaultProps={color:"default",disabled:!1};var h=(0,m.default)(f,{name:"MuiIconButton"})(i);t.default=h},"../node_modules/@material-ui/core/IconButton/index.js":function(e,t,n){"use strict";var i=n("../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=i(n("../node_modules/@material-ui/core/IconButton/IconButton.js"))},"../node_modules/create-react-class/factory.js":function(e,t,n){"use strict";function i(e){return e}function o(e,t,n){function o(e,t){var n=y.hasOwnProperty(t)?y[t]:null;E.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function c(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var i=e.prototype,a=i.__reactAutoBindPairs;n.hasOwnProperty(s)&&g.mixins(e,n.mixins);for(var r in n)if(n.hasOwnProperty(r)&&r!==s){var c=n[r],m=i.hasOwnProperty(r);if(o(m,r),g.hasOwnProperty(r))g[r](e,c);else{var d=y.hasOwnProperty(r),f="function"==typeof c,h=f&&!d&&!m&&!1!==n.autobind;if(h)a.push(r,c),i[r]=c;else if(m){var b=y[r];l(d&&("DEFINE_MANY_MERGED"===b||"DEFINE_MANY"===b),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",b,r),"DEFINE_MANY_MERGED"===b?i[r]=p(i[r],c):"DEFINE_MANY"===b&&(i[r]=u(i[r],c))}else i[r]=c}}}else;}function m(e,t){if(t)for(var n in t){var i=t[n];if(t.hasOwnProperty(n)){var o=n in g;l(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;l(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=i}}}function d(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),i=t.apply(this,arguments);if(null==n)return i;if(null==i)return n;var o={};return d(o,n),d(o,i),o}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function f(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var i=t[n],o=t[n+1];e[i]=f(e,o)}}function b(e){var t=i(function(e,i,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=i,this.refs=r,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;l("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],v.forEach(c.bind(null,t)),c(t,w),c(t,e),c(t,x),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in y)t.prototype[o]||(t.prototype[o]=null);return t}var v=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)c(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=a({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=a({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=a({},e.propTypes,t)},statics:function(e,t){m(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},x={componentWillUnmount:function(){this.__isMounted=!1}},E={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},_=function(){};return a(_.prototype,e.prototype,E),b}var a=n("../node_modules/object-assign/index.js"),r=n("../node_modules/fbjs/lib/emptyObject.js"),l=n("../node_modules/fbjs/lib/invariant.js"),s="mixins";e.exports=o},"../node_modules/create-react-class/index.js":function(e,t,n){"use strict";var i=n("../node_modules/react/index.js"),o=n("../node_modules/create-react-class/factory.js");if(void 0===i)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var a=(new i.Component).updater;e.exports=o(i.Component,i.isValidElement,a)},"../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!../node_modules/react-vertical-timeline-component/style.min.css":function(e,t,n){t=e.exports=n("../node_modules/css-loader/lib/css-base.js")(),t.push([e.i,'.vertical-timeline{width:95%;max-width:1170px;margin:2em auto;position:relative;padding:2em 0}.vertical-timeline:after{content:"";display:table;clear:both}.vertical-timeline:before{content:"";position:absolute;top:0;left:18px;height:100%;width:4px;background:#fff}@media only screen and (min-width:1170px){.vertical-timeline{margin-top:3em;margin-bottom:3em;width:90%}.vertical-timeline:before{left:50%;margin-left:-2px}}.vertical-timeline-element{position:relative;margin:2em 0}.vertical-timeline-element:after{content:"";display:table;clear:both}.vertical-timeline-element:first-child{margin-top:0}.vertical-timeline-element:last-child{margin-bottom:0}@media only screen and (min-width:1170px){.vertical-timeline-element{margin:4em 0}.vertical-timeline-element:first-child{margin-top:0}.vertical-timeline-element:last-child{margin-bottom:0}}.vertical-timeline-element-icon{position:absolute;top:0;left:0;width:40px;height:40px;border-radius:50%;box-shadow:0 0 0 4px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)}.vertical-timeline-element-icon svg{display:block;width:24px;height:24px;position:relative;left:50%;top:50%;margin-left:-12px;margin-top:-12px}@media only screen and (min-width:1170px){.vertical-timeline-element-icon{width:60px;height:60px;left:50%;margin-left:-30px;-webkit-transform:translateZ(0);-webkit-backface-visibility:hidden}.vertical-timeline--animate .vertical-timeline-element-icon.is-hidden{visibility:hidden}.vertical-timeline--animate .vertical-timeline-element-icon.bounce-in{visibility:visible;-webkit-animation:cd-bounce-1 .6s;animation:cd-bounce-1 .6s}}@-webkit-keyframes cd-bounce-1{0%{opacity:0;-webkit-transform:scale(.5)}60%{opacity:1;-webkit-transform:scale(1.2)}to{-webkit-transform:scale(1)}}@keyframes cd-bounce-1{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}60%{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}.vertical-timeline-element-content{position:relative;margin-left:60px;background:#fff;border-radius:.25em;padding:1em;box-shadow:0 3px 0 #ddd}.vertical-timeline-element-content:after{content:"";display:table;clear:both}.vertical-timeline-element-content h2{color:#303e49}.vertical-timeline-element-content .vertical-timeline-element-date,.vertical-timeline-element-content p{font-size:13px;font-size:.8125rem;font-weight:500;color:#333}.vertical-timeline-element-content .vertical-timeline-element-date{display:inline-block}.vertical-timeline-element-content p{margin:1em 0 0;line-height:1.6}.vertical-timeline-element-subtitle,.vertical-timeline-element-title{margin:0}.vertical-timeline-element-content .vertical-timeline-element-date{float:left;padding:.8em 0;opacity:.7}.vertical-timeline-element-content:before{content:"";position:absolute;top:16px;right:100%;height:0;width:0;border:7px solid transparent;border-right:7px solid #fff}@media only screen and (min-width:768px){.vertical-timeline-element-content h2{font-size:20px;font-size:1.25rem}.vertical-timeline-element-content p{font-size:16px;font-size:1rem}.vertical-timeline-element-content .vertical-timeline-element-date{font-size:14px;font-size:.875rem}}@media only screen and (min-width:1170px){.vertical-timeline-element-content{margin-left:0;padding:1.5em;width:40%}.vertical-timeline-element-content:before{top:24px;left:100%;border-color:transparent;border-left-color:#fff}.vertical-timeline-element-content .vertical-timeline-element-date{position:absolute;width:100%;left:122%;top:6px;font-size:16px;font-size:1rem}.vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content,.vertical-timeline-element:nth-child(2n):not(.vertical-timeline-element--left) .vertical-timeline-element-content{float:right}.vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content:before,.vertical-timeline-element:nth-child(2n):not(.vertical-timeline-element--left) .vertical-timeline-element-content:before{top:24px;left:auto;right:100%;border-color:transparent;border-right-color:#fff}.vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content .vertical-timeline-element-date,.vertical-timeline-element:nth-child(2n):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date{left:auto;right:122%;text-align:right}.vertical-timeline--animate .vertical-timeline-element-content.is-hidden{visibility:hidden}.vertical-timeline--animate .vertical-timeline-element-content.bounce-in{visibility:visible;-webkit-animation:cd-bounce-2 .6s;animation:cd-bounce-2 .6s}}@media only screen and (min-width:1170px){.vertical-timeline--animate .vertical-timeline-element:nth-child(2n):not(.vertical-timeline-element--left) .vertical-timeline-element-content.bounce-in .vertical-timeline--animate .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content.bounce-in{-webkit-animation:cd-bounce-2-inverse .6s;animation:cd-bounce-2-inverse .6s}}@-webkit-keyframes cd-bounce-2{0%{opacity:0;-webkit-transform:translateX(-100px)}60%{opacity:1;-webkit-transform:translateX(20px)}to{-webkit-transform:translateX(0)}}@keyframes cd-bounce-2{0%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}60%{opacity:1;-webkit-transform:translateX(20px);transform:translateX(20px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes cd-bounce-2-inverse{0%{opacity:0;-webkit-transform:translateX(100px)}60%{opacity:1;-webkit-transform:translateX(-20px)}to{-webkit-transform:translateX(0)}}@keyframes cd-bounce-2-inverse{0%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}60%{opacity:1;-webkit-transform:translateX(-20px);transform:translateX(-20px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}',""])},"../node_modules/react-vertical-timeline-component/dist-es6/VerticalTimeline.js":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n("../node_modules/react/index.js"),c=i(s),m=n("../node_modules/prop-types/index.js"),d=(i(m),function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.animate,n=e.children,i=this.props.className;return i+=" vertical-timeline",t&&(i+=" vertical-timeline--animate"),c.default.createElement("div",{className:i.trim()},n)}}]),t}(s.Component));d.propTypes={},d.defaultProps={animate:!0,className:""},t.default=d},"../node_modules/react-vertical-timeline-component/dist-es6/VerticalTimelineElement.js":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n("../node_modules/react/index.js"),c=i(s),m=n("../node_modules/prop-types/index.js"),d=(i(m),n("../node_modules/react-visibility-sensor/visibility-sensor.js")),p=i(d),u=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onVisibilitySensorChange=n.onVisibilitySensorChange.bind(n),n.state={visible:!1},n}return r(t,e),l(t,[{key:"onVisibilitySensorChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.children,i=e.icon,o=e.iconStyle,a=e.date,r=e.position,l=this.props.className;return l+=" vertical-timeline-element","left"===r&&(l+=" vertical-timeline-element--left"),"right"===r&&(l+=" vertical-timeline-element--right"),c.default.createElement("div",{id:t,className:l},c.default.createElement(p.default,{onChange:this.onVisibilitySensorChange},c.default.createElement("div",null,c.default.createElement("span",{style:o,className:"vertical-timeline-element-icon "+(this.state.visible?"bounce-in":"is-hidden")},i),c.default.createElement("div",{className:"vertical-timeline-element-content "+(this.state.visible?"bounce-in":"is-hidden")},n,c.default.createElement("span",{className:"vertical-timeline-element-date"},a)))))}}]),t}(s.Component);u.propTypes={},u.defaultProps={id:"",children:"",className:"",icon:null,iconStyle:null,date:"",position:""},t.default=u},"../node_modules/react-vertical-timeline-component/dist-es6/index.js":function(e,t,n){"use strict";e.exports={VerticalTimeline:n("../node_modules/react-vertical-timeline-component/dist-es6/VerticalTimeline.js").default,VerticalTimelineElement:n("../node_modules/react-vertical-timeline-component/dist-es6/VerticalTimelineElement.js").default}},"../node_modules/react-vertical-timeline-component/style.min.css":function(e,t,n){var i=n("../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!../node_modules/react-vertical-timeline-component/style.min.css");"string"==typeof i&&(i=[[e.i,i,""]]);n("../node_modules/style-loader/addStyles.js")(i,{});i.locals&&(e.exports=i.locals)},"../node_modules/react-visibility-sensor/lib/is-visible-with-offset.js":function(e,t){e.exports=function(e,t,n){var i=e.direction,o=e.value;switch(i){case"top":return n.top+o<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+o<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-o>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-o>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},"../node_modules/react-visibility-sensor/visibility-sensor.js":function(e,t,n){"use strict";var i=n("../node_modules/react/index.js"),o=n("../node_modules/react-dom/index.js"),a=n("../node_modules/prop-types/index.js"),r=n("../node_modules/create-react-class/index.js"),l=n("../node_modules/react-visibility-sensor/lib/is-visible-with-offset.js"),s=a.any;"undefined"!=typeof window&&(s=a.instanceOf(window.Element)),e.exports=r({displayName:"VisibilitySensor",propTypes:{onChange:a.func,active:a.bool,partialVisibility:a.oneOfType([a.bool,a.oneOf(["top","right","bottom","left"])]),delayedCall:a.bool,offset:a.oneOfType([a.shape({top:a.number,left:a.number,bottom:a.number,right:a.number}),a.shape({direction:a.oneOf(["top","right","bottom","left"]),value:a.number})]),scrollCheck:a.bool,scrollDelay:a.number,scrollThrottle:a.number,resizeCheck:a.bool,resizeDelay:a.number,resizeThrottle:a.number,intervalCheck:a.bool,intervalDelay:a.number,containment:s,children:a.oneOfType([a.element,a.func]),minTopValue:a.number},getDefaultProps:function(){return{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:i.createElement("span")}},getInitialState:function(){return{isVisible:null,visibilityRect:{}}},componentDidMount:function(){this.node=o.findDOMNode(this),this.props.active&&this.startWatching()},componentWillUnmount:function(){this.stopWatching()},componentWillReceiveProps:function(e){e.active&&!this.props.active?(this.setState(this.getInitialState()),this.startWatching()):e.active||this.stopWatching()},getContainer:function(){return this.props.containment||window},addEventListener:function(e,t,n,i){this.debounceCheck||(this.debounceCheck={});var o,a,r=function(){o=null,this.check()}.bind(this);a=i>-1?function(){o||(o=setTimeout(r,i||0))}:function(){clearTimeout(o),o=setTimeout(r,n||0)};var l={target:e,fn:a,getLastTimeout:function(){return o}};e.addEventListener(t,l.fn),this.debounceCheck[t]=l},startWatching:function(){this.debounceCheck||this.interval||(this.props.intervalCheck&&(this.interval=setInterval(this.check,this.props.intervalDelay)),this.props.scrollCheck&&this.addEventListener(this.getContainer(),"scroll",this.props.scrollDelay,this.props.scrollThrottle),this.props.resizeCheck&&this.addEventListener(window,"resize",this.props.resizeDelay,this.props.resizeThrottle),!this.props.delayedCall&&this.check())},stopWatching:function(){if(this.debounceCheck)for(var e in this.debounceCheck)if(this.debounceCheck.hasOwnProperty(e)){var t=this.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),this.debounceCheck[e]=null}this.debounceCheck=null,this.interval&&(this.interval=clearInterval(this.interval))},check:function(){var e,t,n=this.node;if(!n)return this.state;if(e=n.getBoundingClientRect(),this.props.containment){var i=this.props.containment.getBoundingClientRect();t={top:i.top,left:i.left,bottom:i.bottom,right:i.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var o=this.props.offset||{};"object"==typeof o&&(t.top+=o.top||0,t.left+=o.left||0,t.bottom-=o.bottom||0,t.right-=o.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},r=a.top&&a.left&&a.bottom&&a.right;if(this.props.partialVisibility){var s=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof this.props.partialVisibility&&(s=a[this.props.partialVisibility]),r=this.props.minTopValue?s&&e.top<=t.bottom-this.props.minTopValue:s}"string"==typeof o.direction&&"number"==typeof o.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",o.direction,o.value),r=l(o,e,t));var c=this.state;return this.state.isVisible!==r&&(c={isVisible:r,visibilityRect:a},this.setState(c),this.props.onChange&&this.props.onChange(r,a)),c},render:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):i.Children.only(this.props.children)}})},"./app/components/About.js":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){return e.raw=t,e}Object.defineProperty(t,"__esModule",{value:!0});var l=n("../node_modules/react/index.js"),s=n.n(l),c=n("../node_modules/styled-components/dist/styled-components.browser.es.js"),m=n("./app/components/Footer.js"),d=n("../node_modules/react-ga/dist/react-ga.js"),p=n.n(d),u=n("../node_modules/react-vertical-timeline-component/dist-es6/index.js"),f=(n.n(u),n("../node_modules/react-vertical-timeline-component/style.min.css")),h=(n.n(f),r(["\n    font-size: 30px;\n    font-weight: normal;\n    padding: 15px;\n"],["\n    font-size: 30px;\n    font-weight: normal;\n    padding: 15px;\n"])),b=r(["\n    width: 70%;\n    margin: 0 auto;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        width: 80%;\n    }\n\n    @media (max-width: 1023px) {\n        width: 85%;\n    }\n"],["\n    width: 70%;\n    margin: 0 auto;\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        width: 80%;\n    }\n\n    @media (max-width: 1023px) {\n        width: 85%;\n    }\n"]),v=r(["\n    margin-top: 80px;\n    padding-bottom: 80px;\n    background: #f4f7f8;\n    font-family: 'Varela Round';\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        padding: 0;\n    }\n\n    @media (max-width: 1023px) {\n        padding: 0;\n    }\n"],["\n    margin-top: 80px;\n    padding-bottom: 80px;\n    background: #f4f7f8;\n    font-family: 'Varela Round';\n\n    @media (max-width: 1199px) and (min-width: 1024px) {\n        padding: 0;\n    }\n\n    @media (max-width: 1023px) {\n        padding: 0;\n    }\n"]),y={doctor:"M 598 256 v -86 h -172 v 86 h 172 Z M 854 256 c 48 0 84 38 84 86 v 468 c 0 48 -36 86 -84 86 h -684 c -48 0 -84 -38 -84 -86 v -468 c 0 -48 36 -86 84 -86 h 172 v -86 c 0 -48 36 -84 84 -84 h 172 c 48 0 84 36 84 84 v 86 h 172 Z",freecodecamp:"M 622 708 l 198 -196 l -198 -196 l 60 -60 l 256 256 l -256 256 Z M 402 708 l -60 60 l -256 -256 l 256 -256 l 60 60 l -198 196 Z",grad:"M 512 128 l 470 256 v 342 h -86 v -296 l -384 210 l -470 -256 Z M 214 562 l 298 164 l 298 -164 v 172 l -298 162 l -298 -162 v -172 Z"},g=function(e){return s.a.createElement("svg",{width:"22",height:"22",viewBox:"0 0 1024 1024"},s.a.createElement("path",{d:y[e.icon]}))},w=c.a.h4(h),x=c.a.div(b),E=c.a.div(v),_=function(e){function t(n){i(this,t);var a=o(this,e.call(this,n));return a.state={loading:!0,error:null},window.scrollTo(0,0),a}return a(t,e),t.prototype.componentDidMount=function(){p.a.ga("send","pageview","/about")},t.prototype.render=function(){return s.a.createElement(E,null,s.a.createElement("div",{className:"clearfix"}),s.a.createElement(x,null,s.a.createElement(w,null,"Where I've worked"),s.a.createElement("div",{className:"skills__container"},s.a.createElement(u.VerticalTimeline,null,s.a.createElement(u.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2016 - present",iconStyle:{background:"#00BDBD",color:"#fff",fill:"#fff"},icon:s.a.createElement(g,{icon:"doctor"})},s.a.createElement("h3",{className:"vertical-timeline-element-title"},"Frontend Engineer"),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Doctor.com"),s.a.createElement("p",null,"Frontend web and app development with React.js, Webpack, Angular.js 1.x, jQuery, and Sass.")),s.a.createElement(u.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2015 - 2016",iconStyle:{background:"#269bda",color:"#fff",fill:"#fff"},icon:s.a.createElement(g,{icon:"doctor"})},s.a.createElement("h3",{className:"vertical-timeline-element-title"},"Freelance Web Developer"),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Palo Alto, CA"),s.a.createElement("p",null,"Fullstack web development with Angular.js 1.x, Node.js, jQuery, and Sass.")),s.a.createElement(u.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2015 - 2016",iconStyle:{background:"darkgreen",color:"#fff",fill:"#fff"},icon:s.a.createElement(g,{icon:"freecodecamp"})},s.a.createElement("h3",{className:"vertical-timeline-element-title"},"Frontend Development Certification"),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"FreeCodeCamp"),s.a.createElement("p",null,"User Experience, Visual Design, Javascript, CSS, HTML")),s.a.createElement(u.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2012 - 2014",iconStyle:{background:"#FFC500",color:"#fff",fill:"#fff"},icon:s.a.createElement(g,{icon:"grad"})},s.a.createElement("h3",{className:"vertical-timeline-element-title"},"B.A. Politics"),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"University of California, Santa Cruz"),s.a.createElement("p",null,"Sub-Saharan African and Middle Eastern Affairs"))))),s.a.createElement(m.a,null))},t}(s.a.Component);t.default=_},"./app/components/Footer.js":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/index.js"),l=n.n(r),s=n("../node_modules/react-ga/dist/react-ga.js"),c=n.n(s),m=n("../node_modules/@material-ui/core/IconButton/index.js"),d=n.n(m),p=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.prototype.renderFooterClass=function(){var e=this.props,t=e.fixed,n=e.type;return t?"portfolio"===n?"footer footer__portfolio":"footer fixed":"footer"},t.prototype.sendAnalytics=function(e){c.a.event({category:"Footer Link",action:"Social Media Link Click",label:"Navigated to "+e+" Profile"})},t.prototype.render=function(){var e=this;return l.a.createElement("div",{className:this.renderFooterClass()},l.a.createElement("div",{className:"footer__wrapper"},l.a.createElement("div",{className:"footer__text"},"© 2018 Emile Choghi"),l.a.createElement("div",{className:"social-links"},l.a.createElement("li",null,l.a.createElement(d.a,{"aria-label":"github",component:"a",href:"https://github.com/echoghi",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.sendAnalytics("Github")}},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",null,l.a.createElement(d.a,{component:"a","aria-label":"linked in",href:"https://www.linkedin.com/in/emile-choghi-a6b60ba1/",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.sendAnalytics("LinkedIn")}},l.a.createElement("i",{className:"icon-linkedin"}))),l.a.createElement("li",null,l.a.createElement(d.a,{component:"a","aria-label":"angel list",href:"https://angel.co/emile-choghi",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.sendAnalytics("Angellist")}},l.a.createElement("i",{className:"icon-angel"}))))))},t}(l.a.PureComponent);t.a=p}});