(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2vHB":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("q1tI")),n=l(t("JHR5")),c=l(t("LCnF")),s=t("m81S"),m=function(e){return r.default.useContext(s.OptionsContext).useAutoGen?r.default.createElement(n.default,e):r.default.createElement(c.default,e)};a.default=m},JHR5:function(e,a,t){"use strict";t("gu/5"),t("eoYm");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),n=l(t("8OQS")),c=l(t("q1tI")),s=l(t("17x9")),m=t("Wbzz"),u=function(e){var a=e.title,t=e.crumbs,l=e.crumbLabel,s=e.crumbSeparator,u=e.disableLinks,i=e.hiddenCrumbs,d=(0,n.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return c.default.createElement(c.default.Fragment,null,a&&c.default.createElement("span",{className:"breadcrumb__title"},a),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return i.includes(e.pathname)?null:c.default.createElement(c.default.Fragment,{key:a+"-"+e.pathname},!u.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement(m.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},d),l&&a===t.length-1?l:e.crumbLabel)),u.includes(e.pathname)&&c.default.createElement("li",{className:"breadcrumb__list__item"},c.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},d),l&&a===t.length-1?l:e.crumbLabel)),a===t.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},s))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:s.default.string,crumbSeparator:s.default.string,crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var i=u;a.default=i},LCnF:function(e,a,t){"use strict";t("klQ5"),t("sC2a");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("pVnL")),n=l(t("8OQS")),c=l(t("q1tI")),s=l(t("17x9")),m=t("Wbzz"),u=t("m81S"),i=l(t("q/3z")),d=function(e){var a=e.title,t=e.location,l=e.crumbLabel,s=e.crumbSeparator,d=(0,n.default)(e,["title","location","crumbLabel","crumbSeparator"]),o=c.default.useContext(u.OptionsContext).usePathPrefix,b=(0,i.default)({location:(0,r.default)((0,r.default)({},t),{},{pathname:o?t.pathname.replace(new RegExp("^"+o),""):t.pathname}),crumbLabel:l,crumbSeparator:s}).crumbs,f=void 0===b?[]:b;return c.default.createElement(c.default.Fragment,null,a&&c.default.createElement("span",{className:"breadcrumb__title"},a),c.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},c.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,a){return c.default.createElement("li",{className:"breadcrumb__item",key:a},c.default.createElement(m.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===f.length-1?"page":null},d),e.crumbLabel),a===f.length-1?null:c.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};d.defaultProps={title:"",crumbSeparator:" / "},d.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string};var o=d;a.default=o},O0dG:function(e,a,t){"use strict";t.r(a),t.d(a,"AboutPage",(function(){return u}));t("sC2a");var l=t("q1tI"),r=t.n(l),n=t("Wbzz"),c=t("Bl7J"),s=t("vrFN"),m=t("bSK8"),u=function(e){var a=e.pageContext,t=e.location,l=a.breadcrumb.crumbs,u=t.pathname.toLowerCase().replace("-"," ");return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"About the ICI"}),r.a.createElement("section",{className:"mw8 center"},r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement(m.Breadcrumb,{crumbs:l,crumbSeparator:" / ",crumbLabel:u})),r.a.createElement("div",{className:"w-100 pa2"},r.a.createElement("h1",null,"About"),r.a.createElement("p",null," ICI recently ",r.a.createElement("a",{href:"http://50.communityinclusion.org/"},"celebrated our 50th anniversary")," as a ",r.a.createElement("a",{href:"https://www.aucd.org/template/index.cfm"},"University Center for Excellence in Developmental Disabilities (UCEDD)"),". President John F. Kennedy launched the UCEDD network in 1963, and today UCEDDs are located at public universities in every U.S. state and territory. "),r.a.createElement("p",null,"These 67 UCEDDs collaborate with people with disabilities, members of their families, state and local government agencies, and service providers. The goal is to empower all citizens, with and without disabilities, to fully participate in community settings. This includes workplaces, health care facilities, schools, and everywhere else where people engage with one another."),r.a.createElement("p",null,"As a member of the UCEDD network, ICI provides training, technical assistance, service, research, and information sharing, with a focus on ending disability-based discrimination and exclusion, and building the capacity of communities to sustain all their citizens.")),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90 "},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100"},r.a.createElement(n.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/history"},r.a.createElement("h3",{className:"fw1 mt0 lh-copy bb bw2"},"History")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Learn about the history of ICI and see an interactive timeline of signifigent events")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100"},r.a.createElement(n.Link,{to:"/about/mission",className:"link dt w-100 mt2 dim dark-blue"},r.a.createElement("h3",{className:"fw1 mt0 lh-copy bb bw2"},"Mission and Vision")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"What we're about ")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100"},r.a.createElement(n.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/staff"},r.a.createElement("h3",{className:"fw1 mt0 lh-copy bb bw2"},"Staff")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Staff directory"))))),r.a.createElement("div",{className:"flex-l w-100 nl2 nr2 center"},r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100"},r.a.createElement(n.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/directions"},r.a.createElement("h3",{className:"fw1 mt0 bb bw2"},"Directions")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"How to find us ")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3 w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100"},r.a.createElement(n.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/contact"},r.a.createElement("h3",{className:"fw1 mt0 lh-copy bb bw2"},"Contact")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Have a question? Just want to say hi? ")))),r.a.createElement("article",{className:"flex-1 bt bb b--black-10 shadow-4 ma3 pa3  w-90"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{className:"w-100"},r.a.createElement(n.Link,{className:"link dt w-100 mt2 dim dark-blue",to:"/about/glossary"},r.a.createElement("h3",{className:"fw1 mt0 lh-copy bb bw2"},"Glossary")),r.a.createElement("p",{className:"f6 f5-l mt0 lh-copy"},"Helpful guide to disability-related terms and jargon")))))))};a.default=u},SsCC:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0;var r=l(t("2vHB"));a.Breadcrumb=r.default;var n=l(t("JHR5"));a.AutoGenCrumb=n.default;var c=t("iHlK");a.BreadcrumbContext=c.BreadcrumbContext,a.BreadcrumbConsumer=c.BreadcrumbConsumer,a.BreadcrumbProvider=c.BreadcrumbProvider;var s=l(t("q/3z"));a.useBreadcrumb=s.default},bSK8:function(e,a,t){"use strict";a.__esModule=!0;var l=t("SsCC");a.Breadcrumb=l.Breadcrumb,a.BreadcrumbContext=l.BreadcrumbContext,a.BreadcrumbConsumer=l.BreadcrumbConsumer,a.BreadcrumbProvider=l.BreadcrumbProvider,a.useBreadcrumb=l.useBreadcrumb,a.AutoGenCrumb=l.AutoGenCrumb},"q/3z":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("q1tI")),n=t("iHlK"),c=function(e){var a=e.location,t=e.crumbLabel,l=e.crumbSeparator,c=r.default.useContext(n.BreadcrumbContext),s=c.crumbs,m=c.updateCrumbs;return r.default.useEffect((function(){m({location:a,crumbLabel:t,crumbSeparator:l})}),[a,t,l,m]),{crumbs:s}};a.default=c}}]);
//# sourceMappingURL=component---src-pages-about-index-js-541e55979a51c67fbfda.js.map