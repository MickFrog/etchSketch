//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
if (container) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    //Create a single div
    let drawDiv = document.createElement('div');
    if(drawDiv) {
        drawDiv.clientHeight = containerHeight / 16;
        drawDiv.clientWidth = containerWidth / 16;
    }
    drawDiv.style.background = "black";
    container.appendChild(drawDiv);
}