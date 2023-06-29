import { debounce, getSwipeDirection } from "./helpers";
import { Touch } from "./types";

import UIRenderer from "./UIRenderer";

class SnakeApp extends UIRenderer {
  isPlaying: boolean;
  isAbleChangeDirection: boolean;
  gameIsOver: boolean;
  isAppleEaten: boolean;
  timeout: number | undefined;
  currentDirection: string;
  score: number;
  speed: number;

  touch: Touch;

  constructor() {
    super();

    this.isPlaying = false;
    this.isAbleChangeDirection = true;
    this.gameIsOver = false;
    this.isAppleEaten = false;
    this.timeout;
    this.currentDirection = "ArrowRight";
    this.score = 0;
    this.speed = 5;

    this.touch = {
      isAble: true,
      start: { x: 0, y: 0 },
      end: { x: 0, y: 0 },
      timeout: 0
    };

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

    window.addEventListener("resize", (e) => {
      e.preventDefault();
      this.background.resize(this.gameIsOver);
      this.snake.resize(this.isPlaying);
      this.apple.clear();
    });

    window.addEventListener(
      "resize",
      debounce((e) => {
        e.preventDefault();
        this.apple.resize(this.snake.body);
      })
    );

    this.canvasContainer.addEventListener("touchstart", (e) => {
      e.preventDefault();

      this.touchHandler(
        e.type,
        e.changedTouches[0].screenX,
        e.changedTouches[0].screenY
      );
    });

    this.canvasContainer.addEventListener("touchmove", (e) => {
      e.preventDefault();

      this.touchHandler(
        e.type,
        e.changedTouches[0].screenX,
        e.changedTouches[0].screenY
      );
    });

    this.canvasContainer.addEventListener("touchend", (e) => {
      e.preventDefault();

      this.touchHandler(
        e.type,
        e.changedTouches[0].screenX,
        e.changedTouches[0].screenY
      );
    });

    this.optionsButton.addEventListener("click", (e: Event) => {
      e.preventDefault();
      this.toggleOptions(true);
    });

    this.optionsButtonClose.addEventListener("click", (e: Event) => {
      e.preventDefault();
      this.toggleOptions(false);
    });
  }

  touchHandler(type: string, screenX: number, screenY: number) {
    const changeDirectionSwipe = () => {
      const direction = getSwipeDirection(this.touch);
      if (!this.isPlaying) {
        this.changeDirection(direction);
        this.toggleGame();
      } else {
        this.changeDirection(direction);
      }
    };

    if (type === "touchstart") {
      this.touch.start.x = screenX;
      this.touch.start.y = screenY;

      this.touch.timeout = setTimeout(() => {
        this.touch.isAble = false;

        if (
          this.touch.start.x !== this.touch.end.x &&
          this.touch.start.y !== this.touch.end.y
        ) {
          changeDirectionSwipe();
        }
      }, 150);
    }

    if (type === "touchmove") {
      if (this.touch.isAble) {
        this.touch.end.x = screenX;
        this.touch.end.y = screenY;
      }
    }

    if (type === "touchend") {
      if (this.touch.isAble) {
        if (
          this.touch.start.x !== this.touch.end.x &&
          this.touch.start.y !== this.touch.end.y &&
          this.touch.end.x !== 0 &&
          this.touch.end.y !== 0
        ) {
          changeDirectionSwipe();
        }
      }

      clearTimeout(this.touch.timeout);
      this.touch.isAble = true;
    }
  }

  toggleGame(): void {
    if (!this.gameIsOver) {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.setPlayButton("pause");
        this.moveSnake();
      } else {
        this.isPlaying = false;
        this.setPlayButton("play");
        clearTimeout(this.timeout);
      }
    } else {
      this.resetTheGame();
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
      }, 1000 / this.speed);
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
      this.setGameIsOver();
    }

    const snakeBody = this.snake.body.slice(0, -1);
    for (let i = 0; i < snakeBody.length; i++) {
      if (snakeBody[i].x === snakeHead.x && snakeBody[i].y === snakeHead.y) {
        this.setGameIsOver();
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
      this.score = this.score + this.speed;
      this.scoreContent.textContent = this.score.toString().padStart(4, "0");

      this.apple.init(this.snake.body);
    }
  }

  setGameIsOver() {
    this.isPlaying = false;
    this.gameIsOver = true;
    clearTimeout(this.timeout);
    this.setPlayButton("reset");
    this.background.render();
    return;
  }

  resetTheGame() {
    this.snake.init();
    this.setPlayButton("play");
    this.gameIsOver = false;
    this.currentDirection = "ArrowRight";
    this.background.clear();
    this.score = 0;
    this.scoreContent.textContent = this.score.toString().padStart(4, "0");
  }

  toggleSettings() {
    console.log("settings");
  }
}

new SnakeApp();
