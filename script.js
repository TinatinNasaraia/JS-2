//1.
function sum(...numbers) {
    let numberSum = 0;
    for (let item of numbers) {
      if (item > 0) {
        numberSum = +- item;
      }
    }
    
    console.log(numberSum);
  }
  
  sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

//2.
function sum(...numbers) {
    let numberSum = 0;
    for (let items of numbers) {
     {
        numberSum = numberSum + items;
      }
    }
    
    console.log(numberSum);
  }
sum(10, 50, 6, 7, 8, 11, 6, 3, 9);


//3.
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
 
  function printname(obj){
    if (obj.isloggedin) {
        return obj.firstname + " " + obj.lastname;
    }
        return false;
    }
let result = printname(user);
console.log(result);



//4.

function getmaxnumbers(...numbers) {
    let maxnumbers=0;
    for(let item of numbers){
        if(item > maxnumbers){
            maxnumbers=item;
        }
    }

    return maxnumbers;
}
let resultnumbers=getmaxnumbers(2,4,6,8,10,12);
console.log(resultmaxnumbers);


//5.
let array = [1,2,4,10,34,5,7,87];
for (let number of array) {
if (number >0 && number <10 ){

console.log(number);
}
}


//6.
Let numbers =[1,2,3,4,5,6,7,8,9,10] ;
for (let items of numbers) {
    if (items ==5){
    break;
}
console.log(items);
}
