(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"Bulbasaur",image:"/react-clicker/assets/images/Bulbasaur.png"},{id:2,name:"Cyndaquil",image:"/react-clicker/assets/images/Cyndaquil.png"},{id:3,name:"Eevee",image:"/react-clicker/assets/images/Eevee.png"},{id:4,name:"Fennekin",image:"/react-clicker/assets/images/Fennekin.png"},{id:5,name:"Mudkip",image:"/react-clicker/assets/images/Mudkip.png"},{id:6,name:"Piplup",image:"/react-clicker/assets/images/Piplup.png"},{id:7,name:"Popplio",image:"/react-clicker/assets/images/Popplio.png"},{id:8,name:"Rowlet",image:"/react-clicker/assets/images/Rowlet.png"},{id:9,name:"Sobble",image:"/react-clicker/assets/images/Sobble.png"},{id:10,name:"Tepig",image:"/react-clicker/assets/images/Tepig.png"},{id:11,name:"Totodile",image:"/react-clicker/assets/images/Totodile.png"},{id:12,name:"Turtwig",image:"/react-clicker/assets/images/Turtwig.png"}]},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),s=t(4),l=t(5),m=t(7),o=t(6),u=t(8),g=t(1);var d=function(e){return c.a.createElement("nav",{className:"navbar navbar-light bg-light sticky-top"},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement("img",{src:"/react-clicker/assets/images/PremierBall.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"PremierBall"}),"PokeClicker"),c.a.createElement("div",{className:"row justify-content-end"},c.a.createElement("div",{className:"col"},c.a.createElement("span",{className:"navbar-text"},"Score: ",e.score))))};var k=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.children))};t(15);var p=function(e){return c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.checkClicked(e.id)}}))))};var f=function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Welcome to PokeClicker"),c.a.createElement("p",{className:"lead"},"Try to click each pokemon once and once only!"),c.a.createElement("p",null,"After Each click they will shuffle around so be careful."))))},h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={pokemonList:g,score:0,unclickedList:g},t.shuffleOrder=function(){var e=t.state.pokemonList;console.log(t.state.pokemonList);for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),c=[e[n],e[a]];e[a]=c[0],e[n]=c[1]}t.setState({pokemonList:e}),console.log(t.state.pokemonList)},t.gameReset=function(){alert("You already clicked that one, try again!"),t.setState({unclickedList:g,score:0})},t.checkOnClick=function(e){var a=t.state.unclickedList.filter(function(a){return a.id!==e});t.state.unclickedList.length!==a.length?t.setState({unclickedList:a,score:t.state.score+1}):t.gameReset(),t.shuffleOrder()},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d,{score:this.state.score}),c.a.createElement(f,null),c.a.createElement(k,null,this.state.pokemonList.map(function(a){return c.a.createElement(p,Object.assign({key:a.id},a,{checkClicked:e.checkOnClick,reset:e.gameReset,shuffle:e.shuffleOrder}))})))}}]),a}(n.Component);r.a.render(c.a.createElement(h,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.688ae3ba.chunk.js.map