import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Searchbar from "./components/common/Searchbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
   <div>
    
    <Navbar/>

    <Searchbar/>

    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
   </div>
  );
}

export default App;
