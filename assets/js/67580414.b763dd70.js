"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[318],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),f=n,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return t?a.createElement(d,l(l({ref:r},u),{},{components:t})):a.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7750:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:1},l="Terraform",i={unversionedId:"Infrastructure-as-Code/terraform",id:"Infrastructure-as-Code/terraform",title:"Terraform",description:"Terraform \u2014 Infrastructure-as-Code \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c, \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b.",source:"@site/docs/Infrastructure-as-Code/terraform.md",sourceDirName:"Infrastructure-as-Code",slug:"/Infrastructure-as-Code/terraform",permalink:"/DevOps_Docs/Infrastructure-as-Code/terraform",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Infrastructure-as-Code",permalink:"/DevOps_Docs/Infrastructure-as-Code/basics"},next:{title:"Configuration-as-Code",permalink:"/DevOps_Docs/Configuration-as-Code/basics"}},p={},s=[{value:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b",id:"\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b",level:2},{value:"Hashicorp Configuration Language",id:"hashicorp-configuration-language",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b",level:2},{value:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b",id:"\u0440\u0435\u0441\u0443\u0440\u0441\u044b",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u0430",level:2},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:2}],u={toc:s};function c(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terraform"},"Terraform"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform"},"Terraform")," \u2014 Infrastructure-as-Code \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c, \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."),(0,n.kt)("p",null,"Terraform \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0432 \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0435\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0430\u0439\u043b\u043e\u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439. \u0412 \u0444\u0430\u0439\u043b\u0430\u0445 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 HCL (HashiCorp Configuration Language)."),(0,n.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/videoseries?list=PLg5SS_4L6LYujWDTYb-Zbofdl44Jxb2l8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloud.yandex.ru/docs/tutorials/infrastructure-management/terraform-quickstart"},"https://cloud.yandex.ru/docs/tutorials/infrastructure-management/terraform-quickstart")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://rotoro.cloud/ld-courses/terraform-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D0%BF%D1%8B%D1%82/"},"https://rotoro.cloud/ld-courses/terraform-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D0%BF%D1%8B%D1%82/")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://habr.com/ru/companies/otus/articles/696694/"},"https://habr.com/ru/companies/otus/articles/696694/")),(0,n.kt)("h2",{id:"\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"},"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"),(0,n.kt)("p",null,"Terraform \u2013 \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442. \u042d\u0442\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b. \u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 Terraform \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u043c\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u043c\u0438, \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430, \u0411\u0414, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0432\u0435\u0440\u0441\u0438\u0439."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"providers",src:t(2445).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"hashicorp-configuration-language"},"Hashicorp Configuration Language"),(0,n.kt)("p",null,"HCL \u2014 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0432\u0438\u0434\u0435 \u0431\u043b\u043e\u043a\u043e\u0432 \u043a\u043e\u0434\u0430."),(0,n.kt)("p",null,'"\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439" \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043a\u043e\u0434 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0435 \u043d\u0430\u043c\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b.'),(0,n.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b"),(0,n.kt)("p",null,"Terraform \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 3 \u044d\u0442\u0430\u043f\u0430:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Init"),". \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0441\u0440\u0435\u0434\u044b."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Plan"),". \u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u0432 \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Apply"),". \u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u044b \u0432 \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435.")),(0,n.kt)("h2",{id:"\u0440\u0435\u0441\u0443\u0440\u0441\u044b"},"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"),(0,n.kt)("p",null,"\u0420\u0435\u0441\u0443\u0440\u0441 \u2014 \u043a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 Terraform. \u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u043c, \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0432 \u043e\u0431\u043b\u0430\u043a\u0435 \u0438\u043b\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"resource",src:t(3155).Z,width:"1920",height:"755"})),(0,n.kt)("p",null,"Terraform \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0416\u0426 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0438\u0437 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438."),(0,n.kt)("p",null,"Terraform \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfstate"),". \u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u044d\u0442\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u043d \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0434\u043b\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0441\u0440\u0435\u0434\u044b \u0432 \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435."),(0,n.kt)("p",null,"Terraform \u043c\u043e\u0436\u0435\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u0432\u0441\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfstate"),"."),(0,n.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"local-file",src:t(3335).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0440\u0435\u0441\u0443\u0440\u0441\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-tf"},'resource "local_file" "resource_name" {\n  filename     = "/root/file.txt"\n  content      = "Hello World!"\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init"),". \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u0441 TF-\u0444\u0430\u0439\u043b\u043e\u043c.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan"),". \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),". \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043d\u043e\u0432\u0430 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 ",(0,n.kt)("inlineCode",{parentName:"p"},"Yes")," \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439. \u041d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform show"),". \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0435."))),(0,n.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform destroy"),". \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."),(0,n.kt)("li",{parentName:"ol"},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 ",(0,n.kt)("inlineCode",{parentName:"li"},"Yes")," \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.")))}c.isMDXComponent=!0},3335:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/local-file-25267ce8e4edd261e8dca5878b9e3bb5.png"},2445:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/providers-0c49f9e1dacce7c9270d8d95fd8010fb.png"},3155:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/resource-d1e393bb199ba38f68123b09323fcc20.png"}}]);