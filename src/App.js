import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Popular from "./Popular";
import AnimeItem from "./AnimeItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
