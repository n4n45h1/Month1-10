/* Math.xx学ぼう*/
import './App.css';
import {useState} from 'react';

export default function Counter(){
  const [count,setCount] = useState(0)
   return(
     <div className="counter-box">
       <p>クリックした回数: {count}</p>
       <button className="btn" onClick={()=> setCount((count) => count+1)}>+1</button>
       <button className="btn" onClick={()=>setCount((count)=> Math.abs(count))}>絶対値</button>
       <button className="btn" onClick={()=>setCount((count)=> Math.sqrt(count))}>平方根</button>
       <button className="btn"onClick={()=>setCount((count)=> count*count)}>2乗</button>
     </div>
   )
}
