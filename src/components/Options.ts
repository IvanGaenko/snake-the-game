import close from "../icons/close.png";

class Options {
  render(): HTMLElement {
    const div = document.createElement("div");
    div.className = "options-container";
    div.innerHTML = `
      <div class="options-content">
      <header class="options-header">
        <div class="options-logo">Snake</div>
        <button class="options-close">
          <img src="${close}" class="close-button" alt="close-button" />
        </button>
      </header>
      <div class="options-main">
        <span class="speed-value">Speed</span>
        <div class="decrease-increase-container">
          <button class="decrease-button">-</button>
          <span class="options-speed"></span>
          <button class="increase-button">+</button>
        </div>
      </div>
    </div>
    `;
    return div;
  }
}

export default Options;
