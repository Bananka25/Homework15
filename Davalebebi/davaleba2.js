let n = prompt('Set a positive number')

function factorial(n){
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(n) );