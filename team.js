let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성하세요
// teams[0].push(groups[0][0])
// teams[0].push(groups[1][0])
// teams[0].push(groups[2][0])
// teams[0].push(groups[3][0])
// teams[0].push(groups[4][0])
// teams[1].push(groups[0][1])
// teams[1].push(groups[1][1])
// teams[1].push(groups[2][1])
// teams[1].push(groups[3][1])
// teams[1].push(groups[4][1])

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    teams[i].push(groups[j][i])
  }
}


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);