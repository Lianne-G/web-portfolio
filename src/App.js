import "./App.css";
import { Navigate,Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element=<Home /> />
      </Routes>
    </div>
  );
}

export default App;
