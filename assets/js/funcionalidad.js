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
let btnZ = document.getElementById("btnZ");
let btnX = document.getElementById("btnX");
let btnC = document.getElementById("btnC");
let btnV = document.getElementById("btnV");
let btnB = document.getElementById("btnB");
let btnN = document.getElementById("btnN");
let btnM = document.getElementById("btnM");

//Caracteres y teclads diferentes de numerosy letras
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnEnter = document.getElementById("btnEnter");
let btnEspacio = document.getElementById("btnEspacio");

//Temporales
let escribir = "";
let saltos = "";

//funciones

const btnNum1F = () => {
  casillaEscribir.innerHTML = escribir + "1";
  escribir = escribir + "1";
};
const btnNum2F = () => {
  casillaEscribir.innerHTML = escribir + "2";
  escribir = escribir + "2";
};

const btnNum3F = () => {
  casillaEscribir.innerHTML = escribir + "3";
  escribir = escribir + "3";
};
const btnNum4F = () => {
  casillaEscribir.innerHTML = escribir + "4";
  escribir = escribir + "4";
};

const btnNum5F = () => {
  casillaEscribir.innerHTML = escribir + "5";
  escribir = escribir + "5";
};
const btnNum6F = () => {
  casillaEscribir.innerHTML = escribir + "6";
  escribir = escribir + "6";
};
const btnNum7F = () => {
  casillaEscribir.innerHTML = escribir + "7";
  escribir = escribir + "7";
};
const btnNum8F = () => {
  casillaEscribir.innerHTML = escribir + "8";
  escribir = escribir + "8";
};
const btnNum9F = () => {
  casillaEscribir.innerHTML = escribir + "9";
  escribir = escribir + "9";
};
const btnNum0F = () => {
  casillaEscribir.innerHTML = escribir + "0";
  escribir = escribir + "0";
};

//funciones letras
const funQ = () => {
  casillaEscribir.innerHTML = escribir + "Q";
  escribir = escribir + "Q";
};

const funW = () => {
  casillaEscribir.innerHTML = escribir + "W";
  escribir = escribir + "W";
};
const funE = () => {
  casillaEscribir.innerHTML = escribir + "E";
  escribir = escribir + "E";
};
const funR = () => {
  casillaEscribir.innerHTML = escribir + "R";
  escribir = escribir + "R";
};

const funT = () => {
  casillaEscribir.innerHTML = escribir + "T";
  escribir = escribir + "T";
};
const funY = () => {
  casillaEscribir.innerHTML = escribir + "Y";
  escribir = escribir + "Y";
};

const funU = () => {
  casillaEscribir.innerHTML = escribir + "U";
  escribir = escribir + "U";
};

const funI = () => {
  casillaEscribir.innerHTML = escribir + "I";
  escribir = escribir + "I";
};
const funO = () => {
  casillaEscribir.innerHTML = escribir + "O";
  escribir = escribir + "O";
};

const funP = () => {
  casillaEscribir.innerHTML = escribir + "P";
  escribir = escribir + "P";
};

const funA = () => {
  casillaEscribir.innerHTML = escribir + "A";
  escribir = escribir + "A";
};

const funS = () => {
  casillaEscribir.innerHTML = escribir + "S";
  escribir = escribir + "S";
};
const funD = () => {
  casillaEscribir.innerHTML = escribir + "D";
  escribir = escribir + "D";
};
const funF = () => {
  casillaEscribir.innerHTML = escribir + "F";
  escribir = escribir + "F";
};

const funG = () => {
  casillaEscribir.innerHTML = escribir + "G";
  escribir = escribir + "G";
};

const funH = () => {
  casillaEscribir.innerHTML = escribir + "G";
  escribir = escribir + "G";
};
const funJ = () => {
  casillaEscribir.innerHTML = escribir + "J";
  escribir = escribir + "J";
};

const funK = () => {
  casillaEscribir.innerHTML = escribir + "K";
  escribir = escribir + "K";
};

const funL = () => {
  casillaEscribir.innerHTML = escribir + "L";
  escribir = escribir + "L";
};
const funNe = () => {
  casillaEscribir.innerHTML = escribir + "Ñ";
  escribir = escribir + "Ñ";
};

const funZ = () => {
  casillaEscribir.innerHTML = escribir + "Z";
  escribir = escribir + "Z";
};

const funX = () => {
  casillaEscribir.innerHTML = escribir + "X";
  escribir = escribir + "X";
};

const funC = () => {
  casillaEscribir.innerHTML = escribir + "C";
  escribir = escribir + "C";
};
const funV = () => {
  casillaEscribir.innerHTML = escribir + "V";
  escribir = escribir + "V";
};
const funB = () => {
  casillaEscribir.innerHTML = escribir + "B";
  escribir = escribir + "B";
};
const funN = () => {
  casillaEscribir.innerHTML = escribir + "N";
  escribir = escribir + "N";
};
const funM = () => {
  casillaEscribir.innerHTML = escribir + "M";
  escribir = escribir + "M";
};
const funComa = () => {
  casillaEscribir.innerHTML = escribir + ",";
  escribir = escribir + ",";
};
const funPunto = () => {
  casillaEscribir.innerHTML = escribir + ".";
  escribir = escribir + ".";
};

//funciones espacio y enter
const btnEnterF = () => {
  saltos === "enter";
};

const btnEspacioF = () => {
  casillaEscribir.innerHTML = "" + escribir;
  escribir = "" + escribir;
};

//onclicks
//onclicks numeros

btnNum1.onclick = function () {
  btnNum1F();
};
btnNum2.onclick = function () {
  btnNum2F();
};
btnNum3.onclick = function () {
  btnNum3F();
};
btnNum4.onclick = function () {
  btnNum4F();
};
btnNum5.onclick = function () {
  btnNum5F();
};
btnNum6.onclick = function () {
  btnNum6F();
};
btnNum7.onclick = function () {
  btnNum7F();
};
btnNum8.onclick = function () {
  btnNum8F();
};
btnNum9.onclick = function () {
  btnNum9F();
};
btnNum0.onclick = function () {
  btnNum0F();
};

//onclicks letras

btnQ.onclick = function () {
  funQ();
};
btnW.onclick = function () {
  funW();
};
btnE.onclick = function () {
  funE();
};
btnR.onclick = function () {
  funR();
};
btnT.onclick = function () {
  funT();
};
btnY.onclick = function () {
  funY();
};
btnU.onclick = function () {
  funU();
};
btnI.onclick = function () {
  funI();
};
btnO.onclick = function () {
  funO();
};
btnP.onclick = function () {
  funP();
};

btnA.onclick = function () {
  funA();
};
btnS.onclick = function () {
  funS();
};
btnD.onclick = function () {
  funD();
};
btnF.onclick = function () {
  funF();
};
btnG.onclick = function () {
  funG();
};
btnH.onclick = function () {
  funH();
};
btnJ.onclick = function () {
  funJ();
};
btnK.onclick = function () {
  funK();
};
btnL.onclick = function () {
  funL();
};
btnNe.onclick = function () {
  funO();
};

btnZ.onclick = function () {
  funZ();
};
btnX.onclick = function () {
  funX();
};
btnC.onclick = function () {
  funC();
};
btnV.onclick = function () {
  funV();
};
btnB.onclick = function () {
  funB();
};
btnN.onclick = function () {
  funN();
};
btnM.onclick = function () {
  funM();
};

btnPunto.onclick = function () {
  funPunto();
};
btnComa.onclick = function () {
  funComa();
};
btnEnter.onclick = function () {
  btnEnterF();
};
btnEspacio.onclick = function () {};
