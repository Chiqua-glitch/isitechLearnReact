import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import ClientForm from "./pages/ClientForm";
import FreelanceForm from "./pages/FreelanceForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survey/:question" element={<Survey />}></Route>
        <Route path="/client" element={<ClientForm />} />
        <Route path="/freelance" element={<FreelanceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
