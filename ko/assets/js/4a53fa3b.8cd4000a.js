"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4944],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),y=c,m=f["".concat(s,".").concat(y)]||f[y]||u[y]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function y(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7784:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(7462),c=t(3366),a=(t(7294),t(3905)),o=["components"],i={title:"<RecoilURLSyncTransit>",sidebar_label:"<RecoilURLSyncTransit>"},s=void 0,l={unversionedId:"recoil-sync/api/RecoilURLSyncTransit",id:"recoil-sync/api/RecoilURLSyncTransit",title:"<RecoilURLSyncTransit>",description:"A component from the Recoil Sync library to sync atoms using the syncEffect() or urlSyncEffect() atom effects with the browser URL.",source:"@site/docs/recoil-sync/api/RecoilURLSyncTransit.md",sourceDirName:"recoil-sync/api",slug:"/recoil-sync/api/RecoilURLSyncTransit",permalink:"/ko/docs/recoil-sync/api/RecoilURLSyncTransit",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/recoil-sync/api/RecoilURLSyncTransit.md",tags:[],version:"current",frontMatter:{title:"<RecoilURLSyncTransit>",sidebar_label:"<RecoilURLSyncTransit>"},sidebar:"recoil-sync",previous:{title:"<RecoilURLSyncJSON>",permalink:"/ko/docs/recoil-sync/api/RecoilURLSyncJSON"}},p=[{value:"Custom Classes",id:"custom-classes",children:[],level:2}],u={toc:p};function f(e){var n=e.components,t=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/introduction"},"Recoil Sync library")," to sync atoms using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/syncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"syncEffect()"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/urlSyncEffect"},(0,a.kt)("inlineCode",{parentName:"a"},"urlSyncEffect()"))," atom effects with the browser URL."),(0,a.kt)("p",null,"This is identical to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSync"},(0,a.kt)("inlineCode",{parentName:"a"},"<RecoilURLSync/>"))," component except that it provides built-in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cognitect/transit-js"},"Transit encoding"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function RecoilURLSyncTransit(props: {\n  ...RecoilURLSyncOptions,\n  handlers?: Array<TransitHandler<any, any>>,\n}): React.Node\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Transit encoding is not as terse or readable as just using ",(0,a.kt)("a",{parentName:"p",href:"/docs/recoil-sync/api/RecoilURLSyncJSON"},"JSON"),", however it can support ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," JavaScript containers as well as custom user classes."),(0,a.kt)("h2",{id:"custom-classes"},"Custom Classes"),(0,a.kt)("p",null,"Handlers for custom user classes can be defined with the ",(0,a.kt)("inlineCode",{parentName:"p"},"handlers")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"type TransitHandler<T, S> = {\n  tag: string,\n  class: Class<T>,\n  write: T => S,\n  read: S => T,\n};\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class ViewState {\n  active: boolean;\n  pos: [number, number];\n  constructor(active, pos) {\n    this.active = active;\n    this.pos = pos;\n  }\n  ...\n};\nconst viewStateChecker = custom(x => x instanceof ViewState ? x : null);\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <RecoilURLSyncTransit\n        storeKey=\"transit-url\"\n        location={{part: 'queryParam', param: 'state'}}\n        handlers={[\n          {\n            tag: 'VS',\n            class: ViewState,\n            write: x => [x.active, x.pos],\n            read: ([active, pos]) => new ViewState(active, pos),\n          },\n        ]}\n      />\n      ...\n    </RecoilRoot>\n  )\n}\n\nconst ViewState = atom<ViewState>({\n  key: 'ViewState',\n  default: new ViewState(true, [1, 2]),\n  effects: [syncEffect({ storeKey: 'transit-url', refine: viewStateChecker() })],\n});\n")))}f.isMDXComponent=!0}}]);