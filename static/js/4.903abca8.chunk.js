"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4],{2004:function(s,e,t){t.r(e),t.d(e,{default:function(){return k}});var n=t(8683),i=t(5671),r=t(3144),a=t(136),l=t(3668),o=t(2791),c=t(8128),d=t(184),u=function(s){return(0,d.jsx)("div",{className:"profile-body__post",children:s.message})},h=t(8867),p=t(5705),x=t(132),m=o.memo((function(s){var e=s.posts.map((function(s){return(0,d.jsx)(u,{message:s.message},s.id)})),t=x.Ry().shape({newPostText:x.Z_().max(30,"Error! Exceeded allowed number of characters!").typeError("string expected!").required("Obligatory field!")});return(0,d.jsx)("div",{className:"profile-body__posts",children:(0,d.jsxs)("div",{className:"profile-body__input",children:[(0,d.jsx)("div",{className:"profile-body__my",children:"My posts"}),(0,d.jsxs)("div",{className:"profile-body__myPosts",children:[(0,d.jsx)("div",{className:"profile-body__form",children:(0,d.jsx)("form",{children:(0,d.jsx)(p.J9,{initialValues:{newPostText:""},validateOnBlur:!0,onSubmit:function(e){!function(e){s.addPost(e.newPostText)}(e)},validationSchema:t,children:function(s){var e=s.values,t=s.errors,n=s.touched,i=s.handleBlur,r=s.isValid,a=s.handleSubmit,l=s.handleChange,o=s.dirty;return(0,d.jsxs)("div",{className:"profile-body__form",children:[(0,d.jsx)("div",{children:(0,d.jsx)("textarea",{placeholder:"Write smth here and tap to btn",className:h.Z._area,type:"text",name:"newPostText",onChange:l,onBlur:i,value:e.newPostText})}),n.newPostText&&t.newPostText&&(0,d.jsx)("p",{className:"error",children:t.newPostText}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:h.Z._btn,disabled:!r&&!o,onClick:a,type:"submit",children:"add post"})})]})}})})}),e]})]})})})),v=t(7581),f=(0,v.$j)((function(s){return{posts:s.stateProfilePage.postData,newPostText:s.stateProfilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,c.Wl)(e))}}}))(m),j=t(885),w=t(2733),g=function(s){var e=(0,o.useState)(!1),t=(0,j.Z)(e,2),n=t[0],i=t[1],r=(0,o.useState)(s.status),a=(0,j.Z)(r,2),l=a[0],c=a[1];(0,o.useEffect)((function(){c(s.status)}),[s.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsx)("div",{onClick:function(){i(!0)},className:h.Z.input__div,children:(0,d.jsx)("span",{children:s.status||"No status"})})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(l)},type:"text",value:l,className:h.Z.input})})]})},N=function(s){var e=(0,o.useState)(!1),t=(0,j.Z)(e,2),n=t[0],i=t[1];return s.profile?(0,d.jsx)("div",{className:"contact-area",children:(0,d.jsxs)("div",{className:"contact",children:[(0,d.jsx)("main",{children:(0,d.jsxs)("section",{children:[(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("img",{src:s.profile.photos.large?s.profile.photos.large:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/_mLIxaKY_400x400.jpg",alt:"Profile Image"}),(0,d.jsxs)("aside",{children:[(0,d.jsx)("h1",{children:s.profile.fullName?s.profile.fullName:"Riccardo Cavallo"}),(0,d.jsx)("p",{children:(0,d.jsx)(g,{status:s.status,updateStatus:s.updateStatus})})]}),(0,d.jsxs)("button",{onClick:function(){i(!n)},className:n?"button active":"button",children:[(0,d.jsx)("span",{children:"Contact Me"}),(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",children:[" ",(0,d.jsxs)("g",{className:"nc-icon-wrapper",fill:"#444444",children:[" ",(0,d.jsx)("path",{d:"M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"})," "]})," "]})]})]}),(0,d.jsx)("div",{className:n?"title active":"title",children:(0,d.jsx)("p",{children:"Contact Me"})})]})}),(0,d.jsxs)("nav",{className:n?"nav active":"nav",children:[(0,d.jsxs)("a",{href:"#",className:"gmail",children:[(0,d.jsx)("div",{className:"icon",children:(0,d.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z","fill-rule":"evenodd"})})}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h1",{children:"Email"}),(0,d.jsx)("span",{children:"Riccavallo@gmail.com"})]}),(0,d.jsxs)("svg",{className:"arrow",xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",children:[" ",(0,d.jsxs)("g",{className:"nc-icon-wrapper",fill:"#444444",children:[" ",(0,d.jsx)("path",{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"})," "]})," "]})]}),(0,d.jsxs)("a",{href:"#",className:"facebook",children:[(0,d.jsx)("div",{className:"icon",children:(0,d.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414",children:(0,d.jsx)("path",{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0","fill-rule":"nonzero"})})}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h1",{children:"Facebook"}),(0,d.jsx)("span",{children:"Riccardo Cavallo"})]}),(0,d.jsxs)("svg",{className:"arrow",xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",children:[" ",(0,d.jsxs)("g",{className:"nc-icon-wrapper",fill:"#444444",children:[" ",(0,d.jsx)("path",{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"})," "]})," "]})]}),(0,d.jsxs)("a",{href:"#",className:"twitter",children:[(0,d.jsx)("div",{className:"icon",children:(0,d.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414",children:(0,d.jsx)("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z","fill-rule":"nonzero"})})}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("h1",{children:"Twitter"}),(0,d.jsx)("span",{children:"@RichoxDesign"})]}),(0,d.jsxs)("svg",{className:"arrow",xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",children:[" ",(0,d.jsxs)("g",{className:"nc-icon-wrapper",fill:"#444444",children:[" ",(0,d.jsx)("path",{d:"M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"})," "]})," "]})]})]})]})}):(0,d.jsx)(w.Z,{})},y=function(s){return(0,d.jsxs)("div",{className:"body__profile profile-body",children:[(0,d.jsx)(N,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,d.jsx)(f,{})]})},b=t(6871),_=t(1548),P=function(s){(0,a.Z)(t,s);var e=(0,l.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){var s=this.props.params?this.props.params.userId:this.props.userId;this.props.setUser(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(y,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),t}(o.Component),Z={setUserProfile:c.$l,setUser:c.av,getStatus:c.lR,updateStatus:c.Nf},C=(0,_.D)(P),k=(0,v.$j)((function(s){return{profile:s.stateProfilePage.profile,status:s.stateProfilePage.status,userId:s.authReducer.userId,isAuth:s.authReducer.isAuth}}),Z)((function(s){var e=(0,b.UO)();return(0,d.jsx)(C,(0,n.Z)((0,n.Z)({},s),{},{params:e}))}))},1548:function(s,e,t){t.d(e,{D:function(){return p}});var n=t(8683),i=t(5671),r=t(3144),a=t(136),l=t(3668),o=t(2791),c=t(7581),d=t(6871),u=t(184),h=function(s){return{isAuth:s.authReducer.isAuth}},p=function(s){var e=function(e){(0,a.Z)(o,e);var t=(0,l.Z)(o);function o(){return(0,i.Z)(this,o),t.apply(this,arguments)}return(0,r.Z)(o,[{key:"render",value:function(){return this.props.isAuth?(0,u.jsx)(s,(0,n.Z)({},this.props)):(0,u.jsx)(d.Fg,{to:"/login"})}}]),o}(o.Component);return(0,c.$j)(h)(e)}}}]);
//# sourceMappingURL=4.903abca8.chunk.js.map