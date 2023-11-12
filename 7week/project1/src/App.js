import './App.css';
import { useRef, useEffect, useState } from "react";
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';

function App() {

  const[count, setCount] = useState(0);
  const[text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const didMountRef = useRef(false); //마운트 했는지 판단하는 변수(Ref 객체로 생성)

  useEffect(() => { // 마운트 시점에 '컴포넌트 업데이트' 문자열 출력하지 않도록 하는 조건문
    if(!didMountRef.current){ // 처음 마운트니?
      didMountRef.current = true; //엉 마운트야
      return;
    } else{
      console.log("컴포넌트 업데이트"); //true니까 마운트 시점아니야 -> 리렌더구나
    }
  });

  useEffect(() => { 
    console.log("컴포넌트 마운트");
  }, []);


  return (
    <div className="App">
  
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count = {count}/> 
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;