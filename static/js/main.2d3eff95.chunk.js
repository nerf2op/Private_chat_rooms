(this.webpackJsonpnew_app=this.webpackJsonpnew_app||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(22),r=a.n(c),i=(a(138),a(40)),l=(a(139),a(28)),o=a(2),j=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?Object(o.jsx)("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(o.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:t.text})},u=function(e){var t=e.lastMessage,a=e.message,s=!t||t.sender.username!==a.sender.username;return Object(o.jsxs)("div",{className:"message-row",children:[s&&Object(o.jsx)("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?Object(o.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:s?"4px":"48px"}}):Object(o.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:s?"4px":"48px"},children:a.text})]})},d=a(9),m=a(324),b=a(325),h=function(e){var t=Object(s.useState)(""),a=Object(d.a)(t,2),n=a[0],c=a[1],r=e.chatId,i=e.creds,j=function(e){e.preventDefault();var t=n.trim();t.length>0&&Object(l.t)(i,r,{text:t}),c("")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{className:"message-form",onSubmit:j,children:[Object(o.jsx)("input",{className:"message-input",placeholder:"Message Likho...",value:n,onChange:function(t){c(t.target.value),Object(l.p)(e,r)},onSubmit:j}),Object(o.jsx)("label",{htmlFor:"upload-button",children:Object(o.jsx)("span",{className:"image-button",children:Object(o.jsx)(m.a,{className:"picture-icon"})})}),Object(o.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.t)(i,r,{files:e.target.files,text:""})}.bind(undefined)}),Object(o.jsx)("button",{type:"submit",className:"send-button",children:Object(o.jsx)(b.a,{className:"send-icon"})})]})})},g=function(e){var t=e.chats,a=e.activeChat,s=e.userName,n=e.messages,c=t&&t[a],r=function(e,t){return c.people.map((function(a,s){return a.last_read===e.id&&Object(o.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(s))}))};return c?Object(o.jsxs)("div",{className:"chat-feed",children:[Object(o.jsxs)("div",{className:"chat-title-container",children:[Object(o.jsx)("div",{className:"chat-title",children:null===c||void 0===c?void 0:c.title}),Object(o.jsx)("div",{className:"chat-subtitle",children:c.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(n);return e.map((function(t,a){var c=n[t],i=0===a?null:e[a-1],l=s===c.sender.username;return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)("div",{className:"message-block",children:l?Object(o.jsx)(j,{message:c}):Object(o.jsx)(u,{message:c,lastMessage:n[i]})}),Object(o.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?"0px":"68px"},children:r(c,l)})]},"msg_".concat(a))}))}(),Object(o.jsx)("div",{style:{height:"100px"}}),Object(o.jsx)("div",{className:"message-form-container",children:Object(o.jsx)(h,Object(i.a)(Object(i.a)({},e),{},{chatId:a}))})]}):Object(o.jsx)("div",{})},p=a(16),x=a.n(p),O=a(23),f=a(5),v=a.n(f),N=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(d.a)(c,2),i=r[0],l=r[1],j=Object(s.useState)(""),u=Object(d.a)(j,2),m=u[0],b=u[1],h=function(){var e=Object(O.a)(x.a.mark((function e(t){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"10737ac5-88df-47ef-9bce-116baf8419d6","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,v.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Wrong Credentials....");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("h1",{className:"title",children:"Private Chat Rooms "}),Object(o.jsxs)("form",{onSubmit:h,children:[Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(o.jsx)("input",{type:"password",value:i,onChange:function(e){return l(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(o.jsx)("div",{align:"center",children:Object(o.jsx)("button",{type:"submit",className:"button",children:Object(o.jsx)("span",{children:"Start Chatting"})})})]}),Object(o.jsx)("h1",{children:m})]})})})},y=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){localStorage.clear(),window.location.reload(!1)},className:"btn",style:{display:"flex",position:"relative"},children:"Log Out"})})},w=function(){return localStorage.getItem("username")?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"con",children:[Object(o.jsx)(y,{}),Object(o.jsx)(l.d,{height:"100vh",width:"100em",projectID:"10737ac5-88df-47ef-9bce-116baf8419d6",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(o.jsx)(g,Object(i.a)({},e))}})]})}):Object(o.jsx)(N,{})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,326)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),C()}},[[322,1,2]]]);
//# sourceMappingURL=main.2d3eff95.chunk.js.map