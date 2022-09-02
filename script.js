function sum(...numbers) {
    let numberSum = 0;
    for (let elements of numbers) {
      if (elements > 0) {
        numberSum = numberSum + elements;
      }
    }
    
    console.log(numberSum);
  }
  
  sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);