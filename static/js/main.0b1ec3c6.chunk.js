(this["webpackJsonpdare-quiz"]=this["webpackJsonpdare-quiz"]||[]).push([[0],{121:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},132:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(14),r=n.n(a),s=(n(98),n(30)),i=n(13),o=n(16),l=n(11),u=n(12),j=n.n(u),d=n(19),b=n(24),p=n.n(b),h=function(e,t){return function(){var n=Object(d.a)(j.a.mark((function n(c){var a,r,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:"USER_LOGIN_REQUEST"}),a={Headers:{"Content-Type":"application/json"}},n.next=5,p.a.post("/users/login",{userID:e,password:t},a);case 5:r=n.sent,s=r.data,c({type:"USER_LOGIN_SUCCESS",payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),c({type:"USER_LOGIN_FAIL",payload:n.t0});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},O=function(){return function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_QUESTIONS_REQUEST"}),e.next=4,p.a.get("/questions");case 4:n=e.sent,c=n.data,t({type:"GET_QUESTIONS_SUCCESS",payload:c}),localStorage.setItem("questions",JSON.stringify(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_QUESTIONS_FAIL",payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},x=(n(121),n(2)),f=function(e){var t=e.history,n=Object(l.b)();n(O());var a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(x.jsxs)("div",{className:"app__container",children:[Object(x.jsx)("h1",{children:"Friendship Dare 2021"}),Object(x.jsx)("div",{className:"home__picture",children:Object(x.jsx)("img",{src:"https://i.ibb.co/dGHMvN4/handshake.png",alt:"Friendship Dare 2021"})}),Object(x.jsx)("h3",{className:"app__instructions",children:"-: Instructions :-"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Enter your name"}),Object(x.jsx)("li",{children:"Create your own friendship dare in 2021"}),Object(x.jsx)("li",{children:"Your dare link will be ready"}),Object(x.jsx)("li",{children:"Share the link with your friends"}),Object(x.jsx)("li",{children:"Your friends will answer your questions"}),Object(x.jsx)("li",{children:"Read their answers in your profile"})]}),Object(x.jsx)("div",{className:"app__formcontainer",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n){var c,a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"USER_REGISTER_REQUEST"}),c={headers:{"Content-Type":"application/json"}},t.next=5,p.a.post("/users",{name:e},c);case 5:a=t.sent,r=a.data,console.log(r),n({type:"USER_REGISTER_SUCCESS",payload:r}),n({type:"USER_LOGIN_SUCCESS",payload:r}),localStorage.setItem("userInfo",JSON.stringify(r)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(s)),t.push("/quiz"),i("")},children:[Object(x.jsx)("input",{type:"text",className:"app__input",name:"name",placeholder:"Enter your name...",value:s,onChange:function(e){return i(e.target.value)},required:!0}),Object(x.jsxs)("button",{type:"submit",className:"app__btn",children:[Object(x.jsx)("i",{className:"fa fa-hand-point-right"}),Object(x.jsx)("div",{className:"enter__txt",children:"Enter"}),Object(x.jsx)("i",{class:"fa fa-hand-point-left"})]})]})})]})},m=(n(123),function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"loader"})})}),_=(n(124),function(e){var t=e.history,n=Object(l.c)((function(e){return e.userLogin})).userInfo,a=Object(l.c)((function(e){return e.question})).questions,r=Object(c.useState)(0),s=Object(o.a)(r,2),i=s[0],u=s[1],j=a.map((function(e){return e.qText.toString()}));return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{className:"upper__heading",children:["Q: ",i+1,"/10"]}),n?Object(x.jsxs)("div",{className:"quizpage",children:[Object(x.jsx)("h2",{className:"quizpage__question",children:j[i].replace("USER",n.name)}),Object(x.jsx)("button",{type:"submit",className:"quizpage__button",onClick:function(e){e.preventDefault(),i+1<j.length-1?u(i+1):i+1===j.length-1?(u(i+1),t.push("/profile")):alert("success")},children:"Next"})]}):Object(x.jsx)("div",{children:Object(x.jsx)(m,{})})]})}),g=(n(125),function(e){var t=e.history,n=Object(l.c)((function(e){return e.userLogin})),a=n.userInfo,r=n.loading,s=n.error,i=Object(l.b)(),u=Object(c.useState)(""),j=Object(o.a)(u,2),d=j[0],b=j[1],p=Object(c.useState)(""),O=Object(o.a)(p,2),f=O[0],_=O[1];return Object(c.useEffect)((function(){a&&t.push("/profile")}),[t,a]),Object(x.jsxs)("div",{children:[s?Object(x.jsxs)("div",{className:"failed__container",children:[Object(x.jsx)("div",{className:"failed__header",children:"Login Failed"}),Object(x.jsx)("div",{className:"failed__message",children:"Maybe your user id or password was incorrect. Try again with the correct ones."})]}):null,Object(x.jsx)("div",{className:"login__container",children:r?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m,{})}):Object(x.jsx)("div",{className:"login__formcontainer",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(h(d,f)),t.push("/profile")},children:[Object(x.jsx)("input",{type:"text",className:"login__input",name:"User ID",placeholder:"Enter User ID...",value:d,onChange:function(e){return b(e.target.value)},required:!0}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",className:"login__input",name:"Password",placeholder:"Enter Password...",value:f,onChange:function(e){return _(e.target.value)},required:!0}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",className:"login__btn",children:"Login"})]})})})]})}),v=(n(126),function(e){e.history;var t=Object(l.b)(),n=Object(l.c)((function(e){return e.userLogin})).userInfo;return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)(s.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)("div",{className:"header__left",children:"I Dare You"})}),Object(x.jsx)("div",{className:"header__right",children:n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(s.b,{to:"/profile",children:Object(x.jsx)("button",{className:"app__button",children:"Profile"})}),Object(x.jsx)("button",{className:"app__button",onClick:function(){t(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),localStorage.removeItem("questions"),localStorage.removeItem("answers"),t({type:"LOGOUT"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}):Object(x.jsx)(s.b,{to:"/login",children:Object(x.jsx)("button",{className:"app__button",onClick:function(){t(h())},children:"Login"})})})]})}),S=n(79),y=n(83),N=n(82),w=n(33),E=n(174),I=n(173),T=n(163),C=n(164),R=n(165),q=n(162),U=n(166),k=n(167),L=n(168),A=n(169),z=n(170),G=n(80),D=n.n(G),F=n(84),Q=n.n(F),Y=n(81),W=n.n(Y),J=(n(132),function(e){var t=e.history,n=Object(l.b)(),a=Object(c.useState)(!1),r=Object(o.a)(a,2),i=r[0],u=r[1],b=Object(l.c)((function(e){return e.userLogin})).userInfo,h=Object(l.c)((function(e){return e.answers})).answerList,f=Object(c.useState)(""),_=Object(o.a)(f,2),g=_[0],v=_[1];i&&setTimeout((function(){u(!1)}),3e3),Object(c.useEffect)((function(){var e;b?(n(O()),n((e=b.userID,function(){var t=Object(d.a)(j.a.mark((function t(n,c){var a,r,s,i,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"GET_ANSWER_REQUEST"}),a=c(),r=a.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,p.a.get("/answers/".concat(e),s);case 6:i=t.sent,o=i.data,n({type:"GET_ANSWER_SUCCESS",payload:o}),localStorage.setItem("answers",JSON.stringify(o)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:"GET_ANSWER_FAIL"});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}())),v("".concat(window.location.origin,"/quiz/").concat(b.userID))):t.push("/login")}),[t,b,n]);return Object(x.jsxs)("div",{children:[b?Object(x.jsx)("div",{className:"show__details",children:Object(x.jsxs)(E.a,{children:[Object(x.jsx)(I.a,{"aria-controls":"panel1a-content",id:"panel1a-header",expandIcon:Object(x.jsx)(D.a,{}),children:Object(x.jsx)("div",{className:"summary",children:Object(x.jsx)("div",{className:"summary__heading",children:"Show Login Details"})})}),Object(x.jsx)(T.a,{children:Object(x.jsxs)("div",{className:"details",children:[Object(x.jsxs)("div",{className:"details__login",children:[Object(x.jsxs)("p",{className:"details__id",children:[Object(x.jsx)("div",{style:{fontSize:"17px"},children:"User ID: "}),b.userID," "]}),Object(x.jsxs)("p",{className:"details__password",children:[Object(x.jsx)("div",{style:{fontSize:"17px"},children:"Password: "}),b.password," "]})]}),Object(x.jsx)("p",{className:"details__notice",children:"Make a screenshot of this details. Once you lost your password then it can't be restored."}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(I.a,{"aria-controls":"panel1a-content",id:"panel1a-header",expandIcon:Object(x.jsx)(W.a,{}),children:Object(x.jsx)("div",{className:"summary",children:Object(x.jsx)("div",{className:"summary__heading",children:"Settings"})})}),Object(x.jsx)(T.a,{children:Object(x.jsxs)("p",{className:"delete__container",children:[Object(x.jsx)("p",{className:"delete__heading",children:"Do you want to delete your account?"}),Object(x.jsx)("button",{className:"delete__btn",onClick:function(){var e,t;n((e=b.userID,t=b.token,function(){var n=Object(d.a)(j.a.mark((function n(c){var a,r,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,localStorage.removeItem("userInfo"),localStorage.removeItem("questions"),localStorage.removeItem("answers"),c({type:"LOGOUT"}),a={Headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},n.next=8,p.a.delete("/users/".concat(e),a);case 8:r=n.sent,s=r.data,console.log(s),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()))},children:"Delete"}),Object(x.jsx)("p",{className:"delete__notice",children:"Remember once you delete your account, your data will be completely deleted. There is no way of restoring your data back."})]})})]})]})})]})}):Object(x.jsx)("div",{children:"Login"}),Object(x.jsxs)("center",{children:[i?Object(x.jsxs)("div",{className:"copied",children:[Object(x.jsx)(N.a,{size:"20px",color:"white"}),Object(x.jsx)("span",{children:"Copied Successfully"})]}):Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)("div",{className:"copy__container",children:[Object(x.jsx)("input",{type:"text",value:g,onChange:function(e){return v(e.target.value)},className:"input__link"}),Object(x.jsx)(S.CopyToClipboard,{text:g,onCopy:function(){return u(!0)},children:Object(x.jsxs)("button",{className:"copy__button",children:[Object(x.jsx)(w.d,{size:"20px",color:"white"}),Object(x.jsx)("span",{children:"Click To Copy"})]})})]}),b?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"wpstory__link",children:Object(x.jsxs)("button",{className:"wp__button",onClick:"whatsapp://send?text=\ud83d\ude4b\u200d\u2642\ufe0fHey!!! ".concat(b.name," have got a fun dare challenge for you\ud83c\udf89\ud83c\udf89\ud83c\udf89 Accept it by clicking this link"),children:[Object(x.jsx)(y.a,{size:"30px"}),Object(x.jsx)("span",{children:"Add To Story"})]})}),Object(x.jsx)("div",{className:"messenger__link",children:Object(x.jsxs)("button",{className:"messenger__button",children:[Object(x.jsx)(w.b,{size:"30px"}),Object(x.jsx)("span",{children:"Share"})]})}),Object(x.jsx)("div",{className:"grid__container",children:Object(x.jsxs)(C.a,{container:!0,spacing:3,children:[Object(x.jsx)(C.a,{item:!0,xs:3,className:"insta__container",spacing:3,children:Object(x.jsx)(w.c,{size:"30px",color:"white"})}),Object(x.jsx)(C.a,{item:!0,xs:3,className:"fb__container",children:Object(x.jsx)(w.a,{size:"30px",color:"white"})}),Object(x.jsx)(C.a,{item:!0,xs:3,className:"snap__container",children:Object(x.jsx)(w.e,{size:"30px",color:"black"})}),Object(x.jsx)(C.a,{item:!0,xs:3,className:"twit__container",children:Object(x.jsx)(w.f,{size:"30px",color:"white"})})]})})]}):Object(x.jsx)("div",{children:"Loading..."})]}),Object(x.jsxs)("div",{className:"timeline_container",children:[Object(x.jsx)("div",{className:"timeline__heading",children:"Your Timeline"}),h?Object(x.jsx)("div",{className:"table__container",children:h.length<1?Object(x.jsx)("div",{className:"noAnswer__received",children:"You didn't receive any answers yet"}):Object(x.jsx)(R.a,{component:q.a,children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(k.a,{children:Object(x.jsxs)(L.a,{style:{backgroundColor:"#ff0066"},children:[Object(x.jsx)(A.a,{children:Object(x.jsx)("div",{className:"table__heading",children:"Name"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)("div",{className:"table__heading",children:"Answers"})})]})}),Object(x.jsx)(z.a,{style:{backgroundColor:"#b3ffff"},children:h.map((function(e){return Object(x.jsxs)(L.a,{children:[Object(x.jsx)(A.a,{children:Object(x.jsx)("div",{className:"sender__name",children:e.sender})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(s.b,{to:"/answers/".concat(e._id),children:Object(x.jsxs)("div",{className:"show__answer",children:["Show ",Object(x.jsx)(Q.a,{})," "]})})})]},e._id)}))})]})})}):Object(x.jsx)("div",{className:"loader__container",children:Object(x.jsx)(m,{})})]})]})}),M=n(171),P=n(172),B=n(175),H=function(){var e=Object(d.a)(j.a.mark((function e(t,n,c){var a,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,""===c&&(c="unknown user"),console.log(t,n,c),a={headers:{"Content-Type":"application/json"}},e.next=6,p.a.post("/answers",{answers:t,userID:n,sender:c},a);case 6:return r=e.sent,s=r.data,console.log(s),e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,c){return e.apply(this,arguments)}}(),V=(n(136),function(e){var t=e.history,n=e.match,a=Object(l.b)(),r=n.params.id,s=Object(l.c)((function(e){return e.userLogin})).userInfo;console.log(r),Object(c.useEffect)((function(){var e;s?t.push("/profile"):(m(!0),a(O()),a((e=r,function(){var t=Object(d.a)(j.a.mark((function t(n){var c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"GET_CREATOR_NAME_REQUEST"}),t.next=4,p.a.get("/questions/".concat(e));case 4:c=t.sent,a=c.data,n({type:"GET_CREATOR_NAME_SUCCESS",payload:a}),localStorage.setItem("creatorName",JSON.stringify(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"GET_CREATOR_NAME_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}())))}),[a,t,s,r]);var i=Object(l.c)((function(e){return e.answer})).answers,u=Object(l.c)((function(e){return e.creator})).name;console.log(u);var b=Object(c.useState)(!1),h=Object(o.a)(b,2),f=h[0],m=h[1],_=Object(c.useState)(""),g=Object(o.a)(_,2),v=g[0],S=g[1],y=Object(l.c)((function(e){return e.question})).questions.map((function(e){return e.qText.toString().replace("USER",u)})),N=Object(c.useState)(0),w=Object(o.a)(N,2),E=w[0],I=w[1],T=Object(c.useState)(""),C=Object(o.a)(T,2),R=C[0],q=C[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(M.a,{show:f,onHide:function(){return m(!1)},"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(x.jsx)(M.a.Body,{children:Object(x.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),m(!1),console.log(v)},children:[Object(x.jsxs)(P.a.Group,{children:[Object(x.jsx)(P.a.Label,{children:"Name: "}),Object(x.jsx)(P.a.Control,{type:"text",placeholder:"Enter your name...",value:v,onChange:function(e){return S(e.target.value)},required:!0})]}),Object(x.jsx)(B.a,{variant:"primary",type:"submit",block:!0,children:"Enter"})]})})}),E+1<11?Object(x.jsxs)("div",{className:"question__container",children:[Object(x.jsxs)("h2",{className:"upper__heading",children:["Q: ",E+1,"/10"]}),Object(x.jsxs)("div",{className:"quizpage",children:[Object(x.jsx)("h2",{className:"quizpage__question",children:y[E]}),Object(x.jsx)("textarea",{name:"answer",className:"quizpage__answer",placeholder:"Enter your answer...",value:R,onChange:function(e){return q(e.target.value)},required:!0}),Object(x.jsx)("div",{className:"no__answer",onClick:function(){return q("I don't have an answer")},children:"I don't have an answer"}),Object(x.jsx)("button",{type:"submit",className:"quizpage__button",onClick:function(e){e.preventDefault(),E+1<=y.length&&(a(function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""===e&&(e="I don't have an answer"),n({type:"SAVE_ANSWER",payload:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(R)),I(E+1),q(""))},children:"Submit"})]})]}):Object(x.jsxs)("div",{className:"send__answer",children:[Object(x.jsx)("div",{className:"send__heading",children:"Click Below To Send Your Answers"}),Object(x.jsx)("div",{className:"send__image",children:Object(x.jsx)("img",{src:"https://i.ibb.co/7bVdPs3/friendship.png",alt:"friendship dare 2021"})}),Object(x.jsxs)("div",{className:"arrows",children:[Object(x.jsx)("img",{src:"https://i.ibb.co/cyY6x3z/pointing-down.png",alt:"friendship dare quiz 2021"}),Object(x.jsx)("img",{src:"https://i.ibb.co/cyY6x3z/pointing-down.png",alt:"friendship dare quiz 2021"}),Object(x.jsx)("img",{src:"https://i.ibb.co/cyY6x3z/pointing-down.png",alt:"friendship dare quiz 2021"})]}),Object(x.jsx)("button",{className:"send__btn",onClick:function(){console.log(i),H(i,r,v),a(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_ANSWER"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.push("/next")},children:"Send"})]})]})}),Z=(n(138),function(e){var t=e.history;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h3",{className:"msg__container",children:"Your answers were sent successfully"}),Object(x.jsxs)("div",{className:"inner__container",children:[Object(x.jsx)("center",{children:Object(x.jsx)("img",{src:"https://i.ibb.co/7QsZT3z/high-five.png",alt:"friendship dare 2021"})}),Object(x.jsx)("h3",{children:"Create your own Dare Quiz"}),Object(x.jsxs)("div",{className:"arrows",children:[Object(x.jsx)("img",{src:"https://i.ibb.co/cyY6x3z/pointing-down.png",alt:"friendship dare quiz 2021"}),Object(x.jsx)("img",{src:"https://i.ibb.co/cyY6x3z/pointing-down.png",alt:"friendship dare quiz 2021"}),Object(x.jsx)("img",{src:"https://i.ibb.co/cyY6x3z/pointing-down.png",alt:"friendship dare quiz 2021"})]}),Object(x.jsx)("button",{onClick:function(){return t.push("/")},children:"CREATE NOW"})]})]})})}),K=(n(139),function(e){var t=e.question,n=e.answer;return Object(x.jsxs)("div",{className:"qna__container",children:[Object(x.jsx)("div",{className:"q__container",children:t}),Object(x.jsx)("div",{className:"ans__container",children:n})]})}),X=(n(140),function(e){var t=e.history,n=e.match,a=Object(l.c)((function(e){return e.userLogin})).userInfo;Object(c.useEffect)((function(){a||t.push("/login")}),[t,a]);var r=Object(l.c)((function(e){return e.question})).questions;console.log(r);var s=a?r.map((function(e){return e.qText.toString().replace("USER",a.name)})):[];console.log(s);var i=Object(l.c)((function(e){return e.answers})).answerList.filter((function(e){return e._id===n.params.id}))[0].answers;console.log(i);var o=function(e,t){var n=0,c=[];for(n=0;n<10;n++){var a={index:n,question:e[n],answer:t[n]};c.push(a)}return c}(s,i);return console.log(o),Object(x.jsx)("div",{className:"answer__page",children:o.map((function(e){return Object(x.jsx)(K,{question:e.question,answer:e.answer},e.index)}))})});n(141);var $=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(s.a,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(i.a,{path:"/",component:f,exact:!0}),Object(x.jsx)(i.a,{path:"/quiz",component:_,exact:!0}),Object(x.jsx)(i.a,{path:"/login",component:g}),Object(x.jsx)(i.a,{path:"/profile",component:J}),Object(x.jsx)(i.a,{path:"/quiz/:id",component:V}),Object(x.jsx)(i.a,{path:"/next",component:Z}),Object(x.jsx)(i.a,{path:"/answers/:id",component:X})]})})},ee=n(45),te=n(86),ne=n(87),ce=n(88),ae=n(68),re=Object(ee.combineReducers)({userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:c};case"USER_REGISTER_FAILS":return{loading:!1,error:c};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:c};case"USER_LOGIN_FAIL":return{loading:!1,error:c};case"LOGOUT":return{};default:return e}},question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{questions:[]},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"GET_QUESTIONS_REQUEST":return{loading:!0,questions:[]};case"GET_QUESTIONS_SUCCESS":return{loading:!1,questions:c};case"GET_QUESTIONS_FAIL":return{loading:!1,error:c};default:return e}},answer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{answers:[]},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"SAVE_ANSWER":var a=c;return Object(ae.a)(Object(ae.a)({},e),{},{answers:[].concat(Object(ce.a)(e.answers),[a])});case"CLEAR_ANSWER":return{answers:[]};default:return e}},answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{answerList:[]},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"GET_ANSWER_REQUEST":return{loading:!0};case"GET_ANSWER_SUCCESS":return{loading:!1,answerList:c};case"GET_ANSWER_FAIL":return{loading:!1,error:c};default:return e}},creator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:""},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"GET_CREATOR_NAME_REQUEST":return{loading:!0,name:""};case"GET_CREATOR_NAME_SUCCESS":return{loading:!1,name:c};case"GET_CREATOR_NAME_FAIL":return{loading:!1,error:c};default:return e}}}),se={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},answers:{answerList:localStorage.getItem("answers")?JSON.parse(localStorage.getItem("answers")):[]},question:{questions:localStorage.getItem("questions")?JSON.parse(localStorage.getItem("questions")):[]},creator:{name:localStorage.getItem("creatorName")?JSON.parse(localStorage.getItem("creatorName")):""}},ie=[te.a],oe=Object(ee.createStore)(re,se,Object(ne.composeWithDevTools)(ee.applyMiddleware.apply(void 0,ie))),le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(142);r.a.render(Object(x.jsx)(l.a,{store:oe,children:Object(x.jsx)($,{})}),document.getElementById("root")),le()},98:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.0b1ec3c6.chunk.js.map