// typeof 연산자
console.log(typeof 'Hello' + 'Codeit'); // stringCodeit
console.log(typeof 8 - 3); // NaN

// typeof 연산자는 기본적으로 사칙연산자보다 연산 우선순위가 높다.
// 즉, typeof 8 - 3 은 (typeof 8) - 3 이 되기에 (number) - 3 = NaN
// 숫자가 아닌 값인 NaN가 나오는게 정상이다.
// 마찬가지로 typeof 'Hello' + 'Codeit' 또한 (typeof 'Hello') + 'Codeit' 이 되므로
// (string) + 'Codeit' 이 되어 스트링은 다른거에 붙으면 자동으로 형변환을 해주는 성질이 있기에
// 'stringCodeit'이 되어버린다.