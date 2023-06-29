import CanvasContainer from "./CanvasContainer";

class Background extends CanvasContainer {
  constructor() {
    super();
    this.canvas = document.querySelector("#background") as HTMLCanvasElement;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.context = this.canvas.getContext("2d");
  }

  resize(gameIsOver: boolean) {
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
      this.context.fillStyle = "rgba(150, 120, 150, .5)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

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
