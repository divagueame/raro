(this.webpackJsonppalabras=this.webpackJsonppalabras||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),o=n.n(i),s=(n(9),n(2)),a=(n(10),n(0)),u=function(){return Object(a.jsx)(a.Fragment,{})},d=function(e){var t=e.currentWord,n=e.triggerNext,r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)(!1),l=Object(s.a)(d,2),j=l[0],b=l[1];return Object(c.useEffect)((function(){return o===t&&(console.log("USE EFFECT IN"),n(),b(!0),setTimeout((function(){b(!1),u("")}),1500)),function(){console.log("USE Effect cleanup")}}),[o]),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("input",{type:"text",autoFocus:!0,value:o,onChange:function(e){u(e.target.value)}}),Object(a.jsxs)("div",{children:["user input: ",o]}),Object(a.jsxs)("div",{children:["current: ",t]}),Object(a.jsx)("div",{children:j&&"SOLVED!"})]})},l=function(e){var t=e.wordSrc;return Object(a.jsx)("img",{className:"guess-display-img",src:t,alt:""})};function j(){return Object(a.jsx)("div",{children:'"GET help!"'})}var b=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([{id:1,word:"globo",wordIndex:3,sentence:"El globo es precioso.",imgSrc:"./img/037-hot air balloon.png",seen:!1},{id:2,word:"bicicleta",wordIndex:3,sentence:"Es una bicicleta muy bonita.",imgSrc:"./img/025-bicycle.png",seen:!1},{id:3,word:"limusina",wordIndex:3,sentence:"Una limusina de alto nivel.",imgSrc:"./img/042-limousine.png",seen:!1},{id:4,word:"camion",wordIndex:3,sentence:"Este es un camion muy pesado.",imgSrc:"./img/048-truck.png",seen:!1},{id:5,word:"caravana",wordIndex:3,sentence:"Una caravana muy amplia.",imgSrc:"./img/050-caravan.png",seen:!1},{id:6,word:"coche",wordIndex:3,sentence:"Un coche muy util.",imgSrc:"./img/002-car.png",seen:!1}]),o=Object(s.a)(i,2),b=o[0],g=o[1],m=Object(c.useState)(!1),O=Object(s.a)(m,2),f=O[0],x=O[1];function p(){var e=b.filter((function(e){return e!==n}));if(console.log("Filtered",e),e.length>0){g(e);var t=Math.floor(Math.random()*b.length),c=b[t];r(c)}else x(!1),console.log("GAME OVER")}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),!f&&Object(a.jsx)("button",{onClick:function(){x(!0),p()},children:"Start!"}),f&&Object(a.jsxs)("div",{children:["Current target word is: ",n.word,". Total words left: ",b.length]}),f&&Object(a.jsx)(j,{wordSrc:n.imgSrc}),f&&Object(a.jsx)(l,{wordSrc:n.imgSrc}),f&&Object(a.jsx)(d,{currentWord:n.word,triggerNext:p})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.cce83b0c.chunk.js.map