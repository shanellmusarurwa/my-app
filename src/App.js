import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./Gallery";
import AnimeItem from "./AnimeItem";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
