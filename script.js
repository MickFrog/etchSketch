//Global variables
let boxSize = 16;
let boolErase = false;
let boolRainbow = false;

//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

//Acquire input elements
const bClear = document.getElementById('bClear');
const bErase = document.getElementById('bErase');
const bRainbow = document.getElementById('bRainbow');
const colorPick = document.getElementById('colorPicker');

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

bRainbow.addEventListener('click', function() {
    if(boolRainbow == false) {
        boolRainbow = true;
        bRainbow.style.background = 'black';
        bRainbow.style.color = 'yellow';

    } else {
        boolRainbow = false;
        bRainbow.style.background = 'transparent';
        bRainbow.style.color = '#F2F5EA';
    }
})

fillBoard(boxSize);


//Functions
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
            if(boolErase == true && event.buttons == 1) {
                childDiv.style.background = 'transparent';

            } else if(event.buttons == 1) {
                childDiv.style.background = `${getColor()}`; //add function that chooses colors
            }
        });

        container.appendChild(childDiv);
    }
}

function getColor(){
    if(boolRainbow == true) {
        //generate hex color code
        let randColor = Math.floor(Math.random()*16777215).toString(16); //16777215 is thw max color combinations. To base 16 string as default color codes.
        return '#' + randColor;
    } else {
        return colorPick.value;
    }
}
