(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://i.imgur.com/il2HnTw.jpg",name:"Ali",clicked:!1},{id:2,image:"https://i.imgur.com/3Fp8a9c.jpg",name:"Diana",clicked:!1},{id:3,image:"https://i.imgur.com/zl8GouV.jpg",name:"Oprah",clicked:!1},{id:4,image:"https://i.imgur.com/zKnIV5i.jpg",name:"Obama",clicked:!1},{id:5,image:"https://i.imgur.com/qQpkGPq.jpg",name:"Elvis",clicked:!1},{id:6,image:"https://i.imgur.com/u8zTyiZ.jpg",name:"Luci",clicked:!1},{id:7,image:"https://i.imgur.com/4vz0rrR.jpg",name:"Al",clicked:!1},{id:8,image:"https://i.imgur.com/utIvVJN.jpg",name:"Elizabeth",clicked:!1},{id:9,image:"https://i.imgur.com/XVBETLo.jpg",name:"Martin",clicked:!1},{id:10,image:"https://i.imgur.com/T8Rfk8e.jpg",name:"BGates",clicked:!1},{id:11,image:"https://i.imgur.com/i0ABVpA.jpg",name:"Barbara",clicked:!1},{id:12,image:"https://i.imgur.com/AOs3jbo.jpg",name:"PopeJP",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(3),r=n.n(c),l=n(4),o=n(5),m=n(7),u=n(6),d=n(8),s=(n(15),function(e){return i.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),p=(n(16),function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",{className:"brand animated lightSpeedIn"},i.a.createElement("a",{href:"/clicky-game/"},e.title)),i.a.createElement("li",{id:"rw"},e.rightWrong),i.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),i.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),h=(n(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),g=(n(18),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),f=function(e){return i.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return i.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},E=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return i.a.createElement("div",{className:t},e.children)},S=n(1),v=(n(19),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={people:S,currentScore:0,topScore:0,rightWrong:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e===n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({rightWrong:"You win!"}),n.handlePeople()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"Try again. You've already selected this face!",clicked:[]}),n.handlePeople()},n.handlePeople=function(){var e=v(S);n.setState({people:e})},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(p,{title:"Can You Remember... Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),i.a.createElement(g,null,"Test Your Memory By Clicking On These Unique Faces One Time Only!"),i.a.createElement(f,null,i.a.createElement(k,null,this.state.people.map(function(t){return i.a.createElement(E,{size:"md-3 sm-6"},i.a.createElement(s,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(a.Component);n(20);r.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b9f4e22a.chunk.js.map