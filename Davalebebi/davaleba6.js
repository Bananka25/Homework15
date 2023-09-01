const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

let newArr = [];

function rotate(arr, steps) {
  for ( i = 0; i < arr.length; i++ ) {
    if(i + steps < arr.length) {
      newArr.push(array[i + steps]);
    } else {
      newArr.push(array[i+steps-arr.length]);
    }
  }
};

rotate(arr, 5);

alert(newArr);