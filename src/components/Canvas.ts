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

    background.width = this.canvasContainer.clientWidth;
    background.height = this.canvasContainer.clientHeight;
    snake.width = this.canvasContainer.clientWidth;
    snake.height = this.canvasContainer.clientHeight;
    apple.width = this.canvasContainer.clientWidth;
    apple.height = this.canvasContainer.clientHeight;

    this.canvasContainer.appendChild(background);
    this.canvasContainer.appendChild(snake);
    this.canvasContainer.appendChild(apple);
  }
}

export default Canvas;
