function reverseStr(str) {
  let reverse = '';

  for ( i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

alert(reverseStr('The quick brown fox jumped over the lazy dog'));