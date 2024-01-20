import React, { useState } from 'react'

export default function Main() {

  // state : 리액트 컴포넌트에서 데이터를 보관하고 있는 공간
  //         컴포넌트를 리랜더링 하는 기준
  // state 선언 방법
  // const [상태변수명, 상태변경set함수] = useState<상태데이터타입>(초기값);
  const [count, setCount] = useState<number>(0);

  // 일반 변수를 변경시켜서 화면에 랜더링해도 바뀐 값을 볼 수 없음
  // let count = 0;
  
  const increaseCount = () => {
    // count++;
    // alert(count);

    // setCount(count + 1);     // 이렇게 하면 화면에서는 숫자가 증가하지만
    // alert(count);            // 알림은 증가하기 전 숫자를 보여줌

    const result = count + 1;   // 알림도 증가한 숫자를 보여주기위함
    setCount(result);
    alert(result);
  }

  return (
    <div style={{ margin : '20px' }}>
      {count}
      <button onClick={increaseCount}>+</button>
    </div>
  )
}
