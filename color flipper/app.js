// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function getRandom() {
    let arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomAlphabet());
    return arr[Math.floor(Math.random() * arr.length)]
  }
  
  btn.addEventListener("click",  () => {
     let hex = "#"
     for(let i=0; i<6; i++) {
       hex += getRandom()
     }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
  });
