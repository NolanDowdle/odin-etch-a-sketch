/* initialize container */
const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: column; flex: 1 1 content; height: 100vh;')

let numberOfRows = prompt("Please enter the number of rows:");
let numberOfColumns = prompt("Now enter the number of columns:");

/* return random color */
const getRandomColor = function() {
    return Math.floor(Math.random() * 255);
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
        blocks[i].setAttribute('style', `border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;`);
    });
}