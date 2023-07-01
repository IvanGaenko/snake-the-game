class Background {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.canvas = document.querySelector("#background") as HTMLCanvasElement;
    // this.canvas.width = this.container.clientWidth;
    // this.canvas.height = this.container.clientHeight;
    this.context = this.canvas.getContext("2d");

    console.log("bac", this.canvas.width, this.canvas.height);
    // console.log("apple col", this.columnCount, this.rowCount);
  }

  resize(gameIsOver: boolean) {
    console.log("background resize");
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    if (gameIsOver) {
      this.render();
    }
  }

  clear() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      const fontHeight = Math.round(
        Math.min(this.canvas.height, this.canvas.width) / 6
      );

      this.context.fillStyle = "white";
      this.context.font = `${fontHeight}px Inter`;
      const gameOver = "Game Over!";
      const text = this.context.measureText(gameOver);

      this.context.fillText(
        gameOver,
        this.canvas.width / 2 - text.width / 2,
        this.canvas.height / 2
      );
    }
  }
}

export default Background;
