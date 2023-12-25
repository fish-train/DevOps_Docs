"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var d=2;d<o;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},p="\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f RST -> PDF",l={unversionedId:"Python/rsttopdf",id:"Python/rsttopdf",title:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f RST -> PDF",description:"docx2pdf",source:"@site/docs/Python/rsttopdf.md",sourceDirName:"Python",slug:"/Python/rsttopdf",permalink:"/DevOps_Docs/en/Python/rsttopdf",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435\u043c",permalink:"/DevOps_Docs/en/Python/venv"},next:{title:"CSS",permalink:"/DevOps_Docs/en/css/basics"}},i={},d=[{value:"docx2pdf",id:"docx2pdf",level:2},{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435",level:3},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 PDF-\u0444\u0430\u0439\u043b\u043e\u0432",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-pdf-\u0444\u0430\u0439\u043b\u043e\u0432",level:3},{value:"Python-\u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f PDF-\u0444\u0430\u0439\u043b\u043e\u0432",id:"python-\u0441\u043a\u0440\u0438\u043f\u0442-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-pdf-\u0444\u0430\u0439\u043b\u043e\u0432",level:3},{value:"rst2pdf",id:"rst2pdf",level:2},{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435-1",level:3},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 PDF-\u0444\u0430\u0439\u043b\u043e\u0432",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-pdf-\u0444\u0430\u0439\u043b\u043e\u0432-1",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f-rst---pdf"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f RST -> PDF"),(0,a.kt)("h2",{id:"docx2pdf"},"docx2pdf"),(0,a.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 docx2pdf \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442 DOCX-\u0444\u0430\u0439\u043b\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 PDF \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Microsoft Word."),(0,a.kt)("h3",{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/amedama41/docxbuilder"},"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 Docxbuilder"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 Sphinx \u0432 \u0444\u0430\u0439\u043b\u0435 conf.py \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"extensions = ['docxbuilder']\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0412 \u0444\u0430\u0439\u043b\u0435 conf.py \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"docx_documents = [\n('index', 'docxbuilder.docx', {\n     'title': project,\n     'creator': author,\n     'subject': 'A manual of docxbuilder',\n }, True),\n]\ndocx_style = 'path/to/custom_style.docx'\ndocx_pagebreak_before_section = 1\n")),(0,a.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0441\u0442\u0430\u0442\u044c\u044e ",(0,a.kt)("a",{parentName:"p",href:"https://docxbuilder.readthedocs.io/en/latest/docxbuilder.html#usage"},"Usage"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Microsoft Word.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 docx2pdf:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install docx2pdf\n")))),(0,a.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-pdf-\u0444\u0430\u0439\u043b\u043e\u0432"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 PDF-\u0444\u0430\u0439\u043b\u043e\u0432"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043f\u0430\u043f\u043a\u0443 \u0441 DOCX-\u0444\u0430\u0439\u043b\u043e\u043c:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd build/docx\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docx2pdf myfile.docx\n")))),(0,a.kt)("h3",{id:"python-\u0441\u043a\u0440\u0438\u043f\u0442-\u0434\u043b\u044f-\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f-pdf-\u0444\u0430\u0439\u043b\u043e\u0432"},"Python-\u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f PDF-\u0444\u0430\u0439\u043b\u043e\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# coding : utf-8\n \nimport subprocess\nfrom docx2pdf import convert\n \n# \u0421\u0431\u043e\u0440\u043a\u0430 DOCX\ndef make_docx():\n    # \u0421\u043e\u0431\u0440\u0430\u0442\u044c DOCX\n    cmd = "make docx"\n    # \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 CMD\n    subprocess.Popen(cmd, shell = True)\n \n# \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f DOCX \u0432 PDF\ndef make_pdf():\n    # \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c DOCX \u0432 PDF\n    convert("build/docx/sphinx-test.docx")\n \nmake_docx() # \u0421\u043e\u0431\u0440\u0430\u0442\u044c DOCX\nmake_pdf()  # \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c DOCX \u0432 PDF\n')),(0,a.kt)("h2",{id:"rst2pdf"},"rst2pdf"),(0,a.kt)("h3",{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-\u043a-\u0440\u0430\u0431\u043e\u0442\u0435-1"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0440\u0430\u0431\u043e\u0442\u0435"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rst2pdf/rst2pdf"},"rst2pdf"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install rst2pdf\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 Sphinx \u0432 \u0444\u0430\u0439\u043b\u0435 conf.py \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"extensions = [\n    # ...\n    'rst2pdf.pdfbuilder',\n]\n\n# Grouping the document tree into PDF files. List of tuples\n# (source start file, target name, title, author, options).\npdf_documents = [\n    ('index', 'MyProject', 'My Project', 'Author Name'),\n]\n")))),(0,a.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-pdf-\u0444\u0430\u0439\u043b\u043e\u0432-1"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 PDF-\u0444\u0430\u0439\u043b\u043e\u0432"),(0,a.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"make pdf")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sphinx-build -b pdf ..."))))}s.isMDXComponent=!0}}]);