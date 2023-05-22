import UseMemoTest from "./UseMemoTest";
import UseCallTest from "./UseCallTest";
import "./App.css";

function App() {
  return (
    <ul>
      <li>
        <h2>UseMemo 예제</h2>
        <UseMemoTest />
      </li>
      <li>
        <h2>UseCallback 예제</h2>
        <UseCallTest />
      </li>
    </ul>
  );
}

export default App;
