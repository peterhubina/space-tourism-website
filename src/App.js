import "./css/index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
