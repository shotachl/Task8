var circlesArray = [];
var yPosition = 60;
var rightEndX = window.innerWidth;
var maxCircles = 80;
var circle;

const randomCircles = Math.floor(Math.random() * maxCircles) + 40;
spawnCircle();

function spawnCircle() {
    for (let i = 0; i < randomCircles; i++) {
        const randomXPos = Math.floor(Math.random() * rightEndX);
        const randomYPos = Math.floor(Math.random() * yPosition) - 80;
        circle = {
            id: "circle: " + Math.floor(Math.random() * 500),
            xPos: randomXPos,
            yPos: randomYPos
        }
        circlesArray.push(circle);
    }
}

displayCircle();

function displayCircle() {
    const circleDiv = document.getElementById('circleId');
    circlesArray.forEach(circle => {
        const circleElement = document.createElement('div');
        circleElement.classList.add('circle');

        circleElement.style.left = `${circle.xPos}px`;
        circleElement.style.top = `${circle.yPos}px`;

        circleDiv.appendChild(circleElement);
    });
}

requestAnimationFrame(playAnimation);
function playAnimation() {
    const circleElements = document.getElementsByClassName('circle');
    circlesArray.forEach((circle, index) => {
        circle.yPos += 1;
        circleElements[index].style.top = `${circle.yPos}px`;

        if(circle.yPos > window.innerHeight){
            circleElements[index].remove();
            circlesArray.splice(index, 1);
        }
    });
    updateWaves();
    requestAnimationFrame(playAnimation);
}

function updateWaves(){
    if(circlesArray.length === 0){
        spawnCircle();
        displayCircle();
    }
}
