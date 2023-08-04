let fristTerm = 0;
let secondTerm = 1;
let nextTerm = 0;


for (let i = 1; i < 20; i++) {
    nextTerm = fristTerm + secondTerm;
    fristTerm = secondTerm;
    secondTerm = nextTerm;
}

console.log(nextTerm);
