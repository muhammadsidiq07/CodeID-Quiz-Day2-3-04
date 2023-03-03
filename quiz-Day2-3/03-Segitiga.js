/** buat segitiga  */ 

for (let i = 0; i <= 3; i++) 
{
    let s = "";
    for(let j = 0; j <= 3 - i; j++)
    {
        s += (j + 1)+ " ";
    }
console.log(s);
} 

// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

for (let i = 5; i >=1; i--) {
    let s ="";
    for(let j = 1; j <= i; j++)
    {
     s += (i - j + 1)+ " ";
    }
    
    console.log(s);
 }

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

