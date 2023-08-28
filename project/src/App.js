import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/countries" element={<Countries />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
