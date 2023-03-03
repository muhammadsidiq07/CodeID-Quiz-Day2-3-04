
function isPalindrome(word){
  let len = word.length;
  let leftSide = word.slice(0, Math.floor(len/2));
  let rightSide = word.slice(Math.ceil(len/2), len).split('').reverse().join('');

  if (leftSide == rightSide) return true;
  return false;
}

console.log(isPalindrome('kasur ini rUsak'));//true
