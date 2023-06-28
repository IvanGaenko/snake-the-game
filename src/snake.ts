import CanvasContainer from "./CanvasContainer";
import { setSnakeHeadPosition } from "./helpers";

export interface BodyContent {
  x: number;
  y: number;
}

export type Body = BodyContent[];

class Snake extends CanvasContainer {
  body: Body;
  color: string;

  constructor(body?: Body, color = "rgba(0, 0, 255, 0.8)") {
    super();
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.context = this.canvas.getContext("2d");

    this.body = body === undefined ? this.getDefaultSnake() : body;
    this.color = color;
  }

  getDefaultSnake(): Body {
    const body = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ];
    for (let i = 0; i < body.length; i++) {
      body[i].x = Math.floor(this.columnCount / 2) + i - 1;
      body[i].y = Math.round(this.rowCount / 2);
    }

    return body;
  }

  init() {
    this.body = this.getDefaultSnake();
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

  resize(isPlaying: boolean) {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    if (!isPlaying) {
      this.init();
    } else {
      this.render();
    }
  }

  clear() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  render(): void {
    if (this.context !== null && this.canvas !== null) {
      this.clear();

      const round = Math.floor(
        this.partWidth < this.partHeight
          ? this.partWidth / 5
          : this.partHeight / 5
      );

      for (let i = 0; i < this.body.length; i++) {
        this.context.beginPath();

        this.context.fillStyle =
          i === this.body.length - 1 ? "rgba(0, 255, 0, 0.8)" : this.color;

        this.context.roundRect(
          this.body[i].x * this.partWidth,
          this.body[i].y * this.partHeight,
          this.partWidth - 1,
          this.partHeight - 1,
          [round]
        );
        this.context.fill();
      }
    }
  }
}

export default Snake;
