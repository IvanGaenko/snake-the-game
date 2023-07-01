import { Body } from "./snake";

class Apple {
  container: HTMLElement;
  columnCount: number;
  rowCount: number;
  partWidth: number;
  partHeight: number;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  position: {
    x: number;
    y: number;
  };
  snakeBody: Body;

  constructor(
    body: Body,
    container: HTMLElement,
    columnCount: number,
    rowCount: number,
    partWidth: number,
    partHeight: number
  ) {
    this.container = container;
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.partWidth = partWidth;
    this.partHeight = partHeight;

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
    console.log("apple", this.canvas.width, this.canvas.height);
    console.log("apple col", this.columnCount, this.rowCount);
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

  resize(body: Body) {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    this.init(body);
  }

  clear() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  render() {
    console.log("apple render", this.canvas.width, this.canvas.height);
    if (this.context !== null && this.canvas !== null) {
      this.clear();

      this.context.beginPath();
      this.context.fillStyle = "rgba(255, 0, 0, 0.7)";

      const round = Math.floor(
        this.partWidth < this.partHeight
          ? this.partWidth / 2
          : this.partHeight / 2
      );

      this.context.roundRect(
        this.position.x * this.partWidth,
        this.position.y * this.partHeight,
        this.partWidth - 1,
        this.partHeight - 1,
        [round]
      );
      this.context.fill();
    }
  }
}

export default Apple;
