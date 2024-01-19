function JavaScriptBasic () {

  // 주석 //
  /*
   * 여러 줄 주석
   */

  // 변수 : js의 경우 변수의 타입이 존재하지 않음
  // js / ts 에서 변수를 선언하는 방법
  // 1. var 키워드 사용
  var variable1;
  variable1 = 10;
  variable1 = 11.1;
  variable1 = "안녕하세요,";

  // 지역함수도 함수 밖에서 사용이 가능하기 때문에 var은 쓰이지 않음
  // localVariable = 10;
  // if (true) {
  //   var localVariable;
  // }
  // localVariable = 10;

  // 2. let 키워드 사용
  let variable2;
  variable2 = 10;
  variable2 = 10.2;

  // 블럭 함수라고 해서 지역함수는 함수 밖에서 사용하지 못함
  // if (true) {
  //   let localVariable;
  // }
  // localVariable = 10;

  // 3. const : 상수 (Java와 다르게 선언시에 반드시 초기화 해야함)
  const constantVariable = 10;

  // 4. ts 변수 선언
  let tsVariable1 = 10;
  // tsVariable = "안녕하세요."

  let tsVariable2: string;
  // tsVariable2 = 10;
  tsVariable2 = "안녕하세요.";

  let tsVariable3: String = "안녕하세요."; // 이게 정석

  // 데이터 타입
  // number : 숫자 타임 (정수, 실수, 10진수, 16진수, ...)
  let numberVariable: number = 10;
  numberVariable = 10.1;
  numberVariable = 0xff;

  // boolean : 논리 타입
  let booleanVariable: boolean = true;
  let booleaVariable = false;

  // string : 문자열 타입
  let stringVariable1: string = "문자열"; // 객체형
  let stringVariable2: String = "문자열"; // 참조형
  // stringVariable1 = stringVariable2;

  // array : 배열 타입
  let numberArray: number[] = [1, 2];
  // numberArray = [true, false];

  // object : 객체 타입
  let object: any = {
    name: "홍길동",
    age: 30
  }

  object = {
    name: "홍길동",
    age1: 30
  }

  // null : 갑이 지정되지 않은 타입
  object = null; 
  let nullVariable: null = null;

  // stringVariable3은 string 또는 null 또는 number 타입이다.
  let stringVariable3: string | null | number = null;
  stringVariable3 = "문자열";
  stringVariable3 = 10;

  // undefined : 정의되지 않은 타입
  let undefinedVariable: undefined = object.address;

  // any : 모든 타입을 받을 수 있는 타입
  let anyVariable: any = 10;
  anyVariable = "문자열";

  // 연산자
  let result: any = 10 / 3;   // 3.33333...
  
  let number1: any = 10;
  let number2: any = "10";

  result = number1 == number2;  // true (타입은 고려하지 않음)
  result = number1 === number2; // false(타입도 같이 고려하여 비교함)

  result = number1 != number2;  // false(타입은 고려하지 않음)
  result = number1 !== number2; // true (타입도 같이 고려하여 비교함)

  return (<></>)
  
  return (<></>);

}

export default JavaScriptBasic;

