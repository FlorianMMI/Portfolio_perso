// Tableau global de particules
let points = [];
// Nombre de points à générer
let N = 75;
// Fonction createParticule
// Retourne une particule
// une particule a un mouvement circulaire autour d'une position fixe (cx,
//cy)
function createParticule() {
  let part = {
    // (cx, cy) est le centre de rotation de la particule
    cx: random(0, windowWidth),
    cy: random(0, windowHeight),
    // r est le rayon (en pixel) de la rotation
    r: random(0, 260),
    // angle est l'angle de la rotation
    angle: 0,
   
    // vitesse de la rotation (négatif ça tourne en sens inverse)
    speed: random(-2, 2),

    
    // x est l'abscisse de la particule dans le repère de l’image
    get x() {
      return part.cx + part.r * cos(radians(part.angle));
    },
    // y est l'abscisse de la particule dans le repère de l’image
    get y() {
      return part.cy + part.r * -sin(radians(part.angle));
    },
  };
  
  return part;
}
function setup() {
  const header = select('.header');
  createCanvas(windowWidth, windowHeight).parent(header);
  background(0);
  // Création et stockage dans points de N particules
  for (let i = 0; i < N; i++) {
    let p = createParticule();
    points.push(p);
  }
}
function draw() {
  background('#0f0f0f');
  fill(76, 178, 246);
  // Parcours du tableau de point
  for (let p of points) {
    // dessin d'une particule par un cercle de rayon 10
    // et de centre égal aux coordonnées de la particule

    circle(p.x, p.y, 10);
    p.angle = p.angle + p.speed;
    if (dist(mouseX, mouseY, p.x, p.y) < 100){
      
        stroke(255);
        line(mouseX, mouseY, p.x, p.y);
    }
  }
  
}

