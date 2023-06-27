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

  showNotification() {
    if (this.context !== null && this.canvas !== null) {
      this.context.fillStyle = "rgba(150, 120, 150, .5)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      console.log(Math.round(this.canvas.height / 10));

      this.context.fillStyle = "white";
      this.context.font = "36px Inter";
      // this.context.font = `${Math.round(this.canvas.height / 10)}px Inter`;
      this.context.fillText(
        "Game Over!",
        this.canvas.width / 7,
        this.canvas.height / 2
      );
    }
  }

  resize() {
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    // this.render();
  }

  render(color = this.color) {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = color;
      // this.context.fillStyle = "rgba(255, 255, 255, .35)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

export default Background;
