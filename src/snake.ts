import { setSnakeHeadPosition } from "./helpers";

export interface BodyContent {
  x: number;
  y: number;
}

type Body = BodyContent[];

const defaultBody = [
  { x: 6, y: 0 },
  { x: 7, y: 0 }
];

class Snake {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;

  blockWidth: number;

  body: Body;
  currentDirection: string;

  constructor(
    blockWidth: number,
    body: Body = defaultBody,
    currentDirection = "ArrowRight"
  ) {
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = blockWidth;
    this.body = body;
    this.currentDirection = currentDirection;
  }

  move(direction: string) {
    console.log("direction", direction);

    const [snakeHead, directionShouldUpdate] = setSnakeHeadPosition(
      this.body[this.body.length - 1],
      direction,
      this.currentDirection
    );

    if (directionShouldUpdate && this.currentDirection !== direction) {
      this.currentDirection = direction;
    }

    this.body.shift();
    this.body.push(snakeHead);

    this.render();
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
          this.blockWidth,
          this.blockWidth
        );
      }
    }
  }
}

export default Snake;
