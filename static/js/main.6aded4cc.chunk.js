(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(28),i=n.n(s),a=(n(37),n(8)),r=n(12),l=n(2),u=n(32),d=null,j="//lit-brook-82824.herokuapp.com",b=(n(38),n(1)),h=function(e){var t,n,c,o=e.messages?null===(t=e.messages[e.messages.length-1])||void 0===t?void 0:t.body:null,s=(null!==(n=null===o||void 0===o?void 0:o.msg)&&void 0!==n?n:"").substring(0,25),i=null===(c=null!==o&&void 0!==o?o:"")||void 0===c?void 0:c.from;return Object(b.jsxs)("div",{className:"Item",onClick:function(){e.selectUser(e.to)},children:[Object(b.jsx)("h4",{children:"all"!==e.to?e.to:"General"}),Object(b.jsx)("p",{children:"".concat(i?i+":":""," ").concat(s)})]})},f=(n(40),function(e){var t=e.id||"User";console.log("Chat Menu props: ",e);var n=e.users.filter((function(t){return t!==e.id})).map((function(t,n){return Object(b.jsx)(h,{to:t,messages:e.messages[t],selectUser:e.selectUser},n)}));return Object(b.jsxs)("div",{className:"ChatMenu",children:[Object(b.jsx)("h2",{children:t}),n]})}),g=(n(41),n(42),function(e){var t=e.message.from===e.id?"Message me":"Message",n=Object(c.useState)(t),o=Object(a.a)(n,2),s=o[0],i=o[1],r=Object(c.useState)(e.message.msg.length>256),l=Object(a.a)(r,2),u=l[0],d=l[1],j=function(){var e="".concat(t," max");d(!1),i(e)};return Object(b.jsx)("div",{className:s,children:u?Object(b.jsxs)("p",{children:[e.message.msg.substring(0,255),"... ",Object(b.jsx)("button",{onClick:j,children:"See more"})]}):Object(b.jsxs)("p",{children:[e.message.msg," "]})})}),O=function(e){var t,n=(null!==(t=e.chatHistory)&&void 0!==t?t:[]).map((function(t,n){return Object(b.jsx)(g,{id:e.id,message:t.body},n)}));return Object(b.jsx)("div",{className:"ChatHistory",children:n})},m=(n(43),function(e){return Object(b.jsx)("div",{className:"ChatInput",children:Object(b.jsx)("input",{onKeyDown:e.send,placeholder:"Type a message, Hit Enter to send..."})})}),v=(n(44),function(e){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h2",{children:e.name||"General"})})}),x=(n(45),function(e){return Object(b.jsxs)("div",{className:"ChatContainer",children:[Object(b.jsx)(v,{name:e.to}),Object(b.jsx)(O,{id:e.id,chatHistory:e.chatHistory}),Object(b.jsx)(m,{send:e.send})]})}),p=(n(46),n(29)),y=n(30),C=n(16),k=n.n(C),S=new(function(){function e(){Object(p.a)(this,e),this.axiosInstance=null,this.apiUrlRoot="//lit-brook-82824.herokuapp.com";var t=k.a.create({baseURL:"/",headers:{Connection:"keep-alive"}});this.axiosInstance=t}return Object(y.a)(e,[{key:"anonymousGet",value:function(e){var t=this;return new Promise((function(n,c){k.a.get(t.apiUrlRoot+e).then((function(e){var t=e.data;n(t)})).catch((function(e){c(e)}))}))}}]),e}()),w=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)({}),r=Object(a.a)(i,2),h=r[0],g=r[1],O=Object(c.useState)([]),m=Object(a.a)(O,2),v=m[0],p=m[1],y=Object(c.useState)("all"),C=Object(a.a)(y,2),k=C[0],w=C[1];Object(c.useEffect)((function(){e.isLogged&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log("Attempting to connect"),null==d&&""!==t?d=new WebSocket("ws:".concat(j,"/ws?id=").concat(t)):null==d&&(d=new WebSocket("ws:".concat(j,"/ws"))),d.onopen=function(){console.log("Connected succesfully")},d.onmessage=function(t){console.log(t),e(t)},d.onclose=function(e){console.log("Socket closed the connection: ",e)},d.onerror=function(e){console.log("Socket Error: ",e)}}((function(t){var n=JSON.parse(t.data);n.body.to===e.id&&(n.body.to=n.body.from),s([].concat(Object(u.a)(o),[n]))}),e.id),console.log("History: ",o)})),Object(c.useEffect)((function(){g(N(o)),S.anonymousGet("/clients").then((function(e){e.unshift("all"),p(e)})).catch((function(e){return console.error(e)}))}),[o]);var N=function(e){return e.reduce((function(e,t){var n=t.body.to;return(e[n]=e[n]||[]).push(t),e}),{})};return e.isLogged?Object(b.jsxs)("div",{className:"Chat",children:[Object(b.jsx)(f,{id:e.id,users:v,messages:h,selectUser:function(e){w(e)}}),Object(b.jsx)(x,{id:e.id,to:"all"!==k?k:"General",chatHistory:h[k],send:function(t){13===t.keyCode&&(!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all";console.log("sending msg: ",n,e);var c=JSON.stringify({from:t,to:n,msg:e});d.send(c),console.log("sent")}(t.target.value,e.id,k),t.target.value="")}})]}):Object(b.jsx)(l.a,{to:"/login"})},N=(n(70),function(e){return Object(b.jsxs)("div",{className:"LoginContainer",children:[Object(b.jsx)("h2",{children:"Welcome to Realtime chat!"}),Object(b.jsx)("h3",{children:"Enter your nickname:"}),Object(b.jsx)("input",{type:"text",value:e.id,onChange:e.fieldChange,placeholder:"Write here..."}),Object(b.jsx)("button",{onClick:e.login,children:"Login"})]})}),L=(n(71),function(e){return e.isLogged?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsx)(N,{id:e.id,login:e.login,fieldChange:e.fieldChange})});n(72);var U=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(!1),i=Object(a.a)(s,2),u=i[0],d=i[1],j=function(e){console.log(n),n&&d(!0),e.preventDefault()},h=function(e){o(e.target.value)};return Object(b.jsx)(r.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",render:function(e){return Object(b.jsx)(w,{id:n,isLogged:u})}}),Object(b.jsx)(l.b,{exact:!0,path:"/login",render:function(e){return Object(b.jsx)(L,{id:n,login:j,fieldChange:h,isLogged:u})}})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root")),H()}},[[73,1,2]]]);
//# sourceMappingURL=main.6aded4cc.chunk.js.map