const container = document.querySelector('.drawpad');

createGrid(90);

function createGrid(cols) {
    const rows = cols;
    const total = rows * cols;

    for (let i = 0; i < total; i++) {
      const cell = document.createElement("div");
      container.append(cell)
      cell.classList.add('box');
    }
    container.style.setProperty(`grid-template-columns`, `repeat(${cols}, 1fr)`);
  }
  

