"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[684],{8684:function(s,r,a){a.r(r),a.d(r,{default:function(){return h}});var e=a(7581),i=a(6871),n=a(4439),l=a(5705),o=a(8867),c={wrapper:"formik_wrapper__dCNYc",login:"formik_login__iwFB1",password:"formik_password__ZSfdV"},t=a(132),d=(a(2791),a(184)),p=function(s){var r=t.Ry().shape({login:t.Z_().typeError("string expected!").required("Obligatory field!"),password:t.Z_().typeError("string expected!").required("Obligatory field!"),confirmPassword:t.Z_().oneOf([t.iH("password")],"Password mismatch!").required("Obligatory field!")});return(0,d.jsx)(l.J9,{initialValues:{login:"",password:"",confirmPassword:"",captcha:""},validateOnBlur:!1,validateOnChange:!1,onSubmit:function(r,a){var e=a.setSubmitting,i=a.setStatus;s.getValues(r,i),e(!1)},validationSchema:r,children:function(r){var a=r.values,e=r.errors,i=r.touched,n=r.handleChange,t=r.handleBlur,p=r.isValid,h=r.handleSubmit,u=r.dirty,m=r.status;return(0,d.jsx)(l.l0,{children:(0,d.jsxs)("div",{className:c.wrapper,children:[(0,d.jsxs)("div",{className:c.login,children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("label",{htmlFor:"login",children:"Login"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:o.Z.input,type:"text",name:"login",onChange:n,onBlur:t,value:a.login})]}),i.login&&e.login&&(0,d.jsx)("p",{className:"error",children:e.login})]}),(0,d.jsxs)("div",{className:c.password,children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("label",{htmlFor:"password",children:"Password"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:o.Z.input,type:"password",name:"password",onChange:n,onBlur:t,value:a.password})]}),i.password&&e.password&&(0,d.jsx)("p",{className:"error",children:e.password})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm password"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:o.Z.input,type:"password",name:"confirmPassword",onChange:n,onBlur:t,value:a.confirmPassword})]}),i.confirmPassword&&e.confirmPassword&&(0,d.jsx)("p",{className:"error",children:e.confirmPassword})]})]}),s.captchaUrl&&(0,d.jsx)("img",{src:s.captchaUrl}),s.captchaUrl&&(0,d.jsxs)("p",{children:[(0,d.jsx)("label",{htmlFor:"captcha",children:"Anti-bot symbol"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:o.Z.input,type:"captcha",name:"captcha",onChange:n,onBlur:t,value:a.captcha})]}),(0,d.jsx)("div",{className:o.Z.error,children:m}),(0,d.jsx)("div",{className:c.button,children:(0,d.jsx)("button",{className:o.Z._btn,disabled:!p&&!u,onClick:h,type:"submit",children:"Login"})})]})})}})},h=(0,e.$j)((function(s){return{isAuth:s.authReducer.isAuth,captchaUrl:s.authReducer.captchaUrl}}),{login:n.x4})((function(s){return s.isAuth?(0,d.jsx)(i.Fg,{to:"/profile"}):(0,d.jsx)("div",{className:"login",children:(0,d.jsx)("div",{className:"login__body",children:(0,d.jsx)("div",{className:"login__form",children:(0,d.jsx)(p,{getValues:function(r,a){s.login(r.login,r.password,a,r.captcha)},captchaUrl:s.captchaUrl})})})})}))}}]);
//# sourceMappingURL=684.09f68ae7.chunk.js.map