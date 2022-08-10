function createGrid(size){

    const grid = document.querySelector('#grid-container');
    for(let row=0; row < size; row++){

        const rowcontainer = document.createElement('div');
        rowcontainer.classList.add('row-container');

        for(let col=0; col < size; col++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = `${col + 1}`
            rowcontainer.appendChild(square);
        }

        grid.appendChild(rowcontainer);

    }

}

function addColor(e){
    e.target.classList.add('coloring');

}



createGrid(7);

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', addColor);
});