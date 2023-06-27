const { logPlugin } = require("@babel/preset-env/lib/debug");

let arr1 = ["Hope","Prince", "Aisha"]
function writeCards(array, name) {
    let newArrays =[];
    for (let i= 0; i < array.length; i++) {
      let emptyArray =`Thank you, ${array[i]}, for the wonderful ${name} gift!`;
      newArrays.push(emptyArray);
    }
    return newArrays;
  }
  console.log(writeCards(arr1, "house"));



  function loopingDown() {
    for(i=10;i>=0;i--) {
      console.log(i);
    }
  }
  console.log(loopingDown());



