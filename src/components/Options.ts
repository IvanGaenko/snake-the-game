class Options {
  render(): HTMLElement {
    const div = document.createElement("div");
    div.className = "options-container";
    div.innerHTML = `
       <div class="options-content">
        <button class="options-close">
          <img src="/close.png" class="close-button" alt="close-button" />
        </button>
       </div>
    `;
    return div;
  }
}

export default Options;
