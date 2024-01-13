// Array의 참조값 복사
let numbers1 = [1,2,3]; // 주소값을 참조
let numbers2 = numbers1; // 같은 주소값을 참조

numbers2.push(4);

console.log(numbers1); // [1,2,3,4]
console.log(numbers2); // [1,2,3,4]

let numbers11 = [1,2,3]; // 주소값을 참조
let numbers22 = numbers11.slice(); // numbers11의 참조값을 새 배열로 복사함

numbers22.push(4);

console.log(numbers11); // [1,2,3,4]
console.log(numbers22); // [1,2,3,4]


// Object의 참조값 복사(안되는 예)
let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course2 = course1;

course2.title = '알고리즘의 정석';

console.log(course1); // {title:'알고리즘의 정석', language:'Python'}
console.log(course2); // {title:'알고리즘의 정석', language:'Python'}
// 객체가 담긴 변수를 다른 변수에 할당하면 복사가 아니라 같은 참조값을 바라보는
// 상태이므로 참조값이 변하면 둘다 변한다.


// Object의 참조값 복사
function cloneObject(object) { // for in 문이 담긴 함수 (복사당할 객체)
  let temp = {}; // 임시 저장
  for (let key in object) { // for in 문으로 복사 가능.
    temp[key] = object[key]; // 매개변수로 지정된 복사당할 객체를
    // 빈 temp 객체에 하나씩 할당
  }
  return temp; // 복사된 객체를 반환
}

let course11 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course22 = cloneObject(course11);
let course33 = cloneObject(course11);

course22.title = '자료 구조';
course33.title = '멘탈 관리 법';

console.log(course11); // {title:'파이썬 프로그래밍 기초', language:'Python'}
console.log(course22); // {title:'자료 구조', language:'Python'}
console.log(course33); // {title:'멘탈 관리 법', language:'Python'}