"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3766],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1968:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={title:"Recoil 0.1.1"},c=void 0,s={permalink:"/zh-hans/blog/2020/10/30/0.1.1-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-10-30-0.1.1-released.md",source:"@site/blog/2020-10-30-0.1.1-released.md",title:"Recoil 0.1.1",description:"Welcome to Recoil version 0.1.1!  This release has performance improvements and introduces several experimental features such as support for React Native, working with Snapshots outside of React, and atom effects for managing side-effects of atoms such as logging, synchronization with external stores, persistence, etc.",date:"2020-10-30T00:00:00.000Z",formattedDate:"2020\u5e7410\u670830\u65e5",tags:[],readingTime:2.145,truncated:!0,prevItem:{title:"Recoil 0.2",permalink:"/zh-hans/blog/2021/03/22/0.2.0-released"},nextItem:{title:"Recoil 0.0.11",permalink:"/zh-hans/blog/2020/09/15/0.0.11-released"}},l=[],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to Recoil version 0.1.1!  This release has performance improvements and introduces several ",(0,a.kt)("em",{parentName:"p"},"experimental")," features such as support for React Native, working with Snapshots outside of React, and atom effects for managing side-effects of atoms such as logging, synchronization with external stores, persistence, etc."))}p.isMDXComponent=!0}}]);