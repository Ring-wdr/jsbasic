console.log(2**3**2);
// console.log(2**(3**2));

console.log(2 + 3 % 2); // 2 + (3%2) == 2 + 1
console.log(2 - 3 % 2); // 2 - (3%2) == 2 - 1
console.log(3 * 3 % 7); // 
console.log(3 % 3 * 7); // 
console.log(2 / 3 % 2); // 
console.log(3 ** 3 % 5);
console.log(2 ** 3 * 2);
// ** : * / : % :  + -

f1 = (a, b, c) => {
    // plus
    let str = '';
    let arr = ['+','-','*','/','**'];
    let xxx = 0;
    if ((a + b % c) == ((a + b) % c)){
        xxx = 1;
    } else if ((a - b % c) == ((a - b) % c)){
        xxx = 2;
    } else if ((a * b % c) == ((a * b) % c)){
        xxx = 3;
    } else if ((a / b % c) == ((a / b) % c)){
        xxx = 4;
    } else if ((a ** b % c) == ((a ** b) % c)){
        xxx = 5;
    }
    for (let i = 0; i < xxx; i++) str += arr[i] + " < ";
    str += '%';
    for (let j = xxx; j < 5; j++) str += " < " + arr[j];
    console.log(str);
}

console.log(f1(6,7,5));