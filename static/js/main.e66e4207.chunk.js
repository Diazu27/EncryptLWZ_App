(this.webpackJsonpEncryptLWZ_app=this.webpackJsonpEncryptLWZ_app||[]).push([[0],{26:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(18),s=c.n(n),r=c(21),o=(c(26),c(4)),i=c(8),j=c(5),d=c(9),l=c.n(d),p=c(1),u=function(){var e="https://encript-app.herokuapp.com",t=Object(a.useState)({text1:"",text2:""}),c=Object(j.a)(t,2),n=c[0],s=c[1],r=function(e){s(Object(i.a)(Object(i.a)({},n),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{className:"textbox",children:[Object(p.jsx)("textarea",{value:n.text1,onChange:r,name:"text1",placeholder:"Write your text here"}),Object(p.jsx)("textarea",{value:n.text2,onChange:r,name:"text2",placeholder:"Write your encrypted text here"})]}),Object(p.jsxs)("div",{className:"buttonBox",children:[Object(p.jsx)("button",{className:"formButton",onClick:function(t){!function(){var t=new FormData;t.append("text",n.text1),l.a.post("".concat(e,"/api/encrypt"),t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){s({text2:JSON.stringify(e.data.compress)})}))}()},children:"\xa1Encrypt!"}),Object(p.jsx)("button",{className:"formButton-2",onClick:function(t){!function(){var t=new FormData;t.append("text",n.text2),l.a.post("".concat(e,"/api/desencrypt"),t,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data"}}).then((function(e){s({text1:e.data})}))}()},children:"Decrypt"})]})]})},x=c.p+"static/media/sw.56114b53.svg",b=c(20),h=c(19);c(47);var m=function(e){var t=e.closeFunc;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"modal",children:Object(p.jsxs)("div",{className:"modal-container",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h1",{children:"About this project"}),Object(p.jsx)(h.a,{className:"modal-close",onClick:function(){t(!1)}})]}),Object(p.jsx)("p",{children:"Encrypt your plane text, to keep it safe. Just write your text on the text area and click the encrypt button. For decrypt, write your code in the text area and click the decrypt button. This project was developed with reactJS and NodeJs."})]})})})},O=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsxs)("div",{className:"Autor",children:[Object(p.jsx)("img",{src:x,alt:"Logo"}),Object(p.jsx)("p",{children:"Developed by Andr\xe9s D\xedaz - 2021"})]}),Object(p.jsx)(b.a,{className:"Info",onClick:function(){n(!0)}}),c&&Object(p.jsx)(m,{closeFunc:n})]})};var v=function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"Header",children:[Object(p.jsx)(r.a,{className:"icon"}),Object(p.jsx)("h1",{className:"Titulo",children:"Encrypt with Node Js"})]}),Object(p.jsx)(u,{}),Object(p.jsx)(O,{})]})};s.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e66e4207.chunk.js.map