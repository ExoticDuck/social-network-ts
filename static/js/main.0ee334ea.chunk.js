(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{110:function(e,t,n){},129:function(e,t,n){e.exports={Loader:"Preloader_Loader__3O9yV"}},130:function(e,t,n){e.exports={mainContent:"Profile_mainContent__1v0_A"}},131:function(e,t,n){e.exports={LoginPage:"Login_LoginPage__1tX-g"}},14:function(e,t,n){e.exports={Avatar:"Users_Avatar__Uezqs",followBox:"Users_followBox__G_ywg",FollowButton:"Users_FollowButton__3tp_j",UserCard:"Users_UserCard__1P3-U",avatarBlock:"Users_avatarBlock__aj0Au",userInfo:"Users_userInfo__34aiX",Status:"Users_Status__3Bdku",location:"Users_location__1rnO4",infoBlock:"Users_infoBlock__1ZxRK",page:"Users_page__19XVr",SelectedPage:"Users_SelectedPage__oFelf",PagesContainer:"Users_PagesContainer__2RkrP"}},161:function(e,t,n){},25:function(e,t,n){e.exports={nav:"Navbar_nav__DF114",item:"Navbar_item__EPJmQ","active-link":"Navbar_active-link__3FqVw",friend:"Navbar_friend__1GKxm"}},289:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(62),i=n.n(r),o=(n(161),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))}),c=n(8),u=n(5),l=n(33),d=n(124),j=n.n(d).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc"}}),f=function(e,t){return j.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},p=function(e){return j.get("profile/"+e)},b=function(e){return j.get("profile/status/"+e)},h=function(e){return j.put("profile/status",{status:e})},g=function(){return j.get("https://social-network.samuraijs.com/api/1.0/auth/me")},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return j.post("auth/login",{email:e,password:t,rememberMe:n})},m=function(){return j.delete("auth/login")},x=function(e){return j.post("/follow/".concat(e),{},{})},v=function(e){return j.delete("/follow/".concat(e))},_="SET_USER_DATA",P={id:null,email:null,login:null,isAuth:!1},y=function(e,t,n,s){return{type:_,payload:{id:e,email:t,login:n,isAuth:s}}},C=function(){return function(e){g().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.email,r=n.login;e(y(s,a,r,!0))}}))}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},w=n(30),N="ADD-MESSAGE",k={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valery"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"What are you doing?"},{id:4,text:"Hello my friend;)"},{id:5,text:"Yo!"},{id:6,text:"Goodbye!"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var n=e.messagesData.length+1,s={id:n,text:t.payload.value};return Object(u.a)(Object(u.a)({},e),{},{messagesData:[].concat(Object(w.a)(e.messagesData),[s])});default:return e}},I="ADD-POST",A="SET-USER-PROFILE",F="SET-USER-STATUS",D={postData:[{id:1,message:"hi, how are you?",likesCount:12},{id:2,message:"it is my firt post",likesCount:15},{id:2,message:"aaaaaa",likesCount:1}],profile:null,status:""},E=function(e){return{type:F,payload:{status:e}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n=e.postData.length+1,s={id:n,message:t.payload.text,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{postData:[].concat(Object(w.a)(e.postData),[s])});case A:return Object(u.a)(Object(u.a)({},e),{},{profile:t.payload.profile});case F:return Object(u.a)(Object(u.a)({},e),{},{status:t.payload.status});default:return e}},T={friends:[{id:1,name:"Dimych",link:"https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},{id:2,name:"Andrey",link:"https://aftershock.news/sites/default/files/pictures/picture-42471-1586248390.jpg"},{id:3,name:"Sveta",link:"https://www.meme-arsenal.com/memes/cdfd31e349e0124972afec8440807b32.jpg"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return e},B="FOLLOW",z="UNFOLLOW",R="SET-USERS",G="SET-CURRENT-PAGE",H="SET-TOTAL-USERS-COUNT",X="TOGGLE-IS-FETCHING",V="TOGGLE-FOLLOWING-IN-PROGRESS",W={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Z=function(e){return{type:R,payload:{users:e}}},q=function(e){return{type:G,payload:{currentPage:e}}},K=function(e){return{type:H,payload:{totalCount:e}}},J=function(e){return{type:X,payload:{isFetching:e}}},Q=function(e,t){return{type:V,payload:{following:e,userId:t}}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case z:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case R:return Object(u.a)(Object(u.a)({},e),{},{users:Object(w.a)(t.payload.users)});case G:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.payload.currentPage});case H:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.payload.totalCount});case X:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.payload.isFetching});case V:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.payload.following?[].concat(Object(w.a)(e.followingInProgress),[t.payload.userId]):Object(w.a)(e.followingInProgress.filter((function(e){return e!==t.payload.userId})))});default:return e}},$=n(126),ee=n(123),te="SET-INITIALIZED",ne={initialized:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},ae=Object(c.c)({profilePage:M,messagesPage:U,sidebar:L,usersPage:Y,auth:S,form:ee.a,app:se}),re=Object(c.e)(ae,Object(c.a)($.a)),ie=n(10),oe=n(9),ce=n(21),ue=n(22),le=n(24),de=n(23),je=(n(110),n(0)),fe=function(){return Object(je.jsx)("div",{children:"News"})},pe=function(){return Object(je.jsx)("div",{children:"Music"})},be=function(){return Object(je.jsx)("div",{children:"Settings"})},he=n(35),ge=n(43),Oe=n.n(ge),me=n(121),xe=n(122),ve=n(42),_e=n(51),Pe=n.n(_e),ye=function(e){e.input;var t=e.meta,n=(e.child,Object(ve.a)(e,["input","meta","child"])),s=t.touched&&t.error;return Object(je.jsxs)("div",{className:Pe.a.formControl+" "+(s?Pe.a.error:""),children:[n.children,Object(je.jsx)("div",{children:s&&Object(je.jsx)("span",{children:t.error})})]})},Ce=function(e){var t=e.input,n=(e.meta,e.child,Object(ve.a)(e,["input","meta","child"]));return Object(je.jsx)(ye,Object(u.a)(Object(u.a)({},e),{},{children:Object(je.jsx)("textarea",Object(u.a)(Object(u.a)({},t),n))}))},Se=function(e){var t=e.input,n=(e.meta,e.child,Object(ve.a)(e,["input","meta","child"]));return Object(je.jsx)(ye,Object(u.a)(Object(u.a)({},e),{},{children:Object(je.jsx)("input",Object(u.a)(Object(u.a)({},t),n))}))},we=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Ne=function(e){if(!e)return"Field is required"},ke=function(e){var t="/dialgs/"+e.id;return Object(je.jsx)("div",{className:Oe.a.dialog,children:Object(je.jsx)(ie.b,{to:t,children:e.name})})},Ue=function(e){return Object(je.jsx)("div",{className:Oe.a.message,children:e.text})},Ie=we(100),Ae=Object(xe.a)({form:"dialogAddMessageForm"})((function(e){return Object(je.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(je.jsx)("div",{children:Object(je.jsx)(me.a,{name:"newMessageBody",component:Ce,placeholder:"Enter your message",validate:[Ne,Ie]})}),Object(je.jsx)("div",{children:Object(je.jsx)("button",{children:"Send"})})]})})),Fe=function(e){var t=e.dialogsPage.dialogsData.map((function(e){return Object(je.jsx)(ke,{name:e.name,id:e.id})})),n=e.dialogsPage.messagesData.map((function(e){return Object(je.jsx)(Ue,{text:e.text})}));return Object(je.jsxs)("div",{className:Oe.a.dialogs,children:[Object(je.jsx)("div",{className:Oe.a.dialogs_items,children:t}),Object(je.jsxs)("div",{className:Oe.a.messages,children:[n,Object(je.jsx)(Ae,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},De=function(e){return{isAuth:e.auth.isAuth}};function Ee(e){return Object(oe.b)(De)((function(t){var n=t.isAuth,s=Object(ve.a)(t,["isAuth"]);return n?Object(je.jsx)(e,Object(u.a)({},s)):Object(je.jsx)(he.a,{to:"/login"})}))}var Me=Object(c.d)(Object(oe.b)((function(e){return{dialogsPage:e.messagesPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:N,payload:{value:e}}}(t))}}})),Ee)(Fe),Te=n(25),Le=n.n(Te),Be=function(e){var t=e.state.friends.map((function(e){return Object(je.jsxs)("div",{className:Le.a.friend,children:[Object(je.jsx)("img",{src:e.link,alt:"img"}),e.name]})}));return Object(je.jsxs)("nav",{className:Le.a.nav,children:[Object(je.jsx)("div",{className:Le.a.item,children:Object(je.jsx)(ie.b,{to:"/profile/:userId",className:function(e){return e?"active-link":""},children:"Profile"})}),Object(je.jsx)("div",{className:Le.a.item,children:Object(je.jsx)(ie.b,{to:"/dialogs",className:function(e){return e?"active-link":""},children:"Messages"})}),Object(je.jsx)("div",{className:Le.a.item,children:Object(je.jsx)(ie.b,{to:"/news",className:function(e){return e?"active-link":""},children:"News"})}),Object(je.jsx)("div",{className:Le.a.item,children:Object(je.jsx)(ie.b,{to:"/music",className:function(e){return e?"active-link":""},children:"Music"})}),Object(je.jsx)("div",{className:Le.a.item,children:Object(je.jsx)(ie.b,{to:"/settings",className:function(e){return e?"active-link":""},children:"Settings"})}),Object(je.jsx)("div",{className:Le.a.item,children:Object(je.jsx)(ie.b,{to:"/users",className:function(e){return e?"active-link":""},children:"Users"})}),Object(je.jsxs)("div",{children:[Object(je.jsx)("div",{className:Le.a.friends,children:"Friends"}),t]})]})},ze=Object(oe.b)((function(e){return{state:e.sidebar}}),(function(e){return{}}))(Be),Re=n(14),Ge=n.n(Re),He=n.p+"static/media/user.02d5ce4f.png",Xe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return n.length=20,Object(je.jsxs)("div",{children:[Object(je.jsx)("div",{className:Ge.a.PagesContainer,children:n.map((function(t){return Object(je.jsxs)("span",{onClick:function(n){e.onPageChanged(t)},className:e.currentPage===t?Ge.a.SelectedPage:Ge.a.page,children:[t," "]})}))}),e.users.map((function(t){return Object(je.jsxs)("div",{className:Ge.a.UserCard,children:[Object(je.jsx)("span",{className:Ge.a.avatarBlock,children:Object(je.jsx)("div",{className:Ge.a.Avatar,children:Object(je.jsx)(ie.b,{to:"/profile/"+t.id,children:Object(je.jsx)("img",{src:null!==t.photos.small?t.photos.small:He,alt:"Avatar"})})})}),Object(je.jsxs)("div",{className:Ge.a.infoBlock,children:[Object(je.jsxs)("span",{className:Ge.a.userInfo,children:[Object(je.jsx)("div",{children:t.name}),Object(je.jsx)("div",{className:Ge.a.Status,children:t.status})]}),Object(je.jsxs)("span",{className:Ge.a.location,children:[Object(je.jsx)("div",{children:"Country"}),Object(je.jsx)("div",{children:"City"})]}),Object(je.jsx)("div",{className:Ge.a.followBox,children:t.followed?Object(je.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:Ge.a.FollowButton,onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(je.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:Ge.a.FollowButton,onClick:function(){e.follow(t.id)},children:"Follow"})})]})]},t.id)}))]})},Ve=n.p+"static/media/loader2.f396a593.gif",We=n(129),Ze=n.n(We),qe=function(e){return Object(je.jsx)("div",{children:Object(je.jsx)("img",{className:Ze.a.Loader,src:Ve,alt:"loader"})})},Ke=function(e){return e.usersPage.users},Je=function(e){return e.usersPage.pageSize},Qe=function(e){return e.usersPage.totalUsersCount},Ye=function(e){return e.usersPage.currentPage},$e=function(e){return e.usersPage.isFetching},et=function(e){return e.usersPage.followingInProgress},tt=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ce.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.SetCurrentPage(t)},e}return Object(ue.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(je.jsxs)(je.Fragment,{children:[this.props.isFetching?Object(je.jsx)(qe,{}):null,Object(je.jsx)(Xe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,ToggleFollowingInProgress:this.props.ToggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),nt=Object(oe.b)((function(e){return{users:Ke(e),pageSize:Je(e),totalUsersCount:Qe(e),currentPage:Ye(e),isFetching:$e(e),followingInProgress:et(e)}}),{follow:function(e){return function(t){t(Q(!0,e)),x(e).then((function(n){0===n.data.resultCode&&t({type:B,payload:{id:e}}),t(Q(!1,e))}))}},unfollow:function(e){return function(t){t(Q(!0,e)),v(e).then((function(n){0===n.data.resultCode&&t({type:z,payload:{id:e}}),t(Q(!1,e))}))}},SetUsers:Z,SetCurrentPage:q,SetTotalUsersCount:K,ToggleIsFetching:J,ToggleFollowingInProgress:Q,getUsers:function(e,t){return function(n){n(J(!0)),n(q(e)),f(e,t).then((function(e){setTimeout((function(){return n(J(!1))}),200),n(Z(e.items)),n(K(e.totalCount))}))}}})(tt),st=n(86),at=n.n(st),rt=n(87),it=n.n(rt),ot=function(e){return Object(je.jsxs)("div",{className:it.a.item,children:[Object(je.jsx)("img",{src:"https://cs13.pikabu.ru/avatars/2487/x2487329-146029786.png",alt:"avatar"}),e.message,Object(je.jsxs)("span",{className:it.a.likesCount,children:[e.likesCount," likes"]})]})},ct=we(10),ut=Object(xe.a)({form:"addPostForm"})((function(e){return Object(je.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(je.jsx)("div",{children:Object(je.jsx)(me.a,{name:"post",component:Ce,validate:[Ne,ct]})}),Object(je.jsx)("div",{children:Object(je.jsx)("button",{children:"Add post"})})]})})),lt=function(e){var t=e.posts.map((function(e){return Object(je.jsx)(ot,{message:e.message,likesCount:e.likesCount})}));return Object(je.jsxs)("div",{className:at.a.PostsContainer,children:[Object(je.jsx)("h3",{children:"My posts"}),Object(je.jsx)(ut,{onSubmit:function(t){e.addPost(t.post)}}),Object(je.jsx)("div",{className:at.a.posts,children:t})]})},dt=Object(oe.b)((function(e){return{posts:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(function(e){return{type:I,payload:{text:e}}}(t))}}}))(lt),jt=n(36),ft=n.n(jt),pt=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ce.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateUserStatus(e.state.status)},e.onChangeHandler=function(t){e.setState({status:t.currentTarget.value})},e}return Object(ue.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return Object(je.jsxs)("div",{children:[!this.state.editMode&&Object(je.jsx)("div",{children:Object(je.jsx)("span",{onDoubleClick:function(){e.activateEditMode()},children:this.props.status||"status"})}),this.state.editMode&&Object(je.jsx)("div",{children:Object(je.jsx)("input",{value:this.state.status,autoFocus:!0,onChange:this.onChangeHandler,onBlur:function(){e.deactivateEditMode()}})})]})}}]),n}(a.a.Component),bt=function(e){return e.profile?Object(je.jsxs)("div",{className:ft.a.InfoContainer,children:[Object(je.jsx)("div",{className:ft.a.ProfilePhoto}),Object(je.jsxs)("div",{className:ft.a.descriptionBlock,children:[Object(je.jsx)("div",{className:ft.a.Avatar,children:Object(je.jsx)("img",{src:e.profile.photos.small||He,alt:""})}),Object(je.jsxs)("div",{className:ft.a.description,children:[Object(je.jsx)("div",{className:ft.a.Name,children:e.profile.fullName}),Object(je.jsx)(pt,{status:e.status,updateUserStatus:e.updateUserStatus})]})]})]}):Object(je.jsx)("div",{children:Object(je.jsx)(qe,{})})},ht=n(130),gt=n.n(ht),Ot=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(ue.a)(n,[{key:"componentDidMount",value:function(){var e,t=null===(e=this.props.match)||void 0===e?void 0:e.params.userId;t&&":userId"!==t||(t=this.props.authorizedUserId.toString())||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(je.jsxs)("div",{className:gt.a.mainContent,children:[Object(je.jsx)(bt,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}),Object(je.jsx)(dt,{})]})}}]),n}(a.a.Component),mt=Object(c.d)(Object(oe.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){return p(e).then((function(e){var n;t((n=e.data,{type:A,payload:{profile:n}}))}))}},getUserStatus:function(e){return function(t){return b(e).then((function(e){t(E(e.data))}))}},updateUserStatus:function(e){return function(t){return h(e).then((function(n){0===n.data.resultCode&&t(E(e))}))}}}),he.e,Ee)(Ot),xt=n(88),vt=n.n(xt),_t=n.p+"static/media/logo.5f0a2246.png",Pt=function(e){return Object(je.jsxs)("header",{className:vt.a.header,children:[Object(je.jsx)("img",{src:_t,alt:"logo"}),Object(je.jsx)("div",{className:vt.a.LoginBlock,children:e.isAuth?Object(je.jsxs)("div",{children:[e.login," ",Object(je.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(je.jsx)(ie.b,{to:"/login",children:"Login"})})]})},yt=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(ue.a)(n,[{key:"render",value:function(){return Object(je.jsx)(Pt,Object(u.a)({},this.props))}}]),n}(a.a.Component),Ct=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){m().then((function(t){0===t.data.resultCode&&e(y(null,null,null,!1))}))}}})(yt),St=function(e){return Object(je.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(je.jsx)("div",{children:Object(je.jsx)(me.a,{placeholder:"Login",name:"login",component:Se,validate:[Ne]})}),Object(je.jsx)("div",{children:Object(je.jsx)(me.a,{placeholder:"Password",name:"password",component:Se,validate:[Ne],type:"password"})}),Object(je.jsxs)("div",{children:[Object(je.jsx)(me.a,{component:"input",name:"rememberMe",type:"checkbox"})," Remember me"]}),e.error&&Object(je.jsxs)("div",{className:Pe.a.formSummaryError,children:[" ",e.error," "]}),Object(je.jsx)("div",{children:Object(je.jsx)("button",{children:"Login"})})]})},wt=n(131),Nt=n.n(wt),kt=Object(xe.a)({form:"login"})(St),Ut=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){O(e,t,n).then((function(e){if(0===e.data.resultCode)s(C());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";s(Object(l.a)("login",{_error:t}))}}))}}})((function(e){if(e.isAuth)return Object(je.jsx)(he.a,{to:"/profile"});return e.isAuth?Object(je.jsx)(he.a,{to:"/profile"}):Object(je.jsxs)("div",{className:Nt.a.LoginPage,children:[Object(je.jsx)("h1",{children:"Login"}),Object(je.jsx)(kt,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),It=function(e){Object(le.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ce.a)(this,n),t.apply(this,arguments)}return Object(ue.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(je.jsxs)("div",{className:"App",children:[Object(je.jsx)(Ct,{}),Object(je.jsx)(ze,{}),Object(je.jsxs)("div",{className:"app-wrapper-content",children:[Object(je.jsx)(he.b,{path:"/dialogs",render:function(){return Object(je.jsx)(Me,{})}}),Object(je.jsx)(he.b,{path:"/profile/:userId?",render:function(){return Object(je.jsx)(mt,{})}}),Object(je.jsx)(he.b,{path:"/news",render:function(){return Object(je.jsx)(fe,{})}}),Object(je.jsx)(he.b,{path:"/music",render:function(){return Object(je.jsx)(pe,{})}}),Object(je.jsx)(he.b,{path:"/settings",render:function(){return Object(je.jsx)(be,{})}}),Object(je.jsx)(he.b,{path:"/users",render:function(){return Object(je.jsx)(nt,{})}}),Object(je.jsx)(he.b,{path:"/login",render:function(){return Object(je.jsx)(Ut,{})}})]})]}):Object(je.jsx)(qe,{})}}]),n}(a.a.Component),At=Object(c.d)(he.e,Object(oe.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:te})}))}}}))(It);re.getState(),i.a.render(Object(je.jsx)(a.a.StrictMode,{children:Object(je.jsx)(ie.a,{children:Object(je.jsx)(oe.a,{store:re,children:Object(je.jsx)(At,{})})})}),document.getElementById("root")),o()},36:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1v9W_",InfoContainer:"ProfileInfo_InfoContainer__3yQRD",ProfilePhoto:"ProfileInfo_ProfilePhoto__227Ns",Avatar:"ProfileInfo_Avatar__FpOi8",description:"ProfileInfo_description__1rKpA",Name:"ProfileInfo_Name__3Mhn3"}},43:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2R6vH",dialogs_items:"Dialogs_dialogs_items__Ckxz2",active:"Dialogs_active__oDa8w",dialog:"Dialogs_dialog__25TZP",messages:"Dialogs_messages__2x5Gv",message:"Dialogs_message__LRm7p"}},51:function(e,t,n){e.exports={formControl:"FormControl_formControl__1ZzNG",error:"FormControl_error__3dUKT",formSummaryError:"FormControl_formSummaryError__ucq0Z"}},86:function(e,t,n){e.exports={posts:"MyPosts_posts__2q_8H",PostsContainer:"MyPosts_PostsContainer__1b_Xt"}},87:function(e,t,n){e.exports={item:"Post_item__3ZUrT",likesCount:"Post_likesCount__3XH3W"}},88:function(e,t,n){e.exports={header:"Header_header__3X5wX",LoginBlock:"Header_LoginBlock__1lnVl"}}},[[289,1,2]]]);
//# sourceMappingURL=main.0ee334ea.chunk.js.map