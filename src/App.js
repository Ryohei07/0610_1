import "./styles.css";

export default function App() {
  return (
    <>
      <p></p>
      <div className="inputA">
        <button
          className="startTime"
          onClick={function () {
            alert("click");
          }}
        >
          出社
        </button>
      </div>
      <div className="inputB">
        <button
          className="endTime"
          onClick={function () {
            alert("click");
          }}
        >
          退社
        </button>
      </div>
    </>
  );
}
