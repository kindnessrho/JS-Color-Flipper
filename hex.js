// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const numbers = "0123456789";
const alphabets = "abcdef";


// These two functions will generate random colors
function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomAlphabet() {
  return alphabets[Math.floor(Math.random() * alphabets.length)]
}




