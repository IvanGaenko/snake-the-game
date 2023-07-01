class Main {
  render(): HTMLElement {
    const main = document.createElement("main");
    // const background = document.createElement("canvas");
    // const snake = document.createElement("canvas");
    // const apple = document.createElement("canvas");

    main.className = "canvas-container";
    // background.id = "background";
    // snake.id = "snake";
    // apple.id = "apple";

    // main.appendChild(background);
    // main.appendChild(snake);
    // main.appendChild(apple);

    return main;
  }
}

export default Main;
