const desiredBlockSize = 20;

class CanvasContainer {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;

  columnCount: number;
  rowCount: number;
  partWidth: number;
  partHeight: number;

  constructor() {
    this.container = document.querySelector(".canvas-container") as HTMLElement;
    this.canvas = document.createElement("canvas") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.columnCount = 0;
    this.rowCount = 0;
    this.partWidth = 0;
    this.partHeight = 0;

    this.calculateDimensions();

    window.addEventListener("resize", () => {
      this.calculateDimensions();
    });
  }

  calculateDimensions() {
    this.columnCount = Math.round(
      this.container.clientWidth / desiredBlockSize
    );
    this.rowCount = Math.round(this.container.clientHeight / desiredBlockSize);

    this.partWidth = this.container.clientWidth / this.columnCount;

    this.partHeight = this.container.clientHeight / this.rowCount;
  }
}

export default CanvasContainer;
