function randAlphaNum() {
const alphas = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]

const randAlpha = () => alphas[Math.floor(Math.random() * (25 - 0 + 1)) + 0];
const randNum = () => Math.floor(Math.random() * 10);
const firstTwoAlph = randAlpha() + randAlpha();
const firstDigit = randNum();
const secDigit = randNum();
const lastTwoAlph = randAlpha() + randAlpha();
const thirdDigit = randNum();
const lastDigit = randNum();

return firstTwoAlph + firstDigit + secDigit + lastTwoAlph + thirdDigit + lastDigit;
}

// testing
console.log(randAlphaNum());