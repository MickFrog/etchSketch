//Global variables
let boxSize = 16;
let boolErase = false;
let boolRainbow = false;
let boolColor = true;

//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

//Acquire input elements
const bClear = document.getElementById('bClear');
const bErase = document.getElementById('bErase');
const bRainbow = document.getElementById('bRainbow');
const bColor = document.getElementById('bColor');
const colorPick = document.getElementById('colorPicker');
const size16 = document.getElementById('b16');
const size32 = document.getElementById('b32');
const size64 = document.getElementById('b64');

//Feature Initialisations
bColor.style.background = 'black';
bColor.style.color = 'yellow';

size16.style.background = 'black';
size16.style.color = 'yellow';

fillBoard(boxSize);

let btns = [bErase, bRainbow, bColor];
let sizeBtns = [size16, size32, size64];

//button event listeners
//Clearing events
bClear.addEventListener('click', function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    fillBoard(boxSize);
});

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
});

//Color modifying events
bRainbow.addEventListener('click', function() {
    if(boolRainbow == false) {
        boolRainbow = true;
        bRainbow.style.background = 'black';
        bRainbow.style.color = 'yellow';

        //Reset the rest
        for(let i = 0; i < btns.length; i++){
            if(btns[i] != bRainbow){
                btns[i].style.background = 'transparent';
                btns[i].style.color = '#F2F5EA';
            }
        }

    } else {
        boolRainbow = false;
        bRainbow.style.background = 'transparent';
        bRainbow.style.color = '#F2F5EA';

        //Set color mode button active
        bColor.style.background = 'black';
        bColor.style.color = 'yellow';
    }
});

bColor.addEventListener('click', function() {
    if(boolColor == true) {
        boolRainbow = false;
        bColor.style.background = 'black';
        bColor.style.color = 'yellow';

        //Set rainbow button inactive
        bRainbow.style.background = 'transparent';
        bRainbow.style.color = '#F2F5EA';

    } else {
        bColor.style.background = 'transparent';
        bColor.style.color = '#F2F5EA';
    }
});

//Size manipulation events
for(let i = 0; i < sizeBtns.length; i++) {
    sizeBtns[i].addEventListener('click', function(){
        sizeBtns[i].style.background = 'black';
        sizeBtns[i].style.color = 'yellow';

        //Set other buttons to deactivated mode
        for(let j = 0; j < sizeBtns.length; j++){
            if(sizeBtns[j] != sizeBtns[i]){
                sizeBtns[j].style.background = 'transparent';
                sizeBtns[j].style.color = '#F2F5EA';
            }
        }

        //get box size for each button
        boxSize = parseInt(sizeBtns[i].id.replace('b', ""));
        //Trigger clear button to clear drawBoard whic also redraws divs
        bClear.dispatchEvent(new Event('click'));
    });
}

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
                childDiv.style.background = `${getColor()}`; 
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
