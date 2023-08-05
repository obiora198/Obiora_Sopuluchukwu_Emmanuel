function randAlphaNum() {
const alphas = [ 'A', 'B', 'C', 'D', 'E', 'F']

const randAlpha = () => alphas[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
const randNum = () => Math.floor(Math.random() * 10);
const firstTwoAlph = randAlpha() + randAlpha();
const firstDigit = randNum();
const secDigit = randNum();
const lastTwoAlph = randAlpha() + randAlpha();
const thirdDigit = randNum();
const lastDigit = randNum();
const randChars = firstTwoAlph + firstDigit + secDigit + lastTwoAlph + thirdDigit + lastDigit;

return randChars;
}

// testing
console.log(randAlphaNum());