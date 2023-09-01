let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 2];

function disctinct(arr) {
  let dist = [];
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    if (dist.indexOf(e) === -1){
      dist.push(e);
    }
  }
  return dist;
}

alert(disctinct(arr));