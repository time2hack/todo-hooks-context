(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(5),c=a.n(o),s=(a(14),a(7)),i=a(6),l=function(e){var t=e.app;return n.a.createElement("header",{className:"mb-3"},n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:t.url},n.a.createElement("img",{src:t.logo,height:"30",alt:t.title})))))},m=a(8),d=n.a.createContext({});d.displayName="Config";var u=d,p=["task"],E=function(e){var t=e.task,a=Object(m.a)(e,p);return n.a.createElement("div",Object.assign({className:"card mb-3 bt-3"},a),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t.text),n.a.createElement("p",{className:"card-text"},t.description),n.a.createElement("div",{className:"footer"},n.a.createElement("small",null,new Date(t.createdOn).toUTCString()))))},v=function(e){var t=e.tasks,a=void 0===t?[]:t,o=Object(r.useContext)(u);return n.a.createElement(n.a.Fragment,null,a.sort(o.sorter).map((function(e,t){return n.a.createElement(E,{task:e,key:t})})))},b=function(e){var t=e.addTodo;return n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);console.log("---Form---",a),t({text:a.get("text"),description:a.get("description"),createdOn:+new Date}),e.target.reset()}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"text",className:"text-muted"},"Task:"),n.a.createElement("input",{name:"text",type:"text",id:"text",className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"description",className:"text-muted"},"Description:"),n.a.createElement("textarea",{name:"description",id:"description",className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add")))},g=a(3),h={sortBy:"createdOn",sortOrder:"DESC"},f={ASC:function(e,t){return e[h.sortBy]-t[h.sortBy]},DESC:function(e,t){return t[h.sortBy]-e[h.sortBy]}}[h.sortOrder],N=Object(g.a)(Object(g.a)({},h),{},{app:{title:"Time to Hack",url:"https://time2hack.com",logo:"https://res.cloudinary.com/time2hack/image/upload/q_auto:good/t2h-text-banner.png",post:{title:"",url:""}},sorter:f}),x=[{text:"First Todo",description:"First Todo's Description",createdOn:+new Date+1},{text:"Second Todo",description:"Second Todo's Description",createdOn:+new Date+2},{text:"Third Todo",description:"Third Todo's Description",createdOn:+new Date+3}],k=function(){var e=Object(r.useState)(x),t=Object(i.a)(e,2),a=t[0],o=t[1];return n.a.createElement(u.Provider,{value:N},n.a.createElement(l,{app:N.app}),n.a.createElement("div",{className:"container"},n.a.createElement(b,{addTodo:function(e){return o([].concat(Object(s.a)(a),[e]))}}),n.a.createElement("hr",null),n.a.createElement(v,{tasks:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cad3b5c7.chunk.js.map