// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FIlterCard from "./components/FIlterCard";
import Mainhome from "./components/Mainhome";
import SingleCard from "./components/SingleCard";


function App() {
  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Mainhome />}/>
        <Route exact path="/games/:link" element={<SingleCard />}/>
        <Route exact path="/game/:name" element={<FIlterCard />}/>
      </Routes>
    </>
  );
}

export default App;
