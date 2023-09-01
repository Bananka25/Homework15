function countWordString(str) {
  let counter = 1;

  str = str.replace(/[\s]+/gim, ' ');
  str.replace(/(\s+)/g, function(a) {
    counter++;
  });

  return counter;
}

alert(countWordString('The quick brown fox jumped over the lazy dog'));