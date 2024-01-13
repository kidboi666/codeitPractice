// Date
const myDate = new Date();

console.log(myDate);
//Sat Jan 13 2024 15:29:16 GMT+0900 (한국 표준시)
//요일 월 일 연    시간      시간대

let myDate2 = new Date(1000);
console.log(myDate2);
//Thu Jan 01 1970 09:00:01 GMT+0900 (한국 표준시)
//                (+1000밀리초)

let myDate3 = new Date('2017-05-18');
console.log(myDate3);
//Thu May 18 2017 09:00:00 GMT+0900 (한국 표준시)

let myDate4 = new Date('2017-05-18T20:10:50');
console.log(myDate4)
//Thu May 18 2017 20:10:50 GMT+0900 (한국 표준시)

let myDate5 = new Date(YYYY, MM, DD, hh, mm, ss, ms);
//                     년도와 월까지는 필수값 (월 수는 0부터 시작)

let myDate6 = new Date(2021, 0, 20, 19, 11, 16);
let today = new Date();

let timeDiff = today.getTime() - myDate6.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');
console.log(timeDiff / 1000 / 60 / 60 / 24 + '일');


// Date.getTime()
let myDate7 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate7.getFullYear()); // 2017
console.log(myDate7.getMonth()); // 4 (월은 0부터)
console.log(myDate7.getDate()); // 18 (일자)
console.log(myDate7.getDay()); // 4 (요일 일요일부터 0~6)
console.log(myDate7.getHours()); // 19
console.log(myDate7.getMinutes()); // 11
console.log(myDate7.getSeconds()); // 16
console.log(myDate7.getMilliseconds()); // 0


let myDate8 = new Date();

console.log(myDate8.toLocaleDateString()); 
// myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate8.toLocaleTimeString()); 
// myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate8.toLocaleString()); 
// myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일)


let myDate9 = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다

// 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
console.log(myDate9) // Mon Feb 01 1988 00:00:00


// Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환합니다. 이렇게 하면 새로운 객체를
// 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것이죠! 
let myDate10 = new Date();

console.log(Date.now() === myDate10.getTime()); // true