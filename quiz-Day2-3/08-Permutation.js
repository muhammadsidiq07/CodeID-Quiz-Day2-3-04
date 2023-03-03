const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false

    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)

    if (stringOne.length !== stringTwo.length) {
      return false;
      }
     let myHash = {};
     for (let i = 0; i < stringOne.length; i++) {
       if (myHash[stringOne[i]]) {
       myHash[stringOne.charAt(i)]++;
       } else {
       myHash[stringOne.charAt(i)] = 1;
       }
     }
     for (let i = 0; i < stringTwo.length; i++) {
     myHash[stringTwo.charAt(i)]--;
     }
     for (i in myHash) {
       if (myHash[i] !== 0) {
       return false;
       }
     }
     return true;
    }
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;