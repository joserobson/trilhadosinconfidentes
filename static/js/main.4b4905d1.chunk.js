(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/mapaGuia.d78c3486.PNG"},26:function(e,t,n){e.exports=n(40)},31:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(21),c=n.n(o),r=(n(31),n(32),n(33),n(5)),l=n(6),s=n(9),d=n(7),u=n(8),m=n(10),h=n(22),p=n.n(h),f=n(23),w=n.n(f),v=(n(37),function(e){function t(){var e;Object(r.a)(this,t);return(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={area:{name:"teste",areas:[{name:"1",shape:"rect",coords:[213,380,287,444],href:"/cidade"},{name:"2",shape:"rect",coords:[76,417,158,491],href:"/cidade"},{name:"3",shape:"rect",coords:[93,40,193,95],href:"/cidade"}]},largura:Math.round(.9*window.innerWidth),altura:Math.round(.85*window.innerHeight)},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"clicked",value:function(e){console.log("Area",e),this.props.history.push("/cidade/".concat(e.name))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"w3-container",id:"novoCliente",style:{marginTop:"75px"}},i.a.createElement("div",null,i.a.createElement(p.a,{src:w.a,map:this.state.area,onClick:function(t){return e.clicked(t)}})))}}]),t}(a.Component)),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={cidade:"vazio"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"w3-container",id:"novoCliente",style:{marginTop:"75px"}},i.a.createElement("h3",null,this.state.cidade))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.cidadeId;"1"===e?this.setState({cidade:"Tiradentes"}):"2"===e?this.setState({cidade:"S\xe3o Jo\xe3o Del Rey"}):this.setState({cidade:"Resende Costa"})}}]),t}(a.Component),g=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"w3-main",style:{marginLeft:"340px",marginRight:"75px"}},i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/",component:v}),i.a.createElement(m.a,{path:"/cidade/:cidadeId",component:y}),i.a.createElement(m.a,{component:v})))}}]),t}(a.Component),b=n(13),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).closeMenuClick=n.closeMenuClick.bind(Object(b.a)(n)),n.closeMenuClick=n.closeMenuClick.bind(Object(b.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"openMenuClick",value:function(){document.getElementById("mySidebar").style.display="block",document.getElementById("myOverlay").style.display="block"}},{key:"closeMenuClick",value:function(){document.getElementById("mySidebar").style.display="none",document.getElementById("myOverlay").style.display="none"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding",style:{zIndex:"3",width:"300px",fontWeight:"bold"},id:"mySidebar"},i.a.createElement("a",{href:"javascript:void(0)",onClick:this.closeMenuClick,className:"w3-button w3-hide-large w3-display-topleft",style:{width:"100%",fontSize:"22px"}},"Fechar Menu"),i.a.createElement("div",{className:"w3-container"},i.a.createElement("h3",{className:"w3-padding-64"},i.a.createElement("b",null,"Guia Das Vertentes"))),i.a.createElement("div",{className:"w3-bar-block"})),i.a.createElement("header",{className:"w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding"},i.a.createElement("a",{href:"javascript:void(0)",className:"w3-button w3-red w3-margin-right",onClick:this.openMenuClick},"\u2630"),i.a.createElement("span",{className:"w3-opacity",id:"tituloView"},"Guia Das Vertentes")),i.a.createElement("div",{className:"w3-overlay w3-hide-large",onClick:this.closeMenuClick,style:{cursor:"pointer"},title:"close side menu",id:"myOverlay"}))}}]),t}(a.Component);var E=function(){return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement(g,null))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=n(15);c.a.render(i.a.createElement(C.a,null,i.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/GuiaDasVertentes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/GuiaDasVertentes","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.4b4905d1.chunk.js.map