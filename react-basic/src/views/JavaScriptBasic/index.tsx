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

  return (<></>)
  
  return (<></>);

}

export default JavaScriptBasic;

