
// rect quadrado da cobra
var larguraQuadrado = 800; var alturaQuadrado = 750;
var xMinQuadrado= 550; 
var yMinQuadrado= 150; 
// barrinha
var x1 = 930; var y1 = 820; var l1 = 60; 
var a1 = 8; 


//                              Fontes
let fontBotoesMenu;
let fontTitle;

//                              Variáveis de imagens                \\
let imagemEducador;
let imagemProgramador;
let imagemFundo;
let imagemFundoSnake;
let imagemCobrinha;
var tela = 0;


//                              Variáveis do botão iniciar

var larguraBotao1 = 200;
var alturaBotao1 = 50;
var xMinBotao1 = 830;
var xMaxBotao1 = xMinBotao1 + larguraBotao1;
var yMinBotao1 = 300;
var yMaxBotao1 = yMinBotao1 + alturaBotao1;


//                              Variáveis do botão instruções         \\
var larguraBotao2 = 200;
var alturaBotao2 = 50;
var xMinBotao2 = 830;
var xMaxBotao2 = xMinBotao2 + larguraBotao2;
var yMinBotao2 = 400;
var yMaxBotao2 = yMinBotao2 + alturaBotao2;

//                              Variável do botão créditos

var larguraBotao3 = 200;
var alturaBotao3 = 50;
var xMinBotao3 = 830;
var xMaxBotao3 = xMinBotao3 + larguraBotao3;
var yMinBotao3 = 500;
var yMaxBotao3 = yMinBotao3 + alturaBotao3;

//                             Variáveis do botão voltar

var larguraBotaoV = 60;
var alturaBotaoV = 300;
var xMinBotaoV = 1390;
var xMaxBotaoV = xMinBotaoV + larguraBotaoV;
var yMinBotaoV = 350;
var yMaxBotaoV = yMinBotaoV + alturaBotaoV;

//                             Botão Dificuldade

var larguraBotao4 = 190;
var alturaBotao4 = 50;
var xMinBotao4 = 600;
var xMaxBotao4 = xMinBotao4 + larguraBotao4;
var yMinBotao4 = 425;
var yMaxBotao4 = yMinBotao4 + alturaBotao4;
//600,425,190,50, 100

var larguraBotao5 = 190;
var alturaBotao5 = 50;
var xMinBotao5 = 1140;
var xMaxBotao5 = xMinBotao5 + larguraBotao5;
var yMinBotao5 = 425;
var yMaxBotao5 = yMinBotao5 + alturaBotao5;

//                            Botão voltar dificuldade
var larguraBotaoV2 = 190;
var alturaBotaoV2 = 50;
var xMinBotaoV2 = 865;
var xMaxBotaoV2 = xMinBotaoV2 + larguraBotaoV2;
var yMinBotaoV2 = 630;
var yMaxBotaoV2 = yMinBotaoV2 + alturaBotaoV2;

// Botões da pergunta 
var larguraBotaoPerguntaEsquerdo = 100;
var alturaBotaoPerguntaEsquerdo = 100;
var xMinBotaoPerguntaEsquerdo = 690;
var xMaxBotaoPerguntaEsquerdo = xMinBotaoPerguntaEsquerdo + larguraBotaoPerguntaEsquerdo;
var yMinBotaoPerguntaEsquerdo = 500;
var yMaxBotaoPerguntaEsquerdo = yMinBotaoPerguntaEsquerdo + alturaBotaoPerguntaEsquerdo;

// Botao 2 pergunta
var larguraBotaoPerguntaDireito = 100
var alturaBotaoPerguntaDireito = 100
var xMinBotaoPerguntaDireito = 1100
var xMaxBotaoPerguntaDireito = xMinBotaoPerguntaDireito + larguraBotaoPerguntaDireito;
var yMinBotaoPerguntaDireito = 500
var yMaxBotaoPerguntaDireito = yMinBotaoPerguntaDireito + alturaBotaoPerguntaDireito;


var pontosJ = 0;
var pontosPC = 0;

