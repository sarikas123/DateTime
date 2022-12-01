import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Date and Time</h1>
      <ABC />
    </div>
  );
}

function ABC() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <p>Today's date is : {date}</p>
      <p>Time is :{time} </p>
    </div>
  );
}
