//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
    
//Create a single div
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        drawBox();
    }
}

function drawBox(){
    let childDiv = document.createElement('div');
    if(childDiv) {
        childDiv.style.background = "black";
        childDiv.style.width = `${containerWidth/16}px`;
        childDiv.style.height = `${containerHeight/16}px`;
        container.appendChild(childDiv);
    }

}