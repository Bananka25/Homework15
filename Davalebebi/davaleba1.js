let arr = [5, 4, 12, 6, 13, 14, 6654, 2341, 10000];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max){
    max = arr[i];
  };
};

alert(max);