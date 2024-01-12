// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};


// votes 배열을 이용해서 voteCounter 객체를 정리하기
const first = '이재식';
const second = '이규하';
voteCounter['이재식'] = 0;
voteCounter['이규하'] = 0;
for (let name of votes) {
  if (name === first) {
    voteCounter['이재식'] += 1;
  } else if (name === second) {
    voteCounter['이규하'] += 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);