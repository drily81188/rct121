// import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import "./App.css";
import { Rest } from "./Components/Rest";

function App() {
  // const [count, setCount] = useState(0)
  // console.log(1)
  // useEffect(() => {
  //   console.log(3)
  // },[])
  return (
    <div className="App">
      <Rest />
      {/* <button onClick={() => {
        setCount(count+1)
      }}
      >counter : {count}</button> */}
    </div>
  );
}

export default App;
