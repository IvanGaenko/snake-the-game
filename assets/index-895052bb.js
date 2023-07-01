var g=Object.defineProperty;var m=(n,e,t)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(m(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();class y{constructor(e){s(this,"container");s(this,"canvas");s(this,"context");this.container=e,this.canvas=document.querySelector("#background"),this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,this.context=this.canvas.getContext("2d")}resize(e){this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,e&&this.render()}clear(){this.context!==null&&this.canvas!==null&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}render(){if(this.context!==null&&this.canvas!==null){const e=Math.round(Math.min(this.canvas.height,this.canvas.width)/6);this.context.fillStyle="white",this.context.font=`${e}px Inter`;const t="Game Over!",o=this.context.measureText(t);this.context.fillText(t,this.canvas.width/2-o.width/2,this.canvas.height/2)}}}const w=(n,e)=>{switch(e){case"ArrowUp":{n={...n,y:n.y-1};break}case"ArrowDown":{n={...n,y:n.y+1};break}case"ArrowLeft":{n={...n,x:n.x-1};break}case"ArrowRight":{n={...n,x:n.x+1};break}}return n},f=n=>{let e;return t=>{e&&clearTimeout(e),e=setTimeout(n,500,t)}},C=n=>{const e=n.end.x-n.start.x,t=n.end.y-n.start.y;return Math.abs(e)>Math.abs(t)?e<0?"ArrowLeft":"ArrowRight":t<0?"ArrowUp":"ArrowDown"};class v{constructor(e,t,o,i,a,r){s(this,"body");s(this,"container");s(this,"columnCount");s(this,"rowCount");s(this,"partWidth");s(this,"partHeight");s(this,"canvas");s(this,"context");this.container=e,this.columnCount=t,this.rowCount=o,this.partWidth=i,this.partHeight=a,this.canvas=document.querySelector("#snake"),this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,this.context=this.canvas.getContext("2d"),this.body=r===void 0?this.getDefaultSnake():r}getDefaultSnake(){const e=[{x:0,y:0},{x:0,y:0},{x:0,y:0}];for(let t=0;t<e.length;t++)e[t].x=Math.floor(this.columnCount/2)+t-1,e[t].y=Math.round(this.rowCount/2);return e}init(){this.body=this.getDefaultSnake(),this.render()}move(e,t=!1){const o=w(this.body[this.body.length-1],e);t||this.body.shift(),this.body.push(o)}resize(e){this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,e?this.render():this.init()}clear(){this.context!==null&&this.canvas!==null&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}render(){if(this.context!==null&&this.canvas!==null){this.clear();const e=Math.floor(this.partWidth<this.partHeight?this.partWidth/5:this.partHeight/5);for(let t=0;t<this.body.length;t++)this.context.beginPath(),this.context.fillStyle=t===this.body.length-1?"rgba(0, 255, 0, 0.8)":"rgba(0, 0, 255, 0.8)",this.context.strokeStyle="rgba(255, 255, 255, 0.4)",this.context.roundRect(this.body[t].x*this.partWidth,this.body[t].y*this.partHeight,this.partWidth-1,this.partHeight-1,[e]),this.context.fill(),this.context.stroke()}}}class x{constructor(e,t,o,i,a,r){s(this,"container");s(this,"columnCount");s(this,"rowCount");s(this,"partWidth");s(this,"partHeight");s(this,"canvas");s(this,"context");s(this,"position");s(this,"snakeBody");this.container=t,this.columnCount=o,this.rowCount=i,this.partWidth=a,this.partHeight=r,this.canvas=document.querySelector("#apple"),this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,this.context=this.canvas.getContext("2d"),this.position={x:0,y:0},this.snakeBody=e,this._generatePosition(this.snakeBody)}init(e){this._generatePosition(e),this.render()}_generatePosition(e){if(e.length!==0){this.position={x:Math.floor(Math.random()*this.columnCount),y:Math.floor(Math.random()*this.rowCount)};for(let t=0;t<e.length;t++)this.position.x===e[t].x&&this.position.y===e[t].y&&this._generatePosition(e)}}resize(e){this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,this.init(e)}clear(){this.context!==null&&this.canvas!==null&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}render(){if(this.context!==null&&this.canvas!==null){this.clear(),this.context.beginPath(),this.context.fillStyle="rgba(255, 0, 0, 0.7)";const e=Math.floor(this.partWidth<this.partHeight?this.partWidth/2:this.partHeight/2);this.context.roundRect(this.position.x*this.partWidth,this.position.y*this.partHeight,this.partWidth-1,this.partHeight-1,[e]),this.context.fill()}}}const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFklEQVR4nO3ZsW3CQBjF8Q8hoIEuLU0GyAJswBCskAIGyAop06ZMmwW8AAzgmtYdjWXFf4TgpEgpUODu7HfcbwI/yfa9+z6zLMuy34ANMDZ1nJXA0hII4nwDz6aIv2rgHZiZeBBnD6yAgSngugJ4sQSCnPwAn8CT9RX/UwGvwNDEgzg7YGF9wu1a4AuYm3gQ5wC8ARP1IPSiHeBfN+2AMOK3A8KK1w6IowjeDoinAT6CtQPiq4K0A7qz89oO6FbrrR3kIPfbqr9alfrH3qTw+y3UD0T5ilJfSuM0eAAnQAj5Gl+qX6wO6lfdNoXhw1Z9HFSpD+iaoKeyD48wxN6rrxXq6KeyD6mt3soUlqFrYNT1c2RZ9uCOorLyFKJbgmwAAAAASUVORK5CYII=",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nO3SoRHAMBAEMfffdEK2gIBzkMQf/NyeAwA/ej66dT/jkVhkTVqR1pq0Iq01aUVaa9KKtNakFWmtSSvSWpNWpLUmrUhrTVqR1pq0Ii0AOPe8ZXiV98fYlvIAAAAASUVORK5CYII=",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVR4nO2ZOWgVURSGJ2qiEWsbNSDiEksFg43iUsQQEcTOBCxEEBXBxhjQwkLiLpoiiohFxA1XNGgTJZaKW+WCjZZiIxqDSz45eAcO8967mTdzZngP54fhDbP8/39m7pxz73lBUKBAgQIFagnALKAD2A3sBXqBnUAn0DLBvUeBQaAxP8f/hBcCfcArJsYHZ7Q1wrFVXdOZl/FFwCXgN9VjHLgJzAcWA9/VuQtZG28AdgE/yhiTYyNuKJwEjrj9JxWuHwM+Ro59BqZkZb4ZuF3mad5zY3+6594ZwCbgfow3tDoL81OBBxGhZ8CSBFwrgTeeAM5kMWxkzGocB5oS8s0BvngC+CSalgFIKtTYn4JrEjAcYxi1WZlfEMkSJ1Ly7SMeDlsFIKkyxPOkw0bxXYsZwFkL8/NUnpdss9SAU7LRKmCtZ5PzzRYBSB4PMRTUG4DXKoCOoA4nZuPO/KjJK80TQLt6+sNBvQHYogK4mKNuA9AFdEvNSEPUowLoM3Xp1+1Sut1WBeeQqUu/7jGlu8dq+jBg6tKvO6h0N6chkulxiEemLv26I0p3TRqiFkX0Le0UoooqPeY0/wAz0xK+V0G0mzmtrLdB6T21IJQFeIhbJi79eg+V3kELwlZVjeV3hYnT8lrLlfmfwFwr4huK+AUw2YS4dLkqy9MQ5wPj9kn4YQn6zcgdgNOKf9Ts6SsB6bBp9GbIvc2KO7qOvRsR6gempeBsBE5FOK/YOi/N0brICF4CyxJwtUXWGoIhX1/JMog7lOIxsF4+Rs+9TcBGlyqlSGlczqNQ6uHUE/mwdcWWYM65hq9sA1KUKlz/1c25kk+bU3alr6s6UQ1+AVelwZW78Qp9I1n8v41h/B1wQJarQS0CmA2sA7a7Pzhk2+GO1abpAgUKFPh/8RfQtytEa5QV8gAAAABJRU5ErkJggg==",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCklEQVR4nO2aW4hWVRTHj5dPo5mmbNKiKTMzLyNhETOaQg8FPRT40E2CAqPe6sFISMyCsItZ42XsqctLEgU9dIEoku5kL00GFlh0H0uCIB0nZ3LUXyz9b9ocz9n7nPOdKaf8wzAf31p7XfY5a+211v6S5CT+BwAeBw5zPEaAlclYAdBPPj5LxgKANuAIMARM8L4/Td8PAxOTEx3AorydB34Qbe6/Y11y1IgLgHuAqRG+22XsCxm010W7KSJjKrACOL8O233BFwO7ZcSvwHUB3ifEd38G7VHRHgqsvxr4WXwWa7PqcmKW58Re/bd3fQMwOcXbAN4Vz/UZsm4R7U0/fkSbpE0w2YZ9njMX1enE+wrYVcBBffc50AnMBJ4CfvOy03E7abHh0ffI8A5gDtDnpejVShofNu0McF7KiRaP1gV8LdqQlBsOAe8BtwXk3gl84u28ZbFBff4WWOjxtqac6ajiiAvaA8CZGXRT8px49gPrgLNLJo8tcsTwvD2FDL522WBYXsWRFuArCXgywLfAlJVW8Pf6Dv8ppAH0yIZd/ltRCsDligcrN65K/mEAV0r3SMjZosIe1I7sznrFRgvAGcCP0r2mDoETge0S+HItVhbT+6J0fpxO1c2mYRdwl9UiNKxviZdEZtYpeI5S6wAwpQD/fGAj8IVS66A+23fzC6yfrtg8UCYTFnHkGe3Q2gjfJKVUczoPRus13oisp8X/cF1OnKJy4WAozcqJbd4huQnoVhq3v4XAZu/c2BZyBpgtPgv48VUMPx24Qiew1VMfSeBbkXX2JAw/AZdEzh3XePVGZO4Q39vAeh3S3VkHp79oXaCzs3LixkhMHNKTyHUi5cyw1nQG+O4KvKK2YY9lLXI99h/ApyoZrEBcasEXMcyC2LAx5oS3xuLEsKFAC3GDtQVKyTu0YYbDWQscSuds4Eut7SqxxmLGsLPi2XYUWUSHcRUEW743tJZYY0WnYaCCvnHO2LodGajgiPUbhn2j5UhbE69Wd4UhRZVXqy3kyIiXoazBedUOQBsUxLozL9g3lzDGpeueCN9cYBnwCPAa8J3XlI1kLVhpIxzvwPJhC28ukH5t7YICTlwK/Fkg/d5NNoZl672xjNDp7cI7BQ9El077Q87ICddCbyp4IL7hvR3zKg34VKLsVYlyVoCv4ZUow3JskbJTq6qFLXoSiLcxaiVKMwWc6q3eSNE4ojqsUVDn2qQuaHfKlvFWp+3UGbNfn3tCMeFgE0avjJ+W1AUZ5sqCaC1Vg77F0mV9zOy6hE7WIM7wbC1Ci+ndKp19sd6lqEB7nw3f2KSxFiuL6W31hoDrmxV2jc6Q5scx1fR3KVbMhmurCpmm+azhvoiy3LRccEC3OEBfLRt+iV1p5AmwuxDD7zmjzCneyGZQ94bnlJA/Q4NvV0m8lJURVVe5W4AVVRyZ7nWMH/iVre4w+r1GzB9i28D71oDcOzKG2K4N6DfZqTgx3a4jrHbxY8Viypl2nQWum9wungt1ELprBTNyRs58zGGP+vBzJcMNAd3dS3vKiabvSHxn3FliAbgm47Km4SlfmiHLaiU3TEivnQA84N29DNV20ZO6Avhegq3EXxLgtd00rMqgWeEXLDs4ljx21X71lsouy4FTI3w2RjJszaC9ItqyiIwWjX7KX+yMQnnRl0GzpsgwLznRwbEB3xFls/Fj9gcDBq9xGrs/4fCmlnk/qslvT08i+e/gLx6eFfRUEBkkAAAAAElFTkSuQmCC";class I{render(){const e=document.createElement("header"),t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("button"),a=document.createElement("button"),r=document.createElement("img"),l=document.createElement("img"),c=document.createElement("img"),h=document.createElement("img");return e.className="header",t.className="header-container",o.className="score",i.className="start",a.className="options",r.className="play-button",l.className="pause-button",c.className="reset-button",h.className="options-button",r.src=E,l.src=b,c.src=S,h.src=B,r.alt="play-button",l.alt="pause-button",c.alt="reset-button",h.alt="options-button",o.innerHTML="0000",i.appendChild(r),i.appendChild(l),i.appendChild(c),a.appendChild(h),t.appendChild(i),t.appendChild(o),t.appendChild(a),e.appendChild(t),e}}class k{render(){const e=document.createElement("main"),t=document.createElement("canvas"),o=document.createElement("canvas"),i=document.createElement("canvas");return e.className="canvas-container",t.id="background",o.id="snake",i.id="apple",e.appendChild(t),e.appendChild(o),e.appendChild(i),e}}const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3ZTQqDMBCGYU/RSq9Yj1uwPc1bRBcirWicv4T5Vm6UeVCTGdJ1mUwm00yAJ9AHqKOfaim9eWDO6IlhRkw1TBlKHnADXssDPsBDpdL9Gu6rGt7FNXhikEJ4YpBGeGDQQlhi0EZYYMwQmhhzhAbGDSGJcUdIYMIgrmDCIUowYRFnMOERRzDVIPYw1SH+zBDj5tp9ULvyZup6E+tsPiezEUA0TXxa/PixI4zNp7K3OlWD4cASGx7DiX0iLIaCzS4chgs7dhgMAm2HOwbB3skNg0IDaI5BsYs1w2DQiqONsZwn0MJ4DEVIYzwnO6QwEcZTJDDNHL01cxiayWQyXcR8AfkY5euVO0c7AAAAAElFTkSuQmCC";class L{render(){const e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("header"),i=document.createElement("div"),a=document.createElement("div"),r=document.createElement("span"),l=document.createElement("span"),c=document.createElement("div"),h=document.createElement("button"),d=document.createElement("button"),p=document.createElement("button"),u=document.createElement("img");return e.className="options-container",t.className="options-content",o.className="options-header",i.className="options-logo",a.className="options-main",r.className="speed-value",l.className="options-speed",c.className="decrease-increase-container",h.className="options-close",d.className="decrease-button",p.className="increase-button",u.className="close-button",u.src=D,u.alt="close-button",i.innerHTML="Snake",r.innerHTML="Speed",d.innerHTML="-",p.innerHTML="+",h.appendChild(u),c.appendChild(d),c.appendChild(l),c.appendChild(p),a.appendChild(r),a.appendChild(c),o.appendChild(i),o.appendChild(h),t.appendChild(o),t.appendChild(a),e.appendChild(t),e}}class O{constructor(){s(this,"container");s(this,"content");s(this,"canvasContainer");s(this,"startButton");s(this,"optionsButton");s(this,"optionsButtonClose");s(this,"decreaseButton");s(this,"increaseButton");s(this,"playImage");s(this,"pauseImage");s(this,"resetImage");s(this,"scoreContent");s(this,"optionsContainer");s(this,"optionsSpeed");this.container=document.querySelector(".container"),this.content=document.querySelector(".content"),this.setupUI(),this.canvasContainer=document.querySelector(".canvas-container"),this.startButton=document.querySelector(".start"),this.optionsButton=document.querySelector(".options"),this.optionsButtonClose=document.querySelector(".options-close"),this.decreaseButton=document.querySelector(".decrease-button"),this.increaseButton=document.querySelector(".increase-button"),this.playImage=document.querySelector(".play-button"),this.pauseImage=document.querySelector(".pause-button"),this.resetImage=document.querySelector(".reset-button"),this.scoreContent=document.querySelector(".score"),this.optionsContainer=document.querySelector(".options-container"),this.optionsSpeed=document.querySelector(".options-speed")}setupUI(){const e=[I,k];for(let t=0;t<e.length;t++){const o=e[t],i=new o().render();this.content.appendChild(i)}this.container.appendChild(new L().render())}setPlayButton(e){switch(this.playImage.style.display="none",this.pauseImage.style.display="none",this.resetImage.style.display="none",e){case"play":this.playImage.style.display="block";break;case"pause":this.pauseImage.style.display="block";break;case"reset":this.resetImage.style.display="block";break}}toggleOptions(e){this.optionsContainer.style.display=e?"flex":"none"}}const A=20;class U extends O{constructor(){super();s(this,"container");s(this,"background");s(this,"snake");s(this,"apple");s(this,"columnCount");s(this,"rowCount");s(this,"partWidth");s(this,"partHeight");this.container=document.querySelector(".canvas-container"),this.columnCount=0,this.rowCount=0,this.partWidth=0,this.partHeight=0,this.calculateDimensions(),this.background=new y(this.container),this.snake=new v(this.container,this.columnCount,this.rowCount,this.partWidth,this.partHeight),this.apple=new x(this.snake.body,this.container,this.columnCount,this.rowCount,this.partWidth,this.partHeight),window.addEventListener("resize",()=>{this.calculateDimensions()}),this.initCanvasElements()}calculateDimensions(){this.columnCount=Math.round(this.container.clientWidth/A),this.rowCount=Math.round(this.container.clientHeight/A),this.partWidth=this.container.clientWidth/this.columnCount,this.partHeight=this.container.clientHeight/this.rowCount}initCanvasElements(){this.snake.render(),this.apple.render()}}class P extends U{constructor(){super();s(this,"isPlaying");s(this,"isAbleChangeDirection");s(this,"gameIsOver");s(this,"isAppleEaten");s(this,"timeout");s(this,"currentDirection");s(this,"score");s(this,"speed");s(this,"isPaused");s(this,"touch");this.isPlaying=!1,this.isAbleChangeDirection=!0,this.gameIsOver=!1,this.isAppleEaten=!1,this.timeout,this.currentDirection="ArrowRight",this.score=0,this.speed=5,this.isPaused=!1,this.touch={isAble:!0,start:{x:0,y:0},end:{x:0,y:0},timeout:0},this.setupEventListeners()}setupEventListeners(){this.startButton.addEventListener("click",t=>{t.preventDefault(),this.toggleGame()}),window.addEventListener("keydown",t=>{t.preventDefault(),!this.isPlaying&&!this.gameIsOver?(t.key===" "||t.key==="ArrowUp"||t.key==="ArrowDown"||t.key==="ArrowLeft"||t.key==="ArrowRight")&&(this.changeDirection(t.key),this.toggleGame()):(this.changeDirection(t.key),t.key===" "&&this.toggleGame())}),window.addEventListener("resize",t=>{t.preventDefault(),this.background.resize(this.gameIsOver),this.snake.resize(this.isPlaying),this.apple.clear()}),window.addEventListener("resize",f(t=>{t.preventDefault(),this.apple.resize(this.snake.body)})),this.canvasContainer.addEventListener("touchstart",t=>{t.preventDefault(),this.touchHandler(t.type,t.changedTouches[0].screenX,t.changedTouches[0].screenY)}),this.canvasContainer.addEventListener("touchmove",t=>{t.preventDefault(),this.touchHandler(t.type,t.changedTouches[0].screenX,t.changedTouches[0].screenY)}),this.canvasContainer.addEventListener("touchend",t=>{t.preventDefault(),this.touchHandler(t.type,t.changedTouches[0].screenX,t.changedTouches[0].screenY)}),this.optionsButton.addEventListener("click",t=>{t.preventDefault(),this.openSettings()}),this.optionsButtonClose.addEventListener("click",t=>{t.preventDefault(),this.closeSettings()}),this.decreaseButton.addEventListener("click",t=>{t.preventDefault(),this.decreaseSpeed()}),this.increaseButton.addEventListener("click",t=>{t.preventDefault(),this.increaseSpeed()})}touchHandler(t,o,i){const a=()=>{const r=C(this.touch);!this.isPlaying&&!this.gameIsOver?(r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight")&&(this.changeDirection(r),this.toggleGame()):this.changeDirection(r)};t==="touchstart"&&(this.touch.start.x=o,this.touch.start.y=i,this.touch.timeout=setTimeout(()=>{this.touch.isAble=!1,this.touch.start.x!==this.touch.end.x&&this.touch.start.y!==this.touch.end.y&&a()},100)),t==="touchmove"&&this.touch.isAble&&(this.touch.end.x=o,this.touch.end.y=i),t==="touchend"&&(this.touch.isAble&&this.touch.start.x!==this.touch.end.x&&this.touch.start.y!==this.touch.end.y&&this.touch.end.x!==0&&this.touch.end.y!==0&&a(),clearTimeout(this.touch.timeout),this.touch.isAble=!0)}startGame(){this.isPlaying=!0,this.setPlayButton("pause"),this.moveSnake()}pauseGame(){this.isPlaying=!1,this.setPlayButton("play"),clearTimeout(this.timeout)}toggleGame(){this.gameIsOver?this.resetTheGame():this.isPlaying?this.pauseGame():this.startGame()}moveSnake(){this.snake.move(this.currentDirection,this.isAppleEaten),this.checkIntersection(),this.isPlaying&&(this.snake.render(),this.isAppleEaten&&(this.isAppleEaten=!1),this.checkAppleDevour(),this.isAbleChangeDirection=!0,this.timeout=setTimeout(()=>{this.moveSnake()},1e3/this.speed))}changeDirection(t){this.isAbleChangeDirection&&(t==="ArrowLeft"&&this.currentDirection!=="ArrowRight"||t==="ArrowRight"&&this.currentDirection!=="ArrowLeft"||t==="ArrowDown"&&this.currentDirection!=="ArrowUp"||t==="ArrowUp"&&this.currentDirection!=="ArrowDown")&&(this.currentDirection=t,this.isAbleChangeDirection=!1)}checkIntersection(){const t=this.snake.body[this.snake.body.length-1];(t.x===this.columnCount||t.x<0||t.y===this.rowCount||t.y<0)&&this.setGameIsOver();const o=this.snake.body.slice(0,-1);for(let i=0;i<o.length;i++)o[i].x===t.x&&o[i].y===t.y&&this.setGameIsOver()}checkAppleDevour(){const t=this.snake.body[this.snake.body.length-1];t.x===this.apple.position.x&&t.y===this.apple.position.y&&(this.isAppleEaten=!0,this.score=this.score+this.speed,this.scoreContent.textContent=this.score.toString().padStart(4,"0"),this.apple.init(this.snake.body))}setGameIsOver(){this.isPlaying=!1,this.gameIsOver=!0,clearTimeout(this.timeout),this.setPlayButton("reset"),this.background.render()}resetTheGame(){this.snake.init(),this.setPlayButton("play"),this.gameIsOver=!1,this.currentDirection="ArrowRight",this.background.clear(),this.score=0,this.scoreContent.textContent=this.score.toString().padStart(4,"0")}openSettings(){this.isPlaying&&(this.pauseGame(),this.isPaused=!0),this.optionsSpeed.textContent=this.speed.toString(),this.toggleOptions(!0)}increaseSpeed(){this.speed<20&&(this.speed++,this.optionsSpeed.textContent=this.speed.toString())}decreaseSpeed(){this.speed>1&&(this.speed--,this.optionsSpeed.textContent=this.speed.toString())}closeSettings(){this.isPaused&&(this.isPaused=!1,this.startGame()),this.toggleOptions(!1)}}new P;
