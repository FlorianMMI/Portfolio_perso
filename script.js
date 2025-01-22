

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#add8e6",
    "#87ceeb",
    "#87cefa",
    "#00bfff",
    "#1e90ff",
    "#6495ed",
    "#4169e1",
    "#0000ff",
    "#0000cd",
    "#00008b",
    "#4b0082",
    "#8a2be2",
    "#9400d3",
    "#9932cc",
    "#ba55d3",
    "#dda0dd",
    "#ee82ee",
    "#da70d6",
    "#ff00ff",
    "#ff00ff",
    "#8b008b",
    "#800080"
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
  circle.addEventListener("mouseover", function() {
    circle.style.backgroundColor = colors[(index + 1) % colors.length];
  });
});

window.addEventListener("mousemove", function(ev){
  coords.x = ev.clientX;
  coords.y = ev.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}


const workcards = document.querySelectorAll('.work__card');

workcards.forEach(function(card) {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.1)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});


animateCircles();

