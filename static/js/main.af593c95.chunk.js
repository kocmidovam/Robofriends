(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);var i=a(4),l=a(5),s=a(7),h=a(6),u=a(1),m=a(8),d=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},b=function(e){var t=e.roboti;return r.a.createElement("div",null,t.map(function(e,a){return r.a.createElement(d,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})}))},f=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},g=(a(17),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)}),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={robots:[],searchfield:""},e.onSearchChange=e.onSearchChange.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"onSearchChange",value:function(e){this.setState({searchfield:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robot Friends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(b,{roboti:n}))):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),t}(n.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.af593c95.chunk.js.map