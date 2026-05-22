import { useState } from 'react';
import './App.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}> +1 </button>
      <button onClick={() => setCount((count) => count - 1)}> -1 </button>
      <button onClick={() => setCount((count) => count * 2)}> x2 </button>
      <button onClick={() => setCount(0)}> リセット </button>
      <button onClick={() => setCount((count) => Math.abs(count))}> 絶対値 </button> 
      {// react楽しいわ}
    </div>
  );
}
