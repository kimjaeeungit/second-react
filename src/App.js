import './App.css';
import Box from './component/Box';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let count2 = 0;
  const increase = () => {
    count2 = count2 + 1;
    setCount(count + 1);
    console.log(count, count2);
  };

  // 1.유저가 버튼을 클릭한다.
  // 2.count2+1 해서 1이 됨
  // 3.setState함수 호출한다.
  // 4.console.log()가 실행됨.
  // 5.변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전의 값이 보인다.
  // 6.함수끝
  // 7.app 다시 re render
  // 8.let count2=0을 거치면서 count2값은 다시 0으로 초기화가 된다.
  // 9.state값은 update가 되면서 다시 re render를 한다.

  return (
    <div>
      <div>
        <Box name="리사" num="1" />
        <Box name="제니" num="2" />
        <Box name="지수" num="3" />
        <Box name="로제" num="4" />
      </div>
      <h3>state:{count}</h3>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
