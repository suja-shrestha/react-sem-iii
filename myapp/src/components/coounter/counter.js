import { useState } from "react";

function Counter() {  
  const [data, setData] = useState(1);
  
  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => setData(data+1)}>Increase</button>
      <button onClick={()=> setData(data-1)}>Decrease</button>
      <button onClick={()=> setData(data*2)}>Multiply</button>
      <button onClick={()=>setData(data/2)}>Divide</button>
    </>
  );
}

export default Counter;
