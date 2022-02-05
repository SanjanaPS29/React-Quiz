import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useState,useEffect ,createContext} from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import ViewHighscores from "./components/pages/ViewHighscores";
import Result from "./components/pages/Result";


//export const userContext=createContext()
function App() {


// const addUsers=()=>{
// let newInput= {name: "sddd",score:40}
// this.setUsername({users: [...username,newInput]});
// }
// const valu={
// user:username,
// setUser:setUsername,
// addUser:addUsers
// }


  return (
    <Router>
    <div className="App">
 
  <Header/>
   <Routes>
      <Route path="highscore" element={<ViewHighscores/>} />
      <Route path="questions" element={<Questions />} />
      <Route path="result" element={<Result/>} />

      <Route path="/" element={<Home/>} />
      </Routes>

    </div>

    </Router>
  );
}


export default App;