// bolinha
let x2 = 940;
let y2 = 160; 
let r2 = 50;

//numeros
let numeros;

//contador bolinha
let contadorB = 0;
let contadorN = 0;

//Vetores das perguntas
var textoTermosSoma = "";

var perg1;






//                             Carregamento de mídias                       \\
function preload(){
  imagemEducador = loadImage("pp.jpg");
  imagemProgramador = loadImage("pp2.jpg");
  imagemCobrinha = loadImage("cobrinharemovida.png")
  imagemFundoSnake = loadImage("fundoSnake.jpg")
  fontBotoesMenu = loadFont("./libraries/Fonte/Lemon Grass.ttf");
  fontTitle = loadFont("./libraries/Fonte/Astral Groove.ttf")
  numeros = random ( 10, 50);
}


//                             Tamanho da tela                               \\
function setup() {
  createCanvas(1920, 937);
  noCursor();
}


//                              Menu principal
function telaMenu(){
image(imagemFundoSnake, 0, 0, 1920, 940);
//image(imagemCobrinha, 885, 212, 90, 90);
textFont(fontTitle);
fill(153,204,50);
textSize(50);
text("MATH PONG", 615, 200);


  //                              Botão iniciar                   \\
fill(250) // Cor Botão
if(mouseX > xMinBotao1 && mouseX < xMaxBotao1 && mouseY > yMinBotao1 && mouseY < yMaxBotao1){
  fill(153,204,50);
  if(mouseIsPressed)
  tela = 1;
  x1 = 930;
  y1 = 820;
  y2 = 160;
}
rect(830, 300, 200, 50, 40);
textSize(40);
fill(0);
textFont(fontBotoesMenu);
if(mouseX > xMinBotao1 && mouseX < xMaxBotao1 && mouseY > yMinBotao1 && mouseY < yMaxBotao1){
  fill(255);
}
text("iniciar", 895, 335);



//                           Botão instruções
fill(255) // Cor Botão

if(mouseX > xMinBotao2 && mouseX < xMaxBotao2 && mouseY > yMinBotao2 && mouseY < yMaxBotao2){
  fill(153,204,50);
  if(mouseIsPressed)
  tela = 2
}
rect(xMinBotao2, yMinBotao2, larguraBotao2, alturaBotao2, 40)
textSize(40);
textFont(fontBotoesMenu);
fill(0);
if(mouseX > xMinBotao2 && mouseX < xMaxBotao2 && mouseY > yMinBotao2 && mouseY < yMaxBotao2){
  fill(255)
}
text("instruções",880, 435);


  


//                           Botão  créditos
fill(255) // Cor Botão
if(mouseX > xMinBotao3 && mouseX < xMaxBotao3 && mouseY > yMinBotao3 && mouseY < yMaxBotao3){
  fill(153,204,50)
  if(mouseIsPressed)
  tela = 3
}
rect(830, 500, 200, 50, 40)
textSize(40);
fill(0);
textFont(fontBotoesMenu);
if(mouseX > xMinBotao3 && mouseX < xMaxBotao3 && mouseY > yMinBotao3 && mouseY < yMaxBotao3){
  fill(255);
}
text("créditos",890, 535);
}


