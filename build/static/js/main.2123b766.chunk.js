(this["webpackJsonpdirectorio-de-servicios-externos"]=this["webpackJsonpdirectorio-de-servicios-externos"]||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(29),r=c.n(o),i=(c(36),c(14)),a=c(2),s=c(0),l=function(){return Object(s.jsx)("div",{className:"alert alert-info",children:Object(s.jsx)("p",{children:"Cargando..."})})},j=c(9),b=c(7),d=c(17),h=c.n(d),m=c(30),u=c(10),O=c.n(u),p=(O.a.create({baseURL:"https://jsonplaceholder.typicode.com"}),O.a.create({baseURL:"http://prueba.nualtec.com/api/v1/"})),x=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/directorioServicio");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)([]),i=Object(j.a)(r,2),a=i[0],s=i[1];return Object(n.useEffect)((function(){x().then((function(e){o(!1),s(e)}))}),[]),{isLoading:c,directories:a}}(),t=e.isLoading,c=e.directories;return console.log(c),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Lista de lugares"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{style:{width:100},children:"ID"}),Object(s.jsx)("th",{style:{width:150},children:"Nombre"}),Object(s.jsx)("th",{style:{width:150},children:"PaginaWeb"}),Object(s.jsx)("th",{style:{width:150},children:"CorreoElectronico"}),Object(s.jsx)("th",{style:{width:150},children:"Opciones"})]})}),Object(s.jsx)("tbody",{children:c.map((function(e){var t=e.id,c=e.NombreServicio,n=e.PaginaWeb,o=e.CorreoElectronico;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:o}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Eliminar"})})]},t)}))})]}),t&&Object(s.jsx)(l,{})]})},g=c(13),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(j.a)(t,2),o=c[0],r=c[1],i=function(){r(e)},a=function(e){var t=e.target;"checkbox"!==t.type?r(Object(b.a)(Object(b.a)({},o),{},Object(g.a)({},t.name,t.value))):r(Object(b.a)(Object(b.a)({},o),{},Object(g.a)({},t.name,t.checked)))};return[o,a,i]},N=function(){var e=f({NombreServicio:"",TipoServicio:"",ServicioDomicilio:!1,HorarioAtencion:"",PaginaWeb:"",CorreoElectronico:""}),t=Object(j.a)(e,3),c=t[0],n=t[1],o=t[2],r=c.NombreServicio,i=c.TipoServicio,a=c.ServicioDomicilio,l=c.HorarioAtencion,d=c.PaginaWeb,h=c.CorreoElectronico;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"Directorio"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};return p.post("/directorioServicio",Object(b.a)({},e),t)}(c).then((function(e){var t=e.data;console.log(t),o()}),(function(e){var t=e.response,c=t.status;t.statusText;400===c&&console.log("Error")}))},children:[Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("input",{type:"text",placeholder:"NombreServicio",className:"form-control",name:"NombreServicio",value:r,onChange:n})}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsxs)("select",{className:"form-select",name:"TipoServicio",value:i,onChange:n,children:[Object(s.jsx)("option",{children:"Seleccione una opci\xf3n"}),Object(s.jsx)("option",{value:"One",children:"One"}),Object(s.jsx)("option",{value:"2",children:"Two"}),Object(s.jsx)("option",{value:"3",children:"Three"})]})}),Object(s.jsxs)("div",{className:"form-check mb-3",children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",name:"ServicioDomicilio",checked:a,onChange:n}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckServicioDomicilio",children:"ServicioDomicilio"})]}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("input",{type:"text",placeholder:"HorarioAtencion",className:"form-control",name:"HorarioAtencion",value:l,onChange:n})}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("input",{type:"text",placeholder:"PaginaWeb",className:"form-control",name:"PaginaWeb",value:d,onChange:n})}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("input",{type:"email",placeholder:"CorreoElectronico",className:"form-control",name:"CorreoElectronico",value:h,onChange:n})}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Enviar"})})]})]})})},y=c.p+"static/media/logo.6ce24c58.svg",S=function(){var e=Object(a.g)(),t=f({email:"joelpahe18@gmail.com",password:"password"}),c=Object(j.a)(t,2),n=c[0],o=c[1],r=n.email,i=n.password;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)("img",{src:y,className:"App-logo",alt:"logo"}),Object(s.jsxs)("form",{onSubmit:function(t){var c;t.preventDefault(),(c=n,p.post("/auth/login",Object(b.a)({},c))).then((function(t){var c=t.data.access_token;localStorage.setItem("token",c),e.push("/directorio")}),(function(e){var t=e.response,c=t.status;t.statusText;400===c&&console.log("Error")}))},children:[Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("input",{type:"text",placeholder:"Email",autoComplete:"off",className:"form-control",name:"email",value:r,onChange:o})}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",className:"form-control",name:"password",value:i,onChange:o})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Ingresar"})]})]})})},w=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Login"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("button",{type:"submit",children:"Ingresar"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"google-btn",children:[Object(s.jsx)("div",{className:"google-icon-wrapper",children:Object(s.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(s.jsx)("p",{className:"btn-text",children:Object(s.jsx)("b",{children:"Sign in with google"})})]})]})]})},C=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(a.d,{children:[Object(s.jsx)(a.b,{exact:!0,path:"/auth/login",component:S}),Object(s.jsx)(a.b,{exact:!0,path:"/auth/register",component:w}),Object(s.jsx)(a.a,{to:"/auth/login"})]})})},k=function(){return Object(s.jsx)(i.a,{children:Object(s.jsx)("div",{children:Object(s.jsxs)(a.d,{children:[Object(s.jsx)(a.b,{exact:!0,path:"/",component:S}),Object(s.jsx)(a.b,{exact:!0,path:"/directorio",component:v}),Object(s.jsx)(a.b,{exact:!0,path:"/register",component:N}),Object(s.jsx)(a.b,{path:"/auth",component:C}),Object(s.jsx)(a.a,{to:"/auth/login"})]})})})},E=function(){return Object(s.jsx)(k,{})};r.a.render(Object(s.jsx)(E,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2123b766.chunk.js.map