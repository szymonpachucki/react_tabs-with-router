(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c.n(a),n=c(6),i=(c(30),c(31),c(32),c(2)),b=c(3),j=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},r=c(15),l=c.n(r),d=function(e){var t=e.tab,c=Object(i.r)().tabId,a=t.id,s=t.title;return Object(b.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":c===a}),children:Object(b.jsx)(n.b,{to:"/tabs/".concat(a),children:s})})},o=function(e){var t=e.tabs,c=Object(i.r)().tabId,a=t.find((function(e){return e.id===c}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)(d,{tab:e})}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===a||void 0===a?void 0:a.content)||"Please select a tab"})]})},x=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},h=function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},O=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(n.c,{to:"/",className:h,children:"Home"}),Object(b.jsx)(n.c,{to:"/tabs",className:h,children:"Tabs"})]})})}),Object(b.jsx)(i.b,{})]})},m=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(i.e,{children:Object(b.jsxs)(i.c,{path:"/",element:Object(b.jsx)(O,{}),children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)(j,{})}),Object(b.jsxs)(i.c,{path:"tabs",children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)(o,{tabs:m})}),Object(b.jsx)(i.c,{path:":tabId",element:Object(b.jsx)(o,{tabs:m})})]}),Object(b.jsx)(i.c,{path:"*",element:Object(b.jsx)(x,{})}),Object(b.jsx)(i.c,{path:"/home",element:Object(b.jsx)(i.a,{to:"/"})})]})})})})};s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.35bd9072.chunk.js.map