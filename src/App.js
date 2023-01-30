import "./App.css";
import DrawButton from "./components/UI/DrawButton";

function App() {
  return (
    <div>
      <div style={{ border: 1 }}>
        <div>
          <button>❌</button>
          <button style={{ float: "right" }}>⭐</button>
        </div>
        <div>
          <input type="radio" name="category" />
          카페
          <input type="radio" name="category" />
          놀거리
          <input type="radio" name="category" />
          음식
          <input type="radio" name="category" />
          주점
          <input type="radio" name="category" />
          배달
        </div>
        <select>
          <option>cafe</option>
          <option>activity</option>
          <option>food</option>
          <option>alcohol</option>
          <option>delivery</option>
        </select>
        <h1>img</h1>
        <DrawButton>랜덤추천</DrawButton>
        <input type="checkbox" value="오늘은 보지 않기" />
        오늘은 보지 않기
      </div>
    </div>
  );
}

export default App;
