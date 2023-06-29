class Main {
  render(): HTMLElement {
    const main = document.createElement("main");
    main.className = "canvas-container";
    main.innerHTML = `
      <canvas id="background"></canvas>
      <canvas id="snake"></canvas>
      <canvas id="apple"></canvas>
  `;
    return main;
  }
}

export default Main;
