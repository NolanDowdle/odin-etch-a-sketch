/* initialize container */
const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: column; flex: 1 1 content; height: 100vh;')

/* Initialize number of rows and columns to be 4x4 */
let numberOfRows = 4;
let numberOfColumns = 4;

/* function to return random RGB value */
const getRandomColor = function() {
    return Math.floor(Math.random() * 255);
}

/* add button function to change number of rows or columns if user desires */
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    numberOfRows = prompt("Please enter the number of rows you want on your grid:");
    numberOfColumns = prompt("Now enter the number of columns you want on your grid:");
    
    /* clear all existing divs for a black page to create new divs */
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    const line = [];
    const blocks = [];
    for (let i = 0; i < numberOfRows; i++) {
        line.push(document.createElement('div'));
        container.appendChild(line[i]);
        for (let j = 0; j < numberOfColumns; j++) {
            blocks.push(document.createElement('div'));
        }
        line[i].setAttribute('style', 'border: 1px solid black; display: flex; flex: 1 1 auto;');
    }
    for (let i = 0; i < blocks.length; i++) {
        line[i%numberOfRows].appendChild(blocks[i]);
        blocks[i].setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
        /* Set mouseenter and mouseleave events for color */
        blocks[i].addEventListener('mouseenter', () => {
            var color1 = getRandomColor();
            var color2 = getRandomColor();
            var color3 = getRandomColor();
            blocks[i].setAttribute('style', `border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto; background-color: rgb(${color1}, ${color2}, ${color3});`);
        });
        blocks[i].addEventListener('mouseleave', () => {
            blocks[i].setAttribute('style', `border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto; background-color: #000; transition: 0.5s;`);
        });
    }
});

const line = [];
const blocks = [];
for (let i = 0; i < numberOfRows; i++) {
    line.push(document.createElement('div'));
    container.appendChild(line[i]);
    for (let j = 0; j < numberOfColumns; j++) {
        blocks.push(document.createElement('div'));
    }
    line[i].setAttribute('style', 'border: 1px solid black; display: flex; flex: 1 1 auto;');
}
for (let i = 0; i < blocks.length; i++) {
    line[i%numberOfRows].appendChild(blocks[i]);
    blocks[i].setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
    /* Set mouseenter and mouseleave events for color */
    blocks[i].addEventListener('mouseenter', () => {
        var color1 = getRandomColor();
        var color2 = getRandomColor();
        var color3 = getRandomColor();
        blocks[i].setAttribute('style', `border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto; background-color: rgb(${color1}, ${color2}, ${color3});`);
    });
    blocks[i].addEventListener('mouseleave', () => {
        blocks[i].setAttribute('style', `border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto; background-color: #000; transition: 0.5s;`);
    });
}