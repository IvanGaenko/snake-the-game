class Apple {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  blockWidth: number;

  position: {
    x: number;
    y: number;
  };

  constructor(blockWidth: number) {
    this.canvas = document.querySelector("#apple") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    this.blockWidth = blockWidth;

    this.position = {
      x: 5,
      y: 5,
    };
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);
      this.context.fillStyle = "red";
      this.context.fillRect(
        this.position.x * this.blockWidth,
        this.position.y * this.blockWidth,
        this.blockWidth,
        this.blockWidth
      );
    }
  }
}

export default Apple;
