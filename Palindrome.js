function isPalindrome(word) {

  // const firstWord = word[0];
  // const lastWord = word[word.length - 1];
  // console.log(firstWord);
  // console.log(lastWord);
  // const secondWord = word[1];
  // const lastSecondWord = word[word.length - 1 - 1];
  // console.log(secondWord);
  // console.log(lastSecondWord);
  // const thirdWord = word[2];
  // const lastThirdWord = word[word.length - 1 - 2];
  // console.log(thirdWord);
  // console.log(lastThirdWord);

  for (let i = 0; i <= Math.floor(word.length / 2); i++) {
    const left = word[i];
    const right = word[word.length - 1 - i];
    if (left !== right) {
      return false;
    };
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));