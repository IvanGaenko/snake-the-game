import CanvasContainer from "./CanvasContainer";
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

class Snake extends CanvasContainer {
  body: Body;
  color: string;

  constructor(
    body: Body = JSON.parse(JSON.stringify(defaultBody)),
    color = "blue"
  ) {
    super();
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.context = this.canvas.getContext("2d");

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

  resize() {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    this.render();
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = 0; i < this.body.length; i++) {
        this.context.fillStyle =
          i === this.body.length - 1 ? "yellow" : this.color;
        this.context.fillRect(
          this.body[i].x * this.partWidth,
          this.body[i].y * this.partHeight,
          this.partWidth - 1,
          this.partHeight - 1
        );
      }
    }
  }
}

export default Snake;
