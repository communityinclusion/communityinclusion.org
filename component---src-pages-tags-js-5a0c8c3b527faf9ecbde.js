(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1/Ks":function(e,t,r){"use strict";r("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2vHB":function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("q1tI")),n=a(r("JHR5")),i=a(r("LCnF")),c=r("m81S"),s="/home/circleci/project/src/components/Breadcrumb.js",o=function(e){return l.default.useContext(c.OptionsContext).useAutoGen?l.default.createElement(n.default,(0,u.default)({},e,{__source:{fileName:s,lineNumber:12},__self:this})):l.default.createElement(i.default,(0,u.default)({},e,{__source:{fileName:s,lineNumber:14},__self:this}))};t.default=o},HQAx:function(e,t,r){"use strict";var a=r("P8UN"),u=r("ewoU"),l=r("DFzH"),n=r("kiRH"),i=r("nONw"),c=r("ytzU");a(a.P,"Array",{flatMap:function(e){var t,r,a=l(this);return i(e),t=n(a.length),r=c(a,0),u(r,a,a,t,0,1,e,arguments[1]),r}}),r("Dq1/")("flatMap")},I17o:function(e,t,r){"use strict";var a=r("P8UN"),u=r("pTxf"),l=r("CL53"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);a(a.P+a.F*n,"String",{padEnd:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},JHR5:function(e,t,r){"use strict";r("gu/5"),r("eoYm");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("uDP2")),n=a(r("q1tI")),i=a(r("17x9")),c=r("Wbzz"),s=r("m81S"),o="/home/circleci/project/src/components/auto-gen-crumb.js",m=function(e){var t=e.title,r=void 0===t?"":t,a=e.crumbSeparator,i=e.crumbWrapperStyle,m=e.crumbActiveStyle,d=e.crumbStyle,f=e.crumbs,b=e.crumbLabel,p=void 0===b?null:b,_=e.disableLinks,v=e.hiddenCrumbs,h=(0,l.default)(e,["title","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle","crumbs","crumbLabel","disableLinks","hiddenCrumbs"]),S=n.default.useContext(s.OptionsContext).useClassNames;return n.default.createElement("div",{__source:{fileName:o,lineNumber:23},__self:this},n.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:o,lineNumber:24},__self:this},r),f.map((function(e,t){return v.includes(e.pathname)?null:n.default.createElement("div",{className:"breadcrumb",style:S?null:(0,u.default)({display:"inline"},i),key:t,__source:{fileName:o,lineNumber:30},__self:this},!_.includes(e.pathname)&&n.default.createElement(c.Link,(0,u.default)({to:e.pathname,style:S?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},d),activeStyle:S?null:(0,u.default)({color:"white"},m),className:"breadcrumb__link",activeClassName:S?"breadcrumb__link__active":null},h,{__source:{fileName:o,lineNumber:38},__self:this}),p&&t===f.length-1?p:e.crumbLabel),_.includes(e.pathname)&&n.default.createElement("span",(0,u.default)({style:S?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},d),className:"breadcrumb__link__disabled"},h,{__source:{fileName:o,lineNumber:70},__self:this}),p&&t===f.length-1?p:e.crumbLabel),n.default.createElement("span",{className:"breadcrumb__separator",style:S?null:(0,u.default)({fontSize:"16pt"},d),__source:{fileName:o,lineNumber:89},__self:this},t===f.length-1?null:a))})))};m.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{},crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},m.propTypes={title:i.default.string,crumbSeparator:i.default.string,crumbWrapperStyle:i.default.shape(),crumbActiveStyle:i.default.shape(),crumbStyle:i.default.shape(),crumbs:i.default.arrayOf(i.default.shape({location:i.default.shape(),pathname:i.default.string.isRequired})).isRequired,crumbLabel:i.default.string,disableLinks:i.default.arrayOf(i.default.string),hiddenCrumbs:i.default.arrayOf(i.default.string)};var d=m;t.default=d},LCnF:function(e,t,r){"use strict";r("klQ5"),r("sC2a");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("uDP2")),n=a(r("q1tI")),i=a(r("17x9")),c=r("Wbzz"),s=r("m81S"),o=a(r("q/3z")),m="/home/circleci/project/src/components/click-tracking-crumb.js",d=function(e){var t=e.title,r=e.location,a=e.crumbLabel,i=e.crumbSeparator,d=e.crumbWrapperStyle,f=e.crumbActiveStyle,b=e.crumbStyle,p=(0,l.default)(e,["title","location","crumbLabel","crumbSeparator","crumbWrapperStyle","crumbActiveStyle","crumbStyle"]),_=n.default.useContext(s.OptionsContext),v=_.useClassNames,h=_.usePathPrefix,S=(0,o.default)({location:(0,u.default)({},r,{pathname:h?r.pathname.replace(new RegExp("^"+h),""):r.pathname}),crumbLabel:a,crumbSeparator:i,crumbStyle:b,crumbActiveStyle:f}).crumbs,y=void 0===S?[]:S;return n.default.createElement("div",{__source:{fileName:m,lineNumber:37},__self:this},n.default.createElement("span",{className:"breadcrumb__title",__source:{fileName:m,lineNumber:38},__self:this},t),y.map((function(e,t){return n.default.createElement("div",{className:"breadcrumb",style:v?null:(0,u.default)({display:"inline"},d),key:t,__source:{fileName:m,lineNumber:41},__self:this},n.default.createElement(c.Link,(0,u.default)({to:e.pathname||"",style:v?null:(0,u.default)({textDecoration:"none",fontSize:"16pt",color:"#e1e1e1"},e.crumbStyle),activeStyle:v?null:(0,u.default)({color:"white"},f),className:"breadcrumb__link",activeClassName:v?"breadcrumb__link__active":null},p,{__source:{fileName:m,lineNumber:48},__self:this}),e.crumbLabel),n.default.createElement("span",{className:"breadcrumb__separator",style:v?null:(0,u.default)({fontSize:"16pt"},e.crumbStyle),__source:{fileName:m,lineNumber:76},__self:this},t===y.length-1?null:e.crumbSeparator))})))};d.defaultProps={title:"",crumbSeparator:" / ",crumbWrapperStyle:{},crumbStyle:{},crumbActiveStyle:{}},d.propTypes={location:i.default.shape().isRequired,crumbLabel:i.default.string.isRequired,title:i.default.string,crumbSeparator:i.default.string,crumbWrapperStyle:i.default.shape(),crumbActiveStyle:i.default.shape(),crumbStyle:i.default.shape()};var f=d;t.default=f},"QzX/":function(e,t,r){"use strict";r("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,r){"use strict";var a=r("P8UN"),u=r("/+AL");a(a.P+a.F*!r("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return u(this,e,arguments.length,arguments[1],!0)}})},SsCC:function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0;var u=a(r("2vHB"));t.Breadcrumb=u.default;var l=a(r("JHR5"));t.AutoGenCrumb=l.default;var n=a(r("bAhf"));t.SitemapCrumbs=n.default;var i=r("iHlK");t.BreadcrumbContext=i.BreadcrumbContext,t.BreadcrumbConsumer=i.BreadcrumbConsumer,t.BreadcrumbProvider=i.BreadcrumbProvider;var c=a(r("q/3z"));t.useBreadcrumb=c.default},"Y++M":function(e,t,r){"use strict";var a=r("DFzH"),u=r("dTG6"),l=r("kiRH");e.exports=function(e){for(var t=a(this),r=l(t.length),n=arguments.length,i=u(n>1?arguments[1]:void 0,r),c=n>2?arguments[2]:void 0,s=void 0===c?r:u(c,r);s>i;)t[i++]=e;return t}},YuTi:function(e,t,r){r("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZiRl:function(e,t,r){var a=r("P8UN");a(a.P,"String",{repeat:r("gd4K")})},bAhf:function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("j8BX")),l=a(r("q1tI")),n=a(r("JHR5")),i=function(e){return console.warn("Warning: <SitemapCrumbs /> has been deprecated.  Please update your code to use <Breadcrumb /> component. See docs https://github.com/sbardian/gatsby-plugin-breadcrumb for details."),l.default.createElement(n.default,(0,u.default)({},e,{__source:{fileName:"/home/circleci/project/src/components/sitemap-crumbs.js",lineNumber:11},__self:this}))};t.default=i},bSK8:function(e,t,r){"use strict";t.__esModule=!0;var a=r("SsCC");t.Breadcrumb=a.Breadcrumb,t.BreadcrumbContext=a.BreadcrumbContext,t.BreadcrumbConsumer=a.BreadcrumbConsumer,t.BreadcrumbProvider=a.BreadcrumbProvider,t.useBreadcrumb=a.useBreadcrumb,t.SitemapCrumbs=a.SitemapCrumbs,t.AutoGenCrumb=a.AutoGenCrumb},enK5:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return o}));var a=r("q1tI"),u=r.n(a),l=r("Wbzz"),n=r("LvDl"),i=r("Bl7J"),c=r("vrFN"),s=r("bSK8");t.default=function(e){var t=e.data,r=e.pageContext,a=t.allMarkdownRemark.group,o=r.breadcrumb.crumbs;return u.a.createElement(i.a,null,u.a.createElement("section",{className:"center mw8"},u.a.createElement(c.a,{title:"Tags"}),u.a.createElement("div",{className:"breadcrumbs"},u.a.createElement(s.Breadcrumb,{crumbs:o,crumbSeparator:" / "})),u.a.createElement("div",null,u.a.createElement("h1",null,"Tags"),u.a.createElement("ul",null,a.map((function(e){return u.a.createElement("li",{key:e.fieldValue},u.a.createElement(l.Link,{to:"/tags/"+Object(n.kebabCase)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))))};var o="2857054657"},ewoU:function(e,t,r){"use strict";var a=r("tuyV"),u=r("BjK0"),l=r("kiRH"),n=r("ot9L"),i=r("sOol")("isConcatSpreadable");e.exports=function e(t,r,c,s,o,m,d,f){for(var b,p,_=o,v=0,h=!!d&&n(d,f,3);v<s;){if(v in c){if(b=h?h(c[v],v,r):c[v],p=!1,u(b)&&(p=void 0!==(p=b[i])?!!p:a(b)),p&&m>0)_=e(t,r,b,l(b.length),_,m-1)-1;else{if(_>=9007199254740991)throw TypeError();t[_]=b}_++}v++}return _}},gd4K:function(e,t,r){"use strict";var a=r("1Llc"),u=r("ap2Z");e.exports=function(e){var t=String(u(this)),r="",l=a(e);if(l<0||l==1/0)throw RangeError("Count can't be negative");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(r+=t);return r}},lFjb:function(e,t,r){"use strict";var a=r("P8UN"),u=r("5SQf"),l=r("1Llc"),n=r("kiRH"),i=[].lastIndexOf,c=!!i&&1/[1].lastIndexOf(1,-0)<0;a(a.P+a.F*(c||!r("h/qr")(i)),"Array",{lastIndexOf:function(e){if(c)return i.apply(this,arguments)||0;var t=u(this),r=n(t.length),a=r-1;for(arguments.length>1&&(a=Math.min(a,l(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in t&&t[a]===e)return a||0;return-1}})},lizw:function(e,t,r){"use strict";var a=r("P8UN"),u=r("pTxf"),l=r("CL53"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);a(a.P+a.F*n,"String",{padStart:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},n0hJ:function(e,t,r){var a=r("P8UN");a(a.P,"Array",{fill:r("Y++M")}),r("Dq1/")("fill")},pTxf:function(e,t,r){var a=r("kiRH"),u=r("gd4K"),l=r("ap2Z");e.exports=function(e,t,r,n){var i=String(l(e)),c=i.length,s=void 0===r?" ":String(r),o=a(t);if(o<=c||""==s)return i;var m=o-c,d=u.call(s,Math.ceil(m/s.length));return d.length>m&&(d=d.slice(0,m)),n?d+i:i+d}},"q/3z":function(e,t,r){"use strict";var a=r("5NKs");t.__esModule=!0,t.default=void 0;var u=a(r("q1tI")),l=r("iHlK"),n=function(e){var t=e.location,r=e.crumbLabel,a=e.crumbSeparator,n=e.crumbStyle,i=void 0===n?{}:n,c=e.crumbActiveStyle,s=void 0===c?{}:c,o=u.default.useContext(l.BreadcrumbContext),m=o.crumbs,d=o.updateCrumbs;return u.default.useEffect((function(){d({location:t,crumbLabel:r,crumbSeparator:a,crumbStyle:i,crumbActiveStyle:s})}),[t,r,a,i,s,d]),{crumbs:m}};t.default=n}}]);
//# sourceMappingURL=component---src-pages-tags-js-5a0c8c3b527faf9ecbde.js.map