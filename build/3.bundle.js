/*! Emile Choghi's Portfolio Version: 2.7.0 Date: 8/7/2018 @ 21:49 */
webpackJsonp([3],{"./app/components/Home.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n){return e.raw=n,e}Object.defineProperty(n,"__esModule",{value:!0});var s=t("../node_modules/react/index.js"),c=t.n(s),l=t("../node_modules/react-ga/dist/react-ga.js"),p=t.n(l),u=t("../node_modules/styled-components/dist/styled-components.browser.es.js"),m=i(["\n    font-size: 100px;\n\n    @media (max-width: 767px) {\n        font-size: 50px;\n    }\n"],["\n    font-size: 100px;\n\n    @media (max-width: 767px) {\n        font-size: 50px;\n    }\n"]),d=i(["\n    font-size: 30px;\n\n    @media (max-width: 767px) {\n        font-size: 20px;\n    }\n"],["\n    font-size: 30px;\n\n    @media (max-width: 767px) {\n        font-size: 20px;\n    }\n"]),f=u.a.h1(m),h=u.a.h2(d),w=function(e){function n(){return o(this,n),a(this,e.apply(this,arguments))}return r(n,e),n.prototype.componentDidMount=function(){window.scrollTo(0,0),p.a.ga("send","pageview","/")},n.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"jumbotron__container"},c.a.createElement("div",{className:"jumbotron__content"},c.a.createElement(f,null,"Emile Choghi"),c.a.createElement(h,null,"Frontend Engineer")))),c.a.createElement("img",{src:"https://res.cloudinary.com/dp7726gkk/image/upload/c_scale,w_800/v1533608485/portfolio/home.png",alt:"San Francisco Skyline"})))},n}(c.a.Component);n.default=w}});