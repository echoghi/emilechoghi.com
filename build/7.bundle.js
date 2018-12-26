/*! Emile Choghi's Portfolio Version: 3.0.0 Date: 12/26/2018 @ 14:42 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(t,e,n){"use strict";var i=n(0),r=n.n(i),o=n(1),a=n.n(o),s=function(t){var e=t.unflippedIds,n=t.flipCallbacks,i=t.getElement,r=t.newFlipChildrenPositions,o=t.cachedFlipChildrenPositions,a=t.inProgressAnimations,s=e.filter(function(t){return r[t]&&n[t]}),l=e.filter(function(t){return o[t]&&n[t]&&n[t].onExit}),p=void 0,c=new Promise(function(t,e){p=t}),u=[],f=0,h=l.map(function(t,e){var i=o[t].domData,r=i.element,s=i.parent,l=i.childPosition,c=l.top,h=l.left,d=l.width,g=l.height;"static"===getComputedStyle(s).position&&(s.style.position="relative"),r.style.transform="matrix(1, 0, 0, 1, 0, 0)",r.style.position="absolute",r.style.top=c+"px",r.style.left=h+"px",r.style.height=g+"px",r.style.width=d+"px";var m=u.filter(function(t){return t[0]===s})[0];m||(m=[s,document.createDocumentFragment()],u.push(m)),m[1].appendChild(r),f+=1;var v=function(){try{s.removeChild(r),0==(f-=1)&&p()}catch(t){}};return a[t]={stop:v},function(){return n[t].onExit(r,e,v)}});u.forEach(function(t){var e=t[0],n=t[1];e.appendChild(n)}),h.length||p();return{hideEnteringElements:function(){s.forEach(function(t){n[t]&&n[t].onAppear&&(i(t).style.opacity="0")})},animateEnteringElements:function(){s.forEach(function(t,e){var r=i(t);n[t]&&n[t].onAppear&&n[t].onAppear(r,e)})},animateExitingElements:function(){return h.forEach(function(t){return t()}),c}}};
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
function l(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(16===t.length)return t;if(6===t.length){var e=p();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function p(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function c(t,e){for(var n=l(t),i=l(e),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],s=0;s<4;s++){var p=4*s,c=[i[p],i[p+1],i[p+2],i[p+3]],u=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];r[o+p]=u}return r}var u=function(t){return"number"==typeof t},f=function(t){return"[object Object]"===Object.prototype.toString.call(t)},h=function(t){return Array.prototype.slice.apply(t)},d=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){if(e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}),t},g={noWobble:{stiffness:200,damping:26},gentle:{stiffness:120,damping:14},veryGentle:{stiffness:130,damping:17},wobbly:{stiffness:180,damping:12},stiff:{stiffness:260,damping:26}},m="data-flip-id",v="data-inverse-flip-id",y="data-flip-config",S="data-portal-key",_=function(t,e,n){var i=h(t(e)).map(function(t){return t.dataset.flipId});return n.filter(function(t){return i.indexOf(t)>-1})},E="["+m+"]",C=void 0;"undefined"!=typeof window&&(C=window.requestAnimationFrame);var b=C=C||function(t){window.setTimeout(t,1e3/60)},w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var I=Date.now(),O="object"===("undefined"==typeof performance?"undefined":w(performance))&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()-I};function A(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}var T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.prototype.run=function(){var t=this;!function(t){b(t)}(function(){t.springSystem.loop(O())})},t}();function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var P=function t(){x(this,t),this.position=0,this.velocity=0},V=function(){function t(e){x(this,t),this._id="s"+t._ID++,this._springSystem=e,this.listeners=[],this._startValue=0,this._currentState=new P,this._displacementFromRestThreshold=.001,this._endValue=0,this._overshootClampingEnabled=!1,this._previousState=new P,this._restSpeedThreshold=.001,this._tempState=new P,this._timeAccumulator=0,this._wasAtRest=!0}return t.prototype.getId=function(){return this._id},t.prototype.destroy=function(){this.listeners=[],this._springSystem.deregisterSpring(this)},t.prototype.setSpringConfig=function(t){return this._springConfig=t,this},t.prototype.getCurrentValue=function(){return this._currentState.position},t.prototype.getDisplacementDistanceForState=function(t){return Math.abs(this._endValue-t.position)},t.prototype.setEndValue=function(t){if(this._endValue===t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var e=0,n=this.listeners.length;e<n;e++){var i=this.listeners[e].onSpringEndStateChange;i&&i(this)}return this},t.prototype.setVelocity=function(t){return t===this._currentState.velocity?this:(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId()),this)},t.prototype.setOvershootClampingEnabled=function(t){return this._overshootClampingEnabled=t,this},t.prototype.isOvershooting=function(){var t=this._startValue,e=this._endValue;return this._springConfig.tension>0&&(t<e&&this.getCurrentValue()>e||t>e&&this.getCurrentValue()<e)},t.prototype.advance=function(e,n){var i=this.isAtRest();if(!i||!this._wasAtRest){var r=n;n>t.MAX_DELTA_TIME_SEC&&(r=t.MAX_DELTA_TIME_SEC),this._timeAccumulator+=r;for(var o=this._springConfig.tension,a=this._springConfig.friction,s=this._currentState.position,l=this._currentState.velocity,p=this._tempState.position,c=this._tempState.velocity,u=void 0,f=void 0,h=void 0,d=void 0,g=void 0,m=void 0,v=void 0,y=void 0;this._timeAccumulator>=t.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=t.SOLVER_TIMESTEP_SEC,this._timeAccumulator<t.SOLVER_TIMESTEP_SEC&&(this._previousState.position=s,this._previousState.velocity=l),u=l,f=o*(this._endValue-p)-a*l,p=s+u*t.SOLVER_TIMESTEP_SEC*.5,h=c=l+f*t.SOLVER_TIMESTEP_SEC*.5,d=o*(this._endValue-p)-a*c,p=s+h*t.SOLVER_TIMESTEP_SEC*.5,g=c=l+d*t.SOLVER_TIMESTEP_SEC*.5,m=o*(this._endValue-p)-a*c,p=s+g*t.SOLVER_TIMESTEP_SEC,v=c=l+m*t.SOLVER_TIMESTEP_SEC,y=1/6*(f+2*(d+m)+(o*(this._endValue-p)-a*c)),s+=1/6*(u+2*(h+g)+v)*t.SOLVER_TIMESTEP_SEC,l+=y*t.SOLVER_TIMESTEP_SEC;this._tempState.position=p,this._tempState.velocity=c,this._currentState.position=s,this._currentState.velocity=l,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/t.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),i=!0);var S=!1;this._wasAtRest&&(this._wasAtRest=!1,S=!0);var _=!1;i&&(this._wasAtRest=!0,_=!0),this.notifyPositionUpdated(S,_)}},t.prototype.notifyPositionUpdated=function(t,e){for(var n=0,i=this.listeners.length;n<i;n++){var r=this.listeners[n];t&&r.onSpringActivate&&r.onSpringActivate(this),r.onSpringUpdate&&r.onSpringUpdate(this),e&&r.onSpringAtRest&&r.onSpringAtRest(this)}},t.prototype.systemShouldAdvance=function(){return!this.isAtRest()||!this.wasAtRest()},t.prototype.wasAtRest=function(){return this._wasAtRest},t.prototype.isAtRest=function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},t.prototype._interpolate=function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},t.prototype.addListener=function(t){return this.listeners.push(t),this},t.prototype.removeListener=function(t){return A(this.listeners,t),this},t}();V._ID=0,V.MAX_DELTA_TIME_SEC=.064,V.SOLVER_TIMESTEP_SEC=.001;var R=V;var F=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.looper=e||new T,this.looper.springSystem=this,this.listeners=[],this._activeSprings=[],this._idleSpringIndices=[],this._isIdle=!0,this._lastTimeMillis=-1,this._springRegistry={}}return t.prototype.createSpring=function(t,e){return this.createSpringWithConfig({tension:t,friction:e})},t.prototype.createSpringWithConfig=function(t){var e=new R(this);return this.registerSpring(e),e.setSpringConfig(t),e},t.prototype.getIsIdle=function(){return this._isIdle},t.prototype.registerSpring=function(t){this._springRegistry[t.getId()]=t},t.prototype.deregisterSpring=function(t){A(this._activeSprings,t),delete this._springRegistry[t.getId()]},t.prototype.advance=function(t,e){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(var n=0,i=this._activeSprings.length;n<i;n++){var r=this._activeSprings[n];if(!r)return;r.systemShouldAdvance()?r.advance(t/1e3,e/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(r))}for(;this._idleSpringIndices.length>0;){var o=this._idleSpringIndices.pop();o>=0&&this._activeSprings.splice(o,1)}},t.prototype.loop=function(t){var e=void 0;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);var n=t-this._lastTimeMillis;this._lastTimeMillis=t;var i=0,r=this.listeners.length;for(i=0;i<r;i++)(e=this.listeners[i]).onBeforeIntegrate&&e.onBeforeIntegrate(this);for(this.advance(t,n),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),i=0;i<r;i++)(e=this.listeners[i]).onAfterIntegrate&&e.onAfterIntegrate(this);this._isIdle||this.looper.run()},t.prototype.activateSpring=function(t){var e=this._springRegistry[t];-1===this._activeSprings.indexOf(e)&&this._activeSprings.push(e),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},t}()),M=function(t){var e=t.springConfig,n=e.stiffness,i=e.damping,r=e.overshootClamping,o=t.noOp,a=t.onSpringActivate,s=t.getOnUpdateFunc,l=t.onAnimationEnd;if(!o){var p=F.createSpring(n,i);return p.setOvershootClampingEnabled(!!r),p.addListener({onSpringActivate:a,onSpringUpdate:s(p.destroy.bind(p)),onSpringAtRest:function(){p.destroy(),l()}}),p}},D=function t(e){e&&e.forEach(function(e){!function(t){var e=M(t);e?e.setEndValue(1):t.onSpringActivate()}(e),t(e.immediate)})},j=function(t){var e=t.flipDict,n=t.topLevelChildren,i=t.initiateStaggeredAnimations,r={root:{staggeredChildren:{},immediateChildren:[]}};return n.forEach(function(t){!function t(n,r){var o=e[r];o&&(o.stagger?n.staggeredChildren[o.stagger]?n.staggeredChildren[o.stagger].push(o):n.staggeredChildren[o.stagger]=[o]:n.immediateChildren.push(o),o.onSpringActivate=function(){D(o.immediateChildren),i(o.staggeredChildren)},o.staggeredChildren={},o.immediateChildren=[],o.childIds.forEach(function(e){return t(o,e)}))}(r.root,t)}),r},L=function(t){var e=t.staggerConfig,n=t.flipDict,i=t.topLevelChildren,r=function(t){t&&Object.keys(t).length&&Object.keys(t).forEach(function(n){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t&&t.length){e.reverse&&t.reverse();var n=e.speed?1+Math.max(Math.min(e.speed,0),1):1.1,i=1/Math.max(Math.min(t.length,100),10),r=t.filter(function(t){return!t.noOp}).map(function(t,e){var o=t.getOnUpdateFunc;return t.getOnUpdateFunc=function(t){var a=o(t);return function(t){var o=t.getCurrentValue();o>i&&r[e+1]&&r[e+1].setEndValue(Math.min(o*n,1)),a(t)}},t}).map(function(t){return M(t)});r[0]&&r[0].setEndValue(1)}}(t[n],e[n])})},o=j({flipDict:n,topLevelChildren:i,initiateStaggeredAnimations:r});D(o.root.immediateChildren),r(o.root.staggeredChildren)},k=function(t){return[0,1,4,5,12,13].map(function(e){return t[e]})},K=function(t){var e=t.top,n=t.bottom,i=t.left,r=t.right;return e<window.innerHeight&&n>0&&i<window.innerWidth&&r>0},U=function(t,e,n){return t+(e-t)*n},q=function(t){var e=t.flippedIds,n=t.flipCallbacks,i=t.inProgressAnimations,r=t.cachedFlipChildrenPositions,o=t.newFlipChildrenPositions,a=t.applyTransformOrigin,s=t.spring,m=t.getElement,y=t.debug,S=t.staggerConfig,C=t.decisionData,b=t.scopedSelector,w=document.querySelector("body"),I=void 0,O=new Promise(function(t,e){I=t}),A=void 0,T=[];y&&console.error('[react-flip-toolkit]\nThe "debug" prop is set to true. All FLIP animations will return at the beginning of the transition.');var x=function(t){var e=t.reduce(function(t,e){return t[e]=t[e]?t[e]+1:1,t},{});return Object.keys(e).filter(function(t){return e[t]>1})}(e);x.length&&console.error("[react-flip-toolkit]\nThere are currently multiple elements with the same flipId on the page.\nThe animation will only work if each Flipped component has a unique flipId.\nDuplicate flipId"+(x.length>1?"s":"")+": "+x.join("\n"));var P=e.map(function(t){var e=r[t].rect,y=o[t].rect,S=r[t].opacity,_=o[t].opacity,E=y.width<1||y.height<1;if(!K(e)&&!K(y))return!1;if(0===e.width&&0===y.width||0===e.height&&0===y.height)return!1;var b=m(t);if(!b)return!1;var O=JSON.parse(b.dataset.flipConfig),x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.flipperSpring,n=t.flippedSpring,i=function(t){return f(t)?t:g[t]?g[t]:{}};return d({},g.noWobble,i(e),i(n))}({flipperSpring:s,flippedSpring:O.spring}),P=!0===O.stagger?"default":O.stagger,V={element:b,id:t,stagger:P,springConfig:x,noOp:!0};if(n[t]&&n[t].shouldFlip&&!n[t].shouldFlip(C.prev,C.current))return V;if(e.left===y.left&&e.top===y.top&&e.width===y.width&&e.height===y.height&&S===_)return V;V.noOp=!1;var R=function(t){if("string"==typeof t){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e)return l(e[2].split(", ").map(parseFloat))}return p()}(o[t].transform),F={matrix:R},M={},D=[R];O.translate&&(D.push(function(t){var e=p();return e[12]=t,e}(e.left-y.left)),D.push(function(t){var e=p();return e[13]=t,e}(e.top-y.top))),O.scale&&(D.push(function(t){var e=p();return e[0]=t,e}(Math.max(e.width,1)/Math.max(y.width,1))),D.push(function(t){var e=p();return e[5]=t,e}(Math.max(e.height,1)/Math.max(y.height,1)))),O.opacity&&(M.opacity=S,F.opacity=_);var j=[];n[t]&&n[t].shouldInvert&&!n[t].shouldInvert(C.prev,C.current)||(j=function(t,e){return h(t.querySelectorAll("["+v+'="'+e+'"]'))}(b,t).map(function(t){return[t,JSON.parse(t.dataset.flipConfig)]})),M.matrix=k(D.reduce(c)),F.matrix=k(F.matrix);var L=function(t){var e=t.element,n=t.invertedChildren,i=t.body;return function(t){var r=t.matrix,o=t.opacity,a=t.forceMinVals;if(u(o)&&(e.style.opacity=o),a&&(e.style.minHeight="1px",e.style.minWidth="1px"),r){var s=function(t){return"matrix("+t.join(", ")+")"}(r);s="matrix(1, 0, 0, 1, 0, 0)"===s?"matrix(1, 0.00001, -0.00001, 1, 0, 0)":s,e.style.transform=s,n&&function(t){var e=t.invertedChildren,n=t.matrix,i=t.body;e.forEach(function(t){var e=t[0],r=t[1];if(i.contains(e)){var o=n[0],a=n[3],s=n[4],l=n[5],p={translateX:0,translateY:0,scaleX:1,scaleY:1},c="";r.translate&&(p.translateX=-s/o,p.translateY=-l/a,c+="translate("+p.translateX+"px, "+p.translateY+"px)"),r.scale&&(p.scaleX=1/o,p.scaleY=1/a,c+=" scale("+p.scaleX+", "+p.scaleY+")"),e.style.transform=c}})}({invertedChildren:n,matrix:r,body:i})}}}({element:b,invertedChildren:j,body:w}),q=void 0;if(n[t]&&n[t].onComplete){var X=n[t].onComplete;q=function(){return X(b,C.prev,C.current)}}var B=u(M.opacity)&&M.opacity!==F.opacity,W=!1;return d({},V,{stagger:P,springConfig:x,getOnUpdateFunc:function(e){return i[t]={stop:e,onComplete:q},function(i){W||(W=!0,n[t]&&n[t].onStart&&n[t].onStart(b,C.prev,C.current));var r=i.getCurrentValue();if(w.contains(b)){var o={};o.matrix=M.matrix.map(function(t,e){return U(t,F.matrix[e],r)}),B&&(o.opacity=U(M.opacity,F.opacity,r)),L(o)}else e()}},initializeFlip:function(){L({matrix:M.matrix,opacity:B&&M.opacity,forceMinVals:E}),O.transformOrigin?b.style.transformOrigin=O.transformOrigin:a&&(b.style.transformOrigin="0 0"),j.forEach(function(t){var e=t[0],n=t[1];n.transformOrigin?e.style.transformOrigin=n.transformOrigin:a&&(e.style.transformOrigin="0 0")})},onAnimationEnd:function(){delete i[t],function(t){return"function"==typeof t}(q)&&q(),E&&b&&(b.style.minHeight="",b.style.minWidth=""),T.push(t),T.length>=A.length&&I()}})}).filter(function(t){return t});if((A=P.filter(function(t){var e=t.initializeFlip;return Boolean(e)})).forEach(function(t){return(0,t.initializeFlip)()}),!y){var V=P.reduce(function(t,e){return t[e.id]=e,t},{}),R=function(t){var e=t.flipDict,n=t.flippedIds,i=t.scopedSelector,r={};return function t(o,a,s){var l=o+" "+E,p=_(i,l,n),c=s.filter(function(t){return-1===p.indexOf(t)});r[a]=c,c.forEach(function(t){e[t]&&(e[t].level=a)}),0!==p.length&&t(l,a+1,p)}(E,0,_(i,E,n)),Object.keys(e).forEach(function(t){var i=e[t];i.childIds=_(function(t){return i.element.querySelectorAll(t)},E,n),i.childIds=i.childIds.filter(function(t){return r[i.level+1]&&r[i.level+1].indexOf(t)>-1})}),{topLevelChildren:r[0]}}({flipDict:V,flippedIds:e,scopedSelector:b}).topLevelChildren;return function(){return A.length||I(),L({topLevelChildren:R,flipDict:V,staggerConfig:S}),O}}},X=function(t,e){var n;return d(t,((n={})[e[0]]=e[1],n))},B=function(t,e){return h(e?document.querySelectorAll("["+S+'="'+e+'"]'):t.querySelectorAll("["+m+"]"))},W=function(t){var e=t.element,n=t.flipCallbacks,i=void 0===n?{}:n,r=t.inProgressAnimations,o=void 0===r?{}:r,a=t.portalKey,s=B(e,a),l=h(e.querySelectorAll("["+v+"]")),p={},c=[],u={};s.filter(function(t){return i&&i[t.dataset.flipId]&&i[t.dataset.flipId].onExit}).forEach(function(t){var e=t.parentNode;if(t.closest){var n=t.closest("[data-exit-container]");n&&(e=n)}var i=c.findIndex(function(t){return t[0]===e});-1===i&&(c.push([e,e.getBoundingClientRect()]),i=c.length-1),p[t.dataset.flipId]=c[i][1],u[t.dataset.flipId]=e});var f=s.map(function(t){var e={},n=t.getBoundingClientRect();if(i&&i[t.dataset.flipId]&&i[t.dataset.flipId].onExit){var r=p[t.dataset.flipId];d(e,{element:t,parent:u[t.dataset.flipId],childPosition:{top:n.top-r.top,left:n.left-r.left,width:n.width,height:n.height}})}return[t.dataset.flipId,{rect:n,opacity:parseFloat(window.getComputedStyle(t).opacity),domData:e}]}).reduce(X,{});return function(t){Object.keys(t).forEach(function(e){t[e].stop&&t[e].stop(),delete t[e]})}(o),s.concat(l).forEach(function(t){t.style.transform="",t.style.opacity=""}),{flippedElementPositions:f,cachedOrderedFlipIds:s.map(function(t){return t.dataset.flipId})}},N=function(t,e){return e?function(t){return document.querySelectorAll("["+S+"="+e+"]"+t)}:function(e){return t.querySelectorAll(e)}},Y=function(t){var e=t.cachedOrderedFlipIds,n=void 0===e?[]:e,i=t.inProgressAnimations,r=void 0===i?{}:i,o=t.cachedFlipChildrenPositions,a=void 0===o?{}:o,l=t.flipCallbacks,p=void 0===l?{}:l,c=t.containerEl,u=t.applyTransformOrigin,f=t.spring,h=t.debug,g=t.portalKey,v=t.staggerConfig,y=void 0===v?{}:v,S=t.decisionData,_=void 0===S?{}:S,E=t.handleEnterUpdateDelete,C=function(t){var e=t.element,n=t.portalKey;return B(e,n).map(function(t){var e=window.getComputedStyle(t),n=t.getBoundingClientRect();return[t.dataset.flipId,{rect:n,opacity:parseFloat(e.opacity),domData:{},transform:e.transform}]}).reduce(X,{})}({element:c,portalKey:g}),b=N(c,g),w=function(t,e){return function(n){return N(t,e)("["+m+'="'+n+'"]')[0]}}(c,g),I=function(t){return a[t]&&C[t]},O=Object.keys(a).concat(Object.keys(C)).filter(function(t){return!I(t)}),A={flipCallbacks:p,getElement:w,cachedFlipChildrenPositions:a,newFlipChildrenPositions:C,inProgressAnimations:r},T=s(d({},A,{unflippedIds:O})),x=T.hideEnteringElements,P=T.animateEnteringElements,V=T.animateExitingElements,R=n.filter(I),F=d({},A,{flippedIds:R,applyTransformOrigin:u,spring:f,debug:h,staggerConfig:y,decisionData:_,scopedSelector:b}),M=q(F);E?E({hideEnteringElements:x,animateEnteringElements:P,animateExitingElements:V,animateFlippedElements:M}):(x(),V().then(P),M())};var J=Object(i.createContext)("flip"),z=Object(i.createContext)("portal"),H=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n));return i.inProgressAnimations={},i.flipCallbacks={},i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getSnapshotBeforeUpdate=function(t){return t.flipKey!==this.props.flipKey?W({element:this.el,flipCallbacks:this.flipCallbacks,inProgressAnimations:this.inProgressAnimations,portalKey:this.props.portalKey}):null},e.prototype.componentDidUpdate=function(t,e,n){this.props.flipKey!==t.flipKey&&Y({cachedFlipChildrenPositions:n.flippedElementPositions,cachedOrderedFlipIds:n.cachedOrderedFlipIds,containerEl:this.el,inProgressAnimations:this.inProgressAnimations,flipCallbacks:this.flipCallbacks,applyTransformOrigin:this.props.applyTransformOrigin,spring:this.props.spring,debug:this.props.debug,portalKey:this.props.portalKey,staggerConfig:this.props.staggerConfig,handleEnterUpdateDelete:this.props.handleEnterUpdateDelete,decisionData:{prev:t.decisionData,current:this.props.decisionData}})},e.prototype.render=function(){var t=this,e=this.props,n=e.element,i=e.className,o=e.portalKey,a=n;return r.a.createElement(z.Provider,{value:o},r.a.createElement(J.Provider,{value:this.flipCallbacks},r.a.createElement(a,{className:i,ref:function(e){return t.el=e}},this.props.children)))},e}(i.Component);H.propTypes={},H.defaultProps={applyTransformOrigin:!0,element:"div"};var G=H,Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Z(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}a.a.oneOfType([a.a.node,a.a.func]).isRequired,a.a.bool,a.a.bool,a.a.bool,a.a.string,a.a.oneOfType([a.a.string,a.a.object]),a.a.func,a.a.func,a.a.func,a.a.func,a.a.func,a.a.func,a.a.string,a.a.oneOfType([a.a.string,a.a.bool]);function $(t){var e,n=t.children,r=t.flipId,o=t.inverseFlipId,a=t.portalKey,s=Z(t,["children","flipId","inverseFlipId","portalKey"]),l=n,p="function"==typeof l;if(!p)try{l=i.Children.only(n)}catch(t){throw new Error("Each Flipped component must wrap a single child")}s.scale||s.translate||s.opacity||d(s,{translate:!0,scale:!0,opacity:!0});var c=((e={})[m]=r,e[v]=o,e[y]=JSON.stringify(s),e);return a&&(c[S]=a),p?l(c):Object(i.cloneElement)(l,c)}var tt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.flipId,i=t.shouldFlip,o=t.shouldInvert,a=t.onAppear,s=t.onStart,l=t.onComplete,p=t.onExit,c=Z(t,["children","flipId","shouldFlip","shouldInvert","onAppear","onStart","onComplete","onExit"]);return c.inverseFlipId?r.a.createElement($,c,e):r.a.createElement(z.Consumer,null,function(t){return r.a.createElement(J.Consumer,null,function(u){return f(u)&&(u[n]={shouldFlip:i,shouldInvert:o,onAppear:a,onStart:s,onComplete:l,onExit:p}),r.a.createElement($,Q({flipId:n},c,{portalKey:t}),e)})})},e}(i.Component);tt.propTypes={};var et=tt;n.d(e,"b",function(){return G}),n.d(e,"a",function(){return et})}}]);