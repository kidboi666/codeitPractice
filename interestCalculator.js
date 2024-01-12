// 여기에 코드를 작성하세요
function interestCalculator(rate, payment, term) {
  let month = payment * term * (term + 1);
  let rateResult = month / 2 * rate / 12;
  console.log(Math.round(rateResult));
}


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);

//월납입금 x 납입개월수 x (납입개월수 + 1) / 2 x 이자율 / 12