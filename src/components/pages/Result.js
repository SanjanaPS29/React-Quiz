import React from "react";
import { useState, useEffect} from "react";
import { Container } from "../styles/Container.style";
import { useNavigate } from "react-router-dom";
import {ViewHighscores} from "./ViewHighscores";

function Result({highScore}) {
  // const u=useContext(userContext);
   const [name, setName] = useState("");
   const navigate = useNavigate();
   const[show,setShow]=useState(true);

// const {user, setUser,addUser}=u;
  const onSubmit = (e) => {
    e.preventDefault();
console.log(name)
// setShow(false);
     navigate("/");
  };
const goHome=()=>{
  navigate("/");
}

const goHighscores=()=>{
  navigate("/highscore")
}
  const onChange = (e) => {
    setName(e.target.value);
  };

    useEffect(() => {
    setShow(true);
  }, []);

  return (
<>
    <div style={{ display: show ? "none" : "block" }}>
   
        <Container>
              <h2>Highscores</h2>
              <p> 1. {name} - {highScore}</p>
              <button onClick={() => goHighscores()}>Go Back</button> 
             <button onClick={()=> goHome()}>Clear Highscores</button>
        </Container>
    </div>

    <div style={{ display:show?"block":"none" }}>
      <Container>
        <form>
          <h2>All done!</h2>

          <p>Your final score is {highScore}.</p>
          <label>Enter initails:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <button onClick={(e)=>onSubmit(e)}>Submit</button>
        </form>
      </Container>
    </div>

    </>
  );
}

export default Result;
