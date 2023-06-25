import "./style.css";
// import typescriptLogo from ''''./typescript.svg''''
// import viteLogo from ''''/vite.svg''''
// import { setupCounter } from ''''./counter.ts''''

// document.querySelector<HTMLDivElement>(''''#app'''')!.innerHTML = `
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

// setupCounter(document.querySelector<HTMLButtonElement>(''''#counter'''')!)

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

  scoreContent: HTMLElement;

  isPlaying: boolean;
  isAbleChangeDirection: boolean;
  gameIsOver: boolean;
  isAppleEaten: boolean;
  timeout: number | undefined;
  currentDirection: string;
  score: number;

  constructor() {
    this.background = new Background("green");
    this.snake = new Snake(this.background.blockWidth);
    this.apple = new Apple(
      this.background.blockWidth,
      this.background.blockCount,
      this.snake.body
    );

    this.startButton = document.querySelector(".start") as HTMLButtonElement;
    this.upButton = document.querySelector(".button-up") as HTMLElement;
    this.downButton = document.querySelector(".button-down") as HTMLElement;
    this.leftButton = document.querySelector(".button-left") as HTMLElement;
    this.rightButton = document.querySelector(".button-right") as HTMLElement;

    this.scoreContent = document.querySelector(".score-content") as HTMLElement;

    this.isPlaying = false;
    this.isAbleChangeDirection = true;
    this.gameIsOver = false;
    this.isAppleEaten = false;
    this.timeout;
    this.currentDirection = "ArrowRight";
    this.score = 0;

    this.init();
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    this.startButton.addEventListener("click", () => this.toggleGame());

    window.addEventListener("keydown", (e) =>
      e.key === " " ? this.toggleGame() : this.changeDirection(e.key)
    );

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
    if (!this.gameIsOver) {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.startButton.textContent = "Pause";
        this.moveSnake();
      } else {
        this.isPlaying = false;
        this.startButton.textContent = "Continue";
        clearTimeout(this.timeout);
      }
    } else {
      this.snake.init();
      this.startButton.textContent = "Start";
      this.gameIsOver = false;
      this.currentDirection = "ArrowRight";
      this.background.render();
      this.score = 0;
      this.scoreContent.textContent = this.score.toString();
    }
  }

  moveSnake() {
    this.snake.move(this.currentDirection, this.isAppleEaten);

    this.checkIntersection();

    if (this.isPlaying) {
      this.snake.render();

      if (this.isAppleEaten) this.isAppleEaten = false;
      this.checkAppleDevour();

      this.isAbleChangeDirection = true;

      this.timeout = setTimeout(() => {
        this.moveSnake();
      }, 400);
    }
  }

  changeDirection(direction: string): void {
    if (this.isPlaying && this.isAbleChangeDirection) {
      if (
        (direction === "ArrowLeft" && this.currentDirection !== "ArrowRight") ||
        (direction === "ArrowRight" && this.currentDirection !== "ArrowLeft") ||
        (direction === "ArrowDown" && this.currentDirection !== "ArrowUp") ||
        (direction === "ArrowUp" && this.currentDirection !== "ArrowDown")
      ) {
        this.currentDirection = direction;
        this.isAbleChangeDirection = false;
      }
    }
  }

  checkIntersection(): void {
    const snakeHead = this.snake.body[this.snake.body.length - 1];

    if (
      snakeHead.x === this.background.blockCount ||
      snakeHead.x < 0 ||
      snakeHead.y === this.background.blockCount ||
      snakeHead.y < 0
    ) {
      this.isPlaying = false;
      this.gameIsOver = true;
      clearTimeout(this.timeout);
      this.startButton.textContent = "Reset";
      this.background.showNotification();
      return;
    }

    const snakeBody = this.snake.body.slice(0, -1);
    for (let i = 0; i < snakeBody.length; i++) {
      if (snakeBody[i].x === snakeHead.x && snakeBody[i].y === snakeHead.y) {
        this.isPlaying = false;
        this.gameIsOver = true;
        clearTimeout(this.timeout);
        this.startButton.textContent = "Reset";
        this.background.showNotification();
        return;
      }
    }
  }

  checkAppleDevour() {
    const snakeHead = this.snake.body[this.snake.body.length - 1];
    if (
      snakeHead.x === this.apple.position.x &&
      snakeHead.y === this.apple.position.y
    ) {
      this.isAppleEaten = true;
      this.score = this.score + 1;
      this.scoreContent.textContent = this.score.toString();

      this.apple.init(this.snake.body);
    }
  }

  init(): void {
    this.background.render();
    this.snake.render();
    this.apple.render();
  }
}

new SnakeApp();
