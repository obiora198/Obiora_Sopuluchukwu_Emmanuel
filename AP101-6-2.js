function average(array) {
    const arraySum = array.reduce((a,b)=>{
        return a+b;
    },0);
    const average = arraySum / array.length;
    return average;
}

console.log(average([1,2,3,4]));