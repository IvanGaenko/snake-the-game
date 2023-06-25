import { Body } from "./snake";

class Apple {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  blockWidth: number;
  blockCount: number;

  position: {
    x: number;
    y: number;
  };
  snakeBody: Body;

  constructor(blockWidth: number, blockCount: number, body: Body) {
    this.canvas = document.querySelector("#apple") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.blockWidth = blockWidth;
    this.blockCount = blockCount;
    this.position = {
      x: 0,
      y: 0
    };
    this.snakeBody = body;
    
    this._generatePosition();
  }
  
  init() {
    this._generatePosition();
    this.render();
  }
  
  _generatePosition() {
    if (this.snakeBody.length === 0) return;
    
    this.position = {
      x: Math.floor(Math.random() * this.blockCount),
      y: Math.floor(Math.random() * this.blockCount),
    };
    
    for (let i = 0; i < this.snakeBody.length; i++) {
      if (this.position.x === this.snakeBody[i].x && this.position.y === this.snakeBody[i].y) {
        this._generatePosition();
      }
    }
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);
      this.context.fillStyle = "red";
      this.context.fillRect(
        this.position.x * this.blockWidth,
        this.position.y * this.blockWidth,
        this.blockWidth - 2,
        this.blockWidth - 2
      );
    }
  }
}

export default Apple;
