"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7039],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5481:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={title:"<RecoilURLSync>",sidebar_label:"<RecoilURLSync>"},l=void 0,s={unversionedId:"recoil-sync/api/RecoilURLSync",id:"recoil-sync/api/RecoilURLSync",title:"<RecoilURLSync>",description:"A component from the Recoil Sync library to sync atoms using the syncEffect() or urlSyncEffect() atom effects with the browser URL.",source:"@site/docs/recoil-sync/api/RecoilURLSync.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/RecoilURLSync",permalink:"/fr/docs/recoil-sync/api/RecoilURLSync",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/recoil-sync/api/RecoilURLSync.md",tags:[],version:"current",frontMatter:{title:"<RecoilURLSync>",sidebar_label:"<RecoilURLSync>"},sidebar:"recoil-sync",previous:{title:"syncEffect()",permalink:"/fr/docs/recoil-sync/api/syncEffect"},next:{title:"urlSyncEffect()",permalink:"/fr/docs/recoil-sync/api/urlSyncEffect"}},p=[{value:"URL Location",id:"url-location",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Custom serialization",id:"custom-serialization",children:[],level:2},{value:"Browser Abstraction",id:"browser-abstraction",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction"},"Recoil Sync library")," to sync atoms using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/urlSyncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"urlSyncEffect()"))," atom effects with the browser URL."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function RecoilURLSync(props: {\n  storeKey?: string,\n\n  location: LocationOption,\n\n  serialize: mixed => string,\n  deserialize: string => mixed,\n\n  browserInterface?: BrowserInterface,\n  children: React.Node,\n}): React.Node\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"storeKey")," is used to match up which atoms should sync with this external store."),(0,a.kt)("h2",{id:"url-location"},"URL Location"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," prop specifies what part of the URL to sync with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type LocationOption =\n  | {part: 'href'}\n  | {part: 'hash'}\n  | {part: 'search'}\n  | {part: 'queryParams', param?: string};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryParams")," with no ",(0,a.kt)("inlineCode",{parentName:"li"},"param")," - Atoms sync with individual query params"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"queryParams")," with a ",(0,a.kt)("inlineCode",{parentName:"li"},"param")," - Atoms are encoded in a single query param"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"search")," - State is encoded with the entire query search string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash")," - State is encoded in the anchor tag"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"href")," - Escape to be able to encode the entire URL.  Care must be taken to provide a valid and legal URL.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/url-persistence"},"URL Persistence Guide")," for examples."),(0,a.kt)("h2",{id:"custom-serialization"},"Custom serialization"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"serialize()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deserialize()")," callbacks can provide custom serializations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  serialize: x => JSON.stringify(x),\n  deserialize: x => JSON.parse(x),\n")),(0,a.kt)("p",null,"These callbacks should be memoized with something like ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," to avoid re-parsing the URL with every render.  Depending on the location in the URL that is synced with, the callbacks may be either called with individual values or with an object containing multiple values.  Wrappers such as ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSyncJSON"},(0,a.kt)("inlineCode",{parentName:"a"},"<RecoilURLSyncJSON>"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSyncTransit"},(0,a.kt)("inlineCode",{parentName:"a"},"<RecoilURLSyncTransit>"))," provide these for you."),(0,a.kt)("h2",{id:"browser-abstraction"},"Browser Abstraction"),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"<RecoilURLSync/>")," will sync directly with the URL in the browser.  However, you may override this by providing a custom browser interface implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type BrowserInterface = {\n  replaceURL?: string => void,\n  pushURL?: string => void,\n  getURL?: () => string,\n  listenChangeURL?: (handler: () => void) => (() => void),\n};\n")))}d.isMDXComponent=!0}}]);