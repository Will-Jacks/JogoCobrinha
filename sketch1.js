//                              Fontes
let fontBotoesMenu;
let fontTitle;

//                              Variáveis de imagens                \\
let imagemEducador;
let imagemProgramador;
let imagemFundo;
let imagemFundoSnake;
let imagemCobrinha;
var tela = 1;


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




//                             Carregamento de mídias                       \\
function preload(){
  imagemEducador = loadImage("pp.jpg");
  imagemProgramador = loadImage("pp2.jpg");
  imagemCobrinha = loadImage("cobrinharemovida.png")
  imagemFundoSnake = loadImage("fundoSnake.jpg")
  fontBotoesMenu = loadFont("./libraries/Fonte/Lemon Grass.ttf");
  fontTitle = loadFont("./libraries/Fonte/Astral Groove.ttf")
}

//                             Tamanho da tela                               \\
function setup() {
  createCanvas(1920, 1080);
}

function telaMenu(){
image(imagemFundoSnake, 0, 0, 1920, 1080);
image(imagemCobrinha, 885, 212, 90, 90);
textFont(fontTitle);
fill(153,204,50)
textSize(50)
text("WILL'S GAME", 580, 200)


  //                              Botão iniciar                   \\
fill(250) // Cor Botão
if(mouseX > xMinBotao1 && mouseX < xMaxBotao1 && mouseY > yMinBotao1 && mouseY < yMaxBotao1){
  fill(153,204,50);
  if(mouseIsPressed)
  tela = 1
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

  fill(152,251,152); //            Cor do retângulo das instruções            \\
  rect(500, 200, 900, 500, 40);
  fill(0);
  textFont(fontBotoesMenu);
  text("Instruções", 900, 100);
  text("1° - Utilize o teclado para movimentar a cobra.", 560, 250);
  text("2° - Seu objetivo é alimentar a cobra.", 560, 320);
  text("3° - Não a deixe com fome! Ela ficará irritada.", 560, 390);
  
}

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




//
function draw(){
  if (tela == 0){
    telaMenu();
  }
  if(tela == 1){
    telaIniciar();
  }
  if (tela == 2){
    telaInstrucoes();
  }
  if (tela == 3){
    telaCredito();
  }
}