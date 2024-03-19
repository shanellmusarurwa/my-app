import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Pretoria" />
          <footer>
            This project was coded by Mitchelle Musarurwa and is on{" "}
            <a
              href="https://github.com/shanellmusarurwa/React-Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
