import { useEffect, useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 9999999; i++) {} //생각하는 시간 강제로 부여
  return number + 10000;
};
const easyCalculate = (number) => {
  console.log("쉬운 계산!");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  //const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  //const easySum = easyCalculate(easyNumber);
  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);

  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);
  // {
  //   country: isKorea ? "한국" : "외국",
  // };

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <>
      <div className="Calculate">
        <h2>어려운 계산기</h2>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <span> + 10000 = {hardSum}</span>
        <h2>쉬운 계산기</h2>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <span> + 1 = {easySum}</span>
      </div>
      <div className="Eat">
        <h2>하루에 몇끼 먹어요?</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="From">
        <h2>어느 나라에 있어요?</h2>
        <p>나라 : {location.country}</p>
        <button onClick={() => setIsKorea(!isKorea)}>비행기를 타자!</button>
      </div>
    </>
  );
}

export default App;
