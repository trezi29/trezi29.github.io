(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),o=a.n(i),c=a(143),s=a(7),u=a.n(s),l=a(141),p=(a(162),function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement("div",{className:"galleryCard__container"+(this.props.rightImage?"--right":"")},r.a.createElement("img",{className:"galleryCard__image",alt:"",height:"300",src:this.props.img,onClick:function(){return Object(l.navigate)("/"+e.props.title)}}),r.a.createElement("div",{className:"galleryCard__descriptioContainer"},r.a.createElement("p",{className:"galleryCard__title"},this.props.title),""===this.props.description?"":r.a.createElement("p",{className:"galleryCard__description"},this.props.description),r.a.createElement("div",{className:"galleryCard__ph"},r.a.createElement("p",null,"ph. "),r.a.createElement("p",null,this.props.photographer))))},t}(n.Component));p.defaultProps={description:"",rightImage:!1};a(166);var d=a(149),m=a.n(d);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(o.a,{title:"cartasu.ga"}),r.a.createElement(p,{title:"moontains",img:m.a,photographer:"Matteo Tressi"}),r.a.createElement(p,{title:"moontains",img:m.a,photographer:"Matteo Tressi",rightImage:!0}),r.a.createElement(p,{title:"moontains",img:m.a,photographer:"Matteo Tressi"}))}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(140),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(142),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var p=a(34);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(141);a(145);t.a=function(){return r.a.createElement("div",{className:"header__container"},r.a.createElement("p",{className:"header__logo",onClick:function(){return Object(i.navigate)("/")}},"cartasu.ga"))}},144:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},145:function(e,t,a){},149:function(e,t,a){e.exports=a.p+"static/moontains_01-c9bc8cfbb8027d9f07ea97a4fc4271b7.jpg"},162:function(e,t,a){},166:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-b309647827673ef0c108.js.map