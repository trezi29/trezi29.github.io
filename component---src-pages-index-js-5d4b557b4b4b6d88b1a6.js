(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=(a(46),a(7)),o=a.n(n),l=a(135),c=a.n(l),m=(a(140),function(e){function t(t){var a;return(a=e.call(this,t)||this).nextImg=function(){a.setState({img:a.state.img+1})},a.prevImg=function(){a.setState({img:a.state.img-1})},a.handleOnAlways=function(){a.setState({imgLoaded:!0})},a.state={img:0,imgNumber:a.props.images.length,imgLoaded:!1},a}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(c.a,{className:"your-container-class",onAlways:this.handleOnAlways,onProgress:this.handleOnProgress,onFail:this.handleOnFail,done:this.handleDone},this.props.images.map(function(e,t){return i.a.createElement("img",{className:"slideshow__hidden",alt:"",height:"300",key:t,src:e.image})}),this.state.imgLoaded?"":i.a.createElement("div",{className:"slideshow__loading"},i.a.createElement("h1",{className:"slideshow__logo"},"cartasu.ga"),i.a.createElement("div",{className:"slideshow__loader"}))),i.a.createElement("div",{className:"slideshow__pictures",style:{backgroundImage:"url("+this.props.images[this.state.img].image+")"},onMouseMove:this.mouseMoving},i.a.createElement("div",{className:"slideshow__controls"},i.a.createElement("h1",{className:"slideshow__title"},this.props.images[this.state.img].title),i.a.createElement("h2",{className:"slideshow__date"},this.props.images[this.state.img].date),this.state.img<this.state.imgNumber-1?i.a.createElement("button",{className:"slideshow__button--next",onClick:this.nextImg},"Next"):"",this.state.img>0?i.a.createElement("button",{className:"slideshow__button--prev",onClick:this.prevImg},"Prev"):"")))},t}(s.Component)),r=(a(144),a(148)),g=a.n(r),d=a(149),h=a.n(d),u=[{image:g.a,title:"Orobie Ronde 01",date:"Agosto 2018"},{image:h.a,title:"Orobie Ronde 02",date:"Agosto 2018"}];t.default=function(){return i.a.createElement(m,{images:u})}},140:function(e,t,a){},144:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/cartasu.ga_01-c9bc8cfbb8027d9f07ea97a4fc4271b7.jpg"},149:function(e,t,a){e.exports=a.p+"static/cartasu.ga_02-e6c5f32f0aeeebcc9c87251163e55d28.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-5d4b557b4b4b6d88b1a6.js.map