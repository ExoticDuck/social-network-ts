(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{116:function(e,t,n){},135:function(e,t,n){e.exports={Loader:"Preloader_Loader__3O9yV"}},136:function(e,t,n){e.exports={mainContent:"Profile_mainContent__1v0_A"}},137:function(e,t,n){e.exports={LoginPage:"Login_LoginPage__1tX-g"}},16:function(e,t,n){e.exports={UsersPage:"Users_UsersPage__3vOf4",Avatar:"Users_Avatar__Uezqs",followBox:"Users_followBox__G_ywg",FollowButton:"Users_FollowButton__3tp_j",UserCard:"Users_UserCard__1P3-U",avatarBlock:"Users_avatarBlock__aj0Au",userInfo:"Users_userInfo__34aiX",Status:"Users_Status__3Bdku",location:"Users_location__1rnO4",infoBlock:"Users_infoBlock__1ZxRK"}},168:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__DF114",item:"Navbar_item__EPJmQ","active-link":"Navbar_active-link__3FqVw",friend:"Navbar_friend__1GKxm"}},297:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(66),o=n.n(s),i=(n(168),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))}),c=n(8),u=n(10),l=n.n(u),d=n(15),j=n(4),f=n(36),p=n(130),b=n.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"a51c385e-38b4-45b2-933a-739b6104467f"}}),g=function(e,t){return b.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(e){return b.get("profile/"+e)},O=function(e){return b.get("profile/status/"+e)},m=function(e){return b.put("profile/status",{status:e})},x=function(){return b.get("https://social-network.samuraijs.com/api/1.0/auth/me")},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.post("auth/login",{email:e,password:t,rememberMe:n})},_=function(){return b.delete("auth/login")},w={follow:function(e){return b.post("/follow/".concat(e),{},{})},unfollow:function(e){return b.delete("/follow/".concat(e))}},P="social-network/auth/SET_USER_DATA",y={id:null,email:null,login:null,isAuth:!1},k=function(e,t,n,r){return{type:P,payload:{id:e,email:t,login:n,isAuth:r}}},C=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,a,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,o=r.login,t(k(a,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},N=n(32),U="ADD-MESSAGE",I={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valery"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"What are you doing?"},{id:4,text:"Hello my friend;)"},{id:5,text:"Yo!"},{id:6,text:"Goodbye!"}]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:var n=e.messagesData.length+1,r={id:n,text:t.payload.value};return Object(j.a)(Object(j.a)({},e),{},{messagesData:[].concat(Object(N.a)(e.messagesData),[r])});default:return e}},F="social-network/profile/ADD-POST",T="social-network/profile/SET-USER-PROFILE",D="social-network/profile/SET-USER-STATUS",E="social-network/profile/DELETE-POST",L={postData:[{id:1,message:"hi, how are you?",likesCount:12},{id:2,message:"it is my firt post",likesCount:15},{id:3,message:"aaaaaa",likesCount:1}],profile:null,status:""},B=function(e){return{type:D,payload:{status:e}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n=e.postData.length+1,r={id:n,message:t.payload.text,likesCount:0};return Object(j.a)(Object(j.a)({},e),{},{postData:[].concat(Object(N.a)(e.postData),[r])});case T:return Object(j.a)(Object(j.a)({},e),{},{profile:t.payload.profile});case D:return Object(j.a)(Object(j.a)({},e),{},{status:t.payload.status});case E:return Object(j.a)(Object(j.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.payload.id}))});default:return e}},z={friends:[{id:1,name:"Dimych",link:"https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},{id:2,name:"Andrey",link:"https://aftershock.news/sites/default/files/pictures/picture-42471-1586248390.jpg"},{id:3,name:"Sveta",link:"https://www.meme-arsenal.com/memes/cdfd31e349e0124972afec8440807b32.jpg"}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return e},G=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},H="social-network/users/FOLLOW",q="social-network/users/UNFOLLOW",W="social-network/users/SET-USERS",X="social-network/users/SET-CURRENT-PAGE",Z="social-network/users/SET-TOTAL-USERS-COUNT",K="social-network/users/TOGGLE-IS-FETCHING",V="social-network/users/TOGGLE-FOLLOWING-IN-PROGRESS",J={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Q=function(e){return{type:H,payload:{id:e}}},Y=function(e){return{type:q,payload:{id:e}}},$=function(e){return{type:W,payload:{users:e}}},ee=function(e){return{type:X,payload:{currentPage:e}}},te=function(e){return{type:Z,payload:{totalCount:e}}},ne=function(e){return{type:K,payload:{isFetching:e}}},re=function(e,t){return{type:V,payload:{following:e,userId:t}}},ae=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(j.a)(Object(j.a)({},e),{},{users:G(e.users,t.payload.id,"id",{followed:!0})});case q:return Object(j.a)(Object(j.a)({},e),{},{users:G(e.users,t.payload.id,"id",{followed:!1})});case W:return Object(j.a)(Object(j.a)({},e),{},{users:Object(N.a)(t.payload.users)});case X:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.payload.currentPage});case Z:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.payload.totalCount});case K:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.payload.isFetching});case V:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.payload.following?[].concat(Object(N.a)(e.followingInProgress),[t.payload.userId]):Object(N.a)(e.followingInProgress.filter((function(e){return e!==t.payload.userId})))});default:return e}},oe=n(132),ie=n(129),ce="SET-INITIALIZED",ue={initialized:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},de=Object(c.c)({profilePage:M,messagesPage:A,sidebar:R,usersPage:se,auth:S,form:ie.a,app:le}),je=Object(c.e)(de,Object(c.a)(oe.a)),fe=n(27),pe=n(28),be=n(30),ge=n(29),he=(n(116),n(0)),Oe=function(){return Object(he.jsx)("div",{children:"News"})},me=function(){return Object(he.jsx)("div",{children:"Music"})},xe=function(){return Object(he.jsx)("div",{children:"Settings"})},ve=n(38),_e=n(11),we=n(9),Pe=n(45),ye=n.n(Pe),ke=n(127),Ce=n(128),Se=n(33),Ne=n(55),Ue=n.n(Ne),Ie=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=(Object(Se.a)(e,["input","meta","children"]),n&&r);return Object(he.jsxs)("div",{className:Ue.a.formControl+" "+(s?Ue.a.error:""),children:[a,Object(he.jsx)("div",{children:s&&Object(he.jsx)("span",{children:r})})]})},Ae=function(e){var t=e.input,n=(e.meta,e.child,Object(Se.a)(e,["input","meta","child"]));return Object(he.jsx)(Ie,Object(j.a)(Object(j.a)({},e),{},{children:Object(he.jsx)("textarea",Object(j.a)(Object(j.a)({},t),n))}))},Fe=function(e){var t=e.input,n=(e.meta,e.child,Object(Se.a)(e,["input","meta","child"]));return Object(he.jsx)(Ie,Object(j.a)(Object(j.a)({},e),{},{children:Object(he.jsx)("input",Object(j.a)(Object(j.a)({},t),n))}))},Te=function(e,t,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(he.jsxs)("div",{children:[Object(he.jsx)(ke.a,Object(j.a)({placeholder:e,name:t,component:r,validate:n},a))," ",s]})},De=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Ee=function(e){if(!e)return"Field is required"},Le=function(e){var t="/dialgs/"+e.id;return Object(he.jsx)("div",{className:ye.a.dialog,children:Object(he.jsx)(_e.b,{to:t,children:e.name})})},Be=function(e){return Object(he.jsx)("div",{className:ye.a.message,children:e.text})},Me=De(100),ze=Object(Ce.a)({form:"dialogAddMessageForm"})((function(e){return Object(he.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(he.jsx)("div",{children:Object(he.jsx)(ke.a,{name:"newMessageBody",component:Ae,placeholder:"Enter your message",validate:[Ee,Me]})}),Object(he.jsx)("div",{children:Object(he.jsx)("button",{children:"Send"})})]})})),Re=function(e){var t=e.dialogsPage.dialogsData.map((function(e){return Object(he.jsx)(Le,{name:e.name,id:e.id})})),n=e.dialogsPage.messagesData.map((function(e){return Object(he.jsx)(Be,{text:e.text})}));return Object(he.jsxs)("div",{className:ye.a.dialogs,children:[Object(he.jsx)("div",{className:ye.a.dialogs_items,children:t}),Object(he.jsxs)("div",{className:ye.a.messages,children:[n,Object(he.jsx)(ze,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},Ge=function(e){return{isAuth:e.auth.isAuth}};function He(e){return Object(we.b)(Ge)((function(t){var n=t.isAuth,r=Object(Se.a)(t,["isAuth"]);return n?Object(he.jsx)(e,Object(j.a)({},r)):Object(he.jsx)(ve.a,{to:"/login"})}))}var qe=Object(c.d)(Object(we.b)((function(e){return{dialogsPage:e.messagesPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:U,payload:{value:e}}}(t))}}})),He)(Re),We=n(23),Xe=n.n(We),Ze=function(e){var t=e.state.friends.map((function(e){return Object(he.jsxs)("div",{className:Xe.a.friend,children:[Object(he.jsx)("img",{src:e.link,alt:"img"}),e.name]})}));return Object(he.jsxs)("nav",{className:Xe.a.nav,children:[Object(he.jsx)("div",{className:Xe.a.item,children:Object(he.jsx)(_e.b,{to:"/profile/:userId",className:function(e){return e?"active-link":""},children:"Profile"})}),Object(he.jsx)("div",{className:Xe.a.item,children:Object(he.jsx)(_e.b,{to:"/dialogs",className:function(e){return e?"active-link":""},children:"Messages"})}),Object(he.jsx)("div",{className:Xe.a.item,children:Object(he.jsx)(_e.b,{to:"/news",className:function(e){return e?"active-link":""},children:"News"})}),Object(he.jsx)("div",{className:Xe.a.item,children:Object(he.jsx)(_e.b,{to:"/music",className:function(e){return e?"active-link":""},children:"Music"})}),Object(he.jsx)("div",{className:Xe.a.item,children:Object(he.jsx)(_e.b,{to:"/settings",className:function(e){return e?"active-link":""},children:"Settings"})}),Object(he.jsx)("div",{className:Xe.a.item,children:Object(he.jsx)(_e.b,{to:"/users",className:function(e){return e?"active-link":""},children:"Users"})}),Object(he.jsxs)("div",{children:[Object(he.jsx)("div",{className:Xe.a.friends,children:"Friends"}),t]})]})},Ke=Object(we.b)((function(e){return{state:e.sidebar}}),(function(e){return{}}))(Ze),Ve=n(16),Je=n.n(Ve),Qe=n(72),Ye=n.n(Qe),$e=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return n.length=20,Object(he.jsx)("div",{className:Ye.a.PagesContainer,children:n.map((function(t){return Object(he.jsxs)("span",{onClick:function(n){e.onPageChanged(t)},className:e.currentPage===t?Ye.a.SelectedPage:Ye.a.page,children:[t," "]})}))})},et=n.p+"static/media/user.02d5ce4f.png",tt=function(e){var t=e.user,n=e.follow,r=e.unfollow,a=e.followingInProgress;return Object(he.jsxs)("div",{className:Je.a.UserCard,children:[Object(he.jsx)("span",{className:Je.a.avatarBlock,children:Object(he.jsx)("div",{className:Je.a.Avatar,children:Object(he.jsx)(_e.b,{to:"/profile/"+t.id,children:Object(he.jsx)("img",{src:null!==t.photos.small?t.photos.small:et,alt:"Avatar"})})})}),Object(he.jsxs)("div",{className:Je.a.infoBlock,children:[Object(he.jsxs)("span",{className:Je.a.userInfo,children:[Object(he.jsx)("div",{children:t.name}),Object(he.jsx)("div",{className:Je.a.Status,children:t.status})]}),Object(he.jsxs)("span",{className:Je.a.location,children:[Object(he.jsx)("div",{children:"Country"}),Object(he.jsx)("div",{children:"City"})]}),Object(he.jsx)("div",{className:Je.a.followBox,children:t.followed?Object(he.jsx)("button",{disabled:a.some((function(e){return e===t.id})),className:Je.a.FollowButton,onClick:function(){r(t.id)},children:"Unfollow"}):Object(he.jsx)("button",{disabled:a.some((function(e){return e===t.id})),className:Je.a.FollowButton,onClick:function(){n(t.id)},children:"Follow"})})]})]},t.id)},nt=function(e){var t=e.users,n=e.follow,r=e.unfollow,a=e.totalUsersCount,s=e.pageSize,o=e.onPageChanged,i=e.currentPage,c=(e.ToggleFollowingInProgress,e.followingInProgress);Object(Se.a)(e,["users","follow","unfollow","totalUsersCount","pageSize","onPageChanged","currentPage","ToggleFollowingInProgress","followingInProgress"]);return Object(he.jsxs)("div",{className:Je.a.UsersPage,children:[Object(he.jsx)($e,{currentPage:i,totalUsersCount:a,pageSize:s,onPageChanged:o}),t.map((function(e){return Object(he.jsx)(tt,{user:e,follow:n,unfollow:r,followingInProgress:c})}))]})},rt=n.p+"static/media/loader2.f396a593.gif",at=n(135),st=n.n(at),ot=function(e){return Object(he.jsx)("div",{children:Object(he.jsx)("img",{className:st.a.Loader,src:rt,alt:"loader"})})},it=n(138),ct=function(e){return e.usersPage.users},ut=Object(it.a)(ct,(function(e){return e.filter((function(e){return!0}))})),lt=function(e){return e.usersPage.pageSize},dt=function(e){return e.usersPage.totalUsersCount},jt=function(e){return e.usersPage.currentPage},ft=function(e){return e.usersPage.isFetching},pt=function(e){return e.usersPage.followingInProgress},bt=function(e){Object(be.a)(n,e);var t=Object(ge.a)(n);function n(){var e;Object(fe.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.SetCurrentPage(t)},e}return Object(pe.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(he.jsxs)(he.Fragment,{children:[this.props.isFetching?Object(he.jsx)(ot,{}):null,Object(he.jsx)(nt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,ToggleFollowingInProgress:this.props.ToggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),gt=Object(we.b)((function(e){return{users:ut(e),pageSize:lt(e),totalUsersCount:dt(e),currentPage:jt(e),isFetching:ft(e),followingInProgress:pt(e)}}),{follow:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,w.follow.bind(e),Q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,w.unfollow.bind(e),Y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},SetUsers:$,SetCurrentPage:ee,SetTotalUsersCount:te,ToggleIsFetching:ne,ToggleFollowingInProgress:re,getUsers:function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(r){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ne(!0)),r(ee(e)),n.next=4,g(e,t);case 4:a=n.sent,setTimeout((function(){return r(ne(!1))}),200),r($(a.items)),r(te(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(bt),ht=n(46),Ot=n.n(ht),mt=n(92),xt=n.n(mt),vt=function(e){return Object(he.jsxs)("div",{className:xt.a.item,children:[Object(he.jsx)("img",{src:"https://cs13.pikabu.ru/avatars/2487/x2487329-146029786.png",alt:"avatar"}),e.message,Object(he.jsxs)("span",{className:xt.a.likesCount,children:[e.likesCount," likes"]})]})},_t=a.a.memo((function(e){var t=e.posts.map((function(e){return Object(he.jsx)(vt,{message:e.message,likesCount:e.likesCount})}));return Object(he.jsxs)("div",{className:Ot.a.PostsContainer,children:[Object(he.jsx)("h3",{children:"My posts"}),Object(he.jsx)(Pt,{onSubmit:function(t){e.addPost(t.post)}}),Object(he.jsx)("div",{className:Ot.a.posts,children:t})]})})),wt=De(10),Pt=Object(Ce.a)({form:"addPostForm"})((function(e){return Object(he.jsxs)("form",{className:Ot.a.Form,onSubmit:e.handleSubmit,children:[Object(he.jsx)("div",{className:Ot.a.Textfield,children:Object(he.jsx)(ke.a,{name:"post",component:Ae,validate:[Ee,wt]})}),Object(he.jsx)("div",{className:Ot.a.ButtonBox,children:Object(he.jsx)("button",{children:"Add post"})})]})})),yt=_t,kt=Object(we.b)((function(e){return{posts:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(function(e){return{type:F,payload:{text:e}}}(t))}}}))(yt),Ct=n(39),St=n.n(Ct),Nt=n(94),Ut=function(e){var t=Object(r.useState)(e.status),n=Object(Nt.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)(!1),i=Object(Nt.a)(o,2),c=i[0],u=i[1];Object(r.useEffect)((function(){s(e.status)}),[e.status]);return Object(he.jsxs)("div",{children:[!c&&Object(he.jsx)("div",{children:Object(he.jsx)("span",{onDoubleClick:function(){u(!0)},children:e.status||"status"})}),c&&Object(he.jsx)("div",{children:Object(he.jsx)("input",{value:a,autoFocus:!0,onChange:function(e){s(e.currentTarget.value)},onBlur:function(){u(!1),e.updateUserStatus(a)}})})]})},It=function(e){var t=e.profile,n=e.updateUserStatus,r=e.status;return t?Object(he.jsxs)("div",{className:St.a.InfoContainer,children:[Object(he.jsx)("div",{className:St.a.ProfilePhoto}),Object(he.jsxs)("div",{className:St.a.descriptionBlock,children:[Object(he.jsx)("div",{className:St.a.Avatar,children:Object(he.jsx)("img",{src:t.photos.small||et,alt:""})}),Object(he.jsxs)("div",{className:St.a.description,children:[Object(he.jsx)("div",{className:St.a.Name,children:t.fullName}),Object(he.jsx)(Ut,{status:r,updateUserStatus:n})]})]})]}):Object(he.jsx)("div",{children:Object(he.jsx)(ot,{})})},At=n(136),Ft=n.n(At),Tt=function(e){Object(be.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(fe.a)(this,n),t.apply(this,arguments)}return Object(pe.a)(n,[{key:"componentDidMount",value:function(){var e,t=null===(e=this.props.match)||void 0===e?void 0:e.params.userId;t&&":userId"!==t||(t=this.props.authorizedUserId.toString())||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(he.jsxs)("div",{className:Ft.a.mainContent,children:[Object(he.jsx)(It,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}),Object(he.jsx)(kt,{})]})}}]),n}(a.a.Component),Dt=Object(c.d)(Object(we.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h(e).then((function(e){var t;n((t=e.data,{type:T,payload:{profile:t}}))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:r=t.sent,n(B(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:0===t.sent.data.resultCode&&n(B(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ve.e,He)(Tt),Et=n(93),Lt=n.n(Et),Bt=n.p+"static/media/logo.5f0a2246.png",Mt=function(e){return Object(he.jsxs)("header",{className:Lt.a.header,children:[Object(he.jsx)("img",{src:Bt,alt:"logo"}),Object(he.jsx)("div",{className:Lt.a.LoginBlock,children:e.isAuth?Object(he.jsxs)("div",{children:[e.login," ",Object(he.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(he.jsx)(_e.b,{to:"/login",children:"Login"})})]})},zt=function(e){Object(be.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(fe.a)(this,n),t.apply(this,arguments)}return Object(pe.a)(n,[{key:"render",value:function(){return Object(he.jsx)(Mt,Object(j.a)({},this.props))}}]),n}(a.a.Component),Rt=Object(we.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(zt),Gt=function(e){var t=e.handleSubmit,n=e.error;return Object(he.jsxs)("form",{onSubmit:t,children:[Te("Login","login",[Ee],Fe,{}),Te("Password","password",[Ee],Fe,{type:"password"}),Te("input","rememberMe",void 0,Fe,{type:"checkbox"},"Remember me"),n&&Object(he.jsxs)("div",{className:Ue.a.formSummaryError,children:[" ",n," "]}),Object(he.jsx)("div",{children:Object(he.jsx)("button",{children:"Login"})})]})},Ht=n(137),qt=n.n(Ht),Wt=Object(Ce.a)({form:"login"})(Gt),Xt=Object(we.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(d.a)(l.a.mark((function r(a){var s,o;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(C()):(o=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(f.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){if(e.isAuth)return Object(he.jsx)(ve.a,{to:"/profile"});return e.isAuth?Object(he.jsx)(ve.a,{to:"/profile"}):Object(he.jsxs)("div",{className:qt.a.LoginPage,children:[Object(he.jsx)("h1",{children:"Login"}),Object(he.jsx)(Wt,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),Zt=function(e){Object(be.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(fe.a)(this,n),t.apply(this,arguments)}return Object(pe.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(he.jsxs)("div",{className:"App",children:[Object(he.jsx)(Rt,{}),Object(he.jsx)(Ke,{}),Object(he.jsxs)("div",{className:"app-wrapper-content",children:[Object(he.jsx)(ve.b,{path:"/dialogs",render:function(){return Object(he.jsx)(qe,{})}}),Object(he.jsx)(ve.b,{path:"/profile/:userId?",render:function(){return Object(he.jsx)(Dt,{})}}),Object(he.jsx)(ve.b,{path:"/news",render:function(){return Object(he.jsx)(Oe,{})}}),Object(he.jsx)(ve.b,{path:"/music",render:function(){return Object(he.jsx)(me,{})}}),Object(he.jsx)(ve.b,{path:"/settings",render:function(){return Object(he.jsx)(xe,{})}}),Object(he.jsx)(ve.b,{path:"/users",render:function(){return Object(he.jsx)(gt,{})}}),Object(he.jsx)(ve.b,{path:"/login",render:function(){return Object(he.jsx)(Xt,{})}})]})]}):Object(he.jsx)(ot,{})}}]),n}(a.a.Component),Kt=Object(c.d)(ve.e,Object(we.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:ce})}))}}}))(Zt),Vt=function(e){return Object(he.jsx)(a.a.StrictMode,{children:Object(he.jsx)(_e.a,{children:Object(he.jsx)(we.a,{store:je,children:Object(he.jsx)(Kt,{})})})})};je.getState(),o.a.render(Object(he.jsx)(Vt,{}),document.getElementById("root")),i()},39:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1v9W_",InfoContainer:"ProfileInfo_InfoContainer__3yQRD",ProfilePhoto:"ProfileInfo_ProfilePhoto__227Ns",Avatar:"ProfileInfo_Avatar__FpOi8",description:"ProfileInfo_description__1rKpA",Name:"ProfileInfo_Name__3Mhn3"}},45:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2R6vH",dialogs_items:"Dialogs_dialogs_items__Ckxz2",active:"Dialogs_active__oDa8w",dialog:"Dialogs_dialog__25TZP",messages:"Dialogs_messages__2x5Gv",message:"Dialogs_message__LRm7p"}},46:function(e,t,n){e.exports={posts:"MyPosts_posts__2q_8H",PostsContainer:"MyPosts_PostsContainer__1b_Xt",Form:"MyPosts_Form__2fstF",Textfield:"MyPosts_Textfield__1To51",ButtonBox:"MyPosts_ButtonBox__3lvve"}},55:function(e,t,n){e.exports={formControl:"FormControl_formControl__1ZzNG",error:"FormControl_error__3dUKT",formSummaryError:"FormControl_formSummaryError__ucq0Z"}},72:function(e,t,n){e.exports={PagesContainer:"Paginator_PagesContainer___ctH9",page:"Paginator_page__1mmu6",SelectedPage:"Paginator_SelectedPage__1TqL6"}},92:function(e,t,n){e.exports={item:"Post_item__3ZUrT",likesCount:"Post_likesCount__3XH3W"}},93:function(e,t,n){e.exports={header:"Header_header__3X5wX",LoginBlock:"Header_LoginBlock__1lnVl"}}},[[297,1,2]]]);
//# sourceMappingURL=main.e242fe4b.chunk.js.map