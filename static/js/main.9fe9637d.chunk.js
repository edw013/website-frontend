(window["webpackJsonpwebsite-frontend"]=window["webpackJsonpwebsite-frontend"]||[]).push([[0],{26:function(e,t,a){e.exports=a(54)},32:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=(a(32),a(6)),i=a(7),s=a(9),u=a(8),d=a(10),m=a(57),h=a(55),p=a(58),b=a(56),v=a(59),f=a(14),E=a.n(f);E.a.defaults.headers.post["Content-Type"]="application/json";var j="https://ethanwang-backend.herokuapp.com/posts",O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={id:e.value._id,title:e.value.title,body:e.value.body,date:e.value.date,lastUpdate:e.value.lastUpdate},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.a,{to:"/blog/"+this.state.id},o.a.createElement("h1",null,this.state.title)),o.a.createElement("p",null,this.state.body),o.a.createElement("p",null,"Posted on: ",this.state.date))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={id:e.match.params.id,error:null,isLoaded:!1,data:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get(j+"/"+this.state.id).then(function(t){e.setState({isLoaded:!0,data:t.data})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data;return t?o.a.createElement("div",null,"Error: ",t.message):a?o.a.createElement("div",null,o.a.createElement("h1",null,n.title),o.a.createElement("p",null,n.body),o.a.createElement("p",null,"Posted on: ",n.date)):o.a.createElement("div",null,"Loading... (if it's slow, blame Heroku free tier)")}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,posts:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get(j).then(function(t){e.setState({isLoaded:!0,posts:t.data.posts})}).catch(function(t){e.setState({isLoaded:!0,error:t.response.data})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.posts;return t?o.a.createElement("div",null,"Error: ",t.message):a?n.map(function(e){return o.a.createElement(O,{key:e._id,value:e})}):o.a.createElement("div",null,"Loading... (if it's slow, blame Heroku free tier)")}}]),t}(n.Component),g=Object(v.a)(w),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome!"))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(h.a,{to:"/"},"Home"),o.a.createElement(h.a,{to:"/blog/"},"Blog"),o.a.createElement(p.a,null,o.a.createElement(b.a,{exact:!0,path:"/",component:k}),o.a.createElement(b.a,{exact:!0,path:"/blog/",component:y}),o.a.createElement(b.a,{exact:!0,path:"/blog/:id",component:g}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.9fe9637d.chunk.js.map