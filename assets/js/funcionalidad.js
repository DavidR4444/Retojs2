
let casillaEscribir = document.getElementById("casillaEscribir");

//numeros del teclado

let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");

//letras primera fila
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");

//letras segunda fila
let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");
let btnNe = document.getElementById("btnNe");

//letras tercera fila
let btnZ = document.getElementById("btnA");
let btnX = document.getElementById("btnS");
let btnC = document.getElementById("btnD");
let btnV = document.getElementById("btnF");
let btnB = document.getElementById("btnG");
let btnN = document.getElementById("btnH");
let btnM = document.getElementById("btnK");

//Caracteres y teclads diferentes de numerosy letras
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnEnter = document.getElementById("btnEnter");
let btnEspacio = document.getElementById("btnEspacio");

//Temporales
let escribir="";


//funciones

const btnNum1F = () => {
      casillaEscribir.innerHTML = escribir + "1";
      escribir.innerHTML=escribir+"1";
      
    
    
  };
  const btnNum2F = () => {
   
  };

//onclicks
//onclicks numeros
btnNum1.onclick = function () {
    btnNum1F();
};
btnNum2.onclick = function () {};
btnNum3.onclick = function () {};
btnNum4.onclick = function () {};
btnNum5.onclick = function () {};
btnNum6.onclick = function () {};
btnNum7.onclick = function () {};
btnNum8.onclick = function () {};
btnNum9.onclick = function () {};
btnNum0.onclick = function () {};



//onclicks letras

btnQ.onclick = function () {
};
btnW.onclick = function () {};
btnE.onclick = function () {};
btnR.onclick = function () {};
btnT.onclick = function () {};
btnY.onclick = function () {};
btnU.onclick = function () {};
btnI.onclick = function () {};
btnO.onclick = function () {};
btnP.onclick = function () {};

btnA.onclick = function () {};
btnS.onclick = function () {};
btnD.onclick = function () {};
btnF.onclick = function () {};
btnG.onclick = function () {};
btnH.onclick = function () {};
btnJ.onclick = function () {};
btnK.onclick = function () {};
btnL.onclick = function () {};
btnNe.onclick = function () {};

btnZ.onclick = function () {};
btnX.onclick = function () {};
btnC.onclick = function () {};
btnV.onclick = function () {};
btnB.onclick = function () {};
btnN.onclick = function () {};
btnM.onclick = function () {};

btnPunto.onclick = function () {};
btnComa.onclick = function () {};
btnEnter.onclick = function () {};
btnEspacio.onclick = function () {};