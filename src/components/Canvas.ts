class Canvas {
  canvasContainer: HTMLElement;

  constructor(canvasContainer: HTMLElement) {
    this.canvasContainer = canvasContainer;
  }

  render(): void {
    const container = this.canvasContainer.getBoundingClientRect();
    const background = document.createElement("canvas");
    const snake = document.createElement("canvas");
    const apple = document.createElement("canvas");

    background.id = "background";
    snake.id = "snake";
    apple.id = "apple";

    background.width = container.width;
    background.height = container.height;
    snake.width = container.width;
    snake.height = container.height;
    apple.width = container.width;
    apple.height = container.height;

    this.canvasContainer.appendChild(background);
    this.canvasContainer.appendChild(snake);
    this.canvasContainer.appendChild(apple);
  }
}

export default Canvas;
