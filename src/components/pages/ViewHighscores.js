import React from "react";
import { useEffect ,useState} from "react/cjs/react.development";
import { Container } from "../styles/Container.style";
import { List } from "../styles/ViewHighscores.style";
import { Link } from "react-router-dom";



function ViewHighscores() {

const [usernames,setUsername]= useState();
// setUsername([
//   {
//     name: "san",
//     score: 54,
//   },
//   {
//     name: "san",
//     score: 54,
//   },
// ]);

// const setname=(name,score)=>{
// const newInp={name:name,score:score}
//   setUsername(...usernames,newInp)
// }

 

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
        <button>Clear Highscores</button>
      </Container>
    </div>
  );
}

export default ViewHighscores;
