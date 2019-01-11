window.onload = function() {
var stage = document.getElementById('stage');
var ctx = stage.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(game, 130);

const vel = 1;
  score = [];
  core = 0;

  var vx = vy = 0;
  var px = 10;
  var py = 15;
  var tp = 17.5;
  var qp = 17;
  var ax = ay = 15;

  var caminho = [];
  rastro = 2;

  function game() {

  pontos.textContent = core;

  px += vx;
  py += vy;
  if(px < 0) {
  px = qp-1;
  }
  if(px > qp-1) {
  px = 0;
  }
  if(py < 0) {
  py = qp-1;
  }
  if(py > qp-1) {
  py = 0;
  }

  ctx.fillStyle = "#080a19";
  ctx.fillRect(0,0, stage.width, stage.height);
  
  ctx.fillStyle = "#cc0202";
  ctx.fillRect(ax*tp, ay*tp, tp,tp);

  ctx.fillStyle = "#04af00";
  for(var i = 0; i < caminho.length; i++){
    ctx.fillRect(caminho[i].x*tp, caminho[i].y*tp, tp,tp);
    if(caminho[i].x == px && caminho[i].y == py) {
    vx = vy = 0;
    rastro = 2;
    core = 0;
    console.log('Pontos resetados');
    }
  }
  
    caminho.push({x:px, y:py});
    while (caminho.length > rastro) {
    caminho.shift();
    }

  if(ax == px && ay==py) {
  rastro++;
  core++;
  console.log('Você fez ' + core + ' pontos !');
    ax = Math.floor(Math.random()*qp);
    ay = Math.floor(Math.random()*qp);
  }

  }

function keyPush(event) {
  
  switch (event.keyCode) {
    case 37: //Esquerda 
      vx = -vel;
      vy = 0;
    break;

    case 38: //Cima
      vx = 0; 
      vy = -vel;
    break;

    case 39: //Direita
      vx = vel;
      vy = 0;
    break;

    case 40: //Baixo
      vx = 0;
      vy = vel;
    break;

    default:

    break;
  }
 }
}