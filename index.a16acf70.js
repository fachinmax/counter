"use strict";function t(t){return t.map(t=>{let n=document.createElement(t.type);return t.class&&(n.className=t.class),t.id&&(n.id=t.id),t.content&&(n.innerHTML=t.content),n})}let n=[{type:"button",class:"button button--up",id:"upButton",content:"<span>+</span>"},{type:"button",class:"button button--reset",id:"resetButton",content:'<i class="fa-solid fa-arrow-rotate-right"></i>'},{type:"button",class:"button button--down",id:"downButton",content:"<span>-</span>"},{type:"h1",class:"count",id:"count",content:window.localStorage.getItem("count")||(window.localStorage.setItem("count",0),"0")}],o=[{type:"div",class:"container container--count"},{type:"div",class:"container container--buttons",id:"buttonContainer"}];n=t(n),(o=t(o))[0].append(n.pop()),n.forEach(t=>{o[1].append(t)}),o.forEach(t=>{document.body.append(t)});
//# sourceMappingURL=index.a16acf70.js.map
