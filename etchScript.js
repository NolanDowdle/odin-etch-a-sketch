const container = document.querySelector('#container');
const line1 = document.createElement('div');
const line2 = document.createElement('div');
const line3 = document.createElement('div');
const line4 = document.createElement('div');

container.appendChild(line1);
container.appendChild(line2);
container.appendChild(line3);
container.appendChild(line4);


const line1block1 = document.createElement('div');
const line1block2 = document.createElement('div');
const line1block3 = document.createElement('div');
const line1block4 = document.createElement('div');

const line2block1 = document.createElement('div');
const line2block2 = document.createElement('div');
const line2block3 = document.createElement('div');
const line2block4 = document.createElement('div');

const line3block1 = document.createElement('div');
const line3block2 = document.createElement('div');
const line3block3 = document.createElement('div');
const line3block4 = document.createElement('div');

const line4block1 = document.createElement('div');
const line4block2 = document.createElement('div');
const line4block3 = document.createElement('div');
const line4block4 = document.createElement('div');

line1.appendChild(line1block1);
line1.appendChild(line1block2);
line1.appendChild(line1block3);
line1.appendChild(line1block4);

line2.appendChild(line2block1);
line2.appendChild(line2block2);
line2.appendChild(line2block3);
line2.appendChild(line2block4);

line3.appendChild(line3block1);
line3.appendChild(line3block2);
line3.appendChild(line3block3);
line3.appendChild(line3block4);

line4.appendChild(line4block1);
line4.appendChild(line4block2);
line4.appendChild(line4block3);
line4.appendChild(line4block4);

line1.classList.add('line1');
line2.classList.add('line2');
line3.classList.add('line3');
line4.classList.add('line4');

line1block1.setAttribute('id', 'line1block1');
line1block2.setAttribute('id', 'line1block2');
line1block3.setAttribute('id', 'line1block3');
line1block4.setAttribute('id', 'line1block4');

line2block1.setAttribute('id', 'line2block1');
line2block2.setAttribute('id', 'line2block2');
line2block3.setAttribute('id', 'line2block3');
line2block4.setAttribute('id', 'line2block4');

line3block1.setAttribute('id', 'line3block1');
line3block2.setAttribute('id', 'line3block2');
line3block3.setAttribute('id', 'line3block3');
line3block4.setAttribute('id', 'line3block4');

line4block1.setAttribute('id', 'line4block1');
line4block2.setAttribute('id', 'line4block2');
line4block3.setAttribute('id', 'line4block3');
line4block4.setAttribute('id', 'line4block4');

line1.setAttribute('style', 'border: 1px solid black; display: flex; flex: 1 1 auto;');
line2.setAttribute('style', 'border: 1px solid black; display: flex; flex: 1 1 auto;');
line3.setAttribute('style', 'border: 1px solid black; display: flex; flex: 1 1 auto;');
line4.setAttribute('style', 'border: 1px solid black; display: flex; flex: 1 1 auto;');

line1block1.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line1block2.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line1block3.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line1block4.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');

line2block1.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line2block2.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line2block3.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line2block4.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');

line3block1.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line3block2.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line3block3.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line3block4.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');

line4block1.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line4block2.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line4block3.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');
line4block4.setAttribute('style', 'border: 1px solid black; display: flex; flex-direction: row; flex: 1 1 auto;');