// Dificuldade
function dificuldade(){
  image(imagemFundoSnake, 0, 0, 1920, 1080);
  textSize(100);
  fill(0);
  text("Selecione a dificuldade",620, 190);
  textSize(40);
  fill(255);
  if(mouseX > xMinBotao4 && mouseX < xMaxBotao4 && mouseY > yMinBotao4 && mouseY < yMaxBotao4){
    fill(153,204,50)
    if(mouseIsPressed)
    tela = 5
  }
  rect(600,425,190,50, 100);// Básico
  fill(0);
  textFont(fontBotoesMenu);
  if(mouseX > xMinBotao4 && mouseX < xMaxBotao4 && mouseY > yMinBotao4 && mouseY < yMaxBotao4){
    fill(255)
  }
  text("Básico", 660, 462);
  //
  fill(180);
  /*if(mouseX > xMinBotao5 && mouseX < xMaxBotao5 && mouseY > yMinBotao5 && mouseY < yMaxBotao5){
    fill(153,204,50)
    if(mouseIsPressed)
    tela = 5
  }*/
  rect(1140,425,190,50, 100);// Acadêmico
  fill(0);
  textSize(40);
  textFont(fontBotoesMenu);
  /*if(mouseX > xMinBotao5 && mouseX < xMaxBotao5 && mouseY > yMinBotao5 && mouseY < yMaxBotao5){
    fill(255)
  }*/
  text("Acadêmico", 1183, 462);
  text("Em breve...", 1183, 505)
  
  fill(255);
  if(mouseX > xMinBotaoV2 && mouseX < xMaxBotaoV2 && mouseY > yMinBotaoV2 && mouseY < yMaxBotaoV2){
    fill(153,204,50)
    if(mouseIsPressed)
    tela = 0
  }
  rect(865,630,190,50, 100)
  fill(0)
  if(mouseX > xMinBotaoV2 && mouseX < xMaxBotaoV2 && mouseY > yMinBotaoV2 && mouseY < yMaxBotaoV2){
    fill(255)
  }
  text("Voltar", 925, 665)
  //text(mouseX + ", "+ mouseY, mouseX, mouseY);
}


//                          Tela de Instruções                         \\
function telaInstrucoes(){
  image(imagemFundoSnake, 0, 0, 1920, 1080);
  textSize(40);
  fill(255)
  rect(850,65,190,50, 100);// rect menor do nome instruçõesa
  //botão voltar
  fill(255);
  if(mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
    fill(0);
    if(mouseIsPressed)
    tela = 0
  }
  rect(1390, 350, 60, 300, 10); // RECT DO VOLTAR
  textSize(35);
  fill(0);// COR DA FONTE
  textFont(fontBotoesMenu);
  if(mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
    fill(255)
  }
  text("V"+"\n"+"O"+"\n"+"L"+"\n"+"T"+"\n"+"A"+"\n"+"R", 1410, 400)
//-------------------
push();
fill(152,251,152); //            Cor do retângulo das instruções            \\
rect(500, 200, 900, 500, 40);
fill(0);
textFont(fontBotoesMenu);
//textAlign(CENTER);
text("Instruções", 900, 100);
text("1° - Utilize o teclado para movimentar a barra.", 560, 250);
text("2° - Seu objetivo é pegar as bolinhas contendo os números dentro.", 560, 320);
text("3° - Você terá que realizar cálculos matemáticos.", 560, 390);
text("4° - Ao final da primeira etapa, testarei seus conhecimentos\n    para você avançar de fase!", 560, 460);
text("5° - Aproveite o jogo e se divirta!", 560, 570)
pop();
}


//                              Tela de Créditos                           \\
function telaCredito(){
  //                            Background                           \\
  image(imagemFundoSnake, 0, 0, 1920, 1080);
  textSize(40);
  fill(255);
  rect(875,65,190,50, 100);
  fill(0);  // Cor do "Créditos"\\
  textFont('fontBold');
  textFont(fontBotoesMenu);
  text("Créditos", 930, 100);
  //botão voltar
  fill(255);
  if(mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
    fill(0);
    if(mouseIsPressed)
    tela = 0
  }
  rect(1390, 350, 60, 300, 10); // RECT DO VOLTAR
  textSize(35);
  fill(0);// COR DA FONTE
  textFont(fontBotoesMenu);
  if(mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
    fill(255)
  }
  text("V"+"\n"+"O"+"\n"+"L"+"\n"+"T"+"\n"+"A"+"\n"+"R", 1410, 400)
  //-------------------
  fill(152,251,152)
  rect(500, 200, 900, 600, 40) // rect maior de todos                        
  //                            Programador                           \\
  fill(0);
  textSize(30);
  textFont(fontBotoesMenu);
  text("Função: Programador.", 800, 300);
  text("Graduando em Bacharelado em Ciências e Tecnologia,\nna Universidade Federal do Rio Grande do Norte (UFRN).", 800, 340);
  image(imagemProgramador, 640, 250, 150,150); 
  //                            Educador                               \\    
  textSize(30);
  textFont(fontBotoesMenu);
  text("Função: Educador.", 800, 600);
  text("Bacharel em admnistração, pela Universidade Potiguar (UNP).", 800, 640);
  image(imagemEducador, 640, 550, 150, 150);
  
  
  
}


