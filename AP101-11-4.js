const array = [6,7,8,0,5,7,4,3,6,3,5,6,1,2,0,9,8];
const filtered = array.filter((i) => i >= 5).sort((a,b) => b - a);
console.log(filtered);