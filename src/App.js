import "./App.css";
import DrawButton from "./components/UI/DrawButton";

function App() {
  return (
    <div style={{ width: "80%", margin: "0px auto" }}>
      <div style={{ margin: "0px auto" }}>
        <div>
          <select style={{ float: "right" }}>
            <option>KOR</option>
            <option>ENG</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "30px",
          }}
        >
          추천 유형
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "30px",
          }}
        >
          거리 0m - 10km
        </div>
        <div>
          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              border: "1px, solid",
              borderRadius: "5px",
            }}
          >
            ❌
          </button>
          <button
            style={{
              float: "right",
              backgroundColor: "rgba(255, 255, 255, 0)",
              border: "1px, solid",
              borderRadius: "5px",
            }}
          >
            ⭐
          </button>
        </div>
        <h1>img 추천 유형에 맞춰 배경색 다르게하자.</h1>
        <DrawButton>추천받기</DrawButton>
        <button style={{ float: "center" }} className="todayBtn">
          <input type="checkbox" value="오늘은 보지 않기" />
          오늘은 보지 않기
        </button>
      </div>
    </div>
  );
}

export default App;
