
function showPrimeNumber(n){
  let bilanganPrima = isPrime(n)
  let hasil = '';

  for(let i = 0; i<bilanganPrima.length; i++){
      hasil += `${bilanganPrima[i]} `
      if((i+1)%5===0){
          hasil += `\n`
      }

  }
  return hasil;
}

function isPrime(n){
  let bilanganPrima = [];
  for (let i = 2; i <= n; i++) {
      let prima = true
      for (let a = 2; a <= Math.sqrt(i); a++){
          if(i%a===0){
              prima = false
              break;
          }
      }
      if(prima){
          bilanganPrima.push(i);
      }
  }
  return bilanganPrima;

}

console.log(isPrime(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


