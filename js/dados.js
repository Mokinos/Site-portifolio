var cWidth = 400; // Variavel contendo a largura da tela
var cHeight = 300; // Variavel contendo a Altura da tela; Tambem usada para apagar a tela, preparando-a para o redesenho
var dIceX = 20; // Variavel contendo a posicao horizontal do unico dado; para apagar a tela preparand-para o redesenho
var dIceY = 20; // Variavel contendo a posicao vertical do unico dado
var dIceWidth = 150; // Variavel contendo a largura da face do dado
var dIceHeight = 150; // Variavel contendo a Altura da face do dado
var dotRad = 12; // Variavel contendo o raio de um ponto
var contexto; // Variavel contendo o CONTEXTO da tela usada em todos os comandos "draw"
var dX; // Variavel usada para posicionamento horizontal modificada para cada uma das faces do dado
var dY; // Variavel usada para posicionamento vertical é mesma para ambas as faces do dado
var firstturn = true; // Variavel Global, inicializaca com valor verdadeiro
var pontos; // Variavel Global, nao precisa ser inicializaca porque ela sera definida antes de usar


function dados()
{    
    var soma;
    var ch = 1 + Math.floor(Math.random()*6);
    soma = ch;
    dX = dIceX;
    dY = dIceY;
    drawFace(ch);
    dX = dIceX + 150;
    ch = 1 + Math.floor(Math.random()*6);
    
    soma += ch;
    
    drawFace(ch);
    
        if(firstturn)
        {
            switch(soma)
            {
				case 5:
                case 7:
                case 11:
                    pontos = "Você tirou " + soma + " nos dados";
                    document.f.pontos.value = pontos;
                    document.f.mensagem.value = "Você Ganhou!!";
                    break;
                    
                case 2:
                case 3:
                case 12:
                    pontos = "Você tirou " + soma + " nos dados";
                    document.f.pontos.value = pontos;
                    document.f.mensagem.value = "Você Perdeu!!";
                    break;
                    
                default:
                    pontos = "Você tirou " + soma + " nos dados";
                    document.f.pontos.value = pontos;
                    document.f.mensagem.value = "Lançamento sequencial!";
            }
        }
        else
        {
            switch (soma)
            {
                case pontos:
                    document.f.mensagem.value = "Você Ganhou!!";
                    document.f.mensagem.value = "Voltar para o primeiro lançamento!";
                    document.f.mensagem.value = "";
                    firstturn = true;
                    break;
                    
                case 7:
                    document.f.mensagem.value = "Você Perdeu!!";
                    document.f.mensagem.value = "Voltar para o primeiro lançamento!";
                    document.f.mensagem.value = "";
                    firstturn = true;
            }
        }
}

function drawFace(n)
{
    contexto = document.getElementById("canvas").getContext('2d');
    contexto.lineWidth = 5;
    contexto.clearRect(dX, dY, dIceWidth, dIceHeight);
    contexto.strokeRect(dX, dY, dIceWidth, dIceHeight);
    
    var dotX;
    var dotY;
	
    
	contexto.scale = 5;
    contexto.backgroundColor ="#ffffff";
    contexto.fillStyle = "#000000";
    
    switch(n)
    {
        case 1:
            draw1();
            break;
            
        case 2:
            draw2();
            break;
            
        case 3:
            draw2();
            draw1();
            break;
            
        case 4:
            draw4();
            break;
            
        case 5:
            draw4();
            draw1();
            break;
            
        case 6:
            draw4();
            draw2mid();
            break;
    }
}

function draw1()
{
    var dotX;
    var dotY;
    
    contexto.beginPath(); // Inciar o caminho
    dotX = dX + .5*dIceWidth;
    dotY = dY + .5*dIceHeight;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    contexto.closePath(); // Fecha o caminho
    contexto.fill();
}


function draw2()
{
    var dotX;
    var dotY;
    
    contexto.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto.closePath(); // Fecha o caminho
    contexto.fill();
}

function draw4()
{
    var dotX;
    var dotY;
    
    contexto.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + 3*dotRad;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+dIceHeight-3*dotRad;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto.closePath(); // Fecha o caminho
    contexto.fill();
    
    contexto.beginPath(); // Inciar o caminho
    dotX = dX + 3*dotRad;
    dotY = dY + dIceHeight-3*dotRad;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX+dIceWidth-3*dotRad;
    dotY = dY+3*dotRad;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto.closePath(); // Fecha o caminho
    contexto.fill();
}

function draw2mid()
{
    var dotX;
    var dotY;
    
    contexto.beginPath(); // Inciar caminho
    
    dotX = dX + 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    dotX = dX + dIceWidth - 3*dotRad;
    dotY = dY + .5*dIceHeight;
    
    contexto.arc(dotX, dotY, dotRad, 0, Math.PI*2, true);
    
    contexto.closePath(); // Fecha o caminho
    contexto.fill();
}