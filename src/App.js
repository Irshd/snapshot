import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mountain from "./components/Mountain";
import Beaches from "./components/Beaches";
import Food from "./components/Food";
import Birds from "./components/Birds";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="mountain" element={<Mountain />} />
          <Route path="beaches" element={<Beaches />} />
          <Route path="birds" element={<Birds />} />
          <Route path="food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
