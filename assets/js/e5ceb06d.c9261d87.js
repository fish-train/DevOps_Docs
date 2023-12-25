"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||c;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),a=r(6010),c=r(3438),o=r(9960),i=r(3919),s=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function f(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:c},r," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function d(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},7329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),c=r(2991);const o={sidebar_position:1},i="Infrastructure-as-Code",s={unversionedId:"Infrastructure-as-Code/basics",id:"Infrastructure-as-Code/basics",title:"Infrastructure-as-Code",description:"\u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u0430\u043a \u043a\u043e\u0434 (Incfastructure as Code \u2013 IaC) \u2013 \u044d\u0442\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0439 \u0438\u043c\u0435\u044e\u0449\u0435\u0439\u0441\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0432 \u0432\u0438\u0434\u0435 \u043a\u043e\u0434\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u043f\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u043d\u0438\u043c \u0438 \u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u044e \u0438\u0437 \u043d\u0435\u0433\u043e \u0436\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b.",source:"@site/docs/Infrastructure-as-Code/basics.md",sourceDirName:"Infrastructure-as-Code",slug:"/Infrastructure-as-Code/basics",permalink:"/DevOps_Docs/Infrastructure-as-Code/basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",permalink:"/DevOps_Docs/DevOps/syntax"},next:{title:"Terraform",permalink:"/DevOps_Docs/Infrastructure-as-Code/terraform"}},l={},u=[{value:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b IaC",id:"\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b-iac",level:2}],p={toc:u};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"infrastructure-as-code"},"Infrastructure-as-Code"),(0,a.kt)("p",null,"\u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u0430\u043a \u043a\u043e\u0434 (Incfastructure as Code \u2013 IaC) \u2013 \u044d\u0442\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0439 \u0438\u043c\u0435\u044e\u0449\u0435\u0439\u0441\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0432 \u0432\u0438\u0434\u0435 \u043a\u043e\u0434\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u043f\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u043d\u0438\u043c \u0438 \u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u044e \u0438\u0437 \u043d\u0435\u0433\u043e \u0436\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."),(0,a.kt)("h2",{id:"\u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b-iac"},"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b IaC"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iac_tools",src:r(4664).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"\u0422\u0438\u043f\u044b \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0435\u0439"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u041f\u041e \u043d\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u0445 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b. \u041c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u044b. \u041f\u043b\u0435\u0439\u0431\u0443\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 Git. \u042d\u0442\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0438\u0434\u0435\u043c\u043f\u043e\u0442\u0435\u043d\u0442\u043d\u044b \u2014 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043a\u043e\u0434 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437, \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0441\u0442\u0438 \u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u0440\u0435\u0434\u044b \u0432 \u043e\u043f\u0440\u0435\u0434\u043f\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430 \u0412\u041c \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u041e\u0431\u0440\u0430\u0437\u044b \u0443\u0436\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u041f\u041e \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u041d\u0435\u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u0430\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u2013 \u043f\u043e\u0441\u043b\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u0412\u041c \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u043e\u0439. \u0414\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0412\u041c \u043d\u0443\u0436\u043d\u043e \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0437, \u0430 \u0437\u0430\u0442\u0435\u043c \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0412\u041c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0437. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041f\u0440\u043e\u0432\u0438\u0436\u0438\u043d\u0438\u043d\u0433"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430. ")),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},4664:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iac_tools-4c489146f9587eaf8ec07ca8007a4023.png"}}]);