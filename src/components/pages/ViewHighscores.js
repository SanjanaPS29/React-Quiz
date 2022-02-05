import React from "react";
import { useEffect ,useState} from "react/cjs/react.development";
import { Container } from "../styles/Container.style";
import { List } from "../styles/ViewHighscores.style";
import { Link } from "react-router-dom";



function ViewHighscores() {

const [usernames,setUsername]= useState();

const clear=e=>{
  localStorage.clear();
  
}


useEffect(()=>{
const users= localStorage.getItem("users");
setUsername(JSON.parse(users))
},[]);

  return (
    <div>
      <Container>
        <h1>Highscores</h1>
        <ul>
          {usernames?.map((user, index) => (
            <List key={index}>
              {index + 1}. {user.name} - {user.score}
            </List>
          ))}
        </ul>
        <Link to="/">
          <button>Go Back</button>
        </Link>{" "}
        <button onClick={(e)=> clear(e)}>Clear Highscores</button>
      </Container>
    </div>
  );
}

export default ViewHighscores;
