import { setSnakeHeadPosition } from "./helpers";

export interface BodyContent {
  x: number;
  y: number;
}

export type Body = BodyContent[];

const defaultBody = [
  { x: 8, y: 10 },
  { x: 9, y: 10 },
  { x: 10, y: 10 }
];

class Snake {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;

  blockWidth: number;

  body: Body;
  color: string;

  constructor(
    blockWidth: number,
    body: Body = JSON.parse(JSON.stringify(defaultBody)),
    color = "blue"
  ) {
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = blockWidth;
    this.body = body;
    this.color = color;
  }

  init() {
    this.body = JSON.parse(JSON.stringify(defaultBody));
    this.render();
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
        this.context.fillStyle =
          i === this.body.length - 1 ? "yellow" : this.color;
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
