class Header {
  render(): HTMLElement {
    const header = document.createElement("header");
    header.className = "header";
    header.innerHTML = `
    <div class="header-container">
      <button class="start">
        <img src="/play.png" class="play-button" alt="play-button" />
        <img src="/pause.png" class="pause-button" alt="pause-buttom" />
        <img src="/reset.png" class="reset-button" alt="reset-buttom" />
      </button>
      <div class="score">0000</div>
      <button class="options">
        <img
          src="/options.png"
          class="options-button"
          alt="options-button"
        />
      </button>
    </div>
  `;
    return header;
  }
}

export default Header;
