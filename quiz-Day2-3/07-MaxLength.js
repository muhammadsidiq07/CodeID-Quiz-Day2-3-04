function maxWordLength(params) {
   let word = params.split(" ");
   let size = 0;
   let max = [""];

   for (let i = 0; i < word.length; i++){
    if (word[i].length >= size){
        size = word[i].length;
        if (max[max.length -1].length < word[i].length){
            max = [];
            max.push(word[i]);

        }else{
            max = [...max, word[i]];
        }
    }
   }
   return [...max];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp