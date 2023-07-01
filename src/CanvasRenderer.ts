import UIRenderer from "./UIRenderer";

import Canvas from "./components/Canvas";
import Background from "./background";
import Snake from "./snake";
import Apple from "./apple";

const desiredBlockSize = 20;

class CanvasRenderer extends UIRenderer {
  background: InstanceType<typeof Background>;
  snake: InstanceType<typeof Snake>;
  apple: InstanceType<typeof Apple>;

  columnCount: number;
  rowCount: number;
  partWidth: number;
  partHeight: number;

  constructor() {
    super();
    this.columnCount = 0;
    this.rowCount = 0;
    this.partWidth = 0;
    this.partHeight = 0;

    this.calculateDimensions();
    this.setupCanvasElements();

    this.background = new Background(this.canvasContainer);
    this.snake = new Snake(
      this.canvasContainer,
      this.columnCount,
      this.rowCount,
      this.partWidth,
      this.partHeight
    );
    this.apple = new Apple(
      this.snake.body,
      this.canvasContainer,
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
      this.canvasContainer.clientWidth / desiredBlockSize
    );
    this.rowCount = Math.round(
      this.canvasContainer.clientHeight / desiredBlockSize
    );

    this.partWidth = this.canvasContainer.clientWidth / this.columnCount;

    this.partHeight = this.canvasContainer.clientHeight / this.rowCount;
  }

  setupCanvasElements() {
    new Canvas(this.canvasContainer).render();
  }

  initCanvasElements() {
    this.snake.render();
    this.apple.render();
  }
}

export default CanvasRenderer;
