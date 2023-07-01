const desiredBlockSize = 20;

import Background from "./background";
import Snake from "./snake";
import Apple from "./apple";
import UIRenderer from "./UIRenderer";

class CanvasRenderer extends UIRenderer {
  container: HTMLElement;

  background: InstanceType<typeof Background>;
  snake: InstanceType<typeof Snake>;
  apple: InstanceType<typeof Apple>;

  columnCount: number;
  rowCount: number;
  partWidth: number;
  partHeight: number;

  constructor() {
    super();
    this.container = document.querySelector(".canvas-container") as HTMLElement;

    this.columnCount = 0;
    this.rowCount = 0;
    this.partWidth = 0;
    this.partHeight = 0;

    this.calculateDimensions();

    this.background = new Background(this.container);
    this.snake = new Snake(
      this.container,
      this.columnCount,
      this.rowCount,
      this.partWidth,
      this.partHeight
    );
    this.apple = new Apple(
      this.snake.body,
      this.container,
      this.columnCount,
      this.rowCount,
      this.partWidth,
      this.partHeight
    );

    window.addEventListener("resize", () => {
      this.calculateDimensions();
    });

    this.initCanvasElements();
  }

  calculateDimensions() {
    this.columnCount = Math.round(
      this.container.clientWidth / desiredBlockSize
    );
    this.rowCount = Math.round(this.container.clientHeight / desiredBlockSize);

    this.partWidth = this.container.clientWidth / this.columnCount;

    this.partHeight = this.container.clientHeight / this.rowCount;
  }

  initCanvasElements() {
    this.snake.render();
    this.apple.render();
  }
}

export default CanvasRenderer;
