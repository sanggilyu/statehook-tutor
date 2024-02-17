import { useState } from 'react';

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  const Counter = () => {
    if (count === 5) {
      setIsIncreasing(false);
    } else if (count === 0) {
      setIsIncreasing(true);
    }

    if (isIncreasing) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div style={{backgroundColor:"orange", padding:"5px" }}>
      <h1>useState: {count}</h1>
      <button onClick={Counter}>useState</button>
    </div>
  );
}

