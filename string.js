// String
let myString = 'Hi Codeit';

// 부분 문자열 접근 slice(start, end);
console.log(myString.slice(0, 2)); // 0번부터 2번 직전까지의 문자열을
console.log(myString.slice(3)); // 3번부터 끝까지 문자열을 리턴
console.log(myString.slice()); // 전부

// 양 끝 공백 제거
console.log(myString.trim()); // trim 메소드

//대소문자 변환
console.log(myString.toUpperCase()); // 문자열을 전부 대문자로
console.log(myString.toLowerCase()); // 문자열을 전부 소문자로

//요소 탐색
console.log(myString.indexOf('i')); // 앞부터 없는값은 -1
console.log(myString.lastIndexOf('i'));

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메서드

// 문자열 길이
console.log(myString.length); // length 프로퍼티