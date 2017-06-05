//Criando o canvas
var canvas = document.createElement ("canvas");

//Definindo um contexto 2d
var ctx = canvas.getContext("2d");

//largura e altura do canvas
canvas.width = 500;
canvas.height = 500;

document.body.appendChild(canvas);

ctx.tabIndex = 1;

var bgReady = false;

//canvas é filho do body, ou seja, sera criado dentro da tag body.
document.body.appendChild(canvas);

//Backgroud
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
	bgReady = true;
};
bgImage.src = "./img/back.png";

//Jogador
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
	heroReady = true;
};
heroImage.src = "./img/hero.png";

//Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
	monsterReady = true;
};
monsterImage.src = "./img/monster.png";

//objetos do jogo
var hero = {
	speed: 150
};

var monster = {};


//Quantidade de monstros capturados
var monsterCought = 0;
var monsterRemain = 5;
var timer = (monsterRemain * 2) + 1;
var level = 1;

//controlando pelo teclado

var keysDown = {};


//manipulador de evento do teclado, verifica o que esta acontecendo no teclado

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false );

addEventListener ("keyup", function(e){
	delete keysDown[e.keyCode];
}, false);


//resetando o jogo
var reset = function (){
	//jogador criado no meio da tela
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	
	//criação do monstro aleatorio
	
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
}


//controle de direçoes

var update = function (modifier){
  timer -= modifier;
  
  if (38 in keysDown && hero.y > 0){  
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown && hero.y < (canvas.height - 32)){  
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown && hero.x > 0){  
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown && hero.x < (canvas.width - 32)){ 
    hero.x += hero.speed * modifier;
  }

//colisao
	if( hero.x <= (monster.x + 32 ) && monster.x <= (hero.x + 32) && hero.y <= (monster.y +32) && monster.y <= (hero.y +32)){
	++monsterCought;
	
	reset();
	}
	
	
	 if(monsterCought >= monsterRemain) {
  	bgImage.src = "img/back"+level+".png";
  	monsterCought = 0;
  	monsterRemain *= 2;
  	timer = (monsterRemain * 2) + 2;
  	level++;
  }

  if(timer <= 0) {
  	monsterCought = 0;
  	level = 1;
  	timer = 10;
  	reset();
  }    
};

//Desenhar na tela
var render = function (){
  if(bgReady){
    ctx.drawImage(bgImage, 0, 0);
  }
  if(heroReady){
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if(monsterReady){
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  //Placar
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "22px Verdana";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Capturados: " + monsterCought + " / " +monsterRemain, 8, 32);

  //Timer
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "22px Verdana";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Tempo: " + timer.toFixed(2), 8, 8);
};

//Loop do Jogo
var main = function() {
  //Retornar n�mero em milissegundos
  var now = Date.now();
  var delta = now - then;
  update(delta / 1000);
  render();
  then = now;
};

//Inicia o Jogo
reset();
var then = Date.now();
//O m�todo setInterval chama uma fun��o ou avalia uma express�o em intervalos espec�ficos (em milissegundos)
setInterval(main, 1);












