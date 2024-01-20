import { useEffect, useState } from 'react';
import './App.css';
import TestComponent, { testVariable } from './components/TestComponent';
import './style.css';
import Footer from './views/Layout/Footer';
import Header from './views/Layout/Header';
import Main from './views/Layout/Main';

function App() {

  const [count, setCount] = useState<number>(0);

  // let count = 0;

  const increaseCount = () => {
    // count++;
    const result = count + 1;
    setCount(result)
    // alert(result);
  }

  // useEffect : 함수형 컴포넌트가 react DOM 마운트되고 (화면에 출력되고)
  //             호출되는 함수
  // useEffect(콜백함수, 배열);

  let flag = false;

  // 1. 첫 랜더링 직후 실행할 코드를 지정 (두 번 실행)
  useEffect(() => {
    // useEffect를 한번만 실행하게 도와주는 로직
    if (!flag) {
      flag = true;
      return;
    }
    // alert('useEffect 실행!');
  }, []);
  
  // 2. 특정 상태가 변경된 후 실행할 코드를 지정
  useEffect(() => {
    // 주의사항 : 해당 useEffect로 스코프하고 있는 상태를 내부에서 변경하면 무한 호출됨
    // setCount(count + 1);
    // alert('count 상태 변경');
  }, [count]);

  // 3. 화면이 종료될때 실행할 코드를 지정
  useEffect(() => {
    return () => {
      // alert('화면 종료');
    }
  }, []);

  return (
    <>
      {/* 
        // <TestComponent arg1={'문자열'} /> 
        // <TestComponent arg1={'문자열'} arg2={100} />
      */}
      <button onClick={increaseCount}>+</button>
      <Header count={count}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
