let a = 1; // 5
let b = 1; // 8
let c = 1; // 13
console.log(a)
console.log(b)
for (let i = 1; i < 49; i++) {
  a = b; // 
  b = c; // 
  c = a; // 
  console.log(`${a + b}`);
  c = a + b; // 13
}
