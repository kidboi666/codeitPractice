let myVoca = {
  addVoca : function(key, value) {
    myVoca[key] = value;
  },
  deleteVoca : function(key) {
    delete myVoca[key];
  },
  printVoca : function(property) {
    console.log(`"${property}"의 뜻은 "${myVoca[property]}"입니다.`);
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');