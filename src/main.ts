import "./style.css";
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import Background from "./background";
import Snake from "./snake";
import Apple from "./apple";

class SnakeApp {
  background: InstanceType<typeof Background>;
  snake: InstanceType<typeof Snake>;
  apple: InstanceType<typeof Apple>;

  startButton: HTMLButtonElement;
  upButton: HTMLElement;
  downButton: HTMLElement;
  leftButton: HTMLElement;
  rightButton: HTMLElement;

  isPlaying: boolean;
  timeout: number | undefined;

  constructor() {
    this.background = new Background("green");
    this.snake = new Snake(this.background.blockWidth);
    this.apple = new Apple(this.background.blockWidth);

    this.startButton = document.querySelector(".start") as HTMLButtonElement;
    this.upButton = document.querySelector(".button-up") as HTMLElement;
    this.downButton = document.querySelector(".button-down") as HTMLElement;
    this.leftButton = document.querySelector(".button-left") as HTMLElement;
    this.rightButton = document.querySelector(".button-right") as HTMLElement;

    this.isPlaying = false;
    this.timeout;

    this.init();
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    this.startButton.addEventListener("click", () => this.toggleGame());

    window.addEventListener("keydown", (e) => this.changeDirection(e.key));

    this.upButton.addEventListener("click", () =>
      this.changeDirection("ArrowUp")
    );
    this.downButton.addEventListener("click", () =>
      this.changeDirection("ArrowDown")
    );
    this.leftButton.addEventListener("click", () =>
      this.changeDirection("ArrowLeft")
    );
    this.rightButton.addEventListener("click", () =>
      this.changeDirection("ArrowRight")
    );
  }

  toggleGame(): void {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      console.log("start");
      this.changeDirection("ArrowRight");
    } else {
      clearTimeout(this.timeout);
    }
  }

  changeDirection(direction: string): void {
    this.snake = new Snake(
      this.background.blockWidth,
      this.snake.body,
      this.snake.currentDirection
    );
    this.snake.move(direction);

    if (this.isPlaying) {
      console.log("setuping", direction, this.snake.currentDirection);

      this.timeout = window.setTimeout(
        () => this.changeDirection(direction),
        1000
      );
    }
  }

  init(): void {
    this.background.render();
    this.snake.render();
    this.apple.render();
    console.log(this.background.blockWidth);
  }
}

new SnakeApp();
