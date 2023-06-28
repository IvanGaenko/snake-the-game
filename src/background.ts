import CanvasContainer from "./CanvasContainer";

class Background extends CanvasContainer {
  color: string;

  constructor(color: string) {
    super();
    this.canvas = document.querySelector("#background") as HTMLCanvasElement;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;
    this.context = this.canvas.getContext("2d");
    this.color = color;
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
      this.context.fillStyle = "rgba(150, 120, 150, .5)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.fillStyle = "white";
      this.context.font = `${Math.round(this.canvas.height / 6)}px Inter`;
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
