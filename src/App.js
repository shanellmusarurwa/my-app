import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Popular from "./Popular";
import AnimeItem from "./AnimeItem";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
