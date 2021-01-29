(this["webpackJsonpmaze-app"]=this["webpackJsonpmaze-app"]||[]).push([[0],{19:function(t,e,i){},21:function(t,e,i){},26:function(t,e,i){},27:function(t,e,i){"use strict";i.r(e);var a=i(0),s=i(2),n=i.n(s),r=i(12),o=i.n(r),c=(i(19),i(20),i(3)),h=i(4),l=i(6),u=i(5),m=i(29),d=i(30),p=(i(21),function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){var t=this.props,e=t.col,i=t.isFinish,s=t.isStart,n=t.isWall,r=t.isPlayer,o=t.row,c=i?"square-finish":s?"square-start":n?"square-wall":r?"square-player":"";return Object(a.jsx)("div",{id:"square-".concat(o,"-").concat(e),className:"square ".concat(c)})}}]),i}(s.Component)),v=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(c.a)(this,i),(a=e.call(this,t)).arrowKeyPress=function(t){switch(t.preventDefault(),t.keyCode){case 37:a.moveX("-");break;case 38:a.moveY("-");break;case 39:a.moveX("+");break;case 40:a.moveY("+")}},a.sendData=function(t){a.props.parentCallback(t)},a.matrix=[],a.state={gameStart:!1,gameEnd:!1,locationX:a.props.initial,locationY:a.props.initial},a}return Object(h.a)(i,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.arrowKeyPress)}},{key:"componentWillUnmount",value:function(){this.matrix=[],document.removeEventListener("keydown",this.arrowKeyPress)}},{key:"moveX",value:function(t){"-"===t?this.state.locationX>0&&!1===this.props.matrix[this.state.locationY][this.state.locationX-1]&&this.setState({locationX:this.state.locationX-1}):this.state.locationX<this.props.width-1&&!1===this.props.matrix[this.state.locationY][this.state.locationX+1]&&this.setState({locationX:this.state.locationX+1})}},{key:"moveY",value:function(t){"-"===t?this.state.locationY>0&&!1===this.props.matrix[this.state.locationY-1][this.state.locationX]&&this.setState({locationY:this.state.locationY-1}):this.state.locationY<this.props.height-1&&!1===this.props.matrix[this.state.locationY+1][this.state.locationX]&&this.setState({locationY:this.state.locationY+1})}},{key:"renderSquare",value:function(t,e,i){var s=0===t&&0===e,n=t===this.props.height-1&&e===this.props.width-1,r=t===this.state.locationY&&e===this.state.locationX;return Object(a.jsx)(p,{isStart:s,isWall:i,isPlayer:r,isFinish:n},t*this.props.height+e)}},{key:"renderRow",value:function(t){return Object(a.jsx)("div",{className:"maze-row",children:t})}},{key:"renderBoard",value:function(){for(var t=[],e=0;e<this.props.height;e++){for(var i=[],a=0;a<this.props.width;a++)i.push(this.renderSquare(e,a,this.props.matrix[e][a]));t.push(this.renderRow(i))}return t}},{key:"render",value:function(){var t=this.state.locationX===this.props.width-1&&this.state.locationY===this.props.height-1;return this.sendData(t),Object(a.jsxs)("div",{children:[this.renderBoard(),Object(a.jsx)("div",{children:t?Object(a.jsx)("p",{children:"Well done !"}):Object(a.jsx)("div",{})})]})}}]),i}(n.a.Component);i(13);function j(t,e,i,a){for(var s=0;s<i;s++){for(var n=[],r=[],o=0;o<a;o++)r.push(!1),Math.abs((s-1)*(o-1))%2===1?n.push(!1):n.push(!0);t.push(n),e.push(r)}}function b(t,e,i,a){var s=[];if(i-2>=0&&!t[i-2][a]&&!e[i-2][a]&&s.push([i-2,a]),a-2>=0&&!t[i][a-2]&&!e[i][a-2]&&s.push([i,a-2]),i+2<t.length&&!t[i+2][a]&&!e[i+2][a]&&s.push([i+2,a]),a+2<t[0].length&&!t[i][a+2]&&!e[i][a+2]&&s.push([i,a+2]),0===s.length)return[];var n=s[Math.floor(Math.random()*s.length)];return n[0]===i-2&&(t[i-1][a]=!1),n[0]===i+2&&(t[i+1][a]=!1),n[1]===a-2&&(t[i][a-1]=!1),n[1]===a+2&&(t[i][a+1]=!1),n}function f(t,e,i,a){e[i][a]=!0;var s=b(t,e,i,a);0!==s.length&&f(t,e,s[0],s[1])}var O=i(22),y={easy:{width:9,height:7},medium:{width:15,height:13},hard:{width:21,height:17}},x=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(c.a)(this,i),(a=e.call(this,t)).callBackFunc=function(t){a.state.gameStatus!==t&&a.setState({gameStatus:t})},a.matrix=[],a.state={time:0,isOn:!1,start:0,gameStatus:!1,gameLevel:"easy"},a}return Object(h.a)(i,[{key:"startTimer",value:function(){var t=this;this.setState({isOn:!0,time:this.state.time,start:Date.now()-this.state.time}),this.timer=setInterval((function(){return t.setState({time:Date.now()-t.state.start})}),1)}},{key:"stopTimer",value:function(){this.setState({isOn:!1}),clearInterval(this.timer)}},{key:"startGame",value:function(){this.startTimer()}},{key:"stopGame",value:function(){this.stopTimer()}},{key:"newGame",value:function(){this.setState({time:0,isOn:!1,start:0,gameStatus:!1}),this.initializeMatrix(this.state.gameLevel)}},{key:"initializeMatrix",value:function(t){this.matrix=function(t,e){var i=[],a=[];j(i,a,t,e);for(var s=0;s<t;s++)for(var n=0;n<e;n++)a[s][n]||i[s][n]||f(i,a,s,n);return i}(y[t].height,y[t].width)}},{key:"componentDidMount",value:function(){this.initializeMatrix("easy")}},{key:"componentWillUnmount",value:function(){this.matrix=[]}},{key:"setLevel",value:function(t){this.initializeMatrix(t),this.setState({gameLevel:t})}},{key:"render",value:function(){var t=this;return!0===this.state.gameStatus&&this.state.isOn&&this.stopGame(),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:this.state.isOn?Object(a.jsxs)(m.a,{children:[Object(a.jsx)(d.a,{color:"primary",disabled:!0,onClick:function(){return t.setLevel("easy")},active:"easy"===this.state.gameLevel,children:"Easy"}),Object(a.jsx)(d.a,{color:"primary",disabled:!0,onClick:function(){return t.setLevel("medium")},active:"medium"===this.state.gameLevel,children:"Normal"}),Object(a.jsx)(d.a,{color:"primary",disabled:!0,onClick:function(){return t.setLevel("hard")},active:"hard"===this.state.gameLevel,children:"Hard"})]}):Object(a.jsxs)(m.a,{children:[Object(a.jsx)(d.a,{color:"primary",onClick:function(){return t.setLevel("easy")},active:"easy"===this.state.gameLevel,children:"Easy"}),Object(a.jsx)(d.a,{color:"primary",onClick:function(){return t.setLevel("medium")},active:"medium"===this.state.gameLevel,children:"Normal"}),Object(a.jsx)(d.a,{color:"primary",onClick:function(){return t.setLevel("hard")},active:"hard"===this.state.gameLevel,children:"Hard"})]})}),Object(a.jsxs)("div",{children:[this.state.isOn||this.state.gameStatus?Object(a.jsx)(d.a,{color:"primary",disabled:!0,onClick:function(){return t.startGame()},children:"Start"}):Object(a.jsx)(d.a,{color:"primary",onClick:function(){return t.startGame()},children:"Start"}),this.state.isOn?Object(a.jsx)(d.a,{color:"primary",primary:!0,onClick:function(){return t.stopGame()},children:"Stop"}):Object(a.jsx)(d.a,{color:"primary",disabled:!0,onClick:function(){return t.stopGame()},children:"Stop"}),this.state.isOn?Object(a.jsx)(d.a,{color:"primary",disabled:!0,onClick:function(){return t.newGame()},children:"NewGame"}):Object(a.jsx)(d.a,{color:"primary",onClick:function(){return t.newGame()},children:"NewGame"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Clock"}),Object(a.jsx)("h3",{children:O(this.state.time)}),this.state.isOn?Object(a.jsx)("div",{className:"Maze",children:Object(a.jsx)(v,{width:y[this.state.gameLevel].width,height:y[this.state.gameLevel].height,matrix:this.matrix,initial:0,parentCallback:this.callBackFunc})}):this.state.gameStatus?Object(a.jsx)("p",{children:" Well done !! Ready for more ?"}):Object(a.jsx)("p",{children:" Lets Begin !!"})]})}}]),i}(s.Component);i(26);var k=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(x,{})})};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.85011a0d.chunk.js.map