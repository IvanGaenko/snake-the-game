import { setSnakeHeadPosition } from "./helpers";

export interface BodyContent {
  x: number;
  y: number;
}

export type Body = BodyContent[];

//const defaultBody = [
  //{ x: 13, y: 9 },
  //{ x: 14, y: 9 },
  //{ x: 15, y: 9 }
//];

class Snake {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;

  blockWidth: number;

  body: Body;

  constructor(
    blockWidth: number,
    body: Body
  ) {
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = blockWidth;
    this.body = body;
    //console.log("new snake", this.body);
  }

  move(direction: string, isGrowUp = false) {
    const snakeHead = setSnakeHeadPosition(
      this.body[this.body.length - 1],
      direction
    );

    if (!isGrowUp) {
      this.body.shift();
    }
    
    this.body.push(snakeHead);
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(
        0,
        0,
        this.canvas.clientWidth,
        this.canvas.clientHeight
      );
      for (let i = 0; i < this.body.length; i++) {
        this.context.fillStyle = i === this.body.length - 1 ? "yellow" : "blue";
        this.context.fillRect(
          this.body[i].x * this.blockWidth,
          this.body[i].y * this.blockWidth,
          this.blockWidth - 2,
          this.blockWidth - 2
        );
      }
    }
  }
}

export default Snake;
