class Canvas {
  canvasContainer: HTMLElement;

  constructor(canvasContainer: HTMLElement) {
    this.canvasContainer = canvasContainer;
  }

  render(): void {
    const background = document.createElement("canvas");
    const snake = document.createElement("canvas");
    const apple = document.createElement("canvas");

    background.id = "background";
    snake.id = "snake";
    apple.id = "apple";

    // background.width = this.canvasContainer.clientWidth;
    // background.height = this.canvasContainer.clientHeight;
    // snake.width = this.canvasContainer.clientWidth;
    // snake.height = this.canvasContainer.clientHeight;
    // apple.width = this.canvasContainer.clientWidth;
    // apple.height = this.canvasContainer.clientHeight;
    background.width = 300;
    background.height = 300;
    snake.width = 300;
    snake.height = 300;
    apple.width = 300;
    apple.height = 300;

    this.canvasContainer.appendChild(background);
    this.canvasContainer.appendChild(snake);
    this.canvasContainer.appendChild(apple);
  }
}

export default Canvas;
