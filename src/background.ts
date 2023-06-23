class Background {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  color: string;

  blockCount: number;
  blockWidth: number;

  constructor(color: string) {
    this.canvas = document.querySelector("#background") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.color = color;

    this.blockCount = 20;
    this.blockWidth = this.canvas.clientWidth / this.blockCount;
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(
        0,
        0,
        this.canvas.clientWidth,
        this.canvas.clientHeight
      );
      this.context.fillStyle = this.color;
      this.context.fillRect(
        0,
        0,
        this.canvas.clientWidth,
        this.canvas.clientHeight
      );
    }
  }
}

export default Background;
