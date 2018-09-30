/*! Emile Choghi's Portfolio Version: 2.8.0 Date: 9/29/2018 @ 23:27 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/components/SocialLinks.js":function(n,e,t){"use strict";t.r(e);var r=t("../node_modules/react/index.js"),a=t.n(r),o=t("../node_modules/react-ga/dist/react-ga.js"),i=t.n(o),l=t("../node_modules/styled-components/dist/styled-components.browser.esm.js");function c(){var n=d(["\n    display: inline-block;\n    list-style: none;\n\n    a {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        width: 48px;\n        color: rgba(0, 0, 0, 0.54);\n        height: 48px;\n        padding: 0;\n        font-size: 1.5rem;\n        text-align: center;\n        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        text-decoration: none;\n        border-radius: 50%;\n        background-color: transparent;\n        -webkit-appearance: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        outline: none;\n\n        &:hover {\n            background-color: rgba(0, 0, 0, 0.08);\n        }\n    }\n"]);return c=function(){return n},n}function s(){var n=d(["\n    display: block;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    text-align: center;\n    padding: 5px 16px;\n    width: auto;\n    font-size: 14px;\n    line-height: 18px;\n    font-weight: normal;\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 9px 3px;\n    color: rgb(72, 72, 72);\n    margin: 0px;\n    border-radius: 4px;\n    border-width: 1px;\n    border-style: solid;\n    background: rgb(255, 255, 255);\n    border-color: transparent;\n\n    @media (max-width: 1025px) {\n        display: none;\n    }\n"]);return s=function(){return n},n}function d(n,e){return e||(e=n.slice(0)),n.raw=e,n}var u=l.a.div(s()),p=l.a.li(c()),b=function(n){i.a.event({category:"Social Link Bar",action:"Social Media Link Click",label:"Navigated to "+n+" Profile"})};e.default=function(){return a.a.createElement(u,null,a.a.createElement(p,null,a.a.createElement("a",{role:"button","aria-label":"github",href:"https://github.com/echoghi",target:"_blank",rel:"noopener noreferrer",onClick:function(){return b("Github")}},a.a.createElement("i",{className:"icon-github"}))),a.a.createElement(p,null,a.a.createElement("a",{role:"button","aria-label":"linked in",href:"https://www.linkedin.com/in/emile-choghi-a6b60ba1/",target:"_blank",rel:"noopener noreferrer",onClick:function(){return b("LinkedIn")}},a.a.createElement("i",{className:"icon-linkedin"}))),a.a.createElement(p,null,a.a.createElement("a",{role:"button","aria-label":"angel list",href:"https://angel.co/emile-choghi",target:"_blank",rel:"noopener noreferrer",onClick:function(){return b("Angellist")}},a.a.createElement("i",{className:"icon-angel"}))))}}}]);