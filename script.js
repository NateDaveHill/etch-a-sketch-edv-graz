const container = document.querySelector('.drawpad');



  function genBckCol() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

function createGrid(cols) {
    const rows = cols;
    const total = rows * cols;

    for (let i = 0; i < total; i++) {
      const cell = document.createElement("div");
      container.append(cell)
      cell.classList.add('box');
    }
    container.style.setProperty(`grid-template-columns`, `repeat(${cols}, 1fr)`);

    let cells = document.querySelectorAll('.box'); 
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = genBckCol();
      }); 
    });
}

function resetGrid() {
    let cells = document.querySelectorAll('.box'); 
    cells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(255,255,255)';
    }); 

    var userGridInput = parseInt(prompt("Enter a Value between 1 and 90", "1"));
    createGrid(userGridInput);
}

createGrid(10);


  



