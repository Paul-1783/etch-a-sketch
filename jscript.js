const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.querySelector(".renew");

button.addEventListener("click", () => {
  let pickedNumber = prompt("Please enter width and height of the grid:", "");
  if (pickedNumber != null) {
    const squareSize = 600 / pickedNumber;
    container.replaceChildren();
    for (let i = 0; i < pickedNumber; ++i) {
      const puffer = document.createElement("div");
      puffer.classList.add("puffer");
      container.appendChild(puffer);
      for (let i = 0; i < pickedNumber; ++i) {
        const lineBlock = document.createElement("div");
        lineBlock.classList.add("line");
        lineBlock.style.width = `${squareSize}px`;
        lineBlock.style.height = `${squareSize}px`;
        lineBlock.addEventListener("mouseover", () => {
          lineBlock.style.backgroundColor =
            `rgb(` +
            (Math.floor(Math.random() * 255) + 1) +
            `,` +
            (Math.floor(Math.random() * 255) + 1) +
            `,` +
            (Math.floor(Math.random() * 255) + 1) +
            `)`;
          const lineBlockStyles = window.getComputedStyle(lineBlock);
          lineBlock.style["opacity"] =
            parseFloat(lineBlockStyles.getPropertyValue("opacity")) - 0.1;
        });
        puffer.appendChild(lineBlock);
      }
    }
  }
});