//                          Tela do JOGO
function telaIniciar(){
  image(imagemFundoSnake, 0, 0, 1920, 1080);
  textFont(fontBotoesMenu);
  textSize(70);
  fill(0)
  text("Vamos jogar!", 800, 100);
  //botão voltar
  
fill(255);
if(mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
  fill(0);
  if(mouseIsPressed){
    tela = 0
    contadorB = 0;
    contadorN = 0;
    textoTermosSoma = 0;
    pontosJ = 0;
    pontosPC = 0;
  }
}
rect(1390, 350, 60, 300, 10); // RECT DO VOLTAR
textSize(35);
fill(0);// COR DA FONTE
textFont(fontBotoesMenu);
if(mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
  fill(255)
}
text("V"+"\n"+"O"+"\n"+"L"+"\n"+"T"+"\n"+"A"+"\n"+"R", 1410, 400)
fill(255)
rect(550, 150, 800, 750); // rect do campo do jogo
}


//                          Barrinha
function barrinha (){
  push();
  fill( 0 );
  rectMode(CENTER);
  rect(x1, y1, l1, a1);
  pop();
}


function bolinha(){
  push();
  ellipseMode(CENTER);
  stroke(0)
  strokeWeight(3);
  fill (153,204,50);
  ellipse(x2, y2, r2);
  fill(0);
  textAlign(CENTER);
  textFont(1)
  textSize(30);
  text(floor(numeros), x2, (y2 + 8));
  pop(); 
}

function velocidadeBolinha(){
  y2 = y2 + 5;
}

function setas(){
  if (keyIsDown (LEFT_ARROW)){
    x1 = x1 - 8;
  }
    if (keyIsDown (RIGHT_ARROW)){
    x1 = x1 + 8;
  }
}


function grafico(){
  push();
  image(imagemFundoSnake, 0, 0, 1920, 940);
  fill(0);
  text("Quanto é: " + textoTermosSoma + "?", 770, 350);
  textFont(fontBotoesMenu);
  textSize(100);
  fill(255);
  rect(690, 175, 500, 100, 50);
  fill(0);
  text("Pergunta ", 790,250);
  pop();
}

//Perguntas
function pergunta1(){
  fill(255);
  push();
  stroke(0);
  strokeWeight(3);
  if(mouseX > xMinBotaoPerguntaEsquerdo && mouseX < xMaxBotaoPerguntaEsquerdo && mouseY > yMinBotaoPerguntaEsquerdo && mouseY < yMaxBotaoPerguntaEsquerdo){
    fill(153,204,50);
  }
    if(mouseIsPressed){
    pontosJ = 1;
    tela = 5;
    contadorB = 6;
    textoTermosSoma = 0;
    contadorN = 0;
    
  }
  rect(xMinBotaoPerguntaEsquerdo, yMinBotaoPerguntaEsquerdo, larguraBotaoPerguntaEsquerdo, alturaBotaoPerguntaEsquerdo, 60);
  pop();
  fill(0);
  text(contadorN, 730, 560);
  fill(255);
  push();
  if(mouseX > xMinBotaoPerguntaDireito && mouseX < xMaxBotaoPerguntaDireito && mouseY > yMinBotaoPerguntaDireito && mouseY < yMaxBotaoPerguntaDireito){
    fill(153,204,50);
    if(mouseIsPressed)
    tela = 0;
  }
  stroke(0);
  strokeWeight(3);
  rect(xMinBotaoPerguntaDireito, yMinBotaoPerguntaDireito, larguraBotaoPerguntaDireito, alturaBotaoPerguntaDireito, 60);
  pop();
  fill(0);
  text(floor(numeros), 1140, 560);
}

