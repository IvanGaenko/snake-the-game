import "./style.css";
import Background from "./background";
import Snake from "./snake";
import Apple from "./apple";

class SnakeApp {
  background: InstanceType<typeof Background>;
  snake: InstanceType<typeof Snake>;
  apple: InstanceType<typeof Apple>;

  startButton: HTMLButtonElement;
  playImage: HTMLImageElement;
  pauseImage: HTMLImageElement;
  resetImage: HTMLImageElement;

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
    this.snake = new Snake();
    this.apple = new Apple(this.snake.body);

    this.startButton = document.querySelector(".start") as HTMLButtonElement;
    this.playImage = document.querySelector(".play-button") as HTMLImageElement;
    this.pauseImage = document.querySelector(
      ".pause-button"
    ) as HTMLImageElement;
    this.resetImage = document.querySelector(
      ".reset-button"
    ) as HTMLImageElement;

    this.upButton = document.querySelector(".button-up") as HTMLElement;
    this.downButton = document.querySelector(".button-down") as HTMLElement;
    this.leftButton = document.querySelector(".button-left") as HTMLElement;
    this.rightButton = document.querySelector(".button-right") as HTMLElement;

    this.scoreContent = document.querySelector(".score") as HTMLElement;

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
    this.startButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleGame();
    });

    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (!this.isPlaying) {
        this.changeDirection(e.key);
        this.toggleGame();
      } else {
        this.changeDirection(e.key);
        if (e.key === " ") {
          this.toggleGame();
        }
      }
    });

    window.addEventListener("resize", () => {
      this.background.calculateDimensions();
      this.background.resize();
      this.snake.resize();
      this.apple.resize();
    });

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

        this.resetImage.style.display = "none";
        this.playImage.style.display = "none";
        this.pauseImage.style.display = "block";

        this.moveSnake();
      } else {
        this.isPlaying = false;
        this.resetImage.style.display = "none";
        this.pauseImage.style.display = "none";
        this.playImage.style.display = "block";
        clearTimeout(this.timeout);
      }
    } else {
      this.snake.init();
      this.resetImage.style.display = "none";
      this.pauseImage.style.display = "none";
      this.playImage.style.display = "block";
      this.gameIsOver = false;
      this.currentDirection = "ArrowRight";
      // this.background.clear();
      this.score = 0;
      this.scoreContent.textContent = this.score.toString().padStart(4, "0");
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
    if (this.isAbleChangeDirection) {
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
      snakeHead.x === this.background.columnCount ||
      snakeHead.x < 0 ||
      snakeHead.y === this.background.rowCount ||
      snakeHead.y < 0
    ) {
      this.isPlaying = false;
      this.gameIsOver = true;
      clearTimeout(this.timeout);

      this.playImage.style.display = "none";
      this.pauseImage.style.display = "none";
      this.resetImage.style.display = "block";

      this.background.showNotification();
      return;
    }

    const snakeBody = this.snake.body.slice(0, -1);
    for (let i = 0; i < snakeBody.length; i++) {
      if (snakeBody[i].x === snakeHead.x && snakeBody[i].y === snakeHead.y) {
        this.isPlaying = false;
        this.gameIsOver = true;
        clearTimeout(this.timeout);

        this.playImage.style.display = "none";
        this.pauseImage.style.display = "none";
        this.resetImage.style.display = "block";

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
      this.scoreContent.textContent = this.score.toString().padStart(4, "0");

      this.apple.init(this.snake.body);
    }
  }

  init(): void {
    // this.background.render();
    // this.background.showNotification();
    this.snake.render();
    this.apple.render();
  }
}

new SnakeApp();
