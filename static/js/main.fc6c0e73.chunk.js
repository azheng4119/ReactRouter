(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(280)},118:function(e,t,a){},124:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(108),i=a.n(c),l=(a(118),a(57)),s=a.n(l),o=a(109),u=a(37),d=a(1),m=a(2),b=a(4),h=a(3),p=a(27),f=a(5),E=a(8),v=a(17),j=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:"30px"}},"Balance: ",this.props.accountBalance," ",r.a.createElement("br",null),"Debits: ",this.props.debits," ",r.a.createElement("br",null),"Credits: ",this.props.credits," ",r.a.createElement("br",null))}}]),t}(n.Component),g=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/userProfile"},"User Profile"),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/"},"Login"),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/debits"},"Debits"),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/credits"},"Credits"),r.a.createElement("h1",null,"Home page"),r.a.createElement(j,{accountBalance:this.props.accountBalance,debits:this.props.debits,credits:this.props.credits}))}}]),t}(n.Component),O=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/home"},"Home"),r.a.createElement("h1",null,"User Profile"),r.a.createElement("div",null,"Username: ",this.props.userName),r.a.createElement("div",null,"Member Since: ",this.props.memberSince))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=Object(u.a)({},e.state.user),n=t.target.name,r=t.target.value;a[n]=r,e.setState({user:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(v.a,{to:"/userProfile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login Page"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"userName"},"User Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("button",null,"Log In")))}}]),t}(n.Component),C=(a(124),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{class:"card"},r.a.createElement("li",null,"Description: ",this.props.name),r.a.createElement("li",null,"Amount: $",this.props.amount),r.a.createElement("li",null,"Date: ",this.props.date))}}]),t}(r.a.Component)),S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).handlChangeAmount=function(e){a.setState({amount:e.target.value})},a.handlChangeDescription=function(e){a.setState({description:e.target.value})},a.state={amount:0,description:"",div_style:{width:"30%",display:"flex",flexDirection:"column",margin:"auto"},div_children:{color:"black",fontSize:"20px",height:"30px"}},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{style:this.state.div_style,onSubmit:function(t){t.preventDefault(),e.props.addNewCredit(e.props.id,e.state.amount,e.state.description)}},r.a.createElement("input",{style:this.state.div_children,type:"number",name:"amount",placeholder:"Enter amount",onChange:this.handlChangeAmount}),r.a.createElement("input",{style:this.state.div_children,type:"text",name:"description",placeholder:"Enter description",onChange:this.handlChangeDescription}),r.a.createElement("button",{style:this.state.div_children},"Submit")))}}]),t}(n.Component),w=(a(125),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={card_div_style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Credit"),r.a.createElement("h2",null,"Account Balance: ",this.props.accountBalance),r.a.createElement("h2",null,"Total Credits: ",this.props.creditsTotal),r.a.createElement("div",{style:this.state.card_div_style},this.props.credits.map(function(e){return console.log(e.name),r.a.createElement(C,{name:e.description,amount:e.amount,date:e.date})})),r.a.createElement(S,{addNewCredit:this.props.addNewCredit,id:this.props.credits.length}),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/home"},"Home"))}}]),t}(n.Component)),D=a(112),N=a.n(D),k=(a(278),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({name:e.target.value})},a.handleChange2=function(e){a.setState({amount:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addDebits(a.state.name,a.state.amount)},a.state={name:"Debit",amount:0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Debit Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Amount"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",onChange:this.handleChange2})),r.a.createElement("button",null,"Add Debit")))}}]),t}(r.a.Component)),x=(a(279),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var c,i=this.props.debits[Symbol.iterator]();!(t=(c=i.next()).done);t=!0){var l=c.value;e.push(r.a.createElement(C,{name:l.description,amount:l.amount,date:l.date}))}}catch(s){a=!0,n=s}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/home"},"Home"),r.a.createElement("br",null),r.a.createElement(k,{addDebits:this.props.addDebits}),r.a.createElement("span",null,r.a.createElement("strong",null,"Total Debits : ",this.props.debitsTotal)),r.a.createElement("div",{id:"cards"},e))}}]),t}(n.Component)),T=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(h.a)(t).call(this))).mockLogIn=function(t){var a=Object(u.a)({},e.state.currentUser);a.userName=t.userName,e.setState({currentUser:a})},e.calucalteDebit=function(){var t=0,a=!0,n=!1,r=void 0;try{for(var c,i=e.state.debits[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){t+=c.value.amount}}catch(l){n=!0,r=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}e.setState({debitsTotal:t})},e.addNewDebit=function(t,a){if(Number(a)<=0)alert("You must enter a valid amount!");else{var n=new Date,r=e.state.debits.concat([{description:t,amount:a,date:n.toJSON().toString()}]),c=e.state.debitsTotal+parseInt(a);e.setState({debits:r,debitsTotal:c})}},e.getCredits=function(){fetch("https://moj-api.herokuapp.com/credits").then(function(e){return e.json()}).then(function(t){return e.setState({credits:t})}).then(function(){console.log(e.state.credits)}).then(function(){return e.calculateCredit()}).catch(function(e){return console.log(e)})},e.calculateCredit=function(){for(var t=0,a=0;a<e.state.credits.length;a++)t+=e.state.credits[a].amount;e.setState({creditsTotal:t})},e.addNewCredit=function(t,a,n){if(Number(a)<=0)alert("You must enter a valid amount!");else{var r=new Date,c={amount:Number(a),date:r.toJSON().toString(),description:n,id:t},i=e.state.credits;i[i.length]=c,e.setState({credits:i});var l=e.state.creditsTotal+Number(a);e.setState({creditsTotal:l})}},e.componentDidMount=function(){e.getDebits(),e.getCredits()},e.state={accountBalance:14568.27,currentUser:{userName:"Not Logged In",memberSince:"08/23/99"},debitsTotal:0,debits:[],creditsTotal:0,credits:[]},e.getDebits=e.getDebits.bind(Object(p.a)(e)),e.getCredits=e.getCredits.bind(Object(p.a)(e)),e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"getDebits",value:function(){var e=Object(o.a)(s.a.mark(function e(){var t=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://moj-api.herokuapp.com/debits").then(function(e){var a=e.data;t.setState({debits:a})}).catch(function(e){return console.log(e)});case 2:this.calucalteDebit();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"App"},r.a.createElement(E.a,null,r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(y,Object.assign({user:e.state.currentUser,mockLogIn:e.mockLogIn},e.props))}}),r.a.createElement(v.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(g,{accountBalance:e.state.accountBalance,debits:e.state.debitsTotal,credits:e.state.creditsTotal})}}),r.a.createElement(v.b,{exact:!0,path:"/userProfile",render:function(){return r.a.createElement(O,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),r.a.createElement(v.b,{exact:!0,path:"/debits",render:function(){return r.a.createElement(x,{addDebits:e.addNewDebit,debits:e.state.debits,debitsTotal:e.state.debitsTotal})}}),r.a.createElement(v.b,{exact:!0,path:"/credits",render:function(){return r.a.createElement(w,{accountBalance:e.state.accountBalance,addNewCredit:e.addNewCredit,creditsTotal:e.state.creditsTotal,credits:e.state.credits})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.fc6c0e73.chunk.js.map