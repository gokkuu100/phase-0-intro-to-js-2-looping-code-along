function writeCards(array, name) {
    let newArrays =[];
    for (let i= 0; i < array.length; i++) {
      let emptyArray =`Thank you, ${array[i]}, for the wonderful ${name} gift!`;
      newArrays.push(emptyArray);
    }
    return newArrays;
  }
  console.log(writeCards(["Hope","Prince"], "house"));



function countDown(i) {
    let a = 0;
    while (a<=i) {
        console.log(a);
        a++;
    }
}



