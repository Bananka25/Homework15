let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 2];

let result = {};
for (let i = 0; i < arr.length; ++i) {
  let a = arr[i];
  if(result[a] !== undefined){
    ++result[a];
  } else {
    result[a] = 1;
  }
}

for (var key in result){
  document.write('number ' + key + ' : ' + result[key] + ' times <br>');
}