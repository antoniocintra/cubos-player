(this["webpackJsonpcubos-player"]=this["webpackJsonpcubos-player"]||[]).push([[0],[,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(3),r=s.n(a),c=(s(8),s(9),s(0));function o(e){let{title:t,cover:s,description:n}=e;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:s,alt:"card cover"}),Object(c.jsxs)("h3",{children:[" ",t]}),Object(c.jsx)("p",{children:n})]})}s(11);var l=s.p+"static/media/next.f2e40fc9.svg",d=s.p+"static/media/pause.2e5d08b2.svg",p=s.p+"static/media/play.6233e861.svg",u=s.p+"static/media/previous.184d8033.svg",m=s.p+"static/media/stop.c30597e9.svg";function g(e){let{audioRef:t,currentMusic:s,iconBtn:i,setIconBtn:a,handleChangeMusic:r}=e,o=null;const g=Object(n.useRef)(null);return Object(c.jsxs)("div",{className:"container-controls",children:[Object(c.jsxs)("div",{className:"preview-names",children:[Object(c.jsx)("h2",{children:s.title}),Object(c.jsx)("strong",{children:s.artist})]}),Object(c.jsxs)("div",{className:"container-player",children:[Object(c.jsxs)("div",{className:"container-buttons",children:[Object(c.jsx)("img",{src:m,alt:"",className:"btn-control",onClick:()=>(a("play"),t.current.pause(),void(t.current.currentTime=0))}),Object(c.jsx)("img",{src:u,alt:"",className:"btn-control",onClick:()=>r("previous")}),Object(c.jsx)("img",{src:"pause"===i?d:p,alt:"",className:"btn-play-pause",onClick:()=>function(){if(o=setInterval((()=>{t.current.paused&&clearInterval(o);const e=t.current.duration/60,s=t.current.currentTime/60*100/e;g.current.style.width="".concat(s,"%")}),1e3),t.current.paused)return t.current.play(),void a("pause");t.current.pause(),a("play")}()}),Object(c.jsx)("img",{src:l,alt:"",className:"btn-control",onClick:()=>r("next")})]}),Object(c.jsxs)("div",{className:"container-progress",children:[Object(c.jsx)("strong",{className:"start",children:"0"}),Object(c.jsxs)("div",{className:"container-line",children:[Object(c.jsx)("div",{className:"progress-line"}),Object(c.jsx)("div",{className:"progress-line-color",ref:g})]}),Object(c.jsx)("strong",{className:"end",children:"3:34"})]})]}),Object(c.jsx)("div",{className:"empty"})]})}s(12);var j=s.p+"static/media/profile.32035c7f.jpeg",h=s.p+"static/media/logo.737fb174.svg";function b(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:h,alt:"logo cubos play"})}),Object(c.jsxs)("div",{className:"profile",children:[Object(c.jsx)("img",{className:"user",src:j,alt:"user data"}),Object(c.jsx)("span",{children:"Bem vindo, Ant\xf4nio. "})]})]})}const f=[{id:1,title:"Viol\xe3o Ac\xfastico",artist:"Mayer Bronkx",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img1.jpg"},{id:2,title:"Just Things",artist:"John Cris",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/Bay%20Street%20Billionaires%20-%20Squadda%20B.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg"},{id:3,title:"Maybe Other",artist:"Eva Garden",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/North%20Oakland%20Extasy%20-%20Squadda%20B.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img4.jpg"},{id:4,title:"It's simple",artist:"Emily C. M.",description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",url:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/One%20Time%20-%20Jeremy%20Black.mp3",cover:"https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img5.jpg"}];s(13);var v=function(){const e=Object(n.useRef)(null),[t,s]=Object(n.useState)("pause"),[i]=Object(n.useState)([...f]),[a,r]=Object(n.useState)({id:0,title:"",artist:""});function l(t){s("play"),e.current.src=t.url,r(t)}return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)("h2",{children:"The best play list"}),Object(c.jsx)("div",{className:"container-cards",children:i.map((e=>Object(c.jsx)("div",{onClick:()=>l(e),children:Object(c.jsx)(o,{title:e.title,cover:e.cover,description:e.description})},e.id)))})]}),Object(c.jsx)(g,{audioRef:e,currentMusic:a,iconBtn:t,setIconBtn:s,handleChangeMusic:function(e){if(!a.id)return;const t="next"===e?a.id+1:a.id-1,s=i.find((e=>e.id===t));s&&l(s)}}),Object(c.jsx)("audio",{ref:e})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.7aa9aba3.chunk.js.map