"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[479],{5479:function(e,s,n){n.r(s),n.d(s,{default:function(){return _}});var r=n(5671),t=n(3144),o=n(136),a=n(3668),i=n(1358),c=n(2791);var l=n.p+"static/media/user.fb0c9112ce39b875960175c4113d334e.svg",u=n(7225),d=n(3504),p=n(885),g=n(8867),f=n(184),h=function(e){for(var s=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=s;r++)n.push(r);var t=(0,c.useState)(1),o=(0,p.Z)(t,2),a=o[0],i=o[1];(0,c.useEffect)((function(){i(Math.ceil(e.currentPage/10))}),[e.currentPage]);var l=Math.ceil(s/10),u=10*(a-1)+1,d=10*a;return(0,f.jsxs)("div",{className:"users-body__pages",children:[a>1&&(0,f.jsx)("button",{className:g.Z._btn,onClick:function(){i(a-1)},children:"Prev"}),n.filter((function(e){return e>=u&&e<=d})).map((function(s){return(0,f.jsx)("div",{className:"users-body__page",children:(0,f.jsx)("div",{onClick:function(n){e.onPageChanged(s)},className:e.currentPage===s?g.Z.selected:g.Z.num,children:s},s.id)})})),l>a&&(0,f.jsx)("button",{className:g.Z._btn,onClick:function(){i(a+1)},children:"Next"})]})},m=function(e){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"body__page",children:(0,f.jsxs)("div",{className:"body__users users-body",children:[(0,f.jsx)("div",{className:"users-body__cards",children:e.isFetching?(0,f.jsx)(u.Z,{}):e.usersData.map((function(s){return(0,f.jsx)("div",{className:"users-body__card card-users-body",children:(0,f.jsxs)("div",{className:"border",children:[(0,f.jsxs)("div",{className:"wrap",children:[(0,f.jsx)("div",{className:"product-wrap",children:(0,f.jsx)("img",{src:null!=s.photos.small?s.photos.small:l})}),(0,f.jsxs)("div",{className:"loop-action",children:[(0,f.jsx)(d.OL,{to:"/profile/"+s.id,className:"add-to-cart",children:"Go to user"}),s.followed?(0,f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===s.id})),onClick:function(){e.unfollow(s.id)},className:g.Z.follow,children:(0,f.jsx)(d.OL,{to:"",className:"loop-add-to-cart",children:"unFollow"})}):(0,f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===s.id})),onClick:function(){e.follow(s.id)},className:g.Z.follow,children:(0,f.jsx)(d.OL,{to:"",className:"loop-add-to-cart",children:"follow"})})]})]}),(0,f.jsx)("div",{className:"product-info",children:(0,f.jsx)("h3",{className:"product-title",children:s.name})})]})},s.id)}))}),(0,f.jsx)(h,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged})]})})})},j=n(7581),x=n(1548),v=n(7781),P=function(e){return e.stateUsersPage.usersData},w=function(e){return e.stateUsersPage.pageSize},C=function(e){return e.stateUsersPage.totalUsersCount},N=function(e){return e.stateUsersPage.currentPage},b=function(e){return e.stateUsersPage.isFetching},Z=function(e){return e.stateUsersPage.followingInProgress},y=function(e){(0,o.Z)(n,e);var s=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(e=s.call.apply(s,[this].concat(o))).onPageChanged=function(s){e.props.getUsers(s,e.props.pageSize)},e}return(0,t.Z)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,f.jsx)(f.Fragment,{children:this.props.isFetching?(0,f.jsx)(u.Z,{}):(0,f.jsx)(m,{usersData:this.props.usersData,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow})})}}]),n}(c.Component),U={getUsers:i.Rf,follow:i.ZN,unfollow:i.fv},_=(0,v.qC)(x.D,(0,j.$j)((function(e){return{usersData:P(e),pageSize:w(e),totalUsersCount:C(e),currentPage:N(e),isFetching:b(e),followingInProgress:Z(e)}}),U))(y)},1548:function(e,s,n){n.d(s,{D:function(){return g}});var r=n(8683),t=n(5671),o=n(3144),a=n(136),i=n(3668),c=n(2791),l=n(7581),u=n(6871),d=n(184),p=function(e){return{isAuth:e.authReducer.isAuth}},g=function(e){var s=function(s){(0,a.Z)(c,s);var n=(0,i.Z)(c);function c(){return(0,t.Z)(this,c),n.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,r.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),c}(c.Component);return(0,l.$j)(p)(s)}}}]);
//# sourceMappingURL=479.bf666f57.chunk.js.map