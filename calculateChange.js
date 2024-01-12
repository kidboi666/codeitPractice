function calculateChange(payment, cost) {
  let calc = payment - cost;
  let 오만원권 = 0;
  let 만원권 = 0;
  let 오천원권 = 0;
  let 천원권 = 0;
  for (let i = calc; calc >= 50000;) {
    calc = calc - 50000;
    오만원권 += 1;
  }
  console.log(`50000원 지폐: ${오만원권}장`);
  for (let i = calc; calc >= 10000;) {
    calc = calc - 10000;
    만원권 += 1;
  }
  console.log(`10000원 지폐: ${만원권}장`);
  for (let i = calc; calc >= 5000;) {
    calc = calc - 5000;
    오천원권 += 1;
  }
  console.log(`5000원 지폐: ${오천원권}장`);
  for (let i = calc; calc >= 1000;) {
    calc = calc - 1000;
    천원권 += 1;
  }
  console.log(`1000원 지폐: ${천원권}장`)
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);