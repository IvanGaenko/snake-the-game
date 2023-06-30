import "./style.css";

import Header from "./components/Header";
import Main from "./components/Main";

import Background from "./background";
import Snake from "./snake";
import Apple from "./apple";
import Options from "./components/Options";

class UIRenderer {
  container: HTMLElement;
  content: HTMLElement;

  background: InstanceType<typeof Background>;
  snake: InstanceType<typeof Snake>;
  apple: InstanceType<typeof Apple>;

  canvasContainer: HTMLElement;
  startButton: HTMLButtonElement;
  optionsButton: HTMLButtonElement;
  optionsButtonClose: HTMLButtonElement;
  decreaseButton: HTMLButtonElement;
  increaseButton: HTMLButtonElement;

  playImage: HTMLImageElement;
  pauseImage: HTMLImageElement;
  resetImage: HTMLImageElement;

  scoreContent: HTMLElement;
  optionsContainer: HTMLElement;
  optionsSpeed: HTMLElement;

  constructor() {
    this.container = document.querySelector(".container") as HTMLElement;
    this.content = document.querySelector(".content") as HTMLElement;
    this.setupUI();

    this.canvasContainer = document.querySelector(
      ".canvas-container"
    ) as HTMLElement;

    this.startButton = document.querySelector(".start") as HTMLButtonElement;
    this.optionsButton = document.querySelector(
      ".options"
    ) as HTMLButtonElement;
    this.optionsButtonClose = document.querySelector(
      ".options-close"
    ) as HTMLButtonElement;
    this.decreaseButton = document.querySelector(
      ".decrease-button"
    ) as HTMLButtonElement;
    this.increaseButton = document.querySelector(
      ".increase-button"
    ) as HTMLButtonElement;

    this.playImage = document.querySelector(".play-button") as HTMLImageElement;
    this.pauseImage = document.querySelector(
      ".pause-button"
    ) as HTMLImageElement;
    this.resetImage = document.querySelector(
      ".reset-button"
    ) as HTMLImageElement;

    this.scoreContent = document.querySelector(".score") as HTMLElement;
    this.optionsContainer = document.querySelector(
      ".options-container"
    ) as HTMLElement;
    this.optionsSpeed = document.querySelector(".options-speed") as HTMLElement;

    this.background = new Background();
    this.snake = new Snake();
    this.apple = new Apple(this.snake.body);

    this.initCanvasElements();
  }

  setupUI() {
    const components = [Header, Main];
    for (let i = 0; i < components.length; i++) {
      const Component = components[i];
      const UIcomponent = new Component().render();

      this.content.appendChild(UIcomponent);
    }
    this.container.appendChild(new Options().render());
  }

  initCanvasElements() {
    this.snake.render();
    this.apple.render();
  }

  setPlayButton(type: string) {
    this.playImage.style.display = "none";
    this.pauseImage.style.display = "none";
    this.resetImage.style.display = "none";

    switch (type) {
      case "play":
        this.playImage.style.display = "block";
        break;

      case "pause":
        this.pauseImage.style.display = "block";
        break;

      case "reset":
        this.resetImage.style.display = "block";
        break;

      default:
        break;
    }
  }

  toggleOptions(isShown: boolean) {
    this.optionsContainer.style.display = isShown ? "flex" : "none";
  }
}

export default UIRenderer;
