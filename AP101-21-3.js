const numbers =[0,1, 1, 2, 3, 5, 8, 13, 21];
let counter = 0;
while (counter < numbers.length - 1) {
    let i = counter;
    let goldenRatio = numbers[i + 1] / numbers[i];
    console.log(goldenRatio);
    counter += 1 ;
}