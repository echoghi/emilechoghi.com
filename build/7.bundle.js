/*! Emile Choghi's Portfolio Version: 3.0.0 Date: 10/8/2018 @ 15:39 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"../node_modules/react-flip-toolkit/es/index.js":function(t,e,n){"use strict";var i=n("../node_modules/react/index.js"),r=n.n(i),o=n("../node_modules/prop-types/index.js"),a=n.n(o),s=function(t){var e=t.unflippedIds,n=t.flipCallbacks,i=t.getElement,r=t.newFlipChildrenPositions,o=t.cachedFlipChildrenPositions,a=t.inProgressAnimations;e.filter(function(t){return r[t]&&n[t]&&n[t].onAppear}).forEach(function(t,e){var r=i(t);n[t].onAppear(r,e)});var s=e.filter(function(t){return r[t]&&n[t]&&n[t].onDelayedAppear}).map(function(t,e){var r=i(t);return r.style.opacity="0",function(){n[t].onDelayedAppear(r,e)}}),l=[],p=[],c=e.filter(function(t){return o[t]&&n[t]&&n[t].onExit}).map(function(t,e){var i=o[t].domData,r=i.element,c=i.parent,u=i.childPosition,f=u.top,h=u.left,d=u.width,g=u.height;"static"===getComputedStyle(c).position&&(c.style.position="relative"),r.style.position="absolute",r.style.top=f+"px",r.style.left=h+"px",r.style.height=g+"px",r.style.width=d+"px";var m=p.filter(function(t){return t[0]===c})[0];m||(m=[c,document.createDocumentFragment()],p.push(m)),m[1].appendChild(r),l.push(r);var y=function(){try{!function(t){if(l.length){var e=l.indexOf(t);-1!==e&&(l.splice(e,1),l.length||s.forEach(function(t){return t()}))}}(r),c.removeChild(r)}catch(t){}};return a[t]={stop:y},function(){return n[t].onExit(r,e,y)}});p.forEach(function(t){var e=t[0],n=t[1];e.appendChild(n)}),c.forEach(function(t){return t()}),0===l.length&&s.forEach(function(t){return t()})};
/*! @license Rematrix v0.2.3

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
function l(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(16===t.length)return t;if(6===t.length){var e=p();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function p(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function c(t,e){for(var n=l(t),i=l(e),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],s=0;s<4;s++){var p=4*s,c=[i[p],i[p+1],i[p+2],i[p+3]],u=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];r[o+p]=u}return r}var u=function(t){return"number"==typeof t},f=function(t){return"[object Object]"===Object.prototype.toString.call(t)},h=function(t){return Array.prototype.slice.apply(t)},d=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){if(e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}),t},g={noWobble:{stiffness:200,damping:26},gentle:{stiffness:120,damping:14},veryGentle:{stiffness:130,damping:17},wobbly:{stiffness:180,damping:12},stiff:{stiffness:260,damping:26}},m="data-flip-id",y="data-inverse-flip-id",v="data-flip-config",S="data-portal-key",_=function(t,e,n){var i=h(t.querySelectorAll(e)).map(function(t){return t.dataset.flipId});return n.filter(function(t){return i.indexOf(t)>-1})},E="["+m+"]",C=void 0;"undefined"!=typeof window&&(C=window.requestAnimationFrame);var b=C=C||function(t){window.setTimeout(t,1e3/60)},w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var I=Date.now(),O="object"===("undefined"==typeof performance?"undefined":w(performance))&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()-I};function A(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}var T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.prototype.run=function(){var t=this;!function(t){b(t)}(function(){t.springSystem.loop(O())})},t}();function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var P=function t(){x(this,t),this.position=0,this.velocity=0},V=function(){function t(e){x(this,t),this._id="s"+t._ID++,this._springSystem=e,this.listeners=[],this._startValue=0,this._currentState=new P,this._displacementFromRestThreshold=.001,this._endValue=0,this._overshootClampingEnabled=!1,this._previousState=new P,this._restSpeedThreshold=.001,this._tempState=new P,this._timeAccumulator=0,this._wasAtRest=!0}return t.prototype.getId=function(){return this._id},t.prototype.destroy=function(){this.listeners=[],this._springSystem.deregisterSpring(this)},t.prototype.setSpringConfig=function(t){return this._springConfig=t,this},t.prototype.getCurrentValue=function(){return this._currentState.position},t.prototype.getDisplacementDistanceForState=function(t){return Math.abs(this._endValue-t.position)},t.prototype.setEndValue=function(t){if(this._endValue===t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var e=0,n=this.listeners.length;e<n;e++){var i=this.listeners[e].onSpringEndStateChange;i&&i(this)}return this},t.prototype.setVelocity=function(t){return t===this._currentState.velocity?this:(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId()),this)},t.prototype.setOvershootClampingEnabled=function(t){return this._overshootClampingEnabled=t,this},t.prototype.isOvershooting=function(){var t=this._startValue,e=this._endValue;return this._springConfig.tension>0&&(t<e&&this.getCurrentValue()>e||t>e&&this.getCurrentValue()<e)},t.prototype.advance=function(e,n){var i=this.isAtRest();if(!i||!this._wasAtRest){var r=n;n>t.MAX_DELTA_TIME_SEC&&(r=t.MAX_DELTA_TIME_SEC),this._timeAccumulator+=r;for(var o=this._springConfig.tension,a=this._springConfig.friction,s=this._currentState.position,l=this._currentState.velocity,p=this._tempState.position,c=this._tempState.velocity,u=void 0,f=void 0,h=void 0,d=void 0,g=void 0,m=void 0,y=void 0,v=void 0;this._timeAccumulator>=t.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=t.SOLVER_TIMESTEP_SEC,this._timeAccumulator<t.SOLVER_TIMESTEP_SEC&&(this._previousState.position=s,this._previousState.velocity=l),u=l,f=o*(this._endValue-p)-a*l,p=s+u*t.SOLVER_TIMESTEP_SEC*.5,h=c=l+f*t.SOLVER_TIMESTEP_SEC*.5,d=o*(this._endValue-p)-a*c,p=s+h*t.SOLVER_TIMESTEP_SEC*.5,g=c=l+d*t.SOLVER_TIMESTEP_SEC*.5,m=o*(this._endValue-p)-a*c,p=s+g*t.SOLVER_TIMESTEP_SEC,y=c=l+m*t.SOLVER_TIMESTEP_SEC,v=1/6*(f+2*(d+m)+(o*(this._endValue-p)-a*c)),s+=1/6*(u+2*(h+g)+y)*t.SOLVER_TIMESTEP_SEC,l+=v*t.SOLVER_TIMESTEP_SEC;this._tempState.position=p,this._tempState.velocity=c,this._currentState.position=s,this._currentState.velocity=l,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/t.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),i=!0);var S=!1;this._wasAtRest&&(this._wasAtRest=!1,S=!0);var _=!1;i&&(this._wasAtRest=!0,_=!0),this.notifyPositionUpdated(S,_)}},t.prototype.notifyPositionUpdated=function(t,e){for(var n=0,i=this.listeners.length;n<i;n++){var r=this.listeners[n];t&&r.onSpringActivate&&r.onSpringActivate(this),r.onSpringUpdate&&r.onSpringUpdate(this),e&&r.onSpringAtRest&&r.onSpringAtRest(this)}},t.prototype.systemShouldAdvance=function(){return!this.isAtRest()||!this.wasAtRest()},t.prototype.wasAtRest=function(){return this._wasAtRest},t.prototype.isAtRest=function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},t.prototype._interpolate=function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},t.prototype.addListener=function(t){return this.listeners.push(t),this},t.prototype.removeListener=function(t){return A(this.listeners,t),this},t}();V._ID=0,V.MAX_DELTA_TIME_SEC=.064,V.SOLVER_TIMESTEP_SEC=.001;var R=V;var M=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.looper=e||new T,this.looper.springSystem=this,this.listeners=[],this._activeSprings=[],this._idleSpringIndices=[],this._isIdle=!0,this._lastTimeMillis=-1,this._springRegistry={}}return t.prototype.createSpring=function(t,e){return this.createSpringWithConfig({tension:t,friction:e})},t.prototype.createSpringWithConfig=function(t){var e=new R(this);return this.registerSpring(e),e.setSpringConfig(t),e},t.prototype.getIsIdle=function(){return this._isIdle},t.prototype.registerSpring=function(t){this._springRegistry[t.getId()]=t},t.prototype.deregisterSpring=function(t){A(this._activeSprings,t),delete this._springRegistry[t.getId()]},t.prototype.advance=function(t,e){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(var n=0,i=this._activeSprings.length;n<i;n++){var r=this._activeSprings[n];if(!r)return;r.systemShouldAdvance()?r.advance(t/1e3,e/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(r))}for(;this._idleSpringIndices.length>0;){var o=this._idleSpringIndices.pop();o>=0&&this._activeSprings.splice(o,1)}},t.prototype.loop=function(t){var e=void 0;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);var n=t-this._lastTimeMillis;this._lastTimeMillis=t;var i=0,r=this.listeners.length;for(i=0;i<r;i++)(e=this.listeners[i]).onBeforeIntegrate&&e.onBeforeIntegrate(this);for(this.advance(t,n),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),i=0;i<r;i++)(e=this.listeners[i]).onAfterIntegrate&&e.onAfterIntegrate(this);this._isIdle||this.looper.run()},t.prototype.activateSpring=function(t){var e=this._springRegistry[t];-1===this._activeSprings.indexOf(e)&&this._activeSprings.push(e),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},t}()),F=function(t){var e=t.springConfig,n=e.stiffness,i=e.damping,r=e.overshootClamping,o=t.noOp,a=t.onSpringActivate,s=t.getOnUpdateFunc,l=t.onAnimationEnd;if(!o){var p=M.createSpring(n,i);return p.setOvershootClampingEnabled(!!r),p.addListener({onSpringActivate:a,onSpringUpdate:s(p.destroy.bind(p)),onSpringAtRest:function(){p.destroy(),l()}}),p}},j=function t(e){e&&e.forEach(function(e){!function(t){var e=F(t);e?e.setEndValue(1):t.onSpringActivate()}(e),t(e.immediate)})},D=function(t){var e=t.flipDict,n=t.topLevelChildren,i=t.initiateStaggeredAnimations,r={root:{staggeredChildren:{},immediateChildren:[]}};return n.forEach(function(t){!function t(n,r){var o=e[r];o&&(o.stagger?n.staggeredChildren[o.stagger]?n.staggeredChildren[o.stagger].push(o):n.staggeredChildren[o.stagger]=[o]:n.immediateChildren.push(o),o.onSpringActivate=function(){j(o.immediateChildren),i(o.staggeredChildren)},o.staggeredChildren={},o.immediateChildren=[],o.childIds.forEach(function(e){return t(o,e)}))}(r.root,t)}),r},L=function(t){var e=t.staggerConfig,n=t.flipDict,i=t.topLevelChildren,r=function(t){t&&Object.keys(t).length&&Object.keys(t).forEach(function(n){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t&&t.length){e.reverse&&t.reverse();var n=e.speed?1+Math.max(Math.min(e.speed,0),1):1.1,i=1/Math.max(Math.min(t.length,100),10),r=t.filter(function(t){return!t.noOp}).map(function(t,e){var o=t.getOnUpdateFunc;return t.getOnUpdateFunc=function(t){var a=o(t);return function(t){var o=t.getCurrentValue();o>i&&r[e+1]&&r[e+1].setEndValue(Math.min(o*n,1)),a(t)}},t}).map(function(t){return F(t)});r[0]&&r[0].setEndValue(1)}}(t[n],e[n])})},o=D({flipDict:n,topLevelChildren:i,initiateStaggeredAnimations:r});j(o.root.immediateChildren),r(o.root.staggeredChildren)},k=function(t){return[0,1,4,5,12,13].map(function(e){return t[e]})},K=function(t){var e=t.top,n=t.bottom,i=t.left,r=t.right;return e<window.innerHeight&&n>0&&i<window.innerWidth&&r>0},q=function(t,e,n){return t+(e-t)*n},U=function(t){var e=t.flippedIds,n=t.flipCallbacks,i=t.inProgressAnimations,r=t.cachedFlipChildrenPositions,o=t.newFlipChildrenPositions,a=t.applyTransformOrigin,s=t.spring,m=t.getElement,v=t.debug,S=t.staggerConfig,C=t.decisionData,b=document.querySelector("body");v&&console.error('[react-flip-toolkit]\nThe "debug" prop is set to true. All FLIP animations will return at the beginning of the transition.');var w=function(t){var e=t.reduce(function(t,e){return t[e]=t[e]?t[e]+1:1,t},{});return Object.keys(e).filter(function(t){return e[t]>1})}(e);w.length&&console.error("[react-flip-toolkit]\nThere are currently multiple elements with the same flipId on the page.\nThe animation will only work if each Flipped component has a unique flipId.\nDuplicate flipId"+(w.length>1?"s":"")+": "+w.join("\n"));var I=e.map(function(t){var e=r[t].rect,v=o[t].rect,S=r[t].opacity,_=o[t].opacity,E=v.width<1||v.height<1;if(!K(e)&&!K(v))return!1;if(0===e.width&&0===v.width||0===e.height&&0===v.height)return!1;var w=m(t);if(!w)return!1;var I=JSON.parse(w.dataset.flipConfig),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.flipperSpring,n=t.flippedSpring,i=function(t){return f(t)?t:g[t]?g[t]:{}};return d({},g.noWobble,i(e),i(n))}({flipperSpring:s,flippedSpring:I.spring}),A=!0===I.stagger?"default":I.stagger,T={element:w,id:t,stagger:A,springConfig:O,noOp:!0};if(n[t]&&n[t].shouldFlip&&!n[t].shouldFlip(C.prev,C.current))return T;if(e.left===v.left&&e.top===v.top&&e.width===v.width&&e.height===v.height&&S===_)return T;T.noOp=!1;var x=function(t){if("string"==typeof t){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e)return l(e[2].split(", ").map(parseFloat))}return p()}(o[t].transform),P={matrix:x},V={},R=[x];I.translate&&(R.push(function(t){var e=p();return e[12]=t,e}(e.left-v.left)),R.push(function(t){var e=p();return e[13]=t,e}(e.top-v.top))),I.scale&&(R.push(function(t){var e=p();return e[0]=t,e}(Math.max(e.width,1)/Math.max(v.width,1))),R.push(function(t){var e=p();return e[5]=t,e}(Math.max(e.height,1)/Math.max(v.height,1)))),I.opacity&&(V.opacity=S,P.opacity=_);var M=[];n[t]&&n[t].shouldInvert&&!n[t].shouldInvert(C.prev,C.current)||(M=function(t,e){return h(t.querySelectorAll("["+y+'="'+e+'"]'))}(w,t).map(function(t){return[t,JSON.parse(t.dataset.flipConfig)]})),V.matrix=k(R.reduce(c)),P.matrix=k(P.matrix);var F=function(t){var e=t.element,n=t.invertedChildren,i=t.body;return function(t){var r=t.matrix,o=t.opacity,a=t.forceMinVals;u(o)&&(e.style.opacity=o),a&&(e.style.minHeight="1px",e.style.minWidth="1px"),r&&(e.style.transform=function(t){return"matrix("+t.join(", ")+")"}(r),n&&function(t){var e=t.invertedChildren,n=t.matrix,i=t.body;e.forEach(function(t){var e=t[0],r=t[1];if(i.contains(e)){var o=n[0],a=n[3],s=n[4],l=n[5],p={translateX:0,translateY:0,scaleX:1,scaleY:1},c="";r.translate&&(p.translateX=-s/o,p.translateY=-l/a,c+="translate("+p.translateX+"px, "+p.translateY+"px)"),r.scale&&(p.scaleX=1/o,p.scaleY=1/a,c+=" scale("+p.scaleX+", "+p.scaleY+")"),e.style.transform=c}})}({invertedChildren:n,matrix:r,body:i}))}}({element:w,invertedChildren:M,body:b}),j=void 0;if(n[t]&&n[t].onComplete){var D=n[t].onComplete;j=function(){return D(w,C.prev,C.current)}}var L=u(V.opacity)&&V.opacity!==P.opacity,U=!1;return d({},T,{stagger:A,springConfig:O,getOnUpdateFunc:function(e){return i[t]={stop:e,onComplete:j},function(i){U||(U=!0,n[t]&&n[t].onStart&&n[t].onStart(w,C.prev,C.current));var r=i.getCurrentValue();if(b.contains(w)){var o={};o.matrix=V.matrix.map(function(t,e){return q(t,P.matrix[e],r)}),L&&(o.opacity=q(V.opacity,P.opacity,r)),F(o)}else e()}},initializeFlip:function(){F({matrix:V.matrix,opacity:L&&V.opacity,forceMinVals:E}),I.transformOrigin?w.style.transformOrigin=I.transformOrigin:a&&(w.style.transformOrigin="0 0"),M.forEach(function(t){var e=t[0],n=t[1];n.transformOrigin?e.style.transformOrigin=n.transformOrigin:a&&(e.style.transformOrigin="0 0")})},onAnimationEnd:function(){delete i[t],function(t){return"function"==typeof t}(j)&&j(),E&&w&&(w.style.minHeight="",w.style.minWidth="")}})}).filter(function(t){return t});if(I.forEach(function(t){var e=t.initializeFlip;return e&&e()}),!v){var O=I.reduce(function(t,e){return t[e.id]=e,t},{}),A=function(t,e){var n={};return function i(r,o,a){var s=r+" "+E,l=_(document,s,e),p=a.filter(function(t){return-1===l.indexOf(t)});n[o]=p,p.forEach(function(e){t[e]&&(t[e].level=o)}),0!==l.length&&i(s,o+1,l)}(E,0,_(document,E,e)),Object.keys(t).forEach(function(i){var r=t[i];r.childIds=_(r.element,E,e).filter(function(t){return n[r.level+1].indexOf(t)>-1})}),{topLevelChildren:n[0]}}(O,e).topLevelChildren;L({topLevelChildren:A,flipDict:O,staggerConfig:S})}},X=function(t,e){var n;return d(t,((n={})[e[0]]=e[1],n))},N=function(t,e){return h(e?document.querySelectorAll("["+S+'="'+e+'"]'):t.querySelectorAll("["+m+"]"))},W=function(t){var e=t.element,n=t.flipCallbacks,i=void 0===n?{}:n,r=t.inProgressAnimations,o=void 0===r?{}:r,a=t.portalKey,s=N(e,a),l=h(e.querySelectorAll("["+y+"]")),p={},c=[];s.filter(function(t){return i&&i[t.dataset.flipId]&&i[t.dataset.flipId].onExit}).forEach(function(t){var e=t.parentNode,n=c.findIndex(function(t){return t[0]===e});-1===n&&(c.push([e,e.getBoundingClientRect()]),n=c.length-1),p[t.dataset.flipId]=c[n][1]});var u=s.map(function(t){var e={},n=t.getBoundingClientRect();if(i&&i[t.dataset.flipId]&&i[t.dataset.flipId].onExit){var r=p[t.dataset.flipId];d(e,{element:t,parent:t.parentNode,childPosition:{top:n.top-r.top,left:n.left-r.left,width:n.width,height:n.height}})}return[t.dataset.flipId,{rect:n,opacity:parseFloat(window.getComputedStyle(t).opacity),domData:e}]}).reduce(X,{});return function(t){Object.keys(t).forEach(function(e){t[e].stop&&t[e].stop(),delete t[e]})}(o),s.concat(l).forEach(function(t){t.style.transform="",t.style.opacity=""}),{flippedElementPositions:u,cachedOrderedFlipIds:s.map(function(t){return t.dataset.flipId})}},B=function(t){var e=t.element,n=t.portalKey,i=t.ids;return N(e,n).filter(function(t){return!i||i.indexOf(t.dataset.flipId)>-1}).map(function(t){var e=window.getComputedStyle(t),n=t.getBoundingClientRect();return 0!==n.height&&0!==n.width||"IMG"!==t.tagName?[t.dataset.flipId,{rect:n,opacity:parseFloat(e.opacity),domData:{},transform:e.transform}]:[t.dataset.flipId,"unloadedImg"]}).reduce(X,{})},Y=function(t){var e=t.cachedOrderedFlipIds,n=void 0===e?[]:e,i=t.inProgressAnimations,r=void 0===i?{}:i,o=t.cachedFlipChildrenPositions,a=void 0===o?{}:o,l=t.flipCallbacks,p=void 0===l?{}:l,c=t.containerEl,u=t.applyTransformOrigin,f=t.spring,h=t.debug,g=t.portalKey,y=t.staggerConfig,v=void 0===y?{}:y,_=t.decisionData,E=void 0===_?{}:_,C=B({element:c,portalKey:g}),b=function(t,e){return e?function(t){return document.querySelector("["+m+'="'+t+'"]['+S+"="+e+"]")}:function(e){return t.querySelector("["+m+'="'+e+'"]')}}(c,g),w=function(t){return a[t]&&C[t]},I=Object.keys(a).concat(Object.keys(C)).filter(function(t){return!w(t)}),O={flipCallbacks:p,getElement:b,cachedFlipChildrenPositions:a,newFlipChildrenPositions:C,inProgressAnimations:r};s(d({},O,{unflippedIds:I}));var A=n.filter(w),T=A.filter(function(t){return"unloadedImg"!==C[t]}),x=d({},O,{flippedIds:T,applyTransformOrigin:u,spring:f,debug:h,staggerConfig:v,decisionData:E});U(x);var P=A.filter(function(t){return"unloadedImg"===C[t]});P.length&&setTimeout(function(){var t=B({element:c,portalKey:g,ids:P}),e=P.filter(function(e){return"unloadedImg"!==t[e]});U(d({},x,{flippedIds:e}))})};var J=Object(i.createContext)("flip"),H=Object(i.createContext)("portal"),z=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return i.inProgressAnimations={},i.flipCallbacks={},i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getSnapshotBeforeUpdate=function(t){return t.flipKey!==this.props.flipKey?W({element:this.el,flipCallbacks:this.flipCallbacks,inProgressAnimations:this.inProgressAnimations,portalKey:this.props.portalKey}):null},e.prototype.componentDidUpdate=function(t,e,n){this.props.flipKey!==t.flipKey&&Y({cachedFlipChildrenPositions:n.flippedElementPositions,cachedOrderedFlipIds:n.cachedOrderedFlipIds,containerEl:this.el,inProgressAnimations:this.inProgressAnimations,flipCallbacks:this.flipCallbacks,applyTransformOrigin:this.props.applyTransformOrigin,spring:this.props.spring,debug:this.props.debug,portalKey:this.props.portalKey,staggerConfig:this.props.staggerConfig,decisionData:{prev:t.decisionData,current:this.props.decisionData}})},e.prototype.render=function(){var t=this,e=this.props,n=e.element,i=e.className,o=e.portalKey,a=n;return r.a.createElement(H.Provider,{value:o},r.a.createElement(J.Provider,{value:this.flipCallbacks},r.a.createElement(a,{className:i,ref:function(e){return t.el=e}},this.props.children)))},e}(i.Component);z.propTypes={},z.defaultProps={applyTransformOrigin:!0,element:"div"};var G=z,Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Z(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}a.a.node.isRequired,a.a.bool,a.a.bool,a.a.bool,a.a.string,a.a.oneOfType([a.a.string,a.a.object]),a.a.func,a.a.func,a.a.func,a.a.func,a.a.func,a.a.func,a.a.func,a.a.string,a.a.oneOfType([a.a.string,a.a.bool]);function $(t){var e,n=t.children,r=t.flipId,o=t.inverseFlipId,a=t.portalKey,s=Z(t,["children","flipId","inverseFlipId","portalKey"]),l=void 0;try{l=i.Children.only(n)}catch(t){throw new Error("Each Flipped component must wrap a single child")}s.scale||s.translate||s.opacity||d(s,{translate:!0,scale:!0,opacity:!0});var p=((e={})[m]=r,e[y]=o,e[v]=JSON.stringify(s),e);return a&&(p[S]=a),Object(i.cloneElement)(l,p)}var tt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.flipId,i=t.shouldFlip,o=t.shouldInvert,a=t.onAppear,s=t.onDelayedAppear,l=t.onStart,p=t.onComplete,c=t.onExit,u=Z(t,["children","flipId","shouldFlip","shouldInvert","onAppear","onDelayedAppear","onStart","onComplete","onExit"]);return u.inverseFlipId?r.a.createElement($,u,e):r.a.createElement(H.Consumer,null,function(t){return r.a.createElement(J.Consumer,null,function(h){return f(h)&&(h[n]={shouldFlip:i,shouldInvert:o,onAppear:a,onDelayedAppear:s,onStart:l,onComplete:p,onExit:c}),r.a.createElement($,Q({flipId:n},u,{portalKey:t}),e)})})},e}(i.Component);tt.propTypes={};var et=tt;n.d(e,"b",function(){return G}),n.d(e,"a",function(){return et})}}]);