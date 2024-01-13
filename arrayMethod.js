// 배열의 메소드 (array's method)
const members = ['허미진','김지유','한지원'];
console.log(members);

// 배열의 요소 조작 : splice(startIndex, deleteCount, item)
members.splice(2, 2, 'maumno', '산토끼');
// 배열의 첫 요소를 삭제 : shift
members.splice(0, 1);
// 배열의 마지막 요소를 삭제 :
members.splice(members.length - 1, 1);
// 배열의 첫 요소로 값 추가 :
members.splice(0, 0, '치호');
// 배열의 마지막 요소로 값 추가 :
members.splice(members.length - 1, 0, '후추추');


const members2 = ['허미진','김지유','한지원'];
console.log(members2);

// 배열의 첫 요소를 삭제 : shift()
members2.shift();
console.log(members2); // ['김지유','한지원']
// 배열의 마지막 요소를 삭제 : pop();
members2.pop();
console.log(members2); // ['김지유']
// 배열의 첫 요소로 값 추가 : unshift(item);
members2.unshift('허미진');
console.log(members2);
// 배열의 마지막 요소로 값 추가 : push(item);
members2.push('한지원');
console.log(members2)
