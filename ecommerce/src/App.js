import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Featured from "./pages/Featured";
import Recommanded from "./pages/Recommanded";
import Error from "./pages/Error";
import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/featured" element={<Featured />}></Route>
        <Route path="/recommanded" element={<Recommanded />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
