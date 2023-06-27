import CanvasContainer from "./CanvasContainer";
import { Body } from "./snake";

class Apple extends CanvasContainer {
  position: {
    x: number;
    y: number;
  };
  snakeBody: Body;

  constructor(body: Body) {
    super();
    this.canvas = document.querySelector("#apple") as HTMLCanvasElement;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.context = this.canvas.getContext("2d");
    this.position = {
      x: 0,
      y: 0
    };
    this.snakeBody = body;

    this._generatePosition(this.snakeBody);
  }

  init(body: Body) {
    this._generatePosition(body);
    this.render();
  }

  _generatePosition(body: Body) {
    if (body.length === 0) return;

    this.position = {
      x: Math.floor(Math.random() * this.columnCount),
      y: Math.floor(Math.random() * this.rowCount)
    };

    for (let i = 0; i < body.length; i++) {
      if (this.position.x === body[i].x && this.position.y === body[i].y) {
        this._generatePosition(body);
      }
    }
  }

  resize() {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    this.render();
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = "red";
      this.context.fillRect(
        this.position.x * this.partWidth,
        this.position.y * this.partHeight,
        this.partWidth - 1,
        this.partHeight - 1
      );
    }
  }
}

export default Apple;