function pergunta2(){
  fill(255);
  push();
  stroke(0);
  strokeWeight(3);
  if(mouseX > xMinBotaoPerguntaEsquerdo && mouseX < xMaxBotaoPerguntaEsquerdo && mouseY > yMinBotaoPerguntaEsquerdo && mouseY < yMaxBotaoPerguntaEsquerdo){
    fill(153,204,50);
  }
    if(mouseIsPressed){
    
  }
  rect(xMinBotaoPerguntaEsquerdo, yMinBotaoPerguntaEsquerdo, larguraBotaoPerguntaEsquerdo, alturaBotaoPerguntaEsquerdo, 60);
  pop();
  fill(0);
  text(floor(numeros), 730, 560);
  fill(255);
  push();
  if(mouseX > xMinBotaoPerguntaDireito && mouseX < xMaxBotaoPerguntaDireito && mouseY > yMinBotaoPerguntaDireito && mouseY < yMaxBotaoPerguntaDireito){
    fill(153,204,50);
    if(mouseIsPressed){
      pontosJ = 2;
      tela = 8;
      contadorB = 12;
    }
  }
  stroke(0);
  strokeWeight(3);
  rect(xMinBotaoPerguntaDireito, yMinBotaoPerguntaDireito, larguraBotaoPerguntaDireito, alturaBotaoPerguntaDireito, 60);
  pop();
  fill(0);
  text(contadorN, 1140, 560);
}
function pergunta3(){

}
function pergunta4(){
  
}
function pergunta5(){
  
}
function pergunta6(){
  
}
//
function draw(){
  if (tela == 0){
    telaMenu();
  }
  if(tela == 1){
    dificuldade();
  }
  if (tela == 2){
    telaInstrucoes();
  }
  if (tela == 3){
    telaCredito();
  }
  if (tela == 5){
    telaIniciar();
    barrinha();
    bolinha();
    velocidadeBolinha();
    setas();
    let d = dist(x1, y1, x2, y2)
    if (y2 > 875){
      y2 = 170;
      x2 = random (570, 1330);
    }
  // detectando colisão da bola com a barrinha
    if ( d > 0 && d < 25){
      y2 = 170;
      x2 = random (570, 1330);
      contadorB += 1;
      contadorN = contadorN + floor(numeros);
      textoTermosSoma = textoTermosSoma + floor(numeros) + "+" ;
      numeros = random (10, 50);
  }
  if (contadorB == 5){
    tela = 6
  }
  if (contadorB == 11){
    tela = 7;
  }
  //delimitando a área que a barrinha pode percorrer
  if (x1 < 580){
    x1 = 580;
  }
  if (x1 > 1320){
    x1 = 1320;
  }
  fill(0);
  //text("Pontos: " + contadorPontos, 200, 650);
  //perguntas();
  
}
  if (tela == 6){
    grafico();
    pergunta1();
  }
  if (tela == 7){
    grafico();
    pergunta2();
  }
  if (tela == 8){
    image(imagemFundoSnake,0,0 , 1920, 968);
    textSize(100);
    textFont(fontBotoesMenu);
    fill(0);
    text("Fim de jogo.", 600, 300)
    text("\nObrigado por jogar!", 600, 400)
    fill(255);
    if( mouseX > 700 && mouseX < 1200 && mouseY > 800 && mouseY < 880){
      fill(0);
      if(mouseIsPressed)
        tela = 0;
        contadorN = 0;
        contadorB = 0;
        textoTermosSoma = 0;
    }
    rect(700, 800, 500, 80, 20);
    fill(0);
    textSize(80);
    if( mouseX > 700 && mouseX < 1200 && mouseY > 800 && mouseY < 880){
      fill(255);
    }
    text("Menu", 880, 860);
  }
  fill(255);
  ellipse(mouseX, mouseY, 15, 15);
}