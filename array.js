let x = {
  numbers: [1,2,3,4],
  title: 'Codeit',
};
let y = x.numbers; // y = {numbers: [1,2,3,4]}
let z = x.title; // z = {title:'Codeit'}

x.numbers.unshift(5); // x = {numbers: [5, 1,2,3,4]}
x.title = 'Hello'; // x = {title:'Hello'}

console.log(y); // unshift로 참조관계인 배열의 요소를 바꿧으니 y도 변화가 있다.
console.log(z); // 'Hello'는 참조의 배열이 아닌 값 자체를 인스턴스에서 새로 할당했으므로 
// 이전에 할당된 z에는 영향이 없음 원시타입은 참조따윈 하지 않는 존나마이웨이 애들임 존나 원시적임