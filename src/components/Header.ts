import play from "../icons/play.png";
import pause from "../icons/pause.png";
import reset from "../icons/reset.png";
import options from "../icons/options.png";

class Header {
  render(): HTMLElement {
    const header = document.createElement("header");
    const headerContainer = document.createElement("div");
    const score = document.createElement("div");

    const startButton = document.createElement("button");
    const optionsButton = document.createElement("button");

    const playImg = document.createElement("img");
    const pauseImg = document.createElement("img");
    const resetImg = document.createElement("img");
    const optionsImg = document.createElement("img");

    header.className = "header";
    headerContainer.className = "header-container";
    score.className = "score";

    startButton.className = "start";
    optionsButton.className = "options";

    playImg.className = "play-button";
    pauseImg.className = "pause-button";
    resetImg.className = "reset-button";
    optionsImg.className = "options-button";

    playImg.src = play;
    pauseImg.src = pause;
    resetImg.src = reset;
    optionsImg.src = options;

    playImg.alt = "play-button";
    pauseImg.alt = "pause-button";
    resetImg.alt = "reset-button";
    optionsImg.alt = "options-button";

    score.innerHTML = "0000";

    startButton.appendChild(playImg);
    startButton.appendChild(pauseImg);
    startButton.appendChild(resetImg);
    optionsButton.appendChild(optionsImg);

    headerContainer.appendChild(startButton);
    headerContainer.appendChild(score);
    headerContainer.appendChild(optionsButton);

    header.appendChild(headerContainer);

    return header;
  }
}

export default Header;
