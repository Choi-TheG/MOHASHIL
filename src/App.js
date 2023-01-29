import "./App.css";

function App() {
  return (
    <div>
      <div style={{ border: 1 }}>
        <div>
          <button>❌</button>
          <button>⭐</button>
        </div>
        <select>
          <option>cafe</option>
          <option>activity</option>
          <option>food</option>
          <option>alcohol</option>
        </select>
        <h1>img</h1>
        <button>랜덤추천</button>
        <br />
        <button>다시 추천 / 오늘은 보지 않기</button>
      </div>
    </div>
  );
}

export default App;
