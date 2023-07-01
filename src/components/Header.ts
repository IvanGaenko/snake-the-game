import play from "../icons/play.png";
import pause from "../icons/pause.png";
import reset from "../icons/reset.png";
import options from "../icons/options.png";

class Header {
  render(): HTMLElement {
    const header = document.createElement("header");
    header.className = "header";
    header.innerHTML = `
    <div class="header-container">
      <button class="start">
        <img src="/snake-the-game/${play}" class="play-button" alt="play-button" />
        <img src="/snake-the-game/${pause}" class="pause-button" alt="pause-buttom" />
        <img src="/snake-the-game/${reset}" class="reset-button" alt="reset-buttom" />
      </button>
      <div class="score">0000</div>
      <button class="options">
        <img
          src="/snake-the-game/${options}"
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
