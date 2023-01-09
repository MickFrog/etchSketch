//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

let intervID;  //Global Changing div color interval ID

fillBoard(64);

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
            if(event.buttons == 1) {
                childDiv.style.background = "black";
            }
        });

        container.appendChild(childDiv);
    }
}
