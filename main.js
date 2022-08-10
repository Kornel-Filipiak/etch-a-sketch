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

createGrid(7);