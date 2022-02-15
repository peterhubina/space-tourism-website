import "./css/index.css";

import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Destination from "./components/Destination";
import Crew from "./components/Crew";

function App() {
  return (
    <>
      <Header />
      <Destination />
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/destination" component={Destination} />
        </Routes>
      </BrowserRouter>
      
      */}
    </>
  );
}

export default App;
