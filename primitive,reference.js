// Primitive Type(원시형)
let x = 3; // x 라는 상자에 숫자값 3을 
let y = x; // x에 있는 값을 복사해서 새로 담음

console.log(x); // 3
console.log(y); // 3
y = 5;
console.log(x); // 3
console.log(y); // 5


// Reference Type(참조형)
let xx = {name: 'Codeit'}; // 객체를 xx에 참조값으로
let yy = xx; // xx가 바라보는 참조값을 yy도 같이 바라보게 함 

console.log(x); // {name: 'Codeit'}
console.log(y); // {name: 'Codeit'}
y.birth = 2017;
console.log(x); // {name: 'Codeit', birth: 2017}
console.log(y); // {name: 'Codeit', birth: 2017}


let xxx = [1,2,3];
let yyy = xxx;

console.log(xxx); // [1,2,3]
console.log(yyy); // [1,2,3]
yyy[2] = 4;
console.log(xxx); // [1,2,4]
console.log(yyy)  // [1,2,4]