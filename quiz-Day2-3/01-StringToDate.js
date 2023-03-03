/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    let newDate = new Date(s)
    if(isNaN(newDate.getDate())===true || isNaN(newDate.getMonth())===true || isNaN(newDate.getFullYear())===true){
        return `${s} bad format date`;
    }else{
        return newDate;
    }
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date