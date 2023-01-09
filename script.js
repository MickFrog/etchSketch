//Acquire container div and dimensions
const container = document.getElementById("drawBoard");
if (container) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    //Create a single div
    let drawDiv = document.createElement('div');
    if(drawDiv) {
        drawDiv.style.background = "black";
        drawDiv.style.width = `${containerWidth/16}px`;
        drawDiv.style.height = `${containerHeight/16}px`;
        container.appendChild(drawDiv);
    }
}