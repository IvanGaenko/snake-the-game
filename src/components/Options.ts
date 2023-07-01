import close from "../icons/close.png";

class Options {
  render(): HTMLElement {
    const optionsContainer = document.createElement("div");
    const optionsContent = document.createElement("div");
    const optionsHeader = document.createElement("header");
    const optionsLogo = document.createElement("div");
    const optionsMain = document.createElement("div");
    const speedValue = document.createElement("span");
    const optionsSpeed = document.createElement("span");
    const decreaseIncreaseContainer = document.createElement("div");

    const buttonClose = document.createElement("button");
    const decreaseButton = document.createElement("button");
    const increaseButton = document.createElement("button");

    const closeImg = document.createElement("img");

    optionsContainer.className = "options-container";
    optionsContent.className = "options-content";
    optionsHeader.className = "options-header";
    optionsLogo.className = "options-logo";
    optionsMain.className = "options-main";
    speedValue.className = "speed-value";
    optionsSpeed.className = "options-speed";
    decreaseIncreaseContainer.className = "decrease-increase-container";

    buttonClose.className = "options-close";
    decreaseButton.className = "decrease-button";
    increaseButton.className = "increase-button";

    closeImg.className = "close-button";

    closeImg.src = close;
    closeImg.alt = "close-button";

    optionsLogo.innerHTML = "Snake";
    speedValue.innerHTML = "Speed";
    decreaseButton.innerHTML = "-";
    increaseButton.innerHTML = "+";

    buttonClose.appendChild(closeImg);

    decreaseIncreaseContainer.appendChild(decreaseButton);
    decreaseIncreaseContainer.appendChild(optionsSpeed);
    decreaseIncreaseContainer.appendChild(increaseButton);

    optionsMain.appendChild(speedValue);
    optionsMain.appendChild(decreaseIncreaseContainer);

    optionsHeader.appendChild(optionsLogo);
    optionsHeader.appendChild(buttonClose);

    optionsContent.appendChild(optionsHeader);
    optionsContent.appendChild(optionsMain);

    optionsContainer.appendChild(optionsContent);

    return optionsContainer;
  }
}

export default Options;
