class Snake {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;

  blockWidth: number;

  body: {
    x: number;
    y: number;
  }[];

  constructor(blockWidth: number) {
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = blockWidth;
    this.body = [
      { x: 7, y: 0 },
      { x: 6, y: 0 },
    ];
  }

  // move() {}

  render() {
    if (this.context !== null && this.canvas !== null) {
      for (let i = 0; i < this.body.length; i++) {
        this.context.fillStyle = i === 0 ? "yellow" : "blue";
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
