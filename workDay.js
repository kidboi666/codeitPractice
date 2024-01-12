let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  let result = today - jaeSangStart; // 밀리미터세컨즈로 끝날에 시작날을 빼고
  let second = result / 1000; // 밀리미터세컨즈를 날리고 초단위로 나누고
  let minute = second / 60; // 다시 분단위로 나누고 
  let hour = minute / 60; // 다시 시간 단위로
  let day = hour / 24; // 하루 단위로
  console.log(`오늘은 입사한 지 ${day + 1}일째 되는 날 입니다.`)
}

workDayCalc(jaeSangStart);