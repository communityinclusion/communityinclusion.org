(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"2vHB":function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("q1tI")),c=a(r("JHR5")),s=a(r("LCnF")),n=r("m81S"),m="/home/circleci/project/src/components/Breadcrumb.js",i=function(e){return l.default.useContext(n.OptionsContext).useAutoGen?l.default.createElement(c.default,(0,u.default)({},e,{__source:{fileName:m,lineNumber:12},__self:this})):l.default.createElement(s.default,(0,u.default)({},e,{__source:{fileName:m,lineNumber:14},__self:this}))};t.default=i},JHR5:function(e,t,r){"use strict";r("gu/5"),r("eoYm");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("uDP2")),c=a(r("q1tI")),s=a(r("17x9")),n=r("Wbzz"),m=r("m81S"),i="/home/circleci/project/src/components/auto-gen-crumb.js",d=function(e){var t=e.title,r=void 0===t?"":t,a=e.crumbSeparator,s=e.crumbWrapperStyle,d=e.crumbActiveStyle,b=e.crumbStyle,o=e.crumbs,f=e.crumbLabel,p=void 0===f?null:f,_=e.disableLinks,S=e.hiddenCrumbs,v=(0,l.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),h=c.default.useContext(m.OptionsContext).useClassNames;return c.default.createElement("div",{__source:{fileName:i,lineNumber:23},__self:this},c.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:i,lineNumber:24},__self:this},r),o.map((function(e,t){return S.includes(e.pathname)?null:c.default.createElement("div",{className:"breadcrumb",style:h?null:(0,u.default)({display:"inline"},s),key:t,__source:{fileName:i,lineNumber:30},__self:this},!_.includes(e.pathname)&&c.default.createElement(n.Link,(0,u.default)({to:e.pathname,style:h?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),activeStyle:h?null:(0,u.default)({color:"white"},d),className:"breadcrumb__link",activeClassName:h?"breadcrumb__link__active":null},v,{__source:{fileName:i,lineNumber:38},__self:this}),p&&t===o.length-1?p:e.crumbLabel),_.includes(e.pathname)&&c.default.createElement("span",(0,u.default)({style:h?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},b),className:"breadcrumb__link__disabled"},v,{__source:{fileName:i,lineNumber:70},__self:this}),p&&t===o.length-1?p:e.crumbLabel),c.default.createElement("span",{className:"breadcrumb__separator",style:h?null:(0,u.default)({fontSize:"16pt"},b),__source:{fileName:i,lineNumber:89},__self:this},t===o.length-1?null:a))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:s.default.string,crumbSeparator:s.default.string,crumbWrapperStyle:s.default.shape(),crumbActiveStyle:s.default.shape(),crumbStyle:s.default.shape(),crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var b=d;t.default=b},LCnF:function(e,t,r){"use strict";r("klQ5"),r("sC2a");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("uDP2")),c=a(r("q1tI")),s=a(r("17x9")),n=r("Wbzz"),m=r("m81S"),i=a(r("q/3z")),d="/home/circleci/project/src/components/click-tracking-crumb.js",b=function(e){var t=e.title,r=e.location,a=e.crumbLabel,s=e.crumbSeparator,b=e.crumbWrapperStyle,o=e.crumbActiveStyle,f=e.crumbStyle,p=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),_=c.default.useContext(m.OptionsContext),S=_.useClassNames,v=_.usePathPrefix,h=(0,i.default)({location:(0,u.default)({},r,{pathname:v?r.pathname.replace(new RegExp("^"+v),""):r.pathname}),crumbLabel:a,crumbSeparator:s,crumbStyle:f,crumbActiveStyle:o}).crumbs,y=void 0===h?[]:h;return c.default.createElement("div",{__source:{fileName:d,lineNumber:37},__self:this},c.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:d,lineNumber:38},__self:this},t),y.map((function(e,t){return c.default.createElement("div",{className:"breadcrumb",style:S?null:(0,u.default)({display:"inline"},b),key:t,__source:{fileName:d,lineNumber:41},__self:this},c.default.createElement(n.Link,(0,u.default)({to:e.pathname||"",style:S?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:S?null:(0,u.default)({color:"white"},o),className:"breadcrumb__link",activeClassName:S?"breadcrumb__link__active":null},p,{__source:{fileName:d,lineNumber:48},__self:this}),e.crumbLabel),c.default.createElement("span",{className:"breadcrumb__separator",style:S?null:(0,u.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:d,lineNumber:76},__self:this},t===y.length-1?null:e.crumbSeparator))})))};b.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},b.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string,crumbWrapperStyle:s.default.shape(),crumbActiveStyle:s.default.shape(),crumbStyle:s.default.shape()};var o=b;t.default=o},SsCC:function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0;var u=a(r("2vHB"));t.Breadcrumb=u.default;var l=a(r("JHR5"));t.AutoGenCrumb=l.default;var c=a(r("bAhf"));t.SitemapCrumbs=c.default;var s=r("iHlK");t.BreadcrumbContext=s.BreadcrumbContext,t.BreadcrumbConsumer=s.BreadcrumbConsumer,t.BreadcrumbProvider=s.BreadcrumbProvider;var n=a(r("q/3z"));t.useBreadcrumb=n.default},bAhf:function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("q1tI")),c=a(r("JHR5")),s=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),l.default.createElement(c.default,(0,u.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};t.default=s},bSK8:function(e,t,r){"use strict";t.__esModule=!0;var a=r("SsCC");t.Breadcrumb=a.Breadcrumb,t.BreadcrumbContext=a.BreadcrumbContext,t.BreadcrumbConsumer=a.BreadcrumbConsumer,t.BreadcrumbProvider=a.BreadcrumbProvider,t.useBreadcrumb=a.useBreadcrumb,t.SitemapCrumbs=a.SitemapCrumbs,t.AutoGenCrumb=a.AutoGenCrumb},o5uR:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),u=r.n(a),l=r("Bl7J"),c=r("vrFN"),s=r("bSK8"),n=r("TJpk");t.default=function(e){var t=e.pageContext.breadcrumb.crumbs;return u.a.createElement(l.a,null,u.a.createElement(n.Helmet,null,u.a.createElement("script",null,' var _ctct_m = "b49f2c8400ca9ddcee2ba421b594264d"; '),u.a.createElement("script",{id:"signupScript",src:"//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js",async:!0,defer:!0})),u.a.createElement("section",{className:"center mw8"},u.a.createElement("div",{className:"breadcrumbs"},u.a.createElement(s.Breadcrumb,{crumbs:t,crumbSeparator:" / ",crumbLabel:"Subscribe"})),u.a.createElement(c.a,{title:"Subscribe"}),u.a.createElement("h1",null,"Subscribe"),u.a.createElement("div",null,u.a.createElement("div",{class:"ctct-inline-form","data-form-id":"d1e81fb3-9e40-46dd-8028-2852e942a917"}))))}},"q/3z":function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("q1tI")),l=r("iHlK"),c=function(e){var t=e.location,r=e.crumbLabel,a=e.crumbSeparator,c=e.crumbStyle,s=void 0===c?{}:c,n=e.crumbActiveStyle,m=void 0===n?{}:n,i=u.default.useContext(l.BreadcrumbContext),d=i.crumbs,b=i.updateCrumbs;return u.default.useEffect((function(){b({location:t,crumbLabel:r,crumbSeparator:a,crumbStyle:s,crumbActiveStyle:m})}),[t,r,a,s,m,b]),{crumbs:d}};t.default=c}}]);
//# sourceMappingURL=component---src-pages-subscribe-js-9965c78095722311c653.js.map