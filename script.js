//Global variables
let boxSize = 16;
let boolErase = false;

//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

//Acquire buttons
const bClear = document.getElementById('bClear');
const bErase = document.getElementById('bErase');


//button event listeners
bClear.addEventListener('click', function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    fillBoard(boxSize);
})

bErase.addEventListener('click', function() {
    if(boolErase == false) {
        boolErase = true;
        bErase.style.background = 'black';
        bErase.style.color = 'yellow';

    } else {
        boolErase = false;
        bErase.style.background = 'transparent';
        bErase.style.color = '#F2F5EA';
    }
})

fillBoard(boxSize);

function fillBoard(size) {
    for(let i = 0; i < size; i++){ 
        for(let j = 0; j < size; j++){
            drawBox(size);
        }
    }    
}

//Draw a single element div
function drawBox(size){ 
    let childDiv = document.createElement('div');  //Single div to be manipulated for drawBoard
    if(childDiv) {
        // childDiv.style.background = "black";
        childDiv.style.width = `${containerWidth/size}px`;
        childDiv.style.height = `${containerHeight/size}px`;

        childDiv.addEventListener('mouseover', function(event) {
            if(boolErase == true) {
                childDiv.style.background = 'transparent';
                
            } else if(event.buttons == 1) {
                childDiv.style.background = "black"; //add function that chooses colors
            }
        });

        container.appendChild(childDiv);
    }
}
