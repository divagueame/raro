(this.webpackJsonppalabras=this.webpackJsonppalabras||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),a=n(7),c=n.n(a),i=(n(15),n(3)),o=(n(16),n(1)),d=n(6),u=n.n(d),l=n(9),j=n(8),b=function(e){var t=e.word,n=e.triggerNext,r=e.helped,a=Object(s.useState)(""),c=Object(i.a)(a,2),d=c[0],b=c[1],g=Object(s.useState)(!1),m=Object(i.a)(g,2),x=m[0],f=m[1],O=t.sentence;function p(e,t){var n=[];return n[0]=e.substr(0,t),n[1]=e.substr(t),n}return Object(s.useEffect)((function(){return d===t.word&&(f(!0),setTimeout((function(){f(!1),b(""),n()}),1500)),function(){console.log("USE Effect cleanup")}}),[d]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},autoComplete:"off",children:[Object(o.jsxs)("div",{className:"feedbackBox",children:[x&&Object(o.jsx)(j.a,{style:{backgroundColor:"white",color:"#457fca",margin:"0rem",borderRadius:"100%",fontSize:"1.2rem"}}),!x&&Object(o.jsx)(l.a,{style:{backgroundColor:"white",color:"#ff5e00",margin:"0rem",borderRadius:"100%",fontSize:"1.2rem"}})]}),Object(o.jsx)("span",{children:p(O,t.wordIndex)[0]}),r&&Object(o.jsx)(u.a,{autoFocus:!0,className:"userAnswerInput",name:"form-field-name",value:t.word,onChange:function(){}}),!r&&Object(o.jsx)(u.a,{autoFocus:!0,className:"userAnswerInput",name:"form-field-name",value:d,onChange:function(e){b(e.target.value)}}),Object(o.jsx)("span",{className:"form-second-span",children:p(O,t.wordIndex)[1]})]})})},g=n(10),m=function(e){var t=e.setHelped,n=Object(s.useState)(1200),r=Object(i.a)(n,2),a=r[0],c=r[1];return Object(o.jsx)("div",{className:"help-btn",children:Object(o.jsx)(g.a,{onClick:function(){t(!0),setTimeout((function(){t(!1),c(1*a)}),a)}})})},x=n(4),f=function(e){e.word;var t=e.triggerNext;return Object(o.jsx)("div",{className:"skip-word-btn",children:Object(o.jsx)(x.a,{onClick:function(){t()}})})},O=function(e){var t=e.word,n=e.triggerNext,r=Object(s.useState)(!1),a=Object(i.a)(r,2),c=a[0],d=a[1];return Object(o.jsx)("div",{className:"guessDisplayContainer",children:Object(o.jsxs)("div",{className:"guessDisplay",children:[Object(o.jsxs)("div",{className:"buttons-wrapper",children:[Object(o.jsx)(f,{word:t,triggerNext:n}),Object(o.jsx)(m,{setHelped:d,word:t})]}),Object(o.jsx)(b,{word:t,triggerNext:n,helped:c}),Object(o.jsx)("img",{className:"guess-display-img",src:"/raro"+t.imgSrc,alt:"Guess..."})]})})};function p(e){var t=e.updateCurrentWord,n=e.setPlaying,r=(e.playing,Object(s.useState)(!1)),a=Object(i.a)(r,2),c=a[0],d=a[1],u="next-game-btn";return c&&(u+=" next-game-btn-hidden"),Object(o.jsx)("div",{className:"next-game-btn-wrapper",children:Object(o.jsxs)("button",{className:u,type:"button",onClick:function(e){d(!c),setTimeout((function(){t(),n(!0)}),1100)},children:[Object(o.jsx)(x.b,{}),Object(o.jsx)("span",{children:"New game"})]})})}var h=function(){var e=[{id:1,word:"playa",wordIndex:23,sentence:"Me encantar\xeda ir a una  bonita.",imgSrc:"/img/beach.svg"},{id:2,word:"puente",wordIndex:11,sentence:"Este es un  muy moderno.",imgSrc:"/img/bridge.svg"},{id:3,word:"paisaje",wordIndex:5,sentence:"\xa1Qu\xe9  paisaje tan bonito!",imgSrc:"/img/hills.svg"},{id:4,word:"castillo",wordIndex:11,sentence:"Este es un  medieval espectacular.",imgSrc:"/img/castle.svg"},{id:5,word:"ciudad",wordIndex:40,sentence:"!Qu\xe9 edificios tan grandes hay en esta  \xa1",imgSrc:"/img/cityscape.svg"},{id:6,word:"desierto",wordIndex:7,sentence:"En este hace much\xedsimo calor.",imgSrc:"/img/desert-1.svg"},{id:7,word:"desierto",wordIndex:29,sentence:"No hay muchas plantas en el  .",imgSrc:"/img/desert.svg"},{id:8,word:"paisaje",wordIndex:11,sentence:"Este es un  muy agradable.",imgSrc:"/img/fields-1.svg"},{id:9,word:"paisaje",wordIndex:5,sentence:"Este  es muy verde.",imgSrc:"/img/forest.svg"}],t=Object(s.useState)(e),n=Object(i.a)(t,2),r=n[0],a=n[1],c=Object(s.useState)(),d=Object(i.a)(c,2),u=d[0],l=d[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),g=b[0],m=b[1];function x(){if(r.length>=1){var e=Math.floor(Math.random()*r.length),t=r[e];l(t),a(r.filter((function(e){return e!==t})))}}return Object(o.jsxs)(o.Fragment,{children:[!g&&Object(o.jsx)(p,{updateCurrentWord:x,setPlaying:m,playing:g}),!g&&Object(o.jsx)("div",{className:"bottom-info",children:"How many can you get right? "}),g&&Object(o.jsx)(O,{word:u,triggerNext:function(){r.length>0?x():(m(!1),a(e),x(),console.log("GAME OVER"))}})]})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2e76becc.chunk.js.map