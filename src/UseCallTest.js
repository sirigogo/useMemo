import { useEffect, useState, useCallback } from "react";
import Box from "./Box";
const UseCallTest = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc : nmumber : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunc이 변경되었습니다!");
  }, [someFunction]);

  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <>
      <div>
        <h6>늘어나는 숫자</h6>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
        <button onClick={someFunction}>Call someFunc</button>
      </div>
      <div
        style={{
          background: isDark ? "black" : "white",
        }}
      >
        <h6>box 늘리기</h6>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={() => setIsDark(!isDark)}>change Theme</button>
        <Box createBoxStyle={createBoxStyle} />
      </div>
    </>
  );
};
export default UseCallTest;
