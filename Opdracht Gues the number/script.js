// Stap 1/2
let userName = prompt("Welkom! Wat is je naam?");
// Vul naam in - Stap 3
if (userName != null) {
    alert ("Hey " + userName );
} 
console.log("Naam invullen");

// Stap 4
let i = prompt('Vul alsjeblieft een nummer in van 0 tot 25.');
let enterNumber = function () {
    return isNaN(i) || +i > 25 || +i < 0 ? enterNumber() : i;
}; 
console.log("Nummer invullen");

// Stap 5
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
};

const randomNumber = getRandomNumber(0, 25);
getRandomNumber();
console.log("Maak random nummer aan");
    //  Wat is het random nummer?
    alert(`Het random nummer was: ${RandomNumber}`);
    console.log("Wat is het random nummer?");

/*function age() {
    let age = prompt("Hallo, hoe heet jij?");
    if (age != null) {
    alert(`Leuk kennis met je te maken ${age}!`);}
    let number = prompt('Vul hier je nummer in om een leuke prijs te winnen!!');

   
function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
         
}  
    }
  
  //function getRandomInt(max) {
        //return Math.floor(Math.random() *  25); 
        //console.log(getRandomInt(25));*/


