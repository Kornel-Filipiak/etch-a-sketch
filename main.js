
//returns a random number given a range
function getRandomNumber(min ,max){
    return Math.random() * (max - min) + min;
}

//creates a grid of default number of squares 
function createGrid(size=20){

    const grid = document.querySelector('#grid-container');
    for(let row=0; row < size; row++){
        const rowcontainer = document.createElement('div');
        rowcontainer.classList.add('row-container');
        for(let col=0; col < size; col++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', 'background: rgb(220,220,220)');
            rowcontainer.appendChild(square);
        }
        grid.appendChild(rowcontainer);
    }

}

//removes all rows of squares from the grid
function removeGrid(){
    const rows = document.querySelectorAll('div .row-container');
    for (let i = 0; i < rows.length; i++){
        rows[i].remove();
    }
}

//sets the square's fill-color to the default color
function addSolidColor(e){
    e.target.setAttribute('style', 'background: rgb(128,128,128)')
}

//sets the square's fill-color to 90% shade of the current value
function addGreyScale(e){
    let rgb = ((e.target.style.backgroundColor).match(/\d+/g)).map(Number);
    for(let i in rgb){
        let v  = rgb[i] * 0.9;
        if(v > 128){
            rgb[i] = v; 
        }
        else{
            rgb[i] = 128;
        }
    }
    e.target.setAttribute('style', `background: rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
}

//sets the square's fill-color to a randomly generated rgb color
function addRGB(e){
    let rgb1 = getRandomNumber(0, 256);
    let rgb2 = getRandomNumber(0, 256);
    let rgb3 = getRandomNumber(0, 256);
    e.target.setAttribute('style', `background: rgb(${rgb1},${rgb2},${rgb3})`);
}

//restores the square's fill-color to its original color
function fillDefaultColor(e){
    e.target.setAttribute('style', 'background: rgb(220,220,220)')
}

//disables all other fill-types and enables default color fill
function enableSolidFill(){
    disableGreyScale();
    disableRGB();
    disableErase();
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', addSolidColor);
});

}

//disables all other fill-types and enables square color-fill to 10% darker at each mouse pass
function enableGreyScale(){
    disableSolidFill();
    disableRGB();
    disableErase();
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', addGreyScale);
});

}

//disables all other fill-types and enables square color-fill to randomly selected rgb color
function enableRGB(){
    disableSolidFill();
    disableGreyScale();
    disableErase();
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', addRGB);
});

}

//disables all other fill-types and enables square color-fill to default color
function enableErase(){

    disableSolidFill();
    disableGreyScale();
    disableRGB();

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', fillDefaultColor);
});

}

function disableSolidFill(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.removeEventListener('mouseover', addSolidColor)
    });
}

function disableGreyScale(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.removeEventListener('mouseover', addGreyScale)
    });

}

function disableRGB(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.removeEventListener('mouseover', addRGB)
    });
}

function disableErase(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.removeEventListener('mouseover', fillDefaultColor)
    });

}

//deletes current grid if exists, prompts user to select new grid size, and intitiates new grid creation
function restartGrid(){
    let input = prompt("Enter grid size (1-100): ", 20);
    while(input < 1 || input > 100 || !input){
        input = prompt("Enter grid size (1-100): ", 20);
    }
    removeGrid();
    createGrid(input);
    enableSolidFill();
}


//set button to restart grid with user prompted for size and fill defaulting to solid
const restart = document.querySelector('#restart');
restart.addEventListener('click', restartGrid);

//set button to grey scale which gradual fills grid square to solid
const greyscale = document.querySelector('#greyscale');
greyscale.addEventListener('click', enableGreyScale);

//set button to fill square with default color
const fill = document.querySelector('#fill');
fill.addEventListener('click', enableSolidFill)

//set button to fill square with randomly selected rgb color
const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', enableRGB);

//set button to revert square color to original grid color
const erase = document.querySelector('#erase');
erase.addEventListener('click', enableErase);


//create initial grid and set defaul fill to solid
restartGrid();






