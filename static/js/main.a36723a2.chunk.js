(window["webpackJsonpwebsite-frontend"]=window["webpackJsonpwebsite-frontend"]||[]).push([[0],{47:function(e,t,a){e.exports=a(82)},52:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),l=(a(52),a(14)),c=a(15),s=a(17),u=a(16),d=a(18),m=a(89),h=a(90),p=a(85),v=a(84),b=a(91),f=a(88),E=a(29),g=a.n(E);g.a.defaults.headers.post["Content-Type"]="application/json";var j="https://ethanwang-backend.herokuapp.com/posts",O="loading... shoutout heroku free tier!!",w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={id:e.value._id,title:e.value.title,preview:e.value.preview,date:e.value.date,lastUpdate:e.value.lastUpdate},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new Date(this.state.date);return r.a.createElement(f.a,{style:{marginBottom:"10px"}},r.a.createElement(f.a.Body,null,r.a.createElement(v.a,{to:"/blog/"+this.state.id},r.a.createElement(f.a.Title,null,this.state.title)),r.a.createElement(f.a.Text,null,this.state.preview)),r.a.createElement(f.a.Footer,{className:"text-muted"},e.toString()))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={id:e.match.params.id,error:null,isLoaded:!1,data:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get(j+"/"+this.state.id).then(function(t){e.setState({isLoaded:!0,data:t.data})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data;if(t)return r.a.createElement("div",null,"Error: ",t.message);if(!a)return r.a.createElement("div",null,O);var i=new Date(n.date);return r.a.createElement("div",null,r.a.createElement("h1",null,n.title),r.a.createElement("p",null,n.body),r.a.createElement("p",null,i.toString()))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,posts:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get(j).then(function(t){e.setState({isLoaded:!0,posts:t.data.posts})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.posts;return t?r.a.createElement("div",null,"Error: ",t):a?n.map(function(e){return r.a.createElement(w,{key:e._id,value:e})}):r.a.createElement("div",null,O)}}]),t}(n.Component),L=Object(b.a)(y),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"unlucky initials tbh"),r.a.createElement("h4",null,"Ethan Wang etc etc"))}}]),t}(n.Component),B=a(87),C=a(86),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(B.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement("div",{style:{width:"70%",marginLeft:"15%",marginRight:"15%",display:"flex"}},r.a.createElement(B.a.Brand,null,"ew."),r.a.createElement(C.a.Link,{href:"#/"},"Home"),r.a.createElement(C.a.Link,{href:"#/blog"},"Blog"))),r.a.createElement("div",{style:{width:"70%",marginLeft:"15%",marginRight:"15%",marginTop:"2%"}},r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{exact:!0,path:"/blog/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/blog/:id",component:L})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.a36723a2.chunk.js.map